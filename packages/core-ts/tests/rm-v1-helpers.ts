// SPDX-License-Identifier: Apache-2.0
// Shared helpers for RM v1 evaluator tests: the pinned catalog with the signed
// fixtures, re-signing with the insecure fixture keys, and chain re-issuance.
import * as ed from '@noble/ed25519';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createProof } from '../src/proofs/index.js';
import {
  catalogDocumentLoader, createRelianceRequest, loadBindingManifest, loadRelianceProfile, sha384SRI,
  StaticResourceCatalog, type RelianceRequestInput, type StaticResourceInput,
} from '../src/reliance/index.js';
import { readPinnedResources } from '../src/reliance/rm-v1-node.js';
import type { JsonObject } from '../src/types.js';

const rmDir = new URL('../../../bindings/experimental/rm-v1/', import.meta.url);
export const manifest = loadBindingManifest(JSON.parse(readFileSync(new URL('manifest.json', rmDir), 'utf8')));
export const profileJson = (): JsonObject =>
  JSON.parse(readFileSync(new URL('profiles/rm-verifier-1.json', rmDir), 'utf8')) as JsonObject;
export const profile = loadRelianceProfile(profileJson());
const pinned = readPinnedResources(new URL('catalog.json', rmDir).pathname);
export const signed = readPinnedResources(new URL('test-vectors/signed/catalog.json', rmDir).pathname);

export const URI = {
  A: 'https://nab.vc4qi.example/credentials/A',
  H: 'https://nab.vc4qi.example/credentials/H',
  O: 'https://producer.vc4qi.example/credentials/O',
  S: 'https://lab.vc4qi.example/credentials/S',
  D: 'https://producer.vc4qi.example/credentials/D178',
  NAB: 'https://nab.vc4qi.example/controller',
  PRODUCER: 'https://producer.vc4qi.example/controller',
  LAB: 'https://lab.vc4qi.example/controller',
} as const;
const KEY_OF: Record<string, string> = { [URI.NAB]: 'nab', [URI.PRODUCER]: 'producer', [URI.LAB]: 'lab' };

export const NOW = '2026-09-25T12:00:00Z';
export const text = (uri: string) => new TextDecoder().decode(signed.find(r => r.uri === uri)!.bytes);
export const json = (uri: string) => JSON.parse(text(uri)) as JsonObject;
export const serialize = (document: JsonObject) => `${JSON.stringify(document, null, 2)}\n`;

/** Pinned resources plus signed fixtures, with some replaced (string) or removed (null). */
export function catalogWith(overrides: Record<string, string | null> = {}): StaticResourceCatalog {
  const inputs: StaticResourceInput[] = [...pinned, ...signed]
    .filter(resource => overrides[resource.uri] !== null)
    .map(resource => {
      const replacement = overrides[resource.uri];
      if (typeof replacement !== 'string') return resource;
      const bytes = new TextEncoder().encode(replacement);
      return { ...resource, bytes, digestSRI: sha384SRI(bytes) };
    });
  const extra = Object.entries(overrides)
    .filter(([uri, value]) => typeof value === 'string' && ![...pinned, ...signed].some(r => r.uri === uri))
    .map(([uri, value]) => {
      const bytes = new TextEncoder().encode(value as string);
      return { uri, mediaType: 'application/vc', bytes, digestSRI: sha384SRI(bytes), origin: 'test', version: '1' };
    });
  return new StaticResourceCatalog([...inputs, ...extra]);
}

/** Sign `document` (any existing proof removed) with the fixture key of its issuer. */
export async function resign(document: JsonObject, issuer = String(document.issuer)): Promise<string> {
  const { proof: _proof, ...unsigned } = document;
  const seed = createHash('sha256').update(`vc4qi-rm-v1-insecure-fixture-key:${KEY_OF[issuer]}`).digest();
  const proof = await createProof(unsigned, {
    id: `${issuer}#key-1`, controller: issuer, privateKey: seed, publicKey: await ed.getPublicKeyAsync(seed),
  }, {
    created: '2026-02-01T00:00:00Z', safe: true,
    documentLoader: catalogDocumentLoader(catalogWith().openSession({ maxResources: 256, maxBytes: 5_000_000 })),
  });
  return serialize({ ...unsigned, proof });
}

/**
 * Re-issue the chain after changing credentials: walk A, H, O, S, D in dependency
 * order, re-sign each changed credential, and re-sign every credential whose
 * relatedResource digest pins a changed one. `editD` changes D itself.
 */
export async function reissue(
  changed: Record<string, JsonObject>, editD?: (d: JsonObject) => void,
): Promise<Record<string, string | null>> {
  const overrides: Record<string, string | null> = {};
  for (const uri of [URI.A, URI.H, URI.O, URI.S, URI.D]) {
    const document = changed[uri] ?? json(uri);
    let dirty = uri in changed;
    if (uri === URI.D && editD) { editD(document); dirty = true; }
    if (Array.isArray(document.relatedResource)) {
      document.relatedResource = (document.relatedResource as JsonObject[]).map(ref => {
        const replacement = overrides[String(ref.id)];
        if (typeof replacement !== 'string') return ref;
        dirty = true;
        return { ...ref, digestSRI: sha384SRI(new TextEncoder().encode(replacement)) };
      });
    }
    if (dirty) overrides[uri] = await resign(document);
  }
  return overrides;
}

export function request(overrides: Partial<RelianceRequestInput> = {}) {
  return createRelianceRequest({
    requestId: 'urn:uuid:rm-v1-authority-request',
    targetId: URI.D,
    selectedClaims: [{ id: 'as-mass-fraction', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }],
    purpose: 'use-as-calibrant',
    binding: { id: manifest.id, version: manifest.version },
    profile: { id: profile.id, version: profile.version },
    trustConfigId: 'https://vc4qi.example/trust/fixture-nab-anchor',
    evaluationTime: NOW,
    activityTime: NOW,
    suppliedEvidence: [URI.A, URI.O, URI.S, URI.H],
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    conformity: { requirementId: 'as-plus-u-le-200', decisionRuleId: 'simple-acceptance' },
    ...overrides,
  });
}
