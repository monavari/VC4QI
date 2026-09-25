# SPDX-License-Identifier: Apache-2.0
"""Pinned static resources for the experimental RM v1 binding (mirrors rm-v1.ts)."""
from __future__ import annotations

import json
from pathlib import Path

from .catalog import StaticResource, StaticResourceCatalog

VC_V2_CONTEXT = "https://www.w3.org/ns/credentials/v2"
RM_V1_CONTEXT = "https://vc4qi.example/contexts/rm/1"
RM_V1_VOCAB = "https://vc4qi.example/bindings/rm/1#"
RM_V1_SCHEMA_BASE = "https://vc4qi.example/schemas/rm/1/"

REPO_ROOT = Path(__file__).resolve().parents[4]
RM_V1_DIRECTORY = REPO_ROOT / "bindings" / "experimental" / "rm-v1"
_FIELDS = ("uri", "path", "mediaType", "origin", "version", "digestSRI")


def read_pinned_resources(
    index_path: Path, root: Path = REPO_ROOT
) -> list[StaticResource]:
    """Read a pinned-resource index and the exact bytes it names.

    Paths are relative to the repository root and may not escape it. Integrity is
    verified by the catalog, not here.
    """
    index = json.loads(index_path.read_text(encoding="utf-8"))
    entries = index.get("resources") if isinstance(index, dict) else None
    if not isinstance(entries, list) or not entries:
        raise TypeError(f"Pinned resource index {index_path} has no resources.")
    resources: list[StaticResource] = []
    for entry in entries:
        if (
            not isinstance(entry, dict)
            or any(not isinstance(entry.get(k), str) or not entry[k] for k in _FIELDS)
            or not entry["digestSRI"].startswith("sha384-")
            or entry["path"].startswith("/")
            or ".." in entry["path"].split("/")
        ):
            raise TypeError(f"Invalid pinned resource entry in {index_path}.")
        resources.append(
            StaticResource(
                uri=entry["uri"],
                media_type=entry["mediaType"],
                content=(root / entry["path"]).read_bytes(),
                digest_sri=entry["digestSRI"],
                origin=entry["origin"],
                version=entry["version"],
            )
        )
    return resources


def load_rm_v1_catalog(
    extra: list[StaticResource] | None = None,
) -> StaticResourceCatalog:
    """Install the RM v1 pinned contexts and schemas into a fresh isolated catalog."""
    return StaticResourceCatalog(
        read_pinned_resources(RM_V1_DIRECTORY / "catalog.json") + list(extra or [])
    )
