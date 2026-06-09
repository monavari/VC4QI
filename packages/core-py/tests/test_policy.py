# SPDX-License-Identifier: Apache-2.0
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

from .fixture_helpers import codes, load_fixture, verify_fixture


def test_missing_required_evidence_fails():
    trace = verify_fixture("gs-scheme-authorization", "failing-target-credential.json")
    assert trace["verified"] is False
    assert "REQUIRED_EVIDENCE_MISSING" in codes(trace)


def test_legal_mandate_policy_allows_no_accreditation():
    trace = verify_fixture("nmi-legal-mandate")
    assert trace["verified"] is True


def test_operational_scope_without_derived_from_fails():
    target, policy, registry, documents = load_fixture("reference-material-recursive")
    documents["urn:uuid:operational-scope-001"]["evidence"] = []
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=lambda uri: documents[uri],
            resolve_trust_registry=lambda _issuer, _context=None: registry,
            skip_proof=True,
        ),
    )
    assert trace["verified"] is False
    assert "REQUIRED_EVIDENCE_MISSING" in codes(trace)
