# SPDX-License-Identifier: Apache-2.0
"""Credential status for the experimental RM v1 binding (mirrors status-list.ts).

W3C Bitstring Status List v1.0: encodedList is multibase base64url (prefix "u", no
padding) of the GZIP-compressed bitstring, bit 0 = most significant bit of byte 0.
Decompression is bounded. A list counts only when signed by the credential's issuer.
"""

from __future__ import annotations

import base64
import gzip
import re
import zlib
from dataclasses import dataclass
from datetime import datetime
from typing import Any, Literal

from .types import SemanticState

MIN_STATUS_BITS = 131_072
MAX_STATUS_BYTES = 2 * 1024 * 1024
_ENCODED = re.compile(r"^u[A-Za-z0-9_-]+$")


class StatusListError(ValueError):
    def __init__(
        self, code: Literal["MALFORMED", "TOO_LARGE", "TOO_SHORT"], message: str
    ) -> None:
        super().__init__(message)
        self.code = code


def encode_status_list(bits: bytes) -> str:
    """Encode a bitstring as an encodedList value (GZIP, mtime 0, multibase "u")."""
    if len(bits) * 8 < MIN_STATUS_BITS:
        raise StatusListError(
            "TOO_SHORT", f"A status list needs at least {MIN_STATUS_BITS} bits."
        )
    compressed = gzip.compress(bits, compresslevel=9, mtime=0)
    return "u" + base64.urlsafe_b64encode(compressed).decode("ascii").rstrip("=")


def decode_status_list(encoded: Any, max_bytes: int = MAX_STATUS_BYTES) -> bytes:
    """Decode an encodedList value with bounded decompression."""
    if not isinstance(encoded, str) or not _ENCODED.fullmatch(encoded):
        raise StatusListError(
            "MALFORMED", 'encodedList must be multibase base64url (prefix "u").'
        )
    body = encoded[1:]
    try:
        compressed = base64.urlsafe_b64decode(body + "=" * (-len(body) % 4))
        inflater = zlib.decompressobj(wbits=31)  # GZIP container only
        bits = inflater.decompress(compressed, max_bytes)
        if inflater.unconsumed_tail:
            raise StatusListError(
                "TOO_LARGE", f"Decompressed status list exceeds {max_bytes} bytes."
            )
        if not inflater.eof:
            raise StatusListError("MALFORMED", "encodedList is not valid GZIP data.")
    except (ValueError, zlib.error) as error:
        if isinstance(error, StatusListError):
            raise
        raise StatusListError(
            "MALFORMED", "encodedList is not valid GZIP data."
        ) from error
    if len(bits) * 8 < MIN_STATUS_BITS:
        raise StatusListError(
            "TOO_SHORT", f"Status list has fewer than {MIN_STATUS_BITS} bits."
        )
    return bits


def status_bit(bits: bytes, index: int) -> bool:
    if index // 8 >= len(bits):
        raise IndexError(f"Status index {index} is outside the list.")
    return bool((bits[index // 8] >> (7 - index % 8)) & 1)


@dataclass(frozen=True)
class StatusPolicy:
    required: bool
    purposes: tuple[str, ...]
    max_age_seconds: int


@dataclass(frozen=True)
class StatusOutcome:
    state: SemanticState
    reason: str
    sources: tuple[str, ...]
    list_uri: str | None = None


def _time(value: Any) -> datetime | None:
    if not isinstance(value, str):
        return None
    try:
        return datetime.fromisoformat(
            value[:-1] + "+00:00" if value.endswith("Z") else value
        )
    except ValueError:
        return None


def select_status_entry(
    credential: dict[str, Any], purposes: tuple[str, ...] | list[str]
) -> tuple[dict[str, Any] | None, str | None]:
    """The single status entry for one of ``purposes`` (mirrors selectStatusEntry).

    Entries for other purposes are left to whoever evaluates them; several entries
    for the requested purposes are ambiguous. Returns (entry, reason); both None
    when the credential names no status.
    """
    value = credential.get("credentialStatus")
    if value is None:
        return None, None
    entries = value if isinstance(value, list) else [value]
    if not entries or not all(isinstance(entry, dict) for entry in entries):
        return None, "Unsupported credentialStatus form."
    matching = [e for e in entries if str(e.get("statusPurpose")) in purposes]
    if len(matching) > 1:
        return None, f"Several status entries for {'/'.join(purposes)}."
    if not matching:
        found = ", ".join(str(e.get("statusPurpose")) for e in entries)
        return None, (
            f"No status entry has an accepted purpose ({', '.join(purposes)}); "
            f"found {found}."
        )
    return matching[0], None


def evaluate_status(
    credential: dict[str, Any],
    status_list: dict[str, Any] | None,
    list_protected: SemanticState,
    policy: StatusPolicy,
    evaluation_time: str,
) -> StatusOutcome:
    """Unavailable, unauthorized or stale status is not_established.

    An applicable set bit is contradicted.
    """
    entry, problem = select_status_entry(credential, policy.purposes)
    if entry is None and problem is None:
        if policy.required:
            return StatusOutcome(
                "not_established",
                "Status is required by the profile but the credential names none.",
                (),
            )
        return StatusOutcome(
            "established",
            "The profile does not require status for this credential.",
            (),
        )
    if entry is None:
        return StatusOutcome("not_established", str(problem), ("/credentialStatus",))
    if (
        entry.get("type") != "BitstringStatusListEntry"
        or not isinstance(entry.get("statusListCredential"), str)
        or not isinstance(entry.get("statusListIndex"), str)
    ):
        return StatusOutcome(
            "not_established",
            "Unsupported credentialStatus form.",
            ("/credentialStatus",),
        )
    uri: str = entry["statusListCredential"]
    sources = ("/credentialStatus", uri)

    def no(reason: str) -> StatusOutcome:
        return StatusOutcome("not_established", reason, sources, uri)

    if status_list is None:
        return no(f"Status list {uri} is unavailable.")
    if list_protected != "established":
        return no(f"Status list {uri} is not protected and valid.")
    if status_list.get("id") != uri:
        return no(f"Resolved status list identifies itself as {status_list.get('id')}.")
    if status_list.get("issuer") != credential.get("issuer"):
        return no(
            f"Status list is signed by {status_list.get('issuer')}, who may not state "
            f"status for credentials of {credential.get('issuer')}."
        )
    subject = status_list.get("credentialSubject")
    if (
        not isinstance(subject, dict)
        or subject.get("type") != "BitstringStatusList"
        or subject.get("statusPurpose") != entry.get("statusPurpose")
    ):
        return no("Status list purpose does not match the entry.")
    at, issued = _time(evaluation_time), _time(status_list.get("validFrom"))
    if (
        at is None
        or issued is None
        or (at - issued).total_seconds() > policy.max_age_seconds
    ):
        return no(
            f"Status list is older than the profile's {policy.max_age_seconds} s "
            "freshness limit."
        )
    index = entry["statusListIndex"]
    if not re.fullmatch(r"0|[1-9][0-9]*", index):
        return no("statusListIndex is not a non-negative integer.")
    try:
        is_set = status_bit(decode_status_list(subject.get("encodedList")), int(index))
    except (StatusListError, IndexError) as error:
        return no(f"Status list cannot be read: {error}")
    yes, not_ = (
        ("Suspended", "Not suspended")
        if entry.get("statusPurpose") == "suspension"
        else ("Revoked", "Not revoked")
    )
    if is_set:
        return StatusOutcome(
            "contradicted", f"{yes}: bit {index} of {uri} is set.", sources, uri
        )
    return StatusOutcome(
        "established", f"{not_}: bit {index} of {uri} is clear.", sources, uri
    )
