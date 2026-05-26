# SPDX-License-Identifier: Apache-2.0
from .fixture_helpers import codes, fixture_path, read_json, verify_fixture

FIXTURES = [
    "calibration-direct-accreditation",
    "calibration-capability",
    "ptb-legal-mandate",
    "reference-material-recursive",
    "gs-scheme-authorization",
    "test-report-supported-dcc",
]


def test_shared_fixtures_match_expected_trace_codes():
    for name in FIXTURES:
        trace = verify_fixture(name)
        expected = read_json(fixture_path(name, "expected-trace.json"))
        assert trace["verified"] is True
        for result in expected["results"]:
            assert result["code"] in codes(trace)
