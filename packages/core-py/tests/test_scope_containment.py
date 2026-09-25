# SPDX-License-Identifier: Apache-2.0
import json
from copy import deepcopy
from pathlib import Path
from typing import Any

import pytest
from qi_vc_core.scope import check_derived_edge, check_scope_inclusion

VECTOR_PATH = (
    Path(__file__).resolve().parents[3]
    / "testdata/regressions/scope-containment.json"
)
VECTORS = json.loads(VECTOR_PATH.read_text())["vectors"]


def test_non_finite_bounds() -> None:
    for side in ("child", "parent"):
        for bound in ("from", "to"):
            for value in (float("nan"), float("inf"), -float("inf"), 10**400):
                vector = deepcopy(VECTORS[0])
                vector[side]["credentialSubject"]["scope"][0]["range"][bound] = value
                assert not check_derived_edge(
                    vector["child"], vector["parent"],
                ).passed


@pytest.mark.parametrize("vector", VECTORS, ids=lambda v: v["id"])
def test_shared_scope_safety(vector: dict[str, Any]) -> None:
    """Unsigned predicate evidence, not a secured reliance conformance claim."""
    if vector["operation"] == "derived":
        result = check_derived_edge(vector["child"], vector["parent"])
    else:
        result = check_scope_inclusion(
            vector["credential"], {"credentialSubject": {"scope": vector["scope"]}}
        )
    assert result.passed is vector["expected"]["passed"]
    codes = [violation.code for violation in result.violations]
    if result.passed:
        assert codes == []
    else:
        assert set(vector["expected"]["codes"]) <= set(codes)
