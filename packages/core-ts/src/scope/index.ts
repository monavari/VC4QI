// SPDX-License-Identifier: Apache-2.0
// Scope-inclusion and derivation checks for DCC, DRMD/RM, and evidence edges.
//
// Reason-code vocabulary (Table 3 of the paper):
//   RANGE_OUT_OF_SCOPE        — DCC range exceeds accredited range
//   METHOD_OUT_OF_SCOPE       — DCC method not in authorized method set
//   UNCERTAINTY_WIDENING      — uncertainty wider than scope bound
//   MATRIX_PROPERTY_MISMATCH  — DRMD matrix/property/form outside scope
//   NO_SCOPE_ENTRY            — no scope entry covers the claim
//   DERIVATION_VIOLATION      — child evidence scope exceeds parent evidence scope
//   UNRESOLVED_SCOPE_TERM     — a governed identifier is absent (SCO-3, the B5 boundary)
//
// SCO-1/SCO-2: categorical dimensions compare as exact equality over governed
// identifiers. Human-readable labels are display only and are never comparison
// operands. This module previously matched lowercased free text with substring
// containment, which admitted "As" for "Ash" and a "CuZn" scope entry for a
// CuZn39Pb3 claim — `in` was decidable and wrong. See docs/SCOPE_TERMS.md.

import type { JsonObject } from '../types.js';
import type { EvidenceEdge } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';

// ── Reason codes ──────────────────────────────────────────────────────────────

export type ScopeReasonCode =
  | 'RANGE_OUT_OF_SCOPE'
  | 'METHOD_OUT_OF_SCOPE'
  | 'UNCERTAINTY_WIDENING'
  | 'MATRIX_PROPERTY_MISMATCH'
  | 'NO_SCOPE_ENTRY'
  | 'DERIVATION_VIOLATION'
  | 'SUBJECT_BINDING_MISMATCH'
  | 'VALIDITY_WINDOW_VIOLATION'
  | 'UNRESOLVED_SCOPE_TERM'
  | 'UNKNOWN_SCOPE_CHECK';

// ── Governed-term comparison (SCO-1, SCO-2) ──────────────────────────────────

/**
 * Read a governed identifier. Returns null when absent — the caller must then
 * raise UNRESOLVED_SCOPE_TERM rather than fall back to a label (FC-6).
 */
function governedIri(source: JsonObject | undefined, key: string): string | null {
  const value = source?.[key];
  return typeof value === 'string' && value.length > 0 ? value : null;
}

/** Read a set of governed identifiers from a scope entry. */
function governedIriSet(source: JsonObject | undefined, key: string): string[] | null {
  const value = source?.[key];
  if (!Array.isArray(value)) return null;
  const iris = value.filter((v): v is string => typeof v === 'string' && v.length > 0);
  return iris.length > 0 ? iris : null;
}

/**
 * Exact equality over governed identifiers. No normalization, no case folding,
 * no substring containment: two identifiers denote the same term or they do not.
 * Identity is decidable here; subsumption is not, and is not attempted (SCO-6).
 */
function sameTerm(a: string, b: string): boolean {
  return a === b;
}

function unresolved(dimension: string, label: unknown): ScopeViolation {
  return {
    code: 'UNRESOLVED_SCOPE_TERM',
    detail:
      `No governed identifier for ${dimension}` +
      (label ? ` '${String(label)}'` : '') +
      '. Labels are display only and are never compared (SCO-2); supply a governed ' +
      'term. See docs/SCOPE_TERMS.md.',
  };
}

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
  /** Display only. Never a comparison operand (SCO-2). */
  measurand?: string;
  /** Governed identifier for the measurand. The comparison operand (SCO-1). */
  quantityKindIri?: string;
  /** Display only. */
  allowedMethods?: string[];
  /** Governed identifiers for admitted methods. The comparison operands. */
  allowedMethodIris?: string[];
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

  // An authorizing credential conveying no scope entries confers no scope, so
  // it cannot satisfy a scope-inclusion check. Previously returned passed:true.
  if (scopeEntries.length === 0) {
    return {
      passed: false,
      violations: [{
        code: 'NO_SCOPE_ENTRY',
        detail: 'Authorizing evidence carries no scope entries, so it confers no scope.',
      }],
    };
  }

  for (const resultGroup of measurementResults) {
    // SCO-1: the governed identifier is the operand; the label is carried only
    // so failures can name what the holder called it.
    const claimQuantityKind = governedIri(resultGroup, 'quantityKindIri');
    if (claimQuantityKind === null) {
      violations.push(unresolved('measurand', resultGroup.measurand));
      continue;
    }

    const usedMethods = (resultGroup.usedMethods as JsonObject[] | undefined) ?? [];

    // Find scope entries matching this measurand by governed identifier.
    const matchingEntries = scopeEntries.filter(e => {
      const entryQuantityKind = e.quantityKindIri;
      if (!entryQuantityKind) return false;
      return sameTerm(entryQuantityKind, claimQuantityKind);
    });

    // A scope entry that governs the measurand dimension but carries no
    // governed identifier cannot be compared; say so rather than pass silently.
    if (matchingEntries.length === 0 && scopeEntries.some(e => !e.quantityKindIri)) {
      violations.push(unresolved('scope entry measurand', undefined));
      continue;
    }

    if (matchingEntries.length === 0) {
      violations.push({
        code: 'NO_SCOPE_ENTRY',
        detail: `No scope entry for measurand ${claimQuantityKind}` +
                ` (labelled '${String(resultGroup.measurand ?? '')}')`,
      });
      continue;
    }

    const results = (resultGroup.results as JsonObject[] | undefined) ?? [];
    let entryMatched = false;

    for (const entry of matchingEntries) {
      let entryOk = true;
      const entryViolations: ScopeViolation[] = [];

      // Method check, over governed identifiers only (SCO-1).
      const allowedMethodIris = entry.allowedMethodIris;
      if (allowedMethodIris && allowedMethodIris.length > 0) {
        const claimMethodIris: (string | null)[] = usedMethods.map(m => governedIri(m, 'methodIri'));

        if (claimMethodIris.some(iri => iri === null)) {
          entryViolations.push(unresolved('method', usedMethods
            .map(m => m['reference'] ?? m['name'])
            .filter(Boolean)
            .join(', ')));
          entryOk = false;
        } else if (claimMethodIris.length > 0) {
          const methodOk = claimMethodIris.some(ref =>
            allowedMethodIris.some(a => sameTerm(a, ref as string))
          );
          if (!methodOk) {
            entryViolations.push({
              code: 'METHOD_OUT_OF_SCOPE',
              detail: `Method(s) [${claimMethodIris.join(', ')}] not in allowedMethodIris [${allowedMethodIris.join(', ')}]`,
            });
            entryOk = false;
          }
        }
      } else if (entry.allowedMethods && entry.allowedMethods.length > 0) {
        // The entry restricts methods but names them only by label, which is
        // not a comparison operand. Fail visibly rather than ignore the limit.
        entryViolations.push(unresolved('scope entry allowedMethods', entry.allowedMethods.join(', ')));
        entryOk = false;
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
  /** Display only. Never a comparison operand (SCO-2). */
  matrix?: string[];
  /** Governed identifiers for admitted matrices. The comparison operands. */
  matrixIris?: string[];
  /** Display only. */
  allowedProperties?: string[];
  /** Governed identifiers for admitted properties. */
  allowedPropertyIris?: string[];
  /** Display only. */
  allowedForms?: string[];
  /** Governed identifiers for admitted forms. */
  allowedFormIris?: string[];
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

  // Governed identifiers are the operands; `matrix`/`form` labels are display
  // only. The explicit arguments remain supported and are treated as already
  // being governed identifiers.
  const matMaterial = materials[0] as JsonObject | undefined;
  const derivedMatrix = matrix ?? governedIri(matMaterial, 'matrixIri');
  const derivedForm = form ?? governedIri(matMaterial, 'formIri');

  // An authorizing credential conveying no scope entries confers no scope.
  if (scopeEntries.length === 0) {
    return {
      passed: false,
      violations: [{
        code: 'NO_SCOPE_ENTRY',
        detail: 'Authorizing evidence carries no scope entries, so it confers no scope.',
      }],
    };
  }

  if (derivedMatrix === null) {
    return {
      passed: false,
      violations: [unresolved('matrix', matMaterial?.['matrix'])],
    };
  }

  // Find scope entries that cover this matrix, by governed identifier.
  const entriesRestrictingMatrix = scopeEntries.filter(
    e => (e.matrixIris?.length ?? 0) > 0 || (e.matrix?.length ?? 0) > 0,
  );
  if (entriesRestrictingMatrix.some(e => !(e.matrixIris?.length))) {
    return {
      passed: false,
      violations: [unresolved('scope entry matrix', entriesRestrictingMatrix.flatMap(e => e.matrix ?? []).join(', '))],
    };
  }

  const matchingEntries = scopeEntries.filter(e => {
    const iris = governedIriSet(e as unknown as JsonObject, 'matrixIris');
    if (iris === null) return true; // entry does not restrict matrix
    return iris.some(m => sameTerm(m, derivedMatrix));
  });

  if (matchingEntries.length === 0) {
    return {
      passed: false,
      violations: [{
        code: 'MATRIX_PROPERTY_MISMATCH',
        detail: `Matrix ${derivedMatrix} (labelled '${String(matMaterial?.['matrix'] ?? '')}') not in scope`,
      }],
    };
  }

  // Form check, over governed identifiers only.
  const entriesRestrictingForm = matchingEntries.filter(
    e => (e.allowedFormIris?.length ?? 0) > 0 || (e.allowedForms?.length ?? 0) > 0,
  );
  if (entriesRestrictingForm.length > 0) {
    if (entriesRestrictingForm.some(e => !(e.allowedFormIris?.length))) {
      violations.push(unresolved(
        'scope entry allowedForms',
        entriesRestrictingForm.flatMap(e => e.allowedForms ?? []).join(', '),
      ));
    } else if (derivedForm === null) {
      violations.push(unresolved('form', matMaterial?.['form']));
    } else {
      const formOk = entriesRestrictingForm.some(e =>
        (e.allowedFormIris ?? []).some(f => sameTerm(f, derivedForm)),
      );
      if (!formOk) {
        violations.push({
          code: 'MATRIX_PROPERTY_MISMATCH',
          detail: `Form ${derivedForm} not in allowedFormIris [${entriesRestrictingForm.flatMap(e => e.allowedFormIris ?? []).join(', ')}]`,
        });
      }
    }
  }

  // Check each certified property group
  for (const group of propertiesList) {
    const isCertified = group.isCertified as boolean | undefined;
    if (isCertified === false) continue; // informative values skip per paper §6.2

    const results = (group.results as JsonObject[] | undefined) ?? [];

    for (const result of results) {
      const name = (result.name as string | undefined) ?? '';
      // SCO-2: the property is identified by its governed IRI. Parsing an
      // element symbol out of a display name ("Arsenic (As)") made the label a
      // comparison operand by the back door.
      const propertyIri = governedIri(result, 'propertyIri');
      const element: string = propertyIri ?? name;

      const data = result.data as JsonObject | undefined;
      const qty = data?.quantity as JsonObject | undefined;

      // Find scope entry covering this property, by governed identifier.
      const entriesRestrictingProperty = matchingEntries.filter(
        e => (e.allowedPropertyIris?.length ?? 0) > 0 || (e.allowedProperties?.length ?? 0) > 0,
      );
      if (entriesRestrictingProperty.some(e => !(e.allowedPropertyIris?.length))) {
        violations.push(unresolved(
          'scope entry allowedProperties',
          entriesRestrictingProperty.flatMap(e => e.allowedProperties ?? []).join(', '),
        ));
        continue;
      }
      if (entriesRestrictingProperty.length > 0 && propertyIri === null) {
        violations.push(unresolved('property', name));
        continue;
      }

      const propEntry = matchingEntries.find(e => {
        const iris = e.allowedPropertyIris;
        if (!iris || iris.length === 0) return true;
        return propertyIri !== null && iris.some(p => sameTerm(p, propertyIri));
      });

      if (!propEntry) {
        violations.push({
          code: 'MATRIX_PROPERTY_MISMATCH',
          detail: `Property ${element} (labelled '${name}') not in allowedPropertyIris`,
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

// ── Evidence-graph derivation and scope dispatch ─────────────────────────────

function getCredentialTypes(credential: JsonObject): string[] {
  const type = credential.type;
  if (Array.isArray(type)) return type.map(String);
  if (typeof type === 'string') return [type];
  return [];
}

function getScopeEntries(credential: JsonObject): JsonObject[] {
  const subject = credential.credentialSubject as JsonObject | undefined;
  const constraints = subject?.constraints as JsonObject | undefined;
  const constraintEntries = constraints?.scopeEntries;
  if (Array.isArray(constraintEntries)) return constraintEntries as JsonObject[];

  const subjectScope = subject?.scope;
  if (Array.isArray(subjectScope)) return subjectScope as JsonObject[];
  if (typeof subjectScope === 'object' && subjectScope !== null) {
    const scoped = subjectScope as JsonObject;
    if (Array.isArray(scoped.scopeEntries)) return scoped.scopeEntries as JsonObject[];
  }

  const directEntries = subject?.scopeEntries;
  if (Array.isArray(directEntries)) return directEntries as JsonObject[];
  return [];
}

function getAuthorizedCredentialTypes(credential: JsonObject): string[] {
  const subject = credential.credentialSubject as JsonObject | undefined;
  const constraints = subject?.constraints as JsonObject | undefined;
  const fromConstraints = constraints?.authorizedCredentialTypes;
  if (Array.isArray(fromConstraints)) return fromConstraints.map(String);
  const scope = subject?.scope as JsonObject | undefined;
  const fromScope = scope?.authorizedCredentialTypes;
  if (Array.isArray(fromScope)) return fromScope.map(String);
  return [];
}

function asDccScopeEntries(entries: JsonObject[]): DccScopeEntry[] {
  return entries as DccScopeEntry[];
}

function asDrmdScopeEntries(entries: JsonObject[]): DrmdScopeEntry[] {
  return entries as DrmdScopeEntry[];
}

function validityWindowViolations(child: JsonObject, parent: JsonObject): ScopeViolation[] {
  const violations: ScopeViolation[] = [];
  const childFrom = child.validFrom ? new Date(String(child.validFrom)) : null;
  const childUntil = child.validUntil ? new Date(String(child.validUntil)) : null;
  const parentFrom = parent.validFrom ? new Date(String(parent.validFrom)) : null;
  const parentUntil = parent.validUntil ? new Date(String(parent.validUntil)) : null;

  if (childFrom && parentFrom && childFrom < parentFrom) {
    violations.push({
      code: 'VALIDITY_WINDOW_VIOLATION',
      detail: `Child validFrom ${String(child.validFrom)} is before parent validFrom ${String(parent.validFrom)}.`,
    });
  }
  if (childUntil && parentUntil && childUntil > parentUntil) {
    violations.push({
      code: 'VALIDITY_WINDOW_VIOLATION',
      detail: `Child validUntil ${String(child.validUntil)} is after parent validUntil ${String(parent.validUntil)}.`,
    });
  }
  return violations;
}

export function checkDerivedEdge(
  childCredential: JsonObject,
  parentCredential: JsonObject,
  _edge?: EvidenceEdge,
  _policy?: PolicyProfile,
): ScopeCheckResult {
  const violations: ScopeViolation[] = validityWindowViolations(childCredential, parentCredential);

  const childTypes = getAuthorizedCredentialTypes(childCredential);
  const parentTypes = getAuthorizedCredentialTypes(parentCredential);
  if (childTypes.length > 0 && parentTypes.length > 0) {
    const extras = childTypes.filter(type => !parentTypes.includes(type));
    if (extras.length > 0) {
      violations.push({
        code: 'DERIVATION_VIOLATION',
        detail: `Child evidence authorizes credential types [${extras.join(', ')}] not present in parent scope.`,
      });
    }
  }

  const childEntries = getScopeEntries(childCredential);
  const parentEntries = getScopeEntries(parentCredential);
  if (childEntries.length > 0 && parentEntries.length > 0) {
    for (const childEntry of childEntries) {
      const childRange = childEntry.range as JsonObject | undefined;
      if (childRange) {
        // SCO-1: match parent entries on the governed identifier, never the
        // label. D-5: domination is by a single parent record, so a child entry
        // must be covered by one parent entry rather than by their union.
        const childQuantityKind = governedIri(childEntry, 'quantityKindIri');
        const matchingParents = parentEntries.filter(parentEntry => {
          const parentQuantityKind = governedIri(parentEntry, 'quantityKindIri');
          if (childQuantityKind === null || parentQuantityKind === null) return true;
          return sameTerm(childQuantityKind, parentQuantityKind);
        });
        const childTo = childRange.to as number | undefined;
        const childUnit = childRange.unit as JsonObject | undefined;
        const covered = matchingParents.some(parentEntry => {
          const parentRange = parentEntry.range as JsonObject | undefined;
          const parentTo = parentRange?.to as number | undefined;
          const parentUnit = parentRange?.unit as JsonObject | undefined;
          if (childTo === undefined || parentTo === undefined || !childUnit || !parentUnit) return true;
          const childToPa = toPa(childTo, childUnit);
          const parentToPa = toPa(parentTo, parentUnit);
          return childToPa === null || parentToPa === null || childToPa <= parentToPa;
        });
        if (!covered) {
          violations.push({
            code: 'DERIVATION_VIOLATION',
            detail: `Child range.to ${String(childTo)} exceeds parent scope.`,
          });
        }
      }

      // Governed identifiers only (SCO-1). D-5: a child entry must be dominated
      // by a single parent record, so the admissible set comes from one parent
      // entry rather than the union of all of them — a derived entry spanning
      // two adjacent parent entries is refused.
      const childProperties = childEntry.allowedPropertyIris as string[] | undefined;
      if (childProperties?.length) {
        const dominatingParent = parentEntries.find(entry => {
          const parentProps = (entry.allowedPropertyIris as string[] | undefined) ?? [];
          if (parentProps.length === 0) return false;
          return childProperties.every(property => parentProps.some(p => sameTerm(p, property)));
        });
        const parentProperties = parentEntries.flatMap(entry =>
          (entry.allowedPropertyIris as string[] | undefined) ?? []
        );
        if (parentProperties.length > 0 && !dominatingParent) {
          const extras = childProperties.filter(
            property => !parentProperties.some(p => sameTerm(p, property)),
          );
          if (extras.length > 0) {
            violations.push({
              code: 'DERIVATION_VIOLATION',
              detail: `Child allowedProperties [${extras.join(', ')}] not present in parent scope.`,
            });
          }
        }
      }
    }
  }

  return { passed: violations.length === 0, violations };
}

export function checkScopeInclusion(
  targetCredential: JsonObject,
  authorizingEvidence: JsonObject,
  policy?: PolicyProfile,
): ScopeCheckResult {
  const types = getCredentialTypes(targetCredential);
  const scopeEntries = getScopeEntries(authorizingEvidence);
  const mode = policy?.checks.scopeInclusion ?? 'optional';

  // An authorizing credential conveying no scope entries confers no scope, so
  // it cannot satisfy scope inclusion. Previously this passed under the default
  // 'optional' mode, which let a scope check succeed against nothing at all.
  if (scopeEntries.length === 0) {
    return mode === 'ignored'
      ? { passed: true, violations: [] }
      : {
          passed: false,
          violations: [{
            code: 'NO_SCOPE_ENTRY',
            detail: 'Authorizing evidence carries no scope entries, so it confers no scope.',
          }],
        };
  }

  if (types.includes('DigitalCalibrationCertificate')) {
    return checkDccScopeInclusion(targetCredential, asDccScopeEntries(scopeEntries));
  }

  if (types.includes('ReferenceMaterialCertificate') || types.includes('DRMDCertificate')) {
    return checkDrmdScopeInclusion(targetCredential, asDrmdScopeEntries(scopeEntries));
  }

  return mode === 'required'
    ? {
        passed: false,
        violations: [{ code: 'UNKNOWN_SCOPE_CHECK', detail: `No scope checker for target types [${types.join(', ')}].` }],
      }
    : { passed: true, violations: [] };
}

// ── Legacy compatibility wrapper ─────────────────────────────────────────────

/**
 * Verify that child evidence constraints do not exceed parent evidence scope.
 * Kept as a compatibility wrapper for code that has not yet moved to
 * checkDerivedEdge.
 */
export function checkDerivation(
  childCredential: JsonObject,
  parentCredential: JsonObject,
): ScopeCheckResult {
  return checkDerivedEdge(childCredential, parentCredential);
}

export function checkLegacyCapabilityDerivation(
  childCredential: JsonObject,
  parentCredential: JsonObject,
): ScopeCheckResult {
  const violations: ScopeViolation[] = [];
  const capSubject = childCredential.credentialSubject as JsonObject | undefined;
  const constraints = capSubject?.constraints as JsonObject | undefined;

  if (!constraints) {
    return { passed: true, violations: [] };
  }

  const accSubject = parentCredential.credentialSubject as JsonObject | undefined;
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
            detail: `Child range.to ${capTo} ${capUnit['ucumCode'] ?? ''} exceeds parent scope range.to ${accTo} ${accUnit['ucumCode'] ?? ''}`,
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
          detail: `Child allowedProperties [${extraProperties.join(', ')}] not present in parent scope`,
        });
      }
    }
  }

  return { passed: violations.length === 0, violations };
}
