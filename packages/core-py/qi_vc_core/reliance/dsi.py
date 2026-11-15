# SPDX-License-Identifier: Apache-2.0
"""Quantity values in the shape of PTB D-SI 2.2.1 (mirror of ``dsi.ts``).

The experimental bindings carry every measured value as D-SI's ``si:real``, written in
JSON with D-SI's element names: ``label``, ``quantityTypeQUDT`` (a QUDT quantity-kind
name), ``value``, ``unit`` (a D-SI unit identifier such as
``\\milli\\gram\\kilogram\\tothe{-1}``) and
``measurementUncertaintyUnivariate.expandedMU`` with ``valueExpandedMU``,
``coverageFactor``, ``coverageProbability`` and ``distribution``.

This module only finds the parts. It never parses D-SI's unit grammar: a binding accepts
an exact list of unit identifiers, and anything else stays not established.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any

DSI_REFERENCE = {
    "name": "PTB D-SI (Digital System of Units) XML schema",
    "version": "2.2.1",
    "schema": "https://www.ptb.de/si/v2.2.1/SI_Format.xsd",
    "digestSRI": (
        "sha384-FK8DweUwpgaSM7YHkndHPFs5ZcQM8b1ug4gJpNme+quQUFdLWEjyEi512P5i3Nd0"
    ),
    "source": "https://gitlab1.ptb.de/d-ptb/d-si/xsd-d-si/-/tree/2.2.1",
}


@dataclass(frozen=True)
class DsiUnit:
    """A D-SI unit identifier a binding accepts: power of ten and display symbol."""

    exponent: int
    symbol: str


@dataclass(frozen=True)
class RealReading:
    """One ``si:real`` with an expanded uncertainty, as written, or why it is unread."""

    ok: bool
    reason: str = ""
    path: str = ""
    label: Any = None
    quantity_type_qudt: Any = None
    value: Any = None
    unit: Any = None
    value_expanded_mu: Any = None
    coverage_factor: Any = None
    coverage_probability: Any = None
    distribution: Any = None


_OTHER_FORMS = ("standardMU", "coverageIntervalMU")


def read_expanded_real(real: Any) -> RealReading:
    """Read one ``si:real``; of its uncertainty only ``expandedMU`` is read."""
    if not isinstance(real, dict):
        return RealReading(False, "no D-SI real", "")
    mu = real.get("measurementUncertaintyUnivariate")
    if not isinstance(mu, dict):
        return RealReading(
            False,
            "no D-SI measurementUncertaintyUnivariate",
            "/measurementUncertaintyUnivariate",
        )
    expanded = mu.get("expandedMU")
    if not isinstance(expanded, dict):
        other = next((form for form in _OTHER_FORMS if form in mu), None)
        reason = (
            "no D-SI expandedMU"
            if other is None
            else f"the uncertainty is a D-SI {other}; the binding reads only expandedMU"
        )
        return RealReading(False, reason, "/measurementUncertaintyUnivariate")
    return RealReading(
        True,
        label=real.get("label"),
        quantity_type_qudt=real.get("quantityTypeQUDT"),
        value=real.get("value"),
        unit=real.get("unit"),
        value_expanded_mu=expanded.get("valueExpandedMU"),
        coverage_factor=expanded.get("coverageFactor"),
        coverage_probability=expanded.get("coverageProbability"),
        distribution=expanded.get("distribution"),
    )


def unit_symbol(units: dict[str, DsiUnit], unit: Any) -> str:
    """The display symbol of an accepted unit, or the identifier itself."""
    if isinstance(unit, str) and unit in units:
        return units[unit].symbol
    return str(unit)
