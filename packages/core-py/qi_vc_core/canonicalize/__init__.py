# SPDX-License-Identifier: Apache-2.0
# URDNA2015 (RDF Dataset Normalization 1.0) canonicalization via pyld.
# Reference: https://www.w3.org/TR/rdf-canon/
from __future__ import annotations

import hashlib
from typing import Any, Callable

from pyld import jsonld  # type: ignore[import-untyped]

from ..utils.base58btc import to_multibase, from_multibase

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]


def canonicalize(
    document: JsonObject,
    document_loader: DocumentLoader | None = None,
) -> str:
    """Produce the URDNA2015 canonical N-Quads string for a JSON-LD document."""
    options: dict[str, Any] = {
        "algorithm": "URDNA2015",
        "format": "application/n-quads",
    }
    if document_loader is not None:
        options["documentLoader"] = document_loader

    result = jsonld.normalize(document, options)
    return result  # type: ignore[no-any-return]


def compute_hash_binding(
    document: JsonObject,
    document_loader: DocumentLoader | None = None,
) -> str:
    """Compute SHA-256 of URDNA2015 canonical form, return as multibase base58btc.

    The proof block MUST be removed from the document before calling this.
    """
    canonical = canonicalize(document, document_loader)
    digest = hashlib.sha256(canonical.encode("utf-8")).digest()
    return to_multibase(digest)


def verify_hash_binding(
    document: JsonObject,
    digest_multibase: str,
    document_loader: DocumentLoader | None = None,
) -> bool:
    """Verify a digest binding against a document."""
    expected = compute_hash_binding(document, document_loader)
    return expected == digest_multibase
