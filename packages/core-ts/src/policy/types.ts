// SPDX-License-Identifier: Apache-2.0
import type {
  AuthorizationBasis,
  EvidenceRelation,
  EvidenceRole,
} from '../evidence/types.js';

export type CheckMode = 'required' | 'optional' | 'ignored' | 'unsupported';

export interface RequiredEvidence {
  id: string;
  relation?: EvidenceRelation;
  role?: EvidenceRole;
  authorizationBasis?: Partial<AuthorizationBasis>;
  targetCredentialTypes?: string[];
  required?: boolean;
  anyOf?: RequiredEvidence[];
}

export interface PolicyChecks {
  proof?: CheckMode;
  schema?: CheckMode;
  status?: CheckMode;
  digest?: CheckMode;
  scopeInclusion?: 'dccScopeInclusion' | 'drmdScopeInclusion' | 'required' | 'optional' | 'ignored' | string;
  derivation?: 'scopeSubset' | 'required' | 'optional' | 'ignored' | string;
  cycleDetection?: CheckMode;
  termsOfUse?: CheckMode;
}

export interface StatusPolicy {
  target?: CheckMode;
  authorizingEvidence?: CheckMode;
  supportingEvidence?: CheckMode;
  historical?: CheckMode;
}

export interface PolicyLimits {
  maxDepth?: number;
  maxEvidenceNodes?: number;
}

export interface PolicyProfile {
  id: string;
  description?: string;
  targetCredentialTypes: string[];
  requiredEvidence: RequiredEvidence[];
  checks: PolicyChecks;
  statusPolicy?: StatusPolicy;
  limits?: PolicyLimits;
}
