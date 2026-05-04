// SPDX-License-Identifier: Apache-2.0
// Validates all JSON Schema 2020-12 files in schemas/v1/ and all example
// credentials in examples/ against their declared $schema reference.
// Cross-file $ref resolution is handled by loading all schemas into AJV
// before validation.
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const schemasDir = join(ROOT, 'schemas', 'v1');
const examplesDir = join(ROOT, 'examples');

const ajv = new Ajv({ allErrors: true, strict: false, loadSchema: false });
addFormats(ajv);

let passed = 0;
let failed = 0;

function rel(p) {
  return p.replace(ROOT + '/', '');
}

function tryParse(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`  ✗ ${rel(filePath)} — JSON parse error: ${err.message}`);
    failed++;
    return null;
  }
}

// ── Step 1: collect and pre-load all schemas by $id ───────────────────────
// This allows AJV to resolve cross-file $refs like
// "https://w3id.org/qi-vc/schemas/v1/_shared/common.json#/$defs/..."
const schemaById = new Map();

function collectSchemas(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSchemas(full);
    } else if (entry.name.endsWith('.json')) {
      const schema = tryParse(full);
      if (schema && schema.$id) {
        schemaById.set(schema.$id, { schema, path: full });
      }
    }
  }
}

collectSchemas(schemasDir);

// Add all schemas to AJV so $refs resolve correctly
for (const { schema } of schemaById.values()) {
  try {
    ajv.addSchema(schema);
  } catch (err) {
    // Ignore duplicate schema errors (schema already added)
    if (!err.message.includes('already exists')) {
      console.warn(`  warn: could not pre-load schema ${schema.$id}: ${err.message}`);
    }
  }
}

// ── Step 2: validate each schema is itself valid JSON Schema 2020-12 ───────
console.log('\nValidating schemas in schemas/v1/ ...');

for (const { schema, path } of schemaById.values()) {
  try {
    ajv.compile(schema);
    console.log(`  ✓ ${rel(path)}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${rel(path)} — ${err.message}`);
    failed++;
  }
}

if (schemaById.size === 0) {
  console.log('  (no schemas found yet)');
}

// ── Step 3: validate examples against their declared $schema ──────────────
console.log('\nValidating examples in examples/ ...');

function validateExample(filePath) {
  const data = tryParse(filePath);
  if (!data) return;

  const schemaId = data.$schema;
  if (!schemaId) {
    console.log(`  ~ ${rel(filePath)} — no $schema field, skipping`);
    return;
  }

  const entry = schemaById.get(schemaId);
  if (!entry) {
    console.warn(`  ~ ${rel(filePath)} — schema not loaded for ${schemaId}`);
    return;
  }

  try {
    const validate = ajv.compile(entry.schema);
    if (validate(data)) {
      console.log(`  ✓ ${rel(filePath)}`);
      passed++;
    } else {
      console.error(`  ✗ ${rel(filePath)}`);
      for (const err of validate.errors ?? []) {
        const path = err.instancePath || '/';
        console.error(`      ${path} — ${err.message}`);
        if (err.params && Object.keys(err.params).length) {
          console.error(`        params: ${JSON.stringify(err.params)}`);
        }
      }
      failed++;
    }
  } catch (err) {
    console.error(`  ✗ ${rel(filePath)} — compile error: ${err.message}`);
    failed++;
  }
}

function walkExamples(dir) {
  if (!existsSync(dir)) {
    console.log('  (directory not yet present)');
    return;
  }
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkExamples(full);
    } else if (entry.name.endsWith('.json')) {
      validateExample(full);
    }
  }
}

walkExamples(examplesDir);

// ── Summary ────────────────────────────────────────────────────────────────
console.log(`\nResults: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
