# SPDX-License-Identifier: Apache-2.0
# Base58btc codec for multibase encoding (prefix 'z').
# Alphabet: 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz

_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
_BASE = 58
_ALPHA_MAP = {ch: i for i, ch in enumerate(_ALPHABET)}


def encode(data: bytes) -> str:
    if not data:
        return ""

    leading_zeros = 0
    for byte in data:
        if byte != 0:
            break
        leading_zeros += 1

    n = int.from_bytes(data, "big")
    digits: list[int] = []
    while n > 0:
        n, remainder = divmod(n, _BASE)
        digits.append(remainder)

    return "1" * leading_zeros + "".join(_ALPHABET[d] for d in reversed(digits))


def decode(s: str) -> bytes:
    if not s:
        return b""

    leading_zeros = 0
    for ch in s:
        if ch != "1":
            break
        leading_zeros += 1

    n = 0
    for ch in s:
        idx = _ALPHA_MAP.get(ch)
        if idx is None:
            raise ValueError(f"Invalid base58btc character: '{ch}'")
        n = n * _BASE + idx

    body = n.to_bytes((n.bit_length() + 7) // 8, "big") if n > 0 else b""
    return b"\x00" * leading_zeros + body


def to_multibase(data: bytes) -> str:
    """Encode bytes as multibase base58btc (prefix 'z')."""
    return "z" + encode(data)


def from_multibase(multibase: str) -> bytes:
    """Decode a multibase base58btc string (must start with 'z')."""
    if not multibase.startswith("z"):
        raise ValueError(f"Expected multibase base58btc prefix 'z', got '{multibase[0]}'")
    return decode(multibase[1:])
