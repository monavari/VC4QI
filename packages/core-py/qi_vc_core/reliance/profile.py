# SPDX-License-Identifier: Apache-2.0
"""Verifier-owned reliance profile (mirrors profile.ts)."""

from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Any, Literal

from .rm_v1_claims import ConformityRequirement, DecisionRule, MethodSuccession
from .status_list import StatusPolicy
from .types import VersionedIdentifier


@dataclass(frozen=True)
class TrustAnchor:
    id: str
    purposes: tuple[str, ...]


@dataclass(frozen=True)
class AuthorityPolicy:
    certificate_routes: tuple[str, ...]
    global_restrictions: tuple[str, ...]
    max_routes: int


@dataclass(frozen=True)
class RelianceProfile:
    id: str
    version: str
    status: Literal["experimental", "production"]
    binding: VersionedIdentifier
    trust_anchors: tuple[TrustAnchor, ...]
    authority: AuthorityPolicy
    credential_status: StatusPolicy
    # How a binding-declared method revision is interpreted; "none" leaves it unknown.
    method_succession: MethodSuccession
    requirements: tuple[ConformityRequirement, ...]
    decision_rules: tuple[DecisionRule, ...]


_SUCCESSION = ("accept-successor", "require-extension", "none")
_ACCEPT_WHEN = ("value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit")
_DECIMAL = re.compile(r"(0|[1-9][0-9]*)(\.[0-9]+)?")


def _nonempty(value: Any) -> bool:
    return isinstance(value, str) and bool(value.strip())


def _string_list(value: Any) -> bool:
    return (
        isinstance(value, list)
        and bool(value)
        and all(_nonempty(v) for v in value)
        and len(set(value)) == len(value)
    )


def load_reliance_profile(value: Any) -> RelianceProfile:
    """Validate a profile and return an immutable copy; rules are never defaulted."""
    if (
        not isinstance(value, dict)
        or not _nonempty(value.get("id"))
        or not _nonempty(value.get("version"))
        or value.get("status") not in ("experimental", "production")
    ):
        raise TypeError("Reliance profile identity, version or status is invalid.")
    binding = value.get("binding")
    if (
        not isinstance(binding, dict)
        or not _nonempty(binding.get("id"))
        or not _nonempty(binding.get("version"))
    ):
        raise TypeError("Reliance profile must name exactly one binding and version.")
    anchors = value.get("trustAnchors")
    if not isinstance(anchors, list) or any(
        not isinstance(a, dict)
        or not _nonempty(a.get("id"))
        or not _string_list(a.get("purposes"))
        for a in anchors
    ):
        raise TypeError(
            "Reliance profile trustAnchors must list anchors with explicit purposes."
        )
    authority = value.get("authority")
    max_routes = authority.get("maxRoutes") if isinstance(authority, dict) else None
    if (
        not isinstance(authority, dict)
        or not _string_list(authority.get("certificateRoutes"))
        or not isinstance(authority.get("globalRestrictions"), list)
        or not all(_nonempty(r) for r in authority["globalRestrictions"])
        or isinstance(max_routes, bool)
        or not isinstance(max_routes, int)
        or max_routes <= 0
    ):
        raise TypeError(
            "Reliance profile authority needs certificateRoutes, globalRestrictions "
            "and a positive maxRoutes."
        )
    status = value.get("credentialStatus")
    max_age = status.get("maxAgeSeconds") if isinstance(status, dict) else None
    if (
        not isinstance(status, dict)
        or not isinstance(status.get("required"), bool)
        or not _string_list(status.get("purposes"))
        or isinstance(max_age, bool)
        or not isinstance(max_age, int)
        or max_age <= 0
    ):
        raise TypeError(
            "Reliance profile credentialStatus needs required, purposes and a positive "
            "maxAgeSeconds."
        )
    mapping = value.get("mapping")
    if (
        not isinstance(mapping, dict)
        or mapping.get("methodSuccession") not in _SUCCESSION
    ):
        raise TypeError(
            "Reliance profile mapping.methodSuccession must be one of "
            + ", ".join(_SUCCESSION)
            + "."
        )
    conformity = value.get("conformity")
    requirements = (
        conformity.get("requirements") if isinstance(conformity, dict) else None
    )
    rules = conformity.get("decisionRules") if isinstance(conformity, dict) else None

    def valid_requirement(r: Any) -> bool:
        limit = r.get("upperLimit") if isinstance(r, dict) else None
        return (
            isinstance(r, dict)
            and all(
                _nonempty(r.get(k)) for k in ("id", "propertyIri", "quantityKindIri")
            )
            and isinstance(limit, dict)
            and isinstance(limit.get("value"), str)
            and _DECIMAL.fullmatch(limit["value"]) is not None
            and _nonempty(limit.get("unit"))
        )

    if (
        not isinstance(requirements, list)
        or not isinstance(rules, list)
        or not all(valid_requirement(r) for r in requirements)
        or not all(
            isinstance(r, dict)
            and _nonempty(r.get("id"))
            and r.get("acceptWhen") in _ACCEPT_WHEN
            for r in rules
        )
    ):
        raise TypeError(
            "Reliance profile conformity needs requirements (id, propertyIri, "
            "quantityKindIri, upperLimit) and decisionRules (id, acceptWhen)."
        )
    ids = [r["id"] for r in requirements] + [r["id"] for r in rules]
    if len(set(ids)) != len(ids):
        raise TypeError("Reliance profile conformity ids must be unique.")
    return RelianceProfile(
        id=value["id"],
        version=value["version"],
        status=value["status"],
        binding=VersionedIdentifier(binding["id"], binding["version"]),
        trust_anchors=tuple(
            TrustAnchor(a["id"], tuple(a["purposes"])) for a in anchors
        ),
        authority=AuthorityPolicy(
            certificate_routes=tuple(authority["certificateRoutes"]),
            global_restrictions=tuple(authority["globalRestrictions"]),
            max_routes=max_routes,
        ),
        credential_status=StatusPolicy(
            required=status["required"],
            purposes=tuple(status["purposes"]),
            max_age_seconds=max_age,
        ),
        method_succession=mapping["methodSuccession"],
        requirements=tuple(
            ConformityRequirement(
                r["id"],
                r["propertyIri"],
                r["quantityKindIri"],
                r["upperLimit"]["value"],
                r["upperLimit"]["unit"],
            )
            for r in requirements
        ),
        decision_rules=tuple(DecisionRule(r["id"], r["acceptWhen"]) for r in rules),
    )
