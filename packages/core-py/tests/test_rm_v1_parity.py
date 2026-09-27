# SPDX-License-Identifier: Apache-2.0
"""Python must reproduce the committed TypeScript parity vector exactly (I4)."""

from __future__ import annotations

import json
from typing import Any

import pytest
from qi_vc_core.reliance import load_reliance_profile
from qi_vc_core.reliance.rm_v1 import RM_V1_DIRECTORY
from qi_vc_core.reliance.rm_v1_artifacts import evaluate_rm_slice
from qi_vc_core.reliance.types import ConformityRequest, VersionedIdentifier

from .test_rm_v1_slice import MANIFEST, catalog_with, request

VECTOR = json.loads(
    (RM_V1_DIRECTORY / "test-vectors/parity/i4-outcomes.json").read_text()
)


def reduce(result: Any) -> dict[str, Any]:
    conformity = result.conformity
    return {
        "decision": result.decision,
        "authorization": [
            {
                "claimId": a.claim_id,
                "state": a.state,
                "routeWitnessIds": list(a.route_witness_ids),
            }
            for a in result.authorization
        ],
        "support": [
            {"state": s.state, "witnessIds": list(s.witness_ids)}
            for s in result.support
        ],
        "conformity": {
            "requested": True,
            "state": conformity.state,
            "execution": conformity.execution,
            "reasons": list(conformity.reasons),
        }
        if getattr(conformity, "requested", False)
        else {"requested": False},
        "trace": [
            {
                "gate": t.gate,
                "predicate": t.predicate,
                "state": t.state,
                "execution": t.execution,
                "reason": t.reason,
            }
            for t in result.trace
            if t.gate >= 4
        ],
    }


@pytest.mark.parametrize("scenario", VECTOR["scenarios"], ids=lambda s: s["id"])
def test_python_reproduces_the_typescript_outcome(scenario: dict[str, Any]) -> None:
    profile = load_reliance_profile(
        json.loads((RM_V1_DIRECTORY / "profiles" / scenario["profile"]).read_text())
    )
    wanted = scenario["conformity"]
    req = request(
        target_id=scenario["targetId"],
        profile=VersionedIdentifier(profile.id, profile.version),
        conformity=ConformityRequest(wanted["requirementId"], wanted["decisionRuleId"])
        if wanted
        else None,
        **(
            {"activity_time": scenario["activityTime"]}
            if "activityTime" in scenario
            else {}
        ),
    )
    result = evaluate_rm_slice(req, catalog_with(), MANIFEST, profile).result
    assert reduce(result) == scenario["outcome"]
