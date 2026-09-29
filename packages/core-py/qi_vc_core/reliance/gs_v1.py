# SPDX-License-Identifier: Apache-2.0
"""Experimental GS certification v1 binding (mirrors gs-v1*.ts, phase I5).

The migrated gs-scheme-authorization use case: the GS mark is relied on only through
the complete route (competence AND scheme permission). Each half is discharged by its
own typed reference, grantee, activity, anchor and validity, and the certified claim
must be covered by both scopes. Neither incomplete basis alone establishes the route.
A certificate also needs its studies (gate 6): a type examination and a factory
inspection, each independently authorized.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from typing import Any

from .catalog import StaticResource, StaticResourceCatalog
from .manifest import BindingManifest
from .profile import RelianceProfile
from .rm_v1 import REPO_ROOT, VC_V2_CONTEXT, read_pinned_resources
from .rm_v1_artifacts import (
    _MISSING,
    ArtifactBinding,
    RmSliceEvaluation,
    _predicate,
    node_use_key,
    plan_refusal,
    refuse_plan,
    resolve_pointer,
    verify_chain,
)
from .rm_v1_authority import (
    AuthorityResult,
    BasisResult,
    NodeFacts,
    NodeLookup,
    RouteResult,
    _anchor,
    _authorizing_reference,
    _grantee,
    _in_force_at_activity,
    _no,
    _ok,
    _permits,
    _route,
    _unknown,
    claim_authority,
    compose_authority,
)
from .types import (
    ClaimAuthorizationResult,
    ConformityNotRequested,
    ConformityRequestedResult,
    ConformityResult,
    RelianceRequest,
    RelianceResult,
    SemanticState,
    SupportResult,
    TraceEntry,
    create_reliance_result,
    decision_from_required,
    semantic_and,
    semantic_or,
)

GS_V1_BINDING_ID = "https://vc4qi.example/bindings/gs/1"
GS_V1_CONTEXT = "https://vc4qi.example/contexts/gs/1"
GS_V1_VOCAB = "https://vc4qi.example/bindings/gs/1#"
GS_V1_SCHEMA_BASE = "https://vc4qi.example/schemas/gs/1/"
GS_V1_DIRECTORY = REPO_ROOT / "bindings" / "experimental" / "gs-v1"
SELECTED_CERTIFICATION = "/credentialSubject/certification"
SELECTED_MARKING = "/credentialSubject/marking"
GS_MARK = "https://vc4qi.example/bindings/gs/1#GsMark"
ROUTE_ID = "competence-and-scheme-permission"

GS_V1_ARTIFACT_BINDING = ArtifactBinding(
    "GS certification v1",
    {
        "GsAccreditation": f"{GS_V1_SCHEMA_BASE}accreditation.json",
        "GsSchemeAuthorization": f"{GS_V1_SCHEMA_BASE}scheme-authorization.json",
        "GsCertificate": f"{GS_V1_SCHEMA_BASE}certificate.json",
        "GsProductPassport": f"{GS_V1_SCHEMA_BASE}product-passport.json",
        "GsTestReport": f"{GS_V1_SCHEMA_BASE}test-report.json",
        "GsInspectionReport": f"{GS_V1_SCHEMA_BASE}inspection-report.json",
        "BitstringStatusListCredential": f"{GS_V1_SCHEMA_BASE}status-list.json",
    },
    lambda kind: [VC_V2_CONTEXT]
    if kind == "BitstringStatusListCredential"
    else [VC_V2_CONTEXT, GS_V1_CONTEXT],
)


def load_gs_v1_catalog(
    extra: list[StaticResource] | None = None,
) -> StaticResourceCatalog:
    """Install the GS v1 pinned contexts and schemas into a catalog."""
    return StaticResourceCatalog(
        read_pinned_resources(GS_V1_DIRECTORY / "catalog.json") + list(extra or [])
    )


def _short(iri: Any) -> str:
    text = str(iri)
    for sep in ("#", "/"):
        text = text.rsplit(sep, 1)[-1]
    return text


def _subject(doc: dict[str, Any]) -> dict[str, Any]:
    subject = doc.get("credentialSubject")
    return subject if isinstance(subject, dict) else {}


@dataclass(frozen=True)
class MappedCertification:
    product_category_iri: str
    standard_iris: tuple[str, ...]


@dataclass(frozen=True)
class MappedMarking:
    mark_iri: str
    product_model_iri: str


@dataclass(frozen=True)
class GsOutcome:
    state: SemanticState
    reason: str
    sources: tuple[str, ...] = ()
    certification: MappedCertification | None = None
    marking: MappedMarking | None = None
    records: tuple[str, ...] = ()


def map_certification(value: Any, pointer: str) -> GsOutcome:
    """Gate 4: the selected certification statement."""
    sources = (pointer,)
    if not isinstance(value, dict) or not isinstance(
        value.get("productCategoryIri"), str
    ):
        return GsOutcome(
            "not_established",
            "The selected certification names no product category.",
            sources,
        )
    standards = tuple(s for s in value.get("standardIris") or [] if isinstance(s, str))
    listed = ", ".join(_short(s) for s in standards)
    return GsOutcome(
        "established",
        f"Mapped certification of {_short(value['productCategoryIri'])} against "
        f"[{listed}].",
        sources,
        certification=MappedCertification(value["productCategoryIri"], standards),
    )


def _half(
    name: str, outcomes: list[tuple[str, SemanticState, str]]
) -> tuple[SemanticState, str, str | None]:
    if not outcomes:
        return "not_established", f"The {name} scope has no records.", None
    covering = next((o for o in outcomes if o[1] == "established"), None)
    if covering is not None:
        return "established", covering[2], covering[0]
    listed = " | ".join(o[2] for o in outcomes)
    return (
        semantic_or(tuple(o[1] for o in outcomes)),
        f"No single {name} record covers it ({listed})",
        None,
    )


def certification_coverage(
    certification: MappedCertification,
    competence: list[dict[str, Any]],
    scheme: list[dict[str, Any]],
) -> GsOutcome:
    """Gate 5: one competence record (category, standards) AND one scheme record."""
    sources = ("/credentialSubject/scope",)
    category = certification.product_category_iri
    standards = certification.standard_iris
    competence_outcomes: list[tuple[str, SemanticState, str]] = []
    for record in competence:
        rid = str(record.get("id"))
        allowed = list(record.get("standardIris") or [])
        outside = [s for s in standards if s not in allowed]
        if record.get("productCategoryIri") != category:
            competence_outcomes.append(
                (
                    rid,
                    "contradicted",
                    f"{_short(rid)}: category {_short(category)} ≠ "
                    f"{_short(record.get('productCategoryIri'))}",
                )
            )
        elif outside:
            competence_outcomes.append(
                (
                    rid,
                    "contradicted",
                    f"{_short(rid)}: standard {', '.join(_short(s) for s in outside)} "
                    "is not in the accredited scope",
                )
            )
        elif not standards and allowed:
            competence_outcomes.append(
                (
                    rid,
                    "not_established",
                    f"{_short(rid)} restricts standards, but the certification names "
                    "none",
                )
            )
        else:
            listed = ", ".join(_short(s) for s in standards)
            competence_outcomes.append(
                (
                    rid,
                    "established",
                    f"{_short(rid)} covers {_short(category)} against [{listed}]",
                )
            )
    scheme_outcomes: list[tuple[str, SemanticState, str]] = []
    for record in scheme:
        rid = str(record.get("id"))
        if record.get("productCategoryIri") == category:
            scheme_outcomes.append(
                (
                    rid,
                    "established",
                    f"{_short(rid)} permits the GS mark for {_short(category)}",
                )
            )
        else:
            scheme_outcomes.append(
                (
                    rid,
                    "contradicted",
                    f"{_short(rid)}: category {_short(category)} ≠ "
                    f"{_short(record.get('productCategoryIri'))}",
                )
            )
    c_state, c_reason, c_record = _half("competence", competence_outcomes)
    s_state, s_reason, s_record = _half("scheme", scheme_outcomes)
    state = semantic_and((c_state, s_state))
    records = (
        (c_record, s_record) if state == "established" and c_record and s_record else ()
    )
    return GsOutcome(
        state,
        f"Competence: {c_reason}. Scheme: {s_reason}.",
        sources,
        records=tuple(r for r in records if r),
    )


def gs_competence_and_scheme(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> RouteResult:
    """Route: certificate ← GS-A (competence) AND ← GS-S (scheme permission)."""
    assert target.document is not None
    d = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]

    def half(
        prefix: str, kind: str, activity: str, what: str, purpose: str, name: str
    ) -> NodeFacts | None:
        basis, node = _authorizing_reference(
            f"{prefix}-reference",
            d,
            kind,
            lookup,
            (target.uri,),
            "GsAuthorizationPolicy",
        )
        bases.append(basis)
        if node is None or node.document is None:
            return None
        grant = node.document
        bases.append(_grantee(f"{prefix}-grantee", grant, d.get("issuer"), name))
        sources = ("/credentialSubject/permittedActivity",)
        bases.append(
            _ok(f"{prefix}-permission", f"{name} permits {what}.", sources)
            if _permits(grant, GS_V1_VOCAB + activity)
            else _no(f"{prefix}-permission", f"{name} does not permit {what}.", sources)
        )
        bases.append(_anchor(f"{prefix}-anchor", grant, purpose, profile))
        return node

    a = half(
        "competence",
        "GsAccreditation",
        "certifyProducts",
        "certifying products",
        "accredit-certification-bodies",
        "Accreditation GS-A",
    )
    s = half(
        "scheme",
        "GsSchemeAuthorization",
        "awardGsMark",
        "awarding the GS mark",
        "authorize-gs-certification",
        "Scheme authorization GS-S",
    )
    if a is None or s is None or a.document is None or s.document is None:
        return _route(ROUTE_ID, bases, chain)
    chain += [a.uri, s.uri]
    bases.append(_in_force_at_activity(d, [("GS-A", a.document), ("GS-S", s.document)]))
    return _route(ROUTE_ID, bases, chain, a.uri)


def route_scopes(
    route: RouteResult, lookup: NodeLookup
) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    """Scope records of the route's competence and scheme grants."""

    def records(uri: str | None) -> list[dict[str, Any]]:
        if uri is None:
            return []
        node = lookup(uri)
        scope = _subject((node.document if node else None) or {}).get("scope")
        return [r for r in scope or [] if isinstance(r, dict)]

    scheme_uri = route.chain[2] if len(route.chain) == 3 else None
    return records(route.scope), records(scheme_uri)


def map_marking(value: Any, pointer: str) -> GsOutcome:
    """Gate 4 for a product passport: the claimed marking, for which model."""
    sources = (pointer,)
    if (
        not isinstance(value, dict)
        or not isinstance(value.get("markIri"), str)
        or not isinstance(value.get("productModelIri"), str)
    ):
        return GsOutcome(
            "not_established",
            "The selected marking names no mark or product model.",
            sources,
        )
    if value["markIri"] != GS_MARK:
        return GsOutcome(
            "not_established",
            f"Mark {_short(value['markIri'])} has no interpretation in this binding.",
            sources,
        )
    return GsOutcome(
        "established",
        f"Mapped a GS-mark claim for model {_short(value['productModelIri'])}.",
        sources,
        marking=MappedMarking(value["markIri"], value["productModelIri"]),
    )


def marking_coverage(
    marking: MappedMarking, certificate: dict[str, Any] | None
) -> GsOutcome:
    """Claim coverage for a passport: the certificate certifies exactly this model."""
    sources = ("/credentialSubject/id",)
    if certificate is None:
        return GsOutcome("not_established", "No certificate was reached.", sources)
    model = _subject(certificate).get("id")
    name = _short(certificate.get("id"))
    if model == marking.product_model_iri:
        return GsOutcome(
            "established",
            f"{name} certifies model {_short(model)}.",
            sources,
            records=(str(certificate.get("id")),),
        )
    return GsOutcome(
        "contradicted",
        f"{name} certifies {_short(model)}, not model "
        f"{_short(marking.product_model_iri)}.",
        sources,
    )


def gs_certified_product(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> RouteResult:
    """Route for an experimental product passport (not EU DPP conformance).

    The manufacturer may claim the GS mark for a unit only under a GS certificate that
    names it, is in force at the passport's activity time and itself holds the complete
    GS route with its certification covered ("certificate:" bases).
    """
    assert target.document is not None
    p = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]
    basis, c_node = _authorizing_reference(
        "certificate-reference",
        p,
        "GsCertificate",
        lookup,
        (target.uri,),
        "GsAuthorizationPolicy",
    )
    bases.append(basis)
    if c_node is None or c_node.document is None:
        return _route("gs-certified-product", bases, chain)
    c = c_node.document
    chain.append(c_node.uri)
    maker = _subject(c).get("manufacturerIri")
    maker_sources = ("/credentialSubject/manufacturerIri", "/issuer")
    if not isinstance(maker, str):
        bases.append(
            _unknown(
                "manufacturer-binding",
                "The certificate names no manufacturer.",
                ("/credentialSubject/manufacturerIri",),
            )
        )
    elif maker == p.get("issuer"):
        bases.append(
            _ok(
                "manufacturer-binding",
                f"The certificate names the passport issuer {maker} as manufacturer.",
                maker_sources,
            )
        )
    else:
        bases.append(
            _no(
                "manufacturer-binding",
                f"The certificate names {maker}, not the passport issuer "
                f"{p.get('issuer')}.",
                maker_sources,
            )
        )
    in_force = _in_force_at_activity(p, [("The certificate", c)])
    bases.append(
        BasisResult(
            "certificate-in-force", in_force.state, in_force.reason, in_force.sources
        )
    )
    own = gs_competence_and_scheme(c_node, lookup, profile)
    bases.extend(
        BasisResult(f"certificate:{b.id}", b.state, b.reason, b.sources)
        for b in own.bases
    )
    mapped = map_certification(
        _subject(c).get("certification"), "/credentialSubject/certification"
    )
    if mapped.certification is None:
        covered_state, covered_reason = mapped.state, mapped.reason
    else:
        competence, scheme = route_scopes(own, lookup)
        covered = certification_coverage(mapped.certification, competence, scheme)
        covered_state, covered_reason = covered.state, covered.reason
    bases.append(
        BasisResult(
            "certificate:claim-coverage",
            covered_state,
            covered_reason,
            ("/credentialSubject/certification",),
        )
    )
    chain.extend(own.chain[1:])
    return _route("gs-certified-product", bases, chain, c_node.uri)


# ---------------------------------------------------------------- studies (gate 6)

PASS = f"{GS_V1_VOCAB}Pass"
_STUDIES = (
    (
        "type-examination",
        "GsTypeExaminationReference",
        "GsTestReport",
        "testProducts",
        "accredit-testing-laboratories",
        "type examination",
    ),
    (
        "factory-inspection",
        "GsFactoryInspectionReference",
        "GsInspectionReport",
        "inspectFactories",
        "accredit-certification-bodies",
        "factory inspection",
    ),
)


@dataclass(frozen=True)
class GsSupportResult:
    obligation_id: str
    state: SemanticState
    reason: str
    bases: tuple[BasisResult, ...]
    chain: tuple[str, ...]


def _check(
    basis_id: str, holds: bool | None, yes: str, no: str, sources: tuple[str, ...]
) -> BasisResult:
    if holds is None:
        return _unknown(basis_id, no, sources)
    return _ok(basis_id, yes, sources) if holds else _no(basis_id, no, sources)


def _list(value: Any) -> list[Any]:
    return value if isinstance(value, list) else []


def _instant(value: Any) -> datetime | None:
    if not isinstance(value, str):
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def _study(
    certificate: NodeFacts,
    lookup: NodeLookup,
    profile: RelianceProfile,
    spec: tuple[str, str, str, str, str, str],
) -> GsSupportResult:
    obligation_id, reference, kind, activity, purpose, what = spec
    assert certificate.document is not None
    c_doc = certificate.document
    c = _subject(c_doc)
    certification = c.get("certification")
    certified = certification if isinstance(certification, dict) else {}
    bases: list[BasisResult] = []

    def done(chain: tuple[str, ...]) -> GsSupportResult:
        state = semantic_and(tuple(b.state for b in bases))
        failed = next(
            (b for b in bases if b.state == state and state != "established"), None
        )
        reason = (
            f"The {what} applies and is independently authorized."
            if state == "established"
            else f"The {what}: {failed.reason if failed else 'not established'}"
        )
        return GsSupportResult(obligation_id, state, reason, tuple(bases), chain)

    cited = [
        str(e.get("id"))
        for e in _list(c_doc.get("evidence"))
        if isinstance(e, dict) and e.get("type") == reference
    ]
    if len(cited) != 1:
        bases.append(
            _unknown(
                "reference",
                f"The certificate cites no {what}."
                if not cited
                else f"The certificate cites several {what}s; none is chosen.",
                ("/evidence",),
            )
        )
        return done(())
    uri = cited[0]
    node = lookup(uri)
    if node is None or node.usable != "established" or node.document is None:
        reason = (
            f"{_short(uri)} is unavailable."
            if node is None
            else f"{_short(uri)} is not usable: {node.reason}"
        )
        state: SemanticState = (
            "contradicted"
            if node is not None and node.usable == "contradicted"
            else "not_established"
        )
        bases.append(BasisResult("reference", state, reason, ("/evidence", uri)))
        return done(())
    r_doc = node.document
    r = _subject(r_doc)
    bases.append(
        _check(
            "reference",
            kind in _list(r_doc.get("type")),
            f"Cites {what} {_short(uri)}.",
            f"{_short(uri)} is not a {kind}.",
            ("/evidence", uri),
        )
    )
    if obligation_id == "type-examination":
        bases.append(
            _check(
                "same-model",
                r.get("productModelIri") == c.get("id"),
                f"{_short(uri)} examined model {_short(c.get('id'))}.",
                f"{_short(uri)} examined {_short(r.get('productModelIri'))}, "
                f"not model {_short(c.get('id'))}.",
                ("/credentialSubject/productModelIri",),
            )
        )
        examined = _list(r.get("standardIris"))
        wanted = _list(certified.get("standardIris"))
        missing = [s for s in wanted if s not in examined]
        same_category = r.get("productCategoryIri") == certified.get(
            "productCategoryIri"
        )
        bases.append(
            _check(
                "covers-certification",
                same_category and not missing,
                f"{_short(uri)} covers {_short(certified.get('productCategoryIri'))} "
                f"against [{', '.join(_short(s) for s in wanted)}].",
                f"{_short(uri)} examined {_short(r.get('productCategoryIri'))}, "
                f"not {_short(certified.get('productCategoryIri'))}."
                if not same_category
                else f"{_short(uri)} did not examine "
                f"{', '.join(_short(s) for s in missing)}.",
                ("/credentialSubject/standardIris",),
            )
        )
    else:
        inspected, maker = r.get("manufacturerIri"), c.get("manufacturerIri")
        bases.append(
            _check(
                "same-manufacturer",
                inspected == maker
                if isinstance(inspected, str) and isinstance(maker, str)
                else None,
                f"{_short(uri)} inspected the certificate's manufacturer.",
                f"{_short(uri)} inspected {inspected}, not the certificate's "
                f"manufacturer {maker}.",
                ("/credentialSubject/manufacturerIri",),
            )
        )
    bases.append(
        _check(
            "outcome",
            r.get("outcomeIri") == PASS,
            f"{_short(uri)} passed.",
            f"{_short(uri)} did not pass ({_short(r.get('outcomeIri'))}).",
            ("/credentialSubject/outcomeIri",),
        )
    )
    studied, certified_at = _instant(r.get("activityTime")), _instant(
        c.get("activityTime")
    )
    bases.append(
        _check(
            "precedes-certification",
            studied <= certified_at
            if studied is not None and certified_at is not None
            else None,
            f"The {what} ({r.get('activityTime')}) precedes the certification.",
            f"The {what} ({r.get('activityTime')}) follows the certification "
            f"({c.get('activityTime')})."
            if studied is not None and certified_at is not None
            else "An activity time is missing.",
            ("/credentialSubject/activityTime",),
        )
    )
    basis, g_node = _authorizing_reference(
        "accreditation-reference",
        r_doc,
        "GsAccreditation",
        lookup,
        (certificate.uri, uri),
        "GsAuthorizationPolicy",
    )
    bases.append(basis)
    if g_node is None or g_node.document is None:
        return done((uri,))
    g = g_node.document
    name = _short(g_node.uri)
    issuer = r_doc.get("issuer")
    bases.append(
        _grantee("accreditation-grantee", g, issuer, f"Accreditation {name}")
    )
    bases.append(
        _check(
            "accreditation-permission",
            _permits(g, f"{GS_V1_VOCAB}{activity}"),
            f"{name} permits {activity}.",
            f"{name} does not permit {activity}.",
            ("/credentialSubject/permittedActivity",),
        )
    )
    bases.append(_anchor("accreditation-anchor", g, purpose, profile))
    in_force = _in_force_at_activity(r_doc, [(name, g)])
    bases.append(
        BasisResult(
            "accreditation-in-force", in_force.state, in_force.reason, in_force.sources
        )
    )
    if obligation_id == "type-examination":
        examined = _list(r.get("standardIris"))
        covering = next(
            (
                s
                for s in _list(_subject(g).get("scope"))
                if isinstance(s, dict)
                and s.get("productCategoryIri") == r.get("productCategoryIri")
                and all(x in _list(s.get("standardIris")) for x in examined)
            ),
            None,
        )
        bases.append(
            _check(
                "accreditation-scope",
                covering is not None,
                f"{_short((covering or {}).get('id'))} covers the examination.",
                f"No record of {name} covers {_short(r.get('productCategoryIri'))} "
                f"against [{', '.join(_short(s) for s in examined)}].",
                ("/credentialSubject/scope",),
            )
        )
    return done((uri, g_node.uri))


def certificate_support(
    certificate: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> tuple[GsSupportResult, ...]:
    """Gate 6 for a GS certificate: its type examination and factory inspection.

    Each is cited once as typed evidence, is usable, concerns this certificate, passed,
    precedes the certification, and is independently authorized by an anchored
    accreditation of its issuer that permits the activity and was in force at the
    study; a type examination's category and standards must lie in one scope record.
    """
    return tuple(_study(certificate, lookup, profile, spec) for spec in _STUDIES)


GS_CERTIFICATE_ROUTES = {
    ROUTE_ID: gs_competence_and_scheme,
    "gs-certified-product": gs_certified_product,
}


def evaluate_gs_slice(
    request: RelianceRequest,
    catalog: StaticResourceCatalog,
    manifest: BindingManifest,
    profile: RelianceProfile,
) -> RmSliceEvaluation:
    """Evaluate a reliance request over the GS v1 binding (gates 0-6)."""
    if (
        manifest.id != GS_V1_BINDING_ID
        or profile.binding.id != manifest.id
        or profile.binding.version != manifest.version
    ):
        raise ValueError(
            f"Profile {profile.id}@{profile.version} is not configured for "
            f"{GS_V1_BINDING_ID}@{manifest.version}."
        )
    refusal = plan_refusal(request, manifest, profile)
    if refusal is not None:
        return RmSliceEvaluation(result=refuse_plan(request, refusal), artifacts=())
    chain = verify_chain(request, catalog, manifest, profile, GS_V1_ARTIFACT_BINDING)
    facts = chain.facts
    target_facts = facts[request.target_id]
    target_document = target_facts.document

    ids = profile.authority.certificate_routes
    budget = profile.authority.max_routes
    authority: AuthorityResult
    evaluated: list[RouteResult] = []
    if target_document is None:
        authority = AuthorityResult(
            "not_established",
            "The target is not usable, so its authority is not evaluated.",
            (),
            (),
        )
    else:
        for route_id in ids[:budget]:
            evaluate = GS_CERTIFICATE_ROUTES.get(route_id)
            evaluated.append(
                _route(
                    route_id,
                    [
                        _unknown(
                            "installed-evaluator",
                            f"Route {route_id} has no installed evaluator.",
                        )
                    ],
                    [target_facts.uri],
                )
                if evaluate is None
                else evaluate(target_facts, facts.get, profile)
            )
        authority = compose_authority((), tuple(evaluated), tuple(ids[budget:]))
    winner = next((r for r in authority.routes if r.state == "established"), None)

    kinds = (target_document or {}).get("type")
    is_passport = isinstance(kinds, list) and kinds[1:2] == ["GsProductPassport"]
    selectable = SELECTED_MARKING if is_passport else SELECTED_CERTIFICATION
    claims: list[tuple[Any, GsOutcome | None, dict[str, GsOutcome]]] = []
    authorization: list[ClaimAuthorizationResult] = []
    for claim in request.selected_claims:
        coverage: dict[str, GsOutcome] = {}
        selected = (
            resolve_pointer(target_document, claim.source_pointer)
            if target_document is not None and claim.source_pointer == selectable
            else _MISSING
        )
        if selected is _MISSING:
            reason = (
                "The target is not usable, so its claims are not read."
                if target_document is None
                else f"Selected claim {claim.source_pointer} is not the "
                f"{'marking' if is_passport else 'certification statement'} of the "
                "usable target."
            )
            claims.append((claim, None, coverage))
            authorization.append(
                ClaimAuthorizationResult(
                    state="not_established",
                    execution="executed",
                    reasons=(reason,),
                    source_pointers=(),
                    claim_id=claim.id,
                    route_witness_ids=(),
                )
            )
            continue
        mapped = (
            map_marking(selected, claim.source_pointer)
            if is_passport
            else map_certification(selected, claim.source_pointer)
        )
        claims.append((claim, mapped, coverage))
        if mapped.certification is None and mapped.marking is None:
            authorization.append(
                ClaimAuthorizationResult(
                    state=mapped.state,
                    execution="executed",
                    reasons=(f"Gate 4: {mapped.reason}",),
                    source_pointers=(claim.source_pointer,),
                    claim_id=claim.id,
                    route_witness_ids=(),
                )
            )
            continue

        def cover(
            route: RouteResult,
            mapped: GsOutcome = mapped,
            coverage: dict[str, GsOutcome] = coverage,
        ) -> BasisResult:
            if mapped.marking is not None:
                node = facts.get(route.scope) if route.scope else None
                covered = marking_coverage(
                    mapped.marking, node.document if node else None
                )
            else:
                assert mapped.certification is not None
                competence, scheme = route_scopes(route, facts.get)
                covered = certification_coverage(
                    mapped.certification, competence, scheme
                )
            sources = (*route.chain[1:], *covered.sources)
            coverage[route.id] = GsOutcome(
                covered.state, covered.reason, sources, records=covered.records
            )
            return BasisResult("claim-coverage", covered.state, covered.reason, sources)

        composed = claim_authority(authority, cover)
        chosen = next((r for r in composed.routes if r.state == "established"), None)
        reasons = (composed.reason,) + (
            (coverage[chosen.id].reason,)
            if chosen
            else tuple(f"{rid}: {c.reason}" for rid, c in coverage.items())
        )
        authorization.append(
            ClaimAuthorizationResult(
                state=composed.state,
                execution="executed",
                reasons=reasons,
                source_pointers=(claim.source_pointer,),
                claim_id=claim.id,
                route_witness_ids=(
                    f"route:{chosen.id}",
                    *chosen.chain,
                    *(f"record:{r}" for r in coverage[chosen.id].records),
                )
                if composed.state == "established" and chosen
                else (),
            )
        )

    # Gate 6: the studies of the certificate (the target, or the one a passport cites).
    certificate_uri = (
        None
        if target_document is None
        else next((r.chain[1] for r in evaluated if len(r.chain) > 1), None)
        if is_passport
        else request.target_id
    )
    certificate_node = None if certificate_uri is None else facts.get(certificate_uri)
    studies: tuple[GsSupportResult, ...]
    if target_document is None:
        studies = ()
    elif (
        certificate_node is not None
        and certificate_node.usable == "established"
        and certificate_node.document is not None
    ):
        studies = certificate_support(certificate_node, facts.get, profile)
    else:
        studies = tuple(
            GsSupportResult(
                obligation,
                "not_established",
                "No usable GS certificate was reached, so its studies are not "
                "evaluated.",
                (),
                (),
            )
            for obligation in ("type-examination", "factory-inspection")
        )
    support = tuple(
        SupportResult(
            state=s.state,
            execution="executed",
            reasons=(s.reason,),
            source_pointers=("/evidence",),
            obligation_id=f"gs-v1:{s.obligation_id}",
            witness_ids=s.chain if s.state == "established" else (),
        )
        for s in studies
    )

    conformity: ConformityResult
    if request.conformity is None:
        conformity = ConformityNotRequested()
    else:
        no_rules = _predicate(
            "not_established",
            (
                "The GS v1 binding installs no conformity requirements or decision "
                "rules.",
            ),
        )
        conformity = ConformityRequestedResult(
            state=no_rules.state,
            execution=no_rules.execution,
            reasons=no_rules.reasons,
            source_pointers=(),
            requirement_id=request.conformity.requirement_id,
            decision_rule_id=request.conformity.decision_rule_id,
        )

    decisive = {
        request.target_id,
        *(winner.chain if winner else ()),
        *(u for s in studies if s.state == "established" for u in s.chain),
    }
    required: list[SemanticState] = [
        r.state
        for a in chain.artifacts
        if a.artifact_id in decisive
        for r in chain.verification_of(a)
    ]
    required += [r.state for r in authorization]
    required += [r.state for r in support]
    if isinstance(conformity, ConformityRequestedResult):
        required.append(conformity.state)

    trace: list[TraceEntry] = list(chain.trace)
    target = chain.target
    use = node_use_key(target.artifact_id, target.digest_sri, "target", request)
    for claim, mapped_claim, coverage_by_route in claims:
        if mapped_claim is not None:
            trace.append(
                TraceEntry(
                    4,
                    use,
                    f"claim-mapping:{claim.id}",
                    mapped_claim.state,
                    "executed",
                    mapped_claim.reason,
                    mapped_claim.sources,
                )
            )
        for route_id, covered in coverage_by_route.items():
            trace.append(
                TraceEntry(
                    5,
                    use,
                    f"claim-coverage:{claim.id}:{route_id}",
                    covered.state,
                    "executed",
                    covered.reason,
                    covered.sources,
                )
            )
    for claim_result in authorization:
        trace.append(
            TraceEntry(
                5,
                use,
                f"claim-authorization:{claim_result.claim_id}",
                claim_result.state,
                claim_result.execution,
                " ".join(claim_result.reasons),
                claim_result.source_pointers,
            )
        )
    trace.append(
        TraceEntry(
            5,
            use,
            "authority",
            authority.state,
            "executed",
            authority.reason,
            winner.chain if winner else (),
        )
    )
    for route in authority.routes:
        if route.execution == "not_run":
            trace.append(
                TraceEntry(
                    5,
                    use,
                    f"route:{route.id}",
                    "not_established",
                    "not_run",
                    "Not evaluated: the route budget was exhausted.",
                    (),
                )
            )
        else:
            trace.append(
                TraceEntry(
                    5,
                    use,
                    f"route:{route.id}",
                    route.state,
                    "executed",
                    f"Route {route.id} is {route.state}.",
                    route.chain,
                )
            )
        for basis in route.bases:
            trace.append(
                TraceEntry(
                    5,
                    use,
                    f"route:{route.id}:{basis.id}",
                    basis.state,
                    "executed",
                    basis.reason,
                    basis.sources,
                )
            )
    for study in studies:
        for basis in study.bases:
            trace.append(
                TraceEntry(
                    6,
                    use,
                    f"support:{study.obligation_id}:{basis.id}",
                    basis.state,
                    "executed",
                    basis.reason,
                    basis.sources,
                )
            )
    for obligation in support:
        trace.append(
            TraceEntry(
                6,
                use,
                obligation.obligation_id,
                obligation.state,
                obligation.execution,
                " ".join(obligation.reasons),
                (),
            )
        )
    if isinstance(conformity, ConformityRequestedResult):
        trace.append(
            TraceEntry(
                6,
                use,
                f"conformity:{conformity.requirement_id}",
                conformity.state,
                conformity.execution,
                " ".join(conformity.reasons),
                (),
            )
        )

    result: RelianceResult = create_reliance_result(
        RelianceResult(
            request_id=request.request_id,
            target_id=request.target_id,
            binding=request.binding,
            profile=request.profile,
            artifact_verification=chain.verification,
            authorization=tuple(authorization),
            support=support,
            conformity=conformity,
            decision=decision_from_required(tuple(required)),
            trace=tuple(trace),
            resources=chain.resources,
            limitations=(
                "The GS route is a fictional profile example (competence AND scheme "
                "permission), not a universal GS or legal rule.",
                *(
                    (
                        "The product passport is an experimental credential in this "
                        "binding, not EU Digital Product Passport conformance.",
                    )
                    if is_passport
                    else ()
                ),
                "Verification failures of credentials outside the selected route and "
                "study chains are reported but do not decide the request.",
                "Fixture grants are fictional: an accreditation or scheme "
                "authorization here has no legal effect.",
            ),
        )
    )
    return RmSliceEvaluation(result=result, artifacts=chain.artifacts)
