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
  graph: { nodes: { uri: string; name: string; layer: number; present: boolean }[]; edges: { from: string; to: string; kind: string }[] };
  texts: Record<string, string>;
};
type Api = {
  EXAMPLES: { id: string; cases: { id: string }[] }[];
  evaluateScenario: (o: Record<string, unknown>) => Promise<Result>;
  RM_STORY: { id: string; part: string; issues?: string[]; state?: Record<string, unknown>; expect?: string }[];
  RM_ASSETS: { code: string }[];
  evaluateRmBoard: (o?: Record<string, unknown>) => Promise<Board>;
  GS_STORY: { id: string; part: string; issues?: string[]; state?: Record<string, unknown>; expect?: string }[];
  GS_ASSETS: { code: string }[];
  evaluateGsBoard: (o?: Record<string, unknown>) => Promise<Board>;
};
type Board = Result & { certificate: string; uris: Record<string, string>; signedLive: string[] };
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

  it('GS: GS-mark credential → certificate → accreditation, ZLS authorization and studies; the toy is outside the ZLS scope', async () => {
    for (const caseId of ['in-house', 'external']) {
      const r = await run('gs', caseId);
      expect([r.result.decision, answers(r).supported]).toEqual(['accept', 'established']);
    }
    for (const caseId of ['toy', 'clone', 'mismatch']) {
      const r = await run('gs', caseId);
      expect([caseId, r.result.decision, answers(r).authorized]).toEqual([caseId, 'reject', 'contradicted']);
    }
    // The graph is read from the credentials' references, not drawn by hand.
    const g = (await run('gs', 'in-house')).graph;
    expect(g.nodes.map(n => [n.name, n.layer])).toEqual([['GSM-1', 0], ['GSC-1', 1], ['GS-A', 3], ['GS-S', 2], ['TR-1', 2], ['FI-1', 2]]);
    expect(g.edges.filter(e => e.kind === 'support').map(e => e.to.split('/').pop())).toEqual(['TR-1', 'FI-1']);
  });

  it('DPP: a passport whose GS-mark entry is backed by its unit\'s GS-mark credential is accepted; an early unit cannot be told; a borrowed credential is rejected', async () => {
    const unit = await run('dpp', 'unit');
    expect([unit.result.decision, answers(unit).supported]).toEqual(['accept', 'established']);
    expect(unit.graph.edges.filter(e => e.kind === 'support').map(e => e.to.split('/').pop())).toContain('GSM-1');
    expect((await run('dpp', 'early')).result.decision).toBe('not_established');
    const borrowed = await run('dpp', 'borrowed');
    expect([borrowed.result.decision, answers(borrowed).supported]).toEqual(['reject', 'contradicted']);
  });

  it('DPP: a verifier that trusts the accreditation body only cannot tell', async () => {
    const abroad = await run('dpp', 'unit', { choice: 'accreditation-only' });
    expect([abroad.result.decision, answers(abroad).supported]).toEqual(['not_established', 'not_established']);
    expect((await run('dpp', 'unit', { choice: 'both' })).result.decision).toBe('accept');
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
  it('RM board: the build steps issue every asset once, in issuance order; every evaluated step reaches its decision', async () => {
    const issued = api.RM_STORY.filter(s => s.part === 'build').flatMap(s => s.issues ?? []);
    expect([...issued].sort()).toEqual(api.RM_ASSETS.map(a => a.code).sort());
    const accepted = await api.evaluateRmBoard();
    const uri = (code: string) => code === 'D' ? accepted.certificate : accepted.graph.nodes.find(n => n.name === code)!.uri;
    const validFrom = issued.map(code => (JSON.parse(accepted.texts[uri(code)]!) as { validFrom: string }).validFrom);
    expect(validFrom).toEqual([...validFrom].sort());
    for (const s of api.RM_STORY.filter(x => x.expect !== undefined)) {
      expect([s.id, (await api.evaluateRmBoard(s.state)).result.decision]).toEqual([s.id, s.expect]);
    }
    // Only the design-rules page, the build steps, the proposal page and "Your turn"
    // have no expected decision.
    expect([...new Set(api.RM_STORY.filter(s => s.expect === undefined).map(s => s.part))])
      .toEqual(['rules', 'build', 'proposal', 'play']);
  });

  it('RM board: documents signed in the browser verify like the generated fixtures', async () => {
    // The same value, signed live, is accepted exactly as D178 is.
    const own = await api.evaluateRmBoard({ certificate: 'custom', value: '178', uncertainty: '5' });
    expect([own.result.decision, own.signedLive]).toEqual(['accept', ['https://producer.vc4qi.example/credentials/D-live']]);
    expect(answers(own)).toEqual(answers(await api.evaluateRmBoard()));
    // Method M2 is accredited but outside the producer's operational scope (M1 only).
    expect(answers(await api.evaluateRmBoard({ certificate: 'custom', value: '178', uncertainty: '5', method: 'M2' })).authorized).toBe('not_established');
    expect(answers(await api.evaluateRmBoard({ certificate: 'custom', value: '40', uncertainty: '5' })).authorized).toBe('contradicted');
    // A re-signed status list: a revoked study is not current and no longer supports the certificate.
    const revoked = await api.evaluateRmBoard({ revokeS: true });
    expect([revoked.result.decision, answers(revoked).current, answers(revoked).supported]).toEqual(['reject', 'contradicted', 'contradicted']);
    const suspended = await api.evaluateRmBoard({ suspendA: true });
    expect([suspended.result.decision, answers(suspended).authentic, answers(suspended).authorized]).toEqual(['reject', 'established', 'contradicted']);
    // A root abroad: another accreditation body cannot tell; Global ACI's recognition R, which
    // A and H point up to, bridges it, and suspending R stops a verifier abroad but not one
    // that trusts the accreditation body directly.
    expect((await api.evaluateRmBoard({ trust: 'other' })).result.decision).toBe('not_established');
    expect(answers(await api.evaluateRmBoard({ trust: 'global-aci' }))).toEqual(answers(await api.evaluateRmBoard()));
    expect((await api.evaluateRmBoard({ suspendGaci: true })).result.decision).toBe('accept');
    expect((await api.evaluateRmBoard({ trust: 'global-aci', suspendGaci: true })).signedLive)
      .toEqual(['https://global-aci.vc4qi.example/status/suspension/1']);
    // R is on the chain the graph reads: A and H point up to it.
    expect((await api.evaluateRmBoard()).graph.edges.filter(e => e.to.endsWith('/credentials/R')).map(e => e.from.split('/').pop()).sort()).toEqual(['A', 'H']);
    // Any credential of the chain left out: cannot tell, never accepted.
    for (const code of ['O', 'A', 'S', 'H']) {
      expect([code, (await api.evaluateRmBoard({ withhold: code })).result.decision]).toEqual([code, 'not_established']);
    }
    expect((await api.evaluateRmBoard({ withhold: 'R' })).result.decision).toBe('accept');
    expect((await api.evaluateRmBoard({ trust: 'global-aci', withhold: 'R' })).result.decision).toBe('not_established');
    // The verifier's own limit: D197 passes guarded acceptance under 250, fails 200; D178 fails 180.
    expect((await api.evaluateRmBoard({ certificate: '197', limit: '250' })).result.decision).toBe('accept');
    expect((await api.evaluateRmBoard({ limit: '180' })).result.decision).toBe('reject');
    expect((await api.evaluateRmBoard({ trust: 'global-aci', certificate: '197', limit: '250' })).result.decision).toBe('accept');
    // At issuance: A suspended in September. Today: reject. January asked with today's lists:
    // cannot tell. With the lists kept from January: accept.
    expect((await api.evaluateRmBoard({ suspendA: true })).result.decision).toBe('reject');
    expect((await api.evaluateRmBoard({ suspendA: true, asOf: 'issuance' })).result.decision).toBe('not_established');
    expect((await api.evaluateRmBoard({ suspendA: true, asOf: 'issuance', archive: true })).result.decision).toBe('accept');
    expect((await api.evaluateRmBoard({ suspendA: true, asOf: 'issuance', archive: true })).signedLive).toEqual([]);
    // Editing a live-signed certificate breaks its signature like any other.
    expect(answers(await api.evaluateRmBoard({ certificate: 'custom', value: '178', uncertainty: '5', tamper: true })).authentic).toBe('contradicted');
  });
  it('GS board: the build steps issue every asset once, in issuance order; every evaluated step reaches its decision', async () => {
    const issued = api.GS_STORY.filter(s => s.part === 'build').flatMap(s => s.issues ?? []);
    expect([...issued].sort()).toEqual(api.GS_ASSETS.map(a => a.code).sort());
    const accepted = await api.evaluateGsBoard();
    expect(Object.keys(accepted.uris).sort()).toEqual(api.GS_ASSETS.map(a => a.code).sort());
    const validFrom = issued.map(code => (JSON.parse(accepted.texts[accepted.uris[code]!]!) as { validFrom: string }).validFrom);
    expect(validFrom).toEqual([...validFrom].sort());
    for (const s of api.GS_STORY.filter(x => x.expect !== undefined)) {
      expect([s.id, (await api.evaluateGsBoard(s.state)).result.decision]).toEqual([s.id, s.expect]);
    }
    expect([...new Set(api.GS_STORY.filter(s => s.expect === undefined).map(s => s.part))]).toEqual(['build', 'present', 'play']);
  });

  it('GS board: status lists re-signed in the browser revoke exactly what they name', async () => {
    for (const [over, list] of [[{ revokeA: true }, 'https://nab.vc4qi.example/status/gs/1'],
      [{ revokeS: true }, 'https://zls.vc4qi.example/status/gs/1'], [{ revokeC: true }, 'https://gs-body.vc4qi.example/status/gs/1']] as const) {
      const r = await api.evaluateGsBoard(over);
      expect([r.result.decision, answers(r).authentic, answers(r).supported, r.signedLive]).toEqual(['reject', 'established', 'contradicted', [list]]);
    }
    // A unit placed on the market before its certificate cannot be told.
    expect((await api.evaluateGsBoard({ unit: 'sn-0001' })).result.decision).toBe('not_established');
    // Only the borrowed link fails: every credential in the chain still verifies.
    const borrowed = await api.evaluateGsBoard({ unit: 'sn-0050' });
    const states = borrowed.graph.edges.filter(e => e.from !== borrowed.certificate).map(e => (e as { state?: string }).state);
    expect(states.every(s => s === 'established')).toBe(true);
  });
});
