// Type-only shim for @qi-vc/core — keeps demo-web tsc off the Node-only source files.
// Vite resolves the actual implementation via the alias in vite.config.ts.

export type JsonObject = Record<string, unknown>;

export type DocumentLoader = (url: string) => Promise<{
  contextUrl: string | null;
  document: JsonObject;
  documentUrl: string;
}>;

export type TraceStatus = 'PASS' | 'FAIL' | 'SKIP' | 'WARN';

export type TraceLevel =
  | 'credential'
  | 'edge'
  | 'graph'
  | 'policy'
  | 'scope';

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

export interface EcdsaMultikeyPair {
  id: string;
  controller: string;
  type: string;
  publicKeyMultibase: string;
  secretKeyMultibase?: string;
}

export declare const verifier: {
  verifyCredentialGraph: (
    targetCredential: JsonObject,
    policy: unknown,
    options?: {
      skipProof?: boolean;
      fetchDocument?: (uri: string) => Promise<JsonObject>;
      resolveTrustRegistry?: () => Promise<JsonObject>;
      /** Resolves the key that verifies the TrustRegistryCredential's proof (SEC-1). */
      resolveKey?: (verificationMethod: string) => Promise<Uint8Array>;
      /** Resolves @context URLs while canonicalizing for proof verification. */
      documentLoader?: DocumentLoader;
      maxDepth?: number;
      maxEvidenceNodes?: number;
    },
  ) => Promise<VerificationTrace>;
};
