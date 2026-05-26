# SPDX-License-Identifier: Apache-2.0
# Scope-inclusion algorithm for DCC and DRMD credentials.
# Python port of packages/core-ts/src/scope/index.ts — implements Section 6.2 (Listing 4).
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Literal

JsonObject = dict[str, Any]

# ── Reason codes (Table 3 of the paper) ──────────────────────────────────────

ScopeReasonCode = Literal[
    "RANGE_OUT_OF_SCOPE",
    "METHOD_OUT_OF_SCOPE",
    "UNCERTAINTY_WIDENING",
    "MATRIX_PROPERTY_MISMATCH",
    "NO_SCOPE_ENTRY",
    "DERIVATION_VIOLATION",
    "SUBJECT_BINDING_MISMATCH",
    "VALIDITY_WINDOW_VIOLATION",
    "UNKNOWN_SCOPE_CHECK",
]


@dataclass
class ScopeViolation:
    code: str
    detail: str


@dataclass
class ScopeCheckResult:
    passed: bool
    violations: list[ScopeViolation] = field(default_factory=list)


# ── Unit normalization ────────────────────────────────────────────────────────

_PRESSURE_TO_PA: dict[str, float] = {
    "http://qudt.org/vocab/unit/PA": 1,
    "http://qudt.org/vocab/unit/KiloPA": 1e3,
    "http://qudt.org/vocab/unit/MegaPA": 1e6,
    "http://qudt.org/vocab/unit/BAR": 1e5,
    "Pa": 1, "kPa": 1e3, "MPa": 1e6, "bar": 1e5,
}

_MASS_FRACTION_TO_MG_KG: dict[str, float] = {
    "http://qudt.org/vocab/unit/PERCENT": 10_000,
    "%": 10_000,
    "http://qudt.org/vocab/unit/MilliGM-PER-KiloGM": 1,
    "mg/kg": 1,
    "µg/g": 1, "ppm": 1,
    "g/g": 1_000_000,
    "g/kg": 1_000,
}


def _unit_key(unit: JsonObject) -> str:
    return str(unit.get("unitIri") or unit.get("ucumCode") or "")


def _to_pa(value: float, unit: JsonObject) -> float | None:
    factor = _PRESSURE_TO_PA.get(_unit_key(unit))
    return value * factor if factor is not None else None


def _to_mg_kg(value: float, unit: JsonObject) -> float | None:
    factor = _MASS_FRACTION_TO_MG_KG.get(_unit_key(unit))
    return value * factor if factor is not None else None


# ── DCC scope-inclusion ───────────────────────────────────────────────────────

@dataclass
class DccScopeEntry:
    measurand: str | None = None
    quantity_kind_iri: str | None = None
    allowed_methods: list[str] = field(default_factory=list)
    range_from: float | None = None
    range_to: float | None = None
    range_unit: JsonObject = field(default_factory=dict)
    uncertainty_max_absolute: float | None = None
    uncertainty_max_relative_percent: float | None = None


def check_dcc_scope_inclusion(
    dcc: JsonObject,
    scope_entries: list[DccScopeEntry],
) -> ScopeCheckResult:
    """Check DCC measurement results against capability scope entries."""
    violations: list[ScopeViolation] = []
    subject = dcc.get("credentialSubject") or {}
    measurement_results: list[JsonObject] = subject.get("measurementResults") or []

    if not scope_entries:
        return ScopeCheckResult(passed=True)

    for result_group in measurement_results:
        measurand = str(result_group.get("measurand", "")).lower()
        used_methods: list[JsonObject] = result_group.get("usedMethods") or []
        method_refs = [
            str(m.get("reference") or m.get("name") or "").lower()
            for m in used_methods
        ]

        matching = [
            e for e in scope_entries
            if not e.measurand or
               e.measurand.lower() == measurand or
               measurand in e.measurand.lower() or
               e.measurand.lower() in measurand
        ]

        if not matching:
            violations.append(ScopeViolation(
                code="NO_SCOPE_ENTRY",
                detail=f"No scope entry for measurand '{result_group.get('measurand')}'",
            ))
            continue

        results: list[JsonObject] = result_group.get("results") or []
        entry_matched = False

        for entry in matching:
            entry_ok = True
            entry_violations: list[ScopeViolation] = []

            # Method check
            if entry.allowed_methods:
                allowed_lower = [m.lower() for m in entry.allowed_methods]
                method_ok = not method_refs or any(
                    any(ref in a or a in ref for a in allowed_lower)
                    for ref in method_refs
                )
                if not method_ok:
                    entry_violations.append(ScopeViolation(
                        code="METHOD_OUT_OF_SCOPE",
                        detail=f"Method(s) [{', '.join(method_refs)}] not in allowedMethods [{', '.join(entry.allowed_methods)}]",
                    ))
                    entry_ok = False

            # Range + uncertainty check
            if entry.range_to is not None:
                for result in results:
                    qty: JsonObject = (result.get("data") or {}).get("quantity") or {}
                    value = qty.get("value")
                    unit = qty.get("unit") or {}
                    if value is None:
                        continue

                    scope_from_pa = _to_pa(entry.range_from or 0, entry.range_unit)
                    scope_to_pa = _to_pa(entry.range_to, entry.range_unit)
                    meas_pa = _to_pa(float(value), unit)

                    if meas_pa is not None and scope_from_pa is not None and scope_to_pa is not None:
                        if meas_pa < scope_from_pa or meas_pa > scope_to_pa:
                            entry_violations.append(ScopeViolation(
                                code="RANGE_OUT_OF_SCOPE",
                                detail=f"Measured {value} {unit.get('ucumCode','')} outside scope range {entry.range_from}–{entry.range_to} {entry.range_unit.get('ucumCode','')}",
                            ))
                            entry_ok = False

                    # Uncertainty
                    uncertainty: JsonObject = qty.get("uncertainty") or {}
                    expanded_u = uncertainty.get("expandedUncertainty")
                    if expanded_u is not None:
                        if entry.uncertainty_max_absolute is not None:
                            u_pa = _to_pa(float(expanded_u), unit)
                            max_pa = _to_pa(entry.uncertainty_max_absolute, entry.range_unit)
                            if u_pa is not None and max_pa is not None and u_pa > max_pa:
                                entry_violations.append(ScopeViolation(
                                    code="UNCERTAINTY_WIDENING",
                                    detail=f"Expanded uncertainty {expanded_u} exceeds scope bound {entry.uncertainty_max_absolute}",
                                ))
                                entry_ok = False
                        if entry.uncertainty_max_relative_percent is not None and float(value) != 0:
                            rel_pct = (float(expanded_u) / abs(float(value))) * 100
                            if rel_pct > entry.uncertainty_max_relative_percent:
                                entry_violations.append(ScopeViolation(
                                    code="UNCERTAINTY_WIDENING",
                                    detail=f"Relative uncertainty {rel_pct:.3f}% exceeds scope bound {entry.uncertainty_max_relative_percent}%",
                                ))
                                entry_ok = False

            if entry_ok:
                entry_matched = True
                break
            violations.extend(entry_violations)

        if entry_matched:
            violations.clear()

    return ScopeCheckResult(passed=len(violations) == 0, violations=violations)


# ── DRMD scope-inclusion ──────────────────────────────────────────────────────

@dataclass
class DrmdScopeEntry:
    matrix: list[str] = field(default_factory=list)
    allowed_properties: list[str] = field(default_factory=list)
    allowed_forms: list[str] = field(default_factory=list)
    uncertainty_max_absolute_mg_kg: float | None = None
    uncertainty_max_relative_u_k2: float | None = None


def check_drmd_scope_inclusion(
    drmd: JsonObject,
    scope_entries: list[DrmdScopeEntry],
    matrix: str | None = None,
    form: str | None = None,
) -> ScopeCheckResult:
    """Check DRMD certified properties against capability scope entries.

    Only checks properties where isCertified=True per paper §6.2.
    """
    violations: list[ScopeViolation] = []
    subject = drmd.get("credentialSubject") or {}
    materials: list[JsonObject] = subject.get("materials") or []
    properties_list: list[JsonObject] = subject.get("materialPropertiesList") or []

    first_material = materials[0] if materials else {}
    derived_matrix = matrix or str(first_material.get("matrix") or "").lower()
    derived_form = form or str(first_material.get("form") or "").lower()

    if not scope_entries:
        return ScopeCheckResult(passed=True)

    matching = [
        e for e in scope_entries
        if not e.matrix or any(
            derived_matrix.lower() in m.lower() or m.lower() in derived_matrix.lower()
            for m in e.matrix
        )
    ]

    if not matching:
        return ScopeCheckResult(
            passed=False,
            violations=[ScopeViolation(code="MATRIX_PROPERTY_MISMATCH", detail=f"Matrix '{derived_matrix}' not in scope")],
        )

    if derived_form:
        form_ok = any(
            not e.allowed_forms or derived_form.lower() in [f.lower() for f in e.allowed_forms]
            for e in matching
        )
        if not form_ok:
            all_forms = [f for e in matching for f in e.allowed_forms]
            violations.append(ScopeViolation(
                code="MATRIX_PROPERTY_MISMATCH",
                detail=f"Form '{derived_form}' not in allowedForms [{', '.join(all_forms)}]",
            ))

    import re
    for group in properties_list:
        if group.get("isCertified") is False:
            continue  # informative values skip per paper §6.2

        results: list[JsonObject] = group.get("results") or []
        for result in results:
            name = str(result.get("name") or "")
            m = re.search(r"\(([A-Z][a-z]?)\)", name)
            element = m.group(1) if m else (name.split()[0] if name.split() else name)

            prop_entry = next(
                (e for e in matching
                 if not e.allowed_properties or element in e.allowed_properties),
                None,
            )

            if prop_entry is None:
                violations.append(ScopeViolation(
                    code="MATRIX_PROPERTY_MISMATCH",
                    detail=f"Property '{element}' (from '{name}') not in allowedProperties",
                ))
                continue

            qty: JsonObject = (result.get("data") or {}).get("quantity") or {}
            expanded_u = (qty.get("uncertainty") or {}).get("expandedUncertainty")
            value = qty.get("value")
            unit: JsonObject = qty.get("unit") or {}

            if expanded_u is not None and value is not None:
                if prop_entry.uncertainty_max_absolute_mg_kg is not None:
                    u_mg = _to_mg_kg(float(expanded_u), unit)
                    if u_mg is not None and u_mg > prop_entry.uncertainty_max_absolute_mg_kg:
                        violations.append(ScopeViolation(
                            code="UNCERTAINTY_WIDENING",
                            detail=f"Property '{element}' U={expanded_u} {unit.get('ucumCode','')} exceeds bound {prop_entry.uncertainty_max_absolute_mg_kg} mg/kg",
                        ))
                if prop_entry.uncertainty_max_relative_u_k2 is not None and float(value) != 0:
                    rel_u = float(expanded_u) / abs(float(value))
                    if rel_u > prop_entry.uncertainty_max_relative_u_k2:
                        violations.append(ScopeViolation(
                            code="UNCERTAINTY_WIDENING",
                            detail=f"Property '{element}' relative U={rel_u*100:.3f}% exceeds bound {prop_entry.uncertainty_max_relative_u_k2*100:.3f}%",
                        ))

    return ScopeCheckResult(passed=len(violations) == 0, violations=violations)


# ── Derivation check (F9 / Stage 2) ──────────────────────────────────────────

def check_derivation(
    child_credential: JsonObject,
    parent_credential: JsonObject,
) -> ScopeCheckResult:
    """Compatibility wrapper for checking child evidence constraints against parent scope."""
    violations: list[ScopeViolation] = []
    cap_subject = child_credential.get("credentialSubject") or {}
    constraints: JsonObject = cap_subject.get("constraints") or {}

    if not constraints:
        return ScopeCheckResult(passed=True)

    acc_subject = parent_credential.get("credentialSubject") or {}
    acc_scope: list[JsonObject] = acc_subject.get("scope") or []

    if not acc_scope:
        return ScopeCheckResult(passed=True)

    # DCC range derivation check
    cap_range: JsonObject = constraints.get("range") or {}
    if cap_range:
        cap_to = cap_range.get("to")
        cap_unit: JsonObject = cap_range.get("unit") or {}
        for entry in acc_scope:
            acc_range: JsonObject = entry.get("range") or {}
            acc_to = acc_range.get("to")
            acc_unit: JsonObject = acc_range.get("unit") or {}
            if cap_to is not None and acc_to is not None:
                cap_to_pa = _to_pa(float(cap_to), cap_unit)
                acc_to_pa = _to_pa(float(acc_to), acc_unit)
                if cap_to_pa is not None and acc_to_pa is not None and cap_to_pa > acc_to_pa:
                    violations.append(ScopeViolation(
                        code="DERIVATION_VIOLATION",
                        detail=f"Child range.to {cap_to} {cap_unit.get('ucumCode','')} exceeds parent scope range.to {acc_to} {acc_unit.get('ucumCode','')}",
                    ))

    # DRMD property derivation check
    cap_properties: list[str] = constraints.get("allowedProperties") or []
    if cap_properties:
        acc_allowed: list[str] = [
            p for e in acc_scope for p in (e.get("allowedProperties") or [])
        ]
        if acc_allowed:
            extra = [p for p in cap_properties if p not in acc_allowed]
            if extra:
                violations.append(ScopeViolation(
                    code="DERIVATION_VIOLATION",
                    detail=f"Child allowedProperties [{', '.join(extra)}] not in parent scope",
                ))

    return ScopeCheckResult(passed=len(violations) == 0, violations=violations)


def _credential_types(credential: JsonObject) -> list[str]:
    value = credential.get("type")
    if isinstance(value, list):
        return [str(item) for item in value]
    return [str(value)] if isinstance(value, str) else []


def _scope_entries(credential: JsonObject) -> list[JsonObject]:
    subject = credential.get("credentialSubject") or {}
    constraints = subject.get("constraints") or {}
    if isinstance(constraints.get("scopeEntries"), list):
        return constraints["scopeEntries"]
    scope = subject.get("scope")
    if isinstance(scope, list):
        return scope
    if isinstance(scope, dict) and isinstance(scope.get("scopeEntries"), list):
        return scope["scopeEntries"]
    if isinstance(subject.get("scopeEntries"), list):
        return subject["scopeEntries"]
    return []


def _authorized_types(credential: JsonObject) -> list[str]:
    subject = credential.get("credentialSubject") or {}
    constraints = subject.get("constraints") or {}
    if isinstance(constraints.get("authorizedCredentialTypes"), list):
        return [str(v) for v in constraints["authorizedCredentialTypes"]]
    scope = subject.get("scope") or {}
    if isinstance(scope, dict) and isinstance(scope.get("authorizedCredentialTypes"), list):
        return [str(v) for v in scope["authorizedCredentialTypes"]]
    return []


def _validity_violations(child: JsonObject, parent: JsonObject) -> list[ScopeViolation]:
    violations: list[ScopeViolation] = []
    child_from = child.get("validFrom")
    parent_from = parent.get("validFrom")
    if child_from and parent_from and str(child_from) < str(parent_from):
        violations.append(ScopeViolation(
            code="VALIDITY_WINDOW_VIOLATION",
            detail=f"Child validFrom {child_from} is before parent validFrom {parent_from}.",
        ))
    child_until = child.get("validUntil")
    parent_until = parent.get("validUntil")
    if child_until and parent_until and str(child_until) > str(parent_until):
        violations.append(ScopeViolation(
            code="VALIDITY_WINDOW_VIOLATION",
            detail=f"Child validUntil {child_until} is after parent validUntil {parent_until}.",
        ))
    return violations


def check_derived_edge(
    child_credential: JsonObject,
    parent_credential: JsonObject,
    edge: Any | None = None,
    policy: Any | None = None,
) -> ScopeCheckResult:
    violations = _validity_violations(child_credential, parent_credential)
    child_types = _authorized_types(child_credential)
    parent_types = _authorized_types(parent_credential)
    extras = [t for t in child_types if parent_types and t not in parent_types]
    if extras:
        violations.append(ScopeViolation(
            code="DERIVATION_VIOLATION",
            detail=f"Child evidence authorizes credential types [{', '.join(extras)}] not present in parent scope.",
        ))

    child_entries = _scope_entries(child_credential)
    parent_entries = _scope_entries(parent_credential)
    if child_entries and parent_entries:
        for child_entry in child_entries:
            child_range = child_entry.get("range") or {}
            if child_range:
                child_to = child_range.get("to")
                child_unit = child_range.get("unit") or {}
                covered = False
                for parent_entry in parent_entries:
                    child_measurand = str(child_entry.get("measurand", "")).lower()
                    parent_measurand = str(parent_entry.get("measurand", "")).lower()
                    if child_measurand and parent_measurand and child_measurand != parent_measurand:
                        continue
                    parent_range = parent_entry.get("range") or {}
                    parent_to = parent_range.get("to")
                    parent_unit = parent_range.get("unit") or {}
                    if child_to is None or parent_to is None:
                        covered = True
                        continue
                    child_pa = _to_pa(float(child_to), child_unit)
                    parent_pa = _to_pa(float(parent_to), parent_unit)
                    if child_pa is None or parent_pa is None or child_pa <= parent_pa:
                        covered = True
                if not covered:
                    violations.append(ScopeViolation(
                        code="DERIVATION_VIOLATION",
                        detail=f"Child range.to {child_to} exceeds parent scope.",
                    ))

            child_props = child_entry.get("allowedProperties") or []
            parent_props = [p for entry in parent_entries for p in (entry.get("allowedProperties") or [])]
            extra_props = [p for p in child_props if parent_props and p not in parent_props]
            if extra_props:
                violations.append(ScopeViolation(
                    code="DERIVATION_VIOLATION",
                    detail=f"Child allowedProperties [{', '.join(extra_props)}] not present in parent scope.",
                ))
    return ScopeCheckResult(passed=len(violations) == 0, violations=violations)


def check_scope_inclusion(
    target_credential: JsonObject,
    authorizing_evidence: JsonObject,
    policy: Any | None = None,
) -> ScopeCheckResult:
    types = _credential_types(target_credential)
    entries = _scope_entries(authorizing_evidence)
    mode = getattr(getattr(policy, "checks", None), "scopeInclusion", "optional")
    if not entries:
        if mode in ("ignored", "optional", None):
            return ScopeCheckResult(passed=True)
        return ScopeCheckResult(passed=False, violations=[
            ScopeViolation(code="NO_SCOPE_ENTRY", detail="Authorizing evidence has no scope entries.")
        ])

    if "DigitalCalibrationCertificate" in types:
        dcc_entries = [
            DccScopeEntry(
                measurand=e.get("measurand"),
                allowed_methods=e.get("allowedMethods") or [],
                range_from=(e.get("range") or {}).get("from"),
                range_to=(e.get("range") or {}).get("to"),
                range_unit=(e.get("range") or {}).get("unit") or {},
                uncertainty_max_absolute=(e.get("uncertainty") or {}).get("maxAbsolute"),
                uncertainty_max_relative_percent=(e.get("uncertainty") or {}).get("maxRelativePercent"),
            )
            for e in entries
        ]
        return check_dcc_scope_inclusion(target_credential, dcc_entries)
    if "ReferenceMaterialCertificate" in types:
        drmd_entries = [
            DrmdScopeEntry(
                matrix=e.get("matrix") or [],
                allowed_properties=e.get("allowedProperties") or [],
                allowed_forms=e.get("allowedForms") or [],
                uncertainty_max_absolute_mg_kg=(e.get("uncertainty") or {}).get("maxAbsoluteMgKg"),
                uncertainty_max_relative_u_k2=(e.get("uncertainty") or {}).get("maxRelativeU_k2"),
            )
            for e in entries
        ]
        return check_drmd_scope_inclusion(target_credential, drmd_entries)
    if mode == "required":
        return ScopeCheckResult(passed=False, violations=[
            ScopeViolation(code="UNKNOWN_SCOPE_CHECK", detail=f"No scope checker for target types [{', '.join(types)}].")
        ])
    return ScopeCheckResult(passed=True)
