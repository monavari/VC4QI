// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { codes, fixturePath, readJson, verifyFixture } from './fixture-helpers.js';

const FIXTURE_NAMES = [
  'calibration-direct-accreditation',
  'calibration-capability',
  'nmi-legal-mandate',
  'reference-material-recursive',
  'gs-scheme-authorization',
  'test-report-supported-dcc',
];

describe('shared fixtures', () => {
  it.each(FIXTURE_NAMES)('runs %s and includes expected trace codes', async name => {
    const trace = await verifyFixture(name);
    const expected = readJson(fixturePath(name, 'expected-trace.json'));
    const expectedCodes = (expected.results as { code: string }[]).map((result: { code: string }) => result.code);
    expect(trace.verified).toBe(true);
    for (const code of expectedCodes) expect(codes(trace)).toContain(code);
  });

  it.each(FIXTURE_NAMES)('%s has required fixture files', name => {
    const files = new Set(readdirSync(fixturePath(name)));
    expect(files.has('target-credential.json')).toBe(true);
    expect(files.has('policy.json')).toBe(true);
    expect(files.has('trust-registry.json')).toBe(true);
    expect(files.has('expected-trace.json')).toBe(true);
    expect(files.has('presentation-definition.json')).toBe(true);
    expect(files.has('presentation-submission.json')).toBe(true);
    expect(readdirSync(join(fixturePath(name), 'evidence')).length).toBeGreaterThan(0);
  });
});
