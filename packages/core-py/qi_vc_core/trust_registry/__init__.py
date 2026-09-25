# SPDX-License-Identifier: Apache-2.0
# Trust Registry resolution and validation.
# The trust registry is a signed VC served at the root authority's did:web endpoint.
#
# SEC-1: no trust decision is taken on an unverified document. The registry
# credential's Data Integrity proof is verified BEFORE its content is parsed,
# and is_trusted_issuer() accepts only a VerifiedTrustRegistry. Mirrors
# packages/core-ts/src/trust-registry/index.ts.
from __future__ import annotations

import hashlib
import json
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Callable

from ..proofs import verify_proof

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]
KeyResolver = Callable[[str], bytes]

DEFAULT_TTL_SECONDS = 300  # 5 minutes

# Cryptosuites admitted for a TrustRegistryCredential (SEC-9). An unrecognized
# suite fails; it never falls through to a weaker path.
ALLOWED_REGISTRY_CRYPTOSUITES = frozenset({"eddsa-rdfc-2022"})


@dataclass
class TrustRegistryEntry:
    id: str
    name: str | None = None
    issuer_role: str | None = None
    authorization_basis_kinds: list[str] = field(default_factory=list)
    credential_types: list[str] = field(default_factory=list)
    valid_from: str | None = None
    valid_until: str | None = None
    status: str = "active"


@dataclass
class TrustRegistry:
    """Parsed registry. Carries no assertion that any proof was checked."""

    id: str
    issuer: str
    entries: list[TrustRegistryEntry] = field(default_factory=list)


@dataclass
class VerifiedTrustRegistry(TrustRegistry):
    """
    A registry whose TrustRegistryCredential proof verified in the current run.

    Only _verify_trust_registry_credential constructs this. The provenance
    fields satisfy DOC-1: the trace can record which registry resolved an
    identifier and which key vouched for it.
    """

    registry_issuer: str = ""
    verification_method: str = ""
    verified_at: str = ""
    content_digest: str = ""


class TrustRegistryVerificationError(Exception):
    """
    Raised for every condition that prevents a registry from being trusted.

    ``code`` is the reason code surfaced in the verification trace. Callers must
    not collapse these into one failure mode: "not performed" and "performed and
    failed" are different facts (SEC-8).
    """

    def __init__(self, code: str, message: str) -> None:
        super().__init__(message)
        self.code = code


# Keyed on the digest of the verified document (SEC-6) rather than on the URL,
# so a substituted document cannot inherit an earlier document's verified status.
_registry_cache: dict[str, tuple[VerifiedTrustRegistry, float]] = {}


def _digest_of(document: JsonObject) -> str:
    payload = json.dumps(document, sort_keys=True).encode("utf-8")
    return hashlib.sha256(payload).hexdigest()


def verify_trust_registry_credential(
    credential: JsonObject,
    resolve_key: KeyResolver | None = None,
    document_loader: DocumentLoader | None = None,
) -> VerifiedTrustRegistry:
    """
    Verify a TrustRegistryCredential's proof and then parse it.

    Verification strictly precedes parsing: nothing in the returned registry has
    been read out of the document before its signature was checked.

    Raises TrustRegistryVerificationError on any condition that leaves the
    registry untrusted. It never returns an unverified registry and never
    degrades to a warning -- an unverified registry makes the evidence graph
    ill-formed (MODEL_SPEC section 4), so there is no weaker verdict to return.
    """
    proof = credential.get("proof")
    if not proof:
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_PROOF_MISSING",
            "TrustRegistryCredential carries no proof; "
            "it cannot ground a trust decision.",
        )
    if not isinstance(proof, dict):
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_PROOF_MISSING",
            "TrustRegistryCredential proof must be a JSON object.",
        )

    cryptosuite = proof.get("cryptosuite")
    if cryptosuite not in ALLOWED_REGISTRY_CRYPTOSUITES:
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_SUITE_UNSUPPORTED",
            f"Cryptosuite {cryptosuite} is not admitted for a TrustRegistryCredential.",
        )

    if resolve_key is None:
        # Not performed, as distinct from performed-and-failed (SEC-8).
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_KEY_RESOLVER_MISSING",
            "No key resolver was configured, so the trust registry proof "
            "was never verified.",
        )

    verification_method = str(proof.get("verificationMethod", ""))
    try:
        public_key = resolve_key(verification_method)
        ok = verify_proof(credential, public_key, document_loader)
    except Exception as error:  # noqa: BLE001 - surfaced as a reason code
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_PROOF_INVALID",
            f"Trust registry proof verification errored: {error}",
        ) from error

    if not ok:
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_PROOF_INVALID",
            "Trust registry proof did not verify against the resolved key.",
        )

    # Only now is it safe to read the document's content.
    parsed = _parse_trust_registry_credential(credential)
    return VerifiedTrustRegistry(
        id=parsed.id,
        issuer=parsed.issuer,
        entries=parsed.entries,
        registry_issuer=parsed.issuer,
        verification_method=verification_method,
        verified_at=datetime.now(timezone.utc).isoformat(),
        content_digest=_digest_of(credential),
    )


def resolve_trust_registry(
    url: str,
    ttl_seconds: int = DEFAULT_TTL_SECONDS,
    document_loader: DocumentLoader | None = None,
    fetch_fn: Callable[[str], JsonObject] | None = None,
    resolve_key: KeyResolver | None = None,
    proof_document_loader: DocumentLoader | None = None,
) -> VerifiedTrustRegistry:
    """
    Resolve, verify, and parse a TrustRegistryCredential from a URL.

    ``document_loader`` retrieves the registry; ``proof_document_loader``
    resolves @context URLs during canonicalization. They are kept separate: a
    loader that serves the registry for every URL would otherwise be asked to
    resolve the registry's own contexts and return the registry itself.

    Raises TrustRegistryVerificationError.
    """
    now = time.monotonic()

    try:
        if fetch_fn:
            credential: JsonObject = fetch_fn(url)
        elif document_loader:
            result = document_loader(url)
            credential = result["document"]  # type: ignore[assignment]
        else:
            import httpx
            resp = httpx.get(
                url, headers={"Accept": "application/json"}, follow_redirects=True
            )
            resp.raise_for_status()
            credential = resp.json()
    except Exception as error:  # noqa: BLE001 - surfaced as a reason code
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_FETCH_FAILED",
            f"Failed to fetch trust registry from {url}: {error}",
        ) from error

    # Keyed on the content actually retrieved, never on the URL alone.
    key = _digest_of(credential)
    cached = _registry_cache.get(key)
    if cached and (now - cached[1]) < ttl_seconds:
        return cached[0]

    registry = verify_trust_registry_credential(
        credential, resolve_key=resolve_key, document_loader=proof_document_loader
    )
    _registry_cache[key] = (registry, now)
    return registry


def _parse_trust_registry_credential(credential: JsonObject) -> TrustRegistry:
    """
    Parse a TrustRegistryCredential VC into a TrustRegistry object.

    Private: parsing an unverified registry is the SEC-1 defect this module
    exists to prevent. Reach a registry through verify_trust_registry_credential
    or resolve_trust_registry.
    """
    subject = credential.get("credentialSubject")
    if not subject:
        raise TrustRegistryVerificationError(
            "TRUST_REGISTRY_MALFORMED",
            "TrustRegistryCredential missing credentialSubject",
        )

    raw_entries = subject.get("registryEntries") or []
    entries = [
        TrustRegistryEntry(
            id=str(e.get("id", "")),
            name=str(e["name"]) if e.get("name") is not None else None,
            issuer_role=str(e["issuerRole"]) if e.get("issuerRole") is not None else None,
            authorization_basis_kinds=[str(v) for v in e.get("authorizationBasisKinds", [])],
            credential_types=[str(v) for v in e.get("credentialTypes", [])],
            valid_from=str(e["validFrom"]) if e.get("validFrom") is not None else None,
            valid_until=str(e["validUntil"]) if e.get("validUntil") is not None else None,
            status=str(e.get("status", "active")),
        )
        for e in raw_entries
    ]

    issuer = credential.get("issuer", "")
    issuer_str = issuer if isinstance(issuer, str) else str(issuer.get("id", ""))  # type: ignore[union-attr]

    return TrustRegistry(
        id=str(credential.get("id", "")),
        issuer=issuer_str,
        entries=entries,
    )


def is_trusted_issuer(
    registry: VerifiedTrustRegistry,
    issuer_id: str,
    authorization_basis_kind: str | None = None,
    issuer_role: str | None = None,
    credential_type: str | None = None,
    as_of: datetime | None = None,
) -> bool:
    """
    Check whether a DID is trusted for a basis kind and credential type.

    Takes a VerifiedTrustRegistry rather than a TrustRegistry so that no caller
    can reach this comparison with unverified data (SEC-1).
    """
    if not isinstance(registry, VerifiedTrustRegistry):
        raise TypeError(
            "is_trusted_issuer requires a VerifiedTrustRegistry; "
            "reach one through verify_trust_registry_credential (SEC-1)."
        )

    check_time = (as_of or datetime.now(timezone.utc)).timestamp() * 1000

    for entry in registry.entries:
        # SEC-2: both operands originate in credentials whose proofs verified in
        # this run -- entry.id from the registry credential verified by
        # verify_trust_registry_credential, issuer_id from an evidence
        # credential verified at gate 1. This is an identifier comparison inside
        # a recognition system, not a substitute for a signature check (NG-4).
        if entry.id != issuer_id:
            continue
        if entry.status != "active":
            continue
        if entry.valid_from and datetime.fromisoformat(entry.valid_from).timestamp() * 1000 > check_time:
            continue
        if entry.valid_until and datetime.fromisoformat(entry.valid_until).timestamp() * 1000 < check_time:
            continue
        if authorization_basis_kind and entry.authorization_basis_kinds and authorization_basis_kind not in entry.authorization_basis_kinds:
            continue
        if issuer_role and entry.issuer_role and issuer_role != entry.issuer_role:
            continue
        if credential_type and entry.credential_types and credential_type not in entry.credential_types:
            continue
        return True
    return False


def clear_registry_cache() -> None:
    """Clear the in-memory cache (useful in tests)."""
    _registry_cache.clear()
