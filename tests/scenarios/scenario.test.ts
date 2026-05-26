// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { verifyCredentialGraph } from '../../packages/core-ts/src/verifier/index.js';
import { loadPolicyProfile } from '../../packages/core-ts/src/policy/index.js';
import type { JsonObject } from '../../packages/core-ts/src/types.js';

const ROOT = process.cwd();
const EXAMPLES = join(ROOT, 'testdata', 'examples');

function readJson<T = JsonObject>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

async function verifyFixture(name: string, targetFile = 'target-credential.json') {
  const base = join(EXAMPLES, name);
  const target = readJson(join(base, targetFile));
  const policy = loadPolicyProfile(readJson(join(base, 'policy.json')));
  const registry = readJson(join(base, 'trust-registry.json'));
  const documents = new Map<string, JsonObject>();
  for (const file of readdirSync(join(base, 'evidence'))) {
    const document = readJson(join(base, 'evidence', file));
    documents.set(String(document.id), document);
  }
  return verifyCredentialGraph(target, policy, {
    skipProof: true,
    fetchDocument: async uri => documents.get(uri) as JsonObject,
    resolveTrustRegistry: async () => registry,
  });
}

describe('v0.2 evidence-graph scenarios', () => {
  it('passes direct accreditation and legal mandate profiles', async () => {
    expect((await verifyFixture('calibration-direct-accreditation')).verified).toBe(true);
    expect((await verifyFixture('ptb-legal-mandate')).verified).toBe(true);
  });

  it('keeps presentation sufficiency separate from QI policy failures', async () => {
    const trace = await verifyFixture('calibration-capability', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(trace.results.map(result => result.code)).toContain('DERIVATION_VIOLATION');
  });
});
