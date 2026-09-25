# SPDX-License-Identifier: Apache-2.0
"""Exact scope arithmetic for the experimental RM v1 binding (mirrors rm-scope.ts).

Quantities are decimal strings compared as exact rationals in kg/kg (mg/kg = 10^-6),
so no floating-point tolerance can move an acceptance boundary. Unknown units or
malformed numbers are never compared.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from fractions import Fraction
from typing import Any, Literal

_DECIMAL = re.compile(r"^(0|[1-9][0-9]*)(\.[0-9]+)?$")
RM_UNIT_EXPONENTS: dict[str, int] = {"kg/kg": 0, "mg/kg": -6}


def parse_decimal(value: Any) -> Fraction | None:
    if not isinstance(value, str) or not _DECIMAL.fullmatch(value):
        return None
    return Fraction(value)


def to_kg_per_kg(value: Any, unit: Any) -> Fraction | None:
    decimal = parse_decimal(value)
    exponent = RM_UNIT_EXPONENTS.get(unit) if isinstance(unit, str) else None
    if decimal is None or exponent is None:
        return None
    return decimal * Fraction(10) ** exponent


def format_decimal(value: Fraction) -> str:
    """Exact decimal string for a terminating fraction (denominator 2^a 5^b)."""
    if value.denominator == 1:
        return str(value.numerator)
    scale = 0
    scaled = value
    while scaled.denominator != 1:
        scaled *= 10
        scale += 1
    digits = str(scaled.numerator).rjust(scale + 1, "0")
    fraction = digits[-scale:].rstrip("0")
    return digits[:-scale] + ("." + fraction if fraction else "")


def record_interval(record: dict[str, Any]) -> tuple[Fraction, Fraction] | str:
    scope_range = record.get("range")
    if not isinstance(scope_range, dict):
        return "Scope record has no range."
    low = to_kg_per_kg(scope_range.get("from"), scope_range.get("unit"))
    high = to_kg_per_kg(scope_range.get("to"), scope_range.get("unit"))
    if low is None or high is None:
        return (
            f"Unsupported or malformed range {scope_range.get('from')}–"
            f"{scope_range.get('to')} {scope_range.get('unit')}."
        )
    if low > high:
        return "Scope record range is reversed."
    return low, high


def _strings(value: Any) -> list[str]:
    return [v for v in value if isinstance(v, str)] if isinstance(value, list) else []


def _subset(child: list[str], parent: list[str]) -> bool:
    return bool(child) and all(item in parent for item in child)


@dataclass(frozen=True)
class Containment:
    state: Literal["established", "contradicted", "not_established"]
    reason: str
    witnesses: tuple[tuple[str, str], ...]


def contained_in(
    children: list[dict[str, Any]], parents: list[dict[str, Any]]
) -> Containment:
    """Every child record must fit inside ONE complete parent record (no splicing)."""
    if not children:
        return Containment("not_established", "The projected scope has no records.", ())
    witnesses: list[tuple[str, str]] = []
    for child in children:
        child_range = record_interval(child)
        if isinstance(child_range, str):
            return Containment(
                "not_established", f"{child.get('id')}: {child_range}", tuple(witnesses)
            )
        properties = _strings(child.get("allowedPropertyIris"))
        methods = _strings(child.get("allowedMethodIris"))
        if (
            not properties
            or not methods
            or not all(
                isinstance(child.get(k), str)
                for k in ("matrixIri", "formIri", "quantityKindIri")
            )
        ):
            return Containment(
                "not_established",
                f"{child.get('id')}: a restricted dimension is missing or empty.",
                tuple(witnesses),
            )
        match = None
        for parent in parents:
            parent_range = record_interval(parent)
            if (
                not isinstance(parent_range, str)
                and parent.get("matrixIri") == child.get("matrixIri")
                and parent.get("formIri") == child.get("formIri")
                and parent.get("quantityKindIri") == child.get("quantityKindIri")
                and _subset(properties, _strings(parent.get("allowedPropertyIris")))
                and _subset(methods, _strings(parent.get("allowedMethodIris")))
                and child_range[0] >= parent_range[0]
                and child_range[1] <= parent_range[1]
            ):
                match = parent
                break
        if match is None:
            return Containment(
                "contradicted",
                f"{child.get('id')} is not contained in any single parent record.",
                tuple(witnesses),
            )
        witnesses.append((str(child.get("id")), str(match.get("id"))))
    listed = "; ".join(f"{c} ⊆ {p}" for c, p in witnesses)
    return Containment(
        "established",
        f"Each projected record lies within one parent record ({listed}).",
        tuple(witnesses),
    )
