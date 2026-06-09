// SPDX-License-Identifier: Apache-2.0
// ecdsa-sd-2023 selective-disclosure Data Integrity proofs.
//
// Spec: https://www.w3.org/TR/vc-di-ecdsa/#ecdsa-sd-2023
//
// This module is the ONLY place in the project that uses an external VC library
// (the three Digital Bazaar SD packages + jsonld-signatures, its required driver).
// It sits ALONGSIDE the hand-rolled eddsa-rdfc-2022 implementation in ./index.ts
// and never replaces it. See RECONCILIATION_TASK.md §10 (Phase 6) and decisions
// D-SD-1..D-SD-5 in RECONCILIATION_REPORT.md.
//
// Three operations, matching the SD lifecycle:
//   issueSd   — the issuer signs, committing to ALL fields and to a set of
//               mandatory (always-disclosed) pointers (a "base" SD proof).
//   deriveSd  — the holder produces a disclosed subset, revealing the mandatory
//               fields plus any chosen selective pointers (a "derived" proof).
//   verifySd  — a verifier checks the derived credential over its disclosed subset.
import {
  createSignCryptosuite,
  createDiscloseCryptosuite,
  createVerifyCryptosuite,
} from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
import { DataIntegrityProof } from '@digitalbazaar/data-integrity';
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import jsigs from 'jsonld-signatures';
import type { DocumentLoader, EcdsaMultikeyPair, JsonObject } from '../types.js';

const { purposes } = jsigs;

/** JSON Pointer (RFC 6901) into the credential, e.g. `/credentialSubject/value`. */
export type JsonPointer = string;

/**
 * Generate a fresh ECDSA P-256 multikey for the ecdsa-sd-2023 issuer.
 *
 * This key is DISTINCT from the Ed25519 key used by eddsa-rdfc-2022 (D-SD-3):
 * SD requires ECDSA, so an issuer that wants both paths holds both keys under
 * different verification-method ids (e.g. `…#key-1` Ed25519, `…#key-2` P-256).
 */
export async function generateSdKey(opts: {
  id: string;
  controller: string;
}): Promise<EcdsaMultikeyPair> {
  const kp = await EcdsaMultikey.generate({
    curve: 'P-256',
    id: opts.id,
    controller: opts.controller,
  });
  const exported = await kp.export({ publicKey: true, secretKey: true });
  const pair: EcdsaMultikeyPair = {
    id: exported.id,
    controller: exported.controller,
    type: 'Multikey',
    publicKeyMultibase: exported.publicKeyMultibase,
  };
  if (exported.secretKeyMultibase !== undefined) {
    pair.secretKeyMultibase = exported.secretKeyMultibase;
  }
  return pair;
}

/**
 * Issue an ecdsa-sd-2023 base proof over `credential`.
 *
 * The issuer commits to every field; `mandatoryPointers` marks the fields that
 * MUST always be present in any later disclosure (D-SD-1). The returned object is
 * the credential with a `proof` whose `cryptosuite` is `ecdsa-sd-2023`.
 *
 * The credential MUST NOT already contain a `proof`. Every term used in the
 * credential must resolve via the document loader (ecdsa-sd-2023 runs jsonld in
 * safe mode); use the project document loader, which serves the vendored
 * credentials/v2 + multikey contexts offline.
 */
export async function issueSd(
  credential: JsonObject,
  keyPair: EcdsaMultikeyPair,
  opts: {
    mandatoryPointers: JsonPointer[];
    documentLoader: DocumentLoader;
  },
): Promise<JsonObject> {
  if (keyPair.secretKeyMultibase === undefined) {
    throw new Error('issueSd requires a key pair with a secret key.');
  }
  const signer = await EcdsaMultikey.from({
    id: keyPair.id,
    controller: keyPair.controller,
    type: keyPair.type,
    publicKeyMultibase: keyPair.publicKeyMultibase,
    secretKeyMultibase: keyPair.secretKeyMultibase,
  });
  const suite = new DataIntegrityProof({
    signer: signer.signer(),
    cryptosuite: createSignCryptosuite({ mandatoryPointers: opts.mandatoryPointers }),
  });
  return jsigs.sign(credential, {
    suite,
    purpose: new purposes.AssertionProofPurpose(),
    documentLoader: opts.documentLoader,
  });
}

/**
 * Derive a disclosed-subset credential from an SD base credential (holder side).
 *
 * The result reveals the mandatory fields (committed at issuance) plus any
 * `selectivePointers` the holder chooses to disclose; all other fields are
 * removed and the proof is transformed into a derived proof. No issuer secret is
 * needed — derivation is unkeyed.
 */
export async function deriveSd(
  signedCredential: JsonObject,
  opts: {
    selectivePointers: JsonPointer[];
    documentLoader: DocumentLoader;
  },
): Promise<JsonObject> {
  const suite = new DataIntegrityProof({
    cryptosuite: createDiscloseCryptosuite({ selectivePointers: opts.selectivePointers }),
  });
  return jsigs.derive(signedCredential, {
    suite,
    purpose: new purposes.AssertionProofPurpose(),
    documentLoader: opts.documentLoader,
  });
}

/**
 * Verify a derived (disclosed-subset) ecdsa-sd-2023 credential.
 *
 * The document loader MUST be able to resolve the proof's verificationMethod to
 * the issuer's P-256 Multikey document and the controller document that lists
 * that key under `assertionMethod`. Returns `true` only when the cryptographic
 * proof verifies over exactly the disclosed subset (tampering with any disclosed
 * value yields `false`).
 */
export async function verifySd(
  derivedCredential: JsonObject,
  opts: { documentLoader: DocumentLoader },
): Promise<{ verified: boolean; error?: string }> {
  const suite = new DataIntegrityProof({ cryptosuite: createVerifyCryptosuite() });
  const result = await jsigs.verify(derivedCredential, {
    suite,
    purpose: new purposes.AssertionProofPurpose(),
    documentLoader: opts.documentLoader,
  });
  if (result.verified) return { verified: true };
  const messages = result.error?.errors?.map((e) => e.message).filter(Boolean) ?? [];
  const error = messages.length > 0 ? messages.join('; ') : (result.error?.message ?? 'verification failed');
  return { verified: false, error };
}
