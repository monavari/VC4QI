// SPDX-License-Identifier: Apache-2.0
// Exact scope arithmetic for the experimental RM v1 binding (browser-safe).
//
// Quantities are decimal strings (xsd:decimal). Comparisons use exact rationals:
// value × unit factor, with mg/kg = 10^-6 kg/kg, so no floating-point tolerance can
// move an acceptance boundary (handover §6.3 rules 7-8). Unknown units or malformed
// numbers are never compared.

/** Exact non-negative decimal as numerator / 10^scale. */
export interface Decimal { readonly n: bigint; readonly scale: number }

const DECIMAL = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
/** Supported mass-fraction units as powers of ten relative to kg/kg. */
export const RM_UNIT_EXPONENTS: Readonly<Record<string, number>> = Object.freeze({ 'kg/kg': 0, 'mg/kg': -6 });

export function parseDecimal(value: unknown): Decimal | undefined {
  if (typeof value !== 'string' || !DECIMAL.test(value)) return undefined;
  const [integer, fraction = ''] = value.split('.');
  return { n: BigInt(`${integer}${fraction}`), scale: fraction.length };
}

/** Exact quantity in kg/kg as a rational numerator / 10^scale. */
export function toKgPerKg(value: unknown, unit: unknown): Decimal | undefined {
  const decimal = parseDecimal(value);
  const exponent = typeof unit === 'string' ? RM_UNIT_EXPONENTS[unit] : undefined;
  if (decimal === undefined || exponent === undefined) return undefined;
  return exponent <= 0
    ? { n: decimal.n, scale: decimal.scale - exponent }
    : { n: decimal.n * 10n ** BigInt(exponent), scale: decimal.scale };
}

export function compareDecimal(a: Decimal, b: Decimal): -1 | 0 | 1 {
  const scale = Math.max(a.scale, b.scale);
  const x = a.n * 10n ** BigInt(scale - a.scale);
  const y = b.n * 10n ** BigInt(scale - b.scale);
  return x < y ? -1 : x > y ? 1 : 0;
}

export function addDecimal(a: Decimal, b: Decimal): Decimal {
  const scale = Math.max(a.scale, b.scale);
  return { n: a.n * 10n ** BigInt(scale - a.scale) + b.n * 10n ** BigInt(scale - b.scale), scale };
}

export function formatDecimal(value: Decimal): string {
  const digits = value.n.toString().padStart(value.scale + 1, '0');
  if (value.scale === 0) return digits;
  const fraction = digits.slice(-value.scale).replace(/0+$/, '');
  return fraction.length === 0 ? digits.slice(0, -value.scale) : `${digits.slice(0, -value.scale)}.${fraction}`;
}

type ScopeRecord = Record<string, unknown>;
interface Range { from?: unknown; to?: unknown; unit?: unknown }

/** Exact interval bounds of a scope record in kg/kg, or a reason it cannot be read. */
export function recordInterval(record: ScopeRecord): { low: Decimal; high: Decimal } | string {
  const range = record.range as Range | undefined;
  if (range === undefined) return 'Scope record has no range.';
  const low = toKgPerKg(range.from, range.unit);
  const high = toKgPerKg(range.to, range.unit);
  if (low === undefined || high === undefined) return `Unsupported or malformed range ${String(range.from)}–${String(range.to)} ${String(range.unit)}.`;
  if (compareDecimal(low, high) > 0) return 'Scope record range is reversed.';
  return { low, high };
}

const list = (value: unknown): string[] => (Array.isArray(value) ? value.filter(v => typeof v === 'string') : []);
const subset = (child: string[], parent: string[]) => child.length > 0 && child.every(item => parent.includes(item));

export interface ContainmentWitness { readonly child: string; readonly parent: string }

/**
 * Bounded projection: every child record must fit inside ONE complete parent record
 * (no splicing across records, no implicit union of adjacent records). Missing or
 * empty restricted dimensions never pass silently.
 */
export function containedIn(
  children: readonly ScopeRecord[], parents: readonly ScopeRecord[],
): { state: 'established' | 'contradicted' | 'not_established'; reason: string; witnesses: ContainmentWitness[] } {
  if (children.length === 0) return { state: 'not_established', reason: 'The projected scope has no records.', witnesses: [] };
  const witnesses: ContainmentWitness[] = [];
  for (const child of children) {
    const childRange = recordInterval(child);
    if (typeof childRange === 'string') return { state: 'not_established', reason: `${String(child.id)}: ${childRange}`, witnesses };
    const properties = list(child.allowedPropertyIris), methods = list(child.allowedMethodIris);
    if (properties.length === 0 || methods.length === 0 || typeof child.matrixIri !== 'string' ||
        typeof child.formIri !== 'string' || typeof child.quantityKindIri !== 'string') {
      return { state: 'not_established', reason: `${String(child.id)}: a restricted dimension is missing or empty.`, witnesses };
    }
    const parent = parents.find(p => {
      const parentRange = recordInterval(p);
      return typeof parentRange !== 'string'
        && p.matrixIri === child.matrixIri && p.formIri === child.formIri && p.quantityKindIri === child.quantityKindIri
        && subset(properties, list(p.allowedPropertyIris)) && subset(methods, list(p.allowedMethodIris))
        && compareDecimal(childRange.low, parentRange.low) >= 0 && compareDecimal(childRange.high, parentRange.high) <= 0;
    });
    if (parent === undefined) {
      return { state: 'contradicted', reason: `${String(child.id)} is not contained in any single parent record.`, witnesses };
    }
    witnesses.push({ child: String(child.id), parent: String(parent.id) });
  }
  return { state: 'established', reason: `Each projected record lies within one parent record (${witnesses.map(w => `${w.child} ⊆ ${w.parent}`).join('; ')}).`, witnesses };
}
