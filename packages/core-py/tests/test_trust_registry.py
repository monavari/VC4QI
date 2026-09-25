# SPDX-License-Identifier: Apache-2.0
# Mirrors packages/core-ts/tests/trust-registry.test.ts.
#
# SEC-1: no trust decision on an unverified document. Each negative vector
# asserts the registry is rejected with a code naming the specific condition
# (SEC-8), never silently accepted or downgraded to a warning.
import pytest
from nacl.signing import SigningKey
from qi_vc_core.proofs import create_proof
from qi_vc_core.trust_registry import (
    TrustRegistryVerificationError,
    clear_registry_cache,
    is_trusted_issuer,
    resolve_trust_registry,
    verify_trust_registry_credential,
)
from qi_vc_core.types import Ed25519KeyPair
from qi_vc_core.utils.document_loader import build_document_loader

SEED = bytes([0x42] * 32)
ISSUER_DID = "did:web:root.example.com"
ENTRY_DID = "did:web:lab.example.com"

KEY_PAIR = Ed25519KeyPair(
    id=f"{ISSUER_DID}#key-1",
    controller=ISSUER_DID,
    private_key=SEED,
    public_key=bytes(SigningKey(SEED).verify_key),
)

# Resolves qi-core and the vendored W3C contexts from disk, so canonicalization
# is deterministic and offline.
DOCUMENT_LOADER = build_document_loader()


def resolve_key(_verification_method: str) -> bytes:
    return KEY_PAIR.public_key


def unsigned_registry(entries: list[dict]) -> dict:
    # qi-core must be in scope or URDNA2015 silently drops registryEntries and
    # the proof would not cover the entries at all.
    return {
        "@context": [
            "https://www.w3.org/ns/credentials/v2",
            "https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld",
        ],
        "type": ["VerifiableCredential", "TrustRegistryCredential"],
        "id": "https://root.example.com/trust-registry",
        "issuer": ISSUER_DID,
        "credentialSubject": {
            "id": "https://root.example.com/trust-registry#list",
            "registryEntries": entries,
        },
    }


def signed_registry(entries: list[dict]) -> dict:
    document = unsigned_registry(entries)
    proof = create_proof(
        document,
        KEY_PAIR,
        created="2025-01-01T00:00:00Z",
        document_loader=DOCUMENT_LOADER,
    )
    return {**document, "proof": proof.to_json_object()}


def verified_registry(entries: list[dict]):
    return verify_trust_registry_credential(
        signed_registry(entries),
        resolve_key=resolve_key,
        document_loader=DOCUMENT_LOADER,
    )


# --------------------------------------------------------------------------
# SEC-1 negative vectors
# --------------------------------------------------------------------------


def test_verifies_signed_registry_and_reports_provenance():
    registry = verified_registry([{"id": ENTRY_DID, "name": "Test Lab"}])

    assert registry.id == "https://root.example.com/trust-registry"
    assert len(registry.entries) == 1
    assert registry.entries[0].id == ENTRY_DID
    # DOC-1: the trace must be able to say which registry and which key.
    assert registry.registry_issuer == ISSUER_DID
    assert registry.verification_method == f"{ISSUER_DID}#key-1"
    assert len(registry.content_digest) == 64


def test_rejects_tampered_entries():
    document = signed_registry([{"id": ENTRY_DID}])
    # The exact attack SEC-1 exists to stop.
    document["credentialSubject"]["registryEntries"] = [
        {"id": "did:web:attacker.example.com"}
    ]

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            document, resolve_key=resolve_key, document_loader=DOCUMENT_LOADER
        )
    assert excinfo.value.code == "TRUST_REGISTRY_PROOF_INVALID"


def test_rejects_registry_with_no_proof():
    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            unsigned_registry([{"id": ENTRY_DID}]),
            resolve_key=resolve_key,
            document_loader=DOCUMENT_LOADER,
        )
    assert excinfo.value.code == "TRUST_REGISTRY_PROOF_MISSING"


def test_rejects_unrecognized_cryptosuite():
    document = signed_registry([{"id": ENTRY_DID}])
    document["proof"]["cryptosuite"] = "made-up-2024"

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            document, resolve_key=resolve_key, document_loader=DOCUMENT_LOADER
        )
    assert excinfo.value.code == "TRUST_REGISTRY_SUITE_UNSUPPORTED"


def test_distinguishes_not_performed_from_failed():
    document = signed_registry([{"id": ENTRY_DID}])

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(document, document_loader=DOCUMENT_LOADER)
    assert excinfo.value.code == "TRUST_REGISTRY_KEY_RESOLVER_MISSING"


def test_rejects_wrong_key():
    document = signed_registry([{"id": ENTRY_DID}])
    other = bytes(SigningKey(bytes([0x07] * 32)).verify_key)

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            document, resolve_key=lambda _vm: other, document_loader=DOCUMENT_LOADER
        )
    assert excinfo.value.code == "TRUST_REGISTRY_PROOF_INVALID"


def test_rejects_verified_but_malformed_registry():
    document = {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "TrustRegistryCredential"],
        "id": "urn:uuid:no-subject",
        "issuer": ISSUER_DID,
    }
    proof = create_proof(
        document,
        KEY_PAIR,
        created="2025-01-01T00:00:00Z",
        document_loader=DOCUMENT_LOADER,
    )

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            {**document, "proof": proof.to_json_object()},
            resolve_key=resolve_key,
            document_loader=DOCUMENT_LOADER,
        )
    assert excinfo.value.code == "TRUST_REGISTRY_MALFORMED"


def test_is_trusted_issuer_refuses_an_unverified_registry():
    """SEC-1 enforced at the call boundary, mirroring the TS branded type."""
    from qi_vc_core.trust_registry import TrustRegistry

    unverified = TrustRegistry(id="x", issuer=ISSUER_DID, entries=[])
    with pytest.raises(TypeError, match="VerifiedTrustRegistry"):
        is_trusted_issuer(unverified, ENTRY_DID)  # type: ignore[arg-type]


# --------------------------------------------------------------------------
# Signature coverage. Each field below feeds is_trusted_issuer(), so each must
# be inside the signature. Before qi-core's scoped registry-entry terms
# existed, every one of these tampers was silently accepted.
# --------------------------------------------------------------------------

BASE_ENTRY = {
    "id": ENTRY_DID,
    "issuerRole": "nationalAccreditationBody",
    "authorizationBasisKinds": ["accreditation"],
    "credentialTypes": ["AccreditationAttestation"],
    "validFrom": "2024-01-01T00:00:00Z",
    "validUntil": "2030-01-01T00:00:00Z",
    "status": "active",
}


@pytest.mark.parametrize(
    "label,mutate",
    [
        ("entry id", lambda e: e.update(id="did:web:attacker.example.com")),
        ("status revoked -> active", lambda e: e.update(status="revoked")),
        (
            "authorizationBasisKinds",
            lambda e: e.update(authorizationBasisKinds=["legalMandate"]),
        ),
        ("credentialTypes", lambda e: e.update(credentialTypes=["AnythingGoes"])),
        ("validUntil", lambda e: e.update(validUntil="2099-01-01T00:00:00Z")),
        ("validFrom", lambda e: e.update(validFrom="1999-01-01T00:00:00Z")),
        ("issuerRole", lambda e: e.update(issuerRole="nationalMetrologyInstitute")),
    ],
)
def test_proof_covers_every_decision_field(label, mutate):
    document = signed_registry([dict(BASE_ENTRY)])
    mutate(document["credentialSubject"]["registryEntries"][0])

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            document, resolve_key=resolve_key, document_loader=DOCUMENT_LOADER
        )
    assert excinfo.value.code == "TRUST_REGISTRY_PROOF_INVALID", label


def test_proof_covers_appended_entry():
    document = signed_registry([dict(BASE_ENTRY)])
    document["credentialSubject"]["registryEntries"].append(
        {"id": "did:web:attacker.example.com", "status": "active"}
    )

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        verify_trust_registry_credential(
            document, resolve_key=resolve_key, document_loader=DOCUMENT_LOADER
        )
    assert excinfo.value.code == "TRUST_REGISTRY_PROOF_INVALID"


# --------------------------------------------------------------------------
# is_trusted_issuer over a verified registry
# --------------------------------------------------------------------------


def test_is_trusted_active():
    registry = verified_registry(
        [{"id": ENTRY_DID, "validFrom": "2020-01-01T00:00:00Z"}]
    )
    assert is_trusted_issuer(registry, ENTRY_DID)


def test_is_trusted_with_valid_until_future():
    registry = verified_registry([{
        "id": ENTRY_DID,
        "validFrom": "2020-01-01T00:00:00Z",
        "validUntil": "2099-01-01T00:00:00Z",
    }])
    assert is_trusted_issuer(registry, ENTRY_DID)


def test_is_trusted_expired():
    registry = verified_registry([{
        "id": ENTRY_DID,
        "validFrom": "2020-01-01T00:00:00Z",
        "validUntil": "2021-01-01T00:00:00Z",
    }])
    assert not is_trusted_issuer(registry, ENTRY_DID)


def test_is_trusted_not_yet_valid():
    registry = verified_registry(
        [{"id": ENTRY_DID, "validFrom": "2099-01-01T00:00:00Z"}]
    )
    assert not is_trusted_issuer(registry, ENTRY_DID)


def test_is_trusted_unknown_did():
    registry = verified_registry([{"id": "did:web:known.example.com"}])
    assert not is_trusted_issuer(registry, "did:web:unknown.example.com")


def test_is_trusted_basis_aware():
    registry = verified_registry([{
        "id": "did:web:nmi.example",
        "issuerRole": "nationalMetrologyInstitute",
        "authorizationBasisKinds": ["legalMandate"],
    }])
    assert is_trusted_issuer(
        registry, "did:web:nmi.example", "legalMandate", "nationalMetrologyInstitute"
    )
    assert not is_trusted_issuer(
        registry, "did:web:nmi.example", "accreditation", "nationalAccreditationBody"
    )


# --------------------------------------------------------------------------
# resolve_trust_registry
# --------------------------------------------------------------------------


def test_resolve_reports_fetch_failure_distinctly():
    clear_registry_cache()

    def fetch_fn(_url: str) -> dict:
        raise RuntimeError("network down")

    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        resolve_trust_registry(
            "https://example.com/gone", fetch_fn=fetch_fn, resolve_key=resolve_key
        )
    assert excinfo.value.code == "TRUST_REGISTRY_FETCH_FAILED"


def test_resolve_caches_on_verified_content():
    clear_registry_cache()
    cred = signed_registry([{"id": ENTRY_DID}])
    calls = {"n": 0}

    def fetch_fn(_url: str) -> dict:
        calls["n"] += 1
        return cred

    first = resolve_trust_registry(
        "https://example.com/trust",
        fetch_fn=fetch_fn,
        resolve_key=resolve_key,
        proof_document_loader=DOCUMENT_LOADER,
    )
    second = resolve_trust_registry(
        "https://example.com/trust",
        fetch_fn=fetch_fn,
        resolve_key=resolve_key,
        proof_document_loader=DOCUMENT_LOADER,
    )

    # The fetch still happens; the cache spares the re-verification.
    assert calls["n"] == 2
    assert second.content_digest == first.content_digest
    assert second.verified_at == first.verified_at


def test_resolve_does_not_let_substituted_document_inherit_cache_hit():
    """SEC-6: the cache keys on verified content, not on the URL."""
    clear_registry_cache()
    good = signed_registry([{"id": ENTRY_DID}])
    substituted = signed_registry([{"id": ENTRY_DID}])
    substituted["credentialSubject"]["registryEntries"] = [
        {"id": "did:web:attacker.example.com"}
    ]
    state = {"doc": good}

    def fetch_fn(_url: str) -> dict:
        return state["doc"]

    url = "https://example.com/trust-swap"
    first = resolve_trust_registry(
        url,
        fetch_fn=fetch_fn,
        resolve_key=resolve_key,
        proof_document_loader=DOCUMENT_LOADER,
    )
    assert first.entries[0].id == ENTRY_DID

    state["doc"] = substituted
    with pytest.raises(TrustRegistryVerificationError) as excinfo:
        resolve_trust_registry(
            url,
        fetch_fn=fetch_fn,
        resolve_key=resolve_key,
        proof_document_loader=DOCUMENT_LOADER,
        )
    assert excinfo.value.code == "TRUST_REGISTRY_PROOF_INVALID"


def test_clear_cache():
    clear_registry_cache()  # just must not raise
