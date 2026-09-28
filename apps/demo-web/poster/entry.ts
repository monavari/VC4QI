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
} from '../../../packages/core-ts/src/reliance/index.js';
import { evaluateRmSlice } from '../../../packages/core-ts/src/reliance/rm-v1-slice.js';
import { evaluateCalSlice } from '../../../packages/core-ts/src/reliance/cal-v1-slice.js';
import { evaluateGsSlice } from '../../../packages/core-ts/src/reliance/gs-v1-slice.js';

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

// ---------------------------------------------------------------- examples and cases

export interface NodeSpec { readonly uri: string; readonly title: string; readonly subtitle: string; readonly kind: 'acc' | 'ops' | 'sup' | 'dom' }
export interface EdgeSpec { readonly label: string; readonly carrier: string; readonly style: '' | 'dash' | 'dot'; readonly state: 'authorized' | 'supported' | 'present' }
/** Rows alternate nodes and edges; each row has one cell per column (null = empty). */
export type GraphRow = { readonly nodes: readonly (string | null)[] } | { readonly edges: readonly (EdgeSpec | null)[] };

export interface CaseSpec {
  readonly id: string;
  readonly label: string;
  readonly sublabel: string;
  readonly binding: BindingKey;
  readonly profile: string;
  readonly target: string;
  readonly claims: readonly { readonly id: string; readonly sourcePointer: string }[];
  readonly supplied: readonly string[];
  /** The target's decisive value, and the unsigned change the tamper test makes to it. */
  readonly tamper: readonly [string, string];
  readonly withhold: { readonly uri: string; readonly label: string };
  readonly headline: (target: Record<string, unknown>) => string;
  readonly nodes: Readonly<Record<string, NodeSpec>>;
  readonly graph: readonly GraphRow[];
}
export interface ExampleSpec {
  readonly id: 'rm' | 'dcc' | 'gs' | 'dpp';
  readonly tab: string;
  readonly title: string;
  readonly intro: string;
  readonly badge: readonly [string, string];
  readonly caseLabel: string;
  readonly cases: readonly CaseSpec[];
  /** Optional verifier choice: RM asks fit-for-use or not; DCC can restrict accepted routes. */
  readonly choice?: { readonly label: string; readonly options: readonly { readonly id: string; readonly label: string; readonly sublabel: string }[] };
  readonly note: string;
}

const RM = 'https://vc4qi.example/bindings/rm/1#';
const CAL = 'https://vc4qi.example/bindings/cal/1#';
const GS = 'https://vc4qi.example/bindings/gs/1#';
const short = (iri: unknown) => String(iri).split(/[#/:]/).pop() ?? '';
const subjectOf = (d: Record<string, unknown>) => (d.credentialSubject ?? {}) as Record<string, unknown>;
type Group = { quantityKindIri: string; methodIris?: string[]; results: { value: string; unit: string; expandedUncertainty: string }[] };
const groupsOf = (d: Record<string, unknown>) => (subjectOf(d).measurementGroups ?? []) as Group[];
const groupText = (g: Group) => g.results.map(r => `${r.value} ${r.unit} ± ${r.expandedUncertainty} ${r.unit}`).join(', ');

const RM_URI = {
  A: 'https://nab.vc4qi.example/credentials/A', H: 'https://nab.vc4qi.example/credentials/H',
  O: 'https://producer.vc4qi.example/credentials/O', S: 'https://lab.vc4qi.example/credentials/S',
};
const rmNodes = (x: string): Record<string, NodeSpec> => ({
  A: { uri: RM_URI.A, kind: 'acc', title: 'A  Accreditation', subtitle: 'NAB → producer · M1, M2 · 50–500 mg/kg' },
  H: { uri: RM_URI.H, kind: 'acc', title: 'H  Lab authority', subtitle: 'NAB → laboratory · homogeneity studies' },
  O: { uri: RM_URI.O, kind: 'ops', title: 'O  Operational scope', subtitle: 'producer-issued · M1 only · 50–500 mg/kg' },
  S: { uri: RM_URI.S, kind: 'sup', title: 'S  Homogeneity study', subtitle: 'same batch · homogeneous' },
  D: { uri: `https://producer.vc4qi.example/credentials/D${x}`, kind: 'dom', title: 'D  RM certificate', subtitle: `As = ${x} ± 5 mg/kg · M1` },
});
const RM_GRAPH: GraphRow[] = [
  { nodes: ['A', 'H'] },
  { edges: [{ label: 'bounded projection', carrier: 'termsOfUse · O within A', style: '', state: 'authorized' },
    { label: 'laboratory authority', carrier: 'termsOfUse', style: 'dash', state: 'supported' }] },
  { nodes: ['O', 'S'] },
  { edges: [{ label: 'authority use', carrier: 'termsOfUse · claim in scope', style: 'dash', state: 'authorized' },
    { label: 'support', carrier: 'evidence · same batch', style: 'dot', state: 'supported' }] },
  { nodes: ['D', null] },
];
const rmCase = (x: '178' | '197' | '520', sublabel: string): CaseSpec => ({
  id: x, label: `${x} mg/kg`, sublabel, binding: 'rm', profile: 'rm-verifier-1',
  target: `https://producer.vc4qi.example/credentials/D${x}`,
  claims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }],
  supplied: [], tamper: [`"value": "${x}"`, '"value": "150"'],
  withhold: { uri: RM_URI.S, label: 'Withhold the homogeneity study' },
  headline: d => {
    const q = (subjectOf(d).materialPropertiesList as { results: { data: { quantity: { value: string; uncertainty: { expandedUncertainty: string } } } }[] }[])[0]!.results[0]!.data.quantity;
    return `As = ${q.value} ± ${q.uncertainty.expandedUncertainty} mg/kg`;
  },
  nodes: rmNodes(x), graph: RM_GRAPH,
});

const CAL_URI = {
  CA: 'https://nab.vc4qi.example/credentials/CAL-A', DCC1: 'https://lab.vc4qi.example/credentials/DCC-1',
  O: 'https://lab.vc4qi.example/credentials/CAL-O', DCC2: 'https://lab.vc4qi.example/credentials/DCC-2',
  M: 'https://ministry.vc4qi.example/credentials/CAL-M', DCCN: 'https://nmi.vc4qi.example/credentials/DCC-N',
  T: 'https://nab.vc4qi.example/credentials/CAL-T', REPORT: 'https://testlab.vc4qi.example/credentials/REPORT-1',
};
const G = (i: number) => ({ id: `g${i + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${i}` });
const calHeadline = (d: Record<string, unknown>) => groupsOf(d).map((g, i) => `g${i + 1}: ${short(g.quantityKindIri)} ${groupText(g)}`).join(' · ');
const CA_NODE: NodeSpec = { uri: CAL_URI.CA, kind: 'acc', title: 'CAL-A  Accreditation', subtitle: 'NAB → lab · pressure 0–10 MPa · CMC 0.5 kPa' };
const DCC_CASES: CaseSpec[] = [
  { id: 'direct', label: 'Accredited lab', sublabel: 'DCC-1, two groups', binding: 'cal', profile: 'cal-verifier-1',
    target: CAL_URI.DCC1, claims: [G(0), G(1)], supplied: [CAL_URI.CA], tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: CAL_URI.CA, label: 'Withhold the accreditation' }, headline: calHeadline,
    nodes: { CA: CA_NODE, D: { uri: CAL_URI.DCC1, kind: 'dom', title: 'DCC-1  Calibration certificate', subtitle: 'pressure transmitter · 2 groups' } },
    graph: [{ nodes: ['CA'] }, { edges: [{ label: 'authority use', carrier: 'termsOfUse · every group in scope', style: 'dash', state: 'authorized' }] }, { nodes: ['D'] }] },
  { id: 'capability', label: 'Capability scope', sublabel: 'DCC-2 under CAL-O', binding: 'cal', profile: 'cal-verifier-capability-1',
    target: CAL_URI.DCC2, claims: [G(0)], supplied: [CAL_URI.O, CAL_URI.CA], tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: CAL_URI.O, label: 'Withhold the operational scope' }, headline: calHeadline,
    nodes: { CA: CA_NODE,
      O: { uri: CAL_URI.O, kind: 'ops', title: 'CAL-O  Operational scope', subtitle: 'lab-issued · 0–2 MPa · CMC 0.8 kPa' },
      D: { uri: CAL_URI.DCC2, kind: 'dom', title: 'DCC-2  Calibration certificate', subtitle: 'pressure gauge' } },
    graph: [{ nodes: ['CA'] }, { edges: [{ label: 'bounded projection', carrier: 'termsOfUse · O within CA, no widening', style: '', state: 'authorized' }] },
      { nodes: ['O'] }, { edges: [{ label: 'authority use', carrier: 'termsOfUse · claim in O', style: 'dash', state: 'authorized' }] }, { nodes: ['D'] }] },
  { id: 'nmi', label: 'National institute', sublabel: 'DCC-N, statutory mandate', binding: 'cal', profile: 'cal-verifier-nmi-1',
    target: CAL_URI.DCCN, claims: [G(0)], supplied: [CAL_URI.M], tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: CAL_URI.M, label: 'Withhold the mandate' }, headline: calHeadline,
    nodes: { M: { uri: CAL_URI.M, kind: 'acc', title: 'CAL-M  Statutory mandate', subtitle: 'ministry → NMI · 0–100 MPa · no accreditation' },
      D: { uri: CAL_URI.DCCN, kind: 'dom', title: 'DCC-N  Calibration certificate', subtitle: 'transfer standard' } },
    graph: [{ nodes: ['M'] }, { edges: [{ label: 'statutory authority', carrier: 'termsOfUse · claim in mandate', style: 'dash', state: 'authorized' }] }, { nodes: ['D'] }] },
  { id: 'report', label: 'Test report', sublabel: 'REPORT-1 needs DCC-1', binding: 'cal', profile: 'cal-verifier-test-report-1',
    target: CAL_URI.REPORT, claims: [G(0)], supplied: [CAL_URI.T], tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: CAL_URI.DCC1, label: "Withhold the instrument's calibration" }, headline: calHeadline,
    nodes: { T: { uri: CAL_URI.T, kind: 'acc', title: 'CAL-T  Testing accreditation', subtitle: 'NAB → test lab · 0–25 MPa' }, CA: CA_NODE,
      C: { uri: CAL_URI.DCC1, kind: 'sup', title: 'DCC-1  Instrument calibration', subtitle: 'pressure transmitter used in the test' },
      D: { uri: CAL_URI.REPORT, kind: 'dom', title: 'REPORT-1  Test report', subtitle: 'valve pressure test' } },
    graph: [{ nodes: [null, 'CA'] }, { edges: [null, { label: 'calibration authority', carrier: 'termsOfUse · every group in scope', style: 'dash', state: 'supported' }] },
      { nodes: ['T', 'C'] },
      { edges: [{ label: 'authority use', carrier: 'termsOfUse · claim in scope', style: 'dash', state: 'authorized' }, { label: 'support', carrier: 'evidence · same instrument, before the test', style: 'dot', state: 'supported' }] },
      { nodes: ['D', null] }] },
];

const GS_URI = {
  A: 'https://nab.vc4qi.example/credentials/GS-A', S: 'https://scheme.vc4qi.example/credentials/GS-S',
  C1: 'https://gs-body.vc4qi.example/credentials/GSC-1', C2: 'https://gs-body.vc4qi.example/credentials/GSC-2',
};
const gsNodes = (target: string, subtitle: string): Record<string, NodeSpec> => ({
  A: { uri: GS_URI.A, kind: 'acc', title: 'GS-A  Accreditation', subtitle: 'NAB → GS body · toys, household appliances' },
  S: { uri: GS_URI.S, kind: 'acc', title: 'GS-S  Scheme authorization', subtitle: 'scheme owner → GS body · toys only' },
  D: { uri: target, kind: 'dom', title: `${short(target)}  GS certificate`, subtitle },
});
const GS_GRAPH: GraphRow[] = [
  { nodes: ['A', 'S'] },
  { edges: [{ label: 'competence', carrier: 'termsOfUse · category and standards', style: 'dash', state: 'authorized' },
    { label: 'scheme permission', carrier: 'termsOfUse · category', style: 'dash', state: 'authorized' }] },
  { nodes: ['D', null] },
];
const gsHeadline = (d: Record<string, unknown>) => {
  const c = subjectOf(d).certification as { productCategoryIri: string; standardIris?: string[] };
  return `GS mark: ${short(c.productCategoryIri)} against ${(c.standardIris ?? []).map(short).join(', ') || 'no standard'}`;
};
const gsCase = (id: string, label: string, sublabel: string, target: string, standard: string): CaseSpec => ({
  id, label, sublabel, binding: 'gs', profile: 'gs-verifier-1', target,
  claims: [{ id: 'gs', sourcePointer: '/credentialSubject/certification' }], supplied: [GS_URI.A, GS_URI.S],
  tamper: [`${GS}${standard}"`, `${GS}EN-71-3"`], withhold: { uri: GS_URI.S, label: 'Withhold the scheme authorization' },
  headline: gsHeadline, nodes: gsNodes(target, sublabel), graph: GS_GRAPH,
});

const DPP_URI = { P1: 'https://maker.vc4qi.example/credentials/DPP-1', P2: 'https://maker.vc4qi.example/credentials/DPP-2' };
const dppCase = (id: string, label: string, sublabel: string, target: string, certificate: string, model: string): CaseSpec => ({
  id, label, sublabel, binding: 'gs', profile: 'gs-verifier-dpp-1', target,
  claims: [{ id: 'mark', sourcePointer: '/credentialSubject/marking' }], supplied: [],
  tamper: ['-sn-', '-sn-9'], withhold: { uri: certificate, label: 'Withhold the GS certificate' },
  headline: d => `GS mark on unit ${short(subjectOf(d).id)} of model ${short(subjectOf(d).productModelIri)}`,
  nodes: {
    A: gsNodes(certificate, '').A!, S: gsNodes(certificate, '').S!,
    C: { uri: certificate, kind: 'ops', title: `${short(certificate)}  GS certificate`, subtitle: `model ${model} · names the manufacturer` },
    D: { uri: target, kind: 'dom', title: `${short(target)}  Product passport`, subtitle: 'manufacturer-issued · one serialized unit' },
  },
  graph: [
    { nodes: ['A', 'S'] },
    { edges: [{ label: 'competence', carrier: 'termsOfUse · category and standards', style: 'dash', state: 'authorized' },
      { label: 'scheme permission', carrier: 'termsOfUse · category', style: 'dash', state: 'authorized' }] },
    { nodes: ['C', null] },
    { edges: [{ label: 'certified product', carrier: 'termsOfUse · same model, same manufacturer', style: 'dash', state: 'authorized' }, null] },
    { nodes: ['D', null] },
  ],
});

export const EXAMPLES: readonly ExampleSpec[] = [
  { id: 'rm', tab: 'RM', title: 'A reference material you can verify', badge: ['BAM-M375a', 'CuZn39Pb3'],
    intro: 'A certified reference material (arsenic in leaded brass) under an accreditation, the producer\'s operational scope and an independent homogeneity study.',
    caseLabel: 'Certified arsenic mass fraction',
    cases: [rmCase('178', 'certificate'), rmCase('197', 'hypothetical reissue'), rmCase('520', 'hypothetical reissue')],
    choice: { label: 'What the verifier asks', options: [
      { id: 'authorized', label: 'Is it authorized?', sublabel: 'no limit applied' },
      { id: 'fit', label: 'Is it fit for my use?', sublabel: 'As + U ≤ 200 mg/kg' }] },
    note: 'Certified value and material from BAM-M375a. The accreditation body, producer, laboratory, operational scope, methods M1 and M2 and all keys are fictional; BAM does not issue these credentials. The 197 and 520 certificates are hypothetical reissues with their own valid signatures.' },
  { id: 'dcc', tab: 'DCC', title: 'A calibration certificate you can verify', badge: ['DCC', 'pressure'],
    intro: 'Digital calibration certificates and a test report. Each measurement group is a separate claim, covered by one complete scope record, and a reported uncertainty may not be better than the admitted capability.',
    caseLabel: 'Who issued the certificate',
    cases: DCC_CASES,
    choice: { label: "The verifier's profile", options: [
      { id: 'own', label: 'Accepts this route', sublabel: "the case's own profile" },
      { id: 'direct-only', label: 'Direct accreditation only', sublabel: 'cal-verifier-1' }] },
    note: 'A JSON-LD simplification of DCC measurement results, not native DCC XML. The accreditation bodies, laboratories, ministry, institute and all keys are fictional; a mandate here has no legal effect.' },
  { id: 'gs', tab: 'GS', title: 'A GS certificate you can verify', badge: ['GS', 'certification'],
    intro: 'The GS mark relies on two independent grants: the certification body\'s accreditation (competence) AND the scheme owner\'s permission. Neither alone is enough, and both must cover the product.',
    caseLabel: 'Certified product',
    cases: [gsCase('toy', 'Toy', 'GSC-1 · EN 71-1', GS_URI.C1, 'EN-71-1'), gsCase('appliance', 'Hair dryer', 'GSC-2 · EN 60335', GS_URI.C2, 'EN-60335-1')],
    note: '(Competence AND scheme permission) is a fictional profile example, not a universal GS or legal rule. The accreditation body, scheme owner, GS body and all keys are fictional.' },
  { id: 'dpp', tab: 'DPP', title: 'A product passport you can verify', badge: ['DPP', 'one unit'],
    intro: "A manufacturer's passport for one serialized product claims the GS mark. The claim holds only through a GS certificate for that model which names the manufacturer, was in force when the unit was placed on the market, and is itself authorized.",
    caseLabel: 'Product unit',
    cases: [dppCase('toy', 'Toy unit', 'DPP-1 via GSC-1', DPP_URI.P1, GS_URI.C1, 'toy-001'),
      dppCase('appliance', 'Hair dryer unit', 'DPP-2 via GSC-2', DPP_URI.P2, GS_URI.C2, 'hair-dryer-001')],
    note: 'An experimental product passport inside the GS binding, to show reliance on a passport claim; it is not EU Digital Product Passport (ESPR) conformance. The manufacturer, GS body, accreditation body, scheme owner and all keys are fictional.' },
];

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
  readonly headline: string;
  readonly target: Record<string, unknown>;
  readonly texts: Readonly<Record<string, string>>;
  readonly present: Readonly<Record<string, boolean>>;
  readonly protection: Readonly<Record<string, SemanticState>>;
}

const artifactOf = (entry: TraceEntry) => (entry.nodeUse.split('|')[0] ?? '').trim();
const all = (entries: readonly TraceEntry[]): SemanticState =>
  entries.length === 0 ? 'not_established' : semanticAnd(entries.map(e => e.state));
const first = (entries: readonly TraceEntry[], state: SemanticState) => entries.find(e => e.state === state);

export async function evaluateScenario(options: ScenarioOptions): Promise<ScenarioResult> {
  const example = EXAMPLES.find(e => e.id === options.example) ?? EXAMPLES[0]!;
  const spec = example.cases.find(c => c.id === options.caseId) ?? example.cases[0]!;
  const bound = loaded[spec.binding];
  const profileName = example.id === 'dcc' && options.choice === 'direct-only' ? 'cal-verifier-1' : spec.profile;
  const profile = bound.profiles[profileName]!;
  const conformity = example.id === 'rm' && options.choice !== 'authorized'
    ? { requirementId: 'as-mass-fraction-max-200-mg-per-kg', decisionRuleId: 'guarded-acceptance-expanded-u' } : undefined;

  const texts: Record<string, string> = {};
  const inputs = bound.files
    .filter(file => !(options.withhold && file.uri === spec.withhold.uri))
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
    suppliedEvidence: spec.supplied.filter(uri => !(options.withhold && uri === spec.withhold.uri)),
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

  const present: Record<string, boolean> = {};
  const protectionByUri: Record<string, SemanticState> = {};
  for (const node of Object.values(spec.nodes)) {
    present[node.uri] = inputs.some(i => i.uri === node.uri);
    const entries = protection.filter(e => artifactOf(e) === node.uri);
    protectionByUri[node.uri] = entries.length ? all(entries) : 'not_established';
  }
  const target = JSON.parse(texts[spec.target]!) as Record<string, unknown>;
  return { options, example, spec, profile: profileName, result, questions, headline: spec.headline(target), target,
    texts, present, protection: protectionByUri };
}

export const buildInfo = {
  evaluationTime: EVALUATION_TIME,
  bindings: Object.fromEntries(Object.entries(loaded).map(([k, v]) => [k, `${v.manifest.id}@${v.manifest.version}`])),
};
