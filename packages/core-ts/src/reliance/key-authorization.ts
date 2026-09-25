// SPDX-License-Identifier: Apache-2.0
// Verification-method authorization for the experimental RM v1 binding.
//
// A valid signature proves possession of a key; it does not show that the key may
// speak for the credential issuer. Before a proof counts, the named verification
// method must be listed in the issuer's own controller document, be controlled by
// the issuer, carry an Ed25519 Multikey, and be referenced from assertionMethod.
// Controller documents come only from the isolated static catalog and are processed
// as plain JSON (W3C Controlled Identifiers 1.0 permits JSON processing).
import { fromMultibase } from '../utils/base58btc.js';
import { CatalogError, type CatalogSession } from './catalog.js';
import type { SemanticState } from './types.js';

export type KeyAuthorizationCode =
  | 'AUTHORIZED'
  | 'ISSUER_MISSING'
  | 'MALFORMED_METHOD'
  | 'NOT_ISSUER_CONTROLLER'
  | 'CONTROLLER_NOT_INSTALLED'
  | 'INVALID_CONTROLLER_DOCUMENT'
  | 'CONTROLLER_ID_MISMATCH'
  | 'METHOD_NOT_FOUND'
  | 'METHOD_AMBIGUOUS'
  | 'METHOD_TYPE_UNSUPPORTED'
  | 'METHOD_CONTROLLER_MISMATCH'
  | 'METHOD_LIFECYCLE_UNSUPPORTED'
  | 'INVALID_PUBLIC_KEY'
  | 'EMBEDDED_METHOD_UNSUPPORTED'
  | 'NOT_ASSERTION_METHOD';

export interface KeyAuthorization {
  readonly state: SemanticState;
  readonly code: KeyAuthorizationCode;
  readonly reason: string;
  /** Raw 32-byte Ed25519 public key; present only when state is established. */
  readonly publicKey?: Uint8Array;
  readonly verificationMethod?: string;
  readonly controllerDocumentDigest?: string;
}

const ED25519_MULTICODEC = [0xed, 0x01] as const;
const LIFECYCLE_FIELDS = ['revoked', 'expires'] as const;

function outcome(
  state: SemanticState, code: KeyAuthorizationCode, reason: string,
  extra: Partial<KeyAuthorization> = {},
): KeyAuthorization {
  return Object.freeze({ state, code, reason, ...extra });
}

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** Issuer identifier from a VCDM `issuer` value (string or object with string id). */
export function issuerIdentifier(issuer: unknown): string | undefined {
  if (typeof issuer === 'string' && issuer.length > 0) return issuer;
  if (isObject(issuer) && typeof issuer.id === 'string' && issuer.id.length > 0) return issuer.id;
  return undefined;
}

/** Split an absolute verification-method URL into its controller document URL. */
function controllerOf(method: string): string | undefined {
  const hash = method.indexOf('#');
  if (hash <= 0 || hash === method.length - 1) return undefined;
  try {
    const url = new URL(method);
    if (url.protocol !== 'https:' && url.protocol !== 'did:') return undefined;
  } catch {
    return undefined;
  }
  return method.slice(0, hash);
}

function decodeEd25519Multikey(value: unknown): Uint8Array | undefined {
  if (typeof value !== 'string' || !value.startsWith('z')) return undefined;
  let bytes: Uint8Array;
  try {
    bytes = fromMultibase(value);
  } catch {
    return undefined;
  }
  if (bytes.length !== 34 || bytes[0] !== ED25519_MULTICODEC[0] || bytes[1] !== ED25519_MULTICODEC[1]) {
    return undefined;
  }
  return bytes.slice(2);
}

/**
 * Decide whether `verificationMethod` may produce assertion proofs for `issuer`.
 * Missing or unsupported inputs are `not_established`; evidence that the key is not
 * the issuer's assertion key is `contradicted`. Never throws for untrusted input.
 */
export function authorizeAssertionMethod(
  issuer: unknown, verificationMethod: unknown, session: CatalogSession,
): KeyAuthorization {
  const issuerId = issuerIdentifier(issuer);
  if (issuerId === undefined) {
    return outcome('not_established', 'ISSUER_MISSING', 'The credential has no issuer identifier.');
  }
  if (typeof verificationMethod !== 'string') {
    return outcome('contradicted', 'MALFORMED_METHOD', 'The proof names no verification method.');
  }
  const controller = controllerOf(verificationMethod);
  if (controller === undefined) {
    return outcome('contradicted', 'MALFORMED_METHOD',
      `Verification method ${verificationMethod} is not an absolute URL with a fragment.`);
  }
  if (controller !== issuerId) {
    return outcome('contradicted', 'NOT_ISSUER_CONTROLLER',
      `Verification method ${verificationMethod} is not in issuer ${issuerId}'s controller document.`);
  }

  let document: unknown;
  let digest: string;
  try {
    const resource = session.resolve(controller);
    digest = resource.digestSRI;
    document = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(resource.bytes));
  } catch (error) {
    if (error instanceof CatalogError) {
      return outcome('not_established', 'CONTROLLER_NOT_INSTALLED',
        `Controller document ${controller} is not available: ${error.code}.`);
    }
    return outcome('not_established', 'INVALID_CONTROLLER_DOCUMENT',
      `Controller document ${controller} is not valid UTF-8 JSON.`);
  }
  if (!isObject(document)) {
    return outcome('not_established', 'INVALID_CONTROLLER_DOCUMENT',
      `Controller document ${controller} is not a JSON object.`);
  }
  if (document.id !== controller) {
    return outcome('contradicted', 'CONTROLLER_ID_MISMATCH',
      `Controller document at ${controller} identifies itself as ${String(document.id)}.`);
  }

  const methods = Array.isArray(document.verificationMethod) ? document.verificationMethod : [];
  const matches = methods.filter(entry => isObject(entry) && entry.id === verificationMethod);
  if (matches.length === 0) {
    return outcome('contradicted', 'METHOD_NOT_FOUND',
      `${verificationMethod} is not listed in its controller document.`);
  }
  if (matches.length > 1) {
    return outcome('contradicted', 'METHOD_AMBIGUOUS',
      `${verificationMethod} is listed more than once in its controller document.`);
  }
  const method = matches[0] as Record<string, unknown>;
  if (method.type !== 'Multikey') {
    return outcome('not_established', 'METHOD_TYPE_UNSUPPORTED',
      `Verification method type ${String(method.type)} is not supported; Multikey is required.`);
  }
  if (method.controller !== controller) {
    return outcome('contradicted', 'METHOD_CONTROLLER_MISMATCH',
      `${verificationMethod} is controlled by ${String(method.controller)}, not ${controller}.`);
  }
  if (LIFECYCLE_FIELDS.some(field => Object.hasOwn(method, field))) {
    return outcome('not_established', 'METHOD_LIFECYCLE_UNSUPPORTED',
      'Key revocation/expiry metadata is not supported in the initial slice.');
  }
  const publicKey = decodeEd25519Multikey(method.publicKeyMultibase);
  if (publicKey === undefined) {
    return outcome('contradicted', 'INVALID_PUBLIC_KEY',
      `${verificationMethod} does not carry an Ed25519 Multikey public key.`);
  }

  const assertion = Array.isArray(document.assertionMethod) ? document.assertionMethod : [];
  if (assertion.includes(verificationMethod)) {
    return outcome('established', 'AUTHORIZED',
      `${verificationMethod} is the issuer's Ed25519 assertion key.`,
      { publicKey, verificationMethod, controllerDocumentDigest: digest });
  }
  if (assertion.some(entry => isObject(entry) && entry.id === verificationMethod)) {
    return outcome('not_established', 'EMBEDDED_METHOD_UNSUPPORTED',
      'Embedded assertionMethod entries are not supported; a reference is required.');
  }
  return outcome('contradicted', 'NOT_ASSERTION_METHOD',
    `${verificationMethod} is not authorized for assertionMethod.`);
}
