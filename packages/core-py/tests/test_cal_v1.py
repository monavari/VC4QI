# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/cal-v1.test.ts (I5: calibration use cases, S18-S21)."""

from __future__ import annotations

import hashlib
import json
from collections.abc import Callable, Mapping
from typing import Any

import pytest
from nacl.signing import SigningKey
from qi_vc_core.proofs import create_proof
from qi_vc_core.reliance import (
    StaticResourceCatalog,
    load_binding_manifest,
    load_reliance_profile,
    sha384_sri,
)
from qi_vc_core.reliance.cal_v1 import CAL_V1_DIRECTORY, evaluate_cal_slice
from qi_vc_core.reliance.catalog import CatalogBudget, StaticResource
from qi_vc_core.reliance.rm_v1 import read_pinned_resources
from qi_vc_core.reliance.rm_v1_artifacts import _catalog_loader
from qi_vc_core.reliance.types import (
    RelianceRequest,
    ResolverLimits,
    SelectedClaim,
    VersionedIdentifier,
    create_reliance_request,
)
from qi_vc_core.types import Ed25519KeyPair

MANIFEST = load_binding_manifest(
    json.loads((CAL_V1_DIRECTORY / "manifest.json").read_text())
)
PROFILE_JSON = json.loads(
    (CAL_V1_DIRECTORY / "profiles/cal-verifier-1.json").read_text()
)
PROFILE = load_reliance_profile(PROFILE_JSON)


def profile_json(file: str) -> dict[str, Any]:
    return dict(json.loads((CAL_V1_DIRECTORY / "profiles" / file).read_text()))


CAPABILITY_PROFILE = load_reliance_profile(
    profile_json("cal-verifier-capability-1.json")
)
NMI_PROFILE = load_reliance_profile(profile_json("cal-verifier-nmi-1.json"))
REPORT_PROFILE = load_reliance_profile(profile_json("cal-verifier-test-report-1.json"))
PINNED = read_pinned_resources(CAL_V1_DIRECTORY / "catalog.json")
SIGNED = read_pinned_resources(CAL_V1_DIRECTORY / "test-vectors/signed/catalog.json")
CAL = "https://vc4qi.example/bindings/cal/1#"
CA = "https://nab.vc4qi.example/credentials/CAL-A"
DCC = "https://lab.vc4qi.example/credentials/DCC-1"
OPS = "https://lab.vc4qi.example/credentials/CAL-O"
DCC2 = "https://lab.vc4qi.example/credentials/DCC-2"
M = "https://ministry.vc4qi.example/credentials/CAL-M"
DCCN = "https://nmi.vc4qi.example/credentials/DCC-N"
CAL_T = "https://nab.vc4qi.example/credentials/CAL-T"
REPORT = "https://testlab.vc4qi.example/credentials/REPORT-1"
NAB = "https://nab.vc4qi.example/controller"
MINISTRY = "https://ministry.vc4qi.example/controller"
KEY = {
    NAB: "nab",
    "https://lab.vc4qi.example/controller": "lab",
    MINISTRY: "ministry",
    "https://nmi.vc4qi.example/controller": "nmi",
    "https://testlab.vc4qi.example/controller": "tlab",
}
G1 = "/credentialSubject/measurementGroups/0"
G2 = "/credentialSubject/measurementGroups/1"


def doc(uri: str) -> dict[str, Any]:
    return dict(json.loads(next(r for r in SIGNED if r.uri == uri).content))


def serialize(document: dict[str, Any]) -> str:
    return json.dumps(document, indent=2, ensure_ascii=False) + "\n"


def catalog_with(overrides: Mapping[str, str | None] | None = None) -> Any:
    overrides = overrides or {}
    resources = []
    for r in PINNED + SIGNED:
        if r.uri in overrides and overrides[r.uri] is None:
            continue
        text = overrides.get(r.uri)
        if isinstance(text, str):
            content = text.encode("utf-8")
            r = StaticResource(
                r.uri, r.media_type, content, sha384_sri(content), r.origin, r.version
            )
        resources.append(r)
    return StaticResourceCatalog(resources)


def sign(document: dict[str, Any]) -> str:
    unsigned = {k: v for k, v in document.items() if k != "proof"}
    issuer = document["issuer"]
    seed = hashlib.sha256(
        f"vc4qi-rm-v1-insecure-fixture-key:{KEY[issuer]}".encode()
    ).digest()
    key = Ed25519KeyPair(
        id=f"{issuer}#key-1",
        controller=issuer,
        private_key=seed,
        public_key=bytes(SigningKey(seed).verify_key),
    )
    session = catalog_with().open_session(
        CatalogBudget(max_resources=64, max_bytes=5_000_000)
    )
    proof = create_proof(
        unsigned,
        key,
        created="2026-02-01T00:00:00Z",
        document_loader=_catalog_loader(session),
    )
    return serialize({**unsigned, "proof": proof.to_json_object()})


def reissue(
    changed_ca: dict[str, Any] | None = None,
    edit_dcc: Callable[[dict[str, Any]], None] | None = None,
) -> dict[str, str | None]:
    overrides: dict[str, str | None] = {}
    if changed_ca is not None:
        overrides[CA] = sign(changed_ca)
    dcc = doc(DCC)
    if edit_dcc is not None:
        edit_dcc(dcc)
    ca_text = overrides.get(CA)
    if isinstance(ca_text, str):
        dcc["relatedResource"] = [
            {"id": CA, "digestSRI": sha384_sri(ca_text.encode("utf-8"))}
        ]
    overrides[DCC] = sign(dcc)
    return overrides


def reissue_chain(
    steps: list[tuple[str, Callable[[dict[str, Any]], None] | None]],
) -> dict[str, str | None]:
    """Re-issue bottom-up, updating relatedResource digests of re-issued credentials."""
    overrides: dict[str, str | None] = {}
    for uri, edit in steps:
        d = doc(uri)
        if edit is not None:
            edit(d)
        if isinstance(d.get("relatedResource"), list):
            related = []
            for r in d["relatedResource"]:
                text = overrides.get(r["id"])
                related.append(
                    {"id": r["id"], "digestSRI": sha384_sri(text.encode("utf-8"))}
                    if isinstance(text, str)
                    else r
                )
            d["relatedResource"] = related
        overrides[uri] = sign(d)
    return overrides


def subject(d: dict[str, Any]) -> dict[str, Any]:
    return d["credentialSubject"]  # type: ignore[no-any-return]


def scope0(d: dict[str, Any]) -> dict[str, Any]:
    return subject(d)["scope"][0]  # type: ignore[no-any-return]


def groups(d: dict[str, Any]) -> list[dict[str, Any]]:
    return d["credentialSubject"]["measurementGroups"]  # type: ignore[no-any-return]


def result0(d: dict[str, Any], group: int = 0) -> dict[str, Any]:
    return groups(d)[group]["results"][0]  # type: ignore[no-any-return]


def request(**overrides: Any) -> RelianceRequest:
    values: dict[str, Any] = {
        "request_id": "urn:uuid:cal-v1-request",
        "target_id": DCC,
        "selected_claims": (SelectedClaim("g1", G1), SelectedClaim("g2", G2)),
        "purpose": "rely-on-calibration",
        "binding": VersionedIdentifier(MANIFEST.id, MANIFEST.version),
        "profile": VersionedIdentifier(PROFILE.id, PROFILE.version),
        "trust_config_id": "https://vc4qi.example/trust/fixture-nab-anchor",
        "evaluation_time": "2026-09-25T12:00:00Z",
        "activity_time": "2026-09-25T12:00:00Z",
        "supplied_evidence": (CA,),
        "resolver_limits": ResolverLimits(64, 4, 5_000_000),
        "conformity": None,
    }
    values.update(overrides)
    return create_reliance_request(RelianceRequest(**values))


def run(
    overrides: dict[str, str | None] | None = None,
    req: Any = None,
    profile: Any = PROFILE,
) -> Any:
    return evaluate_cal_slice(
        req or request(), catalog_with(overrides), MANIFEST, profile
    ).result


def entry(result: Any, predicate: str) -> Any:
    return next(t for t in result.trace if t.predicate == predicate)


def test_migrated_use_case_is_accepted_with_witnesses() -> None:
    result = run()
    assert all(v.state == "established" for v in result.artifact_verification)
    assert entry(result, "route:direct-accreditation").state == "established"
    assert [a.state for a in result.authorization] == ["established", "established"]
    assert result.authorization[0].route_witness_ids == (
        "route:direct-accreditation",
        DCC,
        CA,
        f"record:{CA}#scope-pressure",
    )
    assert (
        "not below the CMC 0.5 kPa"
        in entry(result, "claim-coverage:g1:direct-accreditation").reason
    )
    assert result.decision == "accept"


def test_accreditation_for_another_laboratory_rejects() -> None:
    ca = doc(CA)
    ca["credentialSubject"]["id"] = "https://other-lab.vc4qi.example/controller"
    result = run(reissue(ca))
    assert (
        entry(result, "route:direct-accreditation:principal-binding").state
        == "contradicted"
    )
    assert result.decision == "reject"


def test_method_outside_record_contradicts() -> None:
    def edit(d: dict[str, Any]) -> None:
        groups(d)[0]["methodIris"] = [CAL + "DeadWeightTester"]

    result = run(reissue(None, edit))
    assert result.authorization[0].state == "contradicted"
    assert result.decision == "reject"


def test_coverage_factor_other_than_two_is_not_mapped() -> None:
    def edit(d: dict[str, Any]) -> None:
        result0(d)["coverageFactor"] = "3"

    result = run(reissue(None, edit))
    mapping = entry(result, "claim-mapping:g1")
    assert (mapping.gate, mapping.state) == (4, "not_established")
    assert result.decision == "not_established"


def test_profile_must_state_the_cmc_rule() -> None:
    without = {k: v for k, v in PROFILE_JSON.items() if k != "bindingRules"}
    with pytest.raises(ValueError, match="applyCmcFloor"):
        run(None, request(), load_reliance_profile(without))


@pytest.mark.parametrize("mode", ["empty", "missing"])
def test_s18_no_empty_method_bypass(mode: str) -> None:
    def edit(d: dict[str, Any]) -> None:
        if mode == "empty":
            groups(d)[0]["methodIris"] = []
        else:
            del groups(d)[0]["methodIris"]

    result = run(reissue(None, edit))
    covered = entry(result, "claim-coverage:g1:direct-accreditation")
    assert covered.state == "not_established"
    assert "names no governed method" in covered.reason
    assert result.decision == "not_established"


def test_s19_failed_first_group_is_not_erased() -> None:
    def edit(d: dict[str, Any]) -> None:
        result0(d)["value"] = "15000"

    result = run(reissue(None, edit))
    assert [a.state for a in result.authorization] == ["contradicted", "established"]
    assert (
        "15000 kPa is outside 0–10000 kPa"
        in entry(result, "claim-coverage:g1:direct-accreditation").reason
    )
    assert result.decision == "reject"


def test_s21_uncertainty_below_cmc_contradicts_scope() -> None:
    def edit(d: dict[str, Any]) -> None:
        result0(d)["expandedUncertainty"] = "0.3"

    overrides = reissue(None, edit)
    applied = run(overrides)
    assert (
        "U = 0.3 kPa is below the admitted CMC 0.5 kPa"
        in entry(applied, "claim-coverage:g1:direct-accreditation").reason
    )
    assert applied.authorization[0].state == "contradicted"
    assert applied.decision == "reject"
    not_applied = load_reliance_profile(
        {**PROFILE_JSON, "bindingRules": {"applyCmcFloor": False}}
    )
    assert run(overrides, request(), not_applied).decision == "accept"


def selects(profile: Any) -> VersionedIdentifier:
    return VersionedIdentifier(profile.id, profile.version)


def run_capability(
    overrides: dict[str, str | None] | None = None, profile: Any = CAPABILITY_PROFILE
) -> Any:
    req = request(
        request_id="urn:uuid:cal-v1-capability",
        target_id=DCC2,
        selected_claims=(SelectedClaim("g1", G1),),
        supplied_evidence=(OPS, CA),
        profile=selects(profile),
    )
    return run(overrides, req, profile)


def test_capability_accepted_through_operational_scope() -> None:
    result = run_capability()
    assert entry(result, "route:operational-scope").state == "established"
    assert (
        "scope-pressure-low lies within scope-pressure"
        in entry(result, "route:operational-scope:bounded-projection").reason
    )
    assert result.authorization[0].route_witness_ids == (
        "route:operational-scope",
        DCC2,
        OPS,
        CA,
        f"record:{OPS}#scope-pressure-low",
    )
    assert result.decision == "accept"


def test_capability_wider_than_accreditation_is_no_projection() -> None:
    def edit(d: dict[str, Any]) -> None:
        scope0(d)["range"]["to"] = "20"

    result = run_capability(reissue_chain([(OPS, edit), (DCC2, None)]))
    projection = entry(result, "route:operational-scope:bounded-projection")
    assert projection.state == "contradicted"
    assert "0–20000 kPa is not within 0–10000 kPa" in projection.reason
    assert result.decision == "reject"


def test_capability_better_than_admitted_widens_when_floor_applies() -> None:
    def edit_o(d: dict[str, Any]) -> None:
        scope0(d)["cmcFloor"]["value"] = "0.3"

    def edit_dcc(d: dict[str, Any]) -> None:
        result0(d)["expandedUncertainty"] = "0.4"

    overrides = reissue_chain([(OPS, edit_o), (DCC2, edit_dcc)])
    applied = run_capability(overrides)
    assert (
        "CMC 0.3 kPa is below the admitted 0.5 kPa"
        in entry(applied, "route:operational-scope:bounded-projection").reason
    )
    assert applied.decision == "reject"
    not_applied = load_reliance_profile(
        {
            **profile_json("cal-verifier-capability-1.json"),
            "bindingRules": {"applyCmcFloor": False},
        }
    )
    assert run_capability(overrides, not_applied).decision == "accept"


def test_c08_analogue_no_scope_maintenance_permission() -> None:
    def edit(d: dict[str, Any]) -> None:
        subject(d)["permittedActivity"] = [CAL + "issueCalibrationCertificate"]

    result = run_capability(reissue_chain([(CA, edit), (OPS, None), (DCC2, None)]))
    assert (
        entry(result, "route:operational-scope:projection-permission").state
        == "contradicted"
    )
    assert result.decision == "reject"


def test_group_outside_operational_scope_is_not_rescued_by_parent() -> None:
    def edit(d: dict[str, Any]) -> None:
        result0(d)["value"] = "5000"

    result = run_capability(reissue_chain([(DCC2, edit)]))
    covered = entry(result, "claim-coverage:g1:operational-scope")
    assert covered.state == "contradicted"
    assert "5000 kPa is outside 0–2000 kPa" in covered.reason
    assert result.authorization[0].state == "contradicted"
    assert result.decision == "reject"


def run_mandate(
    overrides: dict[str, str | None] | None = None, profile: Any = NMI_PROFILE
) -> Any:
    req = request(
        request_id="urn:uuid:cal-v1-mandate",
        target_id=DCCN,
        selected_claims=(SelectedClaim("g1", G1),),
        supplied_evidence=(M,),
        profile=selects(profile),
    )
    return run(overrides, req, profile)


def test_mandate_accepted_without_accreditation_root() -> None:
    result = run_mandate()
    assert entry(result, "route:statutory-mandate").state == "established"
    witnesses = result.authorization[0].route_witness_ids
    assert witnesses == (
        "route:statutory-mandate",
        DCCN,
        M,
        f"record:{M}#scope-pressure-primary",
    )
    assert not any("nab." in w for w in witnesses)
    assert "no legal effect" in " ".join(result.limitations)
    assert result.decision == "accept"


@pytest.mark.parametrize(
    "anchors",
    [
        [{"id": NAB, "purposes": ["accredit-calibration-laboratories"]}],
        [{"id": MINISTRY, "purposes": ["accredit-calibration-laboratories"]}],
    ],
)
def test_mandate_issuer_must_be_a_designation_anchor(
    anchors: list[dict[str, Any]],
) -> None:
    profile = load_reliance_profile(
        {**profile_json("cal-verifier-nmi-1.json"), "trustAnchors": anchors}
    )
    result = run_mandate(None, profile)
    assert entry(result, "route:statutory-mandate:trust-anchor").state == (
        "not_established"
    )
    assert result.decision == "not_established"


def test_mandate_for_another_institute_rejects() -> None:
    def edit(d: dict[str, Any]) -> None:
        subject(d)["id"] = "https://other-nmi.vc4qi.example/controller"

    result = run_mandate(reissue_chain([(M, edit), (DCCN, None)]))
    assert (
        entry(result, "route:statutory-mandate:principal-binding").state
        == "contradicted"
    )
    assert result.decision == "reject"


def test_mandate_method_outside_scope_is_not_covered() -> None:
    def edit(d: dict[str, Any]) -> None:
        groups(d)[0]["methodIris"] = [CAL + "PressureComparison"]

    result = run_mandate(reissue_chain([(DCCN, edit)]))
    assert entry(result, "claim-coverage:g1:statutory-mandate").state == (
        "contradicted"
    )
    assert result.decision == "reject"


ALL_ROUTES = load_reliance_profile(
    {
        **PROFILE_JSON,
        "id": "https://vc4qi.example/profiles/cal-verifier-all-routes",
        "trustAnchors": [
            {"id": NAB, "purposes": ["accredit-calibration-laboratories"]},
            {"id": MINISTRY, "purposes": ["designate-national-metrology-institutes"]},
        ],
        "authority": {
            "certificateRoutes": [
                "direct-accreditation",
                "operational-scope",
                "statutory-mandate",
            ],
            "globalRestrictions": [],
            "maxRoutes": 4,
        },
    }
)


def all_routes_request(target: str, evidence: tuple[str, ...]) -> RelianceRequest:
    return request(
        target_id=target,
        supplied_evidence=evidence,
        selected_claims=(SelectedClaim("g1", G1),),
        profile=selects(ALL_ROUTES),
    )


@pytest.mark.parametrize(
    ("target", "evidence", "winner"),
    [
        (DCC, (CA,), "direct-accreditation"),
        (DCC2, (OPS, CA), "operational-scope"),
        (DCCN, (M,), "statutory-mandate"),
    ],
)
def test_each_certificate_uses_the_route_its_references_reach(
    target: str, evidence: tuple[str, ...], winner: str
) -> None:
    result = run(None, all_routes_request(target, evidence), ALL_ROUTES)
    assert result.authorization[0].route_witness_ids[0] == f"route:{winner}"
    assert result.decision == "accept"


def test_contradicted_route_beside_unreferenced_routes_is_not_established() -> None:
    ca = doc(CA)
    ca["credentialSubject"]["id"] = "https://other-lab.vc4qi.example/controller"
    result = run(reissue(ca), all_routes_request(DCC, (CA,)), ALL_ROUTES)
    assert entry(result, "route:direct-accreditation").state == "contradicted"
    assert entry(result, "route:statutory-mandate").state == "not_established"
    assert result.decision == "not_established"


def run_report(
    overrides: dict[str, str | None] | None = None, profile: Any = REPORT_PROFILE
) -> Any:
    req = request(
        request_id="urn:uuid:cal-v1-report",
        target_id=REPORT,
        selected_claims=(SelectedClaim("g1", G1),),
        supplied_evidence=(CAL_T,),
        profile=selects(profile),
    )
    return run(overrides, req, profile)


def test_report_accepted_with_supported_instrument_calibration() -> None:
    result = run_report()
    assert all(v.state == "established" for v in result.artifact_verification)
    assert "permits issuing test reports" in (
        entry(result, "route:direct-accreditation:activity-permission").reason
    )
    assert result.authorization[0].route_witness_ids == (
        "route:direct-accreditation",
        REPORT,
        CAL_T,
        f"record:{CAL_T}#scope-pressure-test",
    )
    (support,) = result.support
    assert support.obligation_id == "cal-v1:instrument-calibration"
    assert support.state == "established"
    assert support.witness_ids == (REPORT, DCC, CA)
    assert entry(result, "support:calibration-authority:group-1").state == (
        "established"
    )
    assert result.decision == "accept"


def test_testing_accreditation_is_not_a_calibration_accreditation() -> None:
    only_calibration = load_reliance_profile(
        {
            **profile_json("cal-verifier-test-report-1.json"),
            "trustAnchors": [
                {"id": NAB, "purposes": ["accredit-calibration-laboratories"]}
            ],
        }
    )
    result = run_report(None, only_calibration)
    assert entry(result, "route:direct-accreditation:trust-anchor").state == (
        "not_established"
    )
    assert result.decision == "not_established"

    def edit(d: dict[str, Any]) -> None:
        subject(d)["permittedActivity"] = [CAL + "issueCalibrationCertificate"]

    as_certificate = run_report(reissue_chain([(CAL_T, edit), (REPORT, None)]))
    assert (
        entry(as_certificate, "route:direct-accreditation:activity-permission").state
        == "contradicted"
    )
    assert as_certificate.decision == "reject"


def test_calibration_of_another_instrument_contradicts_support() -> None:
    def edit(d: dict[str, Any]) -> None:
        subject(d)["instrumentIri"] = "urn:vc4qi-example:item:other-gauge"

    result = run_report(reissue_chain([(REPORT, edit)]))
    assert entry(result, "support:same-instrument").state == "contradicted"
    assert result.authorization[0].state == "established"
    assert result.decision == "reject"


def test_test_before_calibration_contradicts_support() -> None:
    def edit(d: dict[str, Any]) -> None:
        subject(d)["activityTime"] = "2026-01-10T09:00:00Z"

    result = run_report(reissue_chain([(REPORT, edit)]))
    assert entry(result, "support:calibration-precedes-use").state == "contradicted"
    assert entry(result, "support:calibration-valid-at-use").state == "contradicted"
    assert result.decision == "reject"


def test_report_citing_no_calibration_is_not_established() -> None:
    def edit(d: dict[str, Any]) -> None:
        del d["evidence"]
        d["relatedResource"] = [r for r in d["relatedResource"] if r["id"] != DCC]

    result = run_report(reissue_chain([(REPORT, edit)]))
    assert result.support[0].state == "not_established"
    assert result.decision == "not_established"


def test_support_requires_the_calibrations_own_authority() -> None:
    def edit(d: dict[str, Any]) -> None:
        result0(d, 1)["value"] = "15"

    result = run_report(reissue_chain([(DCC, edit), (REPORT, None)]))
    assert entry(result, "support:calibration-authority:group-0").state == (
        "established"
    )
    assert entry(result, "support:calibration-authority:group-1").state == (
        "contradicted"
    )
    assert result.support[0].state == "contradicted"
    assert result.support[0].witness_ids == ()
    assert result.decision == "reject"


def test_certificates_carry_no_support_obligation() -> None:
    assert run().support == ()
