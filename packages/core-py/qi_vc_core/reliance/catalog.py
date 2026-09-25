# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

import base64
import hashlib
from collections.abc import Mapping
from dataclasses import dataclass
from types import MappingProxyType
from typing import Literal, Protocol

CatalogErrorCode = Literal[
    "DUPLICATE_RESOURCE",
    "INTEGRITY_MISMATCH",
    "INVALID_RESOURCE",
    "RESOURCE_NOT_FOUND",
    "RESOURCE_BUDGET_EXCEEDED",
]
_MAX_SAFE_INTEGER = 2**53 - 1


class CatalogError(ValueError):
    def __init__(self, code: CatalogErrorCode, message: str) -> None:
        super().__init__(message)
        self.code = code


@dataclass(frozen=True)
class StaticResource:
    uri: str
    media_type: str
    content: bytes
    digest_sri: str
    origin: str
    version: str


@dataclass(frozen=True)
class CatalogBudget:
    max_resources: int
    max_bytes: int


def sha384_sri(content: bytes) -> str:
    digest = hashlib.sha384(content).digest()
    return "sha384-" + base64.b64encode(digest).decode("ascii")


class StaticResourceCatalog:
    def __init__(self, inputs: list[StaticResource]) -> None:
        resources: dict[str, StaticResource] = {}
        for item in inputs:
            for field in ("uri", "media_type", "origin", "version"):
                value = getattr(item, field)
                if not value.strip():
                    raise CatalogError("INVALID_RESOURCE", f"{field} must be nonempty.")
            if item.uri in resources:
                raise CatalogError(
                    "DUPLICATE_RESOURCE", f"Duplicate static resource: {item.uri}"
                )
            content = bytes(item.content)
            actual = sha384_sri(content)
            if actual != item.digest_sri:
                raise CatalogError(
                    "INTEGRITY_MISMATCH",
                    f"Static resource {item.uri} has {actual}; "
                    f"expected {item.digest_sri}.",
                )
            resources[item.uri] = StaticResource(
                uri=item.uri,
                media_type=item.media_type,
                content=content,
                digest_sri=item.digest_sri,
                origin=item.origin,
                version=item.version,
            )
        self._resources: Mapping[str, StaticResource] = MappingProxyType(resources)

    def open_session(self, budget: CatalogBudget) -> CatalogSession:
        if (
            isinstance(budget.max_resources, bool)
            or isinstance(budget.max_bytes, bool)
            or not isinstance(budget.max_resources, int)
            or not isinstance(budget.max_bytes, int)
            or budget.max_resources <= 0
            or budget.max_bytes <= 0
            or budget.max_resources > _MAX_SAFE_INTEGER
            or budget.max_bytes > _MAX_SAFE_INTEGER
        ):
            raise CatalogError(
                "INVALID_RESOURCE",
                "Catalog budgets must be positive safe integers.",
            )
        return CatalogSession(self._resources, budget)


class CatalogSession:
    def __init__(
        self, resources: Mapping[str, StaticResource], budget: CatalogBudget
    ) -> None:
        self._resources = resources
        self._budget = budget
        self._resources_used = 0
        self._bytes_used = 0

    @property
    def usage(self) -> tuple[int, int]:
        return self._resources_used, self._bytes_used

    def resolve(self, uri: str) -> StaticResource:
        item = self._resources.get(uri)
        if item is None:
            raise CatalogError(
                "RESOURCE_NOT_FOUND", f"Static resource is not installed: {uri}"
            )
        if (
            self._resources_used + 1 > self._budget.max_resources
            or self._bytes_used + len(item.content) > self._budget.max_bytes
        ):
            raise CatalogError(
                "RESOURCE_BUDGET_EXCEEDED",
                f"Static resource budget exceeded at {uri}.",
            )
        self._resources_used += 1
        self._bytes_used += len(item.content)
        return StaticResource(**vars(item))


class ResourceResolver(Protocol):
    """Anything that resolves pinned resources by URI."""

    def resolve(self, uri: str) -> StaticResource: ...


class MemoizingResolver:
    """Resolve each distinct URI at most once, so a budget counts distinct resources."""

    def __init__(self, inner: ResourceResolver) -> None:
        self._inner = inner
        self._cache: dict[str, StaticResource | CatalogError] = {}

    @property
    def resolved(self) -> frozenset[str]:
        return frozenset(self._cache)

    def resolve(self, uri: str) -> StaticResource:
        if uri not in self._cache:
            try:
                self._cache[uri] = self._inner.resolve(uri)
            except CatalogError as error:
                self._cache[uri] = error
        entry = self._cache[uri]
        if isinstance(entry, CatalogError):
            raise entry
        return StaticResource(**vars(entry))
