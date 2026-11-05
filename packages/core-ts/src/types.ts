// SPDX-License-Identifier: Apache-2.0
// Shared types for the canonicalization, proof and reliance modules.

export type JsonObject = Record<string, unknown>;

/** JSON-LD document loader compatible with jsonld.js */
export type DocumentLoader = (url: string) => Promise<{
  contextUrl: string | null;
  document: unknown;
  documentUrl: string;
}>;

/** Ed25519 key pair for signing and verification */
export interface Ed25519KeyPair {
  id: string;
  controller: string;
  /** 32-byte private key seed */
  privateKey: Uint8Array;
  /** 32-byte public key */
  publicKey: Uint8Array;
}

/** W3C VC 2.0 Data Integrity proof */
export interface DataIntegrityProof {
  type: 'DataIntegrityProof';
  cryptosuite: 'eddsa-rdfc-2022';
  proofPurpose: 'assertionMethod';
  verificationMethod: string;
  created?: string;
  proofValue: string;
}
