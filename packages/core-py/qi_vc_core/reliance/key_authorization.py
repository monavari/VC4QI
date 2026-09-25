# SPDX-License-Identifier: Apache-2.0
"""Verification-method authorization for the experimental RM v1 binding.

Mirrors key-authorization.ts. A valid signature proves possession of a key; it does
not show that the key may speak for the issuer. The named method must be listed in
the issuer's own controller document (from the static catalog, processed as plain
JSON), be controlled by the issuer, carry an Ed25519 Multikey and be referenced from
assertionMethod.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any, Literal
from urllib.parse import urlsplit

from ..utils.base58btc import from_multibase
from .catalog import CatalogError, CatalogSession
from .types import SemanticState

KeyAuthorizationCode = Literal[
    "AUTHORIZED",
    "ISSUER_MISSING",
    "MALFORMED_METHOD",
    "NOT_ISSUER_CONTROLLER",
    "CONTROLLER_NOT_INSTALLED",
    "INVALID_CONTROLLER_DOCUMENT",
    "CONTROLLER_ID_MISMATCH",
    "METHOD_NOT_FOUND",
    "METHOD_AMBIGUOUS",
    "METHOD_TYPE_UNSUPPORTED",
    "METHOD_CONTROLLER_MISMATCH",
    "METHOD_LIFECYCLE_UNSUPPORTED",
    "INVALID_PUBLIC_KEY",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "NOT_ASSERTION_METHOD",
]

_ED25519_MULTICODEC = b"\xed\x01"
_LIFECYCLE_FIELDS = ("revoked", "expires")


@dataclass(frozen=True)
class KeyAuthorization:
    state: SemanticState
    code: KeyAuthorizationCode
    reason: str
    public_key: bytes | None = None
    verification_method: str | None = None
    controller_document_digest: str | None = None


def issuer_identifier(issuer: Any) -> str | None:
    """Issuer identifier from a VCDM issuer value (string or object with string id)."""
    if isinstance(issuer, str) and issuer:
        return issuer
    if isinstance(issuer, dict) and isinstance(issuer.get("id"), str) and issuer["id"]:
        return str(issuer["id"])
    return None


def _controller_of(method: str) -> str | None:
    hash_index = method.find("#")
    if hash_index <= 0 or hash_index == len(method) - 1:
        return None
    parts = urlsplit(method)
    if parts.scheme not in ("https", "did") or (
        parts.scheme == "https" and not parts.netloc
    ):
        return None
    return method[:hash_index]


def _decode_ed25519_multikey(value: Any) -> bytes | None:
    if not isinstance(value, str) or not value.startswith("z"):
        return None
    try:
        raw = from_multibase(value)
    except ValueError:
        return None
    if len(raw) != 34 or raw[:2] != _ED25519_MULTICODEC:
        return None
    return raw[2:]


def authorize_assertion_method(
    issuer: Any, verification_method: Any, session: CatalogSession
) -> KeyAuthorization:
    """Decide whether verification_method may produce assertion proofs for issuer.

    Missing or unsupported inputs are not_established; evidence that the key is not
    the issuer's assertion key is contradicted. Never raises for untrusted input.
    """
    issuer_id = issuer_identifier(issuer)
    if issuer_id is None:
        return KeyAuthorization(
            "not_established",
            "ISSUER_MISSING",
            "The credential has no issuer identifier.",
        )
    if not isinstance(verification_method, str):
        return KeyAuthorization(
            "contradicted",
            "MALFORMED_METHOD",
            "The proof names no verification method.",
        )
    controller = _controller_of(verification_method)
    if controller is None:
        return KeyAuthorization(
            "contradicted",
            "MALFORMED_METHOD",
            f"Verification method {verification_method} is not an absolute URL "
            "with a fragment.",
        )
    if controller != issuer_id:
        return KeyAuthorization(
            "contradicted",
            "NOT_ISSUER_CONTROLLER",
            f"Verification method {verification_method} is not in issuer "
            f"{issuer_id}'s controller document.",
        )

    try:
        resource = session.resolve(controller)
    except CatalogError as error:
        return KeyAuthorization(
            "not_established",
            "CONTROLLER_NOT_INSTALLED",
            f"Controller document {controller} is not available: {error.code}.",
        )
    try:
        document = json.loads(resource.content.decode("utf-8"))
    except (UnicodeDecodeError, ValueError):
        return KeyAuthorization(
            "not_established",
            "INVALID_CONTROLLER_DOCUMENT",
            f"Controller document {controller} is not valid UTF-8 JSON.",
        )
    if not isinstance(document, dict):
        return KeyAuthorization(
            "not_established",
            "INVALID_CONTROLLER_DOCUMENT",
            f"Controller document {controller} is not a JSON object.",
        )
    if document.get("id") != controller:
        return KeyAuthorization(
            "contradicted",
            "CONTROLLER_ID_MISMATCH",
            f"Controller document at {controller} identifies itself as "
            f"{document.get('id')}.",
        )

    methods = document.get("verificationMethod")
    methods = methods if isinstance(methods, list) else []
    matches = [
        m for m in methods if isinstance(m, dict) and m.get("id") == verification_method
    ]
    if not matches:
        return KeyAuthorization(
            "contradicted",
            "METHOD_NOT_FOUND",
            f"{verification_method} is not listed in its controller document.",
        )
    if len(matches) > 1:
        return KeyAuthorization(
            "contradicted",
            "METHOD_AMBIGUOUS",
            f"{verification_method} is listed more than once in its "
            "controller document.",
        )
    method = matches[0]
    if method.get("type") != "Multikey":
        return KeyAuthorization(
            "not_established",
            "METHOD_TYPE_UNSUPPORTED",
            f"Verification method type {method.get('type')} is not supported; "
            "Multikey is required.",
        )
    if method.get("controller") != controller:
        return KeyAuthorization(
            "contradicted",
            "METHOD_CONTROLLER_MISMATCH",
            f"{verification_method} is controlled by {method.get('controller')}, "
            f"not {controller}.",
        )
    if any(field in method for field in _LIFECYCLE_FIELDS):
        return KeyAuthorization(
            "not_established",
            "METHOD_LIFECYCLE_UNSUPPORTED",
            "Key revocation/expiry metadata is not supported in the initial slice.",
        )
    public_key = _decode_ed25519_multikey(method.get("publicKeyMultibase"))
    if public_key is None:
        return KeyAuthorization(
            "contradicted",
            "INVALID_PUBLIC_KEY",
            f"{verification_method} does not carry an Ed25519 Multikey public key.",
        )

    assertion = document.get("assertionMethod")
    assertion = assertion if isinstance(assertion, list) else []
    if verification_method in [entry for entry in assertion if isinstance(entry, str)]:
        return KeyAuthorization(
            "established",
            "AUTHORIZED",
            f"{verification_method} is the issuer's Ed25519 assertion key.",
            public_key=public_key,
            verification_method=verification_method,
            controller_document_digest=resource.digest_sri,
        )
    if any(
        isinstance(e, dict) and e.get("id") == verification_method for e in assertion
    ):
        return KeyAuthorization(
            "not_established",
            "EMBEDDED_METHOD_UNSUPPORTED",
            "Embedded assertionMethod entries are not supported; "
            "a reference is required.",
        )
    return KeyAuthorization(
        "contradicted",
        "NOT_ASSERTION_METHOD",
        f"{verification_method} is not authorized for assertionMethod.",
    )
