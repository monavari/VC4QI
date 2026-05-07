# SPDX-License-Identifier: Apache-2.0
import pytest
from nacl.signing import SigningKey
from qi_vc_core.proofs import create_proof, verify_proof
from qi_vc_core.types import Ed25519KeyPair


def make_key_pair() -> Ed25519KeyPair:
    seed = bytes([0x42] * 32)
    sk = SigningKey(seed)
    return Ed25519KeyPair(
        id="did:web:test.example.com#key-1",
        controller="did:web:test.example.com",
        private_key=seed,
        public_key=bytes(sk.verify_key),
    )


CREDENTIAL = {
    "@context": ["https://www.w3.org/ns/credentials/v2"],
    "type": ["VerifiableCredential"],
    "id": "urn:uuid:test-cred-001",
    "issuer": "did:web:test.example.com",
    "validFrom": "2025-01-01T00:00:00Z",
    "credentialSubject": {"id": "did:web:subject.example.com", "foo": "bar"},
}


def test_create_proof_structure():
    kp = make_key_pair()
    proof = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    assert proof.type == "DataIntegrityProof"
    assert proof.cryptosuite == "eddsa-rdfc-2022"
    assert proof.proof_purpose == "assertionMethod"
    assert proof.verification_method == kp.id
    assert proof.proof_value.startswith("z")


def test_create_proof_uses_provided_created():
    kp = make_key_pair()
    proof = create_proof(CREDENTIAL, kp, created="2025-06-15T12:00:00Z")
    assert proof.created == "2025-06-15T12:00:00Z"


def test_create_proof_defaults_created_to_now():
    from datetime import datetime, timezone
    kp = make_key_pair()
    before = datetime.now(timezone.utc)
    proof = create_proof(CREDENTIAL, kp)
    after = datetime.now(timezone.utc)
    created = datetime.fromisoformat(proof.created)
    assert before <= created <= after


def test_create_proof_deterministic():
    kp = make_key_pair()
    p1 = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    p2 = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    assert p1.proof_value == p2.proof_value


def test_verify_proof_valid():
    kp = make_key_pair()
    proof = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    signed = {**CREDENTIAL, "proof": proof.to_json_object()}
    assert verify_proof(signed, kp.public_key) is True


def test_verify_proof_tampered_credential():
    kp = make_key_pair()
    proof = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    signed = {**CREDENTIAL, "issuer": "did:web:evil.example.com", "proof": proof.to_json_object()}
    assert verify_proof(signed, kp.public_key) is False


def test_verify_proof_tampered_proof_value():
    kp = make_key_pair()
    proof = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    bad_proof = {**proof.to_json_object(), "proofValue": "zABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789ABCDEFGHJKMNPQRST"}
    signed = {**CREDENTIAL, "proof": bad_proof}
    assert verify_proof(signed, kp.public_key) is False


def test_verify_proof_no_proof():
    kp = make_key_pair()
    with pytest.raises(ValueError, match="No proof"):
        verify_proof(CREDENTIAL, kp.public_key)


def test_verify_proof_unsupported_cryptosuite():
    kp = make_key_pair()
    signed = {**CREDENTIAL, "proof": {"type": "DataIntegrityProof", "cryptosuite": "unsupported", "proofValue": "z123"}}
    with pytest.raises(ValueError, match="Unsupported cryptosuite"):
        verify_proof(signed, kp.public_key)


def test_verify_proof_wrong_public_key():
    kp = make_key_pair()
    proof = create_proof(CREDENTIAL, kp, created="2025-01-01T00:00:00Z")
    signed = {**CREDENTIAL, "proof": proof.to_json_object()}
    wrong_key = bytes(SigningKey(bytes([0x99] * 32)).verify_key)
    assert verify_proof(signed, wrong_key) is False
