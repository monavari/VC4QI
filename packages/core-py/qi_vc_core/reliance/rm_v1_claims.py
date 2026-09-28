# SPDX-License-Identifier: Apache-2.0
"""Claim mapping, scope coverage and conformity for RM v1 (mirrors rm-v1-claims.ts).

Gate 4 maps a selected result into governed coordinates and exact kg/kg quantities;
gate 5 requires one complete record of the route's own scope credential to cover it;
gate 6 checks conformity under a verifier-owned requirement and decision rule.
"""

from __future__ import annotations

from dataclasses import dataclass
from fractions import Fraction
from typing import Any, Literal

from .rm_scope import (
    RM_UNIT_EXPONENTS,
    format_decimal,
    parse_decimal,
    record_interval,
    to_kg_per_kg,
)
from .types import SemanticState, semantic_or

MethodSuccession = Literal["accept-successor", "require-extension", "none"]
AcceptWhen = Literal[
    "value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"
]


@dataclass(frozen=True)
class MethodRevision:
    method: str
    revises: str


@dataclass(frozen=True)
class ClaimCoordinates:
    matrix_iri: str
    form_iri: str
    property_iri: str
    method_iri: str
    quantity_kind_iri: str
    value: Fraction  # kg/kg
    uncertainty: Fraction  # kg/kg


@dataclass(frozen=True)
class Outcome:
    state: SemanticState
    reason: str
    sources: tuple[str, ...] = ()
    coordinates: ClaimCoordinates | None = None
    record: str | None = None


@dataclass(frozen=True)
class ConformityRequirement:
    id: str
    property_iri: str
    quantity_kind_iri: str
    upper_limit_value: str
    upper_limit_unit: str


@dataclass(frozen=True)
class DecisionRule:
    id: str
    accept_when: AcceptWhen


def _short(iri: Any) -> str:
    text = str(iri)
    for sep in ("#", "/"):
        text = text.rsplit(sep, 1)[-1]
    return text


def _strings(value: Any) -> list[str]:
    return [v for v in value if isinstance(v, str)] if isinstance(value, list) else []


def in_unit(value: Fraction, unit: str) -> Fraction:
    """Exact conversion from kg/kg into ``unit``."""
    return value / Fraction(10) ** RM_UNIT_EXPONENTS[unit]


def map_claim(d: dict[str, Any], pointer: str, result: Any) -> Outcome:
    """Gate 4: governed coordinates of the selected result, or why they are missing."""
    subject = d.get("credentialSubject")
    subject = subject if isinstance(subject, dict) else {}
    materials = [m for m in subject.get("materials") or [] if isinstance(m, dict)]
    if len(materials) != 1:
        return Outcome(
            "not_established",
            "The certificate must name exactly one material.",
            ("/credentialSubject/materials",),
        )
    material = materials[0]
    if not isinstance(result, dict):
        return Outcome("not_established", f"No result at {pointer}.", (pointer,))
    data = result.get("data")
    quantity = data.get("quantity") if isinstance(data, dict) else None
    if not isinstance(quantity, dict):
        return Outcome("not_established", "The result has no quantity.", (pointer,))
    unit_obj = quantity.get("unit")
    unit = unit_obj.get("ucumCode") if isinstance(unit_obj, dict) else None
    if not isinstance(unit, str) or unit not in RM_UNIT_EXPONENTS:
        return Outcome(
            "not_established",
            f"Unit {unit} has no supported mapping (mg/kg, kg/kg).",
            (f"{pointer}/data/quantity/unit",),
        )
    uncertainty = quantity.get("uncertainty")
    uncertainty = uncertainty if isinstance(uncertainty, dict) else {}
    k = parse_decimal(uncertainty.get("coverageFactor"))
    if k is None or k != 2:
        return Outcome(
            "not_established",
            f"Coverage factor {uncertainty.get('coverageFactor')} is not the "
            "binding's k = 2.",
            (f"{pointer}/data/quantity/uncertainty",),
        )
    value = to_kg_per_kg(quantity.get("value"), unit)
    expanded = to_kg_per_kg(uncertainty.get("expandedUncertainty"), unit)
    if value is None or expanded is None:
        return Outcome(
            "not_established",
            "Value or expanded uncertainty is not a supported decimal.",
            (f"{pointer}/data/quantity",),
        )
    dims = {
        "matrixIri": material.get("matrixIri"),
        "formIri": material.get("formIri"),
        "propertyIri": result.get("propertyIri"),
        "methodIri": result.get("methodIri"),
        "quantityKindIri": quantity.get("quantityKind"),
    }
    missing = [key for key, v in dims.items() if not isinstance(v, str)]
    if missing:
        return Outcome(
            "not_established",
            f"Missing governed identifier: {', '.join(missing)}.",
            (pointer,),
        )
    return Outcome(
        "established",
        f"Mapped {_short(dims['propertyIri'])} by {_short(dims['methodIri'])} in "
        f"{_short(dims['matrixIri'])}: {quantity.get('value')} ± "
        f"{uncertainty.get('expandedUncertainty')} {unit} (k = 2).",
        (pointer,),
        coordinates=ClaimCoordinates(
            str(dims["matrixIri"]),
            str(dims["formIri"]),
            str(dims["propertyIri"]),
            str(dims["methodIri"]),
            str(dims["quantityKindIri"]),
            value,
            expanded,
        ),
    )


def _method_covered(
    method: str,
    allowed: list[str],
    revisions: tuple[MethodRevision, ...],
    succession: MethodSuccession,
) -> tuple[SemanticState, str]:
    if method in allowed:
        return "established", f"method {_short(method)}"
    revised = next(
        (r for r in revisions if r.method == method and r.revises in allowed), None
    )
    if revised is None:
        return "contradicted", f"method {_short(method)} is not allowed"
    pair = f"{_short(revised.revises)} → {_short(method)}"
    if succession == "accept-successor":
        return "established", f"method {_short(method)} as accepted successor ({pair})"
    if succession == "require-extension":
        return (
            "contradicted",
            f"method {_short(method)} needs an explicit scope extension ({pair})",
        )
    return "not_established", f"no governed {pair} succession rule in the profile"


def claim_coverage(
    claim: ClaimCoordinates,
    records: list[dict[str, Any]],
    revisions: tuple[MethodRevision, ...],
    succession: MethodSuccession,
) -> Outcome:
    """Gate 5: one complete record covers every dimension (records are alternatives)."""
    sources = ("/credentialSubject/scope",)
    if not records:
        return Outcome("not_established", "The scope has no records.", sources)
    outcomes: list[tuple[str, SemanticState, str]] = []
    for record in records:
        rid = str(record.get("id"))
        interval = record_interval(record)
        if isinstance(interval, str):
            state: SemanticState = (
                "contradicted" if "reversed" in interval else "not_established"
            )
            outcomes.append((rid, state, f"{_short(rid)}: {interval}"))
            continue
        low, high = interval
        failures: list[str] = []
        if record.get("matrixIri") != claim.matrix_iri:
            failures.append(
                f"matrix {_short(claim.matrix_iri)} ≠ {_short(record.get('matrixIri'))}"
            )
        if record.get("formIri") != claim.form_iri:
            failures.append(
                f"form {_short(claim.form_iri)} ≠ {_short(record.get('formIri'))}"
            )
        if record.get("quantityKindIri") != claim.quantity_kind_iri:
            failures.append(
                f"quantity kind {_short(claim.quantity_kind_iri)} ≠ "
                f"{_short(record.get('quantityKindIri'))}"
            )
        if claim.property_iri not in _strings(record.get("allowedPropertyIris")):
            failures.append(f"property {_short(claim.property_iri)} is not allowed")
        if claim.value < low:
            failures.append("value is below the range")
        if claim.value > high:
            failures.append("value is above the range")
        method_state, method_reason = _method_covered(
            claim.method_iri,
            _strings(record.get("allowedMethodIris")),
            revisions,
            succession,
        )
        if failures or method_state == "contradicted":
            extra = [method_reason] if method_state == "contradicted" else []
            outcomes.append(
                (rid, "contradicted", f"{_short(rid)}: {'; '.join(failures + extra)}")
            )
        elif method_state == "not_established":
            outcomes.append((rid, "not_established", f"{_short(rid)}: {method_reason}"))
        else:
            value = format_decimal(in_unit(claim.value, "mg/kg"))
            lo = format_decimal(in_unit(low, "mg/kg"))
            hi = format_decimal(in_unit(high, "mg/kg"))
            outcomes.append(
                (
                    rid,
                    "established",
                    f"{_short(rid)} covers {_short(claim.property_iri)}, "
                    f"{method_reason}, {_short(claim.matrix_iri)}/"
                    f"{_short(claim.form_iri)}, {value} mg/kg within {lo}–{hi} mg/kg",
                )
            )
    state = semantic_or(tuple(o[1] for o in outcomes))
    covering = next((o for o in outcomes if o[1] == "established"), None)
    if covering is not None:
        return Outcome(state, covering[2], sources, record=covering[0])
    listed = " | ".join(o[2] for o in outcomes)
    return Outcome(
        state, f"No single scope record covers the claim ({listed}).", sources
    )


def evaluate_conformity(
    claim: ClaimCoordinates, requirement: ConformityRequirement, rule: DecisionRule
) -> Outcome:
    """Gate 6: exact conformity with an upper limit, shown in the limit's unit."""
    if (
        claim.property_iri != requirement.property_iri
        or claim.quantity_kind_iri != requirement.quantity_kind_iri
    ):
        return Outcome(
            "not_established",
            f"Requirement {requirement.id} does not apply to this claim's property "
            "and quantity kind.",
        )
    unit = requirement.upper_limit_unit
    limit = to_kg_per_kg(requirement.upper_limit_value, unit)
    if limit is None:
        return Outcome(
            "not_established", f"Requirement {requirement.id} has an unsupported limit."
        )

    def show(x: Fraction) -> str:
        return format_decimal(in_unit(x, unit))

    guarded = rule.accept_when == "value-plus-expanded-uncertainty-at-most-limit"
    tested = claim.value + claim.uncertainty if guarded else claim.value
    conforms = tested <= limit
    lhs = (
        f"{show(claim.value)} + {show(claim.uncertainty)} = {show(tested)}"
        if guarded
        else show(claim.value)
    )
    arithmetic = f"{lhs} {'≤' if conforms else '>'} {show(limit)} {unit}"
    verdict = "Conforms" if conforms else "Does not conform"
    return Outcome(
        "established" if conforms else "contradicted",
        f"{verdict} under {rule.id}: {arithmetic}.",
    )
