# SPDX-License-Identifier: Apache-2.0
# eddsa-rdfc-2022 Data Integrity proof implementation.
# Spec: https://www.w3.org/TR/vc-di-eddsa/#eddsa-rdfc-2022
from __future__ import annotations

import hashlib
from datetime import datetime, timezone
from typing import Any, Callable

from nacl.signing import SigningKey, VerifyKey  # type: ignore[import-untyped]
from nacl.exceptions import BadSignatureError

from ..canonicalize import canonicalize
from ..utils.base58btc import to_multibase, from_multibase
from ..types import DataIntegrityProof, Ed25519KeyPair

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]


def _build_proof_config(
    doc_context: Any,
    verification_method: str,
    created: str,
) -> JsonObject:
    return {
        "@context": doc_context,
        "type": "DataIntegrityProof",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "verificationMethod": verification_method,
        "created": created,
    }


def _compute_hash_data(
    unsecured_document: JsonObject,
    proof_config: JsonObject,
    document_loader: DocumentLoader | None,
) -> bytes:
    """hashData = SHA-256(URDNA2015(proofConfig)) || SHA-256(URDNA2015(unsecuredDocument))"""
    canon_doc = canonicalize(unsecured_document, document_loader)
    canon_proof = canonicalize(proof_config, document_loader)

    doc_hash = hashlib.sha256(canon_doc.encode("utf-8")).digest()
    proof_hash = hashlib.sha256(canon_proof.encode("utf-8")).digest()

    # proof config hash first, document hash second (per spec §3.1.2)
    return proof_hash + doc_hash


def create_proof(
    credential: JsonObject,
    key_pair: Ed25519KeyPair,
    created: str | None = None,
    document_loader: DocumentLoader | None = None,
) -> DataIntegrityProof:
    """Create an eddsa-rdfc-2022 Data Integrity proof.

    The credential MUST NOT contain a proof block.
    """
    ts = created or datetime.now(timezone.utc).isoformat()

    proof_config = _build_proof_config(
        credential.get("@context"),
        key_pair.id,
        ts,
    )

    hash_data = _compute_hash_data(credential, proof_config, document_loader)

    signing_key = SigningKey(key_pair.private_key)
    signature_bytes = bytes(signing_key.sign(hash_data).signature)
    proof_value = to_multibase(signature_bytes)

    return DataIntegrityProof(
        type="DataIntegrityProof",
        cryptosuite="eddsa-rdfc-2022",
        proof_purpose="assertionMethod",
        verification_method=key_pair.id,
        created=ts,
        proof_value=proof_value,
    )


def verify_proof(
    signed_credential: JsonObject,
    public_key: bytes,
    document_loader: DocumentLoader | None = None,
) -> bool:
    """Verify an eddsa-rdfc-2022 Data Integrity proof on a signed credential."""
    proof_obj = signed_credential.get("proof")
    if not proof_obj:
        raise ValueError("No proof found on credential")

    if isinstance(proof_obj, dict):
        cryptosuite = proof_obj.get("cryptosuite")
    else:
        raise ValueError("proof must be a JSON object")

    if cryptosuite != "eddsa-rdfc-2022":
        raise ValueError(f"Unsupported cryptosuite: {cryptosuite}")

    # Remove proof to get the unsecured document
    unsecured = {k: v for k, v in signed_credential.items() if k != "proof"}

    proof_config = _build_proof_config(
        unsecured.get("@context"),
        proof_obj["verificationMethod"],
        proof_obj["created"],
    )

    hash_data = _compute_hash_data(unsecured, proof_config, document_loader)

    try:
        signature_bytes = from_multibase(proof_obj["proofValue"])
        verify_key = VerifyKey(public_key)
        verify_key.verify(hash_data, signature_bytes)
        return True
    except (BadSignatureError, Exception):
        return False
