# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from ..policy.types import PolicyProfile


def policy_to_dcql(policy: PolicyProfile) -> dict[str, Any]:
    return {
        "credentials": [
            {
                "id": "target",
                "format": "vc+ld",
                "claims": [{"path": ["type"], "values": policy.targetCredentialTypes}],
            },
            *[
                {
                    "id": requirement.id,
                    "format": "vc+ld",
                    "claims": [{"path": ["evidence", "relation"], "values": [requirement.relation]}]
                    if requirement.relation else [],
                }
                for requirement in policy.requiredEvidence
            ],
        ],
    }
