# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from .types import PolicyProfile, RequiredEvidence
from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..verifier.trace import trace_entry


def edge_matches_requirement(edge: EvidenceEdge, graph: EvidenceGraph, requirement: RequiredEvidence) -> bool:
    if requirement.relation and edge.relation != requirement.relation:
        return False
    if requirement.role and edge.role != requirement.role:
        return False
    if requirement.authorizationBasis and requirement.authorizationBasis.kind:
        if not edge.authorizationBasis or edge.authorizationBasis.kind != requirement.authorizationBasis.kind:
            return False
    if requirement.targetCredentialTypes:
        node = graph.nodes.get(edge.to)
        if not node or not any(t in node.types for t in requirement.targetCredentialTypes):
            return False
    return True


def requirement_satisfied(graph: EvidenceGraph, requirement: RequiredEvidence) -> bool:
    if requirement.anyOf:
        return any(requirement_satisfied(graph, option) for option in requirement.anyOf)
    return any(edge_matches_requirement(edge, graph, requirement) for edge in graph.edges)


def evaluate_policy(graph: EvidenceGraph, policy: PolicyProfile) -> list[dict[str, Any]]:
    results: list[dict[str, Any]] = []
    target_node = graph.nodes.get(graph.targetId)
    target_types = target_node.types if target_node else []
    type_ok = any(t in target_types for t in policy.targetCredentialTypes)
    results.append(trace_entry(
        id="target-type-match",
        level="policy",
        target=graph.targetId,
        status="PASS" if type_ok else "FAIL",
        code="TARGET_TYPE_MATCH" if type_ok else "TARGET_TYPE_MISMATCH",
        detail=f"Target credential type matches policy {policy.id}." if type_ok
        else f"Target credential types {target_types} do not match policy {policy.id}.",
    ))

    for requirement in policy.requiredEvidence:
        ok = requirement_satisfied(graph, requirement)
        required = requirement.required is not False
        results.append(trace_entry(
            id=requirement.id,
            level="policy",
            target=graph.targetId,
            status="PASS" if ok else "FAIL" if required else "SKIP",
            code="REQUIRED_EVIDENCE_PRESENT" if ok else "REQUIRED_EVIDENCE_MISSING" if required else "OPTIONAL_EVIDENCE_MISSING",
            detail=f"Required evidence '{requirement.id}' is present." if ok else f"Required evidence '{requirement.id}' is missing.",
        ))

    if policy.statusPolicy and policy.statusPolicy.historical == "required":
        results.append(trace_entry(
            id="historical-status",
            level="policy",
            target=graph.targetId,
            status="FAIL",
            code="HISTORICAL_STATUS_UNSUPPORTED",
            detail="Historical status checking is not implemented in v0.2.",
        ))

    return results
