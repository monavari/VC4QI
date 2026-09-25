# SPDX-License-Identifier: Apache-2.0
"""I1 signed vertical slice for the experimental RM v1 binding.

Mirrors rm-v1-artifacts.ts.

verify_rm_artifact checks one artifact from its exact catalog bytes with the same
ordered checks as TypeScript. PyLD has no JSON-LD safe mode, so the signature step
first rejects undefined terms and types by expanding with a sentinel @vocab; this is
narrower than jsonld.js safe mode (see the evidence document). Only after protection
is established are validity, relatedResource integrity and protected facts read.
"""

from __future__ import annotations

import copy
import json
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Literal
from urllib.parse import urlsplit

from jsonschema import (  # type: ignore[import-untyped]
    Draft202012Validator,
    FormatChecker,
)
from pyld import jsonld  # type: ignore[import-untyped]

from ..proofs import verify_proof
from .catalog import (
    CatalogBudget,
    CatalogError,
    MemoizingResolver,
    ResourceResolver,
    StaticResourceCatalog,
    sha384_sri,
)
from .key_authorization import KeyAuthorization, authorize_assertion_method
from .manifest import RM_V1_BINDING_ID, BindingManifest
from .profile import RelianceProfile
from .rm_v1 import RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, VC_V2_CONTEXT
from .rm_v1_authority import NodeFacts, certificate_authority, certificate_support
from .status_list import (
    StatusOutcome,
    StatusPolicy,
    evaluate_status,
    select_status_entry,
)
from .types import (
    ArtifactVerificationResult,
    ClaimAuthorizationResult,
    ConformityNotRequested,
    ConformityRequestedResult,
    ConformityResult,
    Gate,
    PredicateResult,
    RelianceRequest,
    RelianceResult,
    ResourceObservation,
    SemanticState,
    SupportResult,
    TraceEntry,
    create_reliance_result,
    decision_from_required,
    semantic_and,
)

RM_V1_ARTIFACT_SCHEMAS: dict[str, str] = {
    "RmAccreditation": f"{RM_V1_SCHEMA_BASE}accreditation.json",
    "RmOperationalScope": f"{RM_V1_SCHEMA_BASE}operational-scope.json",
    "RmCertificate": f"{RM_V1_SCHEMA_BASE}certificate.json",
    "RmStudy": f"{RM_V1_SCHEMA_BASE}study.json",
    "RmLabAuthority": f"{RM_V1_SCHEMA_BASE}lab-authority.json",
    "BitstringStatusListCredential": f"{RM_V1_SCHEMA_BASE}status-list.json",
}


def _expected_contexts(declared_type: Any) -> list[str]:
    """Exact context list each recognized type must use; status lists use VCDM 2.0."""
    if declared_type == "BitstringStatusListCredential":
        return [VC_V2_CONTEXT]
    return [VC_V2_CONTEXT, RM_V1_CONTEXT]


_UNDEFINED = "urn:vc4qi:undefined-term#"
# Canonical gate (handover section 5.3) of each protection check.
PROTECTION_CHECK_GATES: dict[str, Gate] = {
    "resolve": 1,
    "parse": 0,
    "carrier": 0,
    "type": 0,
    "schema": 0,
    "proof": 2,
    "key": 2,
    "signature": 2,
}


def node_use_key(
    artifact_id: str, digest_sri: str | None, role: str, request: RelianceRequest
) -> str:
    """Node-use key: artifact identity, role, purpose, profile and time context."""
    return " | ".join(
        (
            artifact_id,
            digest_sri or "unresolved",
            role,
            request.purpose,
            f"{request.profile.id}@{request.profile.version}",
            request.evaluation_time,
        )
    )


ProtectionCheck = Literal[
    "resolve", "parse", "carrier", "type", "schema", "proof", "key", "signature"
]


@dataclass(frozen=True)
class CheckOutcome:
    check: ProtectionCheck
    state: SemanticState
    reason: str


@dataclass(frozen=True)
class ProtectedFact:
    fact: str
    pointer: str
    value: Any


@dataclass(frozen=True)
class RelatedResourceCheck:
    id: str
    state: SemanticState
    reason: str


def _predicate(
    state: SemanticState,
    reasons: tuple[str, ...],
    pointers: tuple[str, ...] = (),
    execution: Literal["executed", "not_run"] = "executed",
) -> PredicateResult:
    return PredicateResult(
        state=state, execution=execution, reasons=reasons, source_pointers=pointers
    )


def _not_run(reason: str) -> PredicateResult:
    return _predicate("not_established", (reason,), (), "not_run")


_SKIPPED = _not_run("Not evaluated because protection is not established.")


@dataclass(frozen=True)
class RmArtifactVerification:
    artifact_id: str
    protection: ArtifactVerificationResult
    checks: tuple[CheckOutcome, ...]
    artifact_type: str | None = None
    digest_sri: str | None = None
    key_authorization: KeyAuthorization | None = None
    validity: PredicateResult = _SKIPPED
    related_resources: tuple[RelatedResourceCheck, ...] = ()
    facts: tuple[ProtectedFact, ...] = field(default=())


def _escape(segment: str) -> str:
    return segment.replace("~", "~0").replace("/", "~1")


def resolve_native_path(document: Any, path: str) -> list[tuple[str, Any]]:
    """Evaluate a manifest native path (with * over arrays) to concrete pointers."""
    if not path.startswith("/"):
        return []
    frontier: list[tuple[str, Any]] = [("", document)]
    for segment in path[1:].split("/"):
        following: list[tuple[str, Any]] = []
        for pointer, value in frontier:
            if segment == "*":
                if isinstance(value, list):
                    following.extend(
                        (f"{pointer}/{i}", item) for i, item in enumerate(value)
                    )
            elif isinstance(value, dict) and segment in value:
                following.append((f"{pointer}/{_escape(segment)}", value[segment]))
        frontier = following
    return frontier


_MISSING = object()


def resolve_pointer(document: Any, pointer: str) -> Any:
    """Resolve an RFC 6901 pointer; a private sentinel means it does not resolve."""
    if pointer == "":
        return document
    if not pointer.startswith("/"):
        return _MISSING
    value = document
    for raw in pointer[1:].split("/"):
        segment = raw.replace("~1", "/").replace("~0", "~")
        if (
            isinstance(value, list)
            and segment.isdigit()
            and (segment == "0" or segment[0] != "0")
        ):
            index = int(segment)
            if index >= len(value):
                return _MISSING
            value = value[index]
        elif isinstance(value, dict) and segment in value:
            value = value[segment]
        else:
            return _MISSING
    return value


def _parse_time(value: Any) -> datetime | None:
    if not isinstance(value, str):
        return None
    try:
        return datetime.fromisoformat(
            value[:-1] + "+00:00" if value.endswith("Z") else value
        )
    except ValueError:
        return None


def _validity(document: dict[str, Any], evaluation_time: str) -> PredicateResult:
    at = _parse_time(evaluation_time)
    start = _parse_time(document.get("validFrom"))
    end = _parse_time(document.get("validUntil"))
    if at is None or start is None or end is None:
        return _predicate(
            "not_established",
            ("Validity period or evaluation time is missing or invalid.",),
        )
    pointers = ("/validFrom", "/validUntil")
    if at < start:
        return _predicate(
            "contradicted", (f"Not yet valid at {evaluation_time}.",), pointers
        )
    if at > end:
        return _predicate(
            "contradicted", (f"Expired before {evaluation_time}.",), pointers
        )
    return _predicate("established", (f"Valid at {evaluation_time}.",), pointers)


def _related_resources(
    document: dict[str, Any], session: ResourceResolver
) -> tuple[RelatedResourceCheck, ...]:
    references = document.get("relatedResource")
    checks: list[RelatedResourceCheck] = []
    for reference in references if isinstance(references, list) else []:
        if not isinstance(reference, dict):
            continue
        ref_id = str(reference.get("id"))
        try:
            actual = sha384_sri(session.resolve(ref_id).content)
        except CatalogError as error:
            checks.append(
                RelatedResourceCheck(
                    ref_id,
                    "not_established",
                    f"Referenced resource unavailable: {error.code}.",
                )
            )
            continue
        if actual == reference.get("digestSRI"):
            checks.append(
                RelatedResourceCheck(
                    ref_id, "established", "Digest matches the exact referenced bytes."
                )
            )
        else:
            checks.append(
                RelatedResourceCheck(
                    ref_id,
                    "contradicted",
                    f"Digest mismatch: referenced bytes hash to {actual}.",
                )
            )
    return tuple(checks)


def _format_checker() -> FormatChecker:
    # Only "uri" is used by the RM v1 schemas (times use patterns).
    checker = FormatChecker(formats=())

    def _absolute_uri(value: object) -> bool:
        # Absolute URI with a scheme and no whitespace; narrower than ajv-formats'
        # full RFC 3986 grammar (recorded in the signed-slice evidence document).
        if not isinstance(value, str):
            return True
        if any(ch.isspace() for ch in value):
            return False
        parts = urlsplit(value)
        return bool(parts.scheme) and parts.scheme[0].isalpha()

    checker.checks("uri")(_absolute_uri)
    return checker


def _catalog_loader(session: ResourceResolver) -> Any:
    def loader(url: str, options: dict[str, Any] | None = None) -> dict[str, Any]:
        resource = session.resolve(url)
        if not (
            resource.media_type in ("application/json", "application/ld+json")
            or resource.media_type.endswith("+json")
        ):
            raise CatalogError(
                "INVALID_RESOURCE",
                f"JSON-LD resource {url} has unsupported media type "
                f"{resource.media_type}.",
            )
        return {
            "contextUrl": None,
            "documentUrl": url,
            "document": json.loads(resource.content.decode("utf-8")),
        }

    return loader


def _undefined_terms(document: dict[str, Any], loader: Any) -> list[str]:
    """Terms or types that no active context defines (sentinel @vocab expansion)."""
    probe = copy.deepcopy(document)
    probe.pop("proof", None)
    contexts = probe.get("@context")
    contexts = list(contexts) if isinstance(contexts, list) else [contexts]
    probe["@context"] = [*contexts, {"@vocab": _UNDEFINED}]
    expanded = jsonld.expand(probe, {"documentLoader": loader})
    found: set[str] = set()

    def walk(node: Any) -> None:
        if isinstance(node, list):
            for item in node:
                walk(item)
        elif isinstance(node, dict):
            for key, value in node.items():
                if key.startswith(_UNDEFINED):
                    found.add(key[len(_UNDEFINED) :])
                if key == "@type":
                    for type_iri in value if isinstance(value, list) else [value]:
                        if isinstance(type_iri, str) and type_iri.startswith(
                            _UNDEFINED
                        ):
                            found.add(type_iri[len(_UNDEFINED) :])
                walk(value)

    walk(expanded)
    return sorted(found)


def verify_rm_artifact(
    uri: str,
    session: ResourceResolver,
    manifest: BindingManifest,
    evaluation_time: str,
    static_resolver: ResourceResolver | None = None,
) -> RmArtifactVerification:
    """Verify one RM v1 artifact from its exact catalog bytes; never raises.

    ``static_resolver`` resolves pinned contexts, schemas and controller documents;
    it defaults to ``session``.
    """
    static = static_resolver or session
    checks: list[CheckOutcome] = []
    extra: dict[str, Any] = {}

    def finish(**more: Any) -> RmArtifactVerification:
        state = semantic_and(tuple(c.state for c in checks))
        reasons = tuple(
            f"{c.check}: {c.reason}" for c in checks if c.state != "established"
        )
        if state == "established":
            reasons += ("Protection established from the original secured bytes.",)
        return RmArtifactVerification(
            artifact_id=uri,
            protection=ArtifactVerificationResult(
                state=state,
                execution="executed",
                reasons=reasons,
                source_pointers=(),
                artifact_id=uri,
            ),
            checks=tuple(checks),
            **{**extra, **more},
        )

    def fail(
        check: ProtectionCheck, state: SemanticState, reason: str
    ) -> RmArtifactVerification:
        checks.append(CheckOutcome(check, state, reason))
        return finish()

    try:
        content = session.resolve(uri).content
    except CatalogError as error:
        return fail(
            "resolve", "not_established", f"Artifact is not available: {error.code}."
        )
    extra["digest_sri"] = sha384_sri(content)
    checks.append(
        CheckOutcome("resolve", "established", f"Resolved {len(content)} bytes.")
    )

    try:
        document = json.loads(content.decode("utf-8"))
    except (UnicodeDecodeError, ValueError):
        return fail("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.")
    if not isinstance(document, dict):
        return fail("parse", "contradicted", "Artifact is not a JSON object.")
    checks.append(CheckOutcome("parse", "established", "Strict UTF-8 JSON object."))

    declared = document.get("type")
    declared_type = (
        declared[1] if isinstance(declared, list) and len(declared) > 1 else None
    )
    if document.get("@context") != _expected_contexts(declared_type):
        return fail(
            "carrier",
            "not_established",
            "Only the exact supported context combination for this type is accepted.",
        )
    checks.append(
        CheckOutcome("carrier", "established", "Exact supported context combination.")
    )

    types = document.get("type")
    artifact_type = (
        str(types[1])
        if isinstance(types, list)
        and len(types) == 2
        and types[0] == "VerifiableCredential"
        else None
    )
    schema_id = RM_V1_ARTIFACT_SCHEMAS.get(artifact_type) if artifact_type else None
    if schema_id is None:
        return fail(
            "type",
            "not_established",
            "Credential type is not a recognized RM v1 artifact type.",
        )
    extra["artifact_type"] = artifact_type
    declared = document.get("credentialSchema")
    if isinstance(declared, list):
        return fail(
            "type",
            "not_established",
            "Multiple credentialSchema declarations have no accepted composition "
            "in this binding.",
        )
    if not isinstance(declared, dict) or declared.get("id") != schema_id:
        return fail(
            "type", "contradicted", f"{artifact_type} must declare schema {schema_id}."
        )
    checks.append(
        CheckOutcome("type", "established", f"{artifact_type} with its pinned schema.")
    )

    try:
        schema = json.loads(static.resolve(schema_id).content.decode("utf-8"))
    except (CatalogError, UnicodeDecodeError, ValueError):
        return fail("schema", "not_established", "Pinned schema unavailable.")
    errors = sorted(
        Draft202012Validator(schema, format_checker=_format_checker()).iter_errors(
            document
        ),
        key=lambda e: list(e.absolute_path),
    )
    if errors:
        detail = "; ".join(
            f"/{'/'.join(str(p) for p in e.absolute_path)} {e.message}" for e in errors
        )
        return fail("schema", "contradicted", f"Schema validation failed: {detail}")
    checks.append(
        CheckOutcome("schema", "established", "Valid against the pinned schema.")
    )

    proof = document.get("proof")
    if isinstance(proof, list):
        return fail(
            "proof",
            "not_established",
            "Proof sets and chains are unsupported in the initial slice.",
        )
    if not isinstance(proof, dict):
        return fail("proof", "not_established", "The artifact carries no proof.")
    checks.append(
        CheckOutcome(
            "proof", "established", "One eddsa-rdfc-2022 assertionMethod proof."
        )
    )

    key = authorize_assertion_method(
        document.get("issuer"), proof.get("verificationMethod"), static
    )
    extra["key_authorization"] = key
    if key.state != "established" or key.public_key is None:
        state: SemanticState = (
            "not_established" if key.state == "established" else key.state
        )
        return fail("key", state, f"{key.code}: {key.reason}")
    checks.append(CheckOutcome("key", "established", key.reason))

    loader = _catalog_loader(static)
    try:
        undefined = _undefined_terms(document, loader)
        if undefined:
            return fail(
                "signature",
                "contradicted",
                f"Undefined JSON-LD terms or types: {', '.join(undefined)}.",
            )
        valid = verify_proof(document, key.public_key, loader)
    except Exception as error:  # noqa: BLE001 - untrusted input must not raise
        message = str(error).splitlines()[0] if str(error) else type(error).__name__
        return fail(
            "signature",
            "contradicted",
            f"JSON-LD processing rejected the artifact: {message}",
        )
    if not valid:
        return fail(
            "signature",
            "contradicted",
            "Signature does not verify over the canonical form.",
        )
    checks.append(
        CheckOutcome(
            "signature",
            "established",
            "Ed25519 signature verifies (undefined-term check, offline catalog).",
        )
    )

    facts: list[ProtectedFact] = []
    for mapping in manifest.data["factMappings"]:
        for pointer, value in resolve_native_path(document, str(mapping["nativePath"])):
            facts.append(
                ProtectedFact(str(mapping["fact"]), pointer, copy.deepcopy(value))
            )
    return finish(
        validity=_validity(document, evaluation_time),
        related_resources=_related_resources(document, session),
        facts=tuple(facts),
    )


@dataclass(frozen=True)
class RmSliceEvaluation:
    result: RelianceResult
    artifacts: tuple[RmArtifactVerification, ...]


def _selected_result(pointer: str) -> bool:
    parts = pointer.split("/")
    return (
        len(parts) == 6
        and parts[0] == ""
        and parts[1] == "credentialSubject"
        and parts[2] == "materialPropertiesList"
        and parts[4] == "results"
        and all(p.isdigit() and (p == "0" or p[0] != "0") for p in (parts[3], parts[5]))
    )


# Internal budget for pinned static material (contexts, schemas, controller documents).
STATIC_RESOURCE_BUDGET = CatalogBudget(max_resources=1_000, max_bytes=20_000_000)


def _refuse_plan(request: RelianceRequest, reason: str) -> RmSliceEvaluation:
    """Gate 0 refusal: nothing is resolved, read or evaluated."""
    not_run = _not_run("Not evaluated: the plan was refused at gate 0.")
    conformity: ConformityResult = (
        ConformityRequestedResult(
            state=not_run.state,
            execution=not_run.execution,
            reasons=not_run.reasons,
            source_pointers=(),
            requirement_id=request.conformity.requirement_id,
            decision_rule_id=request.conformity.decision_rule_id,
        )
        if request.conformity is not None
        else ConformityNotRequested()
    )
    result = create_reliance_result(
        RelianceResult(
            request_id=request.request_id,
            target_id=request.target_id,
            binding=request.binding,
            profile=request.profile,
            artifact_verification=(),
            authorization=tuple(
                ClaimAuthorizationResult(
                    state=not_run.state,
                    execution=not_run.execution,
                    reasons=not_run.reasons,
                    source_pointers=(),
                    claim_id=claim.id,
                    route_witness_ids=(),
                )
                for claim in request.selected_claims
            ),
            support=(),
            conformity=conformity,
            decision="not_established",
            trace=(
                TraceEntry(
                    0,
                    f"{request.target_id} | plan",
                    "accepted-plan",
                    "not_established",
                    "executed",
                    reason,
                    (),
                ),
            ),
            limitations=(
                "The request did not name the verifier-selected profile and binding; "
                "nothing was evaluated.",
            ),
        )
    )
    return RmSliceEvaluation(result=result, artifacts=())


def evaluate_rm_slice(
    request: RelianceRequest,
    catalog: StaticResourceCatalog,
    manifest: BindingManifest,
    profile: RelianceProfile,
) -> RmSliceEvaluation:
    """Evaluate a reliance request; the decision is never accept before I3/I4."""
    if (
        manifest.id != RM_V1_BINDING_ID
        or profile.binding.id != manifest.id
        or profile.binding.version != manifest.version
    ):
        raise ValueError(
            f"Profile {profile.id}@{profile.version} is not configured for "
            f"{RM_V1_BINDING_ID}@{manifest.version}."
        )
    # Gate 0: the verifier selects profile and binding (V09).
    if (
        request.binding.id != manifest.id
        or request.binding.version != manifest.version
        or request.profile.id != profile.id
        or request.profile.version != profile.version
    ):
        return _refuse_plan(
            request,
            f"Requested {request.profile.id}@{request.profile.version} with binding "
            f"{request.binding.id}@{request.binding.version} is not the "
            f"verifier-selected profile {profile.id}@{profile.version} "
            f"for {manifest.id}@{manifest.version}.",
        )
    # Retrieved evidence counts against the request budget, each resource once;
    # pinned static material uses a separate internal budget.
    limits = request.resolver_limits
    session = MemoizingResolver(
        catalog.open_session(CatalogBudget(limits.max_resources, limits.max_bytes))
    )
    static = MemoizingResolver(catalog.open_session(STATIC_RESOURCE_BUDGET))

    def read(uri: str) -> dict[str, Any]:
        return dict(json.loads(session.resolve(uri).content.decode("utf-8")))

    target = verify_rm_artifact(
        request.target_id, session, manifest, request.evaluation_time, static
    )
    artifacts = [target]
    depth: dict[str, int] = {request.target_id: 0}
    for uri in request.supplied_evidence:
        if uri in depth:
            continue
        depth[uri] = 1
        artifacts.append(
            verify_rm_artifact(uri, session, manifest, request.evaluation_time, static)
        )
    # Follow the chain's own references (termsOfUse, evidence) from protected
    # credentials, within maxDepth; supplied-but-unreferenced credentials stay inert.
    index = 0
    while index < len(artifacts):
        current = artifacts[index]
        index += 1
        at = depth[current.artifact_id]
        if current.protection.state != "established" or at + 1 > limits.max_depth:
            continue
        document = read(current.artifact_id)
        references: list[str] = []
        for policy in document.get("termsOfUse") or []:
            credential = (
                policy.get("authorizationCredential")
                if isinstance(policy, dict)
                else None
            )
            if isinstance(credential, dict) and isinstance(credential.get("id"), str):
                references.append(credential["id"])
        for evidence in document.get("evidence") or []:
            if isinstance(evidence, dict) and isinstance(evidence.get("id"), str):
                references.append(evidence["id"])
        for uri in references:
            if uri in depth:
                continue
            depth[uri] = at + 1
            artifacts.append(
                verify_rm_artifact(
                    uri, session, manifest, request.evaluation_time, static
                )
            )

    # Gate 1 identity: a protected artifact must identify itself by the identity it
    # was resolved under (P11).
    identity: dict[str, PredicateResult | None] = {}
    for artifact in artifacts:
        if artifact.protection.state != "established":
            identity[artifact.artifact_id] = None
            continue
        claimed = read(artifact.artifact_id).get("id")
        identity[artifact.artifact_id] = (
            _predicate(
                "established",
                ("Artifact identifies itself by its resolved identity.",),
                ("/id",),
            )
            if claimed == artifact.artifact_id
            else _predicate(
                "contradicted",
                (
                    f"Artifact resolved as {artifact.artifact_id} identifies itself "
                    f"as {claimed}.",
                ),
                ("/id",),
            )
        )

    # Gate 3 status: each status list is verified once as an artifact in its own right.
    lists: dict[str, RmArtifactVerification] = {}
    status: dict[str, StatusOutcome | None] = {}

    def status_for(
        artifact_id: str, document: dict[str, Any], policy: StatusPolicy
    ) -> StatusOutcome:
        # A status list is one level deeper than the credential that names it.
        list_depth = depth[artifact_id] + 1
        if list_depth > limits.max_depth:
            return StatusOutcome(
                "not_established",
                f"Status list is at depth {list_depth}, beyond the request's maxDepth "
                f"{limits.max_depth}.",
                ("/credentialStatus",),
            )
        entry, _ = select_status_entry(document, policy.purposes)
        list_uri = entry.get("statusListCredential") if entry is not None else None
        status_list: dict[str, Any] | None = None
        list_state: SemanticState = "not_established"
        if isinstance(list_uri, str):
            if list_uri not in lists:
                lists[list_uri] = verify_rm_artifact(
                    list_uri, session, manifest, request.evaluation_time, static
                )
            checked = lists[list_uri]
            if (
                checked.digest_sri is not None
                and checked.protection.state == "established"
            ):
                status_list = read(list_uri)
                list_state = semantic_and(
                    (checked.protection.state, checked.validity.state)
                )
            elif checked.digest_sri is not None:
                # Resolved but not protected: its contents are never read.
                status_list = {}
                list_state = checked.protection.state
        return evaluate_status(
            document, status_list, list_state, policy, request.evaluation_time
        )

    # Suspension entries are not a gate-3 property of the credential: they are read
    # only by the profile's global restriction (gate 5), which applies to every route.
    suspension_policy = StatusPolicy(
        True, ("suspension",), profile.credential_status.max_age_seconds
    )
    suspension: dict[str, StatusOutcome] = {}
    for artifact in artifacts:
        if artifact.protection.state != "established":
            status[artifact.artifact_id] = None
            continue
        document = read(artifact.artifact_id)
        status[artifact.artifact_id] = status_for(
            artifact.artifact_id, document, profile.credential_status
        )
        if select_status_entry(document, ("suspension",))[0] is not None:
            suspension[artifact.artifact_id] = status_for(
                artifact.artifact_id, document, suspension_policy
            )

    def verification_of(
        artifact: RmArtifactVerification,
    ) -> list[ArtifactVerificationResult]:
        verification: list[ArtifactVerificationResult] = [artifact.protection]
        checked_identity = identity[artifact.artifact_id]
        identity_result = checked_identity or _not_run(
            "Not evaluated because protection is not established."
        )
        verification.append(
            ArtifactVerificationResult(
                state=identity_result.state,
                execution=identity_result.execution,
                reasons=tuple(f"identity: {r}" for r in identity_result.reasons),
                source_pointers=identity_result.source_pointers,
                artifact_id=artifact.artifact_id,
            )
        )
        verification.append(
            ArtifactVerificationResult(
                state=artifact.validity.state,
                execution=artifact.validity.execution,
                reasons=tuple(f"validity: {r}" for r in artifact.validity.reasons),
                source_pointers=artifact.validity.source_pointers,
                artifact_id=artifact.artifact_id,
            )
        )
        outcome = status[artifact.artifact_id]
        verification.append(
            ArtifactVerificationResult(
                state=outcome.state if outcome else "not_established",
                execution="executed" if outcome else "not_run",
                reasons=(
                    f"status: {outcome.reason}"
                    if outcome
                    else "status: Not evaluated because protection is not established.",
                ),
                source_pointers=outcome.sources if outcome else (),
                artifact_id=artifact.artifact_id,
            )
        )
        verification.extend(
            ArtifactVerificationResult(
                state=check.state,
                execution="executed",
                reasons=(f"integrity (from {artifact.artifact_id}): {check.reason}",),
                source_pointers=("/relatedResource",),
                artifact_id=check.id,
            )
            for check in artifact.related_resources
        )
        return verification

    verification = [entry for a in artifacts for entry in verification_of(a)]

    # Gates 5-6: only credentials usable after gates 0-3 contribute facts.
    facts: dict[str, NodeFacts] = {}
    for artifact in artifacts:
        checked_identity = identity[artifact.artifact_id]
        outcome = status[artifact.artifact_id]
        parts: list[tuple[str, SemanticState, str]] = [
            (
                "protection",
                artifact.protection.state,
                " ".join(artifact.protection.reasons),
            ),
            (
                "identity",
                checked_identity.state if checked_identity else "not_established",
                " ".join(checked_identity.reasons)
                if checked_identity
                else "not evaluated",
            ),
            ("validity", artifact.validity.state, " ".join(artifact.validity.reasons)),
            (
                "status",
                outcome.state if outcome else "not_established",
                outcome.reason if outcome else "not evaluated",
            ),
        ]
        usable = semantic_and(tuple(p[1] for p in parts))
        facts[artifact.artifact_id] = NodeFacts(
            uri=artifact.artifact_id,
            usable=usable,
            reason="; ".join(f"{p[0]}: {p[2]}" for p in parts if p[1] != "established")
            or "usable",
            document=read(artifact.artifact_id) if usable == "established" else None,
            suspension=(
                (
                    suspension[artifact.artifact_id].state,
                    suspension[artifact.artifact_id].reason,
                )
                if artifact.artifact_id in suspension
                else None
            ),
        )
    authority = certificate_authority(facts[request.target_id], facts.get, profile)
    supported = certificate_support(facts[request.target_id], facts.get, profile)
    winner = next((r for r in authority.routes if r.state == "established"), None)

    target_document = facts[request.target_id].document
    authorization: list[ClaimAuthorizationResult] = []
    for claim in request.selected_claims:
        in_target = (
            target_document is not None
            and _selected_result(claim.source_pointer)
            and resolve_pointer(target_document, claim.source_pointer) is not _MISSING
        )
        if not in_target:
            reason = (
                "The target is not usable, so its claims are not read."
                if target_document is None
                else f"Selected claim {claim.source_pointer} is not a result "
                "in the usable target."
            )
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
        # Claim scope coverage is I4; until then a route never establishes the claim.
        authorization.append(
            ClaimAuthorizationResult(
                state="contradicted"
                if authority.state == "contradicted"
                else "not_established",
                execution="executed",
                reasons=(
                    authority.reason,
                    "Claim scope coverage is implemented in I4.",
                ),
                source_pointers=(claim.source_pointer,),
                claim_id=claim.id,
                route_witness_ids=(f"route:{winner.id}", *winner.chain)
                if winner
                else (),
            )
        )
    support = (
        SupportResult(
            state=supported.state,
            execution="executed",
            reasons=(supported.reason,),
            source_pointers=("/evidence",),
            obligation_id="rm-v1:required-study",
            witness_ids=supported.chain if supported.state == "established" else (),
        ),
    )
    conformity: ConformityResult
    if request.conformity is not None:
        c = _not_run("Conformity is implemented in I4.")
        conformity = ConformityRequestedResult(
            state=c.state,
            execution=c.execution,
            reasons=c.reasons,
            source_pointers=(),
            requirement_id=request.conformity.requirement_id,
            decision_rule_id=request.conformity.decision_rule_id,
        )
    else:
        conformity = ConformityNotRequested()

    # Only the target and the credentials on the selected witness paths decide the
    # request; a failed credential on an unused alternative is diagnostic (C03, C07).
    decisive = {
        request.target_id,
        *(winner.chain if winner else ()),
        *(supported.chain if supported.state == "established" else ()),
    }
    required: list[SemanticState] = [
        r.state
        for a in artifacts
        if a.artifact_id in decisive
        for r in verification_of(a)
    ]
    required += [r.state for r in authorization] + [r.state for r in support]
    if isinstance(conformity, ConformityRequestedResult):
        required.append(conformity.state)
    trace: list[TraceEntry] = []
    resources: list[ResourceObservation] = []
    for index, artifact in enumerate(artifacts):
        role = "target" if index == 0 else "supplied-evidence"
        use = node_use_key(artifact.artifact_id, artifact.digest_sri, role, request)
        for check in artifact.checks:
            trace.append(
                TraceEntry(
                    PROTECTION_CHECK_GATES[check.check],
                    use,
                    check.check,
                    check.state,
                    "executed",
                    check.reason,
                    (artifact.artifact_id,),
                )
            )
        for related in artifact.related_resources:
            trace.append(
                TraceEntry(
                    1,
                    use,
                    "related-resource-integrity",
                    related.state,
                    "executed",
                    f"{related.id}: {related.reason}",
                    ("/relatedResource", related.id),
                )
            )
        checked_identity = identity[artifact.artifact_id]
        trace.append(
            TraceEntry(
                1,
                use,
                "resource-identity",
                checked_identity.state if checked_identity else "not_established",
                "executed" if checked_identity else "not_run",
                " ".join(checked_identity.reasons)
                if checked_identity
                else "Not evaluated because protection is not established.",
                checked_identity.source_pointers if checked_identity else (),
            )
        )
        trace.append(
            TraceEntry(
                3,
                use,
                "validity-period",
                artifact.validity.state,
                artifact.validity.execution,
                " ".join(artifact.validity.reasons) or "Not evaluated.",
                artifact.validity.source_pointers,
            )
        )
        outcome = status[artifact.artifact_id]
        trace.append(
            TraceEntry(
                3,
                use,
                "credential-status",
                outcome.state if outcome else "not_established",
                "executed" if outcome else "not_run",
                outcome.reason
                if outcome
                else "Not evaluated because protection is not established.",
                outcome.sources if outcome else (),
            )
        )
        if artifact.digest_sri is not None:
            resources.append(
                ResourceObservation(
                    artifact.artifact_id,
                    artifact.digest_sri,
                    "artifact",
                    "catalog",
                    request.evaluation_time,
                )
            )
    for list_uri, checked in lists.items():
        if checked.digest_sri is not None:
            resources.append(
                ResourceObservation(
                    list_uri,
                    checked.digest_sri,
                    "status",
                    "catalog",
                    request.evaluation_time,
                )
            )
    target_use = node_use_key(target.artifact_id, target.digest_sri, "target", request)
    for claim_result in authorization:
        trace.append(
            TraceEntry(
                5,
                target_use,
                f"claim-authorization:{claim_result.claim_id}",
                claim_result.state,
                claim_result.execution,
                " ".join(claim_result.reasons),
                claim_result.source_pointers,
            )
        )
    for restriction in authority.restrictions:
        trace.append(
            TraceEntry(
                5,
                target_use,
                restriction.id,
                restriction.state,
                "executed",
                restriction.reason,
                restriction.sources,
            )
        )
    trace.append(
        TraceEntry(
            5,
            target_use,
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
                    target_use,
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
                    target_use,
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
                    target_use,
                    f"route:{route.id}:{basis.id}",
                    basis.state,
                    "executed",
                    basis.reason,
                    basis.sources,
                )
            )
    for basis in supported.bases:
        trace.append(
            TraceEntry(
                6,
                target_use,
                f"support:{basis.id}",
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
                target_use,
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
                target_use,
                f"conformity:{conformity.requirement_id}",
                conformity.state,
                conformity.execution,
                " ".join(conformity.reasons),
                (),
            )
        )

    result = create_reliance_result(
        RelianceResult(
            request_id=request.request_id,
            target_id=request.target_id,
            binding=request.binding,
            profile=request.profile,
            artifact_verification=tuple(verification),
            authorization=tuple(authorization),
            support=support,
            conformity=conformity,
            decision=decision_from_required(tuple(required)),
            trace=tuple(trace),
            resources=tuple(resources),
            limitations=(
                "Claim scope coverage and conformity are implemented in I4; "
                "until then no request is accepted.",
                "Verification failures of credentials outside the selected route and "
                "support chains are reported but do not decide the request.",
                "Python rejects undefined terms/types via a sentinel @vocab, "
                "not full JSON-LD safe mode.",
            ),
        )
    )
    return RmSliceEvaluation(result=result, artifacts=tuple(artifacts))
