// SPDX-License-Identifier: Apache-2.0
// Policy-selected assessment hook for evidence whose domain semantics cannot be
// decided from the credential schema alone.

import type { AssessmentMethod, AssessmentPolicy, PolicyProfile } from '../policy/types.js';
import type { EvidenceGraph } from '../evidence/types.js';
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';

export type AssessmentOutcome = 'pass' | 'fail' | 'indeterminate';

export interface AssessmentRequest {
  credential: JsonObject;
  credentialId: string;
  credentialTypes: string[];
  policyId: string;
  /** Graph-verifier context; absent only when evaluateAssessment is called directly. */
  targetCredential?: JsonObject;
  /** Fully resolved graph, including incoming and outgoing evidence relations. */
  evidenceGraph?: EvidenceGraph;
}

export interface AssessmentContext {
  targetCredential: JsonObject;
  evidenceGraph: EvidenceGraph;
}

export interface AssessmentResult {
  outcome: AssessmentOutcome;
  method: AssessmentMethod;
  assessorId: string;
  assessmentId?: string;
  detail: string;
}

export type AssessmentEvaluator = (
  request: AssessmentRequest,
) => AssessmentResult | Promise<AssessmentResult>;

function credentialTypes(credential: JsonObject): string[] {
  const value = credential.type;
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string') return [value];
  return [];
}

function appliesTo(credential: JsonObject, assessment: AssessmentPolicy): boolean {
  const types = credentialTypes(credential);
  return assessment.targetCredentialTypes.some(type => types.includes(type));
}

function assessmentTrace(input: {
  credentialId: string;
  status: 'PASS' | 'FAIL' | 'SKIP' | 'WARN';
  code: string;
  detail: string;
  result?: AssessmentResult;
}): TraceEntry {
  return traceEntry({
    id: `assessment-${input.credentialId}`,
    level: 'assessment',
    target: input.credentialId,
    status: input.status,
    code: input.code,
    detail: input.detail,
    ...(input.result
      ? {
          assessmentMethod: input.result.method,
          assessorId: input.result.assessorId,
          ...(input.result.assessmentId ? { assessmentId: input.result.assessmentId } : {}),
        }
      : {}),
  });
}

/**
 * Evaluate the policy-selected semantic assessment for one credential node.
 *
 * This hook supplements structural/schema validation; it never turns an
 * invalid proof, schema, status, authority edge, or digest into a pass. The
 * evaluator may be backed by an automated agent, a human workflow, or a hybrid
 * adapter. Long-running HITL orchestration remains outside the verifier: the
 * adapter returns the completed decision when verification is resumed.
 */
export async function evaluateAssessment(
  credential: JsonObject,
  policy: PolicyProfile,
  evaluator?: AssessmentEvaluator,
  context?: AssessmentContext,
): Promise<TraceEntry[]> {
  const assessment = policy.assessment;
  if (!assessment || assessment.mode === 'ignored' || !appliesTo(credential, assessment)) {
    return [];
  }

  const credentialId = String(credential.id ?? '');
  if (!evaluator) {
    const required = assessment.mode === 'required';
    return [assessmentTrace({
      credentialId,
      status: required ? 'FAIL' : 'SKIP',
      code: required ? 'ASSESSMENT_EVALUATOR_MISSING' : 'ASSESSMENT_NOT_PERFORMED',
      detail: required
        ? 'Policy requires semantic assessment, but no human/agent assessment evaluator was configured.'
        : 'No semantic assessment evaluator was configured for this optional assessment.',
    })];
  }

  try {
    const types = credentialTypes(credential);
    const result = await evaluator({
      credential,
      credentialId,
      credentialTypes: types,
      policyId: policy.id,
      ...(context
        ? {
            targetCredential: context.targetCredential,
            evidenceGraph: context.evidenceGraph,
          }
        : {}),
    });

    if (!assessment.allowedMethods.includes(result.method)) {
      return [assessmentTrace({
        credentialId,
        status: 'FAIL',
        code: 'ASSESSMENT_METHOD_NOT_ALLOWED',
        detail: `Assessment method '${result.method}' is not allowed by policy ${policy.id}.`,
        result,
      })];
    }

    if (!result.assessorId || !result.detail) {
      return [assessmentTrace({
        credentialId,
        status: 'FAIL',
        code: 'ASSESSMENT_RESULT_INVALID',
        detail: 'Assessment result must identify the assessor and explain the decision.',
        result,
      })];
    }

    if (result.outcome === 'pass') {
      return [assessmentTrace({
        credentialId,
        status: 'PASS',
        code: 'ASSESSMENT_PASSED',
        detail: result.detail,
        result,
      })];
    }
    if (result.outcome === 'fail') {
      return [assessmentTrace({
        credentialId,
        status: 'FAIL',
        code: 'ASSESSMENT_FAILED',
        detail: result.detail,
        result,
      })];
    }
    if (result.outcome === 'indeterminate') {
      const required = assessment.mode === 'required';
      return [assessmentTrace({
        credentialId,
        status: required ? 'FAIL' : 'WARN',
        code: 'ASSESSMENT_INDETERMINATE',
        detail: result.detail,
        result,
      })];
    }

    return [assessmentTrace({
      credentialId,
      status: 'FAIL',
      code: 'ASSESSMENT_RESULT_INVALID',
      detail: `Assessment evaluator returned unsupported outcome '${String(result.outcome)}'.`,
      result,
    })];
  } catch (error) {
    return [assessmentTrace({
      credentialId,
      status: 'FAIL',
      code: 'ASSESSMENT_ERROR',
      detail: `Semantic assessment failed: ${String(error)}`,
    })];
  }
}
