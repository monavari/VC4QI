// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { PolicyProfile } from '../policy/types.js';

export function extractTermsOfUse(credential: JsonObject): JsonObject[] {
  const terms = credential.termsOfUse;
  if (!terms) return [];
  return Array.isArray(terms) ? terms.filter(isObject) : isObject(terms) ? [terms] : [];
}

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function evaluateTermsOfUse(
  credential: JsonObject,
  policy: PolicyProfile,
): TraceEntry[] {
  const terms = extractTermsOfUse(credential);
  const target = String(credential.id ?? '');
  const mode = policy.checks.termsOfUse ?? 'optional';

  if (terms.length === 0) {
    return mode === 'required'
      ? [traceEntry({
          id: `terms-of-use-${target}`,
          level: 'credential',
          target,
          status: 'FAIL',
          code: 'TERMS_OF_USE_REQUIRED',
          detail: 'Policy requires termsOfUse.',
        })]
      : [];
  }

  if (mode === 'ignored') return [];

  const known = terms.every(term => typeof term.type === 'string');
  if (mode === 'required' && !known) {
    return [traceEntry({
      id: `terms-of-use-${target}`,
      level: 'credential',
      target,
      status: 'FAIL',
      code: 'TERMS_OF_USE_TYPE_REQUIRED',
      detail: 'termsOfUse entries must include a known type.',
    })];
  }

  return [traceEntry({
    id: `terms-of-use-${target}`,
    level: 'credential',
    target,
    status: 'WARN',
    code: 'TERMS_OF_USE_PRESENT_NOT_ENFORCED',
    detail: 'termsOfUse is present; v0.2 extracts it but does not enforce obligations.',
  })];
}
