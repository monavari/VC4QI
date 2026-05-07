# SPDX-License-Identifier: Apache-2.0
# Bitstring Status List v1.0 implementation.
# Spec: https://www.w3.org/TR/vc-bitstring-status-list/
from __future__ import annotations

import base64
import zlib
from datetime import datetime, timezone
from typing import Any

from ..types import BitstringStatusListEntry

JsonObject = dict[str, Any]

MIN_BITSTRING_LENGTH = 131_072  # bits (16 KB)


def create_bitstring(bit_length: int = MIN_BITSTRING_LENGTH) -> bytearray:
    """Create a new zeroed bitstring of the given bit length."""
    if bit_length % 8 != 0:
        raise ValueError("bit_length must be a multiple of 8")
    return bytearray(bit_length // 8)


def set_bit(bits: bytearray, index: int, value: bool) -> None:
    """Set a single bit in the bitstring (MSB first per spec §2.1)."""
    byte_index = index // 8
    bit_offset = 7 - (index % 8)
    if byte_index >= len(bits):
        raise IndexError(f"Bit index {index} out of range")
    if value:
        bits[byte_index] |= 1 << bit_offset
    else:
        bits[byte_index] &= ~(1 << bit_offset)


def get_bit(bits: bytes | bytearray, index: int) -> bool:
    """Read a single bit from the bitstring. Returns True if bit is 1."""
    byte_index = index // 8
    bit_offset = 7 - (index % 8)
    if byte_index >= len(bits):
        raise IndexError(f"Bit index {index} out of range")
    return ((bits[byte_index] >> bit_offset) & 1) == 1


def encode_bitstring(bits: bytes | bytearray) -> str:
    """Encode a bitstring: GZIP compress then base64url encode (spec §2.3)."""
    compressed = zlib.compress(bytes(bits), level=9)
    return base64.urlsafe_b64encode(compressed).rstrip(b"=").decode("ascii")


def decode_bitstring(encoded: str) -> bytes:
    """Decode a BitstringStatusListCredential bitstring."""
    # Add padding back
    padded = encoded + "=" * (-len(encoded) % 4)
    compressed = base64.urlsafe_b64decode(padded)
    return zlib.decompress(compressed)


def check_status_bit(
    credential_status: BitstringStatusListEntry,
    status_list_credential: JsonObject,
) -> bool:
    """Check whether a credential is revoked/suspended.

    Returns True if the status bit is SET (credential is revoked/suspended).
    """
    subject = status_list_credential.get("credentialSubject")
    if not subject:
        raise ValueError("BitstringStatusListCredential missing credentialSubject")

    encoded_list = subject.get("encodedList")
    if not encoded_list:
        raise ValueError("BitstringStatusListCredential missing encodedList")

    bits = decode_bitstring(encoded_list)
    index = int(credential_status.status_list_index)
    return get_bit(bits, index)


def build_status_list_credential(
    issuer: str,
    list_id: str,
    bits: bytearray | None = None,
) -> JsonObject:
    """Build a minimal BitstringStatusListCredential for tests."""
    if bits is None:
        bits = create_bitstring()

    return {
        "@context": [
            "https://www.w3.org/ns/credentials/v2",
            "https://www.w3.org/ns/credentials/v2#BitstringStatusList",
        ],
        "type": ["VerifiableCredential", "BitstringStatusListCredential"],
        "id": list_id,
        "issuer": issuer,
        "validFrom": datetime.now(timezone.utc).isoformat(),
        "credentialSubject": {
            "id": f"{list_id}#list",
            "type": "BitstringStatusList",
            "statusPurpose": "revocation",
            "encodedList": encode_bitstring(bits),
        },
    }
