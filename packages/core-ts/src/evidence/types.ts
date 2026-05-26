// SPDX-License-Identifier: Apache-2.0
import type { JsonObject } from '../types.js';

export type EvidenceRelation =
  | 'qi:authorizedBy'
  | 'qi:derivedFrom'
  | 'qi:recognizedBy'
  | 'qi:notifiedBy'
  | 'qi:supportedBy'
  | 'qi:statusProvidedBy';

export type EvidenceRole =
  | 'authorizing'
  | 'supporting'
  | 'recognition'
  | 'status';

export type AuthorizationBasisKind =
  | 'qi:accreditation'
  | 'qi:capability'
  | 'qi:legalMandate'
  | 'qi:notification'
  | 'qi:schemeAuthorization'
  | 'qi:operationalScope'
  | 'qi:recognition'
  | 'qi:domainEvidence';

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
  role: EvidenceRole;
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
  role: EvidenceRole;
  authorizationBasis?: AuthorizationBasis | undefined;
  digestMultibase?: string | undefined;
  digestSRI?: string | undefined;
}

export interface EvidenceGraph {
  targetId: string;
  nodes: Record<string, EvidenceNode>;
  edges: EvidenceEdge[];
}
