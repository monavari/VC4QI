// SPDX-License-Identifier: Apache-2.0
// Base58btc codec for multibase encoding (prefix 'z').
// Base58btc alphabet: 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const BASE = BigInt(58);

export function encode(bytes: Uint8Array): string {
  if (bytes.length === 0) return '';

  // Count leading zero bytes
  let leadingZeros = 0;
  for (const byte of bytes) {
    if (byte !== 0) break;
    leadingZeros++;
  }

  // Convert bytes to BigInt
  let n = 0n;
  for (const byte of bytes) {
    n = n * 256n + BigInt(byte);
  }

  // Convert to base58
  const digits: number[] = [];
  while (n > 0n) {
    const remainder = Number(n % BASE);
    n = n / BASE;
    digits.unshift(remainder);
  }

  return '1'.repeat(leadingZeros) + digits.map(d => ALPHABET[d]).join('');
}

export function decode(str: string): Uint8Array {
  if (str.length === 0) return new Uint8Array(0);

  // Count leading '1' characters (map to zero bytes)
  let leadingZeros = 0;
  for (const ch of str) {
    if (ch !== '1') break;
    leadingZeros++;
  }

  // Convert base58 string to BigInt
  let n = 0n;
  for (const ch of str) {
    const idx = ALPHABET.indexOf(ch);
    if (idx === -1) throw new Error(`Invalid base58btc character: '${ch}'`);
    n = n * BASE + BigInt(idx);
  }

  // Convert BigInt to bytes
  const hex = n === 0n ? '' : n.toString(16).padStart(n.toString(16).length + (n.toString(16).length % 2), '0');
  const body = hex ? Buffer.from(hex, 'hex') : Buffer.alloc(0);

  const result = new Uint8Array(leadingZeros + body.length);
  result.set(body, leadingZeros);
  return result;
}

/** Encode bytes as multibase base58btc (prefix 'z') */
export function toMultibase(bytes: Uint8Array): string {
  return 'z' + encode(bytes);
}

/** Decode a multibase base58btc string (must start with 'z') */
export function fromMultibase(multibase: string): Uint8Array {
  if (!multibase.startsWith('z')) {
    throw new Error(`Expected multibase base58btc prefix 'z', got '${multibase[0]}'`);
  }
  return decode(multibase.slice(1));
}
