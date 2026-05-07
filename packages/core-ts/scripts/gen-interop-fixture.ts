// SPDX-License-Identifier: Apache-2.0
// Generate a signed credential fixture for Python cross-language interop tests.
// Run: pnpm -C packages/core-ts exec tsx scripts/gen-interop-fixture.ts
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProof } from '../src/proofs/index.js';

ed.etc.sha512Sync = (...m: Parameters<typeof sha512>) => sha512(...m);

const __dirname = dirname(fileURLToPath(import.meta.url));

const SEED = new Uint8Array(32).fill(0x42);
const publicKey = await ed.getPublicKeyAsync(SEED);

const keyPair = {
  id: 'did:web:test.example.com#key-1',
  controller: 'did:web:test.example.com',
  privateKey: SEED,
  publicKey,
};

const credential = {
  '@context': ['https://www.w3.org/ns/credentials/v2'],
  type: ['VerifiableCredential'],
  id: 'urn:uuid:interop-test-001',
  issuer: 'did:web:test.example.com',
  validFrom: '2025-01-01T00:00:00Z',
  credentialSubject: {
    id: 'did:web:subject.example.com',
    measurement: { value: 9.81, unit: 'm/s²' },
  },
};

const proof = await createProof(credential, keyPair, { created: '2025-01-01T00:00:00Z' });
const signedCredential = { ...credential, proof };

const fixture = {
  signedCredential,
  publicKeyHex: Buffer.from(publicKey).toString('hex'),
};

const outPath = join(__dirname, '../../core-py/tests/fixtures/ts_signed_credential.json');
writeFileSync(outPath, JSON.stringify(fixture, null, 2) + '\n');
console.log(`Wrote fixture to ${outPath}`);
console.log(`proofValue: ${proof.proofValue}`);
