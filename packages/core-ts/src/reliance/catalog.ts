// SPDX-License-Identifier: Apache-2.0
import { createHash } from 'node:crypto';
import type { DocumentLoader } from '../types.js';

export type CatalogErrorCode =
  | 'DUPLICATE_RESOURCE'
  | 'INTEGRITY_MISMATCH'
  | 'INVALID_RESOURCE'
  | 'RESOURCE_NOT_FOUND'
  | 'RESOURCE_BUDGET_EXCEEDED';

export class CatalogError extends Error {
  constructor(public readonly code: CatalogErrorCode, message: string) {
    super(message);
    this.name = 'CatalogError';
  }
}

export interface StaticResourceInput {
  uri: string;
  mediaType: string;
  bytes: Uint8Array;
  digestSRI: `sha384-${string}`;
  origin: string;
  version: string;
}

export interface StaticResource {
  uri: string;
  mediaType: string;
  bytes: Uint8Array;
  digestSRI: `sha384-${string}`;
  origin: string;
  version: string;
}

export interface CatalogBudget {
  maxResources: number;
  maxBytes: number;
}

function assertNonempty(value: string, field: string): void {
  if (value.trim().length === 0) {
    throw new CatalogError('INVALID_RESOURCE', `${field} must be nonempty.`);
  }
}

export function sha384SRI(bytes: Uint8Array): `sha384-${string}` {
  const digest = createHash('sha384').update(bytes).digest('base64');
  return `sha384-${digest}`;
}

export class StaticResourceCatalog {
  readonly #resources = new Map<string, Omit<StaticResource, 'bytes'> & { bytes: Uint8Array }>();

  constructor(inputs: readonly StaticResourceInput[]) {
    for (const input of inputs) {
      for (const [field, value] of Object.entries({
        uri: input.uri, mediaType: input.mediaType, origin: input.origin, version: input.version,
      })) assertNonempty(value, field);
      if (this.#resources.has(input.uri)) {
        throw new CatalogError('DUPLICATE_RESOURCE', `Duplicate static resource: ${input.uri}`);
      }
      const actual = sha384SRI(input.bytes);
      if (actual !== input.digestSRI) {
        throw new CatalogError(
          'INTEGRITY_MISMATCH',
          `Static resource ${input.uri} has ${actual}; expected ${input.digestSRI}.`,
        );
      }
      this.#resources.set(input.uri, { ...input, bytes: Uint8Array.from(input.bytes) });
    }
  }

  openSession(budget: CatalogBudget): CatalogSession {
    if (!Number.isSafeInteger(budget.maxResources) || budget.maxResources <= 0 ||
        !Number.isSafeInteger(budget.maxBytes) || budget.maxBytes <= 0) {
      throw new CatalogError('INVALID_RESOURCE', 'Catalog budgets must be positive safe integers.');
    }
    return new CatalogSession(this.#resources, Object.freeze({ ...budget }));
  }
}

export class CatalogSession {
  #resourcesUsed = 0;
  #bytesUsed = 0;

  constructor(
    private readonly resources: ReadonlyMap<string, Omit<StaticResource, 'bytes'> & { bytes: Uint8Array }>,
    private readonly budget: CatalogBudget,
  ) {}

  get usage(): Readonly<{ resources: number; bytes: number }> {
    return Object.freeze({ resources: this.#resourcesUsed, bytes: this.#bytesUsed });
  }

  resolve(uri: string): StaticResource {
    const entry = this.resources.get(uri);
    if (!entry) {
      throw new CatalogError('RESOURCE_NOT_FOUND', `Static resource is not installed: ${uri}`);
    }
    if (this.#resourcesUsed + 1 > this.budget.maxResources ||
        this.#bytesUsed + entry.bytes.byteLength > this.budget.maxBytes) {
      throw new CatalogError('RESOURCE_BUDGET_EXCEEDED', `Static resource budget exceeded at ${uri}.`);
    }
    this.#resourcesUsed += 1;
    this.#bytesUsed += entry.bytes.byteLength;
    return { ...entry, bytes: Uint8Array.from(entry.bytes) };
  }
}

/** Adapt one budgeted catalog session to an isolated, offline JSON-LD loader. */
export function catalogDocumentLoader(session: CatalogSession): DocumentLoader {
  return async (url: string) => {
    const resource = session.resolve(url);
    if (resource.mediaType !== 'application/json' &&
        resource.mediaType !== 'application/ld+json' &&
        !resource.mediaType.endsWith('+json')) {
      throw new CatalogError(
        'INVALID_RESOURCE',
        `JSON-LD resource ${url} has unsupported media type ${resource.mediaType}.`,
      );
    }
    let document: unknown;
    try {
      const source = new TextDecoder('utf-8', { fatal: true }).decode(resource.bytes);
      document = JSON.parse(source) as unknown;
    } catch (error) {
      throw new CatalogError(
        'INVALID_RESOURCE',
        `JSON-LD resource ${url} is not valid UTF-8 JSON: ${String(error)}.`,
      );
    }
    return { contextUrl: null, document, documentUrl: url };
  };
}
