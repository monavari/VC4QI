// SPDX-License-Identifier: Apache-2.0
// Minimal ambient type declarations for the Digital Bazaar selective-disclosure
// packages, which ship as plain ES modules without bundled .d.ts files.
// Scoped to exactly the API surface used by proofs/sd.ts.

declare module '@digitalbazaar/ecdsa-sd-2023-cryptosuite' {
  // Opaque cryptosuite handle consumed by DataIntegrityProof.
  export interface Cryptosuite {
    name: string;
    requiredAlgorithm: string | string[];
  }
  export function createSignCryptosuite(opts: {
    mandatoryPointers?: string[];
  }): Cryptosuite;
  export function createDiscloseCryptosuite(opts: {
    proofId?: string;
    selectivePointers?: string[];
  }): Cryptosuite;
  export function createVerifyCryptosuite(opts?: Record<string, unknown>): Cryptosuite;
}

declare module '@digitalbazaar/data-integrity' {
  import type { Cryptosuite } from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
  export class DataIntegrityProof {
    constructor(opts: { signer?: unknown; cryptosuite: Cryptosuite; date?: string });
  }
}

declare module '@digitalbazaar/ecdsa-multikey' {
  export interface MultikeyExport {
    '@context'?: string;
    id: string;
    type: 'Multikey';
    controller: string;
    publicKeyMultibase: string;
    secretKeyMultibase?: string;
  }
  export interface MultikeyInstance {
    id: string;
    controller: string;
    type: 'Multikey';
    publicKeyMultibase: string;
    secretKeyMultibase?: string;
    signer(): unknown;
    export(opts: { publicKey?: boolean; secretKey?: boolean }): Promise<MultikeyExport>;
  }
  export function generate(opts: {
    curve: string;
    id?: string;
    controller?: string;
  }): Promise<MultikeyInstance>;
  export function from(key: {
    id?: string;
    controller?: string;
    type?: string;
    publicKeyMultibase?: string;
    secretKeyMultibase?: string;
  }): Promise<MultikeyInstance>;
}

declare module 'jsonld-signatures' {
  interface VerifyResult {
    verified: boolean;
    error?: { errors?: Array<{ message?: string }> } & Error;
  }
  interface ProofPurposeCtor {
    new (opts?: Record<string, unknown>): unknown;
  }
  const jsigs: {
    sign(
      document: unknown,
      opts: { suite: unknown; purpose: unknown; documentLoader: unknown },
    ): Promise<Record<string, unknown>>;
    derive(
      document: unknown,
      opts: { suite: unknown; purpose: unknown; documentLoader: unknown },
    ): Promise<Record<string, unknown>>;
    verify(
      document: unknown,
      opts: { suite: unknown; purpose: unknown; documentLoader: unknown },
    ): Promise<VerifyResult>;
    purposes: { AssertionProofPurpose: ProofPurposeCtor };
  };
  export default jsigs;
}
