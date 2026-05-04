// SPDX-License-Identifier: Apache-2.0
// Shared types across all @qi-vc/core modules.

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
  cryptosuite: 'eddsa-rdfc-2022' | 'ecdsa-rdfc-2019';
  proofPurpose: 'assertionMethod';
  verificationMethod: string;
  created: string;
  proofValue: string;
}

/** Bitstring Status List entry embedded in a credential */
export interface BitstringStatusListEntry {
  id: string;
  type: 'BitstringStatusListEntry';
  statusPurpose: 'revocation' | 'suspension' | 'message';
  statusListIndex: string;
  statusListCredential: string;
}

/** DigestBinding linking a credential to a referenced credential */
export interface DigestBinding {
  digestAlgorithm: 'sha-256' | 'sha-384' | 'sha-512';
  digestMultibase: string;
}

/** Evidence reference from a domain credential to a CapabilityCredential */
export interface CapabilityCredentialReference {
  id: string;
  type: 'CapabilityCredentialReference';
  hashBinding: DigestBinding;
}

/** Six-rule verification result for one rule */
export interface RuleResult {
  rule: number;
  id: string;
  status: 'PASS' | 'FAIL' | 'SKIP';
  detail: string;
}

/** Full verification trace returned by the verifier */
export interface VerificationResult {
  verified: boolean;
  results: RuleResult[];
  error?: string;
}
