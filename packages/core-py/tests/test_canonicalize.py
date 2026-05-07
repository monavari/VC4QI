# SPDX-License-Identifier: Apache-2.0
import pytest
from qi_vc_core.canonicalize import canonicalize, compute_hash_binding, verify_hash_binding


SIMPLE_DOC = {
    "@context": {"name": "http://schema.org/name"},
    "name": "Alice",
}


def test_canonicalize_returns_nquads_string():
    result = canonicalize(SIMPLE_DOC)
    assert isinstance(result, str)
    # URDNA2015 N-Quads end with newlines for each triple
    assert "_:" in result or "<" in result or result == ""


def test_canonicalize_deterministic():
    r1 = canonicalize(SIMPLE_DOC)
    r2 = canonicalize(SIMPLE_DOC)
    assert r1 == r2


def test_canonicalize_empty_document():
    # Document with no RDF terms produces empty N-Quads
    result = canonicalize({"key": "value"})
    assert isinstance(result, str)


def test_compute_hash_binding_returns_multibase():
    result = compute_hash_binding(SIMPLE_DOC)
    assert result.startswith("z")


def test_compute_hash_binding_deterministic():
    h1 = compute_hash_binding(SIMPLE_DOC)
    h2 = compute_hash_binding(SIMPLE_DOC)
    assert h1 == h2


def test_verify_hash_binding_valid():
    expected = compute_hash_binding(SIMPLE_DOC)
    assert verify_hash_binding(SIMPLE_DOC, expected) is True


def test_verify_hash_binding_invalid():
    assert verify_hash_binding(SIMPLE_DOC, "zBadHashValue") is False


def test_hash_binding_changes_on_modification():
    doc1 = {**SIMPLE_DOC, "name": "Alice"}
    doc2 = {**SIMPLE_DOC, "name": "Bob"}
    assert compute_hash_binding(doc1) != compute_hash_binding(doc2)
