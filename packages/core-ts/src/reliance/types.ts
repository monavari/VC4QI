// SPDX-License-Identifier: Apache-2.0

/** Evidence-backed truth value for a reliance predicate. */
export type SemanticState = 'established' | 'contradicted' | 'not_established';

/** Whether the check producing a predicate result actually ran. */
export type ExecutionState = 'executed' | 'not_run';

/** Overall outcome of the verifier-owned reliance request. */
export type RelianceDecision = 'accept' | 'reject' | 'not_established';

export interface VersionedIdentifier {
  readonly id: string;
  readonly version: string;
}

export interface SelectedClaim {
  /** Stable identifier within this request and its result. */
  readonly id: string;
  /** Pointer into the target's protected native representation. */
  readonly sourcePointer: string;
}

export interface ResolverLimits {
  readonly maxResources: number;
  readonly maxDepth: number;
  readonly maxBytes: number;
}

export interface ConformityRequest {
  readonly requirementId: string;
  readonly decisionRuleId: string;
}

export interface RelianceRequest {
  readonly targetId: string;
  readonly selectedClaims: readonly SelectedClaim[];
  readonly purpose: string;
  readonly binding: VersionedIdentifier;
  readonly profile: VersionedIdentifier;
  readonly trustConfigId: string;
  readonly evaluationTime: string;
  readonly activityTime: string;
  readonly suppliedEvidence: readonly string[];
  readonly resolverLimits: ResolverLimits;
  readonly conformity?: ConformityRequest;
}

export interface PredicateResult {
  readonly state: SemanticState;
  readonly execution: ExecutionState;
  readonly reasons: readonly string[];
  /** Protected native inputs used by this predicate, when it executed. */
  readonly sourcePointers: readonly string[];
}

export interface ArtifactVerificationResult extends PredicateResult {
  readonly artifactId: string;
}

export interface ClaimAuthorizationResult extends PredicateResult {
  readonly claimId: string;
  readonly routeWitnessIds: readonly string[];
}

export interface SupportResult extends PredicateResult {
  readonly obligationId: string;
  readonly witnessIds: readonly string[];
}

export type ConformityResult =
  | {
      readonly requested: false;
      readonly execution: 'not_run';
    }
  | ({
      readonly requested: true;
      readonly requirementId: string;
      readonly decisionRuleId: string;
    } & PredicateResult);

export interface RelianceResult {
  readonly targetId: string;
  readonly binding: VersionedIdentifier;
  readonly profile: VersionedIdentifier;
  readonly artifactVerification: readonly ArtifactVerificationResult[];
  readonly authorization: readonly ClaimAuthorizationResult[];
  readonly support: readonly SupportResult[];
  readonly conformity: ConformityResult;
  readonly decision: RelianceDecision;
  readonly limitations: readonly string[];
}
