# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/rm-v1-slice.test.ts over the TypeScript-generated fixtures."""

import copy
import hashlib
import json
from collections.abc import Mapping
from typing import Any

import pytest
from nacl.signing import SigningKey
from qi_vc_core.proofs import create_proof
from qi_vc_core.reliance import (
    CatalogBudget,
    StaticResource,
    StaticResourceCatalog,
    load_binding_manifest,
    load_reliance_profile,
    read_pinned_resources,
    sha384_sri,
)
from qi_vc_core.reliance.rm_v1 import RM_V1_DIRECTORY
from qi_vc_core.reliance.rm_v1_artifacts import (
    _catalog_loader,
    _undefined_terms,
    evaluate_rm_slice,
    verify_rm_artifact,
)
from qi_vc_core.reliance.status_list import (
    MIN_STATUS_BITS,
    decode_status_list,
    encode_status_list,
)
from qi_vc_core.reliance.types import (
    ConformityRequest,
    RelianceRequest,
    ResolverLimits,
    SelectedClaim,
    VersionedIdentifier,
    create_reliance_request,
)
from qi_vc_core.types import Ed25519KeyPair

PROFILE = load_reliance_profile(
    json.loads((RM_V1_DIRECTORY / "profiles/rm-verifier-1.json").read_text())
)
MANIFEST = load_binding_manifest(
    json.loads((RM_V1_DIRECTORY / "manifest.json").read_text())
)
PINNED = read_pinned_resources(RM_V1_DIRECTORY / "catalog.json")
SIGNED = read_pinned_resources(RM_V1_DIRECTORY / "test-vectors/signed/catalog.json")
URI = {
    "A": "https://nab.vc4qi.example/credentials/A",
    "H": "https://nab.vc4qi.example/credentials/H",
    "O": "https://producer.vc4qi.example/credentials/O",
    "S": "https://lab.vc4qi.example/credentials/S",
    "D": "https://producer.vc4qi.example/credentials/D178",
    "D197": "https://producer.vc4qi.example/credentials/D197",
    "D520": "https://producer.vc4qi.example/credentials/D520",
    "PRODUCER": "https://producer.vc4qi.example/controller",
    "LAB": "https://lab.vc4qi.example/controller",
    "PRODUCER_STATUS": "https://producer.vc4qi.example/status/1",
}
NOW = "2026-09-25T12:00:00Z"
BUDGET = CatalogBudget(max_resources=256, max_bytes=5_000_000)


def text(uri: str) -> str:
    return next(r for r in SIGNED if r.uri == uri).content.decode("utf-8")


def doc(uri: str) -> dict[str, Any]:
    return dict(json.loads(text(uri)))


def serialize(document: dict[str, Any]) -> str:
    return json.dumps(document, indent=2, ensure_ascii=False) + "\n"


def catalog_with(overrides: Mapping[str, str | None] | None = None) -> Any:
    overrides = overrides or {}
    resources = []
    for resource in PINNED + SIGNED:
        if resource.uri in overrides and overrides[resource.uri] is None:
            continue
        replacement = overrides.get(resource.uri)
        if isinstance(replacement, str):
            content = replacement.encode("utf-8")
            resource = StaticResource(
                uri=resource.uri,
                media_type=resource.media_type,
                content=content,
                digest_sri=sha384_sri(content),
                origin=resource.origin,
                version=resource.version,
            )
        resources.append(resource)
    return StaticResourceCatalog(resources)


def session(overrides: Mapping[str, str | None] | None = None) -> Any:
    return catalog_with(overrides).open_session(BUDGET)


def resign(document: dict[str, Any], key_name: str, method: str) -> str:
    unsigned = {k: v for k, v in document.items() if k != "proof"}
    seed = hashlib.sha256(
        f"vc4qi-rm-v1-insecure-fixture-key:{key_name}".encode()
    ).digest()
    key = Ed25519KeyPair(
        id=method,
        controller=method.split("#")[0],
        private_key=seed,
        public_key=bytes(SigningKey(seed).verify_key),
    )
    proof = create_proof(
        unsigned,
        key,
        created="2026-02-01T00:00:00Z",
        document_loader=_catalog_loader(session()),
    )
    return serialize({**unsigned, "proof": proof.to_json_object()})


def request(**overrides: Any) -> RelianceRequest:
    values: dict[str, Any] = {
        "request_id": "urn:uuid:rm-v1-slice-request",
        "target_id": URI["D"],
        "selected_claims": (
            SelectedClaim(
                "as-mass-fraction",
                "/credentialSubject/materialPropertiesList/0/results/0",
            ),
        ),
        "purpose": "use-as-calibrant",
        "binding": VersionedIdentifier(MANIFEST.id, MANIFEST.version),
        "profile": VersionedIdentifier(
            "https://vc4qi.example/profiles/rm-verifier", "1"
        ),
        "trust_config_id": "https://vc4qi.example/trust/fixture-nab-anchor",
        "evaluation_time": NOW,
        "activity_time": NOW,
        "supplied_evidence": (URI["A"], URI["O"], URI["S"], URI["H"]),
        "resolver_limits": ResolverLimits(64, 4, 5_000_000),
        "conformity": ConformityRequest("as-plus-u-le-200", "simple-acceptance"),
    }
    values.update(overrides)
    return create_reliance_request(RelianceRequest(**values))


def verify(
    uri: str,
    overrides: Mapping[str, str | None] | None = None,
    evaluation_time: str = NOW,
) -> Any:
    return verify_rm_artifact(uri, session(overrides), MANIFEST, evaluation_time)


@pytest.mark.parametrize("name", ["A", "H", "O", "S", "D", "D197", "D520"])
def test_typescript_signed_fixtures_verify_in_python(name: str) -> None:
    result = verify(URI[name])
    assert result.protection.state == "established", result.protection.reasons
    assert [c.check for c in result.checks] == [
        "resolve",
        "parse",
        "carrier",
        "type",
        "schema",
        "proof",
        "key",
        "signature",
    ]
    assert result.key_authorization.code == "AUTHORIZED"
    assert result.validity.state == "established"
    assert all(r.state == "established" for r in result.related_resources)
    assert result.digest_sri == sha384_sri(text(URI[name]).encode("utf-8"))


def test_extracts_protected_facts_with_source_pointers() -> None:
    facts = verify(URI["D"]).facts
    by_fact = {
        f.fact: [(x.pointer, x.value) for x in facts if x.fact == f.fact] for f in facts
    }
    assert by_fact["grantorOrActor"] == [("/issuer", URI["PRODUCER"])]
    assert by_fact["authorizingReference"] == [
        ("/termsOfUse/0/authorizationCredential/id", URI["O"])
    ]
    assert by_fact["requiredStudy"] == [("/evidence/0/id", URI["S"])]
    [(pointer, value)] = by_fact["selectedResult"]
    assert pointer == "/credentialSubject/materialPropertiesList/0/results/0"
    assert value["data"]["quantity"]["value"] == "178"


def test_authentic_artifacts_alone_do_not_establish_reliance() -> None:
    result = evaluate_rm_slice(request(), catalog_with(), MANIFEST, PROFILE).result
    assert all(r.state == "established" for r in result.artifact_verification)
    assert (result.authorization[0].state, result.authorization[0].execution) == (
        "not_established",
        "not_run",
    )
    assert result.support[0].execution == "not_run"
    assert result.conformity.execution == "not_run"
    assert result.decision == "not_established"


def test_changed_value_without_resigning_is_rejected() -> None:
    document = doc(URI["D"])
    quantity = document["credentialSubject"]["materialPropertiesList"][0]["results"][0]
    quantity["data"]["quantity"]["value"] = "150"
    overrides = {URI["D"]: serialize(document)}
    artifact = verify(URI["D"], overrides)
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "signature",
        "contradicted",
    )
    assert artifact.facts == ()
    assert artifact.validity.execution == "not_run"
    result = evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result
    assert result.decision == "reject"
    assert "not protected" in result.authorization[0].reasons[0]


def test_valid_signature_by_another_partys_key_is_rejected() -> None:
    forged = resign(doc(URI["D"]), "lab", f"{URI['LAB']}#key-1")
    artifact = verify(URI["D"], {URI["D"]: forged})
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "key",
        "contradicted",
    )
    assert artifact.key_authorization.code == "NOT_ISSUER_CONTROLLER"


def test_issuer_key_named_but_other_key_used_fails_signature() -> None:
    forged = resign(doc(URI["D"]), "lab", f"{URI['PRODUCER']}#key-1")
    artifact = verify(URI["D"], {URI["D"]: forged})
    assert artifact.key_authorization.code == "AUTHORIZED"
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "signature",
        "contradicted",
    )


def test_genuine_key_resigning_changed_content_verifies_in_both_directions() -> None:
    document = doc(URI["D"])
    document["validUntil"] = "2028-01-31T00:00:00Z"
    # Signed by Python (PyLD + PyNaCl); verified here and, by construction, the same
    # canonical form TypeScript verifies for the generated fixtures.
    artifact = verify(
        URI["D"], {URI["D"]: resign(document, "producer", f"{URI['PRODUCER']}#key-1")}
    )
    assert artifact.protection.state == "established"


def test_undeclared_claim_is_rejected_by_schema() -> None:
    document = doc(URI["D"])
    document["credentialSubject"]["unmappedClaim"] = "dropped by unsafe expansion"
    artifact = verify(URI["D"], {URI["D"]: serialize(document)})
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "schema",
        "contradicted",
    )
    assert artifact.facts == ()


def test_sentinel_detects_undefined_terms_and_types() -> None:
    loader = _catalog_loader(session())
    document = doc(URI["D"])
    assert _undefined_terms(document, loader) == []
    probe = copy.deepcopy(document)
    probe["credentialSubject"]["unmappedClaim"] = "x"
    probe["type"] = ["VerifiableCredential", "RmCertificate", "UnknownType"]
    assert _undefined_terms(probe, loader) == ["UnknownType", "unmappedClaim"]


def test_changed_referenced_bytes_contradict_integrity() -> None:
    overrides = {URI["O"]: text(URI["O"]) + " "}
    assert verify(URI["O"], overrides).protection.state == "established"
    result = evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result
    integrity = [
        r
        for r in result.artifact_verification
        if r.artifact_id == URI["O"] and r.reasons[0].startswith("integrity")
    ]
    assert [r.state for r in integrity] == ["contradicted"]
    assert result.decision == "reject"


def test_missing_study_target_or_controller_is_not_established() -> None:
    result = evaluate_rm_slice(
        request(supplied_evidence=(URI["A"], URI["O"], URI["H"])),
        catalog_with({URI["S"]: None}),
        MANIFEST,
        PROFILE,
    ).result
    assert [
        r.state for r in result.artifact_verification if r.artifact_id == URI["S"]
    ] == ["not_established"]
    assert result.decision == "not_established"
    missing = verify(URI["D"], {URI["D"]: None})
    assert [(c.check, c.state) for c in missing.checks] == [
        ("resolve", "not_established")
    ]
    no_controller = verify(URI["D"], {URI["PRODUCER"]: None})
    assert no_controller.key_authorization.code == "CONTROLLER_NOT_INSTALLED"
    assert no_controller.checks[-1].state == "not_established"


def test_unsupported_context_order_or_proof_set_is_not_established() -> None:
    reordered = doc(URI["D"])
    reordered["@context"] = list(reversed(reordered["@context"]))
    carrier = verify(URI["D"], {URI["D"]: serialize(reordered)})
    assert (carrier.checks[-1].check, carrier.checks[-1].state) == (
        "carrier",
        "not_established",
    )
    proof_set = doc(URI["D"])
    proof_set["proof"] = [proof_set["proof"]]
    assert (
        verify(URI["D"], {URI["D"]: serialize(proof_set)}).protection.state
        != "established"
    )


def test_expired_target_is_rejected_after_protection() -> None:
    result = evaluate_rm_slice(
        request(evaluation_time="2029-01-01T00:00:00Z"),
        catalog_with(),
        MANIFEST,
        PROFILE,
    ).result
    validity = [
        r
        for r in result.artifact_verification
        if r.artifact_id == URI["D"] and r.reasons[0].startswith("validity")
    ]
    assert [r.state for r in validity] == ["contradicted"]
    assert result.decision == "reject"


def test_selected_claim_outside_protected_results_is_not_established() -> None:
    result = evaluate_rm_slice(
        request(selected_claims=(SelectedClaim("issuer", "/issuer"),)),
        catalog_with(),
        MANIFEST,
        PROFILE,
    ).result
    assert (result.authorization[0].state, result.authorization[0].execution) == (
        "not_established",
        "executed",
    )


def test_signed_fixtures_carry_no_legacy_wire_fields() -> None:
    for resource in SIGNED:
        serialized = resource.content.decode("utf-8")
        for legacy in (
            "authorizedBy",
            "derivedFrom",
            "supportedBy",
            "authorizationBasis",
            "scopeRef",
            "qi-vc",
        ):
            assert legacy not in serialized, (resource.uri, legacy)


@pytest.mark.parametrize(
    "name", ["AuthorizedByPolicy", "RmAuthorizationPolicyV2", "rmAuthorizationPolicy"]
)
def test_arbitrary_authorization_policy_name_is_not_accepted(name: str) -> None:
    document = doc(URI["D"])
    document["termsOfUse"][0]["type"] = name
    artifact = verify(URI["D"], {URI["D"]: serialize(document)})
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "schema",
        "contradicted",
    )
    assert artifact.facts == ()


def test_gate_numbered_trace_and_resources() -> None:
    result = evaluate_rm_slice(request(), catalog_with(), MANIFEST, PROFILE).result
    assert result.request_id == "urn:uuid:rm-v1-slice-request"
    target = [t for t in result.trace if t.node_use.startswith(URI["D"] + " |")]
    assert all("| target |" in t.node_use for t in target)
    by = {t.predicate: t for t in target}
    assert (by["schema"].gate, by["schema"].state) == (0, "established")
    assert (by["related-resource-integrity"].gate, by["signature"].gate) == (1, 2)
    assert (by["validity-period"].gate, by["validity-period"].state) == (
        3,
        "established",
    )
    claim = by["claim-authorization:as-mass-fraction"]
    assert (claim.gate, claim.execution) == (5, "not_run")
    assert by["conformity:as-plus-u-le-200"].gate == 6
    assert sorted(r.uri for r in result.resources if r.kind == "artifact") == sorted(
        URI[k] for k in ("A", "D", "H", "O", "S")
    )


def _status_of(result: Any, uri: str) -> Any:
    return next(
        t
        for t in result.trace
        if t.node_use.startswith(uri + " |") and t.predicate == "credential-status"
    )


def _producer_list(
    set_bits: tuple[int, ...] = (),
    key_name: str = "producer",
    issuer: str = URI["PRODUCER"],
    encoded: str | None = None,
) -> str:
    bits = bytearray(MIN_STATUS_BITS // 8)
    for bit in set_bits:
        bits[bit >> 3] |= 1 << (7 - (bit & 7))
    status_list = doc(URI["PRODUCER_STATUS"])
    status_list["issuer"] = issuer
    status_list["credentialSubject"]["encodedList"] = encoded or encode_status_list(
        bytes(bits)
    )
    return resign(status_list, key_name, f"{issuer}#key-1")


def test_status_established_for_the_whole_chain() -> None:
    result = evaluate_rm_slice(request(), catalog_with(), MANIFEST, PROFILE).result
    for key in ("D", "A", "O", "S", "H"):
        entry = _status_of(result, URI[key])
        assert (entry.gate, entry.state) == (3, "established"), key
    assert sorted(r.uri for r in result.resources if r.kind == "status") == [
        "https://lab.vc4qi.example/status/1",
        "https://nab.vc4qi.example/status/1",
        URI["PRODUCER_STATUS"],
    ]


def test_p09_revoked_target_is_contradicted() -> None:
    overrides = {URI["PRODUCER_STATUS"]: _producer_list((1,))}
    result = evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result
    assert _status_of(result, URI["D"]).state == "contradicted"
    assert _status_of(result, URI["O"]).state == "established"
    assert result.decision == "reject"


def test_p08_list_from_party_without_status_authority() -> None:
    overrides = {URI["PRODUCER_STATUS"]: _producer_list((), "lab", URI["LAB"])}
    result = evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result
    entry = _status_of(result, URI["D"])
    assert entry.state == "not_established" and "may not state status" in entry.reason
    assert result.decision == "not_established"


def test_p09_stale_or_unavailable_list_is_not_established() -> None:
    stale = evaluate_rm_slice(
        request(evaluation_time="2026-11-15T00:00:00Z"),
        catalog_with(),
        MANIFEST,
        PROFILE,
    ).result
    assert "freshness" in _status_of(stale, URI["D"]).reason
    assert stale.decision == "not_established"
    missing = evaluate_rm_slice(
        request(), catalog_with({URI["PRODUCER_STATUS"]: None}), MANIFEST, PROFILE
    ).result
    assert _status_of(missing, URI["D"]).state == "not_established"


def test_tampered_status_list_is_not_used() -> None:
    status_list = doc(URI["PRODUCER_STATUS"])
    status_list["credentialSubject"]["encodedList"] = encode_status_list(
        b"\xff" * (MIN_STATUS_BITS // 8)
    )
    overrides = {URI["PRODUCER_STATUS"]: serialize(status_list)}
    result = evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result
    entry = _status_of(result, URI["D"])
    assert entry.state == "not_established" and "not protected" in entry.reason


def test_p16_signed_decompression_bomb_stops_at_bound() -> None:
    bomb = encode_status_list(bytes(3 * 1024 * 1024))
    overrides = {URI["PRODUCER_STATUS"]: _producer_list((), encoded=bomb)}
    result = evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result
    entry = _status_of(result, URI["D"])
    assert entry.state == "not_established" and "exceeds" in entry.reason


def test_python_encoding_matches_the_typescript_fixture() -> None:
    fixture = doc(URI["PRODUCER_STATUS"])["credentialSubject"]["encodedList"]
    assert encode_status_list(bytes(MIN_STATUS_BITS // 8)) == fixture
    assert decode_status_list(fixture) == bytes(MIN_STATUS_BITS // 8)


def _at(result: Any, uri: str, predicate: str) -> Any:
    return next(
        (
            t
            for t in result.trace
            if t.node_use.startswith(uri + " |") and t.predicate == predicate
        ),
        None,
    )


def test_v09_other_profile_is_refused_at_gate_0() -> None:
    weaker = VersionedIdentifier(
        "https://vc4qi.example/profiles/rm-verifier-lenient", "1"
    )
    evaluation = evaluate_rm_slice(
        request(profile=weaker), catalog_with(), MANIFEST, PROFILE
    )
    result = evaluation.result
    assert result.decision == "not_established"
    assert [(t.gate, t.predicate, t.state) for t in result.trace] == [
        (0, "accepted-plan", "not_established")
    ]
    assert evaluation.artifacts == () and result.resources == ()


def test_v09_credential_cannot_declare_another_schema() -> None:
    document = doc(URI["D"])
    document["credentialSchema"] = {
        "id": "https://vc4qi.example/schemas/rm/1/accreditation.json",
        "type": "JsonSchema",
    }
    forged = resign(document, "producer", f"{URI['PRODUCER']}#key-1")
    artifact = verify(URI["D"], {URI["D"]: forged})
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "type",
        "contradicted",
    )


def test_v10_multiple_schema_declarations_are_unsupported() -> None:
    document = doc(URI["D"])
    document["credentialSchema"] = [document["credentialSchema"]] * 2
    artifact = verify(URI["D"], {URI["D"]: serialize(document)})
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "type",
        "not_established",
    )


def test_v11_optional_annotation_inert_missing_required_term_blocks() -> None:
    annotated = doc(URI["D"])
    annotated["description"] = "Fixture note: not decision-relevant."
    resigned = resign(annotated, "producer", f"{URI['PRODUCER']}#key-1")
    ok = verify(URI["D"], {URI["D"]: resigned})
    assert ok.protection.state == "established"
    assert ok.facts == verify(URI["D"]).facts
    missing = doc(URI["D"])
    del missing["credentialSubject"]["materialPropertiesList"][0]["results"][0]["data"][
        "quantity"
    ]["quantityKind"]
    blocked = verify(URI["D"], {URI["D"]: serialize(missing)})
    assert (blocked.checks[-1].check, blocked.checks[-1].state) == (
        "schema",
        "contradicted",
    )


def test_p11_identity_mismatch_is_contradicted_at_gate_1() -> None:
    catalog = catalog_with({URI["D"]: text(URI["D197"])})
    result = evaluate_rm_slice(request(), catalog, MANIFEST, PROFILE).result
    assert _at(result, URI["D"], "signature").state == "established"
    identity = _at(result, URI["D"], "resource-identity")
    assert (identity.gate, identity.state) == (1, "contradicted")
    assert result.decision == "reject"


def test_p12_p16_budget_exhaustion_is_not_established() -> None:
    result = evaluate_rm_slice(
        request(resolver_limits=ResolverLimits(2, 4, 5_000_000)),
        catalog_with(),
        MANIFEST,
        PROFILE,
    ).result
    assert "RESOURCE_BUDGET_EXCEEDED" in " ".join(t.reason for t in result.trace)
    assert all(t.state != "contradicted" for t in result.trace)
    assert result.decision == "not_established"


def test_status_lists_beyond_max_depth_are_not_established() -> None:
    result = evaluate_rm_slice(
        request(resolver_limits=ResolverLimits(64, 1, 5_000_000)),
        catalog_with(),
        MANIFEST,
        PROFILE,
    ).result
    assert _at(result, URI["D"], "credential-status").state == "established"
    assert "maxDepth" in _at(result, URI["O"], "credential-status").reason
    assert result.decision == "not_established"


def test_p15_evaluations_with_different_times_are_independent() -> None:
    catalog = catalog_with()
    decisions = [
        evaluate_rm_slice(
            request(evaluation_time=t), catalog, MANIFEST, PROFILE
        ).result.decision
        for t in (NOW, "2029-01-01T00:00:00Z", NOW)
    ]
    assert decisions == ["not_established", "reject", "not_established"]


def test_p07_placeholder_proof_never_verifies() -> None:
    document = doc(URI["D"])
    document["proof"]["proofValue"] = "z" + "1" * 86
    artifact = verify(URI["D"], {URI["D"]: serialize(document)})
    assert (artifact.checks[-1].check, artifact.checks[-1].state) == (
        "signature",
        "contradicted",
    )
