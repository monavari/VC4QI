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
    cryptosuite: Literal["eddsa-rdfc-2022"] = "eddsa-rdfc-2022"
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
