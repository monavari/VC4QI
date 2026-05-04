// SPDX-License-Identifier: Apache-2.0
// High-level credential issuance: schema validation → proof creation.
import { validate, SCHEMA_IDS } from '../schemas/index.js';
import { createProof } from '../proofs/index.js';
import type { Ed25519KeyPair, JsonObject, DocumentLoader } from '../types.js';

export interface IssueOptions {
  /** JSON Schema $id to validate against before signing. */
  schemaId?: string;
  /** Skip schema validation (not recommended in production). */
  skipValidation?: boolean;
  /** ISO 8601 datetime for proof.created. Defaults to now. */
  created?: string;
  /** Custom document loader for JSON-LD canonicalization. */
  documentLoader?: DocumentLoader;
}

/**
 * Issue a Verifiable Credential:
 * 1. Validate against JSON Schema (optional but default-on)
 * 2. Create eddsa-rdfc-2022 Data Integrity proof
 * 3. Return the signed credential
 *
 * The input credential MUST NOT contain a proof block.
 */
export async function issue(
  credential: JsonObject,
  keyPair: Ed25519KeyPair,
  opts: IssueOptions = {},
): Promise<JsonObject> {
  const { skipValidation = false, schemaId, created, documentLoader } = opts;

  if (!skipValidation) {
    const id = schemaId ?? (credential.$schema as string | undefined);
    if (id) {
      const result = validate(credential, id);
      if (!result.valid) {
        throw new Error(
          `Credential does not conform to schema ${id}:\n  ${result.errors.join('\n  ')}`,
        );
      }
    }
  }

  const proof = await createProof(credential, keyPair, { created, documentLoader });

  return { ...credential, proof };
}

/**
 * Convenience: issue a DigitalCalibrationCertificate.
 * Automatically applies the DCC schema ID.
 */
export async function issueDcc(
  credential: JsonObject,
  keyPair: Ed25519KeyPair,
  opts: Omit<IssueOptions, 'schemaId'> = {},
): Promise<JsonObject> {
  return issue(credential, keyPair, { ...opts, schemaId: SCHEMA_IDS.DCC });
}

/**
 * Convenience: issue a ReferenceMaterialCertificate.
 * Automatically applies the RMC schema ID.
 */
export async function issueRmc(
  credential: JsonObject,
  keyPair: Ed25519KeyPair,
  opts: Omit<IssueOptions, 'schemaId'> = {},
): Promise<JsonObject> {
  return issue(credential, keyPair, { ...opts, schemaId: SCHEMA_IDS.RMC });
}
