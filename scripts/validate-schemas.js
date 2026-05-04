// SPDX-License-Identifier: Apache-2.0
// Validates all JSON Schema 2020-12 files in schemas/v1/ and all example
// credentials in examples/ against their declared $schema reference.
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

let passed = 0;
let failed = 0;

function label(filePath) {
  return relative(ROOT, filePath);
}

function tryParse(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`  ✗ ${label(filePath)} — JSON parse error: ${err.message}`);
    failed++;
    return null;
  }
}

function validateWithSchema(schemaObj, dataObj, dataLabel) {
  try {
    const validate = ajv.compile(schemaObj);
    if (validate(dataObj)) {
      console.log(`  ✓ ${dataLabel}`);
      passed++;
    } else {
      console.error(`  ✗ ${dataLabel}`);
      for (const err of validate.errors ?? []) {
        console.error(`      ${err.instancePath || '/'} — ${err.message}`);
      }
      failed++;
    }
  } catch (err) {
    console.error(`  ✗ ${dataLabel} — compile error: ${err.message}`);
    failed++;
  }
}

// ── 1. Validate all schemas in schemas/v1/ ─────────────────────────────────
const schemasDir = join(ROOT, 'schemas', 'v1');
console.log('\nValidating schemas in schemas/v1/ ...');

if (!existsSync(schemasDir)) {
  console.log('  (directory not yet present — skipping)');
} else {
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.json')) {
        const schema = tryParse(full);
        if (schema) validateWithSchema(schema, schema, label(full));
      }
    }
  };
  walk(schemasDir);
}

// ── 2. Validate examples against their schemas ─────────────────────────────
const examplesDir = join(ROOT, 'examples');
console.log('\nValidating examples in examples/ ...');

if (!existsSync(examplesDir)) {
  console.log('  (directory not yet present — skipping)');
} else {
  const loadedSchemas = {};

  function getSchema(schemaId) {
    if (loadedSchemas[schemaId]) return loadedSchemas[schemaId];
    // Resolve schema $id to local file path: strip base URL, map to schemas/v1/
    const localPath = join(
      schemasDir,
      schemaId.replace(/^https?:\/\/[^/]+\/schemas\/v1\//, '')
    );
    if (!existsSync(localPath)) return null;
    const schema = tryParse(localPath);
    if (schema) loadedSchemas[schemaId] = schema;
    return schema;
  }

  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.json')) {
        const data = tryParse(full);
        if (!data) continue;
        const schemaId = data.$schema;
        if (!schemaId) {
          console.log(`  ~ ${label(full)} — no $schema field, skipping`);
          continue;
        }
        const schema = getSchema(schemaId);
        if (!schema) {
          console.warn(`  ~ ${label(full)} — schema not found locally for ${schemaId}`);
          continue;
        }
        validateWithSchema(schema, data, label(full));
      }
    }
  };
  walk(examplesDir);
}

// ── Summary ────────────────────────────────────────────────────────────────
console.log(`\nResults: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
