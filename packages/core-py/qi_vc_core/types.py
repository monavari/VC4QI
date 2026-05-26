# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Literal, Any
from dataclasses import dataclass

JsonObject = dict[str, Any]


@dataclass
class Ed25519KeyPair:
    id: str
    controller: str
    private_key: bytes  # 32-byte seed
    public_key: bytes   # 32-byte public key


@dataclass
class DataIntegrityProof:
    type: Literal["DataIntegrityProof"] = "DataIntegrityProof"
    cryptosuite: Literal["eddsa-rdfc-2022", "ecdsa-rdfc-2019"] = "eddsa-rdfc-2022"
    proof_purpose: Literal["assertionMethod"] = "assertionMethod"
    verification_method: str = ""
    created: str = ""
    proof_value: str = ""

    def to_json_object(self) -> JsonObject:
        return {
            "type": self.type,
            "cryptosuite": self.cryptosuite,
            "proofPurpose": self.proof_purpose,
            "verificationMethod": self.verification_method,
            "created": self.created,
            "proofValue": self.proof_value,
        }

    @classmethod
    def from_json_object(cls, obj: JsonObject) -> "DataIntegrityProof":
        return cls(
            type=obj["type"],
            cryptosuite=obj["cryptosuite"],
            proof_purpose=obj["proofPurpose"],
            verification_method=obj["verificationMethod"],
            created=obj["created"],
            proof_value=obj["proofValue"],
        )


@dataclass
class BitstringStatusListEntry:
    id: str
    type: Literal["BitstringStatusListEntry"] = "BitstringStatusListEntry"
    status_purpose: Literal["revocation", "suspension", "message"] = "revocation"
    status_list_index: str = "0"
    status_list_credential: str = ""


@dataclass
class TraceEntry:
    id: str
    level: Literal["credential", "edge", "graph", "policy", "scope", "presentation"]
    status: Literal["PASS", "FAIL", "SKIP", "WARN"]
    code: str
    detail: str
    target: str | None = None
    from_: str | None = None
    to: str | None = None
    relation: str | None = None


@dataclass
class VerificationSummary:
    nodes_resolved: int
    edges_evaluated: int
    failures: int
    warnings: int


@dataclass
class VerificationTrace:
    verified: bool
    profile: str
    target: str
    summary: VerificationSummary
    results: list[TraceEntry]
