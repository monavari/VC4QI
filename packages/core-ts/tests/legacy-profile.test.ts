// SPDX-License-Identifier: Apache-2.0
// I5: explicit legacy compatibility. V02 — a legacy credential under the standards-first
// profile is unsupported, with no silent fallback. V03 — the same kind of credential
// under the explicitly selected legacy profile is evaluated from its original secured
// representation and labelled legacy.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { evaluateLegacyProfile, LEGACY_PROFILE } from '../src/legacy/index.js';
import type { AssessmentEvaluator } from '../src/assessment/index.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import { fixturePath, loadFixture, TEST_REGISTRY_PUBLIC_KEY, testDocumentLoader } from './fixture-helpers.js';
import { catalogWith, manifest, profile, request } from './rm-v1-helpers.js';

const options = (name: string) => {
  const fixture = loadFixture(name);
  return {
    fixture,
    options: {
      fetchDocument: async (uri: string) => {
        const document = fixture.documents.get(uri);
        if (!document) throw new Error(`Unknown fixture URI ${uri}`);
        return document;
      },
      resolveTrustRegistry: async () => fixture.trustRegistry,
      resolveKey: async () => TEST_REGISTRY_PUBLIC_KEY,
      documentLoader: testDocumentLoader,
    },
  };
};
/** Passes each GS application assessment with the method its policy allows (the evaluator is not under test). */
const passAssessments: AssessmentEvaluator = request => {
  const inspection = request.credentialTypes.includes('InspectionReport');
  return { outcome: 'pass', method: inspection ? 'human' : 'agent',
    assessorId: 'urn:example:legacy-profile-test', detail: 'Test evaluator: pass.' };
};

describe('V02: legacy credentials under the standards-first profile', () => {
  it('is unsupported: refused at the carrier check, never re-evaluated by the legacy verifier', async () => {
    const bytes = readFileSync(fixturePath('calibration-direct-accreditation', 'target-credential.json'), 'utf8');
    const id = String(JSON.parse(bytes).id);
    const { result } = await evaluateRmSlice(request({ targetId: id, suppliedEvidence: [] }), catalogWith({ [id]: bytes }), manifest, profile);
    expect(result.trace.find(t => t.predicate === 'carrier'))
      .toMatchObject({ gate: 0, state: 'not_established', reason: expect.stringMatching(/exact supported context combination/) });
    expect(result.authorization[0]).toMatchObject({ state: 'not_established', routeWitnessIds: [] });
    expect(result.decision).toBe('not_established');
    expect(result.profile).toEqual({ id: profile.id, version: profile.version });
    expect(JSON.stringify(result)).not.toMatch(/SCOPE_INCLUSION_VALID|TRUSTED_ISSUER|legacy-qi-vc/);
  });
});

describe('V03: the same kind of credential under the explicit legacy profile', () => {
  it('verifies the original signatures and labels the result legacy', async () => {
    const { fixture, options: o } = options('gs-hair-dryer-hitl');
    const evaluation = await evaluateLegacyProfile(fixture.target, fixture.policy, { ...o, assessCredential: passAssessments });
    expect(evaluation.profile).toEqual(LEGACY_PROFILE);
    expect(evaluation.profile.label).toBe('legacy');
    expect(evaluation.legacyTrace.results.filter(r => r.code === 'PROOF_VALID')).toHaveLength(7);
    expect(evaluation.decision).toBe('accept');
    expect(evaluation.limitations.join(' ')).toMatch(/not by standards-first reliance/);
  });

  it('never treats a placeholder or converted signature as valid', async () => {
    const { fixture, options: o } = options('calibration-direct-accreditation');
    const evaluation = await evaluateLegacyProfile(fixture.target, fixture.policy, o);
    expect(evaluation.legacyTrace.results.some(r => r.code === 'PROOF_VALID' && r.target === String(fixture.target.id))).toBe(false);
    expect(evaluation.decision).not.toBe('accept');
  });

  it('refuses to skip proof or status verification', async () => {
    const { fixture, options: o } = options('gs-hair-dryer-hitl');
    await expect(evaluateLegacyProfile(fixture.target, fixture.policy, { ...o, skipProof: true } as never))
      .rejects.toThrow(/original secured representation/);
    await expect(evaluateLegacyProfile(fixture.target, fixture.policy, { ...o, skipStatus: true } as never))
      .rejects.toThrow(/skipStatus/);
  });
});
