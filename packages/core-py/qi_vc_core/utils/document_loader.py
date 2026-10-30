# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Callable

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]

_REPO_ROOT = Path(__file__).parents[4]

# Mirrors LOCAL_CONTEXT_MAP in packages/core-ts/src/utils/document-loader.ts.
# Vendored W3C contexts, so canonicalization resolves every term offline.
_LOCAL_CONTEXT_MAP: dict[str, str] = {
    "https://www.w3.org/ns/credentials/v2": "bindings/vendor/credentials-v2.jsonld",
    "https://w3id.org/security/multikey/v1": (
        "bindings/vendor/security-multikey-v1.jsonld"
    ),
}

_context_cache: dict[str, Any] = {}


def _load_local(rel_path: str) -> Any:
    abs_path = _REPO_ROOT / rel_path
    if not abs_path.exists():
        raise FileNotFoundError(f"Context file not found: {abs_path}")
    return json.loads(abs_path.read_text())


def build_document_loader(
    contexts: dict[str, Any] | None = None,
    strict: bool = False,
) -> DocumentLoader:
    """Build a pyld-compatible document loader.

    Serves the vendored W3C contexts without network calls. Falls back to HTTP
    for unknown URLs unless strict=True.
    """
    extra: dict[str, Any] = contexts or {}

    for url, rel_path in _LOCAL_CONTEXT_MAP.items():
        if url not in _context_cache:
            abs_path = _REPO_ROOT / rel_path
            if abs_path.exists():
                _context_cache[url] = _load_local(rel_path)

    _context_cache.update(extra)

    def loader(url: str, options: dict[str, Any] | None = None) -> dict[str, Any]:
        if url in _context_cache:
            return {
                "contextUrl": None,
                "document": _context_cache[url],
                "documentUrl": url,
            }
        if strict:
            raise RuntimeError(f"Document loader (strict): refusing to fetch unknown URL: {url}")

        import httpx
        resp = httpx.get(url, headers={"Accept": "application/ld+json, application/json"}, follow_redirects=True)
        resp.raise_for_status()
        doc = resp.json()
        _context_cache[url] = doc
        return {"contextUrl": None, "document": doc, "documentUrl": url}

    return loader


default_document_loader: DocumentLoader = build_document_loader()
