// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { buildEvidenceGraph } from '../src/evidence/index.js';
import { codes, loadFixture, registryVerificationOptions } from './fixture-helpers.js';
import { verifyCredentialGraph } from '../src/verifier/index.js';
import type { JsonObject } from '../src/types.js';

describe('evidence graph builder', () => {
  it('handles multiple evidence entries without treating the first as special', async () => {
    const fixture = loadFixture('reference-material-recursive');
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri) as JsonObject,
      resolveTrustRegistry: async () => fixture.trustRegistry,
      ...registryVerificationOptions,
    });
    expect(trace.verified).toBe(true);
    expect(trace.summary.edgesEvaluated).toBeGreaterThan(2);
    expect(codes(trace)).toContain('SUPPORTING_EVIDENCE_RESOLVED');
  });

  it('detects recursive graph cycles', async () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const acc = structuredClone(fixture.documents.values().next().value) as JsonObject;
    acc.evidence = [{
      type: 'CredentialEvidenceReference',
      id: fixture.target.id,
      relation: 'derivedFrom',
      authorizationBasis: { kind: 'accreditation' },
    }];
    fixture.documents.set(String(acc.id), acc);
    const result = await buildEvidenceGraph(fixture.target, {
      fetchDocument: async uri => uri === fixture.target.id ? fixture.target : fixture.documents.get(uri) as JsonObject,
      requireDigest: false,
    });
    expect(result.results.map(entry => entry.code)).toContain('CYCLE_DETECTED');
  });

  it('stops at maxDepth', async () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const first = structuredClone(fixture.documents.values().next().value) as JsonObject;
    const tail = { ...first, id: 'urn:uuid:depth-tail' };
    first.evidence = [{
      type: 'CredentialEvidenceReference',
      id: tail.id,
      relation: 'derivedFrom',
      authorizationBasis: { kind: 'accreditation' },
    }];
    fixture.documents.set(String(first.id), first);
    fixture.documents.set(String(tail.id), tail);
    const result = await buildEvidenceGraph(fixture.target, {
      fetchDocument: async uri => fixture.documents.get(uri) as JsonObject,
      maxDepth: 1,
    });
    expect(result.results.map(entry => entry.code)).toContain('MAX_DEPTH_EXCEEDED');
  });
});
