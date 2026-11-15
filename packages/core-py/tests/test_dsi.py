# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/dsi.test.ts (PTB D-SI 2.2.1 quantity values)."""

from __future__ import annotations

import json
from fractions import Fraction
from typing import Any

from qi_vc_core.reliance.cal_v1 import CAL_UNITS, map_group
from qi_vc_core.reliance.dsi import DSI_REFERENCE, read_expanded_real, unit_symbol
from qi_vc_core.reliance.rm_scope import (
    KG_PER_KG,
    MG_PER_KG,
    PERCENT,
    RM_UNITS,
    to_kg_per_kg,
)
from qi_vc_core.reliance.rm_v1 import REPO_ROOT
from qi_vc_core.reliance.rm_v1_claims import claim_coverage, map_claim

RM = "https://vc4qi.example/bindings/rm/1#"


def manifest(binding: str) -> dict[str, Any]:
    path = REPO_ROOT / "bindings" / "experimental" / f"{binding}-v1" / "manifest.json"
    return json.loads(path.read_text(encoding="utf-8"))  # type: ignore[no-any-return]


def expanded_real(
    label: str, kind: str, value: str, unit: str, u: str
) -> dict[str, Any]:
    return {
        "label": label,
        "quantityTypeQUDT": kind,
        "value": value,
        "unit": unit,
        "measurementUncertaintyUnivariate": {
            "expandedMU": {
                "valueExpandedMU": u,
                "coverageFactor": "2",
                "coverageProbability": "0.95",
                "distribution": "normal",
            }
        },
    }


def test_reads_a_real_as_written() -> None:
    reading = read_expanded_real(
        expanded_real("As", "MassFraction", "178", MG_PER_KG, "5")
    )
    assert reading.ok
    assert (reading.quantity_type_qudt, reading.value, reading.unit) == (
        "MassFraction",
        "178",
        MG_PER_KG,
    )
    assert (reading.value_expanded_mu, reading.coverage_factor) == ("5", "2")


def test_reports_other_uncertainty_forms() -> None:
    standard = read_expanded_real(
        {
            "value": "178",
            "unit": MG_PER_KG,
            "measurementUncertaintyUnivariate": {
                "standardMU": {"valueStandardMU": "2.5"}
            },
        }
    )
    assert not standard.ok
    assert "standardMU; the binding reads only expandedMU" in standard.reason
    assert (
        read_expanded_real({"value": "178"}).path == "/measurementUncertaintyUnivariate"
    )
    assert read_expanded_real("178").reason == "no D-SI real"


def test_manifests_pin_dsi_221() -> None:
    for binding in ("rm", "cal"):
        values = manifest(binding)["scopeAndMapping"]["quantityValues"]
        assert values["schema"] == DSI_REFERENCE["schema"]
        assert values["digestSRI"] == DSI_REFERENCE["digestSRI"]
    passport = manifest("gs")["scopeAndMapping"]["passportValues"]
    assert passport["digestSRI"] == DSI_REFERENCE["digestSRI"]


def test_evaluator_units_equal_manifest_units() -> None:
    for binding, table in (("rm", RM_UNITS), ("cal", CAL_UNITS)):
        declared = manifest(binding)["scopeAndMapping"]["units"]
        assert sorted(declared) == sorted(table), binding
        for unit, spec in declared.items():
            exponent = int(spec["factor"].removeprefix("1").removeprefix("e") or "0")
            assert (table[unit].exponent, table[unit].symbol) == (
                exponent,
                spec["symbol"],
            )


def test_exact_conversion_and_refused_spellings() -> None:
    assert to_kg_per_kg("0.7", PERCENT) == Fraction("0.007")
    assert to_kg_per_kg("57.68", PERCENT) == Fraction("0.5768")
    assert to_kg_per_kg("178", MG_PER_KG) == to_kg_per_kg("0.000178", KG_PER_KG)
    for unit in ("\\milli\\gram\\per\\kilogram", "mg/kg", "\\ppm"):
        assert to_kg_per_kg("178", unit) is None, unit
    for value in ("NaN", "-5", "1.78e2", "+178"):
        assert to_kg_per_kg(value, MG_PER_KG) is None, value
    assert unit_symbol(RM_UNITS, MG_PER_KG) == "mg/kg"
    assert unit_symbol(CAL_UNITS, "\\kilo\\pascal") == "kPa"


def _certificate(real: Any) -> dict[str, Any]:
    return {
        "credentialSubject": {
            "materials": [{"matrixIri": RM + "CuZn39Pb3", "formIri": RM + "Disc"}],
            "materialPropertiesList": [
                {
                    "results": [
                        {
                            "propertyIri": RM + "As",
                            "methodIri": RM + "M1",
                            "data": {"quantity": {"real": real}},
                        }
                    ]
                }
            ],
        }
    }


POINTER = "/credentialSubject/materialPropertiesList/0/results/0"


def _map(real: Any) -> Any:
    d = _certificate(real)
    return map_claim(
        d, POINTER, d["credentialSubject"]["materialPropertiesList"][0]["results"][0]
    )


def test_rm_gate_4_and_5_read_dsi_values() -> None:
    mapped = _map(expanded_real("As", "MassFraction", "178", MG_PER_KG, "5"))
    assert mapped.state == "established"
    assert "178 ± 5 mg/kg (k = 2)" in mapped.reason
    standard = _map(
        {
            "quantityTypeQUDT": "MassFraction",
            "value": "178",
            "unit": MG_PER_KG,
            "measurementUncertaintyUnivariate": {
                "standardMU": {"valueStandardMU": "2.5"}
            },
        }
    )
    assert standard.state == "not_established"
    assert standard.sources == (
        f"{POINTER}/data/quantity/real/measurementUncertaintyUnivariate",
    )
    record = {
        "id": "r",
        "matrixIri": RM + "CuZn39Pb3",
        "formIri": RM + "Disc",
        "allowedPropertyIris": [RM + "As"],
        "allowedMethodIris": [RM + "M1"],
        "quantityTypeQUDT": "MassConcentration",
        "range": {"from": "50", "to": "500", "unit": MG_PER_KG},
    }
    assert mapped.coordinates is not None
    covered = claim_coverage(mapped.coordinates, [record], (), "none")
    assert covered.state == "contradicted"
    assert "quantity kind MassFraction ≠ MassConcentration" in covered.reason


def test_calibration_group_names_one_quantity_kind() -> None:
    def result(kind: str, value: str) -> dict[str, Any]:
        return {"real": expanded_real("pressure", kind, value, "\\kilo\\pascal", "0.8")}

    same = map_group(
        {
            "id": "g",
            "results": [result("Pressure", "1000"), result("Pressure", "2000")],
        },
        "/g",
    )
    assert same.state == "established"
    assert same.group is not None and same.group.quantity_type_qudt == "Pressure"
    mixed = map_group(
        {
            "id": "g",
            "results": [result("Pressure", "1000"), result("ForcePerArea", "2000")],
        },
        "/g",
    )
    assert mixed.state == "not_established"
    assert "one quantity kind" in mixed.reason
    old = map_group({"id": "g", "results": [{"value": "1000", "unit": "kPa"}]}, "/g")
    assert old.state == "not_established"
    assert "no D-SI real" in old.reason
