// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { buildStatusListCredential, createBitstring, setBit } from '../src/status/index.js';
import { codes, loadFixture, verifyFixture } from './fixture-helpers.js';
import { verifyCredentialGraph } from '../src/verifier/index.js';
import type { JsonObject } from '../src/types.js';

describe('edge evaluation', () => {
  it('fails digestSRI mismatch', async () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const evidence = fixture.target.evidence as JsonObject[];
    evidence[0]!.digestSRI = 'sha384-bad';
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('DIGEST_MISMATCH');
  });

  it('fails digestMultibase mismatch', async () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const evidence = fixture.target.evidence as JsonObject[];
    delete evidence[0]!.digestSRI;
    evidence[0]!.digestMultibase = 'zBadDigest';
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('DIGEST_MISMATCH');
  });

  it('fails revoked evidence node', async () => {
    const fixture = loadFixture('calibration-direct-accreditation');
    const acc = fixture.documents.get('urn:uuid:accreditation-direct-001')!;
    const listId = 'urn:uuid:status-list-revoked';
    acc.credentialStatus = {
      id: `${listId}#0`,
      type: 'BitstringStatusListEntry',
      statusPurpose: 'revocation',
      statusListIndex: '0',
      statusListCredential: listId,
    };
    const bits = createBitstring();
    setBit(bits, 0, true);
    const statusList = buildStatusListCredential('did:web:status.example', listId, bits);
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveStatusList: async () => statusList,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('CREDENTIAL_REVOKED');
  });

  it('fails suspended authorizing evidence', async () => {
    const fixture = loadFixture('calibration-capability');
    const cap = fixture.documents.get('urn:uuid:capability-001')!;
    const listId = 'urn:uuid:status-list-suspended';
    cap.credentialStatus = {
      id: `${listId}#0`,
      type: 'BitstringStatusListEntry',
      statusPurpose: 'suspension',
      statusListIndex: '0',
      statusListCredential: listId,
    };
    const bits = createBitstring();
    setBit(bits, 0, true);
    const statusList = buildStatusListCredential('did:web:status.example', listId, bits);
    const trace = await verifyCredentialGraph(fixture.target, fixture.policy, {
      skipProof: true,
      fetchDocument: async uri => fixture.documents.get(uri)!,
      resolveStatusList: async () => statusList,
      resolveTrustRegistry: async () => fixture.trustRegistry,
    });
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('CREDENTIAL_SUSPENDED');
  });

  it('passes GS certificate with independent scheme authorization and accreditation', async () => {
    const trace = await verifyFixture('gs-scheme-authorization');
    expect(trace.verified).toBe(true);
  });
});
