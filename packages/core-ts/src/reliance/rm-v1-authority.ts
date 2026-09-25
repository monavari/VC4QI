// SPDX-License-Identifier: Apache-2.0
// Authority routes and required support for the experimental RM v1 binding
// (gates 5 and 6, phase I3). Browser-safe and pure: it reads only facts from nodes
// whose gates 0-3 were already evaluated, and never resolves anything itself.
//
//   authorized = AND(global restrictions) AND OR(complete routes)
//   route      = AND(required bases)
//
// Authority is derived only by following the credential chain's own references
// (termsOfUse → authorizationCredential). An authentic credential that nothing in
// the chain references confers nothing (V07); a grant discovered by other means is
// unsupported in this binding (V08). Provenance never establishes permission (V06).
import { semanticAnd, semanticOr } from './index.js';
import type { RelianceProfile } from './profile.js';
import { containedIn } from './rm-scope.js';
import type { SemanticState } from './types.js';

const RM = 'https://vc4qi.example/bindings/rm/1#';
export const RM_ACTIVITIES = Object.freeze({
  issueRmCertificate: `${RM}issueRmCertificate`,
  maintainRmScope: `${RM}maintainRmScope`,
  issueRmStudy: `${RM}issueRmStudy`,
});

type Doc = Record<string, unknown>;

/** A credential after gates 0-3: `usable` is established only if protection, identity, validity and status all are. */
export interface NodeFacts {
  readonly uri: string;
  readonly usable: SemanticState;
  readonly reason: string;
  readonly document?: Doc;
  /** The issuer's suspension status, if the credential names one; read only by global restrictions. */
  readonly suspension?: { readonly state: SemanticState; readonly reason: string };
}
export type NodeLookup = (uri: string) => NodeFacts | undefined;

export interface BasisResult {
  readonly id: string;
  readonly state: SemanticState;
  readonly reason: string;
  readonly sources: readonly string[];
}
export interface RouteResult {
  readonly id: string;
  readonly state: SemanticState;
  readonly execution: 'executed' | 'not_run';
  readonly bases: readonly BasisResult[];
  /** Credential identities that discharged this route, target first. */
  readonly chain: readonly string[];
}
export interface AuthorityResult {
  readonly state: SemanticState;
  readonly reason: string;
  readonly restrictions: readonly BasisResult[];
  readonly routes: readonly RouteResult[];
}

const ok = (id: string, reason: string, sources: string[] = []): BasisResult => ({ id, state: 'established', reason, sources });
const no = (id: string, reason: string, sources: string[] = []): BasisResult => ({ id, state: 'contradicted', reason, sources });
const unknown = (id: string, reason: string, sources: string[] = []): BasisResult => ({ id, state: 'not_established', reason, sources });
const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);
const subjectOf = (doc: Doc): Doc => (isObject(doc.credentialSubject) ? doc.credentialSubject : {});
const typeOf = (doc: Doc): string | undefined => (Array.isArray(doc.type) ? String(doc.type[1]) : undefined);
const permits = (doc: Doc, activity: string) => list(subjectOf(doc).permittedActivity).includes(activity);

/** Credentials referenced by recognized authorization policies in `doc.termsOfUse`, with their declared types. */
function policyReferences(doc: Doc): { id: string; type: unknown }[] {
  return list(doc.termsOfUse)
    .filter(isObject)
    .filter(policy => policy.type === 'RmAuthorizationPolicy' && isObject(policy.authorizationCredential))
    .map(policy => policy.authorizationCredential as Doc)
    .filter(ref => typeof ref.id === 'string')
    .map(ref => ({ id: ref.id as string, type: ref.type }));
}

/**
 * The single authorizing credential of `wantedType` referenced from `doc.termsOfUse`
 * by a recognized policy. References are typed, so a route selects its reference by
 * the declared type even when the credential is unavailable; the resolved credential
 * must have that type. Unrecognized policy types establish nothing (V04); several
 * references of the same type are ambiguous, never "take the first".
 */
function authorizingReference(
  id: string, doc: Doc, wantedType: string, lookup: NodeLookup, stack: readonly string[],
): { basis: BasisResult; node?: NodeFacts & { document: Doc } } {
  const candidates = policyReferences(doc).filter(ref => ref.type === wantedType).map(ref => ref.id);
  if (candidates.length === 0) {
    return { basis: unknown(id, `No recognized authorization policy references a ${wantedType}.`, ['/termsOfUse']) };
  }
  if (candidates.length > 1) {
    return { basis: unknown(id, `Several ${wantedType} references; this binding has no deterministic selection.`, ['/termsOfUse']) };
  }
  const uri = candidates[0]!;
  if (stack.includes(uri)) {
    return { basis: unknown(id, `Circular authorization: ${uri} is already on the evaluation path.`, ['/termsOfUse', uri]) };
  }
  const node = lookup(uri);
  if (node === undefined) return { basis: unknown(id, `Referenced ${wantedType} ${uri} is unavailable.`, ['/termsOfUse', uri]) };
  if (node.usable !== 'established' || node.document === undefined) {
    return { basis: { id, state: node.usable === 'contradicted' ? 'contradicted' : 'not_established',
      reason: `Referenced ${wantedType} ${uri} is not usable: ${node.reason}`, sources: ['/termsOfUse', uri] } };
  }
  if (typeOf(node.document) !== wantedType) {
    return { basis: no(id, `Reference declares ${wantedType}, but ${uri} is a ${String(typeOf(node.document))}.`, ['/termsOfUse', uri]) };
  }
  return { basis: ok(id, `References ${wantedType} ${uri}.`, ['/termsOfUse', uri]), node: node as NodeFacts & { document: Doc } };
}

/** Principal binding: the grantee of `grant` must be `actor`; a missing grantee never passes. */
function grantee(id: string, grant: Doc, actor: unknown, what: string): BasisResult {
  const holder = subjectOf(grant).id;
  if (typeof holder !== 'string' || typeof actor !== 'string') {
    return unknown(id, `${what}: grantee or exercising actor is missing.`, ['/credentialSubject/id', '/issuer']);
  }
  return holder === actor
    ? ok(id, `${what}: grantee ${holder} is the exercising actor.`, ['/credentialSubject/id', '/issuer'])
    : no(id, `${what}: grantee ${holder} is not the exercising actor ${actor}.`, ['/credentialSubject/id', '/issuer']);
}

function anchor(id: string, doc: Doc, purpose: string, profile: RelianceProfile): BasisResult {
  const configured = profile.trustAnchors.find(a => a.id === doc.issuer);
  if (configured === undefined) return unknown(id, `${String(doc.issuer)} is not a configured trust anchor.`, ['/issuer']);
  return configured.purposes.includes(purpose)
    ? ok(id, `${String(doc.issuer)} is a configured anchor for ${purpose}.`, ['/issuer'])
    : unknown(id, `${String(doc.issuer)} is an anchor, but not for ${purpose}.`, ['/issuer']);
}

function route(id: string, bases: BasisResult[], chain: string[]): RouteResult {
  return { id, state: semanticAnd(bases.map(b => b.state)), execution: 'executed', bases, chain };
}

/** Route "operational-scope": D ← O (producer's own scope) ← A (accreditation) ← anchor. */
function operationalScopeRoute(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile, stack: string[]): RouteResult {
  const D = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const ref = authorizingReference('authorizing-reference', D, 'RmOperationalScope', lookup, stack);
  bases.push(ref.basis);
  if (!ref.node) return route('operational-scope', bases, chain);
  const O = ref.node.document;
  chain.push(ref.node.uri);
  bases.push(grantee('principal-binding', O, D.issuer, 'Operational scope O'));
  bases.push(O.issuer === subjectOf(O).id
    ? ok('self-maintained-scope', 'O is issued by its own grantee.', ['/issuer'])
    : no('self-maintained-scope', 'O is not issued by its own grantee.', ['/issuer']));
  bases.push(permits(O, RM_ACTIVITIES.issueRmCertificate)
    ? ok('activity-permission', 'O permits issuing RM certificates.', ['/credentialSubject/permittedActivity'])
    : no('activity-permission', 'O does not permit issuing RM certificates.', ['/credentialSubject/permittedActivity']));
  const grant = authorizingReference('maintenance-grant', O, 'RmAccreditation', lookup, [...stack, ref.node.uri]);
  bases.push(grant.basis);
  if (!grant.node) return route('operational-scope', bases, chain);
  const A = grant.node.document;
  chain.push(grant.node.uri);
  bases.push(grantee('accreditation-grantee', A, O.issuer, 'Accreditation A'));
  bases.push(permits(A, RM_ACTIVITIES.maintainRmScope) && permits(A, RM_ACTIVITIES.issueRmCertificate)
    ? ok('projection-permission', 'A permits maintaining an operational scope for RM certification.', ['/credentialSubject/permittedActivity'])
    : no('projection-permission', 'A does not permit maintaining an operational scope for RM certification.', ['/credentialSubject/permittedActivity']));
  const projection = containedIn(list(subjectOf(O).scope).filter(isObject), list(subjectOf(A).scope).filter(isObject));
  bases.push({ id: 'bounded-projection', state: projection.state, reason: projection.reason, sources: ['/credentialSubject/scope'] });
  bases.push(anchor('trust-anchor', A, 'accredit-rm-producers', profile));
  return route('operational-scope', bases, chain);
}

/** Route "direct-accreditation": D ← A (accreditation naming D's issuer) ← anchor. */
function directAccreditationRoute(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile, stack: string[]): RouteResult {
  const D = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const ref = authorizingReference('authorizing-reference', D, 'RmAccreditation', lookup, stack);
  bases.push(ref.basis);
  if (!ref.node) return route('direct-accreditation', bases, chain);
  const A = ref.node.document;
  chain.push(ref.node.uri);
  bases.push(grantee('principal-binding', A, D.issuer, 'Accreditation A'));
  bases.push(permits(A, RM_ACTIVITIES.issueRmCertificate)
    ? ok('activity-permission', 'A permits issuing RM certificates.', ['/credentialSubject/permittedActivity'])
    : no('activity-permission', 'A does not permit issuing RM certificates.', ['/credentialSubject/permittedActivity']));
  bases.push(anchor('trust-anchor', A, 'accredit-rm-producers', profile));
  return route('direct-accreditation', bases, chain);
}

export const CERTIFICATE_ROUTES = Object.freeze({
  'operational-scope': operationalScopeRoute,
  'direct-accreditation': directAccreditationRoute,
});

/**
 * Global restriction "accreditation-suspension": an anchor's suspension of the
 * actor's accreditation governs the whole certification activity, so it applies to
 * every route, including routes that do not use that accreditation (C06).
 *
 * Applicability (the profile's rule, not a guess): every usable RmAccreditation that
 * a configured accreditation anchor issued to the target's issuer and that the
 * target's authorization references reach, on any route, whether or not that route
 * succeeds. Each must carry the issuer's suspension status with the bit clear; a
 * missing or unreadable suspension status is not established. A revoked or otherwise
 * unusable credential grants nothing and is not turned into a restriction (C07).
 * Suspensions that nothing in the chain references are not discovered (see V08).
 */
function accreditationSuspension(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile): BasisResult {
  const id = 'restriction:accreditation-suspension';
  const actor = target.document.issuer;
  const seen = new Set<string>([target.uri]);
  const queue: Doc[] = [target.document];
  const applicable: NodeFacts[] = [];
  while (queue.length > 0) {
    for (const ref of policyReferences(queue.shift()!)) {
      if (seen.has(ref.id)) continue;
      seen.add(ref.id);
      const node = lookup(ref.id);
      if (node?.usable !== 'established' || node.document === undefined) continue;
      queue.push(node.document);
      const doc = node.document;
      const anchored = profile.trustAnchors.some(a => a.id === doc.issuer && a.purposes.includes('accredit-rm-producers'));
      if (typeOf(doc) === 'RmAccreditation' && anchored && subjectOf(doc).id === actor) applicable.push(node);
    }
  }
  if (applicable.length === 0) {
    return unknown(id, `No accreditation of ${String(actor)} is reached, so the absence of a suspension is not established.`);
  }
  const parts = applicable.map(node => node.suspension === undefined
    ? unknown(id, `${node.uri} carries no suspension status.`, [node.uri])
    : { id, state: node.suspension.state, reason: `${node.uri}: ${node.suspension.reason}`, sources: [node.uri] });
  const state = semanticAnd(parts.map(p => p.state));
  return {
    id,
    state,
    reason: state === 'contradicted'
      ? `The actor's certification activity is suspended. ${parts.filter(p => p.state === 'contradicted').map(p => p.reason).join(' ')}`
      : parts.map(p => p.reason).join(' '),
    sources: applicable.map(node => node.uri),
  };
}

export const GLOBAL_RESTRICTIONS = Object.freeze({
  'accreditation-suspension': accreditationSuspension,
});

/**
 * Compose complete routes: global restrictions are outside the OR, alternatives are
 * OR'ed, and a search cut short by the route budget can never disprove all routes (C16).
 */
export function composeAuthority(
  restrictions: readonly BasisResult[], evaluated: readonly RouteResult[], skipped: readonly string[],
): AuthorityResult {
  const routes: RouteResult[] = [
    ...evaluated,
    ...skipped.map(id => ({ id, state: 'not_established' as const, execution: 'not_run' as const, bases: [], chain: [] })),
  ];
  const restrictionState: SemanticState = restrictions.length === 0 ? 'established' : semanticAnd(restrictions.map(r => r.state));
  const routeState: SemanticState = routes.length === 0 ? 'not_established' : semanticOr(routes.map(r => r.state));
  const state = semanticAnd([restrictionState, routeState]);
  const winner = routes.find(r => r.state === 'established');
  const reason = state === 'established'
    ? `Authorized through route ${winner!.id}; global restrictions hold.`
    : restrictionState === 'contradicted' ? 'An applicable global restriction applies to every route.'
      : routeState === 'contradicted' ? 'Every permitted route is contradicted.'
        : skipped.length > 0 ? 'The route search stopped at its budget before every route was evaluated.'
          : 'No complete route is established.';
  return { state, reason, restrictions, routes };
}

/** Authority of D's issuer to issue D, over the profile's permitted routes. */
export function certificateAuthority(
  target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile,
): AuthorityResult {
  if (target.usable !== 'established' || target.document === undefined) {
    return { state: 'not_established', reason: 'The target is not usable, so its authority is not evaluated.', restrictions: [], routes: [] };
  }
  const t = target as NodeFacts & { document: Doc };
  const ids = profile.authority.certificateRoutes;
  const budget = profile.authority.maxRoutes;
  const evaluated = ids.slice(0, budget).map(id => {
    const evaluate = CERTIFICATE_ROUTES[id as keyof typeof CERTIFICATE_ROUTES];
    return evaluate === undefined
      ? route(id, [unknown('installed-evaluator', `Route ${id} has no installed evaluator.`)], [t.uri])
      : evaluate(t, lookup, profile, [t.uri]);
  });
  const restrictions = profile.authority.globalRestrictions.map(r => {
    const evaluate = GLOBAL_RESTRICTIONS[r as keyof typeof GLOBAL_RESTRICTIONS];
    return evaluate === undefined
      ? unknown(`restriction:${r}`, `Global restriction ${r} has no installed evaluator.`)
      : evaluate(t, lookup, profile);
  });
  return composeAuthority(restrictions, evaluated, ids.slice(budget));
}

/** Authority of a study's laboratory: S ← H (laboratory authority) ← anchor. */
export function studyAuthority(study: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile, stack: string[]): RouteResult {
  const S = study.document;
  const bases: BasisResult[] = [];
  const chain = [study.uri];
  const ref = authorizingReference('laboratory-authority-reference', S, 'RmLabAuthority', lookup, stack);
  bases.push(ref.basis);
  if (!ref.node) return route('laboratory-authority', bases, chain);
  const H = ref.node.document;
  chain.push(ref.node.uri);
  bases.push(grantee('laboratory-binding', H, S.issuer, 'Laboratory authority H'));
  bases.push(permits(H, RM_ACTIVITIES.issueRmStudy)
    ? ok('study-permission', 'H permits issuing RM studies.', ['/credentialSubject/permittedActivity'])
    : no('study-permission', 'H does not permit issuing RM studies.', ['/credentialSubject/permittedActivity']));
  const s = subjectOf(S);
  const covered = list(subjectOf(H).scope).filter(isObject).some(record =>
    record.matrixIri === s.matrixIri && list(record.allowedPropertyIris).includes(s.propertyIri)
    && list(record.studyTypeIris).includes(s.studyTypeIri));
  bases.push(covered
    ? ok('study-scope', 'H covers this matrix, property and study type.', ['/credentialSubject/scope'])
    : no('study-scope', 'H does not cover this matrix, property and study type.', ['/credentialSubject/scope']));
  bases.push(anchor('laboratory-anchor', H, 'recognize-rm-laboratories', profile));
  return route('laboratory-authority', bases, chain);
}

export interface SupportResult {
  readonly state: SemanticState;
  readonly reason: string;
  readonly bases: readonly BasisResult[];
  readonly chain: readonly string[];
}

/**
 * Required support: D must cite a homogeneity study that concerns the same batch,
 * property and matrix, precedes the certification activity, and whose laboratory
 * holds its own authority (C09-C11). A study for another batch contradicts support;
 * a missing study leaves it not established.
 */
export function certificateSupport(target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile): SupportResult {
  if (target.usable !== 'established' || target.document === undefined) {
    return { state: 'not_established', reason: 'The target is not usable, so its support is not evaluated.', bases: [], chain: [] };
  }
  const D = target.document;
  const references = list(D.evidence).filter(isObject).filter(e => e.type === 'RmStudyReference').map(e => String(e.id));
  if (references.length === 0) {
    return { state: 'not_established', reason: 'D cites no required study.', bases: [unknown('study-reference', 'No RmStudyReference in evidence.', ['/evidence'])], chain: [target.uri] };
  }
  if (references.length > 1) {
    return { state: 'not_established', reason: 'Several study references; this binding has no composition for them.', bases: [unknown('study-reference', 'Ambiguous study references.', ['/evidence'])], chain: [target.uri] };
  }
  const uri = references[0]!;
  const node = lookup(uri);
  if (node === undefined) {
    const basis = unknown('study-reference', `Required study ${uri} is unavailable.`, ['/evidence', uri]);
    return { state: 'not_established', reason: basis.reason, bases: [basis], chain: [target.uri] };
  }
  if (node.usable !== 'established' || node.document === undefined) {
    const basis: BasisResult = { id: 'study-reference', state: node.usable === 'contradicted' ? 'contradicted' : 'not_established',
      reason: `Required study ${uri} is not usable: ${node.reason}`, sources: ['/evidence', uri] };
    return { state: basis.state, reason: basis.reason, bases: [basis], chain: [target.uri] };
  }
  const S = node.document;
  const s = subjectOf(S), d = subjectOf(D);
  const result = isObject(list(d.materialPropertiesList)[0]) ? list((list(d.materialPropertiesList)[0] as Doc).results)[0] as Doc | undefined : undefined;
  const material = list(d.materials)[0] as Doc | undefined;
  const bases: BasisResult[] = [ok('study-reference', `Cites study ${uri}.`, ['/evidence', uri])];
  bases.push(s.id === d.id
    ? ok('same-batch', `S concerns batch ${String(s.id)}.`, ['/credentialSubject/id'])
    : no('same-batch', `S concerns ${String(s.id)}, not batch ${String(d.id)}.`, ['/credentialSubject/id']));
  bases.push(s.propertyIri === result?.propertyIri && s.matrixIri === material?.matrixIri
    ? ok('same-property-and-matrix', 'S concerns the certified property and matrix.', ['/credentialSubject/propertyIri'])
    : no('same-property-and-matrix', 'S concerns another property or matrix.', ['/credentialSubject/propertyIri']));
  bases.push(s.studyTypeIri === `${RM}Homogeneity` && s.outcomeIri === `${RM}Homogeneous`
    ? ok('study-outcome', 'S reports the batch homogeneous.', ['/credentialSubject/outcomeIri'])
    : no('study-outcome', 'S does not report a homogeneous batch.', ['/credentialSubject/outcomeIri']));
  const studied = Date.parse(String(s.activityTime)), certified = Date.parse(String(d.activityTime));
  bases.push(Number.isFinite(studied) && Number.isFinite(certified)
    ? (studied <= certified
      ? ok('study-precedes-certification', 'The study precedes the certification activity.', ['/credentialSubject/activityTime'])
      : no('study-precedes-certification', 'The study postdates the certification activity.', ['/credentialSubject/activityTime']))
    : unknown('study-precedes-certification', 'An activity time is missing.', ['/credentialSubject/activityTime']));
  const authority = studyAuthority(node as NodeFacts & { document: Doc }, lookup, profile, [target.uri, uri]);
  bases.push(...authority.bases);
  const state = semanticAnd(bases.map(b => b.state));
  return {
    state,
    reason: state === 'established' ? 'Required study is applicable and independently authorized.'
      : state === 'contradicted' ? 'Required study is contradicted.' : 'Required study is not established.',
    bases,
    chain: [target.uri, ...authority.chain],
  };
}
