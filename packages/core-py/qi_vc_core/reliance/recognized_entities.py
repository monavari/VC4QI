# SPDX-License-Identifier: Apache-2.0
"""Recognition of an accreditation body (mirrors recognized-entities.ts).

One credential per recognized body: a W3C Recognized Entities credential (Working
Draft of 12 November 2026) with a single subject. Recognition is not authority: an
accreditation body's authority is its national appointment, which a verifier that
anchors the body trusts directly; recognition tells a verifier that anchors the
recognizer to accept the body for a main scope. The grant names its issuer's
recognition in termsOfUse, as a RecognitionPolicy whose recognitionCredential is a
RecognizedEntityCredential, pinned by digest like every other link (one rule for every
upward link; the policy type says what it means). The issuer object may mirror it as
issuer.recognizedIn; when present it must name the same credential. The verifier's
profile names no recognition; it names the recognizer as an anchor for the recognizer
purpose and the action and main scope it requires. A recognition that nothing in the
chain names confers nothing.

A named recognition establishes that the grant's issuer is recognized only when it is
usable and not suspended, its issuer is a configured anchor for the recognizer purpose,
its subject is the grant's issuer with stated actions, one action is the required
action recognized by its issuer and in force at the activity time, and its
registration carries the required main scope. A recognition of another body, or
without that main scope, contradicts; a missing recognition, entry or time is not
established.
"""

from __future__ import annotations

from collections.abc import Mapping
from dataclasses import dataclass
from datetime import datetime
from typing import TYPE_CHECKING, Any, Literal

from .types import SemanticState, semantic_or

if TYPE_CHECKING:
    from .profile import RelianceProfile
    from .rm_v1_authority import BasisResult, NodeLookup

Doc = dict[str, Any]

RECOGNITION_TYPE = "RecognizedEntityCredential"
RECOGNITION_POLICY = "RecognitionPolicy"


@dataclass(frozen=True)
class MainScopeRule:
    activity: str
    standard_id: str


@dataclass(frozen=True)
class RecognitionRules:
    recognizer_purpose: str
    action: str
    purposes: Mapping[str, MainScopeRule]


def _nonempty(value: Any) -> bool:
    return isinstance(value, str) and bool(value.strip())


def _list(value: Any) -> list[Any]:
    if isinstance(value, list):
        return value
    return [value] if isinstance(value, dict) else []


def issuer_id(issuer: Any) -> str | None:
    """VCDM 2.0 issuer: a string, or an object with a string id."""
    if _nonempty(issuer):
        return str(issuer)
    if isinstance(issuer, dict) and _nonempty(issuer.get("id")):
        return str(issuer["id"])
    return None


def recognition_rules(
    profile: RelianceProfile,
) -> RecognitionRules | Literal["invalid"] | None:
    """The profile's recognition rules; None when absent, 'invalid' when malformed."""
    raw = profile.binding_rules.get("recognition")
    if raw is None:
        return None
    if (
        not isinstance(raw, dict)
        or not _nonempty(raw.get("recognizerPurpose"))
        or not _nonempty(raw.get("action"))
        or not isinstance(raw.get("purposes"), dict)
    ):
        return "invalid"
    purposes: dict[str, MainScopeRule] = {}
    for purpose, rule in raw["purposes"].items():
        if (
            not isinstance(rule, dict)
            or not _nonempty(rule.get("activity"))
            or not _nonempty(rule.get("standardId"))
        ):
            return "invalid"
        purposes[purpose] = MainScopeRule(rule["activity"], rule["standardId"])
    return RecognitionRules(raw["recognizerPurpose"], raw["action"], purposes)


def recognition_references(grant: Doc) -> list[str]:
    """Recognitions a grant names: termsOfUse RecognitionPolicy entries referencing a
    RecognizedEntityCredential."""
    references: list[str] = []
    for policy in _list(grant.get("termsOfUse")):
        if not isinstance(policy, dict) or policy.get("type") != RECOGNITION_POLICY:
            continue
        ref = policy.get("recognitionCredential")
        if (
            isinstance(ref, dict)
            and ref.get("type") == RECOGNITION_TYPE
            and _nonempty(ref.get("id"))
        ):
            references.append(str(ref["id"]))
    return references


def recognized_in(issuer: Any) -> str | None:
    """The issuer object's issuer.recognizedIn mirror, when present."""
    if isinstance(issuer, dict) and isinstance(issuer.get("recognizedIn"), dict):
        ref = issuer["recognizedIn"].get("id")
        return str(ref) if _nonempty(ref) else None
    return None


def _basis(
    basis_id: str, state: SemanticState, reason: str, sources: tuple[str, ...]
) -> BasisResult:
    from .rm_v1_authority import BasisResult

    return BasisResult(basis_id, state, reason, sources)


def _js(value: Any) -> str:
    """String(value) as TypeScript renders it, for identical reasons."""
    if value is None:
        return "undefined"
    if isinstance(value, bool):
        return "true" if value else "false"
    return str(value)


def _label(scope: Any) -> str:
    if not isinstance(scope, dict):
        return "no main scope"
    raw = scope.get("standard")
    standard: dict[str, Any] = raw if isinstance(raw, dict) else {}
    name = standard.get("name")
    shown = name if name is not None else standard.get("id")
    return f"{_js(scope.get('activity'))} under {_js(shown)}"


def _time(value: Any) -> datetime | None:
    if not isinstance(value, str):
        return None
    try:
        return datetime.fromisoformat(
            value[:-1] + "+00:00" if value.endswith("Z") else value
        )
    except ValueError:
        return None


def _from_recognition(
    basis_id: str,
    uri: str,
    entity: str,
    wanted: MainScopeRule,
    rules: RecognitionRules,
    at: Any,
    lookup: NodeLookup,
    profile: RelianceProfile,
) -> BasisResult:
    sources = ("/termsOfUse", uri)
    node = lookup(uri)
    if node is None:
        return _basis(
            basis_id, "not_established", f"Recognition {uri} is unavailable.", sources
        )
    if node.usable != "established" or node.document is None:
        return _basis(
            basis_id,
            "contradicted" if node.usable == "contradicted" else "not_established",
            f"Recognition {uri} is not usable: {node.reason}",
            sources,
        )
    doc = node.document
    if RECOGNITION_TYPE not in _list(doc.get("type")):
        return _basis(
            basis_id, "contradicted", f"{uri} is not a {RECOGNITION_TYPE}.", sources
        )
    recognizer = issuer_id(doc.get("issuer"))
    anchored = next((a for a in profile.trust_anchors if a.id == recognizer), None)
    if anchored is None or rules.recognizer_purpose not in anchored.purposes:
        return _basis(
            basis_id,
            "not_established",
            f"{_js(recognizer)}, issuer of {uri}, is not a configured anchor for "
            f"{rules.recognizer_purpose}.",
            sources,
        )
    if node.suspension is not None and node.suspension[0] != "established":
        state, reason = node.suspension
        return _basis(
            basis_id,
            state,
            f"{_js(recognizer)} has suspended its recognition {uri}. {reason}"
            if state == "contradicted"
            else f"The suspension status of {uri} is not established: {reason}",
            sources,
        )
    subjects = [e for e in _list(doc.get("credentialSubject")) if isinstance(e, dict)]
    subject = next((e for e in subjects if e.get("id") == entity), None)
    if subject is None:
        named = ", ".join(_js(e.get("id")) for e in subjects) or "no subject"
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} recognizes {named}, not {entity}, the grant's issuer.",
            sources,
        )
    actions = [a for a in _list(subject.get("recognizedTo")) if isinstance(a, dict)]
    if not actions:
        return _basis(
            basis_id,
            "not_established",
            f"{uri} recognizes {entity} without recognized actions; this profile does "
            "not accept recognition without stated actions.",
            sources,
        )
    wanted_label = f"{wanted.activity} under {wanted.standard_id}"
    matching = [a for a in actions if a.get("action") == rules.action]
    if not matching:
        named = ", ".join(_js(a.get("action")) for a in actions)
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} recognizes {entity} to {named}, not to {rules.action}.",
            sources,
        )

    def registered_scope(entry: Any) -> Doc | None:
        scope = entry.get("mainScope") if isinstance(entry, dict) else None
        return scope if isinstance(scope, dict) else None

    registered = [e for e in _list(subject.get("registration")) if isinstance(e, dict)]
    scope = next(
        (
            m
            for m in (registered_scope(e) for e in registered)
            if m is not None
            and m.get("activity") == wanted.activity
            and isinstance(m.get("standard"), dict)
            and m["standard"].get("id") == wanted.standard_id
        ),
        None,
    )
    if scope is None:
        offered = (
            ", ".join(_label(registered_scope(e)) for e in registered)
            or "no main scope"
        )
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} registers {entity} for {offered}, not for {wanted_label}.",
            sources,
        )
    by_issuer = [
        a
        for a in matching
        if "recognizedBy" not in a or a["recognizedBy"] == recognizer
    ]
    if not by_issuer:
        return _basis(
            basis_id,
            "contradicted",
            f"The matching action in {uri} names another recognizer than its issuer "
            f"{_js(recognizer)}.",
            sources,
        )
    activity = _time(at)
    if activity is None:
        return _basis(
            basis_id,
            "not_established",
            "No activity time is stated, so recognition at that time is not "
            "established.",
            sources,
        )

    def in_force(a: Doc) -> bool:
        start = _time(a.get("validFrom", doc.get("validFrom")))
        end = _time(a.get("validUntil", doc.get("validUntil")))
        return start is not None and end is not None and start <= activity <= end

    chosen = next((a for a in by_issuer if in_force(a)), None)
    if chosen is None:
        return _basis(
            basis_id,
            "not_established",
            f"{_js(recognizer)} did not recognize {entity} for {wanted_label} at the "
            f"activity time {at}.",
            sources,
        )
    return _basis(
        basis_id,
        "established",
        f"{entity} is recognized by {_js(recognizer)} (a configured anchor for "
        f"{rules.recognizer_purpose}) to {rules.action} for "
        f"{_label(scope)}, in force at {at}, in {uri}. Recognition grants no "
        "authority; it accepts the body for this verifier.",
        sources,
    )


def grant_issuer_standing(
    basis_id: str,
    grant: Doc,
    purpose: str,
    profile: RelianceProfile,
    lookup: NodeLookup,
    at: Any,
) -> tuple[BasisResult, str | None]:
    """Configured anchor for `purpose`, or recognized through a recognition the grant
    itself points up to.

    Returns the basis and the deciding recognition, so routes can name it as a witness.
    """
    issuer = issuer_id(grant.get("issuer"))
    configured = next((a for a in profile.trust_anchors if a.id == issuer), None)
    if configured is not None and purpose in configured.purposes:
        return (
            _basis(
                basis_id,
                "established",
                f"{_js(issuer)} is a configured anchor for {purpose}.",
                ("/issuer",),
            ),
            None,
        )
    direct = (
        f"{_js(issuer)} is not a configured trust anchor."
        if configured is None
        else f"{_js(issuer)} is an anchor, but not for {purpose}."
    )
    rules = recognition_rules(profile)
    if rules is None:
        return _basis(basis_id, "not_established", direct, ("/issuer",)), None
    if rules == "invalid":
        return (
            _basis(
                basis_id,
                "not_established",
                f"{direct} The profile's recognition rules are malformed.",
                ("/issuer",),
            ),
            None,
        )
    wanted = rules.purposes.get(purpose)
    if wanted is None or issuer is None:
        return (
            _basis(
                basis_id,
                "not_established",
                f"{direct} The profile accepts no recognition for {purpose}.",
                ("/issuer",),
            ),
            None,
        )
    references = recognition_references(grant)
    if not references:
        return (
            _basis(
                basis_id,
                "not_established",
                f"{direct} The grant names no {RECOGNITION_TYPE} in a "
                f"{RECOGNITION_POLICY} of its termsOfUse.",
                ("/issuer", "/termsOfUse"),
            ),
            None,
        )
    mirror = recognized_in(grant.get("issuer"))
    if mirror is not None and mirror not in references:
        return (
            _basis(
                basis_id,
                "contradicted",
                f"{direct} The issuer's recognizedIn names {mirror}, but the grant's "
                f"{RECOGNITION_POLICY} names {', '.join(references)}.",
                ("/issuer/recognizedIn", "/termsOfUse"),
            ),
            None,
        )
    answers = [
        (
            uri,
            _from_recognition(
                basis_id, uri, issuer, wanted, rules, at, lookup, profile
            ),
        )
        for uri in references
    ]
    for uri, result in answers:
        if result.state == "established":
            return result, uri
    state = semantic_or(tuple(result.state for _, result in answers))
    return (
        _basis(
            basis_id,
            state,
            f"{direct} " + " ".join(result.reason for _, result in answers),
            ("/issuer", "/termsOfUse", *(uri for uri, _ in answers)),
        ),
        None,
    )
