# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/legacy-credential.test.ts (V02).

A credential in the v0.3 legacy format under a standards-first profile is unsupported,
with no fallback. The legacy verifier was removed in v0.4; tag v0.3.0 keeps it.
"""

from __future__ import annotations

import json
from pathlib import Path

from qi_vc_core.reliance.rm_v1_artifacts import evaluate_rm_slice

from .test_rm_v1_slice import MANIFEST, PROFILE, catalog_with, request

LEGACY_CREDENTIAL = (
    Path(__file__).resolve().parents[3]
    / "testdata"
    / "regressions"
    / "legacy-v0.3-credential.json"
)


def test_v02_legacy_credential_is_unsupported_without_fallback() -> None:
    text = LEGACY_CREDENTIAL.read_text()
    target_id = json.loads(text)["id"]
    result = evaluate_rm_slice(
        request(target_id=target_id, supplied_evidence=()),
        catalog_with({target_id: text}),
        MANIFEST,
        PROFILE,
    ).result
    carrier = next(t for t in result.trace if t.predicate == "carrier")
    assert (carrier.gate, carrier.state) == (0, "not_established")
    assert result.authorization[0].state == "not_established"
    assert result.decision == "not_established"
    assert "legacy-qi-vc" not in repr(result)
