// SPDX-License-Identifier: Apache-2.0
import type {
  AuthorizationBasis,
  EvidenceRelation,
} from '../evidence/types.js';

export type CheckMode = 'required' | 'optional' | 'ignored' | 'unsupported';

export type AssessmentMethod = 'agent' | 'human' | 'hybrid';

export interface AssessmentPolicy {
  /** Required means absence/indeterminate is a verification failure. */
  mode: Exclude<CheckMode, 'unsupported'>;
  /** Only graph nodes carrying one of these types are assessed. */
  targetCredentialTypes: string[];
  /** Methods admitted by the verifier's operative policy. */
  allowedMethods: AssessmentMethod[];
}

export interface RequiredEvidence {
  id: string;
  relation?: EvidenceRelation;
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
  assessment?: AssessmentPolicy;
  statusPolicy?: StatusPolicy;
  limits?: PolicyLimits;
}
