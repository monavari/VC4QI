// SPDX-License-Identifier: Apache-2.0
// Generates the signed experimental GS certification v1 fixtures for the migrated
// gs-scheme-authorization use case, with controller documents and one Bitstring Status
// List per fictional issuer:
//   - GS-A: the NAB's accreditation of a GS certification body (competence) for toys
//     (EN 71-1, EN 71-2) and household appliances (EN 60335-1, EN 60335-2-23);
//   - GS-S: the fictional scheme owner's independent authorization of the same body to
//     award the GS mark, for toys only;
//   - GSC-1: a GS certificate for a toy against EN 71-1, citing both;
//   - GSC-2: a GS certificate for a household appliance, which GS-A covers but GS-S does
//     not, so the complete route cannot cover its claim;
//   - DPP-1 and DPP-2: experimental product passports issued by the fictional manufacturer
//     for one serialized unit each, claiming the GS mark through GSC-1 and GSC-2.
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
const SCHEME = 'https://scheme.vc4qi.example/controller';
const BODY = 'https://gs-body.vc4qi.example/controller';
const MAKER = 'https://maker.vc4qi.example/controller';
const A_ID = 'https://nab.vc4qi.example/credentials/GS-A';
const S_ID = 'https://scheme.vc4qi.example/credentials/GS-S';
const C_ID = 'https://gs-body.vc4qi.example/credentials/GSC-1';
const C2_ID = 'https://gs-body.vc4qi.example/credentials/GSC-2';
const P1_ID = 'https://maker.vc4qi.example/credentials/DPP-1';
const P2_ID = 'https://maker.vc4qi.example/credentials/DPP-2';
const STATUS = {
  nab: 'https://nab.vc4qi.example/status/gs/1',
  scheme: 'https://scheme.vc4qi.example/status/gs/1',
  body: 'https://gs-body.vc4qi.example/status/gs/1',
  maker: 'https://maker.vc4qi.example/status/gs/1',
} as const;
const STATUS_ENTRY: Record<string, [string, number]> = { [A_ID]: [STATUS.nab, 0], [S_ID]: [STATUS.scheme, 0], [C_ID]: [STATUS.body, 0], [C2_ID]: [STATUS.body, 1],
  [P1_ID]: [STATUS.maker, 0], [P2_ID]: [STATUS.maker, 1] };

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
  const scheme = await party('scheme', SCHEME);
  const body = await party('gs-body', BODY);
  const maker = await party('maker', MAKER);
  for (const p of [nab, scheme, body, maker]) {
    const method = `${p.controller}#key-1`;
    record(p.controller, `controllers/${p.name}.json`, 'application/json', serialize({
      '@context': 'https://www.w3.org/ns/cid/v1', id: p.controller,
      verificationMethod: [{ id: method, type: 'Multikey', controller: p.controller,
        publicKeyMultibase: toMultibase(Uint8Array.from([0xed, 0x01, ...p.publicKey])) }],
      assertionMethod: [method],
    }));
  }
  const clear = encodeStatusList(new Uint8Array(MIN_STATUS_BITS / 8));
  for (const [p, listId] of [[nab, STATUS.nab], [scheme, STATUS.scheme], [body, STATUS.body], [maker, STATUS.maker]] as const) {
    record(listId, `status/${p.name}.json`, 'application/vc', serialize(await sign({
      '@context': [VC_V2_CONTEXT], id: listId, type: ['VerifiableCredential', 'BitstringStatusListCredential'],
      issuer: p.controller, validFrom: '2026-09-01T00:00:00Z', validUntil: '2027-09-01T00:00:00Z',
      credentialSchema: { id: `${GS_V1_SCHEMA_BASE}status-list.json`, type: 'JsonSchema' },
      credentialSubject: { id: `${listId}#list`, type: 'BitstringStatusList', statusPurpose: 'revocation', encodedList: clear },
    }, p, '2026-09-01T00:00:00Z')));
  }

  const aText = record(A_ID, 'credentials/GS-A.json', 'application/vc', serialize(await sign({
    ...envelope(A_ID, 'GsAccreditation', 'accreditation.json', NAB, '2024-01-01T00:00:00Z', '2029-01-01T00:00:00Z'),
    credentialSubject: {
      id: BODY,
      permittedActivity: [gs('certifyProducts')],
      scope: [
        { id: `${A_ID}#scope-toys`, productCategoryIri: gs('Toy'), standardIris: [gs('EN-71-1'), gs('EN-71-2')] },
        { id: `${A_ID}#scope-household`, productCategoryIri: gs('HouseholdAppliance'),
          standardIris: [gs('EN-60335-1'), gs('EN-60335-2-23')] },
      ],
    },
  }, nab, '2024-01-01T00:00:00Z')));
  const sText = record(S_ID, 'credentials/GS-S.json', 'application/vc', serialize(await sign({
    ...envelope(S_ID, 'GsSchemeAuthorization', 'scheme-authorization.json', SCHEME, '2025-01-01T00:00:00Z', '2027-01-01T00:00:00Z'),
    credentialSubject: {
      id: BODY,
      permittedActivity: [gs('awardGsMark')],
      scope: [{ id: `${S_ID}#scope-toys`, productCategoryIri: gs('Toy') }],
    },
  }, scheme, '2025-01-01T00:00:00Z')));
  const c1Text = record(C_ID, 'credentials/GSC-1.json', 'application/vc', serialize(await sign({
    ...envelope(C_ID, 'GsCertificate', 'certificate.json', BODY, '2026-03-01T00:00:00Z', '2031-03-01T00:00:00Z'),
    credentialSubject: {
      id: 'urn:vc4qi-example:product:toy-001',
      activityTime: '2026-02-27T10:00:00Z',
      manufacturerIri: MAKER,
      certification: { productCategoryIri: gs('Toy'), standardIris: [gs('EN-71-1')] },
    },
    termsOfUse: [
      { type: 'GsAuthorizationPolicy', authorizationCredential: { id: A_ID, type: 'GsAccreditation' } },
      { type: 'GsAuthorizationPolicy', authorizationCredential: { id: S_ID, type: 'GsSchemeAuthorization' } },
    ],
    relatedResource: [
      { id: A_ID, digestSRI: sha384SRI(new TextEncoder().encode(aText)) },
      { id: S_ID, digestSRI: sha384SRI(new TextEncoder().encode(sText)) },
    ],
  }, body, '2026-03-01T00:00:00Z')));

  const c2Text = record(C2_ID, 'credentials/GSC-2.json', 'application/vc', serialize(await sign({
    ...envelope(C2_ID, 'GsCertificate', 'certificate.json', BODY, '2026-04-01T00:00:00Z', '2031-04-01T00:00:00Z'),
    credentialSubject: {
      id: 'urn:vc4qi-example:product:hair-dryer-001',
      activityTime: '2026-03-30T10:00:00Z',
      manufacturerIri: MAKER,
      certification: { productCategoryIri: gs('HouseholdAppliance'), standardIris: [gs('EN-60335-1'), gs('EN-60335-2-23')] },
    },
    termsOfUse: [
      { type: 'GsAuthorizationPolicy', authorizationCredential: { id: A_ID, type: 'GsAccreditation' } },
      { type: 'GsAuthorizationPolicy', authorizationCredential: { id: S_ID, type: 'GsSchemeAuthorization' } },
    ],
    relatedResource: [
      { id: A_ID, digestSRI: sha384SRI(new TextEncoder().encode(aText)) },
      { id: S_ID, digestSRI: sha384SRI(new TextEncoder().encode(sText)) },
    ],
  }, body, '2026-04-01T00:00:00Z')));

  // Experimental product passports: the manufacturer claims the GS mark for one unit of a
  // certified model. Not EU Digital Product Passport conformance.
  const passport = async (id: string, file: string, serial: string, model: string, certId: string, certText: string, at: string) =>
    record(id, file, 'application/vc', serialize(await sign({
      ...envelope(id, 'GsProductPassport', 'product-passport.json', MAKER, at, '2036-01-01T00:00:00Z'),
      credentialSubject: {
        id: serial,
        activityTime: at,
        productModelIri: model,
        marking: { markIri: gs('GsMark'), productModelIri: model },
      },
      termsOfUse: [{ type: 'GsAuthorizationPolicy', authorizationCredential: { id: certId, type: 'GsCertificate' } }],
      relatedResource: [{ id: certId, digestSRI: sha384SRI(new TextEncoder().encode(certText)) }],
    }, maker, at)));
  await passport(P1_ID, 'credentials/DPP-1.json', 'urn:vc4qi-example:unit:toy-001-sn-0042', 'urn:vc4qi-example:product:toy-001',
    C_ID, c1Text, '2026-05-10T00:00:00Z');
  await passport(P2_ID, 'credentials/DPP-2.json', 'urn:vc4qi-example:unit:hair-dryer-001-sn-0007', 'urn:vc4qi-example:product:hair-dryer-001',
    C2_ID, c2Text, '2026-05-10T00:00:00Z');

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
