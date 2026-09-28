// SPDX-License-Identifier: Apache-2.0
// Reliance evaluation over the experimental calibration (DCC) v1 binding, gates 0-6
// (I5): the shared gate 0-3 chain, then per selected measurement group a gate-4
// mapping and a gate-5 coverage by one complete record of each route's scope
// credential. Selected groups are separate required claims, so the decision is their
// conjunction. This binding installs no support obligations and no conformity rules.
// Node-only (status uses zlib).
import { createRelianceResult, decisionFromRequired } from './index.js';
import type { StaticResourceCatalog } from './catalog.js';
import { planRefusal, refusePlan, verifyChain } from './binding-chain.js';
import { CAL_V1_ARTIFACT_BINDING, CAL_V1_BINDING_ID } from './cal-v1.js';
import { CAL_CERTIFICATE_ROUTES, groupCoverage, mapGroup, type CalOutcome } from './cal-v1-evaluator.js';
import type { BindingManifest } from './manifest.js';
import type { RelianceProfile } from './profile.js';
import { nodeUseKey, predicate, resolvePointer, type RmArtifactVerification } from './rm-v1-artifacts.js';
import { claimAuthority, composeAuthority, type NodeFacts, type RouteResult } from './rm-v1-authority.js';
import type { RelianceRequest, RelianceResult, SemanticState, TraceEntry } from './types.js';

export interface CalSliceEvaluation {
  readonly result: RelianceResult;
  readonly artifacts: readonly RmArtifactVerification[];
}

const SELECTED_GROUP = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;

/** The profile's CMC-floor rule; required, never defaulted. */
function applyCmcFloor(profile: RelianceProfile): boolean {
  const rule = profile.bindingRules.applyCmcFloor;
  if (typeof rule !== 'boolean') {
    throw new Error(`Profile ${profile.id}@${profile.version} must state bindingRules.applyCmcFloor for ${CAL_V1_BINDING_ID}.`);
  }
  return rule;
}

export async function evaluateCalSlice(
  request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile,
): Promise<CalSliceEvaluation> {
  if (manifest.id !== CAL_V1_BINDING_ID || profile.binding.id !== manifest.id || profile.binding.version !== manifest.version) {
    throw new Error(`Profile ${profile.id}@${profile.version} is not configured for ${CAL_V1_BINDING_ID}@${manifest.version}.`);
  }
  const cmcFloor = applyCmcFloor(profile);
  const refusal = planRefusal(request, manifest, profile);
  if (refusal !== undefined) return Object.freeze({ result: refusePlan(request, refusal), artifacts: Object.freeze([]) });
  const chain = await verifyChain(request, catalog, manifest, profile, CAL_V1_ARTIFACT_BINDING);
  const { target, artifacts, facts, verificationOf, artifactVerification } = chain;
  const lookup = (uri: string) => facts.get(uri);
  const targetFacts = facts.get(request.targetId)!;

  // Gate 5 authority over the profile's permitted routes; this binding has no restrictions.
  const ids = profile.authority.certificateRoutes;
  const evaluated: RouteResult[] = targetFacts.document === undefined ? [] : ids.slice(0, profile.authority.maxRoutes).map(id => {
    const evaluate = CAL_CERTIFICATE_ROUTES[id as keyof typeof CAL_CERTIFICATE_ROUTES];
    return evaluate === undefined
      ? { id, state: 'not_established' as const, execution: 'executed' as const, chain: [targetFacts.uri],
        bases: [{ id: 'installed-evaluator', state: 'not_established' as const, reason: `Route ${id} has no installed evaluator.`, sources: [] }] }
      : evaluate(targetFacts as NodeFacts & { document: Record<string, unknown> }, lookup, profile);
  });
  const authority = targetFacts.document === undefined
    ? { state: 'not_established' as const, reason: 'The target is not usable, so its authority is not evaluated.', restrictions: [], routes: [] }
    : composeAuthority([], evaluated, ids.slice(profile.authority.maxRoutes));
  const winner = authority.routes.find(r => r.state === 'established');
  const scopeRecords = (uri: string) => {
    const subject = facts.get(uri)?.document?.credentialSubject as { scope?: unknown } | undefined;
    return (Array.isArray(subject?.scope) ? subject.scope : []) as Record<string, unknown>[];
  };

  const targetDocument = targetFacts.document;
  const claims = request.selectedClaims.map(claim => {
    const coverage = new Map<string, CalOutcome>();
    if (targetDocument === undefined || !SELECTED_GROUP.test(claim.sourcePointer)
        || resolvePointer(targetDocument, claim.sourcePointer) === undefined) {
      const reason = targetDocument === undefined ? 'The target is not usable, so its claims are not read.'
        : `Selected claim ${claim.sourcePointer} is not a measurement group in the usable target.`;
      return { claim, mapping: undefined, coverage, result: { claimId: claim.id, routeWitnessIds: [] as string[], ...predicate('not_established', [reason]) } };
    }
    const mapping = mapGroup(resolvePointer(targetDocument, claim.sourcePointer), claim.sourcePointer);
    if (mapping.group === undefined) {
      return { claim, mapping, coverage, result: { claimId: claim.id, routeWitnessIds: [] as string[],
        ...predicate(mapping.state, [`Gate 4: ${mapping.reason}`], [claim.sourcePointer]) } };
    }
    const group = mapping.group;
    const composed = claimAuthority(authority, r => {
      const covered = groupCoverage(group, scopeRecords(r.scope!), cmcFloor);
      const sources = [r.scope!, ...covered.sources];
      coverage.set(r.id, { ...covered, sources });
      return { id: 'claim-coverage', state: covered.state, reason: covered.reason, sources };
    });
    const chosen = composed.routes.find(r => r.state === 'established');
    return { claim, mapping, coverage, result: {
      claimId: claim.id,
      routeWitnessIds: composed.state === 'established' && chosen ? [`route:${chosen.id}`, ...chosen.chain, `record:${coverage.get(chosen.id)?.record}`] : [],
      ...predicate(composed.state, [composed.reason,
        ...(chosen ? [coverage.get(chosen.id)!.reason] : [...coverage].map(([id, c]) => `${id}: ${c.reason}`))], [claim.sourcePointer]),
    } };
  });
  const authorization = claims.map(c => c.result);
  const conformity = request.conformity
    ? { requested: true as const, ...request.conformity,
      ...predicate('not_established', ['The calibration v1 binding installs no conformity requirements or decision rules.']) }
    : { requested: false as const, execution: 'not_run' as const };

  const decisive = new Set<string>([request.targetId, ...(winner?.chain ?? [])]);
  const required: SemanticState[] = [
    ...artifacts.filter(a => decisive.has(a.artifactId)).flatMap(verificationOf).map(r => r.state),
    ...authorization.map(r => r.state),
    ...(conformity.requested ? [conformity.state] : []),
  ];

  const trace: TraceEntry[] = [...chain.trace];
  const targetUse = nodeUseKey(target.artifactId, target.digestSRI, 'target', request);
  for (const { claim, mapping, coverage } of claims) {
    if (mapping) {
      trace.push({ gate: 4, nodeUse: targetUse, predicate: `claim-mapping:${claim.id}`, state: mapping.state,
        execution: 'executed', reason: mapping.reason, sources: [...mapping.sources] });
    }
    for (const [routeId, covered] of coverage) {
      trace.push({ gate: 5, nodeUse: targetUse, predicate: `claim-coverage:${claim.id}:${routeId}`, state: covered.state,
        execution: 'executed', reason: covered.reason, sources: [...covered.sources] });
    }
  }
  for (const claim of authorization) {
    trace.push({ gate: 5, nodeUse: targetUse, predicate: `claim-authorization:${claim.claimId}`,
      state: claim.state, execution: claim.execution, reason: claim.reasons.join(' '), sources: [...claim.sourcePointers] });
  }
  trace.push({ gate: 5, nodeUse: targetUse, predicate: 'authority', state: authority.state, execution: 'executed',
    reason: authority.reason, sources: winner ? [...winner.chain] : [] });
  for (const r of authority.routes) {
    trace.push(r.execution === 'not_run'
      ? { gate: 5, nodeUse: targetUse, predicate: `route:${r.id}`, state: 'not_established', execution: 'not_run',
        reason: 'Not evaluated: the route budget was exhausted.', sources: [] }
      : { gate: 5, nodeUse: targetUse, predicate: `route:${r.id}`, state: r.state, execution: 'executed',
        reason: `Route ${r.id} is ${r.state}.`, sources: [...r.chain] });
    for (const basis of r.bases) {
      trace.push({ gate: 5, nodeUse: targetUse, predicate: `route:${r.id}:${basis.id}`, state: basis.state,
        execution: 'executed', reason: basis.reason, sources: [...basis.sources] });
    }
  }
  if (conformity.requested) {
    trace.push({ gate: 6, nodeUse: targetUse, predicate: `conformity:${conformity.requirementId}`,
      state: conformity.state, execution: conformity.execution, reason: conformity.reasons.join(' '), sources: [] });
  }

  const result = createRelianceResult({
    requestId: request.requestId, targetId: request.targetId, binding: request.binding, profile: request.profile,
    artifactVerification, authorization, support: [], conformity,
    decision: decisionFromRequired(required),
    trace, resources: chain.resources,
    limitations: [
      'Each selected measurement group is a separate required claim; the decision is their conjunction.',
      'Verification failures of credentials outside the selected route are reported but do not decide the request.',
      'The calibration v1 binding carries a JSON-LD simplification of DCC results, not native DCC XML.',
      'Fixture grants are fictional: an accreditation or statutory mandate here has no legal effect.',
    ],
  });
  return Object.freeze({ result, artifacts: Object.freeze([...artifacts]) });
}
