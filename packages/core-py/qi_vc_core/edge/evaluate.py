# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any, Callable

from .authorized_by import evaluate_authorized_by
from .derived_from import evaluate_derived_from
from .notified_by import evaluate_notified_by
from .recognized_by import evaluate_recognized_by
from .status_provided_by import evaluate_status_provided_by
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
    if edge.relation == "qi:authorizedBy":
        return evaluate_authorized_by(edge, graph, policy, resolve_trust_registry=resolve_trust_registry)
    if edge.relation == "qi:derivedFrom":
        return evaluate_derived_from(edge, graph, policy)
    if edge.relation == "qi:supportedBy":
        return evaluate_supported_by(edge, graph, policy)
    if edge.relation == "qi:recognizedBy":
        return evaluate_recognized_by(edge, graph, policy)
    if edge.relation == "qi:notifiedBy":
        return evaluate_notified_by(edge, graph, policy, resolve_trust_registry=resolve_trust_registry)
    if edge.relation == "qi:statusProvidedBy":
        return evaluate_status_provided_by(edge, graph, policy)
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
