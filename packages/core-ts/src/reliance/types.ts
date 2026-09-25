// SPDX-License-Identifier: Apache-2.0

/** Evidence-backed truth value for a reliance predicate. */
export type SemanticState = 'established' | 'contradicted' | 'not_established';

/** Whether the check producing a predicate result actually ran. */
export type ExecutionState = 'executed' | 'not_run';

/** Overall outcome of the verifier-owned reliance request. */
export type RelianceDecision = 'accept' | 'reject' | 'not_established';

/**
 * Canonical gate numbers (handover §5.3), used in code, tests, docs and UI:
 * 0 plan and structure, 1 resource identity, 2 protection, 3 temporal
 * applicability, 4 meaning and mapping, 5 authority and scope, 6 support and decision.
 */
export type Gate = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export const GATE_NAMES = Object.freeze([
  'plan-and-structure', 'resource-identity', 'protection', 'temporal-applicability',
  'meaning-and-mapping', 'authority-and-scope', 'support-and-decision',
] as const);

/** One evaluated predicate for one use of an artifact, with its input provenance. */
export interface TraceEntry {
  readonly gate: Gate;
  /** Node-use key: artifact identity, role, purpose, profile and time context. */
  readonly nodeUse: string;
  readonly predicate: string;
  readonly state: SemanticState;
  readonly execution: ExecutionState;
  readonly reason: string;
  /** Protected source pointers or resource identities the predicate read. */
  readonly sources: readonly string[];
}

/** A resource identity observed during evaluation. */
export interface ResourceObservation {
  readonly uri: string;
  readonly digestSRI: string;
  readonly kind: 'static' | 'artifact' | 'status';
  readonly source: 'catalog' | 'supplied';
  readonly observedAt: string;
}

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
  readonly requestId: string;
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
  readonly requestId: string;
  readonly targetId: string;
  readonly binding: VersionedIdentifier;
  readonly profile: VersionedIdentifier;
  readonly artifactVerification: readonly ArtifactVerificationResult[];
  readonly authorization: readonly ClaimAuthorizationResult[];
  readonly support: readonly SupportResult[];
  readonly conformity: ConformityResult;
  readonly decision: RelianceDecision;
  readonly trace: readonly TraceEntry[];
  readonly resources: readonly ResourceObservation[];
  readonly limitations: readonly string[];
}
