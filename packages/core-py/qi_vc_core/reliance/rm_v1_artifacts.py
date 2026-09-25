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
from .catalog import CatalogError, CatalogSession, sha384_sri
from .key_authorization import KeyAuthorization, authorize_assertion_method
from .manifest import RM_V1_BINDING_ID, BindingManifest
from .rm_v1 import RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, VC_V2_CONTEXT
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
}
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
    document: dict[str, Any], session: CatalogSession
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


def _catalog_loader(session: CatalogSession) -> Any:
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
    session: CatalogSession,
    manifest: BindingManifest,
    evaluation_time: str,
) -> RmArtifactVerification:
    """Verify one RM v1 artifact from its exact catalog bytes; never raises."""
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

    if document.get("@context") != [VC_V2_CONTEXT, RM_V1_CONTEXT]:
        return fail(
            "carrier",
            "not_established",
            "Only the exact VCDM 2.0 + RM v1 context combination is supported.",
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
    if not isinstance(declared, dict) or declared.get("id") != schema_id:
        return fail(
            "type", "contradicted", f"{artifact_type} must declare schema {schema_id}."
        )
    checks.append(
        CheckOutcome("type", "established", f"{artifact_type} with its pinned schema.")
    )

    try:
        schema = json.loads(session.resolve(schema_id).content.decode("utf-8"))
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
        document.get("issuer"), proof.get("verificationMethod"), session
    )
    extra["key_authorization"] = key
    if key.state != "established" or key.public_key is None:
        state: SemanticState = (
            "not_established" if key.state == "established" else key.state
        )
        return fail("key", state, f"{key.code}: {key.reason}")
    checks.append(CheckOutcome("key", "established", key.reason))

    loader = _catalog_loader(session)
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


def evaluate_rm_slice(
    request: RelianceRequest, session: CatalogSession, manifest: BindingManifest
) -> RmSliceEvaluation:
    """Evaluate a reliance request with the I1 slice; the decision is never accept."""
    if (
        request.binding.id != RM_V1_BINDING_ID
        or request.binding.version != manifest.version
        or manifest.id != RM_V1_BINDING_ID
    ):
        raise ValueError(
            f"The I1 slice evaluates only {RM_V1_BINDING_ID}@{manifest.version}."
        )
    target = verify_rm_artifact(
        request.target_id, session, manifest, request.evaluation_time
    )
    artifacts = [target] + [
        verify_rm_artifact(uri, session, manifest, request.evaluation_time)
        for uri in request.supplied_evidence
        if uri != request.target_id
    ]

    verification: list[ArtifactVerificationResult] = []
    for artifact in artifacts:
        verification.append(artifact.protection)
        verification.append(
            ArtifactVerificationResult(
                state=artifact.validity.state,
                execution=artifact.validity.execution,
                reasons=tuple(f"validity: {r}" for r in artifact.validity.reasons),
                source_pointers=artifact.validity.source_pointers,
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

    target_document: Any = None
    if target.protection.state == "established":
        target_document = json.loads(
            session.resolve(request.target_id).content.decode("utf-8")
        )
    authorization: list[ClaimAuthorizationResult] = []
    for claim in request.selected_claims:
        in_target = (
            target_document is not None
            and _selected_result(claim.source_pointer)
            and resolve_pointer(target_document, claim.source_pointer) is not _MISSING
        )
        if in_target:
            base = _not_run(
                "Claim authorization (routes, scope, principal binding) "
                "is implemented in I3/I4."
            )
        elif target_document is None:
            base = _predicate(
                "not_established",
                ("The target is not protected, so its claims are not read.",),
            )
        else:
            base = _predicate(
                "not_established",
                (
                    f"Selected claim {claim.source_pointer} is not a result "
                    "in the protected target.",
                ),
            )
        authorization.append(
            ClaimAuthorizationResult(
                state=base.state,
                execution=base.execution,
                reasons=base.reasons,
                source_pointers=base.source_pointers,
                claim_id=claim.id,
                route_witness_ids=(),
            )
        )
    support_base = _not_run(
        "Required-study support and laboratory authority are implemented in I3."
    )
    support = (
        SupportResult(
            state=support_base.state,
            execution=support_base.execution,
            reasons=support_base.reasons,
            source_pointers=(),
            obligation_id="rm-v1:required-study",
            witness_ids=(),
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

    required: list[SemanticState] = [r.state for r in verification]
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
                "I1 slice: authorization, support and conformity are not implemented "
                "and never establish reliance.",
                "Credential status is not checked in I1.",
                "Python rejects undefined terms/types via a sentinel @vocab, "
                "not full JSON-LD safe mode.",
            ),
        )
    )
    return RmSliceEvaluation(result=result, artifacts=tuple(artifacts))
