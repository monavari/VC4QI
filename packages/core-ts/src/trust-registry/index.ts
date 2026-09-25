// SPDX-License-Identifier: Apache-2.0
// Trust Registry resolution and validation.
// The trust registry is a signed VC (TrustRegistryCredential) served at the
// root authority's did:web endpoint. See ADR-004.
//
// SEC-1: no trust decision is taken on an unverified document. The registry
// credential's Data Integrity proof is verified BEFORE its content is parsed,
// and `isTrustedIssuer` accepts only a `VerifiedTrustRegistry` — a type that
// cannot be constructed outside this module. The compiler, not convention,
// enforces that the registry was verified in the current run.
import { createHash } from 'node:crypto';
import { verifyProof } from '../proofs/index.js';
import type { JsonObject, DocumentLoader, DataIntegrityProof } from '../types.js';
import type { AuthorizationBasisKind } from '../evidence/types.js';

/** A single entry in a TrustRegistryCredential */
export interface TrustRegistryEntry {
  id: string;
  name?: string;
  issuerRole?: string;
  authorizationBasisKinds?: AuthorizationBasisKind[];
  credentialTypes?: string[];
  validFrom?: string;
  validUntil?: string;
  status?: 'active' | 'suspended' | 'revoked';
}

/** Parsed trust registry. Carries no assertion that any proof was checked. */
export interface TrustRegistry {
  id: string;
  issuer: string;
  entries: TrustRegistryEntry[];
}

declare const verifiedBrand: unique symbol;

/**
 * A trust registry whose TrustRegistryCredential proof verified in the current
 * run. The brand is unforgeable outside this module, so a caller cannot present
 * unverified data to `isTrustedIssuer`.
 *
 * The provenance fields satisfy DOC-1: the trace can record which registry
 * resolved an identifier and which key vouched for it.
 */
export interface VerifiedTrustRegistry extends TrustRegistry {
  readonly [verifiedBrand]: true;
  /** Issuer of the TrustRegistryCredential itself (the recognition anchor). */
  readonly registryIssuer: string;
  /** The verificationMethod whose key verified the registry proof. */
  readonly verificationMethod: string;
  /** ISO-8601 instant at which the proof was verified. */
  readonly verifiedAt: string;
  /** SHA-256 over the verified document; the cache key (SEC-6). */
  readonly contentDigest: string;
}

/** Reason codes distinguishing why a registry could not be trusted (SEC-8). */
export type TrustRegistryFailureCode =
  /** The document carried no proof at all. */
  | 'TRUST_REGISTRY_PROOF_MISSING'
  /** A proof was present and did not verify. */
  | 'TRUST_REGISTRY_PROOF_INVALID'
  /** The proof named a cryptosuite outside the allowed set (SEC-9). */
  | 'TRUST_REGISTRY_SUITE_UNSUPPORTED'
  /** No key resolver was configured, so the check could not be performed. */
  | 'TRUST_REGISTRY_KEY_RESOLVER_MISSING'
  /** The registry could not be retrieved. */
  | 'TRUST_REGISTRY_FETCH_FAILED'
  /** The document verified but is not a well-formed TrustRegistryCredential. */
  | 'TRUST_REGISTRY_MALFORMED';

/**
 * Raised for every condition that prevents a registry from being trusted.
 * `code` is the reason code surfaced in the verification trace; callers must
 * not collapse these into a single failure mode, because "not performed" and
 * "performed and failed" are different facts (SEC-8).
 */
export class TrustRegistryVerificationError extends Error {
  constructor(
    readonly code: TrustRegistryFailureCode,
    message: string,
  ) {
    super(message);
    this.name = 'TrustRegistryVerificationError';
  }
}

/**
 * Cryptosuites admitted for a TrustRegistryCredential (SEC-9). An unrecognized
 * suite fails; it never falls through to a weaker path. Selective disclosure is
 * deliberately absent: a trust registry is a public list with nothing to redact.
 */
const ALLOWED_REGISTRY_CRYPTOSUITES = new Set(['eddsa-rdfc-2022']);

/**
 * Cache of verified registries, keyed on the digest of the verified document
 * (SEC-6) rather than on the URL. Two documents served from one URL are two
 * cache entries, so a substituted document cannot inherit an earlier
 * document's verified status.
 */
const registryCache = new Map<string, { registry: VerifiedTrustRegistry; expiresAt: number }>();

const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 minutes

function digestOf(document: JsonObject): string {
  return createHash('sha256').update(JSON.stringify(document), 'utf8').digest('hex');
}

/**
 * Verify a TrustRegistryCredential's proof and then parse it.
 *
 * Verification strictly precedes parsing: nothing in the returned registry has
 * been read out of the document before its signature was checked.
 *
 * @throws {TrustRegistryVerificationError} on any condition that leaves the
 * registry untrusted. It never returns an unverified registry and never
 * degrades to a warning — an unverified registry makes the evidence graph
 * ill-formed (MODEL_SPEC §4), so there is no weaker verdict to return.
 */
export async function verifyTrustRegistryCredential(
  credential: JsonObject,
  opts: {
    resolveKey?: (verificationMethod: string) => Promise<Uint8Array>;
    documentLoader?: DocumentLoader;
  },
): Promise<VerifiedTrustRegistry> {
  const proof = credential.proof as DataIntegrityProof | undefined;
  if (!proof) {
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_PROOF_MISSING',
      'TrustRegistryCredential carries no proof; it cannot ground a trust decision.',
    );
  }
  if (!ALLOWED_REGISTRY_CRYPTOSUITES.has(String(proof.cryptosuite))) {
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_SUITE_UNSUPPORTED',
      `Cryptosuite ${String(proof.cryptosuite)} is not admitted for a TrustRegistryCredential.`,
    );
  }
  if (!opts.resolveKey) {
    // Not performed, as distinct from performed-and-failed (SEC-8).
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_KEY_RESOLVER_MISSING',
      'No key resolver was configured, so the trust registry proof was never verified.',
    );
  }

  const verificationMethod = String(proof.verificationMethod ?? '');
  let ok: boolean;
  try {
    const publicKey = await opts.resolveKey(verificationMethod);
    const proofOptions: { documentLoader?: DocumentLoader } = {};
    if (opts.documentLoader !== undefined) proofOptions.documentLoader = opts.documentLoader;
    ok = await verifyProof(credential, publicKey, proofOptions);
  } catch (error) {
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_PROOF_INVALID',
      `Trust registry proof verification errored: ${String(error)}`,
    );
  }
  if (!ok) {
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_PROOF_INVALID',
      'Trust registry proof did not verify against the resolved key.',
    );
  }

  // Only now is it safe to read the document's content.
  const parsed = parseTrustRegistryCredential(credential);
  return {
    ...parsed,
    registryIssuer: parsed.issuer,
    verificationMethod,
    verifiedAt: new Date().toISOString(),
    contentDigest: digestOf(credential),
  } as VerifiedTrustRegistry;
}

/**
 * Resolve, verify, and parse a TrustRegistryCredential from a URL.
 *
 * Verified results are cached against the digest of the verified document, so a
 * substituted document at the same URL is verified afresh rather than inheriting
 * a cache hit (SEC-6).
 *
 * @throws {TrustRegistryVerificationError}
 */
export async function resolveTrustRegistry(
  url: string,
  opts: {
    ttlMs?: number;
    /** Loader used to RETRIEVE the registry document. */
    documentLoader?: DocumentLoader;
    fetchFn?: (url: string) => Promise<JsonObject>;
    resolveKey?: (verificationMethod: string) => Promise<Uint8Array>;
    /**
     * Loader used to resolve @context URLs while canonicalizing the registry
     * for proof verification. Kept separate from `documentLoader`: a loader
     * that serves the registry document for every URL would otherwise be asked
     * to resolve the registry's own contexts and return the registry itself.
     */
    proofDocumentLoader?: DocumentLoader;
  } = {},
): Promise<VerifiedTrustRegistry> {
  const ttlMs = opts.ttlMs ?? DEFAULT_TTL_MS;
  const now = Date.now();

  let credential: JsonObject;
  try {
    if (opts.fetchFn) {
      credential = await opts.fetchFn(url);
    } else if (opts.documentLoader) {
      const result = await opts.documentLoader(url);
      credential = result.document as JsonObject;
    } else {
      const res = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      credential = (await res.json()) as JsonObject;
    }
  } catch (error) {
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_FETCH_FAILED',
      `Failed to fetch trust registry from ${url}: ${String(error)}`,
    );
  }

  // Keyed on the content actually retrieved, never on the URL alone.
  const key = digestOf(credential);
  const cached = registryCache.get(key);
  if (cached && cached.expiresAt > now) return cached.registry;

  const registry = await verifyTrustRegistryCredential(credential, {
    ...(opts.resolveKey ? { resolveKey: opts.resolveKey } : {}),
    ...(opts.proofDocumentLoader ? { documentLoader: opts.proofDocumentLoader } : {}),
  });
  registryCache.set(key, { registry, expiresAt: now + ttlMs });
  return registry;
}

/**
 * Parse a TrustRegistryCredential VC into a TrustRegistry object.
 *
 * Deliberately NOT exported: parsing an unverified registry is the SEC-1 defect
 * this module exists to prevent. Reach a registry through
 * `verifyTrustRegistryCredential` or `resolveTrustRegistry`.
 */
function parseTrustRegistryCredential(credential: JsonObject): TrustRegistry {
  const subject = credential.credentialSubject as JsonObject | undefined;
  if (!subject) {
    throw new TrustRegistryVerificationError(
      'TRUST_REGISTRY_MALFORMED',
      'TrustRegistryCredential missing credentialSubject',
    );
  }

  const rawEntries = (subject.registryEntries as JsonObject[] | undefined) ?? [];
  const entries: TrustRegistryEntry[] = rawEntries.map(e => {
    const entry: TrustRegistryEntry = {
      id: String(e.id ?? ''),
      status: e.status === 'suspended' || e.status === 'revoked' ? e.status : 'active',
    };
    if (e.name != null) entry.name = String(e.name);
    if (e.issuerRole != null) entry.issuerRole = String(e.issuerRole);
    if (Array.isArray(e.authorizationBasisKinds)) {
      entry.authorizationBasisKinds = e.authorizationBasisKinds.map(String) as AuthorizationBasisKind[];
    }
    if (Array.isArray(e.credentialTypes)) entry.credentialTypes = e.credentialTypes.map(String);
    if (e.validFrom != null) entry.validFrom = String(e.validFrom);
    if (e.validUntil != null) entry.validUntil = String(e.validUntil);
    return entry;
  });

  return {
    id: String(credential.id ?? ''),
    issuer: typeof credential.issuer === 'string'
      ? credential.issuer
      : String((credential.issuer as JsonObject | undefined)?.id ?? ''),
    entries,
  };
}

/**
 * Check whether a DID is trusted for a specific authorization basis and credential type.
 * An entry is active if status is active and the verification time is inside its validity window.
 *
 * Takes a `VerifiedTrustRegistry` rather than a `TrustRegistry` so that no
 * caller can reach this comparison with unverified data (SEC-1).
 */
export function isTrustedIssuer(
  registry: VerifiedTrustRegistry,
  issuerId: string,
  authorizationBasisKind?: AuthorizationBasisKind,
  issuerRole?: string,
  credentialType?: string,
  verificationTime = new Date(),
): boolean {
  const asOfMs = verificationTime.getTime();
  return registry.entries.some(entry => {
    // SEC-2: both operands originate in credentials whose proofs verified in
    // this run — `entry.id` from the registry credential verified by
    // `verifyTrustRegistryCredential`, `issuerId` from an evidence credential
    // verified at gate 1. This is an identifier comparison inside a recognition
    // system, not a substitute for a signature check (NG-4).
    if (entry.id !== issuerId) return false;
    if (entry.status && entry.status !== 'active') return false;
    if (entry.validFrom && new Date(entry.validFrom).getTime() > asOfMs) return false;
    if (entry.validUntil && new Date(entry.validUntil).getTime() < asOfMs) return false;
    if (authorizationBasisKind && entry.authorizationBasisKinds?.length &&
        !entry.authorizationBasisKinds.includes(authorizationBasisKind)) {
      return false;
    }
    if (issuerRole && entry.issuerRole && entry.issuerRole !== issuerRole) return false;
    if (credentialType && entry.credentialTypes?.length && !entry.credentialTypes.includes(credentialType)) {
      return false;
    }
    return true;
  });
}

/** Clear the in-memory cache (useful in tests) */
export function clearRegistryCache(): void {
  registryCache.clear();
}
