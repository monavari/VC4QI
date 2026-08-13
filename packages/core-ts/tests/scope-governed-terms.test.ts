// SPDX-License-Identifier: Apache-2.0
// SCO-1 / SCO-2 / SCO-3: categorical dimensions compare as exact equality over
// governed identifiers; labels are never comparison operands; an absent
// governed term fails with UNRESOLVED_SCOPE_TERM.
//
// Every case below was accepted before this change, because the module matched
// lowercased free text with substring containment. `in` was decidable and wrong.
import { describe, expect, it } from 'vitest';
import {
  checkDrmdScopeInclusion,
  checkDccScopeInclusion,
  type DrmdScopeEntry,
  type DccScopeEntry,
} from '../src/scope/index.js';
import type { JsonObject } from '../src/types.js';

const T = 'https://w3id.org/qi-vc/terms/v1';
const CUZN39PB3 = `${T}/matrix/CuZn39Pb3`;
const CUZN40PB2 = `${T}/matrix/CuZn40Pb2`;
const AS = `${T}/element/As`;
const DISC = `${T}/form/disc`;
const PRESSURE = 'http://qudt.org/vocab/quantitykind/Pressure';
const EURAMET = `${T}/method/EURAMET-cg-17`;

function rmCredential(opts: {
  matrixIri?: string;
  matrixLabel?: string;
  formIri?: string;
  propertyIri?: string;
  propertyLabel?: string;
}): JsonObject {
  const material: JsonObject = { name: 'test material' };
  if (opts.matrixLabel !== undefined) material.matrix = opts.matrixLabel;
  if (opts.matrixIri !== undefined) material.matrixIri = opts.matrixIri;
  if (opts.formIri !== undefined) material.formIri = opts.formIri;

  const result: JsonObject = { name: opts.propertyLabel ?? 'Arsenic (As)' };
  if (opts.propertyIri !== undefined) result.propertyIri = opts.propertyIri;

  return {
    type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
    credentialSubject: {
      materials: [material],
      materialPropertiesList: [{ isCertified: true, results: [result] }],
    },
  };
}

const cuznScope: DrmdScopeEntry[] = [{
  matrix: ['CuZn39Pb3 (leaded brass)'],
  matrixIris: [CUZN39PB3],
  allowedProperties: ['As'],
  allowedPropertyIris: [AS],
  allowedForms: ['disc'],
  allowedFormIris: [DISC],
}];

describe('TST-4 — CuZn39Pb3 against CuZn40Pb2 (permanent regression)', () => {
  it('accepts the alloy the scope actually names', () => {
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixIri: CUZN39PB3, formIri: DISC, propertyIri: AS }),
      cuznScope,
    );
    expect(result.passed).toBe(true);
  });

  it('rejects the near-miss alloy', () => {
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixIri: CUZN40PB2, formIri: DISC, propertyIri: AS }),
      cuznScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('MATRIX_PROPERTY_MISMATCH');
  });

  it('does not admit a claim whose label merely contains the scope label', () => {
    // The old bidirectional `includes` admitted this: the scope entry's label is
    // a substring of the claim's. Distinct identifiers, so it must fail.
    const result = checkDrmdScopeInclusion(
      rmCredential({
        matrixIri: `${T}/matrix/CuZn39Pb3-special-variant`,
        formIri: DISC,
        propertyIri: AS,
      }),
      cuznScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('MATRIX_PROPERTY_MISMATCH');
  });
});

describe('SCO-2 — labels are never comparison operands', () => {
  it('does not admit a matching label when the identifiers differ', () => {
    const result = checkDrmdScopeInclusion(
      // Same human-readable label, different governed term.
      rmCredential({
        matrixIri: CUZN40PB2,
        matrixLabel: 'CuZn39Pb3 (leaded brass)',
        formIri: DISC,
        propertyIri: AS,
      }),
      cuznScope,
    );

    expect(result.passed).toBe(false);
  });

  it('"As" does not match a property identifier for "Ash"', () => {
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixIri: CUZN39PB3, formIri: DISC, propertyIri: `${T}/element/Ash` }),
      cuznScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('MATRIX_PROPERTY_MISMATCH');
  });
});

describe('SCO-3 — an absent governed term is the B5 boundary made visible', () => {
  it('fails when the claim carries a matrix label but no identifier', () => {
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixLabel: 'CuZn39Pb3 (leaded brass)', formIri: DISC, propertyIri: AS }),
      cuznScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('UNRESOLVED_SCOPE_TERM');
  });

  it('fails when the scope entry restricts matrix by label only', () => {
    const labelOnlyScope: DrmdScopeEntry[] = [{ matrix: ['CuZn39Pb3 (leaded brass)'] }];
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixIri: CUZN39PB3, formIri: DISC, propertyIri: AS }),
      labelOnlyScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('UNRESOLVED_SCOPE_TERM');
  });

  it('fails when the claim carries a property label but no identifier', () => {
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixIri: CUZN39PB3, formIri: DISC, propertyLabel: 'Arsenic (As)' }),
      cuznScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('UNRESOLVED_SCOPE_TERM');
  });
});

describe('empty scope confers no scope', () => {
  it('fails rather than passes when there are no scope entries', () => {
    const result = checkDrmdScopeInclusion(
      rmCredential({ matrixIri: CUZN39PB3, formIri: DISC, propertyIri: AS }),
      [],
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('NO_SCOPE_ENTRY');
  });
});

// ── DCC side ─────────────────────────────────────────────────────────────────

function dccCredential(opts: { quantityKindIri?: string; methodIri?: string }): JsonObject {
  const group: JsonObject = {
    measurand: 'Pressure',
    usedMethods: [
      opts.methodIri === undefined
        ? { reference: 'EURAMET cg-17' }
        : { reference: 'EURAMET cg-17', methodIri: opts.methodIri },
    ],
    results: [{ data: { quantity: { value: 500, unit: { ucumCode: 'kPa' } } } }],
  };
  if (opts.quantityKindIri !== undefined) group.quantityKindIri = opts.quantityKindIri;
  return {
    type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
    credentialSubject: { measurementResults: [group] },
  };
}

const pressureScope: DccScopeEntry[] = [{
  measurand: 'Pressure',
  quantityKindIri: PRESSURE,
  allowedMethods: ['EURAMET cg-17'],
  allowedMethodIris: [EURAMET],
  range: { from: 0, to: 1000, unit: { ucumCode: 'kPa' } },
}];

describe('DCC measurand and method use governed identifiers', () => {
  it('accepts the governed measurand and method', () => {
    const result = checkDccScopeInclusion(
      dccCredential({ quantityKindIri: PRESSURE, methodIri: EURAMET }),
      pressureScope,
    );
    expect(result.passed).toBe(true);
  });

  it('rejects a different quantity kind', () => {
    const result = checkDccScopeInclusion(
      dccCredential({
        quantityKindIri: 'http://qudt.org/vocab/quantitykind/Temperature',
        methodIri: EURAMET,
      }),
      pressureScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('NO_SCOPE_ENTRY');
  });

  it('rejects a method outside the admitted set', () => {
    const result = checkDccScopeInclusion(
      dccCredential({ quantityKindIri: PRESSURE, methodIri: `${T}/method/made-up-procedure` }),
      pressureScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('METHOD_OUT_OF_SCOPE');
  });

  it('fails when the measurand carries no governed identifier', () => {
    const result = checkDccScopeInclusion(
      dccCredential({ methodIri: EURAMET }),
      pressureScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('UNRESOLVED_SCOPE_TERM');
  });

  it('fails when the method carries no governed identifier', () => {
    const result = checkDccScopeInclusion(
      dccCredential({ quantityKindIri: PRESSURE }),
      pressureScope,
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('UNRESOLVED_SCOPE_TERM');
  });

  it('fails when there are no scope entries at all', () => {
    const result = checkDccScopeInclusion(
      dccCredential({ quantityKindIri: PRESSURE, methodIri: EURAMET }),
      [],
    );

    expect(result.passed).toBe(false);
    expect(result.violations.map(v => v.code)).toContain('NO_SCOPE_ENTRY');
  });
});
