// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import {
  codes,
  loadFixture,
  registryVerificationOptions,
  verifyFixture,
} from './fixture-helpers.js';
import type { AssessmentEvaluator } from '../src/assessment/index.js';
import { verifyCredentialGraph } from '../src/verifier/index.js';

const SCHEMA = 'https://schema.org/';

function objectValue(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
}

function objectId(value: unknown): string {
  return String(objectValue(value).id ?? '');
}

const gsAssessmentEvaluator: AssessmentEvaluator = request => {
  const isInspection = request.credentialTypes.includes('InspectionReport');
  const subject = objectValue(request.credential.credentialSubject);
  const rating = objectValue(subject[`${SCHEMA}reviewRating`]);
  const graph = request.evidenceGraph;
  const targetSubject = objectValue(request.targetCredential?.credentialSubject);
  const problems: string[] = [];
  if (rating[`${SCHEMA}ratingValue`] !== 'pass') problems.push('report outcome is not pass');
  if (!graph) problems.push('resolved graph is missing');

  const supportEdge = graph?.edges.find(edge =>
    edge.to === request.credentialId && edge.relation === 'supportedBy' &&
    graph.nodes[edge.from]?.types.includes('GSCertificate'));
  const certificate = supportEdge ? graph?.nodes[supportEdge.from]?.credential : undefined;
  const certificateSubject = objectValue(certificate?.credentialSubject);
  const certificateProduct = objectValue(certificateSubject[`${SCHEMA}itemReviewed`]);
  const targetManufacturer = objectId(targetSubject[`${SCHEMA}manufacturer`]);
  if (!certificate) problems.push('supporting GS certificate is missing');
  if (String(certificateSubject.id ?? '') !== targetManufacturer ||
      objectId(certificateProduct[`${SCHEMA}manufacturer`]) !== targetManufacturer) {
    problems.push('manufacturer binding does not match');
  }

  if (isInspection) {
    if (objectId(subject[`${SCHEMA}itemReviewed`]) !== String(certificateSubject.id ?? '')) {
      problems.push('inspection manufacturer does not match');
    }
  } else {
    const reportProduct = objectValue(subject[`${SCHEMA}itemReviewed`]);
    if (String(reportProduct.id ?? '') !== String(certificateProduct.id ?? '') ||
        objectId(targetSubject[`${SCHEMA}isVariantOf`]) !== String(certificateProduct.id ?? '')) {
      problems.push('product-type binding does not match');
    }
    const reportIssuer = String(request.credential.issuer ?? '');
    const certificateIssuer = String(certificate?.issuer ?? '');
    if (reportIssuer !== certificateIssuer) {
      if (objectId(reportProduct[`${SCHEMA}manufacturer`]) !== targetManufacturer) {
        problems.push('external report manufacturer does not match');
      }
      if (objectId(subject[`${SCHEMA}customer`]) !== certificateIssuer) {
        problems.push('external report customer is not the GS body');
      }
      const scopeEdge = graph?.edges.find(edge =>
        edge.from === request.credentialId && edge.relation === 'authorizedBy');
      const scope = scopeEdge ? graph?.nodes[scopeEdge.to]?.credential : undefined;
      if (String(scope?.issuer ?? '') !== reportIssuer ||
          objectId(scope?.credentialSubject) !== reportIssuer) {
        problems.push('independent laboratory scope does not match');
      }
      const accreditationEdge = scopeEdge && graph?.edges.find(edge =>
        edge.from === scopeEdge.to && edge.relation === 'derivedFrom');
      const accreditation = accreditationEdge
        ? graph?.nodes[accreditationEdge.to]?.credential
        : undefined;
      if (!accreditation ||
          !(accreditation.type as string[]).includes('AccreditationCertificate') ||
          String(accreditation.issuer ?? '') !== 'did:web:nab.example' ||
          objectId(accreditation.credentialSubject) !== reportIssuer) {
        problems.push('laboratory NAB accreditation does not match');
      }
      if (scopeEdge && graph?.edges.some(edge =>
        edge.from === scopeEdge.to && edge.relation === 'authorizedBy')) {
        problems.push('laboratory scope incorrectly depends on GS-body authority');
      }
    }
  }

  const passed = problems.length === 0;
  return {
    outcome: passed ? 'pass' : 'fail',
    method: isInspection ? 'human' : 'agent',
    assessorId: isInspection
      ? 'urn:example:person:factory-inspector-01'
      : 'urn:example:agent:product-safety-reviewer-01',
    assessmentId: `urn:example:assessment:${request.credentialId.split(':').at(-1)}`,
    detail: passed
      ? `${isInspection ? 'Human' : 'Agent'} assessment bound the report to the GS graph.`
      : `GS semantic assessment failed: ${problems.join('; ')}.`,
  };
};

describe('verifyCredentialGraph shared fixtures', () => {
  it('passes DCC authorized directly by accreditation', async () => {
    const trace = await verifyFixture('calibration-direct-accreditation');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_PRESENT');
    expect(codes(trace)).toContain('SCOPE_INCLUSION_VALID');
  });

  it('passes DCC authorized by capability derived from accreditation', async () => {
    const trace = await verifyFixture('calibration-capability');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('DERIVATION_VALID');
  });

  it('passes DCC authorized by legal mandate without accreditation', async () => {
    const trace = await verifyFixture('nmi-legal-mandate');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('TRUSTED_ISSUER');
    expect(trace.results.some(result => result.detail.includes('qi:accreditation'))).toBe(false);
  });

  it('passes ReferenceMaterialCertificate supported by an RM study', async () => {
    const trace = await verifyFixture('reference-material-recursive');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('SUPPORTING_EVIDENCE_RESOLVED');
  });

  it('passes TestReport supportedBy a DCC', async () => {
    const trace = await verifyFixture('test-report-supported-dcc');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('SUPPORTING_EVIDENCE_RESOLVED');
  });

  it('fails GS certificate missing scheme authorization', async () => {
    const trace = await verifyFixture('gs-scheme-authorization', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_MISSING');
  });

  it('fails when capability exceeds accreditation scope', async () => {
    const trace = await verifyFixture('calibration-capability', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('DERIVATION_VIOLATION');
  });

  // Profile D — GS certificate authorized jointly by an independent scheme
  // authorization (kind: schemeAuthorization, no subset check) and a competence
  // accreditation (kind: accreditation). Both authorizing edges must resolve and
  // the required-evidence set must be satisfied for the certificate to accept.
  it('passes GS Profile D: authorizedBy scheme + accreditation (independent edges)', async () => {
    const trace = await verifyFixture('gs-scheme-authorization');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_PRESENT');
    expect(codes(trace)).toContain('TRUSTED_ISSUER');
  });

  it('validates a manufacturer-issued GS QR credential for one product unit', async () => {
    const fixture = loadFixture('gs-hair-dryer-hitl');
    expect(fixture.target.issuer).toBe('did:web:nordlicht-appliances.example');
    expect(fixture.target.type).toContain('Product');
    expect((fixture.target.credentialSubject as Record<string, unknown>).id).toBe(
      'https://products.nordlicht-appliances.example/hd-01/serial/HD01-2026-000042',
    );

    const trace = await verifyFixture('gs-hair-dryer-hitl', 'target-credential.json', {
      skipProof: false,
      assessCredential: gsAssessmentEvaluator,
    });
    expect(trace.verified).toBe(true);
    expect(trace.target).toBe(
      'https://products.nordlicht-appliances.example/hd-01/serial/HD01-2026-000042/gs-mark',
    );
    expect(codes(trace)).toContain('DERIVATION_VALID');
    expect(codes(trace)).toContain('SUPPORTING_EVIDENCE_RESOLVED');
    expect(trace.results.filter(result => result.code === 'PROOF_VALID')).toHaveLength(7);
    expect(trace.results.filter(result => result.code === 'SUBJECT_BOUND')).toHaveLength(5);
    expect(trace.results.filter(result => result.code === 'ASSESSMENT_PASSED')).toHaveLength(2);
    expect(trace.results.some(result => result.assessmentMethod === 'agent')).toBe(true);
    expect(trace.results.some(result => result.assessmentMethod === 'human')).toBe(true);
  });

  it('rejects the GS hair-dryer graph when its required HITL evaluator is absent', async () => {
    const trace = await verifyFixture('gs-hair-dryer-hitl');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('ASSESSMENT_EVALUATOR_MISSING');
  });

  it('validates the GS QR graph with a separate accredited testing laboratory', async () => {
    const fixture = loadFixture('gs-hair-dryer-external-test-lab-hitl');
    const testReport = [...fixture.documents.values()].find(document =>
      (document.type as string[]).includes('TestReport'));
    expect(fixture.target.issuer).toBe('did:web:nordlicht-appliances.example');
    expect((fixture.target.credentialSubject as Record<string, unknown>).id).toContain(
      'HD01-2026-000043',
    );
    expect(testReport?.issuer).toBe('did:web:hanseatic-product-testing.example');
    const reportSubject = objectValue(testReport?.credentialSubject);
    expect(objectId(reportSubject[`${SCHEMA}customer`])).toBe('did:web:gs-body.example');
    const labScope = [...fixture.documents.values()].find(document =>
      document.id === 'urn:uuid:gs-hair-dryer-external-test-lab-test-lab-scope-001');
    expect(labScope?.issuer).toBe('did:web:hanseatic-product-testing.example');
    expect(objectId(labScope?.credentialSubject)).toBe(
      'did:web:hanseatic-product-testing.example',
    );
    expect((labScope?.evidence as Array<Record<string, unknown>>)).toHaveLength(1);
    expect((labScope?.evidence as Array<Record<string, unknown>>)[0]).toMatchObject({
      relation: 'derivedFrom',
      authorizationBasis: { kind: 'accreditation' },
    });

    const trace = await verifyFixture(
      'gs-hair-dryer-external-test-lab-hitl',
      'target-credential.json',
      { skipProof: false, assessCredential: gsAssessmentEvaluator },
    );
    expect(trace.verified).toBe(true);
    expect(trace.summary).toMatchObject({
      nodesResolved: 9,
      edgesEvaluated: 9,
      failures: 0,
      warnings: 0,
    });
    expect(trace.results.filter(result => result.code === 'PROOF_VALID')).toHaveLength(9);
    expect(trace.results.filter(result => result.code === 'DERIVATION_VALID')).toHaveLength(2);
    expect(trace.results.filter(result => result.code === 'ASSESSMENT_PASSED')).toHaveLength(2);
    expect(trace.results.filter(result => result.code === 'SUBJECT_BOUND')).toHaveLength(5);
    expect(trace.results.some(result =>
      result.code === 'TRUSTED_ISSUER' &&
      result.detail.includes('did:web:hanseatic-product-testing.example'))).toBe(true);
  });

  it('rejects an external report that names someone other than the GS body as customer', async () => {
    const fixture = loadFixture('gs-hair-dryer-external-test-lab-hitl');
    const reportEntry = [...fixture.documents.entries()].find(([, document]) =>
      (document.type as string[]).includes('TestReport'));
    expect(reportEntry).toBeDefined();
    const [reportId, originalReport] = reportEntry!;
    const report = structuredClone(originalReport);
    const subject = report.credentialSubject as Record<string, unknown>;
    subject[`${SCHEMA}customer`] = { id: 'did:web:nordlicht-appliances.example' };
    fixture.documents.set(reportId, report);

    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => {
        const document = fixture.documents.get(uri);
        if (!document) throw new Error(`Unknown fixture URI ${uri}`);
        return document;
      },
      resolveTrustRegistry: async () => fixture.trustRegistry,
      ...registryVerificationOptions,
      assessCredential: gsAssessmentEvaluator,
    });
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('ASSESSMENT_FAILED');
    expect(trace.results.some(result =>
      result.code === 'ASSESSMENT_FAILED' && result.detail.includes('customer'))).toBe(true);
  });

  it.each([
    ['gs-hair-dryer-hitl', 7],
    ['gs-hair-dryer-external-test-lab-hitl', 9],
  ])('rejects the signed %s failing variant for its GS-certificate digest', async (
    scenario,
    proofCount,
  ) => {
    const trace = await verifyFixture(scenario, 'failing-target-credential.json', {
      skipProof: false,
      assessCredential: gsAssessmentEvaluator,
    });
    expect(trace.verified).toBe(false);
    expect(trace.summary.failures).toBe(1);
    expect(codes(trace)).toContain('DIGEST_MISMATCH');
    expect(codes(trace)).not.toContain('PROOF_INVALID');
    expect(trace.results.filter(result => result.code === 'PROOF_VALID')).toHaveLength(proofCount);
  });
});
