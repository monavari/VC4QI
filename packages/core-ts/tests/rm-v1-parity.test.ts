// SPDX-License-Identifier: Apache-2.0
// The TypeScript evaluator must reproduce the committed cross-language parity vector;
// the Python suite checks the same file (test_rm_v1_parity.py).
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parityOutcomes } from './rm-v1-parity.js';

const vector = JSON.parse(readFileSync(new URL(
  '../../../bindings/experimental/rm-v1/test-vectors/parity/i4-outcomes.json', import.meta.url), 'utf8'));

describe('RM v1 cross-language parity vector (I4)', () => {
  it('TypeScript reproduces every scenario exactly', async () => {
    expect(await parityOutcomes()).toEqual(vector);
  });
});
