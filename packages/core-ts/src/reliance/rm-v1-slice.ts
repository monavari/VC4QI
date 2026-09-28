// SPDX-License-Identifier: Apache-2.0
// Reliance evaluation over the experimental RM v1 artifacts, gates 0-6 (I1-I4):
// protection, identity, validity and status; claim mapping; authority routes with
// claim scope coverage; required support; and conformity when requested. Accept only
// when every required predicate is established. Node-only (status uses zlib).
import { createRelianceResult, decisionFromRequired } from './index.js';
import type { StaticResourceCatalog } from './catalog.js';
import { planRefusal, refusePlan, verifyChain } from './binding-chain.js';
import { RM_V1_BINDING_ID, type BindingManifest } from './manifest.js';
import type { RelianceProfile } from './profile.js';
import { nodeUseKey, notRun, predicate, resolvePointer, type RmArtifactVerification } from './rm-v1-artifacts.js';
import { certificateAuthority, certificateSupport, claimAuthority } from './rm-v1-authority.js';
import {
  claimCoverage, evaluateConformity, mapClaim, type ClaimCoordinates, type MethodRevision, type Outcome,
} from './rm-v1-claims.js';
import type { RelianceRequest, RelianceResult, ResourceObservation, SemanticState, TraceEntry } from './types.js';

export interface RmSliceEvaluation {
  readonly result: RelianceResult;
  readonly artifacts: readonly RmArtifactVerification[];
}

export { STATIC_RESOURCE_BUDGET } from './binding-chain.js';

const SELECTED_RESULT = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;

/**
 * Evaluate a reliance request over the RM v1 binding under the verifier's profile.
 * Accept means every required predicate is established; reject means a demonstrated
 * contradiction on a decisive path; anything missing or unsupported is not_established.
 */
export async function evaluateRmSlice(
  request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile,
): Promise<RmSliceEvaluation> {
  if (manifest.id !== RM_V1_BINDING_ID || profile.binding.id !== manifest.id ||
      profile.binding.version !== manifest.version) {
    throw new Error(`Profile ${profile.id}@${profile.version} is not configured for ${RM_V1_BINDING_ID}@${manifest.version}.`);
  }
  // Gate 0: the verifier selects profile and binding; a request for anything else is
  // not evaluated at all (V09), rather than silently evaluated under another plan.
  const refusal = planRefusal(request, manifest, profile);
  if (refusal !== undefined) return Object.freeze({ result: refusePlan(request, refusal), artifacts: Object.freeze([]) });
  const chain = await verifyChain(request, catalog, manifest, profile);
  const { target, artifacts, facts, verificationOf, artifactVerification } = chain;
  const lookup = (uri: string) => facts.get(uri);
  const authority = certificateAuthority(facts.get(request.targetId)!, lookup, profile);
  const supported = certificateSupport(facts.get(request.targetId)!, lookup, profile);
  const winner = authority.routes.find(r => r.state === 'established');

  const targetDocument = facts.get(request.targetId)?.document;
  const revisions = (Array.isArray(manifest.scopeAndMapping.methodRevisions) ? manifest.scopeAndMapping.methodRevisions : [])
    .filter((r): r is MethodRevision => typeof r?.method === 'string' && typeof r?.revises === 'string');
  const scopeRecords = (uri: string) => {
    const subject = facts.get(uri)?.document?.credentialSubject as { scope?: unknown } | undefined;
    return (Array.isArray(subject?.scope) ? subject.scope : []) as Record<string, unknown>[];
  };
  // Per claim: gate 4 maps the selected result into governed coordinates; gate 5
  // requires ONE complete record of each route's own scope credential to cover it.
  const claims = request.selectedClaims.map(claim => {
    const inTarget = targetDocument !== undefined && SELECTED_RESULT.test(claim.sourcePointer)
      && resolvePointer(targetDocument, claim.sourcePointer) !== undefined;
    if (!inTarget) {
      const reason = targetDocument === undefined
        ? 'The target is not usable, so its claims are not read.'
        : `Selected claim ${claim.sourcePointer} is not a result in the usable target.`;
      return { claim, mapping: undefined, coverage: new Map<string, Outcome>(),
        result: { claimId: claim.id, routeWitnessIds: [] as string[], ...predicate('not_established', [reason]) } };
    }
    const mapping = mapClaim(targetDocument!, claim.sourcePointer, resolvePointer(targetDocument, claim.sourcePointer));
    const coverage = new Map<string, Outcome & { record?: string }>();
    if (mapping.coordinates === undefined) {
      return { claim, mapping, coverage, result: { claimId: claim.id, routeWitnessIds: [] as string[],
        ...predicate(mapping.state, [`Gate 4: ${mapping.reason}`], [claim.sourcePointer]) } };
    }
    const coordinates = mapping.coordinates;
    const composed = claimAuthority(authority, route => {
      const covered = claimCoverage(coordinates, scopeRecords(route.scope!), revisions, profile.mapping.methodSuccession);
      const sources = [route.scope!, ...covered.sources];
      coverage.set(route.id, { ...covered, sources });
      return { id: 'claim-coverage', state: covered.state, reason: covered.reason, sources };
    });
    const chosen = composed.routes.find(r => r.state === 'established');
    const record = chosen ? coverage.get(chosen.id)?.record : undefined;
    return { claim, mapping, coverage, result: {
      claimId: claim.id,
      routeWitnessIds: composed.state === 'established' && chosen ? [`route:${chosen.id}`, ...chosen.chain, `record:${record}`] : [],
      ...predicate(composed.state, [composed.reason,
        ...(chosen ? [coverage.get(chosen.id)!.reason] : [...coverage].map(([id, c]) => `${id}: ${c.reason}`))], [claim.sourcePointer]),
    } };
  });
  const authorization = claims.map(c => c.result);
  const support = [{
    obligationId: 'rm-v1:required-study',
    witnessIds: supported.state === 'established' ? [...supported.chain] : [],
    ...predicate(supported.state, [supported.reason], ['/evidence']),
  }];
  // Gate 6: conformity is asked only of an authorized claim, under a verifier-owned
  // requirement and decision rule selected by id.
  const conformity = (() => {
    if (!request.conformity) return { requested: false as const, execution: 'not_run' as const };
    const base = { requested: true as const, ...request.conformity };
    const requirement = profile.conformity.requirements.find(r => r.id === request.conformity!.requirementId);
    const rule = profile.conformity.decisionRules.find(r => r.id === request.conformity!.decisionRuleId);
    if (!requirement || !rule) {
      return { ...base, ...predicate('not_established', [`Requirement ${request.conformity.requirementId} or decision rule `
        + `${request.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    }
    const applicable = claims.filter(c => c.mapping?.coordinates?.propertyIri === requirement.propertyIri
      && c.mapping.coordinates.quantityKindIri === requirement.quantityKindIri);
    if (applicable.length !== 1) {
      return { ...base, ...predicate('not_established', [`Requirement ${requirement.id} must apply to exactly one selected claim; `
        + `${applicable.length} match.`]) };
    }
    const target = applicable[0]!;
    if (target.result.state !== 'established') {
      return { ...base, ...notRun(`Not evaluated: claim ${target.claim.id} is not authorized.`) };
    }
    const outcome = evaluateConformity(target.mapping!.coordinates as ClaimCoordinates, requirement, rule);
    return { ...base, ...predicate(outcome.state, [outcome.reason], [target.claim.sourcePointer]) };
  })();

  // Only the target and the credentials on the selected witness paths decide the
  // request; a failed credential on an unused alternative is diagnostic (C03, C07).
  // Failures on those alternatives still reach the decision through the route and
  // support states when no complete route or support is established.
  const decisive = new Set<string>([request.targetId, ...(winner?.chain ?? []),
    ...(supported.state === 'established' ? supported.chain : [])]);
  const required: SemanticState[] = [
    ...artifacts.filter(a => decisive.has(a.artifactId)).flatMap(verificationOf).map(result => result.state),
    ...authorization.map(result => result.state),
    ...support.map(result => result.state),
    ...(conformity.requested ? [conformity.state] : []),
  ];
  const decision = decisionFromRequired(required);

  const trace: TraceEntry[] = [...chain.trace];
  const resources: ResourceObservation[] = [...chain.resources];
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
  for (const restriction of authority.restrictions) {
    trace.push({ gate: 5, nodeUse: targetUse, predicate: restriction.id, state: restriction.state,
      execution: 'executed', reason: restriction.reason, sources: [...restriction.sources] });
  }
  trace.push({ gate: 5, nodeUse: targetUse, predicate: 'authority', state: authority.state, execution: 'executed',
    reason: authority.reason, sources: winner ? [...winner.chain] : [] });
  for (const route of authority.routes) {
    trace.push(route.execution === 'not_run'
      ? { gate: 5, nodeUse: targetUse, predicate: `route:${route.id}`, state: 'not_established',
        execution: 'not_run', reason: 'Not evaluated: the route budget was exhausted.', sources: [] }
      : { gate: 5, nodeUse: targetUse, predicate: `route:${route.id}`, state: route.state,
        execution: 'executed', reason: `Route ${route.id} is ${route.state}.`, sources: [...route.chain] });
    for (const basis of route.bases) {
      trace.push({ gate: 5, nodeUse: targetUse, predicate: `route:${route.id}:${basis.id}`, state: basis.state,
        execution: 'executed', reason: basis.reason, sources: [...basis.sources] });
    }
  }
  for (const basis of supported.bases) {
    trace.push({ gate: 6, nodeUse: targetUse, predicate: `support:${basis.id}`, state: basis.state,
      execution: 'executed', reason: basis.reason, sources: [...basis.sources] });
  }
  for (const obligation of support) {
    trace.push({ gate: 6, nodeUse: targetUse, predicate: obligation.obligationId, state: obligation.state,
      execution: obligation.execution, reason: obligation.reasons.join(' '), sources: [] });
  }
  if (conformity.requested) {
    trace.push({ gate: 6, nodeUse: targetUse, predicate: `conformity:${conformity.requirementId}`,
      state: conformity.state, execution: conformity.execution, reason: conformity.reasons.join(' '), sources: [] });
  }

  const result = createRelianceResult({
    requestId: request.requestId,
    targetId: request.targetId,
    binding: request.binding,
    profile: request.profile,
    artifactVerification,
    authorization,
    support,
    conformity,
    decision,
    trace,
    resources,
    limitations: [
      'Verification failures of credentials outside the selected route and support chains are reported but do not decide the request.',
    ],
  });
  return Object.freeze({ result, artifacts: Object.freeze(artifacts) });
}
