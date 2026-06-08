// SPDX-License-Identifier: Apache-2.0
import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VC_CONTEXT = 'https://www.w3.org/ns/credentials/v2';
const QI_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-evidence-context.jsonld';
const CAL_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld';
const RM_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld';
const DCC_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/digital-calibration-certificate.json';
const RMC_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/reference-material-certificate.json';
const POLICY_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/policy-profile.schema.json';

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

function trustRegistry(entries) {
  return {
    '@context': [VC_CONTEXT, QI_CONTEXT],
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
    allowedMethods: ['EURAMET cg-17'],
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
        usedMethods: [{ name: 'Pressure calibration', reference: 'EURAMET cg-17' }],
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
        form: 'disc',
        materialIdentifiers: [{ type: 'lotNumber', value: 'RM-001' }],
      }],
      materialPropertiesList: [{
        propertyIdentifiers: ['Pb'],
        isCertified: true,
        results: [{
          name: 'Lead (Pb)',
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

const DAKKS = 'did:web:dakks.example';
const PTB = 'did:web:ptb.example';
const ZLS = 'did:web:zls.example';
const LAB = 'did:web:lab.example';
const RM_PRODUCER = 'did:web:rm-producer.example';
const RM_LAB = 'did:web:rm-lab.example';
const GS_BODY = 'did:web:gs-body.example';

function directCalibration() {
  const acc = accreditation('urn:uuid:accreditation-direct-001', DAKKS, LAB, pressureScope());
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
    id: DAKKS,
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
}

function calibrationCapability() {
  const acc = accreditation('urn:uuid:accreditation-capability-001', DAKKS, LAB, pressureScope(1000));
  const cap = {
    '@context': [VC_CONTEXT, QI_CONTEXT],
    type: ['VerifiableCredential', 'CalibrationCapabilityAuthorization'],
    id: 'urn:uuid:capability-001',
    issuer: DAKKS,
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
    proof: proof(DAKKS),
  };
  const target = dcc('urn:uuid:dcc-capability-001', LAB, [
    evidenceRef(cap.id, 'authorizedBy', 'operationalScope', { digestSRI: digestSRI(cap) }),
  ]);
  const profile = policy('calibration-capability', ['DigitalCalibrationCertificate'], [
    { id: 'capability-authority', relation: 'authorizedBy', authorizationBasis: { kind: 'operationalScope' }, required: true },
    { id: 'capability-parent', relation: 'derivedFrom', authorizationBasis: { kind: 'accreditation' }, required: true },
  ], { scopeInclusion: 'dccScopeInclusion' });
  const registry = trustRegistry([{
    id: DAKKS,
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
    id: 'urn:uuid:ptb-legal-mandate-001',
    issuer: PTB,
    validFrom: '2020-01-01T00:00:00Z',
    credentialSubject: { id: PTB, legalBasis: 'Units and Time Act', scope: pressureScope(1000) },
    proof: proof(PTB),
  };
  const target = dcc('urn:uuid:dcc-ptb-001', PTB, [
    evidenceRef(mandate.id, 'authorizedBy', 'legalMandate', {
      authorizationBasis: { issuerRole: 'nationalMetrologyInstitute', legalBasis: 'Units and Time Act' },
      digestSRI: digestSRI(mandate),
    }),
  ]);
  const profile = policy('ptb-legal-mandate', ['DigitalCalibrationCertificate'], [{
    id: 'legal-mandate',
    relation: 'authorizedBy',
    authorizationBasis: { kind: 'legalMandate', issuerRole: 'nationalMetrologyInstitute' },
    required: true,
  }], { scopeInclusion: 'dccScopeInclusion' });
  const registry = trustRegistry([{
    id: PTB,
    issuerRole: 'nationalMetrologyInstitute',
    authorizationBasisKinds: ['legalMandate'],
    credentialTypes: ['LegalMandateEvidence'],
  }]);
  writeExample('ptb-legal-mandate', target, [mandate], registry, profile, [
    'TRUSTED_ISSUER',
    'SCOPE_INCLUSION_VALID',
    'REQUIRED_EVIDENCE_PRESENT',
  ]);
}

function referenceMaterial() {
  // AccreditationAttestation — root, no authorizing edge; scope: As in CuZn39Pb3
  const acc = accreditation('urn:uuid:rm-accreditation-001', DAKKS, RM_PRODUCER, [{
    matrix: ['CuZn39Pb3 (leaded brass)'],
    allowedProperties: ['As'],
    allowedForms: ['disc'],
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
          allowedProperties: ['As'],
          allowedForms: ['disc'],
          uncertainty: { maxAbsoluteMgKg: 5 },
        }],
      },
    },
    evidence: [evidenceRef(acc.id, 'derivedFrom', 'accreditation', { digestSRI: digestSRI(acc) })],
    proof: proof(RM_PRODUCER),
  };

  const labAcc = accreditation('urn:uuid:rm-study-lab-accreditation-001', DAKKS, RM_LAB, [{
    matrix: ['CuZn39Pb3 (leaded brass)'],
    allowedProperties: ['As'],
    allowedForms: ['disc'],
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
        form: 'disc',
        materialIdentifiers: [{ type: 'lotNumber', value: 'RM-CuZn-As-001' }],
      }],
      materialPropertiesList: [{
        propertyIdentifiers: ['As'],
        isCertified: true,
        results: [{
          name: 'Arsenic (As)',
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

  // Reject fixture — value outside accredited range (As = 250 mg/kg >> max 5 mg/kg U)
  const rmcReject = structuredClone(rmcAccept);
  rmcReject.id = 'urn:uuid:rm-cert-reject-001';
  rmcReject.credentialSubject.materialPropertiesList[0].results[0].name = 'Arsenic (As) - out of range';
  rmcReject.credentialSubject.materialPropertiesList[0].results[0].data.quantity.value = 250.0;
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
    id: DAKKS,
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
  const acc = accreditation('urn:uuid:gs-competence-accreditation-001', DAKKS, GS_BODY, []);
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
    { id: DAKKS, issuerRole: 'nationalAccreditationBody', authorizationBasisKinds: ['accreditation'], credentialTypes: ['AccreditationCertificate'] },
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

function testReportSupportedByDcc() {
  const acc = accreditation('urn:uuid:test-report-dcc-accreditation-001', DAKKS, LAB, pressureScope());
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
    id: DAKKS,
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
testReportSupportedByDcc();

for (const profile of ['calibration-direct-accreditation', 'calibration-capability', 'ptb-legal-mandate', 'reference-material-recursive', 'gs-scheme-authorization']) {
  writeJson(`testdata/policies/${profile}.json`, JSON.parse(readFileSync(join(ROOT, `policies/profiles/${profile}.json`), 'utf8')));
}
