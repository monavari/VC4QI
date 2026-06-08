# SPDX-License-Identifier: Apache-2.0
# Selective-disclosure (G2 / Phase 6) cross-language parity.
#
# Decision D-SD-4: Python does NOT implement or cryptographically verify the
# ecdsa-sd-2023 selective-disclosure proof (no Python SD library; adding one would
# violate the dependency policy). Instead, Python consumes the *already-derived*
# disclosed-subset credential produced by the TypeScript generator and runs the
# research kernel (evidence graph + edge classification + policy) over it, proving
# the disclosed subset is processed identically in both languages.
#
# TODO(human): cryptographic verification of the ecdsa-sd-2023 proof on the Python
# side is intentionally out of scope (see RECONCILIATION_REPORT.md, Part B, D-SD-4).
# If a Python SD verifier is ever required, it must not pull in a VC framework.
#
# The fixture is produced by:
#   pnpm -C packages/core-ts exec tsx scripts/gen-sd-fixtures.ts
import json
from pathlib import Path

import pytest

from qi_vc_core.evidence.graph import build_evidence_graph
from qi_vc_core.verifier.graph_verifier import (
    VerifyGraphOptions,
    verify_credential_graph,
)
from qi_vc_core.policy.types import PolicyChecks, PolicyProfile

FIXTURE = Path(__file__).parent / "fixtures" / "sd_derived_credential.json"

pytestmark = pytest.mark.skipif(
    not FIXTURE.exists(),
    reason="SD fixture missing; run gen-sd-fixtures.ts to produce it.",
)


def _derived() -> dict:
    return json.loads(FIXTURE.read_text())["derivedCredential"]


def test_derived_subset_is_an_ecdsa_sd_2023_credential():
    cred = _derived()
    assert cred["proof"]["cryptosuite"] == "ecdsa-sd-2023"


def test_derived_subset_discloses_mandatory_and_withholds_personnel():
    subject = _derived()["credentialSubject"]
    # Mandatory (D-SD-1): present after disclosure.
    assert "materialPropertiesList" in subject
    assert "administrativeData" in subject
    # Selectively disclosable, withheld in the routine subset.
    assert "respPersons" not in subject


def test_certified_value_and_uncertainty_survive_disclosure():
    subject = _derived()["credentialSubject"]
    results = subject["materialPropertiesList"][0]["results"]
    arsenic = next(r for r in results if "As" in r["name"])
    quantity = arsenic["data"]["quantity"]
    assert quantity["value"] == 178
    assert quantity["uncertainty"]["expandedUncertainty"] == 5
    assert arsenic["scopeRef"] == "scope-entry-As-CuZn"


def test_kernel_classifies_the_disclosed_authorizing_edge():
    # Build the evidence graph over the disclosed subset. The single disclosed
    # edge must classify as an independent (authorizedBy) operationalScope edge,
    # exactly as the TypeScript kernel classifies it.
    cred = _derived()
    graph, _results = build_evidence_graph(cred, fetch_document=lambda _uri: {})
    edges = graph.edges
    assert len(edges) == 1
    assert edges[0].relation == "authorizedBy"
    assert edges[0].authorizationBasis is not None
    assert edges[0].authorizationBasis.kind == "operationalScope"


def test_kernel_runs_over_disclosed_subset_with_sd_crypto_ignored():
    # D-SD-4: proof is set to "ignored" because Python does not verify SD crypto.
    # The kernel still runs schema/graph/policy over the disclosed subject.
    cred = _derived()
    policy = PolicyProfile(
        id="sd-parity-kernel",
        targetCredentialTypes=["ReferenceMaterialCertificate"],
        requiredEvidence=[],
        checks=PolicyChecks(proof="ignored", schema="ignored", status="ignored"),
    )
    options = VerifyGraphOptions(fetch_document=lambda _uri: {})
    trace = verify_credential_graph(cred, policy, options)
    # No proof trace entry is emitted when proof is ignored (SD crypto out of scope).
    assert all(r["code"] != "PROOF_RESOLVER_MISSING" for r in trace["results"])
    assert all(not r["code"].startswith("PROOF_") for r in trace["results"])
