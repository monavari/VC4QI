// SPDX-License-Identifier: Apache-2.0

export const RM_V1_BINDING_ID = 'https://vc4qi.example/bindings/rm/1';

export type BindingInstallationStatus = 'incomplete' | 'installable';

export interface BindingManifest {
  readonly $schema: string;
  readonly id: string;
  readonly version: string;
  readonly status: 'experimental' | 'production';
  readonly owner: Readonly<Record<string, unknown>>;
  readonly installation: Readonly<{
    status: BindingInstallationStatus;
    reason: string;
    pendingResources: readonly string[];
  }>;
  readonly carrierAndSchema: Readonly<Record<string, unknown>>;
  readonly factMappings: readonly Readonly<Record<string, unknown>>[];
  readonly cardinality: Readonly<Record<string, unknown>>;
  readonly discoveryAndIntegrity: Readonly<Record<string, unknown>>;
  readonly recognizedTypes: Readonly<Record<string, unknown>>;
  readonly principalAndRights: Readonly<Record<string, unknown>>;
  readonly scopeAndMapping: Readonly<Record<string, unknown>>;
  readonly routesAndRestrictions: Readonly<Record<string, unknown>>;
  readonly protectionTimeAndResolution: Readonly<Record<string, unknown>>;
  readonly supportAndDisclosure: Readonly<Record<string, unknown>>;
  readonly evidenceAndExclusions: Readonly<Record<string, unknown>>;
}

const REQUIRED_KEYS = [
  '$schema', 'id', 'version', 'status', 'owner', 'installation',
  'carrierAndSchema', 'factMappings', 'cardinality', 'discoveryAndIntegrity',
  'recognizedTypes', 'principalAndRights', 'scopeAndMapping',
  'routesAndRestrictions', 'protectionTimeAndResolution',
  'supportAndDisclosure', 'evidenceAndExclusions',
] as const;

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function deepFreeze<T>(value: T): T {
  if (value !== null && typeof value === 'object') {
    for (const child of Object.values(value)) deepFreeze(child);
    Object.freeze(value);
  }
  return value;
}

/** Validate the closed manifest envelope and return an isolated immutable copy. */
export function loadBindingManifest(input: unknown): BindingManifest {
  if (!isObject(input)) throw new TypeError('Binding manifest must be an object.');
  const keys = Object.keys(input);
  if (keys.length !== REQUIRED_KEYS.length ||
      REQUIRED_KEYS.some(key => !Object.hasOwn(input, key))) {
    throw new TypeError('Binding manifest must contain exactly the supported top-level categories.');
  }
  if (typeof input.id !== 'string' || input.id.length === 0 ||
      typeof input.version !== 'string' || input.version.length === 0 ||
      (input.status !== 'experimental' && input.status !== 'production')) {
    throw new TypeError('Binding manifest identity, version, or status is invalid.');
  }
  if (!isObject(input.installation) ||
      (input.installation.status !== 'incomplete' && input.installation.status !== 'installable') ||
      typeof input.installation.reason !== 'string' || input.installation.reason.length === 0 ||
      !Array.isArray(input.installation.pendingResources) ||
      input.installation.pendingResources.some(uri => typeof uri !== 'string' || uri.length === 0)) {
    throw new TypeError('Binding manifest installation state is invalid.');
  }
  if (!Array.isArray(input.factMappings) || input.factMappings.length === 0 ||
      input.factMappings.some(mapping => !isObject(mapping))) {
    throw new TypeError('Binding manifest factMappings must be a nonempty object array.');
  }
  for (const key of REQUIRED_KEYS.slice(4)) {
    if (key === 'installation' || key === 'factMappings') continue;
    if (!isObject(input[key]) || Object.keys(input[key]).length === 0) {
      throw new TypeError(`Binding manifest ${key} must be a nonempty object.`);
    }
  }
  return deepFreeze(structuredClone(input)) as unknown as BindingManifest;
}

/** Refuse selection until catalog-backed installation verification is implemented. */
export function requireInstallableBinding(manifest: BindingManifest): never {
  if (manifest.installation.status !== 'installable' ||
      manifest.installation.pendingResources.length !== 0) {
    throw new Error(`Binding ${manifest.id}@${manifest.version} is not installable.`);
  }
  throw new Error(
    `Binding ${manifest.id}@${manifest.version} cannot be selected before catalog-backed installation verification.`,
  );
}
