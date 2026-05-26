// SPDX-License-Identifier: Apache-2.0
import { createHash } from 'node:crypto';
import { toMultibase } from '../utils/base58btc.js';
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { CredentialEvidenceReference } from './types.js';

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  const object = value as Record<string, unknown>;
  const entries = Object.keys(object)
    .sort()
    .map(key => `${JSON.stringify(key)}:${stableStringify(object[key])}`);
  return `{${entries.join(',')}}`;
}

export function unsecuredDocument(document: JsonObject): JsonObject {
  const { proof: _proof, ...unsecured } = document;
  return unsecured;
}

export function computeDigestSRI(
  document: JsonObject,
  algorithm: 'sha256' | 'sha384' | 'sha512' = 'sha384',
): string {
  const digest = createHash(algorithm).update(stableStringify(unsecuredDocument(document))).digest('base64');
  return `${algorithm}-${digest}`;
}

export function computeDigestMultibase(document: JsonObject): string {
  const digest = createHash('sha256').update(stableStringify(unsecuredDocument(document))).digest();
  return toMultibase(digest);
}

export interface VerifyDigestOptions {
  requireDigest?: boolean | undefined;
  from: string;
  to: string;
  relation: string;
}

export function verifyDigest(
  evidence: CredentialEvidenceReference,
  referenced: JsonObject,
  options: VerifyDigestOptions,
): TraceEntry {
  if (!evidence.digestMultibase && !evidence.digestSRI) {
    return traceEntry({
      id: `digest-${options.from}-to-${options.to}`,
      level: 'edge',
      from: options.from,
      to: options.to,
      relation: options.relation,
      status: options.requireDigest ? 'FAIL' : 'WARN',
      code: options.requireDigest ? 'DIGEST_REQUIRED' : 'DIGEST_MISSING',
      detail: options.requireDigest
        ? 'Policy requires digestMultibase or digestSRI on evidence reference.'
        : 'Evidence reference has no digestMultibase or digestSRI.',
    });
  }

  if (evidence.digestMultibase) {
    const expected = computeDigestMultibase(referenced);
    if (expected !== evidence.digestMultibase) {
      return traceEntry({
        id: `digest-${options.from}-to-${options.to}`,
        level: 'edge',
        from: options.from,
        to: options.to,
        relation: options.relation,
        status: 'FAIL',
        code: 'DIGEST_MISMATCH',
        detail: 'digestMultibase does not match referenced evidence.',
      });
    }
  }

  if (evidence.digestSRI) {
    const algorithm = evidence.digestSRI.startsWith('sha256-')
      ? 'sha256'
      : evidence.digestSRI.startsWith('sha512-')
        ? 'sha512'
        : 'sha384';
    const expected = computeDigestSRI(referenced, algorithm);
    if (expected !== evidence.digestSRI) {
      return traceEntry({
        id: `digest-${options.from}-to-${options.to}`,
        level: 'edge',
        from: options.from,
        to: options.to,
        relation: options.relation,
        status: 'FAIL',
        code: 'DIGEST_MISMATCH',
        detail: 'digestSRI does not match referenced evidence.',
      });
    }
  }

  return traceEntry({
    id: `digest-${options.from}-to-${options.to}`,
    level: 'edge',
    from: options.from,
    to: options.to,
    relation: options.relation,
    status: 'PASS',
    code: 'DIGEST_VALID',
    detail: 'Evidence digest matches referenced evidence.',
  });
}
