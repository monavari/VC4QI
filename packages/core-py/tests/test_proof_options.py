# SPDX-License-Identifier: Apache-2.0
import json
from pathlib import Path
from typing import Any

import pytest
from nacl.signing import SigningKey
from qi_vc_core.proofs import create_proof, verify_proof
from qi_vc_core.types import Ed25519KeyPair
from qi_vc_core.utils.document_loader import build_document_loader

VECTOR_PATH = (
    Path(__file__).resolve().parents[3]
    / "testdata/regressions/proof-options.json"
)
VECTORS = json.loads(VECTOR_PATH.read_text())["vectors"]
LOADER = build_document_loader(strict=True)


@pytest.fixture(scope="module")
def secured() -> tuple[dict[str, Any], bytes]:
    private_key = bytes([0x42] * 32)
    public_key = bytes(SigningKey(private_key).verify_key)
    issuer = "https://vc4qi.example/proof-regression/issuer"
    credential = {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential"],
        "issuer": issuer,
        "credentialSubject": {
            "id": "https://vc4qi.example/proof-regression/subject",
        },
    }
    key = Ed25519KeyPair(
        id=f"{issuer}#key-1", controller=issuer,
        private_key=private_key, public_key=public_key,
    )
    proof = create_proof(
        credential, key, created="2026-01-01T00:00:00Z", document_loader=LOADER,
    )
    return {**credential, "proof": proof.to_json_object()}, public_key


@pytest.mark.parametrize("vector", VECTORS, ids=lambda v: v["id"])
def test_proof_options(
    secured: tuple[dict[str, Any], bytes], vector: dict[str, Any],
) -> None:
    signed, public_key = secured
    proof = {**signed["proof"], **vector["set"]}
    for key in vector["remove"]:
        del proof[key]
    assert verify_proof(
        {**signed, "proof": proof}, public_key, document_loader=LOADER,
    ) is vector["expected"]
