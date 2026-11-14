# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/rm-v1-appointment.test.ts (ledger E21-E28).

A state's appointment of the accreditation body (APP, in the shape of EBSI's
VerifiableAuthorisationForTrustChain) is named by A, A2 and H in a termsOfUse
IssuedUnderPolicy and pinned by digest. A verifier that anchors the state follows it; a
verifier that anchors the body, or Global ACI, never relies on it.
"""

from __future__ import annotations

import json
import re
from typing import Any

from qi_vc_core.reliance import load_reliance_profile
from qi_vc_core.reliance.profile import RelianceProfile
from qi_vc_core.reliance.rm_v1 import RM_V1_DIRECTORY
from qi_vc_core.reliance.rm_v1_artifacts import evaluate_rm_slice
from qi_vc_core.reliance.status_list import MIN_STATUS_BITS, encode_status_list
from qi_vc_core.reliance.types import VersionedIdentifier

from .test_rm_v1_authority import reissue
from .test_rm_v1_recognition import GLOBAL_ACI
from .test_rm_v1_recognition import _profile_json as _global_aci_json
from .test_rm_v1_slice import MANIFEST, PROFILE, URI, catalog_with, doc, request, resign

NAB = "https://nab.vc4qi.example/controller"
DEU = "https://publications.europa.eu/resource/authority/atu/DEU"


def _state_json() -> dict[str, Any]:
    return dict(
        json.loads((RM_V1_DIRECTORY / "profiles/rm-verifier-state-1.json").read_text())
    )


STATE = load_reliance_profile(_state_json())


def run(
    overrides: dict[str, str | None] | None = None,
    profile: RelianceProfile = STATE,
    target: str = URI["D"],
) -> Any:
    req = request(
        target_id=target, profile=VersionedIdentifier(profile.id, profile.version)
    )
    return evaluate_rm_slice(
        req, catalog_with(overrides or {}), MANIFEST, profile
    ).result


def anchor(result: Any) -> Any:
    return next(
        t for t in result.trace if t.predicate == "route:operational-scope:trust-anchor"
    )


def lab_anchor(result: Any) -> Any:
    return next(t for t in result.trace if t.predicate == "support:laboratory-anchor")


def appointment_with(edit: Any) -> dict[str, str | None]:
    document = doc(URI["APP"])
    edit(document)
    return reissue({URI["APP"]: document})


def _state_list(uri: str) -> dict[str, str | None]:
    bits = bytearray(MIN_STATUS_BITS // 8)
    bits[0] |= 0x80
    status = doc(uri)
    status["credentialSubject"]["encodedList"] = encode_status_list(bytes(bits))
    return {uri: resign(status, "state", f"{URI['STATE']}#key-1")}


def test_e21_d178_is_relied_upon_through_the_appointment() -> None:
    result = run()
    assert anchor(result).state == "established"
    # Identical to the TypeScript reason.
    assert anchor(result).reason == (
        f"{NAB} is appointed by {URI['STATE']} (a configured anchor for "
        f"appoint-accreditation-bodies) to issue RmAccreditation in {DEU}, in force "
        f"at 2026-01-20T00:00:00Z, in {URI['APP']}."
    )
    assert lab_anchor(result).state == "established"
    assert URI["APP"] in result.authorization[0].route_witness_ids
    assert URI["R"] not in result.authorization[0].route_witness_ids
    assert URI["APP"] in result.support[0].witness_ids
    assert result.decision == "accept"


def test_e23_suspended_or_revoked_appointment_contradicts() -> None:
    suspended = run(_state_list(URI["STATE_SUSPENSION"]))
    assert anchor(suspended).state == "contradicted"
    assert "has suspended its appointment" in anchor(suspended).reason
    assert suspended.decision == "reject"
    revoked = run(_state_list(URI["STATE_STATUS"]))
    assert anchor(revoked).state == "contradicted"
    assert revoked.decision == "reject"


def test_e24_body_and_global_aci_verifiers_never_rely_on_it() -> None:
    suspended = _state_list(URI["STATE_SUSPENSION"])
    domestic = run(suspended, PROFILE)
    assert domestic.decision == "accept"
    assert URI["APP"] not in domestic.authorization[0].route_witness_ids
    assert run({URI["APP"]: None}, PROFILE).decision == "accept"
    abroad = run(suspended, GLOBAL_ACI)
    assert abroad.decision == "accept"
    assert URI["APP"] not in abroad.authorization[0].route_witness_ids


def test_e25_appointment_of_another_body_contradicts() -> None:
    other = "https://other-ab.vc4qi.example/controller"

    def edit(app: dict[str, Any]) -> None:
        app["credentialSubject"]["id"] = other

    result = run(appointment_with(edit))
    assert anchor(result).state == "contradicted"
    assert f"appoints {other}, not {NAB}" in anchor(result).reason


def test_e26_no_laboratory_permission_contradicts_support() -> None:
    def edit(app: dict[str, Any]) -> None:
        subject = app["credentialSubject"]
        subject["permissionFor"] = [
            p for p in subject["permissionFor"] if "RmLabAuthority" not in p["types"]
        ]

    result = run(appointment_with(edit))
    assert anchor(result).state == "established"
    assert lab_anchor(result).state == "contradicted"
    assert "to issue RmAccreditation, not RmLabAuthority" in lab_anchor(result).reason
    assert result.decision == "reject"


def test_e26_other_jurisdiction_contradicts() -> None:
    raw = _state_json()
    raw["bindingRules"]["appointment"]["jurisdiction"] = DEU.replace("DEU", "FRA")
    result = run(profile=load_reliance_profile(raw))
    assert anchor(result).state == "contradicted"
    assert re.search(
        r"permits RmAccreditation for .*atu/DEU, not for .*atu/FRA",
        anchor(result).reason,
    )


def test_e27_appointment_after_the_activity_is_not_established() -> None:
    def edit(app: dict[str, Any]) -> None:
        app["validFrom"] = "2026-02-01T00:00:00Z"

    result = run(appointment_with(edit))
    assert anchor(result).state == "not_established"
    assert "was not in force at the activity time 2026-01-20" in anchor(result).reason


def test_e28_unanchored_appointer_establishes_nothing() -> None:
    raw = _state_json()
    raw["trustAnchors"] = [
        {"id": URI["STATE"], "purposes": ["recognize-accreditation-bodies"]}
    ]
    result = run(profile=load_reliance_profile(raw))
    assert anchor(result).state == "not_established"
    assert (
        "not a configured anchor for appoint-accreditation-bodies"
        in anchor(result).reason
    )


def test_grant_without_appointment_and_malformed_rules() -> None:
    a = doc(URI["A"])
    a["termsOfUse"] = [t for t in a["termsOfUse"] if t["type"] != "IssuedUnderPolicy"]
    a["relatedResource"] = [r for r in a["relatedResource"] if r["id"] != URI["APP"]]
    result = run(reissue({URI["A"]: a}))
    assert anchor(result).state == "not_established"
    assert "names no VerifiableAuthorisationForTrustChain" in anchor(result).reason
    raw = _state_json()
    del raw["bindingRules"]["appointment"]["appointerPurpose"]
    malformed = run(profile=load_reliance_profile(raw))
    assert "appointment rules are malformed" in anchor(malformed).reason


def test_both_bases_fall_back_to_recognition() -> None:
    raw = _global_aci_json()
    raw["trustAnchors"] = [
        {"id": URI["STATE"], "purposes": ["appoint-accreditation-bodies"]},
        {"id": URI["GACI"], "purposes": ["recognize-accreditation-bodies"]},
    ]
    raw["bindingRules"] = {**raw["bindingRules"], **_state_json()["bindingRules"]}
    both = load_reliance_profile(raw)
    assert URI["APP"] in run(profile=both).authorization[0].route_witness_ids
    result = run(_state_list(URI["STATE_SUSPENSION"]), both)
    assert anchor(result).state == "established"
    assert URI["R"] in result.authorization[0].route_witness_ids
    assert result.decision == "accept"
