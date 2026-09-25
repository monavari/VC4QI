#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Generates the experimental RM v1 JSON Schemas and the pinned static-resource
// index (catalog.json) with SHA-384 SRI over the exact bytes of every resource.
//
//   node scripts/rm-v1/build-resources.mjs          # write files
//   node scripts/rm-v1/build-resources.mjs --check  # fail if any output is stale
//
// The context (resources/contexts/rm-1.jsonld) is hand-authored source. The schemas
// and catalog index are generated here; do not edit them by hand.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const BINDING = join(ROOT, 'bindings', 'experimental', 'rm-v1');
const CHECK = process.argv.includes('--check');

const VC_V2 = 'https://www.w3.org/ns/credentials/v2';
const RM_CONTEXT = 'https://vc4qi.example/contexts/rm/1';
const SCHEMA_BASE = 'https://vc4qi.example/schemas/rm/1/';

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

const range = closed({
  from: decimal,
  to: decimal,
  unit: { enum: ['mg/kg', 'kg/kg'] },
});
const scopeRecord = closed({
  id: iri,
  matrixIri: iri,
  formIri: iri,
  allowedPropertyIris: nonemptySet(iri),
  allowedMethodIris: nonemptySet(iri),
  quantityKindIri: iri,
  range,
});
const labScopeRecord = closed({
  id: iri,
  matrixIri: iri,
  allowedPropertyIris: nonemptySet(iri),
  studyTypeIris: nonemptySet(iri),
});
const relatedResource = nonemptySet(closed({
  id: iri,
  digestSRI: { type: 'string', pattern: '^sha384-[A-Za-z0-9+/]{64}$' },
}));
const authorizationPolicy = closed({
  type: { const: 'RmAuthorizationPolicy' },
  authorizationCredential: closed({ id: iri }),
});
const studyReference = closed({
  id: iri,
  type: { const: 'RmStudyReference' },
});
const proof = closed({
  type: { const: 'DataIntegrityProof' },
  cryptosuite: { const: 'eddsa-rdfc-2022' },
  proofPurpose: { const: 'assertionMethod' },
  verificationMethod: iri,
  created: dateTime,
  proofValue: { type: 'string', pattern: '^z[1-9A-HJ-NP-Za-km-z]+$' },
});
const quantity = closed({
  quantityKind: iri,
  value: decimal,
  unit: closed({ ucumCode: { enum: ['mg/kg', 'kg/kg'] } }),
  uncertainty: closed({ expandedUncertainty: decimal, coverageFactor: decimal }),
});
const credentialStatus = closed({
  id: iri,
  type: { const: 'BitstringStatusListEntry' },
  statusPurpose: { const: 'revocation' },
  statusListIndex: { type: 'string', pattern: '^(0|[1-9][0-9]*)$' },
  statusListCredential: iri,
});
const result = closed({
  propertyIri: iri,
  methodIri: iri,
  data: closed({ quantity }),
});

/** Common VCDM 2.0 envelope for one RM artifact type. */
function credentialSchema(file, rmType, title, subject, extra = {}, requiredExtra = []) {
  const id = `${SCHEMA_BASE}${file}`;
  const properties = {
    '@context': { const: [VC_V2, RM_CONTEXT] },
    id: iri,
    type: { const: ['VerifiableCredential', rmType] },
    issuer: iri,
    validFrom: dateTime,
    validUntil: dateTime,
    credentialSchema: closed({ id: { const: id }, type: { const: 'JsonSchema' } }),
    credentialSubject: subject,
    ...extra,
    credentialStatus,
    proof,
  };
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: id,
    title,
    description: 'Experimental VC4QI RM binding v1 fixture schema. Not an external standard.',
    ...closed(properties, [
      '@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil',
      'credentialSchema', 'credentialSubject', 'credentialStatus', ...requiredExtra,
    ]),
  };
}

const grantSubject = (records, activities) => closed({
  id: iri,
  permittedActivity: { ...nonemptySet(iri), items: { enum: activities } },
  scope: nonemptySet(records),
});
const ACT = 'https://vc4qi.example/bindings/rm/1#';

const schemas = {
  'accreditation.json': credentialSchema(
    'accreditation.json', 'RmAccreditation', 'RM producer accreditation (A)',
    grantSubject(scopeRecord, [`${ACT}issueRmCertificate`, `${ACT}maintainRmScope`]),
  ),
  'operational-scope.json': credentialSchema(
    'operational-scope.json', 'RmOperationalScope', 'RM operational scope (O)',
    grantSubject(scopeRecord, [`${ACT}issueRmCertificate`]),
    { termsOfUse: { type: 'array', minItems: 1, maxItems: 1, items: authorizationPolicy }, relatedResource },
    ['termsOfUse', 'relatedResource'],
  ),
  'certificate.json': credentialSchema(
    'certificate.json', 'RmCertificate', 'RM certificate (D)',
    closed({
      id: iri,
      activityTime: dateTime,
      materials: {
        type: 'array', minItems: 1, maxItems: 1,
        items: closed({ matrixIri: iri, formIri: iri, name: { type: 'string', minLength: 1 } }, ['matrixIri', 'formIri']),
      },
      materialPropertiesList: {
        type: 'array', minItems: 1,
        items: closed({ isCertified: { type: 'boolean' }, results: { type: 'array', minItems: 1, items: result } }),
      },
    }),
    {
      termsOfUse: { type: 'array', minItems: 1, maxItems: 1, items: authorizationPolicy },
      evidence: nonemptySet(studyReference),
      relatedResource,
    },
    ['termsOfUse', 'evidence', 'relatedResource'],
  ),
  'study.json': credentialSchema(
    'study.json', 'RmStudy', 'RM homogeneity/stability study (S)',
    closed({
      id: iri,
      activityTime: dateTime,
      studyTypeIri: iri,
      propertyIri: iri,
      matrixIri: iri,
      outcomeIri: iri,
    }),
    { termsOfUse: { type: 'array', minItems: 1, maxItems: 1, items: authorizationPolicy }, relatedResource },
    ['termsOfUse', 'relatedResource'],
  ),
  'lab-authority.json': credentialSchema(
    'lab-authority.json', 'RmLabAuthority', 'Study laboratory authority (H)',
    grantSubject(labScopeRecord, [`${ACT}issueRmStudy`]),
  ),
  'status-list.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}status-list.json`,
    title: 'Bitstring Status List credential for RM v1 fixtures',
    description: 'Experimental VC4QI RM binding v1 fixture schema. Not an external standard.',
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
        statusPurpose: { const: 'revocation' },
        encodedList: { type: 'string', pattern: '^u[A-Za-z0-9_-]+$' },
      }),
      proof,
    }, ['@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil', 'credentialSchema', 'credentialSubject']),
  },
  'authorization-policy.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}authorization-policy.json`,
    title: 'RM authorization policy entry in termsOfUse',
    ...authorizationPolicy,
  },
  'study-reference.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}study-reference.json`,
    title: 'RM required-study reference entry in evidence',
    ...studyReference,
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

// Pinned static resources: URI -> exact local bytes. Hashes are computed from the
// bytes that will be served, after schema generation above.
const entries = [
  {
    uri: VC_V2,
    path: 'contexts/v1/vendor/credentials-v2.jsonld',
    mediaType: 'application/ld+json',
    origin: 'W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader',
    version: 'VCDM 2.0',
  },
  {
    uri: RM_CONTEXT,
    path: 'bindings/experimental/rm-v1/resources/contexts/rm-1.jsonld',
    mediaType: 'application/ld+json',
    origin: 'VC4QI experimental RM binding (repository-owned fictional fixture)',
    version: '1',
  },
  ...Object.keys(schemas).map(file => ({
    uri: `${SCHEMA_BASE}${file}`,
    path: `bindings/experimental/rm-v1/resources/schemas/${file}`,
    mediaType: 'application/schema+json',
    origin: 'VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)',
    version: '1',
  })),
];

const catalog = {
  description:
    'Pinned static resources for the experimental RM v1 binding. digestSRI is SHA-384 over the exact file bytes. Generated by scripts/rm-v1/build-resources.mjs; do not edit.',
  resources: entries.map(entry => {
    const bytes = readFileSync(join(ROOT, entry.path));
    const digestSRI = `sha384-${createHash('sha384').update(bytes).digest('base64')}`;
    return { ...entry, digestSRI };
  }),
};
emit(join(BINDING, 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);

if (stale.length > 0) {
  console.error(`Stale generated RM v1 resources (run without --check):\n  ${stale.join('\n  ')}`);
  process.exit(1);
}
console.log(CHECK ? 'RM v1 resources are up to date.' : `Wrote ${Object.keys(schemas).length} schemas and catalog.json.`);
