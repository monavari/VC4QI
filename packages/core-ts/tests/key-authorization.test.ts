// SPDX-License-Identifier: Apache-2.0
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  authorizeAssertionMethod, sha384SRI, StaticResourceCatalog,
} from '../src/reliance/index.js';

interface VectorCase {
  id: string;
  description: string;
  issuer?: unknown;
  verificationMethod: string;
  documents: { uri: string; content?: unknown; contentUtf8?: string }[];
  expected: { state: string; code: string };
}

const vectors = JSON.parse(readFileSync(
  new URL('../../../testdata/regressions/key-authorization.json', import.meta.url), 'utf8',
)) as { cases: VectorCase[] };

function sessionFor(documents: VectorCase['documents']) {
  const catalog = new StaticResourceCatalog(documents.map(document => {
    const bytes = new TextEncoder().encode(document.contentUtf8 ?? JSON.stringify(document.content));
    return {
      uri: document.uri, mediaType: 'application/json', bytes, digestSRI: sha384SRI(bytes),
      origin: 'key-authorization regression vector', version: '1',
    };
  }));
  return catalog.openSession({ maxResources: 8, maxBytes: 100_000 });
}

describe('RM v1 verification-method authorization (shared vectors)', () => {
  it.each(vectors.cases.map(c => [c.id, c] as const))('%s', (_id, vector) => {
    const result = authorizeAssertionMethod(
      vector.issuer, vector.verificationMethod, sessionFor(vector.documents),
    );
    expect({ state: result.state, code: result.code }, vector.description).toEqual(vector.expected);
    if (result.state === 'established') {
      expect(result.publicKey).toHaveLength(32);
      expect(result.controllerDocumentDigest).toMatch(/^sha384-/);
    } else {
      expect(result.publicKey).toBeUndefined();
    }
  });

  it('returns a frozen outcome that callers cannot upgrade', () => {
    const vector = vectors.cases.find(c => c.expected.code === 'NOT_ASSERTION_METHOD')!;
    const result = authorizeAssertionMethod(vector.issuer, vector.verificationMethod, sessionFor(vector.documents));
    expect(Object.isFrozen(result)).toBe(true);
  });
});
