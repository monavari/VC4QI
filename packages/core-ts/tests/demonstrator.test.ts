// SPDX-License-Identifier: Apache-2.0
// The shipped browser demonstrator (site/demo/verifier.js, kept current by CI) runs the
// repository evaluators, not a preview: every example and control yields the
// evaluator's own decision and the six questions the page shows. This imports the built
// bundle itself.
import { describe, expect, it } from 'vitest';

(globalThis as { self?: unknown }).self ??= globalThis;
const bundle = new URL('../../../site/demo/verifier.js', import.meta.url).href;
type Result = {
  result: { decision: string };
  questions: { id: string; state: string }[];
  graph: { nodes: { name: string; layer: number; present: boolean }[]; edges: { from: string; to: string; kind: string }[] };
};
type Api = {
  EXAMPLES: { id: string; cases: { id: string }[] }[];
  evaluateScenario: (o: Record<string, unknown>) => Promise<Result>;
};
const api = (await import(bundle)) as Api;
const run = (example: string, caseId: string, over: Record<string, unknown> = {}) =>
  api.evaluateScenario({ example, caseId, tamper: false, withhold: false, ...over });
const answers = (r: Result) => Object.fromEntries(r.questions.map(q => [q.id, q.state]));

describe('the browser demonstrator bundle runs the evaluators', () => {
  it('offers the RM, DCC, GS and DPP examples', () => {
    expect(api.EXAMPLES.map(e => e.id)).toEqual(['rm', 'dcc', 'gs', 'dpp']);
  });

  it('RM: 178 accepted; 197 not fit for use but authorized; 520 outside scope', async () => {
    const accepted = await run('rm', '178', { choice: 'fit' });
    expect(accepted.result.decision).toBe('accept');
    expect(Object.values(answers(accepted)).every(s => s === 'established')).toBe(true);
    const r197 = await run('rm', '197', { choice: 'fit' });
    expect([r197.result.decision, answers(r197).authorized, answers(r197).fit]).toEqual(['reject', 'established', 'contradicted']);
    expect((await run('rm', '197', { choice: 'authorized' })).result.decision).toBe('accept');
    const r520 = await run('rm', '520', { choice: 'fit' });
    expect([r520.result.decision, answers(r520).authorized, answers(r520).fit]).toEqual(['reject', 'contradicted', 'not_asked']);
  });

  it('DCC: every issuer case is accepted under its own profile; a direct-only verifier cannot tell for the others', async () => {
    for (const caseId of ['direct', 'capability', 'nmi', 'report']) {
      expect((await run('dcc', caseId, { choice: 'own' })).result.decision).toBe('accept');
    }
    const report = await run('dcc', 'report', { choice: 'own' });
    expect(answers(report).supported).toBe('established');
    expect(answers(await run('dcc', 'direct', { choice: 'own' })).supported).toBe('not_required');
    for (const caseId of ['capability', 'nmi']) {
      expect((await run('dcc', caseId, { choice: 'direct-only' })).result.decision).toBe('not_established');
    }
  });

  it('GS: mark → certificate → accreditation, ZLS authorization and studies; the toy is outside the ZLS scope', async () => {
    for (const caseId of ['in-house', 'external']) {
      const r = await run('gs', caseId);
      expect([r.result.decision, answers(r).supported]).toEqual(['accept', 'established']);
    }
    const toy = await run('gs', 'toy');
    expect([toy.result.decision, answers(toy).authorized]).toEqual(['reject', 'contradicted']);
    // The graph is read from the credentials' references, not drawn by hand.
    const g = (await run('gs', 'in-house')).graph;
    expect(g.nodes.map(n => [n.name, n.layer])).toEqual([['DPP-1', 0], ['GSC-1', 1], ['GS-A', 3], ['GS-S', 2], ['TR-1', 2], ['FI-1', 2]]);
    expect(g.edges.filter(e => e.kind === 'support').map(e => e.to.split('/').pop())).toEqual(['TR-1', 'FI-1']);
  });

  it('DPP: a valid unit is accepted; an early unit cannot be told; another company is rejected', async () => {
    expect((await run('dpp', 'unit')).result.decision).toBe('accept');
    expect((await run('dpp', 'early')).result.decision).toBe('not_established');
    const clone = await run('dpp', 'clone');
    expect([clone.result.decision, answers(clone).authorized]).toEqual(['reject', 'contradicted']);
  });

  it('RM: the credential graph marks a withheld study as not present', async () => {
    const r = await run('rm', '178', { choice: 'fit', withhold: true });
    expect(r.graph.nodes.find(n => n.name === 'S')?.present).toBe(false);
  });

  it('every example: tampering fails protection, withholding a credential is never accepted', async () => {
    for (const example of api.EXAMPLES) {
      for (const c of example.cases) {
        const tampered = await run(example.id, c.id, { tamper: true });
        expect([tampered.result.decision, answers(tampered).authentic]).toEqual(['reject', 'contradicted']);
        const withheld = await run(example.id, c.id, { withhold: true });
        expect(withheld.result.decision).not.toBe('accept');
      }
    }
  });
});
