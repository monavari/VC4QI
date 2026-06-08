# SPDX-License-Identifier: Apache-2.0
# Contract tests for the Python ecdsa-sd-2023 scaffold (proofs/sd.py).
#
# Python SD *cryptographic* verification is intentionally not implemented
# (decision D-SD-4); these tests pin that contract so it is explicit and so a
# future implementer has a landing spot. The real Python parity path (kernel-level
# verification of the TS-derived subset) lives in test_sd_parity.py.
import pytest

from qi_vc_core.proofs.sd import SD_CRYPTOSUITE, SD_SUPPORTED, verify_sd


def test_sd_cryptosuite_constant():
    assert SD_CRYPTOSUITE == "ecdsa-sd-2023"


def test_sd_is_not_supported_in_python():
    # When this flips to True, replace the xfail test below with a real one.
    assert SD_SUPPORTED is False


def test_verify_sd_raises_not_implemented():
    with pytest.raises(NotImplementedError):
        verify_sd({"proof": {"cryptosuite": "ecdsa-sd-2023"}})


@pytest.mark.skipif(
    not SD_SUPPORTED,
    reason="Python ecdsa-sd-2023 verification not implemented (D-SD-4). "
    "Implement verify_sd and set SD_SUPPORTED=True to enable this test.",
)
def test_verify_sd_accepts_a_valid_derived_subset():
    # TODO(human): once verify_sd is implemented, load
    # tests/fixtures/sd_derived_credential.json, build a document loader that
    # resolves the issuer P-256 multikey + controller, and assert verify_sd(...) is
    # True (and that tampering a disclosed value yields False).
    raise AssertionError("unreachable until SD_SUPPORTED is True")
