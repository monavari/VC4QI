// SPDX-License-Identifier: Apache-2.0
// Binding-independent part of a reliance evaluation (gates 0-3), shared by every
// experimental binding (RM v1, calibration v1): the verifier-selected plan, bounded
// resolution of the target, supplied evidence and the chain's own references
// (termsOfUse, evidence), protection, resolved identity, validity, credential status
// and the issuer's suspension status. Bindings add gates 4-6 on top of the usable
// node facts. Node-only (status uses zlib).
import { createRelianceResult, semanticAnd } from './index.js';
import { memoizingResolver, type StaticResourceCatalog } from './catalog.js';
import type { BindingManifest } from './manifest.js';
import type { RelianceProfile } from './profile.js';
import {
  nodeUseKey, notRun, predicate, PROTECTION_CHECK_GATES, verifyRmArtifact,
  type ArtifactBinding, type RmArtifactVerification,
} from './rm-v1-artifacts.js';
import type { NodeFacts } from './rm-v1-authority.js';
import { evaluateStatus, selectStatusEntry, type StatusOutcome, type StatusPolicy } from './status-list.js';
import type {
  ArtifactVerificationResult, RelianceRequest, RelianceResult, ResourceObservation, SemanticState,
  TraceEntry,
} from './types.js';

/** Internal budget for pinned static material (contexts, schemas, controller documents). */
export const STATIC_RESOURCE_BUDGET = Object.freeze({ maxResources: 1_000, maxBytes: 20_000_000 });

export interface VerifiedChain {
  readonly target: RmArtifactVerification;
  /** Target first, then supplied evidence, then referenced credentials in discovery order. */
  readonly artifacts: readonly RmArtifactVerification[];
  /** Gates 0-3 per artifact, usable only if all are established. */
  readonly facts: ReadonlyMap<string, NodeFacts>;
  readonly verificationOf: (artifact: RmArtifactVerification) => ArtifactVerificationResult[];
  readonly artifactVerification: readonly ArtifactVerificationResult[];
  /** Gate 0-3 trace entries per artifact, in artifact order. */
  readonly trace: readonly TraceEntry[];
  readonly resources: readonly ResourceObservation[];
}

/** Gate 0: the refusal reason when the request does not name the verifier-selected plan (V09). */
export function planRefusal(request: RelianceRequest, manifest: BindingManifest, profile: RelianceProfile): string | undefined {
  if (request.binding.id === manifest.id && request.binding.version === manifest.version &&
      request.profile.id === profile.id && request.profile.version === profile.version) return undefined;
  return `Requested ${request.profile.id}@${request.profile.version} with binding ${request.binding.id}@${request.binding.version} `
    + `is not the verifier-selected profile ${profile.id}@${profile.version} for ${manifest.id}@${manifest.version}.`;
}

/** Gate 0 refusal: nothing is resolved, read or evaluated under an unselected plan. */
export function refusePlan(request: RelianceRequest, reason: string): RelianceResult {
  const nodeUse = `${request.targetId} | plan`;
  return createRelianceResult({
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
}

/** Resolve and verify the chain (gates 0-3) under the request's budgets. */
export async function verifyChain(
  request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile,
  binding?: ArtifactBinding,
): Promise<VerifiedChain> {
  // Retrieved evidence counts against the request budget, each resource once;
  // pinned static material uses a separate internal budget.
  const session = memoizingResolver(catalog.openSession({
    maxResources: request.resolverLimits.maxResources, maxBytes: request.resolverLimits.maxBytes,
  }));
  const staticResolver = memoizingResolver(catalog.openSession(STATIC_RESOURCE_BUDGET));
  const options = { manifest, evaluationTime: request.evaluationTime, staticResolver, ...(binding ? { binding } : {}) };
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

  const statusFor = async (artifactId: string, document: Record<string, unknown>, policy: StatusPolicy): Promise<StatusOutcome> => {
    // A status list is one level deeper than the credential that names it.
    const listDepth = depth.get(artifactId)! + 1;
    if (listDepth > request.resolverLimits.maxDepth) {
      return { state: 'not_established', sources: ['/credentialStatus'],
        reason: `Status list is at depth ${listDepth}, beyond the request's maxDepth ${request.resolverLimits.maxDepth}.` };
    }
    const entry = selectStatusEntry(document, policy.purposes).entry;
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
    return evaluateStatus(document, list, listState, policy, request.evaluationTime, request.activityTime);
  };
  // Suspension entries are not a gate-3 property of the credential: they are read
  // only by a profile's global restriction (gate 5), which applies to every route.
  const suspensionPolicy: StatusPolicy = { required: true, purposes: ['suspension'], maxAgeSeconds: profile.credentialStatus.maxAgeSeconds };
  const suspension = new Map<string, StatusOutcome>();
  for (const artifact of artifacts) {
    if (artifact.protection.state !== 'established') { status.set(artifact.artifactId, undefined); continue; }
    const document = read(artifact.artifactId);
    status.set(artifact.artifactId, await statusFor(artifact.artifactId, document, profile.credentialStatus));
    if (selectStatusEntry(document, ['suspension']).entry !== undefined) {
      suspension.set(artifact.artifactId, await statusFor(artifact.artifactId, document, suspensionPolicy));
    }
  }

  // Per artifact: protection, validity, and the integrity of each relatedResource it
  // names. A digest mismatch contradicts; an unavailable reference is not established.
  const verificationOf = (artifact: RmArtifactVerification): ArtifactVerificationResult[] => [
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
  ];

  // Only credentials usable after gates 0-3 contribute facts to gates 4-6.
  const facts = new Map<string, NodeFacts>();
  for (const artifact of artifacts) {
    const parts: [string, SemanticState, string][] = [
      ['protection', artifact.protection.state, artifact.protection.reasons.join(' ')],
      ['identity', identity.get(artifact.artifactId)?.state ?? 'not_established', identity.get(artifact.artifactId)?.reasons.join(' ') ?? 'not evaluated'],
      ['validity', artifact.validity.state, artifact.validity.reasons.join(' ')],
      ['status', status.get(artifact.artifactId)?.state ?? 'not_established', status.get(artifact.artifactId)?.reason ?? 'not evaluated'],
    ];
    const usable = semanticAnd(parts.map(p => p[1]));
    const suspended = suspension.get(artifact.artifactId);
    facts.set(artifact.artifactId, {
      uri: artifact.artifactId,
      usable,
      reason: parts.filter(p => p[1] !== 'established').map(p => `${p[0]}: ${p[2]}`).join('; ') || 'usable',
      ...(usable === 'established' ? { document: read(artifact.artifactId) } : {}),
      ...(suspended ? { suspension: { state: suspended.state, reason: suspended.reason } } : {}),
    });
  }

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

  return {
    target,
    artifacts,
    facts,
    verificationOf,
    artifactVerification: artifacts.flatMap(verificationOf),
    trace,
    resources,
  };
}
