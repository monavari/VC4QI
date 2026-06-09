# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field

JsonObject = dict[str, Any]

EvidenceRelation = Literal[
    "authorizedBy",
    "derivedFrom",
    "supportedBy",
]

AuthorizationBasisKind = Literal[
    "accreditation",
    "legalMandate",
    "notification",
    "schemeAuthorization",
    "recognition",
    "operationalScope",
]


class AuthorizationBasis(BaseModel):
    model_config = ConfigDict(extra="forbid")

    kind: AuthorizationBasisKind
    issuerRole: str | None = None
    legalBasis: str | None = None
    scheme: str | None = None
    scopeRef: str | None = None


class CredentialEvidenceReference(BaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    type: Literal["CredentialEvidenceReference"]
    relation: EvidenceRelation
    authorizationBasis: AuthorizationBasis | None = None
    digestMultibase: str | None = None
    digestSRI: str | None = None


class EvidenceNode(BaseModel):
    id: str
    credential: JsonObject
    issuer: str
    types: list[str]


class EvidenceEdge(BaseModel):
    from_: str = Field(alias="from")
    to: str
    relation: EvidenceRelation
    authorizationBasis: AuthorizationBasis | None = None
    digestMultibase: str | None = None
    digestSRI: str | None = None


class EvidenceGraph(BaseModel):
    targetId: str
    nodes: dict[str, EvidenceNode]
    edges: list[EvidenceEdge]
