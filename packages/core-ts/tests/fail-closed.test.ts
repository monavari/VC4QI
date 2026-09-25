// SPDX-License-Identifier: Apache-2.0
// TST-2: every gate fails closed when its dependency is absent.
//
// These assert on `trace.verified`, not merely on the presence of a trace entry.
// `summarizeTrace` computes the verdict from FAIL entries alone and ignores
// WARN, so a check that degrades to a warning is indistinguishable from a check
// that passed. Asserting the verdict is the only way to pin fail-closed
// behaviour (FC-7).
import { describe, expect, it } from 'vitest';
import { verifyCredentialGraph } from '../src/verifier/index.js';
import {
  codes,
  loadFixture,
  registryVerificationOptions,
} from './fixture-helpers.js';
import type { JsonObject } from '../src/types.js';

const FIXTURE = 'calibration-direct-accreditation';

function baseOptions(fixture: ReturnType<typeof loadFixture>) {
  return {
    skipProof: true,
    fetchDocument: async (uri: string) => {
      const document = fixture.documents.get(uri);
      if (!document) throw new Error(`Unknown fixture URI ${uri}`);
      return document;
    },
    resolveTrustRegistry: async () => fixture.trustRegistry as JsonObject,
  };
}

describe('fail-closed on absent trust infrastructure', () => {
  it('accepts the worked chain when everything is configured (control)', async () => {
    const fixture = loadFixture(FIXTURE);
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      ...baseOptions(fixture),
      ...registryVerificationOptions,
    });

    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('TRUSTED_ISSUER');
  });

  // FC-2
  it('rejects when no trust registry resolver is configured', async () => {
    const fixture = loadFixture(FIXTURE);
    const { resolveTrustRegistry: _omitted, ...withoutRegistry } = baseOptions(fixture);

    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      ...withoutRegistry,
      ...registryVerificationOptions,
    });

    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('TRUST_REGISTRY_NOT_AVAILABLE');
    // The issuer was never recognized, so no TRUSTED_ISSUER may appear.
    expect(codes(trace)).not.toContain('TRUSTED_ISSUER');
  });

  // FC-1 / SEC-1: the registry is a signed credential; without key resolution
  // its proof is never checked, so no entry may be read from it.
  it('rejects when no key resolver is configured to verify the registry', async () => {
    const fixture = loadFixture(FIXTURE);

    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      ...baseOptions(fixture),
      documentLoader: registryVerificationOptions.documentLoader,
    });

    expect(trace.verified).toBe(false);
    // SEC-8: "not performed" is reported distinctly from "performed and failed".
    expect(codes(trace)).toContain('TRUST_REGISTRY_KEY_RESOLVER_MISSING');
    expect(codes(trace)).not.toContain('TRUSTED_ISSUER');
  });

  // SEC-1: the whole point. A tampered registry must not confer trust.
  it('rejects when the trust registry has been tampered with', async () => {
    const fixture = loadFixture(FIXTURE);
    const tampered = structuredClone(fixture.trustRegistry) as JsonObject;
    const subject = tampered.credentialSubject as JsonObject;
    (subject.registryEntries as JsonObject[]).push({
      id: 'did:web:attacker.example',
      status: 'active',
      authorizationBasisKinds: ['accreditation'],
    });

    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      ...baseOptions(fixture),
      resolveTrustRegistry: async () => tampered,
      ...registryVerificationOptions,
    });

    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('TRUST_REGISTRY_PROOF_INVALID');
    expect(codes(trace)).not.toContain('TRUSTED_ISSUER');
  });

  // FC-1 at the credential gate: a proof-bearing graph with no key resolver.
  it('rejects a proof-bearing credential when no key resolver is configured', async () => {
    const fixture = loadFixture(FIXTURE);

    // skipProof omitted: the graph's own proofs must now be verified, and
    // cannot be, because no resolveKey is supplied.
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      fetchDocument: async (uri: string) => {
        const document = fixture.documents.get(uri);
        if (!document) throw new Error(`Unknown fixture URI ${uri}`);
        return document;
      },
      resolveTrustRegistry: async () => fixture.trustRegistry as JsonObject,
      documentLoader: registryVerificationOptions.documentLoader,
    });

    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('PROOF_RESOLVER_MISSING');
  });

  // FC-7: the verdict must be computable with every WARN discarded. If a WARN
  // is ever load-bearing, dropping WARNs would change an accept into a reject.
  it('keeps WARN non-load-bearing: the verdict ignores warnings', async () => {
    const fixture = loadFixture(FIXTURE);
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      ...baseOptions(fixture),
      ...registryVerificationOptions,
    });

    const failures = trace.results.filter(r => r.status === 'FAIL');
    expect(trace.verified).toBe(failures.length === 0);
  });
});
