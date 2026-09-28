// SPDX-License-Identifier: Apache-2.0
// Browser bundle for the BAM-M375a demonstrator (site/m375a).
//
// The page runs the repository's own standards-first evaluator, evaluateRmSlice, on
// the exact bytes of the signed RM v1 fixtures in bindings/experimental/rm-v1. All
// seven gates are the repository code; nothing is previewed or simulated. Everything
// is local: resources are embedded at build time and nothing is fetched.
import resources from 'virtual:rm-v1-resources';
import {
  createRelianceRequest, loadBindingManifest, loadRelianceProfile, semanticAnd, sha384SRI, StaticResourceCatalog,
  type RelianceResult, type SemanticState, type TraceEntry,
} from '../../../packages/core-ts/src/reliance/index.js';
import { evaluateRmSlice } from '../../../packages/core-ts/src/reliance/rm-v1-slice.js';

export type Role = 'D' | 'O' | 'A' | 'S' | 'H';
export const URI: Record<Exclude<Role, 'D'>, string> = {
  A: 'https://nab.vc4qi.example/credentials/A',
  H: 'https://nab.vc4qi.example/credentials/H',
  O: 'https://producer.vc4qi.example/credentials/O',
  S: 'https://lab.vc4qi.example/credentials/S',
};
export const certificateUri = (x: string) => `https://producer.vc4qi.example/credentials/D${x}`;
export const TAMPERED_VALUE = '150';
/**
 * The fixed evaluation instant. Status lists carry a freshness window, so a static page
 * evaluated at "now" would eventually (and correctly) report stale status. The page
 * therefore asks its question as of the fixtures' reference time and says so.
 */
export const EVALUATION_TIME = '2026-09-25T12:00:00Z';
export const CONFORMITY = { requirementId: 'as-mass-fraction-max-200-mg-per-kg', decisionRuleId: 'guarded-acceptance-expanded-u' } as const;
const SELECTED = '/credentialSubject/materialPropertiesList/0/results/0';

const manifest = loadBindingManifest(resources.manifest);
const profile = loadRelianceProfile(resources.profile);

export type Question = 'authentic' | 'current' | 'understood' | 'authorized' | 'supported' | 'fit';
export type Answer = SemanticState | 'not_asked';
export interface QuestionResult {
  readonly id: Question;
  readonly state: Answer;
  readonly summary: string;
  readonly details: readonly TraceEntry[];
}
export interface ScenarioOptions {
  readonly x: '178' | '197' | '520';
  readonly tamper: boolean;
  readonly askFitForUse: boolean;
  readonly withholdStudy: boolean;
}
export interface ScenarioResult {
  readonly options: ScenarioOptions;
  readonly result: RelianceResult;
  readonly questions: readonly QuestionResult[];
  readonly documents: Readonly<Partial<Record<Role, Record<string, unknown>>>>;
  readonly texts: Readonly<Partial<Record<Role, string>>>;
  readonly protection: Readonly<Partial<Record<Role, SemanticState>>>;
  readonly values: { readonly x: string; readonly U: string };
}

const artifactOf = (entry: TraceEntry) => (entry.nodeUse.split('|')[0] ?? '').trim();
const all = (entries: readonly TraceEntry[]): SemanticState =>
  entries.length === 0 ? 'not_established' : semanticAnd(entries.map(e => e.state));
const first = (entries: readonly TraceEntry[], state: SemanticState) => entries.find(e => e.state === state);

/** Evaluate one scenario with a fresh catalog; the request is built exactly as in the tests. */
export async function evaluateScenario(options: ScenarioOptions): Promise<ScenarioResult> {
  const targetUri = certificateUri(options.x);
  const uris: Record<Role, string> = { ...URI, D: targetUri };
  const texts: Partial<Record<Role, string>> = {};
  const inputs = resources.files
    .filter(file => !(options.withholdStudy && file.uri === URI.S))
    .map(file => {
      let text = file.text;
      // Tamper test: change the value without re-signing. The catalog pins what is
      // served, so only the signature check can catch the change, and must.
      if (options.tamper && file.uri === targetUri) text = text.replace(`"value": "${options.x}"`, `"value": "${TAMPERED_VALUE}"`);
      const bytes = new TextEncoder().encode(text);
      return { uri: file.uri, mediaType: file.mediaType, origin: file.origin, version: file.version,
        bytes, digestSRI: text === file.text ? file.digestSRI : sha384SRI(bytes) };
    });
  for (const role of Object.keys(uris) as Role[]) {
    const input = inputs.find(i => i.uri === uris[role]);
    if (input) texts[role] = new TextDecoder().decode(input.bytes);
  }
  const request = createRelianceRequest({
    requestId: `urn:vc4qi:demonstrator:${options.x}`,
    targetId: targetUri,
    selectedClaims: [{ id: 'as', sourcePointer: SELECTED }],
    purpose: 'use-as-calibrant',
    binding: { id: manifest.id, version: manifest.version },
    profile: { id: profile.id, version: profile.version },
    trustConfigId: 'https://vc4qi.example/trust/fixture-nab-anchor',
    evaluationTime: EVALUATION_TIME,
    activityTime: EVALUATION_TIME,
    suppliedEvidence: [],
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    ...(options.askFitForUse ? { conformity: CONFORMITY } : {}),
  });
  const { result } = await evaluateRmSlice(request, new StaticResourceCatalog(inputs), manifest, profile);

  const at = (gate: number, test: (e: TraceEntry) => boolean = () => true) =>
    result.trace.filter(e => e.gate === gate && test(e));
  const identity = [...at(1)];
  const protection = at(2);
  const authentic = [...protection, ...identity];
  const current = at(3);
  const understood = [...at(0), ...at(4)];
  const authorization = result.authorization[0]!;
  const authorizedDetails = at(5, e => e.predicate.startsWith('claim-') || e.predicate.startsWith('restriction:')
    || e.predicate.startsWith('route:'));
  const support = result.support[0];
  const supportDetails = at(6, e => e.predicate.startsWith('support:') || e.predicate === 'rm-v1:required-study');
  const conformityEntries = at(6, e => e.predicate.startsWith('conformity:'));

  const summarize = (entries: readonly TraceEntry[], state: SemanticState, ok: string) =>
    state === 'established' ? ok : (first(entries, state) ?? first(entries, 'not_established'))?.reason ?? 'Not evaluated.';
  const questions: QuestionResult[] = [
    { id: 'authentic', state: all(authentic), details: authentic,
      summary: summarize(authentic, all(authentic), 'Every credential is signed by its issuer\'s own key, and every reference matches the exact bytes.') },
    { id: 'current', state: all(current), details: current,
      summary: summarize(current, all(current), 'Every credential is within its validity period and not revoked.') },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    at(4).length === 0
      ? { id: 'understood', state: all(at(0)) === 'contradicted' ? 'contradicted' : 'not_established', details: understood,
        summary: summarize(at(0), all(at(0)), 'The claim was not read, because its credential did not pass the earlier checks.') }
      : { id: 'understood', state: all(understood), details: understood,
        summary: summarize(understood, all(understood), at(4)[0]!.reason) },
    { id: 'authorized', state: authorization.state, details: authorizedDetails,
      summary: authorization.reasons.join(' ') },
    { id: 'supported', state: support?.state ?? 'not_established', details: supportDetails,
      summary: support?.reasons.join(' ') ?? 'No support was evaluated.' },
    result.conformity.requested
      ? { id: 'fit', state: result.conformity.execution === 'not_run' ? 'not_asked' : result.conformity.state, details: conformityEntries,
        summary: result.conformity.reasons.join(' ') }
      : { id: 'fit', state: 'not_asked', details: [], summary: 'The verifier asked only whether the value is authorized; no limit was applied.' },
  ];

  const documents: Partial<Record<Role, Record<string, unknown>>> = {};
  const protectionByRole: Partial<Record<Role, SemanticState>> = {};
  for (const role of Object.keys(uris) as Role[]) {
    if (texts[role]) documents[role] = JSON.parse(texts[role]!) as Record<string, unknown>;
    const entries = protection.filter(e => artifactOf(e) === uris[role]);
    protectionByRole[role] = entries.length ? all(entries) : 'not_established';
  }
  const d = documents.D as { credentialSubject: { materialPropertiesList: { results: { data: { quantity: { value: string; uncertainty: { expandedUncertainty: string } } } }[] }[] } };
  const q = d.credentialSubject.materialPropertiesList[0]!.results[0]!.data.quantity;
  return { options, result, questions, documents, texts, protection: protectionByRole,
    values: { x: q.value, U: q.uncertainty.expandedUncertainty } };
}

export const buildInfo = {
  binding: `${manifest.id}@${manifest.version}`,
  profile: `${profile.id}@${profile.version}`,
  resources: resources.files.length,
  evaluationTime: EVALUATION_TIME,
};
