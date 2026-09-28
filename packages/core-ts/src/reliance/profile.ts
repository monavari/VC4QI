// SPDX-License-Identifier: Apache-2.0
// Verifier-owned reliance profile. The verifier selects it; a credential can never
// choose a weaker one. Browser-safe: validates an already parsed JSON value.
import type { ConformityRequirement, DecisionRule, MethodSuccession } from './rm-v1-claims.js';
import type { StatusPolicy } from './status-list.js';
import type { VersionedIdentifier } from './types.js';

export interface TrustAnchor {
  readonly id: string;
  readonly purposes: readonly string[];
}

/** Permitted complete routes (installed evaluator ids), global restrictions and search budget. */
export interface AuthorityPolicy {
  readonly certificateRoutes: readonly string[];
  readonly globalRestrictions: readonly string[];
  readonly maxRoutes: number;
}

export interface RelianceProfile {
  readonly id: string;
  readonly version: string;
  readonly status: 'experimental' | 'production';
  readonly binding: VersionedIdentifier;
  readonly trustAnchors: readonly TrustAnchor[];
  readonly authority: AuthorityPolicy;
  readonly credentialStatus: StatusPolicy;
  /** How a binding-declared method revision is interpreted; `none` leaves it not established. */
  readonly mapping: { readonly methodSuccession: MethodSuccession };
  /** Verifier-owned requirements and decision rules a request may select by id. */
  readonly conformity: { readonly requirements: readonly ConformityRequirement[]; readonly decisionRules: readonly DecisionRule[] };
  /** Binding-specific verifier rules (for example calibration's applyCmcFloor); each binding validates its own. */
  readonly bindingRules: Readonly<Record<string, unknown>>;
}

const SUCCESSION = ['accept-successor', 'require-extension', 'none'];
const ACCEPT_WHEN = ['value-at-most-limit', 'value-plus-expanded-uncertainty-at-most-limit'];
const DECIMAL = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
const nonempty = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const stringList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.length > 0 && value.every(nonempty) && new Set(value).size === value.length;

/** Validate a profile and return an immutable copy. Missing rules are never defaulted. */
export function loadRelianceProfile(input: unknown): RelianceProfile {
  if (!isObject(input) || !nonempty(input.id) || !nonempty(input.version) ||
      (input.status !== 'experimental' && input.status !== 'production')) {
    throw new TypeError('Reliance profile identity, version or status is invalid.');
  }
  const binding = input.binding;
  if (!isObject(binding) || !nonempty(binding.id) || !nonempty(binding.version)) {
    throw new TypeError('Reliance profile must name exactly one binding and version.');
  }
  if (!Array.isArray(input.trustAnchors) ||
      input.trustAnchors.some(a => !isObject(a) || !nonempty(a.id) || !stringList(a.purposes))) {
    throw new TypeError('Reliance profile trustAnchors must list anchors with explicit purposes.');
  }
  const authority = input.authority;
  if (!isObject(authority) || !stringList(authority.certificateRoutes) ||
      !Array.isArray(authority.globalRestrictions) || !authority.globalRestrictions.every(nonempty) ||
      !Number.isSafeInteger(authority.maxRoutes) || (authority.maxRoutes as number) <= 0) {
    throw new TypeError('Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.');
  }
  const status = input.credentialStatus;
  if (!isObject(status) || typeof status.required !== 'boolean' || !stringList(status.purposes) ||
      !Number.isSafeInteger(status.maxAgeSeconds) || (status.maxAgeSeconds as number) <= 0) {
    throw new TypeError('Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.');
  }
  const mapping = input.mapping;
  if (!isObject(mapping) || !SUCCESSION.includes(mapping.methodSuccession as string)) {
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${SUCCESSION.join(', ')}.`);
  }
  const conformity = input.conformity;
  if (!isObject(conformity) || !Array.isArray(conformity.requirements) || !Array.isArray(conformity.decisionRules) ||
      conformity.requirements.some(r => !isObject(r) || !nonempty(r.id) || !nonempty(r.propertyIri) || !nonempty(r.quantityKindIri) ||
        !isObject(r.upperLimit) || typeof r.upperLimit.value !== 'string' || !DECIMAL.test(r.upperLimit.value) || !nonempty(r.upperLimit.unit)) ||
      conformity.decisionRules.some(r => !isObject(r) || !nonempty(r.id) || !ACCEPT_WHEN.includes(r.acceptWhen as string))) {
    throw new TypeError('Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).');
  }
  if (input.bindingRules !== undefined && !isObject(input.bindingRules)) {
    throw new TypeError('Reliance profile bindingRules must be an object when present.');
  }
  const requirements = conformity.requirements as ConformityRequirement[];
  const decisionRules = conformity.decisionRules as DecisionRule[];
  const ids = [...requirements.map(r => r.id), ...decisionRules.map(r => r.id)];
  if (new Set(ids).size !== ids.length) throw new TypeError('Reliance profile conformity ids must be unique.');
  return Object.freeze({
    id: input.id,
    version: input.version,
    status: input.status,
    binding: Object.freeze({ id: binding.id, version: binding.version }),
    trustAnchors: Object.freeze(input.trustAnchors.map(a => Object.freeze({
      id: (a as Record<string, string>).id!, purposes: Object.freeze([...(a as { purposes: string[] }).purposes]),
    }))),
    authority: Object.freeze({
      certificateRoutes: Object.freeze([...authority.certificateRoutes]),
      globalRestrictions: Object.freeze([...(authority.globalRestrictions as string[])]),
      maxRoutes: authority.maxRoutes as number,
    }),
    credentialStatus: Object.freeze({
      required: status.required, purposes: Object.freeze([...status.purposes]), maxAgeSeconds: status.maxAgeSeconds as number,
    }),
    mapping: Object.freeze({ methodSuccession: mapping.methodSuccession as MethodSuccession }),
    conformity: Object.freeze({
      requirements: Object.freeze(requirements.map(r => Object.freeze({
        id: r.id, propertyIri: r.propertyIri, quantityKindIri: r.quantityKindIri,
        upperLimit: Object.freeze({ value: r.upperLimit.value, unit: r.upperLimit.unit }),
      }))),
      decisionRules: Object.freeze(decisionRules.map(r => Object.freeze({ id: r.id, acceptWhen: r.acceptWhen }))),
    }),
    bindingRules: Object.freeze({ ...(input.bindingRules as Record<string, unknown> | undefined) }),
  });
}
