// SPDX-License-Identifier: Apache-2.0
// Node-only loader for the experimental GS certification v1 pinned static resources.
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { StaticResourceCatalog, type StaticResourceInput } from './catalog.js';
import { readPinnedResources } from './rm-v1-node.js';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
export const GS_V1_DIRECTORY = join(REPO_ROOT, 'bindings', 'experimental', 'gs-v1');

/** Install the GS v1 pinned contexts and schemas into a fresh isolated catalog. */
export function loadGsV1Catalog(extra: readonly StaticResourceInput[] = []): StaticResourceCatalog {
  return new StaticResourceCatalog([...readPinnedResources(join(GS_V1_DIRECTORY, 'catalog.json')), ...extra]);
}
