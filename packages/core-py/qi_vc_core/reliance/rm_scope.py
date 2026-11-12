# SPDX-License-Identifier: Apache-2.0
"""Exact scope arithmetic for the experimental RM v1 binding (mirrors rm-scope.ts).

Quantities are decimal strings compared as exact rationals in kg/kg (mg/kg = 10^-6),
so no floating-point tolerance can move an acceptance boundary. Unknown units or
malformed numbers are never compared.
"""

from __future__ import annotations

import re
from collections.abc import Mapping
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


class Concepts:
    """The binding's governed concept hierarchy (skos:broader, applied transitively).

    A scope record that names a set (a material class, a form class, element contents)
    also covers every narrower concept the binding relates to it; otherwise identifiers
    must be equal. Labels are never compared.
    """

    def __init__(self, pairs: dict[str, tuple[str, ...]] | None = None) -> None:
        self._up = dict(pairs or {})

    def within(self, narrower: Any, broader: Any) -> bool:
        """True when `narrower` is `broader` or lies under it in the hierarchy."""
        if not isinstance(narrower, str) or not isinstance(broader, str):
            return False
        seen = {narrower}
        queue = [narrower]
        while queue:
            at = queue.pop(0)
            if at == broader:
                return True
            for nxt in self._up.get(at, ()):
                if nxt not in seen:
                    seen.add(nxt)
                    queue.append(nxt)
        return False


EXACT_CONCEPTS = Concepts()


def concepts_from(scope_and_mapping: Any) -> Concepts:
    """Concepts from the manifest's scopeAndMapping.broader ({narrower, broader} pairs).

    Malformed entries are ignored, so they can never widen a scope.
    """
    up: dict[str, tuple[str, ...]] = {}
    # A loaded manifest is frozen: mappings are read-only and arrays are tuples.
    entries = (
        scope_and_mapping.get("broader")
        if isinstance(scope_and_mapping, Mapping)
        else None
    )
    for entry in entries if isinstance(entries, list | tuple) else ():
        if not isinstance(entry, Mapping):
            continue
        narrower, broader = entry.get("narrower"), entry.get("broader")
        if (
            isinstance(narrower, str)
            and isinstance(broader, str)
            and narrower != broader
        ):
            up[narrower] = (*up.get(narrower, ()), broader)
    return Concepts(up)


def _strings(value: Any) -> list[str]:
    return [v for v in value if isinstance(v, str)] if isinstance(value, list) else []


def _subset(child: list[str], parent: list[str]) -> bool:
    return bool(child) and all(item in parent for item in child)


def _covers(child: list[str], parent: list[str], concepts: Concepts) -> bool:
    """Every child concept lies within some parent concept."""
    return bool(child) and all(
        any(concepts.within(item, s) for s in parent) for item in child
    )


@dataclass(frozen=True)
class Containment:
    state: Literal["established", "contradicted", "not_established"]
    reason: str
    witnesses: tuple[tuple[str, str], ...]


def contained_in(
    children: list[dict[str, Any]],
    parents: list[dict[str, Any]],
    concepts: Concepts = EXACT_CONCEPTS,
) -> Containment:
    """Every child record must fit inside ONE complete parent record (no splicing).

    Matrix, form and properties may be narrower concepts than the parent's; methods and
    quantity kind are exact.
    """
    if not children:
        return Containment("not_established", "The projected scope has no records.", ())
    witnesses: list[tuple[str, str]] = []
    for child in children:
        child_range = record_interval(child)
        if isinstance(child_range, str):
            # A reversed interval is invalid data; an unreadable one is unknown.
            return Containment(
                "contradicted" if "reversed" in child_range else "not_established",
                f"{child.get('id')}: {child_range}",
                tuple(witnesses),
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
                and concepts.within(child.get("matrixIri"), parent.get("matrixIri"))
                and concepts.within(child.get("formIri"), parent.get("formIri"))
                and parent.get("quantityKindIri") == child.get("quantityKindIri")
                and _covers(
                    properties, _strings(parent.get("allowedPropertyIris")), concepts
                )
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
