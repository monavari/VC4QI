# SPDX-License-Identifier: Apache-2.0
# Cross-language interop: a credential signed by the Python library must verify
# correctly, and a credential produced by the TypeScript library must also verify.
#
# The TS-produced fixture was generated with:
#   pnpm -C packages/core-ts exec tsx scripts/gen-interop-fixture.ts
# and stored at tests/fixtures/ts_signed_credential.json.
# If the fixture file doesn't exist the TS interop test is skipped.
import json
import pytest
from pathlib import Path
from nacl.signing import SigningKey

from qi_vc_core.types import Ed25519KeyPair
from qi_vc_core.issuer import issue
from qi_vc_core.proofs import verify_proof

FIXTURES_DIR = Path(__file__).parent / "fixtures"

SEED = bytes([0x42] * 32)


def make_key_pair() -> Ed25519KeyPair:
    sk = SigningKey(SEED)
    return Ed25519KeyPair(
        id="did:web:test.example.com#key-1",
        controller="did:web:test.example.com",
        private_key=SEED,
        public_key=bytes(sk.verify_key),
    )


CREDENTIAL = {
    "@context": ["https://www.w3.org/ns/credentials/v2"],
    "type": ["VerifiableCredential"],
    "id": "urn:uuid:interop-test-001",
    "issuer": "did:web:test.example.com",
    "validFrom": "2025-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "did:web:subject.example.com",
        "measurement": {"value": 9.81, "unit": "m/s²"},
    },
}


def test_python_sign_and_verify():
    """Python-issued credential verifies with Python verifier."""
    kp = make_key_pair()
    signed = issue(CREDENTIAL, kp, skip_validation=True, created="2025-01-01T00:00:00Z")
    assert "proof" in signed
    assert verify_proof(signed, kp.public_key) is True


def test_python_sign_deterministic():
    """Signing the same credential twice produces identical proofValues."""
    kp = make_key_pair()
    s1 = issue(CREDENTIAL, kp, skip_validation=True, created="2025-01-01T00:00:00Z")
    s2 = issue(CREDENTIAL, kp, skip_validation=True, created="2025-01-01T00:00:00Z")
    assert s1["proof"]["proofValue"] == s2["proof"]["proofValue"]


def test_python_tampered_credential_fails():
    """Modifying the credential body after signing breaks verification."""
    kp = make_key_pair()
    signed = issue(CREDENTIAL, kp, skip_validation=True, created="2025-01-01T00:00:00Z")
    tampered = {**signed, "issuer": "did:web:evil.example.com"}
    assert verify_proof(tampered, kp.public_key) is False


@pytest.mark.skipif(
    not (FIXTURES_DIR / "ts_signed_credential.json").exists(),
    reason="TS interop fixture not present — run scripts/gen-interop-fixture.ts first",
)
def test_ts_signed_credential_verifies_in_python():
    """A credential signed by the TypeScript library verifies in Python."""
    fixture_path = FIXTURES_DIR / "ts_signed_credential.json"
    data = json.loads(fixture_path.read_text())

    signed_credential: dict = data["signedCredential"]
    public_key_hex: str = data["publicKeyHex"]
    public_key = bytes.fromhex(public_key_hex)

    result = verify_proof(signed_credential, public_key)
    assert result is True, "TS-produced credential failed Python verification"
