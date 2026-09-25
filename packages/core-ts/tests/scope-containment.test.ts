// SPDX-License-Identifier: Apache-2.0
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { checkDerivedEdge, checkScopeInclusion } from '../src/scope/index.js';
import type { JsonObject } from '../src/types.js';

interface Vector {
  id: string;
  operation: 'derived' | 'rm' | 'dcc';
  child?: JsonObject;
  parent?: JsonObject;
  credential?: JsonObject;
  scope?: JsonObject[];
  expected: { passed: boolean; codes: string[] };
}
const { vectors } = JSON.parse(readFileSync(
  new URL('../../../testdata/regressions/scope-containment.json', import.meta.url), 'utf8',
)) as { vectors: Vector[] };

describe('shared I0 scope safety vectors (unsigned predicates)', () => {
  it('rejects non-finite bounds on either endpoint', () => {
    for (const side of ['child', 'parent'] as const) {
      for (const bound of ['from', 'to']) {
        for (const value of [NaN, Infinity, -Infinity]) {
          const vector = structuredClone(vectors[0]!);
          const subject = vector[side]!.credentialSubject as JsonObject;
          const records = subject.scope as JsonObject[];
          (records[0]!.range as JsonObject)[bound] = value;
          expect(checkDerivedEdge(vector.child!, vector.parent!).passed).toBe(false);
        }
      }
    }
  });

  for (const vector of vectors) {
    it(vector.id, () => {
      const result = vector.operation === 'derived'
        ? checkDerivedEdge(vector.child!, vector.parent!)
        : checkScopeInclusion(vector.credential!, { credentialSubject: { scope: vector.scope! } });
      expect(result.passed).toBe(vector.expected.passed);
      const codes = result.violations.map(v => v.code);
      if (result.passed) expect(codes).toEqual([]);
      else for (const code of vector.expected.codes) expect(codes).toContain(code);
    });
  }
});
