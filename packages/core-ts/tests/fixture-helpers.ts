// SPDX-License-Identifier: Apache-2.0
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadPolicyProfile } from '../src/policy/index.js';
import { verifyCredentialGraph, type VerifyGraphOptions } from '../src/verifier/index.js';
import type { JsonObject, VerificationTrace } from '../src/types.js';

const ROOT = join(process.cwd(), '..', '..');
const EXAMPLES = join(ROOT, 'testdata', 'examples');

export function readJson<T = JsonObject>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

export function fixturePath(name: string, ...parts: string[]): string {
  return join(EXAMPLES, name, ...parts);
}

export function loadFixture(name: string, targetFile = 'target-credential.json') {
  const base = fixturePath(name);
  const target = readJson(join(base, targetFile));
  const policy = loadPolicyProfile(readJson(join(base, 'policy.json')));
  const trustRegistry = readJson(join(base, 'trust-registry.json'));
  const documents = new Map<string, JsonObject>();
  const evidenceDir = join(base, 'evidence');
  for (const file of readdirSync(evidenceDir)) {
    if (!file.endsWith('.json')) continue;
    const document = readJson(join(evidenceDir, file));
    documents.set(String(document.id), document);
  }
  return { target, policy, trustRegistry, documents };
}

export async function verifyFixture(
  name: string,
  targetFile = 'target-credential.json',
  options: Partial<VerifyGraphOptions> = {},
): Promise<VerificationTrace> {
  const fixture = loadFixture(name, targetFile);
  return verifyCredentialGraph(fixture.target, fixture.policy, {
    skipProof: true,
    fetchDocument: async uri => {
      const document = fixture.documents.get(uri);
      if (!document) throw new Error(`Unknown fixture URI ${uri}`);
      return document;
    },
    resolveTrustRegistry: async () => fixture.trustRegistry,
    ...options,
  });
}

export function codes(trace: VerificationTrace): string[] {
  return trace.results.map(result => result.code);
}
