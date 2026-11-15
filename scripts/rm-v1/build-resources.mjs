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
// Stand-in for the unpublished W3C Recognized Entities context (Working Draft of
// 12 November 2026); hand-authored in resources/contexts.
const RE_CONTEXT = 'https://vc4qi.example/contexts/recognized-entities/draft-20261112';
const RECOGNITION_TYPE = 'RecognizedEntityCredential';
// A state's appointment of its accreditation body, in the shape of EBSI's root trust
// chain credential (VerifiableAuthorisationForTrustChain, the type VCDM 2.0 Example 28
// also uses). The terms expand to the same issuer-dependent IRIs as EBSI's examples.
const APPOINTMENT_TYPE = 'VerifiableAuthorisationForTrustChain';
const EBSI_JURISDICTION = { type: 'string', format: 'uri' };
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
// The digest of the credential a link names, on the link itself (VCDM 2.0 §5.3: any
// object with an id MAY carry digestSRI). SHA-384 over the exact bytes.
const digestSRI = { type: 'string', pattern: '^sha384-[A-Za-z0-9+/]{64}$' };
// Every upward link is a termsOfUse entry whose id is the credential it names, with that
// credential's digest; its type says what it means (VCDM 2.0 section 5.5: the type
// definition determines the contents).
// IssuedUnderPolicy: this credential was issued exercising the grant it names. Routes
// select it by the type of the credential it resolves to.
const issuedUnderPolicy = closed({ id: iri, type: { const: 'IssuedUnderPolicy' }, digestSRI });
// RecognitionPolicy: this credential was issued while its issuer is recognized in the
// credential it names (a W3C Recognized Entities credential). It confers no authority:
// it lets a verifier that anchors the recognizer accept the issuer.
const recognitionPolicy = closed({ id: iri, type: { const: 'RecognitionPolicy' }, digestSRI });
// The issuer of a recognized grant may mirror its recognition as issuer.recognizedIn
// (W3C Recognized Entities discovery); when present it must name the same credential.
const recognizedIssuer = {
  oneOf: [iri, closed({ id: iri, recognizedIn: closed({ id: iri, type: { const: RECOGNITION_TYPE } }) }, ['id'])],
};
// Evidence: the study the certificate rests on, with its digest.
const studyReference = closed({
  id: iri,
  type: { const: 'HomogeneityStudyReference' },
  digestSRI,
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
  unit: closed({ ucumCode: { enum: ['mg/kg', 'kg/kg', '%'] } }),
  uncertainty: closed({ expandedUncertainty: decimal, coverageFactor: decimal }),
});
const statusEntry = closed({
  id: iri,
  type: { const: 'BitstringStatusListEntry' },
  statusPurpose: { enum: ['revocation', 'suspension'] },
  statusListIndex: { type: 'string', pattern: '^(0|[1-9][0-9]*)$' },
  statusListCredential: iri,
});
// One entry, or one entry per purpose (revocation and suspension).
const credentialStatus = {
  oneOf: [statusEntry, { type: 'array', minItems: 1, maxItems: 2, items: statusEntry }],
};
const result = closed({
  propertyIri: iri,
  methodIri: iri,
  data: closed({ quantity }),
});

/** Common VCDM 2.0 envelope for one RM artifact type. */
function credentialSchema(file, rmType, title, subject, extra = {}, requiredExtra = [], dependentRequired = undefined, issuer = iri) {
  const id = `${SCHEMA_BASE}${file}`;
  const properties = {
    '@context': { const: [VC_V2, RM_CONTEXT] },
    id: iri,
    type: { const: ['VerifiableCredential', rmType] },
    issuer,
    validFrom: dateTime,
    validUntil: dateTime,
    credentialSchema: closed({ id: { const: id }, type: { const: 'JsonSchema' } }),
    credentialSubject: subject,
    ...extra,
    credentialStatus,
    // Standard optional VCDM 2.0 annotations: allowed, never decision-relevant (V11).
    name: { type: 'string', minLength: 1 },
    description: { type: 'string', minLength: 1 },
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
    ...(dependentRequired ? { dependentRequired } : {}),
  };
}

const grantSubject = (records, activities) => closed({
  id: iri,
  permittedActivity: { ...nonemptySet(iri), items: { enum: activities } },
  scope: nonemptySet(records),
});
const ACT = 'https://vc4qi.example/bindings/rm/1#';
// A grant of the NAB names the state's appointment it was issued under (IssuedUnderPolicy)
// and the NAB's recognition (RecognitionPolicy), each pinned by digest. A verifier that
// anchors the state follows the first, one that anchors Global ACI the second, and one
// that anchors the NAB neither.
const upToRecognition = {
  termsOfUse: { type: 'array', minItems: 1, maxItems: 4, items: { oneOf: [issuedUnderPolicy, recognitionPolicy] } },
};
const issuedUnder = { type: 'array', minItems: 1, maxItems: 4, items: issuedUnderPolicy };

const schemas = {
  // ISO/IEC 17011: the accreditation of a reference material producer to ISO 17034.
  'rmp-accreditation.json': credentialSchema(
    'rmp-accreditation.json', 'RmpAccreditation', 'Accreditation of a reference material producer (ISO 17034)',
    grantSubject(scopeRecord, [`${ACT}issueRmCertificate`, `${ACT}maintainRmScope`]),
    upToRecognition, [], undefined, recognizedIssuer,
  ),
  // The producer's own list of activities under its flexible scope of accreditation
  // (ISO/IEC 17011, EA-2/15): maintained and published by the producer, within the grant.
  'flexible-scope-list.json': credentialSchema(
    'flexible-scope-list.json', 'FlexibleScopeList', 'List of activities under a flexible scope of accreditation',
    grantSubject(scopeRecord, [`${ACT}issueRmCertificate`]),
    { termsOfUse: issuedUnder },
  ),
  'certificate.json': credentialSchema(
    'certificate.json', 'RmCertificate', 'Reference material certificate (ISO 17034, ISO Guide 31)',
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
      // Optional here: a missing authority or support reference is decided at gates
      // 5-6 (not established), not rejected as a structural error.
      termsOfUse: issuedUnder,
      evidence: nonemptySet(studyReference),
    },
  ),
  // A homogeneity study (ISO 17034, ISO Guide 35), reported by an accredited laboratory.
  'homogeneity-study.json': credentialSchema(
    'homogeneity-study.json', 'HomogeneityStudy', 'Homogeneity study of a reference material batch',
    closed({
      id: iri,
      activityTime: dateTime,
      studyTypeIri: iri,
      propertyIri: iri,
      matrixIri: iri,
      outcomeIri: iri,
    }),
    { termsOfUse: issuedUnder },
  ),
  // ISO/IEC 17011: the accreditation of a testing laboratory to ISO/IEC 17025.
  'lab-accreditation.json': credentialSchema(
    'lab-accreditation.json', 'LabAccreditation', 'Accreditation of a testing laboratory (ISO/IEC 17025)',
    grantSubject(labScopeRecord, [`${ACT}issueRmStudy`]),
    upToRecognition, [], undefined, recognizedIssuer,
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
        statusPurpose: { enum: ['revocation', 'suspension'] },
        encodedList: { type: 'string', pattern: '^u[A-Za-z0-9_-]+$' },
      }),
      proof,
    }, ['@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil', 'credentialSchema', 'credentialSubject']),
  },
  // One recognition of one accreditation body, as a W3C Recognized Entities credential
  // (Working Draft of 12 November 2026) with a single subject: each recognition carries
  // its own credential and status, rather than a list re-issued as members change.
  // recognizedTo names the action (accredit); registration records the body's entry in
  // the register the recognizer keeps, with the main scopes (activity and normative
  // document, the ILAC and IAF main scope; an RM binding extension term). recognizedTo
  // is optional here so that a recognition without actions is structurally valid; the
  // evaluator does not accept it.
  'recognized-entity.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}recognized-entity.json`,
    title: 'Recognition of one accreditation body (W3C Recognized Entities credential)',
    description: 'Experimental VC4QI RM binding v1 fixture schema for a Recognized Entities credential. Not an external standard.',
    ...closed({
      '@context': { const: [VC_V2, RE_CONTEXT] },
      id: iri,
      type: { const: ['VerifiableCredential', 'RecognizedEntityCredential'] },
      issuer: closed({ id: iri, type: { const: 'RecognizedIssuer' }, name: { type: 'string', minLength: 1 } }, ['id', 'type']),
      validFrom: dateTime,
      validUntil: dateTime,
      credentialSchema: closed({ id: { const: `${SCHEMA_BASE}recognized-entity.json` }, type: { const: 'JsonSchema' } }),
      credentialSubject: closed({
        id: iri,
        type: { const: 'RecognizedEntity' },
        name: { type: 'string', minLength: 1 },
        recognizedTo: {
          type: 'array',
          items: closed({
            type: { const: 'RecognizedAction' },
            action: { type: 'string', minLength: 1 },
            recognizedBy: iri,
            validFrom: dateTime,
            validUntil: dateTime,
          }, ['type', 'action']),
        },
        registration: {
          type: 'array',
          items: closed({
            id: iri,
            mainScope: closed({
              activity: { type: 'string', minLength: 1 },
              standard: closed({ id: iri, name: { type: 'string', minLength: 1 } }),
            }),
          }, ['mainScope']),
        },
      }, ['id', 'type']),
      credentialStatus,
      name: { type: 'string', minLength: 1 },
      description: { type: 'string', minLength: 1 },
      proof,
    }, ['@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil', 'credentialSchema', 'credentialSubject', 'credentialStatus']),
  },
  // A state's appointment of one accreditation body, shaped after EBSI's
  // VerifiableAuthorisationForTrustChain (vcdm2.0-trust-model-schema 2.0.0): the subject's
  // permissionFor names, per credential type the body may issue, its schema and the
  // jurisdiction; the appointment's own termsOfUse is a TrustFrameworkPolicy naming the
  // legal basis, not a parent credential (it is the top of the chain). EBSI's
  // reservedAttributeId and registry status (EbsiAccreditationEntry) are left out: status
  // is a Bitstring Status List, as for every other credential here.
  'appointment.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}appointment.json`,
    title: 'Appointment of an accreditation body by a state (EBSI VerifiableAuthorisationForTrustChain shape)',
    description: 'Experimental VC4QI RM binding v1 fixture schema. Not an external standard.',
    ...closed({
      '@context': { const: [VC_V2, RM_CONTEXT] },
      id: iri,
      type: { const: ['VerifiableCredential', APPOINTMENT_TYPE] },
      issuer: iri,
      validFrom: dateTime,
      validUntil: dateTime,
      credentialSchema: closed({ id: { const: `${SCHEMA_BASE}appointment.json` }, type: { const: 'JsonSchema' } }),
      name: { type: 'string', minLength: 1 },
      description: { type: 'string', minLength: 1 },
      credentialSubject: closed({
        id: iri,
        permissionFor: nonemptySet(closed({
          schemaId: iri,
          types: { type: 'array', minItems: 1, items: { type: 'string', minLength: 1 } },
          jurisdiction: { oneOf: [EBSI_JURISDICTION, { type: 'array', minItems: 1, items: EBSI_JURISDICTION }] },
        })),
      }),
      termsOfUse: closed({
        type: { const: 'TrustFrameworkPolicy' },
        trustFramework: { type: 'string', minLength: 1 },
        policyId: iri,
        legalBasis: { type: 'string', minLength: 1 },
      }, ['type', 'trustFramework', 'policyId']),
      credentialStatus,
      proof,
    }, ['@context', 'id', 'type', 'issuer', 'validFrom', 'validUntil', 'credentialSchema', 'credentialSubject', 'termsOfUse', 'credentialStatus']),
  },
  'issued-under-policy.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}issued-under-policy.json`,
    title: 'IssuedUnderPolicy entry in termsOfUse: issued exercising the named grant',
    ...issuedUnderPolicy,
  },
  'recognition-policy.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}recognition-policy.json`,
    title: 'RecognitionPolicy entry in termsOfUse: issued while recognized in the named recognition (no authority)',
    ...recognitionPolicy,
  },
  'homogeneity-study-reference.json': {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${SCHEMA_BASE}homogeneity-study-reference.json`,
    title: 'Homogeneity study reference entry in evidence, with its digest',
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
    path: 'bindings/vendor/credentials-v2.jsonld',
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
  {
    uri: RE_CONTEXT,
    path: 'bindings/experimental/rm-v1/resources/contexts/recognized-entities-draft-20261112.jsonld',
    mediaType: 'application/ld+json',
    origin: 'VC4QI stand-in for the unpublished W3C Recognized Entities v1.0 context: terms expand to the '
      + 'draft vocabulary of w3c/vc-recognized-entities@3961cf6 (Working Draft of 12 November 2026); '
      + 'mainScope, activity and standard are RM binding extension terms, used inside registration',
    version: 'draft-20261112',
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
