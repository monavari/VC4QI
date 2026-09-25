# SPDX-License-Identifier: Apache-2.0
import json
from pathlib import Path

import pytest
from qi_vc_core.reliance import (
    CatalogBudget,
    CatalogError,
    StaticResource,
    StaticResourceCatalog,
    load_rm_v1_catalog,
    read_pinned_resources,
)
from qi_vc_core.reliance.rm_v1 import RM_V1_DIRECTORY

MANIFEST = json.loads((RM_V1_DIRECTORY / "manifest.json").read_text())
BUDGET = CatalogBudget(max_resources=64, max_bytes=1_000_000)


def test_pins_every_manifest_context_and_schema_with_verified_bytes() -> None:
    session = load_rm_v1_catalog().open_session(BUDGET)
    carrier = MANIFEST["carrierAndSchema"]
    for uri in carrier["requiredContexts"] + carrier["schemaUris"]:
        assert session.resolve(uri).digest_sri.startswith("sha384-")


def test_changed_pinned_bytes_fail_installation() -> None:
    resources = read_pinned_resources(RM_V1_DIRECTORY / "catalog.json")
    first = resources[0]
    tampered = StaticResource(
        uri=first.uri,
        media_type=first.media_type,
        content=first.content + b" ",
        digest_sri=first.digest_sri,
        origin=first.origin,
        version=first.version,
    )
    with pytest.raises(CatalogError) as caught:
        StaticResourceCatalog([tampered, *resources[1:]])
    assert caught.value.code == "INTEGRITY_MISMATCH"


def test_index_paths_cannot_escape_the_repository(tmp_path: Path) -> None:
    index = tmp_path / "catalog.json"
    index.write_text(
        json.dumps(
            {
                "resources": [
                    {
                        "uri": "https://vc4qi.example/x",
                        "path": "../outside.json",
                        "mediaType": "application/json",
                        "origin": "test",
                        "version": "1",
                        "digestSRI": "sha384-x",
                    }
                ]
            }
        )
    )
    with pytest.raises(TypeError):
        read_pinned_resources(index)


def test_unpinned_context_is_refused() -> None:
    session = load_rm_v1_catalog().open_session(BUDGET)
    with pytest.raises(CatalogError) as caught:
        session.resolve("https://vc4qi.example/contexts/rm/2")
    assert caught.value.code == "RESOURCE_NOT_FOUND"
