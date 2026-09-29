# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/gs-v1.test.ts (GS scheme authorization, product passports)."""

from __future__ import annotations

import hashlib
import json
from collections.abc import Callable, Mapping
from typing import Any

from nacl.signing import SigningKey
from qi_vc_core.proofs import create_proof
from qi_vc_core.reliance import (
    StaticResourceCatalog,
    load_binding_manifest,
    load_reliance_profile,
    sha384_sri,
)
from qi_vc_core.reliance.catalog import CatalogBudget, StaticResource
from qi_vc_core.reliance.gs_v1 import GS_V1_DIRECTORY, evaluate_gs_slice
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
    json.loads((GS_V1_DIRECTORY / "manifest.json").read_text())
)
PROFILE_JSON = json.loads((GS_V1_DIRECTORY / "profiles/gs-verifier-1.json").read_text())
PROFILE = load_reliance_profile(PROFILE_JSON)
PINNED = read_pinned_resources(GS_V1_DIRECTORY / "catalog.json")
SIGNED = read_pinned_resources(GS_V1_DIRECTORY / "test-vectors/signed/catalog.json")
GS = "https://vc4qi.example/bindings/gs/1#"
GS_A = "https://nab.vc4qi.example/credentials/GS-A"
GS_S = "https://zls.vc4qi.example/credentials/GS-S"
GSC = "https://gs-body.vc4qi.example/credentials/GSC-1"
DPP1 = "https://maker.vc4qi.example/credentials/DPP-1"
DPP2 = "https://maker.vc4qi.example/credentials/DPP-2"
DPP3 = "https://maker.vc4qi.example/credentials/DPP-3"
DPP4 = "https://maker.vc4qi.example/credentials/DPP-4"
DPP5 = "https://clone.vc4qi.example/credentials/DPP-5"
GSC2 = "https://gs-body.vc4qi.example/credentials/GSC-2"
GSC3 = "https://gs-body.vc4qi.example/credentials/GSC-3"
TR1 = "https://gs-body.vc4qi.example/credentials/TR-1"
TR2 = "https://testlab-gs.vc4qi.example/credentials/TR-2"
FI1 = "https://gs-body.vc4qi.example/credentials/FI-1"
TLA = "https://nab.vc4qi.example/credentials/TL-A"
NAB = "https://nab.vc4qi.example/controller"
SCHEME = "https://zls.vc4qi.example/controller"
KEY = {
    NAB: "nab",
    SCHEME: "zls",
    "https://testlab-gs.vc4qi.example/controller": "gs-testlab",
    "https://clone.vc4qi.example/controller": "clone",
    "https://gs-body.vc4qi.example/controller": "gs-body",
    "https://maker.vc4qi.example/controller": "maker",
}
CERTIFICATION = "/credentialSubject/certification"
ROUTE = "route:competence-and-scheme-permission"
COVERAGE = "claim-coverage:gs:competence-and-scheme-permission"


def doc(uri: str) -> dict[str, Any]:
    return dict(json.loads(next(r for r in SIGNED if r.uri == uri).content))


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
    body = {**unsigned, "proof": proof.to_json_object()}
    return json.dumps(body, indent=2, ensure_ascii=False) + "\n"


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


def certification(d: dict[str, Any]) -> dict[str, Any]:
    return d["credentialSubject"]["certification"]  # type: ignore[no-any-return]


def without_reference(kind: str) -> Callable[[dict[str, Any]], None]:
    def edit(d: dict[str, Any]) -> None:
        removed = next(
            p for p in d["termsOfUse"] if p["authorizationCredential"]["type"] == kind
        )
        d["termsOfUse"] = [p for p in d["termsOfUse"] if p is not removed]
        removed_id = removed["authorizationCredential"]["id"]
        d["relatedResource"] = [
            r for r in d["relatedResource"] if r["id"] != removed_id
        ]

    return edit


def request(target: str = GSC) -> RelianceRequest:
    return create_reliance_request(
        RelianceRequest(
            request_id="urn:uuid:gs-v1-request",
            target_id=target,
            selected_claims=(SelectedClaim("gs", CERTIFICATION),),
            purpose="rely-on-gs-certification",
            binding=VersionedIdentifier(MANIFEST.id, MANIFEST.version),
            profile=VersionedIdentifier(PROFILE.id, PROFILE.version),
            trust_config_id="https://vc4qi.example/trust/fixture-gs-anchors",
            evaluation_time="2026-09-25T12:00:00Z",
            activity_time="2026-09-25T12:00:00Z",
            supplied_evidence=(GS_A, GS_S),
            resolver_limits=ResolverLimits(64, 4, 5_000_000),
            conformity=None,
        )
    )


def run(
    overrides: dict[str, str | None] | None = None,
    profile: Any = PROFILE,
    target: str = GSC,
) -> Any:
    return evaluate_gs_slice(
        request(target), catalog_with(overrides), MANIFEST, profile
    ).result


def entry(result: Any, predicate: str) -> Any:
    return next(t for t in result.trace if t.predicate == predicate)


def test_gs_certificate_accepted_through_competence_and_scheme() -> None:
    result = run()
    assert all(v.state == "established" for v in result.artifact_verification)
    assert entry(result, ROUTE).state == "established"
    assert result.authorization[0].route_witness_ids == (
        ROUTE,
        GSC,
        GS_A,
        GS_S,
        f"record:{GS_A}#scope-household",
        f"record:{GS_S}#scope-household",
    )
    assert "not a universal GS or legal rule" in " ".join(result.limitations)
    assert result.decision == "accept"


def test_c02_competence_alone_is_not_the_route() -> None:
    result = run(reissue_chain([(GSC, without_reference("GsSchemeAuthorization"))]))
    assert entry(result, f"{ROUTE}:competence-reference").state == "established"
    assert entry(result, f"{ROUTE}:scheme-reference").state == "not_established"
    assert result.authorization[0].state == "not_established"
    assert result.decision == "not_established"


def test_scheme_permission_alone_is_not_the_route() -> None:
    result = run(reissue_chain([(GSC, without_reference("GsAccreditation"))]))
    assert entry(result, f"{ROUTE}:scheme-reference").state == "established"
    assert entry(result, f"{ROUTE}:competence-reference").state == "not_established"
    assert result.decision == "not_established"


def test_scheme_authorization_for_another_body_rejects() -> None:
    def edit(d: dict[str, Any]) -> None:
        d["credentialSubject"]["id"] = "https://other-body.vc4qi.example/controller"

    result = run(reissue_chain([(GS_S, edit), (GSC, None)]))
    assert entry(result, f"{ROUTE}:scheme-grantee").state == "contradicted"
    assert result.decision == "reject"


def test_category_outside_the_scheme_is_not_covered() -> None:
    def edit(d: dict[str, Any]) -> None:
        certification(d)["productCategoryIri"] = GS + "Toy"
        certification(d)["standardIris"] = [GS + "EN-71-1"]

    result = run(reissue_chain([(GSC, edit)]))
    covered = entry(result, COVERAGE)
    assert covered.state == "contradicted"
    assert "scope-toys covers Toy" in covered.reason
    assert "No single scheme record covers it" in covered.reason
    assert result.decision == "reject"


def test_standards_outside_scope_or_none_named() -> None:
    def outside_edit(d: dict[str, Any]) -> None:
        certification(d)["standardIris"] = [GS + "EN-60335-2-9"]

    outside = run(reissue_chain([(GSC, outside_edit)]))
    assert "EN-60335-2-9 is not in the accredited scope" in (
        entry(outside, COVERAGE).reason
    )
    assert outside.decision == "reject"

    def none_edit(d: dict[str, Any]) -> None:
        certification(d)["standardIris"] = []

    none = run(reissue_chain([(GSC, none_edit)]))
    covered = entry(none, COVERAGE)
    assert covered.state == "not_established"
    assert "names none" in covered.reason
    assert none.decision == "not_established"


def test_each_half_needs_its_own_anchor_purpose() -> None:
    swapped = load_reliance_profile(
        {
            **PROFILE_JSON,
            "trustAnchors": [
                {"id": NAB, "purposes": ["accredit-certification-bodies"]},
                {"id": SCHEME, "purposes": ["accredit-certification-bodies"]},
            ],
        }
    )
    result = run(None, swapped)
    assert entry(result, f"{ROUTE}:competence-anchor").state == "established"
    assert entry(result, f"{ROUTE}:scheme-anchor").state == "not_established"
    assert result.decision == "not_established"


def test_scheme_authorization_after_the_activity_cannot_authorize() -> None:
    def edit(d: dict[str, Any]) -> None:
        d["validFrom"] = "2026-03-15T00:00:00Z"

    result = run(reissue_chain([(GS_S, edit), (GSC, None)]))
    in_force = entry(result, f"{ROUTE}:scope-in-force-at-activity")
    assert in_force.state == "not_established"
    assert "GS-S is valid only from" in in_force.reason
    assert result.decision == "not_established"


DPP_PROFILE = load_reliance_profile(
    json.loads((GS_V1_DIRECTORY / "profiles/gs-verifier-dpp-1.json").read_text())
)
DPP_ROUTE = "route:gs-certified-product"


def run_passport(
    overrides: dict[str, str | None] | None = None, target: str = DPP1
) -> Any:
    base = request()
    req = create_reliance_request(
        RelianceRequest(
            **{
                **base.__dict__,
                "request_id": "urn:uuid:gs-v1-dpp",
                "target_id": target,
                "selected_claims": (
                    SelectedClaim("mark", "/credentialSubject/marking"),
                ),
                "supplied_evidence": (),
                "profile": VersionedIdentifier(DPP_PROFILE.id, DPP_PROFILE.version),
            }
        )
    )
    return evaluate_gs_slice(req, catalog_with(overrides), MANIFEST, DPP_PROFILE).result


def test_passport_accepted_through_a_certificate_for_its_model() -> None:
    result = run_passport()
    assert all(v.state == "established" for v in result.artifact_verification)
    assert entry(result, f"{DPP_ROUTE}:manufacturer-binding").state == "established"
    assert entry(result, f"{DPP_ROUTE}:certificate:claim-coverage").state == (
        "established"
    )
    assert result.authorization[0].route_witness_ids == (
        DPP_ROUTE,
        DPP1,
        GSC,
        GS_A,
        GS_S,
        f"record:{GSC}",
    )
    assert "not EU Digital Product Passport conformance" in " ".join(result.limitations)
    assert result.decision == "accept"


def test_passport_with_uncovered_certificate_rejects() -> None:
    result = run_passport(None, DPP2)
    assert entry(result, f"{DPP_ROUTE}:certificate:claim-coverage").state == (
        "contradicted"
    )
    assert result.decision == "reject"


def test_certificate_for_another_manufacturer_rejects() -> None:
    def edit(d: dict[str, Any]) -> None:
        d["credentialSubject"]["manufacturerIri"] = (
            "https://other-maker.vc4qi.example/controller"
        )

    result = run_passport(reissue_chain([(GSC, edit), (DPP1, None)]))
    assert entry(result, f"{DPP_ROUTE}:manufacturer-binding").state == ("contradicted")
    assert result.decision == "reject"


def test_passport_for_another_model_is_not_covered() -> None:
    def edit(d: dict[str, Any]) -> None:
        d["credentialSubject"]["productModelIri"] = "urn:vc4qi-example:product:toy-999"
        d["credentialSubject"]["marking"]["productModelIri"] = (
            "urn:vc4qi-example:product:toy-999"
        )

    result = run_passport(reissue_chain([(DPP1, edit)]))
    assert entry(result, "claim-coverage:mark:gs-certified-product").state == (
        "contradicted"
    )
    assert result.decision == "reject"


def test_certificate_after_placing_on_market_cannot_authorize() -> None:
    def edit(d: dict[str, Any]) -> None:
        d["validFrom"] = "2026-06-01T00:00:00Z"

    result = run_passport(reissue_chain([(GSC, edit), (DPP1, None)]))
    assert entry(result, f"{DPP_ROUTE}:certificate-in-force").state == (
        "not_established"
    )
    assert result.decision == "not_established"


def test_certificate_route_must_be_complete() -> None:
    edit = without_reference("GsSchemeAuthorization")
    result = run_passport(reissue_chain([(GSC, edit), (DPP1, None)]))
    assert entry(result, f"{DPP_ROUTE}:certificate:scheme-reference").state == (
        "not_established"
    )
    assert result.decision == "not_established"


def test_withheld_certificate_is_not_established() -> None:
    result = run_passport({GSC: None})
    assert result.authorization[0].state == "not_established"
    assert result.decision == "not_established"


# ---------------------------------------------------------------- studies (gate 6)


def subject(d: dict[str, Any]) -> dict[str, Any]:
    return d["credentialSubject"]  # type: ignore[no-any-return]


def test_certificate_studies_are_established_with_their_accreditation() -> None:
    result = run()
    assert [(s.obligation_id, s.state) for s in result.support] == [
        ("gs-v1:type-examination", "established"),
        ("gs-v1:factory-inspection", "established"),
    ]
    assert result.support[0].witness_ids == (TR1, GS_A)


def test_external_laboratory_type_examination_is_accepted() -> None:
    result = run(target=GSC3)
    assert result.support[0].witness_ids == (TR2, TLA)
    assert result.decision == "accept"


def test_toy_rejected_by_scheme_scope_although_studies_hold() -> None:
    result = run(target=GSC2)
    assert all(s.state == "established" for s in result.support)
    assert result.authorization[0].state == "contradicted"
    assert result.decision == "reject"


def test_withheld_type_examination_is_not_established() -> None:
    result = run({TR1: None})
    assert result.support[0].state == "not_established"
    assert result.authorization[0].state == "established"
    assert result.decision == "not_established"


def test_type_examination_missing_a_standard_contradicts() -> None:
    def narrow(d: dict[str, Any]) -> None:
        subject(d)["standardIris"] = [GS + "EN-60335-1"]

    result = run(reissue_chain([(TR1, narrow), (GSC, None)]))
    covers = entry(result, "support:type-examination:covers-certification")
    assert covers.state == "contradicted"
    assert "did not examine EN-60335-2-23" in covers.reason
    assert result.decision == "reject"


def test_laboratory_accreditation_without_testing_does_not_authorize() -> None:
    def no_testing(d: dict[str, Any]) -> None:
        subject(d)["permittedActivity"] = [GS + "certifyProducts"]

    result = run(
        reissue_chain([(TLA, no_testing), (TR2, None), (GSC3, None)]), target=GSC3
    )
    permission = entry(result, "support:type-examination:accreditation-permission")
    assert permission.state == "contradicted"
    assert result.decision == "reject"


def test_factory_inspection_of_another_manufacturer_contradicts() -> None:
    def other(d: dict[str, Any]) -> None:
        subject(d)["manufacturerIri"] = "https://other-maker.vc4qi.example/controller"

    result = run(reissue_chain([(FI1, other), (GSC, None)]))
    same = entry(result, "support:factory-inspection:same-manufacturer")
    assert same.state == "contradicted"
    assert result.decision == "reject"


def test_study_after_the_certification_cannot_support_it() -> None:
    def late(d: dict[str, Any]) -> None:
        subject(d)["activityTime"] = "2026-03-10T00:00:00Z"
        d["validFrom"] = "2026-03-10T00:00:00Z"

    result = run(reissue_chain([(TR1, late), (GSC, None)]))
    precedes = entry(result, "support:type-examination:precedes-certification")
    assert precedes.state == "contradicted"
    assert result.decision == "reject"


def test_passports_external_lab_early_unit_and_other_company() -> None:
    assert run_passport(target=DPP3).decision == "accept"
    early = run_passport(target=DPP4)
    in_force = entry(early, "route:gs-certified-product:certificate-in-force")
    assert in_force.state != "established"
    assert early.decision != "accept"
    clone = run_passport(target=DPP5)
    binding = entry(clone, "route:gs-certified-product:manufacturer-binding")
    assert binding.state == "contradicted"
    assert clone.decision == "reject"
