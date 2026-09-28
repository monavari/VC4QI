# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/legacy-profile.test.ts (I5: V02, V03)."""

from __future__ import annotations

import json
from typing import Any

import pytest
from qi_vc_core.assessment.evaluate import AssessmentRequest, AssessmentResult
from qi_vc_core.legacy import LEGACY_PROFILE, evaluate_legacy_profile
from qi_vc_core.reliance.rm_v1_artifacts import evaluate_rm_slice
from qi_vc_core.verifier.graph_verifier import VerifyGraphOptions

from .fixture_helpers import (
    TEST_DOCUMENT_LOADER,
    fixture_path,
    load_fixture,
    resolve_test_registry_key,
)
from .test_rm_v1_slice import MANIFEST, PROFILE, catalog_with, request


def legacy_options(name: str, **extra: Any) -> tuple[Any, Any, VerifyGraphOptions]:
    target, policy, registry, documents = load_fixture(name)

    def fetch(uri: str) -> Any:
        return documents[uri]

    def resolve_registry(_issuer: str, _context: Any = None) -> Any:
        return registry

    options = VerifyGraphOptions(
        fetch_document=fetch,
        resolve_trust_registry=resolve_registry,
        resolve_key=resolve_test_registry_key,
        document_loader=TEST_DOCUMENT_LOADER,
        **extra,
    )
    return target, policy, options


def pass_assessments(request_: AssessmentRequest) -> AssessmentResult:
    """Passes each GS assessment with its allowed method (not under test)."""
    inspection = "InspectionReport" in request_.credential_types
    return AssessmentResult(
        outcome="pass",
        method="human" if inspection else "agent",
        assessor_id="urn:example:legacy-profile-test",
        detail="Test evaluator: pass.",
    )


def test_v02_legacy_credential_is_unsupported_without_fallback() -> None:
    raw = fixture_path("calibration-direct-accreditation", "target-credential.json")
    text = raw.read_text()
    target_id = json.loads(text)["id"]
    result = evaluate_rm_slice(
        request(target_id=target_id, supplied_evidence=()),
        catalog_with({target_id: text}),
        MANIFEST,
        PROFILE,
    ).result
    carrier = next(t for t in result.trace if t.predicate == "carrier")
    assert (carrier.gate, carrier.state) == (0, "not_established")
    assert result.authorization[0].state == "not_established"
    assert result.decision == "not_established"
    assert "legacy-qi-vc" not in repr(result)


def test_v03_legacy_profile_verifies_originals_and_is_labelled() -> None:
    target, policy, options = legacy_options(
        "gs-hair-dryer-hitl", assessment_evaluator=pass_assessments
    )
    evaluation = evaluate_legacy_profile(target, policy, options)
    assert evaluation.profile == LEGACY_PROFILE
    assert evaluation.profile["label"] == "legacy"
    proofs = [
        r for r in evaluation.legacy_trace["results"] if r["code"] == "PROOF_VALID"
    ]
    assert len(proofs) == 7
    assert evaluation.decision == "accept"
    assert "not by standards-first reliance" in " ".join(evaluation.limitations)


@pytest.mark.parametrize(
    "name", ["gs-hair-dryer-hitl", "gs-hair-dryer-external-test-lab-hitl"]
)
def test_both_gs_application_variants_are_retained(name: str) -> None:
    target, policy, options = legacy_options(
        name, assessment_evaluator=pass_assessments
    )
    evaluation = evaluate_legacy_profile(target, policy, options)
    assert evaluation.profile["label"] == "legacy"
    codes = [(r["code"], r.get("target")) for r in evaluation.legacy_trace["results"]]
    assert ("PROOF_VALID", target["id"]) in codes
    assert not any(code == "PROOF_INVALID" for code, _ in codes)
    assert evaluation.decision == "accept"


def test_v03_placeholder_signature_is_never_valid() -> None:
    target, policy, options = legacy_options("calibration-direct-accreditation")
    evaluation = evaluate_legacy_profile(target, policy, options)
    assert not any(
        r["code"] == "PROOF_VALID" and r.get("target") == target["id"]
        for r in evaluation.legacy_trace["results"]
    )
    assert evaluation.decision != "accept"


@pytest.mark.parametrize("flag", ["skip_proof", "skip_status"])
def test_v03_skipping_is_refused(flag: str) -> None:
    target, policy, options = legacy_options("gs-hair-dryer-hitl", **{flag: True})
    with pytest.raises(ValueError, match="original secured representation"):
        evaluate_legacy_profile(target, policy, options)
