# SPDX-License-Identifier: Apache-2.0
import pytest

from .fixture_helpers import codes, verify_fixture


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
