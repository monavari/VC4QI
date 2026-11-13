# SPDX-License-Identifier: Apache-2.0
"""Python mirror of tests/rm-v1-recognition.test.ts (ledger E01-E03, E16-E20).

One recognition credential per recognized body: A and H point up to R (a W3C
Recognized Entities credential with one subject) through termsOfUse, pinned by digest.
The verifier abroad trusts only the fictional Global ACI stand-in.
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
from .test_rm_v1_slice import (
    MANIFEST,
    PROFILE,
    URI,
    catalog_with,
    doc,
    request,
    resign,
)

D197 = "https://producer.vc4qi.example/credentials/D197"
D520 = "https://producer.vc4qi.example/credentials/D520"
NAB = "https://nab.vc4qi.example/controller"
RM_PRODUCTION = "Reference material production"


def _profile_json() -> dict[str, Any]:
    return dict(
        json.loads(
            (RM_V1_DIRECTORY / "profiles/rm-verifier-global-aci-1.json").read_text()
        )
    )


GLOBAL_ACI = load_reliance_profile(_profile_json())


def _request(profile: RelianceProfile, target: str = URI["D"], **extra: Any) -> Any:
    return request(
        target_id=target,
        profile=VersionedIdentifier(profile.id, profile.version),
        **extra,
    )


def run(
    overrides: dict[str, str | None] | None = None,
    profile: RelianceProfile = GLOBAL_ACI,
    target: str = URI["D"],
) -> Any:
    return evaluate_rm_slice(
        _request(profile, target), catalog_with(overrides or {}), MANIFEST, profile
    ).result


def domestic(overrides: dict[str, str | None]) -> Any:
    return evaluate_rm_slice(
        request(), catalog_with(overrides), MANIFEST, PROFILE
    ).result


def _trace(result: Any, predicate: str) -> Any:
    return next(t for t in result.trace if t.predicate == predicate)


def anchor(result: Any) -> Any:
    return _trace(result, "route:operational-scope:trust-anchor")


def lab_anchor(result: Any) -> Any:
    return _trace(result, "support:laboratory-anchor")


def recognition_with(edit: Any) -> dict[str, str | None]:
    """R re-issued by Global ACI after `edit`, and the chain below it re-pinned."""
    document = doc(URI["R"])
    edit(document)
    return reissue({URI["R"]: document})


def _subject(document: dict[str, Any]) -> dict[str, Any]:
    subject: dict[str, Any] = document["credentialSubject"]
    return subject


def _suspended() -> dict[str, str | None]:
    bits = bytearray(MIN_STATUS_BITS // 8)
    bits[0] |= 0x80
    status = doc(URI["GACI_SUSPENSION"])
    status["credentialSubject"]["encodedList"] = encode_status_list(bytes(bits))
    return {
        URI["GACI_SUSPENSION"]: resign(status, "global-aci", f"{URI['GACI']}#key-1")
    }


def test_e01_d178_is_relied_upon_through_the_recognition() -> None:
    result = run()
    assert anchor(result).state == "established"
    assert re.search(
        r"recognized by https://global-aci\.vc4qi\.example/controller .* to accredit "
        r"for Reference material production under ISO 17034:2016",
        anchor(result).reason,
    )
    assert lab_anchor(result).state == "established"
    assert URI["R"] in result.authorization[0].route_witness_ids
    assert URI["R"] in result.support[0].witness_ids
    assert any(
        t.predicate == "related-resource-integrity"
        and t.node_use.startswith(f"{URI['A']} |")
        and t.reason.startswith(URI["R"])
        and t.state == "established"
        for t in result.trace
    )
    assert result.decision == "accept"


def test_e03_recognized_and_d520_still_out_of_scope() -> None:
    result = run(target=D520)
    assert anchor(result).state == "established"
    assert result.authorization[0].state == "contradicted"
    assert result.decision == "reject"


def test_d197_authorized_and_rejected_only_by_the_guarded_rule() -> None:
    result = run(target=D197)
    assert result.authorization[0].state == "established"
    assert result.conformity.state == "contradicted"
    assert result.decision == "reject"


def test_e02_testing_only_contradicts_the_producer_route() -> None:
    def edit(document: dict[str, Any]) -> None:
        subject = _subject(document)
        subject["registration"] = [
            e
            for e in subject["registration"]
            if e["mainScope"]["activity"] != RM_PRODUCTION
        ]

    result = run(recognition_with(edit))
    assert anchor(result).state == "contradicted"
    assert (
        "registers https://nab.vc4qi.example/controller for Testing under "
        "ISO/IEC 17025:2017, not for Reference material production"
    ) in anchor(result).reason
    assert lab_anchor(result).state == "established"
    assert result.decision == "reject"


def test_e02_laboratory_without_testing_contradicts_support() -> None:
    def edit(document: dict[str, Any]) -> None:
        subject = _subject(document)
        subject["registration"] = [
            e
            for e in subject["registration"]
            if e["mainScope"]["activity"] == RM_PRODUCTION
        ]

    result = run(recognition_with(edit))
    assert anchor(result).state == "established"
    assert lab_anchor(result).state == "contradicted"
    assert result.support[0].state == "contradicted"
    assert result.decision == "reject"


def test_e16_recognition_of_another_body_contradicts() -> None:
    def edit(document: dict[str, Any]) -> None:
        _subject(document)["id"] = "https://other-ab.vc4qi.example/controller"

    result = run(recognition_with(edit))
    assert anchor(result).state == "contradicted"
    assert (
        "recognizes https://other-ab.vc4qi.example/controller, "
        "not https://nab.vc4qi.example/controller" in anchor(result).reason
    )
    assert result.decision == "reject"


def test_e17_suspended_recognition_contradicts_reliance() -> None:
    result = run(_suspended())
    assert anchor(result).state == "contradicted"
    assert f"has suspended its recognition {URI['R']}" in anchor(result).reason
    assert result.decision == "reject"


def test_e17_domestic_verifier_is_unaffected() -> None:
    result = domestic(_suspended())
    assert result.decision == "accept"
    assert URI["R"] not in result.authorization[0].route_witness_ids


def test_e17_domestic_verifier_does_not_need_the_recognition() -> None:
    assert domestic({URI["R"]: None}).decision == "accept"


def test_e18_recognition_without_actions_is_not_accepted() -> None:
    def edit(document: dict[str, Any]) -> None:
        del _subject(document)["recognizedTo"]

    result = run(recognition_with(edit))
    assert anchor(result).state == "not_established"
    assert "without recognized actions" in anchor(result).reason


def test_e19_recognition_after_the_activity_cannot_authorize_it() -> None:
    def edit(document: dict[str, Any]) -> None:
        for action in _subject(document)["recognizedTo"]:
            action["validFrom"] = "2026-02-01T00:00:00Z"

    result = run(recognition_with(edit))
    assert anchor(result).state == "not_established"
    assert "at the activity time 2026-01-20" in anchor(result).reason


def test_e20_recognizer_not_anchored_for_recognition() -> None:
    profile = load_reliance_profile(
        {
            **_profile_json(),
            "trustAnchors": [
                {"id": URI["GACI"], "purposes": ["accredit-rm-producers"]}
            ],
        }
    )
    result = run(profile=profile)
    assert anchor(result).state == "not_established"
    assert (
        "is not a configured anchor for recognize-accreditation-bodies"
        in anchor(result).reason
    )


def test_e20_a_body_cannot_recognize_itself() -> None:
    def edit(document: dict[str, Any]) -> None:
        document["issuer"] = {
            "id": NAB,
            "type": "RecognizedIssuer",
            "name": "Fictional national accreditation body",
        }
        document["credentialStatus"] = [
            {
                "id": f"{status}#5",
                "type": "BitstringStatusListEntry",
                "statusPurpose": purpose,
                "statusListIndex": "5",
                "statusListCredential": status,
            }
            for status, purpose in (
                (URI["NAB_STATUS"], "revocation"),
                (URI["NAB_SUSPENSION"], "suspension"),
            )
        ]

    result = run(recognition_with(edit))
    assert anchor(result).state == "not_established"
    assert re.search(
        r"https://nab\.vc4qi\.example/controller, issuer of .* is not a configured "
        r"anchor",
        anchor(result).reason,
    )
    assert result.decision == "not_established"


def test_unavailable_recognition_is_not_established() -> None:
    result = run({URI["R"]: None})
    assert anchor(result).state == "not_established"
    assert result.decision == "not_established"


def test_matching_action_naming_another_recognizer_is_contradicted() -> None:
    def edit(document: dict[str, Any]) -> None:
        for action in _subject(document)["recognizedTo"]:
            action["recognizedBy"] = "https://other-anchor.vc4qi.example/controller"

    assert anchor(run(recognition_with(edit))).state == "contradicted"


def test_malformed_recognition_rules_are_never_defaulted() -> None:
    profile_json = _profile_json()
    del profile_json["bindingRules"]["recognition"]["action"]
    result = run(profile=load_reliance_profile(profile_json))
    assert anchor(result).state == "not_established"
    assert "recognition rules are malformed" in anchor(result).reason


def test_unreferenced_recognition_confers_nothing_even_when_supplied() -> None:
    accreditation = doc(URI["A"])
    del accreditation["termsOfUse"]
    del accreditation["relatedResource"]
    overrides = reissue({URI["A"]: accreditation})
    req = _request(
        GLOBAL_ACI,
        supplied_evidence=(URI["A"], URI["O"], URI["S"], URI["H"], URI["R"]),
    )
    result = evaluate_rm_slice(
        req, catalog_with(overrides), MANIFEST, GLOBAL_ACI
    ).result
    assert anchor(result).state == "not_established"
    assert (
        "names no RecognizedEntityCredential in a RecognitionPolicy"
        in anchor(result).reason
    )
    assert lab_anchor(result).state == "established"
    assert result.decision == "not_established"


def test_reasons_match_typescript_for_the_accepted_case() -> None:
    reason = anchor(run()).reason
    assert reason == (
        "https://nab.vc4qi.example/controller is recognized by "
        "https://global-aci.vc4qi.example/controller (a configured anchor for "
        "recognize-accreditation-bodies) to accredit for Reference material production "
        "under ISO 17034:2016, in force at 2026-01-20T00:00:00Z, in "
        "https://global-aci.vc4qi.example/credentials/R. Recognition grants no "
        "authority; it accepts the body for this verifier."
    )


def test_recognized_in_naming_another_credential_contradicts() -> None:
    accreditation = doc(URI["A"])
    accreditation["issuer"]["recognizedIn"] = {
        "id": "https://global-aci.vc4qi.example/credentials/R-other",
        "type": "RecognizedEntityCredential",
    }
    result = run(reissue({URI["A"]: accreditation}))
    assert anchor(result).state == "contradicted"
    assert (
        "recognizedIn names https://global-aci.vc4qi.example/credentials/R-other"
        in anchor(result).reason
    )
    assert result.decision == "reject"


def test_recognition_named_as_a_grant_is_no_recognition() -> None:
    # A's schema admits only a RecognitionPolicy in its termsOfUse: the grant fails at
    # gate 0 and the route never reaches a recognition.
    accreditation = doc(URI["A"])
    accreditation["termsOfUse"] = [
        {
            "type": "IssuedUnderPolicy",
            "authorizationCredential": {"id": URI["R"], "type": "RmAccreditation"},
        }
    ]
    del accreditation["issuer"]["recognizedIn"]
    result = run(reissue({URI["A"]: accreditation}))
    assert any(
        t.predicate == "schema"
        and t.node_use.startswith(f"{URI['A']} |")
        and t.state != "established"
        for t in result.trace
    )
    assert not any(
        t.predicate == "route:operational-scope:trust-anchor"
        and t.state == "established"
        for t in result.trace
    )
    assert result.decision != "accept"
