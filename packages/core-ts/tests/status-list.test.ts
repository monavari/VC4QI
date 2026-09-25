// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import {
  decodeStatusList, encodeStatusList, evaluateStatus, MIN_STATUS_BITS, statusBit, StatusListError,
} from '../src/reliance/status-list.js';

const policy = { required: true, purposes: ['revocation'], maxAgeSeconds: 86_400 };
const issuer = 'https://producer.vc4qi.example/controller';
const listUri = 'https://producer.vc4qi.example/status/1';
const credential = (index = '3') => ({
  issuer,
  credentialStatus: {
    id: `${listUri}#${index}`, type: 'BitstringStatusListEntry', statusPurpose: 'revocation',
    statusListIndex: index, statusListCredential: listUri,
  },
});
const list = (bits: number[] = []) => {
  const bytes = new Uint8Array(MIN_STATUS_BITS / 8);
  for (const bit of bits) bytes[bit >> 3]! |= 1 << (7 - (bit & 7));
  return {
    id: listUri, issuer, validFrom: '2026-09-01T00:00:00Z',
    credentialSubject: { type: 'BitstringStatusList', statusPurpose: 'revocation', encodedList: encodeStatusList(bytes) },
  };
};
const NOW = '2026-09-01T12:00:00Z';

describe('Bitstring Status List encoding', () => {
  it('round-trips GZIP with the multibase "u" prefix, most significant bit first', () => {
    const bytes = new Uint8Array(MIN_STATUS_BITS / 8);
    bytes[0] = 0b1000_0001;
    const encoded = encodeStatusList(bytes);
    expect(encoded.startsWith('uH4sI')).toBe(true); // "u" + base64url of the GZIP magic bytes
    const decoded = decodeStatusList(encoded);
    expect([statusBit(decoded, 0), statusBit(decoded, 1), statusBit(decoded, 7)]).toEqual([true, false, true]);
  });

  it('refuses malformed, too-short and oversized lists', () => {
    expect(() => decodeStatusList('zNotBase64url')).toThrow(StatusListError);
    expect(() => decodeStatusList('uAAAA')).toThrowError(expect.objectContaining({ code: 'MALFORMED' }));
    expect(() => encodeStatusList(new Uint8Array(16))).toThrowError(expect.objectContaining({ code: 'TOO_SHORT' }));
    const big = encodeStatusList(new Uint8Array(64 * 1024));
    expect(() => decodeStatusList(big, 32 * 1024)).toThrowError(expect.objectContaining({ code: 'TOO_LARGE' }));
  });
});

describe('evaluateStatus', () => {
  it('distinguishes clear, revoked, unavailable, unprotected, unauthorized and stale', () => {
    expect(evaluateStatus(credential(), list(), 'established', policy, NOW).state).toBe('established');
    expect(evaluateStatus(credential(), list([3]), 'established', policy, NOW).state).toBe('contradicted');
    expect(evaluateStatus(credential(), undefined, 'not_established', policy, NOW).reason).toMatch(/unavailable/);
    expect(evaluateStatus(credential(), list([3]), 'contradicted', policy, NOW).state).toBe('not_established');
    expect(evaluateStatus(credential(), { ...list(), issuer: 'https://lab.vc4qi.example/controller' }, 'established', policy, NOW).state)
      .toBe('not_established');
    expect(evaluateStatus(credential(), list(), 'established', policy, '2026-09-03T00:00:00Z').reason).toMatch(/freshness/);
  });

  it('P10: missing status follows the profile rule without weakening a profile that requires it', () => {
    const { credentialStatus: _omit, ...unlisted } = credential();
    expect(evaluateStatus(unlisted, undefined, 'not_established', policy, NOW).state).toBe('not_established');
    expect(evaluateStatus(unlisted, undefined, 'not_established', { ...policy, required: false }, NOW).state).toBe('established');
  });

  it('rejects unsupported purposes and malformed or out-of-range indexes as not established', () => {
    expect(evaluateStatus({ ...credential(), credentialStatus: { ...credential().credentialStatus, statusPurpose: 'suspension' } },
      list(), 'established', policy, NOW).state).toBe('not_established');
    expect(evaluateStatus(credential('03'), list(), 'established', policy, NOW).state).toBe('not_established');
    expect(evaluateStatus(credential(String(MIN_STATUS_BITS)), list(), 'established', policy, NOW).reason)
      .toMatch(/outside the list/);
  });
});
