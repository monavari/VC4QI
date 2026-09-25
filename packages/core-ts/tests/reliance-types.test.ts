// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import {
  createRelianceRequest,
  createRelianceResult,
  decisionFromRequired,
  semanticAnd,
  semanticOr,
  type RelianceRequestInput,
  type SemanticState,
} from '../src/reliance/index.js';

function validRequest(): RelianceRequestInput {
  return {
    targetId: 'urn:uuid:rm-certificate-001',
    selectedClaims: [{
      id: 'arsenic-mass-fraction',
      sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0',
    }],
    purpose: 'current-reliance',
    binding: { id: 'https://rm-binding.example/v1', version: '1.0.0' },
    profile: { id: 'https://rm-profile.example/current-reliance', version: '1.0.0' },
    trustConfigId: 'urn:example:trust-config:fixture-v1',
    evaluationTime: '2026-09-25T10:15:30Z',
    activityTime: '2026-02-01T00:00:00+01:00',
    suppliedEvidence: ['urn:uuid:accreditation-001'],
    resolverLimits: { maxResources: 32, maxDepth: 8, maxBytes: 1_000_000 },
    conformity: {
      requirementId: 'arsenic-at-most-200-mg-kg',
      decisionRuleId: 'guarded-upper-bound-inclusive',
    },
  };
}

describe('reliance request contract', () => {
  it('copies and freezes a complete request', () => {
    const mutableClaims = [{
      id: 'arsenic-mass-fraction',
      sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0',
    }];
    const input = { ...validRequest(), selectedClaims: mutableClaims };
    const request = createRelianceRequest(input);

    expect(request).toEqual(input);
    expect(Object.isFrozen(request)).toBe(true);
    expect(Object.isFrozen(request.selectedClaims)).toBe(true);
    expect(Object.isFrozen(request.selectedClaims[0])).toBe(true);
    expect(Object.isFrozen(request.binding)).toBe(true);
    expect(Object.isFrozen(request.resolverLimits)).toBe(true);

    mutableClaims[0] = { id: 'changed', sourcePointer: '/changed' };
    expect(request.selectedClaims[0]?.id).toBe('arsenic-mass-fraction');
  });

  it('rejects an empty claim selection', () => {
    expect(() => createRelianceRequest({
      ...validRequest(),
      selectedClaims: [],
    })).toThrow(/at least one claim/);
  });

  it.each([
    ['duplicate IDs', [
      { id: 'claim', sourcePointer: '/a' },
      { id: 'claim', sourcePointer: '/b' },
    ]],
    ['duplicate source pointers', [
      { id: 'claim-a', sourcePointer: '/same' },
      { id: 'claim-b', sourcePointer: '/same' },
    ]],
  ])('rejects %s', (_name, selectedClaims) => {
    expect(() => createRelianceRequest({
      ...validRequest(),
      selectedClaims,
    })).toThrow(/must not contain duplicates/);
  });

  it.each([
    ['evaluationTime', 'not-a-date'],
    ['evaluationTime', '2026-02-30T00:00:00Z'],
    ['evaluationTime', '0000-01-01T00:00:00Z'],
    ['activityTime', '2026-09-25T10:15:30'],
  ] as const)('rejects invalid %s value %s', (field, value) => {
    expect(() => createRelianceRequest({
      ...validRequest(),
      [field]: value,
    })).toThrow(/ISO 8601/);
  });

  it.each([
    ['maxResources', 0],
    ['maxDepth', -1],
    ['maxBytes', 1.5],
    ['maxBytes', Number.MAX_SAFE_INTEGER + 1],
  ] as const)('rejects invalid resolver budget %s=%s', (field, value) => {
    expect(() => createRelianceRequest({
      ...validRequest(),
      resolverLimits: { ...validRequest().resolverLimits, [field]: value },
    })).toThrow(/positive safe integer/);
  });
});

describe('three-state semantic operators', () => {
  const states: SemanticState[] = ['established', 'contradicted', 'not_established'];
  const expectedAnd: Record<SemanticState, Record<SemanticState, SemanticState>> = {
    established: {
      established: 'established',
      contradicted: 'contradicted',
      not_established: 'not_established',
    },
    contradicted: {
      established: 'contradicted',
      contradicted: 'contradicted',
      not_established: 'contradicted',
    },
    not_established: {
      established: 'not_established',
      contradicted: 'contradicted',
      not_established: 'not_established',
    },
  };
  const expectedOr: Record<SemanticState, Record<SemanticState, SemanticState>> = {
    established: {
      established: 'established',
      contradicted: 'established',
      not_established: 'established',
    },
    contradicted: {
      established: 'established',
      contradicted: 'contradicted',
      not_established: 'not_established',
    },
    not_established: {
      established: 'established',
      contradicted: 'not_established',
      not_established: 'not_established',
    },
  };

  it('implements every ordered pair in the AND and OR truth tables', () => {
    for (const left of states) {
      for (const right of states) {
        expect(semanticAnd([left, right])).toBe(expectedAnd[left][right]);
        expect(semanticOr([left, right])).toBe(expectedOr[left][right]);
      }
    }
  });

  it('maps the required conjunction to the reliance decision', () => {
    expect(decisionFromRequired(['established', 'established'])).toBe('accept');
    expect(decisionFromRequired(['established', 'contradicted'])).toBe('reject');
    expect(decisionFromRequired(['established', 'not_established'])).toBe('not_established');
  });

  it('rejects empty operator and required-state lists', () => {
    expect(() => semanticAnd([])).toThrow(/at least one/);
    expect(() => semanticOr([])).toThrow(/at least one/);
    expect(() => decisionFromRequired([])).toThrow(/at least one/);
  });

  it('rejects unknown semantic states at runtime', () => {
    const invalid = 'bogus' as SemanticState;
    expect(() => semanticAnd([invalid])).toThrow(/unsupported semantic state/);
    expect(() => semanticOr(['established', invalid])).toThrow(/unsupported semantic state/);
  });
});

describe('reliance result contract', () => {
  it('keeps artifact verification separate and records unrequested conformity as not_run', () => {
    const result = createRelianceResult({
      targetId: 'urn:uuid:rm-certificate-001',
      binding: { id: 'https://rm-binding.example/v1', version: '1.0.0' },
      profile: { id: 'https://rm-profile.example/current-reliance', version: '1.0.0' },
      artifactVerification: [{
        artifactId: 'urn:uuid:rm-certificate-001',
        state: 'established',
        execution: 'executed',
        reasons: [],
        sourcePointers: ['/proof'],
      }],
      authorization: [{
        claimId: 'arsenic-mass-fraction',
        state: 'not_established',
        execution: 'not_run',
        reasons: ['authority evaluation is pending'],
        sourcePointers: [],
        routeWitnessIds: [],
      }],
      support: [],
      conformity: { requested: false, execution: 'not_run' },
      decision: 'not_established',
      limitations: ['I1 establishes artifact protection only.'],
    });

    expect(result.artifactVerification[0]?.state).toBe('established');
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.conformity).toEqual({ requested: false, execution: 'not_run' });
    expect(result.decision).toBe('not_established');
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.artifactVerification)).toBe(true);
  });

  it('does not allow not_run to establish or contradict a predicate', () => {
    expect(() => createRelianceResult({
      targetId: 'urn:uuid:rm-certificate-001',
      binding: { id: 'https://vc4qi.example/bindings/rm/1', version: '1' },
      profile: { id: 'https://vc4qi.example/profiles/rm/current-reliance/1', version: '1' },
      artifactVerification: [{
        artifactId: 'urn:uuid:rm-certificate-001',
        state: 'established',
        execution: 'not_run',
        reasons: [],
        sourcePointers: [],
      }],
      authorization: [],
      support: [],
      conformity: { requested: false, execution: 'not_run' },
      decision: 'not_established',
    })).toThrow(/not run must be not_established/);
  });

  it('rejects invalid runtime execution and decision values', () => {
    const base = {
      targetId: 'urn:uuid:rm-certificate-001',
      binding: { id: 'https://vc4qi.example/bindings/rm/1', version: '1' },
      profile: { id: 'https://vc4qi.example/profiles/rm/current-reliance/1', version: '1' },
      authorization: [],
      support: [],
      conformity: { requested: false as const, execution: 'not_run' as const },
    };
    expect(() => createRelianceResult({
      ...base,
      artifactVerification: [{
        artifactId: 'urn:uuid:rm-certificate-001',
        state: 'established',
        execution: 'invalid',
        reasons: [],
        sourcePointers: [],
      }],
      decision: 'not_established',
    } as unknown as Parameters<typeof createRelianceResult>[0])).toThrow(/execution state/);
    expect(() => createRelianceResult({
      ...base,
      artifactVerification: [],
      decision: 'invalid',
    } as unknown as Parameters<typeof createRelianceResult>[0])).toThrow(/reliance decision/);
  });
});
