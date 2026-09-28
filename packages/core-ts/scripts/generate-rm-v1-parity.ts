// SPDX-License-Identifier: Apache-2.0
// Writes the cross-language parity vector for the RM v1 evaluator (I4):
// the TypeScript outcome of each scenario over the signed fixtures, reduced to what
// both languages must agree on (decision, per-claim states and witnesses, support,
// conformity with its arithmetic, and the gate 4-6 trace of the target). The Python
// suite evaluates the same scenarios and must reproduce this file exactly.
//
//   pnpm -C packages/core-ts exec tsx scripts/generate-rm-v1-parity.ts          # write
//   pnpm -C packages/core-ts exec tsx scripts/generate-rm-v1-parity.ts --check  # fail if stale
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parityOutcomes } from '../tests/rm-v1-parity.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const OUT = join(ROOT, 'bindings', 'experimental', 'rm-v1', 'test-vectors', 'parity', 'i4-outcomes.json');
const text = `${JSON.stringify(await parityOutcomes(), null, 2)}\n`;
if (process.argv.includes('--check')) {
  if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== text) {
    console.error('Stale RM v1 parity vector (run without --check).');
    process.exit(1);
  }
  console.log('RM v1 parity vector is up to date.');
} else {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text);
  console.log('Wrote the RM v1 parity vector.');
}
