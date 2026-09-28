// SPDX-License-Identifier: Apache-2.0
// Node-only installer for a binding directory: its manifest, one selected verifier
// profile, and a fresh isolated catalog of its pinned resources. It reads files, so it
// is deliberately not exported from the browser-reachable barrel.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { StaticResourceCatalog, type StaticResourceInput } from './catalog.js';
import { loadBindingManifest, type BindingManifest } from './manifest.js';
import { loadRelianceProfile, type RelianceProfile } from './profile.js';
import { readPinnedResources } from './rm-v1-node.js';

export interface InstalledBinding {
  readonly manifest: BindingManifest;
  readonly profile: RelianceProfile;
  readonly catalog: StaticResourceCatalog;
}

export interface InstallBindingOptions {
  /** Also install the signed test vectors (`test-vectors/signed/catalog.json`), if present. Default true. */
  readonly testVectors?: boolean;
  /** Further resources, for example credentials supplied by the holder. */
  readonly extra?: readonly StaticResourceInput[];
}

/**
 * Install a binding from its directory (for example `bindings/experimental/rm-v1`) with
 * the verifier profile `profiles/<profileName>.json`. Pinned paths are relative to the
 * repository root; every resource's SHA-384 digest is checked by the catalog.
 */
export function installBinding(
  directory: string, profileName: string, options: InstallBindingOptions = {},
): InstalledBinding {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(profileName)) throw new TypeError(`Invalid profile name ${profileName}.`);
  const readJson = (path: string): unknown => JSON.parse(readFileSync(join(directory, path), 'utf8'));
  const manifest = loadBindingManifest(readJson('manifest.json'));
  const profile = loadRelianceProfile(readJson(join('profiles', `${profileName}.json`)));
  const vectors = join(directory, 'test-vectors', 'signed', 'catalog.json');
  const catalog = new StaticResourceCatalog([
    ...readPinnedResources(join(directory, 'catalog.json')),
    ...(options.testVectors !== false && existsSync(vectors) ? readPinnedResources(vectors) : []),
    ...(options.extra ?? []),
  ]);
  return Object.freeze({ manifest, profile, catalog });
}
