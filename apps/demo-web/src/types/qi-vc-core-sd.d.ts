// Type shim for @qi-vc/core/proofs/sd — keeps demo-web tsc off the real sd.ts
// source (which imports untyped Digital Bazaar libs). Vite resolves the actual
// implementation via the subpath alias in vite.config.ts.
import type { JsonObject, DocumentLoader, EcdsaMultikeyPair } from '@qi-vc/core';

export type JsonPointer = string;

export function generateSdKey(opts: { id: string; controller: string }): Promise<EcdsaMultikeyPair>;

export function issueSd(
  credential: JsonObject,
  keyPair: EcdsaMultikeyPair,
  opts: { mandatoryPointers: JsonPointer[]; documentLoader: DocumentLoader },
): Promise<JsonObject>;

export function deriveSd(
  signedCredential: JsonObject,
  opts: { selectivePointers: JsonPointer[]; documentLoader: DocumentLoader },
): Promise<JsonObject>;

export function verifySd(
  derivedCredential: JsonObject,
  opts: { documentLoader: DocumentLoader },
): Promise<{ verified: boolean; error?: string }>;
