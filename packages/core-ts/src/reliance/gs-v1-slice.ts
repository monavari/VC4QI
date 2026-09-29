// SPDX-License-Identifier: Apache-2.0
// Reliance evaluation over the experimental GS certification v1 binding, gates 0-6
// (I5): the shared gate 0-3 chain, a gate-4 mapping of the selected certification
// statement and a gate-5 route that needs competence AND scheme permission, with the
// claim covered by both scopes. For an experimental product passport the selected claim
// is its GS marking, authorized through a GS certificate for the unit's model that holds
// that complete route itself. Gate 6 requires the certificate's studies (a type
// examination and a factory inspection, each independently authorized). No conformity
// rules are installed.
// Node-only (status uses zlib).
import { createRelianceResult, decisionFromRequired } from './index.js';
import type { StaticResourceCatalog } from './catalog.js';
import { planRefusal, refusePlan, verifyChain } from './binding-chain.js';
import { GS_V1_ARTIFACT_BINDING, GS_V1_BINDING_ID } from './gs-v1.js';
import {
  certificateSupport, certificationCoverage, GS_CERTIFICATE_ROUTES, mapCertification, mapMarking, markingCoverage, routeScopes,
  type GsOutcome, type GsSupportResult,
} from './gs-v1-evaluator.js';
import type { BindingManifest } from './manifest.js';
import type { RelianceProfile } from './profile.js';
import { nodeUseKey, predicate, resolvePointer, type RmArtifactVerification } from './rm-v1-artifacts.js';
import { claimAuthority, composeAuthority, type NodeFacts, type RouteResult } from './rm-v1-authority.js';
import type { RelianceRequest, RelianceResult, SemanticState, TraceEntry } from './types.js';

export interface GsSliceEvaluation {
  readonly result: RelianceResult;
  readonly artifacts: readonly RmArtifactVerification[];
}

const SELECTED_CERTIFICATION = '/credentialSubject/certification';
const SELECTED_MARKING = '/credentialSubject/marking';

export async function evaluateGsSlice(
  request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile,
): Promise<GsSliceEvaluation> {
  if (manifest.id !== GS_V1_BINDING_ID || profile.binding.id !== manifest.id || profile.binding.version !== manifest.version) {
    throw new Error(`Profile ${profile.id}@${profile.version} is not configured for ${GS_V1_BINDING_ID}@${manifest.version}.`);
  }
  const refusal = planRefusal(request, manifest, profile);
  if (refusal !== undefined) return Object.freeze({ result: refusePlan(request, refusal), artifacts: Object.freeze([]) });
  const chain = await verifyChain(request, catalog, manifest, profile, GS_V1_ARTIFACT_BINDING);
  const { target, artifacts, facts, verificationOf, artifactVerification } = chain;
  const lookup = (uri: string) => facts.get(uri);
  const targetFacts = facts.get(request.targetId)!;
  const targetDocument = targetFacts.document;

  const ids = profile.authority.certificateRoutes;
  const evaluated: RouteResult[] = targetDocument === undefined ? [] : ids.slice(0, profile.authority.maxRoutes).map(id => {
    const evaluate = GS_CERTIFICATE_ROUTES[id as keyof typeof GS_CERTIFICATE_ROUTES];
    return evaluate === undefined
      ? { id, state: 'not_established' as const, execution: 'executed' as const, chain: [targetFacts.uri],
        bases: [{ id: 'installed-evaluator', state: 'not_established' as const, reason: `Route ${id} has no installed evaluator.`, sources: [] }] }
      : evaluate(targetFacts as NodeFacts & { document: Record<string, unknown> }, lookup, profile);
  });
  const authority = targetDocument === undefined
    ? { state: 'not_established' as const, reason: 'The target is not usable, so its authority is not evaluated.', restrictions: [], routes: [] }
    : composeAuthority([], evaluated, ids.slice(profile.authority.maxRoutes));
  const winner = authority.routes.find(r => r.state === 'established');

  const isPassport = Array.isArray(targetDocument?.type) && targetDocument.type[1] === 'GsProductPassport';
  const selectable = isPassport ? SELECTED_MARKING : SELECTED_CERTIFICATION;
  const claims = request.selectedClaims.map(claim => {
    const coverage = new Map<string, GsOutcome>();
    if (targetDocument === undefined || claim.sourcePointer !== selectable
        || resolvePointer(targetDocument, claim.sourcePointer) === undefined) {
      const reason = targetDocument === undefined ? 'The target is not usable, so its claims are not read.'
        : `Selected claim ${claim.sourcePointer} is not the ${isPassport ? 'marking' : 'certification statement'} of the usable target.`;
      return { claim, mapping: undefined, coverage, result: { claimId: claim.id, routeWitnessIds: [] as string[], ...predicate('not_established', [reason]) } };
    }
    const value = resolvePointer(targetDocument, claim.sourcePointer);
    const markingMapping = isPassport ? mapMarking(value, claim.sourcePointer) : undefined;
    const mapping = markingMapping ?? mapCertification(value, claim.sourcePointer);
    const marking = markingMapping?.marking;
    const certification = isPassport ? undefined : mapping.certification;
    if (marking === undefined && certification === undefined) {
      return { claim, mapping, coverage, result: { claimId: claim.id, routeWitnessIds: [] as string[],
        ...predicate(mapping.state, [`Gate 4: ${mapping.reason}`], [claim.sourcePointer]) } };
    }
    const composed = claimAuthority(authority, r => {
      const covered = marking !== undefined
        ? markingCoverage(marking, lookup(r.scope!)?.document)
        : (() => { const { competence, scheme } = routeScopes(r, lookup); return certificationCoverage(certification!, competence, scheme); })();
      const sources = [...r.chain.slice(1), ...covered.sources];
      coverage.set(r.id, { ...covered, sources });
      return { id: 'claim-coverage', state: covered.state, reason: covered.reason, sources };
    });
    const chosen = composed.routes.find(r => r.state === 'established');
    return { claim, mapping, coverage, result: {
      claimId: claim.id,
      routeWitnessIds: composed.state === 'established' && chosen
        ? [`route:${chosen.id}`, ...chosen.chain, ...(coverage.get(chosen.id)?.records ?? []).map(r => `record:${r}`)] : [],
      ...predicate(composed.state, [composed.reason,
        ...(chosen ? [coverage.get(chosen.id)!.reason] : [...coverage].map(([id, c]) => `${id}: ${c.reason}`))], [claim.sourcePointer]),
    } };
  });
  const authorization = claims.map(c => c.result);

  // Gate 6: the studies of the certificate (the target itself, or the one a passport cites).
  const certificateUri = targetDocument === undefined ? undefined
    : isPassport ? evaluated.find(r => r.chain.length > 1)?.chain[1] : request.targetId;
  const certificateNode = certificateUri === undefined ? undefined : lookup(certificateUri);
  const studies: GsSupportResult[] = targetDocument === undefined ? []
    : certificateNode?.usable === 'established' && certificateNode.document !== undefined
      ? certificateSupport(certificateNode as NodeFacts & { document: Record<string, unknown> }, lookup, profile)
      : (['type-examination', 'factory-inspection'] as const).map(obligationId => ({ obligationId, state: 'not_established' as const,
        reason: 'No usable GS certificate was reached, so its studies are not evaluated.', bases: [], chain: [] }));
  const support = studies.map(s => ({
    obligationId: `gs-v1:${s.obligationId}`,
    witnessIds: s.state === 'established' ? [...s.chain] : [],
    ...predicate(s.state, [s.reason], ['/evidence']),
  }));
  const conformity = request.conformity
    ? { requested: true as const, ...request.conformity,
      ...predicate('not_established', ['The GS v1 binding installs no conformity requirements or decision rules.']) }
    : { requested: false as const, execution: 'not_run' as const };

  const decisive = new Set<string>([request.targetId, ...(winner?.chain ?? []),
    ...studies.filter(s => s.state === 'established').flatMap(s => s.chain)]);
  const required: SemanticState[] = [
    ...artifacts.filter(a => decisive.has(a.artifactId)).flatMap(verificationOf).map(r => r.state),
    ...authorization.map(r => r.state),
    ...support.map(r => r.state),
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
  for (const study of studies) {
    for (const basis of study.bases) {
      trace.push({ gate: 6, nodeUse: targetUse, predicate: `support:${study.obligationId}:${basis.id}`, state: basis.state,
        execution: 'executed', reason: basis.reason, sources: [...basis.sources] });
    }
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
    requestId: request.requestId, targetId: request.targetId, binding: request.binding, profile: request.profile,
    artifactVerification, authorization, support, conformity,
    decision: decisionFromRequired(required),
    trace, resources: chain.resources,
    limitations: [
      'The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.',
      ...(isPassport ? ['The product passport is an experimental credential in this binding, not EU Digital Product Passport conformance.'] : []),
      'Verification failures of credentials outside the selected route and study chains are reported but do not decide the request.',
      'Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect.',
    ],
  });
  return Object.freeze({ result, artifacts: Object.freeze([...artifacts]) });
}
