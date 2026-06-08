// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect, beforeEach } from 'vitest';
import {
  parseTrustRegistryCredential,
  isTrustedIssuer,
  resolveTrustRegistry,
  clearRegistryCache,
} from '../src/trust-registry/index.js';
import type { JsonObject } from '../src/types.js';

const ISSUER_DID = 'did:web:accreditor.example.com';
const ENTRY_DID = 'did:web:cal.example.com';

function makeTrustRegistryCred(entries: JsonObject[]): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
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

describe('parseTrustRegistryCredential', () => {
  it('parses a registry with one entry', () => {
    const cred = makeTrustRegistryCred([
      { id: ENTRY_DID, name: 'Test Lab', validFrom: '2024-01-01T00:00:00Z' },
    ]);
    const registry = parseTrustRegistryCredential(cred);
    expect(registry.issuer).toBe(ISSUER_DID);
    expect(registry.entries).toHaveLength(1);
    expect(registry.entries[0]!.id).toBe(ENTRY_DID);
    expect(registry.entries[0]!.name).toBe('Test Lab');
  });

  it('parses an empty registry', () => {
    const cred = makeTrustRegistryCred([]);
    const registry = parseTrustRegistryCredential(cred);
    expect(registry.entries).toHaveLength(0);
  });

  it('throws if credentialSubject is missing', () => {
    expect(() => parseTrustRegistryCredential({ id: 'x' })).toThrow('missing credentialSubject');
  });

  it('handles object issuer format', () => {
    const cred = {
      ...makeTrustRegistryCred([]),
      issuer: { id: ISSUER_DID, name: 'Test Accreditor' },
    };
    const registry = parseTrustRegistryCredential(cred);
    expect(registry.issuer).toBe(ISSUER_DID);
  });
});

describe('isTrustedIssuer', () => {
  const makeRegistry = (entries: JsonObject[]) =>
    parseTrustRegistryCredential(makeTrustRegistryCred(entries));

  it('returns true for an entry with no validity dates', () => {
    const r = makeRegistry([{ id: ENTRY_DID }]);
    expect(isTrustedIssuer(r, ENTRY_DID)).toBe(true);
  });

  it('returns false for an unknown DID', () => {
    const r = makeRegistry([{ id: ENTRY_DID }]);
    expect(isTrustedIssuer(r, 'did:web:unknown.example.com')).toBe(false);
  });

  it('returns true within validity window', () => {
    const r = makeRegistry([{
      id: ENTRY_DID,
      validFrom: '2024-01-01T00:00:00Z',
      validUntil: '2030-01-01T00:00:00Z',
    }]);
    const asOf = new Date('2025-06-01');
    expect(isTrustedIssuer(r, ENTRY_DID, undefined, undefined, undefined, asOf)).toBe(true);
  });

  it('returns false before validFrom', () => {
    const r = makeRegistry([{
      id: ENTRY_DID,
      validFrom: '2026-01-01T00:00:00Z',
    }]);
    const asOf = new Date('2025-01-01');
    expect(isTrustedIssuer(r, ENTRY_DID, undefined, undefined, undefined, asOf)).toBe(false);
  });

  it('returns false after validUntil', () => {
    const r = makeRegistry([{
      id: ENTRY_DID,
      validFrom: '2020-01-01T00:00:00Z',
      validUntil: '2023-12-31T23:59:59Z',
    }]);
    const asOf = new Date('2025-01-01');
    expect(isTrustedIssuer(r, ENTRY_DID, undefined, undefined, undefined, asOf)).toBe(false);
  });

  it('filters by authorization basis and issuer role', () => {
    const r = makeRegistry([{
      id: ENTRY_DID,
      issuerRole: 'nationalMetrologyInstitute',
      authorizationBasisKinds: ['legalMandate'],
    }]);
    expect(isTrustedIssuer(r, ENTRY_DID, 'legalMandate', 'nationalMetrologyInstitute')).toBe(true);
    expect(isTrustedIssuer(r, ENTRY_DID, 'accreditation', 'nationalAccreditationBody')).toBe(false);
  });
});

describe('resolveTrustRegistry', () => {
  beforeEach(() => clearRegistryCache());

  it('resolves via fetchFn and caches result', async () => {
    const cred = makeTrustRegistryCred([{ id: ENTRY_DID }]);
    let callCount = 0;
    const fetchFn = async (_url: string) => { callCount++; return cred; };

    const r1 = await resolveTrustRegistry('https://example.com/trust', { fetchFn });
    const r2 = await resolveTrustRegistry('https://example.com/trust', { fetchFn });

    expect(callCount).toBe(1); // Second call hits cache
    expect(r1.entries).toHaveLength(1);
    expect(r2.entries).toHaveLength(1);
  });

  it('bypasses cache when ttlMs=0 (already expired)', async () => {
    const cred = makeTrustRegistryCred([]);
    let callCount = 0;
    const fetchFn = async (_url: string) => { callCount++; return cred; };

    await resolveTrustRegistry('https://example.com/trust2', { fetchFn, ttlMs: 0 });
    await resolveTrustRegistry('https://example.com/trust2', { fetchFn, ttlMs: 0 });

    expect(callCount).toBe(2);
  });

  it('resolves via documentLoader', async () => {
    const cred = makeTrustRegistryCred([{ id: ENTRY_DID }]);
    const documentLoader = async (url: string) => ({
      contextUrl: null,
      document: cred,
      documentUrl: url,
    });

    const registry = await resolveTrustRegistry('https://example.com/trust3', { documentLoader });
    expect(registry.entries).toHaveLength(1);
  });
});
