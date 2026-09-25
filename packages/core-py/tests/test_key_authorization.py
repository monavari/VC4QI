# SPDX-License-Identifier: Apache-2.0
import json
from pathlib import Path
from typing import Any

import pytest
from qi_vc_core.reliance import (
    CatalogBudget,
    StaticResource,
    StaticResourceCatalog,
    authorize_assertion_method,
    sha384_sri,
)

VECTORS = json.loads(
    (
        Path(__file__).resolve().parents[3]
        / "testdata/regressions/key-authorization.json"
    ).read_text()
)["cases"]


def _session(documents: list[dict[str, Any]]) -> Any:
    resources = []
    for document in documents:
        text = document.get("contentUtf8")
        if text is None:
            # Byte-identical to the TypeScript test's JSON.stringify output.
            text = json.dumps(
                document["content"], separators=(",", ":"), ensure_ascii=False
            )
        content = text.encode("utf-8")
        resources.append(
            StaticResource(
                uri=document["uri"],
                media_type="application/json",
                content=content,
                digest_sri=sha384_sri(content),
                origin="key-authorization regression vector",
                version="1",
            )
        )
    return StaticResourceCatalog(resources).open_session(
        CatalogBudget(max_resources=8, max_bytes=100_000)
    )


@pytest.mark.parametrize("vector", VECTORS, ids=[v["id"] for v in VECTORS])
def test_shared_key_authorization_vector(vector: dict[str, Any]) -> None:
    result = authorize_assertion_method(
        vector.get("issuer"),
        vector["verificationMethod"],
        _session(vector["documents"]),
    )
    assert {"state": result.state, "code": result.code} == vector["expected"], vector[
        "description"
    ]
    if result.state == "established":
        assert result.public_key is not None and len(result.public_key) == 32
        assert result.controller_document_digest is not None
    else:
        assert result.public_key is None
