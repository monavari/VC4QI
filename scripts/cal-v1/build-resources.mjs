#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Generates the experimental calibration (DCC) v1 JSON Schemas and the pinned
// static-resource index (catalog.json) with SHA-384 SRI over the exact bytes.
//
//   node scripts/cal-v1/build-resources.mjs          # write files
//   node scripts/cal-v1/build-resources.mjs --check  # fail if any output is stale
//
// The context (resources/contexts/cal-1.jsonld) is hand-authored source; the schemas
// and catalog index are generated here. Do not edit them by hand.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const BINDING = join(ROOT, 'bindings', 'experimental', 'cal-v1');
const CHECK = process.argv.includes('--check');

const VC_V2 = 'https://www.w3.org/ns/credentials/v2';
const CAL_CONTEXT = 'https://vc4qi.example/contexts/cal/1';
const SCHEMA_BASE = 'https://vc4qi.example/schemas/cal/1/';
const ACT = 'https://vc4qi.example/bindings/cal/1#';

const iri = { type: 'string', format: 'uri' };
const decimal = { type: 'string', pattern: '^(0|[1-9][0-9]*)(\\.[0-9]+)?$' };
const dateTime = {
  type: 'string',
  pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,9})?(Z|[+-]\\d{2}:\\d{2})$',
};
const closed = (properties, required = Object.keys(properties)) => ({
  type: 'object', required, properties, additionalProperties: false,
});
const nonemptySet = items => ({ type: 'array', minItems: 1, uniqueItems: true, items });
const pressureUnit = { enum: ['Pa', 'kPa', 'MPa'] };

const scopeRecord = closed({
  id: iri,
  quantityKindIri: iri,
  allowedMethodIris: nonemptySet(iri),
  range: closed({ from: decimal, to: decimal, unit: pressureUnit }),
  // Optional: the admitted calibration and measurement capability (smallest expanded
  // uncertainty). Whether it applies is a verifier-profile rule.
  cmcFloor: closed({ value: decimal, unit: pressureUnit }),
}, ['id', 'quantityKindIri', 'allowedMethodIris', 'range']);
const statusEntry = closed({
  id: iri,
  type: { const: 'BitstringStatusListEntry' },
  statusPurpose: { enum: ['revocation', 'suspension'] },
  statusListIndex: { type: 'string', pattern: '^(0|[1-9][0-9]*)$' },
  statusListCredential: iri,
});
const authorizationPolicy = closed({
  type: { const: 'CalAuthorizationPolicy' },
  authorizationCredential: closed({ id: iri, type: { enum: ['CalAccreditation'] } }),
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
// Methods may be absent or empty so that the evaluator, not the schema, decides S18.
const measurementGroup = closed({
  id: iri,
  quantityKindIri: iri,
  methodIris: { type: 'array', uniqueItems: true, items: iri },
  results: {
    type: 'array', minItems: 1,
    items: closed({ value: decimal, unit: pressureUnit, expandedUncertainty: decimal, coverageFactor: decimal }),
  },
}, ['id', 'quantityKindIri', 'results']);

function credentialSchema(file, type, title, subject, extra = {}, requiredExtra = []) {
  const id = `${SCHEMA_BASE}${file}`;
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: id,
    title,
    description: 'Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.',
    ...closed({
      '@context': { const: [VC_V2, CAL_CONTEXT] },
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

const schemas = {
  'accreditation.json': credentialSchema('accreditation.json', 'CalAccreditation', 'Calibration laboratory accreditation',
    closed({
      id: iri,
      permittedActivity: { ...nonemptySet(iri), items: { enum: [`${ACT}issueCalibrationCertificate`] } },
      scope: nonemptySet(scopeRecord),
    })),
  'certificate.json': credentialSchema('certificate.json', 'CalCertificate', 'Calibration certificate (DCC)',
    closed({ id: iri, activityTime: dateTime, measurementGroups: { type: 'array', minItems: 1, items: measurementGroup } }),
    { termsOfUse: { type: 'array', minItems: 1, maxItems: 2, items: authorizationPolicy }, relatedResource },
    ['relatedResource']),
  'status-list.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}status-list.json`,
    title: 'Bitstring Status List credential for calibration v1 fixtures',
    description: 'Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.',
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
  if (CHECK) stale.push(relative(ROOT, path));
  else writeFileSync(path, text);
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
    uri: CAL_CONTEXT,
    path: 'bindings/experimental/cal-v1/resources/contexts/cal-1.jsonld',
    mediaType: 'application/ld+json',
    origin: 'VC4QI experimental calibration binding (repository-owned fictional fixture)',
    version: '1',
  },
  ...Object.keys(schemas).map(file => ({
    uri: `${SCHEMA_BASE}${file}`,
    path: `bindings/experimental/cal-v1/resources/schemas/${file}`,
    mediaType: 'application/schema+json',
    origin: 'VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)',
    version: '1',
  })),
];
const catalog = {
  description: 'Pinned static resources for the experimental calibration v1 binding. digestSRI is SHA-384 over the exact file bytes. Generated by scripts/cal-v1/build-resources.mjs; do not edit.',
  resources: entries.map(entry => ({
    ...entry,
    digestSRI: `sha384-${createHash('sha384').update(readFileSync(join(ROOT, entry.path))).digest('base64')}`,
  })),
};
emit(join(BINDING, 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);
if (stale.length > 0) {
  console.error(`Stale generated calibration v1 resources (run without --check):\n  ${stale.join('\n  ')}`);
  process.exit(1);
}
console.log(CHECK ? 'Calibration v1 resources are up to date.' : 'Wrote calibration v1 schemas and catalog.json.');
