# SPDX-License-Identifier: Apache-2.0
import pytest
from qi_vc_core.canonicalize import compute_hash_binding
from qi_vc_core.status import create_bitstring, set_bit, build_status_list_credential
from qi_vc_core.trust_registry import clear_registry_cache
from qi_vc_core.verifier import verify, VerifyOptions

ROOT_DID = "did:web:root.example.com"
ACC_DID = "did:web:accreditor.example.com"
CAB_DID = "did:web:lab.example.com"


def make_accreditation(overrides: dict | None = None) -> dict:
    base = {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "AccreditationCredential"],
        "id": "https://root.example.com/acc/001",
        "issuer": ACC_DID,
        "validFrom": "2024-01-01T00:00:00Z",
        "validUntil": "2028-01-01T00:00:00Z",
        "credentialSubject": {
            "id": CAB_DID,
            "scope": {"authorizedCredentialTypes": ["DigitalCalibrationCertificate"]},
        },
    }
    if overrides:
        base.update(overrides)
    return base


def make_capability(acc_hash: str, overrides: dict | None = None) -> dict:
    base = {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "CapabilityCredential"],
        "id": "https://accreditor.example.com/cap/001",
        "issuer": ACC_DID,
        "validFrom": "2024-06-01T00:00:00Z",
        "validUntil": "2027-06-01T00:00:00Z",
        "credentialSubject": {
            "id": CAB_DID,
            "scope": {"authorizedCredentialTypes": ["DigitalCalibrationCertificate"]},
        },
        "evidence": [
            {
                "id": "https://root.example.com/acc/001",
                "type": "CapabilityCredentialReference",
                "hashBinding": {"digestAlgorithm": "sha-256", "digestMultibase": acc_hash},
            }
        ],
    }
    if overrides:
        base.update(overrides)
    return base


def make_domain(cap_hash: str, overrides: dict | None = None) -> dict:
    base = {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "DigitalCalibrationCertificate"],
        "id": "urn:uuid:dcc-001",
        "issuer": CAB_DID,
        "validFrom": "2025-01-01T00:00:00Z",
        "credentialSubject": {"id": "urn:item:pressure-001"},
        "evidence": [
            {
                "id": "https://accreditor.example.com/cap/001",
                "type": "CapabilityCredentialReference",
                "hashBinding": {"digestAlgorithm": "sha-256", "digestMultibase": cap_hash},
            }
        ],
        "proof": {
            "type": "DataIntegrityProof",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "verificationMethod": f"{CAB_DID}#key-1",
            "created": "2025-01-01T00:00:00Z",
            "proofValue": "zDUMMY",
        },
    }
    if overrides:
        base.update(overrides)
    return base


def make_trust_registry(entries: list[dict]) -> dict:
    return {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "TrustRegistryCredential"],
        "id": "https://root.example.com/trust-registry",
        "issuer": ROOT_DID,
        "credentialSubject": {
            "id": "https://root.example.com/trust-registry#list",
            "registryEntries": entries,
        },
    }


@pytest.fixture(autouse=True)
def clear_cache():
    clear_registry_cache()
    yield
    clear_registry_cache()


def build_chain():
    acc = make_accreditation()
    acc_hash = compute_hash_binding(acc)
    cap = make_capability(acc_hash)
    cap_hash = compute_hash_binding(cap)
    domain = make_domain(cap_hash)
    return domain, cap, acc


def make_opts(domain, cap, acc) -> VerifyOptions:
    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store: dict[str, dict] = {
        str(cap["id"]): cap,
        str(acc["id"]): acc,
    }

    def fetch(uri: str) -> dict:
        if uri not in doc_store:
            raise KeyError(f"Unknown URI: {uri}")
        return doc_store[uri]

    return VerifyOptions(
        fetch_document=fetch,
        resolve_trust_registry=lambda _did: trust_registry,
        skip_rules={4},  # skip status check (no live status list in unit tests)
    )


# ── Happy path ─────────────────────────────────────────────────────────────

def test_verify_all_rules_pass():
    domain, cap, acc = build_chain()
    opts = make_opts(domain, cap, acc)
    result = verify(domain, opts)
    fails = [r for r in result.results if r.status == "FAIL"]
    assert fails == [], f"Unexpected failures: {fails}"
    assert result.verified is True


# ── Rule 1 ─────────────────────────────────────────────────────────────────

def test_rule1_fail_issuer_mismatch():
    domain, cap, acc = build_chain()
    domain = make_domain(compute_hash_binding(cap), {"issuer": "did:web:wrong.example.com"})
    opts = make_opts(domain, cap, acc)
    result = verify(domain, opts)
    rule1 = next(r for r in result.results if r.rule == 1)
    assert rule1.status == "FAIL"
    assert result.verified is False


def test_rule1_fail_missing_evidence():
    domain, cap, acc = build_chain()
    no_evidence = {k: v for k, v in domain.items() if k != "evidence"}
    opts = make_opts(domain, cap, acc)
    result = verify(no_evidence, opts)
    assert result.verified is False
    assert "evidence" in result.results[0].detail.lower() or result.error is not None


# ── Rule 3 ─────────────────────────────────────────────────────────────────

def test_rule3_fail_domain_before_capability():
    acc = make_accreditation()
    acc_hash = compute_hash_binding(acc)
    cap = make_capability(acc_hash, {"validFrom": "2026-01-01T00:00:00Z"})
    cap_hash = compute_hash_binding(cap)
    domain = make_domain(cap_hash, {"validFrom": "2025-01-01T00:00:00Z"})

    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store = {str(cap["id"]): cap, str(acc["id"]): acc}
    opts = VerifyOptions(
        fetch_document=lambda uri: doc_store[uri],
        resolve_trust_registry=lambda _: trust_registry,
        skip_rules={4},
    )
    result = verify(domain, opts)
    rule3 = next(r for r in result.results if r.rule == 3)
    assert rule3.status == "FAIL"


def test_rule3_pass_consistent_windows():
    domain, cap, acc = build_chain()
    opts = make_opts(domain, cap, acc)
    result = verify(domain, opts)
    rule3 = next(r for r in result.results if r.rule == 3)
    assert rule3.status == "PASS"


# ── Rule 4 ─────────────────────────────────────────────────────────────────

def test_rule4_skip_when_no_status_entry():
    domain, cap, acc = build_chain()
    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store = {str(cap["id"]): cap, str(acc["id"]): acc}
    opts = VerifyOptions(
        fetch_document=lambda uri: doc_store[uri],
        resolve_trust_registry=lambda _: trust_registry,
    )
    result = verify(domain, opts)
    rule4 = next((r for r in result.results if r.rule == 4), None)
    assert rule4 is not None
    assert rule4.status == "SKIP"


def test_rule4_fail_revoked():
    bits = create_bitstring(256)
    set_bit(bits, 0, True)
    list_id = "https://issuer.example.com/status/1"
    status_list_cred = build_status_list_credential(CAB_DID, list_id, bits)

    acc = make_accreditation()
    acc_hash = compute_hash_binding(acc)
    cap = make_capability(acc_hash)
    cap_hash = compute_hash_binding(cap)
    domain = make_domain(cap_hash, {
        "credentialStatus": {
            "id": f"{list_id}#0",
            "type": "BitstringStatusListEntry",
            "statusPurpose": "revocation",
            "statusListIndex": "0",
            "statusListCredential": list_id,
        }
    })

    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store = {
        str(cap["id"]): cap,
        str(acc["id"]): acc,
        list_id: status_list_cred,
    }
    opts = VerifyOptions(
        fetch_document=lambda uri: doc_store[uri],
        resolve_trust_registry=lambda _: trust_registry,
    )
    result = verify(domain, opts)
    rule4_results = [r for r in result.results if r.rule == 4]
    assert any(r.status == "FAIL" for r in rule4_results)
    assert result.verified is False


# ── Rule 5 ─────────────────────────────────────────────────────────────────

def test_rule5_fail_hash_mismatch():
    acc = make_accreditation()
    acc_hash = compute_hash_binding(acc)
    cap = make_capability(acc_hash)
    cap_hash = compute_hash_binding(cap)
    # Corrupt the hash stored in domain evidence
    domain = make_domain("zBADHASH")

    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store = {str(cap["id"]): cap, str(acc["id"]): acc}
    opts = VerifyOptions(
        fetch_document=lambda uri: doc_store[uri],
        resolve_trust_registry=lambda _: trust_registry,
        skip_rules={4},
    )
    result = verify(domain, opts)
    rule5 = next(r for r in result.results if r.rule == 5)
    assert rule5.status == "FAIL"


# ── Rule 6 ─────────────────────────────────────────────────────────────────

def test_rule6_fail_type_not_in_scope():
    acc = make_accreditation()
    acc_hash = compute_hash_binding(acc)
    cap = make_capability(acc_hash)
    cap_hash = compute_hash_binding(cap)
    domain = make_domain(cap_hash, {"type": ["VerifiableCredential", "SomeOtherCredential"]})

    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store = {str(cap["id"]): cap, str(acc["id"]): acc}
    opts = VerifyOptions(
        fetch_document=lambda uri: doc_store[uri],
        resolve_trust_registry=lambda _: trust_registry,
        skip_rules={4},
    )
    result = verify(domain, opts)
    rule6 = next(r for r in result.results if r.rule == 6)
    assert rule6.status == "FAIL"


def test_rule6_skip_no_scope():
    acc = make_accreditation({"credentialSubject": {"id": CAB_DID}})
    acc_hash = compute_hash_binding(acc)
    cap_no_scope = make_capability(acc_hash)
    cap_no_scope["credentialSubject"] = {"id": CAB_DID}  # no scope
    cap_hash = compute_hash_binding(cap_no_scope)
    domain = make_domain(cap_hash)

    trust_registry = make_trust_registry([{"id": ACC_DID}])
    doc_store = {str(cap_no_scope["id"]): cap_no_scope, str(acc["id"]): acc}
    opts = VerifyOptions(
        fetch_document=lambda uri: doc_store[uri],
        resolve_trust_registry=lambda _: trust_registry,
        skip_rules={4},
    )
    result = verify(domain, opts)
    rule6 = next((r for r in result.results if r.rule == 6), None)
    assert rule6 is not None
    assert rule6.status == "SKIP"
