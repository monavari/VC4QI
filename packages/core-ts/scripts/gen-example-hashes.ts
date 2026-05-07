#!/usr/bin/env tsx
// SPDX-License-Identifier: Apache-2.0
// Computes real hashBindings for example credential files and writes them in-place.
// Usage: pnpm tsx scripts/gen-example-hashes.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { computeHashBinding } from '../src/canonicalize/index.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..', '..');

function readJson(rel: string): Record<string, unknown> {
  return JSON.parse(readFileSync(join(REPO_ROOT, rel), 'utf8'));
}

function writeJson(rel: string, obj: Record<string, unknown>): void {
  writeFileSync(join(REPO_ROOT, rel), JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

const loader = buildDocumentLoader({});

// ── DCC chain ─────────────────────────────────────────────────────────────────
console.log('Computing hash for iso17025-pressure.jsonld ...');
const accDcc = readJson('examples/accreditation/iso17025-pressure.jsonld');
const accDccHash = await computeHashBinding(accDcc, loader);
console.log('  →', accDccHash);

const capDcc = readJson('examples/capability/dcc-pressure.jsonld');
(capDcc.evidence as Record<string, unknown>[])[0].hashBinding = {
  digestAlgorithm: 'sha-256',
  digestMultibase: accDccHash,
};
writeJson('examples/capability/dcc-pressure.jsonld', capDcc);
console.log('Updated examples/capability/dcc-pressure.jsonld');

// ── DRMD chain ────────────────────────────────────────────────────────────────
console.log('Computing hash for iso17034-bam.jsonld ...');
const accDrmd = readJson('examples/accreditation/iso17034-bam.jsonld');
const accDrmdHash = await computeHashBinding(accDrmd, loader);
console.log('  →', accDrmdHash);

const capDrmd = readJson('examples/capability/drmd-bam.jsonld');
(capDrmd.evidence as Record<string, unknown>[])[0].hashBinding = {
  digestAlgorithm: 'sha-256',
  digestMultibase: accDrmdHash,
};
writeJson('examples/capability/drmd-bam.jsonld', capDrmd);
console.log('Updated examples/capability/drmd-bam.jsonld');

console.log('Done.');
