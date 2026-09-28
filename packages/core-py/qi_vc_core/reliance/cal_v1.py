# SPDX-License-Identifier: Apache-2.0
"""Experimental calibration (DCC) v1 binding (mirrors cal-v1*.ts, phase I5).

A selected measurement group is one claim. Gate 4 maps its results into exact pascal
quantities (Pa, kPa, MPa; k = 2 only). Gate 5 requires one complete record of the
route's scope credential to cover the group's quantity kind, every method it names and
every result, including the admitted CMC floor when the profile applies it. Groups
never combine (S19); a record restricting methods against a group naming none is not
established (S18).
"""

from __future__ import annotations

from dataclasses import dataclass
from fractions import Fraction
from typing import Any

from .catalog import StaticResource, StaticResourceCatalog
from .manifest import BindingManifest
from .profile import RelianceProfile
from .rm_scope import format_decimal, parse_decimal
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

CAL_V1_BINDING_ID = "https://vc4qi.example/bindings/cal/1"
CAL_V1_CONTEXT = "https://vc4qi.example/contexts/cal/1"
CAL_V1_VOCAB = "https://vc4qi.example/bindings/cal/1#"
CAL_V1_SCHEMA_BASE = "https://vc4qi.example/schemas/cal/1/"
CAL_V1_DIRECTORY = REPO_ROOT / "bindings" / "experimental" / "cal-v1"
CAL_UNIT_EXPONENTS: dict[str, int] = {"Pa": 0, "kPa": 3, "MPa": 6}

CAL_V1_ARTIFACT_BINDING = ArtifactBinding(
    "calibration v1",
    {
        "CalAccreditation": f"{CAL_V1_SCHEMA_BASE}accreditation.json",
        "CalOperationalScope": f"{CAL_V1_SCHEMA_BASE}operational-scope.json",
        "CalLegalMandate": f"{CAL_V1_SCHEMA_BASE}legal-mandate.json",
        "CalCertificate": f"{CAL_V1_SCHEMA_BASE}certificate.json",
        "BitstringStatusListCredential": f"{CAL_V1_SCHEMA_BASE}status-list.json",
    },
    lambda kind: [VC_V2_CONTEXT]
    if kind == "BitstringStatusListCredential"
    else [VC_V2_CONTEXT, CAL_V1_CONTEXT],
)


def load_cal_v1_catalog(
    extra: list[StaticResource] | None = None,
) -> StaticResourceCatalog:
    """Install the calibration v1 pinned contexts and schemas into a catalog."""
    return StaticResourceCatalog(
        read_pinned_resources(CAL_V1_DIRECTORY / "catalog.json") + list(extra or [])
    )


def to_pascal(value: Any, unit: Any) -> Fraction | None:
    decimal = parse_decimal(value)
    exponent = CAL_UNIT_EXPONENTS.get(unit) if isinstance(unit, str) else None
    if decimal is None or exponent is None:
        return None
    return decimal * Fraction(10) ** exponent


def _kpa(value: Fraction) -> str:
    return format_decimal(value / 1000)


def _short(iri: Any) -> str:
    text = str(iri)
    for sep in ("#", "/"):
        text = text.rsplit(sep, 1)[-1]
    return text


@dataclass(frozen=True)
class MappedGroup:
    id: str
    quantity_kind_iri: str
    method_iris: tuple[str, ...]
    results: tuple[tuple[Fraction, Fraction], ...]  # (value, U) in Pa


@dataclass(frozen=True)
class CalOutcome:
    state: SemanticState
    reason: str
    sources: tuple[str, ...] = ()
    group: MappedGroup | None = None
    record: str | None = None


def map_group(group: Any, pointer: str) -> CalOutcome:
    """Gate 4: exact pascal quantities for every result of the group, k = 2 only."""
    sources = (pointer,)
    if (
        not isinstance(group, dict)
        or not isinstance(group.get("id"), str)
        or not isinstance(group.get("quantityKindIri"), str)
    ):
        return CalOutcome(
            "not_established",
            "The selected measurement group has no identifier or quantity kind.",
            sources,
        )
    results: list[tuple[Fraction, Fraction]] = []
    for index, result in enumerate(group.get("results") or []):
        r = result if isinstance(result, dict) else {}
        k = parse_decimal(r.get("coverageFactor"))
        if k is None or k != 2:
            return CalOutcome(
                "not_established",
                f"Result {index}: coverage factor {r.get('coverageFactor')} is not the "
                "binding's k = 2.",
                sources,
            )
        value = to_pascal(r.get("value"), r.get("unit"))
        uncertainty = to_pascal(r.get("expandedUncertainty"), r.get("unit"))
        if value is None or uncertainty is None:
            return CalOutcome(
                "not_established",
                f"Result {index}: unit {r.get('unit')} or a number has no supported "
                "mapping (Pa, kPa, MPa).",
                sources,
            )
        results.append((value, uncertainty))
    if not results:
        return CalOutcome(
            "not_established", "The measurement group has no results.", sources
        )
    methods = tuple(m for m in group.get("methodIris") or [] if isinstance(m, str))
    listed = ", ".join(_short(m) for m in methods)
    return CalOutcome(
        "established",
        f"Mapped {_short(group['id'])}: {_short(group['quantityKindIri'])}, "
        f"{len(results)} result(s) in Pa, methods [{listed}].",
        sources,
        group=MappedGroup(
            group["id"], group["quantityKindIri"], methods, tuple(results)
        ),
    )


def group_coverage(
    group: MappedGroup, records: list[dict[str, Any]], apply_cmc_floor: bool
) -> CalOutcome:
    """Gate 5: one complete record covers the group (records OR; results AND)."""
    sources = ("/credentialSubject/scope",)
    if not records:
        return CalOutcome("not_established", "The scope has no records.", sources)
    outcomes: list[tuple[str, SemanticState, str]] = []
    for record in records:
        rid = str(record.get("id"))
        raw_range = record.get("range")
        scope_range: dict[str, Any] = raw_range if isinstance(raw_range, dict) else {}
        low = to_pascal(scope_range.get("from"), scope_range.get("unit"))
        high = to_pascal(scope_range.get("to"), scope_range.get("unit"))
        if low is None or high is None:
            outcomes.append(
                (
                    rid,
                    "not_established",
                    f"{_short(rid)}: unsupported or malformed range.",
                )
            )
            continue
        if low > high:
            outcomes.append((rid, "contradicted", f"{_short(rid)}: range is reversed."))
            continue
        floor_spec = record.get("cmcFloor")
        floor = (
            to_pascal(floor_spec.get("value"), floor_spec.get("unit"))
            if isinstance(floor_spec, dict)
            else None
        )
        if isinstance(floor_spec, dict) and floor is None:
            outcomes.append(
                (rid, "not_established", f"{_short(rid)}: unsupported CMC floor.")
            )
            continue
        failures: list[str] = []
        if record.get("quantityKindIri") != group.quantity_kind_iri:
            failures.append(
                f"quantity kind {_short(group.quantity_kind_iri)} ≠ "
                f"{_short(record.get('quantityKindIri'))}"
            )
        allowed = [
            m for m in record.get("allowedMethodIris") or [] if isinstance(m, str)
        ]
        outside = [m for m in group.method_iris if m not in allowed]
        if outside:
            failures.append(
                f"method {', '.join(_short(m) for m in outside)} is not allowed"
            )
        for index, (value, uncertainty) in enumerate(group.results):
            if value < low or value > high:
                failures.append(
                    f"result {index} {_kpa(value)} kPa is outside "
                    f"{_kpa(low)}–{_kpa(high)} kPa"
                )
            if apply_cmc_floor and floor is not None and uncertainty < floor:
                failures.append(
                    f"result {index} U = {_kpa(uncertainty)} kPa is below the admitted "
                    f"CMC {_kpa(floor)} kPa"
                )
        if failures:
            outcomes.append(
                (rid, "contradicted", f"{_short(rid)}: {'; '.join(failures)}")
            )
            continue
        if not group.method_iris and allowed:
            names = ", ".join(_short(m) for m in allowed)
            outcomes.append(
                (
                    rid,
                    "not_established",
                    f"{_short(rid)} restricts methods to [{names}], but the group "
                    "names no governed method.",
                )
            )
            continue
        floor_note = (
            f" and not below the CMC {_kpa(floor)} kPa"
            if apply_cmc_floor and floor is not None
            else ""
        )
        methods = ", ".join(_short(m) for m in group.method_iris)
        outcomes.append(
            (
                rid,
                "established",
                f"{_short(rid)} covers {_short(group.id)}: "
                f"{_short(group.quantity_kind_iri)}, methods [{methods}], "
                f"{len(group.results)} result(s) within {_kpa(low)}–{_kpa(high)} kPa"
                f"{floor_note}",
            )
        )
    state = semantic_or(tuple(o[1] for o in outcomes))
    covering = next((o for o in outcomes if o[1] == "established"), None)
    if covering is not None:
        return CalOutcome(state, covering[2], sources, record=covering[0])
    listed = " | ".join(o[2] for o in outcomes)
    return CalOutcome(
        state, f"No single scope record covers the group ({listed}).", sources
    )


def cal_direct_accreditation(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> RouteResult:
    """Route: certificate ← CA (accreditation naming its issuer) ← anchor."""
    assert target.document is not None
    d = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]
    basis, a_node = _authorizing_reference(
        "authorizing-reference",
        d,
        "CalAccreditation",
        lookup,
        (target.uri,),
        "CalAuthorizationPolicy",
    )
    bases.append(basis)
    if a_node is None or a_node.document is None:
        return _route("direct-accreditation", bases, chain)
    a = a_node.document
    chain.append(a_node.uri)
    bases.append(_grantee("principal-binding", a, d.get("issuer"), "Accreditation CA"))
    sources = ("/credentialSubject/permittedActivity",)
    bases.append(
        _ok(
            "activity-permission",
            "CA permits issuing calibration certificates.",
            sources,
        )
        if _permits(a, CAL_V1_VOCAB + "issueCalibrationCertificate")
        else _no(
            "activity-permission",
            "CA does not permit issuing calibration certificates.",
            sources,
        )
    )
    bases.append(
        _anchor("trust-anchor", a, "accredit-calibration-laboratories", profile)
    )
    bases.append(_in_force_at_activity(d, [("CA", a)]))
    return _route("direct-accreditation", bases, chain, a_node.uri)


def _parse_range(record: dict[str, Any]) -> tuple[Fraction, Fraction] | None:
    raw = record.get("range")
    spec: dict[str, Any] = raw if isinstance(raw, dict) else {}
    low = to_pascal(spec.get("from"), spec.get("unit"))
    high = to_pascal(spec.get("to"), spec.get("unit"))
    return None if low is None or high is None else (low, high)


def _parse_floor(record: dict[str, Any]) -> tuple[bool, Fraction | None]:
    """(well-formed, floor in Pa or None when the record states none)."""
    spec = record.get("cmcFloor")
    if not isinstance(spec, dict):
        return True, None
    floor = to_pascal(spec.get("value"), spec.get("unit"))
    return floor is not None, floor


def cal_contained_in(
    child: list[dict[str, Any]], parent: list[dict[str, Any]], apply_cmc_floor: bool
) -> CalOutcome:
    """Bounded projection (no widening): each child record within ONE parent record.

    Same quantity kind, a subset of its methods, a range inside its range and, when the
    profile applies the CMC floor, a stated floor not below the parent's.
    """
    sources = ("/credentialSubject/scope",)
    if not child:
        return CalOutcome(
            "not_established", "The operational scope has no records.", sources
        )
    per_child: list[tuple[SemanticState, str]] = []
    for c in child:
        c_range = _parse_range(c)
        c_ok, c_floor = _parse_floor(c)
        if c_range is None or not c_ok:
            per_child.append(
                (
                    "not_established",
                    f"{_short(c.get('id'))}: unsupported or malformed range or CMC "
                    "floor.",
                )
            )
            continue
        low, high = c_range
        methods = list(c.get("allowedMethodIris") or [])
        outcomes: list[tuple[SemanticState, str]] = []
        for p in parent:
            p_range = _parse_range(p)
            p_ok, p_floor = _parse_floor(p)
            if p_range is None or not p_ok:
                outcomes.append(
                    (
                        "not_established",
                        f"{_short(p.get('id'))}: unsupported or malformed range or "
                        "CMC floor.",
                    )
                )
                continue
            p_low, p_high = p_range
            failures: list[str] = []
            if c.get("quantityKindIri") != p.get("quantityKindIri"):
                failures.append(
                    f"quantity kind {_short(c.get('quantityKindIri'))} ≠ "
                    f"{_short(p.get('quantityKindIri'))}"
                )
            allowed = list(p.get("allowedMethodIris") or [])
            wider = [m for m in methods if m not in allowed]
            if not methods and allowed:
                failures.append("the parent restricts methods, the child does not")
            if wider:
                failures.append(
                    f"method {', '.join(_short(m) for m in wider)} is not in "
                    f"{_short(p.get('id'))}"
                )
            if low < p_low or high > p_high:
                failures.append(
                    f"range {_kpa(low)}–{_kpa(high)} kPa is not within "
                    f"{_kpa(p_low)}–{_kpa(p_high)} kPa"
                )
            if apply_cmc_floor and p_floor is not None:
                if c_floor is None:
                    failures.append(
                        f"it states no CMC floor, but {_short(p.get('id'))} admits "
                        f"only {_kpa(p_floor)} kPa"
                    )
                elif c_floor < p_floor:
                    failures.append(
                        f"CMC {_kpa(c_floor)} kPa is below the admitted "
                        f"{_kpa(p_floor)} kPa"
                    )
            if failures:
                outcomes.append(
                    (
                        "contradicted",
                        f"{_short(c.get('id'))} widens {_short(p.get('id'))}: "
                        f"{'; '.join(failures)}",
                    )
                )
            else:
                outcomes.append(
                    (
                        "established",
                        f"{_short(c.get('id'))} lies within {_short(p.get('id'))}",
                    )
                )
        if not outcomes:
            per_child.append(("not_established", "The parent grant has no records."))
            continue
        state = semantic_or(tuple(o[0] for o in outcomes))
        winner = next((o for o in outcomes if o[0] == "established"), None)
        per_child.append(
            winner
            if winner is not None
            else (state, " | ".join(o[1] for o in outcomes))
        )
    combined = semantic_and(tuple(o[0] for o in per_child))
    verdict = "holds" if combined == "established" else "fails"
    detail = "; ".join(o[1] for o in per_child)
    return CalOutcome(combined, f"Bounded projection {verdict}: {detail}.", sources)


def _subject(doc: dict[str, Any]) -> dict[str, Any]:
    subject = doc.get("credentialSubject")
    return subject if isinstance(subject, dict) else {}


def _permission(
    basis_id: str, doc: dict[str, Any], activity: str, what: str, name: str
) -> BasisResult:
    sources = ("/credentialSubject/permittedActivity",)
    if _permits(doc, CAL_V1_VOCAB + activity):
        return _ok(basis_id, f"{name} permits {what}.", sources)
    return _no(basis_id, f"{name} does not permit {what}.", sources)


def cal_operational_scope(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> RouteResult:
    """Route: certificate ← O (own capability scope) ← CA (maintenance) ← anchor.

    O must lie within CA (no widening); claims are covered by O's records only.
    """
    assert target.document is not None
    d = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]
    basis, o_node = _authorizing_reference(
        "authorizing-reference",
        d,
        "CalOperationalScope",
        lookup,
        (target.uri,),
        "CalAuthorizationPolicy",
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
        _permission(
            "activity-permission",
            o,
            "issueCalibrationCertificate",
            "issuing calibration certificates",
            "O",
        )
    )
    grant_basis, a_node = _authorizing_reference(
        "maintenance-grant",
        o,
        "CalAccreditation",
        lookup,
        (target.uri, o_node.uri),
        "CalAuthorizationPolicy",
    )
    bases.append(grant_basis)
    if a_node is None or a_node.document is None:
        return _route("operational-scope", bases, chain)
    a = a_node.document
    chain.append(a_node.uri)
    bases.append(
        _grantee("accreditation-grantee", a, o.get("issuer"), "Accreditation CA")
    )
    sources = ("/credentialSubject/permittedActivity",)
    bases.append(
        _ok(
            "projection-permission",
            "CA permits maintaining an operational calibration scope.",
            sources,
        )
        if _permits(a, CAL_V1_VOCAB + "maintainCalibrationScope")
        and _permits(a, CAL_V1_VOCAB + "issueCalibrationCertificate")
        else _no(
            "projection-permission",
            "CA does not permit maintaining an operational calibration scope.",
            sources,
        )
    )
    child = [r for r in _subject(o).get("scope") or [] if isinstance(r, dict)]
    parent = [r for r in _subject(a).get("scope") or [] if isinstance(r, dict)]
    projection = cal_contained_in(
        child, parent, profile.binding_rules.get("applyCmcFloor") is True
    )
    bases.append(
        BasisResult(
            "bounded-projection",
            projection.state,
            projection.reason,
            projection.sources,
        )
    )
    bases.append(
        _anchor("trust-anchor", a, "accredit-calibration-laboratories", profile)
    )
    bases.append(_in_force_at_activity(d, [("O", o), ("CA", a)]))
    return _route("operational-scope", bases, chain, o_node.uri)


def cal_statutory_mandate(
    target: NodeFacts, lookup: NodeLookup, profile: RelianceProfile
) -> RouteResult:
    """Route: certificate ← M (statutory mandate) ← designation anchor.

    No accreditation root is required, and no legal effect is inferred.
    """
    assert target.document is not None
    d = target.document
    bases: list[BasisResult] = []
    chain = [target.uri]
    basis, m_node = _authorizing_reference(
        "authorizing-reference",
        d,
        "CalLegalMandate",
        lookup,
        (target.uri,),
        "CalAuthorizationPolicy",
    )
    bases.append(basis)
    if m_node is None or m_node.document is None:
        return _route("statutory-mandate", bases, chain)
    m = m_node.document
    chain.append(m_node.uri)
    bases.append(_grantee("principal-binding", m, d.get("issuer"), "Mandate M"))
    bases.append(
        _permission(
            "activity-permission",
            m,
            "issueCalibrationCertificate",
            "issuing calibration certificates",
            "M",
        )
    )
    bases.append(
        _anchor("trust-anchor", m, "designate-national-metrology-institutes", profile)
    )
    bases.append(_in_force_at_activity(d, [("M", m)]))
    return _route("statutory-mandate", bases, chain, m_node.uri)


CAL_CERTIFICATE_ROUTES = {
    "direct-accreditation": cal_direct_accreditation,
    "operational-scope": cal_operational_scope,
    "statutory-mandate": cal_statutory_mandate,
}


def _selected_group(pointer: str) -> bool:
    parts = pointer.split("/")
    return (
        len(parts) == 4
        and parts[:3] == ["", "credentialSubject", "measurementGroups"]
        and parts[3].isdigit()
        and (parts[3] == "0" or parts[3][0] != "0")
    )


def _apply_cmc_floor(profile: RelianceProfile) -> bool:
    rule = profile.binding_rules.get("applyCmcFloor")
    if not isinstance(rule, bool):
        raise ValueError(
            f"Profile {profile.id}@{profile.version} must state "
            f"bindingRules.applyCmcFloor for {CAL_V1_BINDING_ID}."
        )
    return rule


def evaluate_cal_slice(
    request: RelianceRequest,
    catalog: StaticResourceCatalog,
    manifest: BindingManifest,
    profile: RelianceProfile,
) -> RmSliceEvaluation:
    """Evaluate a reliance request over the calibration v1 binding (gates 0-6)."""
    if (
        manifest.id != CAL_V1_BINDING_ID
        or profile.binding.id != manifest.id
        or profile.binding.version != manifest.version
    ):
        raise ValueError(
            f"Profile {profile.id}@{profile.version} is not configured for "
            f"{CAL_V1_BINDING_ID}@{manifest.version}."
        )
    cmc_floor = _apply_cmc_floor(profile)
    refusal = plan_refusal(request, manifest, profile)
    if refusal is not None:
        return RmSliceEvaluation(result=refuse_plan(request, refusal), artifacts=())
    chain = verify_chain(request, catalog, manifest, profile, CAL_V1_ARTIFACT_BINDING)
    facts = chain.facts
    target_facts = facts[request.target_id]

    ids = profile.authority.certificate_routes
    budget = profile.authority.max_routes
    authority: AuthorityResult
    if target_facts.document is None:
        authority = AuthorityResult(
            "not_established",
            "The target is not usable, so its authority is not evaluated.",
            (),
            (),
        )
    else:
        evaluated: list[RouteResult] = []
        for route_id in ids[:budget]:
            evaluate = CAL_CERTIFICATE_ROUTES.get(route_id)
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

    def scope_records(uri: str) -> list[dict[str, Any]]:
        node = facts.get(uri)
        subject = (node.document or {}).get("credentialSubject") if node else None
        scope = subject.get("scope") if isinstance(subject, dict) else None
        return (
            [r for r in scope if isinstance(r, dict)] if isinstance(scope, list) else []
        )

    target_document = target_facts.document
    claims: list[tuple[Any, CalOutcome | None, dict[str, CalOutcome]]] = []
    authorization: list[ClaimAuthorizationResult] = []
    for claim in request.selected_claims:
        coverage: dict[str, CalOutcome] = {}
        selected = (
            resolve_pointer(target_document, claim.source_pointer)
            if target_document is not None and _selected_group(claim.source_pointer)
            else _MISSING
        )
        if selected is _MISSING:
            reason = (
                "The target is not usable, so its claims are not read."
                if target_document is None
                else f"Selected claim {claim.source_pointer} is not a measurement "
                "group in the usable target."
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
        mapped = map_group(selected, claim.source_pointer)
        claims.append((claim, mapped, coverage))
        if mapped.group is None:
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
            group: MappedGroup | None = mapped.group,
            coverage: dict[str, CalOutcome] = coverage,
        ) -> BasisResult:
            assert route.scope is not None and group is not None
            covered = group_coverage(group, scope_records(route.scope), cmc_floor)
            sources = (route.scope, *covered.sources)
            coverage[route.id] = CalOutcome(
                covered.state, covered.reason, sources, record=covered.record
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
                    f"record:{coverage[chosen.id].record}",
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
                "The calibration v1 binding installs no conformity requirements or "
                "decision rules.",
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
    for claim, mapped_group, claim_coverage_by_route in claims:
        if mapped_group is not None:
            trace.append(
                TraceEntry(
                    4,
                    use,
                    f"claim-mapping:{claim.id}",
                    mapped_group.state,
                    "executed",
                    mapped_group.reason,
                    mapped_group.sources,
                )
            )
        for route_id, covered in claim_coverage_by_route.items():
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
                "Each selected measurement group is a separate required claim; the "
                "decision is their conjunction.",
                "Verification failures of credentials outside the selected route are "
                "reported but do not decide the request.",
                "The calibration v1 binding carries a JSON-LD simplification of DCC "
                "results, not native DCC XML.",
                "Fixture grants are fictional: an accreditation or statutory mandate "
                "here has no legal effect.",
            ),
        )
    )
    return RmSliceEvaluation(result=result, artifacts=chain.artifacts)
