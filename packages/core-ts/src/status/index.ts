// SPDX-License-Identifier: Apache-2.0
// Bitstring Status List v1.0 implementation.
// Spec: https://www.w3.org/TR/vc-bitstring-status-list/
import { deflateSync, inflateSync } from 'node:zlib';
import type { BitstringStatusListEntry, JsonObject } from '../types.js';

/** Minimum bitstring length per W3C spec (131,072 bits = 16 KB) */
export const MIN_BITSTRING_LENGTH = 131_072;

/**
 * Create a new zeroed bitstring of the given bit length.
 * Length must be a multiple of 8.
 */
export function createBitstring(bitLength = MIN_BITSTRING_LENGTH): Uint8Array {
  if (bitLength % 8 !== 0) throw new Error('bitLength must be a multiple of 8');
  return new Uint8Array(bitLength / 8);
}

/**
 * Set a single bit in the bitstring.
 * @param bits   The bitstring byte array (mutated in place)
 * @param index  Zero-based bit index
 * @param value  true = 1 (revoked/suspended), false = 0 (valid)
 */
export function setBit(bits: Uint8Array, index: number, value: boolean): void {
  const byteIndex = Math.floor(index / 8);
  const bitOffset = 7 - (index % 8); // MSB first per spec §2.1
  if (byteIndex >= bits.length) throw new RangeError(`Bit index ${index} out of range`);
  if (value) {
    bits[byteIndex]! |= 1 << bitOffset;
  } else {
    bits[byteIndex]! &= ~(1 << bitOffset);
  }
}

/**
 * Read a single bit from the bitstring.
 * Returns true if the bit is 1 (credential is revoked/suspended).
 */
export function getBit(bits: Uint8Array, index: number): boolean {
  const byteIndex = Math.floor(index / 8);
  const bitOffset = 7 - (index % 8); // MSB first per spec §2.1
  if (byteIndex >= bits.length) throw new RangeError(`Bit index ${index} out of range`);
  return ((bits[byteIndex]! >> bitOffset) & 1) === 1;
}

/**
 * Encode a bitstring for use in a BitstringStatusListCredential.
 * Algorithm per spec §2.3: GZIP compress, then base64url encode.
 */
export function encodeBitstring(bits: Uint8Array): string {
  const compressed = deflateSync(bits, { level: 9 });
  return Buffer.from(compressed).toString('base64url');
}

/**
 * Decode a BitstringStatusListCredential bitstring.
 */
export function decodeBitstring(encoded: string): Uint8Array {
  const compressed = Buffer.from(encoded, 'base64url');
  return new Uint8Array(inflateSync(compressed));
}

/**
 * Check whether a credential is revoked or suspended.
 *
 * @param credentialStatus  The `credentialStatus` object from the credential
 * @param statusListCredential  The BitstringStatusListCredential (already fetched)
 * @returns true if the status bit is SET (credential is revoked/suspended)
 */
export function checkStatusBit(
  credentialStatus: BitstringStatusListEntry,
  statusListCredential: JsonObject,
): boolean {
  const subject = statusListCredential.credentialSubject as JsonObject | undefined;
  if (!subject) throw new Error('BitstringStatusListCredential missing credentialSubject');

  const encodedList = subject.encodedList as string | undefined;
  if (!encodedList) throw new Error('BitstringStatusListCredential missing encodedList');

  const bits = decodeBitstring(encodedList);
  const index = parseInt(credentialStatus.statusListIndex, 10);
  return getBit(bits, index);
}

/**
 * Build a minimal BitstringStatusListCredential for use in tests.
 * @param issuer  DID of the issuer
 * @param listId  URL of this status list
 * @param bits    The bitstring to encode (default: zeroed MIN_BITSTRING_LENGTH bits)
 */
export function buildStatusListCredential(
  issuer: string,
  listId: string,
  bits: Uint8Array = createBitstring(),
): JsonObject {
  return {
    '@context': [
      'https://www.w3.org/ns/credentials/v2',
      'https://www.w3.org/ns/credentials/v2#BitstringStatusList',
    ],
    type: ['VerifiableCredential', 'BitstringStatusListCredential'],
    id: listId,
    issuer,
    validFrom: new Date().toISOString(),
    credentialSubject: {
      id: `${listId}#list`,
      type: 'BitstringStatusList',
      statusPurpose: 'revocation',
      encodedList: encodeBitstring(bits),
    },
  };
}
