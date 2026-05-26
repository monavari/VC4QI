# SPDX-License-Identifier: Apache-2.0
# Scenario smoke-tests for the scope-inclusion algorithm (Appendix C, Table C1).
# Tests are pure unit tests — no verifier chain, no network.
import pytest
from qi_vc_core.scope import (
    DccScopeEntry,
    DrmdScopeEntry,
    ScopeCheckResult,
    check_dcc_scope_inclusion,
    check_derivation,
    check_drmd_scope_inclusion,
)

# ── Shared fixture helpers ────────────────────────────────────────────────────

_KPA = {"ucumCode": "kPa", "unitIri": "http://qudt.org/vocab/unit/KiloPA"}
_PCT = {"ucumCode": "%",   "unitIri": "http://qudt.org/vocab/unit/PERCENT"}
_MG  = {"ucumCode": "mg/kg", "unitIri": "http://qudt.org/vocab/unit/MilliGM-PER-KiloGM"}


def _dcc(value_kpa: float, method: str, expanded_u_kpa: float) -> dict:
    return {
        "credentialSubject": {
            "measurementResults": [{
                "measurand": "Pressure",
                "usedMethods": [{"reference": method}],
                "results": [{
                    "data": {
                        "quantity": {
                            "value": value_kpa,
                            "unit": _KPA,
                            "uncertainty": {
                                "expandedUncertainty": expanded_u_kpa,
                                "coverageFactor": 2,
                                "coverageProbability": 0.95,
                            },
                        }
                    }
                }],
            }]
        }
    }


def _pressure_entry(range_to_kpa: float = 600.0, max_rel_pct: float = 0.05) -> DccScopeEntry:
    return DccScopeEntry(
        measurand="pressure",
        allowed_methods=["DKD-R 6-1:2014", "EA-10/17"],
        range_from=0,
        range_to=range_to_kpa,
        range_unit=_KPA,
        uncertainty_max_relative_percent=max_rel_pct,
    )


def _drmd_entry(
    allowed_properties: list[str] | None = None,
    max_rel_u_k2: float = 0.05,
) -> DrmdScopeEntry:
    props = allowed_properties if allowed_properties is not None else [
        "Cu", "Zn", "Pb", "Sn", "Ni", "Fe", "Mn", "Ag", "Al", "As",
        "Bi", "Cd", "Co", "Cr", "Sb", "Te", "In", "P",
    ]
    return DrmdScopeEntry(
        matrix=["non-ferrous metals and alloys"],
        allowed_properties=props,
        allowed_forms=["disc", "powder", "chips"],
        uncertainty_max_relative_u_k2=max_rel_u_k2,
    )


def _brass_drmd(extra_certified: list[dict] | None = None) -> dict:
    """Minimal M375a DRMD with Cu/Zn/Pb (certified) and Si (informative)."""
    certified_results = [
        {"name": "Copper (Cu)",  "data": {"quantity": {"value": 57.68, "unit": _PCT,
            "uncertainty": {"expandedUncertainty": 0.14, "coverageFactor": 2, "coverageProbability": 0.95}}}},
        {"name": "Zinc (Zn)",    "data": {"quantity": {"value": 38.2,  "unit": _PCT,
            "uncertainty": {"expandedUncertainty": 0.4,  "coverageFactor": 2, "coverageProbability": 0.95}}}},
        {"name": "Lead (Pb)",    "data": {"quantity": {"value": 3.07,  "unit": _PCT,
            "uncertainty": {"expandedUncertainty": 0.06, "coverageFactor": 2, "coverageProbability": 0.95}}}},
        {"name": "Manganese (Mn)", "data": {"quantity": {"value": 139.5, "unit": _MG,
            "uncertainty": {"expandedUncertainty": 1.7,  "coverageFactor": 2, "coverageProbability": 0.95}}}},
        {"name": "Silver (Ag)",  "data": {"quantity": {"value": 50.6,  "unit": _MG,
            "uncertainty": {"expandedUncertainty": 1.4,  "coverageFactor": 2, "coverageProbability": 0.95}}}},
    ]
    if extra_certified:
        certified_results.extend(extra_certified)

    return {
        "credentialSubject": {
            "materials": [{"name": "CuZn39Pb3"}],
            "materialPropertiesList": [
                {
                    "isCertified": True,
                    "propertyIdentifiers": ["massFraction"],
                    "results": certified_results,
                },
                {
                    "isCertified": False,
                    "propertyIdentifiers": ["massFraction"],
                    "results": [
                        {"name": "Silicon (Si)", "data": {"quantity": {"value": 103, "unit": _MG,
                            "uncertainty": {"expandedUncertainty": 12, "coverageFactor": 2, "coverageProbability": 0.95}}}},
                    ],
                },
            ],
        }
    }


# ── DCC scope tests ───────────────────────────────────────────────────────────

class TestDccScopeInclusion:

    def test_T11_valid_300kpa_within_scope(self):
        """T11: 300 kPa, DKD-R 6-1:2014, U=0.15 kPa (0.05%) — all checks pass."""
        dcc = _dcc(300, "DKD-R 6-1:2014", 0.15)
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry()])
        assert result.passed is True
        assert result.violations == []

    def test_T1_range_out_of_scope(self):
        """T1: 1500 kPa measurement exceeds scope range of 0–600 kPa."""
        dcc = _dcc(1500, "DKD-R 6-1:2014", 0.15)
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry(range_to_kpa=600)])
        assert result.passed is False
        codes = [v.code for v in result.violations]
        assert "RANGE_OUT_OF_SCOPE" in codes

    def test_T2_method_out_of_scope(self):
        """T2: Method 'ISO 1234' not in allowedMethods [DKD-R 6-1:2014, EA-10/17]."""
        dcc = _dcc(300, "ISO 1234", 0.15)
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry()])
        assert result.passed is False
        codes = [v.code for v in result.violations]
        assert "METHOD_OUT_OF_SCOPE" in codes

    def test_T3_uncertainty_widening_relative(self):
        """T3: U=10 kPa at 300 kPa → 3.33% > 0.05% bound."""
        dcc = _dcc(300, "DKD-R 6-1:2014", 10.0)
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry(max_rel_pct=0.05)])
        assert result.passed is False
        codes = [v.code for v in result.violations]
        assert "UNCERTAINTY_WIDENING" in codes

    def test_T4_uncertainty_widening_ea_method(self):
        """T4: EA-10/17 method valid but U=3 kPa at 300 kPa → 1% > 0.05% bound."""
        dcc = _dcc(300, "EA-10/17", 3.0)
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry(max_rel_pct=0.05)])
        assert result.passed is False
        codes = [v.code for v in result.violations]
        assert "UNCERTAINTY_WIDENING" in codes

    def test_boundary_at_range_limit(self):
        """Measurement exactly at range.to should pass."""
        dcc = _dcc(600, "DKD-R 6-1:2014", 0.3)
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry(range_to_kpa=600)])
        assert result.passed is True

    def test_no_scope_entries_passes(self):
        """Empty scope entry list: no constraints → pass."""
        dcc = _dcc(9999, "ANYTHING", 999)
        result = check_dcc_scope_inclusion(dcc, [])
        assert result.passed is True

    def test_unit_conversion_bar_to_kpa(self):
        """300 bar ≈ 30000 kPa — should exceed 600 kPa scope."""
        bar_unit = {"ucumCode": "bar", "unitIri": "http://qudt.org/vocab/unit/BAR"}
        dcc = {
            "credentialSubject": {
                "measurementResults": [{
                    "measurand": "Pressure",
                    "usedMethods": [{"reference": "DKD-R 6-1:2014"}],
                    "results": [{"data": {"quantity": {
                        "value": 300,
                        "unit": bar_unit,
                        "uncertainty": {"expandedUncertainty": 0.01, "coverageFactor": 2, "coverageProbability": 0.95},
                    }}}],
                }]
            }
        }
        result = check_dcc_scope_inclusion(dcc, [_pressure_entry(range_to_kpa=600)])
        assert result.passed is False
        assert any(v.code == "RANGE_OUT_OF_SCOPE" for v in result.violations)


# ── DRMD scope tests ──────────────────────────────────────────────────────────

class TestDrmdScopeInclusion:

    def test_T12_valid_brass_m375a(self):
        """T12: M375a brass — Cu/Zn/Pb/Mn/Ag all within scope, U/k=2 < 5%."""
        drmd = _brass_drmd()
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry()],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        assert result.passed is True
        assert result.violations == []

    def test_T5_property_not_in_allowed(self):
        """T5: DRMD certifies Ti which is absent from allowedProperties → MATRIX_PROPERTY_MISMATCH."""
        extra = [{"name": "Titanium (Ti)", "data": {"quantity": {
            "value": 10, "unit": _MG,
            "uncertainty": {"expandedUncertainty": 0.3, "coverageFactor": 2, "coverageProbability": 0.95},
        }}}]
        drmd = _brass_drmd(extra_certified=extra)
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry()],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        assert result.passed is False
        codes = [v.code for v in result.violations]
        assert "MATRIX_PROPERTY_MISMATCH" in codes
        assert any("Ti" in v.detail for v in result.violations)

    def test_T6_excluded_element_in_drmd(self):
        """T6: capability excludes Cd; DRMD certifies Cd → MATRIX_PROPERTY_MISMATCH."""
        props_without_cd = [p for p in [
            "Cu", "Zn", "Pb", "Sn", "Ni", "Fe", "Mn", "Ag", "Al", "As",
            "Bi", "Co", "Cr", "Sb", "Te", "In", "P",
        ] if p != "Cd"]
        drmd = _brass_drmd()
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry(allowed_properties=props_without_cd)],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        # Cd is in the brass drmd (via _brass_drmd which only has Cu/Zn/Pb/Mn/Ag)
        # so this passes — add Cd explicitly to trigger the failure
        extra_cd = [{"name": "Cadmium (Cd)", "data": {"quantity": {
            "value": 62.4, "unit": _MG,
            "uncertainty": {"expandedUncertainty": 1.5, "coverageFactor": 2, "coverageProbability": 0.95},
        }}}]
        drmd_with_cd = _brass_drmd(extra_certified=extra_cd)
        result2 = check_drmd_scope_inclusion(
            drmd_with_cd, [_drmd_entry(allowed_properties=props_without_cd)],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        assert result2.passed is False
        assert any("Cd" in v.detail for v in result2.violations)

    def test_matrix_mismatch(self):
        """Matrix 'iron and steel' does not match scope entry for non-ferrous."""
        drmd = _brass_drmd()
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry()],
            matrix="iron and steel",
            form="disc",
        )
        assert result.passed is False
        assert any(v.code == "MATRIX_PROPERTY_MISMATCH" for v in result.violations)

    def test_form_mismatch(self):
        """Form 'rod' not in allowedForms [disc, powder, chips]."""
        drmd = _brass_drmd()
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry()],
            matrix="non-ferrous metals and alloys",
            form="rod",
        )
        assert result.passed is False
        assert any(v.code == "MATRIX_PROPERTY_MISMATCH" for v in result.violations)

    def test_uncertainty_widening_relative(self):
        """U/k=2 = 2/10 = 20% exceeds bound of 5%."""
        drmd = {
            "credentialSubject": {
                "materials": [{"name": "CuZn39Pb3"}],
                "materialPropertiesList": [{
                    "isCertified": True,
                    "propertyIdentifiers": ["massFraction"],
                    "results": [{"name": "Copper (Cu)", "data": {"quantity": {
                        "value": 10, "unit": _PCT,
                        "uncertainty": {"expandedUncertainty": 2.0, "coverageFactor": 2, "coverageProbability": 0.95},
                    }}}],
                }],
            }
        }
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry(max_rel_u_k2=0.05)],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        assert result.passed is False
        assert any(v.code == "UNCERTAINTY_WIDENING" for v in result.violations)

    def test_informative_values_skipped(self):
        """isCertified=False groups are never checked against scope (paper §6.2)."""
        drmd = {
            "credentialSubject": {
                "materials": [{"name": "CuZn39Pb3"}],
                "materialPropertiesList": [{
                    "isCertified": False,
                    "propertyIdentifiers": ["massFraction"],
                    "results": [{"name": "Titanium (Ti)", "data": {"quantity": {
                        "value": 99, "unit": _PCT,
                        "uncertainty": {"expandedUncertainty": 50, "coverageFactor": 2, "coverageProbability": 0.95},
                    }}}],
                }],
            }
        }
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry()],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        assert result.passed is True

    def test_unit_conversion_percent_to_mg_kg(self):
        """57.68 % = 576800 mg/kg; relative U still 0.14/57.68 ≈ 0.24% < 5%."""
        drmd = {
            "credentialSubject": {
                "materials": [{"name": "CuZn39Pb3"}],
                "materialPropertiesList": [{
                    "isCertified": True,
                    "propertyIdentifiers": ["massFraction"],
                    "results": [{"name": "Copper (Cu)", "data": {"quantity": {
                        "value": 57.68, "unit": _PCT,
                        "uncertainty": {"expandedUncertainty": 0.14, "coverageFactor": 2, "coverageProbability": 0.95},
                    }}}],
                }],
            }
        }
        result = check_drmd_scope_inclusion(
            drmd, [_drmd_entry()],
            matrix="non-ferrous metals and alloys",
            form="disc",
        )
        assert result.passed is True


# ── Derivation check tests ────────────────────────────────────────────────────

class TestCheckDerivation:

    def _acc(self, range_to: float = 1000) -> dict:
        return {
            "credentialSubject": {
                "scope": [{
                    "range": {"from": 0, "to": range_to, "unit": _KPA},
                }]
            }
        }

    def _cap(self, range_to: float = 600) -> dict:
        return {
            "credentialSubject": {
                "constraints": {
                    "range": {"from": 0, "to": range_to, "unit": _KPA},
                }
            }
        }

    def test_T7_derivation_violation(self):
        """T7: cap range.to 2000 kPa > acc scope 1000 kPa → DERIVATION_VIOLATION."""
        result = check_derivation(self._cap(range_to=2000), self._acc(range_to=1000))
        assert result.passed is False
        assert any(v.code == "DERIVATION_VIOLATION" for v in result.violations)

    def test_valid_derivation_narrower(self):
        """600 kPa ≤ 1000 kPa — valid derivation."""
        result = check_derivation(self._cap(range_to=600), self._acc(range_to=1000))
        assert result.passed is True

    def test_equal_ranges_pass(self):
        """Cap range.to == acc range.to is permitted (not strictly less than)."""
        result = check_derivation(self._cap(range_to=1000), self._acc(range_to=1000))
        assert result.passed is True

    def test_drmd_property_derivation_violation(self):
        """Cap declares element X not in accreditation allowedProperties."""
        acc = {
            "credentialSubject": {
                "scope": [{"allowedProperties": ["Cu", "Zn", "Pb"]}]
            }
        }
        cap = {
            "credentialSubject": {
                "constraints": {"allowedProperties": ["Cu", "Zn", "Pb", "Au"]}
            }
        }
        result = check_derivation(cap, acc)
        assert result.passed is False
        assert any("Au" in v.detail for v in result.violations)

    def test_drmd_property_derivation_valid(self):
        """Cap properties ⊆ acc properties — valid."""
        acc = {
            "credentialSubject": {
                "scope": [{"allowedProperties": ["Cu", "Zn", "Pb", "Au"]}]
            }
        }
        cap = {
            "credentialSubject": {
                "constraints": {"allowedProperties": ["Cu", "Zn"]}
            }
        }
        result = check_derivation(cap, acc)
        assert result.passed is True

    def test_no_constraints_passes(self):
        """Child evidence without constraints: derivation check is vacuously true."""
        cap = {"credentialSubject": {}}
        acc = {"credentialSubject": {"scope": [{"range": {"to": 100, "unit": _KPA}}]}}
        result = check_derivation(cap, acc)
        assert result.passed is True
