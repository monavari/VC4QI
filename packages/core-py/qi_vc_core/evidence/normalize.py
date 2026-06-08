# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from pydantic import ValidationError

from .types import CredentialEvidenceReference
from ..verifier.trace import trace_entry

JsonObject = dict[str, Any]


def normalize_evidence(
    credential: JsonObject,
    credential_id: str | None = None,
) -> tuple[list[CredentialEvidenceReference], list[dict[str, Any]]]:
    raw = credential.get("evidence")
    if raw is None:
        return [], []

    entries = raw if isinstance(raw, list) else [raw]
    references: list[CredentialEvidenceReference] = []
    results: list[dict[str, Any]] = []
    target_prefix = credential_id or str(credential.get("id", ""))

    for index, entry in enumerate(entries):
        try:
            reference = CredentialEvidenceReference.model_validate(entry)
        except ValidationError as exc:
            results.append(trace_entry(
                id=f"evidence-{index}-unsupported",
                level="credential",
                target=f"{target_prefix}#evidence-{index}",
                status="FAIL",
                code="UNSUPPORTED_EVIDENCE_REFERENCE",
                detail=str(exc.errors()[0]["msg"]),
            ))
            continue

        if reference.relation in {"authorizedBy", "derivedFrom"} and reference.authorizationBasis is None:
            results.append(trace_entry(
                id=f"evidence-{index}-basis",
                level="credential",
                target=f"{target_prefix}#evidence-{index}",
                status="FAIL",
                code="AUTHORIZATION_BASIS_REQUIRED",
                detail=f"{reference.relation} evidence requires authorizationBasis.",
            ))
            continue

        references.append(reference)

    return references, results
