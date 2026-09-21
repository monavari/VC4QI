# SPDX-License-Identifier: Apache-2.0
from copy import deepcopy
from typing import Any

from qi_vc_core.assessment import AssessmentRequest, AssessmentResult
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

from .fixture_helpers import (
    TEST_DOCUMENT_LOADER,
    codes,
    load_fixture,
    resolve_test_registry_key,
    verify_fixture,
)

SCHEMA = "https://schema.org/"


def _obj(value: Any) -> dict[str, Any]:
    return value if isinstance(value, dict) else {}


def _id(value: Any) -> str:
    return str(_obj(value).get("id", ""))


def gs_assessment_evaluator(request: AssessmentRequest) -> AssessmentResult:
    subject = _obj(request.credential.get("credentialSubject"))
    rating = _obj(subject.get(f"{SCHEMA}reviewRating"))
    is_inspection = "InspectionReport" in request.credential_types
    graph = request.evidence_graph
    target_subject = _obj(
        request.target_credential.get("credentialSubject")
        if request.target_credential
        else None
    )
    problems: list[str] = []
    if rating.get(f"{SCHEMA}ratingValue") != "pass":
        problems.append("report outcome is not pass")
    if graph is None:
        problems.append("resolved graph is missing")

    support_edge = next((
        edge
        for edge in graph.edges if graph is not None
        if edge.to == request.credential_id
        and edge.relation == "supportedBy"
        and "GSCertificate" in graph.nodes[edge.from_].types
    ), None) if graph is not None else None
    certificate = (
        graph.nodes[support_edge.from_].credential
        if graph is not None and support_edge is not None
        else {}
    )
    certificate_subject = _obj(certificate.get("credentialSubject"))
    certificate_product = _obj(certificate_subject.get(f"{SCHEMA}itemReviewed"))
    target_manufacturer = _id(target_subject.get(f"{SCHEMA}manufacturer"))
    if not certificate:
        problems.append("supporting GS certificate is missing")
    if (
        str(certificate_subject.get("id", "")) != target_manufacturer
        or _id(certificate_product.get(f"{SCHEMA}manufacturer"))
        != target_manufacturer
    ):
        problems.append("manufacturer binding does not match")

    if is_inspection:
        if _id(subject.get(f"{SCHEMA}itemReviewed")) != str(
            certificate_subject.get("id", "")
        ):
            problems.append("inspection manufacturer does not match")
    else:
        report_product = _obj(subject.get(f"{SCHEMA}itemReviewed"))
        if (
            str(report_product.get("id", ""))
            != str(certificate_product.get("id", ""))
            or _id(target_subject.get(f"{SCHEMA}isVariantOf"))
            != str(certificate_product.get("id", ""))
        ):
            problems.append("product-type binding does not match")
        report_issuer = str(request.credential.get("issuer", ""))
        certificate_issuer = str(certificate.get("issuer", ""))
        if report_issuer != certificate_issuer:
            if _id(report_product.get(f"{SCHEMA}manufacturer")) != target_manufacturer:
                problems.append("external report manufacturer does not match")
            if _id(subject.get(f"{SCHEMA}customer")) != certificate_issuer:
                problems.append("external report customer is not the GS body")
            scope_edge = next((
                edge for edge in graph.edges
                if edge.from_ == request.credential_id
                and edge.relation == "authorizedBy"
            ), None) if graph is not None else None
            scope = (
                graph.nodes[scope_edge.to].credential
                if graph is not None and scope_edge is not None
                else {}
            )
            if (
                str(scope.get("issuer", "")) != report_issuer
                or _id(scope.get("credentialSubject")) != report_issuer
            ):
                problems.append("independent laboratory scope does not match")
            accreditation_edge = next((
                edge for edge in graph.edges
                if scope_edge is not None
                and edge.from_ == scope_edge.to
                and edge.relation == "derivedFrom"
            ), None) if graph is not None else None
            accreditation = (
                graph.nodes[accreditation_edge.to].credential
                if graph is not None and accreditation_edge is not None
                else {}
            )
            if (
                "AccreditationCertificate" not in accreditation.get("type", [])
                or str(accreditation.get("issuer", "")) != "did:web:nab.example"
                or _id(accreditation.get("credentialSubject")) != report_issuer
            ):
                problems.append("laboratory NAB accreditation does not match")
            if (
                graph is not None
                and scope_edge is not None
                and any(
                    edge.from_ == scope_edge.to and edge.relation == "authorizedBy"
                    for edge in graph.edges
                )
            ):
                problems.append(
                    "laboratory scope incorrectly depends on GS-body authority"
                )

    passed = not problems
    return AssessmentResult(
        outcome="pass" if passed else "fail",
        method="human" if is_inspection else "agent",
        assessor_id=(
            "urn:example:person:factory-inspector-01"
            if is_inspection
            else "urn:example:agent:product-safety-reviewer-01"
        ),
        assessment_id=f"urn:example:assessment:{request.credential_id.split(':')[-1]}",
        detail=(
            f"{'Human' if is_inspection else 'Agent'} assessment bound "
            "the report to the GS graph."
            if passed
            else f"GS semantic assessment failed: {'; '.join(problems)}."
        ),
    )


def test_dcc_direct_accreditation_passes():
    trace = verify_fixture("calibration-direct-accreditation")
    assert trace["verified"] is True
    assert "SCOPE_INCLUSION_VALID" in codes(trace)


def test_dcc_capability_passes():
    trace = verify_fixture("calibration-capability")
    assert trace["verified"] is True
    assert "DERIVATION_VALID" in codes(trace)


def test_legal_mandate_passes_without_accreditation():
    trace = verify_fixture("nmi-legal-mandate")
    assert trace["verified"] is True
    assert "TRUSTED_ISSUER" in codes(trace)


def test_reference_material_supported_by_rm_study_passes():
    trace = verify_fixture("reference-material-recursive")
    assert trace["verified"] is True
    assert "SUPPORTING_EVIDENCE_RESOLVED" in codes(trace)


def test_test_report_supported_by_dcc_passes():
    trace = verify_fixture("test-report-supported-dcc")
    assert trace["verified"] is True
    assert "SUPPORTING_EVIDENCE_RESOLVED" in codes(trace)


def test_gs_missing_scheme_authorization_fails():
    trace = verify_fixture("gs-scheme-authorization", "failing-target-credential.json")
    assert trace["verified"] is False
    assert "REQUIRED_EVIDENCE_MISSING" in codes(trace)


def test_capability_exceeds_accreditation_scope_fails():
    trace = verify_fixture("calibration-capability", "failing-target-credential.json")
    assert trace["verified"] is False
    assert "DERIVATION_VIOLATION" in codes(trace)


# Profile D — GS certificate authorized jointly by an independent scheme
# authorization (kind: schemeAuthorization, no subset check) and a competence
# accreditation (kind: accreditation). Both authorizing edges must resolve and
# the required-evidence set must be satisfied. Keep TS<->Py parity.
def test_gs_profile_d_scheme_and_accreditation_edges_pass():
    trace = verify_fixture("gs-scheme-authorization")
    assert trace["verified"] is True
    assert "REQUIRED_EVIDENCE_PRESENT" in codes(trace)
    assert "TRUSTED_ISSUER" in codes(trace)


def test_gs_hair_dryer_manufacturer_qr_credential_passes() -> None:
    target, _policy, _registry, _documents = load_fixture("gs-hair-dryer-hitl")
    assert target["issuer"] == "did:web:nordlicht-appliances.example"
    assert "Product" in target["type"]
    assert target["credentialSubject"]["id"].endswith("HD01-2026-000042")

    trace = verify_fixture(
        "gs-hair-dryer-hitl",
        skip_proof=False,
        assessment_evaluator=gs_assessment_evaluator,
    )
    assert trace["verified"] is True
    assert trace["target"].endswith("HD01-2026-000042/gs-mark")
    assert "DERIVATION_VALID" in codes(trace)
    assert "SUPPORTING_EVIDENCE_RESOLVED" in codes(trace)
    assert codes(trace).count("PROOF_VALID") == 7
    assert codes(trace).count("SUBJECT_BOUND") == 5
    assessments = [
        result
        for result in trace["results"]
        if result["code"] == "ASSESSMENT_PASSED"
    ]
    assert len(assessments) == 2
    assert {result["assessmentMethod"] for result in assessments} == {"agent", "human"}


def test_gs_hair_dryer_required_assessment_fails_without_evaluator() -> None:
    trace = verify_fixture("gs-hair-dryer-hitl")
    assert trace["verified"] is False
    assert "ASSESSMENT_EVALUATOR_MISSING" in codes(trace)


def test_gs_hair_dryer_external_test_lab_passes() -> None:
    target, _policy, _registry, documents = load_fixture(
        "gs-hair-dryer-external-test-lab-hitl"
    )
    test_report = next(
        document
        for document in documents.values()
        if "TestReport" in document["type"]
    )
    assert target["issuer"] == "did:web:nordlicht-appliances.example"
    assert target["credentialSubject"]["id"].endswith("HD01-2026-000043")
    assert test_report["issuer"] == "did:web:hanseatic-product-testing.example"
    assert (
        test_report["credentialSubject"][f"{SCHEMA}customer"]["id"]
        == "did:web:gs-body.example"
    )
    lab_scope = documents[
        "urn:uuid:gs-hair-dryer-external-test-lab-test-lab-scope-001"
    ]
    assert lab_scope["issuer"] == "did:web:hanseatic-product-testing.example"
    assert lab_scope["credentialSubject"]["id"] == (
        "did:web:hanseatic-product-testing.example"
    )
    assert len(lab_scope["evidence"]) == 1
    assert lab_scope["evidence"][0]["relation"] == "derivedFrom"
    assert lab_scope["evidence"][0]["authorizationBasis"]["kind"] == "accreditation"

    trace = verify_fixture(
        "gs-hair-dryer-external-test-lab-hitl",
        skip_proof=False,
        assessment_evaluator=gs_assessment_evaluator,
    )
    assert trace["verified"] is True
    assert trace["summary"] == {
        "nodesResolved": 9,
        "edgesEvaluated": 9,
        "failures": 0,
        "warnings": 0,
    }
    assert codes(trace).count("PROOF_VALID") == 9
    assert codes(trace).count("DERIVATION_VALID") == 2
    assert codes(trace).count("ASSESSMENT_PASSED") == 2
    assert codes(trace).count("SUBJECT_BOUND") == 5
    assert any(
        result["code"] == "TRUSTED_ISSUER"
        and "did:web:hanseatic-product-testing.example" in result["detail"]
        for result in trace["results"]
    )


def test_gs_external_report_wrong_customer_fails_assessment() -> None:
    target, policy, registry, documents = load_fixture(
        "gs-hair-dryer-external-test-lab-hitl"
    )
    report_id, original_report = next(
        (credential_id, document)
        for credential_id, document in documents.items()
        if "TestReport" in document["type"]
    )
    report = deepcopy(original_report)
    report["credentialSubject"][f"{SCHEMA}customer"] = {
        "id": "did:web:nordlicht-appliances.example"
    }
    documents[report_id] = report

    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=lambda uri: documents[uri],
            resolve_trust_registry=lambda _issuer, _context=None: registry,
            resolve_key=resolve_test_registry_key,
            document_loader=TEST_DOCUMENT_LOADER,
            skip_proof=True,
            assessment_evaluator=gs_assessment_evaluator,
        ),
    )
    assert trace["verified"] is False
    assert "ASSESSMENT_FAILED" in codes(trace)
    assert any(
        result["code"] == "ASSESSMENT_FAILED"
        and "customer" in result["detail"]
        for result in trace["results"]
    )


def test_gs_hair_dryer_failing_variants_reject_digest_mismatch() -> None:
    for scenario, proof_count in (
        ("gs-hair-dryer-hitl", 7),
        ("gs-hair-dryer-external-test-lab-hitl", 9),
    ):
        trace = verify_fixture(
            scenario,
            "failing-target-credential.json",
            skip_proof=False,
            assessment_evaluator=gs_assessment_evaluator,
        )
        assert trace["verified"] is False
        assert trace["summary"]["failures"] == 1
        assert "DIGEST_MISMATCH" in codes(trace)
        assert "PROOF_INVALID" not in codes(trace)
        assert codes(trace).count("PROOF_VALID") == proof_count
