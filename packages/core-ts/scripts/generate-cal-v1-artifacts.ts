// SPDX-License-Identifier: Apache-2.0
// Generates the signed experimental calibration (DCC) v1 fixtures for the migrated
// calibration-direct-accreditation use case: controller documents for the fictional
// NAB and laboratory, a signed accreditation CA with a pressure calibration scope
// (0-10 MPa, method PressureComparison, CMC 0.5 kPa), a signed calibration certificate
// DCC-1 with two measurement groups, and one Bitstring Status List per issuer.
//
//   pnpm -C packages/core-ts exec tsx scripts/generate-cal-v1-artifacts.ts          # write
//   pnpm -C packages/core-ts exec tsx scripts/generate-cal-v1-artifacts.ts --check  # fail if stale
//
// Keys are INSECURE fictional fixtures from public seeds (the same parties as RM v1).
// Proofs are eddsa-rdfc-2022 over JSON-LD safe mode with the pinned catalog only.
import * as ed from '@noble/ed25519';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProof } from '../src/proofs/index.js';
import { catalogDocumentLoader, sha384SRI, VC_V2_CONTEXT } from '../src/reliance/index.js';
import { CAL_V1_CONTEXT, CAL_V1_SCHEMA_BASE, CAL_V1_VOCAB } from '../src/reliance/cal-v1.js';
import { loadCalV1Catalog } from '../src/reliance/cal-v1-node.js';
import { encodeStatusList, MIN_STATUS_BITS } from '../src/reliance/status-list.js';
import type { JsonObject } from '../src/types.js';
import { toMultibase } from '../src/utils/base58btc.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const OUT = join(ROOT, 'bindings', 'experimental', 'cal-v1', 'test-vectors', 'signed');
const CHECK = process.argv.includes('--check');
const cal = (term: string) => `${CAL_V1_VOCAB}${term}`;

const NAB = 'https://nab.vc4qi.example/controller';
const LAB = 'https://lab.vc4qi.example/controller';
const CA_ID = 'https://nab.vc4qi.example/credentials/CAL-A';
const DCC_ID = 'https://lab.vc4qi.example/credentials/DCC-1';
const STATUS = { nab: 'https://nab.vc4qi.example/status/cal/1', lab: 'https://lab.vc4qi.example/status/cal/1' } as const;
const STATUS_ENTRY: Record<string, [string, number]> = { [CA_ID]: [STATUS.nab, 0], [DCC_ID]: [STATUS.lab, 0] };

interface Party { name: string; controller: string; seed: Uint8Array; publicKey: Uint8Array }
async function party(name: string, controller: string): Promise<Party> {
  const seed = createHash('sha256').update(`vc4qi-rm-v1-insecure-fixture-key:${name}`).digest();
  return { name, controller, seed, publicKey: await ed.getPublicKeyAsync(seed) };
}
const serialize = (document: JsonObject) => `${JSON.stringify(document, null, 2)}\n`;
const outputs = new Map<string, string>();
const index: Record<string, unknown>[] = [];
function record(uri: string, file: string, mediaType: string, text: string) {
  outputs.set(file, text);
  index.push({ uri, path: relative(ROOT, join(OUT, file)), mediaType,
    origin: 'VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)', version: '1',
    digestSRI: sha384SRI(new TextEncoder().encode(text)) });
  return text;
}

async function sign(unsigned: JsonObject, signer: Party, created: string): Promise<JsonObject> {
  const entry = STATUS_ENTRY[String(unsigned.id)];
  const document: JsonObject = entry === undefined ? unsigned : { ...unsigned, credentialStatus: {
    id: `${entry[0]}#${entry[1]}`, type: 'BitstringStatusListEntry', statusPurpose: 'revocation',
    statusListIndex: String(entry[1]), statusListCredential: entry[0],
  } };
  const loader = catalogDocumentLoader(loadCalV1Catalog().openSession({ maxResources: 64, maxBytes: 1_000_000 }));
  const proof = await createProof(document, {
    id: `${signer.controller}#key-1`, controller: signer.controller, privateKey: signer.seed, publicKey: signer.publicKey,
  }, { created, documentLoader: loader, safe: true });
  return { ...document, proof };
}

const envelope = (id: string, type: string, schemaFile: string, issuer: string, validFrom: string, validUntil: string): JsonObject => ({
  '@context': [VC_V2_CONTEXT, CAL_V1_CONTEXT], id, type: ['VerifiableCredential', type], issuer, validFrom, validUntil,
  credentialSchema: { id: `${CAL_V1_SCHEMA_BASE}${schemaFile}`, type: 'JsonSchema' },
});

async function main() {
  const nab = await party('nab', NAB);
  const lab = await party('lab', LAB);
  for (const p of [nab, lab]) {
    const method = `${p.controller}#key-1`;
    record(p.controller, `controllers/${p.name}.json`, 'application/json', serialize({
      '@context': 'https://www.w3.org/ns/cid/v1', id: p.controller,
      verificationMethod: [{ id: method, type: 'Multikey', controller: p.controller,
        publicKeyMultibase: toMultibase(Uint8Array.from([0xed, 0x01, ...p.publicKey])) }],
      assertionMethod: [method],
    }));
  }
  const clear = encodeStatusList(new Uint8Array(MIN_STATUS_BITS / 8));
  for (const [p, listId] of [[nab, STATUS.nab], [lab, STATUS.lab]] as const) {
    record(listId, `status/${p.name}.json`, 'application/vc', serialize(await sign({
      '@context': [VC_V2_CONTEXT], id: listId, type: ['VerifiableCredential', 'BitstringStatusListCredential'],
      issuer: p.controller, validFrom: '2026-09-01T00:00:00Z', validUntil: '2027-09-01T00:00:00Z',
      credentialSchema: { id: `${CAL_V1_SCHEMA_BASE}status-list.json`, type: 'JsonSchema' },
      credentialSubject: { id: `${listId}#list`, type: 'BitstringStatusList', statusPurpose: 'revocation', encodedList: clear },
    }, p, '2026-09-01T00:00:00Z')));
  }

  const caText = record(CA_ID, 'credentials/CAL-A.json', 'application/vc', serialize(await sign({
    ...envelope(CA_ID, 'CalAccreditation', 'accreditation.json', NAB, '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    credentialSubject: {
      id: LAB,
      permittedActivity: [cal('issueCalibrationCertificate')],
      scope: [{
        id: `${CA_ID}#scope-pressure`,
        quantityKindIri: cal('Pressure'),
        allowedMethodIris: [cal('PressureComparison')],
        range: { from: '0', to: '10', unit: 'MPa' },
        cmcFloor: { value: '0.5', unit: 'kPa' },
      }],
    },
  }, nab, '2025-01-01T00:00:00Z')));

  record(DCC_ID, 'credentials/DCC-1.json', 'application/vc', serialize(await sign({
    ...envelope(DCC_ID, 'CalCertificate', 'certificate.json', LAB, '2026-01-15T00:00:00Z', '2028-01-15T00:00:00Z'),
    credentialSubject: {
      id: 'urn:vc4qi-example:item:pressure-transmitter-1',
      activityTime: '2026-01-14T12:00:00Z',
      measurementGroups: [
        { id: `${DCC_ID}#g1`, quantityKindIri: cal('Pressure'), methodIris: [cal('PressureComparison')],
          results: [{ value: '1000', unit: 'kPa', expandedUncertainty: '0.8', coverageFactor: '2' }] },
        { id: `${DCC_ID}#g2`, quantityKindIri: cal('Pressure'), methodIris: [cal('PressureComparison')],
          results: [{ value: '5', unit: 'MPa', expandedUncertainty: '0.002', coverageFactor: '2' }] },
      ],
    },
    termsOfUse: [{ type: 'CalAuthorizationPolicy', authorizationCredential: { id: CA_ID, type: 'CalAccreditation' } }],
    relatedResource: [{ id: CA_ID, digestSRI: sha384SRI(new TextEncoder().encode(caText)) }],
  }, lab, '2026-01-15T00:00:00Z')));

  outputs.set('catalog.json', `${JSON.stringify({
    description: 'Signed calibration v1 fixtures. digestSRI is SHA-384 over the exact file bytes. '
      + 'Generated by packages/core-ts/scripts/generate-cal-v1-artifacts.ts; do not edit. Keys are insecure fictional fixtures.',
    resources: index,
  }, null, 2)}\n`);
  const stale: string[] = [];
  for (const [file, text] of outputs) {
    const path = join(OUT, file);
    if ((existsSync(path) ? readFileSync(path, 'utf8') : null) === text) continue;
    if (CHECK) { stale.push(relative(ROOT, path)); continue; }
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, text);
  }
  if (stale.length > 0) {
    console.error(`Stale signed calibration v1 fixtures (run without --check):\n  ${stale.join('\n  ')}`);
    process.exit(1);
  }
  console.log(CHECK ? 'Signed calibration v1 fixtures are up to date.' : `Wrote ${outputs.size} files to ${relative(ROOT, OUT)}.`);
}

await main();
