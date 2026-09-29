// SPDX-License-Identifier: Apache-2.0
// Generates the signed experimental GS certification v1 fixtures, shaped like the legacy
// GS application examples (testdata/examples/gs-hair-dryer-*): a GS mark on a product
// unit rests on a GS certificate for its model, which rests on the GS body's
// accreditation (competence), the ZLS-role scheme authorization, and two studies (a
// type examination and a factory inspection). Controller documents and one Bitstring
// Status List per fictional issuer are included:
//   - GS-A: the NAB's accreditation of the GS body for certifying, testing and factory
//     inspection of toys (EN 71-1, EN 71-2) and household appliances (EN 60335-1, -2-23);
//   - GS-S: the fictional ZLS-role authority's authorization of the same body to award
//     the GS mark, for household appliances only;
//   - TL-A: the NAB's accreditation of an external testing laboratory (household appliances);
//   - FI-1: the GS body's factory inspection of the manufacturer;
//   - TR-1 / TR-3: in-house type examinations (hair dryer HD-01, toy); TR-2: the external
//     laboratory's type examination of hair dryer HD-02;
//   - GSC-1 (HD-01, in-house), GSC-3 (HD-02, external laboratory) and GSC-2 (a toy, which
//     GS-A covers but GS-S does not);
//   - DPP-1..3: the manufacturer's product credentials (experimental passports) claiming
//     the GS mark for one unit each through GSC-1..3; DPP-4 was placed on the market
//     before GSC-1 was issued; DPP-5 is issued by another company citing GSC-1.
//
//   pnpm -C packages/core-ts exec tsx scripts/generate-gs-v1-artifacts.ts          # write
//   pnpm -C packages/core-ts exec tsx scripts/generate-gs-v1-artifacts.ts --check  # fail if stale
//
// Keys are INSECURE fictional fixtures from public seeds (the NAB seed is shared with
// RM v1). Proofs are eddsa-rdfc-2022 over JSON-LD safe mode with the pinned catalog only.
import * as ed from '@noble/ed25519';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProof } from '../src/proofs/index.js';
import { catalogDocumentLoader, sha384SRI, VC_V2_CONTEXT } from '../src/reliance/index.js';
import { GS_V1_CONTEXT, GS_V1_SCHEMA_BASE, GS_V1_VOCAB } from '../src/reliance/gs-v1.js';
import { loadGsV1Catalog } from '../src/reliance/gs-v1-node.js';
import { encodeStatusList, MIN_STATUS_BITS } from '../src/reliance/status-list.js';
import type { JsonObject } from '../src/types.js';
import { toMultibase } from '../src/utils/base58btc.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const OUT = join(ROOT, 'bindings', 'experimental', 'gs-v1', 'test-vectors', 'signed');
const CHECK = process.argv.includes('--check');
const gs = (term: string) => `${GS_V1_VOCAB}${term}`;

const NAB = 'https://nab.vc4qi.example/controller';
const SCHEME = 'https://zls.vc4qi.example/controller';
const TESTLAB = 'https://testlab-gs.vc4qi.example/controller';
const CLONE = 'https://clone.vc4qi.example/controller';
const BODY = 'https://gs-body.vc4qi.example/controller';
const MAKER = 'https://maker.vc4qi.example/controller';
const A_ID = 'https://nab.vc4qi.example/credentials/GS-A';
const S_ID = 'https://zls.vc4qi.example/credentials/GS-S';
const C_ID = 'https://gs-body.vc4qi.example/credentials/GSC-1';
const C2_ID = 'https://gs-body.vc4qi.example/credentials/GSC-2';
const P1_ID = 'https://maker.vc4qi.example/credentials/DPP-1';
const P2_ID = 'https://maker.vc4qi.example/credentials/DPP-2';
const C3_ID = 'https://gs-body.vc4qi.example/credentials/GSC-3';
const TLA_ID = 'https://nab.vc4qi.example/credentials/TL-A';
const FI_ID = 'https://gs-body.vc4qi.example/credentials/FI-1';
const TR1_ID = 'https://gs-body.vc4qi.example/credentials/TR-1';
const TR2_ID = 'https://testlab-gs.vc4qi.example/credentials/TR-2';
const TR3_ID = 'https://gs-body.vc4qi.example/credentials/TR-3';
const P3_ID = 'https://maker.vc4qi.example/credentials/DPP-3';
const P4_ID = 'https://maker.vc4qi.example/credentials/DPP-4';
const P5_ID = 'https://clone.vc4qi.example/credentials/DPP-5';
const HD01 = 'urn:vc4qi-example:product:hair-dryer-hd-01';
const HD02 = 'urn:vc4qi-example:product:hair-dryer-hd-02';
const TOY = 'urn:vc4qi-example:product:toy-001';
const STATUS = {
  nab: 'https://nab.vc4qi.example/status/gs/1',
  scheme: 'https://zls.vc4qi.example/status/gs/1',
  body: 'https://gs-body.vc4qi.example/status/gs/1',
  maker: 'https://maker.vc4qi.example/status/gs/1',
  testlab: 'https://testlab-gs.vc4qi.example/status/gs/1',
  clone: 'https://clone.vc4qi.example/status/gs/1',
} as const;
const STATUS_ENTRY: Record<string, [string, number]> = {
  [A_ID]: [STATUS.nab, 0], [TLA_ID]: [STATUS.nab, 1], [S_ID]: [STATUS.scheme, 0],
  [C_ID]: [STATUS.body, 0], [C2_ID]: [STATUS.body, 1], [C3_ID]: [STATUS.body, 2],
  [FI_ID]: [STATUS.body, 3], [TR1_ID]: [STATUS.body, 4], [TR3_ID]: [STATUS.body, 5], [TR2_ID]: [STATUS.testlab, 0],
  [P1_ID]: [STATUS.maker, 0], [P2_ID]: [STATUS.maker, 1], [P3_ID]: [STATUS.maker, 2], [P4_ID]: [STATUS.maker, 3],
  [P5_ID]: [STATUS.clone, 0],
};

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
    origin: 'VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)', version: '1',
    digestSRI: sha384SRI(new TextEncoder().encode(text)) });
  return text;
}

async function sign(unsigned: JsonObject, signer: Party, created: string): Promise<JsonObject> {
  const entry = STATUS_ENTRY[String(unsigned.id)];
  const document: JsonObject = entry === undefined ? unsigned : { ...unsigned, credentialStatus: {
    id: `${entry[0]}#${entry[1]}`, type: 'BitstringStatusListEntry', statusPurpose: 'revocation',
    statusListIndex: String(entry[1]), statusListCredential: entry[0],
  } };
  const loader = catalogDocumentLoader(loadGsV1Catalog().openSession({ maxResources: 64, maxBytes: 1_000_000 }));
  const proof = await createProof(document, {
    id: `${signer.controller}#key-1`, controller: signer.controller, privateKey: signer.seed, publicKey: signer.publicKey,
  }, { created, documentLoader: loader, safe: true });
  return { ...document, proof };
}

const envelope = (id: string, type: string, schemaFile: string, issuer: string, validFrom: string, validUntil: string): JsonObject => ({
  '@context': [VC_V2_CONTEXT, GS_V1_CONTEXT], id, type: ['VerifiableCredential', type], issuer, validFrom, validUntil,
  credentialSchema: { id: `${GS_V1_SCHEMA_BASE}${schemaFile}`, type: 'JsonSchema' },
});

async function main() {
  const nab = await party('nab', NAB);
  const scheme = await party('zls', SCHEME);
  const body = await party('gs-body', BODY);
  const maker = await party('maker', MAKER);
  const testlab = await party('gs-testlab', TESTLAB);
  const clone = await party('clone', CLONE);
  for (const p of [nab, scheme, body, maker, testlab, clone]) {
    const method = `${p.controller}#key-1`;
    record(p.controller, `controllers/${p.name}.json`, 'application/json', serialize({
      '@context': 'https://www.w3.org/ns/cid/v1', id: p.controller,
      verificationMethod: [{ id: method, type: 'Multikey', controller: p.controller,
        publicKeyMultibase: toMultibase(Uint8Array.from([0xed, 0x01, ...p.publicKey])) }],
      assertionMethod: [method],
    }));
  }
  const clear = encodeStatusList(new Uint8Array(MIN_STATUS_BITS / 8));
  for (const [p, listId] of [[nab, STATUS.nab], [scheme, STATUS.scheme], [body, STATUS.body], [maker, STATUS.maker], [testlab, STATUS.testlab], [clone, STATUS.clone]] as const) {
    record(listId, `status/${p.name}.json`, 'application/vc', serialize(await sign({
      '@context': [VC_V2_CONTEXT], id: listId, type: ['VerifiableCredential', 'BitstringStatusListCredential'],
      issuer: p.controller, validFrom: '2026-09-01T00:00:00Z', validUntil: '2027-09-01T00:00:00Z',
      credentialSchema: { id: `${GS_V1_SCHEMA_BASE}status-list.json`, type: 'JsonSchema' },
      credentialSubject: { id: `${listId}#list`, type: 'BitstringStatusList', statusPurpose: 'revocation', encodedList: clear },
    }, p, '2026-09-01T00:00:00Z')));
  }

  const sri = (text: string) => sha384SRI(new TextEncoder().encode(text));
  const policy = (id: string, type: string) => ({ type: 'GsAuthorizationPolicy', authorizationCredential: { id, type } });
  const household = [gs('EN-60335-1'), gs('EN-60335-2-23')];

  const aText = record(A_ID, 'credentials/GS-A.json', 'application/vc', serialize(await sign({
    ...envelope(A_ID, 'GsAccreditation', 'accreditation.json', NAB, '2024-01-01T00:00:00Z', '2029-01-01T00:00:00Z'),
    name: 'Accreditation of the GS body (certification, testing, factory inspection)',
    credentialSubject: {
      id: BODY,
      permittedActivity: [gs('certifyProducts'), gs('testProducts'), gs('inspectFactories')],
      scope: [
        { id: `${A_ID}#scope-toys`, productCategoryIri: gs('Toy'), standardIris: [gs('EN-71-1'), gs('EN-71-2')] },
        { id: `${A_ID}#scope-household`, productCategoryIri: gs('HouseholdAppliance'), standardIris: household },
      ],
    },
  }, nab, '2024-01-01T00:00:00Z')));
  const tlaText = record(TLA_ID, 'credentials/TL-A.json', 'application/vc', serialize(await sign({
    ...envelope(TLA_ID, 'GsAccreditation', 'accreditation.json', NAB, '2024-06-01T00:00:00Z', '2029-06-01T00:00:00Z'),
    name: 'Accreditation of an external testing laboratory',
    credentialSubject: {
      id: TESTLAB,
      permittedActivity: [gs('testProducts')],
      scope: [{ id: `${TLA_ID}#scope-household`, productCategoryIri: gs('HouseholdAppliance'), standardIris: household }],
    },
  }, nab, '2024-06-01T00:00:00Z')));
  const sText = record(S_ID, 'credentials/GS-S.json', 'application/vc', serialize(await sign({
    ...envelope(S_ID, 'GsSchemeAuthorization', 'scheme-authorization.json', SCHEME, '2025-01-01T00:00:00Z', '2027-01-01T00:00:00Z'),
    name: 'GS scheme authorization (ZLS role, fictional)',
    credentialSubject: {
      id: BODY,
      permittedActivity: [gs('awardGsMark')],
      scope: [{ id: `${S_ID}#scope-household`, productCategoryIri: gs('HouseholdAppliance') }],
    },
  }, scheme, '2025-01-01T00:00:00Z')));

  // Studies: a factory inspection of the manufacturer and type examinations of each model.
  const fiText = record(FI_ID, 'credentials/FI-1.json', 'application/vc', serialize(await sign({
    ...envelope(FI_ID, 'GsInspectionReport', 'inspection-report.json', BODY, '2026-01-25T00:00:00Z', '2029-01-25T00:00:00Z'),
    name: 'Initial factory inspection',
    credentialSubject: { id: 'urn:vc4qi-example:site:maker-plant-1', activityTime: '2026-01-20T09:00:00Z',
      manufacturerIri: MAKER, outcomeIri: gs('Pass') },
    termsOfUse: [policy(A_ID, 'GsAccreditation')],
    relatedResource: [{ id: A_ID, digestSRI: sri(aText) }],
  }, body, '2026-01-25T00:00:00Z')));
  const testReport = async (id: string, file: string, issuer: Party, model: string, category: string, standards: string[],
    at: string, accreditation: [string, string], name: string) =>
    record(id, file, 'application/vc', serialize(await sign({
      ...envelope(id, 'GsTestReport', 'test-report.json', issuer.controller, at, '2031-01-01T00:00:00Z'),
      name,
      credentialSubject: { id: `${model}#type-examination`, activityTime: at, productModelIri: model,
        productCategoryIri: category, standardIris: standards, outcomeIri: gs('Pass') },
      termsOfUse: [policy(accreditation[0], 'GsAccreditation')],
      relatedResource: [{ id: accreditation[0], digestSRI: sri(accreditation[1]) }],
    }, issuer, at)));
  const tr1Text = await testReport(TR1_ID, 'credentials/TR-1.json', body, HD01, gs('HouseholdAppliance'), household,
    '2026-02-10T00:00:00Z', [A_ID, aText], 'Type examination of hair dryer HD-01 (GS body laboratory)');
  const tr2Text = await testReport(TR2_ID, 'credentials/TR-2.json', testlab, HD02, gs('HouseholdAppliance'), household,
    '2026-02-12T00:00:00Z', [TLA_ID, tlaText], 'Type examination of hair dryer HD-02 (external laboratory)');
  const tr3Text = await testReport(TR3_ID, 'credentials/TR-3.json', body, TOY, gs('Toy'), [gs('EN-71-1')],
    '2026-02-05T00:00:00Z', [A_ID, aText], 'Type examination of toy 001 (GS body laboratory)');

  const certificate = async (id: string, file: string, model: string, category: string, standards: string[],
    at: string, validFrom: string, study: [string, string], name: string) =>
    record(id, file, 'application/vc', serialize(await sign({
      ...envelope(id, 'GsCertificate', 'certificate.json', BODY, validFrom, '2031-03-01T00:00:00Z'),
      name,
      credentialSubject: { id: model, activityTime: at, manufacturerIri: MAKER,
        certification: { productCategoryIri: category, standardIris: standards } },
      termsOfUse: [policy(A_ID, 'GsAccreditation'), policy(S_ID, 'GsSchemeAuthorization')],
      evidence: [{ id: study[0], type: 'GsTypeExaminationReference' }, { id: FI_ID, type: 'GsFactoryInspectionReference' }],
      relatedResource: [{ id: A_ID, digestSRI: sri(aText) }, { id: S_ID, digestSRI: sri(sText) },
        { id: study[0], digestSRI: sri(study[1]) }, { id: FI_ID, digestSRI: sri(fiText) }],
    }, body, validFrom)));
  const c1Text = await certificate(C_ID, 'credentials/GSC-1.json', HD01, gs('HouseholdAppliance'), household,
    '2026-02-27T10:00:00Z', '2026-03-01T00:00:00Z', [TR1_ID, tr1Text], 'GS certificate, hair dryer HD-01');
  const c2Text = await certificate(C2_ID, 'credentials/GSC-2.json', TOY, gs('Toy'), [gs('EN-71-1')],
    '2026-02-27T11:00:00Z', '2026-03-01T00:00:00Z', [TR3_ID, tr3Text], 'GS certificate, toy 001');
  const c3Text = await certificate(C3_ID, 'credentials/GSC-3.json', HD02, gs('HouseholdAppliance'), household,
    '2026-02-28T10:00:00Z', '2026-03-02T00:00:00Z', [TR2_ID, tr2Text], 'GS certificate, hair dryer HD-02');

  // The manufacturer's product credentials (experimental passports): each claims the GS
  // mark for one unit of a certified model. Not EU Digital Product Passport conformance.
  const passport = async (id: string, file: string, issuer: Party, serial: string, model: string,
    certId: string, certText: string, at: string) =>
    record(id, file, 'application/vc', serialize(await sign({
      ...envelope(id, 'GsProductPassport', 'product-passport.json', issuer.controller, at, '2036-01-01T00:00:00Z'),
      name: `GS mark, ${model.split(':').pop()} unit ${serial.split('-sn-').pop()}`,
      credentialSubject: {
        id: serial,
        activityTime: at,
        productModelIri: model,
        marking: { markIri: gs('GsMark'), productModelIri: model },
      },
      termsOfUse: [policy(certId, 'GsCertificate')],
      relatedResource: [{ id: certId, digestSRI: sri(certText) }],
    }, issuer, at)));
  await passport(P1_ID, 'credentials/DPP-1.json', maker, 'urn:vc4qi-example:unit:hd-01-sn-0042', HD01, C_ID, c1Text, '2026-05-10T00:00:00Z');
  await passport(P2_ID, 'credentials/DPP-2.json', maker, 'urn:vc4qi-example:unit:toy-001-sn-0007', TOY, C2_ID, c2Text, '2026-05-10T00:00:00Z');
  await passport(P3_ID, 'credentials/DPP-3.json', maker, 'urn:vc4qi-example:unit:hd-02-sn-0011', HD02, C3_ID, c3Text, '2026-05-12T00:00:00Z');
  await passport(P4_ID, 'credentials/DPP-4.json', maker, 'urn:vc4qi-example:unit:hd-01-sn-0001', HD01, C_ID, c1Text, '2026-02-15T00:00:00Z');
  await passport(P5_ID, 'credentials/DPP-5.json', clone, 'urn:vc4qi-example:unit:hd-01-sn-9999', HD01, C_ID, c1Text, '2026-05-10T00:00:00Z');

  outputs.set('catalog.json', `${JSON.stringify({
    description: 'Signed GS certification v1 fixtures. digestSRI is SHA-384 over the exact file bytes. '
      + 'Generated by packages/core-ts/scripts/generate-gs-v1-artifacts.ts; do not edit. Keys are insecure fictional fixtures.',
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
    console.error(`Stale signed GS v1 fixtures (run without --check):\n  ${stale.join('\n  ')}`);
    process.exit(1);
  }
  console.log(CHECK ? 'Signed GS v1 fixtures are up to date.' : `Wrote ${outputs.size} files to ${relative(ROOT, OUT)}.`);
}

await main();
