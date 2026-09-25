# SPDX-License-Identifier: Apache-2.0
# Mirrors packages/core-ts/tests/scope-governed-terms.test.ts.
#
# SCO-1 / SCO-2 / SCO-3: categorical dimensions compare as exact equality over
# governed identifiers; labels are never comparison operands; an absent governed
# term fails with UNRESOLVED_SCOPE_TERM.
#
# Every case below was accepted before this change, because the module matched
# lowercased free text with substring containment.
from qi_vc_core.scope import (
    DccScopeEntry,
    DrmdScopeEntry,
    check_dcc_scope_inclusion,
    check_drmd_scope_inclusion,
)

T = "https://w3id.org/qi-vc/terms/v1"
CUZN39PB3 = f"{T}/matrix/CuZn39Pb3"
CUZN40PB2 = f"{T}/matrix/CuZn40Pb2"
AS = f"{T}/element/As"
DISC = f"{T}/form/disc"
PRESSURE = "http://qudt.org/vocab/quantitykind/Pressure"
EURAMET = f"{T}/method/EURAMET-cg-17"


def rm_credential(
    matrix_iri: str | None = None,
    matrix_label: str | None = None,
    form_iri: str | None = None,
    property_iri: str | None = None,
    property_label: str = "Arsenic (As)",
) -> dict:
    material: dict = {"name": "test material"}
    if matrix_label is not None:
        material["matrix"] = matrix_label
    if matrix_iri is not None:
        material["matrixIri"] = matrix_iri
    if form_iri is not None:
        material["formIri"] = form_iri

    result: dict = {"name": property_label}
    if property_iri is not None:
        result["propertyIri"] = property_iri

    return {
        "type": ["VerifiableCredential", "ReferenceMaterialCertificate"],
        "credentialSubject": {
            "materials": [material],
            "materialPropertiesList": [{"isCertified": True, "results": [result]}],
        },
    }


def cuzn_scope() -> list[DrmdScopeEntry]:
    return [DrmdScopeEntry(
        matrix=["CuZn39Pb3 (leaded brass)"],
        matrix_iris=[CUZN39PB3],
        allowed_properties=["As"],
        allowed_property_iris=[AS],
        allowed_forms=["disc"],
        allowed_form_iris=[DISC],
    )]


def codes(result) -> list[str]:
    return [v.code for v in result.violations]


# ── TST-4: CuZn39Pb3 against CuZn40Pb2 (permanent regression) ────────────────


def test_accepts_the_alloy_the_scope_names():
    result = check_drmd_scope_inclusion(
        rm_credential(matrix_iri=CUZN39PB3, form_iri=DISC, property_iri=AS),
        cuzn_scope(),
    )
    assert result.passed is True


def test_rejects_the_near_miss_alloy():
    result = check_drmd_scope_inclusion(
        rm_credential(matrix_iri=CUZN40PB2, form_iri=DISC, property_iri=AS),
        cuzn_scope(),
    )
    assert result.passed is False
    assert "MATRIX_PROPERTY_MISMATCH" in codes(result)


def test_rejects_claim_whose_label_contains_the_scope_label():
    result = check_drmd_scope_inclusion(
        rm_credential(
            matrix_iri=f"{T}/matrix/CuZn39Pb3-special-variant",
            form_iri=DISC,
            property_iri=AS,
        ),
        cuzn_scope(),
    )
    assert result.passed is False
    assert "MATRIX_PROPERTY_MISMATCH" in codes(result)


# ── SCO-2: labels are never comparison operands ──────────────────────────────


def test_matching_label_with_different_identifier_is_rejected():
    result = check_drmd_scope_inclusion(
        rm_credential(
            matrix_iri=CUZN40PB2,
            matrix_label="CuZn39Pb3 (leaded brass)",
            form_iri=DISC,
            property_iri=AS,
        ),
        cuzn_scope(),
    )
    assert result.passed is False


def test_as_does_not_match_ash():
    result = check_drmd_scope_inclusion(
        rm_credential(
            matrix_iri=CUZN39PB3, form_iri=DISC, property_iri=f"{T}/element/Ash"
        ),
        cuzn_scope(),
    )
    assert result.passed is False
    assert "MATRIX_PROPERTY_MISMATCH" in codes(result)


# ── SCO-3: an absent governed term is the B5 boundary made visible ───────────


def test_claim_matrix_label_without_identifier_fails():
    result = check_drmd_scope_inclusion(
        rm_credential(
            matrix_label="CuZn39Pb3 (leaded brass)", form_iri=DISC, property_iri=AS
        ),
        cuzn_scope(),
    )
    assert result.passed is False
    assert "UNRESOLVED_SCOPE_TERM" in codes(result)


def test_scope_entry_restricting_matrix_by_label_only_fails():
    label_only = [DrmdScopeEntry(matrix=["CuZn39Pb3 (leaded brass)"])]
    result = check_drmd_scope_inclusion(
        rm_credential(matrix_iri=CUZN39PB3, form_iri=DISC, property_iri=AS),
        label_only,
    )
    assert result.passed is False
    assert "UNRESOLVED_SCOPE_TERM" in codes(result)


def test_claim_property_label_without_identifier_fails():
    result = check_drmd_scope_inclusion(
        rm_credential(matrix_iri=CUZN39PB3, form_iri=DISC),
        cuzn_scope(),
    )
    assert result.passed is False
    assert "UNRESOLVED_SCOPE_TERM" in codes(result)


def test_empty_scope_confers_no_scope():
    result = check_drmd_scope_inclusion(
        rm_credential(matrix_iri=CUZN39PB3, form_iri=DISC, property_iri=AS),
        [],
    )
    assert result.passed is False
    assert "NO_SCOPE_ENTRY" in codes(result)


# ── DCC side ─────────────────────────────────────────────────────────────────


def dcc_credential(
    quantity_kind_iri: str | None = None,
    method_iri: str | None = None,
) -> dict:
    method: dict = {"reference": "EURAMET cg-17"}
    if method_iri is not None:
        method["methodIri"] = method_iri
    group: dict = {
        "measurand": "Pressure",
        "usedMethods": [method],
        "results": [
            {"data": {"quantity": {"value": 500, "unit": {"ucumCode": "kPa"}}}}
        ],
    }
    if quantity_kind_iri is not None:
        group["quantityKindIri"] = quantity_kind_iri
    return {
        "type": ["VerifiableCredential", "DigitalCalibrationCertificate"],
        "credentialSubject": {"measurementResults": [group]},
    }


def pressure_scope() -> list[DccScopeEntry]:
    return [DccScopeEntry(
        measurand="Pressure",
        quantity_kind_iri=PRESSURE,
        allowed_methods=["EURAMET cg-17"],
        allowed_method_iris=[EURAMET],
        range_from=0,
        range_to=1000,
        range_unit={"ucumCode": "kPa"},
    )]


def test_dcc_accepts_governed_measurand_and_method():
    result = check_dcc_scope_inclusion(
        dcc_credential(quantity_kind_iri=PRESSURE, method_iri=EURAMET),
        pressure_scope(),
    )
    assert result.passed is True


def test_dcc_rejects_different_quantity_kind():
    result = check_dcc_scope_inclusion(
        dcc_credential(
            quantity_kind_iri="http://qudt.org/vocab/quantitykind/Temperature",
            method_iri=EURAMET,
        ),
        pressure_scope(),
    )
    assert result.passed is False
    assert "NO_SCOPE_ENTRY" in codes(result)


def test_dcc_rejects_method_outside_admitted_set():
    result = check_dcc_scope_inclusion(
        dcc_credential(
            quantity_kind_iri=PRESSURE, method_iri=f"{T}/method/made-up-procedure"
        ),
        pressure_scope(),
    )
    assert result.passed is False
    assert "METHOD_OUT_OF_SCOPE" in codes(result)


def test_dcc_measurand_without_identifier_fails():
    result = check_dcc_scope_inclusion(
        dcc_credential(method_iri=EURAMET), pressure_scope()
    )
    assert result.passed is False
    assert "UNRESOLVED_SCOPE_TERM" in codes(result)


def test_dcc_method_without_identifier_fails():
    result = check_dcc_scope_inclusion(
        dcc_credential(quantity_kind_iri=PRESSURE),
        pressure_scope(),
    )
    assert result.passed is False
    assert "UNRESOLVED_SCOPE_TERM" in codes(result)


def test_dcc_empty_scope_fails():
    result = check_dcc_scope_inclusion(
        dcc_credential(quantity_kind_iri=PRESSURE, method_iri=EURAMET),
        [],
    )
    assert result.passed is False
    assert "NO_SCOPE_ENTRY" in codes(result)
