# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any, Literal

TraceLevel = Literal["credential", "edge", "graph", "policy", "scope", "presentation"]
TraceStatus = Literal["PASS", "FAIL", "SKIP", "WARN"]


def trace_entry(
    *,
    id: str,
    level: TraceLevel,
    status: TraceStatus,
    code: str,
    detail: str,
    target: str | None = None,
    from_: str | None = None,
    to: str | None = None,
    relation: str | None = None,
) -> dict[str, Any]:
    entry: dict[str, Any] = {
        "id": id,
        "level": level,
        "status": status,
        "code": code,
        "detail": detail,
    }
    if target is not None:
        entry["target"] = target
    if from_ is not None:
        entry["from"] = from_
    if to is not None:
        entry["to"] = to
    if relation is not None:
        entry["relation"] = relation
    return entry


def make_verification_trace(
    *,
    profile: str,
    target: str,
    nodes_resolved: int,
    edges_evaluated: int,
    results: list[dict[str, Any]],
) -> dict[str, Any]:
    summary = {
        "nodesResolved": nodes_resolved,
        "edgesEvaluated": edges_evaluated,
        "failures": sum(1 for result in results if result["status"] == "FAIL"),
        "warnings": sum(1 for result in results if result["status"] == "WARN"),
    }
    return {
        "verified": summary["failures"] == 0,
        "profile": profile,
        "target": target,
        "summary": summary,
        "results": results,
    }
