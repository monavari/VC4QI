// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import jsonld from 'jsonld';
import { evaluateAssessment, type AssessmentEvaluator } from '../src/assessment/index.js';
import type { PolicyProfile } from '../src/policy/types.js';
import { loadFixture, testDocumentLoader } from './fixture-helpers.js';

const credential = {
  id: 'urn:uuid:inspection-001',
  type: ['VerifiableCredential', 'InspectionReport'],
};

function policy(mode: 'required' | 'optional' = 'required'): PolicyProfile {
  return {
    id: 'assessment-test',
    targetCredentialTypes: ['GSCertificate'],
    requiredEvidence: [],
    checks: {},
    assessment: {
      mode,
      targetCredentialTypes: ['InspectionReport'],
      allowedMethods: ['human', 'hybrid'],
    },
  };
}

describe('policy-selected semantic assessment', () => {
  it('keeps every GS hair-dryer graph credential JSON-LD safe-mode clean', async () => {
    for (const name of [
      'gs-hair-dryer-hitl',
      'gs-hair-dryer-external-test-lab-hitl',
    ]) {
      const fixture = loadFixture(name);
      for (const document of [fixture.target, ...fixture.documents.values()]) {
        await expect(jsonld.normalize(document, {
          algorithm: 'URDNA2015',
          format: 'application/n-quads',
          safe: true,
          documentLoader: testDocumentLoader,
        })).resolves.toEqual(expect.any(String));
      }
    }
  });

  it('records a human assessment with structured provenance', async () => {
    const evaluator: AssessmentEvaluator = () => ({
      outcome: 'pass',
      method: 'human',
      assessorId: 'urn:example:person:inspector-01',
      assessmentId: 'urn:uuid:assessment-001',
      detail: 'Factory controls satisfy the selected GS assessment checklist.',
    });

    const [result] = await evaluateAssessment(credential, policy(), evaluator);
    expect(result).toMatchObject({
      level: 'assessment',
      status: 'PASS',
      code: 'ASSESSMENT_PASSED',
      assessmentMethod: 'human',
      assessorId: 'urn:example:person:inspector-01',
      assessmentId: 'urn:uuid:assessment-001',
    });
  });

  it('fails closed when a required evaluator is missing', async () => {
    const [result] = await evaluateAssessment(credential, policy(), undefined);
    expect(result?.status).toBe('FAIL');
    expect(result?.code).toBe('ASSESSMENT_EVALUATOR_MISSING');
  });

  it('rejects an assessment method not admitted by policy', async () => {
    const [result] = await evaluateAssessment(credential, policy(), () => ({
      outcome: 'pass',
      method: 'agent',
      assessorId: 'urn:example:agent:reviewer-01',
      detail: 'Automated review passed.',
    }));
    expect(result?.status).toBe('FAIL');
    expect(result?.code).toBe('ASSESSMENT_METHOD_NOT_ALLOWED');
  });

  it('treats an optional indeterminate assessment as a warning', async () => {
    const [result] = await evaluateAssessment(credential, policy('optional'), () => ({
      outcome: 'indeterminate',
      method: 'human',
      assessorId: 'urn:example:person:inspector-01',
      detail: 'The submitted record is insufficient for a decision.',
    }));
    expect(result?.status).toBe('WARN');
    expect(result?.code).toBe('ASSESSMENT_INDETERMINATE');
  });
});
