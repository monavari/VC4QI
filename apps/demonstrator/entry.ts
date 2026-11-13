// SPDX-License-Identifier: Apache-2.0
// Browser bundle for the VC4QI demonstrator (site/demo).
//
// Every example runs the repository's own standards-first evaluator on the exact bytes
// of the signed fixtures in bindings/experimental: evaluateRmSlice (reference material),
// evaluateCalSlice (calibration certificates and test reports) and evaluateGsSlice (GS
// certification). All seven gates are the repository code; nothing is previewed or
// simulated. Everything is local: resources are embedded at build time.
import resources from 'virtual:demo-resources';
import {
  createRelianceRequest, loadBindingManifest, loadRelianceProfile, semanticAnd, sha384SRI, StaticResourceCatalog,
  type BindingManifest, type RelianceProfile, type RelianceRequest, type RelianceResult, type SemanticState, type TraceEntry,
} from '../../packages/core-ts/src/reliance/index.js';
import { evaluateRmSlice } from '../../packages/core-ts/src/reliance/rm-v1-slice.js';
import { evaluateCalSlice } from '../../packages/core-ts/src/reliance/cal-v1-slice.js';
import { evaluateGsSlice } from '../../packages/core-ts/src/reliance/gs-v1-slice.js';
import type { JsonObject } from '../../packages/core-ts/src/types.js';
import { reissueStatusList, signAs } from './live-sign.js';

/**
 * The fixed evaluation instant. Status lists carry a freshness window, so a static page
 * evaluated at "now" would eventually (and correctly) report stale status. The page
 * therefore asks its question as of the fixtures' reference time and says so.
 */
export const EVALUATION_TIME = '2026-09-25T12:00:00Z';

type BindingKey = 'rm' | 'cal' | 'gs';
type Evaluate = (request: RelianceRequest, catalog: StaticResourceCatalog, manifest: BindingManifest, profile: RelianceProfile)
  => Promise<{ result: RelianceResult }>;
const EVALUATORS: Record<BindingKey, Evaluate> = { rm: evaluateRmSlice, cal: evaluateCalSlice, gs: evaluateGsSlice };
const loaded = Object.fromEntries((['rm', 'cal', 'gs'] as const).map(key => [key, {
  manifest: loadBindingManifest(resources[key].manifest),
  profiles: Object.fromEntries(Object.entries(resources[key].profiles).map(([name, json]) => [name, loadRelianceProfile(json)])),
  files: resources[key].files,
}])) as Record<BindingKey, { manifest: BindingManifest; profiles: Record<string, RelianceProfile>; files: typeof resources.rm.files }>;

/**
 * A second passport verifier, derived here and not shipped as a binding profile: the
 * same profile as gs-verifier-dpp-1 without the scheme owner's anchor, so the same bytes
 * meet a verifier that trusts the accreditation body only.
 */
const ACCREDITATION_ONLY = 'gs-verifier-dpp-accreditation-only (demonstrator)';
{
  const base = resources.gs.profiles['gs-verifier-dpp-1'] as { id: string; trustAnchors: { id: string }[] };
  loaded.gs.profiles[ACCREDITATION_ONLY] = loadRelianceProfile({ ...base,
    id: 'https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only',
    description: 'Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.',
    trustAnchors: base.trustAnchors.filter(anchor => anchor.id !== 'https://zls.vc4qi.example/controller') });
}

// ---------------------------------------------------------------- examples and cases

const short = (iri: unknown) => String(iri).split(/[#/:]/).pop() ?? '';

export interface CaseSpec {
  readonly id: string;
  readonly label: string;
  readonly sublabel: string;
  readonly binding: BindingKey;
  readonly profile: string;
  readonly target: string;
  readonly claims: readonly { readonly id: string; readonly sourcePointer: string }[];
  readonly supplied: readonly string[];
  /** The unsigned change the tamper test makes to the target's bytes. */
  readonly tamper: readonly [string, string];
  readonly withhold: { readonly uri: string; readonly label: string };
}
export interface ExampleSpec {
  readonly id: 'rm' | 'dcc' | 'gs' | 'dpp';
  readonly tab: string;
  readonly title: string;
  readonly intro: string;
  readonly caseLabel: string;
  readonly cases: readonly CaseSpec[];
  /** Optional verifier choice: RM asks fit-for-use or not; DCC can restrict accepted routes. */
  readonly choice?: { readonly label: string; readonly options: readonly { readonly id: string; readonly label: string; readonly sublabel: string }[] };
  readonly note: string;
}

const rmCase = (x: '178' | '197' | '520', sublabel: string): CaseSpec => ({
  id: x, label: `As ${x}`, sublabel, binding: 'rm', profile: 'rm-verifier-1',
  target: `https://producer.vc4qi.example/credentials/D${x}`,
  claims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }],
  supplied: [], tamper: [`"value": "${x}"`, '"value": "150"'],
  withhold: { uri: 'https://lab.vc4qi.example/credentials/S', label: 'Withhold the homogeneity study' },
});

const CAL_URI = {
  CA: 'https://nab.vc4qi.example/credentials/CAL-A', DCC1: 'https://lab.vc4qi.example/credentials/DCC-1',
  O: 'https://lab.vc4qi.example/credentials/CAL-O', DCC2: 'https://lab.vc4qi.example/credentials/DCC-2',
  M: 'https://ministry.vc4qi.example/credentials/CAL-M', DCCN: 'https://nmi.vc4qi.example/credentials/DCC-N',
  T: 'https://nab.vc4qi.example/credentials/CAL-T', REPORT: 'https://testlab.vc4qi.example/credentials/REPORT-1',
};
const G = (i: number) => ({ id: `g${i + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${i}` });
const DCC_CASES: CaseSpec[] = [
  { id: 'direct', label: 'Accredited lab', sublabel: 'DCC-1', binding: 'cal', profile: 'cal-verifier-1',
    target: CAL_URI.DCC1, claims: [G(0), G(1)], supplied: [CAL_URI.CA], tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: CAL_URI.CA, label: 'Withhold the accreditation' } },
  { id: 'capability', label: 'Capability scope', sublabel: 'DCC-2', binding: 'cal', profile: 'cal-verifier-capability-1',
    target: CAL_URI.DCC2, claims: [G(0)], supplied: [CAL_URI.O, CAL_URI.CA], tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: CAL_URI.O, label: 'Withhold the operational scope' } },
  { id: 'nmi', label: 'National institute', sublabel: 'DCC-N', binding: 'cal', profile: 'cal-verifier-nmi-1',
    target: CAL_URI.DCCN, claims: [G(0)], supplied: [CAL_URI.M], tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: CAL_URI.M, label: 'Withhold the mandate' } },
  { id: 'report', label: 'Test report', sublabel: 'REPORT-1', binding: 'cal', profile: 'cal-verifier-test-report-1',
    target: CAL_URI.REPORT, claims: [G(0)], supplied: [CAL_URI.T], tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: CAL_URI.DCC1, label: "Withhold the instrument's calibration" } },
];

const GS_URI = {
  C1: 'https://gs-body.vc4qi.example/credentials/GSC-1', C2: 'https://gs-body.vc4qi.example/credentials/GSC-2',
  C3: 'https://gs-body.vc4qi.example/credentials/GSC-3', TR1: 'https://gs-body.vc4qi.example/credentials/TR-1',
  TR2: 'https://testlab-gs.vc4qi.example/credentials/TR-2', TR3: 'https://gs-body.vc4qi.example/credentials/TR-3',
  M1: 'https://maker.vc4qi.example/credentials/GSM-1', M4: 'https://maker.vc4qi.example/credentials/GSM-4',
};
const markCase = (id: string, label: string, sublabel: string, target: string, withhold: CaseSpec['withhold']): CaseSpec => ({
  id, label, sublabel, binding: 'gs', profile: 'gs-verifier-mark-1', target,
  claims: [{ id: 'mark', sourcePointer: '/credentialSubject/marking' }], supplied: [],
  tamper: ['-sn-', '-sn-9'], withhold,
});
const passportCase = (id: string, label: string, sublabel: string, target: string, withhold: CaseSpec['withhold']): CaseSpec => ({
  id, label, sublabel, binding: 'gs', profile: 'gs-verifier-dpp-1', target,
  claims: [{ id: 'mark', sourcePointer: '/credentialSubject/complianceInformation/gsMark' }], supplied: [],
  tamper: ['-sn-', '-sn-9'], withhold,
});
const withholdStudy = (uri: string) => ({ uri, label: 'Withhold the type examination' });
const withholdMarkCredential = (uri: string) => ({ uri, label: 'Withhold the GS-mark credential' });

export const EXAMPLES: readonly ExampleSpec[] = [
  { id: 'rm', tab: 'RM', title: 'Certified reference material',
    intro: 'M375a, leaded brass: may I rely on the certified arsenic value?',
    caseLabel: 'Certified As mass fraction (mg/kg)',
    cases: [rmCase('178', 'certificate'), rmCase('197', 'hypothetical'), rmCase('520', 'hypothetical')],
    choice: { label: 'The verifier asks', options: [
      { id: 'authorized', label: 'Authorized?', sublabel: 'no limit' },
      { id: 'fit', label: 'Fit for use?', sublabel: 'As + U ≤ 200' }] },
    note: 'Certified values and material from the M375a DRMD. Accreditation body, producer, laboratory, scopes, methods and keys are fictional; no real institution issues these credentials. 197 and 520 are hypothetical reissues.' },
  { id: 'dcc', tab: 'DCC', title: 'Calibration certificate',
    intro: 'May I rely on each measurement group of this calibration?',
    caseLabel: 'Issuer',
    cases: DCC_CASES,
    choice: { label: 'The verifier accepts', options: [
      { id: 'own', label: 'This route', sublabel: 'own profile' },
      { id: 'direct-only', label: 'Direct accreditation only', sublabel: 'cal-verifier-1' }] },
    note: 'A JSON-LD simplification of DCC results, not native DCC XML. All parties and keys are fictional.' },
  { id: 'gs', tab: 'GS', title: 'GS mark',
    intro: 'May I rely on the GS mark on this product?',
    caseLabel: 'Product',
    cases: [
      markCase('in-house', 'Hair dryer HD-01', 'GS body tested', 'https://maker.vc4qi.example/credentials/GSM-1', withholdStudy(GS_URI.TR1)),
      markCase('external', 'Hair dryer HD-02', 'external lab tested', 'https://maker.vc4qi.example/credentials/GSM-3', withholdStudy(GS_URI.TR2)),
      markCase('toy', 'Toy 001', 'outside ZLS scope', 'https://maker.vc4qi.example/credentials/GSM-2', withholdStudy(GS_URI.TR3)),
      markCase('clone', 'Other company', 'cites the HD-01 certificate', 'https://clone.vc4qi.example/credentials/GSM-5', withholdStudy(GS_URI.TR1)),
      markCase('mismatch', 'HD-02 unit', 'claims the HD-01 mark', 'https://maker.vc4qi.example/credentials/GSM-6', withholdStudy(GS_URI.TR1)),
    ],
    note: 'Shaped like a GS certification chain: mark → GS certificate → accreditation (a fictional body in the DAkkS role), scheme authorization (ZLS role), type examination and factory inspection. A fictional profile, not a legal GS rule; all parties and keys are fictional.' },
  { id: 'dpp', tab: 'DPP', title: 'Product passport',
    intro: 'The product passport of this unit lists the GS mark in its compliance information. May I rely on that entry?',
    caseLabel: 'Passport',
    cases: [
      passportCase('unit', 'Unit sn-0042', 'its own GS-mark credential', 'https://maker.vc4qi.example/credentials/DPP-1', withholdMarkCredential(GS_URI.M1)),
      passportCase('early', 'Unit sn-0001', 'on market before certification', 'https://maker.vc4qi.example/credentials/DPP-2', withholdMarkCredential(GS_URI.M4)),
      passportCase('borrowed', 'Unit sn-0050', 'cites another unit\'s credential', 'https://maker.vc4qi.example/credentials/DPP-3', withholdMarkCredential(GS_URI.M1)),
    ],
    choice: { label: 'The verifier trusts', options: [
      { id: 'both', label: 'Accreditation body and scheme owner', sublabel: 'gs-verifier-dpp-1' },
      { id: 'accreditation-only', label: 'Accreditation body only', sublabel: 'no scheme-owner anchor' }] },
    note: 'An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit\'s GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today\'s GS scheme has no per-unit credential. All parties and keys are fictional.' },
];

// ---------------------------------------------------------------- the credential graph

/** Party labels for the fictional controllers, by host. */
const PARTY: Record<string, string> = {
  nab: 'Accreditation body', producer: 'RM producer', lab: 'Laboratory', ministry: 'Ministry', nmi: 'NMI',
  testlab: 'Test laboratory', zls: 'ZLS role', 'gs-body': 'GS body', maker: 'Manufacturer',
  'testlab-gs': 'Test laboratory', clone: 'Other company', 'global-aci': 'Global ACI (stand-in)',
};
const party = (value: unknown) => {
  // VCDM 2.0 issuer: a string, or an object with an id.
  const iri = value !== null && typeof value === 'object' ? (value as { id?: unknown }).id : value;
  const host = /^https:\/\/([^./]+)\./.exec(String(iri))?.[1];
  return host === undefined ? String(iri).split('#')[0]!.split(':').pop()! : PARTY[host] ?? host;
};
/** Who signs: an authority (grants or recognizes) or an actor (works under a grant), by host. */
const GROUP: Record<string, 'authority' | 'actor'> = {
  nab: 'authority', 'global-aci': 'authority', zls: 'authority', ministry: 'authority',
  producer: 'actor', lab: 'actor', nmi: 'actor', testlab: 'actor', 'testlab-gs': 'actor', 'gs-body': 'actor', maker: 'actor', clone: 'actor',
};
const groupOf = (value: unknown) => {
  const iri = value !== null && typeof value === 'object' ? (value as { id?: unknown }).id : value;
  return GROUP[/^https:\/\/([^./]+)\./.exec(String(iri))?.[1] ?? ''];
};
const ROLE: Record<string, string> = {
  RmAccreditation: 'Producer accreditation', RmLabAuthority: 'Laboratory accreditation', RmOperationalScope: 'Operational scope',
  RmStudy: 'Homogeneity study', RmCertificate: 'RM certificate (DRMD)', RecognizedEntityCredential: 'Recognition of the body',
  CalAccreditation: 'Accreditation', CalOperationalScope: 'Operational scope', CalLegalMandate: 'Statutory mandate',
  CalCertificate: 'Calibration certificate', CalTestReport: 'Test report',
  GsAccreditation: 'Accreditation', GsSchemeAuthorization: 'Scheme authorization', GsCertificate: 'GS certificate',
  GsTestReport: 'Type examination', GsInspectionReport: 'Factory inspection', GsMarkCredential: 'GS-mark credential', ProductPassport: 'Product passport (DPP)',
};
export interface GraphNode {
  /** `name`: the identifier's last part (A); `code`: what the page shows (PA1). */
  readonly uri: string; readonly name: string; readonly code: string; readonly role: string; readonly parties: string;
  /** The credential's own type, and the signer's group. */
  readonly type: string; readonly group: 'authority' | 'actor' | undefined;
  readonly layer: number; readonly present: boolean; readonly state: SemanticState; readonly target: boolean;
}
/** `unused`: a link to a credential the verifier verified but did not rely on, such as R for a verifier whose root is the accreditation body. */
/** `authority`: termsOfUse IssuedUnderPolicy (or a binding's own authorization policy); `recognition`: termsOfUse RecognitionPolicy (the issuer's recognition, no authority); `support`: evidence. */
/** `policy`: the termsOfUse entry's type (IssuedUnderPolicy, RecognitionPolicy, a binding's own), or `evidence`. */
export interface GraphEdge { readonly from: string; readonly to: string; readonly kind: 'authority' | 'recognition' | 'support'; readonly policy: string; readonly state: SemanticState | 'not_required' | 'unused' }
export interface Graph { readonly nodes: readonly GraphNode[]; readonly edges: readonly GraphEdge[] }

/**
 * The graph is read from the credentials themselves: from the target, every
 * termsOfUse authorizationCredential (authority), recognitionCredential (recognition) and evidence entry (support) is
 * followed. Layers are the longest reference path from the target. Node states are the
 * evaluator's per-artifact verification. The target's own authority links take the
 * answer to "authorized", its evidence links the answer to "supported", and deeper links
 * the verification of the credential they point to, so a wrong link shows on that link
 * alone. Once the request is accepted, a deeper link to a credential on no witness path
 * is `unused`: verified, not relied on.
 */
function buildGraph(target: string, texts: Record<string, string>, result: RelianceResult,
  authorized: SemanticState, supported: SemanticState | 'not_required'): Graph {
  const docs = new Map<string, Record<string, unknown>>();
  for (const [uri, text] of Object.entries(texts)) { try { docs.set(uri, JSON.parse(text) as Record<string, unknown>); } catch { /* not JSON */ } }
  const refs = (d: Record<string, unknown> | undefined) => [
    ...((d?.termsOfUse ?? []) as { type?: string; authorizationCredential?: { id?: string } }[])
      .filter(t => typeof t.authorizationCredential?.id === 'string').map(t => ({ to: t.authorizationCredential!.id!, kind: 'authority' as const, policy: String(t.type ?? 'termsOfUse') })),
    ...((d?.termsOfUse ?? []) as { type?: string; recognitionCredential?: { id?: string } }[])
      .filter(t => typeof t.recognitionCredential?.id === 'string').map(t => ({ to: t.recognitionCredential!.id!, kind: 'recognition' as const, policy: String(t.type ?? 'termsOfUse') })),
    ...((d?.evidence ?? []) as { id?: string }[]).map(e => e.id).filter((x): x is string => typeof x === 'string')
      .map(to => ({ to, kind: 'support' as const, policy: 'evidence' })),
  ];
  const verification = new Map(result.artifactVerification.map(a => [a.artifactId, a.state]));
  const witnesses = result.decision === 'accept'
    ? new Set([...result.authorization.flatMap(a => a.routeWitnessIds), ...result.support.flatMap(s => s.witnessIds)]) : undefined;
  const layer = new Map<string, number>([[target, 0]]);
  const underSupport = new Set<string>();
  const edges: GraphEdge[] = [];
  const queue: [string, boolean][] = [[target, false]];
  const seenEdge = new Set<string>();
  while (queue.length > 0) {
    const [uri, viaSupport] = queue.shift()!;
    for (const { to, kind, policy } of refs(docs.get(uri))) {
      const key = `${uri}>${to}`;
      const support = viaSupport || kind === 'support';
      if (!seenEdge.has(key)) {
        seenEdge.add(key);
        // The target's own links carry the answers to "authorized" and "supported";
        // deeper links show the verification of the credential they point to.
        edges.push({ from: uri, to, kind, policy,
          state: uri === target ? (kind === 'support' ? supported : authorized)
            : witnesses && !witnesses.has(to) ? 'unused' : verification.get(to) ?? 'not_established' });
      }
      const depth = (layer.get(uri) ?? 0) + 1;
      if ((layer.get(to) ?? -1) < depth && depth < 8) { layer.set(to, depth); queue.push([to, support]); }
      else if (support && !underSupport.has(to)) { underSupport.add(to); }
    }
  }
  const nodes = [...layer].map(([uri, l]) => {
    const d = docs.get(uri);
    const type = Array.isArray(d?.type) ? String((d.type as unknown[])[1]) : '';
    const subject = (d?.credentialSubject ?? {}) as Record<string, unknown>;
    // RM credentials show a code (PA1 for A); the other bindings' names already are codes.
    return { uri, name: short(uri), code: RM_CODES[short(uri)] ?? short(uri), role: ROLE[type] ?? (type || 'not supplied'), type, group: d === undefined ? undefined : groupOf(d.issuer),
      layer: l, present: d !== undefined, target: uri === target,
      parties: d === undefined ? 'withheld' : `${party(d.issuer)} → ${party(subject.id)}`,
      state: verification.get(uri) ?? 'not_established' };
  });
  return { nodes, edges };
}

// ---------------------------------------------------------------- evaluation

export type Question = 'authentic' | 'current' | 'understood' | 'authorized' | 'supported' | 'fit';
export type Answer = SemanticState | 'not_asked' | 'not_required';
export interface QuestionResult { readonly id: Question; readonly state: Answer; readonly summary: string; readonly details: readonly TraceEntry[] }
export interface ScenarioOptions {
  readonly example: ExampleSpec['id'];
  readonly caseId: string;
  readonly choice?: string;
  readonly tamper: boolean;
  readonly withhold: boolean;
}
export interface ScenarioResult {
  readonly options: ScenarioOptions;
  readonly example: ExampleSpec;
  readonly spec: CaseSpec;
  readonly profile: string;
  readonly result: RelianceResult;
  readonly questions: readonly QuestionResult[];
  readonly target: Record<string, unknown>;
  readonly texts: Readonly<Record<string, string>>;
  readonly graph: Graph;
}

const all = (entries: readonly TraceEntry[]): SemanticState =>
  entries.length === 0 ? 'not_established' : semanticAnd(entries.map(e => e.state));
const first = (entries: readonly TraceEntry[], state: SemanticState) => entries.find(e => e.state === state);

/** One evaluation: a target and its claims under one profile, on the binding's files. */
interface Evaluation {
  readonly binding: BindingKey;
  readonly profileName: string;
  readonly requestId: string;
  readonly target: string;
  readonly claims: CaseSpec['claims'];
  readonly supplied: readonly string[];
  readonly conformity?: { readonly requirementId: string; readonly decisionRuleId: string };
  /** A credential the holder leaves out. */
  readonly withheld?: string | undefined;
  /** Documents that replace a file's text (a tampered or re-signed one) or are added (signed live), by URI. */
  readonly texts?: Readonly<Record<string, string>>;
  /** What "fit for use" says when the verifier asked no conformity question. */
  readonly notAsked: string;
  /** The time the question is about; the evaluation time when omitted. */
  readonly activityTime?: string;
}
interface Evaluated {
  readonly profile: string;
  readonly result: RelianceResult;
  readonly questions: readonly QuestionResult[];
  readonly target: Record<string, unknown>;
  readonly texts: Readonly<Record<string, string>>;
  readonly graph: Graph;
}

async function evaluate(e: Evaluation): Promise<Evaluated> {
  const bound = loaded[e.binding];
  const profile = bound.profiles[e.profileName]!;
  const replaced = e.texts ?? {};
  const known = new Set(bound.files.map(file => file.uri));
  const origin = bound.files.find(file => file.uri === e.target)?.origin ?? bound.files.at(-1)!.origin;
  const texts: Record<string, string> = {};
  const inputs = [
    ...bound.files,
    ...Object.entries(replaced).filter(([uri]) => !known.has(uri))
      .map(([uri, text]) => ({ uri, mediaType: 'application/vc', origin, version: '1', text, digestSRI: undefined })),
  ].filter(file => file.uri !== e.withheld).map(file => {
    // A replaced text is served as it is: the catalog pins what is served, so only the
    // signature check can tell a tampered document from a genuine one, and must.
    const text = replaced[file.uri] ?? file.text;
    const bytes = new TextEncoder().encode(text);
    texts[file.uri] = text;
    return { uri: file.uri, mediaType: file.mediaType, origin: file.origin, version: file.version,
      bytes, digestSRI: text === file.text && file.digestSRI ? file.digestSRI : sha384SRI(bytes) };
  });
  const request = createRelianceRequest({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map(c => ({ ...c })),
    purpose: 'demonstrator',
    binding: { id: bound.manifest.id, version: bound.manifest.version },
    profile: { id: profile.id, version: profile.version },
    trustConfigId: 'https://vc4qi.example/trust/fixture-anchors',
    evaluationTime: EVALUATION_TIME,
    activityTime: e.activityTime ?? EVALUATION_TIME,
    suppliedEvidence: e.supplied.filter(uri => uri !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    ...(e.conformity ? { conformity: { ...e.conformity } } : {}),
  });
  const { result } = await EVALUATORS[e.binding](request, new StaticResourceCatalog(inputs), bound.manifest, profile);

  const at = (gate: number, test: (entry: TraceEntry) => boolean = () => true) =>
    result.trace.filter(entry => entry.gate === gate && test(entry));
  const protection = at(2);
  const authentic = [...protection, ...at(1)];
  const current = at(3);
  const understood = [...at(0), ...at(4)];
  const summarize = (entries: readonly TraceEntry[], state: SemanticState, ok: string) =>
    state === 'established' ? ok : (first(entries, state) ?? first(entries, 'not_established'))?.reason ?? 'Not evaluated.';
  const authorization = result.authorization;
  const authorizedState = authorization.length === 0 ? 'not_established' : semanticAnd(authorization.map(a => a.state));
  const authorizedSummary = authorizedState === 'established'
    ? authorization.map(a => a.reasons.at(-1)).join(' ')
    : authorization.filter(a => a.state !== 'established').map(a => `${a.claimId}: ${a.reasons.join(' ')}`).join(' ');
  const support = result.support;
  // No support obligation means "not required" only if the target was read: an unusable
  // target has not been checked for obligations at all.
  const targetUsable = result.artifactVerification.find(a => a.artifactId === e.target)?.state === 'established';
  const supportState: Answer = support.length > 0 ? semanticAnd(support.map(s => s.state))
    : targetUsable ? 'not_required' : 'not_established';
  const conformityEntries = at(6, entry => entry.predicate.startsWith('conformity:'));

  const questions: QuestionResult[] = [
    { id: 'authentic', state: all(authentic), details: authentic,
      summary: summarize(authentic, all(authentic), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.") },
    { id: 'current', state: all(current), details: current,
      summary: summarize(current, all(current), 'Every credential is within its validity period and not revoked.') },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    at(4).length === 0
      ? { id: 'understood', state: all(at(0)) === 'contradicted' ? 'contradicted' : 'not_established', details: understood,
        summary: summarize(at(0), all(at(0)), 'The claim was not read, because its credential did not pass the earlier checks.') }
      : { id: 'understood', state: all(understood), details: understood,
        summary: summarize(understood, all(understood), at(4).map(entry => entry.reason).join(' ')) },
    { id: 'authorized', state: authorizedState, summary: authorizedSummary,
      details: at(5, entry => entry.predicate.startsWith('claim-') || entry.predicate.startsWith('restriction:') || entry.predicate.startsWith('route:')) },
    { id: 'supported', state: supportState,
      summary: support.length > 0 ? support.map(s => s.reasons.join(' ')).join(' ')
        : targetUsable ? 'This claim needs no supporting credential under the selected profile.'
          : 'Not evaluated: the credential did not pass the earlier checks.',
      details: at(6, entry => entry.predicate.startsWith('support:') || support.some(s => s.obligationId === entry.predicate)) },
    result.conformity.requested
      ? { id: 'fit', state: result.conformity.execution === 'not_run' ? 'not_asked' : result.conformity.state, details: conformityEntries,
        summary: result.conformity.reasons.join(' ') }
      : { id: 'fit', state: 'not_asked', details: [], summary: e.notAsked },
  ];

  const target = JSON.parse(texts[e.target]!) as Record<string, unknown>;
  const graph = buildGraph(e.target, texts, result, authorizedState, supportState);
  return { profile: e.profileName, result, questions, target, texts, graph };
}

export async function evaluateScenario(options: ScenarioOptions): Promise<ScenarioResult> {
  const example = EXAMPLES.find(e => e.id === options.example) ?? EXAMPLES[0]!;
  const spec = example.cases.find(c => c.id === options.caseId) ?? example.cases[0]!;
  const file = loaded[spec.binding].files.find(f => f.uri === spec.target)!;
  // Tamper test: change the decisive value without re-signing.
  const texts = options.tamper ? { [spec.target]: file.text.replace(spec.tamper[0], spec.tamper[1]) } : {};
  const r = await evaluate({
    binding: spec.binding,
    profileName: example.id === 'dcc' && options.choice === 'direct-only' ? 'cal-verifier-1'
      : example.id === 'dpp' && options.choice === 'accreditation-only' ? ACCREDITATION_ONLY : spec.profile,
    requestId: `urn:vc4qi:demonstrator:${example.id}:${spec.id}`,
    target: spec.target, claims: spec.claims, supplied: spec.supplied, texts,
    withheld: options.withhold ? spec.withhold.uri : undefined,
    ...(example.id === 'rm' && options.choice !== 'authorized'
      ? { conformity: { requirementId: 'as-mass-fraction-max-200-mg-per-kg', decisionRuleId: 'guarded-acceptance-expanded-u' } } : {}),
    notAsked: example.id === 'rm' ? 'The verifier asked only whether the value is authorized; no limit was applied.'
      : 'This example asks only whether the claim is authorized; the binding installs no decision rule.',
  });
  return { options, example, spec, ...r };
}

// ---------------------------------------------------------------- actor boards

/**
 * A story on an actor board (site/demo/board.js): one column per actor, the credentials
 * in their issuer's column, every action in the column of the actor who can take it.
 * The board state is what those actions have done; `evaluateRmBoard` and
 * `evaluateGsBoard` evaluate it with the binding's slice evaluator. Revoking,
 * suspending and a typed certificate are signed live (live-sign.ts); everything else is
 * a generated fixture.
 */
export interface BoardActor {
  readonly id: string; readonly mono: string; readonly name: string; readonly does: string;
  /** Its colour on the board: an authority (grants or recognizes), an actor (does the work
   * under a grant), or neither (holder, verifier). */
  readonly group?: 'authority' | 'actor';
  /** What the actor publishes, by URI where it is a signed document. */
  readonly publishes: readonly { readonly label: string; readonly uri?: string }[];
}
export interface BoardAsset {
  /** The code on the card; the board result maps it to the credential shown. */
  readonly code: string;
  readonly label: string;
  readonly kind: 'grant' | 'evidence' | 'claim';
  /** The issuer's column, and the row the card sits in. */
  readonly actor: string; readonly row: 1 | 2 | 3;
  /** The actor the credential is about, or `object` for a thing (with `aboutLabel`). */
  readonly about: string; readonly aboutLabel?: string;
  readonly heldBy: string;
  /** A short tag beside the kind, e.g. "proposal" for what the binding proposes rather than reuses. */
  readonly tag?: string;
}
export type BoardPart = 'anatomy' | 'build' | 'verify' | 'manipulate' | 'decide' | 'when' | 'proposal' | 'present' | 'play';
export const BOARD_PARTS: readonly { readonly id: BoardPart; readonly label: string }[] = [
  { id: 'build', label: 'Build the chain' }, { id: 'verify', label: 'Verify' }, { id: 'manipulate', label: 'Manipulate' },
  { id: 'decide', label: 'The verifier decides' }, { id: 'present', label: 'Present' }, { id: 'play', label: 'Your turn' },
];
/**
 * One step of a board story. Actors join one by one as the chain reaches them. Build
 * steps show the credentials issued so far and evaluate nothing; the others evaluate
 * their state, and `expect` is the decision the tests require. `unlock` is the one
 * action the step makes live; the last step makes all live. The presentation step is a
 * placeholder: nothing in it is evaluated.
 */
export interface BoardStep<S> {
  readonly id: string; readonly part: BoardPart; readonly title: string; readonly text: string;
  /** The acting columns: the one who acts first, then the one it acts towards. */
  readonly acts: readonly string[];
  /** Actors who join the board in this step; a column appears only once its actor has joined. */
  readonly joins?: readonly string[];
  readonly issues?: readonly string[];
  readonly state?: Partial<S>;
  readonly unlock?: readonly string[];
  readonly expect?: RelianceResult['decision'];
  readonly presentation?: readonly { readonly credential: string; readonly reveal: string; readonly hide: string }[];
  /** A page drawn instead of the board (the page's `panels[panel]`); nothing in it is evaluated. */
  readonly panel?: string;
}
export interface BoardResult<S> extends Evaluated {
  readonly state: S;
  /** The credential the verifier was shown. */
  readonly certificate: string;
  /** Each asset code's credential URI in this state. */
  readonly uris: Readonly<Record<string, string>>;
  /** Documents signed in this browser for this state. */
  readonly signedLive: readonly string[];
}
/** Live-signed documents, by what they encode, so each is signed once. */
const live = new Map<string, Promise<string>>();
function liveOnce(key: string, make: () => Promise<string>) {
  if (!live.has(key)) live.set(key, make());
  return live.get(key)!;
}
/** The day an issuer re-signs its status list to revoke or suspend. */
const RESIGNED = '2026-09-20T00:00:00Z';
const textOf = (binding: BindingKey, uri: string) => loaded[binding].files.find(file => file.uri === uri)!.text;
const catalogOf = (binding: BindingKey) => loaded[binding].files.map(file => ({ uri: file.uri, mediaType: file.mediaType,
  origin: file.origin, version: file.version, bytes: new TextEncoder().encode(file.text), digestSRI: file.digestSRI as `sha384-${string}` }));
/** `list` re-signed by its issuer `name` (`controller`) with bit 0 set. */
const resignedList = (binding: BindingKey, list: string, name: string, controller: string) => liveOnce(`${binding}:list:${list}`, () =>
  signAs(reissueStatusList(textOf(binding, list), [0], RESIGNED), name, controller, RESIGNED, catalogOf(binding), textOf(binding, controller)));
/** Change `from` to `to` in a document's bytes without re-signing. */
const edited = (text: string, from: string, to: string) => text.replace(from, to);

// ---------------------------------------------------------------- the RM board

export type RmActor = BoardActor;
export type RmAsset = BoardAsset;
export type RmStep = BoardStep<RmBoardState>;
export type RmBoardResult = BoardResult<RmBoardState>;
/** The RM story: one credential and the design rules, the chain, and the question at issuance. */
export const RM_PARTS: readonly { readonly id: BoardPart; readonly label: string }[] = [
  { id: 'anatomy', label: 'The credential' }, { id: 'build', label: 'Build the chain' }, { id: 'verify', label: 'Verify' },
  { id: 'manipulate', label: 'Try to break it' }, { id: 'decide', label: 'Who decides' }, { id: 'when', label: 'At issuance' },
  { id: 'proposal', label: 'Proposal' }, { id: 'play', label: 'Your turn' },
];
const RM_URI = {
  NAB: 'https://nab.vc4qi.example/controller', PRODUCER: 'https://producer.vc4qi.example/controller', LAB: 'https://lab.vc4qi.example/controller',
  A: 'https://nab.vc4qi.example/credentials/A', H: 'https://nab.vc4qi.example/credentials/H',
  O: 'https://producer.vc4qi.example/credentials/O', S: 'https://lab.vc4qi.example/credentials/S',
  LIVE: 'https://producer.vc4qi.example/credentials/D-live',
  NAB_STATUS: 'https://nab.vc4qi.example/status/1', SUSPENSION: 'https://nab.vc4qi.example/status/suspension/1',
  LAB_STATUS: 'https://lab.vc4qi.example/status/1', PRODUCER_STATUS: 'https://producer.vc4qi.example/status/1',
  GACI: 'https://global-aci.vc4qi.example/controller', GACI_SUSPENSION: 'https://global-aci.vc4qi.example/status/suspension/1',
  GACI_STATUS: 'https://global-aci.vc4qi.example/status/1', R: 'https://global-aci.vc4qi.example/credentials/R',
} as const;
export const RM_ACTORS: readonly BoardActor[] = [
  { id: 'gaci', mono: 'GACI', group: 'authority', name: 'Global ACI', does: 'Recognizes accreditation bodies after peer evaluation. Can suspend one recognition. A fictional stand-in.',
    publishes: [{ label: 'Key', uri: RM_URI.GACI }, { label: 'Revocation list', uri: RM_URI.GACI_STATUS }, { label: 'Suspension list', uri: RM_URI.GACI_SUSPENSION }] },
  { id: 'ab', mono: 'AB', group: 'authority', name: 'Accreditation body', does: 'Accredits the producer and the laboratory. Can suspend.',
    publishes: [{ label: 'Key', uri: RM_URI.NAB }, { label: 'Revocation list', uri: RM_URI.NAB_STATUS }, { label: 'Suspension list', uri: RM_URI.SUSPENSION }] },
  { id: 'lab', mono: 'LAB', group: 'actor', name: 'Laboratory', does: 'Studies the batch under its accreditation. Can revoke its study.',
    publishes: [{ label: 'Key', uri: RM_URI.LAB }, { label: 'Revocation list', uri: RM_URI.LAB_STATUS }] },
  { id: 'rmp', mono: 'RMP', group: 'actor', name: 'RM producer', does: 'Declares its scope, certifies the material and ships it.',
    publishes: [{ label: 'Key', uri: RM_URI.PRODUCER }, { label: 'Revocation list', uri: RM_URI.PRODUCER_STATUS }] },
  { id: 'holder', mono: 'CUST', name: 'Customer lab', does: 'Bought disc lot 1. Holds its certificate and shows it.',
    publishes: [{ label: 'Wallet' }] },
  { id: 'verifier', mono: 'VER', name: 'Verifier', does: 'Relies on the certificate only as far as its own profile allows.',
    publishes: [{ label: 'Profile' }] },
];
/**
 * The code each RM credential shows: three or four letters and a number. The signed test
 * credentials keep the paper's letters in their identifiers (credentials/A); these codes
 * are display only.
 */
export const RM_CODES: Readonly<Record<string, string>> = {
  R: 'REC1', A: 'PA1', A2: 'PA2', H: 'LA1', O: 'OS1', S: 'HS1', D178: 'RM178', D197: 'RM197', D520: 'RM520', 'D-live': 'RM-own',
};
/** D is the certificate shown: RM178, RM197, RM520 or the one signed live. */
export const RM_ASSETS: readonly BoardAsset[] = [
  { code: 'R', label: 'Recognition of the body', tag: 'proposal', kind: 'grant', actor: 'gaci', row: 1, about: 'ab', heldBy: 'ab' },
  { code: 'A', label: 'Producer accreditation', kind: 'grant', actor: 'ab', row: 1, about: 'rmp', heldBy: 'rmp' },
  { code: 'H', label: 'Laboratory accreditation', kind: 'grant', actor: 'ab', row: 2, about: 'lab', heldBy: 'lab' },
  { code: 'O', label: 'Producer’s operational scope', kind: 'grant', actor: 'rmp', row: 1, about: 'rmp', heldBy: 'rmp' },
  { code: 'S', label: 'Homogeneity study', kind: 'evidence', actor: 'lab', row: 2, about: 'object', aboutLabel: 'disc lot 1', heldBy: 'rmp' },
  { code: 'D', label: 'RM certificate', kind: 'claim', actor: 'rmp', row: 2, about: 'object', aboutLabel: 'disc lot 1', heldBy: 'holder' },
];

export interface RmBoardState {
  /** The producer's certificate: a generated one, or one it signs live. */
  readonly certificate: '178' | '197' | '520' | 'custom';
  readonly value: string; readonly uncertainty: string; readonly method: 'M1' | 'M2';
  readonly suspendA: boolean; readonly revokeS: boolean;
  /** The holder edits a value after signing; or leaves one credential of the chain out ('' for none). */
  readonly tamper: boolean; readonly withhold: '' | 'R' | 'A' | 'H' | 'O' | 'S';
  /** The verifier's root: this accreditation body, the Global ACI stand-in (abroad), or another body (abroad). */
  readonly trust: 'ab' | 'global-aci' | 'other'; readonly suspendGaci: boolean;
  /** The verifier's question, its rule and its upper limit for As in mg/kg. */
  readonly ask: 'authorized' | 'fit'; readonly rule: 'guarded' | 'simple'; readonly limit: '180' | '200' | '250';
  /** Asked about today, or about D's activity on 20 January 2026; and which status lists answer that. */
  readonly asOf: 'now' | 'issuance'; readonly archive: boolean;
}
export const RM_DEFAULT: RmBoardState = {
  certificate: '178', value: '178', uncertainty: '5', method: 'M1', suspendA: false, revokeS: false,
  tamper: false, withhold: '', trust: 'ab', suspendGaci: false, ask: 'fit', rule: 'guarded', limit: '200',
  asOf: 'now', archive: false,
};
/** D178's activity time: the day the material was certified. */
export const RM_ACTIVITY = '2026-01-20T00:00:00Z';
export const RM_STORY: readonly BoardStep<RmBoardState>[] = [
  { id: 'credential', part: 'anatomy', acts: [], panel: 'credential',
    title: 'One credential, its links and the rules',
    text: 'Every card is a W3C verifiable credential. Its links are standard fields; the type of each term of use says what the link means.' },

  { id: 'recognize', part: 'build', acts: ['gaci', 'ab'], joins: ['gaci', 'ab'], issues: ['R'],
    title: 'Global ACI recognizes the accreditation body',
    text: 'After peer evaluation, for RM production (ISO 17034) and testing (ISO/IEC 17025). Recognition grants no authority.' },
  { id: 'accredit-producer', part: 'build', acts: ['ab', 'rmp'], joins: ['rmp'], issues: ['A'],
    title: 'The accreditation body accredits the producer',
    text: 'PA1 names what the producer may certify. It names REC1 as a RecognitionPolicy: issued while recognized.' },
  { id: 'accredit-lab', part: 'build', acts: ['ab', 'lab'], joins: ['lab'], issues: ['H'],
    title: 'The accreditation body accredits the laboratory',
    text: 'LA1 names which studies the laboratory may carry out. It too names REC1 as a RecognitionPolicy.' },
  { id: 'scope', part: 'build', acts: ['rmp'], issues: ['O'],
    title: 'The producer declares its operational scope',
    text: 'OS1 is issued under PA1 (IssuedUnderPolicy) and must lie within it: As in CuZn39Pb3 discs, method M1.' },
  { id: 'study', part: 'build', acts: ['lab'], issues: ['S'],
    title: 'The laboratory studies the batch',
    text: 'HS1, 10 January 2026: disc lot 1 is homogeneous for As. Issued under LA1.' },
  { id: 'certify', part: 'build', acts: ['rmp', 'holder'], joins: ['holder'], issues: ['D'],
    title: 'The producer certifies and ships',
    text: 'RM178, 20 January 2026: As = 178 ± 5 mg/kg, issued under OS1, with HS1 as evidence.' },

  { id: 'verify', part: 'verify', acts: ['holder', 'verifier'], joins: ['verifier'], expect: 'accept',
    title: 'Checked upward',
    text: 'The verifier trusts the accreditation body and climbs every link from RM178 to it. Its own rule: As + U ≤ 200 mg/kg.' },

  { id: 'break', part: 'manipulate', acts: ['holder', 'rmp', 'ab', 'lab'], expect: 'accept',
    unlock: ['withhold', 'tamper', 'certificate', 'suspend', 'revoke'],
    title: 'Try to break it',
    text: 'Click a line to leave that credential out, edit a value, certify 520 or your own value, suspend PA1 or revoke HS1.' },

  { id: 'decide', part: 'decide', acts: ['verifier', 'rmp'], state: { certificate: '197' }, unlock: ['rule', 'limit', 'ask', 'certificate'], expect: 'reject',
    title: 'The verifier decides, not the issuer',
    text: 'RM197 is authorized, but guarded acceptance counts the uncertainty: 197 + 5 = 202 > 200.' },
  { id: 'abroad', part: 'decide', acts: ['verifier', 'gaci', 'rmp'], state: { trust: 'global-aci' }, unlock: ['trust', 'suspendGaci', 'certificate'], expect: 'accept',
    title: 'A verifier abroad trusts only Global ACI',
    text: 'REC1 tells it to accept the body. Suspend REC1, or certify 520: recognized is not in scope.' },

  { id: 'when', part: 'when', acts: ['ab', 'verifier'], state: { suspendA: true, asOf: 'issuance', archive: true },
    unlock: ['asOf', 'archive', 'suspend'], expect: 'accept',
    title: 'Was it valid when it was issued?',
    text: 'PA1 was suspended in September; RM178 dates from 20 January. Only the status lists kept from January can answer.' },

  { id: 'proposal', part: 'proposal', acts: ['gaci', 'ab'], panel: 'proposal',
    title: 'Proposal: one recognition per body',
    text: 'One recognition credential per body, named by its accreditations, and dated status lists.' },
  { id: 'reconcile', part: 'proposal', acts: ['gaci', 'ab', 'rmp'], panel: 'reconcile',
    title: 'Recognized Entities and terms of use',
    text: 'One rule for every upward link; its type says grant (IssuedUnderPolicy) or recognition (RecognitionPolicy).' },

  { id: 'play', part: 'play', acts: ['gaci', 'ab', 'lab', 'rmp', 'holder', 'verifier'],
    unlock: ['suspendGaci', 'suspend', 'revoke', 'certificate', 'tamper', 'withhold', 'trust', 'ask', 'rule', 'limit', 'asOf', 'archive'],
    title: 'Your turn',
    text: 'Every action is live: leave out, edit, certify, suspend, revoke, and change what the verifier trusts, asks and when.' },
];

const RM_PROFILE = 'rm-verifier-1';
const RM_OTHER_ANCHOR = 'rm-verifier-other-anchor (demonstrator)';
/** The verifier abroad whose only root is the Global ACI stand-in (a binding profile). */
const RM_GLOBAL_ACI = 'rm-verifier-global-aci-1';
{
  // A verifier abroad: rm-verifier-1 with another accreditation body as its only anchor.
  const base = resources.rm.profiles[RM_PROFILE] as { trustAnchors: { id: string; purposes: string[] }[] };
  loaded.rm.profiles[RM_OTHER_ANCHOR] = loadRelianceProfile({ ...base,
    id: 'https://vc4qi.example/profiles/rm-verifier-other-anchor',
    description: 'Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.',
    trustAnchors: base.trustAnchors.map(anchor => ({ ...anchor, id: 'https://other-ab.vc4qi.example/controller' })) });
}
/** The verifier's profile with its As limit set to `limit` mg/kg (demonstrator-only variants). */
function rmProfileWithLimit(name: string, limit: string): string {
  if (limit === '200') return name;
  const variant = `${name} (limit ${limit} mg/kg, demonstrator)`;
  if (!loaded.rm.profiles[variant]) {
    const base = loaded.rm.profiles[name]!;
    const json = structuredClone(resources.rm.profiles[name] ?? resources.rm.profiles[RM_PROFILE]) as JsonObject;
    if (name === RM_OTHER_ANCHOR) json.trustAnchors = base.trustAnchors.map(a => ({ id: a.id, purposes: [...a.purposes] }));
    const conformity = json.conformity as { requirements: { upperLimit: { value: string } }[] };
    conformity.requirements[0]!.upperLimit.value = limit;
    loaded.rm.profiles[variant] = loadRelianceProfile({ ...json, id: `${base.id}-limit-${limit}`,
      description: `Demonstrator-only variant of ${base.id} whose As limit is ${limit} mg/kg.` });
  }
  return variant;
}
const rmText = (uri: string) => textOf('rm', uri);
const certificateUri = (state: RmBoardState) =>
  state.certificate === 'custom' ? RM_URI.LIVE : `https://producer.vc4qi.example/credentials/D${state.certificate}`;

/** The certificate the producer signs live: D178 with the typed As result, at status index 4. */
function liveCertificate(state: RmBoardState) {
  return liveOnce(`rm:D:${state.value}:${state.uncertainty}:${state.method}`, () => {
    const { proof: _proof, ...d178 } = JSON.parse(rmText('https://producer.vc4qi.example/credentials/D178')) as Record<string, any>;
    const subject = structuredClone(d178.credentialSubject);
    const as = subject.materialPropertiesList[0].results[0];
    as.methodIri = as.methodIri.replace(/M1$/, state.method);
    as.data.quantity.value = state.value;
    as.data.quantity.uncertainty.expandedUncertainty = state.uncertainty;
    const status = { ...d178.credentialStatus, id: `${RM_URI.PRODUCER_STATUS}#4`, statusListIndex: '4' };
    return signAs({ ...d178, id: RM_URI.LIVE, name: 'Reference material certificate, CuZn39Pb3 disc lot 1 (signed in this browser)',
      credentialSubject: subject, credentialStatus: status } as JsonObject,
    'producer', RM_URI.PRODUCER, d178.validFrom, catalogOf('rm'), rmText(RM_URI.PRODUCER));
  });
}

export async function evaluateRmBoard(over: Partial<RmBoardState> = {}): Promise<BoardResult<RmBoardState>> {
  const state = { ...RM_DEFAULT, ...over };
  const target = certificateUri(state);
  const texts: Record<string, string> = {};
  if (state.certificate === 'custom') texts[target] = await liveCertificate(state);
  if (state.suspendA) texts[RM_URI.SUSPENSION] = await resignedList('rm', RM_URI.SUSPENSION, 'nab', RM_URI.NAB);
  if (state.revokeS) texts[RM_URI.LAB_STATUS] = await resignedList('rm', RM_URI.LAB_STATUS, 'lab', RM_URI.LAB);
  if (state.suspendGaci) {
    texts[RM_URI.GACI_SUSPENSION] = await resignedList('rm', RM_URI.GACI_SUSPENSION, 'global-aci', RM_URI.GACI);
  }
  // Asked about January with the lists kept from January: those answer status then,
  // in place of today's (including any re-signed here).
  if (state.asOf === 'issuance' && state.archive) for (const list of resources.rm.archive ?? []) texts[list.uri] = list.text;
  const kept = new Set((state.asOf === 'issuance' && state.archive ? resources.rm.archive ?? [] : []).map(list => list.uri));
  const signedLive = Object.keys(texts).filter(uri => !kept.has(uri));
  if (state.tamper) {
    // Change the As value in the bytes the holder shows, without re-signing.
    const text = texts[target] ?? rmText(target);
    const shown = (JSON.parse(text) as any).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value as string;
    texts[target] = edited(text, `"value": "${shown}"`, `"value": "${shown === '150' ? '151' : '150'}"`);
  }
  const uris = { R: RM_URI.R, A: RM_URI.A, H: RM_URI.H, O: RM_URI.O, S: RM_URI.S, D: target };
  const root = state.trust === 'ab' ? RM_PROFILE : state.trust === 'global-aci' ? RM_GLOBAL_ACI : RM_OTHER_ANCHOR;
  const r = await evaluate({
    binding: 'rm', profileName: state.ask === 'fit' ? rmProfileWithLimit(root, state.limit) : root,
    requestId: 'urn:vc4qi:demonstrator:rm-board', target,
    claims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }], supplied: [], texts,
    withheld: state.withhold ? uris[state.withhold] : undefined,
    activityTime: state.asOf === 'issuance' ? RM_ACTIVITY : EVALUATION_TIME,
    ...(state.ask === 'fit' ? { conformity: { requirementId: 'as-mass-fraction-max-200-mg-per-kg',
      decisionRuleId: state.rule === 'simple' ? 'simple-acceptance' : 'guarded-acceptance-expanded-u' } } : {}),
    notAsked: 'The verifier asked only whether the value is authorized; no limit was applied.',
  });
  return { ...r, state, certificate: target, uris, signedLive };
}

// ---------------------------------------------------------------- the GS board

const GS_BOARD_URI = {
  NAB: 'https://nab.vc4qi.example/controller', ZLS: 'https://zls.vc4qi.example/controller',
  BODY: 'https://gs-body.vc4qi.example/controller', MAKER: 'https://maker.vc4qi.example/controller',
  NAB_STATUS: 'https://nab.vc4qi.example/status/gs/1', ZLS_STATUS: 'https://zls.vc4qi.example/status/gs/1',
  BODY_STATUS: 'https://gs-body.vc4qi.example/status/gs/1', MAKER_STATUS: 'https://maker.vc4qi.example/status/gs/1',
  A: 'https://nab.vc4qi.example/credentials/GS-A', S: 'https://zls.vc4qi.example/credentials/GS-S',
  TR: GS_URI.TR1, FI: 'https://gs-body.vc4qi.example/credentials/FI-1', C: GS_URI.C1,
} as const;
export const GS_ACTORS: readonly BoardActor[] = [
  { id: 'ab', mono: 'AB', group: 'authority', name: 'Accreditation body', does: 'Accredits the GS body for testing and certifying. Can revoke.',
    publishes: [{ label: 'Key', uri: GS_BOARD_URI.NAB }, { label: 'Revocation list', uri: GS_BOARD_URI.NAB_STATUS }] },
  { id: 'so', mono: 'SO', group: 'authority', name: 'Scheme owner', does: 'Permits a body to award the GS mark, in the role ZLS has. Can revoke.',
    publishes: [{ label: 'Key', uri: GS_BOARD_URI.ZLS }, { label: 'Revocation list', uri: GS_BOARD_URI.ZLS_STATUS }] },
  { id: 'gsb', mono: 'GSB', group: 'actor', name: 'GS body', does: 'Examines, inspects and certifies. Can withdraw a certificate.',
    publishes: [{ label: 'Key', uri: GS_BOARD_URI.BODY }, { label: 'Revocation list', uri: GS_BOARD_URI.BODY_STATUS }] },
  { id: 'mfr', mono: 'MFR', group: 'actor', name: 'Manufacturer', does: 'Makes hair dryer HD-01, marks each unit and issues its passport.',
    publishes: [{ label: 'Key', uri: GS_BOARD_URI.MAKER }, { label: 'Revocation list', uri: GS_BOARD_URI.MAKER_STATUS }] },
  { id: 'verifier', mono: 'VER', name: 'Verifier', does: 'Relies on the passport\'s GS mark only as far as its own profile allows.',
    publishes: [{ label: 'Profile' }] },
];
/** GSM is the GS-mark credential the passport cites; DPP is the passport shown. */
export const GS_ASSETS: readonly BoardAsset[] = [
  { code: 'GS-A', label: 'Accreditation', kind: 'grant', actor: 'ab', row: 1, about: 'gsb', heldBy: 'gsb' },
  { code: 'GS-S', label: 'Scheme permission', kind: 'grant', actor: 'so', row: 3, about: 'gsb', heldBy: 'gsb' },
  { code: 'TR-1', label: 'Type examination', kind: 'evidence', actor: 'gsb', row: 1, about: 'object', aboutLabel: 'model HD-01', heldBy: 'mfr' },
  { code: 'GSC-1', label: 'GS certificate', kind: 'grant', actor: 'gsb', row: 2, about: 'object', aboutLabel: 'model HD-01', heldBy: 'mfr' },
  { code: 'FI-1', label: 'Factory inspection', kind: 'evidence', actor: 'gsb', row: 3, about: 'mfr', heldBy: 'mfr' },
  { code: 'GSM', label: 'GS-mark credential', kind: 'evidence', actor: 'mfr', row: 2, about: 'object', aboutLabel: 'the unit', heldBy: 'mfr' },
  { code: 'DPP', label: 'Product passport', kind: 'claim', actor: 'mfr', row: 3, about: 'object', aboutLabel: 'the unit', heldBy: 'mfr' },
];
export interface GsBoardState {
  /** The unit whose passport is shown: its own (sn-0042), a borrowed credential (sn-0050) or placed early (sn-0001). */
  readonly unit: 'sn-0042' | 'sn-0050' | 'sn-0001';
  readonly revokeA: boolean; readonly revokeS: boolean; readonly revokeC: boolean;
  readonly tamper: boolean; readonly withholdTR: boolean;
  readonly trust: 'both' | 'accreditation-only';
}
export const GS_DEFAULT: GsBoardState = {
  unit: 'sn-0042', revokeA: false, revokeS: false, revokeC: false, tamper: false, withholdTR: false, trust: 'both',
};
const GS_PASSPORT: Record<GsBoardState['unit'], string> = {
  'sn-0042': 'https://maker.vc4qi.example/credentials/DPP-1',
  'sn-0050': 'https://maker.vc4qi.example/credentials/DPP-3',
  'sn-0001': 'https://maker.vc4qi.example/credentials/DPP-2',
};
export const GS_STORY: readonly BoardStep<GsBoardState>[] = [
  { id: 'join', part: 'build', acts: ['ab'], joins: ['ab'],
    title: 'The accreditation body is the first party',
    text: 'Before anything is signed it publishes a key, so that anyone can check what it signs, and a status list, so that it can later revoke what it issued.' },
  { id: 'accredit', part: 'build', acts: ['ab', 'gsb'], joins: ['gsb'], issues: ['GS-A'],
    title: 'The accreditation body accredits the GS body',
    text: 'Accreditation GS-A attests competence: testing and certifying toys and household appliances against named standards. Competence is not yet permission to award the GS mark.' },
  { id: 'authorize', part: 'build', acts: ['so', 'gsb'], joins: ['so'], issues: ['GS-S'],
    title: 'The scheme owner permits the GS body to award the mark',
    text: 'A second authority, in the role ZLS has for the GS mark, grants that permission, for household appliances only. Toys are not included, although the accreditation covers them.' },
  { id: 'examine', part: 'build', acts: ['gsb', 'mfr'], joins: ['mfr'], issues: ['FI-1', 'TR-1'],
    title: 'The GS body inspects the factory and examines the type',
    text: 'Factory inspection FI-1 of the manufacturer\'s plant and type examination TR-1 of hair dryer HD-01. Each is signed under the GS body\'s accreditation. They support the certificate; they grant nothing.' },
  { id: 'certify', part: 'build', acts: ['gsb', 'mfr'], issues: ['GSC-1'],
    title: 'The GS body certifies model HD-01',
    text: 'Certificate GSC-1 cites both of its authorities, the accreditation and the scheme permission, and both studies. Every link is a reference inside a signed credential.' },
  { id: 'mark', part: 'build', acts: ['mfr'], issues: ['GSM', 'DPP'],
    title: 'The manufacturer marks unit sn-0042 and issues its passport',
    text: 'A GS-mark credential for this unit, citing the certificate, and a product passport whose compliance information lists the GS mark. Per-unit credentials are the experimental part: today\'s GS scheme has none.' },

  { id: 'verify', part: 'verify', acts: ['mfr', 'verifier'], joins: ['verifier'], expect: 'accept',
    title: 'Market surveillance checks the passport',
    text: 'It knows none of the parties in advance and trusts two roots: the accreditation body and the scheme owner. It follows every reference from the passport up to them before it relies on the GS mark.' },

  { id: 'tamper', part: 'manipulate', acts: ['mfr', 'verifier'], state: { tamper: true }, unlock: ['tamper'], expect: 'reject',
    title: 'Someone edits the passport',
    text: 'The serial number is changed after signing. The signature no longer matches the bytes; this is the only manipulation a signature check alone would catch.' },
  { id: 'borrowed', part: 'manipulate', acts: ['mfr', 'verifier'], state: { unit: 'sn-0050' }, unlock: ['unit'], expect: 'reject',
    title: 'A passport borrows another unit\'s credential',
    text: 'Unit sn-0050 is an HD-02, but its passport cites the GS-mark credential of unit sn-0042. Every credential is genuine and correctly signed; the link between them is not.' },
  { id: 'withheld', part: 'manipulate', acts: ['mfr', 'verifier'], state: { withholdTR: true }, unlock: ['withhold'], expect: 'not_established',
    title: 'The type examination is left out',
    text: 'Nothing shown is false, but the study the certificate rests on is missing. The verifier cannot tell, and "cannot tell" is never accepted.' },
  { id: 'withdraw', part: 'manipulate', acts: ['gsb', 'verifier'], state: { revokeC: true }, unlock: ['revokeC'], expect: 'reject',
    title: 'The GS body withdraws the certificate',
    text: 'It sets one bit in its revocation list and signs the list again, here in your browser. The passport and the mark credential are unchanged, yet the mark no longer holds.' },

  { id: 'surveillance', part: 'decide', acts: ['verifier'], expect: 'accept',
    title: 'Verifier 1: market surveillance',
    text: 'Its profile trusts the accreditation body and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts.' },
  { id: 'abroad', part: 'decide', acts: ['verifier'], state: { trust: 'accreditation-only' }, unlock: ['trust'], expect: 'not_established',
    title: 'Verifier 2: a buyer abroad',
    text: 'The same passport and the same bytes. This verifier trusts the accreditation body but not the scheme owner, so it cannot tell whether the mark was permitted. The verifier\'s policy decides, not the issuer\'s.' },

  { id: 'present', part: 'present', acts: ['mfr', 'verifier'],
    title: 'Show what the question needs, and no more',
    text: 'Not evaluated yet. In a presentation the manufacturer would sign a fresh envelope around the passport for the verifier\'s challenge. With selective disclosure it could reveal only the fields the question needs, each signature still checkable.',
    presentation: [
      { credential: 'Product passport DPP-1', reveal: 'Unit, model and the GS-mark entry', hide: 'Facility, technical and sustainability data' },
      { credential: 'Type examination TR-1', reveal: 'Issuer, model, standards and the outcome', hide: 'In a real report: measurements and design details' },
      { credential: 'Factory inspection FI-1', reveal: 'Issuer, date and the outcome', hide: 'The site identifier' },
      { credential: 'GS certificate GSC-1', reveal: 'Everything: it is the public claim', hide: 'Nothing' },
    ] },

  { id: 'play', part: 'play', acts: ['ab', 'so', 'gsb', 'mfr', 'verifier'],
    unlock: ['revokeA', 'revokeS', 'revokeC', 'unit', 'tamper', 'withhold', 'trust'],
    title: 'Your turn',
    text: 'Every action is live. Revoke the accreditation, the scheme permission or the certificate, show another unit\'s passport, edit or leave out a credential, or change whom the verifier trusts. Each change is evaluated at once.' },
];

export async function evaluateGsBoard(over: Partial<GsBoardState> = {}): Promise<BoardResult<GsBoardState>> {
  const state = { ...GS_DEFAULT, ...over };
  const target = GS_PASSPORT[state.unit];
  const U = GS_BOARD_URI;
  const texts: Record<string, string> = {};
  if (state.revokeA) texts[U.NAB_STATUS] = await resignedList('gs', U.NAB_STATUS, 'nab', U.NAB);
  if (state.revokeS) texts[U.ZLS_STATUS] = await resignedList('gs', U.ZLS_STATUS, 'zls', U.ZLS);
  if (state.revokeC) texts[U.BODY_STATUS] = await resignedList('gs', U.BODY_STATUS, 'gs-body', U.BODY);
  const signedLive = Object.keys(texts);
  // Tamper: change the serial number in the passport's bytes without re-signing.
  if (state.tamper) texts[target] = edited(textOf('gs', target), '-sn-', '-sn-9');
  const r = await evaluate({
    binding: 'gs', profileName: state.trust === 'both' ? 'gs-verifier-dpp-1' : ACCREDITATION_ONLY,
    requestId: 'urn:vc4qi:demonstrator:gs-board', target,
    claims: [{ id: 'mark', sourcePointer: '/credentialSubject/complianceInformation/gsMark' }], supplied: [], texts,
    withheld: state.withholdTR ? U.TR : undefined,
    notAsked: 'The verifier asks only whether the GS-mark entry is authorized; the binding installs no decision rule.',
  });
  const mark = (JSON.parse(textOf('gs', target)) as { evidence: { id: string }[] }).evidence[0]!.id;
  const uris = { 'GS-A': U.A, 'GS-S': U.S, 'TR-1': U.TR, 'FI-1': U.FI, 'GSC-1': U.C, GSM: mark, DPP: target };
  return { ...r, state, certificate: target, uris, signedLive };
}

export const buildInfo = {
  evaluationTime: EVALUATION_TIME,
  bindings: Object.fromEntries(Object.entries(loaded).map(([k, v]) => [k, `${v.manifest.id}@${v.manifest.version}`])),
};
