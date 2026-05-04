// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from 'vitest';
import {
  createBitstring,
  setBit,
  getBit,
  encodeBitstring,
  decodeBitstring,
  checkStatusBit,
  buildStatusListCredential,
  MIN_BITSTRING_LENGTH,
} from '../src/status/index.js';

describe('createBitstring', () => {
  it('creates a zero-filled bitstring of default length', () => {
    const bits = createBitstring();
    expect(bits.length).toBe(MIN_BITSTRING_LENGTH / 8);
    expect(bits.every(b => b === 0)).toBe(true);
  });

  it('creates a custom-length bitstring', () => {
    const bits = createBitstring(256);
    expect(bits.length).toBe(32);
  });

  it('throws if bitLength is not a multiple of 8', () => {
    expect(() => createBitstring(7)).toThrow('multiple of 8');
  });
});

describe('setBit / getBit', () => {
  it('sets and gets a bit at index 0', () => {
    const bits = createBitstring(64);
    expect(getBit(bits, 0)).toBe(false);
    setBit(bits, 0, true);
    expect(getBit(bits, 0)).toBe(true);
  });

  it('sets and gets a bit at index 7', () => {
    const bits = createBitstring(64);
    setBit(bits, 7, true);
    expect(getBit(bits, 7)).toBe(true);
    expect(getBit(bits, 6)).toBe(false);
  });

  it('sets bit at index 8 (second byte)', () => {
    const bits = createBitstring(64);
    setBit(bits, 8, true);
    expect(getBit(bits, 8)).toBe(true);
    expect(getBit(bits, 0)).toBe(false);
  });

  it('clears a bit with value=false', () => {
    const bits = createBitstring(64);
    setBit(bits, 3, true);
    expect(getBit(bits, 3)).toBe(true);
    setBit(bits, 3, false);
    expect(getBit(bits, 3)).toBe(false);
  });

  it('throws on out-of-range index', () => {
    const bits = createBitstring(64);
    expect(() => getBit(bits, 64)).toThrow(RangeError);
    expect(() => setBit(bits, 64, true)).toThrow(RangeError);
  });
});

describe('encodeBitstring / decodeBitstring', () => {
  it('round-trips an all-zero bitstring', () => {
    const bits = createBitstring(256);
    const encoded = encodeBitstring(bits);
    expect(typeof encoded).toBe('string');
    const decoded = decodeBitstring(encoded);
    expect(decoded).toEqual(bits);
  });

  it('round-trips a bitstring with some bits set', () => {
    const bits = createBitstring(256);
    setBit(bits, 0, true);
    setBit(bits, 42, true);
    setBit(bits, 255, true);
    const decoded = decodeBitstring(encodeBitstring(bits));
    expect(getBit(decoded, 0)).toBe(true);
    expect(getBit(decoded, 42)).toBe(true);
    expect(getBit(decoded, 255)).toBe(true);
    expect(getBit(decoded, 1)).toBe(false);
  });
});

describe('buildStatusListCredential + checkStatusBit', () => {
  it('returns false for a fresh (all-zero) status list', () => {
    const bits = createBitstring();
    const listCred = buildStatusListCredential('did:web:issuer.example', 'https://example.com/status/1', bits);
    const entry = {
      id: 'https://example.com/status/1#0',
      type: 'BitstringStatusListEntry' as const,
      statusPurpose: 'revocation' as const,
      statusListIndex: '0',
      statusListCredential: 'https://example.com/status/1',
    };
    expect(checkStatusBit(entry, listCred)).toBe(false);
  });

  it('returns true for a revoked credential', () => {
    const bits = createBitstring();
    setBit(bits, 5, true);
    const listCred = buildStatusListCredential('did:web:issuer.example', 'https://example.com/status/1', bits);
    const entry = {
      id: 'https://example.com/status/1#5',
      type: 'BitstringStatusListEntry' as const,
      statusPurpose: 'revocation' as const,
      statusListIndex: '5',
      statusListCredential: 'https://example.com/status/1',
    };
    expect(checkStatusBit(entry, listCred)).toBe(true);
  });

  it('throws if credentialSubject is missing', () => {
    expect(() => checkStatusBit(
      {
        id: 'x',
        type: 'BitstringStatusListEntry',
        statusPurpose: 'revocation',
        statusListIndex: '0',
        statusListCredential: 'https://x.example',
      },
      { id: 'https://x.example' }, // no credentialSubject
    )).toThrow('missing credentialSubject');
  });
});
