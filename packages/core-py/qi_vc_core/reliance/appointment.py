# SPDX-License-Identifier: Apache-2.0
"""A state's appointment of its accreditation body (mirrors appointment.ts).

The source of the body's authority (Regulation (EC) No 765/2008, Art. 4(1): each Member
State appoints a single national accreditation body). The appointment has the shape of
EBSI's root trust-chain credential, VerifiableAuthorisationForTrustChain: the subject is
the appointed body, permissionFor names per credential type the schema and jurisdiction
it may issue under, and its own termsOfUse is a TrustFrameworkPolicy naming the legal
basis. The body's grants name it in termsOfUse as an IssuedUnderPolicy entry whose id
is the appointment, with its digest, like every other link.

A verifier that anchors the state for the appointer purpose accepts the grant's issuer
only when the named appointment is usable and not suspended, is issued by a configured
anchor for the appointer purpose, is about the grant's issuer, permits the grant's type
under the grant's own schema for the jurisdiction the profile requires (when it names
one), and was in force at the activity time. An appointment of another body, or one
that does not permit the grant, contradicts; a missing appointment or time is not
established.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import TYPE_CHECKING, Any, Literal

from .recognized_entities import _basis, _js, _list, _nonempty, _time, issuer_id

if TYPE_CHECKING:
    from .profile import RelianceProfile
    from .rm_v1_authority import BasisResult, NodeLookup

Doc = dict[str, Any]

APPOINTMENT_TYPE = "VerifiableAuthorisationForTrustChain"


@dataclass(frozen=True)
class AppointmentRules:
    appointer_purpose: str
    jurisdiction: str | None = None


def appointment_rules(
    profile: RelianceProfile,
) -> AppointmentRules | Literal["invalid"] | None:
    """The profile's appointment rules; None when absent, 'invalid' when malformed."""
    raw = profile.binding_rules.get("appointment")
    if raw is None:
        return None
    if not isinstance(raw, dict) or not _nonempty(raw.get("appointerPurpose")):
        return "invalid"
    jurisdiction = raw.get("jurisdiction")
    if jurisdiction is not None and not _nonempty(jurisdiction):
        return "invalid"
    return AppointmentRules(str(raw["appointerPurpose"]), jurisdiction)


def appointment_references(grant: Doc, lookup: NodeLookup) -> list[str]:
    """Appointments a grant names: IssuedUnderPolicy entries whose credential is a
    VerifiableAuthorisationForTrustChain, or could not be read (it may be one)."""
    found: list[str] = []
    for policy in _list(grant.get("termsOfUse")):
        if not isinstance(policy, dict) or policy.get("type") != "IssuedUnderPolicy":
            continue
        uri = policy.get("id")
        if not _nonempty(uri):
            continue
        node = lookup(str(uri))
        kind = None
        if node is not None:
            if node.document is not None:
                types = node.document.get("type")
                if isinstance(types, list) and len(types) > 1:
                    kind = str(types[1])
            else:
                kind = node.type
        if kind is None or kind == APPOINTMENT_TYPE:
            found.append(str(uri))
    return found


def _jurisdictions(value: Any) -> list[Any]:
    """EBSI's jurisdiction: one URI, or an array of URIs."""
    return [value] if isinstance(value, str) else _list(value)


def _from_appointment(
    basis_id: str,
    uri: str,
    grant: Doc,
    entity: str,
    rules: AppointmentRules,
    at: Any,
    lookup: NodeLookup,
    profile: RelianceProfile,
) -> BasisResult:
    sources = ("/termsOfUse", uri)
    node = lookup(uri)
    if node is None:
        return _basis(
            basis_id, "not_established", f"Appointment {uri} is unavailable.", sources
        )
    if node.usable != "established" or node.document is None:
        return _basis(
            basis_id,
            "contradicted" if node.usable == "contradicted" else "not_established",
            f"Appointment {uri} is not usable: {node.reason}",
            sources,
        )
    doc = node.document
    if APPOINTMENT_TYPE not in _list(doc.get("type")):
        return _basis(
            basis_id, "contradicted", f"{uri} is not a {APPOINTMENT_TYPE}.", sources
        )
    appointer = issuer_id(doc.get("issuer"))
    anchored = next((a for a in profile.trust_anchors if a.id == appointer), None)
    if anchored is None or rules.appointer_purpose not in anchored.purposes:
        return _basis(
            basis_id,
            "not_established",
            f"{_js(appointer)}, issuer of {uri}, is not a configured anchor for "
            f"{rules.appointer_purpose}.",
            sources,
        )
    if node.suspension is not None and node.suspension[0] != "established":
        state, reason = node.suspension
        return _basis(
            basis_id,
            state,
            f"{_js(appointer)} has suspended its appointment {uri}. {reason}"
            if state == "contradicted"
            else f"The suspension status of {uri} is not established: {reason}",
            sources,
        )
    raw_subject = doc.get("credentialSubject")
    subject: Doc = raw_subject if isinstance(raw_subject, dict) else {}
    if subject.get("id") != entity:
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} appoints {_js(subject.get('id'))}, not {entity}, the grant's "
            "issuer.",
            sources,
        )
    types = grant.get("type")
    grant_type = str(types[1]) if isinstance(types, list) and len(types) > 1 else None
    schema = grant.get("credentialSchema")
    grant_schema = schema.get("id") if isinstance(schema, dict) else None
    permissions = [
        p for p in _list(subject.get("permissionFor")) if isinstance(p, dict)
    ]
    for_grant = [
        p
        for p in permissions
        if p.get("schemaId") == grant_schema and grant_type in _list(p.get("types"))
    ]
    if not for_grant:
        offered = (
            ", ".join(_js(t) for p in permissions for t in _list(p.get("types"))[-1:])
            or "nothing"
        )
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} permits {entity} to issue {offered}, not {_js(grant_type)}.",
            sources,
        )
    wanted = rules.jurisdiction
    in_jurisdiction = (
        for_grant
        if wanted is None
        else [p for p in for_grant if wanted in _jurisdictions(p.get("jurisdiction"))]
    )
    if not in_jurisdiction:
        seen: list[str] = []
        for p in for_grant:
            for j in _jurisdictions(p.get("jurisdiction")):
                if _js(j) not in seen:
                    seen.append(_js(j))
        offered = ", ".join(seen) or "no jurisdiction"
        return _basis(
            basis_id,
            "contradicted",
            f"{uri} permits {_js(grant_type)} for {offered}, not for {wanted}.",
            sources,
        )
    activity = _time(at)
    if activity is None:
        return _basis(
            basis_id,
            "not_established",
            "No activity time is stated, so the appointment at that time is not "
            "established.",
            sources,
        )
    start, end = _time(doc.get("validFrom")), _time(doc.get("validUntil"))
    if start is None or end is None or activity < start or activity > end:
        return _basis(
            basis_id,
            "not_established",
            f"{uri} was not in force at the activity time {at}.",
            sources,
        )
    where = "" if wanted is None else f" in {wanted}"
    return _basis(
        basis_id,
        "established",
        f"{entity} is appointed by {_js(appointer)} (a configured anchor for "
        f"{rules.appointer_purpose}) to issue {_js(grant_type)}{where}, in force at "
        f"{at}, in {uri}.",
        sources,
    )


def appointment_standing(
    basis_id: str,
    grant: Doc,
    profile: RelianceProfile,
    lookup: NodeLookup,
    at: Any,
    direct: str,
) -> tuple[BasisResult, str | None] | None:
    """Standing through the appointment the grant names; None when the profile has no
    appointment rules. `direct` is why the issuer is not itself an anchor."""
    rules = appointment_rules(profile)
    if rules is None:
        return None
    if rules == "invalid":
        return (
            _basis(
                basis_id,
                "not_established",
                f"{direct} The profile's appointment rules are malformed.",
                ("/issuer",),
            ),
            None,
        )
    issuer = issuer_id(grant.get("issuer"))
    references = appointment_references(grant, lookup)
    if not references or issuer is None:
        return (
            _basis(
                basis_id,
                "not_established",
                f"{direct} The grant names no {APPOINTMENT_TYPE} in an "
                "IssuedUnderPolicy of its termsOfUse.",
                ("/issuer", "/termsOfUse"),
            ),
            None,
        )
    if len(references) > 1:
        return (
            _basis(
                basis_id,
                "not_established",
                f"{direct} The grant names several appointments; this binding has no "
                "deterministic selection.",
                ("/issuer", "/termsOfUse"),
            ),
            None,
        )
    uri = references[0]
    result = _from_appointment(basis_id, uri, grant, issuer, rules, at, lookup, profile)
    if result.state == "established":
        return result, uri
    return (
        _basis(
            basis_id,
            result.state,
            f"{direct} {result.reason}",
            ("/issuer", *result.sources),
        ),
        None,
    )
