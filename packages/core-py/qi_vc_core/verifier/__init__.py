# SPDX-License-Identifier: Apache-2.0
# Six-rule verification engine for the QI-VC credential chain.
# See ADR-005 for the full algorithm and rationale.
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Callable

from ..canonicalize import verify_hash_binding
from ..status import check_status_bit
from ..trust_registry import parse_trust_registry_credential, is_trusted_issuer
from ..types import BitstringStatusListEntry, RuleResult, VerificationResult
from ..scope import (
    check_dcc_scope_inclusion,
    check_drmd_scope_inclusion,
    check_derivation,
    DccScopeEntry,
    DrmdScopeEntry,
)

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]


@dataclass
class VerifyOptions:
    document_loader: DocumentLoader | None = None
    fetch_document: Callable[[str], JsonObject] | None = None
    resolve_key: Callable[[str], bytes] | None = None
    resolve_trust_registry: Callable[[str], JsonObject] | None = None
    resolve_status_list: Callable[[str], JsonObject] | None = None
    skip_rules: set[int] = field(default_factory=set)


def _pass(rule: int, id_: str, detail: str) -> RuleResult:
    return RuleResult(rule=rule, id=id_, status="PASS", detail=detail)

def _fail(rule: int, id_: str, detail: str) -> RuleResult:
    return RuleResult(rule=rule, id=id_, status="FAIL", detail=detail)

def _skip(rule: int, id_: str, detail: str) -> RuleResult:
    return RuleResult(rule=rule, id=id_, status="SKIP", detail=detail)


def _issuer_id(credential: JsonObject) -> str:
    iss = credential.get("issuer", "")
    if isinstance(iss, str):
        return iss
    if isinstance(iss, dict):
        return str(iss.get("id", ""))
    return ""


def _subject_id(credential: JsonObject) -> str:
    cs = credential.get("credentialSubject")
    if isinstance(cs, dict):
        return str(cs.get("id", ""))
    return ""


def _evidence_entry(credential: JsonObject) -> JsonObject | None:
    ev = credential.get("evidence")
    if isinstance(ev, list) and ev:
        return ev[0]  # type: ignore[return-value]
    return None


def _derive_registry_url(issuer_did: str) -> str:
    if issuer_did.startswith("did:web:"):
        host = issuer_did[len("did:web:"):].replace(":", "/")
        return f"https://{host}/.well-known/trust-registry.json"
    raise ValueError(f"Cannot derive trust registry URL from DID: {issuer_did}")


def verify(
    domain_credential: JsonObject,
    opts: VerifyOptions | None = None,
) -> VerificationResult:
    """Verify a domain credential against the full six-rule chain.

    Rule 1 — Domain credential issuer DID == CapabilityCredential subject DID
    Rule 2 — AccreditationCredential issuer is active in TrustRegistryCredential
    Rule 3 — Temporal validity: domain VC within capability window, capability within accreditation window
    Rule 4 — BitstringStatusListEntry bit = 0 for all credentials in the chain
    Rule 5 — hashBinding: domain→capability and capability→accreditation match
    Rule 6 — Domain payload scope ⊆ CapabilityCredential scope
    """
    if opts is None:
        opts = VerifyOptions()

    results: list[RuleResult] = []
    skip_ = opts.skip_rules

    def fetch_doc(uri: str) -> JsonObject:
        if opts.fetch_document:
            return opts.fetch_document(uri)
        import httpx
        resp = httpx.get(uri, headers={"Accept": "application/json"}, follow_redirects=True)
        resp.raise_for_status()
        return resp.json()  # type: ignore[no-any-return]

    # ── Resolve CapabilityCredential via evidence ──────────────────────────
    cap_evidence = _evidence_entry(domain_credential)
    if not cap_evidence or cap_evidence.get("type") != "CapabilityCredentialReference":
        return VerificationResult(
            verified=False,
            results=[_fail(1, "issuer-matches-capability-subject",
                           "Domain credential has no CapabilityCredentialReference in evidence")],
            error="Missing capability evidence",
        )

    try:
        capability_credential: JsonObject = fetch_doc(str(cap_evidence["id"]))
    except Exception as exc:
        return VerificationResult(
            verified=False,
            results=[_fail(1, "issuer-matches-capability-subject",
                           f"Cannot fetch CapabilityCredential: {exc}")],
        )

    # ── Resolve AccreditationCredential via capability evidence ────────────
    acc_evidence = _evidence_entry(capability_credential)
    if not acc_evidence:
        return VerificationResult(
            verified=False,
            results=[_fail(2, "accreditation-issuer-trusted",
                           "CapabilityCredential has no evidence referencing AccreditationCredential")],
        )

    try:
        accreditation_credential: JsonObject = fetch_doc(str(acc_evidence["id"]))
    except Exception as exc:
        return VerificationResult(
            verified=False,
            results=[_fail(2, "accreditation-issuer-trusted",
                           f"Cannot fetch AccreditationCredential: {exc}")],
        )

    # ── Rule 1: issuer-matches-capability-subject ─────────────────────────
    domain_issuer = _issuer_id(domain_credential)
    cap_subject = _subject_id(capability_credential)
    if domain_issuer and cap_subject and domain_issuer == cap_subject:
        results.append(_pass(1, "issuer-matches-capability-subject",
                             f"Domain issuer {domain_issuer} == CapabilityCredential subject"))
    else:
        results.append(_fail(1, "issuer-matches-capability-subject",
                             f"Domain issuer '{domain_issuer}' ≠ CapabilityCredential subject '{cap_subject}'"))

    # ── Rule 2: accreditation-issuer-trusted ─────────────────────────────
    if 2 in skip_:
        results.append(_skip(2, "accreditation-issuer-trusted", "Skipped by caller"))
    else:
        try:
            acc_issuer = _issuer_id(accreditation_credential)
            if opts.resolve_trust_registry:
                trust_registry_doc = opts.resolve_trust_registry(acc_issuer)
            else:
                registry_url = _derive_registry_url(acc_issuer)
                trust_registry_doc = fetch_doc(registry_url)
            registry = parse_trust_registry_credential(trust_registry_doc)
            if is_trusted_issuer(registry, acc_issuer):
                results.append(_pass(2, "accreditation-issuer-trusted",
                                     f"Issuer {acc_issuer} is active in TrustRegistryCredential"))
            else:
                results.append(_fail(2, "accreditation-issuer-trusted",
                                     f"Issuer {acc_issuer} not found or expired in TrustRegistryCredential"))
        except Exception as exc:
            results.append(_fail(2, "accreditation-issuer-trusted",
                                 f"Trust registry check failed: {exc}"))

    # ── Rule 3: temporal validity ─────────────────────────────────────────
    def _parse_dt(s: str) -> datetime | None:
        return datetime.fromisoformat(s) if s else None

    domain_from_s = str(domain_credential.get("validFrom", ""))
    cap_from_s = str(capability_credential.get("validFrom", ""))
    cap_until_s = str(capability_credential.get("validUntil", ""))
    acc_from_s = str(accreditation_credential.get("validFrom", ""))
    acc_until_s = str(accreditation_credential.get("validUntil", ""))

    domain_dt = _parse_dt(domain_from_s)
    cap_from_dt = _parse_dt(cap_from_s)
    cap_until_dt = _parse_dt(cap_until_s)
    acc_from_dt = _parse_dt(acc_from_s)
    acc_until_dt = _parse_dt(acc_until_s)

    temporal_ok = True
    temporal_details: list[str] = []

    if domain_dt and cap_from_dt and domain_dt < cap_from_dt:
        temporal_ok = False
        temporal_details.append(f"domain validFrom ({domain_from_s}) is before capability validFrom ({cap_from_s})")
    if domain_dt and cap_until_dt and domain_dt > cap_until_dt:
        temporal_ok = False
        temporal_details.append(f"domain validFrom ({domain_from_s}) is after capability validUntil ({cap_until_s})")
    if cap_from_dt and acc_from_dt and cap_from_dt < acc_from_dt:
        temporal_ok = False
        temporal_details.append(f"capability validFrom ({cap_from_s}) is before accreditation validFrom ({acc_from_s})")
    if cap_from_dt and acc_until_dt and cap_from_dt > acc_until_dt:
        temporal_ok = False
        temporal_details.append(f"capability validFrom ({cap_from_s}) is after accreditation validUntil ({acc_until_s})")

    if temporal_ok:
        results.append(_pass(3, "temporal-validity", "All validity windows are consistent"))
    else:
        results.append(_fail(3, "temporal-validity", "; ".join(temporal_details)))

    # ── Rule 4: status-bit-clear ──────────────────────────────────────────
    if 4 in skip_:
        results.append(_skip(4, "status-bit-clear", "Skipped by caller"))
    else:
        status_fetch = opts.resolve_status_list or fetch_doc
        results.extend(_check_all_status_bits(
            [domain_credential, capability_credential, accreditation_credential],
            status_fetch,
        ))

    # ── Rule 5: hash-binding-matches ──────────────────────────────────────
    if 5 in skip_:
        results.append(_skip(5, "hash-binding-matches", "Skipped by caller"))
    else:
        cap_hash_ok = _check_hash_binding(capability_credential, cap_evidence, opts.document_loader)
        results.append(
            _pass(5, "hash-binding-matches", "domain→capability hashBinding verified")
            if cap_hash_ok else
            _fail(5, "hash-binding-matches", "domain→capability hashBinding mismatch")
        )
        if acc_evidence:
            acc_hash_ok = _check_hash_binding(accreditation_credential, acc_evidence, opts.document_loader)
            results.append(
                _pass(5, "hash-binding-matches", "capability→accreditation hashBinding verified")
                if acc_hash_ok else
                _fail(5, "hash-binding-matches", "capability→accreditation hashBinding mismatch")
            )

    # ── Rule 2b: derivation check (capability constraints ⊆ accreditation scope)
    if 2 not in skip_:
        deriv = check_derivation(capability_credential, accreditation_credential)
        if not deriv.passed:
            for v in deriv.violations:
                results.append(_fail(2, "derivation-valid", v.detail))

    # ── Rule 6: scope-covers-payload ──────────────────────────────────────
    if 6 in skip_:
        results.append(_skip(6, "scope-covers-payload", "Skipped by caller"))
    else:
        results.extend(_check_scope_rule(domain_credential, capability_credential))

    verified = all(r.status != "FAIL" for r in results)
    return VerificationResult(verified=verified, results=results)


# ── Helpers ───────────────────────────────────────────────────────────────

def _check_all_status_bits(
    credentials: list[JsonObject],
    fetch_doc: Callable[[str], JsonObject],
) -> list[RuleResult]:
    rule_results: list[RuleResult] = []

    for cred in credentials:
        status_obj = cred.get("credentialStatus")
        if not status_obj or not isinstance(status_obj, dict):
            continue
        if status_obj.get("type") != "BitstringStatusListEntry":
            continue

        entry = BitstringStatusListEntry(
            id=str(status_obj.get("id", "")),
            status_purpose=status_obj.get("statusPurpose", "revocation"),  # type: ignore[arg-type]
            status_list_index=str(status_obj.get("statusListIndex", "0")),
            status_list_credential=str(status_obj.get("statusListCredential", "")),
        )

        try:
            list_credential = fetch_doc(entry.status_list_credential)
            is_set = check_status_bit(entry, list_credential)
            if is_set:
                purpose = "revoked" if entry.status_purpose == "revocation" else "suspended"
                rule_results.append(_fail(4, "status-bit-clear",
                                         f"Status bit SET for credential (index {entry.status_list_index}) — credential is {purpose}"))
            else:
                rule_results.append(_pass(4, "status-bit-clear",
                                         f"Status bit clear for credential (index {entry.status_list_index})"))
        except Exception as exc:
            rule_results.append(_fail(4, "status-bit-clear",
                                      f"Cannot check status list {entry.status_list_credential}: {exc}"))

    if not rule_results:
        rule_results.append(_skip(4, "status-bit-clear", "No BitstringStatusListEntry found in chain"))
    return rule_results


def _check_hash_binding(
    referenced_credential: JsonObject,
    evidence: JsonObject,
    document_loader: DocumentLoader | None,
) -> bool:
    hash_binding = evidence.get("hashBinding")
    if not hash_binding or not isinstance(hash_binding, dict):
        return False

    digest_multibase = hash_binding.get("digestMultibase")
    if not digest_multibase:
        return False

    # Remove proof before hashing per ADR-005
    unsecured = {k: v for k, v in referenced_credential.items() if k != "proof"}
    try:
        return verify_hash_binding(unsecured, str(digest_multibase), document_loader)
    except Exception:
        return False


def _check_scope_rule(
    domain_credential: JsonObject,
    capability_credential: JsonObject,
) -> list[RuleResult]:
    cap_subject = capability_credential.get("credentialSubject") or {}
    constraints: JsonObject = cap_subject.get("constraints") or {}

    if not constraints:
        # Fall back to simple type check when no constraints object
        scope = cap_subject.get("scope")
        if not scope:
            return [_skip(6, "scope-covers-payload",
                          "CapabilityCredential has no scope — check skipped")]
        authorized_types: list[str] = scope.get("authorizedCredentialTypes") or []
        domain_types: list[str] = domain_credential.get("type") or []
        domain_type = next((t for t in domain_types if t != "VerifiableCredential"), None)
        if domain_type and authorized_types and domain_type not in authorized_types:
            return [_fail(6, "scope-covers-payload",
                          f"Domain type '{domain_type}' not in capability authorizedCredentialTypes: [{', '.join(authorized_types)}]")]
        return [_pass(6, "scope-covers-payload",
                      "Domain credential type is within CapabilityCredential scope")]

    domain_types = domain_credential.get("type") or []
    is_dcc = "DigitalCalibrationCertificate" in domain_types
    is_drmd = "ReferenceMaterialCertificate" in domain_types

    if is_dcc:
        raw_entries: list[JsonObject] = constraints.get("scopeEntries") or []
        scope_entries = [
            DccScopeEntry(
                measurand=e.get("measurand"),
                allowed_methods=e.get("allowedMethods") or [],
                range_from=e.get("range", {}).get("from"),
                range_to=e.get("range", {}).get("to"),
                range_unit=e.get("range", {}).get("unit") or {},
                uncertainty_max_absolute=e.get("uncertainty", {}).get("maxAbsolute"),
                uncertainty_max_relative_percent=e.get("uncertainty", {}).get("maxRelativePercent"),
            )
            for e in raw_entries
        ]
        result = check_dcc_scope_inclusion(domain_credential, scope_entries)
        if not result.passed:
            return [_fail(6, "scope-covers-payload", f"[{v.code}] {v.detail}") for v in result.violations]
        return [_pass(6, "scope-covers-payload", "DCC measurement results within CapabilityCredential scope")]

    if is_drmd:
        raw_drmd_entries: list[JsonObject] = constraints.get("scopeEntries") or []
        drmd_entries = [
            DrmdScopeEntry(
                matrix=e.get("matrix") or [],
                allowed_properties=e.get("allowedProperties") or [],
                allowed_forms=e.get("allowedForms") or [],
                uncertainty_max_absolute_mg_kg=e.get("uncertainty", {}).get("maxAbsoluteMgKg"),
                uncertainty_max_relative_u_k2=e.get("uncertainty", {}).get("maxRelativeU_k2"),
            )
            for e in raw_drmd_entries
        ]
        result = check_drmd_scope_inclusion(domain_credential, drmd_entries)
        if not result.passed:
            return [_fail(6, "scope-covers-payload", f"[{v.code}] {v.detail}") for v in result.violations]
        return [_pass(6, "scope-covers-payload", "DRMD certified properties within CapabilityCredential scope")]

    # Generic type check
    authorized_types = constraints.get("authorizedCredentialTypes") or []
    domain_types = domain_credential.get("type") or []
    domain_type = next((t for t in domain_types if t != "VerifiableCredential"), None)
    if domain_type and authorized_types and domain_type not in authorized_types:
        return [_fail(6, "scope-covers-payload",
                      f"Domain type '{domain_type}' not in capability authorizedCredentialTypes: [{', '.join(authorized_types)}]")]
    return [_pass(6, "scope-covers-payload",
                  "Domain credential type is within CapabilityCredential scope")]
