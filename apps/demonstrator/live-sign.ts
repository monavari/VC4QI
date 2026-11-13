// SPDX-License-Identifier: Apache-2.0
// Live signing for the RM actor board: the accreditation body suspends, the laboratory
// revokes, the producer certifies a value the viewer types. Each is a new signed
// document made in the browser with the same proof code the fixture generator uses
// (eddsa-rdfc-2022 over the pinned catalog) and the same INSECURE keys, which the
// generator derives from public seeds. Nothing here has legal effect; the evaluator
// treats these documents exactly as it treats the generated fixtures.
import { sha256 } from '@noble/hashes/sha256';
import { gzipSync } from 'fflate';
import { createProof } from '../../packages/core-ts/src/proofs/index.js';
import { catalogDocumentLoader, StaticResourceCatalog } from '../../packages/core-ts/src/reliance/index.js';
import type { StaticResourceInput } from '../../packages/core-ts/src/reliance/catalog.js';
import { MIN_STATUS_BITS } from '../../packages/core-ts/src/reliance/status-list.js';
import type { JsonObject } from '../../packages/core-ts/src/types.js';
import { fromMultibase } from '../../packages/core-ts/src/utils/base58btc.js';

/** The fixture key of an RM v1 party, as generate-rm-v1-artifacts.ts derives it. */
function fixtureKey(name: string, controller: string, controllerText: string) {
  const doc = JSON.parse(controllerText) as { verificationMethod: { publicKeyMultibase: string }[] };
  // The controller document holds the multicodec-prefixed (0xed01) public key.
  const publicKey = fromMultibase(doc.verificationMethod[0]!.publicKeyMultibase).slice(2);
  const privateKey = sha256(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${name}`));
  return { id: `${controller}#key-1`, controller, privateKey, publicKey };
}

const serialize = (document: JsonObject) => `${JSON.stringify(document, null, 2)}\n`;

/** Signs `unsigned` as the named party, resolving contexts from the pinned catalog only. */
export async function signAs(unsigned: JsonObject, name: string, controller: string, created: string,
  catalog: readonly StaticResourceInput[], controllerText: string): Promise<string> {
  const loader = catalogDocumentLoader(new StaticResourceCatalog(catalog).openSession({ maxResources: 64, maxBytes: 1_000_000 }));
  const proof = await createProof(unsigned, fixtureKey(name, controller, controllerText), { created, documentLoader: loader, safe: true });
  return serialize({ ...unsigned, proof } as unknown as JsonObject);
}

/** A Bitstring Status List `encodedList` with the given bits set (bit 0 is the first byte's top bit). */
export function encodeBits(set: readonly number[]): string {
  const bits = new Uint8Array(MIN_STATUS_BITS / 8);
  for (const i of set) bits[i >> 3]! |= 0x80 >> (i & 7);
  const gz = gzipSync(bits, { level: 9, mtime: 0 });
  let binary = '';
  for (const b of gz) binary += String.fromCharCode(b);
  return `u${btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')}`;
}

/** The signed status list `listText` re-issued with `set` bits on, from `validFrom`. */
export function reissueStatusList(listText: string, set: readonly number[], validFrom: string): JsonObject {
  const { proof: _proof, ...list } = JSON.parse(listText) as JsonObject & { credentialSubject: JsonObject };
  return { ...list, validFrom, credentialSubject: { ...list.credentialSubject, encodedList: encodeBits(set) } };
}
