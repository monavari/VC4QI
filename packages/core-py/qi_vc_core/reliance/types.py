# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

import re
from dataclasses import dataclass
from datetime import datetime
from typing import Literal

SemanticState = Literal["established", "contradicted", "not_established"]
ExecutionState = Literal["executed", "not_run"]
RelianceDecision = Literal["accept", "reject", "not_established"]
Gate = Literal[0, 1, 2, 3, 4, 5, 6]
# Canonical gate numbers (handover section 5.3), shared with the TypeScript core.
GATE_NAMES: tuple[str, ...] = (
    "plan-and-structure",
    "resource-identity",
    "protection",
    "temporal-applicability",
    "meaning-and-mapping",
    "authority-and-scope",
    "support-and-decision",
)


@dataclass(frozen=True)
class VersionedIdentifier:
    id: str
    version: str


@dataclass(frozen=True)
class SelectedClaim:
    id: str
    source_pointer: str


@dataclass(frozen=True)
class ResolverLimits:
    max_resources: int
    max_depth: int
    max_bytes: int


@dataclass(frozen=True)
class ConformityRequest:
    requirement_id: str
    decision_rule_id: str


@dataclass(frozen=True)
class TraceEntry:
    """One evaluated predicate for one use of an artifact, with input provenance."""

    gate: Gate
    node_use: str
    predicate: str
    state: SemanticState
    execution: ExecutionState
    reason: str
    sources: tuple[str, ...]


@dataclass(frozen=True)
class ResourceObservation:
    uri: str
    digest_sri: str
    kind: Literal["static", "artifact", "status"]
    source: Literal["catalog", "supplied"]
    observed_at: str


@dataclass(frozen=True)
class RelianceRequest:
    request_id: str
    target_id: str
    selected_claims: tuple[SelectedClaim, ...]
    purpose: str
    binding: VersionedIdentifier
    profile: VersionedIdentifier
    trust_config_id: str
    evaluation_time: str
    activity_time: str
    supplied_evidence: tuple[str, ...]
    resolver_limits: ResolverLimits
    conformity: ConformityRequest | None = None


@dataclass(frozen=True)
class PredicateResult:
    state: SemanticState
    execution: ExecutionState
    reasons: tuple[str, ...]
    source_pointers: tuple[str, ...]


@dataclass(frozen=True)
class ArtifactVerificationResult(PredicateResult):
    artifact_id: str


@dataclass(frozen=True)
class ClaimAuthorizationResult(PredicateResult):
    claim_id: str
    route_witness_ids: tuple[str, ...]


@dataclass(frozen=True)
class SupportResult(PredicateResult):
    obligation_id: str
    witness_ids: tuple[str, ...]


@dataclass(frozen=True)
class ConformityNotRequested:
    requested: Literal[False] = False
    execution: Literal["not_run"] = "not_run"


@dataclass(frozen=True)
class ConformityRequestedResult(PredicateResult):
    requirement_id: str
    decision_rule_id: str
    requested: Literal[True] = True


ConformityResult = ConformityNotRequested | ConformityRequestedResult


@dataclass(frozen=True)
class RelianceResult:
    request_id: str
    target_id: str
    binding: VersionedIdentifier
    profile: VersionedIdentifier
    artifact_verification: tuple[ArtifactVerificationResult, ...]
    authorization: tuple[ClaimAuthorizationResult, ...]
    support: tuple[SupportResult, ...]
    conformity: ConformityResult
    decision: RelianceDecision
    trace: tuple[TraceEntry, ...] = ()
    resources: tuple[ResourceObservation, ...] = ()
    limitations: tuple[str, ...] = ()


def _nonempty(value: str, field: str) -> None:
    if not value.strip():
        raise ValueError(f"{field} must be a non-empty string.")


def _unique(values: tuple[str, ...], field: str) -> None:
    if len(set(values)) != len(values):
        raise ValueError(f"{field} must not contain duplicates.")


_OFFSET_TIME = re.compile(
    r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?" r"(?:Z|[+-](\d{2}):(\d{2}))$"
)
_MAX_SAFE_INTEGER = 2**53 - 1
_SEMANTIC_STATES = ("established", "contradicted", "not_established")
_EXECUTION_STATES = ("executed", "not_run")
_RELIANCE_DECISIONS = ("accept", "reject", "not_established")


def _iso_time(value: str, field: str) -> None:
    match = _OFFSET_TIME.fullmatch(value)
    if match is None:
        raise ValueError(
            f"{field} must be an ISO 8601 date-time with an explicit offset."
        )
    if match[1] is not None and (int(match[1]) > 23 or int(match[2]) > 59):
        raise ValueError(f"{field} must be a valid ISO 8601 date-time.")
    normalized = value[:-1] + "+00:00" if value.endswith("Z") else value
    try:
        parsed = datetime.fromisoformat(normalized)
    except ValueError as error:
        raise ValueError(f"{field} must be a valid ISO 8601 date-time.") from error
    if parsed.utcoffset() is None:
        raise ValueError(f"{field} must have an explicit offset.")


def _positive_integer(value: int, field: str) -> None:
    if (
        isinstance(value, bool)
        or not isinstance(value, int)
        or value <= 0
        or value > _MAX_SAFE_INTEGER
    ):
        raise ValueError(f"{field} must be a positive safe integer.")


def _versioned(value: VersionedIdentifier, field: str) -> None:
    _nonempty(value.id, f"{field}.id")
    _nonempty(value.version, f"{field}.version")


def create_reliance_request(value: RelianceRequest) -> RelianceRequest:
    _nonempty(value.request_id, "request_id")
    _nonempty(value.target_id, "target_id")
    _nonempty(value.purpose, "purpose")
    _nonempty(value.trust_config_id, "trust_config_id")
    _versioned(value.binding, "binding")
    _versioned(value.profile, "profile")
    _iso_time(value.evaluation_time, "evaluation_time")
    _iso_time(value.activity_time, "activity_time")
    if not value.selected_claims:
        raise ValueError("selected_claims must contain at least one claim.")
    for index, claim in enumerate(value.selected_claims):
        _nonempty(claim.id, f"selected_claims[{index}].id")
        _nonempty(claim.source_pointer, f"selected_claims[{index}].source_pointer")
    _unique(tuple(claim.id for claim in value.selected_claims), "selected claim IDs")
    _unique(
        tuple(claim.source_pointer for claim in value.selected_claims),
        "selected claim source pointers",
    )
    for index, evidence_id in enumerate(value.supplied_evidence):
        _nonempty(evidence_id, f"supplied_evidence[{index}]")
    _unique(value.supplied_evidence, "supplied_evidence")
    _positive_integer(value.resolver_limits.max_resources, "max_resources")
    _positive_integer(value.resolver_limits.max_depth, "max_depth")
    _positive_integer(value.resolver_limits.max_bytes, "max_bytes")
    if value.conformity:
        _nonempty(value.conformity.requirement_id, "conformity.requirement_id")
        _nonempty(value.conformity.decision_rule_id, "conformity.decision_rule_id")
    return RelianceRequest(
        request_id=value.request_id,
        target_id=value.target_id,
        selected_claims=tuple(
            SelectedClaim(id=claim.id, source_pointer=claim.source_pointer)
            for claim in value.selected_claims
        ),
        purpose=value.purpose,
        binding=VersionedIdentifier(id=value.binding.id, version=value.binding.version),
        profile=VersionedIdentifier(id=value.profile.id, version=value.profile.version),
        trust_config_id=value.trust_config_id,
        evaluation_time=value.evaluation_time,
        activity_time=value.activity_time,
        supplied_evidence=tuple(value.supplied_evidence),
        resolver_limits=ResolverLimits(
            max_resources=value.resolver_limits.max_resources,
            max_depth=value.resolver_limits.max_depth,
            max_bytes=value.resolver_limits.max_bytes,
        ),
        conformity=(
            ConformityRequest(
                requirement_id=value.conformity.requirement_id,
                decision_rule_id=value.conformity.decision_rule_id,
            )
            if value.conformity
            else None
        ),
    )


def _predicate(value: PredicateResult) -> None:
    if value.state not in _SEMANTIC_STATES:
        raise ValueError(f"Unsupported semantic state: {value.state}.")
    if value.execution not in _EXECUTION_STATES:
        raise ValueError(f"Unsupported execution state: {value.execution}.")
    if value.execution == "not_run" and value.state != "not_established":
        raise ValueError("A predicate that was not run must be not_established.")


_SRI384 = re.compile(r"^sha384-[A-Za-z0-9+/]{64}$")


def _trace_entry(entry: TraceEntry, index: int) -> TraceEntry:
    if (
        isinstance(entry.gate, bool)
        or not isinstance(entry.gate, int)
        or not 0 <= entry.gate <= 6
    ):
        raise ValueError(f"trace[{index}].gate must be a canonical gate number 0-6.")
    _nonempty(entry.node_use, f"trace[{index}].node_use")
    _nonempty(entry.predicate, f"trace[{index}].predicate")
    _nonempty(entry.reason, f"trace[{index}].reason")
    _predicate(
        PredicateResult(
            state=entry.state,
            execution=entry.execution,
            reasons=(entry.reason,),
            source_pointers=tuple(entry.sources),
        )
    )
    return TraceEntry(
        gate=entry.gate,
        node_use=entry.node_use,
        predicate=entry.predicate,
        state=entry.state,
        execution=entry.execution,
        reason=entry.reason,
        sources=tuple(entry.sources),
    )


def _resource(resource: ResourceObservation, index: int) -> ResourceObservation:
    _nonempty(resource.uri, f"resources[{index}].uri")
    if not _SRI384.fullmatch(resource.digest_sri):
        raise ValueError(f"resources[{index}].digest_sri must be a SHA-384 SRI value.")
    if resource.kind not in ("static", "artifact", "status") or resource.source not in (
        "catalog",
        "supplied",
    ):
        raise ValueError(f"resources[{index}] has an unsupported kind or source.")
    _iso_time(resource.observed_at, f"resources[{index}].observed_at")
    return ResourceObservation(
        uri=resource.uri,
        digest_sri=resource.digest_sri,
        kind=resource.kind,
        source=resource.source,
        observed_at=resource.observed_at,
    )


def create_reliance_result(value: RelianceResult) -> RelianceResult:
    _nonempty(value.request_id, "request_id")
    _nonempty(value.target_id, "target_id")
    _versioned(value.binding, "binding")
    _versioned(value.profile, "profile")
    for artifact_result in value.artifact_verification:
        _nonempty(artifact_result.artifact_id, "artifact_id")
        _predicate(artifact_result)
    for authorization_result in value.authorization:
        _nonempty(authorization_result.claim_id, "claim_id")
        _predicate(authorization_result)
    for support_result in value.support:
        _nonempty(support_result.obligation_id, "obligation_id")
        _predicate(support_result)
    if isinstance(value.conformity, ConformityRequestedResult):
        _nonempty(value.conformity.requirement_id, "conformity.requirement_id")
        _nonempty(value.conformity.decision_rule_id, "conformity.decision_rule_id")
        _predicate(value.conformity)
        conformity: ConformityResult = ConformityRequestedResult(
            state=value.conformity.state,
            execution=value.conformity.execution,
            reasons=tuple(value.conformity.reasons),
            source_pointers=tuple(value.conformity.source_pointers),
            requirement_id=value.conformity.requirement_id,
            decision_rule_id=value.conformity.decision_rule_id,
        )
    elif isinstance(value.conformity, ConformityNotRequested):
        if (
            value.conformity.requested is not False
            or value.conformity.execution != "not_run"
        ):
            raise ValueError(
                "Unrequested conformity must have execution state not_run."
            )
        conformity = ConformityNotRequested()
    else:
        raise ValueError("Unsupported conformity result.")
    if value.decision not in _RELIANCE_DECISIONS:
        raise ValueError(f"Unsupported reliance decision: {value.decision}.")
    return RelianceResult(
        request_id=value.request_id,
        target_id=value.target_id,
        binding=VersionedIdentifier(id=value.binding.id, version=value.binding.version),
        profile=VersionedIdentifier(id=value.profile.id, version=value.profile.version),
        artifact_verification=tuple(
            ArtifactVerificationResult(
                state=result.state,
                execution=result.execution,
                reasons=tuple(result.reasons),
                source_pointers=tuple(result.source_pointers),
                artifact_id=result.artifact_id,
            )
            for result in value.artifact_verification
        ),
        authorization=tuple(
            ClaimAuthorizationResult(
                state=result.state,
                execution=result.execution,
                reasons=tuple(result.reasons),
                source_pointers=tuple(result.source_pointers),
                claim_id=result.claim_id,
                route_witness_ids=tuple(result.route_witness_ids),
            )
            for result in value.authorization
        ),
        support=tuple(
            SupportResult(
                state=result.state,
                execution=result.execution,
                reasons=tuple(result.reasons),
                source_pointers=tuple(result.source_pointers),
                obligation_id=result.obligation_id,
                witness_ids=tuple(result.witness_ids),
            )
            for result in value.support
        ),
        conformity=conformity,
        decision=value.decision,
        trace=tuple(_trace_entry(entry, i) for i, entry in enumerate(value.trace)),
        resources=tuple(_resource(item, i) for i, item in enumerate(value.resources)),
        limitations=tuple(value.limitations),
    )


def _states(values: tuple[SemanticState, ...], operator: str) -> None:
    if not values:
        raise ValueError(f"{operator} requires at least one semantic state.")
    for value in values:
        if value not in _SEMANTIC_STATES:
            raise ValueError(
                f"{operator} received unsupported semantic state: {value}."
            )


def semantic_and(values: tuple[SemanticState, ...]) -> SemanticState:
    _states(values, "semantic_and")
    if "contradicted" in values:
        return "contradicted"
    if all(value == "established" for value in values):
        return "established"
    return "not_established"


def semantic_or(values: tuple[SemanticState, ...]) -> SemanticState:
    _states(values, "semantic_or")
    if "established" in values:
        return "established"
    if all(value == "contradicted" for value in values):
        return "contradicted"
    return "not_established"


def decision_from_required(values: tuple[SemanticState, ...]) -> RelianceDecision:
    state = semantic_and(values)
    if state == "established":
        return "accept"
    if state == "contradicted":
        return "reject"
    return "not_established"
