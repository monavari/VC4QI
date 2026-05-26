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

export type TraceLevel =
  | 'credential'
  | 'edge'
  | 'graph'
  | 'policy'
  | 'scope'
  | 'presentation';

export type TraceStatus = 'PASS' | 'FAIL' | 'SKIP' | 'WARN';

export interface TraceEntry {
  id: string;
  level: TraceLevel;
  target?: string;
  from?: string;
  to?: string;
  relation?: string;
  status: TraceStatus;
  code: string;
  detail: string;
}

export interface VerificationSummary {
  nodesResolved: number;
  edgesEvaluated: number;
  failures: number;
  warnings: number;
}

export interface VerificationTrace {
  verified: boolean;
  profile: string;
  target: string;
  summary: VerificationSummary;
  results: TraceEntry[];
}
