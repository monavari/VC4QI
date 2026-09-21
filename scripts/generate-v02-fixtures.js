// SPDX-License-Identifier: Apache-2.0
import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VC_CONTEXT = 'https://www.w3.org/ns/credentials/v2';
const QI_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-evidence-context.jsonld';
const QI_CORE_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld';
const CAL_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld';
const RM_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld';
const DCC_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/digital-calibration-certificate.json';
const RMC_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/reference-material-certificate.json';
const POLICY_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/policy-profile.schema.json';
const QI_VOCAB = 'https://w3id.org/qi-vc/vocab/v1#';
const SCHEMA = 'https://schema.org';

// Scenario-local aliases for credential types and existing QI fields that are
// not part of the minimal shared context. Product/review data below uses full
// schema.org IRIs so the fixture does not mint new QI vocabulary terms.
const GS_SCENARIO_CONTEXT = {
  Product: `${SCHEMA}/Product`,
  GSCertificate: `${QI_VOCAB}GSCertificate`,
  IssuingScopeCredential: `${QI_VOCAB}IssuingScopeCredential`,
  SchemeAuthorizationEvidence: `${QI_VOCAB}SchemeAuthorizationEvidence`,
  AccreditationCertificate: `${QI_VOCAB}AccreditationCertificate`,
  TestReport: `${QI_VOCAB}TestReport`,
  InspectionReport: `${QI_VOCAB}InspectionReport`,
  authorizationBasisKind: { '@id': `${QI_VOCAB}authorizationBasisKind`, '@type': '@vocab' },
  constraints: `${QI_VOCAB}constraints`,
  authorizedCredentialTypes: { '@id': `${QI_VOCAB}authorizedCredentialTypes`, '@container': '@set' },
};

// Governed scope terms (SCO-1/SCO-2). Categorical dimensions compare as exact
// equality over these identifiers; the sibling label fields are display only.
// QUDT is used where a real governed vocabulary exists; the qi-vc/terms IRIs are
// placeholders standing in for a QI Term-Service (B5/MOD-8), not authoritative
// identifiers. See docs/SCOPE_TERMS.md.
const QK = 'http://qudt.org/vocab/quantitykind';
const T = 'https://w3id.org/qi-vc/terms/v1';
const TERMS = {
  quantityKind: { pressure: `${QK}/Pressure` },
  method: { euramet_cg17: `${T}/method/EURAMET-cg-17` },
  matrix: {
    cuzn39pb3: `${T}/matrix/CuZn39Pb3`,
    nonFerrous: `${T}/matrix/non-ferrous-metals-and-alloys`,
  },
  element: { as: `${T}/element/As`, pb: `${T}/element/Pb` },
  form: { disc: `${T}/form/disc` },
};

function stableStringify(value) {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
}

function unsecured(document) {
  const { proof: _proof, ...rest } = document;
  return rest;
}

function digestSRI(document) {
  const digest = createHash('sha384').update(stableStringify(unsecured(document))).digest('base64');
  return `sha384-${digest}`;
}

function writeJson(path, value) {
  const full = join(ROOT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, `${JSON.stringify(value, null, 2)}\n`);
}

function writeText(path, value) {
  const full = join(ROOT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, value);
}

function proof(issuer) {
  return {
    type: 'DataIntegrityProof',
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    verificationMethod: `${issuer}#key-1`,
    created: '2026-01-01T00:00:00Z',
    proofValue: 'zPlaceholderProof',
  };
}

// qi-core is required, not decorative: it defines registryEntries and the
// scoped entry terms (status, authorizationBasisKinds, credentialTypes, entry
// validity). Without it URDNA2015 drops them and the proof would not cover the
// fields the trust decision turns on. Proofs are attached by the second pass,
// packages/core-ts/scripts/sign-trust-registries.ts.
function trustRegistry(entries) {
  return {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT],
    type: ['VerifiableCredential', 'TrustRegistryCredential'],
    id: 'urn:uuid:trust-registry',
    issuer: 'did:web:root.example',
    validFrom: '2024-01-01T00:00:00Z',
    credentialSubject: {
      id: 'urn:uuid:trust-registry#entries',
      registryEntries: entries.map(entry => ({ status: 'active', ...entry })),
    },
  };
}

function policy(id, targetCredentialTypes, requiredEvidence, checks = {}) {
  return {
    $schema: POLICY_SCHEMA,
    id,
    targetCredentialTypes,
    requiredEvidence,
    checks: {
      proof: 'optional',
      schema: 'optional',
      status: 'optional',
      digest: 'required',
      scopeInclusion: 'optional',
      derivation: 'scopeSubset',
      cycleDetection: 'required',
      termsOfUse: 'optional',
      ...checks,
    },
    limits: { maxDepth: 8, maxEvidenceNodes: 32 },
  };
}

function pressureScope(to = 1000) {
  return [{
    measurand: 'Pressure',
    quantityKindIri: TERMS.quantityKind.pressure,
    allowedMethods: ['EURAMET cg-17'],
    allowedMethodIris: [TERMS.method.euramet_cg17],
    range: { from: 0, to, unit: { ucumCode: 'kPa' } },
    uncertainty: { maxAbsolute: 2, maxRelativePercent: 0.5 },
  }];
}

function accreditation(id, issuer, subject, scopeEntries, kind = 'accreditation', validUntil = '2029-01-01T00:00:00Z') {
  return {
    '@context': [VC_CONTEXT, QI_CONTEXT, 'https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld'],
    type: ['VerifiableCredential', 'AccreditationCertificate'],
    id,
    issuer,
    validFrom: '2024-01-01T00:00:00Z',
    validUntil,
    credentialSubject: {
      id: subject,
      authorizationBasisKind: kind,
      scope: scopeEntries,
    },
    proof: proof(issuer),
  };
}

function dcc(id, issuer, evidence, value = 500) {
  return {
    $schema: DCC_SCHEMA,
    '@context': [VC_CONTEXT, QI_CONTEXT, CAL_CONTEXT],
    type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
    id,
    issuer,
    validFrom: '2026-01-15T00:00:00Z',
    credentialSchema: { id: DCC_SCHEMA, type: 'JsonSchema' },
    credentialSubject: {
      id: 'urn:example:item:pressure-001',
      administrativeData: {
        coreData: {
          uniqueIdentifier: id.split(':').at(-1),
          beginPerformanceDate: '2026-01-14T08:00:00Z',
          endPerformanceDate: '2026-01-14T16:00:00Z',
        },
        items: [{ name: 'Pressure transmitter' }],
        calibrationLaboratory: { id: issuer, name: 'Calibration laboratory' },
        customer: { name: 'Example customer' },
      },
      measurementResults: [{
        measurand: 'Pressure',
        quantityKindIri: TERMS.quantityKind.pressure,
        usedMethods: [{
          name: 'Pressure calibration',
          reference: 'EURAMET cg-17',
          methodIri: TERMS.method.euramet_cg17,
        }],
        results: [{
          name: 'Pressure at nominal point',
          data: {
            quantity: {
              quantityKind: 'http://qudt.org/vocab/quantitykind/Pressure',
              value,
              unit: { ucumCode: 'kPa' },
              uncertainty: { expandedUncertainty: 1, coverageFactor: 2 },
            },
          },
        }],
      }],
    },
    evidence,
    proof: proof(issuer),
  };
}

function rmc(id, issuer, evidence) {
  return {
    $schema: RMC_SCHEMA,
    '@context': [VC_CONTEXT, QI_CONTEXT, RM_CONTEXT],
    type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
    id,
    issuer,
    validFrom: '2026-02-01T00:00:00Z',
    validUntil: '2028-02-01T00:00:00Z',
    credentialSchema: { id: RMC_SCHEMA, type: 'JsonSchema' },
    credentialSubject: {
      id: 'urn:example:lot:rm-001',
      administrativeData: {
        coreData: { titleOfTheDocument: 'Reference Material Certificate', uniqueIdentifier: 'RMC-001' },
        validity: { validFrom: '2026-02-01', validUntil: '2028-02-01' },
        referenceMaterialProducer: { id: issuer, name: 'Reference Material Producer' },
      },
      materials: [{
        name: 'Non-ferrous alloy disc',
        matrix: 'non-ferrous metals and alloys',
        matrixIri: TERMS.matrix.nonFerrous,
        form: 'disc',
        formIri: TERMS.form.disc,
        materialIdentifiers: [{ type: 'lotNumber', value: 'RM-001' }],
      }],
      materialPropertiesList: [{
        propertyIdentifiers: ['Pb'],
        isCertified: true,
        results: [{
          name: 'Lead (Pb)',
          propertyIri: TERMS.element.pb,
          data: {
            quantity: {
              quantityKind: 'http://qudt.org/vocab/quantitykind/MassFraction',
              value: 120,
              unit: { ucumCode: 'mg/kg' },
              uncertainty: { expandedUncertainty: 3, coverageFactor: 2 },
            },
          },
        }],
      }],
    },
    evidence,
    proof: proof(issuer),
  };
}

function evidenceRef(id, relation, kind, extra = {}) {
  const { authorizationBasis, ...rest } = extra;
  return {
    type: 'CredentialEvidenceReference',
    id,
    relation,
    ...(kind ? { authorizationBasis: { kind, ...authorizationBasis } } : {}),
    ...rest,
  };
}

function presentationFiles(profile) {
  return {
    'presentation-definition.json': {
      id: `${profile.id}-presentation-definition`,
      input_descriptors: [
        { id: 'target-credential' },
        ...profile.requiredEvidence.map(req => ({ id: req.id })),
      ],
    },
    'presentation-submission.json': {
      id: `${profile.id}-presentation-submission`,
      descriptor_map: [
        { id: 'target-credential', path: '$.verifiableCredential[0]' },
        ...profile.requiredEvidence.map((req, index) => ({
          id: req.id,
          path: `$.verifiableCredential[${index + 1}]`,
        })),
      ],
    },
  };
}

function expectedTrace(profileId, codes) {
  return {
    verified: true,
    profile: profileId,
    target: '',
    summary: { nodesResolved: 0, edgesEvaluated: 0, failures: 0, warnings: 0 },
    results: codes.map((code, index) => ({
      id: `${profileId}-${index}`,
      level: 'policy',
      status: 'PASS',
      code,
      detail: 'Expected trace code for fixture parity.',
    })),
  };
}

function writeExample(name, target, evidenceDocuments, registry, profile, codes) {
  const base = `testdata/examples/${name}`;
  writeJson(`${base}/target-credential.json`, target);
  for (const document of evidenceDocuments) {
    writeJson(`${base}/evidence/${document.id.split(':').at(-1)}.json`, document);
  }
  writeJson(`${base}/trust-registry.json`, registry);
  writeJson(`${base}/status-list.json`, {
    '@context': [VC_CONTEXT],
    type: ['VerifiableCredential', 'BitstringStatusListCredential'],
    id: `urn:uuid:${name}:status-list`,
    issuer: 'did:web:status.example',
    credentialSubject: { id: `urn:uuid:${name}:status-list#list`, encodedList: 'eJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAAAA4G0BIQAB' },
  });
  writeJson(`${base}/policy.json`, profile);
  for (const [file, value] of Object.entries(presentationFiles(profile))) writeJson(`${base}/${file}`, value);
  writeJson(`${base}/expected-trace.json`, expectedTrace(profile.id, codes));
  writeText(`${base}/README.md`, `# ${name}\n\nShared v0.2 evidence-graph fixture for ${profile.id}.\n`);
  writeJson(`policies/profiles/${profile.id}.json`, profile);
}

const NAB = 'did:web:nab.example';
const NMI = 'did:web:nmi.example';
const ZLS = 'did:web:zls.example';
const LAB = 'did:web:lab.example';
const RM_PRODUCER = 'did:web:rm-producer.example';
const RM_LAB = 'did:web:rm-lab.example';
const GS_BODY = 'did:web:gs-body.example';

function directCalibration() {
  const acc = accreditation('urn:uuid:accreditation-direct-001', NAB, LAB, pressureScope());
  const targetEvidence = [evidenceRef(acc.id, 'authorizedBy', 'accreditation', {
    authorizationBasis: { issuerRole: 'nationalAccreditationBody', scopeRef: 'pressure-scope' },
    digestSRI: digestSRI(acc),
  })];
  const target = dcc('urn:uuid:dcc-direct-001', LAB, targetEvidence);
  const profile = policy('calibration-direct-accreditation', ['DigitalCalibrationCertificate'], [{
    id: 'direct-accreditation',
    relation: 'authorizedBy',
    authorizationBasis: { kind: 'accreditation' },
    required: true,
  }], { scopeInclusion: 'dccScopeInclusion' });
  const registry = trustRegistry([{
    id: NAB,
    issuerRole: 'nationalAccreditationBody',
    authorizationBasisKinds: ['accreditation'],
    credentialTypes: ['AccreditationCertificate'],
  }]);
  writeExample('calibration-direct-accreditation', target, [acc], registry, profile, [
    'DIGEST_VALID',
    'SCHEMA_VALID',
    'TRUSTED_ISSUER',
    'SCOPE_INCLUSION_VALID',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);
  writeJson('examples/calibration/digital-calibration-certificate.json', target);

  // Failing variant: the DCC's evidence digest does not match the referenced
  // accreditation (tampered/stale reference) → DIGEST_MISMATCH.
  const failTarget = dcc('urn:uuid:dcc-direct-tampered-001', LAB, [
    evidenceRef(acc.id, 'authorizedBy', 'accreditation', {
      authorizationBasis: { issuerRole: 'nationalAccreditationBody', scopeRef: 'pressure-scope' },
      digestSRI: 'sha384-' + 'A'.repeat(64),
    }),
  ]);
  writeJson('testdata/examples/calibration-direct-accreditation/failing-target-credential.json', failTarget);
}

function calibrationCapability() {
  const acc = accreditation('urn:uuid:accreditation-capability-001', NAB, LAB, pressureScope(1000));
  const cap = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'CalibrationCapabilityAuthorization'],
    id: 'urn:uuid:capability-001',
    issuer: NAB,
    validFrom: '2024-06-01T00:00:00Z',
    validUntil: '2027-06-01T00:00:00Z',
    credentialSubject: {
      id: LAB,
      constraints: {
        authorizedCredentialTypes: ['DigitalCalibrationCertificate'],
        scopeEntries: pressureScope(800),
      },
    },
    evidence: [evidenceRef(acc.id, 'derivedFrom', 'accreditation', { digestSRI: digestSRI(acc) })],
    proof: proof(NAB),
  };
  const target = dcc('urn:uuid:dcc-capability-001', LAB, [
    evidenceRef(cap.id, 'authorizedBy', 'operationalScope', { digestSRI: digestSRI(cap) }),
  ]);
  const profile = policy('calibration-capability', ['DigitalCalibrationCertificate'], [
    { id: 'capability-authority', relation: 'authorizedBy', authorizationBasis: { kind: 'operationalScope' }, required: true },
    { id: 'capability-parent', relation: 'derivedFrom', authorizationBasis: { kind: 'accreditation' }, required: true },
  ], { scopeInclusion: 'dccScopeInclusion' });
  const registry = trustRegistry([{
    id: NAB,
    issuerRole: 'nationalAccreditationBody',
    authorizationBasisKinds: ['accreditation', 'operationalScope'],
    credentialTypes: ['AccreditationCertificate', 'CalibrationCapabilityAuthorization'],
  }]);
  writeExample('calibration-capability', target, [cap, acc], registry, profile, [
    'DIGEST_VALID',
    'DERIVATION_VALID',
    'SCOPE_INCLUSION_VALID',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);

  const badCap = structuredClone(cap);
  badCap.id = 'urn:uuid:capability-exceeds-001';
  badCap.credentialSubject.constraints.scopeEntries = pressureScope(2000);
  badCap.evidence[0].digestSRI = digestSRI(acc);
  const badTarget = dcc('urn:uuid:dcc-capability-exceeds-001', LAB, [
    evidenceRef(badCap.id, 'authorizedBy', 'operationalScope', { digestSRI: digestSRI(badCap) }),
  ]);
  writeJson('testdata/examples/calibration-capability/failing-target-credential.json', badTarget);
  writeJson('testdata/examples/calibration-capability/evidence/capability-exceeds-001.json', badCap);
}

function legalMandate() {
  const mandate = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'LegalMandateEvidence'],
    id: 'urn:uuid:nmi-legal-mandate-001',
    issuer: NMI,
    validFrom: '2020-01-01T00:00:00Z',
    credentialSubject: { id: NMI, legalBasis: 'Units and Time Act', scope: pressureScope(1000) },
    proof: proof(NMI),
  };
  const target = dcc('urn:uuid:dcc-nmi-001', NMI, [
    evidenceRef(mandate.id, 'authorizedBy', 'legalMandate', {
      authorizationBasis: { issuerRole: 'nationalMetrologyInstitute', legalBasis: 'Units and Time Act' },
      digestSRI: digestSRI(mandate),
    }),
  ]);
  const profile = policy('nmi-legal-mandate', ['DigitalCalibrationCertificate'], [{
    id: 'legal-mandate',
    relation: 'authorizedBy',
    authorizationBasis: { kind: 'legalMandate', issuerRole: 'nationalMetrologyInstitute' },
    required: true,
  }], { scopeInclusion: 'dccScopeInclusion' });
  const registry = trustRegistry([{
    id: NMI,
    issuerRole: 'nationalMetrologyInstitute',
    authorizationBasisKinds: ['legalMandate'],
    credentialTypes: ['LegalMandateEvidence'],
  }]);
  writeExample('nmi-legal-mandate', target, [mandate], registry, profile, [
    'TRUSTED_ISSUER',
    'SCOPE_INCLUSION_VALID',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);

  // Failing variant: the DCC reports a measured value (1500 kPa) outside the
  // pressure scope the legal mandate authorizes (≤ 1000 kPa) → scope inclusion fails.
  const failTarget = dcc('urn:uuid:dcc-nmi-out-of-scope-001', NMI, [
    evidenceRef(mandate.id, 'authorizedBy', 'legalMandate', {
      authorizationBasis: { issuerRole: 'nationalMetrologyInstitute', legalBasis: 'Units and Time Act' },
      digestSRI: digestSRI(mandate),
    }),
  ], 1500);
  writeJson('testdata/examples/nmi-legal-mandate/failing-target-credential.json', failTarget);
}

function referenceMaterial() {
  // AccreditationAttestation — root, no authorizing edge; scope: As in CuZn39Pb3
  const acc = accreditation('urn:uuid:rm-accreditation-001', NAB, RM_PRODUCER, [{
    matrix: ['CuZn39Pb3 (leaded brass)'],
    matrixIris: [TERMS.matrix.cuzn39pb3],
    allowedProperties: ['As'],
    allowedPropertyIris: [TERMS.element.as],
    allowedForms: ['disc'],
    allowedFormIris: [TERMS.form.disc],
    uncertainty: { maxAbsoluteMgKg: 6 },
  }]);

  // OperationalScope — self-issued by RM_PRODUCER; derivedFrom accreditation
  const opScope = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'OperationalScopeEvidence'],
    id: 'urn:uuid:operational-scope-001',
    issuer: RM_PRODUCER,
    validFrom: '2025-06-01T00:00:00Z',
    validUntil: '2028-06-01T00:00:00Z',
    credentialSubject: {
      id: RM_PRODUCER,
      constraints: {
        authorizedCredentialTypes: ['ReferenceMaterialCertificate'],
        scopeEntries: [{
          matrix: ['CuZn39Pb3 (leaded brass)'],
          matrixIris: [TERMS.matrix.cuzn39pb3],
          allowedProperties: ['As'],
          allowedPropertyIris: [TERMS.element.as],
          allowedForms: ['disc'],
          allowedFormIris: [TERMS.form.disc],
          uncertainty: { maxAbsoluteMgKg: 5 },
        }],
      },
    },
    evidence: [evidenceRef(acc.id, 'derivedFrom', 'accreditation', { digestSRI: digestSRI(acc) })],
    proof: proof(RM_PRODUCER),
  };

  const labAcc = accreditation('urn:uuid:rm-study-lab-accreditation-001', NAB, RM_LAB, [{
    matrix: ['CuZn39Pb3 (leaded brass)'],
    matrixIris: [TERMS.matrix.cuzn39pb3],
    allowedProperties: ['As'],
    allowedPropertyIris: [TERMS.element.as],
    allowedForms: ['disc'],
    allowedFormIris: [TERMS.form.disc],
  }]);

  const study = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'ReferenceMaterialStudy'],
    id: 'urn:uuid:rm-study-001',
    issuer: RM_LAB,
    validFrom: '2026-01-15T00:00:00Z',
    credentialSubject: { id: 'urn:example:lot:rm-CuZn-As-001', studyType: 'homogeneity' },
    evidence: [evidenceRef(labAcc.id, 'authorizedBy', 'accreditation', { digestSRI: digestSRI(labAcc) })],
    proof: proof(RM_LAB),
  };

  // ReferenceMaterialCertificate — Profile B canonical values per §1.4
  const rmcAccept = {
    $schema: RMC_SCHEMA,
    '@context': [VC_CONTEXT, QI_CONTEXT, RM_CONTEXT],
    type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
    id: 'urn:uuid:rm-cert-001',
    issuer: RM_PRODUCER,
    validFrom: '2026-02-01T00:00:00Z',
    validUntil: '2028-02-01T00:00:00Z',
    credentialSchema: { id: RMC_SCHEMA, type: 'JsonSchema' },
    credentialSubject: {
      id: 'urn:example:lot:rm-CuZn-As-001',
      administrativeData: {
        coreData: { titleOfTheDocument: 'Reference Material Certificate', uniqueIdentifier: 'RMC-CuZn-As-001' },
        validity: { validFrom: '2026-02-01', validUntil: '2028-02-01' },
        referenceMaterialProducer: { id: RM_PRODUCER, name: 'Reference Material Producer' },
      },
      materials: [{
        name: 'CuZn39Pb3 (leaded brass)',
        matrix: 'CuZn39Pb3 (leaded brass)',
        matrixIri: TERMS.matrix.cuzn39pb3,
        form: 'disc',
        formIri: TERMS.form.disc,
        materialIdentifiers: [{ type: 'lotNumber', value: 'RM-CuZn-As-001' }],
      }],
      materialPropertiesList: [{
        propertyIdentifiers: ['As'],
        isCertified: true,
        results: [{
          name: 'Arsenic (As)',
          propertyIri: TERMS.element.as,
          scopeRef: 'scope-entry-As-CuZn',
          data: {
            quantity: {
              quantityKind: 'http://qudt.org/vocab/quantitykind/MassFraction',
              value: 178.0,
              unit: { ucumCode: 'mg/kg' },
              uncertainty: { expandedUncertainty: 5.0, coverageFactor: 2 },
            },
          },
        }],
      }],
    },
    evidence: [
      evidenceRef(opScope.id, 'authorizedBy', 'operationalScope', {
        authorizationBasis: { issuerRole: 'referenceMaterialProducer' },
        digestSRI: digestSRI(opScope),
      }),
      evidenceRef(study.id, 'supportedBy', undefined, { digestSRI: digestSRI(study) }),
    ],
    proof: proof(RM_PRODUCER),
  };

  // Reject fixture — certified uncertainty (U = 8 mg/kg) widened beyond the
  // accredited bound for As in CuZn39Pb3 (maxAbsoluteMgKg = 6) → UNCERTAINTY_WIDENING.
  const rmcReject = structuredClone(rmcAccept);
  rmcReject.id = 'urn:uuid:rm-cert-reject-001';
  rmcReject.credentialSubject.materialPropertiesList[0].results[0].name = 'Arsenic (As) - uncertainty out of scope';
  rmcReject.credentialSubject.materialPropertiesList[0].results[0].data.quantity.uncertainty.expandedUncertainty = 8.0;
  rmcReject.credentialSubject.administrativeData.coreData.uniqueIdentifier = 'RMC-CuZn-As-REJECT-001';
  rmcReject.evidence = [
    evidenceRef(opScope.id, 'authorizedBy', 'operationalScope', {
      authorizationBasis: { issuerRole: 'referenceMaterialProducer' },
      digestSRI: digestSRI(opScope),
    }),
    evidenceRef(study.id, 'supportedBy', undefined, { digestSRI: digestSRI(study) }),
  ];
  rmcReject.proof = proof(RM_PRODUCER);

  const profile = policy('reference-material-recursive', ['ReferenceMaterialCertificate'], [
    { id: 'rm-authority', relation: 'authorizedBy', authorizationBasis: { kind: 'operationalScope' }, required: true },
    { id: 'operational-scope-parent', relation: 'derivedFrom', authorizationBasis: { kind: 'accreditation' }, required: true },
    { id: 'rm-study-support', relation: 'supportedBy', targetCredentialTypes: ['ReferenceMaterialStudy'], required: true },
  ], { scopeInclusion: 'drmdScopeInclusion' });
  const registry = trustRegistry([{
    id: RM_PRODUCER,
    issuerRole: 'referenceMaterialProducer',
    authorizationBasisKinds: ['operationalScope'],
    credentialTypes: ['OperationalScopeEvidence', 'ReferenceMaterialCertificate'],
  }, {
    id: NAB,
    issuerRole: 'nationalAccreditationBody',
    authorizationBasisKinds: ['accreditation'],
    credentialTypes: ['AccreditationCertificate'],
  }]);
  writeExample('reference-material-recursive', rmcAccept, [opScope, acc, study, labAcc], registry, profile, [
    'DERIVATION_VALID',
    'SUPPORTING_EVIDENCE_RESOLVED',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);
  writeJson('testdata/examples/reference-material-recursive/reject-credential.json', rmcReject);
  writeJson('examples/rm/reference-material-certificate.json', rmcAccept);
}

function gsScheme() {
  const scheme = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'SchemeAuthorizationEvidence'],
    id: 'urn:uuid:gs-scheme-authorization-001',
    issuer: ZLS,
    validFrom: '2025-01-01T00:00:00Z',
    validUntil: '2027-01-01T00:00:00Z',
    credentialSubject: { id: GS_BODY, scheme: 'GS' },
    proof: proof(ZLS),
  };
  const acc = accreditation('urn:uuid:gs-competence-accreditation-001', NAB, GS_BODY, []);
  const target = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'GSCertificate'],
    id: 'urn:uuid:gs-cert-001',
    issuer: GS_BODY,
    validFrom: '2026-03-01T00:00:00Z',
    credentialSubject: { id: 'urn:example:product:001', productCategory: 'toy' },
    evidence: [
      evidenceRef(scheme.id, 'authorizedBy', 'schemeAuthorization', {
        authorizationBasis: { issuerRole: 'schemeAuthority', scheme: 'GS' },
        digestSRI: digestSRI(scheme),
      }),
      evidenceRef(acc.id, 'authorizedBy', 'accreditation', { digestSRI: digestSRI(acc) }),
    ],
    proof: proof(GS_BODY),
  };
  const profile = policy('gs-scheme-authorization', ['GSCertificate'], [
    { id: 'gs-scheme', relation: 'authorizedBy', authorizationBasis: { kind: 'schemeAuthorization' }, required: true },
    { id: 'gs-competence', relation: 'authorizedBy', authorizationBasis: { kind: 'accreditation' }, required: true },
  ], { scopeInclusion: 'ignored' });
  const registry = trustRegistry([
    { id: ZLS, issuerRole: 'schemeAuthority', authorizationBasisKinds: ['schemeAuthorization'], credentialTypes: ['SchemeAuthorizationEvidence'] },
    { id: NAB, issuerRole: 'nationalAccreditationBody', authorizationBasisKinds: ['accreditation'], credentialTypes: ['AccreditationCertificate'] },
  ]);
  writeExample('gs-scheme-authorization', target, [scheme, acc], registry, profile, [
    'TRUSTED_ISSUER',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);
  const missingScheme = structuredClone(target);
  missingScheme.id = 'urn:uuid:gs-cert-missing-scheme-001';
  missingScheme.evidence = [target.evidence[1]];
  writeJson('testdata/examples/gs-scheme-authorization/failing-target-credential.json', missingScheme);
}

function gsHairDryerHitl({ externalTestLab = false } = {}) {
  const scenarioId = externalTestLab
    ? 'gs-hair-dryer-external-test-lab-hitl'
    : 'gs-hair-dryer-hitl';
  const idPrefix = externalTestLab
    ? 'gs-hair-dryer-external-test-lab'
    : 'gs-hair-dryer';
  const manufacturer = 'did:web:nordlicht-appliances.example';
  const manufacturingSite = 'urn:example:facility:nordlicht-hair-dryer-01';
  const productType = 'urn:example:product-type:hair-dryer-hd-01';
  const serialNumber = externalTestLab ? 'HD01-2026-000043' : 'HD01-2026-000042';
  const productUnit = `https://products.nordlicht-appliances.example/hd-01/serial/${serialNumber}`;
  const qrCredentialUrl = `${productUnit}/gs-mark`;
  const issuingScopeTypes = externalTestLab
    ? ['GSCertificate', 'InspectionReport']
    : ['GSCertificate', 'TestReport', 'InspectionReport'];
  const testLab = 'did:web:hanseatic-product-testing.example';

  // This scenario deliberately chooses the accredited route even though the
  // report notes that ZLS may assess competence directly when accreditation is
  // absent. Profile D needs both competence and independent scheme authority.
  const acc = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'AccreditationCertificate'],
    id: `urn:uuid:${idPrefix}-accreditation-001`,
    issuer: NAB,
    validFrom: '2025-01-01T00:00:00Z',
    validUntil: '2030-01-01T00:00:00Z',
    credentialSubject: {
      id: GS_BODY,
      authorizationBasisKind: 'accreditation',
      scope: { authorizedCredentialTypes: issuingScopeTypes },
    },
    proof: proof(NAB),
  };

  const scheme = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'SchemeAuthorizationEvidence'],
    id: `urn:uuid:${idPrefix}-scheme-authorization-001`,
    issuer: ZLS,
    validFrom: '2025-01-01T00:00:00Z',
    validUntil: '2030-01-01T00:00:00Z',
    credentialSubject: { id: GS_BODY, scheme: 'GS' },
    proof: proof(ZLS),
  };

  const issuingScope = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'IssuingScopeCredential'],
    id: `urn:uuid:${idPrefix}-issuing-scope-001`,
    issuer: GS_BODY,
    validFrom: '2026-01-01T00:00:00Z',
    validUntil: '2029-01-01T00:00:00Z',
    credentialSubject: {
      id: GS_BODY,
      constraints: { authorizedCredentialTypes: issuingScopeTypes },
    },
    evidence: [
      evidenceRef(acc.id, 'derivedFrom', 'accreditation', { digestSRI: digestSRI(acc) }),
      evidenceRef(scheme.id, 'authorizedBy', 'schemeAuthorization', {
        authorizationBasis: { issuerRole: 'schemeAuthority', scheme: 'GS' },
        digestSRI: digestSRI(scheme),
      }),
    ],
    proof: proof(GS_BODY),
  };

  const testLabAccreditation = externalTestLab ? {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'AccreditationCertificate'],
    id: `urn:uuid:${idPrefix}-test-lab-accreditation-001`,
    issuer: NAB,
    validFrom: '2025-01-01T00:00:00Z',
    validUntil: '2030-01-01T00:00:00Z',
    credentialSubject: {
      id: testLab,
      authorizationBasisKind: 'accreditation',
      scope: { authorizedCredentialTypes: ['TestReport'] },
    },
    proof: proof(NAB),
  } : undefined;

  const testLabScope = externalTestLab && testLabAccreditation ? {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'IssuingScopeCredential'],
    id: `urn:uuid:${idPrefix}-test-lab-scope-001`,
    // The independent laboratory's competence comes from its own NAB
    // accreditation, not from the GS body's commissioning decision. The lab
    // issues its operational projection within that accredited scope.
    issuer: testLab,
    validFrom: '2026-01-01T00:00:00Z',
    validUntil: '2029-01-01T00:00:00Z',
    credentialSubject: {
      id: testLab,
      constraints: { authorizedCredentialTypes: ['TestReport'] },
    },
    evidence: [
      evidenceRef(testLabAccreditation.id, 'derivedFrom', 'accreditation', {
        digestSRI: digestSRI(testLabAccreditation),
      }),
    ],
    proof: proof(testLab),
  } : undefined;

  const reportScope = testLabScope ?? issuingScope;

  const typeExamination = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'TestReport'],
    id: `urn:uuid:${idPrefix}-type-examination-001`,
    issuer: externalTestLab ? testLab : GS_BODY,
    validFrom: '2026-05-10T00:00:00Z',
    credentialSubject: {
      id: `${productType}#type-examination`,
      [`${SCHEMA}/identifier`]: 'TR-HD-01',
      [`${SCHEMA}/itemReviewed`]: externalTestLab ? {
        id: productType,
        type: 'Product',
        [`${SCHEMA}/manufacturer`]: { id: manufacturer },
      } : { id: productType },
      ...(externalTestLab ? {
        // Schema.org customer identifies the organization commissioning and
        // relying on the laboratory service. It is not the report subject.
        [`${SCHEMA}/customer`]: { id: GS_BODY },
      } : {}),
      [`${SCHEMA}/reviewBody`]: 'Representative type examined for electrical safety, overheating, foreseeable water-related hazards, materials, ergonomics, marking, and instructions.',
      [`${SCHEMA}/reviewRating`]: {
        [`${SCHEMA}/ratingValue`]: 'pass',
        [`${SCHEMA}/bestRating`]: 'pass',
      },
    },
    evidence: [evidenceRef(reportScope.id, 'authorizedBy', 'operationalScope', {
      ...(externalTestLab ? {
        authorizationBasis: { issuerRole: 'testingLaboratory' },
      } : {}),
      digestSRI: digestSRI(reportScope),
    })],
    proof: proof(externalTestLab ? testLab : GS_BODY),
  };

  const factoryInspection = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'InspectionReport'],
    id: `urn:uuid:${idPrefix}-factory-inspection-001`,
    issuer: GS_BODY,
    validFrom: '2026-05-14T00:00:00Z',
    credentialSubject: {
      id: manufacturingSite,
      [`${SCHEMA}/identifier`]: 'FIR-HD-01',
      [`${SCHEMA}/itemReviewed`]: { id: manufacturer },
      [`${SCHEMA}/location`]: { id: manufacturingSite },
      [`${SCHEMA}/reviewBody`]: 'Initial factory inspection covered personnel, equipment, incoming-goods controls, production controls, intermediate checks, final-product checks, and traceability of safety-critical components.',
      [`${SCHEMA}/reviewRating`]: {
        [`${SCHEMA}/ratingValue`]: 'pass',
        [`${SCHEMA}/bestRating`]: 'pass',
      },
    },
    evidence: [evidenceRef(issuingScope.id, 'authorizedBy', 'operationalScope', {
      digestSRI: digestSRI(issuingScope),
    })],
    proof: proof(GS_BODY),
  };

  const gsCertificate = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'GSCertificate'],
    id: `urn:uuid:${idPrefix}-certificate-001`,
    issuer: GS_BODY,
    validFrom: '2026-05-20T00:00:00Z',
    validUntil: '2029-01-01T00:00:00Z',
    credentialSubject: {
      // The certificate authorizes this manufacturer to apply the GS mark to
      // conforming units of the reviewed product type. This subject binding is
      // what lets a manufacturer-issued unit credential point to it via
      // authorizedBy without pretending that the GS body issued the QR mark.
      id: manufacturer,
      [`${SCHEMA}/identifier`]: 'GS-HD-01',
      [`${SCHEMA}/itemReviewed`]: {
        id: productType,
        type: 'Product',
        [`${SCHEMA}/category`]: 'hand-held hair dryer',
        [`${SCHEMA}/model`]: 'HD-01',
        [`${SCHEMA}/manufacturer`]: { id: manufacturer },
      },
    },
    evidence: [
      evidenceRef(issuingScope.id, 'authorizedBy', 'operationalScope', {
        digestSRI: digestSRI(issuingScope),
      }),
      evidenceRef(typeExamination.id, 'supportedBy', undefined, {
        digestSRI: digestSRI(typeExamination),
      }),
      evidenceRef(factoryInspection.id, 'supportedBy', undefined, {
        digestSRI: digestSRI(factoryInspection),
      }),
    ],
    proof: proof(GS_BODY),
  };

  // This is the credential returned when the QR mark on one physical unit is
  // scanned. It is an assertion by the manufacturer about that serialized
  // unit, authorized by the GS body's type-level certificate above.
  const target = {
    '@context': [VC_CONTEXT, QI_CONTEXT, QI_CORE_CONTEXT, GS_SCENARIO_CONTEXT],
    type: ['VerifiableCredential', 'Product'],
    id: qrCredentialUrl,
    issuer: manufacturer,
    validFrom: '2026-05-21T00:00:00Z',
    validUntil: '2029-01-01T00:00:00Z',
    credentialSubject: {
      id: productUnit,
      type: 'Product',
      [`${SCHEMA}/identifier`]: serialNumber,
      [`${SCHEMA}/serialNumber`]: serialNumber,
      [`${SCHEMA}/model`]: 'HD-01',
      [`${SCHEMA}/manufacturer`]: { id: manufacturer },
      [`${SCHEMA}/isVariantOf`]: { id: productType },
      [`${SCHEMA}/url`]: qrCredentialUrl,
    },
    evidence: [evidenceRef(gsCertificate.id, 'authorizedBy', 'schemeAuthorization', {
      authorizationBasis: { issuerRole: 'gsBody', scheme: 'GS' },
      digestSRI: digestSRI(gsCertificate),
    })],
    proof: proof(manufacturer),
  };

  const profile = policy(scenarioId, ['Product'], [
    {
      id: 'manufacturer-gs-certificate',
      relation: 'authorizedBy',
      targetCredentialTypes: ['GSCertificate'],
      authorizationBasis: { kind: 'schemeAuthorization' },
      required: true,
    },
    { id: 'gs-issuing-authority', relation: 'authorizedBy', authorizationBasis: { kind: 'operationalScope' }, required: true },
    { id: 'gs-accredited-scope', relation: 'derivedFrom', authorizationBasis: { kind: 'accreditation' }, required: true },
    { id: 'gs-scheme-authority', relation: 'authorizedBy', authorizationBasis: { kind: 'schemeAuthorization' }, required: true },
    { id: 'product-type-examination', relation: 'supportedBy', targetCredentialTypes: ['TestReport'], required: true },
    { id: 'initial-factory-inspection', relation: 'supportedBy', targetCredentialTypes: ['InspectionReport'], required: true },
    ...(externalTestLab ? [{
      id: 'external-testing-laboratory-scope',
      relation: 'authorizedBy',
      targetCredentialTypes: ['IssuingScopeCredential'],
      authorizationBasis: { kind: 'operationalScope', issuerRole: 'testingLaboratory' },
      required: true,
    }] : []),
  ], { scopeInclusion: 'ignored' });
  profile.assessment = {
    mode: 'required',
    targetCredentialTypes: ['TestReport', 'InspectionReport'],
    allowedMethods: ['agent', 'human', 'hybrid'],
  };

  const registry = trustRegistry([
    {
      id: ZLS,
      issuerRole: 'schemeAuthority',
      authorizationBasisKinds: ['schemeAuthorization'],
      credentialTypes: ['SchemeAuthorizationEvidence'],
    },
    {
      id: NAB,
      issuerRole: 'nationalAccreditationBody',
      authorizationBasisKinds: ['accreditation'],
      credentialTypes: ['AccreditationCertificate'],
    },
    {
      id: GS_BODY,
      issuerRole: 'gsBody',
      authorizationBasisKinds: ['operationalScope'],
      credentialTypes: ['IssuingScopeCredential'],
    },
    {
      id: GS_BODY,
      issuerRole: 'gsBody',
      authorizationBasisKinds: ['schemeAuthorization'],
      credentialTypes: ['GSCertificate'],
    },
    ...(externalTestLab ? [{
      id: testLab,
      issuerRole: 'testingLaboratory',
      authorizationBasisKinds: ['operationalScope'],
      credentialTypes: ['IssuingScopeCredential'],
    }] : []),
  ]);

  const evidenceDocuments = [
    gsCertificate,
    issuingScope,
    acc,
    scheme,
    typeExamination,
    factoryInspection,
    ...(testLabScope ? [testLabScope] : []),
    ...(testLabAccreditation ? [testLabAccreditation] : []),
  ];

  writeExample(
    scenarioId,
    target,
    evidenceDocuments,
    registry,
    profile,
    [
      'DERIVATION_VALID',
      'SUPPORTING_EVIDENCE_RESOLVED',
      'ASSESSMENT_PASSED',
      'SUBJECT_BOUND',
      'PROOF_VALID',
      'REQUIRED_EVIDENCE_PRESENT',
    ],
  );

  // A cryptographically valid QR credential with a deliberately wrong digest
  // for its GS certificate. The failing UI variant therefore exercises the
  // graph-integrity gate while every credential proof can still verify.
  const failingTarget = structuredClone(target);
  failingTarget.evidence[0].digestSRI =
    'sha384-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  writeJson(`testdata/examples/${scenarioId}/failing-target-credential.json`, failingTarget);

  writeText(
    `testdata/examples/${scenarioId}/README.md`,
    `# ${scenarioId}\n\n` +
    'A realistic synthetic GS Profile D graph for a hand-held hair dryer. Scanning the ' +
    'QR mark resolves a manufacturer-issued `Product` VC for one serialized unit. It is ' +
    '`authorizedBy` the GS body\'s type-level `GSCertificate`, whose subject is the ' +
    'manufacturer. The certificate is `authorizedBy` a self-issued GS scope and ' +
    '`supportedBy` a product `TestReport` plus an initial manufacturer `InspectionReport`. ' +
    (externalTestLab
      ? 'The product test is issued by a separate testing laboratory to the GS body. The laboratory issues its own operational scope derived only from its NAB accreditation; the GS body commissions and uses the report but does not create the laboratory\'s competence. The GS scope '
      : 'The scope ') +
    'is `derivedFrom` accreditation and independently `authorizedBy` ZLS scheme ' +
    'authorization. Policy requires agent/human/hybrid semantic assessment of the two ' +
    'sparse-schema reports. Fixture credentials are signed with a TEST ONLY key so the ' +
    'pass test exercises proof verification. The failing target also has a valid proof, ' +
    'but carries an incorrect digest for the GS certificate. All organizations, identifiers, ' +
    'and credentials are fictional.\n',
  );
  writeJson(
    externalTestLab
      ? 'examples/gs/hair-dryer-gs-product-mark-external-test-lab.json'
      : 'examples/gs/hair-dryer-gs-product-mark.json',
    target,
  );
}

function testReportSupportedByDcc() {
  const acc = accreditation('urn:uuid:test-report-dcc-accreditation-001', NAB, LAB, pressureScope());
  const supportingDcc = dcc('urn:uuid:supporting-dcc-001', LAB, [
    evidenceRef(acc.id, 'authorizedBy', 'accreditation', { digestSRI: digestSRI(acc) }),
  ]);
  const target = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'TestReport'],
    id: 'urn:uuid:test-report-001',
    issuer: LAB,
    validFrom: '2026-04-01T00:00:00Z',
    credentialSubject: { id: 'urn:example:item:pressure-001', reportNumber: 'TR-001' },
    evidence: [evidenceRef(supportingDcc.id, 'supportedBy', undefined, { digestSRI: digestSRI(supportingDcc) })],
    proof: proof(LAB),
  };
  const profile = policy('test-report-supported-dcc', ['TestReport'], [{
    id: 'test-report-dcc-support',
    relation: 'supportedBy',
    targetCredentialTypes: ['DigitalCalibrationCertificate'],
    required: true,
  }], { scopeInclusion: 'ignored' });
  const registry = trustRegistry([{
    id: NAB,
    issuerRole: 'nationalAccreditationBody',
    authorizationBasisKinds: ['accreditation'],
    credentialTypes: ['AccreditationCertificate'],
  }]);
  writeExample('test-report-supported-dcc', target, [supportingDcc, acc], registry, profile, [
    'SUPPORTING_EVIDENCE_RESOLVED',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);
}

for (const path of [
  'testdata/contexts',
  'testdata/schemas',
  'testdata/policies',
  'testdata/examples',
  'policies/profiles',
]) {
  const full = join(ROOT, path);
  if (existsSync(full)) rmSync(full, { recursive: true, force: true });
}

writeJson('testdata/contexts/qi-evidence-context.jsonld', JSON.parse(readFileSync(join(ROOT, 'contexts/v1/qi-evidence-context.jsonld'), 'utf8')));
writeJson('testdata/schemas/policy-profile.schema.json', JSON.parse(readFileSync(join(ROOT, 'schemas/v1/policy-profile.schema.json'), 'utf8')));

directCalibration();
calibrationCapability();
legalMandate();
referenceMaterial();
gsScheme();
gsHairDryerHitl();
gsHairDryerHitl({ externalTestLab: true });
testReportSupportedByDcc();

writeText(
  'examples/gs/README.md',
  '# GS hair-dryer scenarios\n\n' +
  '- `hair-dryer-gs-product-mark.json` uses the GS body\'s in-house testing function.\n' +
  '- `hair-dryer-gs-product-mark-external-test-lab.json` uses a separate accredited testing laboratory commissioned by the GS body.\n\n' +
  'The complete generated graphs are under `testdata/examples/`. The older ' +
  '`gs-scheme-authorization` fixture remains unchanged.\n',
);

for (const profile of [
  'calibration-direct-accreditation',
  'calibration-capability',
  'nmi-legal-mandate',
  'reference-material-recursive',
  'gs-scheme-authorization',
  'gs-hair-dryer-hitl',
  'gs-hair-dryer-external-test-lab-hitl',
]) {
  writeJson(`testdata/policies/${profile}.json`, JSON.parse(readFileSync(join(ROOT, `policies/profiles/${profile}.json`), 'utf8')));
}
