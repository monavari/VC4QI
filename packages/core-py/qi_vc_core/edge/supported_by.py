# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..policy.types import PolicyProfile
from ..verifier.trace import trace_entry


def evaluate_supported_by(edge: EvidenceEdge, graph: EvidenceGraph, policy: PolicyProfile) -> list[dict[str, Any]]:
    target = graph.nodes.get(edge.to)
    return [trace_entry(
        id=f"edge-supportedBy-{edge.from_}-to-{edge.to}",
        level="edge",
        from_=edge.from_,
        to=edge.to,
        relation=edge.relation,
        status="PASS" if target else "FAIL",
        code="SUPPORTING_EVIDENCE_RESOLVED" if target else "SUPPORTING_EVIDENCE_MISSING",
        detail="Supporting credential was resolved and remains part of recursive graph evaluation."
        if target else "Supporting credential could not be resolved.",
    )]
