# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/rm-v1-claims.test.ts (I4 mapping, coverage, conformity)."""

from __future__ import annotations

from typing import Any

import pytest
from qi_vc_core.reliance import load_reliance_profile
from qi_vc_core.reliance.types import ConformityRequest, SelectedClaim

from .test_rm_v1_authority import PROFILE_JSON, reissue, run, sign
from .test_rm_v1_slice import URI, doc, request

RM = "https://vc4qi.example/bindings/rm/1#"
D197 = "https://producer.vc4qi.example/credentials/D197"
D520 = "https://producer.vc4qi.example/credentials/D520"


def entry(result: Any, predicate: str) -> Any:
    return next(t for t in result.trace if t.predicate == predicate)


def coverage(result: Any) -> Any:
    return entry(result, "claim-coverage:as-mass-fraction:operational-scope")


def first_result(d: dict[str, Any]) -> dict[str, Any]:
    return d["credentialSubject"]["materialPropertiesList"][0]["results"][0]  # type: ignore[no-any-return]


def quantity(d: dict[str, Any]) -> dict[str, Any]:
    return first_result(d)["data"]["quantity"]  # type: ignore[no-any-return]


def with_value(value: str, u: str = "5", unit: str = "mg/kg") -> dict[str, str | None]:
    def edit(d: dict[str, Any]) -> None:
        quantity(d).update(
            value=value,
            unit={"ucumCode": unit},
            uncertainty={"expandedUncertainty": u, "coverageFactor": "2"},
        )

    return reissue({}, edit)


def schema_of_d(result: Any) -> Any:
    return next(
        t
        for t in result.trace
        if t.node_use.startswith(URI["D"] + " |") and t.predicate == "schema"
    )


def conformity_reason(result: Any) -> str:
    return str(result.conformity.reasons[0])


# --- worked profile: 178 / 197 / 520 (S01-S06) -------------------------------------


def test_s01_178_is_authorized_conforms_and_is_accepted() -> None:
    result = run()
    assert result.authorization[0].state == "established"
    assert (
        "scope-as-m1 covers As, method M1, CuZn39Pb3/Disc, 178 mg/kg within "
        "50–500 mg/kg" in coverage(result).reason
    )
    assert "178 + 5 = 183 ≤ 200 mg/kg" in conformity_reason(result)
    assert result.decision == "accept"


def test_s02_197_is_authorized_but_does_not_conform() -> None:
    result = run(req=request(target_id=D197))
    assert result.authorization[0].state == "established"
    assert result.conformity.state == "contradicted"
    assert "197 + 5 = 202 > 200 mg/kg" in conformity_reason(result)
    assert result.decision == "reject"


def test_197_authorization_only_is_accepted() -> None:
    result = run(req=request(target_id=D197, conformity=None))
    assert result.conformity.execution == "not_run"
    assert result.decision == "accept"


def test_s03_520_contradicts_scope_and_conformity_is_not_run() -> None:
    result = run(req=request(target_id=D520))
    assert coverage(result).state == "contradicted"
    assert "value is above the range" in coverage(result).reason
    assert result.authorization[0].state == "contradicted"
    assert result.conformity.execution == "not_run"
    assert result.decision == "reject"


def test_s04_195_conforms_at_the_inclusive_limit() -> None:
    result = run(with_value("195"))
    assert "195 + 5 = 200 ≤ 200 mg/kg" in conformity_reason(result)
    assert result.decision == "accept"


def test_s05_500_upper_endpoint_authorization_only() -> None:
    result = run(with_value("500"), request(conformity=None))
    assert result.authorization[0].state == "established"
    assert result.decision == "accept"


def test_s06_lower_bound() -> None:
    below = run(with_value("49.9"))
    assert "value is below the range" in coverage(below).reason
    assert below.conformity.execution == "not_run"
    assert below.decision == "reject"
    assert run(with_value("50")).decision == "accept"


# --- methods and succession (S07, S08) ---------------------------------------------


def with_method(method: str) -> dict[str, str | None]:
    def edit(d: dict[str, Any]) -> None:
        first_result(d)["methodIri"] = RM + method

    return reissue({}, edit)


def succession(rule: str) -> Any:
    return load_reliance_profile(
        {**PROFILE_JSON, "mapping": {"methodSuccession": rule}}
    )


def test_s07_m2_against_o_never_falls_back_to_a() -> None:
    result = run(with_method("M2"))
    covered = coverage(result)
    assert covered.state == "not_established"
    assert "no governed M1 → M2 succession rule" in covered.reason
    assert URI["O"] in covered.sources and URI["A"] not in covered.sources
    assert result.authorization[0].route_witness_ids == ()
    assert result.decision == "not_established"


def test_s08_three_interpretations_give_distinct_results() -> None:
    overrides = with_method("M2")
    assert (
        run(overrides, request(), succession("accept-successor")).decision == "accept"
    )
    assert (
        run(overrides, request(), succession("require-extension"))
        .authorization[0]
        .state
        == "contradicted"
    )
    assert (
        run(overrides, request(), succession("none")).authorization[0].state
        == "not_established"
    )


def test_unrevised_method_is_not_allowed_under_any_rule() -> None:
    result = run(with_method("M3"), request(), succession("accept-successor"))
    assert result.authorization[0].state == "contradicted"


# --- complete records, identifiers and units ---------------------------------------


def scope_record(rid: str, **over: Any) -> dict[str, Any]:
    record = {
        "id": rid,
        "matrixIri": RM + "CuZn39Pb3",
        "formIri": RM + "Disc",
        "allowedPropertyIris": [RM + "As"],
        "allowedMethodIris": [RM + "M1"],
        "quantityKindIri": RM + "MassFraction",
        "range": {"from": "50", "to": "500", "unit": "mg/kg"},
    }
    record.update(over)
    return record


def with_scopes(
    records: list[dict[str, Any]], edit_d: Any = None
) -> dict[str, str | None]:
    a, o = doc(URI["A"]), doc(URI["O"])
    a["credentialSubject"]["scope"] = [
        {**r, "id": f"{URI['A']}#{r['id']}"} for r in records
    ]
    o["credentialSubject"]["scope"] = [
        {**r, "id": f"{URI['O']}#{r['id']}"} for r in records
    ]
    return reissue({URI["A"]: a, URI["O"]: o}, edit_d)


def test_s09_records_never_combine() -> None:
    def m3(d: dict[str, Any]) -> None:
        first_result(d)["methodIri"] = RM + "M3"

    overrides = with_scopes(
        [
            scope_record("as-m1"),
            scope_record(
                "pb-m3", allowedPropertyIris=[RM + "Pb"], allowedMethodIris=[RM + "M3"]
            ),
        ],
        m3,
    )
    result = run(overrides)
    assert (
        entry(result, "route:operational-scope:bounded-projection").state
        == "established"
    )
    assert result.authorization[0].state == "contradicted"
    assert result.decision == "reject"


def test_s10_split_dimensions_never_combine() -> None:
    overrides = with_scopes(
        [
            scope_record("wire", formIri=RM + "Wire"),
            scope_record("other-matrix", matrixIri=RM + "CuZn40Pb2"),
            scope_record("lead", allowedPropertyIris=[RM + "Pb"]),
        ]
    )
    result = run(overrides)
    assert result.authorization[0].state == "contradicted"
    assert "No single scope record covers the claim" in " ".join(
        result.authorization[0].reasons
    )


def test_s11_two_claims_with_their_own_records() -> None:
    def add_lead(d: dict[str, Any]) -> None:
        results = d["credentialSubject"]["materialPropertiesList"][0]["results"]
        results.append(
            {
                **results[0],
                "propertyIri": RM + "Pb",
                "data": {"quantity": {**quantity(d), "value": "120"}},
            }
        )

    overrides = with_scopes(
        [scope_record("as"), scope_record("pb", allowedPropertyIris=[RM + "Pb"])],
        add_lead,
    )
    claims = (
        SelectedClaim("as", "/credentialSubject/materialPropertiesList/0/results/0"),
        # The appended Pb result follows the four certified results.
        SelectedClaim("pb", "/credentialSubject/materialPropertiesList/0/results/4"),
    )
    result = run(overrides, request(selected_claims=claims))
    assert [a.state for a in result.authorization] == ["established", "established"]
    assert result.authorization[0].route_witness_ids[-1] == f"record:{URI['O']}#as"
    assert result.authorization[1].route_witness_ids[-1] == f"record:{URI['O']}#pb"
    assert result.decision == "accept"


def test_s12_adjacent_parent_records_are_not_a_union() -> None:
    a, o = doc(URI["A"]), doc(URI["O"])
    a["credentialSubject"]["scope"] = [
        scope_record(
            f"{URI['A']}#low", range={"from": "50", "to": "300", "unit": "mg/kg"}
        ),
        scope_record(
            f"{URI['A']}#high", range={"from": "300", "to": "500", "unit": "mg/kg"}
        ),
    ]
    o["credentialSubject"]["scope"][0]["range"] = {
        "from": "100",
        "to": "400",
        "unit": "mg/kg",
    }
    result = run(reissue({URI["A"]: a, URI["O"]: o}))
    assert (
        entry(result, "route:operational-scope:bounded-projection").state
        == "contradicted"
    )
    assert result.decision == "reject"


def test_s13_lower_bound_below_parent_is_rejected() -> None:
    o = doc(URI["O"])
    o["credentialSubject"]["scope"][0]["range"] = {
        "from": "40",
        "to": "500",
        "unit": "mg/kg",
    }
    result = run(reissue({URI["O"]: o}))
    assert (
        entry(result, "route:operational-scope:bounded-projection").state
        == "contradicted"
    )


@pytest.mark.parametrize(
    "scope_range",
    [{"from": "50", "unit": "mg/kg"}, {"from": "", "to": "500", "unit": "mg/kg"}],
)
def test_s20_missing_or_empty_endpoint_never_contains(
    scope_range: dict[str, str],
) -> None:
    o = doc(URI["O"])
    o["credentialSubject"]["scope"][0]["range"] = scope_range
    result = run(reissue({URI["O"]: o}))
    # O fails its schema first, so the projection may not even be reached.
    projection = next(
        (
            t
            for t in result.trace
            if t.predicate == "route:operational-scope:bounded-projection"
        ),
        None,
    )
    assert projection is None or projection.state != "established"
    assert result.decision != "accept"


def test_s14_units_and_coverage_factor() -> None:
    ppm = run(with_value("178", "5", "ppm"))
    assert schema_of_d(ppm).state == "contradicted"
    assert ppm.decision == "reject"

    def k3(d: dict[str, Any]) -> None:
        quantity(d)["uncertainty"]["coverageFactor"] = "3"

    result = run(reissue({}, k3))
    mapping = entry(result, "claim-mapping:as-mass-fraction")
    assert (mapping.gate, mapping.state) == (4, "not_established")
    assert "k = 2" in mapping.reason
    assert result.decision == "not_established"


def test_s15_equivalent_encodings_give_the_same_witness() -> None:
    baseline = run()
    kgkg = run(with_value("0.000178", "0.000005", "kg/kg"))
    assert kgkg.decision == baseline.decision
    assert (
        kgkg.authorization[0].route_witness_ids
        == baseline.authorization[0].route_witness_ids
    )
    assert kgkg.conformity.reasons == baseline.conformity.reasons


@pytest.mark.parametrize("bad", ["NaN", "Infinity", "-5"])
def test_s16_non_numeric_values_are_refused(bad: str) -> None:
    assert run(with_value("178", bad)).decision == "reject"


def test_s16_reversed_scope_interval_is_invalid() -> None:
    o = doc(URI["O"])
    o["credentialSubject"]["scope"][0]["range"] = {
        "from": "500",
        "to": "50",
        "unit": "mg/kg",
    }
    result = run(reissue({URI["O"]: o}))
    assert (
        entry(result, "route:operational-scope:bounded-projection").state
        == "contradicted"
    )
    assert result.decision == "reject"


@pytest.mark.parametrize(
    "field, value",
    [
        ("propertyIri", RM + "Ash"),
        ("matrixIri", RM + "CuZn40Pb2"),
        ("methodIri", RM + "M1a"),
    ],
)
def test_s17_exact_identifiers_only(field: str, value: str) -> None:
    def edit(d: dict[str, Any]) -> None:
        if field == "matrixIri":
            d["credentialSubject"]["materials"][0]["matrixIri"] = value
        else:
            first_result(d)[field] = value

    assert run(reissue({}, edit)).authorization[0].state == "contradicted"


def test_s22_no_invented_uncertainty_ceiling() -> None:
    overrides = with_value("178", "40")
    assert run(overrides, request(conformity=None)).decision == "accept"
    with_rule = run(overrides)
    assert with_rule.authorization[0].state == "established"
    assert with_rule.conformity.state == "contradicted"
    assert "178 + 40 = 218 > 200" in conformity_reason(with_rule)


def test_s23_asymmetric_uncertainty_is_refused() -> None:
    d = doc(URI["D"])
    quantity(d)["uncertainty"] = {
        "expandedUncertainty": "5",
        "coverageFactor": "2",
        "lowerExpandedUncertainty": "3",
    }
    # PyLD has no safe mode, so Python can sign the undefined term (the TS test asserts
    # that signing is refused); verification still refuses it at the closed schema.
    result = run({URI["D"]: sign(d)})
    assert schema_of_d(result).state == "contradicted"
    assert result.decision == "reject"


def test_s24_no_claims_and_missing_result() -> None:
    with pytest.raises(ValueError, match="at least one claim"):
        request(selected_claims=())
    missing = (
        SelectedClaim(
            "missing", "/credentialSubject/materialPropertiesList/0/results/7"
        ),
    )
    result = run(req=request(selected_claims=missing))
    assert result.authorization[0].state == "not_established"
    assert result.decision == "not_established"


def test_unconfigured_requirement_is_not_established() -> None:
    wanted = ConformityRequest("as-max-100", "guarded-acceptance-expanded-u")
    result = run(req=request(conformity=wanted))
    assert (result.conformity.state, result.conformity.execution) == (
        "not_established",
        "executed",
    )
    assert result.decision == "not_established"


# --- time: historical questions and scope in force at the activity (P13, P14) -----


def test_p13_historical_question_needs_historical_status() -> None:
    historical = run(req=request(activity_time="2026-03-01T00:00:00Z"))
    status = next(
        t
        for t in historical.trace
        if t.node_use.startswith(URI["D"] + " |") and t.predicate == "credential-status"
    )
    assert status.state == "not_established"
    assert "historical status is unavailable" in status.reason
    assert historical.decision == "not_established"
    assert run().decision == "accept"


def test_p14_later_scope_cannot_authorize_an_earlier_activity() -> None:
    o = doc(URI["O"])
    o["validFrom"] = "2026-01-25T00:00:00Z"
    result = run(reissue({URI["O"]: o}))
    assert (
        entry(result, "route:operational-scope:bounded-projection").state
        == "established"
    )
    in_force = entry(result, "route:operational-scope:scope-in-force-at-activity")
    assert in_force.state == "not_established"
    assert "a later scope cannot authorize it" in in_force.reason
    assert result.authorization[0].state == "not_established"
    assert result.decision == "not_established"


def test_p14_baseline_grants_were_in_force() -> None:
    in_force = entry(run(), "route:operational-scope:scope-in-force-at-activity")
    assert in_force.state == "established"
    assert "O and A were in force at the activity time 2026-01-20" in in_force.reason
