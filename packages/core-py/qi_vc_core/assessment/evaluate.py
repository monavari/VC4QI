# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from typing import TYPE_CHECKING, Any, Literal

from ..policy.types import AssessmentMethod, PolicyProfile
from ..verifier.trace import trace_entry

JsonObject = dict[str, Any]
AssessmentOutcome = Literal["pass", "fail", "indeterminate"]

if TYPE_CHECKING:
    from ..evidence.types import EvidenceGraph


@dataclass(frozen=True)
class AssessmentRequest:
    credential: JsonObject
    credential_id: str
    credential_types: list[str]
    policy_id: str
    target_credential: JsonObject | None = None
    evidence_graph: EvidenceGraph | None = None


@dataclass(frozen=True)
class AssessmentResult:
    outcome: AssessmentOutcome
    method: AssessmentMethod
    assessor_id: str
    detail: str
    assessment_id: str | None = None


AssessmentEvaluator = Callable[[AssessmentRequest], AssessmentResult]


def _credential_types(credential: JsonObject) -> list[str]:
    value = credential.get("type")
    if isinstance(value, list):
        return [str(item) for item in value]
    if isinstance(value, str):
        return [value]
    return []


def _trace(
    credential_id: str,
    status: Literal["PASS", "FAIL", "SKIP", "WARN"],
    code: str,
    detail: str,
    result: AssessmentResult | None = None,
) -> JsonObject:
    return trace_entry(
        id=f"assessment-{credential_id}",
        level="assessment",
        target=credential_id,
        status=status,
        code=code,
        detail=detail,
        assessment_method=result.method if result else None,
        assessor_id=result.assessor_id if result else None,
        assessment_id=result.assessment_id if result else None,
    )


def evaluate_assessment(
    credential: JsonObject,
    policy: PolicyProfile,
    evaluator: AssessmentEvaluator | None,
    *,
    target_credential: JsonObject | None = None,
    evidence_graph: EvidenceGraph | None = None,
) -> list[JsonObject]:
    """Run a policy-selected human/agent assessment for one graph node.

    This supplements the verifier's deterministic gates. It cannot override a
    failing proof, schema, status, authority, digest, or graph check.
    """
    assessment = policy.assessment
    types = _credential_types(credential)
    if (
        assessment is None
        or assessment.mode == "ignored"
        or not any(item in types for item in assessment.target_credential_types)
    ):
        return []

    credential_id = str(credential.get("id", ""))
    if evaluator is None:
        required = assessment.mode == "required"
        return [_trace(
            credential_id,
            "FAIL" if required else "SKIP",
            "ASSESSMENT_EVALUATOR_MISSING" if required else "ASSESSMENT_NOT_PERFORMED",
            (
                "Policy requires semantic assessment, but no human/agent "
                "assessment evaluator was configured."
            )
            if required
            else (
                "No semantic assessment evaluator was configured for this "
                "optional assessment."
            ),
        )]

    try:
        result = evaluator(AssessmentRequest(
            credential=credential,
            credential_id=credential_id,
            credential_types=types,
            policy_id=policy.id,
            target_credential=target_credential,
            evidence_graph=evidence_graph,
        ))

        if result.method not in assessment.allowed_methods:
            return [_trace(
                credential_id,
                "FAIL",
                "ASSESSMENT_METHOD_NOT_ALLOWED",
                (
                    f"Assessment method '{result.method}' is not allowed by "
                    f"policy {policy.id}."
                ),
                result,
            )]

        if not result.assessor_id or not result.detail:
            return [_trace(
                credential_id,
                "FAIL",
                "ASSESSMENT_RESULT_INVALID",
                (
                    "Assessment result must identify the assessor and explain "
                    "the decision."
                ),
                result,
            )]

        if result.outcome == "pass":
            return [_trace(
                credential_id,
                "PASS",
                "ASSESSMENT_PASSED",
                result.detail,
                result,
            )]
        if result.outcome == "fail":
            return [_trace(
                credential_id,
                "FAIL",
                "ASSESSMENT_FAILED",
                result.detail,
                result,
            )]
        if result.outcome == "indeterminate":
            required = assessment.mode == "required"
            return [_trace(
                credential_id,
                "FAIL" if required else "WARN",
                "ASSESSMENT_INDETERMINATE",
                result.detail,
                result,
            )]

        return [_trace(
            credential_id,
            "FAIL",
            "ASSESSMENT_RESULT_INVALID",
            f"Assessment evaluator returned unsupported outcome '{result.outcome}'.",
            result,
        )]
    except Exception as error:  # noqa: BLE001 - converted to a reason code
        return [_trace(
            credential_id,
            "FAIL",
            "ASSESSMENT_ERROR",
            f"Semantic assessment failed: {error}",
        )]
