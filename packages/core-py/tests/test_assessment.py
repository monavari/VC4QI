# SPDX-License-Identifier: Apache-2.0
from typing import Literal

from qi_vc_core.assessment import AssessmentResult, evaluate_assessment
from qi_vc_core.policy import AssessmentPolicy, PolicyChecks, PolicyProfile

CREDENTIAL = {
    "id": "urn:uuid:inspection-001",
    "type": ["VerifiableCredential", "InspectionReport"],
}


def policy(
    mode: Literal["required", "optional", "ignored"] = "required",
) -> PolicyProfile:
    return PolicyProfile(
        id="assessment-test",
        targetCredentialTypes=["GSCertificate"],
        requiredEvidence=[],
        checks=PolicyChecks(),
        assessment=AssessmentPolicy(
            mode=mode,
            targetCredentialTypes=["InspectionReport"],
            allowedMethods=["human", "hybrid"],
        ),
    )


def test_records_human_assessment_provenance() -> None:
    result = evaluate_assessment(
        CREDENTIAL,
        policy(),
        lambda _request: AssessmentResult(
            outcome="pass",
            method="human",
            assessor_id="urn:example:person:inspector-01",
            assessment_id="urn:uuid:assessment-001",
            detail="Factory controls satisfy the selected GS assessment checklist.",
        ),
    )[0]
    assert result["status"] == "PASS"
    assert result["code"] == "ASSESSMENT_PASSED"
    assert result["assessmentMethod"] == "human"
    assert result["assessorId"] == "urn:example:person:inspector-01"
    assert result["assessmentId"] == "urn:uuid:assessment-001"


def test_required_assessment_fails_without_evaluator() -> None:
    result = evaluate_assessment(CREDENTIAL, policy(), None)[0]
    assert result["status"] == "FAIL"
    assert result["code"] == "ASSESSMENT_EVALUATOR_MISSING"


def test_disallowed_assessment_method_fails() -> None:
    result = evaluate_assessment(
        CREDENTIAL,
        policy(),
        lambda _request: AssessmentResult(
            outcome="pass",
            method="agent",
            assessor_id="urn:example:agent:reviewer-01",
            detail="Automated review passed.",
        ),
    )[0]
    assert result["status"] == "FAIL"
    assert result["code"] == "ASSESSMENT_METHOD_NOT_ALLOWED"


def test_optional_indeterminate_assessment_warns() -> None:
    result = evaluate_assessment(
        CREDENTIAL,
        policy("optional"),
        lambda _request: AssessmentResult(
            outcome="indeterminate",
            method="human",
            assessor_id="urn:example:person:inspector-01",
            detail="The submitted record is insufficient for a decision.",
        ),
    )[0]
    assert result["status"] == "WARN"
    assert result["code"] == "ASSESSMENT_INDETERMINATE"
