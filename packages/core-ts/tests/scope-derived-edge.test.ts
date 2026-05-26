// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { checkDerivedEdge } from '../src/scope/index.js';
import { codes, verifyFixture } from './fixture-helpers.js';

describe('derived edge scope checks', () => {
  it('fails when capability exceeds parent accreditation scope', async () => {
    const trace = await verifyFixture('calibration-capability', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('DERIVATION_VIOLATION');
  });

  it('checks validity window containment', () => {
    const child = { id: 'urn:child', validFrom: '2023-01-01T00:00:00Z', credentialSubject: {} };
    const parent = { id: 'urn:parent', validFrom: '2024-01-01T00:00:00Z', credentialSubject: {} };
    const result = checkDerivedEdge(child, parent);
    expect(result.passed).toBe(false);
    expect(result.violations.map(violation => violation.code)).toContain('VALIDITY_WINDOW_VIOLATION');
  });
});
