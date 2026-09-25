# SPDX-License-Identifier: Apache-2.0
import json
from pathlib import Path
from typing import cast

import pytest
from qi_vc_core.reliance.catalog import (
    CatalogBudget,
    CatalogError,
    StaticResource,
    StaticResourceCatalog,
    sha384_sri,
)

FIXTURE = json.loads(
    (
        Path(__file__).resolve().parents[3]
        / "testdata/regressions/static-resource-catalog.json"
    ).read_text()
)
CONTENT = FIXTURE.pop("contentUtf8").encode()


def resource(content: bytes = CONTENT) -> StaticResource:
    return StaticResource(
        uri=FIXTURE["uri"], media_type=FIXTURE["mediaType"], content=content,
        digest_sri=FIXTURE["digestSRI"], origin=FIXTURE["origin"],
        version=FIXTURE["version"],
    )


def test_original_bytes_and_usage() -> None:
    session = StaticResourceCatalog([resource()]).open_session(
        CatalogBudget(max_resources=2, max_bytes=len(CONTENT) * 2)
    )
    assert session.resolve(FIXTURE["uri"]).content == CONTENT
    assert session.resolve(FIXTURE["uri"]).content == CONTENT
    assert session.usage == (2, len(CONTENT) * 2)


def test_changed_whitespace_fails_integrity() -> None:
    with pytest.raises(CatalogError, match="expected") as caught:
        StaticResourceCatalog([resource(CONTENT + b" ")])
    assert caught.value.code == "INTEGRITY_MISMATCH"


def test_duplicate_unknown_and_catalog_isolation() -> None:
    with pytest.raises(CatalogError) as duplicate:
        StaticResourceCatalog([resource(), resource()])
    assert duplicate.value.code == "DUPLICATE_RESOURCE"
    populated = StaticResourceCatalog([resource()])
    empty = StaticResourceCatalog([])
    session = empty.open_session(CatalogBudget(max_resources=1, max_bytes=99))
    with pytest.raises(CatalogError) as missing:
        session.resolve(FIXTURE["uri"])
    assert missing.value.code == "RESOURCE_NOT_FOUND"
    assert session.usage == (0, 0)
    assert populated.open_session(
        CatalogBudget(max_resources=1, max_bytes=len(CONTENT))
    ).resolve(FIXTURE["uri"]).digest_sri == sha384_sri(CONTENT)


def test_request_local_budget() -> None:
    session = StaticResourceCatalog([resource()]).open_session(
        CatalogBudget(max_resources=1, max_bytes=len(CONTENT))
    )
    session.resolve(FIXTURE["uri"])
    with pytest.raises(CatalogError) as exceeded:
        session.resolve(FIXTURE["uri"])
    assert exceeded.value.code == "RESOURCE_BUDGET_EXCEEDED"


def test_budget_must_fit_the_cross_language_safe_integer_domain() -> None:
    catalog = StaticResourceCatalog([resource()])
    with pytest.raises(CatalogError, match="safe integers"):
        catalog.open_session(CatalogBudget(max_resources=2**53, max_bytes=99))


def test_mutable_buffer_is_copied_at_ingress() -> None:
    source = bytearray(CONTENT)
    item = resource(cast(bytes, source))
    catalog = StaticResourceCatalog([item])
    source[0] = 0
    resolved = catalog.open_session(
        CatalogBudget(max_resources=1, max_bytes=len(CONTENT))
    ).resolve(FIXTURE["uri"])
    assert resolved.content == CONTENT
    assert isinstance(resolved.content, bytes)
