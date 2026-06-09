# SPDX-License-Identifier: Apache-2.0
# Selective-disclosure (G2 / Phase 6) cross-language parity for the DIGITAL
# CALIBRATION CERTIFICATE — the per-customer privacy showcase (D-SD-1, revised).
#
# Decision D-SD-4: Python does NOT implement or cryptographically verify the
# ecdsa-sd-2023 proof (no Python SD library; adding one would violate the
# dependency policy). Python consumes the *already-derived* disclosed-subset DCC
# produced by the TypeScript generator and runs the research kernel (evidence
# graph + edge classification + policy) over it, proving the disclosed subset is
# processed identically in both languages.
#
# TODO(human): cryptographic verification of the ecdsa-sd-2023 proof on the Python
# side is intentionally out of scope (see RECONCILIATION_REPORT.md, Part B, D-SD-4).
#
# The fixture is produced by:
#   pnpm -C packages/core-ts exec tsx scripts/gen-sd-dcc-fixtures.ts
import json
from pathlib import Path

import pytest

from qi_vc_core.evidence.graph import build_evidence_graph
from qi_vc_core.verifier.graph_verifier import (
    VerifyGraphOptions,
    verify_credential_graph,
)
from qi_vc_core.policy.types import PolicyChecks, PolicyProfile

FIXTURE = Path(__file__).parent / "fixtures" / "sd_dcc_derived_credential.json"

pytestmark = pytest.mark.skipif(
    not FIXTURE.exists(),
    reason="DCC SD fixture missing; run gen-sd-dcc-fixtures.ts to produce it.",
)


def _derived() -> dict:
    return json.loads(FIXTURE.read_text())["derivedCredential"]


def _admin(cred: dict) -> dict:
    return cred["credentialSubject"]["administrativeData"]


def test_derived_subset_is_an_ecdsa_sd_2023_credential():
    cred = _derived()
    assert cred["proof"]["cryptosuite"] == "ecdsa-sd-2023"


def test_derived_subset_withholds_customer_and_instrument_identity():
    admin = _admin(_derived())
    # Selectively disclosable, withheld in the routine subset.
    assert "customer" not in admin
    item = admin["items"][0]
    assert "identifications" not in item
    assert "manufacturer" not in item
    # Mandatory: present after disclosure.
    assert item["name"] == "Pressure transmitter"
    assert "calibrationLaboratory" in admin


def test_certified_value_and_uncertainty_survive_disclosure():
    subject = _derived()["credentialSubject"]
    quantity = subject["measurementResults"][0]["results"][0]["data"]["quantity"]
    assert quantity["value"] == 500
    assert quantity["unit"]["ucumCode"] == "kPa"
    assert quantity["uncertainty"]["expandedUncertainty"] == 1


def test_kernel_classifies_the_disclosed_authorizing_edge():
    # The single disclosed edge must classify as an independent (authorizedBy)
    # accreditation edge, exactly as the TypeScript kernel classifies it.
    cred = _derived()
    graph, _results = build_evidence_graph(cred, fetch_document=lambda _uri: {})
    edges = graph.edges
    assert len(edges) == 1
    assert edges[0].relation == "authorizedBy"
    assert edges[0].authorizationBasis is not None
    assert edges[0].authorizationBasis.kind == "accreditation"


def test_kernel_runs_over_disclosed_subset_with_sd_crypto_ignored():
    # D-SD-4: proof is "ignored" because Python does not verify SD crypto. The
    # kernel still runs schema/graph/policy over the disclosed subject.
    cred = _derived()
    policy = PolicyProfile(
        id="sd-dcc-parity-kernel",
        targetCredentialTypes=["DigitalCalibrationCertificate"],
        requiredEvidence=[],
        checks=PolicyChecks(proof="ignored", schema="ignored", status="ignored"),
    )
    options = VerifyGraphOptions(fetch_document=lambda _uri: {})
    trace = verify_credential_graph(cred, policy, options)
    assert all(not r["code"].startswith("PROOF_") for r in trace["results"])
