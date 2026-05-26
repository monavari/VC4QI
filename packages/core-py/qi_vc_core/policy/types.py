# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, ConfigDict

from ..evidence.types import AuthorizationBasis, EvidenceRelation, EvidenceRole

CheckMode = Literal["required", "optional", "ignored", "unsupported"]


class RequiredEvidence(BaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    relation: EvidenceRelation | None = None
    role: EvidenceRole | None = None
    authorizationBasis: AuthorizationBasis | None = None
    targetCredentialTypes: list[str] | None = None
    required: bool = True
    anyOf: list["RequiredEvidence"] | None = None


class PolicyChecks(BaseModel):
    model_config = ConfigDict(extra="allow")

    proof: CheckMode | None = None
    schema: CheckMode | None = None
    status: CheckMode | None = None
    digest: CheckMode | None = None
    scopeInclusion: str | None = None
    derivation: str | None = None
    cycleDetection: CheckMode | None = None
    termsOfUse: CheckMode | None = None


class StatusPolicy(BaseModel):
    target: CheckMode | None = None
    authorizingEvidence: CheckMode | None = None
    supportingEvidence: CheckMode | None = None
    historical: CheckMode | None = None


class PolicyLimits(BaseModel):
    maxDepth: int | None = None
    maxEvidenceNodes: int | None = None


class PolicyProfile(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str
    description: str | None = None
    targetCredentialTypes: list[str]
    requiredEvidence: list[RequiredEvidence]
    checks: PolicyChecks
    statusPolicy: StatusPolicy | None = None
    limits: PolicyLimits | None = None
