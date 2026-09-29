# SPDX-License-Identifier: Apache-2.0
"""I5 step 4 (mirrors tests/default-api.test.ts): the default entry point is
standards-first reliance; the v0.3 graph verifier is reachable only under legacy."""

from __future__ import annotations

import dataclasses
from collections.abc import Callable

import pytest
import qi_vc_core
from qi_vc_core import evaluate_reliance, install_binding
from qi_vc_core.reliance.cal_v1 import evaluate_cal_slice
from qi_vc_core.reliance.evaluate import InstalledBinding, RelianceEvaluation
from qi_vc_core.reliance.gs_v1 import evaluate_gs_slice
from qi_vc_core.reliance.rm_v1 import REPO_ROOT
from qi_vc_core.reliance.rm_v1_artifacts import evaluate_rm_slice
from qi_vc_core.reliance.types import (
    RelianceRequest,
    ResolverLimits,
    SelectedClaim,
    VersionedIdentifier,
    create_reliance_request,
)

BINDINGS = REPO_ROOT / "bindings" / "experimental"

CASES = [
    (
        "rm-v1",
        "rm-verifier-1",
        evaluate_rm_slice,
        "https://producer.vc4qi.example/credentials/D178",
        (SelectedClaim("as", "/credentialSubject/materialPropertiesList/0/results/0"),),
        (),
    ),
    (
        "cal-v1",
        "cal-verifier-1",
        evaluate_cal_slice,
        "https://lab.vc4qi.example/credentials/DCC-1",
        (SelectedClaim("g1", "/credentialSubject/measurementGroups/0"),),
        ("https://nab.vc4qi.example/credentials/CAL-A",),
    ),
    (
        "gs-v1",
        "gs-verifier-1",
        evaluate_gs_slice,
        "https://gs-body.vc4qi.example/credentials/GSC-1",
        (SelectedClaim("gs", "/credentialSubject/certification"),),
        (
            "https://nab.vc4qi.example/credentials/GS-A",
            "https://zls.vc4qi.example/credentials/GS-S",
        ),
    ),
]


def _request(
    installed: InstalledBinding,
    target: str,
    claims: tuple[SelectedClaim, ...],
    supplied: tuple[str, ...],
) -> RelianceRequest:
    return create_reliance_request(
        RelianceRequest(
            request_id="urn:uuid:default-api",
            target_id=target,
            selected_claims=claims,
            purpose="default-api-test",
            binding=VersionedIdentifier(
                installed.manifest.id, installed.manifest.version
            ),
            profile=VersionedIdentifier(
                installed.profile.id, installed.profile.version
            ),
            trust_config_id="https://vc4qi.example/trust/fixture-anchors",
            evaluation_time="2026-09-25T12:00:00Z",
            activity_time="2026-09-25T12:00:00Z",
            supplied_evidence=supplied,
            resolver_limits=ResolverLimits(64, 4, 5_000_000),
            conformity=None,
        )
    )


def test_root_exports_reliance_and_keeps_the_graph_verifier_under_legacy() -> None:
    assert qi_vc_core.SUPPORTED_BINDINGS == (
        "https://vc4qi.example/bindings/rm/1",
        "https://vc4qi.example/bindings/cal/1",
        "https://vc4qi.example/bindings/gs/1",
    )
    assert not hasattr(qi_vc_core, "verify_credential_graph")
    assert "verify_credential_graph" not in qi_vc_core.__all__
    assert callable(qi_vc_core.legacy.verify_credential_graph)
    assert callable(qi_vc_core.legacy.evaluate_legacy_profile)
    assert callable(qi_vc_core.legacy.presentation_query.policy_to_dcql)


@pytest.mark.parametrize(
    ("binding", "profile", "direct", "target", "claims", "supplied"), CASES
)
def test_default_entry_point_returns_the_binding_evaluators_result(
    binding: str,
    profile: str,
    direct: Callable[..., RelianceEvaluation],
    target: str,
    claims: tuple[SelectedClaim, ...],
    supplied: tuple[str, ...],
) -> None:
    installed = install_binding(BINDINGS / binding, profile)
    request = _request(installed, target, claims, supplied)
    via_default = evaluate_reliance(
        request, installed.catalog, installed.manifest, installed.profile
    )
    fresh = install_binding(BINDINGS / binding, profile)
    expected = direct(request, fresh.catalog, installed.manifest, installed.profile)
    assert via_default.result.decision == "accept"
    assert via_default.result == expected.result


def test_an_uninstalled_binding_is_a_configuration_error() -> None:
    installed = install_binding(BINDINGS / "rm-v1", "rm-verifier-1")
    other = dataclasses.replace(
        installed.manifest, id="https://vc4qi.example/bindings/unknown/1"
    )
    _, _, _, target, claims, supplied = CASES[0]
    with pytest.raises(ValueError, match="No evaluator for binding"):
        evaluate_reliance(
            _request(installed, target, claims, supplied),
            installed.catalog,
            other,
            installed.profile,
        )


def test_a_request_for_another_binding_is_refused_not_evaluated() -> None:
    rm = install_binding(BINDINGS / "rm-v1", "rm-verifier-1")
    gs = install_binding(BINDINGS / "gs-v1", "gs-verifier-1")
    _, _, _, target, claims, supplied = CASES[2]
    evaluation = evaluate_reliance(
        _request(gs, target, claims, supplied), rm.catalog, rm.manifest, rm.profile
    )
    assert evaluation.result.decision != "accept"
    assert evaluation.artifacts == ()


def test_install_binding_refuses_a_path_like_profile_name() -> None:
    with pytest.raises(ValueError, match="Invalid profile name"):
        install_binding(BINDINGS / "rm-v1", "../manifest")
