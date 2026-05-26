# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

import base64
import hashlib
import json
from typing import Any

from ..utils.base58btc import to_multibase
from ..verifier.trace import trace_entry
from .types import CredentialEvidenceReference

JsonObject = dict[str, Any]


def stable_stringify(value: Any) -> str:
    return json.dumps(value, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


def unsecured_document(document: JsonObject) -> JsonObject:
    return {key: value for key, value in document.items() if key != "proof"}


def compute_digest_sri(document: JsonObject, algorithm: str = "sha384") -> str:
    h = hashlib.new(algorithm)
    h.update(stable_stringify(unsecured_document(document)).encode("utf-8"))
    return f"{algorithm}-{base64.b64encode(h.digest()).decode('ascii')}"


def compute_digest_multibase(document: JsonObject) -> str:
    digest = hashlib.sha256(stable_stringify(unsecured_document(document)).encode("utf-8")).digest()
    return to_multibase(digest)


def verify_digest(
    evidence: CredentialEvidenceReference,
    referenced: JsonObject,
    *,
    from_id: str,
    to_id: str,
    relation: str,
    require_digest: bool = False,
) -> dict[str, Any]:
    if not evidence.digestMultibase and not evidence.digestSRI:
        return trace_entry(
            id=f"digest-{from_id}-to-{to_id}",
            level="edge",
            from_=from_id,
            to=to_id,
            relation=relation,
            status="FAIL" if require_digest else "WARN",
            code="DIGEST_REQUIRED" if require_digest else "DIGEST_MISSING",
            detail="Policy requires digestMultibase or digestSRI on evidence reference."
            if require_digest else "Evidence reference has no digestMultibase or digestSRI.",
        )

    if evidence.digestMultibase and evidence.digestMultibase != compute_digest_multibase(referenced):
        return trace_entry(
            id=f"digest-{from_id}-to-{to_id}",
            level="edge",
            from_=from_id,
            to=to_id,
            relation=relation,
            status="FAIL",
            code="DIGEST_MISMATCH",
            detail="digestMultibase does not match referenced evidence.",
        )

    if evidence.digestSRI:
        algorithm = "sha256" if evidence.digestSRI.startswith("sha256-") else "sha512" if evidence.digestSRI.startswith("sha512-") else "sha384"
        if evidence.digestSRI != compute_digest_sri(referenced, algorithm):
            return trace_entry(
                id=f"digest-{from_id}-to-{to_id}",
                level="edge",
                from_=from_id,
                to=to_id,
                relation=relation,
                status="FAIL",
                code="DIGEST_MISMATCH",
                detail="digestSRI does not match referenced evidence.",
            )

    return trace_entry(
        id=f"digest-{from_id}-to-{to_id}",
        level="edge",
        from_=from_id,
        to=to_id,
        relation=relation,
        status="PASS",
        code="DIGEST_VALID",
        detail="Evidence digest matches referenced evidence.",
    )
