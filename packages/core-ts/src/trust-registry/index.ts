// SPDX-License-Identifier: Apache-2.0
// Trust Registry resolution and validation.
// The trust registry is a signed VC (TrustRegistryCredential) served at the
// root authority's did:web endpoint. See ADR-004.
import type { JsonObject, DocumentLoader } from '../types.js';
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

/** Parsed trust registry */
export interface TrustRegistry {
  id: string;
  issuer: string;
  entries: TrustRegistryEntry[];
}

/** Simple TTL cache for trust registry credentials */
const registryCache = new Map<string, { registry: TrustRegistry; expiresAt: number }>();

const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Resolve and parse a TrustRegistryCredential from a URL.
 * Results are cached with a configurable TTL.
 */
export async function resolveTrustRegistry(
  url: string,
  opts: {
    ttlMs?: number;
    documentLoader?: DocumentLoader;
    fetchFn?: (url: string) => Promise<JsonObject>;
  } = {},
): Promise<TrustRegistry> {
  const ttlMs = opts.ttlMs ?? DEFAULT_TTL_MS;
  const now = Date.now();

  const cached = registryCache.get(url);
  if (cached && cached.expiresAt > now) return cached.registry;

  let credential: JsonObject;
  if (opts.fetchFn) {
    credential = await opts.fetchFn(url);
  } else if (opts.documentLoader) {
    const result = await opts.documentLoader(url);
    credential = result.document as JsonObject;
  } else {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`Failed to fetch trust registry: HTTP ${res.status}`);
    credential = (await res.json()) as JsonObject;
  }

  const registry = parseTrustRegistryCredential(credential);
  registryCache.set(url, { registry, expiresAt: now + ttlMs });
  return registry;
}

/** Parse a TrustRegistryCredential VC into a TrustRegistry object */
export function parseTrustRegistryCredential(credential: JsonObject): TrustRegistry {
  const subject = credential.credentialSubject as JsonObject | undefined;
  if (!subject) throw new Error('TrustRegistryCredential missing credentialSubject');

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
 */
export function isTrustedIssuer(
  registry: TrustRegistry,
  issuerId: string,
  authorizationBasisKind?: AuthorizationBasisKind,
  issuerRole?: string,
  credentialType?: string,
  verificationTime = new Date(),
): boolean {
  const asOfMs = verificationTime.getTime();
  return registry.entries.some(entry => {
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
