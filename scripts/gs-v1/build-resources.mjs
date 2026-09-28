#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Generates the experimental GS certification v1 JSON Schemas and the pinned
// static-resource index (catalog.json) with SHA-384 SRI over the exact bytes.
//
//   node scripts/gs-v1/build-resources.mjs          # write files
//   node scripts/gs-v1/build-resources.mjs --check  # fail if any output is stale
//
// The context (resources/contexts/gs-1.jsonld) is hand-authored source; the schemas
// and catalog index are generated here. Do not edit them by hand.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const BINDING = join(ROOT, 'bindings', 'experimental', 'gs-v1');
const CHECK = process.argv.includes('--check');

const VC_V2 = 'https://www.w3.org/ns/credentials/v2';
const GS_CONTEXT = 'https://vc4qi.example/contexts/gs/1';
const SCHEMA_BASE = 'https://vc4qi.example/schemas/gs/1/';
const ACT = 'https://vc4qi.example/bindings/gs/1#';

const iri = { type: 'string', format: 'uri' };
const dateTime = {
  type: 'string',
  pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,9})?(Z|[+-]\\d{2}:\\d{2})$',
};
const closed = (properties, required = Object.keys(properties)) => ({
  type: 'object', required, properties, additionalProperties: false,
});
const nonemptySet = items => ({ type: 'array', minItems: 1, uniqueItems: true, items });

const statusEntry = closed({
  id: iri,
  type: { const: 'BitstringStatusListEntry' },
  statusPurpose: { enum: ['revocation', 'suspension'] },
  statusListIndex: { type: 'string', pattern: '^(0|[1-9][0-9]*)$' },
  statusListCredential: iri,
});
const authorizationPolicy = closed({
  type: { const: 'GsAuthorizationPolicy' },
  authorizationCredential: closed({ id: iri, type: { enum: ['GsAccreditation', 'GsSchemeAuthorization'] } }),
});
const relatedResource = nonemptySet(closed({
  id: iri,
  digestSRI: { type: 'string', pattern: '^sha384-[A-Za-z0-9+/]{64}$' },
}));
const proof = closed({
  type: { const: 'DataIntegrityProof' },
  cryptosuite: { const: 'eddsa-rdfc-2022' },
  proofPurpose: { const: 'assertionMethod' },
  verificationMethod: iri,
  created: dateTime,
  proofValue: { type: 'string', pattern: '^z[1-9A-HJ-NP-Za-km-z]+$' },
});

function credentialSchema(file, type, title, subject, extra = {}, requiredExtra = []) {
  const id = `${SCHEMA_BASE}${file}`;
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: id,
    title,
    description: 'Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.',
    ...closed({
      '@context': { const: [VC_V2, GS_CONTEXT] },
      id: iri,
      type: { const: ['VerifiableCredential', type] },
      issuer: iri,
      validFrom: dateTime,
      validUntil: dateTime,
      credentialSchema: closed({ id: { const: id }, type: { const: 'JsonSchema' } }),
      credentialSubject: subject,
      ...extra,
      credentialStatus: statusEntry,
      name: { type: 'string', minLength: 1 },
      description: { type: 'string', minLength: 1 },
      proof,
    }, ['@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil', 'credentialSchema',
      'credentialSubject', 'credentialStatus', ...requiredExtra]),
  };
}
const grantSubject = (activity, record) => closed({
  id: iri,
  permittedActivity: { ...nonemptySet(iri), items: { enum: [`${ACT}${activity}`] } },
  scope: nonemptySet(record),
});

const schemas = {
  // Competence: an accreditation of a certification body for product categories and standards.
  'accreditation.json': credentialSchema('accreditation.json', 'GsAccreditation', 'Certification body accreditation (competence)',
    grantSubject('certifyProducts', closed({ id: iri, productCategoryIri: iri, standardIris: nonemptySet(iri) }))),
  // Scheme permission: the scheme owner's independent permission to award the mark.
  'scheme-authorization.json': credentialSchema('scheme-authorization.json', 'GsSchemeAuthorization', 'GS scheme authorization',
    grantSubject('awardGsMark', closed({ id: iri, productCategoryIri: iri }))),
  // Standards may be absent or empty so that the evaluator, not the schema, decides them.
  'certificate.json': credentialSchema('certificate.json', 'GsCertificate', 'GS certificate',
    closed({
      id: iri,
      activityTime: dateTime,
      certification: closed({ productCategoryIri: iri, standardIris: { type: 'array', uniqueItems: true, items: iri } }, ['productCategoryIri']),
    }),
    { termsOfUse: { type: 'array', minItems: 1, maxItems: 3, items: authorizationPolicy }, relatedResource },
    ['termsOfUse', 'relatedResource']),
  'status-list.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}status-list.json`,
    title: 'Bitstring Status List credential for GS v1 fixtures',
    description: 'Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.',
    ...closed({
      '@context': { const: [VC_V2] },
      id: iri,
      type: { const: ['VerifiableCredential', 'BitstringStatusListCredential'] },
      issuer: iri,
      validFrom: dateTime,
      validUntil: dateTime,
      credentialSchema: closed({ id: { const: `${SCHEMA_BASE}status-list.json` }, type: { const: 'JsonSchema' } }),
      credentialSubject: closed({
        id: iri,
        type: { const: 'BitstringStatusList' },
        statusPurpose: { enum: ['revocation', 'suspension'] },
        encodedList: { type: 'string', pattern: '^u[A-Za-z0-9_-]+$' },
      }),
      proof,
    }, ['@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil', 'credentialSchema', 'credentialSubject']),
  },
};

const stale = [];
function emit(path, text) {
  const current = existsSync(path) ? readFileSync(path, 'utf8') : null;
  if (current === text) return;
  if (CHECK) { stale.push(relative(ROOT, path)); return; }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text);
}
for (const [file, schema] of Object.entries(schemas)) {
  emit(join(BINDING, 'resources', 'schemas', file), `${JSON.stringify(schema, null, 2)}\n`);
}
const entries = [
  {
    uri: VC_V2,
    path: 'contexts/v1/vendor/credentials-v2.jsonld',
    mediaType: 'application/ld+json',
    origin: 'W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader',
    version: 'VCDM 2.0',
  },
  {
    uri: GS_CONTEXT,
    path: 'bindings/experimental/gs-v1/resources/contexts/gs-1.jsonld',
    mediaType: 'application/ld+json',
    origin: 'VC4QI experimental GS certification binding (repository-owned fictional fixture)',
    version: '1',
  },
  ...Object.keys(schemas).map(file => ({
    uri: `${SCHEMA_BASE}${file}`,
    path: `bindings/experimental/gs-v1/resources/schemas/${file}`,
    mediaType: 'application/schema+json',
    origin: 'VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)',
    version: '1',
  })),
];
const digest = entry => {
  const path = join(ROOT, entry.path);
  // In --check mode a schema that has not been written yet is already reported as stale.
  return existsSync(path) ? `sha384-${createHash('sha384').update(readFileSync(path)).digest('base64')}` : 'missing';
};
const catalog = {
  description: 'Pinned static resources for the experimental GS certification v1 binding. digestSRI is SHA-384 over the exact file bytes. Generated by scripts/gs-v1/build-resources.mjs; do not edit.',
  resources: entries.map(entry => ({ ...entry, digestSRI: digest(entry) })),
};
emit(join(BINDING, 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);
if (stale.length > 0) {
  console.error(`Stale generated GS v1 resources (run without --check):\n  ${stale.join('\n  ')}`);
  process.exit(1);
}
console.log(CHECK ? 'GS v1 resources are up to date.' : 'Wrote GS v1 schemas and catalog.json.');
