// SPDX-License-Identifier: Apache-2.0
// Quantity values in the shape of PTB D-SI 2.2.1 (browser-safe, pure).
//
// The experimental bindings carry every measured value as D-SI's `si:real`, written in
// JSON with D-SI's element names: `label`, `quantityTypeQUDT` (a QUDT quantity-kind
// name), `value`, `unit` (a D-SI unit identifier such as `\milli\gram\kilogram\tothe{-1}`)
// and `measurementUncertaintyUnivariate.expandedMU` with `valueExpandedMU`,
// `coverageFactor`, `coverageProbability` and `distribution`. The JSON-LD terms live in
// each binding's own `vc4qi.example` namespace and map one-to-one onto those elements.
//
// This module only finds the parts. It never parses D-SI's unit grammar: a binding
// accepts an exact list of unit identifiers, and anything else stays not established.
// Numbers are kept as written and compared with exact decimal arithmetic elsewhere.

/** The pinned reference: PTB D-SI 2.2.1, as published by PTB. */
export const DSI_REFERENCE = Object.freeze({
  name: 'PTB D-SI (Digital System of Units) XML schema',
  version: '2.2.1',
  schema: 'https://www.ptb.de/si/v2.2.1/SI_Format.xsd',
  digestSRI: 'sha384-FK8DweUwpgaSM7YHkndHPFs5ZcQM8b1ug4gJpNme+quQUFdLWEjyEi512P5i3Nd0',
  source: 'https://gitlab1.ptb.de/d-ptb/d-si/xsd-d-si/-/tree/2.2.1',
});

/** A D-SI unit identifier a binding accepts: its power of ten against the binding's base unit, and a display symbol. */
export interface DsiUnit { readonly exponent: number; readonly symbol: string }

type Doc = Record<string, unknown>;
const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);

/** The parts of one `si:real` with an expanded uncertainty, as written (nothing is converted). */
export interface ExpandedReal {
  readonly label: unknown;
  readonly quantityTypeQUDT: unknown;
  readonly value: unknown;
  readonly unit: unknown;
  readonly valueExpandedMU: unknown;
  readonly coverageFactor: unknown;
  readonly coverageProbability: unknown;
  readonly distribution: unknown;
}

export type RealReading =
  | ({ readonly ok: true } & ExpandedReal)
  | { readonly ok: false; readonly reason: string; readonly path: string };

const OTHER_FORMS = ['standardMU', 'coverageIntervalMU'] as const;

/**
 * Read one `si:real`. The bindings read only an expanded uncertainty
 * (`measurementUncertaintyUnivariate.expandedMU`); a value stated without one, or with
 * D-SI's standard or coverage-interval form, is reported, never converted. `path` is a
 * JSON pointer suffix relative to the real.
 */
export function readExpandedReal(real: unknown): RealReading {
  if (!isObject(real)) return { ok: false, reason: 'no D-SI real', path: '' };
  const mu = real.measurementUncertaintyUnivariate;
  if (!isObject(mu)) return { ok: false, reason: 'no D-SI measurementUncertaintyUnivariate', path: '/measurementUncertaintyUnivariate' };
  const expanded = mu.expandedMU;
  if (!isObject(expanded)) {
    const other = OTHER_FORMS.find(form => form in mu);
    return { ok: false, path: '/measurementUncertaintyUnivariate',
      reason: other === undefined ? 'no D-SI expandedMU' : `the uncertainty is a D-SI ${other}; the binding reads only expandedMU` };
  }
  return {
    ok: true,
    label: real.label,
    quantityTypeQUDT: real.quantityTypeQUDT,
    value: real.value,
    unit: real.unit,
    valueExpandedMU: expanded.valueExpandedMU,
    coverageFactor: expanded.coverageFactor,
    coverageProbability: expanded.coverageProbability,
    distribution: expanded.distribution,
  };
}

/** The display symbol of an accepted unit, or the identifier itself. */
export function unitSymbol(units: Readonly<Record<string, DsiUnit>>, unit: unknown): string {
  return typeof unit === 'string' && units[unit] !== undefined ? units[unit]!.symbol : String(unit);
}

/** A D-SI real with an expanded uncertainty at k = 2 (the fixtures' convention, as in the DRMD). */
export function expandedReal(label: string, quantityTypeQUDT: string, value: string, unit: string, valueExpandedMU: string) {
  return {
    label,
    quantityTypeQUDT,
    value,
    unit,
    measurementUncertaintyUnivariate: { expandedMU: { valueExpandedMU, coverageFactor: '2', coverageProbability: '0.95', distribution: 'normal' } },
  };
}
