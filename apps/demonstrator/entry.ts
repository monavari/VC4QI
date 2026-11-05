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
 * meet a verifier that recognises the accreditation body only.
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

// ---------------------------------------------------------------- the story

export type StoryPart = 'build' | 'verify' | 'manipulate' | 'decide' | 'disclose';
export const STORY_PARTS: readonly { readonly id: StoryPart; readonly label: string }[] = [
  { id: 'build', label: 'Build the chain' }, { id: 'verify', label: 'Verify' }, { id: 'manipulate', label: 'Manipulate' },
  { id: 'decide', label: 'The verifier decides' }, { id: 'disclose', label: 'Selective disclosure' },
];
/**
 * One step of the guided story. Build steps show credentials that already exist, in the
 * order they were issued, as the passport's chain grows; they evaluate nothing. Verify,
 * manipulate and decide steps run a scenario, and `expect` is the decision the tests
 * require of it. The disclosure step is a placeholder: nothing in it is evaluated.
 */
export interface StoryStep {
  readonly id: string;
  readonly part: StoryPart;
  readonly title: string;
  readonly text: string;
  /** Who acts: the issuer and recipient (build) or the verifier (other steps). */
  readonly actor: string;
  /** Build steps: the credentials issued in this step. */
  readonly issues?: readonly string[];
  readonly scenario?: ScenarioOptions;
  readonly expect?: RelianceResult['decision'];
  /** Disclosure placeholder: per credential, what a verifier needs and what could stay hidden. */
  readonly disclosure?: readonly { readonly credential: string; readonly reveal: string; readonly hide: string }[];
}

const GS_CHAIN = {
  A: 'https://nab.vc4qi.example/credentials/GS-A', S: 'https://zls.vc4qi.example/credentials/GS-S',
  FI: 'https://gs-body.vc4qi.example/credentials/FI-1', TR: GS_URI.TR1, C: GS_URI.C1, M: GS_URI.M1,
  P: 'https://maker.vc4qi.example/credentials/DPP-1',
};
const passport = (over: Partial<ScenarioOptions> = {}): ScenarioOptions =>
  ({ example: 'dpp', caseId: 'unit', choice: 'both', tamper: false, withhold: false, ...over });
const SURVEILLANCE = 'Verifier: market surveillance authority (trusts the accreditation body and the scheme owner)';

export const STORY: readonly StoryStep[] = [
  { id: 'accredit', part: 'build', actor: 'Accreditation body → GS body', issues: [GS_CHAIN.A], scenario: passport(),
    title: 'The accreditation body accredits the GS body',
    text: 'It attests competence: testing and certifying toys and household appliances against named standards. It signs with a key published in its controller document, and can suspend the accreditation through its status list.' },
  { id: 'authorize', part: 'build', actor: 'Scheme owner → GS body', issues: [GS_CHAIN.S], scenario: passport(),
    title: 'The scheme owner permits the GS body to award the GS mark',
    text: 'Competence is not permission. A second authority, in the role ZLS has for the GS mark, grants the right to award the mark, for household appliances only.' },
  { id: 'examine', part: 'build', actor: 'GS body → manufacturer', issues: [GS_CHAIN.FI, GS_CHAIN.TR], scenario: passport(),
    title: 'The GS body inspects the factory and examines the type',
    text: 'Two studies: a factory inspection of the plant and a type examination of model HD-01. Each is signed under the GS body\'s accreditation. They support the certificate; they grant nothing.' },
  { id: 'certify', part: 'build', actor: 'GS body → manufacturer', issues: [GS_CHAIN.C], scenario: passport(),
    title: 'The GS body certifies model HD-01',
    text: 'The certificate points to both of its authorities, the accreditation and the scheme permission, and to both studies. Every link is a reference inside a signed credential.' },
  { id: 'mark', part: 'build', actor: 'Manufacturer → product unit sn-0042', issues: [GS_CHAIN.M, GS_CHAIN.P], scenario: passport(),
    title: 'The manufacturer marks the unit and issues its product passport',
    text: 'A GS-mark credential for unit sn-0042, citing the certificate, and a product passport whose compliance information lists the mark. Per-unit credentials are the experimental part: today\'s GS scheme has none.' },

  { id: 'verify', part: 'verify', actor: SURVEILLANCE, scenario: passport(), expect: 'accept',
    title: 'Market surveillance checks the passport',
    text: 'It knows none of the parties in advance and trusts only two roots. It follows every reference from the passport down to them and answers six questions before it relies on the GS mark.' },

  { id: 'tamper', part: 'manipulate', actor: SURVEILLANCE, scenario: passport({ tamper: true }), expect: 'reject',
    title: 'Someone edits the passport',
    text: 'The serial number is changed after signing. The signature no longer matches the bytes. This is the only manipulation a signature check alone catches; the next three pass it.' },
  { id: 'borrowed', part: 'manipulate', actor: SURVEILLANCE, scenario: passport({ caseId: 'borrowed' }), expect: 'reject',
    title: 'A passport borrows another unit\'s credential',
    text: 'Unit sn-0050 is an HD-02, but its passport cites the GS-mark credential of unit sn-0042. Every credential is genuine and correctly signed; the link between them is not.' },
  { id: 'clone', part: 'manipulate', actor: 'Verifier: market surveillance authority, checking a GS-mark credential',
    scenario: { example: 'gs', caseId: 'clone', tamper: false, withhold: false }, expect: 'reject',
    title: 'Another company cites a genuine certificate',
    text: 'A different company issues a GS-mark credential for its own unit and points it at the real HD-01 certificate. The certificate names another manufacturer.' },
  { id: 'toy', part: 'manipulate', actor: 'Verifier: market surveillance authority, checking a GS-mark credential',
    scenario: { example: 'gs', caseId: 'toy', tamper: false, withhold: false }, expect: 'reject',
    title: 'The GS body certifies a toy',
    text: 'The GS body is accredited for toys and its certificate is genuine. But the scheme owner permitted the GS mark for household appliances only, so the mark on the toy is not authorized.' },
  { id: 'withheld', part: 'manipulate', actor: SURVEILLANCE, scenario: passport({ withholdUri: GS_CHAIN.TR }), expect: 'not_established',
    title: 'The type examination is withheld',
    text: 'Nothing presented is false, but the study the certificate rests on is missing. The verifier cannot tell, and "cannot tell" is never accepted.' },

  { id: 'surveillance', part: 'decide', actor: SURVEILLANCE, scenario: passport(), expect: 'accept',
    title: 'Verifier 1: market surveillance',
    text: 'Its profile recognises both the accreditation body and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts.' },
  { id: 'abroad', part: 'decide', actor: 'Verifier: a buyer abroad (trusts the accreditation body only)',
    scenario: passport({ choice: 'accreditation-only' }), expect: 'not_established',
    title: 'Verifier 2: a buyer abroad',
    text: 'The same passport and the same bytes. This verifier recognises the accreditation body but not the scheme owner, so it cannot tell whether the mark was permitted. The verifier\'s policy decides, not the issuer\'s.' },

  { id: 'disclose', part: 'disclose', actor: 'Holder: the manufacturer · Verifier: market surveillance authority',
    title: 'Show what the question needs, and no more',
    text: 'Withholding a whole credential leaves the verifier unable to tell. Selective disclosure would let the holder reveal only the fields the verifier\'s question needs, with each signature still checkable. Mechanisms such as SD-JWT VC, ecdsa-sd-2023 or bbs-2023 would provide it.',
    disclosure: [
      { credential: 'Product passport DPP-1', reveal: 'Unit, model and the GS-mark entry', hide: 'Facility, technical and sustainability data' },
      { credential: 'Type examination TR-1', reveal: 'Issuer, model, standards and the outcome', hide: 'In a real report: measurements and design details' },
      { credential: 'Factory inspection FI-1', reveal: 'Issuer, date and the outcome', hide: 'The site identifier' },
      { credential: 'GS certificate GSC-1', reveal: 'Everything: it is the public claim', hide: 'Nothing' },
    ] },
];

// ---------------------------------------------------------------- the credential graph

/** Party labels for the fictional controllers, by host. */
const PARTY: Record<string, string> = {
  nab: 'Accreditation body', producer: 'RM producer', lab: 'Laboratory', ministry: 'Ministry', nmi: 'NMI',
  testlab: 'Test laboratory', zls: 'ZLS role', 'gs-body': 'GS body', maker: 'Manufacturer',
  'testlab-gs': 'Test laboratory', clone: 'Other company',
};
const party = (iri: unknown) => {
  const host = /^https:\/\/([^./]+)\./.exec(String(iri))?.[1];
  return host === undefined ? String(iri).split('#')[0]!.split(':').pop()! : PARTY[host] ?? host;
};
const ROLE: Record<string, string> = {
  RmAccreditation: 'Accreditation', RmLabAuthority: 'Laboratory authority', RmOperationalScope: 'Operational scope',
  RmStudy: 'Homogeneity study', RmCertificate: 'RM certificate (DRMD)',
  CalAccreditation: 'Accreditation', CalOperationalScope: 'Operational scope', CalLegalMandate: 'Statutory mandate',
  CalCertificate: 'Calibration certificate', CalTestReport: 'Test report',
  GsAccreditation: 'Accreditation', GsSchemeAuthorization: 'Scheme authorization', GsCertificate: 'GS certificate',
  GsTestReport: 'Type examination', GsInspectionReport: 'Factory inspection', GsMarkCredential: 'GS-mark credential', ProductPassport: 'Product passport (DPP)',
};
export interface GraphNode {
  readonly uri: string; readonly name: string; readonly role: string; readonly parties: string;
  readonly layer: number; readonly present: boolean; readonly state: SemanticState; readonly target: boolean;
}
export interface GraphEdge { readonly from: string; readonly to: string; readonly kind: 'authority' | 'support'; readonly state: SemanticState | 'not_required' }
export interface Graph { readonly nodes: readonly GraphNode[]; readonly edges: readonly GraphEdge[] }

/**
 * The graph is read from the credentials themselves: from the target, every
 * termsOfUse authorizationCredential (authority) and evidence entry (support) is
 * followed. Layers are the longest reference path from the target. Node states are the
 * evaluator's per-artifact verification. The target's authority links take the answer
 * to "authorized", links below a study the answer to "supported", and other links the
 * verification of the credential they point to.
 */
function buildGraph(target: string, texts: Record<string, string>, result: RelianceResult,
  authorized: SemanticState, supported: SemanticState | 'not_required'): Graph {
  const docs = new Map<string, Record<string, unknown>>();
  for (const [uri, text] of Object.entries(texts)) { try { docs.set(uri, JSON.parse(text) as Record<string, unknown>); } catch { /* not JSON */ } }
  const refs = (d: Record<string, unknown> | undefined) => [
    ...((d?.termsOfUse ?? []) as { authorizationCredential?: { id?: string } }[])
      .map(t => t.authorizationCredential?.id).filter((x): x is string => typeof x === 'string').map(to => ({ to, kind: 'authority' as const })),
    ...((d?.evidence ?? []) as { id?: string }[]).map(e => e.id).filter((x): x is string => typeof x === 'string')
      .map(to => ({ to, kind: 'support' as const })),
  ];
  const verification = new Map(result.artifactVerification.map(a => [a.artifactId, a.state]));
  const layer = new Map<string, number>([[target, 0]]);
  const underSupport = new Set<string>();
  const edges: GraphEdge[] = [];
  const queue: [string, boolean][] = [[target, false]];
  const seenEdge = new Set<string>();
  while (queue.length > 0) {
    const [uri, viaSupport] = queue.shift()!;
    for (const { to, kind } of refs(docs.get(uri))) {
      const key = `${uri}>${to}`;
      const support = viaSupport || kind === 'support';
      if (!seenEdge.has(key)) {
        seenEdge.add(key);
        // The target's own authority links carry the answer to "authorized"; deeper links
        // show their credential's verification; links below a study carry "supported".
        edges.push({ from: uri, to, kind,
          state: support ? supported : uri === target ? authorized : verification.get(to) ?? 'not_established' });
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
    return { uri, name: short(uri), role: ROLE[type] ?? (type || 'not supplied'), layer: l, present: d !== undefined, target: uri === target,
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
  /** Withhold this credential instead of the case's own (the story's withheld study). */
  readonly withholdUri?: string;
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

export async function evaluateScenario(options: ScenarioOptions): Promise<ScenarioResult> {
  const example = EXAMPLES.find(e => e.id === options.example) ?? EXAMPLES[0]!;
  const spec = example.cases.find(c => c.id === options.caseId) ?? example.cases[0]!;
  const bound = loaded[spec.binding];
  const profileName = example.id === 'dcc' && options.choice === 'direct-only' ? 'cal-verifier-1'
    : example.id === 'dpp' && options.choice === 'accreditation-only' ? ACCREDITATION_ONLY : spec.profile;
  const profile = bound.profiles[profileName]!;
  const conformity = example.id === 'rm' && options.choice !== 'authorized'
    ? { requirementId: 'as-mass-fraction-max-200-mg-per-kg', decisionRuleId: 'guarded-acceptance-expanded-u' } : undefined;
  const withheld = options.withholdUri ?? (options.withhold ? spec.withhold.uri : undefined);

  const texts: Record<string, string> = {};
  const inputs = bound.files
    .filter(file => file.uri !== withheld)
    .map(file => {
      // Tamper test: change the decisive value without re-signing. The catalog pins what
      // is served, so only the signature check can catch the change, and must.
      const text = options.tamper && file.uri === spec.target ? file.text.replace(spec.tamper[0], spec.tamper[1]) : file.text;
      const bytes = new TextEncoder().encode(text);
      texts[file.uri] = text;
      return { uri: file.uri, mediaType: file.mediaType, origin: file.origin, version: file.version,
        bytes, digestSRI: text === file.text ? file.digestSRI : sha384SRI(bytes) };
    });
  const request = createRelianceRequest({
    requestId: `urn:vc4qi:demonstrator:${example.id}:${spec.id}`,
    targetId: spec.target,
    selectedClaims: spec.claims.map(c => ({ ...c })),
    purpose: 'demonstrator',
    binding: { id: bound.manifest.id, version: bound.manifest.version },
    profile: { id: profile.id, version: profile.version },
    trustConfigId: 'https://vc4qi.example/trust/fixture-anchors',
    evaluationTime: EVALUATION_TIME,
    activityTime: EVALUATION_TIME,
    suppliedEvidence: spec.supplied.filter(uri => uri !== withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    ...(conformity ? { conformity } : {}),
  });
  const { result } = await EVALUATORS[spec.binding](request, new StaticResourceCatalog(inputs), bound.manifest, profile);

  const at = (gate: number, test: (e: TraceEntry) => boolean = () => true) =>
    result.trace.filter(e => e.gate === gate && test(e));
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
  const targetUsable = result.artifactVerification.find(a => a.artifactId === spec.target)?.state === 'established';
  const supportState: Answer = support.length > 0 ? semanticAnd(support.map(s => s.state))
    : targetUsable ? 'not_required' : 'not_established';
  const conformityEntries = at(6, e => e.predicate.startsWith('conformity:'));

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
        summary: summarize(understood, all(understood), at(4).map(e => e.reason).join(' ')) },
    { id: 'authorized', state: authorizedState, summary: authorizedSummary,
      details: at(5, e => e.predicate.startsWith('claim-') || e.predicate.startsWith('restriction:') || e.predicate.startsWith('route:')) },
    { id: 'supported', state: supportState,
      summary: support.length > 0 ? support.map(s => s.reasons.join(' ')).join(' ')
        : targetUsable ? 'This claim needs no supporting credential under the selected profile.'
          : 'Not evaluated: the credential did not pass the earlier checks.',
      details: at(6, e => e.predicate.startsWith('support:') || support.some(s => s.obligationId === e.predicate)) },
    result.conformity.requested
      ? { id: 'fit', state: result.conformity.execution === 'not_run' ? 'not_asked' : result.conformity.state, details: conformityEntries,
        summary: result.conformity.reasons.join(' ') }
      : { id: 'fit', state: 'not_asked', details: [],
        summary: example.id === 'rm' ? 'The verifier asked only whether the value is authorized; no limit was applied.'
          : 'This example asks only whether the claim is authorized; the binding installs no decision rule.' },
  ];

  const target = JSON.parse(texts[spec.target]!) as Record<string, unknown>;
  const graph = buildGraph(spec.target, texts, result, authorizedState, supportState);
  return { options, example, spec, profile: profileName, result, questions, target, texts, graph };
}

export const buildInfo = {
  evaluationTime: EVALUATION_TIME,
  bindings: Object.fromEntries(Object.entries(loaded).map(([k, v]) => [k, `${v.manifest.id}@${v.manifest.version}`])),
};
