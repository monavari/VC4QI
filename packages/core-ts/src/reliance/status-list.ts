// SPDX-License-Identifier: Apache-2.0
// Credential status for the experimental RM v1 binding, per W3C Bitstring Status
// List v1.0: `encodedList` is the multibase base64url (prefix "u", no padding)
// encoding of the GZIP-compressed bitstring; bit 0 is the most significant bit of
// the first byte. Decompression is bounded. The status list is itself a protected
// artifact and counts only when signed by the target credential's own issuer.
// Node-only (zlib); not exported from the browser-reachable barrel.
import { gunzipSync, gzipSync } from 'node:zlib';
import type { SemanticState } from './types.js';

/** Minimum bitstring length in bits (Bitstring Status List v1.0). */
export const MIN_STATUS_BITS = 131_072;
/** Upper bound for a decompressed list (16 Mbit), so a small list cannot inflate unboundedly. */
export const MAX_STATUS_BYTES = 2 * 1024 * 1024;

export class StatusListError extends Error {
  constructor(public readonly code: 'MALFORMED' | 'TOO_LARGE' | 'TOO_SHORT', message: string) {
    super(message);
    this.name = 'StatusListError';
  }
}

/** Encode a bitstring as a Bitstring Status List `encodedList` value. */
export function encodeStatusList(bits: Uint8Array): string {
  if (bits.byteLength * 8 < MIN_STATUS_BITS) {
    throw new StatusListError('TOO_SHORT', `A status list needs at least ${MIN_STATUS_BITS} bits.`);
  }
  // Fixed header fields (mtime 0) keep the output deterministic.
  return `u${Buffer.from(gzipSync(bits, { level: 9 })).toString('base64url')}`;
}

/** Decode an `encodedList` value with bounded decompression. */
export function decodeStatusList(encoded: unknown, maxBytes = MAX_STATUS_BYTES): Uint8Array {
  if (typeof encoded !== 'string' || !/^u[A-Za-z0-9_-]+$/.test(encoded)) {
    throw new StatusListError('MALFORMED', 'encodedList must be multibase base64url (prefix "u").');
  }
  let bits: Buffer;
  try {
    bits = gunzipSync(Buffer.from(encoded.slice(1), 'base64url'), { maxOutputLength: maxBytes });
  } catch (error) {
    const code = (error as { code?: string }).code;
    if (code === 'ERR_BUFFER_TOO_LARGE' || /maxOutputLength|buffer/i.test(String(error))) {
      throw new StatusListError('TOO_LARGE', `Decompressed status list exceeds ${maxBytes} bytes.`);
    }
    throw new StatusListError('MALFORMED', 'encodedList is not valid GZIP data.');
  }
  if (bits.byteLength * 8 < MIN_STATUS_BITS) {
    throw new StatusListError('TOO_SHORT', `Status list has fewer than ${MIN_STATUS_BITS} bits.`);
  }
  return new Uint8Array(bits);
}

/** Read bit `index` (most significant bit first). */
export function statusBit(bits: Uint8Array, index: number): boolean {
  const byte = bits[Math.floor(index / 8)];
  if (byte === undefined) throw new RangeError(`Status index ${index} is outside the list.`);
  return ((byte >> (7 - (index % 8))) & 1) === 1;
}

/** Verifier-owned status rules taken from the reliance profile. */
export interface StatusPolicy {
  readonly required: boolean;
  readonly purposes: readonly string[];
  readonly maxAgeSeconds: number;
}

export interface StatusOutcome {
  readonly state: SemanticState;
  readonly reason: string;
  readonly listUri?: string;
  readonly sources: readonly string[];
}

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Evaluate the target's `credentialStatus` against an already verified status-list
 * credential. `list` is undefined when the list could not be resolved; `listProtected`
 * reports whether the list's own protection and validity were established.
 * Unavailable, unauthorized or stale status is not_established; an applicable set bit
 * is contradicted.
 */
export function evaluateStatus(
  credential: Record<string, unknown>,
  list: Record<string, unknown> | undefined,
  listProtected: SemanticState,
  policy: StatusPolicy,
  evaluationTime: string,
): StatusOutcome {
  const entry = credential.credentialStatus;
  if (entry === undefined) {
    return policy.required
      ? { state: 'not_established', reason: 'Status is required by the profile but the credential names none.', sources: [] }
      : { state: 'established', reason: 'The profile does not require status for this credential.', sources: [] };
  }
  if (!isObject(entry) || entry.type !== 'BitstringStatusListEntry' ||
      typeof entry.statusListCredential !== 'string' || typeof entry.statusListIndex !== 'string') {
    return { state: 'not_established', reason: 'Unsupported credentialStatus form.', sources: ['/credentialStatus'] };
  }
  const listUri = entry.statusListCredential;
  const sources = ['/credentialStatus', listUri];
  if (!policy.purposes.includes(String(entry.statusPurpose))) {
    return { state: 'not_established', reason: `Status purpose ${String(entry.statusPurpose)} is not accepted by the profile.`, listUri, sources };
  }
  if (list === undefined) {
    return { state: 'not_established', reason: `Status list ${listUri} is unavailable.`, listUri, sources };
  }
  if (listProtected !== 'established') {
    return { state: 'not_established', reason: `Status list ${listUri} is not protected and valid.`, listUri, sources };
  }
  if (list.id !== listUri) {
    return { state: 'not_established', reason: `Resolved status list identifies itself as ${String(list.id)}.`, listUri, sources };
  }
  if (list.issuer !== credential.issuer) {
    return { state: 'not_established', reason: `Status list is signed by ${String(list.issuer)}, who may not state status for credentials of ${String(credential.issuer)}.`, listUri, sources };
  }
  const subject = list.credentialSubject;
  if (!isObject(subject) || subject.type !== 'BitstringStatusList' || subject.statusPurpose !== entry.statusPurpose) {
    return { state: 'not_established', reason: 'Status list purpose does not match the entry.', listUri, sources };
  }
  const at = Date.parse(evaluationTime), issued = Date.parse(String(list.validFrom));
  if (!Number.isFinite(at) || !Number.isFinite(issued) || (at - issued) / 1000 > policy.maxAgeSeconds) {
    return { state: 'not_established', reason: `Status list is older than the profile's ${policy.maxAgeSeconds} s freshness limit.`, listUri, sources };
  }
  if (!/^(0|[1-9][0-9]*)$/.test(entry.statusListIndex)) {
    return { state: 'not_established', reason: 'statusListIndex is not a non-negative integer.', listUri, sources };
  }
  let revoked: boolean;
  try {
    revoked = statusBit(decodeStatusList(subject.encodedList), Number(entry.statusListIndex));
  } catch (error) {
    return { state: 'not_established', reason: `Status list cannot be read: ${(error as Error).message}`, listUri, sources };
  }
  return revoked
    ? { state: 'contradicted', reason: `Revoked: bit ${entry.statusListIndex} of ${listUri} is set.`, listUri, sources }
    : { state: 'established', reason: `Not revoked: bit ${entry.statusListIndex} of ${listUri} is clear.`, listUri, sources };
}
