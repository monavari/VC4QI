// SPDX-License-Identifier: Apache-2.0
import { readFileSync } from 'node:fs';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormatsModule from 'ajv-formats';
import { describe, expect, it } from 'vitest';
import {
  loadBindingManifest, requireInstallableBinding, RM_V1_BINDING_ID,
} from '../src/reliance/index.js';

const Ajv = Ajv2020 as unknown as typeof import('ajv/dist/2020.js').default;
const addFormats = addFormatsModule as unknown as (ajv: InstanceType<typeof Ajv>) => void;
const directory = new URL('../../../bindings/experimental/rm-v1/', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('manifest.json', directory), 'utf8')) as unknown;
const schema = JSON.parse(readFileSync(new URL('manifest.schema.json', directory), 'utf8'));

describe('experimental RM v1 binding manifest', () => {
  it('validates its closed schema and loads as immutable data', () => {
    const ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    expect(validate(manifest), JSON.stringify(validate.errors)).toBe(true);
    const loaded = loadBindingManifest(manifest);
    expect(loaded.id).toBe(RM_V1_BINDING_ID);
    expect(loaded.version).toBe('1');
    expect(Object.isFrozen(loaded)).toBe(true);
    expect(Object.isFrozen(loaded.factMappings)).toBe(true);
  });

  it('is explicitly incomplete and cannot be selected', () => {
    const loaded = loadBindingManifest(manifest);
    expect(loaded.installation.status).toBe('incomplete');
    // All resources are pinned; the evaluators (I2-I4) are what keep it incomplete.
    expect(loaded.installation.pendingResources).toEqual([]);
    expect(loaded.installation.reason).toMatch(/evaluators/);
    expect(() => requireInstallableBinding(loaded)).toThrow(/not installable/);
  });

  it('does not trust a self-reported installable flag', () => {
    const claimed = structuredClone(manifest) as Record<string, unknown>;
    claimed.installation = {
      status: 'installable', reason: 'self-reported', pendingResources: [],
    };
    expect(() => requireInstallableBinding(loadBindingManifest(claimed)))
      .toThrow(/catalog-backed installation verification/);
  });

  it('contains no legacy wire-field requirement', () => {
    const serialized = JSON.stringify(manifest);
    for (const term of [
      'authorizedBy', 'derivedFrom', 'supportedBy', 'authorizationBasis', 'scopeRef',
    ]) expect(serialized).not.toContain(term);
  });
});
