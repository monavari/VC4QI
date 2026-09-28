# SPDX-License-Identifier: Apache-2.0
"""Experimental GS certification v1 binding (mirrors gs-v1*.ts, phase I5).

The migrated gs-scheme-authorization use case: the GS mark is relied on only through
the complete route (competence AND scheme permission). Each half is discharged by its
own typed reference, grantee, activity, anchor and validity, and the certified claim
must be covered by both scopes. Neither incomplete basis alone establishes the route.
"""

from __future__ import annotations

from dataclasses import dataclass
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
    if target_document is None:
        authority = AuthorityResult(
            "not_established",
            "The target is not usable, so its authority is not evaluated.",
            (),
            (),
        )
    else:
        evaluated: list[RouteResult] = []
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

    decisive = {request.target_id, *(winner.chain if winner else ())}
    required: list[SemanticState] = [
        r.state
        for a in chain.artifacts
        if a.artifact_id in decisive
        for r in chain.verification_of(a)
    ]
    required += [r.state for r in authorization]
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
            support=(),
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
                "Verification failures of credentials outside the selected route are "
                "reported but do not decide the request.",
                "Fixture grants are fictional: an accreditation or scheme "
                "authorization here has no legal effect.",
            ),
        )
    )
    return RmSliceEvaluation(result=result, artifacts=chain.artifacts)
