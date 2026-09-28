// SPDX-License-Identifier: Apache-2.0
// Pure gate 4-5 predicates for the experimental calibration (DCC) v1 binding (I5).
//
// A selected measurement group is one claim. Gate 4 maps its results into exact
// pascal quantities (Pa, kPa, MPa; k = 2 only). Gate 5 requires ONE complete record of
// the route's scope credential to cover the group's quantity kind, every method the
// group names and every result, including the admitted CMC floor when the verifier
// profile applies it. Groups never combine, so a later group cannot erase an earlier
// group's failure (S19); a record restricting methods against a group naming none is
// not established, never an empty-array bypass (S18).
import { semanticAnd, semanticOr } from './index.js';
import { CAL_V1_VOCAB } from './cal-v1.js';
import { compareDecimal, formatDecimal, parseDecimal, type Decimal } from './rm-scope.js';
import {
  anchor, authorizingReference, claimAuthority, composeAuthority, grantee, inForceAtActivity, permits, route,
  type BasisResult, type NodeFacts, type NodeLookup, type RouteResult,
} from './rm-v1-authority.js';
import type { RelianceProfile } from './profile.js';
import type { SemanticState } from './types.js';

type Doc = Record<string, unknown>;
const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);
const short = (iri: unknown) => String(iri).split(/[#/]/).pop();

/** Supported pressure units as powers of ten relative to Pa. */
export const CAL_UNIT_EXPONENTS: Readonly<Record<string, number>> = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });

/** Exact quantity in Pa, or undefined for an unsupported unit or malformed decimal. */
export function toPascal(value: unknown, unit: unknown): Decimal | undefined {
  const decimal = parseDecimal(value);
  const exponent = typeof unit === 'string' ? CAL_UNIT_EXPONENTS[unit] : undefined;
  if (decimal === undefined || exponent === undefined) return undefined;
  return decimal.scale >= exponent
    ? { n: decimal.n, scale: decimal.scale - exponent }
    : { n: decimal.n * 10n ** BigInt(exponent - decimal.scale), scale: 0 };
}
/** Exact Pa value shown in kPa. */
const kPa = (value: Decimal) => formatDecimal({ n: value.n, scale: value.scale + 3 });

export interface MappedResult { readonly value: Decimal; readonly uncertainty: Decimal }
export interface MappedGroup {
  readonly id: string;
  readonly quantityKindIri: string;
  readonly methodIris: readonly string[];
  readonly results: readonly MappedResult[];
}
export interface CalOutcome {
  readonly state: SemanticState;
  readonly reason: string;
  readonly sources: readonly string[];
  readonly group?: MappedGroup;
  readonly record?: string;
}

/** Gate 4: exact pascal quantities for every result of the group, k = 2 only. */
export function mapGroup(group: unknown, pointer: string): CalOutcome {
  const sources = [pointer];
  if (!isObject(group) || typeof group.id !== 'string' || typeof group.quantityKindIri !== 'string') {
    return { state: 'not_established', reason: 'The selected measurement group has no identifier or quantity kind.', sources };
  }
  const results: MappedResult[] = [];
  for (const [index, result] of list(group.results).entries()) {
    const r = isObject(result) ? result : {};
    const k = parseDecimal(r.coverageFactor);
    if (k === undefined || compareDecimal(k, { n: 2n, scale: 0 }) !== 0) {
      return { state: 'not_established', reason: `Result ${index}: coverage factor ${String(r.coverageFactor)} is not the binding's k = 2.`, sources };
    }
    const value = toPascal(r.value, r.unit), uncertainty = toPascal(r.expandedUncertainty, r.unit);
    if (value === undefined || uncertainty === undefined) {
      return { state: 'not_established', reason: `Result ${index}: unit ${String(r.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources };
    }
    results.push({ value, uncertainty });
  }
  if (results.length === 0) return { state: 'not_established', reason: 'The measurement group has no results.', sources };
  const methodIris = list(group.methodIris).filter((m): m is string => typeof m === 'string');
  return {
    state: 'established',
    reason: `Mapped ${short(group.id)}: ${short(group.quantityKindIri)}, ${results.length} result(s) in Pa, methods [${methodIris.map(short).join(', ')}].`,
    sources,
    group: { id: group.id, quantityKindIri: group.quantityKindIri, methodIris, results },
  };
}

/**
 * Gate 5: one complete record covers the group (records are OR; the group's methods and
 * every result are AND). `applyCmcFloor` is the verifier profile's rule.
 */
export function groupCoverage(group: MappedGroup, records: readonly Doc[], applyCmcFloor: boolean): CalOutcome {
  const sources = ['/credentialSubject/scope'];
  if (records.length === 0) return { state: 'not_established', reason: 'The scope has no records.', sources };
  const outcomes = records.map(record => {
    const id = String(record.id);
    const range = isObject(record.range) ? record.range : {};
    const low = toPascal(range.from, range.unit), high = toPascal(range.to, range.unit);
    if (low === undefined || high === undefined) return { id, state: 'not_established' as SemanticState, reason: `${short(id)}: unsupported or malformed range.` };
    if (compareDecimal(low, high) > 0) return { id, state: 'contradicted' as SemanticState, reason: `${short(id)}: range is reversed.` };
    const floorSpec = isObject(record.cmcFloor) ? record.cmcFloor : undefined;
    const floor = floorSpec === undefined ? undefined : toPascal(floorSpec.value, floorSpec.unit);
    if (floorSpec !== undefined && floor === undefined) return { id, state: 'not_established' as SemanticState, reason: `${short(id)}: unsupported CMC floor.` };
    const failures: string[] = [];
    if (record.quantityKindIri !== group.quantityKindIri) failures.push(`quantity kind ${short(group.quantityKindIri)} ≠ ${short(record.quantityKindIri)}`);
    const allowed = list(record.allowedMethodIris).filter((m): m is string => typeof m === 'string');
    const outside = group.methodIris.filter(m => !allowed.includes(m));
    if (outside.length > 0) failures.push(`method ${outside.map(short).join(', ')} is not allowed`);
    group.results.forEach((result, index) => {
      if (compareDecimal(result.value, low) < 0 || compareDecimal(result.value, high) > 0) {
        failures.push(`result ${index} ${kPa(result.value)} kPa is outside ${kPa(low)}–${kPa(high)} kPa`);
      }
      if (applyCmcFloor && floor !== undefined && compareDecimal(result.uncertainty, floor) < 0) {
        failures.push(`result ${index} U = ${kPa(result.uncertainty)} kPa is below the admitted CMC ${kPa(floor)} kPa`);
      }
    });
    if (failures.length > 0) return { id, state: 'contradicted' as SemanticState, reason: `${short(id)}: ${failures.join('; ')}` };
    if (group.methodIris.length === 0 && allowed.length > 0) {
      return { id, state: 'not_established' as SemanticState,
        reason: `${short(id)} restricts methods to [${allowed.map(short).join(', ')}], but the group names no governed method.` };
    }
    return { id, state: 'established' as SemanticState,
      reason: `${short(id)} covers ${short(group.id)}: ${short(group.quantityKindIri)}, methods [${group.methodIris.map(short).join(', ')}], `
        + `${group.results.length} result(s) within ${kPa(low)}–${kPa(high)} kPa${applyCmcFloor && floor !== undefined ? ` and not below the CMC ${kPa(floor)} kPa` : ''}` };
  });
  const state = semanticOr(outcomes.map(o => o.state));
  const covering = outcomes.find(o => o.state === 'established');
  return covering
    ? { state, reason: covering.reason, sources, record: covering.id }
    : { state, reason: `No single scope record covers the group (${outcomes.map(o => o.reason).join(' | ')}).`, sources };
}

/**
 * Bounded projection (no widening): every record of an operational scope must lie within
 * ONE record of its parent grant, with the same quantity kind, a subset of its methods
 * and a range inside its range. When the profile applies the CMC floor, the child must
 * admit no better capability than the parent (its floor stated and not below the
 * parent's); otherwise the floor is not a scope dimension.
 */
export function calContainedIn(child: readonly Doc[], parent: readonly Doc[], applyCmcFloor: boolean): CalOutcome {
  const sources = ['/credentialSubject/scope'];
  if (child.length === 0) return { state: 'not_established', reason: 'The operational scope has no records.', sources };
  const perChild = child.map(c => {
    const cr = isObject(c.range) ? c.range : {};
    const low = toPascal(cr.from, cr.unit), high = toPascal(cr.to, cr.unit);
    const floorSpec = isObject(c.cmcFloor) ? c.cmcFloor : undefined;
    const floor = floorSpec === undefined ? undefined : toPascal(floorSpec.value, floorSpec.unit);
    if (low === undefined || high === undefined || (floorSpec !== undefined && floor === undefined)) {
      return { state: 'not_established' as SemanticState, reason: `${short(c.id)}: unsupported or malformed range or CMC floor.` };
    }
    const methods = list(c.allowedMethodIris);
    const outcomes = parent.map(p => {
      const pr = isObject(p.range) ? p.range : {};
      const pLow = toPascal(pr.from, pr.unit), pHigh = toPascal(pr.to, pr.unit);
      const pFloorSpec = isObject(p.cmcFloor) ? p.cmcFloor : undefined;
      const pFloor = pFloorSpec === undefined ? undefined : toPascal(pFloorSpec.value, pFloorSpec.unit);
      if (pLow === undefined || pHigh === undefined || (pFloorSpec !== undefined && pFloor === undefined)) {
        return { state: 'not_established' as SemanticState, reason: `${short(p.id)}: unsupported or malformed range or CMC floor.` };
      }
      const failures: string[] = [];
      if (c.quantityKindIri !== p.quantityKindIri) failures.push(`quantity kind ${short(c.quantityKindIri)} ≠ ${short(p.quantityKindIri)}`);
      const allowed = list(p.allowedMethodIris);
      const wider = methods.filter(m => !allowed.includes(m));
      if (methods.length === 0 && allowed.length > 0) failures.push('the parent restricts methods, the child does not');
      if (wider.length > 0) failures.push(`method ${wider.map(short).join(', ')} is not in ${short(p.id)}`);
      if (compareDecimal(low, pLow) < 0 || compareDecimal(high, pHigh) > 0) {
        failures.push(`range ${kPa(low)}–${kPa(high)} kPa is not within ${kPa(pLow)}–${kPa(pHigh)} kPa`);
      }
      if (applyCmcFloor && pFloor !== undefined) {
        if (floor === undefined) failures.push(`it states no CMC floor, but ${short(p.id)} admits only ${kPa(pFloor)} kPa`);
        else if (compareDecimal(floor, pFloor) < 0) failures.push(`CMC ${kPa(floor)} kPa is below the admitted ${kPa(pFloor)} kPa`);
      }
      return failures.length > 0
        ? { state: 'contradicted' as SemanticState, reason: `${short(c.id)} widens ${short(p.id)}: ${failures.join('; ')}` }
        : { state: 'established' as SemanticState, reason: `${short(c.id)} lies within ${short(p.id)}` };
    });
    if (outcomes.length === 0) return { state: 'not_established' as SemanticState, reason: 'The parent grant has no records.' };
    const state = semanticOr(outcomes.map(o => o.state));
    return state === 'established'
      ? outcomes.find(o => o.state === 'established')!
      : { state, reason: outcomes.map(o => o.reason).join(' | ') };
  });
  const state = allOf(perChild.map(o => o.state));
  return { state, reason: `${state === 'established' ? 'Bounded projection holds' : 'Bounded projection fails'}: ${perChild.map(o => o.reason).join('; ')}.`, sources };
}

const subjectOf = (doc: Doc): Doc => (isObject(doc.credentialSubject) ? doc.credentialSubject : {});
const permission = (id: string, doc: Doc, activity: string, what: string, name: string): BasisResult => (permits(doc, `${CAL_V1_VOCAB}${activity}`)
  ? { id, state: 'established', reason: `${name} permits ${what}.`, sources: ['/credentialSubject/permittedActivity'] }
  : { id, state: 'contradicted', reason: `${name} does not permit ${what}.`, sources: ['/credentialSubject/permittedActivity'] });

/** What a direct accreditation must permit, and for which anchor purpose, per target type. */
export const CAL_DIRECT_ACTIVITY: Readonly<Record<string, { activity: string; what: string; purpose: string }>> = Object.freeze({
  CalCertificate: { activity: 'issueCalibrationCertificate', what: 'issuing calibration certificates', purpose: 'accredit-calibration-laboratories' },
  CalTestReport: { activity: 'issueTestReport', what: 'issuing test reports', purpose: 'accredit-testing-laboratories' },
});
const targetType = (doc: Doc) => (Array.isArray(doc.type) ? String(doc.type[1]) : undefined);

/**
 * Route "direct-accreditation": target ← CA (accreditation naming its issuer) ← anchor.
 * The activity and anchor purpose follow the target type (certificate or test report).
 */
export function calDirectAccreditation(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile): RouteResult {
  const D = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const kind = CAL_DIRECT_ACTIVITY[targetType(D) ?? ''];
  if (kind === undefined) {
    return route('direct-accreditation', [{ id: 'target-type', state: 'not_established',
      reason: `No accreditation activity is installed for ${String(targetType(D))}.`, sources: ['/type'] }], chain);
  }
  const ref = authorizingReference('authorizing-reference', D, 'CalAccreditation', lookup, [target.uri], 'CalAuthorizationPolicy');
  bases.push(ref.basis);
  if (!ref.node) return route('direct-accreditation', bases, chain);
  const A = ref.node.document;
  chain.push(ref.node.uri);
  bases.push(grantee('principal-binding', A, D.issuer, 'Accreditation CA'));
  bases.push(permission('activity-permission', A, kind.activity, kind.what, 'CA'));
  bases.push(anchor('trust-anchor', A, kind.purpose, profile));
  bases.push(inForceAtActivity(D, [['CA', A]]));
  return route('direct-accreditation', bases, chain, ref.node.uri);
}

/**
 * Route "operational-scope" (calibration-capability): certificate ← O (the laboratory's
 * own capability scope) ← CA (accreditation permitting scope maintenance) ← anchor. O
 * must lie within CA (no widening), and claims are covered by O's records only: a group
 * outside O is not rescued by CA's wider scope.
 */
export function calOperationalScope(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile): RouteResult {
  const D = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const ref = authorizingReference('authorizing-reference', D, 'CalOperationalScope', lookup, [target.uri], 'CalAuthorizationPolicy');
  bases.push(ref.basis);
  if (!ref.node) return route('operational-scope', bases, chain);
  const O = ref.node.document;
  chain.push(ref.node.uri);
  bases.push(grantee('principal-binding', O, D.issuer, 'Operational scope O'));
  bases.push(O.issuer === subjectOf(O).id
    ? { id: 'self-maintained-scope', state: 'established', reason: 'O is issued by its own grantee.', sources: ['/issuer'] }
    : { id: 'self-maintained-scope', state: 'contradicted', reason: 'O is not issued by its own grantee.', sources: ['/issuer'] });
  bases.push(permission('activity-permission', O, 'issueCalibrationCertificate', 'issuing calibration certificates', 'O'));
  const grant = authorizingReference('maintenance-grant', O, 'CalAccreditation', lookup, [target.uri, ref.node.uri], 'CalAuthorizationPolicy');
  bases.push(grant.basis);
  if (!grant.node) return route('operational-scope', bases, chain);
  const A = grant.node.document;
  chain.push(grant.node.uri);
  bases.push(grantee('accreditation-grantee', A, O.issuer, 'Accreditation CA'));
  bases.push(permits(A, `${CAL_V1_VOCAB}maintainCalibrationScope`) && permits(A, `${CAL_V1_VOCAB}issueCalibrationCertificate`)
    ? { id: 'projection-permission', state: 'established', reason: 'CA permits maintaining an operational calibration scope.', sources: ['/credentialSubject/permittedActivity'] }
    : { id: 'projection-permission', state: 'contradicted', reason: 'CA does not permit maintaining an operational calibration scope.', sources: ['/credentialSubject/permittedActivity'] });
  const projection = calContainedIn(list(subjectOf(O).scope).filter(isObject), list(subjectOf(A).scope).filter(isObject),
    profile.bindingRules.applyCmcFloor === true);
  bases.push({ id: 'bounded-projection', state: projection.state, reason: projection.reason, sources: projection.sources });
  bases.push(anchor('trust-anchor', A, 'accredit-calibration-laboratories', profile));
  bases.push(inForceAtActivity(D, [['O', O], ['CA', A]]));
  return route('operational-scope', bases, chain, ref.node.uri);
}

/**
 * Route "statutory-mandate" (nmi-legal-mandate): certificate ← M (a statutory mandate
 * naming the institute) ← anchor configured to designate metrology institutes. No
 * accreditation root is required, and no legal effect is inferred from the fixture.
 */
export function calStatutoryMandate(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile): RouteResult {
  const D = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const ref = authorizingReference('authorizing-reference', D, 'CalLegalMandate', lookup, [target.uri], 'CalAuthorizationPolicy');
  bases.push(ref.basis);
  if (!ref.node) return route('statutory-mandate', bases, chain);
  const M = ref.node.document;
  chain.push(ref.node.uri);
  bases.push(grantee('principal-binding', M, D.issuer, 'Mandate M'));
  bases.push(permission('activity-permission', M, 'issueCalibrationCertificate', 'issuing calibration certificates', 'M'));
  bases.push(anchor('trust-anchor', M, 'designate-national-metrology-institutes', profile));
  bases.push(inForceAtActivity(D, [['M', M]]));
  return route('statutory-mandate', bases, chain, ref.node.uri);
}

export const CAL_CERTIFICATE_ROUTES = Object.freeze({
  'direct-accreditation': calDirectAccreditation,
  'operational-scope': calOperationalScope,
  'statutory-mandate': calStatutoryMandate,
});

/** Semantic AND with an explicit empty case (used for a request's group conjunction). */
export const allOf = (states: readonly SemanticState[]): SemanticState => (states.length === 0 ? 'not_established' : semanticAnd(states));

/** Per-group authority of a certificate: the profile's routes, each group covered by the route's own scope. */
export function certificateGroupAuthority(
  target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile, applyCmcFloor: boolean,
): { state: SemanticState; reason: string; chain: readonly string[]; bases: BasisResult[] } {
  const ids = profile.authority.certificateRoutes;
  const evaluated = ids.slice(0, profile.authority.maxRoutes).map(id => {
    const evaluate = CAL_CERTIFICATE_ROUTES[id as keyof typeof CAL_CERTIFICATE_ROUTES];
    return evaluate === undefined
      ? route(id, [{ id: 'installed-evaluator', state: 'not_established', reason: `Route ${id} has no installed evaluator.`, sources: [] }], [target.uri])
      : evaluate(target, lookup, profile);
  });
  const authority = composeAuthority([], evaluated, ids.slice(profile.authority.maxRoutes));
  const groups = list(subjectOf(target.document).measurementGroups);
  if (groups.length === 0) {
    return { state: 'not_established', reason: 'The certificate has no measurement groups.', chain: [target.uri], bases: [] };
  }
  const bases: BasisResult[] = [];
  let chain: readonly string[] = [target.uri];
  groups.forEach((raw, index) => {
    const pointer = `/credentialSubject/measurementGroups/${index}`;
    const mapped = mapGroup(raw, pointer);
    if (mapped.group === undefined) {
      bases.push({ id: `group-${index}`, state: mapped.state, reason: `Group ${index}: ${mapped.reason}`, sources: [pointer] });
      return;
    }
    const group = mapped.group;
    const composed = claimAuthority(authority, r => {
      const records = list(subjectOf(lookup(r.scope!)?.document ?? {}).scope).filter(isObject);
      const covered = groupCoverage(group, records, applyCmcFloor);
      return { id: 'claim-coverage', state: covered.state, reason: covered.reason, sources: [r.scope!, ...covered.sources] };
    });
    const winner = composed.routes.find(r => r.state === 'established');
    if (winner) chain = winner.chain;
    const detail = winner ? `through ${winner.id}` : composed.routes.map(r => `${r.id} ${r.state}: ${r.bases.filter(b => b.state !== 'established').map(b => b.reason).join(' ')}`).join(' | ');
    bases.push({ id: `group-${index}`, state: composed.state, reason: `Group ${index} (${short(group.id)}) is ${composed.state} ${detail}`.trim(), sources: [pointer] });
  });
  const state = allOf(bases.map(b => b.state));
  return { state, reason: `The certificate's own authority is ${state}.`, chain, bases };
}

export interface CalSupportResult {
  readonly state: SemanticState;
  readonly reason: string;
  readonly bases: readonly BasisResult[];
  readonly chain: readonly string[];
}

/**
 * Required support of a test report (test-report-supported-dcc): the report must cite one
 * calibration certificate for the instrument it used. That certificate must concern the
 * same instrument and the report's quantity kinds, precede the test and be valid at it,
 * and hold its own authority, with every one of its groups covered. A citation of an
 * unrelated certificate contradicts support; a missing one leaves it not established.
 */
export function instrumentCalibrationSupport(
  target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile, applyCmcFloor: boolean,
): CalSupportResult {
  if (target.usable !== 'established' || target.document === undefined) {
    return { state: 'not_established', reason: 'The target is not usable, so its support is not evaluated.', bases: [], chain: [] };
  }
  const R = target.document;
  const fail = (basis: BasisResult): CalSupportResult => ({ state: basis.state, reason: basis.reason, bases: [basis], chain: [target.uri] });
  const references = list(R.evidence).filter(isObject).filter(e => e.type === 'CalCalibrationReference').map(e => String(e.id));
  if (references.length === 0) return fail({ id: 'calibration-reference', state: 'not_established', reason: 'The report cites no calibration.', sources: ['/evidence'] });
  if (references.length > 1) {
    return fail({ id: 'calibration-reference', state: 'not_established', reason: 'Several calibration references; this binding has no composition for them.', sources: ['/evidence'] });
  }
  const uri = references[0]!;
  const node = lookup(uri);
  if (node === undefined) return fail({ id: 'calibration-reference', state: 'not_established', reason: `Calibration ${uri} is unavailable.`, sources: ['/evidence', uri] });
  if (node.usable !== 'established' || node.document === undefined) {
    return fail({ id: 'calibration-reference', state: node.usable === 'contradicted' ? 'contradicted' : 'not_established',
      reason: `Calibration ${uri} is not usable: ${node.reason}`, sources: ['/evidence', uri] });
  }
  const C = node.document;
  if (targetType(C) !== 'CalCertificate') {
    return fail({ id: 'calibration-reference', state: 'contradicted', reason: `${uri} is a ${String(targetType(C))}, not a calibration certificate.`, sources: ['/evidence', uri] });
  }
  const r = subjectOf(R), c = subjectOf(C);
  const bases: BasisResult[] = [{ id: 'calibration-reference', state: 'established', reason: `Cites calibration ${uri}.`, sources: ['/evidence', uri] }];
  bases.push(typeof r.instrumentIri !== 'string'
    ? { id: 'same-instrument', state: 'not_established', reason: 'The report names no instrument.', sources: ['/credentialSubject/instrumentIri'] }
    : c.id === r.instrumentIri
      ? { id: 'same-instrument', state: 'established', reason: `The calibration concerns instrument ${String(r.instrumentIri)}.`, sources: ['/credentialSubject/instrumentIri'] }
      : { id: 'same-instrument', state: 'contradicted', reason: `The calibration concerns ${String(c.id)}, not instrument ${String(r.instrumentIri)}.`, sources: ['/credentialSubject/instrumentIri'] });
  const used = list(r.measurementGroups).filter(isObject).map(g => g.quantityKindIri);
  const calibrated = list(c.measurementGroups).filter(isObject).map(g => g.quantityKindIri);
  const uncovered = used.filter(q => !calibrated.includes(q));
  bases.push(used.length > 0 && uncovered.length === 0
    ? { id: 'same-quantity', state: 'established', reason: `The calibration covers ${[...new Set(used.map(short))].join(', ')}.`, sources: ['/credentialSubject/measurementGroups'] }
    : { id: 'same-quantity', state: used.length === 0 ? 'not_established' : 'contradicted',
      reason: used.length === 0 ? 'The report has no measurement groups.' : `The calibration does not cover ${uncovered.map(short).join(', ')}.`, sources: ['/credentialSubject/measurementGroups'] });
  const tested = Date.parse(String(r.activityTime)), calibratedAt = Date.parse(String(c.activityTime));
  const from = Date.parse(String(C.validFrom)), until = Date.parse(String(C.validUntil));
  if (!Number.isFinite(tested) || !Number.isFinite(calibratedAt)) {
    bases.push({ id: 'calibration-precedes-use', state: 'not_established', reason: 'An activity time is missing.', sources: ['/credentialSubject/activityTime'] });
  } else {
    bases.push(calibratedAt <= tested
      ? { id: 'calibration-precedes-use', state: 'established', reason: `Calibrated at ${String(c.activityTime)}, before the test at ${String(r.activityTime)}.`, sources: ['/credentialSubject/activityTime'] }
      : { id: 'calibration-precedes-use', state: 'contradicted', reason: `Calibrated at ${String(c.activityTime)}, after the test at ${String(r.activityTime)}.`, sources: ['/credentialSubject/activityTime'] });
    bases.push(Number.isFinite(from) && Number.isFinite(until) && from <= tested && tested <= until
      ? { id: 'calibration-valid-at-use', state: 'established', reason: 'The calibration certificate was valid at the test.', sources: ['/validFrom', '/validUntil'] }
      : { id: 'calibration-valid-at-use', state: 'contradicted', reason: `The calibration certificate (valid ${String(C.validFrom)} to ${String(C.validUntil)}) was not valid at the test at ${String(r.activityTime)}.`, sources: ['/validFrom', '/validUntil'] });
  }
  const authority = certificateGroupAuthority(node as NodeFacts & { document: Doc }, lookup, profile, applyCmcFloor);
  bases.push({ id: 'calibration-authority', state: authority.state, reason: authority.reason, sources: [uri] }, ...authority.bases.map(b => ({ ...b, id: `calibration-authority:${b.id}` })));
  const state = allOf(bases.map(b => b.state));
  return {
    state,
    reason: state === 'established' ? 'The instrument calibration is applicable and independently authorized.'
      : state === 'contradicted' ? 'The instrument calibration is contradicted.' : 'The instrument calibration is not established.',
    bases,
    chain: [target.uri, ...authority.chain],
  };
}
