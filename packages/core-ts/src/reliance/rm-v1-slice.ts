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
import {
  certificateAuthority, certificateSupport, type NodeFacts,
} from './rm-v1-authority.js';
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
  const read = (uri: string) => JSON.parse(new TextDecoder().decode(session.resolve(uri).bytes)) as Record<string, unknown>;
  const target = await verifyRmArtifact(request.targetId, session, options);
  const artifacts: RmArtifactVerification[] = [target];
  const depth = new Map<string, number>([[request.targetId, 0]]);
  for (const uri of request.suppliedEvidence) {
    if (depth.has(uri)) continue;
    depth.set(uri, 1);
    artifacts.push(await verifyRmArtifact(uri, session, options));
  }
  // Follow the chain's own references (termsOfUse, evidence) from protected
  // credentials, within maxDepth; supplied-but-unreferenced credentials stay inert.
  for (let index = 0; index < artifacts.length; index++) {
    const artifact = artifacts[index]!;
    const at = depth.get(artifact.artifactId)!;
    if (artifact.protection.state !== 'established' || at + 1 > request.resolverLimits.maxDepth) continue;
    const document = read(artifact.artifactId);
    const references = [
      ...(Array.isArray(document.termsOfUse) ? document.termsOfUse : [])
        .map(p => (p as { authorizationCredential?: { id?: unknown } })?.authorizationCredential?.id),
      ...(Array.isArray(document.evidence) ? document.evidence : []).map(e => (e as { id?: unknown })?.id),
    ].filter((uri): uri is string => typeof uri === 'string');
    for (const uri of references) {
      if (depth.has(uri)) continue;
      depth.set(uri, at + 1);
      artifacts.push(await verifyRmArtifact(uri, session, options));
    }
  }

  // Gate 3 status: each status list is verified once as an artifact in its own right.
  const lists = new Map<string, RmArtifactVerification>();
  const status = new Map<string, StatusOutcome | undefined>();
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

  for (const artifact of artifacts) {
    if (artifact.protection.state !== 'established') { status.set(artifact.artifactId, undefined); continue; }
    const document = read(artifact.artifactId);
    // A status list is one level deeper than the credential that names it.
    const listDepth = depth.get(artifact.artifactId)! + 1;
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

  // Gates 5-6: only credentials usable after gates 0-3 contribute facts.
  const facts = new Map<string, NodeFacts>();
  for (const artifact of artifacts) {
    const parts: [string, SemanticState, string][] = [
      ['protection', artifact.protection.state, artifact.protection.reasons.join(' ')],
      ['identity', identity.get(artifact.artifactId)?.state ?? 'not_established', identity.get(artifact.artifactId)?.reasons.join(' ') ?? 'not evaluated'],
      ['validity', artifact.validity.state, artifact.validity.reasons.join(' ')],
      ['status', status.get(artifact.artifactId)?.state ?? 'not_established', status.get(artifact.artifactId)?.reason ?? 'not evaluated'],
    ];
    const usable = semanticAnd(parts.map(p => p[1]));
    facts.set(artifact.artifactId, {
      uri: artifact.artifactId,
      usable,
      reason: parts.filter(p => p[1] !== 'established').map(p => `${p[0]}: ${p[2]}`).join('; ') || 'usable',
      ...(usable === 'established' ? { document: read(artifact.artifactId) } : {}),
    });
  }
  const lookup = (uri: string) => facts.get(uri);
  const authority = certificateAuthority(facts.get(request.targetId)!, lookup, profile);
  const supported = certificateSupport(facts.get(request.targetId)!, lookup, profile);
  const winner = authority.routes.find(r => r.state === 'established');

  const targetDocument = facts.get(request.targetId)?.document as unknown;
  const authorization = request.selectedClaims.map(claim => {
    const inTarget = targetDocument !== undefined && SELECTED_RESULT.test(claim.sourcePointer)
      && resolvePointer(targetDocument, claim.sourcePointer) !== undefined;
    if (!inTarget) {
      return { claimId: claim.id, routeWitnessIds: [], ...predicate('not_established', [targetDocument === undefined
        ? 'The target is not usable, so its claims are not read.'
        : `Selected claim ${claim.sourcePointer} is not a result in the usable target.`]) };
    }
    // Claim scope coverage (the claimed value inside one record of O) is I4; until
    // then an established route can never establish the claim.
    return {
      claimId: claim.id,
      routeWitnessIds: winner ? [`route:${winner.id}`, ...winner.chain] : [],
      ...predicate(authority.state === 'contradicted' ? 'contradicted' : 'not_established',
        [authority.reason, 'Claim scope coverage is implemented in I4.'], [claim.sourcePointer]),
    };
  });
  const support = [{
    obligationId: 'rm-v1:required-study',
    witnessIds: supported.state === 'established' ? [...supported.chain] : [],
    ...predicate(supported.state, [supported.reason], ['/evidence']),
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
  for (const restriction of authority.restrictions) {
    trace.push({ gate: 5, nodeUse: targetUse, predicate: restriction.id, state: restriction.state,
      execution: 'executed', reason: restriction.reason, sources: [...restriction.sources] });
  }
  for (const route of authority.routes) {
    if (route.execution === 'not_run') {
      trace.push({ gate: 5, nodeUse: targetUse, predicate: `route:${route.id}`, state: 'not_established',
        execution: 'not_run', reason: 'Not evaluated: the route budget was exhausted.', sources: [] });
    }
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
      'Claim scope coverage and conformity are implemented in I4; until then no request is accepted.',
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
