// SPDX-License-Identifier: Apache-2.0
// Explicit legacy compatibility (phase I5, V03). The v0.3 graph verifier is reachable
// only by selecting the legacy profile here: a standards-first request never falls
// back to it (V02). The adapter evaluates the ORIGINAL secured representation, so
// proof and status checks cannot be skipped, and its result is labelled legacy: it is
// not a standards-first reliance result and carries no gate trace or witnesses.
import type { PolicyProfile } from '../policy/types.js';
import type { RelianceDecision } from '../reliance/types.js';
import type { JsonObject, VerificationTrace } from '../types.js';
import { verifyCredentialGraph, type VerifyGraphOptions } from '../verifier/index.js';

/** The v0.3 graph verifier, no longer the default entry point (I5 step 4). Prefer `evaluateLegacyProfile`. */
export { verifyCredentialGraph, type VerifyGraphOptions };
export * as presentationQuery from '../presentation-query/index.js';

/** The explicitly selected legacy profile: the v0.3 policy-resolved evidence-graph verifier. */
export const LEGACY_PROFILE = Object.freeze({
  id: 'https://vc4qi.example/profiles/legacy-qi-vc-graph',
  version: '0.3',
  label: 'legacy' as const,
});

export type LegacyVerifyOptions = Omit<VerifyGraphOptions, 'skipProof' | 'skipStatus'>;

export interface LegacyEvaluation {
  readonly profile: typeof LEGACY_PROFILE;
  /** Legacy semantics, labelled: any FAIL rejects; the verifier's own `verified` accepts; otherwise not established. */
  readonly decision: RelianceDecision;
  readonly reasons: readonly string[];
  /** The unmodified legacy verification trace. */
  readonly legacyTrace: VerificationTrace;
  readonly limitations: readonly string[];
}

export const LEGACY_LIMITATIONS = Object.freeze([
  'Legacy profile: evaluated by the v0.3 policy-resolved evidence-graph verifier, not by standards-first reliance.',
  'Legacy relations (authorizedBy, derivedFrom, supportedBy) and policy semantics apply; no gate trace, route or record witnesses are produced.',
  'The original secured representation was verified; proof and status checks cannot be skipped in this adapter.',
]);

/**
 * Evaluate a legacy credential graph under the explicitly selected legacy profile.
 * Refuses options that would skip proof or status verification of the original bytes.
 */
export async function evaluateLegacyProfile(
  target: JsonObject, policy: PolicyProfile, options: LegacyVerifyOptions = {},
): Promise<LegacyEvaluation> {
  const forbidden = ['skipProof', 'skipStatus'].filter(key => key in (options as Record<string, unknown>));
  if (forbidden.length > 0) {
    throw new TypeError(`The legacy profile evaluates the original secured representation; ${forbidden.join(' and ')} cannot be set.`);
  }
  const legacyTrace = await verifyCredentialGraph(target, policy, { ...options, skipProof: false, skipStatus: false });
  // The legacy policy decides which checks are optional (SKIP/WARN); they are reported,
  // not reinterpreted, because this adapter reports legacy semantics, labelled as such.
  const failures = legacyTrace.results.filter(r => r.status === 'FAIL');
  const notes = legacyTrace.results.filter(r => r.status === 'WARN' || r.status === 'SKIP');
  const decision: RelianceDecision = failures.length > 0 ? 'reject' : legacyTrace.verified ? 'accept' : 'not_established';
  const reasons = failures.length > 0
    ? failures.map(r => `${r.code}: ${r.detail}`)
    : [`Legacy verifier ${legacyTrace.verified ? 'verified' : 'did not verify'} the graph under policy ${legacyTrace.profile} `
      + `(${legacyTrace.results.length} checks, ${notes.length} optional checks skipped or warned).`,
    ...notes.map(r => `${r.status} ${r.code}: ${r.detail}`)];
  return Object.freeze({
    profile: LEGACY_PROFILE, decision, reasons: Object.freeze(reasons), legacyTrace, limitations: LEGACY_LIMITATIONS,
  });
}
