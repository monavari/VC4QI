// SPDX-License-Identifier: Apache-2.0
// Generates the signed experimental RM v1 vertical-slice fixtures:
//   controller documents for the fictional NAB, producer and laboratory, and
//   signed credentials A (accreditation), A2 (a second, direct accreditation that
//   D178 does not reference), H (lab authority), O (operational scope),
//   S (homogeneity study) and D178 (RM certificate, x = 178 mg/kg, U = 5, k = 2),
//   plus D197 and D520, hypothetical reissues with the same inputs and x = 197 / 520.
//
//   pnpm -C packages/core-ts exec tsx scripts/generate-rm-v1-artifacts.ts          # write files
//   pnpm -C packages/core-ts exec tsx scripts/generate-rm-v1-artifacts.ts --check  # fail if stale
//
// Every key is an INSECURE fictional fixture derived from a public seed, so the
// output is reproducible. Proofs are eddsa-rdfc-2022 over JSON-LD safe-mode
// canonicalization with the pinned RM v1 catalog only (no network). relatedResource
// digests are SHA-384 over the exact bytes of the referenced signed file. Never edit
// the output by hand; change this generator and regenerate.
import * as ed from '@noble/ed25519';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProof } from '../src/proofs/index.js';
import {
  catalogDocumentLoader, RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, RM_V1_VOCAB, sha384SRI, VC_V2_CONTEXT,
} from '../src/reliance/index.js';
import { loadRmV1Catalog } from '../src/reliance/rm-v1-node.js';
import { encodeStatusList, MIN_STATUS_BITS } from '../src/reliance/status-list.js';
import type { JsonObject } from '../src/types.js';
import { toMultibase } from '../src/utils/base58btc.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const OUT = join(ROOT, 'bindings', 'experimental', 'rm-v1', 'test-vectors', 'signed');
const CHECK = process.argv.includes('--check');

const rm = (term: string) => `${RM_V1_VOCAB}${term}`;
const NAB = 'https://nab.vc4qi.example/controller';
const PRODUCER = 'https://producer.vc4qi.example/controller';
const LAB = 'https://lab.vc4qi.example/controller';
const BATCH = 'urn:vc4qi-example:batch:cuzn39pb3-disc-lot-1';

// Revocation status: one Bitstring Status List per issuer, all bits clear. The NAB
// also publishes a suspension list for the accreditations it issues; a suspension
// is evaluated as a global restriction, outside the OR of routes.
const STATUS_LIST = {
  nab: 'https://nab.vc4qi.example/status/1',
  producer: 'https://producer.vc4qi.example/status/1',
  lab: 'https://lab.vc4qi.example/status/1',
} as const;
const SUSPENSION_LIST = 'https://nab.vc4qi.example/status/suspension/1';
type Entry = [list: string, index: number, purpose: 'revocation' | 'suspension'];
const STATUS_ENTRY: Record<string, Entry[]> = {
  'https://nab.vc4qi.example/credentials/A': [[STATUS_LIST.nab, 0, 'revocation'], [SUSPENSION_LIST, 0, 'suspension']],
  'https://nab.vc4qi.example/credentials/A2': [[STATUS_LIST.nab, 2, 'revocation'], [SUSPENSION_LIST, 2, 'suspension']],
  'https://nab.vc4qi.example/credentials/H': [[STATUS_LIST.nab, 1, 'revocation']],
  'https://producer.vc4qi.example/credentials/O': [[STATUS_LIST.producer, 0, 'revocation']],
  'https://producer.vc4qi.example/credentials/D178': [[STATUS_LIST.producer, 1, 'revocation']],
  'https://producer.vc4qi.example/credentials/D197': [[STATUS_LIST.producer, 2, 'revocation']],
  'https://producer.vc4qi.example/credentials/D520': [[STATUS_LIST.producer, 3, 'revocation']],
  'https://lab.vc4qi.example/credentials/S': [[STATUS_LIST.lab, 0, 'revocation']],
};

interface Party { name: string; controller: string; seed: Uint8Array; publicKey: Uint8Array }

async function party(name: string, controller: string): Promise<Party> {
  const seed = createHash('sha256').update(`vc4qi-rm-v1-insecure-fixture-key:${name}`).digest();
  return { name, controller, seed, publicKey: await ed.getPublicKeyAsync(seed) };
}

function controllerDocument(p: Party): JsonObject {
  const method = `${p.controller}#key-1`;
  return {
    '@context': 'https://www.w3.org/ns/cid/v1',
    id: p.controller,
    verificationMethod: [{
      id: method,
      type: 'Multikey',
      controller: p.controller,
      publicKeyMultibase: toMultibase(Uint8Array.from([0xed, 0x01, ...p.publicKey])),
    }],
    assertionMethod: [method],
  };
}

const serialize = (document: JsonObject) => `${JSON.stringify(document, null, 2)}\n`;

const outputs = new Map<string, string>();
const index: Record<string, unknown>[] = [];

function record(uri: string, file: string, mediaType: string, text: string, origin: string) {
  outputs.set(file, text);
  index.push({
    uri,
    path: relative(ROOT, join(OUT, file)),
    mediaType,
    origin,
    version: '1',
    digestSRI: sha384SRI(new TextEncoder().encode(text)),
  });
  return text;
}

async function sign(unsigned: JsonObject, signer: Party, created: string): Promise<JsonObject> {
  const entries = (STATUS_ENTRY[String(unsigned.id)] ?? []).map(([list, at, purpose]) => ({
    id: `${list}#${at}`,
    type: 'BitstringStatusListEntry',
    statusPurpose: purpose,
    statusListIndex: String(at),
    statusListCredential: list,
  }));
  const document: JsonObject = entries.length === 0 ? unsigned
    : { ...unsigned, credentialStatus: entries.length === 1 ? entries[0]! : entries };
  // Fresh budgeted session per proof; resolution is offline and catalog-only.
  const loader = catalogDocumentLoader(loadRmV1Catalog().openSession({ maxResources: 64, maxBytes: 1_000_000 }));
  const proof = await createProof(document, {
    id: `${signer.controller}#key-1`,
    controller: signer.controller,
    privateKey: signer.seed,
    publicKey: signer.publicKey,
  }, { created, documentLoader: loader, safe: true });
  return { ...document, proof };
}

function envelope(id: string, type: string, schemaFile: string, issuer: string,
  validFrom: string, validUntil: string): JsonObject {
  return {
    '@context': [VC_V2_CONTEXT, RM_V1_CONTEXT],
    id,
    type: ['VerifiableCredential', type],
    issuer,
    validFrom,
    validUntil,
    credentialSchema: { id: `${RM_V1_SCHEMA_BASE}${schemaFile}`, type: 'JsonSchema' },
  };
}

const policy = (id: string, type: string) => [{ type: 'RmAuthorizationPolicy', authorizationCredential: { id, type } }];
const integrity = (...refs: [string, string][]) =>
  refs.map(([id, text]) => ({ id, digestSRI: sha384SRI(new TextEncoder().encode(text)) }));
const scopeRecord = (id: string, methods: string[]) => ({
  id,
  matrixIri: rm('CuZn39Pb3'),
  formIri: rm('Disc'),
  allowedPropertyIris: [rm('As')],
  allowedMethodIris: methods.map(rm),
  quantityKindIri: rm('MassFraction'),
  range: { from: '50', to: '500', unit: 'mg/kg' },
});

async function main() {
  const nab = await party('nab', NAB);
  const producer = await party('producer', PRODUCER);
  const lab = await party('lab', LAB);
  const FIXTURE = 'VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)';

  for (const p of [nab, producer, lab]) {
    record(p.controller, `controllers/${p.name}.json`, 'application/json',
      serialize(controllerDocument(p)), FIXTURE);
  }

  // Status lists are signed by the issuer of the credentials they cover.
  const clearList = encodeStatusList(new Uint8Array(MIN_STATUS_BITS / 8));
  const lists: [Party, string, string, 'revocation' | 'suspension'][] = [
    [nab, STATUS_LIST.nab, 'nab', 'revocation'],
    [producer, STATUS_LIST.producer, 'producer', 'revocation'],
    [lab, STATUS_LIST.lab, 'lab', 'revocation'],
    [nab, SUSPENSION_LIST, 'nab-suspension', 'suspension'],
  ];
  for (const [p, listId, file, purpose] of lists) {
    record(listId, `status/${file}.json`, 'application/vc', serialize(await sign({
      '@context': [VC_V2_CONTEXT],
      id: listId,
      type: ['VerifiableCredential', 'BitstringStatusListCredential'],
      issuer: p.controller,
      validFrom: '2026-09-01T00:00:00Z',
      validUntil: '2027-09-01T00:00:00Z',
      credentialSchema: { id: `${RM_V1_SCHEMA_BASE}status-list.json`, type: 'JsonSchema' },
      credentialSubject: {
        id: `${listId}#list`,
        type: 'BitstringStatusList',
        statusPurpose: purpose,
        encodedList: clearList,
      },
    }, p, '2026-09-01T00:00:00Z')), FIXTURE);
  }

  const A_ID = 'https://nab.vc4qi.example/credentials/A';
  const aText = record(A_ID, 'credentials/A.json', 'application/vc', serialize(await sign({
    ...envelope(A_ID, 'RmAccreditation', 'accreditation.json', NAB,
      '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    credentialSubject: {
      id: PRODUCER,
      permittedActivity: [rm('issueRmCertificate'), rm('maintainRmScope')],
      scope: [scopeRecord(`${A_ID}#scope-as`, ['M1', 'M2'])],
    },
  }, nab, '2025-01-01T00:00:00Z')), FIXTURE);

  // A2: a second accreditation granting the producer RM certification directly
  // (the "direct-accreditation" route). D178 does not reference it.
  const A2_ID = 'https://nab.vc4qi.example/credentials/A2';
  record(A2_ID, 'credentials/A2.json', 'application/vc', serialize(await sign({
    ...envelope(A2_ID, 'RmAccreditation', 'accreditation.json', NAB,
      '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    credentialSubject: {
      id: PRODUCER,
      permittedActivity: [rm('issueRmCertificate')],
      scope: [scopeRecord(`${A2_ID}#scope-as`, ['M1'])],
    },
  }, nab, '2025-01-01T00:00:00Z')), FIXTURE);

  const H_ID = 'https://nab.vc4qi.example/credentials/H';
  const hText = record(H_ID, 'credentials/H.json', 'application/vc', serialize(await sign({
    ...envelope(H_ID, 'RmLabAuthority', 'lab-authority.json', NAB,
      '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    credentialSubject: {
      id: LAB,
      permittedActivity: [rm('issueRmStudy')],
      scope: [{
        id: `${H_ID}#scope-homogeneity`,
        matrixIri: rm('CuZn39Pb3'),
        allowedPropertyIris: [rm('As')],
        studyTypeIris: [rm('Homogeneity')],
      }],
    },
  }, nab, '2025-01-01T00:00:00Z')), FIXTURE);

  const O_ID = 'https://producer.vc4qi.example/credentials/O';
  const oText = record(O_ID, 'credentials/O.json', 'application/vc', serialize(await sign({
    ...envelope(O_ID, 'RmOperationalScope', 'operational-scope.json', PRODUCER,
      '2025-06-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    credentialSubject: {
      id: PRODUCER,
      permittedActivity: [rm('issueRmCertificate')],
      scope: [scopeRecord(`${O_ID}#scope-as-m1`, ['M1'])],
    },
    termsOfUse: policy(A_ID, 'RmAccreditation'),
    relatedResource: integrity([A_ID, aText]),
  }, producer, '2025-06-01T00:00:00Z')), FIXTURE);

  const S_ID = 'https://lab.vc4qi.example/credentials/S';
  const sText = record(S_ID, 'credentials/S.json', 'application/vc', serialize(await sign({
    ...envelope(S_ID, 'RmStudy', 'study.json', LAB, '2026-01-15T00:00:00Z', '2031-01-15T00:00:00Z'),
    credentialSubject: {
      id: BATCH,
      activityTime: '2026-01-10T00:00:00Z',
      studyTypeIri: rm('Homogeneity'),
      propertyIri: rm('As'),
      matrixIri: rm('CuZn39Pb3'),
      outcomeIri: rm('Homogeneous'),
    },
    termsOfUse: policy(H_ID, 'RmLabAuthority'),
    relatedResource: integrity([H_ID, hText]),
  }, lab, '2026-01-15T00:00:00Z')), FIXTURE);

  // D178 is the certificate; D197 and D520 are hypothetical reissues by the same
  // fictional producer (fresh valid signatures) for the 197/520 witness cases.
  for (const value of ['178', '197', '520']) {
    const D_ID = `https://producer.vc4qi.example/credentials/D${value}`;
    record(D_ID, `credentials/D${value}.json`, 'application/vc', serialize(await sign({
      ...envelope(D_ID, 'RmCertificate', 'certificate.json', PRODUCER,
        '2026-02-01T00:00:00Z', '2028-02-01T00:00:00Z'),
      credentialSubject: {
        id: BATCH,
        activityTime: '2026-01-20T00:00:00Z',
        materials: [{ matrixIri: rm('CuZn39Pb3'), formIri: rm('Disc'), name: 'Fictional CuZn39Pb3 brass disc' }],
        materialPropertiesList: [{
          isCertified: true,
          results: [{
            propertyIri: rm('As'),
            methodIri: rm('M1'),
            data: { quantity: {
              quantityKind: rm('MassFraction'),
              value,
              unit: { ucumCode: 'mg/kg' },
              uncertainty: { expandedUncertainty: '5', coverageFactor: '2' },
            } },
          }],
        }],
      },
      termsOfUse: policy(O_ID, 'RmOperationalScope'),
      evidence: [{ id: S_ID, type: 'RmStudyReference' }],
      relatedResource: integrity([O_ID, oText], [S_ID, sText]),
    }, producer, '2026-02-01T00:00:00Z')), FIXTURE);
  }

  outputs.set('catalog.json', `${JSON.stringify({
    description: 'Signed RM v1 vertical-slice fixtures. digestSRI is SHA-384 over the exact file bytes. '
      + 'Generated by packages/core-ts/scripts/generate-rm-v1-artifacts.ts; do not edit. Keys are insecure fictional fixtures.',
    resources: index,
  }, null, 2)}\n`);

  const stale: string[] = [];
  for (const [file, text] of outputs) {
    const path = join(OUT, file);
    const current = existsSync(path) ? readFileSync(path, 'utf8') : null;
    if (current === text) continue;
    if (CHECK) { stale.push(relative(ROOT, path)); continue; }
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, text);
  }
  if (stale.length > 0) {
    console.error(`Stale signed RM v1 fixtures (run without --check):\n  ${stale.join('\n  ')}`);
    process.exit(1);
  }
  console.log(CHECK ? 'Signed RM v1 fixtures are up to date.' : `Wrote ${outputs.size} files to ${relative(ROOT, OUT)}.`);
}

await main();
