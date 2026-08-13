# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Callable

from ..edge import evaluate_edge
from ..evidence import build_evidence_graph
from ..policy import PolicyProfile, evaluate_policy
from ..proofs import verify_proof
from ..status import check_status_bit
from ..types import BitstringStatusListEntry
from .trace import make_verification_trace, trace_entry

JsonObject = dict[str, Any]


@dataclass
class VerifyGraphOptions:
    fetch_document: Callable[[str], JsonObject] | None = None
    document_loader: Callable[[str], JsonObject] | None = None
    resolve_key: Callable[[str], bytes] | None = None
    resolve_trust_registry: Callable[[str, Any | None], JsonObject] | None = None
    resolve_status_list: Callable[[str], JsonObject] | None = None
    max_depth: int | None = None
    max_evidence_nodes: int | None = None
    skip_proof: bool = False
    skip_status: bool = False


def _credential_id(credential: JsonObject) -> str:
    return str(credential.get("id", ""))


def _credential_types(credential: JsonObject) -> list[str]:
    value = credential.get("type")
    if isinstance(value, list):
        return [str(item) for item in value]
    if isinstance(value, str):
        return [value]
    return []


def _evaluate_schema(credential: JsonObject, policy: PolicyProfile) -> list[dict[str, Any]]:
    mode = policy.checks.schema_ or "optional"
    if mode == "ignored":
        return []
    cid = _credential_id(credential)
    types = _credential_types(credential)
    known = "DigitalCalibrationCertificate" in types or "ReferenceMaterialCertificate" in types
    if not known:
        return [trace_entry(
            id=f"schema-{cid}",
            level="credential",
            target=cid,
            status="SKIP",
            code="SCHEMA_NOT_DECLARED",
            detail="No schema is declared for this evidence node.",
        )]
    required = ["@context", "type", "issuer", "validFrom", "credentialSubject", "evidence", "proof"]
    ok = all(key in credential for key in required)
    return [trace_entry(
        id=f"schema-{cid}",
        level="credential",
        target=cid,
        status="PASS" if ok else "FAIL",
        code="SCHEMA_VALID" if ok else "SCHEMA_INVALID",
        detail="Credential matches known QI schema." if ok else "Credential is missing required schema fields.",
    )]


def _evaluate_proof(credential: JsonObject, policy: PolicyProfile, options: VerifyGraphOptions) -> list[dict[str, Any]]:
    mode = policy.checks.proof or "optional"
    if mode == "ignored":
        return []
    cid = _credential_id(credential)
    if options.skip_proof:
        return [trace_entry(
            id=f"proof-{cid}",
            level="credential",
            target=cid,
            status="SKIP",
            code="PROOF_SKIPPED",
            detail="Proof verification skipped by caller.",
        )]
    if "proof" not in credential:
        if mode == "required":
            return [trace_entry(
                id=f"proof-{cid}",
                level="credential",
                target=cid,
                status="FAIL",
                code="PROOF_REQUIRED",
                detail="Policy requires a proof.",
            )]
        return []
    if options.resolve_key is None:
        # FC-1: absent key resolution fails closed regardless of policy mode. A
        # credential whose proof was never checked leaves the graph ill-formed,
        # and the model's guarantees do not range over an ill-formed graph
        # (MODEL_SPEC section 4), so there is no weaker verdict to give.
        return [trace_entry(
            id=f"proof-{cid}",
            level="credential",
            target=cid,
            status="FAIL",
            code="PROOF_RESOLVER_MISSING",
            detail="No key resolver was configured, so the proof was never verified.",
        )]

    proof = credential.get("proof")
    cryptosuite = proof.get("cryptosuite") if isinstance(proof, dict) else None
    if cryptosuite == "ecdsa-sd-2023":
        # D-SD-4: Python does not implement SD crypto. Reported as not
        # performed, never as a pass.
        return [trace_entry(
            id=f"proof-{cid}",
            level="credential",
            target=cid,
            status="FAIL",
            code="PROOF_SUITE_UNSUPPORTED",
            detail="Python does not verify ecdsa-sd-2023 proofs (D-SD-4); TypeScript is canonical for SD.",
        )]

    try:
        verification_method = str(proof.get("verificationMethod", "")) if isinstance(proof, dict) else ""
        public_key = options.resolve_key(verification_method)
        ok = verify_proof(credential, public_key, options.document_loader)
    except Exception as error:  # noqa: BLE001 - surfaced as a reason code
        return [trace_entry(
            id=f"proof-{cid}",
            level="credential",
            target=cid,
            status="FAIL",
            code="PROOF_VERIFICATION_ERROR",
            detail=f"Proof verification failed: {error}",
        )]

    return [trace_entry(
        id=f"proof-{cid}",
        level="credential",
        target=cid,
        status="PASS" if ok else "FAIL",
        code="PROOF_VALID" if ok else "PROOF_INVALID",
        detail="Data Integrity proof verified." if ok else "Data Integrity proof failed verification.",
    )]


def _status_mode(cid: str, target_id: str, policy: PolicyProfile) -> str:
    if policy.checks.status:
        return policy.checks.status
    if cid == target_id:
        return policy.statusPolicy.target if policy.statusPolicy and policy.statusPolicy.target else "optional"
    return policy.statusPolicy.authorizingEvidence if policy.statusPolicy and policy.statusPolicy.authorizingEvidence else "optional"


def _evaluate_status(credential: JsonObject, target_id: str, policy: PolicyProfile, options: VerifyGraphOptions) -> list[dict[str, Any]]:
    cid = _credential_id(credential)
    mode = _status_mode(cid, target_id, policy)
    if mode == "ignored" or options.skip_status:
        return [trace_entry(
            id=f"status-{cid}",
            level="credential",
            target=cid,
            status="SKIP",
            code="STATUS_SKIPPED" if options.skip_status else "STATUS_IGNORED",
            detail="Status check skipped.",
        )]
    status = credential.get("credentialStatus")
    if not isinstance(status, dict):
        if mode == "required":
            return [trace_entry(
                id=f"status-{cid}",
                level="credential",
                target=cid,
                status="FAIL",
                code="STATUS_REQUIRED",
                detail="Policy requires credentialStatus.",
            )]
        return []
    entry = BitstringStatusListEntry(
        id=str(status.get("id", "")),
        status_purpose=status.get("statusPurpose", "revocation"),
        status_list_index=str(status.get("statusListIndex", "0")),
        status_list_credential=str(status.get("statusListCredential", "")),
    )
    fetch_status = options.resolve_status_list or options.fetch_document
    if not fetch_status:
        return [trace_entry(
            id=f"status-{cid}",
            level="credential",
            target=cid,
            status="FAIL" if mode == "required" else "WARN",
            code="STATUS_CHECK_FAILED",
            detail="No status list resolver was provided.",
        )]
    try:
        is_set = check_status_bit(entry, fetch_status(entry.status_list_credential))
    except Exception as exc:
        return [trace_entry(
            id=f"status-{cid}",
            level="credential",
            target=cid,
            status="FAIL" if mode == "required" else "WARN",
            code="STATUS_CHECK_FAILED",
            detail=f"Status check failed: {exc}",
        )]
    return [trace_entry(
        id=f"status-{cid}",
        level="credential",
        target=cid,
        status="FAIL" if is_set else "PASS",
        code="CREDENTIAL_SUSPENDED" if is_set and entry.status_purpose == "suspension" else "CREDENTIAL_REVOKED" if is_set else "STATUS_VALID",
        detail=f"Status bit {entry.status_list_index} is {'set' if is_set else 'clear'}.",
    )]


def _evaluate_terms_of_use(credential: JsonObject, policy: PolicyProfile) -> list[dict[str, Any]]:
    terms = credential.get("termsOfUse")
    if not terms:
        return []
    cid = _credential_id(credential)
    return [trace_entry(
        id=f"terms-of-use-{cid}",
        level="credential",
        target=cid,
        status="WARN",
        code="TERMS_OF_USE_PRESENT_NOT_ENFORCED",
        detail="termsOfUse is present; v0.2 extracts it but does not enforce obligations.",
    )]


def verify_credential_graph(
    target_credential: JsonObject,
    policy: PolicyProfile,
    options: VerifyGraphOptions | None = None,
) -> dict[str, Any]:
    options = options or VerifyGraphOptions()
    target_id = _credential_id(target_credential)
    graph, results = build_evidence_graph(
        target_credential,
        fetch_document=options.fetch_document,
        max_depth=options.max_depth or (policy.limits.maxDepth if policy.limits and policy.limits.maxDepth else 8),
        max_evidence_nodes=options.max_evidence_nodes or (policy.limits.maxEvidenceNodes if policy.limits and policy.limits.maxEvidenceNodes else 32),
        require_digest=policy.checks.digest == "required",
    )

    for node in graph.nodes.values():
        results.extend(_evaluate_schema(node.credential, policy))
        results.extend(_evaluate_proof(node.credential, policy, options))
        results.extend(_evaluate_status(node.credential, target_id, policy, options))
        results.extend(_evaluate_terms_of_use(node.credential, policy))

    for edge in graph.edges:
        results.extend(evaluate_edge(
            edge,
            graph,
            policy,
            resolve_trust_registry=options.resolve_trust_registry,
            resolve_key=options.resolve_key,
            document_loader=options.document_loader,
        ))

    results.extend(evaluate_policy(graph, policy))
    return make_verification_trace(
        profile=policy.id,
        target=target_id,
        nodes_resolved=len(graph.nodes),
        edges_evaluated=len(graph.edges),
        results=results,
    )
