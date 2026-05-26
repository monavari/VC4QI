# SPDX-License-Identifier: Apache-2.0
import pytest
from qi_vc_core.trust_registry import (
    parse_trust_registry_credential,
    is_trusted_issuer,
    clear_registry_cache,
)
from datetime import datetime, timezone


def make_registry_credential(entries: list[dict]) -> dict:
    return {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "TrustRegistryCredential"],
        "id": "https://root.example.com/trust-registry",
        "issuer": "did:web:root.example.com",
        "credentialSubject": {
            "id": "https://root.example.com/trust-registry#list",
            "registryEntries": entries,
        },
    }


def test_parse_basic():
    cred = make_registry_credential([
        {"id": "did:web:lab.example.com", "name": "Test Lab"},
    ])
    registry = parse_trust_registry_credential(cred)
    assert registry.id == "https://root.example.com/trust-registry"
    assert registry.issuer == "did:web:root.example.com"
    assert len(registry.entries) == 1
    assert registry.entries[0].id == "did:web:lab.example.com"
    assert registry.entries[0].name == "Test Lab"


def test_parse_missing_subject():
    with pytest.raises(ValueError, match="missing credentialSubject"):
        parse_trust_registry_credential({"id": "x"})


def test_is_trusted_active():
    cred = make_registry_credential([
        {"id": "did:web:lab.example.com", "validFrom": "2020-01-01T00:00:00Z"},
    ])
    registry = parse_trust_registry_credential(cred)
    assert is_trusted_issuer(registry, "did:web:lab.example.com")


def test_is_trusted_with_valid_until_future():
    cred = make_registry_credential([
        {
            "id": "did:web:lab.example.com",
            "validFrom": "2020-01-01T00:00:00Z",
            "validUntil": "2099-01-01T00:00:00Z",
        },
    ])
    registry = parse_trust_registry_credential(cred)
    assert is_trusted_issuer(registry, "did:web:lab.example.com")


def test_is_trusted_expired():
    cred = make_registry_credential([
        {
            "id": "did:web:lab.example.com",
            "validFrom": "2020-01-01T00:00:00Z",
            "validUntil": "2021-01-01T00:00:00Z",
        },
    ])
    registry = parse_trust_registry_credential(cred)
    assert not is_trusted_issuer(registry, "did:web:lab.example.com")


def test_is_trusted_not_yet_valid():
    cred = make_registry_credential([
        {"id": "did:web:lab.example.com", "validFrom": "2099-01-01T00:00:00Z"},
    ])
    registry = parse_trust_registry_credential(cred)
    assert not is_trusted_issuer(registry, "did:web:lab.example.com")


def test_is_trusted_unknown_did():
    cred = make_registry_credential([
        {"id": "did:web:known.example.com"},
    ])
    registry = parse_trust_registry_credential(cred)
    assert not is_trusted_issuer(registry, "did:web:unknown.example.com")


def test_is_trusted_basis_aware():
    cred = make_registry_credential([
        {
            "id": "did:web:ptb.example",
            "issuerRole": "qi:nationalMetrologyInstitute",
            "authorizationBasisKinds": ["qi:legalMandate"],
        }
    ])
    registry = parse_trust_registry_credential(cred)
    assert is_trusted_issuer(
        registry,
        "did:web:ptb.example",
        "qi:legalMandate",
        "qi:nationalMetrologyInstitute",
    )
    assert not is_trusted_issuer(
        registry,
        "did:web:ptb.example",
        "qi:accreditation",
        "qi:nationalAccreditationBody",
    )


def test_clear_cache():
    clear_registry_cache()  # just must not raise
