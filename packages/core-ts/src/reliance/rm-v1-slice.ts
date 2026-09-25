// SPDX-License-Identifier: Apache-2.0
// Reliance evaluation over the experimental RM v1 artifacts (I1 slice, extended in I2).
// Protection, validity, relatedResource integrity and credential status (gate 3) are
// executed; authorization, support and conformity are not implemented yet and are
// reported as not_run, so the decision can never be accept. Node-only (status uses zlib).
import { createRelianceResult, decisionFromRequired, semanticAnd } from './index.js';
import { memoizingResolver, type StaticResourceCatalog } from './catalog.js';
import { RM_V1_BINDING_ID, type BindingManifest } from './manifest.js';
import type { RelianceProfile } from './profile.js';
import {
  nodeUseKey, notRun, predicate, PROTECTION_CHECK_GATES, resolvePointer, verifyRmArtifact,
  type RmArtifactVerification,
} from './rm-v1-artifacts.js';
import { evaluateStatus, type StatusOutcome } from './status-list.js';
import type {
  ArtifactVerificationResult, RelianceRequest, RelianceResult, ResourceObservation, SemanticState,
  TraceEntry,
} from './types.js';

export interface RmSliceEvaluation {
  readonly result: RelianceResult;
  readonly artifacts: readonly RmArtifactVerification[];
}

/** Internal budget for pinned static material (contexts, schemas, controller documents). */
export const STATIC_RESOURCE_BUDGET = Object.freeze({ maxResources: 1_000, maxBytes: 20_000_000 });

const SELECTED_RESULT = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;

/**
 * Evaluate a reliance request with the I1 slice. Protection and validity of the
 * target and supplied evidence are executed; authorization, support and conformity
 * are not implemented yet and are reported as not_run, so the decision is at best
 * not_established. A contradicted artifact yields reject.
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
  if (request.binding.id !== manifest.id || request.binding.version !== manifest.version ||
      request.profile.id !== profile.id || request.profile.version !== profile.version) {
    return refusePlan(request,
      `Requested ${request.profile.id}@${request.profile.version} with binding ${request.binding.id}@${request.binding.version} `
      + `is not the verifier-selected profile ${profile.id}@${profile.version} for ${manifest.id}@${manifest.version}.`);
  }
  // Retrieved evidence counts against the request budget, each resource once;
  // pinned static material uses a separate internal budget.
  const session = memoizingResolver(catalog.openSession({
    maxResources: request.resolverLimits.maxResources, maxBytes: request.resolverLimits.maxBytes,
  }));
  const staticResolver = memoizingResolver(catalog.openSession(STATIC_RESOURCE_BUDGET));
  const options = { manifest, evaluationTime: request.evaluationTime, staticResolver };
  const target = await verifyRmArtifact(request.targetId, session, options);
  const evidence: RmArtifactVerification[] = [];
  for (const uri of request.suppliedEvidence) {
    if (uri !== request.targetId) evidence.push(await verifyRmArtifact(uri, session, options));
  }
  const artifacts = [target, ...evidence];

  // Gate 3 status: each status list is verified once as an artifact in its own right.
  const lists = new Map<string, RmArtifactVerification>();
  const status = new Map<string, StatusOutcome | undefined>();
  const read = (uri: string) => JSON.parse(new TextDecoder().decode(session.resolve(uri).bytes)) as Record<string, unknown>;
  // Gate 1 identity: a protected artifact must identify itself by the identity it was
  // resolved under (P11); conflicting content under one identity cannot be installed.
  const identity = new Map<string, ReturnType<typeof predicate> | undefined>();
  for (const artifact of artifacts) {
    if (artifact.protection.state !== 'established') { identity.set(artifact.artifactId, undefined); continue; }
    const id = read(artifact.artifactId).id;
    identity.set(artifact.artifactId, id === artifact.artifactId
      ? predicate('established', ['Artifact identifies itself by its resolved identity.'], ['/id'])
      : predicate('contradicted', [`Artifact resolved as ${artifact.artifactId} identifies itself as ${String(id)}.`], ['/id']));
  }

  for (const [index, artifact] of artifacts.entries()) {
    if (artifact.protection.state !== 'established') { status.set(artifact.artifactId, undefined); continue; }
    const document = read(artifact.artifactId);
    // The target is depth 0 and supplied evidence depth 1; its status list is one deeper.
    const listDepth = (index === 0 ? 0 : 1) + 1;
    if (listDepth > request.resolverLimits.maxDepth) {
      status.set(artifact.artifactId, { state: 'not_established', sources: ['/credentialStatus'],
        reason: `Status list is at depth ${listDepth}, beyond the request's maxDepth ${request.resolverLimits.maxDepth}.` });
      continue;
    }
    const entry = document.credentialStatus as { statusListCredential?: unknown } | undefined;
    const listUri = typeof entry?.statusListCredential === 'string' ? entry.statusListCredential : undefined;
    let list: Record<string, unknown> | undefined;
    let listState: SemanticState = 'not_established';
    if (listUri !== undefined) {
      if (!lists.has(listUri)) lists.set(listUri, await verifyRmArtifact(listUri, session, options));
      const listResult = lists.get(listUri)!;
      if (listResult.digestSRI !== undefined && listResult.protection.state === 'established') {
        list = read(listUri);
        listState = semanticAnd([listResult.protection.state, listResult.validity.state]);
      } else if (listResult.digestSRI !== undefined) {
        // Resolved but not protected: its contents are never read.
        list = {};
        listState = listResult.protection.state;
      }
    }
    status.set(artifact.artifactId,
      evaluateStatus(document, list, listState, profile.credentialStatus, request.evaluationTime));
  }

  // Per artifact: protection, validity, and the integrity of each relatedResource it
  // names. A digest mismatch contradicts; an unavailable reference is not established.
  const artifactVerification: ArtifactVerificationResult[] = artifacts.flatMap(artifact => [
    artifact.protection,
    identity.get(artifact.artifactId)
      ? { artifactId: artifact.artifactId, ...identity.get(artifact.artifactId)!,
        reasons: identity.get(artifact.artifactId)!.reasons.map(reason => `identity: ${reason}`) }
      : { artifactId: artifact.artifactId, ...notRun('identity: Not evaluated because protection is not established.') },
    { artifactId: artifact.artifactId, ...artifact.validity,
      reasons: artifact.validity.reasons.map(reason => `validity: ${reason}`) },
    ...(status.get(artifact.artifactId)
      ? [{ artifactId: artifact.artifactId, ...predicate(status.get(artifact.artifactId)!.state,
        [`status: ${status.get(artifact.artifactId)!.reason}`], [...status.get(artifact.artifactId)!.sources]) }]
      : [{ artifactId: artifact.artifactId,
        ...notRun('status: Not evaluated because protection is not established.') }]),
    ...artifact.relatedResources.map(check => ({
      artifactId: check.id,
      ...predicate(check.state, [`integrity (from ${artifact.artifactId}): ${check.reason}`], ['/relatedResource']),
    })),
  ]);

  const targetDocument = target.protection.state === 'established' ? read(request.targetId) as unknown : undefined;
  const authorization = request.selectedClaims.map(claim => {
    const inTarget = targetDocument !== undefined && SELECTED_RESULT.test(claim.sourcePointer)
      && resolvePointer(targetDocument, claim.sourcePointer) !== undefined;
    return {
      claimId: claim.id,
      routeWitnessIds: [],
      ...(inTarget
        ? notRun('Claim authorization (routes, scope, principal binding) is implemented in I3/I4.')
        : predicate('not_established', [targetDocument === undefined
          ? 'The target is not protected, so its claims are not read.'
          : `Selected claim ${claim.sourcePointer} is not a result in the protected target.`])),
    };
  });
  const support = [{
    obligationId: 'rm-v1:required-study',
    witnessIds: [],
    ...notRun('Required-study support and laboratory authority are implemented in I3.'),
  }];
  const conformity = request.conformity
    ? { requested: true as const, ...request.conformity, ...notRun('Conformity is implemented in I4.') }
    : { requested: false as const, execution: 'not_run' as const };

  const required: SemanticState[] = [
    ...artifactVerification.map(result => result.state),
    ...authorization.map(result => result.state),
    ...support.map(result => result.state),
    ...(conformity.requested ? [conformity.state] : []),
  ];
  const decision = decisionFromRequired(required);

  const trace: TraceEntry[] = [];
  const resources: ResourceObservation[] = [];
  artifacts.forEach((artifact, index) => {
    const role = index === 0 ? 'target' : 'supplied-evidence';
    const nodeUse = nodeUseKey(artifact.artifactId, artifact.digestSRI, role, request);
    for (const check of artifact.checks) {
      trace.push({ gate: PROTECTION_CHECK_GATES[check.check], nodeUse, predicate: check.check,
        state: check.state, execution: 'executed', reason: check.reason, sources: [artifact.artifactId] });
    }
    for (const related of artifact.relatedResources) {
      trace.push({ gate: 1, nodeUse, predicate: 'related-resource-integrity', state: related.state,
        execution: 'executed', reason: `${related.id}: ${related.reason}`, sources: ['/relatedResource', related.id] });
    }
    const id = identity.get(artifact.artifactId);
    trace.push(id
      ? { gate: 1, nodeUse, predicate: 'resource-identity', state: id.state, execution: 'executed',
        reason: id.reasons.join(' '), sources: [...id.sourcePointers] }
      : { gate: 1, nodeUse, predicate: 'resource-identity', state: 'not_established', execution: 'not_run',
        reason: 'Not evaluated because protection is not established.', sources: [] });
    trace.push({ gate: 3, nodeUse, predicate: 'validity-period', state: artifact.validity.state,
      execution: artifact.validity.execution, reason: artifact.validity.reasons.join(' ') || 'Not evaluated.',
      sources: [...artifact.validity.sourcePointers] });
    const outcome = status.get(artifact.artifactId);
    trace.push(outcome
      ? { gate: 3, nodeUse, predicate: 'credential-status', state: outcome.state, execution: 'executed',
        reason: outcome.reason, sources: [...outcome.sources] }
      : { gate: 3, nodeUse, predicate: 'credential-status', state: 'not_established', execution: 'not_run',
        reason: 'Not evaluated because protection is not established.', sources: [] });
    if (artifact.digestSRI !== undefined) {
      resources.push({ uri: artifact.artifactId, digestSRI: artifact.digestSRI, kind: 'artifact',
        source: 'catalog', observedAt: request.evaluationTime });
    }
  });
  for (const [uri, list] of lists) {
    if (list.digestSRI !== undefined) {
      resources.push({ uri, digestSRI: list.digestSRI, kind: 'status', source: 'catalog', observedAt: request.evaluationTime });
    }
  }
  const targetUse = nodeUseKey(target.artifactId, target.digestSRI, 'target', request);
  for (const claim of authorization) {
    trace.push({ gate: 5, nodeUse: targetUse, predicate: `claim-authorization:${claim.claimId}`,
      state: claim.state, execution: claim.execution, reason: claim.reasons.join(' '), sources: [...claim.sourcePointers] });
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
      'Authorization, support and conformity are not implemented yet and never establish reliance.',
    ],
  });
  return Object.freeze({ result, artifacts: Object.freeze(artifacts) });
}

/** Gate 0 refusal: nothing is resolved, read or evaluated under an unselected plan. */
function refusePlan(request: RelianceRequest, reason: string): RmSliceEvaluation {
  const nodeUse = `${request.targetId} | plan`;
  const result = createRelianceResult({
    requestId: request.requestId,
    targetId: request.targetId,
    binding: request.binding,
    profile: request.profile,
    artifactVerification: [],
    authorization: request.selectedClaims.map(claim => ({
      claimId: claim.id, routeWitnessIds: [], ...notRun('Not evaluated: the plan was refused at gate 0.'),
    })),
    support: [],
    conformity: request.conformity
      ? { requested: true as const, ...request.conformity, ...notRun('Not evaluated: the plan was refused at gate 0.') }
      : { requested: false as const, execution: 'not_run' as const },
    decision: 'not_established',
    trace: [{ gate: 0, nodeUse, predicate: 'accepted-plan', state: 'not_established', execution: 'executed',
      reason, sources: [] }],
    resources: [],
    limitations: ['The request did not name the verifier-selected profile and binding; nothing was evaluated.'],
  });
  return Object.freeze({ result, artifacts: Object.freeze([]) });
}
