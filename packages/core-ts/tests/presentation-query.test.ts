// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import {
  policyToDcql,
  policyToPresentationDefinition,
  validatePresentationSubmission,
} from '../src/presentation-query/index.js';
import { codes, loadFixture } from './fixture-helpers.js';
import { verifyCredentialGraph } from '../src/verifier/index.js';
import { loadPolicyProfile } from '../src/policy/index.js';
import type { PolicyProfile } from '../src/policy/types.js';

// ── helpers ───────────────────────────────────────────────────────────────────

function dcqlCredentials(dcql: ReturnType<typeof policyToDcql>): Array<{ id: string; claims?: unknown[] }> {
  return dcql.credentials as Array<{ id: string; claims?: unknown[] }>;
}

function descriptors(pd: ReturnType<typeof policyToPresentationDefinition>): Array<{ id: string; constraints?: { fields?: unknown[] } }> {
  return pd.input_descriptors as Array<{ id: string; constraints?: { fields?: unknown[] } }>;
}

// ── DCQL translation ──────────────────────────────────────────────────────────

describe('policyToDcql', () => {
  it('emits target-credential descriptor with type filter', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const dcql = policyToDcql(fixture.policy);
    const creds = dcqlCredentials(dcql);
    const target = creds.find(c => c.id === 'target');
    expect(target).toBeDefined();
    expect(target?.claims).toContainEqual(
      expect.objectContaining({ path: ['type'] }),
    );
  });

  it('emits authorizationBasis.kind claim for each required evidence entry', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const dcql = policyToDcql(fixture.policy);
    const creds = dcqlCredentials(dcql);
    const evidence = creds.find(c => c.id === 'direct-accreditation');
    expect(evidence).toBeDefined();
    const claims = evidence?.claims as Array<{ path: string[]; values: string[] }>;
    const kindClaim = claims.find(c => c.path.includes('kind'));
    expect(kindClaim).toBeDefined();
    expect(kindClaim?.values).toContain('accreditation');
  });

  it('emits relation claim for each required evidence entry', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const dcql = policyToDcql(fixture.policy);
    const creds = dcqlCredentials(dcql);
    const evidence = creds.find(c => c.id === 'direct-accreditation');
    const claims = evidence?.claims as Array<{ path: string[]; values: string[] }>;
    const relationClaim = claims.find(c => c.path.includes('relation'));
    expect(relationClaim).toBeDefined();
    expect(relationClaim?.values).toContain('authorizedBy');
  });

  it('emits both relation and kind claims for profile D (schemeAuthorization)', () => {
    const fixture = loadFixture('gs-scheme-authorization');
    const dcql = policyToDcql(fixture.policy);
    const creds = dcqlCredentials(dcql);
    const evidence = creds.find(c => c.id === 'gs-scheme');
    expect(evidence).toBeDefined();
    const claims = evidence?.claims as Array<{ path: string[]; values: string[] }>;
    const kinds = claims.filter(c => c.path.includes('kind')).flatMap(c => c.values);
    expect(kinds).toContain('schemeAuthorization');
  });

  it('emits two evidence descriptors for calibration-capability (operationalScope + accreditation)', () => {
    const fixture = loadFixture('calibration-capability');
    const dcql = policyToDcql(fixture.policy);
    const creds = dcqlCredentials(dcql);
    // target + two evidence entries
    expect(creds.length).toBe(3);
    const kinds = creds
      .filter(c => c.id !== 'target')
      .flatMap(c => (c.claims as Array<{ path: string[]; values: string[] }>)
        .filter(cl => cl.path.includes('kind'))
        .flatMap(cl => cl.values),
      );
    expect(kinds).toContain('operationalScope');
    expect(kinds).toContain('accreditation');
  });

  it('marks optional evidence as optional: true', () => {
    const policy = loadPolicyProfile({
      id: 'test-optional',
      targetCredentialTypes: ['TestCredential'],
      requiredEvidence: [
        { id: 'optional-ev', relation: 'supportedBy', required: false },
      ],
      checks: {},
    });
    const dcql = policyToDcql(policy);
    const creds = dcqlCredentials(dcql);
    const evidence = creds.find(c => c.id === 'optional-ev');
    expect((evidence as Record<string, unknown>)?.optional).toBe(true);
  });
});

// ── Presentation Definition translation ───────────────────────────────────────

describe('policyToPresentationDefinition', () => {
  it('emits target-credential input_descriptor with type filter', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const pd = policyToPresentationDefinition(fixture.policy);
    const descs = descriptors(pd);
    const target = descs.find(d => d.id === 'target-credential');
    expect(target).toBeDefined();
    const fields = target?.constraints?.fields as Array<{ path: string[] }>;
    expect(fields.some(f => f.path.includes('$.type'))).toBe(true);
  });

  it('emits authorizationBasis.kind field constraint for each evidence entry', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const pd = policyToPresentationDefinition(fixture.policy);
    const descs = descriptors(pd);
    const evidence = descs.find(d => d.id === 'direct-accreditation');
    expect(evidence).toBeDefined();
    const fields = evidence?.constraints?.fields as Array<{ path: string[]; filter: { const?: string } }>;
    const kindField = fields.find(f => f.path.some(p => p.includes('kind')));
    expect(kindField).toBeDefined();
    expect(kindField?.filter?.const).toBe('accreditation');
  });

  it('emits relation field constraint', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const pd = policyToPresentationDefinition(fixture.policy);
    const descs = descriptors(pd);
    const evidence = descs.find(d => d.id === 'direct-accreditation');
    const fields = evidence?.constraints?.fields as Array<{ path: string[]; filter: { const?: string } }>;
    const relField = fields.find(f => f.path.some(p => p.includes('relation')));
    expect(relField).toBeDefined();
    expect(relField?.filter?.const).toBe('authorizedBy');
  });

  it('emits schemeAuthorization kind for profile D', () => {
    const fixture = loadFixture('gs-scheme-authorization');
    const pd = policyToPresentationDefinition(fixture.policy);
    const descs = descriptors(pd);
    const evidence = descs.find(d => d.id === 'gs-scheme');
    const fields = evidence?.constraints?.fields as Array<{ path: string[]; filter: { const?: string } }>;
    const kindField = fields.find(f => f.path.some(p => p.includes('kind')));
    expect(kindField?.filter?.const).toBe('schemeAuthorization');
  });

  it('anyOf: flattens alternatives into enum filter', () => {
    const policy = loadPolicyProfile({
      id: 'test-anyof',
      targetCredentialTypes: ['TestCredential'],
      requiredEvidence: [
        {
          id: 'auth-or-derived',
          anyOf: [
            { id: 'auth', relation: 'authorizedBy', authorizationBasis: { kind: 'accreditation' } },
            { id: 'derived', relation: 'derivedFrom', authorizationBasis: { kind: 'accreditation' } },
          ],
        },
      ],
      checks: {},
    });
    const pd = policyToPresentationDefinition(policy);
    const descs = descriptors(pd);
    const evidence = descs.find(d => d.id === 'auth-or-derived');
    const fields = evidence?.constraints?.fields as Array<{ path: string[]; filter: { enum?: string[] } }>;
    const relField = fields.find(f => f.path.some(p => p.includes('relation')));
    expect(relField?.filter?.enum).toContain('authorizedBy');
    expect(relField?.filter?.enum).toContain('derivedFrom');
  });
});

// ── validatePresentationSubmission ────────────────────────────────────────────

describe('validatePresentationSubmission', () => {
  it('passes when all descriptors are mapped (no credentials supplied)', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const pd = policyToPresentationDefinition(fixture.policy);
    const descs = descriptors(pd);
    const submission = {
      descriptor_map: descs.map((d, i) => ({ id: d.id, path: `$.verifiableCredential[${i}]` })),
    };
    const result = validatePresentationSubmission(pd, submission);
    expect(result.valid).toBe(true);
    expect(result.results.every(r => r.status === 'PASS')).toBe(true);
  });

  it('fails when a required descriptor is missing', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const pd = policyToPresentationDefinition(fixture.policy);
    const result = validatePresentationSubmission(pd, { descriptor_map: [] });
    expect(result.valid).toBe(false);
    expect(result.results.some(r => r.code === 'PRESENTATION_DESCRIPTOR_MISSING')).toBe(true);
  });

  it('passes field-value check when credential matches type constraint', () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const pd = policyToPresentationDefinition(fixture.policy);
    const descs = descriptors(pd);
    const submission = {
      descriptor_map: descs.map((d, i) => ({ id: d.id, path: `$.verifiableCredential[${i}]` })),
    };
    // Supply the real accreditation evidence document for the evidence descriptor.
    // A real accreditation credential has no evidence[] of its own — it IS the authority.
    const accEvidence = [...fixture.documents.values()].find(d =>
      Array.isArray(d.type) && (d.type as string[]).some(t => t.includes('Accreditation')),
    ) ?? [...fixture.documents.values()][0];
    const result = validatePresentationSubmission(pd, submission, {
      'target-credential': fixture.target as Record<string, unknown>,
      'direct-accreditation': accEvidence as Record<string, unknown>,
    });
    expect(result.valid).toBe(true);
  });

  it('fails field-value check when credential has wrong authorizationBasis.kind', () => {
    const policy = loadPolicyProfile({
      id: 'test-field-check',
      targetCredentialTypes: ['DigitalCalibrationCertificate'],
      requiredEvidence: [
        { id: 'auth-ev', relation: 'authorizedBy', authorizationBasis: { kind: 'accreditation' } },
      ],
      checks: {},
    });
    const pd = policyToPresentationDefinition(policy);
    const descs = descriptors(pd);
    const submission = {
      descriptor_map: descs.map((d, i) => ({ id: d.id, path: `$.verifiableCredential[${i}]` })),
    };
    const wrongCredential = {
      type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
      evidence: [{ relation: 'authorizedBy', authorizationBasis: { kind: 'legalMandate' } }],
    };
    const result = validatePresentationSubmission(pd, submission, {
      'target-credential': { type: ['VerifiableCredential', 'DigitalCalibrationCertificate'] },
      'auth-ev': wrongCredential,
    });
    expect(result.valid).toBe(false);
    expect(result.results.some(r => r.code === 'PRESENTATION_FIELD_MISMATCH')).toBe(true);
  });

  it('passes field-value check when evidence credential has no evidence array (normal accreditation doc)', () => {
    const policy = loadPolicyProfile({
      id: 'test-field-check-pass',
      targetCredentialTypes: ['DigitalCalibrationCertificate'],
      requiredEvidence: [
        { id: 'auth-ev', relation: 'authorizedBy', authorizationBasis: { kind: 'accreditation' } },
      ],
      checks: {},
    });
    const pd = policyToPresentationDefinition(policy);
    const descs = descriptors(pd);
    const submission = {
      descriptor_map: descs.map((d, i) => ({ id: d.id, path: `$.verifiableCredential[${i}]` })),
    };
    // A real accreditation credential is the authority document itself; it does not
    // carry an evidence[] array with relation/authorizationBasis — those appear on the
    // credential that references it. Field constraints on absent paths are not rejected.
    const accreditationCredential = {
      type: ['VerifiableCredential', 'AccreditationCredential'],
      credentialSubject: { id: 'did:web:lab.example', authorizationBasisKind: 'accreditation' },
    };
    const result = validatePresentationSubmission(pd, submission, {
      'target-credential': { type: ['VerifiableCredential', 'DigitalCalibrationCertificate'] },
      'auth-ev': accreditationCredential,
    });
    expect(result.valid).toBe(true);
  });

  it('keeps presentation validation separate from QI evidence-graph validation', async () => {
    const fixture = loadFixture('calibration-capability', 'failing-target-credential.json');
    const pd = policyToPresentationDefinition(fixture.policy);
    const dcql = policyToDcql(fixture.policy);
    const descs = descriptors(pd);
    const submission = {
      descriptor_map: descs.map((d, i) => ({ id: d.id, path: `$.verifiableCredential[${i}]` })),
    };
    const presentation = validatePresentationSubmission(pd, submission);
    const qiTrace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });

    expect((dcql.credentials as unknown[]).length).toBeGreaterThan(0);
    expect(presentation.valid).toBe(true);
    expect(qiTrace.verified).toBe(false);
    expect(codes(qiTrace)).toContain('DERIVATION_VIOLATION');
  });
});
