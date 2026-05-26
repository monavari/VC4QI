# SPDX-License-Identifier: Apache-2.0
from qi_vc_core.scope import check_derived_edge

from .fixture_helpers import codes, verify_fixture


def test_capability_exceeds_parent_scope_fails():
    trace = verify_fixture("calibration-capability", "failing-target-credential.json")
    assert trace["verified"] is False
    assert "DERIVATION_VIOLATION" in codes(trace)


def test_validity_window_violation():
    child = {"id": "urn:child", "validFrom": "2023-01-01T00:00:00Z", "credentialSubject": {}}
    parent = {"id": "urn:parent", "validFrom": "2024-01-01T00:00:00Z", "credentialSubject": {}}
    result = check_derived_edge(child, parent)
    assert result.passed is False
    assert "VALIDITY_WINDOW_VIOLATION" in [violation.code for violation in result.violations]
