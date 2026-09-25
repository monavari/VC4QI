# SPDX-License-Identifier: Apache-2.0
import json
from copy import deepcopy
from pathlib import Path
from typing import Any, cast

import pytest
from qi_vc_core.reliance import (
    RM_V1_BINDING_ID,
    load_binding_manifest,
    require_installable_binding,
)

MANIFEST_PATH = (
    Path(__file__).resolve().parents[3]
    / "bindings/experimental/rm-v1/manifest.json"
)
MANIFEST = json.loads(MANIFEST_PATH.read_text())


def test_manifest_loads_but_is_not_installable() -> None:
    loaded = load_binding_manifest(MANIFEST)
    assert loaded.id == RM_V1_BINDING_ID
    assert loaded.version == "1"
    assert loaded.installation.status == "incomplete"
    assert loaded.installation.pending_resources
    with pytest.raises(TypeError):
        cast(dict[str, Any], loaded.data)["version"] = "changed"
    with pytest.raises(ValueError, match="not installable"):
        require_installable_binding(loaded)


def test_manifest_requires_exact_envelope() -> None:
    with pytest.raises(ValueError, match="exactly"):
        load_binding_manifest({**MANIFEST, "unexpected": True})


def test_manifest_does_not_trust_self_reported_installable_flag() -> None:
    claimed = deepcopy(MANIFEST)
    claimed["installation"] = {
        "status": "installable",
        "reason": "self-reported",
        "pendingResources": [],
    }
    with pytest.raises(ValueError, match="catalog-backed installation verification"):
        require_installable_binding(load_binding_manifest(claimed))


def test_manifest_has_no_legacy_wire_fields() -> None:
    serialized = json.dumps(MANIFEST)
    for term in (
        "authorizedBy", "derivedFrom", "supportedBy", "authorizationBasis", "scopeRef",
    ):
        assert term not in serialized
