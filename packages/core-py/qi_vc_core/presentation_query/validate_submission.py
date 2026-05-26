# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from ..verifier.trace import trace_entry


def validate_presentation_submission(
    presentation_definition: dict[str, Any],
    presentation_submission: dict[str, Any],
) -> dict[str, Any]:
    expected = [str(item.get("id", "")) for item in presentation_definition.get("input_descriptors", [])]
    present = [str(item.get("id", "")) for item in presentation_submission.get("descriptor_map", [])]
    results = [
        trace_entry(
            id=f"presentation-{id_}",
            level="presentation",
            target=id_,
            status="PASS" if id_ in present else "FAIL",
            code="PRESENTATION_DESCRIPTOR_SATISFIED" if id_ in present else "PRESENTATION_DESCRIPTOR_MISSING",
            detail=f"Presentation descriptor {id_} is mapped." if id_ in present else f"Presentation descriptor {id_} is missing.",
        )
        for id_ in expected
    ]
    return {"valid": all(result["status"] != "FAIL" for result in results), "results": results}
