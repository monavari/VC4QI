# SPDX-License-Identifier: Apache-2.0
# ecdsa-sd-2023 selective-disclosure — Python scaffold (NOT IMPLEMENTED).
#
# Spec: https://www.w3.org/TR/vc-di-ecdsa/#ecdsa-sd-2023
#
# Decision D-SD-4 (see RECONCILIATION_REPORT.md, Part B): Python does NOT perform
# selective-disclosure *cryptographic* verification. The TypeScript package is
# canonical for SD (packages/core-ts/src/proofs/sd.ts); Python's role is to consume
# the already-derived disclosed subset and run the research kernel (evidence graph +
# edge classification + policy) over it. That parity path lives in
# packages/core-py/tests/test_sd_parity.py and does not need this module.
#
# Why this is only a scaffold:
#   - The Python runtime has no ECDSA library (deps are pyld, PyNaCl, pydantic,
#     httpx; PyNaCl is Ed25519-only). Real ecdsa-sd-2023 verification would need a
#     new dependency (e.g. `cryptography`) PLUS a from-scratch implementation of the
#     SD primitives: CBOR base/derived proof parsing, the HMAC label-replacement
#     map, mandatory/selective statement grouping, and per-statement P-256 ECDSA.
#   - Adding a VC framework is forbidden by the dependency policy (AGENTS.md), and
#     adding the crypto + primitives is a deliberate decision, not a default.
#
# TODO(human): decide whether to implement real Python ecdsa-sd-2023 verification.
# If yes, the clean approach is a small, self-contained module on `cryptography`
# (P-256) + `cbor2` ONLY — no VC/DID framework — and ideally extracted as a
# standalone reusable library, since the Python VC ecosystem currently lacks a
# pure SD verifier. Until that decision is taken, this raises NotImplementedError.

from __future__ import annotations

from qi_vc_core.types import JsonObject

__all__ = ["verify_sd", "SD_CRYPTOSUITE", "SD_SUPPORTED"]

SD_CRYPTOSUITE = "ecdsa-sd-2023"

# Flip to True only when verify_sd is genuinely implemented (and the necessary
# dependencies are added with an explicit decision recorded in the report).
SD_SUPPORTED = False


def verify_sd(
    derived_credential: JsonObject,
    *,
    document_loader: object | None = None,
) -> bool:
    """Verify a derived ecdsa-sd-2023 disclosed-subset credential.

    NOT IMPLEMENTED on the Python side (D-SD-4). See module docstring. Use the
    TypeScript verifier for SD cryptographic verification; for Python parity, run
    the kernel over the disclosed subset (see tests/test_sd_parity.py).

    Raises:
        NotImplementedError: always, until a Python SD verifier is decided on.
    """
    raise NotImplementedError(
        "Python ecdsa-sd-2023 verification is intentionally not implemented "
        "(decision D-SD-4). The TypeScript package is canonical for selective "
        "disclosure; Python verifies the derived subset at the kernel level only. "
        "See qi_vc_core/proofs/sd.py for the rationale and the TODO(human)."
    )
