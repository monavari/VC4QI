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

/**
 * The DCC example's "whom I trust" choice: the case's own profile with the accreditation
 * body's anchor replaced by the state (through its appointment of the body) or Global ACI
 * (through its recognition), taken from the shipped cal-verifier-state-1 and
 * cal-verifier-global-aci-1. Derived here so that every case keeps its own routes; other
 * anchors (the ministry of the NMI case) stay, since that chain does not pass the body.
 */
const NAB_CONTROLLER = 'https://nab.vc4qi.example/controller';
type ProfileJson = { id: string; description: string; trustAnchors: { id: string }[]; bindingRules: Record<string, unknown> };
function trustingRoot(baseName: string, root: 'state' | 'gaci'): string {
  const name = `${baseName} via ${root} (demonstrator)`;
  if (loaded.cal.profiles[name] === undefined) {
    const base = resources.cal.profiles[baseName] as ProfileJson;
    const shipped = resources.cal.profiles[root === 'state' ? 'cal-verifier-state-1' : 'cal-verifier-global-aci-1'] as ProfileJson;
    loaded.cal.profiles[name] = loadRelianceProfile({ ...base, id: `${base.id}-via-${root}`,
      description: `Demonstrator-only variant of ${baseName} that trusts ${root === 'state' ? 'the state' : 'Global ACI'}, not the accreditation body. Fictional.`,
      trustAnchors: [...base.trustAnchors.filter(anchor => anchor.id !== NAB_CONTROLLER), ...shipped.trustAnchors],
      bindingRules: { ...base.bindingRules, ...shipped.bindingRules } });
  }
  return name;
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
  target: `https://producer.vc4qi.example/credentials/RM${x}`,
  claims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }],
  supplied: [], tamper: [`"value": "${x}"`, '"value": "150"'],
  withhold: { uri: 'https://lab.vc4qi.example/credentials/HOM-LOT1', label: 'Withhold the homogeneity study' },
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
    note: 'Certified values and material from the M375a DRMD, each value a PTB D-SI 2.2.1 real (QUDT quantity kind, D-SI unit, expanded uncertainty). Accreditation body, producer, laboratory, scopes, methods and keys are fictional; no real institution issues these credentials. 197 and 520 are hypothetical reissues.' },
  { id: 'dcc', tab: 'DCC', title: 'Calibration certificate',
    intro: 'May I rely on each measurement group of this calibration?',
    caseLabel: 'Issuer',
    cases: DCC_CASES,
    choice: { label: 'The verifier trusts', options: [
      { id: 'nab', label: 'This NAB', sublabel: 'the accreditation body' },
      { id: 'state', label: 'The state', sublabel: 'its appointment, APP-NAB' },
      { id: 'gaci', label: 'Global ACI', sublabel: 'its recognition, REC-NAB' }] },
    note: 'A JSON-LD simplification of a DCC: each result is a PTB D-SI 2.2.1 real, as in the DCC, but not native DCC XML. The accreditation body is the RM example\'s, with the same two roots: the state\'s appointment and Global ACI\'s recognition. All parties and keys are fictional.' },
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
    note: 'An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical data (rated power as a PTB D-SI real) and sustainability data, and compliance information. Its GS-mark entry is supported by the unit\'s GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today\'s GS scheme has no per-unit credential. All parties and keys are fictional.' },
];

// ---------------------------------------------------------------- the credential graph

/** Party labels for the fictional controllers, by host. */
const PARTY: Record<string, string> = {
  nab: 'Accreditation body', producer: 'RM producer', lab: 'Laboratory', ministry: 'Ministry', nmi: 'NMI',
  testlab: 'Test laboratory', zls: 'ZLS role', 'gs-body': 'GS body', maker: 'Manufacturer',
  'testlab-gs': 'Test laboratory', clone: 'Other company', 'global-aci': 'Global ACI (stand-in)', state: 'State',
};
const party = (value: unknown) => {
  // VCDM 2.0 issuer: a string, or an object with an id.
  const iri = value !== null && typeof value === 'object' ? (value as { id?: unknown }).id : value;
  const host = /^https:\/\/([^./]+)\./.exec(String(iri))?.[1];
  return host === undefined ? String(iri).split('#')[0]!.split(':').pop()! : PARTY[host] ?? host;
};
/** Who signs: an authority (grants or recognizes) or an actor (works under a grant), by host. */
const GROUP: Record<string, 'authority' | 'actor'> = {
  nab: 'authority', 'global-aci': 'authority', zls: 'authority', ministry: 'authority', state: 'authority',
  producer: 'actor', lab: 'actor', nmi: 'actor', testlab: 'actor', 'testlab-gs': 'actor', 'gs-body': 'actor', maker: 'actor', clone: 'actor',
};
const groupOf = (value: unknown) => {
  const iri = value !== null && typeof value === 'object' ? (value as { id?: unknown }).id : value;
  return GROUP[/^https:\/\/([^./]+)\./.exec(String(iri))?.[1] ?? ''];
};
const ROLE: Record<string, string> = {
  RmpAccreditation: 'Producer accreditation', LabAccreditation: 'Laboratory accreditation', FlexibleScopeList: 'Operational scope',
  HomogeneityStudy: 'Homogeneity study', RmCertificate: 'RM certificate (DRMD)', RecognizedEntityCredential: 'Recognition of the NAB',
  VerifiableAuthorisationForTrustChain: 'Appointment of the NAB',
  CalAccreditation: 'Accreditation', CalOperationalScope: 'Operational scope', CalLegalMandate: 'Statutory mandate',
  CalCertificate: 'Calibration certificate', CalTestReport: 'Test report',
  GsAccreditation: 'Accreditation', GsSchemeAuthorization: 'Scheme authorization', GsCertificate: 'GS certificate',
  GsTestReport: 'Type examination', GsInspectionReport: 'Factory inspection', GsMarkCredential: 'GS-mark credential', ProductPassport: 'Product passport (DPP)',
};
export interface GraphNode {
  /** `name`: the identifier's last part (A); `code`: what the page shows (ACC-RMP). */
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
 * termsOfUse entry (its id is the credential it names: IssuedUnderPolicy for authority,
 * RecognitionPolicy for recognition) and every evidence entry (support) is followed. Layers are the longest reference path from the target. Node states are the
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
  // termsOfUse is one object or an array (VCDM 2.0); APP's single TrustFrameworkPolicy names law, not a credential.
  const terms = (d: Record<string, unknown> | undefined) =>
    (Array.isArray(d?.termsOfUse) ? d.termsOfUse : d?.termsOfUse ? [d.termsOfUse] : []) as
      { id?: string; type?: string }[];
  const refs = (d: Record<string, unknown> | undefined) => [
    ...terms(d).filter(t => typeof t.id === 'string')
      .map(t => ({ to: t.id!, kind: t.type === 'RecognitionPolicy' ? 'recognition' as const : 'authority' as const, policy: String(t.type ?? 'termsOfUse') })),
    ...((d?.evidence ?? []) as { id?: string; type?: string }[]).filter(e => typeof e.id === 'string')
      .map(e => ({ to: e.id!, kind: 'support' as const, policy: String(e.type ?? 'evidence') })),
  ];
  // An artifact is verified once per use (as the target, as a parent, as evidence); its
  // node shows all of them together, so a failed use is never hidden by a later one.
  const verification = new Map<string, SemanticState>();
  for (const a of result.artifactVerification) {
    const seen = verification.get(a.artifactId);
    verification.set(a.artifactId, seen === undefined ? a.state : semanticAnd([seen, a.state]));
  }
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
    // A credential's code is the last part of its id; its role is its own name, if it has one.
    return { uri, name: short(uri), code: short(uri), role: typeof d?.name === 'string' ? d.name : ROLE[type] ?? (type || 'not supplied'), type, group: d === undefined ? undefined : groupOf(d.issuer),
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
  /** When the verifier asks; EVALUATION_TIME when omitted. */
  readonly evaluationTime?: string;
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
    evaluationTime: e.evaluationTime ?? EVALUATION_TIME,
    activityTime: e.activityTime ?? e.evaluationTime ?? EVALUATION_TIME,
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
    profileName: example.id === 'dcc' && (options.choice === 'state' || options.choice === 'gaci') ? trustingRoot(spec.profile, options.choice)
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
  /** The card's name, when the credential carries none of its own (VCDM `name`). */
  readonly label?: string;
  readonly kind: 'grant' | 'evidence' | 'claim';
  /** The issuer's column, and the row the card sits in. */
  readonly actor: string; readonly row: 1 | 2 | 3;
  /** The actor the credential is about, or `object` for a thing (with `aboutLabel`). */
  readonly about: string; readonly aboutLabel?: string;
  readonly heldBy: string;
  /** A short tag beside the kind, e.g. "proposal" for what the binding proposes rather than reuses. */
  readonly tag?: string;
}
export type BoardPart = 'anatomy' | 'build' | 'verify' | 'manipulate' | 'decide' | 'when' | 'proposal' | 'present' | 'play'
  | 'verifier' | 'trust' | 'time' | 'chain' | 'genuine' | 'fit' | 'whole';
export const BOARD_PARTS: readonly { readonly id: BoardPart; readonly label: string }[] = [
  { id: 'build', label: 'Build the chain' }, { id: 'verify', label: 'Verify' }, { id: 'manipulate', label: 'Manipulate' },
  { id: 'decide', label: 'The verifier decides' }, { id: 'present', label: 'Present' }, { id: 'play', label: 'Your turn' },
];
/**
 * One step of a board story. Actors join one by one as the chain reaches them. Build
 * steps show the credentials issued so far and evaluate nothing; the others evaluate
 * their state, and `expect` is the decision the tests require. `unlock` is the one
 * action the step makes live; the last step makes all live. The presentation step is a
 * placeholder: nothing in it is evaluated. A scenario step offers `scenarios`: one click
 * applies one, and each carries the decision the tests require.
 */
export interface BoardScenario<S> {
  readonly id: string; readonly label: string;
  /** The actor who acts (a column), when, and one line on what happens. */
  readonly who: string; readonly when?: string; readonly note?: string;
  /** How often this happens in practice. */
  readonly likely: 'everyday' | 'occasional' | 'rare';
  readonly state: Partial<S>;
  readonly expect: RelianceResult['decision'];
}
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
  /** In a build step: the issuer rules it applies (numbers into the page's rules), and
   * what in the quality infrastructure it maps to which credential. */
  readonly rules?: readonly number[]; readonly maps?: string;
  /** Scenarios to apply with one click, and whether the step shows a timeline. */
  readonly scenarios?: readonly BoardScenario<S>[]; readonly timeline?: boolean;
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
/** March 2028: RM178 expired on 1 February. Every issuer has published fresh status lists by then. */
export const RM_LATER = '2028-03-15T12:00:00Z';
const LATER_LISTS = { from: '2028-03-01T00:00:00Z', until: '2029-03-01T00:00:00Z' };
/** `list` as its issuer publishes it in March 2028, with `bits` set. */
const laterList = (binding: BindingKey, list: string, name: string, controller: string, bits: readonly number[]) =>
  liveOnce(`${binding}:later:${list}:${bits.join(',')}`, () => signAs(reissueStatusList(textOf(binding, list), bits, LATER_LISTS.from, LATER_LISTS.until),
    name, controller, LATER_LISTS.from, catalogOf(binding), textOf(binding, controller)));
/** Change `from` to `to` in a document's bytes without re-signing. */
const edited = (text: string, from: string, to: string) => text.replace(from, to);

// ---------------------------------------------------------------- the RM board

export type RmActor = BoardActor;
export type RmAsset = BoardAsset;
export type RmStep = BoardStep<RmBoardState>;
export type RmBoardResult = BoardResult<RmBoardState>;
/**
 * The RM story: one credential and its links; the chain, built by five issuer rules; the
 * verifier's profile and its six checks; scenarios in five groups, the top of the chain
 * first; the proposal; the whole chain; and a free sandbox.
 */
export const RM_PARTS: readonly { readonly id: BoardPart; readonly label: string }[] = [
  { id: 'anatomy', label: 'The credential' }, { id: 'build', label: 'Build' }, { id: 'verifier', label: 'The verifier' },
  { id: 'trust', label: 'Whom I trust' }, { id: 'time', label: 'When' }, { id: 'chain', label: 'Complete' },
  { id: 'genuine', label: 'Genuine' }, { id: 'fit', label: 'Fit' },
  { id: 'proposal', label: 'Proposal' }, { id: 'whole', label: 'Whole chain' }, { id: 'play', label: 'Your turn' },
];
const RM_URI = {
  NAB: 'https://nab.vc4qi.example/controller', PRODUCER: 'https://producer.vc4qi.example/controller', LAB: 'https://lab.vc4qi.example/controller',
  A: 'https://nab.vc4qi.example/credentials/ACC-RMP', H: 'https://nab.vc4qi.example/credentials/ACC-LAB',
  O: 'https://producer.vc4qi.example/credentials/LIST-RMP', S: 'https://lab.vc4qi.example/credentials/HOM-LOT1',
  LIVE: 'https://producer.vc4qi.example/credentials/RM-own',
  NAB_STATUS: 'https://nab.vc4qi.example/status/1', SUSPENSION: 'https://nab.vc4qi.example/status/suspension/1',
  LAB_STATUS: 'https://lab.vc4qi.example/status/1', PRODUCER_STATUS: 'https://producer.vc4qi.example/status/1',
  GACI: 'https://global-aci.vc4qi.example/controller', GACI_SUSPENSION: 'https://global-aci.vc4qi.example/status/suspension/1',
  GACI_STATUS: 'https://global-aci.vc4qi.example/status/1', R: 'https://global-aci.vc4qi.example/credentials/REC-NAB',
  STATE: 'https://state.vc4qi.example/controller', STATE_STATUS: 'https://state.vc4qi.example/status/1',
  STATE_SUSPENSION: 'https://state.vc4qi.example/status/suspension/1', APP: 'https://state.vc4qi.example/credentials/APP-NAB',
} as const;
export const RM_ACTORS: readonly BoardActor[] = [
  { id: 'gaci', mono: 'GACI', group: 'authority', name: 'Global ACI', does: 'Recognizes national accreditation bodies after peer evaluation. Can suspend a recognition (rare). A fictional stand-in.',
    publishes: [{ label: 'Key', uri: RM_URI.GACI }, { label: 'Revocation list', uri: RM_URI.GACI_STATUS }, { label: 'Suspension list', uri: RM_URI.GACI_SUSPENSION }] },
  { id: 'state', mono: 'GOV', group: 'authority', name: 'State', does: 'Appoints the national accreditation body by law (Regulation (EC) No 765/2008). A root a verifier may choose; in practice it does not withdraw the appointment. Fictional.',
    publishes: [{ label: 'Key', uri: RM_URI.STATE }, { label: 'Revocation list', uri: RM_URI.STATE_STATUS }, { label: 'Suspension list', uri: RM_URI.STATE_SUSPENSION }] },
  { id: 'ab', mono: 'NAB', group: 'authority', name: 'National accreditation body', does: 'Accredits the producer and the laboratory. Can suspend an accreditation.',
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
 * The code each RM credential shows, by its asset key: the last part of its signed id, which
 * says what it is and of whom (ACC-RMP: the accreditation of the RM producer). Nothing is
 * mapped by hand: change an id in the generator and the code follows.
 */
export const RM_CODES: Readonly<Record<string, string>> = Object.fromEntries(
  (['APP', 'R', 'A', 'H', 'O', 'S'] as const).map(key => [key, short(RM_URI[key])]));
/** D is the certificate shown: RM178, RM197, RM520 or the one signed live. */
export const RM_ASSETS: readonly BoardAsset[] = [
  { code: 'APP', tag: 'EBSI shape', kind: 'grant', actor: 'state', row: 1, about: 'ab', heldBy: 'ab' },
  { code: 'R', tag: 'proposal', kind: 'grant', actor: 'gaci', row: 2, about: 'ab', heldBy: 'ab' },
  { code: 'A', kind: 'grant', actor: 'ab', row: 1, about: 'rmp', heldBy: 'rmp' },
  { code: 'H', kind: 'grant', actor: 'ab', row: 2, about: 'lab', heldBy: 'lab' },
  { code: 'O', kind: 'grant', actor: 'rmp', row: 1, about: 'rmp', heldBy: 'rmp' },
  { code: 'S', kind: 'evidence', actor: 'lab', row: 2, about: 'object', aboutLabel: 'disc lot 1', heldBy: 'rmp' },
  { code: 'D', kind: 'claim', actor: 'rmp', row: 2, about: 'object', aboutLabel: 'disc lot 1', heldBy: 'holder' },
];

export interface RmBoardState {
  /** The producer's certificate: a generated one, or one it signs live. */
  readonly certificate: '178' | '197' | '520' | 'custom';
  readonly value: string; readonly uncertainty: string; readonly method: 'M1' | 'M2';
  readonly suspendA: boolean; readonly revokeS: boolean;
  /** The holder edits a value after signing; or leaves one credential of the chain out ('' for none). */
  readonly tamper: boolean; readonly withhold: '' | 'APP' | 'R' | 'A' | 'H' | 'O' | 'S';
  /** The verifier's root: this accreditation body, the state that appointed it, the Global ACI stand-in (abroad), or another body (abroad). */
  readonly trust: 'ab' | 'state' | 'global-aci' | 'other'; readonly suspendGaci: boolean;
  /** The verifier's question, its rule and its upper limit for As in mg/kg. */
  readonly ask: 'authorized' | 'fit'; readonly rule: 'guarded' | 'simple'; readonly limit: '180' | '200' | '250';
  /** Asked about today, about D's activity on 20 January 2026, or in March 2028 (after RM178
   * expired); and, for January, which status lists answer that. */
  readonly asOf: 'now' | 'issuance' | 'later'; readonly archive: boolean;
}
export const RM_DEFAULT: RmBoardState = {
  certificate: '178', value: '178', uncertainty: '5', method: 'M1', suspendA: false, revokeS: false,
  tamper: false, withhold: '', trust: 'ab', suspendGaci: false, ask: 'fit', rule: 'guarded', limit: '200',
  asOf: 'now', archive: false,
};
/** D178's activity time: the day the material was certified. */
export const RM_ACTIVITY = '2026-01-20T00:00:00Z';
export const RM_STORY: readonly BoardStep<RmBoardState>[] = [
  { id: 'credential', part: 'anatomy', acts: [], panel: 'taxonomy',
    title: 'One credential and its links',
    text: 'Every card in this story is a W3C verifiable credential. A term of use points up to whoever let the issuer issue it; its type says what the link means, and almost every field is a standard one.' },

  { id: 'appoint', part: 'build', acts: ['state', 'ab'], joins: ['state', 'ab'], issues: ['APP'], rules: [1],
    maps: 'National appointment (Regulation (EC) No 765/2008, Art. 4) → VerifiableAuthorisationForTrustChain, GOV → NAB',
    title: 'The state appoints the national accreditation body',
    text: 'By law, one NAB per state. APP-NAB has the shape EBSI uses for the root of a trust chain: its term of use names the law, not another credential.' },
  { id: 'recognize', part: 'build', acts: ['gaci', 'ab'], joins: ['gaci'], issues: ['R'], rules: [1],
    maps: 'Signatory status after peer evaluation → RecognizedEntityCredential, GACI → NAB',
    title: 'Global ACI recognizes the NAB',
    text: 'After peer evaluation, for RM production (ISO 17034) and testing (ISO/IEC 17025). Recognition makes its accreditations accepted abroad; it grants no authority.' },
  { id: 'accredit-producer', part: 'build', acts: ['ab', 'rmp'], joins: ['rmp'], issues: ['A'], rules: [2, 3],
    maps: 'Accreditation to ISO 17034, with its annex → RmpAccreditation, NAB → RMP',
    title: 'The NAB accredits the producer',
    text: 'ACC-RMP names what the producer may certify. It points up to APP-NAB (IssuedUnderPolicy) and REC-NAB (RecognitionPolicy), pinned by digest; both are about the NAB, ACC-RMP’s issuer.' },
  { id: 'accredit-lab', part: 'build', acts: ['ab', 'lab'], joins: ['lab'], issues: ['H'], rules: [2, 3],
    maps: 'Accreditation to ISO/IEC 17025 → LabAccreditation, NAB → LAB',
    title: 'The NAB accredits the laboratory',
    text: 'ACC-LAB names which studies the laboratory may carry out. It points up the same way as ACC-RMP.' },
  { id: 'scope', part: 'build', acts: ['rmp'], issues: ['O'], rules: [2],
    maps: 'The producer’s own scope within its accreditation → FlexibleScopeList, RMP → RMP',
    title: 'The producer declares its operational scope',
    text: 'LIST-RMP is issued under ACC-RMP and must lie within it: As in CuZn39Pb3 discs, method M1.' },
  { id: 'study', part: 'build', acts: ['lab'], issues: ['S'], rules: [2],
    maps: 'Homogeneity study report → HomogeneityStudy, LAB → disc lot 1',
    title: 'The laboratory studies the batch',
    text: 'HOM-LOT1, 10 January 2026: disc lot 1 is homogeneous for As. Issued under ACC-LAB.' },
  { id: 'certify', part: 'build', acts: ['rmp', 'holder'], joins: ['holder'], issues: ['D'], rules: [2, 4, 5],
    maps: 'RM certificate (ISO 17034, shaped after the DRMD, values in PTB D-SI) → RmCertificate, RMP → disc lot 1',
    title: 'The producer certifies and ships',
    text: 'RM178, 20 January 2026: As = 178 ± 5 mg/kg. Issued under LIST-RMP, with HOM-LOT1 beside it as evidence and a bit in the producer’s status list.' },

  { id: 'profile', part: 'verifier', acts: ['verifier'], panel: 'profile',
    title: 'The verifier decides, with its own profile',
    text: 'Issuers state facts. The verifier’s profile says whom it trusts, what it asks, by which rule and about when: what those facts are enough for.' },
  { id: 'checks', part: 'verifier', acts: ['verifier'], panel: 'checks',
    title: 'Six checks, on every credential relied on',
    text: 'Each check is one plain question and one or two of the seven gates. Each answer is yes, no or cannot tell.' },
  { id: 'verify', part: 'verifier', acts: ['holder', 'verifier'], joins: ['verifier'], expect: 'accept',
    title: 'RM178 passes all six',
    text: 'The verifier trusts the NAB and climbs every link from RM178 to it. Its rule: As + U ≤ 200 mg/kg.' },

  { id: 'trust', part: 'trust', acts: ['verifier', 'state', 'gaci', 'ab'],
    title: 'Whom do I trust?',
    text: 'The same RM178, checked by verifiers with different roots. Each root has its own path up the chain; then a change at the top.',
    scenarios: [
      { id: 'nab', who: 'verifier', label: 'A verifier that trusts the NAB', note: 'A customer lab in the same country', likely: 'everyday', state: {}, expect: 'accept' },
      { id: 'state', who: 'verifier', label: 'A verifier that trusts the state', note: 'A market-surveillance authority: it climbs on to APP-NAB', likely: 'everyday', state: { trust: 'state' }, expect: 'accept' },
      { id: 'abroad', who: 'verifier', label: 'A verifier abroad that trusts Global ACI', note: 'REC-NAB tells it to accept the NAB', likely: 'everyday', state: { trust: 'global-aci' }, expect: 'accept' },
      { id: 'other', who: 'verifier', label: 'A verifier that trusts another NAB', note: 'No path reaches its root', likely: 'everyday', state: { trust: 'other' }, expect: 'not_established' },
      { id: 'recognition-suspended', who: 'gaci', label: 'Global ACI suspends its recognition of the NAB', when: '20 Sep 2026', note: 'Checked by the verifier abroad', likely: 'rare',
        state: { trust: 'global-aci', suspendGaci: true }, expect: 'reject' },
    ] },
  { id: 'time', part: 'time', acts: ['verifier', 'ab', 'holder'], timeline: true,
    title: 'Was it valid at that time?',
    text: 'Expiry is written in the credential; suspension must be asked of its issuer, for a date. Each issuer keeps its own dated status lists.',
    scenarios: [
      { id: 'suspended-today', who: 'ab', label: 'The NAB suspends ACC-RMP after a surveillance assessment', when: '20 Sep 2026', note: 'Asked today', likely: 'occasional',
        state: { suspendA: true }, expect: 'reject' },
      { id: 'suspended-january', who: 'ab', label: 'The same suspension, asked about 20 January', when: '20 Sep 2026', note: 'With the NAB’s list from January: RM178 was issued while ACC-RMP held', likely: 'occasional',
        state: { suspendA: true, asOf: 'issuance', archive: true }, expect: 'accept' },
      { id: 'no-old-list', who: 'ab', label: 'The same question, with only today’s list', when: '20 Sep 2026', note: 'A list signed in September cannot say what held in January', likely: 'occasional',
        state: { suspendA: true, asOf: 'issuance' }, expect: 'not_established' },
      { id: 'expired', who: 'holder', label: 'The customer uses the disc in March 2028', when: '15 Mar 2028', note: 'RM178 expired on 1 Feb 2028. Uncommon for a brass disc, common for organic materials', likely: 'rare',
        state: { asOf: 'later' }, expect: 'reject' },
    ] },
  { id: 'chain', part: 'chain', acts: ['verifier', 'holder', 'rmp', 'lab'],
    title: 'Is the chain complete and within scope?',
    text: 'Every link must be shown, pinned and within the grant above it; required evidence must hold.',
    scenarios: [
      { id: 'scope-missing', who: 'holder', label: 'The customer lab forgets to send LIST-RMP', note: 'The verifier cannot see the producer’s scope', likely: 'everyday',
        state: { withhold: 'O' }, expect: 'not_established' },
      { id: 'outside-scope', who: 'rmp', label: 'The producer certifies a lot at 520 mg/kg', note: 'Outside the range in LIST-RMP', likely: 'occasional',
        state: { certificate: '520' }, expect: 'reject' },
      { id: 'study-withdrawn', who: 'lab', label: 'The laboratory withdraws HOM-LOT1 to replace it', when: '20 Sep 2026', note: 'An error found in the study; RM178 must be reissued', likely: 'occasional',
        state: { revokeS: true }, expect: 'reject' },
    ] },
  { id: 'genuine', part: 'genuine', acts: ['verifier', 'holder'],
    title: 'Is it genuine?',
    text: 'The signature covers the exact bytes. Any edit after signing breaks it.',
    scenarios: [
      { id: 'edited', who: 'holder', label: 'Someone changes 178 to 150 in the customer’s copy', note: 'Before an audit', likely: 'rare',
        state: { tamper: true }, expect: 'reject' },
    ] },
  { id: 'fit', part: 'fit', acts: ['verifier', 'rmp'],
    title: 'Is it good enough for me?',
    text: 'The certificate states a value and its uncertainty. The verifier’s own question, rule and limit decide whether it is fit for its use.',
    scenarios: [
      { id: 'guarded', who: 'verifier', label: 'RM197 against a limit of 200, guarded rule', note: '197 + 5 = 202 > 200', likely: 'everyday',
        state: { certificate: '197' }, expect: 'reject' },
      { id: 'simple', who: 'verifier', label: 'RM197, simple rule', note: '197 ≤ 200: the same facts, another rule', likely: 'everyday',
        state: { certificate: '197', rule: 'simple' }, expect: 'accept' },
      { id: 'authorized-only', who: 'verifier', label: 'RM197, asking only whether it is authorized', note: 'No limit is applied', likely: 'everyday',
        state: { certificate: '197', ask: 'authorized' }, expect: 'accept' },
    ] },

  { id: 'proposal', part: 'proposal', acts: ['gaci', 'ab'], panel: 'proposal',
    title: 'Proposal: one recognition per body',
    text: 'One recognition credential per body, named by its accreditations, and dated status lists.' },
  { id: 'reconcile', part: 'proposal', acts: ['gaci', 'ab', 'rmp'], panel: 'reconcile',
    title: 'Recognized Entities and terms of use',
    text: 'One rule for every upward link; its type says grant (IssuedUnderPolicy) or recognition (RecognitionPolicy).' },
  { id: 'whole', part: 'whole', acts: [], panel: 'whole',
    title: 'The whole chain',
    text: 'Every credential, its type and every link with its field and digest, on one page. Numbers mark the issuer rules each link follows.' },

  { id: 'play', part: 'play', acts: ['state', 'gaci', 'ab', 'lab', 'rmp', 'holder', 'verifier'],
    unlock: ['suspendGaci', 'suspend', 'revoke', 'certificate', 'tamper', 'withhold', 'trust', 'ask', 'rule', 'limit', 'asOf', 'archive'],
    title: 'Your turn',
    text: 'Every action is live, labelled with who takes it, when and how likely it is. Change what the verifier trusts, asks and about when.' },
];

const RM_PROFILE = 'rm-verifier-1';
const RM_OTHER_ANCHOR = 'rm-verifier-other-anchor (demonstrator)';
/** The verifier abroad whose only root is the Global ACI stand-in (a binding profile). */
const RM_GLOBAL_ACI = 'rm-verifier-global-aci-1';
/** The verifier whose only root is the state that appointed the body (a binding profile). */
const RM_STATE = 'rm-verifier-state-1';
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
  state.certificate === 'custom' ? RM_URI.LIVE : `https://producer.vc4qi.example/credentials/RM${state.certificate}`;

/** The certificate the producer signs live: D178 with the typed As result, at status index 4. */
function liveCertificate(state: RmBoardState) {
  return liveOnce(`rm:D:${state.value}:${state.uncertainty}:${state.method}`, () => {
    const { proof: _proof, ...d178 } = JSON.parse(rmText('https://producer.vc4qi.example/credentials/RM178')) as Record<string, any>;
    const subject = structuredClone(d178.credentialSubject);
    const as = subject.materialPropertiesList[0].results[0];
    as.methodIri = as.methodIri.replace(/M1$/, state.method);
    // The certified value is a PTB D-SI real: value and expandedMU.valueExpandedMU.
    as.data.quantity.real.value = state.value;
    as.data.quantity.real.measurementUncertaintyUnivariate.expandedMU.valueExpandedMU = state.uncertainty;
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
  // Asked in March 2028: every issuer's list as published then, with what was revoked or
  // suspended in September still set.
  if (state.asOf === 'later') {
    const lists: [string, string, string, boolean][] = [
      [RM_URI.NAB_STATUS, 'nab', RM_URI.NAB, false], [RM_URI.SUSPENSION, 'nab', RM_URI.NAB, state.suspendA],
      [RM_URI.LAB_STATUS, 'lab', RM_URI.LAB, state.revokeS], [RM_URI.PRODUCER_STATUS, 'producer', RM_URI.PRODUCER, false],
      [RM_URI.GACI_STATUS, 'global-aci', RM_URI.GACI, false], [RM_URI.GACI_SUSPENSION, 'global-aci', RM_URI.GACI, state.suspendGaci],
      [RM_URI.STATE_STATUS, 'state', RM_URI.STATE, false], [RM_URI.STATE_SUSPENSION, 'state', RM_URI.STATE, false],
    ];
    const signed = await Promise.all(lists.map(([list, name, controller, set]) => laterList('rm', list, name, controller, set ? [0] : [])));
    lists.forEach(([list], i) => { texts[list] = signed[i]!; });
  }
  const kept = new Set((state.asOf === 'issuance' && state.archive ? resources.rm.archive ?? [] : []).map(list => list.uri));
  const signedLive = Object.keys(texts).filter(uri => !kept.has(uri));
  if (state.tamper) {
    // Change the As value in the bytes the holder shows, without re-signing.
    const text = texts[target] ?? rmText(target);
    const shown = (JSON.parse(text) as any).credentialSubject.materialPropertiesList[0].results[0].data.quantity.real.value as string;
    texts[target] = edited(text, `"value": "${shown}"`, `"value": "${shown === '150' ? '151' : '150'}"`);
  }
  const uris = { APP: RM_URI.APP, R: RM_URI.R, A: RM_URI.A, H: RM_URI.H, O: RM_URI.O, S: RM_URI.S, D: target };
  const root = state.trust === 'ab' ? RM_PROFILE : state.trust === 'state' ? RM_STATE
    : state.trust === 'global-aci' ? RM_GLOBAL_ACI : RM_OTHER_ANCHOR;
  const r = await evaluate({
    binding: 'rm', profileName: state.ask === 'fit' ? rmProfileWithLimit(root, state.limit) : root,
    requestId: 'urn:vc4qi:demonstrator:rm-board', target,
    claims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }], supplied: [], texts,
    withheld: state.withhold ? uris[state.withhold] : undefined,
    activityTime: state.asOf === 'issuance' ? RM_ACTIVITY : state.asOf === 'later' ? RM_LATER : EVALUATION_TIME,
    ...(state.asOf === 'later' ? { evaluationTime: RM_LATER } : {}),
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
  { id: 'ab', mono: 'NAB', group: 'authority', name: 'National accreditation body', does: 'Accredits the GS body for testing and certifying. Can revoke.',
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
    title: 'The NAB is the first party',
    text: 'Before anything is signed it publishes a key, so that anyone can check what it signs, and a status list, so that it can later revoke what it issued.' },
  { id: 'accredit', part: 'build', acts: ['ab', 'gsb'], joins: ['gsb'], issues: ['GS-A'],
    title: 'The NAB accredits the GS body',
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
    text: 'It knows none of the parties in advance and trusts two roots: the NAB and the scheme owner. It follows every reference from the passport up to them before it relies on the GS mark.' },

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
    text: 'Its profile trusts the NAB and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts.' },
  { id: 'abroad', part: 'decide', acts: ['verifier'], state: { trust: 'accreditation-only' }, unlock: ['trust'], expect: 'not_established',
    title: 'Verifier 2: a buyer abroad',
    text: 'The same passport and the same bytes. This verifier trusts the NAB but not the scheme owner, so it cannot tell whether the mark was permitted. The verifier\'s policy decides, not the issuer\'s.' },

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
