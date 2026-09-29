// SPDX-License-Identifier: Apache-2.0
// I5 step 4: the default entry point is standards-first reliance. `evaluateReliance`
// dispatches to the installed binding's own gate 0-6 evaluator with no fallback; the
// v0.3 graph verifier and presentation queries are reachable only under `legacy`.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { describe, expect, it } from 'vitest';
import * as core from '../src/index.js';
import { installBinding } from '../src/reliance/binding-node.js';
import { evaluateCalSlice } from '../src/reliance/cal-v1-slice.js';
import { evaluateGsSlice } from '../src/reliance/gs-v1-slice.js';
import { createRelianceRequest, loadBindingManifest, type SelectedClaim } from '../src/reliance/index.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';

const bindings = new URL('../../../bindings/experimental/', import.meta.url).pathname;
const installed = (binding: string, profile: string) => installBinding(`${bindings}${binding}`, profile);

function requestFor(
  b: ReturnType<typeof installed>, targetId: string, selectedClaims: SelectedClaim[], suppliedEvidence: string[],
) {
  return createRelianceRequest({
    requestId: 'urn:uuid:default-api', targetId, selectedClaims, purpose: 'default-api-test',
    binding: { id: b.manifest.id, version: b.manifest.version }, profile: { id: b.profile.id, version: b.profile.version },
    trustConfigId: 'https://vc4qi.example/trust/fixture-anchors',
    evaluationTime: '2026-09-25T12:00:00Z', activityTime: '2026-09-25T12:00:00Z', suppliedEvidence,
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
  });
}

const CASES = [
  {
    binding: 'rm-v1', profile: 'rm-verifier-1', direct: evaluateRmSlice,
    target: 'https://producer.vc4qi.example/credentials/D178',
    claims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }], supplied: [],
  },
  {
    binding: 'cal-v1', profile: 'cal-verifier-1', direct: evaluateCalSlice,
    target: 'https://lab.vc4qi.example/credentials/DCC-1',
    claims: [{ id: 'g1', sourcePointer: '/credentialSubject/measurementGroups/0' }],
    supplied: ['https://nab.vc4qi.example/credentials/CAL-A'],
  },
  {
    binding: 'gs-v1', profile: 'gs-verifier-1', direct: evaluateGsSlice,
    target: 'https://gs-body.vc4qi.example/credentials/GSC-1',
    claims: [{ id: 'gs', sourcePointer: '/credentialSubject/certification' }],
    supplied: ['https://nab.vc4qi.example/credentials/GS-A', 'https://zls.vc4qi.example/credentials/GS-S'],
  },
] as const;

describe('default API: standards-first reliance', () => {
  it('the package root exports evaluateReliance; the graph verifier and presentation queries only under legacy', () => {
    expect(typeof core.evaluateReliance).toBe('function');
    expect(core.SUPPORTED_BINDINGS).toEqual([
      'https://vc4qi.example/bindings/rm/1', 'https://vc4qi.example/bindings/cal/1', 'https://vc4qi.example/bindings/gs/1',
    ]);
    expect('verifier' in core).toBe(false);
    expect('presentationQuery' in core).toBe(false);
    expect(typeof core.legacy.verifyCredentialGraph).toBe('function');
    expect(typeof core.legacy.evaluateLegacyProfile).toBe('function');
    expect(typeof core.legacy.presentationQuery.policyToDcql).toBe('function');
  });

  for (const c of CASES) {
    it(`${c.binding}: evaluateReliance returns exactly the binding evaluator's result`, async () => {
      const b = installed(c.binding, c.profile);
      const request = requestFor(b, c.target, [...c.claims], [...c.supplied]);
      const viaDefault = await core.evaluateReliance(request, b.catalog, b.manifest, b.profile);
      const direct = await c.direct(request, installed(c.binding, c.profile).catalog, b.manifest, b.profile);
      expect(viaDefault.result.decision).toBe('accept');
      expect(viaDefault.result).toEqual(direct.result);
    });
  }

  it('an uninstalled binding is a configuration error, not a fallback', async () => {
    const b = installed('rm-v1', 'rm-verifier-1');
    const other = loadBindingManifest({ ...structuredClone(b.manifest), id: 'https://vc4qi.example/bindings/unknown/1' });
    const request = requestFor(b, CASES[0].target, [...CASES[0].claims], []);
    await expect(core.evaluateReliance(request, b.catalog, other, b.profile)).rejects.toThrow(/No evaluator for binding/);
  });

  it('a request naming another binding than the installed one is refused, not evaluated', async () => {
    const rm = installed('rm-v1', 'rm-verifier-1');
    const gs = installed('gs-v1', 'gs-verifier-1');
    const request = requestFor(gs, CASES[2].target, [...CASES[2].claims], [...CASES[2].supplied]);
    const { result, artifacts } = await core.evaluateReliance(request, rm.catalog, rm.manifest, rm.profile);
    expect(result.decision).not.toBe('accept');
    expect(artifacts).toHaveLength(0);
  });

  it('the default path imports no legacy module (no legacy wire enums, no graph verifier)', () => {
    const src = new URL('../src/', import.meta.url).pathname;
    const LEGACY = /^(verifier|evidence|edge|policy|scope|assessment|presentation-query|legacy|terms)\//;
    const seen = new Set<string>();
    const visit = (file: string): void => {
      if (seen.has(file)) return;
      seen.add(file);
      const text = readFileSync(file, 'utf8');
      for (const [, spec] of text.matchAll(/^(?:import|export)\s[^;]*?from\s+'(\.[^']+)'/gms)) {
        visit(join(dirname(file), spec!.replace(/\.js$/, '.ts')));
      }
    };
    visit(`${src}reliance/evaluate.ts`);
    const modules = [...seen].map(f => f.slice(src.length));
    expect(modules).toContain('reliance/rm-v1-slice.ts');
    expect(modules.filter(m => LEGACY.test(m))).toEqual([]);
  });

  it('installBinding refuses a profile name that could leave the profiles directory', () => {
    expect(() => installed('rm-v1', '../manifest')).toThrow(/Invalid profile name/);
  });
});
