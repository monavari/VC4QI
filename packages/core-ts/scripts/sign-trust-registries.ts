// SPDX-License-Identifier: Apache-2.0
// Sign the TrustRegistryCredential fixtures in testdata/examples/*/trust-registry.json,
// plus the complete GS hair-dryer graphs used by the proof-enabled GS tests.
//
// SEC-1 requires a trust registry's proof to be verified before any entry is
// read from it, so the fixtures have to carry real signatures — a registry with
// a placeholder proof cannot exercise the check it exists to demonstrate.
//
// This runs as a second pass after scripts/generate-v02-fixtures.js, which emits
// the registries unsigned (it is plain JS and cannot reach the TS cryptosuite).
// It is idempotent: any existing proof is stripped and the document re-signed.
//
// Run: pnpm -C packages/core-ts exec tsx scripts/sign-trust-registries.ts
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProof } from '../src/proofs/index.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';
import type { JsonObject } from '../src/types.js';

ed.etc.sha512Sync = (...m: Parameters<typeof sha512>) => sha512(...m);

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../../..');
const EXAMPLES = join(ROOT, 'testdata', 'examples');

// TEST ONLY — the committed fixture key, mirroring tests/fixtures/keys/test-ed25519-key.json.
// Never used outside fixture generation. See SECURITY.md.
const SEED = new Uint8Array(32).fill(0x42);
const publicKey = await ed.getPublicKeyAsync(SEED);

const keyPair = {
  id: 'did:web:test.example.com#key-1',
  controller: 'did:web:test.example.com',
  privateKey: SEED,
  publicKey,
};

const documentLoader = buildDocumentLoader({});

let signed = 0;
for (const dir of readdirSync(EXAMPLES).sort()) {
  const path = join(EXAMPLES, dir, 'trust-registry.json');
  if (!existsSync(path)) continue;

  const document = JSON.parse(readFileSync(path, 'utf8')) as JsonObject;
  // Strip any prior proof so re-running produces the same bytes.
  const { proof: _existing, ...unsecured } = document;

  const proof = await createProof(unsecured as JsonObject, keyPair, {
    created: '2026-01-01T00:00:00Z',
    documentLoader,
  });

  writeFileSync(path, `${JSON.stringify({ ...unsecured, proof }, null, 2)}\n`);
  console.log(`signed ${dir}/trust-registry.json`);
  signed++;
}

console.log(`\n${signed} trust registry fixtures signed with the TEST ONLY key.`);

// The QR-mark scenarios are intentionally stronger than the older shared vectors:
// every graph credential has a verifiable proof, so their passing tests can run
// with skipProof=false. Fictional issuers share this TEST ONLY fixture key; each
// proof still names the issuer-specific verification method expected by the VC.
const proofEnabledGsExamples = [
  {
    dir: 'gs-hair-dryer-hitl',
    publicFile: 'hair-dryer-gs-product-mark.json',
  },
  {
    dir: 'gs-hair-dryer-external-test-lab-hitl',
    publicFile: 'hair-dryer-gs-product-mark-external-test-lab.json',
  },
];

for (const example of proofEnabledGsExamples) {
  const gsDir = join(EXAMPLES, example.dir);
  const failingTargetPath = join(gsDir, 'failing-target-credential.json');
  const gsPaths = [
    join(gsDir, 'target-credential.json'),
    ...(existsSync(failingTargetPath) ? [failingTargetPath] : []),
    ...readdirSync(join(gsDir, 'evidence'))
      .filter(file => file.endsWith('.json'))
      .sort()
      .map(file => join(gsDir, 'evidence', file)),
  ];

  for (const path of gsPaths) {
    const document = JSON.parse(readFileSync(path, 'utf8')) as JsonObject;
    const { proof: _existing, ...unsecured } = document;
    const issuer = typeof unsecured.issuer === 'string'
      ? unsecured.issuer
      : String((unsecured.issuer as JsonObject | undefined)?.id ?? '');
    if (!issuer) throw new Error(`Cannot sign fixture without issuer: ${path}`);

    const proof = await createProof(unsecured as JsonObject, {
      ...keyPair,
      id: `${issuer}#key-1`,
      controller: issuer,
    }, {
      created: '2026-01-01T00:00:00Z',
      documentLoader,
    });
    writeFileSync(path, `${JSON.stringify({ ...unsecured, proof }, null, 2)}\n`);
    console.log(`signed ${path.slice(EXAMPLES.length + 1)}`);
  }

  const gsPublicExample = join(ROOT, 'examples', 'gs', example.publicFile);
  writeFileSync(gsPublicExample, readFileSync(join(gsDir, 'target-credential.json')));
  console.log(`copied signed GS QR target to examples/gs/${example.publicFile}`);
}
console.log(`public key (hex): ${Buffer.from(publicKey).toString('hex')}`);
