// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { loadRelianceProfile } from '../src/reliance/index.js';
import { composeAuthority, type BasisResult, type RouteResult } from '../src/reliance/rm-v1-authority.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import type { JsonObject } from '../src/types.js';
import {
  catalogWith, json, manifest, profile, profileJson, reissue, request, resign, serialize, statusListWith,
  twoRouteProfile, URI,
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

describe('I3 signed route composition under the two-route profile (C01-C07)', () => {
  const twoRoutes = (overrides: Record<string, string | null> = {}) => run(overrides,
    request({ profile: { id: twoRouteProfile.id, version: twoRouteProfile.version } }), twoRouteProfile);
  /** D re-issued citing both O (operational-scope route) and A2 (direct-accreditation route). */
  const citingA2 = (changed: Record<string, JsonObject> = {}) => reissue(changed, d => {
    (d.termsOfUse as JsonObject[]).push({ type: 'RmAuthorizationPolicy',
      authorizationCredential: { id: URI.A2, type: 'RmAccreditation' } });
  });
  const trace = (result: Result, predicate: string) => result.trace.find(t => t.predicate === predicate);
  const grantedToLab = (uri: string) => { const d = json(uri); subject(d).id = URI.LAB; return d; };

  it('C01: every basis of a complete route established establishes it, and the restriction holds', async () => {
    const result = await twoRoutes(await citingA2());
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'established' });
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'established' });
    expect(trace(result, 'restriction:accreditation-suspension')).toMatchObject({ state: 'established' });
    // The restriction covers both of the actor's accreditations reached, on either route.
    expect([...trace(result, 'restriction:accreditation-suspension')!.sources].sort()).toEqual([URI.A, URI.A2].sort());
    expect(trace(result, 'authority')).toMatchObject({ state: 'established' });
  });

  it('C02: a scope without its accreditation grant is not enough (one basis alone never authorizes)', async () => {
    const O = json(URI.O);
    delete O.termsOfUse;
    const result = await run(await reissue({ [URI.O]: O }));
    expect(basis(result, 'maintenance-grant')).toMatchObject({ state: 'not_established' });
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'not_established' });
    expect(trace(result, 'authority')).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('C03: one route contradicted and another complete route established authorizes', async () => {
    const result = await twoRoutes(await citingA2({ [URI.O]: grantedToLab(URI.O) }));
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'established' });
    expect(trace(result, 'authority')).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.routeWitnessIds).toEqual(['route:direct-accreditation', URI.D, URI.A2]);
    expect(result.decision).toBe('not_established'); // claim scope (I4) is still pending, never reject
  });

  it('C04: every permitted route contradicted rejects', async () => {
    const overrides = await citingA2({ [URI.O]: grantedToLab(URI.O) });
    overrides[URI.A2] = await resign(grantedToLab(URI.A2));
    const result = await twoRoutes(overrides);
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'authority')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('C05: one route contradicted and another unresolved is not established', async () => {
    const overrides = await citingA2({ [URI.O]: grantedToLab(URI.O) });
    overrides[URI.A2] = null;
    const result = await twoRoutes(overrides);
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'not_established' });
    expect(trace(result, 'authority')).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('C06: a suspension of the actor\'s accreditation rejects although another route is complete', async () => {
    const overrides = await citingA2();
    overrides[URI.NAB_SUSPENSION] = await statusListWith(URI.NAB_SUSPENSION, [2]); // A2 suspended
    const result = await twoRoutes(overrides);
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'established' });
    expect(trace(result, 'restriction:accreditation-suspension')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'restriction:accreditation-suspension')?.reason).toMatch(/A2: Suspended/);
    expect(trace(result, 'authority')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('C06: the single-route profile applies the same restriction', async () => {
    const result = await run({ [URI.NAB_SUSPENSION]: await statusListWith(URI.NAB_SUSPENSION, [0]) }); // A suspended
    expect(basis(result, 'trust-anchor')).toMatchObject({ state: 'established' });
    expect(trace(result, 'restriction:accreditation-suspension')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('C07: a revoked, unused alternative is diagnostic, not an invented suspension', async () => {
    const overrides = await citingA2();
    overrides[URI.NAB_STATUS] = await statusListWith(URI.NAB_STATUS, [2]); // A2 revoked
    const result = await twoRoutes(overrides);
    expect(result.trace.find(t => t.nodeUse.startsWith(`${URI.A2} |`) && t.predicate === 'credential-status'))
      .toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'restriction:accreditation-suspension')).toMatchObject({ state: 'established' });
    expect(trace(result, 'authority')).toMatchObject({ state: 'established' });
    expect(result.decision).toBe('not_established'); // A2's revocation does not reject the request
  });

  it('a suspension status that cannot be read never lets the restriction hold', async () => {
    const result = await run({ [URI.NAB_SUSPENSION]: null });
    expect(trace(result, 'restriction:accreditation-suspension')).toMatchObject({ state: 'not_established' });
    expect(trace(result, 'authority')).toMatchObject({ state: 'not_established' });
  });

  it('a reference whose declared type does not match the credential is contradicted', async () => {
    const result = await run(await reissue({}, d => {
      ((d.termsOfUse as JsonObject[])[0]!.authorizationCredential as JsonObject).id = URI.A2;
    }), request({ suppliedEvidence: [URI.A, URI.O, URI.S, URI.H, URI.A2] }));
    expect(basis(result, 'authorizing-reference')).toMatchObject({ state: 'contradicted' });
    expect(basis(result, 'authorizing-reference')?.reason).toMatch(/declares RmOperationalScope/);
  });
});

describe('fixture byte helpers', () => {
  it('re-issuing with no change reproduces the signed D byte for byte', async () => {
    const overrides = await reissue({}, () => {}); // forces D to be re-signed unchanged
    expect(overrides[URI.D]).toBe(serialize(json(URI.D)));
  });
});
