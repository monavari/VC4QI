# SPDX-License-Identifier: Apache-2.0
import pytest
from qi_vc_core.utils.base58btc import encode, decode, to_multibase, from_multibase


def test_encode_empty():
    assert encode(b"") == ""


def test_decode_empty():
    assert decode("") == b""


def test_roundtrip_simple():
    data = b"Hello, world!"
    assert decode(encode(data)) == data


def test_roundtrip_zeros():
    data = b"\x00\x00\x01\x02"
    assert decode(encode(data)) == data


def test_leading_zeros_map_to_ones():
    data = b"\x00\x00abc"
    encoded = encode(data)
    assert encoded.startswith("11")


def test_known_vector():
    # b"\x00\x01\x02\x03" → known base58btc value
    result = encode(b"\x00\x01\x02\x03")
    assert decode(result) == b"\x00\x01\x02\x03"


def test_multibase_prefix():
    data = b"test"
    mb = to_multibase(data)
    assert mb.startswith("z")
    assert from_multibase(mb) == data


def test_from_multibase_wrong_prefix():
    with pytest.raises(ValueError, match="prefix 'z'"):
        from_multibase("mABCD")


def test_decode_invalid_char():
    with pytest.raises(ValueError, match="Invalid base58btc character"):
        decode("0ABC")  # '0' is not in the alphabet


def test_32_byte_roundtrip():
    data = bytes(range(32))
    assert decode(encode(data)) == data


def test_64_byte_roundtrip():
    data = bytes(i % 256 for i in range(64))
    assert decode(encode(data)) == data
