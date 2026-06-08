# SPDX-License-Identifier: Apache-2.0
from qi_vc_core.evidence import build_evidence_graph

from .fixture_helpers import load_fixture


def test_multiple_evidence_entries_are_handled():
    target, policy, registry, documents = load_fixture("reference-material-recursive")
    graph, results = build_evidence_graph(
        target,
        fetch_document=lambda uri: documents[uri],
        require_digest=True,
    )
    assert len(graph.edges) > 2
    assert "DIGEST_VALID" in [result["code"] for result in results]


def test_cycle_detection_fails():
    target, policy, registry, documents = load_fixture("calibration-direct-accreditation")
    acc = documents["urn:uuid:accreditation-direct-001"]
    acc["evidence"] = [{
        "type": "CredentialEvidenceReference",
        "id": target["id"],
        "relation": "derivedFrom",
        "authorizationBasis": {"kind": "accreditation"},
    }]
    graph, results = build_evidence_graph(
        target,
        fetch_document=lambda uri: target if uri == target["id"] else documents[uri],
    )
    assert "CYCLE_DETECTED" in [result["code"] for result in results]


def test_max_depth_fails():
    target, policy, registry, documents = load_fixture("calibration-direct-accreditation")
    acc = documents["urn:uuid:accreditation-direct-001"]
    tail = {**acc, "id": "urn:uuid:depth-tail"}
    acc["evidence"] = [{
        "type": "CredentialEvidenceReference",
        "id": tail["id"],
        "relation": "derivedFrom",
        "authorizationBasis": {"kind": "accreditation"},
    }]
    documents[tail["id"]] = tail
    graph, results = build_evidence_graph(
        target,
        fetch_document=lambda uri: documents[uri],
        max_depth=1,
    )
    assert "MAX_DEPTH_EXCEEDED" in [result["code"] for result in results]
