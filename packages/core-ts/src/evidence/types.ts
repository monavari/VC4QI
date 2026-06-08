// SPDX-License-Identifier: Apache-2.0
import type { JsonObject } from '../types.js';

export type EvidenceRelation =
  | 'authorizedBy'
  | 'derivedFrom'
  | 'supportedBy';

export type AuthorizationBasisKind =
  | 'accreditation'
  | 'legalMandate'
  | 'notification'
  | 'schemeAuthorization'
  | 'recognition'
  | 'operationalScope';

export interface AuthorizationBasis {
  kind: AuthorizationBasisKind;
  issuerRole?: string;
  legalBasis?: string;
  scheme?: string;
  scopeRef?: string;
}

export interface CredentialEvidenceReference {
  id: string;
  type: 'CredentialEvidenceReference';
  relation: EvidenceRelation;
  authorizationBasis?: AuthorizationBasis;
  digestMultibase?: string;
  digestSRI?: string;
}

export interface EvidenceNode {
  id: string;
  credential: JsonObject;
  issuer: string;
  types: string[];
}

export interface EvidenceEdge {
  from: string;
  to: string;
  relation: EvidenceRelation;
  authorizationBasis?: AuthorizationBasis | undefined;
  digestMultibase?: string | undefined;
  digestSRI?: string | undefined;
}

export interface EvidenceGraph {
  targetId: string;
  nodes: Record<string, EvidenceNode>;
  edges: EvidenceEdge[];
}
