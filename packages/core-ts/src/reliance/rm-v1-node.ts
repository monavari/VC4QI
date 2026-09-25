// SPDX-License-Identifier: Apache-2.0
// Node-only loader for the experimental RM v1 pinned static resources. It reads
// files, so it is deliberately not exported from the browser-reachable barrel.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { StaticResourceCatalog, type StaticResourceInput } from './catalog.js';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
const RM_V1_DIRECTORY = join(REPO_ROOT, 'bindings', 'experimental', 'rm-v1');

export interface PinnedResourceEntry {
  readonly uri: string;
  readonly path: string;
  readonly mediaType: string;
  readonly origin: string;
  readonly version: string;
  readonly digestSRI: `sha384-${string}`;
}

function isEntry(value: unknown): value is PinnedResourceEntry {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  const entry = value as Record<string, unknown>;
  return ['uri', 'path', 'mediaType', 'origin', 'version', 'digestSRI']
    .every(key => typeof entry[key] === 'string' && (entry[key] as string).length > 0)
    && (entry.digestSRI as string).startsWith('sha384-')
    && !(entry.path as string).startsWith('/')
    && !(entry.path as string).split('/').includes('..');
}

/**
 * Read a pinned-resource index and the exact bytes it names. Paths are relative to
 * the repository root and may not escape it. Integrity is verified by the catalog.
 */
export function readPinnedResources(indexPath: string, root: string = REPO_ROOT): StaticResourceInput[] {
  const index = JSON.parse(readFileSync(indexPath, 'utf8')) as { resources?: unknown };
  if (!Array.isArray(index.resources) || index.resources.length === 0) {
    throw new TypeError(`Pinned resource index ${indexPath} has no resources.`);
  }
  return index.resources.map((entry: unknown) => {
    if (!isEntry(entry)) throw new TypeError(`Invalid pinned resource entry in ${indexPath}.`);
    return {
      uri: entry.uri,
      mediaType: entry.mediaType,
      origin: entry.origin,
      version: entry.version,
      digestSRI: entry.digestSRI,
      bytes: readFileSync(join(root, entry.path)),
    };
  });
}

/** Install the RM v1 pinned contexts and schemas into a fresh isolated catalog. */
export function loadRmV1Catalog(extra: readonly StaticResourceInput[] = []): StaticResourceCatalog {
  return new StaticResourceCatalog([
    ...readPinnedResources(join(RM_V1_DIRECTORY, 'catalog.json')),
    ...extra,
  ]);
}
