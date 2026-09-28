// SPDX-License-Identifier: Apache-2.0
// The default evaluation entry point (phase I5 step 4). A verifier installs one binding
// and selects one of its profiles; the request is evaluated by that binding's gate 0-6
// evaluator. There is no fallback: an uninstalled binding is a configuration error, and
// a request naming another binding or profile is refused by the evaluator at gate 0.
// Legacy credentials are evaluated only through `legacy.evaluateLegacyProfile`.
import type { StaticResourceCatalog } from './catalog.js';
import { CAL_V1_BINDING_ID } from './cal-v1.js';
import { evaluateCalSlice } from './cal-v1-slice.js';
import { GS_V1_BINDING_ID } from './gs-v1.js';
import { evaluateGsSlice } from './gs-v1-slice.js';
import { RM_V1_BINDING_ID, type BindingManifest } from './manifest.js';
import type { RelianceProfile } from './profile.js';
import type { RmArtifactVerification } from './rm-v1-artifacts.js';
import { evaluateRmSlice } from './rm-v1-slice.js';
import type { RelianceRequest, RelianceResult } from './types.js';

export interface RelianceEvaluation {
  readonly result: RelianceResult;
  /** Per-artifact gate 0-3 verification behind the result. */
  readonly artifacts: readonly RmArtifactVerification[];
}

type BindingEvaluator = (
  request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile,
) => Promise<RelianceEvaluation>;

const EVALUATORS: Readonly<Record<string, BindingEvaluator>> = Object.freeze({
  [RM_V1_BINDING_ID]: evaluateRmSlice,
  [CAL_V1_BINDING_ID]: evaluateCalSlice,
  [GS_V1_BINDING_ID]: evaluateGsSlice,
});

/** The binding identifiers the default entry point evaluates. */
export const SUPPORTED_BINDINGS: readonly string[] = Object.freeze(Object.keys(EVALUATORS));

/**
 * Evaluate a reliance request under the verifier's installed binding and selected
 * profile. Accept means every required predicate is established; reject means a
 * demonstrated contradiction on a decisive path; anything else is not_established.
 */
export async function evaluateReliance(
  request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile,
): Promise<RelianceEvaluation> {
  const evaluator = Object.hasOwn(EVALUATORS, manifest.id) ? EVALUATORS[manifest.id] : undefined;
  if (evaluator === undefined) {
    throw new Error(`No evaluator for binding ${manifest.id}; supported: ${SUPPORTED_BINDINGS.join(', ')}.`);
  }
  return evaluator(request, catalog, manifest, profile);
}
