// SPDX-License-Identifier: Apache-2.0
// I4: claim mapping (gate 4), claim scope coverage (gate 5) and conformity (gate 6)
// on the signed RM chain. Every variant is re-issued with the fixture keys, so each
// case is decided on its own semantics, never by a broken signature or digest.
import { describe, expect, it } from 'vitest';
import { createRelianceRequest, loadRelianceProfile } from '../src/reliance/index.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import type { JsonObject } from '../src/types.js';
import {
  catalogWith, json, manifest, profile, profileJson, reissue, request, serialize, URI,
} from './rm-v1-helpers.js';

type Result = Awaited<ReturnType<typeof evaluateRmSlice>>['result'];
const RM = 'https://vc4qi.example/bindings/rm/1#';
const D197 = 'https://producer.vc4qi.example/credentials/D197';
const D520 = 'https://producer.vc4qi.example/credentials/D520';
const RESULT = '/credentialSubject/materialPropertiesList/0/results/0';

const run = (overrides: Record<string, string | null> = {}, req = request(), p = profile) =>
  evaluateRmSlice(req, catalogWith(overrides), manifest, p).then(e => e.result);
const trace = (result: Result, predicate: string) => result.trace.find(t => t.predicate === predicate);
const subject = (d: JsonObject) => d.credentialSubject as JsonObject;
const firstResult = (d: JsonObject) =>
  ((subject(d).materialPropertiesList as JsonObject[])[0]!.results as JsonObject[])[0]!;
const quantity = (d: JsonObject) => (firstResult(d).data as JsonObject).quantity as JsonObject;
/** D re-issued with its selected result's value (and optionally U and unit) changed. */
const withValue = (value: string, U = '5', unit = 'mg/kg') => reissue({}, d => {
  Object.assign(quantity(d), { value, unit: { ucumCode: unit }, uncertainty: { expandedUncertainty: U, coverageFactor: '2' } });
});
const withoutConformity = (overrides = {}) => {
  const { conformity: _unused, ...plain } = request(overrides);
  return createRelianceRequest(plain);
};
const scopeRecord = (id: string, over: JsonObject = {}): JsonObject => ({
  id, matrixIri: `${RM}CuZn39Pb3`, formIri: `${RM}Disc`, allowedPropertyIris: [`${RM}As`],
  allowedMethodIris: [`${RM}M1`], quantityKindIri: `${RM}MassFraction`,
  range: { from: '50', to: '500', unit: 'mg/kg' }, ...over,
});
/** Re-issue A and O with the given scope records (A's are O's, so the projection holds), D edited. */
function withScopes(records: JsonObject[], editD?: (d: JsonObject) => void) {
  const A = json(URI.A), O = json(URI.O);
  subject(A).scope = records.map(r => ({ ...r, id: `${URI.A}#${String(r.id)}` }));
  subject(O).scope = records.map(r => ({ ...r, id: `${URI.O}#${String(r.id)}` }));
  return reissue({ [URI.A]: A, [URI.O]: O }, editD);
}

describe('I4 worked profile: 178 / 197 / 520 (S01-S06)', () => {
  it('S01: x = 178 is authorized, conforms with 183 and is accepted', async () => {
    const result = await run();
    expect(result.authorization[0]).toMatchObject({ state: 'established' });
    expect(trace(result, 'claim-coverage:as-mass-fraction:operational-scope')?.reason)
      .toMatch(/scope-as-m1 covers As, method M1, CuZn39Pb3\/Disc, 178 mg\/kg within 50–500 mg\/kg/);
    expect(result.conformity).toMatchObject({ state: 'established', reasons: [expect.stringMatching(/178 \+ 5 = 183 ≤ 200 mg\/kg/)] });
    expect(result.decision).toBe('accept');
  });

  it('S02: x = 197 is authorized but does not conform (202 > 200): reject for the decision rule', async () => {
    const result = await run({}, request({ targetId: D197 }));
    expect(result.authorization[0]).toMatchObject({ state: 'established' });
    expect(result.conformity).toMatchObject({ state: 'contradicted', execution: 'executed',
      reasons: [expect.stringMatching(/197 \+ 5 = 202 > 200 mg\/kg/)] });
    expect(result.decision).toBe('reject');
  });

  it('x = 197 authorization-only is accepted: the rule is the relying party\'s question', async () => {
    const result = await run({}, withoutConformity({ targetId: D197 }));
    expect(result.conformity).toMatchObject({ requested: false, execution: 'not_run' });
    expect(result.decision).toBe('accept');
  });

  it('S03: x = 520 contradicts the scope; conformity is not run', async () => {
    const result = await run({}, request({ targetId: D520 }));
    expect(trace(result, 'claim-coverage:as-mass-fraction:operational-scope'))
      .toMatchObject({ state: 'contradicted', reason: expect.stringMatching(/value is above the range/) });
    expect(result.authorization[0]).toMatchObject({ state: 'contradicted' });
    expect(result.conformity).toMatchObject({ execution: 'not_run' });
    expect(result.decision).toBe('reject');
  });

  it('S04: x = 195 conforms at the exact inclusive limit (200 ≤ 200)', async () => {
    const result = await run(await withValue('195'));
    expect(result.conformity).toMatchObject({ state: 'established', reasons: [expect.stringMatching(/195 \+ 5 = 200 ≤ 200 mg\/kg/)] });
    expect(result.decision).toBe('accept');
  });

  it('S05: x = 500 (upper endpoint) is in scope for an authorization-only request', async () => {
    const result = await run(await withValue('500'), withoutConformity());
    expect(result.authorization[0]).toMatchObject({ state: 'established' });
    expect(result.decision).toBe('accept');
  });

  it('S06: x below 50 is out of scope (lower bound checked); x = 50 is in scope', async () => {
    const below = await run(await withValue('49.9'));
    expect(trace(below, 'claim-coverage:as-mass-fraction:operational-scope')?.reason).toMatch(/value is below the range/);
    expect(below.conformity).toMatchObject({ execution: 'not_run' });
    expect(below.decision).toBe('reject');
    expect((await run(await withValue('50'))).decision).toBe('accept');
  });
});

describe('I4 methods and succession (S07, S08)', () => {
  const withMethod = (method: string) => reissue({}, d => { firstResult(d).methodIri = `${RM}${method}`; });
  const succession = (methodSuccession: string) => loadRelianceProfile({ ...profileJson(), mapping: { methodSuccession } });

  it('S07: M2 against O restricted to M1 fails on O and never falls back to A (which allows M2)', async () => {
    const result = await run(await withMethod('M2'));
    const covered = trace(result, 'claim-coverage:as-mass-fraction:operational-scope');
    expect(covered).toMatchObject({ state: 'not_established' });
    expect(covered?.reason).toMatch(/no governed M1 → M2 succession rule/);
    expect(covered?.sources).toContain(URI.O);
    expect(covered?.sources).not.toContain(URI.A);
    expect(result.authorization[0]?.routeWitnessIds).toEqual([]);
    expect(result.decision).toBe('not_established');
  });

  it('S08: accepted succession, required extension and missing interpretation give distinct results', async () => {
    const overrides = await withMethod('M2');
    expect((await run(overrides, request(), succession('accept-successor'))).decision).toBe('accept');
    expect((await run(overrides, request(), succession('require-extension'))).authorization[0]?.state).toBe('contradicted');
    expect((await run(overrides, request(), succession('none'))).authorization[0]?.state).toBe('not_established');
  });

  it('a method with no declared revision is simply not allowed, whatever the succession rule', async () => {
    const result = await run(await withMethod('M3'), request(), succession('accept-successor'));
    expect(result.authorization[0]?.state).toBe('contradicted');
  });
});

describe('I4 complete records, identifiers and units (S09-S17, S22-S24)', () => {
  it('S09: As/M1 and Pb/M3 records never combine into As/M3', async () => {
    const overrides = await withScopes([scopeRecord('as-m1'), scopeRecord('pb-m3', {
      allowedPropertyIris: [`${RM}Pb`], allowedMethodIris: [`${RM}M3`] })], d => { firstResult(d).methodIri = `${RM}M3`; });
    const result = await run(overrides);
    expect(trace(result, 'route:operational-scope:bounded-projection')).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });

  it('S10: matrix, form and property split across records never combine', async () => {
    const overrides = await withScopes([
      scopeRecord('wire', { formIri: `${RM}Wire` }),
      scopeRecord('other-matrix', { matrixIri: `${RM}CuZn40Pb2` }),
      scopeRecord('lead', { allowedPropertyIris: [`${RM}Pb`] }),
    ]);
    const result = await run(overrides);
    expect(result.authorization[0]?.state).toBe('contradicted');
    expect(result.authorization[0]?.reasons.join(' ')).toMatch(/No single scope record covers the claim/);
  });

  it('S11: two claims, each covered by its own complete record, with different record witnesses', async () => {
    const overrides = await withScopes([scopeRecord('as'), scopeRecord('pb', { allowedPropertyIris: [`${RM}Pb`] })], d => {
      const results = (subject(d).materialPropertiesList as JsonObject[])[0]!.results as JsonObject[];
      results.push({ ...results[0]!, propertyIri: `${RM}Pb`,
        data: { quantity: { ...quantity(d), value: '120' } } });
    });
    const result = await run(overrides, request({ selectedClaims: [
      { id: 'as', sourcePointer: RESULT },
      { id: 'pb', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/1' },
    ] }));
    expect(result.authorization.map(a => a.state)).toEqual(['established', 'established']);
    expect(result.authorization[0]?.routeWitnessIds.at(-1)).toBe(`record:${URI.O}#as`);
    expect(result.authorization[1]?.routeWitnessIds.at(-1)).toBe(`record:${URI.O}#pb`);
    expect(result.decision).toBe('accept'); // the As requirement applies to exactly one claim
  });

  it('S12: an operational range spanning two adjacent accreditation records is not a union', async () => {
    const A = json(URI.A), O = json(URI.O);
    subject(A).scope = [scopeRecord(`${URI.A}#low`, { allowedMethodIris: [`${RM}M1`], range: { from: '50', to: '300', unit: 'mg/kg' } }),
      scopeRecord(`${URI.A}#high`, { range: { from: '300', to: '500', unit: 'mg/kg' } })];
    (subject(O).scope as JsonObject[])[0]!.range = { from: '100', to: '400', unit: 'mg/kg' };
    const result = await run(await reissue({ [URI.A]: A, [URI.O]: O }));
    expect(trace(result, 'route:operational-scope:bounded-projection')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('S13: a projected lower bound below the parent is rejected although the upper bound fits', async () => {
    const O = json(URI.O);
    (subject(O).scope as JsonObject[])[0]!.range = { from: '40', to: '500', unit: 'mg/kg' };
    const result = await run(await reissue({ [URI.O]: O }));
    expect(trace(result, 'route:operational-scope:bounded-projection')).toMatchObject({ state: 'contradicted' });
  });

  it('S20: a missing or empty scope endpoint never yields a successful containment', async () => {
    for (const range of [{ from: '50', unit: 'mg/kg' }, { from: '', to: '500', unit: 'mg/kg' }]) {
      const O = json(URI.O);
      (subject(O).scope as JsonObject[])[0]!.range = range;
      const result = await run(await reissue({ [URI.O]: O }));
      expect(trace(result, 'route:operational-scope:bounded-projection')?.state).not.toBe('established');
      expect(result.decision).not.toBe('accept');
    }
  });

  it('S14: an unsupported unit is refused by the binding; a non-binding coverage factor is not mapped', async () => {
    const ppm = await run(await withValue('178', '5', 'ppm'));
    expect(ppm.trace.find(t => t.nodeUse.startsWith(`${URI.D} |`) && t.predicate === 'schema')).toMatchObject({ state: 'contradicted' });
    expect(ppm.decision).toBe('reject');
    const k3 = await run(await reissue({}, d => { (quantity(d).uncertainty as JsonObject).coverageFactor = '3'; }));
    expect(trace(k3, 'claim-mapping:as-mass-fraction'))
      .toMatchObject({ gate: 4, state: 'not_established', reason: expect.stringMatching(/k = 2/) });
    expect(k3.decision).toBe('not_established');
  });

  it('S15: mg/kg and kg/kg encodings give the same outcome, record and arithmetic witness', async () => {
    const baseline = await run();
    const kgkg = await run(await withValue('0.000178', '0.000005', 'kg/kg'));
    expect(kgkg.decision).toBe(baseline.decision);
    expect(kgkg.authorization[0]?.routeWitnessIds).toEqual(baseline.authorization[0]?.routeWitnessIds);
    expect(kgkg.conformity.requested && kgkg.conformity.reasons).toEqual(baseline.conformity.requested && baseline.conformity.reasons);
  });

  it('S16: non-numeric values are refused; a reversed scope interval is invalid', async () => {
    for (const bad of ['NaN', 'Infinity', '-5']) {
      const result = await run(await withValue('178', bad));
      expect(result.decision, bad).toBe('reject');
    }
    const O = json(URI.O);
    (subject(O).scope as JsonObject[])[0]!.range = { from: '500', to: '50', unit: 'mg/kg' };
    const reversed = await run(await reissue({ [URI.O]: O }));
    expect(trace(reversed, 'route:operational-scope:bounded-projection')).toMatchObject({ state: 'contradicted' });
    expect(reversed.decision).toBe('reject');
  });

  it('S17: exact governed identifiers only (As/Ash, CuZn39Pb3/CuZn40Pb2, M1/M1a)', async () => {
    const edits: ((d: JsonObject) => void)[] = [
      d => { firstResult(d).propertyIri = `${RM}Ash`; },
      d => { ((subject(d).materials as JsonObject[])[0]!).matrixIri = `${RM}CuZn40Pb2`; },
      d => { firstResult(d).methodIri = `${RM}M1a`; },
    ];
    for (const edit of edits) {
      const result = await run(await reissue({}, edit));
      expect(result.authorization[0]?.state).toBe('contradicted');
    }
  });

  it('S22: there is no invented uncertainty ceiling: U = 40 is in scope, and fails only the rule', async () => {
    const overrides = await withValue('178', '40');
    expect((await run(overrides, withoutConformity())).decision).toBe('accept');
    const withRule = await run(overrides);
    expect(withRule.authorization[0]?.state).toBe('established');
    expect(withRule.conformity).toMatchObject({ state: 'contradicted', reasons: [expect.stringMatching(/178 \+ 40 = 218 > 200/)] });
  });

  it('S23: an asymmetric uncertainty is refused, never symmetrized', async () => {
    const D = json(URI.D);
    quantity(D).uncertainty = { expandedUncertainty: '5', coverageFactor: '2', lowerExpandedUncertainty: '3' };
    await expect(reissue({}, d => { d.credentialSubject = D.credentialSubject; })).rejects.toThrow(); // undefined term, safe mode
    const result = await run({ [URI.D]: serialize(D) });
    expect(result.trace.find(t => t.nodeUse.startsWith(`${URI.D} |`) && t.predicate === 'schema')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('S24: no claims cannot be requested, and a claim on a missing result is not established', async () => {
    expect(() => request({ selectedClaims: [] })).toThrow(/at least one claim/);
    const result = await run({}, request({ selectedClaims: [{ id: 'missing', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/7' }] }));
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.decision).toBe('not_established');
  });

  it('a requirement or decision rule the profile does not define is not established', async () => {
    const result = await run({}, request({ conformity: { requirementId: 'as-max-100', decisionRuleId: 'guarded-acceptance-expanded-u' } }));
    expect(result.conformity).toMatchObject({ state: 'not_established', execution: 'executed' });
    expect(result.decision).toBe('not_established');
  });
});

describe('I4 time: historical questions and scope in force at the activity (P13, P14)', () => {
  it('P13: a historical question cannot be answered with only current status', async () => {
    const historical = await run({}, request({ activityTime: '2026-03-01T00:00:00Z' }));
    const status = historical.trace.find(t => t.nodeUse.startsWith(`${URI.D} |`) && t.predicate === 'credential-status');
    expect(status).toMatchObject({ state: 'not_established', reason: expect.stringMatching(/historical status is unavailable/) });
    expect(historical.decision).toBe('not_established');
    // The current question over the same bytes is still answered.
    expect((await run()).decision).toBe('accept');
  });

  it('P14: a scope issued after the certification activity cannot authorize it, though it covers it today', async () => {
    const O = json(URI.O);
    O.validFrom = '2026-01-25T00:00:00Z'; // D's activity is 2026-01-20
    const result = await run(await reissue({ [URI.O]: O }));
    expect(trace(result, 'route:operational-scope:bounded-projection')).toMatchObject({ state: 'established' });
    expect(trace(result, 'route:operational-scope:scope-in-force-at-activity'))
      .toMatchObject({ state: 'not_established', reason: expect.stringMatching(/a later scope cannot authorize it/) });
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.decision).toBe('not_established');
  });

  it('P14: the baseline grants were in force when the certificate was made', async () => {
    const result = await run();
    expect(trace(result, 'route:operational-scope:scope-in-force-at-activity'))
      .toMatchObject({ state: 'established', reason: expect.stringMatching(/O and A were in force at the activity time 2026-01-20/) });
  });
});
