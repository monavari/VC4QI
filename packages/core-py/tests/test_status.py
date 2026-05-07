# SPDX-License-Identifier: Apache-2.0
import pytest
from qi_vc_core.status import (
    create_bitstring,
    set_bit,
    get_bit,
    encode_bitstring,
    decode_bitstring,
    check_status_bit,
    build_status_list_credential,
    MIN_BITSTRING_LENGTH,
)
from qi_vc_core.types import BitstringStatusListEntry


def test_create_bitstring_default_length():
    bits = create_bitstring()
    assert len(bits) * 8 == MIN_BITSTRING_LENGTH
    assert all(b == 0 for b in bits)


def test_create_bitstring_custom_length():
    bits = create_bitstring(256)
    assert len(bits) == 32


def test_create_bitstring_not_multiple_of_8():
    with pytest.raises(ValueError):
        create_bitstring(7)


def test_set_and_get_bit():
    bits = create_bitstring(8)
    assert not get_bit(bits, 0)
    set_bit(bits, 0, True)
    assert get_bit(bits, 0)
    set_bit(bits, 0, False)
    assert not get_bit(bits, 0)


def test_bit_msb_first():
    bits = create_bitstring(8)
    set_bit(bits, 0, True)
    # bit 0 is MSB of byte 0 → byte value = 0b10000000 = 128
    assert bits[0] == 0b10000000


def test_bit_index_out_of_range():
    bits = create_bitstring(8)
    with pytest.raises(IndexError):
        get_bit(bits, 8)
    with pytest.raises(IndexError):
        set_bit(bits, 8, True)


def test_encode_decode_roundtrip():
    bits = create_bitstring(64)
    set_bit(bits, 3, True)
    set_bit(bits, 63, True)
    encoded = encode_bitstring(bits)
    decoded = decode_bitstring(encoded)
    assert decoded == bytes(bits)


def test_check_status_bit_clear():
    bits = create_bitstring(256)
    issuer = "did:web:issuer.example.com"
    list_id = "https://issuer.example.com/status/1"
    status_list_cred = build_status_list_credential(issuer, list_id, bits)

    entry = BitstringStatusListEntry(
        id=f"{list_id}#0",
        status_list_index="0",
        status_list_credential=list_id,
    )
    assert not check_status_bit(entry, status_list_cred)


def test_check_status_bit_set():
    bits = create_bitstring(256)
    set_bit(bits, 5, True)
    issuer = "did:web:issuer.example.com"
    list_id = "https://issuer.example.com/status/1"
    status_list_cred = build_status_list_credential(issuer, list_id, bits)

    entry = BitstringStatusListEntry(
        id=f"{list_id}#5",
        status_list_index="5",
        status_list_credential=list_id,
    )
    assert check_status_bit(entry, status_list_cred)


def test_build_status_list_credential_structure():
    cred = build_status_list_credential("did:web:x.com", "https://x.com/sl/1")
    assert "BitstringStatusListCredential" in cred["type"]
    assert cred["credentialSubject"]["type"] == "BitstringStatusList"
    assert "encodedList" in cred["credentialSubject"]
