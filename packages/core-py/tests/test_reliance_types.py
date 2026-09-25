# SPDX-License-Identifier: Apache-2.0
from dataclasses import replace
from typing import Any, cast

import pytest
from qi_vc_core.reliance import (
    ArtifactVerificationResult,
    ClaimAuthorizationResult,
    ConformityNotRequested,
    RelianceRequest,
    RelianceResult,
    ResolverLimits,
    SelectedClaim,
    SemanticState,
    VersionedIdentifier,
    create_reliance_request,
    create_reliance_result,
    decision_from_required,
    semantic_and,
    semantic_or,
)


def request() -> RelianceRequest:
    return RelianceRequest(
        target_id="urn:uuid:rm-certificate-001",
        selected_claims=(SelectedClaim(
            id="arsenic-mass-fraction",
            source_pointer="/credentialSubject/materialPropertiesList/0/results/0",
        ),),
        purpose="current-reliance",
        binding=VersionedIdentifier(
            id="https://vc4qi.example/bindings/rm/1", version="1"
        ),
        profile=VersionedIdentifier(
            id="https://vc4qi.example/profiles/rm/current-reliance/1", version="1"
        ),
        trust_config_id="https://vc4qi.example/trust/rm-fixture/1",
        evaluation_time="2026-09-25T10:15:30Z",
        activity_time="2026-02-01T00:00:00+01:00",
        supplied_evidence=("urn:uuid:accreditation-001",),
        resolver_limits=ResolverLimits(
            max_resources=32, max_depth=8, max_bytes=1_000_000
        ),
    )


def test_request_validation() -> None:
    assert create_reliance_request(request()) == request()
    with pytest.raises(ValueError, match="at least one"):
        create_reliance_request(replace(request(), selected_claims=()))
    with pytest.raises(ValueError, match="duplicates"):
        claim = request().selected_claims[0]
        create_reliance_request(replace(request(), selected_claims=(claim, claim)))
    with pytest.raises(ValueError, match="ISO 8601"):
        create_reliance_request(replace(request(), evaluation_time="2026-02-30"))
    with pytest.raises(ValueError, match="valid ISO 8601"):
        create_reliance_request(replace(
            request(), evaluation_time="2026-09-25T10:15:30+01:60"
        ))
    with pytest.raises(ValueError, match="valid ISO 8601"):
        create_reliance_request(replace(
            request(), evaluation_time="0000-01-01T00:00:00Z"
        ))
    with pytest.raises(ValueError, match="positive safe integer"):
        create_reliance_request(replace(
            request(), resolver_limits=ResolverLimits(0, 8, 1000)
        ))
    with pytest.raises(ValueError, match="positive safe integer"):
        create_reliance_request(replace(
            request(), resolver_limits=ResolverLimits(2**53, 8, 1000)
        ))


def test_truth_tables_and_decision() -> None:
    states: tuple[SemanticState, ...] = (
        "established",
        "contradicted",
        "not_established",
    )
    expected_and = (
        ("established", "contradicted", "not_established"),
        ("contradicted", "contradicted", "contradicted"),
        ("not_established", "contradicted", "not_established"),
    )
    expected_or = (
        ("established", "established", "established"),
        ("established", "contradicted", "not_established"),
        ("established", "not_established", "not_established"),
    )
    for left_index, left in enumerate(states):
        for right_index, right in enumerate(states):
            assert semantic_and((left, right)) == expected_and[left_index][right_index]
            assert semantic_or((left, right)) == expected_or[left_index][right_index]
    assert decision_from_required(("established", "established")) == "accept"
    assert decision_from_required(("established", "contradicted")) == "reject"
    assert (
        decision_from_required(("established", "not_established"))
        == "not_established"
    )
    with pytest.raises(ValueError, match="at least one"):
        decision_from_required(())
    with pytest.raises(ValueError, match="unsupported semantic state"):
        semantic_or(cast(Any, ("established", "bogus")))


def test_result_separates_surfaces_and_not_run_never_establishes() -> None:
    result = RelianceResult(
        target_id=request().target_id,
        binding=request().binding,
        profile=request().profile,
        artifact_verification=(ArtifactVerificationResult(
            artifact_id=request().target_id, state="established", execution="executed",
            reasons=(), source_pointers=("/proof",),
        ),),
        authorization=(ClaimAuthorizationResult(
            claim_id="arsenic-mass-fraction", state="not_established",
            execution="not_run", reasons=("authority pending",),
            source_pointers=(), route_witness_ids=(),
        ),),
        support=(), conformity=ConformityNotRequested(),
        decision="not_established", limitations=("I1 artifact protection only",),
    )
    assert create_reliance_result(result) == result
    invalid = replace(
        result,
        artifact_verification=(replace(
            result.artifact_verification[0], execution="not_run"
        ),),
    )
    with pytest.raises(ValueError, match="not run must be not_established"):
        create_reliance_result(invalid)
    with pytest.raises(ValueError, match="execution state"):
        create_reliance_result(replace(
            result,
            artifact_verification=(replace(
                result.artifact_verification[0], execution=cast(Any, "invalid")
            ),),
        ))
    with pytest.raises(ValueError, match="reliance decision"):
        create_reliance_result(replace(result, decision=cast(Any, "invalid")))


def test_factories_copy_runtime_mutable_collections() -> None:
    claims = list(request().selected_claims)
    evidence = list(request().supplied_evidence)
    created_request = create_reliance_request(replace(
        request(),
        selected_claims=cast(Any, claims),
        supplied_evidence=cast(Any, evidence),
    ))
    claims.clear()
    evidence.clear()
    assert len(created_request.selected_claims) == 1
    assert created_request.supplied_evidence == ("urn:uuid:accreditation-001",)

    reasons = ["protected"]
    artifact = ArtifactVerificationResult(
        artifact_id=request().target_id,
        state="established",
        execution="executed",
        reasons=cast(Any, reasons),
        source_pointers=("/proof",),
    )
    result = RelianceResult(
        target_id=request().target_id,
        binding=request().binding,
        profile=request().profile,
        artifact_verification=cast(Any, [artifact]),
        authorization=(),
        support=(),
        conformity=ConformityNotRequested(),
        decision="not_established",
    )
    created_result = create_reliance_result(result)
    reasons.clear()
    assert created_result.artifact_verification[0].reasons == ("protected",)
