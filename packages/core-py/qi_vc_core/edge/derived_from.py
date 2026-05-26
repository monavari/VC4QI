# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..policy.types import PolicyProfile
from ..scope import check_derived_edge
from ..verifier.trace import trace_entry


def evaluate_derived_from(edge: EvidenceEdge, graph: EvidenceGraph, policy: PolicyProfile) -> list[dict[str, Any]]:
    child = graph.nodes.get(edge.from_)
    parent = graph.nodes.get(edge.to)
    if not child or not parent:
        return [trace_entry(
            id=f"edge-derivedFrom-{edge.from_}-to-{edge.to}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="FAIL",
            code="EVIDENCE_NODE_MISSING",
            detail="Cannot evaluate derivation edge because a node is missing.",
        )]
    result = check_derived_edge(child.credential, parent.credential, edge, policy)
    if result.passed:
        return [trace_entry(
            id=f"edge-derivedFrom-{edge.from_}-to-{edge.to}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="PASS",
            code="DERIVATION_VALID",
            detail="Child authority or scope is within parent evidence.",
        )]
    return [
        trace_entry(
            id=f"edge-derivedFrom-{edge.from_}-to-{edge.to}-{violation.code}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="FAIL",
            code=violation.code,
            detail=violation.detail,
        )
        for violation in result.violations
    ]
