# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from collections.abc import Mapping
from copy import deepcopy
from dataclasses import dataclass
from types import MappingProxyType
from typing import Any, Literal

RM_V1_BINDING_ID = "https://vc4qi.example/bindings/rm/1"

_REQUIRED_KEYS = {
    "$schema", "id", "version", "status", "owner", "installation",
    "carrierAndSchema", "factMappings", "cardinality", "discoveryAndIntegrity",
    "recognizedTypes", "principalAndRights", "scopeAndMapping",
    "routesAndRestrictions", "protectionTimeAndResolution",
    "supportAndDisclosure", "evidenceAndExclusions",
}


@dataclass(frozen=True)
class BindingInstallation:
    status: Literal["incomplete", "installable"]
    reason: str
    pending_resources: tuple[str, ...]


@dataclass(frozen=True)
class BindingManifest:
    id: str
    version: str
    status: Literal["experimental", "production"]
    installation: BindingInstallation
    data: Mapping[str, Any]


def _object(value: object) -> bool:
    return isinstance(value, dict)


def _freeze(value: Any) -> Any:
    if isinstance(value, dict):
        return MappingProxyType({key: _freeze(item) for key, item in value.items()})
    if isinstance(value, list):
        return tuple(_freeze(item) for item in value)
    return value


def load_binding_manifest(value: object) -> BindingManifest:
    if not isinstance(value, dict) or set(value) != _REQUIRED_KEYS:
        raise ValueError(
            "Binding manifest must contain exactly the supported top-level categories."
        )
    identifier, version, status = value["id"], value["version"], value["status"]
    if (
        not isinstance(identifier, str) or not identifier
        or not isinstance(version, str) or not version
        or status not in ("experimental", "production")
    ):
        raise ValueError("Binding manifest identity, version, or status is invalid.")
    installation = value["installation"]
    if not isinstance(installation, dict):
        raise ValueError("Binding manifest installation state is invalid.")
    pending = installation.get("pendingResources")
    installation_status = installation.get("status")
    reason = installation.get("reason")
    if (
        installation_status not in ("incomplete", "installable")
        or not isinstance(reason, str) or not reason
        or not isinstance(pending, list)
        or any(not isinstance(uri, str) or not uri for uri in pending)
    ):
        raise ValueError("Binding manifest installation state is invalid.")
    mappings = value["factMappings"]
    if not isinstance(mappings, list) or not mappings or not all(
        _object(mapping) for mapping in mappings
    ):
        raise ValueError(
            "Binding manifest factMappings must be a nonempty object array."
        )
    for key in _REQUIRED_KEYS - {
        "$schema", "id", "version", "status", "installation", "factMappings",
    }:
        item = value[key]
        if not isinstance(item, dict) or not item:
            raise ValueError(f"Binding manifest {key} must be a nonempty object.")
    copied = _freeze(deepcopy(value))
    return BindingManifest(
        id=identifier,
        version=version,
        status=status,
        installation=BindingInstallation(
            status=installation_status,
            reason=reason,
            pending_resources=tuple(pending),
        ),
        data=copied,
    )


def require_installable_binding(manifest: BindingManifest) -> None:
    if (
        manifest.installation.status != "installable"
        or manifest.installation.pending_resources
    ):
        raise ValueError(
            f"Binding {manifest.id}@{manifest.version} is not installable."
        )
    raise ValueError(
        f"Binding {manifest.id}@{manifest.version} cannot be selected before "
        "catalog-backed installation verification."
    )
