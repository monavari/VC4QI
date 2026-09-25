# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/rm-v1-authority.test.ts (I3 routes and support)."""

from __future__ import annotations

import json
from typing import Any

from qi_vc_core.reliance import load_reliance_profile, sha384_sri
from qi_vc_core.reliance.rm_v1 import RM_V1_DIRECTORY
from qi_vc_core.reliance.rm_v1_artifacts import evaluate_rm_slice
from qi_vc_core.reliance.rm_v1_authority import (
    BasisResult,
    RouteResult,
    compose_authority,
)

from .test_rm_v1_slice import (
    MANIFEST,
    PROFILE,
    URI,
    catalog_with,
    doc,
    request,
    resign,
    serialize,
)

KEY = {
    "https://nab.vc4qi.example/controller": "nab",
    URI["PRODUCER"]: "producer",
    URI["LAB"]: "lab",
}
PROFILE_JSON = json.loads((RM_V1_DIRECTORY / "profiles/rm-verifier-1.json").read_text())


def sign(document: dict[str, Any]) -> str:
    issuer = document["issuer"]
    return resign(document, KEY[issuer], f"{issuer}#key-1")


def reissue(
    changed: dict[str, dict[str, Any]], edit_d: Any = None
) -> dict[str, str | None]:
    """Re-sign changed credentials and every credential pinning them by digest."""
    overrides: dict[str, str | None] = {}
    for uri in (URI["A"], URI["H"], URI["O"], URI["S"], URI["D"]):
        document = changed.get(uri) or doc(uri)
        dirty = uri in changed
        if uri == URI["D"] and edit_d is not None:
            edit_d(document)
            dirty = True
        refs = []
        for ref in document.get("relatedResource", []):
            replacement = overrides.get(ref["id"])
            if isinstance(replacement, str):
                dirty = True
                ref = {**ref, "digestSRI": sha384_sri(replacement.encode("utf-8"))}
            refs.append(ref)
        if refs:
            document["relatedResource"] = refs
        if dirty:
            overrides[uri] = sign(document)
    return overrides


def run(
    overrides: dict[str, str | None] | None = None,
    req: Any = None,
    profile: Any = PROFILE,
) -> Any:
    return evaluate_rm_slice(
        req or request(), catalog_with(overrides), MANIFEST, profile
    ).result


def basis(result: Any, basis_id: str) -> Any:
    return next(
        t for t in result.trace if t.predicate == f"route:operational-scope:{basis_id}"
    )


def support(result: Any, basis_id: str) -> Any:
    return next(t for t in result.trace if t.predicate == f"support:{basis_id}")


def test_operational_scope_route_is_established_with_witnesses() -> None:
    result = run()
    for basis_id in (
        "authorizing-reference",
        "principal-binding",
        "self-maintained-scope",
        "activity-permission",
        "maintenance-grant",
        "accreditation-grantee",
        "projection-permission",
        "bounded-projection",
        "trust-anchor",
    ):
        assert basis(result, basis_id).state == "established", basis_id
    assert "scope-as-m1 ⊆" in basis(result, "bounded-projection").reason


def test_p06_scope_granted_to_another_party_is_contradicted() -> None:
    o = doc(URI["O"])
    o["credentialSubject"]["id"] = URI["LAB"]
    result = run(reissue({URI["O"]: o}))
    assert basis(result, "principal-binding").state == "contradicted"
    assert result.authorization[0].state == "contradicted"
    assert result.decision == "reject"


def test_p06_accreditation_naming_another_grantee() -> None:
    a = doc(URI["A"])
    a["credentialSubject"]["id"] = URI["LAB"]
    result = run(reissue({URI["A"]: a}))
    assert all(
        t.state == "established"
        for t in result.trace
        if t.predicate == "related-resource-integrity"
    )
    assert basis(result, "accreditation-grantee").state == "contradicted"
    assert result.decision == "reject"


def test_p06_operational_scope_without_grantee_is_blocked() -> None:
    o = doc(URI["O"])
    del o["credentialSubject"]["id"]
    result = run(reissue({URI["O"]: o}))
    reference = basis(result, "authorizing-reference")
    assert reference.state == "contradicted"
    assert "'id' is a required property" in reference.reason
    assert result.decision == "reject"


def test_v04_unrecognized_policy_type_establishes_no_authority() -> None:
    d = doc(URI["D"])
    d["termsOfUse"][0]["type"] = "TrustFrameworkPolicy"
    result = run({URI["D"]: serialize(d)})
    schema = next(
        t
        for t in result.trace
        if t.node_use.startswith(URI["D"] + " |") and t.predicate == "schema"
    )
    assert schema.state == "contradicted"
    assert result.authorization[0].state == "not_established"
    assert result.authorization[0].route_witness_ids == ()


def test_c08_accreditation_without_maintenance_permission() -> None:
    a = doc(URI["A"])
    a["credentialSubject"]["permittedActivity"] = [
        "https://vc4qi.example/bindings/rm/1#issueRmCertificate"
    ]
    result = run(reissue({URI["A"]: a}))
    assert basis(result, "projection-permission").state == "contradicted"
    assert result.decision == "reject"


def test_scope_wider_than_accreditation_is_not_a_bounded_projection() -> None:
    o = doc(URI["O"])
    o["credentialSubject"]["scope"][0]["range"]["to"] = "600"
    result = run(reissue({URI["O"]: o}))
    assert basis(result, "bounded-projection").state == "contradicted"


def test_bounded_projection_is_exact_across_units() -> None:
    o = doc(URI["O"])
    o["credentialSubject"]["scope"][0]["range"] = {
        "from": "0.00005",
        "to": "0.0005",
        "unit": "kg/kg",
    }
    assert (
        basis(run(reissue({URI["O"]: o})), "bounded-projection").state == "established"
    )
    o["credentialSubject"]["scope"][0]["range"]["to"] = "0.0005000001"
    assert (
        basis(run(reissue({URI["O"]: o})), "bounded-projection").state == "contradicted"
    )


def test_v05_v08_unreferenced_accreditation_grants_nothing() -> None:
    result = run(reissue({}, lambda d: d.pop("termsOfUse")))
    assert basis(result, "authorizing-reference").state == "not_established"
    assert result.authorization[0].state == "not_established"
    assert result.authorization[0].route_witness_ids == ()
    assert result.support[0].state == "established"
    assert result.decision == "not_established"


def test_v07_unrelated_credential_confers_nothing() -> None:
    baseline = run()
    padded = run(
        req=request(
            supplied_evidence=(
                URI["A"],
                URI["O"],
                URI["S"],
                URI["H"],
                "https://producer.vc4qi.example/credentials/D197",
            )
        )
    )
    assert (
        padded.authorization[0].route_witness_ids
        == baseline.authorization[0].route_witness_ids
    )
    assert padded.decision == baseline.decision


def test_anchor_without_the_accreditation_purpose() -> None:
    profile = load_reliance_profile(
        {
            **PROFILE_JSON,
            "trustAnchors": [
                {
                    "id": "https://nab.vc4qi.example/controller",
                    "purposes": ["recognize-rm-laboratories"],
                }
            ],
        }
    )
    result = run(profile=profile)
    assert basis(result, "trust-anchor").state == "not_established"
    assert result.decision == "not_established"


def test_c09_study_without_own_laboratory_authority() -> None:
    s = doc(URI["S"])
    s.pop("termsOfUse")
    result = run(reissue({URI["S"]: s}))
    assert support(result, "laboratory-authority-reference").state == "not_established"
    assert result.support[0].state == "not_established"


def test_c10_study_about_another_batch_contradicts() -> None:
    s = doc(URI["S"])
    s["credentialSubject"]["id"] = "urn:vc4qi-example:batch:cuzn39pb3-disc-lot-2"
    result = run(reissue({URI["S"]: s}))
    assert support(result, "same-batch").state == "contradicted"
    assert support(result, "laboratory-binding").state == "established"
    assert result.support[0].state == "contradicted"
    assert result.decision == "reject"


def test_c11_unavailable_study_is_not_established() -> None:
    result = run(
        {URI["S"]: None}, request(supplied_evidence=(URI["A"], URI["O"], URI["H"]))
    )
    assert result.support[0].state == "not_established"
    assert result.decision == "not_established"


def test_laboratory_authority_not_covering_study_type() -> None:
    h = doc(URI["H"])
    h["credentialSubject"]["scope"][0]["studyTypeIris"] = [
        "https://vc4qi.example/bindings/rm/1#Stability"
    ]
    result = run(reissue({URI["H"]: h}))
    assert support(result, "study-scope").state == "contradicted"
    assert result.support[0].state == "contradicted"


def test_study_after_certification_is_contradicted() -> None:
    s = doc(URI["S"])
    s["credentialSubject"]["activityTime"] = "2026-01-25T00:00:00Z"
    result = run(reissue({URI["S"]: s}))
    assert support(result, "study-precedes-certification").state == "contradicted"


def _b(state: Any) -> BasisResult:
    return BasisResult("b", state, state)


def _r(route_id: str, *states: Any) -> RouteResult:
    state: Any = (
        "contradicted"
        if "contradicted" in states
        else "established"
        if all(s == "established" for s in states)
        else "not_established"
    )
    return RouteResult(route_id, state, "executed", tuple(_b(s) for s in states), ())


def test_c01_to_c07_route_composition() -> None:
    assert (
        compose_authority((), (_r("c", "established", "established"),), ()).state
        == "established"
    )
    assert (
        compose_authority((), (_r("c", "established", "not_established"),), ()).state
        == "not_established"
    )
    assert (
        compose_authority(
            (), (_r("x", "contradicted"), _r("y", "established")), ()
        ).state
        == "established"
    )
    assert (
        compose_authority(
            (), (_r("x", "contradicted"), _r("y", "contradicted")), ()
        ).state
        == "contradicted"
    )
    assert (
        compose_authority(
            (), (_r("x", "contradicted"), _r("y", "not_established")), ()
        ).state
        == "not_established"
    )
    assert (
        compose_authority(
            (),
            (
                _r("x", "established", "not_established"),
                _r("y", "not_established", "established"),
            ),
            (),
        ).state
        == "not_established"
    )
    assert (
        compose_authority(
            (_b("contradicted"),), (_r("x", "established"), _r("y", "established")), ()
        ).state
        == "contradicted"
    )


def test_c16_budget_limited_search_never_disproves() -> None:
    result = compose_authority((), (_r("x", "contradicted"),), ("y",))
    assert result.state == "not_established" and "budget" in result.reason
    assert compose_authority((), (), ()).state == "not_established"
    profile = load_reliance_profile(
        {
            **PROFILE_JSON,
            "authority": {
                "certificateRoutes": ["direct-accreditation", "operational-scope"],
                "globalRestrictions": [],
                "maxRoutes": 1,
            },
        }
    )
    run_result = run(profile=profile)
    skipped = next(
        t for t in run_result.trace if t.predicate == "route:operational-scope"
    )
    assert skipped.execution == "not_run"
    assert run_result.authorization[0].state == "not_established"


def test_reissue_without_change_reproduces_d() -> None:
    assert reissue({}, lambda d: None)[URI["D"]] == serialize(doc(URI["D"]))
