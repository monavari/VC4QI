// SPDX-License-Identifier: Apache-2.0

import type {
  ArtifactVerificationResult,
  ClaimAuthorizationResult,
  ConformityRequest,
  ConformityResult,
  PredicateResult,
  RelianceDecision,
  RelianceRequest,
  RelianceResult,
  ResolverLimits,
  SelectedClaim,
  SemanticState,
  SupportResult,
  VersionedIdentifier,
} from './types.js';

export * from './catalog.js';
export * from './manifest.js';

export type {
  ArtifactVerificationResult,
  ClaimAuthorizationResult,
  ConformityRequest,
  ConformityResult,
  ExecutionState,
  PredicateResult,
  RelianceDecision,
  RelianceRequest,
  RelianceResult,
  ResolverLimits,
  SelectedClaim,
  SemanticState,
  SupportResult,
  VersionedIdentifier,
} from './types.js';

export interface RelianceRequestInput {
  targetId: string;
  selectedClaims: readonly SelectedClaim[];
  purpose: string;
  binding: VersionedIdentifier;
  profile: VersionedIdentifier;
  trustConfigId: string;
  evaluationTime: string;
  activityTime: string;
  suppliedEvidence: readonly string[];
  resolverLimits: ResolverLimits;
  conformity?: ConformityRequest;
}

export interface RelianceResultInput {
  targetId: string;
  binding: VersionedIdentifier;
  profile: VersionedIdentifier;
  artifactVerification: readonly ArtifactVerificationResult[];
  authorization: readonly ClaimAuthorizationResult[];
  support: readonly SupportResult[];
  conformity: ConformityResult;
  decision: RelianceDecision;
  limitations?: readonly string[];
}

function requireNonEmpty(value: string, field: string): void {
  if (value.trim().length === 0) {
    throw new TypeError(`${field} must be a non-empty string.`);
  }
}

function requireUnique(values: readonly string[], field: string): void {
  if (new Set(values).size !== values.length) {
    throw new TypeError(`${field} must not contain duplicates.`);
  }
}

/** Validate an ISO 8601 date-time with a required UTC or numeric offset. */
function requireIsoTime(value: string, field: string): void {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(value);
  if (!match) {
    throw new TypeError(`${field} must be an ISO 8601 date-time with an explicit offset.`);
  }

  const [, yearText, monthText, dayText, hourText, minuteText, secondText] = match;
  const zone = match[7]!;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const second = Number(secondText);
  const calendar = new Date(0);
  calendar.setUTCFullYear(year, month - 1, day);
  calendar.setUTCHours(0, 0, 0, 0);

  const invalidCalendar = calendar.getUTCFullYear() !== year
    || calendar.getUTCMonth() !== month - 1
    || calendar.getUTCDate() !== day;
  const zoneParts = zone === 'Z' ? null : /^([+-])(\d{2}):(\d{2})$/.exec(zone);
  const invalidZone = zoneParts !== null
    && (Number(zoneParts[2]) > 23 || Number(zoneParts[3]) > 59);

  if (year < 1 || invalidCalendar || hour > 23 || minute > 59 || second > 59
      || invalidZone || !Number.isFinite(Date.parse(value))) {
    throw new TypeError(`${field} must be a valid ISO 8601 date-time.`);
  }
}

function requirePositiveInteger(value: number, field: string): void {
  if (!Number.isSafeInteger(value) || value <= 0) {
    throw new TypeError(`${field} must be a positive safe integer.`);
  }
}

function validateVersionedIdentifier(value: VersionedIdentifier, field: string): void {
  requireNonEmpty(value.id, `${field}.id`);
  requireNonEmpty(value.version, `${field}.version`);
}

function freezeVersionedIdentifier(value: VersionedIdentifier): VersionedIdentifier {
  return Object.freeze({ id: value.id, version: value.version });
}

function freezePredicate<T extends PredicateResult>(value: T): T {
  if (!['established', 'contradicted', 'not_established'].includes(value.state)) {
    throw new TypeError(`Unsupported semantic state: ${String(value.state)}.`);
  }
  if (!['executed', 'not_run'].includes(value.execution)) {
    throw new TypeError(`Unsupported execution state: ${String(value.execution)}.`);
  }
  if (value.execution === 'not_run' && value.state !== 'not_established') {
    throw new TypeError('A predicate that was not run must be not_established.');
  }
  return Object.freeze({
    ...value,
    reasons: Object.freeze([...value.reasons]),
    sourcePointers: Object.freeze([...value.sourcePointers]),
  });
}

/**
 * Validate and copy a verifier-owned request. The returned value and every
 * nested collection are frozen, so caller mutation cannot change evaluation.
 */
export function createRelianceRequest(input: RelianceRequestInput): RelianceRequest {
  requireNonEmpty(input.targetId, 'targetId');
  requireNonEmpty(input.purpose, 'purpose');
  requireNonEmpty(input.trustConfigId, 'trustConfigId');
  validateVersionedIdentifier(input.binding, 'binding');
  validateVersionedIdentifier(input.profile, 'profile');
  requireIsoTime(input.evaluationTime, 'evaluationTime');
  requireIsoTime(input.activityTime, 'activityTime');

  if (input.selectedClaims.length === 0) {
    throw new TypeError('selectedClaims must contain at least one claim.');
  }
  for (const [index, claim] of input.selectedClaims.entries()) {
    requireNonEmpty(claim.id, `selectedClaims[${index}].id`);
    requireNonEmpty(claim.sourcePointer, `selectedClaims[${index}].sourcePointer`);
  }
  requireUnique(input.selectedClaims.map(claim => claim.id), 'selected claim IDs');
  requireUnique(input.selectedClaims.map(claim => claim.sourcePointer), 'selected claim source pointers');

  for (const [index, evidenceId] of input.suppliedEvidence.entries()) {
    requireNonEmpty(evidenceId, `suppliedEvidence[${index}]`);
  }
  requireUnique(input.suppliedEvidence, 'suppliedEvidence');

  requirePositiveInteger(input.resolverLimits.maxResources, 'resolverLimits.maxResources');
  requirePositiveInteger(input.resolverLimits.maxDepth, 'resolverLimits.maxDepth');
  requirePositiveInteger(input.resolverLimits.maxBytes, 'resolverLimits.maxBytes');

  if (input.conformity) {
    requireNonEmpty(input.conformity.requirementId, 'conformity.requirementId');
    requireNonEmpty(input.conformity.decisionRuleId, 'conformity.decisionRuleId');
  }

  const selectedClaims = Object.freeze(input.selectedClaims.map(claim => Object.freeze({
    id: claim.id,
    sourcePointer: claim.sourcePointer,
  })));
  const suppliedEvidence = Object.freeze([...input.suppliedEvidence]);
  const resolverLimits = Object.freeze({ ...input.resolverLimits });
  const conformity = input.conformity
    ? Object.freeze({ ...input.conformity })
    : undefined;

  return Object.freeze({
    targetId: input.targetId,
    selectedClaims,
    purpose: input.purpose,
    binding: freezeVersionedIdentifier(input.binding),
    profile: freezeVersionedIdentifier(input.profile),
    trustConfigId: input.trustConfigId,
    evaluationTime: input.evaluationTime,
    activityTime: input.activityTime,
    suppliedEvidence,
    resolverLimits,
    ...(conformity ? { conformity } : {}),
  });
}

/** Copy and freeze a result without conflating its four evaluation surfaces. */
export function createRelianceResult(input: RelianceResultInput): RelianceResult {
  requireNonEmpty(input.targetId, 'targetId');
  validateVersionedIdentifier(input.binding, 'binding');
  validateVersionedIdentifier(input.profile, 'profile');
  input.artifactVerification.forEach((result, index) =>
    requireNonEmpty(result.artifactId, `artifactVerification[${index}].artifactId`));
  input.authorization.forEach((result, index) =>
    requireNonEmpty(result.claimId, `authorization[${index}].claimId`));
  input.support.forEach((result, index) =>
    requireNonEmpty(result.obligationId, `support[${index}].obligationId`));
  if (input.conformity.requested) {
    requireNonEmpty(input.conformity.requirementId, 'conformity.requirementId');
    requireNonEmpty(input.conformity.decisionRuleId, 'conformity.decisionRuleId');
  } else if (input.conformity.requested !== false || input.conformity.execution !== 'not_run') {
    throw new TypeError('Unrequested conformity must have execution state not_run.');
  }
  if (!['accept', 'reject', 'not_established'].includes(input.decision)) {
    throw new TypeError(`Unsupported reliance decision: ${String(input.decision)}.`);
  }

  return Object.freeze({
    targetId: input.targetId,
    binding: freezeVersionedIdentifier(input.binding),
    profile: freezeVersionedIdentifier(input.profile),
    artifactVerification: Object.freeze(input.artifactVerification.map(result => freezePredicate({
      ...result,
    }))),
    authorization: Object.freeze(input.authorization.map(result => Object.freeze({
      ...freezePredicate(result),
      routeWitnessIds: Object.freeze([...result.routeWitnessIds]),
    }))),
    support: Object.freeze(input.support.map(result => Object.freeze({
      ...freezePredicate(result),
      witnessIds: Object.freeze([...result.witnessIds]),
    }))),
    conformity: input.conformity.requested
      ? freezePredicate({ ...input.conformity })
      : Object.freeze({ requested: false as const, execution: 'not_run' as const }),
    decision: input.decision,
    limitations: Object.freeze([...(input.limitations ?? [])]),
  });
}

function requireStates(states: readonly SemanticState[], operator: string): void {
  if (states.length === 0) {
    throw new TypeError(`${operator} requires at least one semantic state.`);
  }
  for (const state of states) {
    if (!['established', 'contradicted', 'not_established'].includes(state)) {
      throw new TypeError(`${operator} received unsupported semantic state: ${String(state)}.`);
    }
  }
}

/** Contradiction dominates AND; establishment requires every conjunct. */
export function semanticAnd(states: readonly SemanticState[]): SemanticState {
  requireStates(states, 'semanticAnd');
  if (states.includes('contradicted')) return 'contradicted';
  if (states.every(state => state === 'established')) return 'established';
  return 'not_established';
}

/** Establishment dominates OR; contradiction requires every complete alternative. */
export function semanticOr(states: readonly SemanticState[]): SemanticState {
  requireStates(states, 'semanticOr');
  if (states.includes('established')) return 'established';
  if (states.every(state => state === 'contradicted')) return 'contradicted';
  return 'not_established';
}

/** Convert the required conjunction to an overall reliance decision. */
export function decisionFromRequired(states: readonly SemanticState[]): RelianceDecision {
  const state = semanticAnd(states);
  if (state === 'established') return 'accept';
  if (state === 'contradicted') return 'reject';
  return 'not_established';
}
