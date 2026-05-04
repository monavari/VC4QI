// SPDX-License-Identifier: Apache-2.0
// Trust Registry resolution and validation.
// The trust registry is a signed VC (TrustRegistryCredential) served at the
// root authority's did:web endpoint. See ADR-004.
import type { JsonObject, DocumentLoader } from '../types.js';

/** A single entry in a TrustRegistryCredential */
export interface TrustRegistryEntry {
  id: string;
  name?: string;
  validFrom?: string;
  validUntil?: string;
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
  const entries: TrustRegistryEntry[] = rawEntries.map(e => ({
    id: String(e.id ?? ''),
    name: e.name != null ? String(e.name) : undefined,
    validFrom: e.validFrom != null ? String(e.validFrom) : undefined,
    validUntil: e.validUntil != null ? String(e.validUntil) : undefined,
  }));

  return {
    id: String(credential.id ?? ''),
    issuer: typeof credential.issuer === 'string'
      ? credential.issuer
      : String((credential.issuer as JsonObject | undefined)?.id ?? ''),
    entries,
  };
}

/**
 * Check whether a DID is an active entry in the trust registry.
 * An entry is active if it has no validUntil or validUntil is in the future.
 */
export function isTrustedIssuer(registry: TrustRegistry, did: string, asOf = new Date()): boolean {
  const asOfMs = asOf.getTime();
  return registry.entries.some(entry => {
    if (entry.id !== did) return false;
    if (entry.validFrom && new Date(entry.validFrom).getTime() > asOfMs) return false;
    if (entry.validUntil && new Date(entry.validUntil).getTime() < asOfMs) return false;
    return true;
  });
}

/** Clear the in-memory cache (useful in tests) */
export function clearRegistryCache(): void {
  registryCache.clear();
}
