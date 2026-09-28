# SPDX-License-Identifier: Apache-2.0
from .types import (
    Ed25519KeyPair,
    DataIntegrityProof,
    BitstringStatusListEntry,
    TraceEntry,
    VerificationSummary,
    VerificationTrace,
)
from .issuer import issue, issue_dcc, issue_rmc
from .reliance.evaluate import SUPPORTED_BINDINGS, evaluate_reliance, install_binding

# Explicit legacy compatibility (the v0.3 graph verifier), labelled legacy, not the
# default. Imported before assessment: the legacy modules resolve their import cycle
# from the verifier side.
from . import legacy
from .assessment import AssessmentRequest, AssessmentResult

__all__ = [
    "Ed25519KeyPair",
    "DataIntegrityProof",
    "BitstringStatusListEntry",
    "TraceEntry",
    "VerificationSummary",
    "VerificationTrace",
    "issue",
    "issue_dcc",
    "issue_rmc",
    "evaluate_reliance",
    "install_binding",
    "SUPPORTED_BINDINGS",
    "legacy",
    "AssessmentRequest",
    "AssessmentResult",
]
