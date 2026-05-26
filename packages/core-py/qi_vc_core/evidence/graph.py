# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any, Callable

import httpx

from .digest import verify_digest
from .normalize import normalize_evidence
from .types import EvidenceEdge, EvidenceGraph, EvidenceNode
from ..verifier.trace import trace_entry

JsonObject = dict[str, Any]


def credential_id(credential: JsonObject) -> str:
    return str(credential.get("id", ""))


def issuer_id(credential: JsonObject) -> str:
    issuer = credential.get("issuer")
    if isinstance(issuer, str):
        return issuer
    if isinstance(issuer, dict):
        return str(issuer.get("id", ""))
    return ""


def credential_types(credential: JsonObject) -> list[str]:
    value = credential.get("type")
    if isinstance(value, list):
        return [str(item) for item in value]
    if isinstance(value, str):
        return [value]
    return []


def to_node(credential: JsonObject, fallback_id: str = "") -> EvidenceNode:
    return EvidenceNode(
        id=credential_id(credential) or fallback_id,
        credential=credential,
        issuer=issuer_id(credential),
        types=credential_types(credential),
    )


def default_fetch_document(uri: str) -> JsonObject:
    response = httpx.get(uri, headers={"Accept": "application/json"}, follow_redirects=True)
    response.raise_for_status()
    return response.json()


def build_evidence_graph(
    target_credential: JsonObject,
    *,
    fetch_document: Callable[[str], JsonObject] | None = None,
    max_depth: int = 8,
    max_evidence_nodes: int = 32,
    require_digest: bool = False,
) -> tuple[EvidenceGraph, list[dict[str, Any]]]:
    fetch = fetch_document or default_fetch_document
    target_id = credential_id(target_credential)
    graph = EvidenceGraph(targetId=target_id, nodes={target_id: to_node(target_credential, target_id)}, edges=[])
    results: list[dict[str, Any]] = []
    visited: set[str] = set()
    active_path: list[str] = []

    def visit(credential: JsonObject, depth: int) -> None:
        from_id = credential_id(credential)
        if depth > max_depth:
            results.append(trace_entry(
                id=f"max-depth-{from_id}",
                level="graph",
                target=from_id,
                status="FAIL",
                code="MAX_DEPTH_EXCEEDED",
                detail=f"Evidence graph exceeded maxDepth {max_depth}.",
            ))
            return

        if from_id in active_path:
            results.append(trace_entry(
                id=f"cycle-{from_id}",
                level="graph",
                target=from_id,
                status="FAIL",
                code="CYCLE_DETECTED",
                detail=f"Cycle detected at {from_id}.",
            ))
            return

        if from_id in visited:
            return
        visited.add(from_id)
        active_path.append(from_id)

        refs, normalize_results = normalize_evidence(credential, from_id)
        results.extend(normalize_results)
        for evidence in refs:
            to_id = evidence.id
            graph.edges.append(EvidenceEdge(
                **{
                    "from": from_id,
                    "to": to_id,
                    "relation": evidence.relation,
                    "role": evidence.role,
                    "authorizationBasis": evidence.authorizationBasis,
                    "digestMultibase": evidence.digestMultibase,
                    "digestSRI": evidence.digestSRI,
                }
            ))

            if to_id in active_path:
                results.append(trace_entry(
                    id=f"cycle-{from_id}-to-{to_id}",
                    level="graph",
                    from_=from_id,
                    to=to_id,
                    relation=evidence.relation,
                    status="FAIL",
                    code="CYCLE_DETECTED",
                    detail=f"Evidence edge creates a cycle from {from_id} to {to_id}.",
                ))
                continue

            if to_id not in graph.nodes and len(graph.nodes) >= max_evidence_nodes:
                results.append(trace_entry(
                    id=f"max-nodes-{to_id}",
                    level="graph",
                    target=to_id,
                    status="FAIL",
                    code="MAX_EVIDENCE_NODES_EXCEEDED",
                    detail=f"Evidence graph exceeded maxEvidenceNodes {max_evidence_nodes}.",
                ))
                continue

            try:
                referenced = fetch(to_id)
            except Exception as exc:
                results.append(trace_entry(
                    id=f"resolve-{to_id}",
                    level="graph",
                    target=to_id,
                    status="FAIL",
                    code="EVIDENCE_RESOLUTION_FAILED",
                    detail=f"Could not resolve evidence {to_id}: {exc}",
                ))
                continue

            graph.nodes[to_id] = to_node(referenced, to_id)
            results.append(trace_entry(
                id=f"resolve-{to_id}",
                level="graph",
                target=to_id,
                status="PASS",
                code="EVIDENCE_RESOLVED",
                detail=f"Resolved evidence {to_id}.",
            ))
            results.append(verify_digest(
                evidence,
                referenced,
                from_id=from_id,
                to_id=to_id,
                relation=evidence.relation,
                require_digest=require_digest,
            ))
            visit(referenced, depth + 1)

        active_path.pop()

    visit(target_credential, 0)
    return graph, results
