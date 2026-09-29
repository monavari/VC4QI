# SPDX-License-Identifier: Apache-2.0
"""The default evaluation entry point (mirrors src/reliance/evaluate.ts, I5 step 4).

A verifier installs one binding and selects one of its profiles; the request is
evaluated by that binding's gate 0-6 evaluator. There is no fallback: an uninstalled
binding is a configuration error, and a request naming another binding or profile is
refused by the evaluator at gate 0. Legacy credentials are evaluated only through
``qi_vc_core.legacy.evaluate_legacy_profile``.
"""

from __future__ import annotations

import json
import re
from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path
from types import MappingProxyType

from .cal_v1 import CAL_V1_BINDING_ID, evaluate_cal_slice
from .catalog import StaticResource, StaticResourceCatalog
from .gs_v1 import GS_V1_BINDING_ID, evaluate_gs_slice
from .manifest import RM_V1_BINDING_ID, BindingManifest, load_binding_manifest
from .profile import RelianceProfile, load_reliance_profile
from .rm_v1 import read_pinned_resources
from .rm_v1_artifacts import RmSliceEvaluation, evaluate_rm_slice
from .types import RelianceRequest

RelianceEvaluation = RmSliceEvaluation
"""The result plus the per-artifact gate 0-3 verification behind it."""

_Evaluator = Callable[
    [RelianceRequest, StaticResourceCatalog, BindingManifest, RelianceProfile],
    RelianceEvaluation,
]

_EVALUATORS: MappingProxyType[str, _Evaluator] = MappingProxyType(
    {
        RM_V1_BINDING_ID: evaluate_rm_slice,
        CAL_V1_BINDING_ID: evaluate_cal_slice,
        GS_V1_BINDING_ID: evaluate_gs_slice,
    }
)

SUPPORTED_BINDINGS: tuple[str, ...] = tuple(_EVALUATORS)
"""The binding identifiers the default entry point evaluates."""


def evaluate_reliance(
    request: RelianceRequest,
    catalog: StaticResourceCatalog,
    manifest: BindingManifest,
    profile: RelianceProfile,
) -> RelianceEvaluation:
    """Evaluate a request under the verifier's installed binding and selected profile.

    Accept means every required predicate is established; reject means a demonstrated
    contradiction on a decisive path; anything else is not_established.
    """
    evaluator = _EVALUATORS.get(manifest.id)
    if evaluator is None:
        raise ValueError(
            f"No evaluator for binding {manifest.id}; "
            f"supported: {', '.join(SUPPORTED_BINDINGS)}."
        )
    return evaluator(request, catalog, manifest, profile)


@dataclass(frozen=True)
class InstalledBinding:
    manifest: BindingManifest
    profile: RelianceProfile
    catalog: StaticResourceCatalog


_PROFILE_NAME = re.compile(r"^[a-z0-9][a-z0-9-]*$")


def install_binding(
    directory: Path,
    profile_name: str,
    *,
    test_vectors: bool = True,
    extra: list[StaticResource] | None = None,
) -> InstalledBinding:
    """Install a binding directory with the profile ``profiles/<profile_name>.json``.

    Pinned paths are relative to the repository root; every resource's SHA-384 digest
    is checked by the catalog. Signed test vectors are installed when present unless
    ``test_vectors`` is false.
    """
    if not _PROFILE_NAME.match(profile_name):
        raise ValueError(f"Invalid profile name {profile_name}.")
    directory = Path(directory)
    manifest = load_binding_manifest(
        json.loads((directory / "manifest.json").read_text(encoding="utf-8"))
    )
    profile_path = directory / "profiles" / f"{profile_name}.json"
    profile = load_reliance_profile(
        json.loads(profile_path.read_text(encoding="utf-8"))
    )
    vectors = directory / "test-vectors" / "signed" / "catalog.json"
    resources = read_pinned_resources(directory / "catalog.json")
    if test_vectors and vectors.exists():
        resources += read_pinned_resources(vectors)
    resources += list(extra or [])
    return InstalledBinding(manifest, profile, StaticResourceCatalog(resources))
