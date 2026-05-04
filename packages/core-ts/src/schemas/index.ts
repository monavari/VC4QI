// SPDX-License-Identifier: Apache-2.0
// AJV-based JSON Schema 2020-12 validation for QI-VC credential schemas.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import type { JsonObject } from '../types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMAS_DIR = join(__dirname, '..', '..', '..', '..', 'schemas', 'v1');

let _ajv: InstanceType<typeof Ajv> | null = null;

function getAjv(): InstanceType<typeof Ajv> {
  if (_ajv) return _ajv;

  _ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(_ajv);

  // Pre-load all schemas so cross-file $refs resolve
  if (existsSync(SCHEMAS_DIR)) {
    loadSchemasFrom(_ajv, SCHEMAS_DIR);
  }

  return _ajv;
}

function loadSchemasFrom(ajv: InstanceType<typeof Ajv>, dir: string): void {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      loadSchemasFrom(ajv, full);
    } else if (entry.name.endsWith('.json')) {
      const schema = JSON.parse(readFileSync(full, 'utf8')) as JsonObject;
      if (schema.$id && typeof schema.$id === 'string') {
        try {
          ajv.addSchema(schema);
        } catch {
          // Schema already added — ignore
        }
      }
    }
  }
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate a credential document against a JSON Schema 2020-12 schema.
 * @param document The credential to validate (must have a `$schema` field or pass schemaId)
 * @param schemaId Override the schema $id to validate against
 */
export function validate(document: JsonObject, schemaId?: string): ValidationResult {
  const ajv = getAjv();
  const id = schemaId ?? (document.$schema as string | undefined);

  if (!id) {
    return { valid: false, errors: ['No $schema field or schemaId provided'] };
  }

  const schema = ajv.getSchema(id);
  if (!schema) {
    return { valid: false, errors: [`Schema not found: ${id}`] };
  }

  const valid = schema(document) as boolean;
  if (valid) return { valid: true, errors: [] };

  const errors = (schema.errors ?? []).map(e => {
    const path = e.instancePath || '/';
    return `${path}: ${e.message}`;
  });
  return { valid: false, errors };
}

/**
 * Throw if the document does not validate. Convenience wrapper.
 */
export function assertValid(document: JsonObject, schemaId?: string): void {
  const result = validate(document, schemaId);
  if (!result.valid) {
    throw new Error(`Schema validation failed:\n  ${result.errors.join('\n  ')}`);
  }
}

/** Known schema IDs */
export const SCHEMA_IDS = {
  DCC: 'https://w3id.org/qi-vc/schemas/v1/digital-calibration-certificate.json',
  RMC: 'https://w3id.org/qi-vc/schemas/v1/reference-material-certificate.json',
  COMMON: 'https://w3id.org/qi-vc/schemas/v1/_shared/common.json',
} as const;
