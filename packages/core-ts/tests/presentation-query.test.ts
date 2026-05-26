// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import {
  policyToDcql,
  policyToPresentationDefinition,
  validatePresentationSubmission,
} from '../src/presentation-query/index.js';
import { codes, loadFixture } from './fixture-helpers.js';
import { verifyCredentialGraph } from '../src/verifier/index.js';

describe('presentation query adapter', () => {
  it('keeps presentation validation separate from QI validation', async () => {
    const fixture = loadFixture('calibration-capability', 'failing-target-credential.json');
    const presentationDefinition = policyToPresentationDefinition(fixture.policy);
    const dcql = policyToDcql(fixture.policy);
    const inputDescriptors = presentationDefinition.input_descriptors as { id: string }[];
    const submission = {
      descriptor_map: inputDescriptors.map((descriptor: { id: string }, index: number) => ({
        id: descriptor.id,
        path: `$.verifiableCredential[${index}]`,
      })),
    };
    const presentation = validatePresentationSubmission(presentationDefinition, submission);
    const qiTrace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });

    expect((dcql.credentials as unknown[]).length).toBeGreaterThan(0);
    expect(presentation.valid).toBe(true);
    expect(qiTrace.verified).toBe(false);
    expect(codes(qiTrace)).toContain('DERIVATION_VIOLATION');
  });
});
