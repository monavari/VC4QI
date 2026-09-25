// SPDX-License-Identifier: Apache-2.0
import { readFileSync } from 'node:fs';
import * as ed from '@noble/ed25519';
import { beforeAll, describe, expect, it } from 'vitest';
import { createProof, verifyProof } from '../src/proofs/index.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';
import type { JsonObject } from '../src/types.js';

const { vectors } = JSON.parse(readFileSync(
  new URL('../../../testdata/regressions/proof-options.json', import.meta.url), 'utf8',
)) as { vectors: { id: string; set: JsonObject; remove: string[]; expected: boolean }[] };
const documentLoader = buildDocumentLoader({ strict: true });
const credential = {
  '@context': ['https://www.w3.org/ns/credentials/v2'],
  type: ['VerifiableCredential'],
  issuer: 'https://vc4qi.example/proof-regression/issuer',
  credentialSubject: { id: 'https://vc4qi.example/proof-regression/subject' },
};
let signed: JsonObject;
let publicKey: Uint8Array;
beforeAll(async () => {
  const privateKey = new Uint8Array(32).fill(0x42);
  publicKey = await ed.getPublicKeyAsync(privateKey);
  const proof = await createProof(credential, {
    id: `${credential.issuer}#key-1`, controller: credential.issuer, privateKey, publicKey,
  }, { created: '2026-01-01T00:00:00Z', documentLoader });
  signed = { ...credential, proof };
});

describe('legacy proof option preservation', () => {
  for (const vector of vectors) {
    it(vector.id, async () => {
      const proof = { ...(signed.proof as JsonObject), ...vector.set };
      for (const key of vector.remove) delete proof[key];
      expect(await verifyProof({ ...signed, proof }, publicKey, { documentLoader }))
        .toBe(vector.expected);
    });
  }
});
