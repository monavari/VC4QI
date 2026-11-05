// SPDX-License-Identifier: Apache-2.0
// V02: a credential in the v0.3 legacy format (CredentialEvidenceReference edges, custom
// scopeRef) under a standards-first profile is unsupported, with no fallback. The legacy
// verifier itself was removed in v0.4; it remains available at tag v0.3.0.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import { catalogWith, manifest, profile, request } from './rm-v1-helpers.js';

const LEGACY_CREDENTIAL = new URL('../../../testdata/regressions/legacy-v0.3-credential.json', import.meta.url);

describe('V02: legacy credentials under the standards-first profile', () => {
  it('is unsupported: refused at the carrier check, with no witnesses', async () => {
    const bytes = readFileSync(LEGACY_CREDENTIAL, 'utf8');
    const id = String(JSON.parse(bytes).id);
    const { result } = await evaluateRmSlice(request({ targetId: id, suppliedEvidence: [] }), catalogWith({ [id]: bytes }), manifest, profile);
    expect(result.trace.find(t => t.predicate === 'carrier'))
      .toMatchObject({ gate: 0, state: 'not_established', reason: expect.stringMatching(/exact supported context combination/) });
    expect(result.authorization[0]).toMatchObject({ state: 'not_established', routeWitnessIds: [] });
    expect(result.decision).toBe('not_established');
    expect(result.profile).toEqual({ id: profile.id, version: profile.version });
    expect(JSON.stringify(result)).not.toMatch(/SCOPE_INCLUSION_VALID|TRUSTED_ISSUER|legacy-qi-vc/);
  });
});
