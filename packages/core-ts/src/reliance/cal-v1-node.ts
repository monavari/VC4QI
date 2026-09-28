// SPDX-License-Identifier: Apache-2.0
// Node-only loader for the experimental calibration v1 pinned static resources.
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { StaticResourceCatalog, type StaticResourceInput } from './catalog.js';
import { readPinnedResources } from './rm-v1-node.js';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
export const CAL_V1_DIRECTORY = join(REPO_ROOT, 'bindings', 'experimental', 'cal-v1');

/** Install the calibration v1 pinned contexts and schemas into a fresh isolated catalog. */
export function loadCalV1Catalog(extra: readonly StaticResourceInput[] = []): StaticResourceCatalog {
  return new StaticResourceCatalog([...readPinnedResources(join(CAL_V1_DIRECTORY, 'catalog.json')), ...extra]);
}
