// SPDX-License-Identifier: Apache-2.0
// PTB D-SI 2.2.1 quantity values: reading an si:real, the accepted unit identifiers and
// their exact conversion, and agreement between the evaluators and the manifests.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { CAL_UNITS, mapGroup } from '../src/reliance/cal-v1-evaluator.js';
import { DSI_REFERENCE, expandedReal, readExpandedReal, unitSymbol } from '../src/reliance/dsi.js';
import { claimCoverage, mapClaim } from '../src/reliance/rm-v1-claims.js';
import {
  compareDecimal, KG_PER_KG, MG_PER_KG, parseDecimal, PERCENT, RM_UNITS, toKgPerKg,
} from '../src/reliance/rm-scope.js';

const manifest = (binding: string) =>
  JSON.parse(readFileSync(new URL(`../../../bindings/experimental/${binding}-v1/manifest.json`, import.meta.url), 'utf8')) as {
    scopeAndMapping: { units?: Record<string, { factor: string; symbol: string }>; quantityValues?: Record<string, unknown>; passportValues?: Record<string, unknown> };
  };
const exact = (value: string) => parseDecimal(value)!;
const RM = 'https://vc4qi.example/bindings/rm/1#';

describe('D-SI si:real reading', () => {
  it('reads value, unit, QUDT kind and the expanded uncertainty as written', () => {
    const reading = readExpandedReal(expandedReal('As', 'MassFraction', '178', MG_PER_KG, '5'));
    expect(reading).toMatchObject({ ok: true, label: 'As', quantityTypeQUDT: 'MassFraction', value: '178', unit: MG_PER_KG,
      valueExpandedMU: '5', coverageFactor: '2', coverageProbability: '0.95', distribution: 'normal' });
  });

  it('reports a standard or coverage-interval uncertainty instead of converting it', () => {
    const standard = readExpandedReal({ value: '178', unit: MG_PER_KG, measurementUncertaintyUnivariate: { standardMU: { valueStandardMU: '2.5' } } });
    expect(standard).toMatchObject({ ok: false, reason: expect.stringMatching(/standardMU; the binding reads only expandedMU/) });
    const interval = readExpandedReal({ value: '178', unit: MG_PER_KG, measurementUncertaintyUnivariate: { coverageIntervalMU: {} } });
    expect(interval).toMatchObject({ ok: false, reason: expect.stringMatching(/coverageIntervalMU/) });
    expect(readExpandedReal({ value: '178', unit: MG_PER_KG })).toMatchObject({ ok: false, path: '/measurementUncertaintyUnivariate' });
    expect(readExpandedReal('178')).toMatchObject({ ok: false, reason: 'no D-SI real' });
  });

  it('pins D-SI 2.2.1 as published by PTB, in every binding manifest', () => {
    for (const binding of ['rm', 'cal']) {
      expect(manifest(binding).scopeAndMapping.quantityValues).toMatchObject({
        reference: 'PTB D-SI 2.2.1', schema: DSI_REFERENCE.schema, digestSRI: DSI_REFERENCE.digestSRI });
    }
    expect(manifest('gs').scopeAndMapping.passportValues).toMatchObject({ schema: DSI_REFERENCE.schema, digestSRI: DSI_REFERENCE.digestSRI });
  });
});

describe('D-SI unit identifiers', () => {
  it('the evaluators accept exactly the units their manifests declare, with the same factors and symbols', () => {
    for (const [binding, table] of [['rm', RM_UNITS], ['cal', CAL_UNITS]] as const) {
      const declared = manifest(binding).scopeAndMapping.units!;
      expect(Object.keys(declared).sort(), binding).toEqual(Object.keys(table).sort());
      for (const [unit, { factor, symbol }] of Object.entries(declared)) {
        expect(table[unit], `${binding} ${unit}`).toEqual({ exponent: Number(factor.replace(/^1e?/, '') || '0'), symbol });
      }
    }
  });

  it('converts exactly: 0.7 % is 0.007 kg/kg and 178 mg/kg is 0.000178 kg/kg, with no binary rounding', () => {
    expect(compareDecimal(toKgPerKg('0.7', PERCENT)!, exact('0.007'))).toBe(0);
    expect(compareDecimal(toKgPerKg('57.68', PERCENT)!, exact('0.5768'))).toBe(0);
    expect(compareDecimal(toKgPerKg('178', MG_PER_KG)!, toKgPerKg('0.000178', KG_PER_KG)!)).toBe(0);
  });

  it("refuses D-SI's other spellings, UCUM codes and unsupported numbers", () => {
    for (const unit of ['\\milli\\gram\\per\\kilogram', 'mg/kg', '\\ppm', '\\gram\\kilogram\\tothe{-1}']) {
      expect(toKgPerKg('178', unit), unit).toBeUndefined();
    }
    // D-SI's si:decimalType allows these; the bindings keep the exact, unsigned subset.
    for (const value of ['NaN', '-5', '1.78e2', '+178']) expect(toKgPerKg(value, MG_PER_KG), value).toBeUndefined();
  });

  it('shows symbols, never backslash identifiers, in reasons', () => {
    expect(unitSymbol(RM_UNITS, MG_PER_KG)).toBe('mg/kg');
    expect(unitSymbol(CAL_UNITS, '\\kilo\\pascal')).toBe('kPa');
    expect(unitSymbol(RM_UNITS, '\\ppm')).toBe('\\ppm');
  });
});

describe('D-SI values in the evaluators', () => {
  const certificate = (real: unknown) => ({
    credentialSubject: {
      materials: [{ matrixIri: `${RM}CuZn39Pb3`, formIri: `${RM}Disc` }],
      materialPropertiesList: [{ results: [{ propertyIri: `${RM}As`, methodIri: `${RM}M1`, data: { quantity: { real } } }] }],
    },
  });
  const pointer = '/credentialSubject/materialPropertiesList/0/results/0';
  const map = (real: unknown) => {
    const D = certificate(real);
    return mapClaim(D, pointer, D.credentialSubject.materialPropertiesList[0]!.results[0]);
  };

  it('RM gate 4 maps a D-SI real and reports in mg/kg', () => {
    const mapped = map(expandedReal('As', 'MassFraction', '178', MG_PER_KG, '5'));
    expect(mapped).toMatchObject({ state: 'established', reason: expect.stringMatching(/178 ± 5 mg\/kg \(k = 2\)/) });
    expect(mapped.coordinates?.quantityTypeQUDT).toBe('MassFraction');
  });

  it('RM gate 4 leaves a standard uncertainty, or no QUDT kind, not established', () => {
    const standard = map({ quantityTypeQUDT: 'MassFraction', value: '178', unit: MG_PER_KG,
      measurementUncertaintyUnivariate: { standardMU: { valueStandardMU: '2.5' } } });
    expect(standard).toMatchObject({ state: 'not_established', sources: [`${pointer}/data/quantity/real/measurementUncertaintyUnivariate`] });
    const { quantityTypeQUDT: _unused, ...kindless } = expandedReal('As', 'MassFraction', '178', MG_PER_KG, '5');
    expect(map(kindless)).toMatchObject({ state: 'not_established', reason: expect.stringMatching(/quantityTypeQUDT/) });
  });

  it('RM gate 5 contradicts a record for another QUDT quantity kind', () => {
    const claim = map(expandedReal('As', 'MassFraction', '178', MG_PER_KG, '5')).coordinates!;
    const record = { id: 'r', matrixIri: `${RM}CuZn39Pb3`, formIri: `${RM}Disc`, allowedPropertyIris: [`${RM}As`],
      allowedMethodIris: [`${RM}M1`], quantityTypeQUDT: 'MassConcentration', range: { from: '50', to: '500', unit: MG_PER_KG } };
    expect(claimCoverage(claim, [record], [], 'none')).toMatchObject({
      state: 'contradicted', reason: expect.stringMatching(/quantity kind MassFraction ≠ MassConcentration/) });
  });

  it('calibration gate 4 needs every result of a group to name one quantity kind', () => {
    const real = (kind: string, value: string) => ({ real: expandedReal('pressure', kind, value, '\\kilo\\pascal', '0.8') });
    expect(mapGroup({ id: 'g', results: [real('Pressure', '1000'), real('Pressure', '2000')] }, '/g'))
      .toMatchObject({ state: 'established', group: { quantityTypeQUDT: 'Pressure' } });
    expect(mapGroup({ id: 'g', results: [real('Pressure', '1000'), real('ForcePerArea', '2000')] }, '/g'))
      .toMatchObject({ state: 'not_established', reason: expect.stringMatching(/one quantity kind/) });
    expect(mapGroup({ id: 'g', results: [{ value: '1000', unit: 'kPa', expandedUncertainty: '0.8', coverageFactor: '2' }] }, '/g'))
      .toMatchObject({ state: 'not_established', reason: expect.stringMatching(/no D-SI real/) });
  });
});
