// SPDX-License-Identifier: Apache-2.0
// Claim mapping (gate 4), claim scope coverage (gate 5) and conformity (gate 6) for
// the experimental RM v1 binding (phase I4). Browser-safe and pure.
//
// A selected result is first mapped into governed coordinates: exact identifiers for
// matrix, form, property, method and quantity kind, and exact kg/kg quantities. It is
// then covered by ONE complete scope record of the route's own scope credential (no
// splicing across records, no fallback to a parent grant). Conformity is a separate
// question, asked only after the claim is authorized, under a verifier-selected
// requirement and decision rule.
import { semanticOr } from './index.js';
import { compareDecimal, addDecimal, formatDecimal, parseDecimal, recordInterval, RM_UNIT_EXPONENTS, toKgPerKg, type Decimal } from './rm-scope.js';
import type { SemanticState } from './types.js';

type Doc = Record<string, unknown>;
const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);
const strings = (value: unknown): string[] => list(value).filter((v): v is string => typeof v === 'string');
const short = (iri: unknown) => String(iri).split(/[#/]/).pop();

/** Profile interpretation of a binding-declared method revision (for example M2 revises M1). */
export type MethodSuccession = 'accept-successor' | 'require-extension' | 'none';
export interface MethodRevision { readonly method: string; readonly revises: string }

export interface ClaimCoordinates {
  readonly matrixIri: string;
  readonly formIri: string;
  readonly propertyIri: string;
  readonly methodIri: string;
  readonly quantityKindIri: string;
  /** Exact value and expanded uncertainty in kg/kg. */
  readonly value: Decimal;
  readonly uncertainty: Decimal;
}

export interface Outcome {
  readonly state: SemanticState;
  readonly reason: string;
  readonly sources: readonly string[];
}

/**
 * Gate 4: map the result at `pointer` of certificate `D` into governed coordinates.
 * Unsupported units, a coverage factor other than the binding's k = 2 or a missing
 * dimension leave the claim not established; nothing is guessed or normalized away.
 */
export function mapClaim(D: Doc, pointer: string, result: unknown): Outcome & { coordinates?: ClaimCoordinates } {
  const sources = [pointer];
  const subject = isObject(D.credentialSubject) ? D.credentialSubject : {};
  const materials = list(subject.materials).filter(isObject);
  if (materials.length !== 1) return { state: 'not_established', reason: 'The certificate must name exactly one material.', sources: ['/credentialSubject/materials'] };
  const material = materials[0]!;
  if (!isObject(result)) return { state: 'not_established', reason: `No result at ${pointer}.`, sources };
  const quantity = isObject(result.data) && isObject(result.data.quantity) ? result.data.quantity : undefined;
  if (quantity === undefined) return { state: 'not_established', reason: 'The result has no quantity.', sources };
  const unit = isObject(quantity.unit) ? quantity.unit.ucumCode : undefined;
  if (typeof unit !== 'string' || RM_UNIT_EXPONENTS[unit] === undefined) {
    return { state: 'not_established', reason: `Unit ${String(unit)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${pointer}/data/quantity/unit`] };
  }
  const uncertainty = isObject(quantity.uncertainty) ? quantity.uncertainty : undefined;
  const k = parseDecimal(uncertainty?.coverageFactor);
  if (k === undefined || compareDecimal(k, { n: 2n, scale: 0 }) !== 0) {
    return { state: 'not_established', reason: `Coverage factor ${String(uncertainty?.coverageFactor)} is not the binding's k = 2.`, sources: [`${pointer}/data/quantity/uncertainty`] };
  }
  const value = toKgPerKg(quantity.value, unit);
  const expanded = toKgPerKg(uncertainty?.expandedUncertainty, unit);
  if (value === undefined || expanded === undefined) {
    return { state: 'not_established', reason: 'Value or expanded uncertainty is not a supported decimal.', sources: [`${pointer}/data/quantity`] };
  }
  const dims = { matrixIri: material.matrixIri, formIri: material.formIri, propertyIri: result.propertyIri,
    methodIri: result.methodIri, quantityKindIri: quantity.quantityKind };
  const missing = Object.entries(dims).filter(([, v]) => typeof v !== 'string').map(([k2]) => k2);
  if (missing.length > 0) return { state: 'not_established', reason: `Missing governed identifier: ${missing.join(', ')}.`, sources };
  return {
    state: 'established',
    reason: `Mapped ${short(dims.propertyIri)} by ${short(dims.methodIri)} in ${short(dims.matrixIri)}: `
      + `${String(quantity.value)} ± ${String(uncertainty?.expandedUncertainty)} ${unit} (k = 2).`,
    sources,
    coordinates: { ...(dims as Record<keyof typeof dims, string>), value, uncertainty: expanded },
  };
}

/** Does `claimMethod` fall under a record allowing `allowed`, under the profile's succession interpretation? */
function methodCovered(
  claimMethod: string, allowed: readonly string[], revisions: readonly MethodRevision[], succession: MethodSuccession,
): { state: SemanticState; reason: string } {
  if (allowed.includes(claimMethod)) return { state: 'established', reason: `method ${short(claimMethod)}` };
  const revised = revisions.find(r => r.method === claimMethod && allowed.includes(r.revises));
  if (revised === undefined) return { state: 'contradicted', reason: `method ${short(claimMethod)} is not allowed` };
  const pair = `${short(revised.revises)} → ${short(claimMethod)}`;
  switch (succession) {
    case 'accept-successor': return { state: 'established', reason: `method ${short(claimMethod)} as accepted successor (${pair})` };
    case 'require-extension': return { state: 'contradicted', reason: `method ${short(claimMethod)} needs an explicit scope extension (${pair})` };
    default: return { state: 'not_established', reason: `no governed ${pair} succession rule in the profile` };
  }
}

/**
 * Gate 5: one complete record must cover the claim on every dimension. Records are
 * alternatives (OR); dimensions within a record are all required. An unreadable record
 * is not established, a reversed range is invalid (contradicted).
 */
export function claimCoverage(
  claim: ClaimCoordinates, records: readonly Doc[], revisions: readonly MethodRevision[], succession: MethodSuccession,
): Outcome & { record?: string } {
  if (records.length === 0) return { state: 'not_established', reason: 'The scope has no records.', sources: ['/credentialSubject/scope'] };
  const outcomes = records.map(record => {
    const id = String(record.id);
    const interval = recordInterval(record);
    if (typeof interval === 'string') {
      return { id, state: (/reversed/.test(interval) ? 'contradicted' : 'not_established') as SemanticState, reason: `${short(id)}: ${interval}` };
    }
    const failures: string[] = [];
    if (record.matrixIri !== claim.matrixIri) failures.push(`matrix ${short(claim.matrixIri)} ≠ ${short(record.matrixIri)}`);
    if (record.formIri !== claim.formIri) failures.push(`form ${short(claim.formIri)} ≠ ${short(record.formIri)}`);
    if (record.quantityKindIri !== claim.quantityKindIri) failures.push(`quantity kind ${short(claim.quantityKindIri)} ≠ ${short(record.quantityKindIri)}`);
    if (!strings(record.allowedPropertyIris).includes(claim.propertyIri)) failures.push(`property ${short(claim.propertyIri)} is not allowed`);
    if (compareDecimal(claim.value, interval.low) < 0) failures.push('value is below the range');
    if (compareDecimal(claim.value, interval.high) > 0) failures.push('value is above the range');
    const method = methodCovered(claim.methodIri, strings(record.allowedMethodIris), revisions, succession);
    if (failures.length > 0 || method.state === 'contradicted') {
      return { id, state: 'contradicted' as SemanticState, reason: `${short(id)}: ${[...failures, ...(method.state === 'contradicted' ? [method.reason] : [])].join('; ')}` };
    }
    if (method.state === 'not_established') return { id, state: 'not_established' as SemanticState, reason: `${short(id)}: ${method.reason}` };
    const low = formatDecimal(fromKgPerKg(interval.low, 'mg/kg')), high = formatDecimal(fromKgPerKg(interval.high, 'mg/kg'));
    return { id, state: 'established' as SemanticState,
      reason: `${short(id)} covers ${short(claim.propertyIri)}, ${method.reason}, ${short(claim.matrixIri)}/${short(claim.formIri)}, `
        + `${formatDecimal(fromKgPerKg(claim.value, 'mg/kg'))} mg/kg within ${low}–${high} mg/kg` };
  });
  const state = semanticOr(outcomes.map(o => o.state));
  const covering = outcomes.find(o => o.state === 'established');
  return {
    state,
    reason: covering ? covering.reason : `No single scope record covers the claim (${outcomes.map(o => o.reason).join(' | ')}).`,
    sources: ['/credentialSubject/scope'],
    ...(covering ? { record: covering.id } : {}),
  };
}

/** Exact conversion from kg/kg into `unit`. */
export function fromKgPerKg(value: Decimal, unit: string): Decimal {
  const exponent = RM_UNIT_EXPONENTS[unit]!;
  return exponent >= 0
    ? { n: value.n, scale: value.scale + exponent }
    : value.scale + exponent >= 0 ? { n: value.n, scale: value.scale + exponent } : { n: value.n * 10n ** BigInt(-(value.scale + exponent)), scale: 0 };
}

/** Verifier-owned requirement: an upper limit on one property's quantity. */
export interface ConformityRequirement {
  readonly id: string;
  readonly propertyIri: string;
  readonly quantityKindIri: string;
  readonly upperLimit: { readonly value: string; readonly unit: string };
}
/** Verifier-owned decision rule (ILAC-G8 style): simple acceptance or guard band w = U. */
export interface DecisionRule {
  readonly id: string;
  readonly acceptWhen: 'value-at-most-limit' | 'value-plus-expanded-uncertainty-at-most-limit';
}

/**
 * Gate 6: conformity of an authorized claim with an upper-limit requirement under a
 * decision rule. The arithmetic is exact and reported in the requirement's unit, so
 * equivalent encodings of the same quantity give the same witness.
 */
export function evaluateConformity(claim: ClaimCoordinates, requirement: ConformityRequirement, rule: DecisionRule): Outcome & { arithmetic?: string } {
  if (claim.propertyIri !== requirement.propertyIri || claim.quantityKindIri !== requirement.quantityKindIri) {
    return { state: 'not_established', reason: `Requirement ${requirement.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  }
  const limit = toKgPerKg(requirement.upperLimit.value, requirement.upperLimit.unit);
  if (limit === undefined) return { state: 'not_established', reason: `Requirement ${requirement.id} has an unsupported limit.`, sources: [] };
  const unit = requirement.upperLimit.unit;
  const show = (d: Decimal) => formatDecimal(fromKgPerKg(d, unit));
  const guarded = rule.acceptWhen === 'value-plus-expanded-uncertainty-at-most-limit';
  const tested = guarded ? addDecimal(claim.value, claim.uncertainty) : claim.value;
  const conforms = compareDecimal(tested, limit) <= 0;
  const lhs = guarded ? `${show(claim.value)} + ${show(claim.uncertainty)} = ${show(tested)}` : show(claim.value);
  const arithmetic = `${lhs} ${conforms ? '≤' : '>'} ${show(limit)} ${unit}`;
  return {
    state: conforms ? 'established' : 'contradicted',
    reason: `${conforms ? 'Conforms' : 'Does not conform'} under ${rule.id}: ${arithmetic}.`,
    sources: [],
    arithmetic,
  };
}
