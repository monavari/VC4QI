// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect, beforeEach } from 'vitest';
import {
  isTrustedIssuer,
  resolveTrustRegistry,
  verifyTrustRegistryCredential,
  clearRegistryCache,
  TrustRegistryVerificationError,
  type VerifiedTrustRegistry,
} from '../src/trust-registry/index.js';
import { createProof } from '../src/proofs/index.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';
import type { Ed25519KeyPair, JsonObject } from '../src/types.js';
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';

// noble/ed25519 v2 requires sha512 to be wired up
ed.etc.sha512Sync = (...m: Parameters<typeof sha512>) => sha512(...m);

const ISSUER_DID = 'did:web:accreditor.example.com';
const ENTRY_DID = 'did:web:cal.example.com';

async function makeKeyPair(): Promise<Ed25519KeyPair> {
  const privateKey = new Uint8Array(32).fill(0x42);
  const publicKey = await ed.getPublicKeyAsync(privateKey);
  return {
    id: `${ISSUER_DID}#key-1`,
    controller: ISSUER_DID,
    privateKey,
    publicKey,
  };
}

const keyPair = await makeKeyPair();
const resolveKey = async () => keyPair.publicKey;
// Resolves qi-core and the vendored W3C contexts from disk, so canonicalization
// is deterministic and offline.
const documentLoader = buildDocumentLoader({});

// qi-core must be in scope or URDNA2015 silently drops registryEntries and the
// proof would not cover the entries at all — see the coverage test below.
function unsignedRegistry(entries: JsonObject[]): JsonObject {
  return {
    '@context': [
      'https://www.w3.org/ns/credentials/v2',
      'https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld',
    ],
    type: ['VerifiableCredential', 'TrustRegistryCredential'],
    id: 'https://accreditor.example.com/.well-known/trust-registry.json',
    issuer: ISSUER_DID,
    validFrom: '2024-01-01T00:00:00Z',
    credentialSubject: {
      id: ISSUER_DID,
      registryEntries: entries,
    },
  };
}

/** A genuinely signed TrustRegistryCredential. */
async function signedRegistry(entries: JsonObject[]): Promise<JsonObject> {
  const document = unsignedRegistry(entries);
  const proof = await createProof(document, keyPair, { created: '2025-01-01T00:00:00Z', documentLoader });
  return { ...document, proof };
}

/** Verify and return the registry, for tests that need a VerifiedTrustRegistry. */
async function verifiedRegistry(entries: JsonObject[]): Promise<VerifiedTrustRegistry> {
  return verifyTrustRegistryCredential(await signedRegistry(entries), { resolveKey, documentLoader });
}

// ---------------------------------------------------------------------------
// SEC-1: no trust decision on an unverified document.
// These are the negative vectors. Each one asserts that the registry is
// rejected with a code naming the specific condition (SEC-8), never that it is
// silently accepted or downgraded to a warning.
// ---------------------------------------------------------------------------

describe('verifyTrustRegistryCredential (SEC-1)', () => {
  it('verifies a correctly signed registry and reports its provenance', async () => {
    const registry = await verifiedRegistry([{ id: ENTRY_DID, name: 'Test Lab' }]);

    expect(registry.entries).toHaveLength(1);
    expect(registry.entries[0]!.id).toBe(ENTRY_DID);
    // DOC-1: the trace must be able to say which registry and which key.
    expect(registry.registryIssuer).toBe(ISSUER_DID);
    expect(registry.verificationMethod).toBe(`${ISSUER_DID}#key-1`);
    expect(registry.contentDigest).toMatch(/^[0-9a-f]{64}$/);
  });

  it('rejects a registry whose entries were tampered with after signing', async () => {
    const document = await signedRegistry([{ id: ENTRY_DID }]);
    // The exact attack SEC-1 exists to stop: insert an issuer into a registry
    // that was signed without it.
    (document.credentialSubject as JsonObject).registryEntries = [
      { id: 'did:web:attacker.example.com' },
    ];

    await expect(verifyTrustRegistryCredential(document, { resolveKey, documentLoader }))
      .rejects.toThrow(TrustRegistryVerificationError);
    await expect(verifyTrustRegistryCredential(document, { resolveKey, documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_PROOF_INVALID' });
  });

  it('rejects a registry carrying no proof at all', async () => {
    await expect(verifyTrustRegistryCredential(unsignedRegistry([{ id: ENTRY_DID }]), { resolveKey, documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_PROOF_MISSING' });
  });

  it('rejects an unrecognized cryptosuite rather than falling through (SEC-9)', async () => {
    const document = await signedRegistry([{ id: ENTRY_DID }]);
    (document.proof as JsonObject).cryptosuite = 'made-up-2024';

    await expect(verifyTrustRegistryCredential(document, { resolveKey, documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_SUITE_UNSUPPORTED' });
  });

  it('distinguishes "not performed" from "failed" when no key resolver is configured (SEC-8)', async () => {
    const document = await signedRegistry([{ id: ENTRY_DID }]);

    await expect(verifyTrustRegistryCredential(document, { documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_KEY_RESOLVER_MISSING' });
  });

  it('rejects a registry signed by the wrong key', async () => {
    const document = await signedRegistry([{ id: ENTRY_DID }]);
    const otherKey = await ed.getPublicKeyAsync(new Uint8Array(32).fill(0x07));

    await expect(verifyTrustRegistryCredential(document, { resolveKey: async () => otherKey, documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_PROOF_INVALID' });
  });

  // Regression guard. URDNA2015 silently drops any term the @context does not
  // define, and canonicalize() runs with safe mode off. Before qi-core's scoped
  // registry-entry terms existed, the signature covered only id/issuer/validFrom
  // — an attacker could append an entry, or flip a revoked entry to active, and
  // the proof still verified. Each field below feeds isTrustedIssuer(), so each
  // must be inside the signature.
  describe('the proof covers every field the trust decision uses', () => {
    const baseEntry: JsonObject = {
      id: ENTRY_DID,
      issuerRole: 'nationalAccreditationBody',
      authorizationBasisKinds: ['accreditation'],
      credentialTypes: ['AccreditationAttestation'],
      validFrom: '2024-01-01T00:00:00Z',
      validUntil: '2030-01-01T00:00:00Z',
      status: 'active',
    };

    const tampers: Array<[string, (e: JsonObject) => void]> = [
      ['changing the entry id', e => { e.id = 'did:web:attacker.example.com'; }],
      ['flipping status revoked -> active', e => { e.status = 'revoked'; }],
      ['widening authorizationBasisKinds', e => { e.authorizationBasisKinds = ['legalMandate']; }],
      ['widening credentialTypes', e => { e.credentialTypes = ['AnythingGoes']; }],
      ['extending validUntil', e => { e.validUntil = '2099-01-01T00:00:00Z'; }],
      ['backdating validFrom', e => { e.validFrom = '1999-01-01T00:00:00Z'; }],
      ['changing issuerRole', e => { e.issuerRole = 'nationalMetrologyInstitute'; }],
    ];

    for (const [label, mutate] of tampers) {
      it(`detects ${label}`, async () => {
        const document = await signedRegistry([{ ...baseEntry }]);
        const entry = (document.credentialSubject as JsonObject).registryEntries as JsonObject[];
        mutate(entry[0]!);

        await expect(verifyTrustRegistryCredential(document, { resolveKey, documentLoader }))
          .rejects.toMatchObject({ code: 'TRUST_REGISTRY_PROOF_INVALID' });
      });
    }

    it('detects appending an entry', async () => {
      const document = await signedRegistry([{ ...baseEntry }]);
      const entries = (document.credentialSubject as JsonObject).registryEntries as JsonObject[];
      entries.push({ id: 'did:web:attacker.example.com', status: 'active' });

      await expect(verifyTrustRegistryCredential(document, { resolveKey, documentLoader }))
        .rejects.toMatchObject({ code: 'TRUST_REGISTRY_PROOF_INVALID' });
    });
  });

  it('rejects a verified document that is not a well-formed registry', async () => {
    const document: JsonObject = {
      '@context': ['https://www.w3.org/ns/credentials/v2'],
      type: ['VerifiableCredential', 'TrustRegistryCredential'],
      id: 'urn:uuid:no-subject',
      issuer: ISSUER_DID,
    };
    const proof = await createProof(document, keyPair, { created: '2025-01-01T00:00:00Z', documentLoader });

    await expect(verifyTrustRegistryCredential({ ...document, proof }, { resolveKey, documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_MALFORMED' });
  });
});

describe('isTrustedIssuer', () => {
  it('returns true for an entry with no validity dates', async () => {
    const r = await verifiedRegistry([{ id: ENTRY_DID }]);
    expect(isTrustedIssuer(r, ENTRY_DID)).toBe(true);
  });

  it('returns false for an unknown DID', async () => {
    const r = await verifiedRegistry([{ id: ENTRY_DID }]);
    expect(isTrustedIssuer(r, 'did:web:unknown.example.com')).toBe(false);
  });

  it('returns true within validity window', async () => {
    const r = await verifiedRegistry([{
      id: ENTRY_DID,
      validFrom: '2024-01-01T00:00:00Z',
      validUntil: '2030-01-01T00:00:00Z',
    }]);
    const asOf = new Date('2025-06-01');
    expect(isTrustedIssuer(r, ENTRY_DID, undefined, undefined, undefined, asOf)).toBe(true);
  });

  it('returns false before validFrom', async () => {
    const r = await verifiedRegistry([{ id: ENTRY_DID, validFrom: '2026-01-01T00:00:00Z' }]);
    const asOf = new Date('2025-01-01');
    expect(isTrustedIssuer(r, ENTRY_DID, undefined, undefined, undefined, asOf)).toBe(false);
  });

  it('returns false after validUntil', async () => {
    const r = await verifiedRegistry([{
      id: ENTRY_DID,
      validFrom: '2020-01-01T00:00:00Z',
      validUntil: '2023-12-31T23:59:59Z',
    }]);
    const asOf = new Date('2025-01-01');
    expect(isTrustedIssuer(r, ENTRY_DID, undefined, undefined, undefined, asOf)).toBe(false);
  });

  it('filters by authorization basis and issuer role', async () => {
    const r = await verifiedRegistry([{
      id: ENTRY_DID,
      issuerRole: 'nationalMetrologyInstitute',
      authorizationBasisKinds: ['legalMandate'],
    }]);
    expect(isTrustedIssuer(r, ENTRY_DID, 'legalMandate', 'nationalMetrologyInstitute')).toBe(true);
    expect(isTrustedIssuer(r, ENTRY_DID, 'accreditation', 'nationalAccreditationBody')).toBe(false);
  });

  it('parses an empty registry', async () => {
    const r = await verifiedRegistry([]);
    expect(r.entries).toHaveLength(0);
  });

  it('handles object issuer format', async () => {
    const document = {
      ...unsignedRegistry([]),
      issuer: { id: ISSUER_DID, name: 'Test Accreditor' },
    };
    const proof = await createProof(document, keyPair, { created: '2025-01-01T00:00:00Z', documentLoader });
    const r = await verifyTrustRegistryCredential({ ...document, proof }, { resolveKey, documentLoader });
    expect(r.issuer).toBe(ISSUER_DID);
  });
});

describe('resolveTrustRegistry', () => {
  beforeEach(() => clearRegistryCache());

  it('resolves via fetchFn and caches result', async () => {
    const cred = await signedRegistry([{ id: ENTRY_DID }]);
    let callCount = 0;
    const fetchFn = async (_url: string) => { callCount++; return cred; };

    const r1 = await resolveTrustRegistry('https://example.com/trust', { fetchFn, resolveKey, proofDocumentLoader: documentLoader });
    const r2 = await resolveTrustRegistry('https://example.com/trust', { fetchFn, resolveKey, proofDocumentLoader: documentLoader });

    // The fetch still happens; the cache spares the re-verification.
    expect(callCount).toBe(2);
    expect(r1.entries).toHaveLength(1);
    expect(r2.contentDigest).toBe(r1.contentDigest);
    expect(r2.verifiedAt).toBe(r1.verifiedAt); // same cached object, not re-verified
  });

  it('does not let a substituted document inherit a cache hit (SEC-6)', async () => {
    const good = await signedRegistry([{ id: ENTRY_DID }]);
    const substituted = await signedRegistry([{ id: ENTRY_DID }]);
    // Same URL, different content: tamper the second after signing.
    (substituted.credentialSubject as JsonObject).registryEntries = [
      { id: 'did:web:attacker.example.com' },
    ];

    let current = good;
    const fetchFn = async (_url: string) => current;
    const url = 'https://example.com/trust-swap';

    const first = await resolveTrustRegistry(url, { fetchFn, resolveKey, proofDocumentLoader: documentLoader });
    expect(first.entries[0]!.id).toBe(ENTRY_DID);

    // The cache is keyed on verified content, so the swapped document is
    // verified afresh and rejected rather than served from the URL's entry.
    current = substituted;
    await expect(resolveTrustRegistry(url, { fetchFn, resolveKey, proofDocumentLoader: documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_PROOF_INVALID' });
  });

  it('bypasses cache when ttlMs=0 (already expired)', async () => {
    const cred = await signedRegistry([]);
    let callCount = 0;
    const fetchFn = async (_url: string) => { callCount++; return cred; };

    await resolveTrustRegistry('https://example.com/trust2', { fetchFn, ttlMs: 0, resolveKey, proofDocumentLoader: documentLoader });
    await resolveTrustRegistry('https://example.com/trust2', { fetchFn, ttlMs: 0, resolveKey, proofDocumentLoader: documentLoader });

    expect(callCount).toBe(2);
  });

  it('resolves via documentLoader', async () => {
    const cred = await signedRegistry([{ id: ENTRY_DID }]);
    // Retrieval loader: serves the registry itself. Distinct from the loader
    // used to resolve @context URLs during canonicalization.
    const retrievalLoader = async (url: string) => ({
      contextUrl: null,
      document: cred,
      documentUrl: url,
    });

    const registry = await resolveTrustRegistry('https://example.com/trust3', {
      documentLoader: retrievalLoader,
      resolveKey,
      proofDocumentLoader: documentLoader,
    });
    expect(registry.entries).toHaveLength(1);
  });

  it('reports a fetch failure distinctly from a verification failure', async () => {
    const fetchFn = async (_url: string): Promise<JsonObject> => { throw new Error('network down'); };

    await expect(resolveTrustRegistry('https://example.com/gone', { fetchFn, resolveKey, proofDocumentLoader: documentLoader }))
      .rejects.toMatchObject({ code: 'TRUST_REGISTRY_FETCH_FAILED' });
  });
});
