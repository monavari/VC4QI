# SPDX-License-Identifier: Apache-2.0
"""Explicit legacy compatibility (mirrors src/legacy/index.ts, phase I5, V03).

The v0.3 graph verifier is reachable only by selecting the legacy profile here; a
standards-first request never falls back to it (V02). The adapter evaluates the
original secured representation, so proof and status checks cannot be skipped, and
its result is labelled legacy rather than being a standards-first reliance result.
"""

from __future__ import annotations

import dataclasses
from dataclasses import dataclass
from typing import Any, Literal

from ..verifier.graph_verifier import VerifyGraphOptions, verify_credential_graph

LEGACY_PROFILE = {
    "id": "https://vc4qi.example/profiles/legacy-qi-vc-graph",
    "version": "0.3",
    "label": "legacy",
}

LEGACY_LIMITATIONS = (
    "Legacy profile: evaluated by the v0.3 policy-resolved evidence-graph verifier, "
    "not by standards-first reliance.",
    "Legacy relations (authorizedBy, derivedFrom, supportedBy) and policy semantics "
    "apply; no gate trace, route or record witnesses are produced.",
    "The original secured representation was verified; proof and status checks "
    "cannot be skipped in this adapter.",
)


@dataclass(frozen=True)
class LegacyEvaluation:
    profile: dict[str, str]
    decision: Literal["accept", "reject", "not_established"]
    reasons: tuple[str, ...]
    legacy_trace: dict[str, Any]
    limitations: tuple[str, ...]


def evaluate_legacy_profile(
    target: dict[str, Any], policy: Any, options: VerifyGraphOptions | None = None
) -> LegacyEvaluation:
    """Evaluate a legacy graph under the explicitly selected legacy profile."""
    options = options or VerifyGraphOptions()
    forbidden = [
        name for name in ("skip_proof", "skip_status") if getattr(options, name)
    ]
    if forbidden:
        raise ValueError(
            "The legacy profile evaluates the original secured representation; "
            f"{' and '.join(forbidden)} cannot be set."
        )
    trace = verify_credential_graph(
        target,
        policy,
        dataclasses.replace(options, skip_proof=False, skip_status=False),
    )
    results = trace["results"]
    failures = [r for r in results if r["status"] == "FAIL"]
    notes = [r for r in results if r["status"] in ("WARN", "SKIP")]
    decision: Literal["accept", "reject", "not_established"] = (
        "reject" if failures else "accept" if trace["verified"] else "not_established"
    )
    if failures:
        reasons = tuple(f"{r['code']}: {r['detail']}" for r in failures)
    else:
        verb = "verified" if trace["verified"] else "did not verify"
        reasons = (
            f"Legacy verifier {verb} the graph under policy {trace['profile']} "
            f"({len(results)} checks, {len(notes)} optional checks skipped or "
            "warned).",
            *(f"{r['status']} {r['code']}: {r['detail']}" for r in notes),
        )
    return LegacyEvaluation(
        dict(LEGACY_PROFILE), decision, reasons, trace, LEGACY_LIMITATIONS
    )
