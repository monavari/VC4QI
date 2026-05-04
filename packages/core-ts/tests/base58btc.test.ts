// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from 'vitest';
import { encode, decode, toMultibase, fromMultibase } from '../src/utils/base58btc.js';

describe('base58btc', () => {
  it('encodes empty bytes to empty string', () => {
    expect(encode(new Uint8Array(0))).toBe('');
  });

  it('decodes empty string to empty bytes', () => {
    expect(decode('')).toEqual(new Uint8Array(0));
  });

  it('round-trips known bytes', () => {
    const bytes = new Uint8Array([0, 1, 2, 3, 255, 254]);
    expect(decode(encode(bytes))).toEqual(bytes);
  });

  it('encodes leading-zero bytes as leading 1s', () => {
    const bytes = new Uint8Array([0, 0, 1]);
    const encoded = encode(bytes);
    expect(encoded.startsWith('11')).toBe(true);
  });

  it('round-trips 32 random-looking bytes', () => {
    const bytes = new Uint8Array(32).map((_, i) => (i * 37 + 13) % 256);
    expect(decode(encode(bytes))).toEqual(bytes);
  });

  it('toMultibase prepends z', () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const mb = toMultibase(bytes);
    expect(mb.startsWith('z')).toBe(true);
  });

  it('fromMultibase strips z and decodes', () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const mb = toMultibase(bytes);
    expect(fromMultibase(mb)).toEqual(bytes);
  });

  it('fromMultibase throws on wrong prefix', () => {
    expect(() => fromMultibase('m' + encode(new Uint8Array([1])))).toThrow();
  });

  it('decode throws on invalid character', () => {
    expect(() => decode('0invalid')).toThrow('Invalid base58btc character');
  });
});
