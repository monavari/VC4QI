// SPDX-License-Identifier: Apache-2.0
// eddsa-rdfc-2022 Data Integrity proof implementation.
// Spec: https://www.w3.org/TR/vc-di-eddsa/#eddsa-rdfc-2022
import * as ed from '@noble/ed25519';
import { createHash } from 'node:crypto';
import { canonicalize } from '../canonicalize/index.js';
import { toMultibase, fromMultibase } from '../utils/base58btc.js';
import type { DataIntegrityProof, Ed25519KeyPair, JsonObject, DocumentLoader } from '../types.js';

/**
 * Build the proof config document from proof metadata.
 * The @context from the original document is copied so URDNA2015 can resolve terms.
 */
function buildProofConfig(
  docContext: unknown,
  verificationMethod: string,
  created: string,
): JsonObject {
  return {
    '@context': docContext,
    type: 'DataIntegrityProof',
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    verificationMethod,
    created,
  };
}

/**
 * Compute the hashData per eddsa-rdfc-2022 §3.1.2:
 *   hashData = SHA-256(URDNA2015(proofConfig)) || SHA-256(URDNA2015(unsecuredDocument))
 */
async function computeHashData(
  unsecuredDocument: JsonObject,
  proofConfig: JsonObject,
  documentLoader?: DocumentLoader,
): Promise<Uint8Array> {
  const [canonDoc, canonProof] = await Promise.all([
    canonicalize(unsecuredDocument, documentLoader),
    canonicalize(proofConfig, documentLoader),
  ]);

  const docHash = createHash('sha256').update(canonDoc, 'utf8').digest();
  const proofHash = createHash('sha256').update(canonProof, 'utf8').digest();

  const hashData = new Uint8Array(64);
  hashData.set(proofHash, 0);   // proof config hash first
  hashData.set(docHash, 32);    // document hash second
  return hashData;
}

/**
 * Create an eddsa-rdfc-2022 Data Integrity proof for a credential.
 *
 * The credential MUST NOT contain a proof block when passed here.
 * The returned proof object should be attached as `credential.proof`.
 */
export async function createProof(
  credential: JsonObject,
  keyPair: Ed25519KeyPair,
  opts: {
    created?: string;
    documentLoader?: DocumentLoader;
  } = {},
): Promise<DataIntegrityProof> {
  const created = opts.created ?? new Date().toISOString();

  const proofConfig = buildProofConfig(
    credential['@context'],
    keyPair.id,
    created,
  );

  const hashData = await computeHashData(credential, proofConfig, opts.documentLoader);

  const signatureBytes = await ed.signAsync(hashData, keyPair.privateKey);
  const proofValue = toMultibase(signatureBytes);

  return {
    type: 'DataIntegrityProof',
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    verificationMethod: keyPair.id,
    created,
    proofValue,
  };
}

/**
 * Verify an eddsa-rdfc-2022 Data Integrity proof on a signed credential.
 *
 * Extracts and removes the proof before verification (as required by the spec).
 */
export async function verifyProof(
  signedCredential: JsonObject,
  publicKey: Uint8Array,
  opts: { documentLoader?: DocumentLoader } = {},
): Promise<boolean> {
  const proof = signedCredential.proof as DataIntegrityProof | undefined;
  if (!proof) throw new Error('No proof found on credential');
  if (proof.cryptosuite !== 'eddsa-rdfc-2022') {
    throw new Error(`Unsupported cryptosuite: ${proof.cryptosuite}`);
  }

  // Remove proof to get the unsecured document
  const { proof: _proof, ...unsecuredDocument } = signedCredential;

  const proofConfig = buildProofConfig(
    unsecuredDocument['@context'],
    proof.verificationMethod,
    proof.created,
  );

  const hashData = await computeHashData(
    unsecuredDocument as JsonObject,
    proofConfig,
    opts.documentLoader,
  );

  try {
    const signatureBytes = fromMultibase(proof.proofValue);
    return await ed.verifyAsync(signatureBytes, hashData, publicKey);
  } catch {
    return false;
  }
}
