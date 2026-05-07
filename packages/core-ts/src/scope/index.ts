// SPDX-License-Identifier: Apache-2.0
// Scope-inclusion algorithm for DCC and DRMD credentials.
// Implements Section 6.2 of the paper (Listing 4).
//
// Reason-code vocabulary (Table 3 of the paper):
//   RANGE_OUT_OF_SCOPE        — DCC range exceeds accredited range
//   METHOD_OUT_OF_SCOPE       — DCC method not in authorized method set
//   UNCERTAINTY_WIDENING      — uncertainty wider than scope bound
//   MATRIX_PROPERTY_MISMATCH  — DRMD matrix/property/form outside scope
//   NO_SCOPE_ENTRY            — no scope entry covers the claim
//   DERIVATION_VIOLATION      — CapabilityCredential constraints exceed AccreditationCredential scope

import type { JsonObject } from '../types.js';

// ── Reason codes ──────────────────────────────────────────────────────────────

export type ScopeReasonCode =
  | 'RANGE_OUT_OF_SCOPE'
  | 'METHOD_OUT_OF_SCOPE'
  | 'UNCERTAINTY_WIDENING'
  | 'MATRIX_PROPERTY_MISMATCH'
  | 'NO_SCOPE_ENTRY'
  | 'DERIVATION_VIOLATION';

export interface ScopeViolation {
  code: ScopeReasonCode;
  detail: string;
}

export interface ScopeCheckResult {
  passed: boolean;
  violations: ScopeViolation[];
}

// ── Unit normalization ────────────────────────────────────────────────────────
// Converts values to Pa (pressure) and mg/kg (mass fraction) for comparison.
// Uses QUDT unit IRIs and UCUM codes as keys.

const PRESSURE_TO_PA: Record<string, number> = {
  'http://qudt.org/vocab/unit/PA': 1,
  'http://qudt.org/vocab/unit/KiloPA': 1e3,
  'http://qudt.org/vocab/unit/MegaPA': 1e6,
  'http://qudt.org/vocab/unit/BAR': 1e5,
  'Pa': 1,
  'kPa': 1e3,
  'MPa': 1e6,
  'bar': 1e5,
};

const MASS_FRACTION_TO_MG_KG: Record<string, number> = {
  // percent — 1% = 10000 mg/kg
  'http://qudt.org/vocab/unit/PERCENT': 10_000,
  '%': 10_000,
  // mg/kg — identity
  'http://qudt.org/vocab/unit/MilliGM-PER-KiloGM': 1,
  'mg/kg': 1,
  // µg/g = mg/kg — identity
  'µg/g': 1,
  // ppm (mass) ≈ mg/kg for dilute solutions
  'ppm': 1,
  // g/g
  'g/g': 1_000_000,
  // g/kg
  'g/kg': 1_000,
};

function normalizeUnit(value: number, unitKey: string, table: Record<string, number>): number | null {
  const factor = table[unitKey];
  if (factor === undefined) return null;
  return value * factor;
}

function toPa(value: number, unit: JsonObject): number | null {
  const key = (unit['unitIri'] as string | undefined) ?? (unit['ucumCode'] as string | undefined) ?? '';
  return normalizeUnit(value, key, PRESSURE_TO_PA);
}

function toMgKg(value: number, unit: JsonObject): number | null {
  const key = (unit['unitIri'] as string | undefined) ?? (unit['ucumCode'] as string | undefined) ?? '';
  return normalizeUnit(value, key, MASS_FRACTION_TO_MG_KG);
}

// ── DCC scope-inclusion (Section 6.2, Listing 4) ─────────────────────────────

export interface DccScopeEntry {
  measurand?: string;
  quantityKindIri?: string;
  allowedMethods?: string[];
  range?: { from: number; to: number; unit: JsonObject };
  uncertainty?: {
    type?: 'absolute' | 'relativePercent';
    maxAbsolute?: number;
    maxRelativePercent?: number;
    expression?: string;
  };
}

/**
 * Check whether a DCC's measurement results fall within the scope constraints.
 * Iterates over measurementResults in the credential subject.
 */
export function checkDccScopeInclusion(
  dcc: JsonObject,
  scopeEntries: DccScopeEntry[],
): ScopeCheckResult {
  const violations: ScopeViolation[] = [];
  const subject = dcc.credentialSubject as JsonObject | undefined;
  const measurementResults = (subject?.measurementResults as JsonObject[] | undefined) ?? [];

  if (scopeEntries.length === 0) {
    return { passed: true, violations: [] };
  }

  for (const resultGroup of measurementResults) {
    const measurand = (resultGroup.measurand as string | undefined)?.toLowerCase() ?? '';
    const usedMethods = (resultGroup.usedMethods as JsonObject[] | undefined) ?? [];
    const methodRefs = usedMethods.map(m =>
      ((m['reference'] as string | undefined) ?? (m['name'] as string | undefined) ?? '').toLowerCase()
    );

    // Find scope entries matching this measurand
    const matchingEntries = scopeEntries.filter(e => {
      if (!e.measurand) return true;
      return e.measurand.toLowerCase() === measurand ||
             measurand.includes(e.measurand.toLowerCase());
    });

    if (matchingEntries.length === 0) {
      violations.push({
        code: 'NO_SCOPE_ENTRY',
        detail: `No scope entry for measurand '${resultGroup.measurand}'`,
      });
      continue;
    }

    const results = (resultGroup.results as JsonObject[] | undefined) ?? [];
    let entryMatched = false;

    for (const entry of matchingEntries) {
      let entryOk = true;
      const entryViolations: ScopeViolation[] = [];

      // Method check
      if (entry.allowedMethods && entry.allowedMethods.length > 0) {
        const allowed = entry.allowedMethods.map(m => m.toLowerCase());
        const methodOk = methodRefs.length === 0 || methodRefs.some(ref =>
          allowed.some(a => ref.includes(a) || a.includes(ref))
        );
        if (!methodOk) {
          entryViolations.push({
            code: 'METHOD_OUT_OF_SCOPE',
            detail: `Method(s) [${methodRefs.join(', ')}] not in allowedMethods [${entry.allowedMethods.join(', ')}]`,
          });
          entryOk = false;
        }
      }

      // Range and uncertainty check per result
      if (entry.range) {
        for (const result of results) {
          const data = result.data as JsonObject | undefined;
          const qty = data?.quantity as JsonObject | undefined;
          if (!qty) continue;

          const value = qty.value as number | undefined;
          const unit = qty.unit as JsonObject | undefined;

          if (value !== undefined && unit) {
            const scopeFromPa = toPa(entry.range.from, entry.range.unit);
            const scopeToPa = toPa(entry.range.to, entry.range.unit);
            const measPa = toPa(value, unit);

            if (measPa !== null && scopeFromPa !== null && scopeToPa !== null) {
              if (measPa < scopeFromPa || measPa > scopeToPa) {
                entryViolations.push({
                  code: 'RANGE_OUT_OF_SCOPE',
                  detail: `Measured value ${value} (${unit['ucumCode'] ?? ''}) outside scope range ${entry.range.from}–${entry.range.to} ${entry.range.unit['ucumCode'] ?? ''}`,
                });
                entryOk = false;
              }
            }
          }

          // Uncertainty check
          if (entry.uncertainty && qty.uncertainty) {
            const u = qty.uncertainty as JsonObject;
            const expandedU = u.expandedUncertainty as number | undefined;
            if (expandedU !== undefined && entry.uncertainty.maxAbsolute !== undefined) {
              // Normalize both to Pa
              const uPa = toPa(expandedU, unit ?? {});
              const maxPa = toPa(entry.uncertainty.maxAbsolute, entry.range?.unit ?? unit ?? {});
              if (uPa !== null && maxPa !== null && uPa > maxPa) {
                entryViolations.push({
                  code: 'UNCERTAINTY_WIDENING',
                  detail: `Expanded uncertainty ${expandedU} exceeds scope bound ${entry.uncertainty.maxAbsolute}`,
                });
                entryOk = false;
              }
            }
            if (expandedU !== undefined && value !== undefined &&
                entry.uncertainty.maxRelativePercent !== undefined) {
              const relPercent = (expandedU / Math.abs(value)) * 100;
              if (relPercent > entry.uncertainty.maxRelativePercent) {
                entryViolations.push({
                  code: 'UNCERTAINTY_WIDENING',
                  detail: `Relative uncertainty ${relPercent.toFixed(3)}% exceeds scope bound ${entry.uncertainty.maxRelativePercent}%`,
                });
                entryOk = false;
              }
            }
          }
        }
      }

      if (entryOk) {
        entryMatched = true;
        break;
      }
      violations.push(...entryViolations);
    }

    if (entryMatched) {
      // Clear violations from failed entries for this measurand — one match is enough
      violations.length = 0;
    }
  }

  return { passed: violations.length === 0, violations };
}

// ── DRMD scope-inclusion (Section 6.2, Listing 4) ────────────────────────────

export interface DrmdScopeEntry {
  matrix?: string[];
  allowedProperties?: string[];
  allowedForms?: string[];
  uncertainty?: {
    type?: 'absolute' | 'relativeExpanded';
    maxAbsoluteMgKg?: number;
    maxRelativeU_k2?: number;
  };
}

export interface DrmdPropertyCheck {
  propertyName: string;
  element: string;
  passed: boolean;
  violation?: ScopeViolation;
}

/**
 * Check whether a DRMD's certified properties fall within the scope constraints.
 * Only checks properties where isCertified=true (informative values skip per paper §6.2).
 *
 * Returns per-property results to support the characterisationOf multi-lab check (F7).
 */
export function checkDrmdScopeInclusion(
  drmd: JsonObject,
  scopeEntries: DrmdScopeEntry[],
  matrix?: string,
  form?: string,
): ScopeCheckResult {
  const violations: ScopeViolation[] = [];
  const subject = drmd.credentialSubject as JsonObject | undefined;
  const materials = (subject?.materials as JsonObject[] | undefined) ?? [];
  const propertiesList = (subject?.materialPropertiesList as JsonObject[] | undefined) ?? [];

  // Derive matrix from materials if not passed explicitly.
  // Only use an explicit 'matrix' field on the material — do NOT use the material name
  // (which is an alloy/product ID, not a scope category like 'non-ferrous metals and alloys').
  const matMaterial = materials[0] as JsonObject | undefined;
  const derivedMatrix = matrix ??
    ((matMaterial?.['matrix'] as string | undefined)?.toLowerCase() ?? null);
  const derivedForm = form ?? ((matMaterial?.['form'] as string | undefined)?.toLowerCase() ?? null);

  if (scopeEntries.length === 0) {
    return { passed: true, violations: [] };
  }

  // Find scope entries that cover this matrix.
  // If no matrix was derivable from the credential, skip matrix filtering (accept all entries).
  const matchingEntries = derivedMatrix === null
    ? scopeEntries
    : scopeEntries.filter(e => {
        if (!e.matrix || e.matrix.length === 0) return true;
        return e.matrix.some(m =>
          derivedMatrix.toLowerCase().includes(m.toLowerCase()) ||
          m.toLowerCase().includes(derivedMatrix.toLowerCase())
        );
      });

  if (matchingEntries.length === 0) {
    return {
      passed: false,
      violations: [{ code: 'MATRIX_PROPERTY_MISMATCH', detail: `Matrix '${derivedMatrix}' not in scope` }],
    };
  }

  // Check form against all matching entries.
  // If no form was derivable from the credential, skip form filtering.
  if (derivedForm !== null) {
    const formOk = matchingEntries.some(e => {
      if (!e.allowedForms || e.allowedForms.length === 0) return true;
      return e.allowedForms.map(f => f.toLowerCase()).includes(derivedForm.toLowerCase());
    });
    if (!formOk) {
      violations.push({
        code: 'MATRIX_PROPERTY_MISMATCH',
        detail: `Form '${derivedForm}' not in allowedForms [${matchingEntries.flatMap(e => e.allowedForms ?? []).join(', ')}]`,
      });
    }
  }

  // Check each certified property group
  for (const group of propertiesList) {
    const isCertified = group.isCertified as boolean | undefined;
    if (isCertified === false) continue; // informative values skip per paper §6.2

    const results = (group.results as JsonObject[] | undefined) ?? [];

    for (const result of results) {
      const name = (result.name as string | undefined) ?? '';
      // Element symbol is the first word in the name, or extract from parentheses
      const elementMatch = name.match(/\(([A-Z][a-z]?)\)/);
      const element: string = elementMatch?.[1] ?? name.split(' ')[0] ?? name;

      const data = result.data as JsonObject | undefined;
      const qty = data?.quantity as JsonObject | undefined;

      // Find scope entry covering this property
      const propEntry = matchingEntries.find(e => {
        if (!e.allowedProperties || e.allowedProperties.length === 0) return true;
        return e.allowedProperties.includes(element);
      });

      if (!propEntry) {
        violations.push({
          code: 'MATRIX_PROPERTY_MISMATCH',
          detail: `Property '${element}' (from '${name}') not in allowedProperties`,
        });
        continue;
      }

      // Uncertainty check
      if (propEntry.uncertainty && qty?.uncertainty) {
        const u = qty.uncertainty as JsonObject;
        const expandedU = u.expandedUncertainty as number | undefined;
        const value = qty.value as number | undefined;
        const unit = qty.unit as JsonObject | undefined;

        if (expandedU !== undefined && value !== undefined) {
          if (propEntry.uncertainty.maxAbsoluteMgKg !== undefined && unit) {
            const uMgKg = toMgKg(expandedU, unit);
            if (uMgKg !== null && uMgKg > propEntry.uncertainty.maxAbsoluteMgKg) {
              violations.push({
                code: 'UNCERTAINTY_WIDENING',
                detail: `Property '${element}' U=${expandedU} ${unit['ucumCode'] ?? ''} exceeds bound ${propEntry.uncertainty.maxAbsoluteMgKg} mg/kg`,
              });
            }
          }
          if (propEntry.uncertainty.maxRelativeU_k2 !== undefined && Math.abs(value) > 0) {
            const relU = expandedU / Math.abs(value);
            if (relU > propEntry.uncertainty.maxRelativeU_k2) {
              violations.push({
                code: 'UNCERTAINTY_WIDENING',
                detail: `Property '${element}' relative U=${(relU * 100).toFixed(3)}% exceeds bound ${(propEntry.uncertainty.maxRelativeU_k2 * 100).toFixed(3)}%`,
              });
            }
          }
        }
      }
    }
  }

  return { passed: violations.length === 0, violations };
}

// ── Derivation check (Section 6, Stage 2 / F9) ───────────────────────────────

/**
 * Verify that a CapabilityCredential's constraints do not exceed the
 * AccreditationCredential's scope (DERIVATION_VIOLATION check).
 *
 * For DCC: capability range must be ⊆ accreditation scope range.
 * For DRMD: capability allowedProperties must be ⊆ accreditation scope allowedProperties.
 */
export function checkDerivation(
  capabilityCredential: JsonObject,
  accreditationCredential: JsonObject,
): ScopeCheckResult {
  const violations: ScopeViolation[] = [];
  const capSubject = capabilityCredential.credentialSubject as JsonObject | undefined;
  const constraints = capSubject?.constraints as JsonObject | undefined;

  if (!constraints) {
    return { passed: true, violations: [] };
  }

  const accSubject = accreditationCredential.credentialSubject as JsonObject | undefined;
  const accScope = (accSubject?.scope as JsonObject[] | undefined) ?? [];

  if (accScope.length === 0) {
    return { passed: true, violations: [] };
  }

  const capScopeEntries = (constraints.scopeEntries as JsonObject[] | undefined) ?? [];

  // ── DCC range derivation check ─────────────────────────────────────────────
  // Each capability scopeEntry range must be ⊆ the corresponding accreditation scope range.
  for (const capEntry of capScopeEntries) {
    const capRange = capEntry.range as JsonObject | undefined;
    if (!capRange) continue;

    const capTo = capRange.to as number | undefined;
    const capUnit = capRange.unit as JsonObject | undefined;

    for (const accEntry of accScope) {
      const accRange = accEntry.range as JsonObject | undefined;
      if (!accRange) continue;

      const accTo = accRange.to as number | undefined;
      const accUnit = accRange.unit as JsonObject | undefined;

      if (capTo !== undefined && accTo !== undefined && capUnit && accUnit) {
        const capToPa = toPa(capTo, capUnit);
        const accToPa = toPa(accTo, accUnit);
        if (capToPa !== null && accToPa !== null && capToPa > accToPa) {
          violations.push({
            code: 'DERIVATION_VIOLATION',
            detail: `CapabilityCredential range.to ${capTo} ${capUnit['ucumCode'] ?? ''} exceeds AccreditationCredential scope range.to ${accTo} ${accUnit['ucumCode'] ?? ''}`,
          });
        }
      }
    }
  }

  // ── DRMD property derivation check ────────────────────────────────────────
  for (const capEntry of capScopeEntries) {
    const capProperties = capEntry.allowedProperties as string[] | undefined;
    if (!capProperties || capProperties.length === 0) continue;

    const accAllowedProperties = accScope.flatMap(e =>
      (e.allowedProperties as string[] | undefined) ?? []
    );
    if (accAllowedProperties.length > 0) {
      const extraProperties = capProperties.filter(p => !accAllowedProperties.includes(p));
      if (extraProperties.length > 0) {
        violations.push({
          code: 'DERIVATION_VIOLATION',
          detail: `CapabilityCredential allowedProperties [${extraProperties.join(', ')}] not present in AccreditationCredential scope`,
        });
      }
    }
  }

  return { passed: violations.length === 0, violations };
}
