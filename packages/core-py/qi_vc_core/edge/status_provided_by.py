# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..policy.types import PolicyProfile
from ..verifier.trace import trace_entry


def evaluate_status_provided_by(edge: EvidenceEdge, graph: EvidenceGraph, policy: PolicyProfile) -> list[dict[str, Any]]:
    target = graph.nodes.get(edge.to)
    return [trace_entry(
        id=f"edge-statusProvidedBy-{edge.from_}-to-{edge.to}",
        level="edge",
        from_=edge.from_,
        to=edge.to,
        relation=edge.relation,
        status="PASS" if target else "FAIL",
        code="STATUS_PROVIDER_RESOLVED" if target else "STATUS_PROVIDER_MISSING",
        detail="Status provider evidence was resolved." if target else "Status provider evidence could not be resolved.",
    )]
