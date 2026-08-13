# SPDX-License-Identifier: Apache-2.0
# TST-2: every gate fails closed when its dependency is absent.
# Mirrors packages/core-ts/tests/fail-closed.test.ts.
#
# These assert on trace["verified"], not merely on the presence of a trace
# entry. The verdict is computed from FAIL entries alone and ignores WARN, so a
# check that degrades to a warning is indistinguishable from a check that
# passed. Asserting the verdict is the only way to pin fail-closed behaviour
# (FC-7).
import copy

from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

from .fixture_helpers import (
    TEST_DOCUMENT_LOADER,
    codes,
    load_fixture,
    resolve_test_registry_key,
    verify_fixture,
)

FIXTURE = "calibration-direct-accreditation"


def _fetcher(documents):
    def fetch(uri: str):
        if uri not in documents:
            raise KeyError(f"Unknown fixture URI {uri}")
        return documents[uri]

    return fetch


def test_control_worked_chain_accepts():
    trace = verify_fixture(FIXTURE)
    assert trace["verified"] is True
    assert "TRUSTED_ISSUER" in codes(trace)


def test_rejects_when_no_trust_registry_resolver():
    """FC-2."""
    target, policy, _registry, documents = load_fixture(FIXTURE)
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=_fetcher(documents),
            skip_proof=True,
            resolve_key=resolve_test_registry_key,
            document_loader=TEST_DOCUMENT_LOADER,
        ),
    )

    assert trace["verified"] is False
    assert "TRUST_REGISTRY_NOT_AVAILABLE" in codes(trace)
    # The issuer was never recognized, so no TRUSTED_ISSUER may appear.
    assert "TRUSTED_ISSUER" not in codes(trace)


def test_rejects_when_no_key_resolver_for_the_registry():
    """FC-1 / SEC-1: without key resolution the registry proof is never checked."""
    target, policy, registry, documents = load_fixture(FIXTURE)
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=_fetcher(documents),
            resolve_trust_registry=lambda _i, _c=None: registry,
            skip_proof=True,
            document_loader=TEST_DOCUMENT_LOADER,
        ),
    )

    assert trace["verified"] is False
    # SEC-8: "not performed" is reported distinctly from "performed and failed".
    assert "TRUST_REGISTRY_KEY_RESOLVER_MISSING" in codes(trace)
    assert "TRUSTED_ISSUER" not in codes(trace)


def test_rejects_tampered_trust_registry():
    """SEC-1: a tampered registry must not confer trust."""
    target, policy, registry, documents = load_fixture(FIXTURE)
    tampered = copy.deepcopy(registry)
    tampered["credentialSubject"]["registryEntries"].append(
        {
            "id": "did:web:attacker.example",
            "status": "active",
            "authorizationBasisKinds": ["accreditation"],
        }
    )

    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=_fetcher(documents),
            resolve_trust_registry=lambda _i, _c=None: tampered,
            skip_proof=True,
            resolve_key=resolve_test_registry_key,
            document_loader=TEST_DOCUMENT_LOADER,
        ),
    )

    assert trace["verified"] is False
    assert "TRUST_REGISTRY_PROOF_INVALID" in codes(trace)
    assert "TRUSTED_ISSUER" not in codes(trace)


def test_rejects_proof_bearing_credential_without_key_resolver():
    """FC-1 at the credential gate."""
    target, policy, registry, documents = load_fixture(FIXTURE)
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(
            fetch_document=_fetcher(documents),
            resolve_trust_registry=lambda _i, _c=None: registry,
            document_loader=TEST_DOCUMENT_LOADER,
        ),
    )

    assert trace["verified"] is False
    assert "PROOF_RESOLVER_MISSING" in codes(trace)


def test_warn_is_not_load_bearing():
    """FC-7: the verdict must be computable with every WARN discarded."""
    trace = verify_fixture(FIXTURE)
    failures = [r for r in trace["results"] if r["status"] == "FAIL"]
    assert trace["verified"] == (len(failures) == 0)
