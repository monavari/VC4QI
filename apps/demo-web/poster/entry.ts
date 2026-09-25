// SPDX-License-Identifier: Apache-2.0
// Browser bundle for the BAM-M375a poster page (site/m375a).
//
// Gates 0-3 (structure, resource identity, protection, validity) run the
// repository's own verifyRmArtifact over the exact bytes of the signed RM v1
// fixtures in bindings/experimental/rm-v1. Gates 4-6 use preview-rules.ts, a
// labelled preview of the I3/I4 rules that the repository does not implement yet.
// Everything is local: resources are embedded at build time, nothing is fetched.
import resources from 'virtual:rm-v1-resources';
import {
  loadBindingManifest, semanticAnd, sha384SRI, StaticResourceCatalog,
} from '../../../packages/core-ts/src/reliance/index.js';
import {
  verifyRmArtifact, type RmArtifactVerification,
} from '../../../packages/core-ts/src/reliance/rm-v1-artifacts.js';
import type { SemanticState } from '../../../packages/core-ts/src/reliance/types.js';
import { previewConformity, previewRules, type RuleResult } from './preview-rules.js';

export type Role = 'A' | 'H' | 'O' | 'S' | 'D';
export const URI: Record<Exclude<Role, 'D'>, string> = {
  A: 'https://nab.vc4qi.example/credentials/A',
  H: 'https://nab.vc4qi.example/credentials/H',
  O: 'https://producer.vc4qi.example/credentials/O',
  S: 'https://lab.vc4qi.example/credentials/S',
};
export const certificateUri = (x: string) => `https://producer.vc4qi.example/credentials/D${x}`;
export const ANCHORS = ['https://nab.vc4qi.example/controller'] as const;
export const LIMIT = '200';
export const TAMPERED_VALUE = '150';

const manifest = loadBindingManifest(resources.manifest);

export interface GateResult {
  readonly gate: number;
  readonly name: string;
  readonly source: 'repository' | 'preview' | 'not-implemented';
  readonly state: SemanticState | 'not_run';
  readonly checks: readonly (RuleResult & { readonly role?: Role })[];
}

export interface ScenarioResult {
  readonly x: string;
  readonly tampered: boolean;
  readonly documents: Readonly<Record<Role, unknown>>;
  readonly texts: Readonly<Record<Role, string>>;
  readonly artifacts: Readonly<Record<Role, RmArtifactVerification>>;
  readonly gates: readonly GateResult[];
  readonly protection: SemanticState;
  readonly scope: RuleResult | undefined;
  readonly conformity: (RuleResult & { run: boolean }) | undefined;
  readonly verdict: 'accept' | 'reject' | 'not_established';
  readonly failedGate: number | undefined;
  readonly values: { readonly x: string; readonly U: string };
}

const CHECK_GATE: Record<string, number> = {
  resolve: 1, parse: 0, carrier: 0, type: 0, schema: 0, proof: 2, key: 2, signature: 2,
};

/** Evaluate one scenario with fresh, request-local catalog sessions. */
export async function evaluateScenario(x: '178' | '197' | '520', tamper: boolean, evaluationTime: string): Promise<ScenarioResult> {
  const targetUri = certificateUri(x);
  const overrides = new Map<string, string>();
  if (tamper) {
    const original = resources.files.find(f => f.uri === targetUri)!.text;
    overrides.set(targetUri, original.replace(`"value": "${x}"`, `"value": "${TAMPERED_VALUE}"`));
  }
  const inputs = resources.files.map(file => {
    const text = overrides.get(file.uri) ?? file.text;
    const bytes = new TextEncoder().encode(text);
    // A changed file is installed as-is: the catalog pins what is served; the
    // signature check is what must catch the change.
    return {
      uri: file.uri, mediaType: file.mediaType, origin: file.origin, version: file.version,
      bytes, digestSRI: overrides.has(file.uri) ? sha384SRI(bytes) : file.digestSRI,
    };
  });
  const catalog = new StaticResourceCatalog(inputs);
  const uris: Record<Role, string> = { ...URI, D: targetUri };
  const roles: Role[] = ['D', 'O', 'A', 'S', 'H'];
  const artifacts = {} as Record<Role, RmArtifactVerification>;
  const texts = {} as Record<Role, string>;
  const documents = {} as Record<Role, unknown>;
  for (const role of roles) {
    const session = catalog.openSession({ maxResources: 64, maxBytes: 2_000_000 });
    artifacts[role] = await verifyRmArtifact(uris[role], session, { manifest, evaluationTime });
    texts[role] = new TextDecoder().decode(inputs.find(i => i.uri === uris[role])!.bytes);
    documents[role] = JSON.parse(texts[role]);
  }

  // Gates 0-3 from the repository verifier, per artifact.
  const repoChecks: Record<number, (RuleResult & { role: Role })[]> = { 0: [], 1: [], 2: [], 3: [] };
  for (const role of roles) {
    const artifact = artifacts[role];
    for (const check of artifact.checks) {
      repoChecks[CHECK_GATE[check.check]!]!.push({ role, state: check.state, text: `${role}: ${check.check} — ${check.reason}` });
    }
    for (const related of artifact.relatedResources) {
      repoChecks[1]!.push({ role, state: related.state, text: `${role} → ${related.id.split('/').pop()}: ${related.reason}` });
    }
    if (artifact.validity.execution === 'executed') {
      repoChecks[3]!.push({ role, state: artifact.validity.state, text: `${role}: ${artifact.validity.reasons.join(' ')}` });
    }
  }
  const stateOf = (list: readonly RuleResult[]) => list.length ? semanticAnd(list.map(c => c.state)) : 'not_established' as const;
  const protection = semanticAnd(roles.map(role => artifacts[role].protection.state));
  const gates: GateResult[] = [
    { gate: 0, name: 'Plan and structure', source: 'repository', state: stateOf(repoChecks[0]!), checks: repoChecks[0]! },
    { gate: 1, name: 'Resource identity', source: 'repository', state: stateOf(repoChecks[1]!), checks: repoChecks[1]! },
    { gate: 2, name: 'Protection', source: 'repository', state: stateOf(repoChecks[2]!), checks: repoChecks[2]! },
    { gate: 3, name: 'Temporal applicability', source: 'repository',
      state: repoChecks[3]!.length === roles.length ? stateOf(repoChecks[3]!) : 'not_established',
      checks: repoChecks[3]!.length ? repoChecks[3]! : [{ state: 'not_established', text: 'Not evaluated: protection is not established.' }] },
  ];

  const lower = semanticAnd(gates.map(g => g.state as SemanticState));
  let scope: RuleResult | undefined;
  let conformity: (RuleResult & { run: boolean }) | undefined;
  const d = documents.D as { credentialSubject: { materialPropertiesList: { results: { data: { quantity: { value: string; uncertainty: { expandedUncertainty: string } } } }[] }[] } };
  const q = d.credentialSubject.materialPropertiesList[0]!.results[0]!.data.quantity;
  if (protection === 'established') {
    const p = previewRules({ ...(documents as Record<Role, Record<string, unknown>>), anchors: ANCHORS });
    scope = p.scope;
    const authorityState = semanticAnd([...p.authority, p.scope].map(r => r.state));
    const prerequisites = semanticAnd([lower, ...[...p.mapping, ...p.authority, p.scope, ...p.support].map(r => r.state)]);
    conformity = previewConformity(p.x, p.U, LIMIT, prerequisites);
    gates.push(
      { gate: 4, name: 'Meaning and mapping', source: 'preview', state: stateOf(p.mapping), checks: p.mapping },
      { gate: 5, name: 'Authority and scope', source: 'preview', state: authorityState, checks: [...p.authority, p.scope] },
      { gate: 6, name: 'Support and decision', source: 'preview',
        state: semanticAnd([...p.support.map(r => r.state), conformity.run ? conformity.state : 'not_established']),
        checks: [...p.support, conformity.run ? conformity : { state: 'not_established', text: `Decision ${conformity.text}` }] },
    );
  } else {
    for (const [gate, name] of [[4, 'Meaning and mapping'], [5, 'Authority and scope'], [6, 'Support and decision']] as const) {
      gates.push({ gate, name, source: 'preview', state: 'not_run',
        checks: [{ state: 'not_established', text: 'Not asked: protection is not established, so no facts are read.' }] });
    }
  }
  const states = gates.map(g => (g.state === 'not_run' ? 'not_established' : g.state) as SemanticState);
  const verdict = states.includes('contradicted') ? 'reject'
    : states.every(s => s === 'established') ? 'accept' : 'not_established';
  const failedGate = gates.find(g => g.state === 'contradicted')?.gate;
  return {
    x, tampered: tamper, documents, texts, artifacts, gates, protection, scope, conformity, verdict, failedGate,
    values: { x: q.value, U: q.uncertainty.expandedUncertainty },
  };
}

export const buildInfo = { binding: `${manifest.id}@${manifest.version}`, resources: resources.files.length };
