// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { codes, loadFixture, verifyFixture } from './fixture-helpers.js';
import { verifyCredentialGraph } from '../src/verifier/index.js';

describe('policy evaluation', () => {
  it('fails when required evidence is missing', async () => {
    const trace = await verifyFixture('gs-scheme-authorization', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_MISSING');
  });

  it('allows legal mandate without accreditation when policy selects it', async () => {
    const trace = await verifyFixture('ptb-legal-mandate');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_PRESENT');
  });

  it('fails operational scope evidence without derivedFrom external authority', async () => {
    const fixture = loadFixture('reference-material-recursive');
    const opScope = fixture.documents.get('urn:uuid:operational-scope-001')!;
    opScope.evidence = [];
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_MISSING');
  });
});
