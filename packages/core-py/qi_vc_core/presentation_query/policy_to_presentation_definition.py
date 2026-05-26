# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from ..policy.types import PolicyProfile


def policy_to_presentation_definition(policy: PolicyProfile) -> dict[str, Any]:
    return {
        "id": f"{policy.id}-presentation-definition",
        "name": policy.id,
        "purpose": "Request credentials needed for QI evidence-graph verification.",
        "input_descriptors": [
            {"id": "target-credential"},
            *[{"id": requirement.id} for requirement in policy.requiredEvidence],
        ],
    }
