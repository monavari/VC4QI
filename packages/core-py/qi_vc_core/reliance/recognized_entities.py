# SPDX-License-Identifier: Apache-2.0
"""Recognition through an arrangement's signatory list (mirrors recognized-entities.ts).

The signatory list is a W3C Recognized Entities credential (Working Draft of
4 November 2026). The verifier's profile names the lists it accepts
(bindingRules.recognition), as it names its anchors; a list a holder supplies or a
credential points to is not used. A list establishes that a grant's issuer is
recognized only when it is usable and not suspended, its issuer is a configured anchor
for the list purpose, it names the grant's issuer with stated actions, one action is
the required action for the required main scope recognized by the list's issuer, and
that action was in force at the activity time. A main scope the list does not grant
contradicts; a missing list, entry or time is not established.
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


@dataclass(frozen=True)
class MainScopeRule:
    activity: str
    standard_id: str


@dataclass(frozen=True)
class RecognitionRules:
    lists: tuple[str, ...]
    list_purpose: str
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
        or not isinstance(raw.get("lists"), list)
        or not raw["lists"]
        or not all(_nonempty(u) for u in raw["lists"])
        or not _nonempty(raw.get("listPurpose"))
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
    return RecognitionRules(
        tuple(raw["lists"]), raw["listPurpose"], raw["action"], purposes
    )


def recognition_lists(profile: RelianceProfile) -> tuple[str, ...]:
    """Lists the chain verification must resolve and verify (gates 0-3)."""
    rules = recognition_rules(profile)
    return () if rules is None or rules == "invalid" else rules.lists


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
    standard = scope.get("standard") if isinstance(scope.get("standard"), dict) else {}
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


def _from_list(
    basis_id: str,
    uri: str,
    entity: str,
    wanted: MainScopeRule,
    rules: RecognitionRules,
    at: Any,
    lookup: NodeLookup,
    profile: RelianceProfile,
) -> BasisResult:
    sources = ("/issuer", uri)
    node = lookup(uri)
    if node is None:
        return _basis(
            basis_id,
            "not_established",
            f"Signatory list {uri} is unavailable.",
            sources,
        )
    if node.usable != "established" or node.document is None:
        return _basis(
            basis_id,
            "contradicted" if node.usable == "contradicted" else "not_established",
            f"Signatory list {uri} is not usable: {node.reason}",
            sources,
        )
    doc = node.document
    if "RecognizedEntityCredential" not in _list(doc.get("type")):
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} is not a RecognizedEntityCredential.",
            sources,
        )
    list_issuer = issuer_id(doc.get("issuer"))
    anchored = next((a for a in profile.trust_anchors if a.id == list_issuer), None)
    if anchored is None or rules.list_purpose not in anchored.purposes:
        return _basis(
            basis_id,
            "not_established",
            f"{_js(list_issuer)}, issuer of {uri}, is not a configured anchor for "
            f"{rules.list_purpose}.",
            sources,
        )
    if node.suspension is not None and node.suspension[0] != "established":
        state, reason = node.suspension
        return _basis(
            basis_id,
            state,
            f"{_js(list_issuer)} has suspended its signatory list {uri}. {reason}"
            if state == "contradicted"
            else f"The suspension status of {uri} is not established: {reason}",
            sources,
        )
    listed = next(
        (
            e
            for e in _list(doc.get("credentialSubject"))
            if isinstance(e, dict) and e.get("id") == entity
        ),
        None,
    )
    if listed is None:
        return _basis(
            basis_id, "not_established", f"{uri} does not list {entity}.", sources
        )
    actions = [a for a in _list(listed.get("recognizedTo")) if isinstance(a, dict)]
    if not actions:
        return _basis(
            basis_id,
            "not_established",
            f"{uri} lists {entity} without recognized actions; this profile does not "
            "accept recognition without stated actions.",
            sources,
        )
    wanted_label = f"{wanted.activity} under {wanted.standard_id}"

    def matches(a: Doc) -> bool:
        scope = a.get("mainScope")
        return (
            a.get("action") == rules.action
            and isinstance(scope, dict)
            and scope.get("activity") == wanted.activity
            and isinstance(scope.get("standard"), dict)
            and scope["standard"].get("id") == wanted.standard_id
        )

    matching = [a for a in actions if matches(a)]
    if not matching:
        offered = ", ".join(
            f"{_js(a.get('action'))} ({_label(a.get('mainScope'))})" for a in actions
        )
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} recognizes {entity} for {offered}, not to {rules.action} for "
            f"{wanted_label}.",
            sources,
        )
    by_issuer = [
        a
        for a in matching
        if "recognizedBy" not in a or a["recognizedBy"] == list_issuer
    ]
    if not by_issuer:
        return _basis(
            basis_id,
            "contradicted",
            f"The matching action in {uri} names another recognizer than the list's "
            f"issuer {_js(list_issuer)}.",
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
            f"{_js(list_issuer)} did not recognize {entity} for {wanted_label} at the "
            f"activity time {at}.",
            sources,
        )
    return _basis(
        basis_id,
        "established",
        f"{entity} is recognized by {_js(list_issuer)} (a configured anchor for "
        f"{rules.list_purpose}) to {rules.action} for "
        f"{_label(chosen.get('mainScope'))}, in force at {at}, in {uri}.",
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
    """Configured anchor for `purpose`, or recognized through a profile-named list.

    Returns the basis and the deciding list, so routes can name it as a witness.
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
    answers = [
        (uri, _from_list(basis_id, uri, issuer, wanted, rules, at, lookup, profile))
        for uri in rules.lists
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
            ("/issuer", *(uri for uri, _ in answers)),
        ),
        None,
    )
