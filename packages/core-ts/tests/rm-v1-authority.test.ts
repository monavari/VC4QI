// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { loadRelianceProfile } from '../src/reliance/index.js';
import { composeAuthority, type BasisResult, type RouteResult } from '../src/reliance/rm-v1-authority.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import type { JsonObject } from '../src/types.js';
import {
  catalogWith, json, manifest, profile, profileJson, reissue, request, resign, serialize, URI,
} from './rm-v1-helpers.js';

type Result = Awaited<ReturnType<typeof evaluateRmSlice>>['result'];
const run = (overrides: Record<string, string | null> = {}, req = request(), p = profile) =>
  evaluateRmSlice(req, catalogWith(overrides), manifest, p).then(e => e.result);
const basis = (result: Result, id: string) =>
  result.trace.find(t => t.predicate === `route:operational-scope:${id}`);
const supportBasis = (result: Result, id: string) => result.trace.find(t => t.predicate === `support:${id}`);
const subject = (d: JsonObject) => d.credentialSubject as JsonObject;

describe('I3 authority routes on the signed RM chain', () => {
  it('establishes the operational-scope route D ← O ← A ← NAB with its witnesses', async () => {
    const result = await run();
    for (const id of ['authorizing-reference', 'principal-binding', 'self-maintained-scope', 'activity-permission',
      'maintenance-grant', 'accreditation-grantee', 'projection-permission', 'bounded-projection', 'trust-anchor']) {
      expect(basis(result, id), id).toMatchObject({ gate: 5, state: 'established' });
    }
    expect(basis(result, 'bounded-projection')?.reason).toMatch(/scope-as-m1 ⊆ .*scope-as/);
  });

  it('P06: an operational scope granted to another party is contradicted', async () => {
    const O = json(URI.O);
    subject(O).id = URI.LAB;
    const result = await run(await reissue({ [URI.O]: O }));
    expect(basis(result, 'principal-binding')).toMatchObject({ state: 'contradicted' });
    expect(result.authorization[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });

  it('P06: an accreditation naming another grantee cannot ground the producer\'s scope', async () => {
    const A = json(URI.A);
    subject(A).id = URI.LAB;
    const result = await run(await reissue({ [URI.A]: A }));
    expect(result.trace.filter(t => t.predicate === 'related-resource-integrity').every(t => t.state === 'established')).toBe(true);
    expect(basis(result, 'accreditation-grantee')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('P06: an operational scope with no grantee is blocked with a precise reason', async () => {
    const O = json(URI.O);
    delete subject(O).id;
    const result = await run(await reissue({ [URI.O]: O }));
    const reference = basis(result, 'authorizing-reference');
    expect(reference).toMatchObject({ state: 'contradicted' });
    expect(reference?.reason).toMatch(/required property 'id'/);
    expect(result.decision).toBe('reject');
  });

  it('C08: an accreditation without scope-maintenance permission yields no valid projection', async () => {
    const A = json(URI.A);
    subject(A).permittedActivity = ['https://vc4qi.example/bindings/rm/1#issueRmCertificate'];
    const result = await run(await reissue({ [URI.A]: A }));
    expect(basis(result, 'projection-permission')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('an operational scope wider than its accreditation is not a bounded projection', async () => {
    const O = json(URI.O);
    ((subject(O).scope as JsonObject[])[0]!.range as JsonObject).to = '600';
    const result = await run(await reissue({ [URI.O]: O }));
    expect(basis(result, 'bounded-projection')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('bounded projection compares exact quantities across mg/kg and kg/kg', async () => {
    const O = json(URI.O);
    (subject(O).scope as JsonObject[])[0]!.range = { from: '0.00005', to: '0.0005', unit: 'kg/kg' };
    const result = await run(await reissue({ [URI.O]: O }));
    expect(basis(result, 'bounded-projection')).toMatchObject({ state: 'established' });
    (subject(O).scope as JsonObject[])[0]!.range = { from: '0.00005', to: '0.0005000001', unit: 'kg/kg' };
    const wider = await run(await reissue({ [URI.O]: O }));
    expect(basis(wider, 'bounded-projection')).toMatchObject({ state: 'contradicted' });
  });

  it('V05/V08: evidence alone, or an accreditation found in the bundle but not referenced, grants nothing', async () => {
    const overrides = await reissue({}, d => { delete d.termsOfUse; });
    const result = await run(overrides);
    expect(basis(result, 'authorizing-reference')).toMatchObject({ state: 'not_established' });
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.authorization[0]?.routeWitnessIds).toEqual([]);
    expect(result.support[0]?.state).toBe('established'); // support is not authority
    expect(result.decision).toBe('not_established');
  });

  it('V07: an unrelated authentic credential added to the bundle confers nothing new', async () => {
    const baseline = await run();
    const padded = await run({}, request({ suppliedEvidence: [URI.A, URI.O, URI.S, URI.H,
      'https://producer.vc4qi.example/credentials/D197'] }));
    expect(padded.authorization[0]?.routeWitnessIds).toEqual(baseline.authorization[0]?.routeWitnessIds);
    expect(padded.decision).toBe(baseline.decision);
  });

  it('V04: an unrecognized policy type cannot be issued under the binding and establishes nothing', async () => {
    const D = json(URI.D);
    (D.termsOfUse as JsonObject[])[0]!.type = 'TrustFrameworkPolicy';
    await expect(resign(D)).rejects.toThrow(); // safe mode refuses the undefined term
    const result = await run({ [URI.D]: serialize(D) });
    expect(result.trace.find(t => t.nodeUse.startsWith(`${URI.D} |`) && t.predicate === 'schema'))
      .toMatchObject({ state: 'contradicted' });
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.authorization[0]?.routeWitnessIds).toEqual([]);
  });

  it('an unconfigured anchor for the accreditation purpose leaves authority not established', async () => {
    const p = loadRelianceProfile({ ...profileJson(), trustAnchors: [{ id: URI.NAB, purposes: ['recognize-rm-laboratories'] }] });
    const result = await run({}, request(), p);
    expect(basis(result, 'trust-anchor')).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });
});

describe('I3 required support on the signed RM chain', () => {
  it('C09: a signed study without its own laboratory authority is not established', async () => {
    const S = json(URI.S);
    delete S.termsOfUse;
    const result = await run(await reissue({ [URI.S]: S }));
    expect(supportBasis(result, 'laboratory-authority-reference')).toMatchObject({ state: 'not_established' });
    expect(result.support[0]?.state).toBe('not_established');
  });

  it('C10: a valid, authorized study about another batch contradicts support', async () => {
    const S = json(URI.S);
    subject(S).id = 'urn:vc4qi-example:batch:cuzn39pb3-disc-lot-2';
    const result = await run(await reissue({ [URI.S]: S }));
    expect(supportBasis(result, 'same-batch')).toMatchObject({ state: 'contradicted' });
    expect(supportBasis(result, 'laboratory-binding')).toMatchObject({ state: 'established' });
    expect(result.support[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });

  it('C11: an unavailable study is not established, distinct from C10', async () => {
    const result = await run({ [URI.S]: null }, request({ suppliedEvidence: [URI.A, URI.O, URI.H] }));
    expect(result.support[0]?.state).toBe('not_established');
    expect(result.decision).toBe('not_established');
  });

  it('a laboratory authority that does not cover the study type is contradicted', async () => {
    const H = json(URI.H);
    (subject(H).scope as JsonObject[])[0]!.studyTypeIris = ['https://vc4qi.example/bindings/rm/1#Stability'];
    const result = await run(await reissue({ [URI.H]: H }));
    expect(supportBasis(result, 'study-scope')).toMatchObject({ state: 'contradicted' });
    expect(result.support[0]?.state).toBe('contradicted');
  });

  it('a study made after the certification activity is contradicted', async () => {
    const S = json(URI.S);
    subject(S).activityTime = '2026-01-25T00:00:00Z';
    const result = await run(await reissue({ [URI.S]: S }));
    expect(supportBasis(result, 'study-precedes-certification')).toMatchObject({ state: 'contradicted' });
  });
});

describe('I3 route composition (C01-C07, C16)', () => {
  const b = (state: BasisResult['state']): BasisResult => ({ id: 'b', state, reason: state, sources: [] });
  const r = (id: string, ...states: BasisResult['state'][]): RouteResult =>
    ({ id, state: states.includes('contradicted') ? 'contradicted' : states.every(s => s === 'established') ? 'established' : 'not_established',
      execution: 'executed', bases: states.map(b), chain: [] });

  it('C01/C02: a complete route needs every basis; competence alone is insufficient', () => {
    expect(composeAuthority([], [r('competence-and-scheme', 'established', 'established')], []).state).toBe('established');
    expect(composeAuthority([], [r('competence-and-scheme', 'established', 'not_established')], []).state).toBe('not_established');
  });

  it('C03/C04/C05: OR between complete routes, never between their parts', () => {
    expect(composeAuthority([], [r('x', 'contradicted'), r('y', 'established')], []).state).toBe('established');
    expect(composeAuthority([], [r('x', 'contradicted'), r('y', 'contradicted')], []).state).toBe('contradicted');
    expect(composeAuthority([], [r('x', 'contradicted'), r('y', 'not_established')], []).state).toBe('not_established');
    // Parts of different routes do not combine: x has basis 1, y has basis 2, neither is complete.
    expect(composeAuthority([], [r('x', 'established', 'not_established'), r('y', 'not_established', 'established')], []).state)
      .toBe('not_established');
  });

  it('C06/C07: a global restriction applies outside the OR; with none configured nothing is invented', () => {
    expect(composeAuthority([b('contradicted')], [r('x', 'established'), r('y', 'established')], []).state).toBe('contradicted');
    expect(composeAuthority([], [r('x', 'established')], []).state).toBe('established');
  });

  it('C16: a search stopped by the route budget cannot claim every route was disproved', () => {
    const result = composeAuthority([], [r('x', 'contradicted')], ['y']);
    expect(result.state).toBe('not_established');
    expect(result.reason).toMatch(/budget/);
    expect(composeAuthority([], [], []).state).toBe('not_established'); // no route never authorizes
  });

  it('C16 end to end: with maxRoutes 1 the second permitted route is reported not run', async () => {
    const p = loadRelianceProfile({ ...profileJson(),
      authority: { certificateRoutes: ['direct-accreditation', 'operational-scope'], globalRestrictions: [], maxRoutes: 1 } });
    const result = await run({}, request(), p);
    expect(result.trace.find(t => t.predicate === 'route:operational-scope')).toMatchObject({ execution: 'not_run' });
    expect(result.authorization[0]?.state).toBe('not_established');
  });
});

describe('fixture byte helpers', () => {
  it('re-issuing with no change reproduces the signed D byte for byte', async () => {
    const overrides = await reissue({}, () => {}); // forces D to be re-signed unchanged
    expect(overrides[URI.D]).toBe(serialize(json(URI.D)));
  });
});
