// SPDX-License-Identifier: Apache-2.0
// The shipped browser demonstrator (site/m375a/verifier.js, kept current by CI) runs
// the repository evaluator, not a preview: each control yields the evaluator's own
// decision and the six questions the page shows. This imports the built bundle itself.
import { describe, expect, it } from 'vitest';

(globalThis as { self?: unknown }).self ??= globalThis;
const bundle = new URL('../../../site/m375a/verifier.js', import.meta.url).href;
type Api = { evaluateScenario: (o: Record<string, unknown>) => Promise<{
  result: { decision: string; conformity: { requested: boolean } };
  questions: { id: string; state: string }[];
  protection: Record<string, string>;
}> };
const api = (await import(bundle)) as Api;
const run = (x: string, over: Record<string, boolean> = {}) =>
  api.evaluateScenario({ x, tamper: false, askFitForUse: true, withholdStudy: false, ...over });
const answers = (r: Awaited<ReturnType<typeof run>>) => Object.fromEntries(r.questions.map(q => [q.id, q.state]));

describe('the browser demonstrator bundle runs the evaluator', () => {
  it('178 is accepted: every question established', async () => {
    const r = await run('178');
    expect(r.result.decision).toBe('accept');
    expect(Object.values(answers(r)).every(s => s === 'established')).toBe(true);
    expect(Object.values(r.protection).every(s => s === 'established')).toBe(true);
  });

  it('197 is authorized but not fit for use; authorization-only accepts it', async () => {
    const fit = await run('197');
    expect(fit.result.decision).toBe('reject');
    expect(answers(fit)).toMatchObject({ authorized: 'established', fit: 'contradicted' });
    const authorizedOnly = await run('197', { askFitForUse: false });
    expect(authorizedOnly.result.decision).toBe('accept');
    expect(answers(authorizedOnly).fit).toBe('not_asked');
  });

  it('520 is outside scope; fitness for use is not asked', async () => {
    const r = await run('520');
    expect(r.result.decision).toBe('reject');
    expect(answers(r)).toMatchObject({ authorized: 'contradicted', fit: 'not_asked' });
  });

  it('a tampered value fails protection and no fact is read', async () => {
    const r = await run('178', { tamper: true });
    expect(r.result.decision).toBe('reject');
    expect(answers(r)).toMatchObject({ authentic: 'contradicted', understood: 'not_established', authorized: 'not_established' });
    expect(r.protection.D).toBe('contradicted');
  });

  it('a withheld study leaves reliance not established, never accepted', async () => {
    const r = await run('178', { withholdStudy: true });
    expect(r.result.decision).toBe('not_established');
    expect(answers(r)).toMatchObject({ supported: 'not_established', authorized: 'established' });
    expect(r.protection.S).toBe('not_established');
  });
});
