// SPDX-License-Identifier: Apache-2.0
// Generates the signed experimental RM v1 vertical-slice fixtures:
//   controller documents for the fictional NAB, producer and laboratory, and signed
//   credentials, each identified by a code that says what it is and of whom (the paper's
//   letters in brackets):
//     ACC-RMP (A): the NAB's accreditation of the RM producer (ISO 17034), shaped after a
//       flexible-scope annex row: element contents of non-ferrous metals and alloys,
//       0.1 mg/kg to 997 g/kg; ACC-RMP-2 (A2): a second, direct accreditation that RM178
//       does not reference;
//     ACC-LAB (H): the NAB's accreditation of the testing laboratory (ISO/IEC 17025);
//     LIST-RMP (O): the producer's list of activities under its flexible scope;
//     HOM-LOT1 (S): the laboratory's homogeneity study of disc lot 1;
//     RM178 (D178): the RM certificate, x = 178 mg/kg, U = 5, k = 2, with the Cu, Zn and Pb
//       values of the M375a DRMD transcription as further certified results; RM197 and
//       RM520, hypothetical reissues with x = 197 / 520;
//     REC-NAB (R): a fictional Global ACI stand-in's recognition of the NAB for RM production
//       and testing (a W3C Recognized Entities credential with one subject);
//     APP-NAB (APP): a fictional state's appointment of the NAB (Regulation (EC) No 765/2008,
//       Art. 4(1)) in the shape of EBSI's VerifiableAuthorisationForTrustChain.
//   Every credential carries a name. ACC-RMP and ACC-LAB name sets (non-ferrous metals and
//   alloys, element contents, solid forms), as an accreditation annex does; LIST-RMP,
//   HOM-LOT1 and RM178 name members.
//
//   pnpm -C packages/core-ts exec tsx scripts/generate-rm-v1-artifacts.ts          # write files
//   pnpm -C packages/core-ts exec tsx scripts/generate-rm-v1-artifacts.ts --check  # fail if stale
//
// Every key is an INSECURE fictional fixture derived from a public seed, so the
// output is reproducible. Proofs are eddsa-rdfc-2022 over JSON-LD safe-mode
// canonicalization with the pinned RM v1 catalog only (no network). Each link (a termsOfUse
// or evidence entry) carries the SHA-384 digest of the exact bytes of the signed file it names. Never edit
// the output by hand; change this generator and regenerate.
import * as ed from '@noble/ed25519';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProof } from '../src/proofs/index.js';
import {
  catalogDocumentLoader, RECOGNIZED_ENTITIES_DRAFT_CONTEXT, RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, RM_V1_VOCAB, sha384SRI,
  VC_V2_CONTEXT,
} from '../src/reliance/index.js';
import { loadRmV1Catalog } from '../src/reliance/rm-v1-node.js';
import { expandedReal } from '../src/reliance/dsi.js';
import { MG_PER_KG, PERCENT } from '../src/reliance/rm-scope.js';
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
// A fictional stand-in for an arrangement anchor; not Global Accreditation Cooperation
// Incorporated, and nothing here represents it.
const GACI = 'https://global-aci.vc4qi.example/controller';
// One recognition per recognized body: Global ACI's recognition of the NAB.
const RECOGNITION = 'https://global-aci.vc4qi.example/credentials/REC-NAB';
// A fictional state that appoints the NAB as its national accreditation body.
const STATE = 'https://state.vc4qi.example/controller';
const APPOINTMENT = 'https://state.vc4qi.example/credentials/APP-NAB';
const APPOINTMENT_TYPE = 'VerifiableAuthorisationForTrustChain';
const BATCH = 'urn:vc4qi-example:batch:cuzn39pb3-disc-lot-1';

// Revocation status: one Bitstring Status List per issuer, all bits clear. The NAB
// also publishes a suspension list for the accreditations it issues; a suspension
// is evaluated as a global restriction, outside the OR of routes.
const STATUS_LIST = {
  nab: 'https://nab.vc4qi.example/status/1',
  producer: 'https://producer.vc4qi.example/status/1',
  lab: 'https://lab.vc4qi.example/status/1',
  gaci: 'https://global-aci.vc4qi.example/status/1',
  state: 'https://state.vc4qi.example/status/1',
} as const;
const SUSPENSION_LIST = 'https://nab.vc4qi.example/status/suspension/1';
// The arrangement anchor can suspend its recognition of one body without touching others.
const GACI_SUSPENSION_LIST = 'https://global-aci.vc4qi.example/status/suspension/1';
// The state can suspend or withdraw its appointment.
const STATE_SUSPENSION_LIST = 'https://state.vc4qi.example/status/suspension/1';
type Entry = [list: string, index: number, purpose: 'revocation' | 'suspension'];
// The NAB can suspend either accreditation it issues.
const STATUS_ENTRY: Record<string, Entry[]> = {
  'https://nab.vc4qi.example/credentials/ACC-RMP': [[STATUS_LIST.nab, 0, 'revocation'], [SUSPENSION_LIST, 0, 'suspension']],
  'https://nab.vc4qi.example/credentials/ACC-RMP-2': [[STATUS_LIST.nab, 2, 'revocation'], [SUSPENSION_LIST, 2, 'suspension']],
  'https://nab.vc4qi.example/credentials/ACC-LAB': [[STATUS_LIST.nab, 1, 'revocation'], [SUSPENSION_LIST, 1, 'suspension']],
  'https://producer.vc4qi.example/credentials/LIST-RMP': [[STATUS_LIST.producer, 0, 'revocation']],
  'https://producer.vc4qi.example/credentials/RM178': [[STATUS_LIST.producer, 1, 'revocation']],
  'https://producer.vc4qi.example/credentials/RM197': [[STATUS_LIST.producer, 2, 'revocation']],
  'https://producer.vc4qi.example/credentials/RM520': [[STATUS_LIST.producer, 3, 'revocation']],
  'https://lab.vc4qi.example/credentials/HOM-LOT1': [[STATUS_LIST.lab, 0, 'revocation']],
  [RECOGNITION]: [[STATUS_LIST.gaci, 0, 'revocation'], [GACI_SUSPENSION_LIST, 0, 'suspension']],
  [APPOINTMENT]: [[STATUS_LIST.state, 0, 'revocation'], [STATE_SUSPENSION_LIST, 0, 'suspension']],
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

// Every upward link is a termsOfUse entry whose id is the credential it names, with the
// digest of that credential's exact bytes (VCDM 2.0 §5.3: any object with an id MAY carry
// digestSRI); its type says what it means.
const digest = (text: string) => sha384SRI(new TextEncoder().encode(text));
const link = (type: string, id: string, text: string) => ({ id, type, digestSRI: digest(text) });
// IssuedUnderPolicy: issued exercising the named grant (authority).
const policy = (id: string, text: string) => [link('IssuedUnderPolicy', id, text)];
// A grant of the NAB names the appointment it was issued under (IssuedUnderPolicy: the NAB
// issues its grants exercising the authority the state appointed it with) and the NAB's
// recognition (RecognitionPolicy). Recognition confers no authority: the NAB's authority
// is its national appointment, which a verifier that anchors the NAB trusts directly. The
// issuer object mirrors the recognition as issuer.recognizedIn, for W3C Recognized
// Entities discovery.
const underAppointmentAndRecognition = (appText: string, rText: string) => ({
  issuer: { id: NAB, recognizedIn: { id: RECOGNITION, type: 'RecognizedEntityCredential' } },
  termsOfUse: [link('IssuedUnderPolicy', APPOINTMENT, appText), link('RecognitionPolicy', RECOGNITION, rText)],
});
const scopeRecord = (id: string, methods: string[], properties = ['As'], range = { from: '50', to: '500' },
  matrix = 'CuZn39Pb3', form = 'Disc') => ({
  id,
  matrixIri: rm(matrix),
  formIri: rm(form),
  allowedPropertyIris: properties.map(rm),
  allowedMethodIris: methods.map(rm),
  quantityTypeQUDT: 'MassFraction',
  range: { ...range, unit: MG_PER_KG },
});

async function main() {
  const nab = await party('nab', NAB);
  const producer = await party('producer', PRODUCER);
  const lab = await party('lab', LAB);
  const gaci = await party('global-aci', GACI);
  const state = await party('state', STATE);
  const FIXTURE = 'VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)';

  for (const p of [nab, producer, lab, gaci, state]) {
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
    [gaci, STATUS_LIST.gaci, 'global-aci', 'revocation'],
    [gaci, GACI_SUSPENSION_LIST, 'global-aci-suspension', 'suspension'],
    [state, STATUS_LIST.state, 'state', 'revocation'],
    [state, STATE_SUSPENSION_LIST, 'state-suspension', 'suspension'],
  ];
  const statusList = (p: Party, listId: string, purpose: string, validFrom: string, validUntil: string) => sign({
    '@context': [VC_V2_CONTEXT],
    id: listId,
    type: ['VerifiableCredential', 'BitstringStatusListCredential'],
    issuer: p.controller,
    validFrom,
    validUntil,
    credentialSchema: { id: `${RM_V1_SCHEMA_BASE}status-list.json`, type: 'JsonSchema' },
    credentialSubject: {
      id: `${listId}#list`,
      type: 'BitstringStatusList',
      statusPurpose: purpose,
      encodedList: clearList,
    },
  }, p, validFrom);
  for (const [p, listId, file, purpose] of lists) {
    record(listId, `status/${file}.json`, 'application/vc',
      serialize(await statusList(p, listId, purpose, '2026-09-01T00:00:00Z', '2027-09-01T00:00:00Z')), FIXTURE);
  }
  // The same lists as their issuers signed them in January 2026 and kept: each answers
  // status at a time inside its own validity window, e.g. D178's activity on 20 January,
  // which a list signed in September cannot. Same identifiers, so they live in their own
  // archive catalog; a resolver serves them for a question about that time.
  const archive: Record<string, unknown>[] = [];
  for (const [p, listId, file, purpose] of lists) {
    const path = `status-archive/2026-01/${file}.json`;
    const text = serialize(await statusList(p, listId, purpose, '2026-01-01T00:00:00Z', '2026-03-01T00:00:00Z'));
    outputs.set(path, text);
    archive.push({ uri: listId, path: relative(ROOT, join(OUT, path)), mediaType: 'application/vc', origin: FIXTURE,
      version: '1', validFrom: '2026-01-01T00:00:00Z', validUntil: '2026-03-01T00:00:00Z',
      digestSRI: sha384SRI(new TextEncoder().encode(text)) });
  }
  outputs.set('status-archive/2026-01/catalog.json', `${JSON.stringify({
    description: 'Status lists of the RM v1 fixture issuers as signed and kept in January 2026 (all bits clear), '
      + 'for questions about a time inside 2026-01-01 to 2026-03-01. Same identifiers as the current lists in '
      + '../../catalog.json. Generated by packages/core-ts/scripts/generate-rm-v1-artifacts.ts; do not edit.',
    resources: archive,
  }, null, 2)}\n`);

  // R: Global ACI's recognition of the NAB, one credential for one recognized body
  // (the shape of a W3C Recognized Entities credential, Working Draft of 12 November
  // 2026). recognizedTo names the action (accredit); registration records the NAB's
  // entry in the signatory register Global ACI keeps, with its two main scopes
  // (activity and normative document, as RFC 5141 ISO URNs; the ILAC and IAF main
  // scope, an RM binding extension term). Global ACI can suspend or revoke it through
  // its own status entries. Recognition grants no authority and no QI scope: it tells a
  // verifier that anchors Global ACI to accept the NAB for these main scopes.
  const mainScope = (activity: string, id: string, name: string) => ({ activity, standard: { id, name } });
  const signatory = 'https://global-aci.vc4qi.example/signatories/nab';
  const rText = record(RECOGNITION, 'credentials/REC-NAB.json', 'application/vc', serialize(await sign({
    '@context': [VC_V2_CONTEXT, RECOGNIZED_ENTITIES_DRAFT_CONTEXT],
    id: RECOGNITION,
    type: ['VerifiableCredential', 'RecognizedEntityCredential'],
    issuer: { id: GACI, type: 'RecognizedIssuer', name: 'Global ACI (fictional stand-in)' },
    validFrom: '2024-01-01T00:00:00Z',
    validUntil: '2029-01-01T00:00:00Z',
    credentialSchema: { id: `${RM_V1_SCHEMA_BASE}recognized-entity.json`, type: 'JsonSchema' },
    name: 'Recognition of the NAB',
    description: 'Global ACI recognizes the national accreditation body (NAB) to accredit, for RM production and testing. '
      + 'Fictional fixture in the shape of a W3C Recognized Entities credential. Not issued or endorsed by '
      + 'Global Accreditation Cooperation Incorporated or any accreditation body.',
    credentialSubject: {
      id: NAB,
      type: 'RecognizedEntity',
      name: 'Fictional national accreditation body',
      recognizedTo: [{ type: 'RecognizedAction', action: 'accredit', recognizedBy: GACI }],
      registration: [
        { id: `${signatory}#rm-production`, mainScope: mainScope('Reference material production', 'urn:iso:std:iso:17034:ed-1', 'ISO 17034:2016') },
        { id: `${signatory}#testing`, mainScope: mainScope('Testing', 'urn:iso:std:iso-iec:17025:ed-3', 'ISO/IEC 17025:2017') },
      ],
    },
  }, gaci, '2024-01-01T00:00:00Z')), FIXTURE);

  // APP: the state's appointment of the NAB, in the shape of EBSI's root trust-chain
  // credential (VerifiableAuthorisationForTrustChain; @cef-ebsi/vcdm2.0-trust-model-schema
  // 2.0.0, and VCDM 2.0 Example 28). permissionFor names what the NAB may issue: per
  // credential type, its schema and the jurisdiction (an EU authority-table URI, as EBSI
  // uses). Its own termsOfUse is a TrustFrameworkPolicy naming the legal basis: the top of
  // the chain points to law, not to another credential. The appointment, not Global ACI's
  // recognition, is where the NAB's authority comes from.
  const JURISDICTION = 'https://publications.europa.eu/resource/authority/atu/DEU';
  const permission = (file: string, type: string) =>
    ({ schemaId: `${RM_V1_SCHEMA_BASE}${file}`, types: ['VerifiableCredential', type], jurisdiction: JURISDICTION });
  const appText = record(APPOINTMENT, 'credentials/APP-NAB.json', 'application/vc', serialize(await sign({
    ...envelope(APPOINTMENT, APPOINTMENT_TYPE, 'appointment.json', STATE, '2020-01-01T00:00:00Z', '2035-01-01T00:00:00Z'),
    name: 'Appointment of the NAB',
    description: 'The state appoints its national accreditation body (NAB) under Regulation (EC) No 765/2008, Article 4(1). '
      + 'Fictional fixture in the shape of an EBSI VerifiableAuthorisationForTrustChain. Not issued by any state.',
    credentialSubject: {
      id: NAB,
      permissionFor: [permission('rmp-accreditation.json', 'RmpAccreditation'), permission('lab-accreditation.json', 'LabAccreditation')],
    },
    termsOfUse: {
      type: 'TrustFrameworkPolicy',
      trustFramework: 'National accreditation (fictional fixture)',
      policyId: 'https://state.vc4qi.example/policies/accreditation-body-appointment',
      legalBasis: 'Regulation (EC) No 765/2008, Article 4(1)',
    },
  }, state, '2020-01-01T00:00:00Z')), FIXTURE);

  const A_ID = 'https://nab.vc4qi.example/credentials/ACC-RMP';
  const aText = record(A_ID, 'credentials/ACC-RMP.json', 'application/vc', serialize(await sign({
    ...envelope(A_ID, 'RmpAccreditation', 'rmp-accreditation.json', NAB,
      '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    name: 'Accreditation of the RM producer',
    description: 'The NAB accredits the RM producer to ISO 17034, with a flexible scope. Fictional fixture.',
    credentialSubject: {
      id: PRODUCER,
      permittedActivity: [rm('issueRmCertificate'), rm('maintainRmScope')],
      // An accreditation annex row names sets, not members: "non-ferrous metals and
      // alloys, element contents, 0.1 mg/kg – 997 g/kg", in solid forms, with a flexible
      // scope: the producer keeps its own, narrower list (O). The binding's governed
      // hierarchy (manifest scopeAndMapping.broader, skos:broader) places CuZn39Pb3,
      // discs and arsenic under these sets; 997 g/kg is written in mg/kg.
      scope: [scopeRecord(`${A_ID}#scope-non-ferrous`, ['M1', 'M2'], ['ElementContents'], { from: '0.1', to: '997000' },
        'NonFerrousMetalsAndAlloys', 'SolidForms')],
    },
    ...underAppointmentAndRecognition(appText, rText),
  }, nab, '2025-01-01T00:00:00Z')), FIXTURE);

  // ACC-RMP-2: a second accreditation granting the producer RM certification directly
  // (the "direct-accreditation" route). RM178 does not reference it.
  const A2_ID = 'https://nab.vc4qi.example/credentials/ACC-RMP-2';
  record(A2_ID, 'credentials/ACC-RMP-2.json', 'application/vc', serialize(await sign({
    ...envelope(A2_ID, 'RmpAccreditation', 'rmp-accreditation.json', NAB,
      '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    name: 'Second accreditation of the RM producer',
    description: 'A second, direct accreditation of the RM producer to ISO 17034, for arsenic by method M1. Fictional fixture.',
    credentialSubject: {
      id: PRODUCER,
      permittedActivity: [rm('issueRmCertificate')],
      scope: [scopeRecord(`${A2_ID}#scope-as`, ['M1'])],
    },
    ...underAppointmentAndRecognition(appText, rText),
  }, nab, '2025-01-01T00:00:00Z')), FIXTURE);

  const H_ID = 'https://nab.vc4qi.example/credentials/ACC-LAB';
  const hText = record(H_ID, 'credentials/ACC-LAB.json', 'application/vc', serialize(await sign({
    ...envelope(H_ID, 'LabAccreditation', 'lab-accreditation.json', NAB,
      '2025-01-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    name: 'Accreditation of the laboratory',
    description: 'The NAB accredits the testing laboratory to ISO/IEC 17025, for homogeneity studies. Fictional fixture.',
    credentialSubject: {
      id: LAB,
      permittedActivity: [rm('issueRmStudy')],
      // Also a set: homogeneity studies of element contents in non-ferrous metals and alloys.
      scope: [{
        id: `${H_ID}#scope-homogeneity`,
        matrixIri: rm('NonFerrousMetalsAndAlloys'),
        allowedPropertyIris: [rm('ElementContents')],
        studyTypeIris: [rm('Homogeneity')],
      }],
    },
    ...underAppointmentAndRecognition(appText, rText),
  }, nab, '2025-01-01T00:00:00Z')), FIXTURE);

  const O_ID = 'https://producer.vc4qi.example/credentials/LIST-RMP';
  const oText = record(O_ID, 'credentials/LIST-RMP.json', 'application/vc', serialize(await sign({
    ...envelope(O_ID, 'FlexibleScopeList', 'flexible-scope-list.json', PRODUCER,
      '2025-06-01T00:00:00Z', '2030-01-01T00:00:00Z'),
    name: 'Scope list of the RM producer',
    description: 'The activities the RM producer performs under its flexible scope of accreditation (EA-2/15): arsenic '
      + 'in CuZn39Pb3 discs, 50 to 500 mg/kg, method M1. Fictional fixture.',
    credentialSubject: {
      id: PRODUCER,
      permittedActivity: [rm('issueRmCertificate')],
      scope: [scopeRecord(`${O_ID}#scope-as-m1`, ['M1'])],
    },
    termsOfUse: policy(A_ID, aText),
  }, producer, '2025-06-01T00:00:00Z')), FIXTURE);

  const S_ID = 'https://lab.vc4qi.example/credentials/HOM-LOT1';
  const sText = record(S_ID, 'credentials/HOM-LOT1.json', 'application/vc', serialize(await sign({
    ...envelope(S_ID, 'HomogeneityStudy', 'homogeneity-study.json', LAB, '2026-01-15T00:00:00Z', '2031-01-15T00:00:00Z'),
    name: 'Homogeneity study of disc lot 1',
    description: 'The laboratory finds CuZn39Pb3 disc lot 1 homogeneous for arsenic (ISO 17034, ISO Guide 35). Fictional fixture.',
    credentialSubject: {
      id: BATCH,
      activityTime: '2026-01-10T00:00:00Z',
      studyTypeIri: rm('Homogeneity'),
      propertyIri: rm('As'),
      matrixIri: rm('CuZn39Pb3'),
      outcomeIri: rm('Homogeneous'),
    },
    termsOfUse: policy(H_ID, hText),
  }, lab, '2026-01-15T00:00:00Z')), FIXTURE);

  // Each certified value is a PTB D-SI real (dsi.ts), as in the DRMD: QUDT quantity
  // kind, D-SI unit identifier and an expanded uncertainty at k = 2.
  const certified = (element: string, value: string, unit: string, valueExpandedMU: string) => ({
    propertyIri: rm(element),
    methodIri: rm('M1'),
    data: { quantity: { real: expandedReal(element, 'MassFraction', value, unit, valueExpandedMU) } },
  });
  // RM178 is the certificate; RM197 and RM520 are hypothetical reissues by the same
  // fictional producer (fresh valid signatures) for the 197/520 witness cases.
  for (const value of ['178', '197', '520']) {
    const D_ID = `https://producer.vc4qi.example/credentials/RM${value}`;
    record(D_ID, `credentials/RM${value}.json`, 'application/vc', serialize(await sign({
      ...envelope(D_ID, 'RmCertificate', 'certificate.json', PRODUCER,
        '2026-02-01T00:00:00Z', '2028-02-01T00:00:00Z'),
      name: 'RM certificate of disc lot 1',
      description: `Reference material certificate for CuZn39Pb3 disc lot 1: As = ${value} ± 5 mg/kg${value === '178' ? '' : ' (hypothetical reissue)'}. `
        + 'Shaped after the DRMD; fictional fixture.',
      credentialSubject: {
        id: BATCH,
        activityTime: '2026-01-20T00:00:00Z',
        materials: [{ matrixIri: rm('CuZn39Pb3'), formIri: rm('Disc'), name: 'Fictional CuZn39Pb3 brass disc' }],
        materialPropertiesList: [{
          isCertified: true,
          // The certified set of the M375a DRMD, as transcribed for the v0.3 example:
          // As first (the selected claim), then Cu, Zn and Pb, all with k = 2.
          results: [
            certified('As', value, MG_PER_KG, '5'),
            certified('Cu', '57.68', PERCENT, '0.14'),
            certified('Zn', '38.2', PERCENT, '0.4'),
            certified('Pb', '3.07', PERCENT, '0.06'),
          ],
        }],
      },
      termsOfUse: policy(O_ID, oText),
      evidence: [{ id: S_ID, type: 'HomogeneityStudyReference', digestSRI: digest(sText) }],
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
