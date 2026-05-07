# SPDX-License-Identifier: Apache-2.0
# High-level credential issuance: proof creation (+ optional schema validation).
from __future__ import annotations

from typing import Any, Callable

from ..proofs import create_proof
from ..types import Ed25519KeyPair

JsonObject = dict[str, Any]
DocumentLoader = Callable[[str], dict[str, Any]]

# Schema IDs for convenience helpers (must match TS SCHEMA_IDS)
_SCHEMA_IDS = {
    "DCC": "https://w3id.org/qi-vc/schemas/v1/digital-calibration-certificate.schema.json",
    "RMC": "https://w3id.org/qi-vc/schemas/v1/reference-material-certificate.schema.json",
}


def issue(
    credential: JsonObject,
    key_pair: Ed25519KeyPair,
    schema_id: str | None = None,
    skip_validation: bool = False,
    created: str | None = None,
    document_loader: DocumentLoader | None = None,
) -> JsonObject:
    """Issue a Verifiable Credential.

    1. Validate against JSON Schema (optional, off when skip_validation=True)
    2. Create eddsa-rdfc-2022 Data Integrity proof
    3. Return the signed credential

    The input credential MUST NOT contain a proof block.
    """
    if not skip_validation:
        sid = schema_id or credential.get("$schema")
        if sid:
            _validate(credential, str(sid))

    proof = create_proof(credential, key_pair, created=created, document_loader=document_loader)
    return {**credential, "proof": proof.to_json_object()}


def issue_dcc(
    credential: JsonObject,
    key_pair: Ed25519KeyPair,
    skip_validation: bool = False,
    created: str | None = None,
    document_loader: DocumentLoader | None = None,
) -> JsonObject:
    """Issue a DigitalCalibrationCertificate with the DCC schema."""
    return issue(
        credential,
        key_pair,
        schema_id=_SCHEMA_IDS["DCC"],
        skip_validation=skip_validation,
        created=created,
        document_loader=document_loader,
    )


def issue_rmc(
    credential: JsonObject,
    key_pair: Ed25519KeyPair,
    skip_validation: bool = False,
    created: str | None = None,
    document_loader: DocumentLoader | None = None,
) -> JsonObject:
    """Issue a ReferenceMaterialCertificate with the RMC schema."""
    return issue(
        credential,
        key_pair,
        schema_id=_SCHEMA_IDS["RMC"],
        skip_validation=skip_validation,
        created=created,
        document_loader=document_loader,
    )


def _validate(credential: JsonObject, schema_id: str) -> None:
    """Validate credential against a JSON Schema by $id."""
    try:
        import jsonschema  # type: ignore[import-untyped]
    except ImportError:
        # jsonschema is optional; skip if not installed
        return

    import json
    from pathlib import Path

    repo_root = Path(__file__).parents[4]
    schema_dir = repo_root / "schemas"

    # Find schema file by matching $id field
    schema_doc: dict[str, Any] | None = None
    for schema_file in schema_dir.rglob("*.json"):
        try:
            doc = json.loads(schema_file.read_text())
            if doc.get("$id") == schema_id:
                schema_doc = doc
                break
        except Exception:
            continue

    if schema_doc is None:
        raise ValueError(f"Schema not found for $id: {schema_id}")

    validator = jsonschema.Draft7Validator(schema_doc)
    errors = list(validator.iter_errors(credential))
    if errors:
        messages = [e.message for e in errors]
        raise ValueError(f"Credential does not conform to schema {schema_id}:\n  " + "\n  ".join(messages))
