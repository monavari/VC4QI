# SPDX-License-Identifier: Apache-2.0
# Trust Registry resolution and validation.
# The trust registry is a signed VC served at the root authority's did:web endpoint.
from __future__ import annotations

import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Callable

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]

DEFAULT_TTL_SECONDS = 300  # 5 minutes


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
    id: str
    issuer: str
    entries: list[TrustRegistryEntry] = field(default_factory=list)


_registry_cache: dict[str, tuple[TrustRegistry, float]] = {}


def resolve_trust_registry(
    url: str,
    ttl_seconds: int = DEFAULT_TTL_SECONDS,
    document_loader: DocumentLoader | None = None,
    fetch_fn: Callable[[str], JsonObject] | None = None,
) -> TrustRegistry:
    """Resolve and parse a TrustRegistryCredential from a URL (with TTL cache)."""
    now = time.monotonic()
    cached = _registry_cache.get(url)
    if cached and (now - cached[1]) < ttl_seconds:
        return cached[0]

    if fetch_fn:
        credential: JsonObject = fetch_fn(url)
    elif document_loader:
        result = document_loader(url)
        credential = result["document"]  # type: ignore[assignment]
    else:
        import httpx
        resp = httpx.get(url, headers={"Accept": "application/json"}, follow_redirects=True)
        resp.raise_for_status()
        credential = resp.json()

    registry = parse_trust_registry_credential(credential)
    _registry_cache[url] = (registry, now)
    return registry


def parse_trust_registry_credential(credential: JsonObject) -> TrustRegistry:
    """Parse a TrustRegistryCredential VC into a TrustRegistry object."""
    subject = credential.get("credentialSubject")
    if not subject:
        raise ValueError("TrustRegistryCredential missing credentialSubject")

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
    registry: TrustRegistry,
    issuer_id: str,
    authorization_basis_kind: str | None = None,
    issuer_role: str | None = None,
    credential_type: str | None = None,
    as_of: datetime | None = None,
) -> bool:
    """Check whether a DID is trusted for a basis kind and credential type."""
    check_time = (as_of or datetime.now(timezone.utc)).timestamp() * 1000

    for entry in registry.entries:
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
