# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any, Callable

from .authorized_by import evaluate_authorized_by
from .derived_from import evaluate_derived_from
from .supported_by import evaluate_supported_by
from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..policy.types import PolicyProfile
from ..verifier.trace import trace_entry

JsonObject = dict[str, Any]


def evaluate_edge(
    edge: EvidenceEdge,
    graph: EvidenceGraph,
    policy: PolicyProfile,
    *,
    resolve_trust_registry: Callable[[str, Any | None], JsonObject] | None = None,
) -> list[dict[str, Any]]:
    if edge.relation == "authorizedBy":
        return evaluate_authorized_by(edge, graph, policy, resolve_trust_registry=resolve_trust_registry)
    if edge.relation == "derivedFrom":
        return evaluate_derived_from(edge, graph, policy)
    if edge.relation == "supportedBy":
        return evaluate_supported_by(edge, graph, policy)
    return [trace_entry(
        id=f"edge-unsupported-{edge.from_}-to-{edge.to}",
        level="edge",
        from_=edge.from_,
        to=edge.to,
        relation=edge.relation,
        status="FAIL",
        code="UNSUPPORTED_EVIDENCE_RELATION",
        detail=f"Unsupported evidence relation {edge.relation}.",
    )]
