# SPDX-License-Identifier: Apache-2.0
from qi_vc_core.status import build_status_list_credential, create_bitstring, set_bit
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

from .fixture_helpers import codes, load_fixture, verify_fixture


def test_digest_sri_mismatch_fails():
    target, policy, registry, documents = load_fixture("calibration-direct-accreditation")
    target["evidence"][0]["digestSRI"] = "sha384-bad"
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(fetch_document=lambda uri: documents[uri], resolve_trust_registry=lambda _i, _c=None: registry, skip_proof=True),
    )
    assert trace["verified"] is False
    assert "DIGEST_MISMATCH" in codes(trace)


def test_digest_multibase_mismatch_fails():
    target, policy, registry, documents = load_fixture("calibration-direct-accreditation")
    target["evidence"][0].pop("digestSRI")
    target["evidence"][0]["digestMultibase"] = "zBadDigest"
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(fetch_document=lambda uri: documents[uri], resolve_trust_registry=lambda _i, _c=None: registry, skip_proof=True),
    )
    assert trace["verified"] is False
    assert "DIGEST_MISMATCH" in codes(trace)


def test_revoked_evidence_node_fails():
    target, policy, registry, documents = load_fixture("calibration-direct-accreditation")
    list_id = "urn:uuid:revoked-list"
    documents["urn:uuid:accreditation-direct-001"]["credentialStatus"] = {
        "id": f"{list_id}#0",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListIndex": "0",
        "statusListCredential": list_id,
    }
    bits = create_bitstring()
    set_bit(bits, 0, True)
    status_list = build_status_list_credential("did:web:status.example", list_id, bits)
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=lambda uri: documents[uri],
            resolve_status_list=lambda _uri: status_list,
            resolve_trust_registry=lambda _i, _c=None: registry,
            skip_proof=True,
        ),
    )
    assert trace["verified"] is False
    assert "CREDENTIAL_REVOKED" in codes(trace)


def test_suspended_authorizing_evidence_fails():
    target, policy, registry, documents = load_fixture("calibration-capability")
    list_id = "urn:uuid:suspended-list"
    documents["urn:uuid:capability-001"]["credentialStatus"] = {
        "id": f"{list_id}#0",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "suspension",
        "statusListIndex": "0",
        "statusListCredential": list_id,
    }
    bits = create_bitstring()
    set_bit(bits, 0, True)
    status_list = build_status_list_credential("did:web:status.example", list_id, bits)
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=lambda uri: documents[uri],
            resolve_status_list=lambda _uri: status_list,
            resolve_trust_registry=lambda _i, _c=None: registry,
            skip_proof=True,
        ),
    )
    assert trace["verified"] is False
    assert "CREDENTIAL_SUSPENDED" in codes(trace)


def test_gs_independent_scheme_authorization_passes():
    assert verify_fixture("gs-scheme-authorization")["verified"] is True
