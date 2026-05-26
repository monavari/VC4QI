# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from .authorized_by import evaluate_authorized_by
from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..policy.types import PolicyProfile


def evaluate_notified_by(edge: EvidenceEdge, graph: EvidenceGraph, policy: PolicyProfile, **kwargs: Any) -> list[dict[str, Any]]:
    return evaluate_authorized_by(edge, graph, policy, **kwargs)
