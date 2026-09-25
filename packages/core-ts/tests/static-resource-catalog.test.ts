// SPDX-License-Identifier: Apache-2.0
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  CatalogError, StaticResourceCatalog, sha384SRI,
} from '../src/reliance/catalog.js';

const fixture = JSON.parse(readFileSync(
  new URL('../../../testdata/regressions/static-resource-catalog.json', import.meta.url), 'utf8',
)) as Record<string, string>;
const bytes = new TextEncoder().encode(fixture.contentUtf8);
const input = {
  uri: fixture.uri!, mediaType: fixture.mediaType!, bytes,
  digestSRI: fixture.digestSRI! as `sha384-${string}`,
  origin: fixture.origin!, version: fixture.version!,
};

describe('isolated static resource catalog', () => {
  it('verifies original bytes and returns defensive copies', () => {
    const catalog = new StaticResourceCatalog([input]);
    const session = catalog.openSession({ maxResources: 2, maxBytes: bytes.length * 2 });
    const first = session.resolve(input.uri);
    first.bytes[0] = 0;
    const second = session.resolve(input.uri);
    expect(new TextDecoder().decode(second.bytes)).toBe(fixture.contentUtf8);
    expect(session.usage).toEqual({ resources: 2, bytes: bytes.length * 2 });
  });

  it('copies Node Buffer storage at ingress and egress', () => {
    const source = Buffer.from(fixture.contentUtf8!);
    const catalog = new StaticResourceCatalog([{ ...input, bytes: source }]);
    source[0] = 0;
    const session = catalog.openSession({ maxResources: 2, maxBytes: bytes.length * 2 });
    const first = session.resolve(input.uri);
    first.bytes[0] = 0;
    expect(new TextDecoder().decode(session.resolve(input.uri).bytes)).toBe(fixture.contentUtf8);
  });

  it('detects changed bytes, including whitespace', () => {
    expect(() => new StaticResourceCatalog([{ ...input,
      bytes: new TextEncoder().encode(fixture.contentUtf8 + ' '),
    }])).toThrowError(expect.objectContaining({ code: 'INTEGRITY_MISMATCH' }));
  });

  it('refuses duplicate and unknown resource identities', () => {
    expect(() => new StaticResourceCatalog([input, input]))
      .toThrowError(expect.objectContaining({ code: 'DUPLICATE_RESOURCE' }));
    const session = new StaticResourceCatalog([input]).openSession({ maxResources: 1, maxBytes: 99 });
    expect(() => session.resolve('https://vc4qi.example/resources/missing'))
      .toThrowError(expect.objectContaining({ code: 'RESOURCE_NOT_FOUND' }));
    expect(session.usage).toEqual({ resources: 0, bytes: 0 });
  });

  it('uses isolated catalogs and request-local budgets', () => {
    const first = new StaticResourceCatalog([input]);
    const empty = new StaticResourceCatalog([]);
    expect(() => empty.openSession({ maxResources: 1, maxBytes: 99 }).resolve(input.uri))
      .toThrow(CatalogError);
    const limited = first.openSession({ maxResources: 1, maxBytes: bytes.length });
    expect(limited.resolve(input.uri).digestSRI).toBe(sha384SRI(bytes));
    expect(() => limited.resolve(input.uri))
      .toThrowError(expect.objectContaining({ code: 'RESOURCE_BUDGET_EXCEEDED' }));
  });

  it('snapshots the validated budget', () => {
    const budget = { maxResources: 1, maxBytes: bytes.length };
    const session = new StaticResourceCatalog([input]).openSession(budget);
    budget.maxResources = 99;
    budget.maxBytes = 99_999;
    session.resolve(input.uri);
    expect(() => session.resolve(input.uri))
      .toThrowError(expect.objectContaining({ code: 'RESOURCE_BUDGET_EXCEEDED' }));
  });
});
