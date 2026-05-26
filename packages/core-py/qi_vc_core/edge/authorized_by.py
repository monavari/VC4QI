# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any, Callable

from ..evidence.types import EvidenceEdge, EvidenceGraph
from ..policy.types import PolicyProfile
from ..scope import check_scope_inclusion
from ..trust_registry import is_trusted_issuer, parse_trust_registry_credential
from ..verifier.trace import trace_entry

JsonObject = dict[str, Any]


def _issuer_id(credential: JsonObject) -> str:
    issuer = credential.get("issuer")
    if isinstance(issuer, str):
        return issuer
    if isinstance(issuer, dict):
        return str(issuer.get("id", ""))
    return ""


def _subject_id(credential: JsonObject) -> str:
    subject = credential.get("credentialSubject")
    return str(subject.get("id", "")) if isinstance(subject, dict) else ""


def _primary_type(credential: JsonObject) -> str | None:
    value = credential.get("type")
    types = [str(v) for v in value] if isinstance(value, list) else [str(value)] if isinstance(value, str) else []
    return next((t for t in types if t != "VerifiableCredential"), None)


def evaluate_authorized_by(
    edge: EvidenceEdge,
    graph: EvidenceGraph,
    policy: PolicyProfile,
    *,
    resolve_trust_registry: Callable[[str, Any | None], JsonObject] | None = None,
) -> list[dict[str, Any]]:
    results: list[dict[str, Any]] = []
    source = graph.nodes.get(edge.from_)
    evidence = graph.nodes.get(edge.to)
    if not source or not evidence:
        return [trace_entry(
            id=f"edge-authorizedBy-{edge.from_}-to-{edge.to}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="FAIL",
            code="EVIDENCE_NODE_MISSING",
            detail="Cannot evaluate authorization edge because a node is missing.",
        )]

    evidence_issuer = _issuer_id(evidence.credential)
    if resolve_trust_registry:
        registry = parse_trust_registry_credential(resolve_trust_registry(evidence_issuer, edge.authorizationBasis))
        trusted = is_trusted_issuer(
            registry,
            evidence_issuer,
            edge.authorizationBasis.kind if edge.authorizationBasis else None,
            edge.authorizationBasis.issuerRole if edge.authorizationBasis else None,
            _primary_type(evidence.credential),
        )
        results.append(trace_entry(
            id=f"trusted-{evidence_issuer}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="PASS" if trusted else "FAIL",
            code="TRUSTED_ISSUER" if trusted else "UNTRUSTED_ISSUER",
            detail=f"{evidence_issuer} is trusted for {edge.authorizationBasis.kind if edge.authorizationBasis else 'unspecified evidence'}."
            if trusted else f"{evidence_issuer} is not trusted.",
        ))
    else:
        results.append(trace_entry(
            id=f"trust-registry-{evidence_issuer}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="WARN",
            code="TRUST_REGISTRY_NOT_AVAILABLE",
            detail="No trust registry resolver was provided.",
        ))

    source_issuer = _issuer_id(source.credential)
    evidence_subject = _subject_id(evidence.credential)
    if source_issuer and evidence_subject:
        matches = source_issuer == evidence_subject
        results.append(trace_entry(
            id=f"subject-binding-{edge.from_}-to-{edge.to}",
            level="edge",
            from_=edge.from_,
            to=edge.to,
            relation=edge.relation,
            status="PASS" if matches else "FAIL",
            code="SUBJECT_BOUND" if matches else "SUBJECT_BINDING_MISMATCH",
            detail="Authorizing evidence subject matches source credential issuer."
            if matches else f"Authorizing evidence subject '{evidence_subject}' does not match source issuer '{source_issuer}'.",
        ))

    if policy.checks.scopeInclusion and policy.checks.scopeInclusion != "ignored":
        scope = check_scope_inclusion(source.credential, evidence.credential, policy)
        if not scope.violations:
            results.append(trace_entry(
                id=f"scope-{edge.from_}-to-{edge.to}",
                level="scope",
                from_=edge.from_,
                to=edge.to,
                relation=edge.relation,
                status="PASS",
                code="SCOPE_INCLUSION_VALID",
                detail="Credential payload is within authorizing evidence scope.",
            ))
        else:
            for violation in scope.violations:
                results.append(trace_entry(
                    id=f"scope-{edge.from_}-to-{edge.to}-{violation.code}",
                    level="scope",
                    from_=edge.from_,
                    to=edge.to,
                    relation=edge.relation,
                    status="FAIL",
                    code=violation.code,
                    detail=violation.detail,
                ))
    return results
