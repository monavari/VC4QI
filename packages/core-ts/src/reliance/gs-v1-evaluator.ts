// SPDX-License-Identifier: Apache-2.0
// Pure gate 4-5 predicates for the experimental GS certification v1 binding (I5).
//
// The migrated gs-scheme-authorization use case: a certification body may award the GS
// mark only through the complete route (competence AND scheme permission). Competence
// is an accreditation for product categories and standards; scheme permission is the
// scheme owner's independent authorization for product categories. Each half is
// discharged by its own typed reference, grantee, activity, anchor and validity, and
// the certified claim must be covered by BOTH scopes. Neither incomplete basis alone
// establishes the route. An experimental product passport claims the GS mark for one
// unit and is authorized only through such a certificate for its model.
import { semanticAnd, semanticOr } from './index.js';
import { GS_V1_VOCAB } from './gs-v1.js';
import {
  anchor, authorizingReference, grantee, inForceAtActivity, permits, route,
  type BasisResult, type NodeFacts, type NodeLookup, type RouteResult,
} from './rm-v1-authority.js';
import type { RelianceProfile } from './profile.js';
import type { SemanticState } from './types.js';

type Doc = Record<string, unknown>;
const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);
const short = (iri: unknown) => String(iri).split(/[#/]/).pop();
const subjectOf = (doc: Doc): Doc => (isObject(doc.credentialSubject) ? doc.credentialSubject : {});

export interface MappedCertification {
  readonly productCategoryIri: string;
  readonly standardIris: readonly string[];
}
export interface GsOutcome {
  readonly state: SemanticState;
  readonly reason: string;
  readonly sources: readonly string[];
  readonly certification?: MappedCertification;
  readonly records?: readonly string[];
}

/** Gate 4: the selected certification statement, with its product category and standards. */
export function mapCertification(value: unknown, pointer: string): GsOutcome {
  const sources = [pointer];
  if (!isObject(value) || typeof value.productCategoryIri !== 'string') {
    return { state: 'not_established', reason: 'The selected certification names no product category.', sources };
  }
  const standardIris = list(value.standardIris).filter((s): s is string => typeof s === 'string');
  return {
    state: 'established',
    reason: `Mapped certification of ${short(value.productCategoryIri)} against [${standardIris.map(short).join(', ')}].`,
    sources,
    certification: { productCategoryIri: value.productCategoryIri, standardIris },
  };
}

/**
 * Gate 5: one competence record must cover the category and every certified standard
 * (a record listing standards against a certification naming none is not established,
 * never a bypass), and one scheme record must cover the category.
 */
export function certificationCoverage(certification: MappedCertification, competence: readonly Doc[], scheme: readonly Doc[]): GsOutcome {
  const sources = ['/credentialSubject/scope'];
  const { productCategoryIri: category, standardIris: standards } = certification;
  const competenceOutcomes = competence.map(record => {
    const id = String(record.id);
    const allowed = list(record.standardIris);
    if (record.productCategoryIri !== category) {
      return { id, state: 'contradicted' as SemanticState, reason: `${short(id)}: category ${short(category)} ≠ ${short(record.productCategoryIri)}` };
    }
    const outside = standards.filter(s => !allowed.includes(s));
    if (outside.length > 0) {
      return { id, state: 'contradicted' as SemanticState, reason: `${short(id)}: standard ${outside.map(short).join(', ')} is not in the accredited scope` };
    }
    if (standards.length === 0 && allowed.length > 0) {
      return { id, state: 'not_established' as SemanticState, reason: `${short(id)} restricts standards, but the certification names none` };
    }
    return { id, state: 'established' as SemanticState, reason: `${short(id)} covers ${short(category)} against [${standards.map(short).join(', ')}]` };
  });
  const schemeOutcomes = scheme.map(record => {
    const id = String(record.id);
    return record.productCategoryIri === category
      ? { id, state: 'established' as SemanticState, reason: `${short(id)} permits the GS mark for ${short(category)}` }
      : { id, state: 'contradicted' as SemanticState, reason: `${short(id)}: category ${short(category)} ≠ ${short(record.productCategoryIri)}` };
  });
  const half = (name: string, outcomes: { id: string; state: SemanticState; reason: string }[]) => {
    if (outcomes.length === 0) return { state: 'not_established' as SemanticState, reason: `The ${name} scope has no records.`, record: undefined };
    const covering = outcomes.find(o => o.state === 'established');
    return covering
      ? { state: 'established' as SemanticState, reason: covering.reason, record: covering.id }
      : { state: semanticOr(outcomes.map(o => o.state)), reason: `No single ${name} record covers it (${outcomes.map(o => o.reason).join(' | ')})`, record: undefined };
  };
  const c = half('competence', competenceOutcomes), s = half('scheme', schemeOutcomes);
  const state = semanticAnd([c.state, s.state]);
  return {
    state,
    reason: `Competence: ${c.reason}. Scheme: ${s.reason}.`,
    sources,
    ...(state === 'established' ? { records: [c.record!, s.record!] } : {}),
  };
}

/**
 * Route "competence-and-scheme-permission": certificate ← GS-A (competence, anchored for
 * accrediting certification bodies) AND ← GS-S (scheme permission, anchored for
 * authorizing GS certification). Both halves are always evaluated, so a missing half
 * is visible beside the present one; the route's chain is [certificate, GS-A, GS-S].
 */
export function gsCompetenceAndScheme(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile): RouteResult {
  const D = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const half = (prefix: string, type: string, activity: string, what: string, purpose: string, name: string) => {
    const ref = authorizingReference(`${prefix}-reference`, D, type, lookup, [target.uri], 'GsAuthorizationPolicy');
    bases.push(ref.basis);
    if (!ref.node) return undefined;
    const G = ref.node.document;
    bases.push(grantee(`${prefix}-grantee`, G, D.issuer, name));
    bases.push(permits(G, `${GS_V1_VOCAB}${activity}`)
      ? { id: `${prefix}-permission`, state: 'established', reason: `${name} permits ${what}.`, sources: ['/credentialSubject/permittedActivity'] }
      : { id: `${prefix}-permission`, state: 'contradicted', reason: `${name} does not permit ${what}.`, sources: ['/credentialSubject/permittedActivity'] });
    bases.push(anchor(`${prefix}-anchor`, G, purpose, profile));
    return ref.node;
  };
  const A = half('competence', 'GsAccreditation', 'certifyProducts', 'certifying products', 'accredit-certification-bodies', 'Accreditation GS-A');
  const S = half('scheme', 'GsSchemeAuthorization', 'awardGsMark', 'awarding the GS mark', 'authorize-gs-certification', 'Scheme authorization GS-S');
  if (!A || !S) return route('competence-and-scheme-permission', bases, chain);
  chain.push(A.uri, S.uri);
  bases.push(inForceAtActivity(D, [['GS-A', A.document!], ['GS-S', S.document!]]));
  return route('competence-and-scheme-permission', bases, chain, A.uri);
}



/** Scope records of the route's competence (its scope credential) and scheme (the last chain element). */
export function routeScopes(r: RouteResult, lookup: NodeLookup): { competence: Doc[]; scheme: Doc[] } {
  const records = (uri: string | undefined) => (uri === undefined ? [] : list(subjectOf(lookup(uri)?.document ?? {}).scope).filter(isObject));
  return { competence: records(r.scope), scheme: records(r.chain.length === 3 ? r.chain[2] : undefined) };
}

// ---------------------------------------------------------------- product passports

/** The one mark this binding interprets. */
export const GS_MARK = `${GS_V1_VOCAB}GsMark`;

export interface MappedMarking { readonly markIri: string; readonly productModelIri: string }

/** Gate 4 for a product passport: the claimed marking, for which model. */
export function mapMarking(value: unknown, pointer: string): GsOutcome & { marking?: MappedMarking } {
  const sources = [pointer];
  if (!isObject(value) || typeof value.markIri !== 'string' || typeof value.productModelIri !== 'string') {
    return { state: 'not_established', reason: 'The selected marking names no mark or product model.', sources };
  }
  if (value.markIri !== GS_MARK) {
    return { state: 'not_established', reason: `Mark ${short(value.markIri)} has no interpretation in this binding.`, sources };
  }
  return { state: 'established', reason: `Mapped a GS-mark claim for model ${short(value.productModelIri)}.`, sources,
    marking: { markIri: value.markIri, productModelIri: value.productModelIri } };
}

/** Claim coverage for a passport: the certificate on the route certifies exactly this model. */
export function markingCoverage(marking: MappedMarking, certificate: Doc | undefined): GsOutcome {
  const sources = ['/credentialSubject/id'];
  if (certificate === undefined) return { state: 'not_established', reason: 'No certificate was reached.', sources };
  const model = subjectOf(certificate).id;
  return model === marking.productModelIri
    ? { state: 'established', reason: `${short(certificate.id)} certifies model ${short(model)}.`, sources, records: [String(certificate.id)] }
    : { state: 'contradicted', reason: `${short(certificate.id)} certifies ${short(model)}, not model ${short(marking.productModelIri)}.`, sources };
}

/**
 * Route "gs-certified-product" for an experimental product passport: the manufacturer may
 * claim the GS mark for a unit only under a GS certificate (typed reference in
 * termsOfUse) that names it as manufacturer, is in force when the unit is placed on the
 * market, and itself holds the complete GS route with its certification covered. The
 * certificate's own bases are reported with the prefix "certificate:". Not EU Digital
 * Product Passport conformance.
 */
export function gsCertifiedProduct(target: NodeFacts & { document: Doc }, lookup: NodeLookup, profile: RelianceProfile): RouteResult {
  const P = target.document;
  const bases: BasisResult[] = [];
  const chain = [target.uri];
  const ref = authorizingReference('certificate-reference', P, 'GsCertificate', lookup, [target.uri], 'GsAuthorizationPolicy');
  bases.push(ref.basis);
  if (!ref.node) return route('gs-certified-product', bases, chain);
  const C = ref.node.document;
  chain.push(ref.node.uri);
  const maker = subjectOf(C).manufacturerIri;
  bases.push(typeof maker !== 'string'
    ? { id: 'manufacturer-binding', state: 'not_established', reason: 'The certificate names no manufacturer.', sources: ['/credentialSubject/manufacturerIri'] }
    : maker === P.issuer
      ? { id: 'manufacturer-binding', state: 'established', reason: `The certificate names the passport issuer ${maker} as manufacturer.`, sources: ['/credentialSubject/manufacturerIri', '/issuer'] }
      : { id: 'manufacturer-binding', state: 'contradicted', reason: `The certificate names ${maker}, not the passport issuer ${String(P.issuer)}.`, sources: ['/credentialSubject/manufacturerIri', '/issuer'] });
  bases.push({ ...inForceAtActivity(P, [['The certificate', C]]), id: 'certificate-in-force' });
  const own = gsCompetenceAndScheme(ref.node, lookup, profile);
  bases.push(...own.bases.map(b => ({ ...b, id: `certificate:${b.id}` })));
  const mapped = mapCertification(subjectOf(C).certification, '/credentialSubject/certification');
  const covered = mapped.certification === undefined
    ? { state: mapped.state, reason: mapped.reason }
    : (() => { const { competence, scheme } = routeScopes(own, lookup); return certificationCoverage(mapped.certification!, competence, scheme); })();
  bases.push({ id: 'certificate:claim-coverage', state: covered.state, reason: covered.reason, sources: ['/credentialSubject/certification'] });
  chain.push(...own.chain.slice(1));
  return route('gs-certified-product', bases, chain, ref.node.uri);
}

export const GS_CERTIFICATE_ROUTES = Object.freeze({
  'competence-and-scheme-permission': gsCompetenceAndScheme,
  'gs-certified-product': gsCertifiedProduct,
});
