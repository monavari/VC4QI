# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/cal-v1.test.ts (I5: migrated calibration binding, S18-S21)."""

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
PINNED = read_pinned_resources(CAL_V1_DIRECTORY / "catalog.json")
SIGNED = read_pinned_resources(CAL_V1_DIRECTORY / "test-vectors/signed/catalog.json")
CAL = "https://vc4qi.example/bindings/cal/1#"
CA = "https://nab.vc4qi.example/credentials/CAL-A"
DCC = "https://lab.vc4qi.example/credentials/DCC-1"
KEY = {
    "https://nab.vc4qi.example/controller": "nab",
    "https://lab.vc4qi.example/controller": "lab",
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


def groups(d: dict[str, Any]) -> list[dict[str, Any]]:
    return d["credentialSubject"]["measurementGroups"]  # type: ignore[no-any-return]


def result0(d: dict[str, Any]) -> dict[str, Any]:
    return groups(d)[0]["results"][0]  # type: ignore[no-any-return]


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
