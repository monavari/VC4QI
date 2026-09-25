# SPDX-License-Identifier: Apache-2.0
"""Authority routes and required support for RM v1 (mirrors rm-v1-authority.ts).

authorized = AND(global restrictions) AND OR(complete routes); route = AND(bases).
Authority is derived only from the chain's own termsOfUse references: unreferenced
credentials confer nothing (V07), discovered grants are unsupported (V08).
"""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Literal

from .profile import RelianceProfile
from .rm_scope import contained_in
from .types import SemanticState, semantic_and, semantic_or

RM = "https://vc4qi.example/bindings/rm/1#"
ISSUE_RM_CERTIFICATE = RM + "issueRmCertificate"
MAINTAIN_RM_SCOPE = RM + "maintainRmScope"
ISSUE_RM_STUDY = RM + "issueRmStudy"

Doc = dict[str, Any]


@dataclass(frozen=True)
class NodeFacts:
    uri: str
    usable: SemanticState
    reason: str
    document: Doc | None = None


NodeLookup = Callable[[str], NodeFacts | None]


@dataclass(frozen=True)
class BasisResult:
    id: str
    state: SemanticState
    reason: str
    sources: tuple[str, ...] = ()


@dataclass(frozen=True)
class RouteResult:
    id: str
    state: SemanticState
    execution: Literal["executed", "not_run"]
    bases: tuple[BasisResult, ...]
    chain: tuple[str, ...]


@dataclass(frozen=True)
class AuthorityResult:
    state: SemanticState
    reason: str
    restrictions: tuple[BasisResult, ...]
    routes: tuple[RouteResult, ...]


@dataclass(frozen=True)
class SupportResult:
    state: SemanticState
    reason: str
    bases: tuple[BasisResult, ...] = ()
    chain: tuple[str, ...] = field(default=())


def _ok(i: str, r: str, s: tuple[str, ...] = ()) -> BasisResult:
    return BasisResult(i, "established", r, s)


def _no(i: str, r: str, s: tuple[str, ...] = ()) -> BasisResult:
    return BasisResult(i, "contradicted", r, s)


def _unknown(i: str, r: str, s: tuple[str, ...] = ()) -> BasisResult:
    return BasisResult(i, "not_established", r, s)


def _list(value: Any) -> list[Any]:
    return value if isinstance(value, list) else []


def _subject(doc: Doc) -> Doc:
    subject = doc.get("credentialSubject")
    return subject if isinstance(subject, dict) else {}


def _type_of(doc: Doc) -> str | None:
    types = doc.get("type")
    return str(types[1]) if isinstance(types, list) and len(types) > 1 else None


def _permits(doc: Doc, activity: str) -> bool:
    return activity in _list(_subject(doc).get("permittedActivity"))


def _authorizing_reference(
    basis_id: str, doc: Doc, wanted: str, lookup: NodeLookup, stack: tuple[str, ...]
) -> tuple[BasisResult, NodeFacts | None]:
    candidates: list[str] = []
    for policy in _list(doc.get("termsOfUse")):
        if (
            isinstance(policy, dict)
            and policy.get("type") == "RmAuthorizationPolicy"
            and isinstance(policy.get("authorizationCredential"), dict)
        ):
            uri = str(policy["authorizationCredential"].get("id"))
            node = lookup(uri)
            if (
                node is None
                or node.document is None
                or _type_of(node.document) == wanted
            ):
                candidates.append(uri)
    if not candidates:
        return _unknown(
            basis_id,
            f"No recognized authorization policy references a {wanted}.",
            ("/termsOfUse",),
        ), None
    if len(candidates) > 1:
        return _unknown(
            basis_id,
            f"Several {wanted} references; the binding has no deterministic selection.",
            ("/termsOfUse",),
        ), None
    uri = candidates[0]
    sources = ("/termsOfUse", uri)
    if uri in stack:
        return _unknown(
            basis_id,
            f"Circular authorization: {uri} is already on the evaluation path.",
            sources,
        ), None
    node = lookup(uri)
    if node is None:
        return _unknown(
            basis_id, f"Referenced {wanted} {uri} is unavailable.", sources
        ), None
    if node.usable != "established" or node.document is None:
        state: SemanticState = (
            "contradicted" if node.usable == "contradicted" else "not_established"
        )
        return BasisResult(
            basis_id,
            state,
            f"Referenced {wanted} {uri} is not usable: {node.reason}",
            sources,
        ), None
    return _ok(basis_id, f"References {wanted} {uri}.", sources), node


def _grantee(basis_id: str, grant: Doc, actor: Any, what: str) -> BasisResult:
    holder = _subject(grant).get("id")
    sources = ("/credentialSubject/id", "/issuer")
    if not isinstance(holder, str) or not isinstance(actor, str):
        return _unknown(
            basis_id, f"{what}: grantee or exercising actor is missing.", sources
        )
    if holder == actor:
        return _ok(
            basis_id, f"{what}: grantee {holder} is the exercising actor.", sources
        )
    return _no(
        basis_id,
        f"{what}: grantee {holder} is not the exercising actor {actor}.",
        sources,
    )


def _anchor(
    basis_id: str, doc: Doc, purpose: str, profile: RelianceProfile
) -> BasisResult:
    issuer = doc.get("issuer")
    configured = next((a for a in profile.trust_anchors if a.id == issuer), None)
    if configured is None:
        return _unknown(
            basis_id, f"{issuer} is not a configured trust anchor.", ("/issuer",)
        )
    if purpose in configured.purposes:
        return _ok(
            basis_id, f"{issuer} is a configured anchor for {purpose}.", ("/issuer",)
        )
    return _unknown(
        basis_id, f"{issuer} is an anchor, but not for {purpose}.", ("/issuer",)
    )


def _route(route_id: str, bases: list[BasisResult], chain: list[str]) -> RouteResult:
    return RouteResult(
        route_id,
        semantic_and(tuple(b.state for b in bases)),
        "executed",
        tuple(bases),
        tuple(chain),
    )


def _activity(
    basis_id: str, doc: Doc, activity: str, allowed: str, missing: str
) -> BasisResult:
    source = ("/credentialSubject/permittedActivity",)
    return (
        _ok(basis_id, allowed, source)
        if _permits(doc, activity)
        else _no(basis_id, missing, source)
    )


def _operational_scope_route(
    target: NodeFacts,
    lookup: NodeLookup,
    profile: RelianceProfile,
    stack: tuple[str, ...],
) -> RouteResult:
    assert target.document is not None
    d = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]
    basis, o_node = _authorizing_reference(
        "authorizing-reference", d, "RmOperationalScope", lookup, stack
    )
    bases.append(basis)
    if o_node is None or o_node.document is None:
        return _route("operational-scope", bases, chain)
    o = o_node.document
    chain.append(o_node.uri)
    bases.append(
        _grantee("principal-binding", o, d.get("issuer"), "Operational scope O")
    )
    bases.append(
        _ok("self-maintained-scope", "O is issued by its own grantee.", ("/issuer",))
        if o.get("issuer") == _subject(o).get("id")
        else _no(
            "self-maintained-scope", "O is not issued by its own grantee.", ("/issuer",)
        )
    )
    bases.append(
        _activity(
            "activity-permission",
            o,
            ISSUE_RM_CERTIFICATE,
            "O permits issuing RM certificates.",
            "O does not permit issuing RM certificates.",
        )
    )
    basis, a_node = _authorizing_reference(
        "maintenance-grant", o, "RmAccreditation", lookup, (*stack, o_node.uri)
    )
    bases.append(basis)
    if a_node is None or a_node.document is None:
        return _route("operational-scope", bases, chain)
    a = a_node.document
    chain.append(a_node.uri)
    bases.append(
        _grantee("accreditation-grantee", a, o.get("issuer"), "Accreditation A")
    )
    source = ("/credentialSubject/permittedActivity",)
    bases.append(
        _ok(
            "projection-permission",
            "A permits maintaining an operational scope for RM certification.",
            source,
        )
        if _permits(a, MAINTAIN_RM_SCOPE) and _permits(a, ISSUE_RM_CERTIFICATE)
        else _no(
            "projection-permission",
            "A does not permit maintaining an operational scope for RM certification.",
            source,
        )
    )
    projection = contained_in(
        [r for r in _list(_subject(o).get("scope")) if isinstance(r, dict)],
        [r for r in _list(_subject(a).get("scope")) if isinstance(r, dict)],
    )
    bases.append(
        BasisResult(
            "bounded-projection",
            projection.state,
            projection.reason,
            ("/credentialSubject/scope",),
        )
    )
    bases.append(_anchor("trust-anchor", a, "accredit-rm-producers", profile))
    return _route("operational-scope", bases, chain)


def _direct_accreditation_route(
    target: NodeFacts,
    lookup: NodeLookup,
    profile: RelianceProfile,
    stack: tuple[str, ...],
) -> RouteResult:
    assert target.document is not None
    d = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]
    basis, a_node = _authorizing_reference(
        "authorizing-reference", d, "RmAccreditation", lookup, stack
    )
    bases.append(basis)
    if a_node is None or a_node.document is None:
        return _route("direct-accreditation", bases, chain)
    a = a_node.document
    chain.append(a_node.uri)
    bases.append(_grantee("principal-binding", a, d.get("issuer"), "Accreditation A"))
    bases.append(
        _activity(
            "activity-permission",
            a,
            ISSUE_RM_CERTIFICATE,
            "A permits issuing RM certificates.",
            "A does not permit issuing RM certificates.",
        )
    )
    bases.append(_anchor("trust-anchor", a, "accredit-rm-producers", profile))
    return _route("direct-accreditation", bases, chain)


CERTIFICATE_ROUTES: dict[
    str,
    Callable[[NodeFacts, NodeLookup, RelianceProfile, tuple[str, ...]], RouteResult],
] = {
    "operational-scope": _operational_scope_route,
    "direct-accreditation": _direct_accreditation_route,
}


def compose_authority(
    restrictions: tuple[BasisResult, ...],
    evaluated: tuple[RouteResult, ...],
    skipped: tuple[str, ...],
) -> AuthorityResult:
    """Restrictions outside the OR; a budget-cut search never disproves all routes."""
    routes = evaluated + tuple(
        RouteResult(i, "not_established", "not_run", (), ()) for i in skipped
    )
    restriction_state: SemanticState = (
        "established"
        if not restrictions
        else semantic_and(tuple(r.state for r in restrictions))
    )
    route_state: SemanticState = (
        "not_established" if not routes else semantic_or(tuple(r.state for r in routes))
    )
    state = semantic_and((restriction_state, route_state))
    winner = next((r for r in routes if r.state == "established"), None)
    if state == "established" and winner is not None:
        reason = f"Authorized through route {winner.id}; global restrictions hold."
    elif restriction_state == "contradicted":
        reason = "An applicable global restriction applies to every route."
    elif route_state == "contradicted":
        reason = "Every permitted route is contradicted."
    elif skipped:
        reason = (
            "The route search stopped at its budget before every route was evaluated."
        )
    else:
        reason = "No complete route is established."
    return AuthorityResult(state, reason, restrictions, routes)


def certificate_authority(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> AuthorityResult:
    if target.usable != "established" or target.document is None:
        return AuthorityResult(
            "not_established",
            "The target is not usable, so its authority is not evaluated.",
            (),
            (),
        )
    ids = profile.authority.certificate_routes
    budget = profile.authority.max_routes
    evaluated: list[RouteResult] = []
    for route_id in ids[:budget]:
        evaluate = CERTIFICATE_ROUTES.get(route_id)
        evaluated.append(
            _route(
                route_id,
                [
                    _unknown(
                        "installed-evaluator",
                        f"Route {route_id} has no installed evaluator.",
                    )
                ],
                [target.uri],
            )
            if evaluate is None
            else evaluate(target, lookup, profile, (target.uri,))
        )
    restrictions = tuple(
        _unknown(
            f"restriction:{r}", f"Global restriction {r} has no installed evaluator."
        )
        for r in profile.authority.global_restrictions
    )
    return compose_authority(restrictions, tuple(evaluated), tuple(ids[budget:]))


def study_authority(
    study: NodeFacts,
    lookup: NodeLookup,
    profile: RelianceProfile,
    stack: tuple[str, ...],
) -> RouteResult:
    assert study.document is not None
    s_doc = study.document
    bases: list[BasisResult] = []
    chain = [study.uri]
    basis, h_node = _authorizing_reference(
        "laboratory-authority-reference", s_doc, "RmLabAuthority", lookup, stack
    )
    bases.append(basis)
    if h_node is None or h_node.document is None:
        return _route("laboratory-authority", bases, chain)
    h = h_node.document
    chain.append(h_node.uri)
    bases.append(
        _grantee("laboratory-binding", h, s_doc.get("issuer"), "Laboratory authority H")
    )
    bases.append(
        _activity(
            "study-permission",
            h,
            ISSUE_RM_STUDY,
            "H permits issuing RM studies.",
            "H does not permit issuing RM studies.",
        )
    )
    s = _subject(s_doc)
    covered = any(
        isinstance(record, dict)
        and record.get("matrixIri") == s.get("matrixIri")
        and s.get("propertyIri") in _list(record.get("allowedPropertyIris"))
        and s.get("studyTypeIri") in _list(record.get("studyTypeIris"))
        for record in _list(_subject(h).get("scope"))
    )
    source = ("/credentialSubject/scope",)
    bases.append(
        _ok("study-scope", "H covers this matrix, property and study type.", source)
        if covered
        else _no(
            "study-scope",
            "H does not cover this matrix, property and study type.",
            source,
        )
    )
    bases.append(_anchor("laboratory-anchor", h, "recognize-rm-laboratories", profile))
    return _route("laboratory-authority", bases, chain)


def _time(value: Any) -> datetime | None:
    if not isinstance(value, str):
        return None
    try:
        return datetime.fromisoformat(
            value[:-1] + "+00:00" if value.endswith("Z") else value
        )
    except ValueError:
        return None


def certificate_support(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> SupportResult:
    """Required study: same batch, property and matrix; earlier; own authority."""
    if target.usable != "established" or target.document is None:
        return SupportResult(
            "not_established",
            "The target is not usable, so its support is not evaluated.",
        )
    d_doc = target.document
    references = [
        str(e.get("id"))
        for e in _list(d_doc.get("evidence"))
        if isinstance(e, dict) and e.get("type") == "RmStudyReference"
    ]
    if not references:
        basis = _unknown(
            "study-reference", "No RmStudyReference in evidence.", ("/evidence",)
        )
        return SupportResult(
            "not_established", "D cites no required study.", (basis,), (target.uri,)
        )
    if len(references) > 1:
        basis = _unknown(
            "study-reference", "Ambiguous study references.", ("/evidence",)
        )
        return SupportResult(
            "not_established",
            "Several study references; this binding has no composition for them.",
            (basis,),
            (target.uri,),
        )
    uri = references[0]
    node = lookup(uri)
    if node is None:
        basis = _unknown(
            "study-reference",
            f"Required study {uri} is unavailable.",
            ("/evidence", uri),
        )
        return SupportResult("not_established", basis.reason, (basis,), (target.uri,))
    if node.usable != "established" or node.document is None:
        state: SemanticState = (
            "contradicted" if node.usable == "contradicted" else "not_established"
        )
        basis = BasisResult(
            "study-reference",
            state,
            f"Required study {uri} is not usable: {node.reason}",
            ("/evidence", uri),
        )
        return SupportResult(state, basis.reason, (basis,), (target.uri,))
    s = _subject(node.document)
    d = _subject(d_doc)
    groups = _list(d.get("materialPropertiesList"))
    results = (
        _list(groups[0].get("results"))
        if groups and isinstance(groups[0], dict)
        else []
    )
    result = results[0] if results and isinstance(results[0], dict) else {}
    materials = _list(d.get("materials"))
    material = materials[0] if materials and isinstance(materials[0], dict) else {}
    bases: list[BasisResult] = [
        _ok("study-reference", f"Cites study {uri}.", ("/evidence", uri))
    ]
    bases.append(
        _ok(
            "same-batch", f"S concerns batch {s.get('id')}.", ("/credentialSubject/id",)
        )
        if s.get("id") == d.get("id")
        else _no(
            "same-batch",
            f"S concerns {s.get('id')}, not batch {d.get('id')}.",
            ("/credentialSubject/id",),
        )
    )
    prop = ("/credentialSubject/propertyIri",)
    bases.append(
        _ok(
            "same-property-and-matrix",
            "S concerns the certified property and matrix.",
            prop,
        )
        if s.get("propertyIri") == result.get("propertyIri")
        and s.get("matrixIri") == material.get("matrixIri")
        else _no(
            "same-property-and-matrix", "S concerns another property or matrix.", prop
        )
    )
    outcome = ("/credentialSubject/outcomeIri",)
    bases.append(
        _ok("study-outcome", "S reports the batch homogeneous.", outcome)
        if s.get("studyTypeIri") == RM + "Homogeneity"
        and s.get("outcomeIri") == RM + "Homogeneous"
        else _no("study-outcome", "S does not report a homogeneous batch.", outcome)
    )
    studied, certified = _time(s.get("activityTime")), _time(d.get("activityTime"))
    when = ("/credentialSubject/activityTime",)
    if studied is None or certified is None:
        bases.append(
            _unknown(
                "study-precedes-certification", "An activity time is missing.", when
            )
        )
    elif studied <= certified:
        bases.append(
            _ok(
                "study-precedes-certification",
                "The study precedes the certification activity.",
                when,
            )
        )
    else:
        bases.append(
            _no(
                "study-precedes-certification",
                "The study postdates the certification activity.",
                when,
            )
        )
    authority = study_authority(node, lookup, profile, (target.uri, uri))
    bases.extend(authority.bases)
    state = semantic_and(tuple(b.state for b in bases))
    reason = {
        "established": "Required study is applicable and independently authorized.",
        "contradicted": "Required study is contradicted.",
        "not_established": "Required study is not established.",
    }[state]
    return SupportResult(state, reason, tuple(bases), (target.uri, *authority.chain))
