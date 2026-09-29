// SPDX-License-Identifier: Apache-2.0
// I5: the migrated gs-scheme-authorization use case under the experimental GS
// certification v1 binding, and the experimental product passport (DPP) built on it. The GS mark is relied on only through the complete route
// (competence AND scheme permission), with the certification covered by both scopes;
// neither incomplete basis alone establishes it. Every variant is re-issued with the
// fixture keys, so it is decided on its semantics, not a signature.
import * as ed from '@noble/ed25519';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { createProof } from '../src/proofs/index.js';
import {
  catalogDocumentLoader, createRelianceRequest, loadBindingManifest, loadRelianceProfile, sha384SRI,
  StaticResourceCatalog, type RelianceRequestInput,
} from '../src/reliance/index.js';
import { evaluateGsSlice } from '../src/reliance/gs-v1-slice.js';
import { readPinnedResources } from '../src/reliance/rm-v1-node.js';
import type { JsonObject } from '../src/types.js';

const dir = new URL('../../../bindings/experimental/gs-v1/', import.meta.url);
const manifest = loadBindingManifest(JSON.parse(readFileSync(new URL('manifest.json', dir), 'utf8')));
const profileJson = () => JSON.parse(readFileSync(new URL('profiles/gs-verifier-1.json', dir), 'utf8')) as JsonObject;
const profile = loadRelianceProfile(profileJson());
const pinned = readPinnedResources(new URL('catalog.json', dir).pathname);
const signed = readPinnedResources(new URL('test-vectors/signed/catalog.json', dir).pathname);
const GS = 'https://vc4qi.example/bindings/gs/1#';
const URI = {
  A: 'https://nab.vc4qi.example/credentials/GS-A',
  S: 'https://zls.vc4qi.example/credentials/GS-S',
  C: 'https://gs-body.vc4qi.example/credentials/GSC-1',
  NAB: 'https://nab.vc4qi.example/controller',
  SCHEME: 'https://zls.vc4qi.example/controller',
  BODY: 'https://gs-body.vc4qi.example/controller',
  MAKER: 'https://maker.vc4qi.example/controller',
  TESTLAB: 'https://testlab-gs.vc4qi.example/controller',
  CLONE: 'https://clone.vc4qi.example/controller',
  C3: 'https://gs-body.vc4qi.example/credentials/GSC-3',
  TR1: 'https://gs-body.vc4qi.example/credentials/TR-1',
  TR2: 'https://testlab-gs.vc4qi.example/credentials/TR-2',
  FI: 'https://gs-body.vc4qi.example/credentials/FI-1',
  TLA: 'https://nab.vc4qi.example/credentials/TL-A',
  P3: 'https://maker.vc4qi.example/credentials/DPP-3',
  P4: 'https://maker.vc4qi.example/credentials/DPP-4',
  P5: 'https://clone.vc4qi.example/credentials/DPP-5',
  P1: 'https://maker.vc4qi.example/credentials/DPP-1',
  P2: 'https://maker.vc4qi.example/credentials/DPP-2',
} as const;
const KEY: Record<string, string> = { [URI.NAB]: 'nab', [URI.SCHEME]: 'zls', [URI.TESTLAB]: 'gs-testlab', [URI.CLONE]: 'clone', [URI.BODY]: 'gs-body', [URI.MAKER]: 'maker' };
const CERTIFICATION = '/credentialSubject/certification';

const json = (uri: string) => JSON.parse(new TextDecoder().decode(signed.find(r => r.uri === uri)!.bytes)) as JsonObject;
const serialize = (d: JsonObject) => `${JSON.stringify(d, null, 2)}\n`;
function catalogWith(overrides: Record<string, string | null> = {}) {
  return new StaticResourceCatalog([...pinned, ...signed].filter(r => overrides[r.uri] !== null).map(r => {
    const text = overrides[r.uri];
    if (typeof text !== 'string') return r;
    const bytes = new TextEncoder().encode(text);
    return { ...r, bytes, digestSRI: sha384SRI(bytes) };
  }));
}
async function resign(document: JsonObject): Promise<string> {
  const { proof: _proof, ...unsigned } = document;
  const issuer = String(document.issuer);
  const seed = createHash('sha256').update(`vc4qi-rm-v1-insecure-fixture-key:${KEY[issuer]}`).digest();
  const proof = await createProof(unsigned, { id: `${issuer}#key-1`, controller: issuer, privateKey: seed,
    publicKey: await ed.getPublicKeyAsync(seed) }, { created: '2026-02-01T00:00:00Z', safe: true,
    documentLoader: catalogDocumentLoader(catalogWith().openSession({ maxResources: 64, maxBytes: 5_000_000 })) });
  return serialize({ ...unsigned, proof });
}
/** Re-issue bottom-up, updating relatedResource digests of already re-issued credentials. */
async function reissueChain(steps: [string, ((d: JsonObject) => void)?][]) {
  const overrides: Record<string, string> = {};
  for (const [uri, edit] of steps) {
    const doc = json(uri);
    edit?.(doc);
    doc.relatedResource = (doc.relatedResource as JsonObject[] | undefined)?.map(r => (overrides[String(r.id)]
      ? { id: r.id, digestSRI: sha384SRI(new TextEncoder().encode(overrides[String(r.id)])) } : r));
    if (doc.relatedResource === undefined) delete doc.relatedResource;
    overrides[uri] = await resign(doc);
  }
  return overrides;
}
const subject = (d: JsonObject) => d.credentialSubject as JsonObject;
const certification = (d: JsonObject) => subject(d).certification as JsonObject;
const withoutReference = (type: string) => (d: JsonObject) => {
  const removed = (d.termsOfUse as JsonObject[]).find(p => (p.authorizationCredential as JsonObject).type === type)!;
  d.termsOfUse = (d.termsOfUse as JsonObject[]).filter(p => p !== removed);
  d.relatedResource = (d.relatedResource as JsonObject[]).filter(r => r.id !== (removed.authorizationCredential as JsonObject).id);
};
function request(overrides: Partial<RelianceRequestInput> = {}) {
  return createRelianceRequest({
    requestId: 'urn:uuid:gs-v1-request', targetId: URI.C, selectedClaims: [{ id: 'gs', sourcePointer: CERTIFICATION }],
    purpose: 'rely-on-gs-certification', binding: { id: manifest.id, version: manifest.version },
    profile: { id: profile.id, version: profile.version }, trustConfigId: 'https://vc4qi.example/trust/fixture-gs-anchors',
    evaluationTime: '2026-09-25T12:00:00Z', activityTime: '2026-09-25T12:00:00Z', suppliedEvidence: [URI.A, URI.S],
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    ...overrides,
  });
}
const run = (overrides: Record<string, string | null> = {}, p = profile) =>
  evaluateGsSlice(request(), catalogWith(overrides), manifest, p).then(e => e.result);
const trace = (r: Awaited<ReturnType<typeof run>>, predicate: string) => r.trace.find(t => t.predicate === predicate);
const ROUTE = 'route:competence-and-scheme-permission';

describe('gs-scheme-authorization, migrated to the GS certification v1 binding', () => {
  it('generated schemas, catalog and signed fixtures are up to date', () => {
    const root = new URL('../../../', import.meta.url);
    const tsx = new URL('node_modules/.bin/tsx', root).pathname;
    expect(() => execFileSync('node', [new URL('scripts/gs-v1/build-resources.mjs', root).pathname, '--check'], { stdio: 'pipe' })).not.toThrow();
    expect(() => execFileSync(tsx, [new URL('../scripts/generate-gs-v1-artifacts.ts', import.meta.url).pathname, '--check'], { stdio: 'pipe' })).not.toThrow();
  });

  it('accepts GSC-1 (hair dryer, in-house type examination) through competence AND scheme permission, with its studies', async () => {
    const result = await run();
    expect(result.artifactVerification.every(v => v.state === 'established')).toBe(true);
    expect(trace(result, ROUTE)).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.routeWitnessIds).toEqual([ROUTE, URI.C, URI.A, URI.S,
      `record:${URI.A}#scope-household`, `record:${URI.S}#scope-household`]);
    expect(result.support.map(s => [s.obligationId, s.state])).toEqual([
      ['gs-v1:type-examination', 'established'], ['gs-v1:factory-inspection', 'established']]);
    expect(result.support[0]?.witnessIds).toEqual([URI.TR1, URI.A]);
    expect(result.limitations.join(' ')).toMatch(/not a universal GS or legal rule/);
    expect(result.decision).toBe('accept');
  });

  it('C02: competence alone (no scheme permission) does not establish the route', async () => {
    const result = await run(await reissueChain([[URI.C, withoutReference('GsSchemeAuthorization')]]));
    expect(trace(result, `${ROUTE}:competence-reference`)).toMatchObject({ state: 'established' });
    expect(trace(result, `${ROUTE}:scheme-reference`)).toMatchObject({ state: 'not_established' });
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.decision).toBe('not_established');
  });

  it('scheme permission alone (no competence) does not establish the route', async () => {
    const result = await run(await reissueChain([[URI.C, withoutReference('GsAccreditation')]]));
    expect(trace(result, `${ROUTE}:scheme-reference`)).toMatchObject({ state: 'established' });
    expect(trace(result, `${ROUTE}:competence-reference`)).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('a scheme authorization naming another body contradicts the route', async () => {
    const result = await run(await reissueChain([
      [URI.S, d => { subject(d).id = 'https://other-body.vc4qi.example/controller'; }], [URI.C],
    ]));
    expect(trace(result, `${ROUTE}:scheme-grantee`)).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a category the competence covers but the scheme does not is not covered', async () => {
    const result = await run(await reissueChain([[URI.C, d => {
      certification(d).productCategoryIri = `${GS}Toy`;
      certification(d).standardIris = [`${GS}EN-71-1`];
    }]]));
    const covered = trace(result, 'claim-coverage:gs:competence-and-scheme-permission');
    expect(covered).toMatchObject({ state: 'contradicted' });
    expect(covered?.reason).toMatch(/scope-toys covers Toy/);
    expect(covered?.reason).toMatch(/No single scheme record covers it/);
    expect(result.decision).toBe('reject');
  });

  it('a standard outside the accredited scope is not covered, and naming none is no bypass', async () => {
    const outside = await run(await reissueChain([[URI.C, d => { certification(d).standardIris = [`${GS}EN-60335-2-9`]; }]]));
    expect(trace(outside, 'claim-coverage:gs:competence-and-scheme-permission')?.reason).toMatch(/EN-60335-2-9 is not in the accredited scope/);
    expect(outside.decision).toBe('reject');
    const none = await run(await reissueChain([[URI.C, d => { certification(d).standardIris = []; }]]));
    expect(trace(none, 'claim-coverage:gs:competence-and-scheme-permission'))
      .toMatchObject({ state: 'not_established', reason: expect.stringMatching(/names none/) });
    expect(none.decision).toBe('not_established');
  });

  it('each half needs its own anchor purpose', async () => {
    const swapped = loadRelianceProfile({ ...profileJson(), trustAnchors: [
      { id: URI.NAB, purposes: ['accredit-certification-bodies'] },
      { id: URI.SCHEME, purposes: ['accredit-certification-bodies'] },
    ] });
    const result = await run({}, swapped);
    expect(trace(result, `${ROUTE}:competence-anchor`)).toMatchObject({ state: 'established' });
    expect(trace(result, `${ROUTE}:scheme-anchor`)).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('a scheme authorization issued after the certification activity cannot authorize it', async () => {
    const result = await run(await reissueChain([[URI.S, d => { d.validFrom = '2026-03-15T00:00:00Z'; }], [URI.C]]));
    expect(trace(result, `${ROUTE}:scope-in-force-at-activity`))
      .toMatchObject({ state: 'not_established', reason: expect.stringMatching(/GS-S is valid only from/) });
    expect(result.decision).toBe('not_established');
  });
});

describe('GS studies (gate 6): type examination and factory inspection', () => {
  const runCert = (targetId: string, overrides: Record<string, string | null> = {}) =>
    evaluateGsSlice(request({ targetId }), catalogWith(overrides), manifest, profile).then(e => e.result);

  it('GSC-3 is accepted with a type examination by an externally accredited laboratory', async () => {
    const result = await runCert(URI.C3);
    expect(result.support[0]).toMatchObject({ state: 'established', witnessIds: [URI.TR2, URI.TLA] });
    expect(result.decision).toBe('accept');
  });

  it('GSC-2 (toy) is rejected: the ZLS-role authorization does not cover toys, although its studies hold', async () => {
    const result = await runCert('https://gs-body.vc4qi.example/credentials/GSC-2');
    expect(result.support.every(s => s.state === 'established')).toBe(true);
    expect(result.authorization[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });

  it('a withheld type examination leaves the certificate not established', async () => {
    const result = await runCert(URI.C, { [URI.TR1]: null });
    expect(result.support[0]).toMatchObject({ obligationId: 'gs-v1:type-examination', state: 'not_established' });
    expect(result.authorization[0]?.state).toBe('established');
    expect(result.decision).toBe('not_established');
  });

  it('a type examination that did not cover every certified standard contradicts the support', async () => {
    const result = await runCert(URI.C, await reissueChain([
      [URI.TR1, d => { subject(d).standardIris = [`${GS}EN-60335-1`]; }], [URI.C],
    ]));
    expect(trace(result, 'support:type-examination:covers-certification'))
      .toMatchObject({ state: 'contradicted', reason: expect.stringMatching(/did not examine EN-60335-2-23/) });
    expect(result.decision).toBe('reject');
  });

  it('a laboratory accreditation that does not permit testing does not authorize the examination', async () => {
    const result = await runCert(URI.C3, await reissueChain([
      [URI.TLA, d => { subject(d).permittedActivity = [`${GS}certifyProducts`]; }], [URI.TR2], [URI.C3],
    ]));
    expect(trace(result, 'support:type-examination:accreditation-permission')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a factory inspection of another manufacturer contradicts the support', async () => {
    const result = await runCert(URI.C, await reissueChain([
      [URI.FI, d => { subject(d).manufacturerIri = 'https://other-maker.vc4qi.example/controller'; }], [URI.C],
    ]));
    expect(trace(result, 'support:factory-inspection:same-manufacturer')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a study made after the certification cannot support it', async () => {
    const result = await runCert(URI.C, await reissueChain([
      [URI.TR1, d => { subject(d).activityTime = '2026-03-10T00:00:00Z'; d.validFrom = '2026-03-10T00:00:00Z'; }], [URI.C],
    ]));
    expect(trace(result, 'support:type-examination:precedes-certification')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });
});

const dppProfile = loadRelianceProfile(JSON.parse(readFileSync(new URL('profiles/gs-verifier-dpp-1.json', dir), 'utf8')) as JsonObject);
const runPassport = (overrides: Record<string, string | null> = {}, targetId: string = URI.P1) =>
  evaluateGsSlice(request({ requestId: 'urn:uuid:gs-v1-dpp', targetId, selectedClaims: [{ id: 'mark', sourcePointer: '/credentialSubject/marking' }],
    suppliedEvidence: [], profile: { id: dppProfile.id, version: dppProfile.version } }), catalogWith(overrides), manifest, dppProfile).then(e => e.result);
const DPP_ROUTE = 'route:gs-certified-product';

describe('experimental product passport (DPP): a GS-mark claim for one unit', () => {
  it('accepts DPP-1 through a certificate for its model that names the manufacturer and holds its own route', async () => {
    const result = await runPassport();
    expect(result.artifactVerification.every(v => v.state === 'established')).toBe(true);
    expect(trace(result, `${DPP_ROUTE}:manufacturer-binding`)).toMatchObject({ state: 'established' });
    expect(trace(result, `${DPP_ROUTE}:certificate:claim-coverage`)).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.routeWitnessIds).toEqual([DPP_ROUTE, URI.P1, URI.C, URI.A, URI.S, `record:${URI.C}`]);
    expect(result.support.map(s => s.state)).toEqual(['established', 'established']);
    expect(result.limitations.join(' ')).toMatch(/not EU Digital Product Passport conformance/);
    expect(result.decision).toBe('accept');
  });

  it('DPP-2 is rejected: its certificate is not itself covered by the scheme permission', async () => {
    const result = await runPassport({}, URI.P2);
    expect(trace(result, `${DPP_ROUTE}:certificate:claim-coverage`)).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a certificate for another manufacturer contradicts the claim', async () => {
    const result = await runPassport(await reissueChain([
      [URI.C, d => { subject(d).manufacturerIri = 'https://other-maker.vc4qi.example/controller'; }], [URI.P1],
    ]));
    expect(trace(result, `${DPP_ROUTE}:manufacturer-binding`)).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a passport for another model is not covered by the certificate', async () => {
    const result = await runPassport(await reissueChain([[URI.P1, d => {
      subject(d).productModelIri = 'urn:vc4qi-example:product:toy-999';
      (subject(d).marking as JsonObject).productModelIri = 'urn:vc4qi-example:product:toy-999';
    }]]));
    expect(trace(result, 'claim-coverage:mark:gs-certified-product')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a certificate issued after the unit was placed on the market cannot authorize it', async () => {
    const result = await runPassport(await reissueChain([[URI.C, d => { d.validFrom = '2026-06-01T00:00:00Z'; }], [URI.P1]]));
    expect(trace(result, `${DPP_ROUTE}:certificate-in-force`)).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it("the certificate's own route must be complete: without scheme permission it is not established", async () => {
    const result = await runPassport(await reissueChain([[URI.C, withoutReference('GsSchemeAuthorization')], [URI.P1]]));
    expect(trace(result, `${DPP_ROUTE}:certificate:scheme-reference`)).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('DPP-3 (external laboratory) is accepted; DPP-4, placed on the market before the certificate, is not', async () => {
    expect((await runPassport({}, URI.P3)).decision).toBe('accept');
    const early = await runPassport({}, URI.P4);
    expect(trace(early, `${DPP_ROUTE}:certificate-in-force`)?.state).not.toBe('established');
    expect(early.decision).not.toBe('accept');
  });

  it('DPP-5, issued by another company citing GSC-1, is rejected by the manufacturer binding', async () => {
    const result = await runPassport({}, URI.P5);
    expect(trace(result, `${DPP_ROUTE}:manufacturer-binding`)).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a withheld certificate leaves the claim not established', async () => {
    const result = await runPassport({ [URI.C]: null });
    expect(result.authorization[0]?.state).toBe('not_established');
    expect(result.decision).toBe('not_established');
  });
});
