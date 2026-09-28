// SPDX-License-Identifier: Apache-2.0
// I5: the migrated calibration (DCC) binding — the calibration-direct-accreditation,
// calibration-capability and nmi-legal-mandate use cases on signed data, plus S18 (no
// empty-method bypass), S19 (group conjunction) and S21 (CMC floor as a scope
// contradiction, independent of conformity). Every variant is re-issued with the fixture
// keys, so it is decided on its semantics, not a signature.
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
import { evaluateCalSlice } from '../src/reliance/cal-v1-slice.js';
import { readPinnedResources } from '../src/reliance/rm-v1-node.js';
import type { JsonObject } from '../src/types.js';

const dir = new URL('../../../bindings/experimental/cal-v1/', import.meta.url);
const manifest = loadBindingManifest(JSON.parse(readFileSync(new URL('manifest.json', dir), 'utf8')));
const profileJson = (file = 'cal-verifier-1.json') => JSON.parse(readFileSync(new URL(`profiles/${file}`, dir), 'utf8')) as JsonObject;
const profile = loadRelianceProfile(profileJson());
const capabilityProfile = loadRelianceProfile(profileJson('cal-verifier-capability-1.json'));
const nmiProfile = loadRelianceProfile(profileJson('cal-verifier-nmi-1.json'));
const selects = (p: typeof profile) => ({ profile: { id: p.id, version: p.version } });
const pinned = readPinnedResources(new URL('catalog.json', dir).pathname);
const signed = readPinnedResources(new URL('test-vectors/signed/catalog.json', dir).pathname);
const CAL = 'https://vc4qi.example/bindings/cal/1#';
const URI = {
  CA: 'https://nab.vc4qi.example/credentials/CAL-A',
  DCC: 'https://lab.vc4qi.example/credentials/DCC-1',
  O: 'https://lab.vc4qi.example/credentials/CAL-O',
  DCC2: 'https://lab.vc4qi.example/credentials/DCC-2',
  M: 'https://ministry.vc4qi.example/credentials/CAL-M',
  DCCN: 'https://nmi.vc4qi.example/credentials/DCC-N',
  NAB: 'https://nab.vc4qi.example/controller',
  LAB: 'https://lab.vc4qi.example/controller',
  MINISTRY: 'https://ministry.vc4qi.example/controller',
  NMI: 'https://nmi.vc4qi.example/controller',
} as const;
const KEY: Record<string, string> = { [URI.NAB]: 'nab', [URI.LAB]: 'lab', [URI.MINISTRY]: 'ministry', [URI.NMI]: 'nmi' };
const G1 = '/credentialSubject/measurementGroups/0';
const G2 = '/credentialSubject/measurementGroups/1';

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
/** Re-issue CA (if changed) and the certificate, updating the certificate's digest of CA. */
async function reissue(changedCA?: JsonObject, editDCC?: (d: JsonObject) => void) {
  const overrides: Record<string, string> = {};
  if (changedCA) overrides[URI.CA] = await resign(changedCA);
  const dcc = json(URI.DCC);
  editDCC?.(dcc);
  if (overrides[URI.CA]) {
    dcc.relatedResource = [{ id: URI.CA, digestSRI: sha384SRI(new TextEncoder().encode(overrides[URI.CA])) }];
  }
  overrides[URI.DCC] = await resign(dcc);
  return overrides;
}
/**
 * Re-issue a chain bottom-up: each listed credential is edited (optionally), its
 * relatedResource digests are updated for already re-issued credentials, and it is re-signed.
 */
async function reissueChain(steps: [string, ((d: JsonObject) => void)?][]) {
  const overrides: Record<string, string> = {};
  for (const [uri, edit] of steps) {
    const doc = json(uri);
    edit?.(doc);
    if (Array.isArray(doc.relatedResource)) {
      doc.relatedResource = (doc.relatedResource as JsonObject[]).map(r => (overrides[String(r.id)]
        ? { id: r.id, digestSRI: sha384SRI(new TextEncoder().encode(overrides[String(r.id)])) } : r));
    }
    overrides[uri] = await resign(doc);
  }
  return overrides;
}
const subject = (d: JsonObject) => d.credentialSubject as JsonObject;
const scope0 = (d: JsonObject) => (subject(d).scope as JsonObject[])[0]!;
const groups = (d: JsonObject) => (d.credentialSubject as JsonObject).measurementGroups as JsonObject[];
const result0 = (d: JsonObject, group = 0) => (groups(d)[group]!.results as JsonObject[])[0]!;
function request(overrides: Partial<RelianceRequestInput> = {}) {
  return createRelianceRequest({
    requestId: 'urn:uuid:cal-v1-request', targetId: URI.DCC,
    selectedClaims: [{ id: 'g1', sourcePointer: G1 }, { id: 'g2', sourcePointer: G2 }],
    purpose: 'rely-on-calibration', binding: { id: manifest.id, version: manifest.version },
    profile: { id: profile.id, version: profile.version }, trustConfigId: 'https://vc4qi.example/trust/fixture-nab-anchor',
    evaluationTime: '2026-09-25T12:00:00Z', activityTime: '2026-09-25T12:00:00Z', suppliedEvidence: [URI.CA],
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    ...overrides,
  });
}
const run = (overrides: Record<string, string | null> = {}, req = request(), p = profile) =>
  evaluateCalSlice(req, catalogWith(overrides), manifest, p).then(e => e.result);
const trace = (r: Awaited<ReturnType<typeof run>>, predicate: string) => r.trace.find(t => t.predicate === predicate);

describe('calibration-direct-accreditation, migrated to the calibration v1 binding', () => {
  it('generated schemas, catalog and signed fixtures are up to date', () => {
    const root = new URL('../../../', import.meta.url);
    const tsx = new URL('node_modules/.bin/tsx', root).pathname;
    expect(() => execFileSync('node', [new URL('scripts/cal-v1/build-resources.mjs', root).pathname, '--check'], { stdio: 'pipe' })).not.toThrow();
    expect(() => execFileSync(tsx, [new URL('../scripts/generate-cal-v1-artifacts.ts', import.meta.url).pathname, '--check'], { stdio: 'pipe' })).not.toThrow();
  });

  it('accepts the signed certificate with route and record witnesses for each group', async () => {
    const result = await run();
    expect(result.artifactVerification.every(v => v.state === 'established')).toBe(true);
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'established' });
    expect(result.authorization.map(a => a.state)).toEqual(['established', 'established']);
    expect(result.authorization[0]?.routeWitnessIds)
      .toEqual(['route:direct-accreditation', URI.DCC, URI.CA, `record:${URI.CA}#scope-pressure`]);
    expect(trace(result, 'claim-coverage:g1:direct-accreditation')?.reason).toMatch(/not below the CMC 0.5 kPa/);
    expect(result.decision).toBe('accept');
  });

  it('an accreditation naming another laboratory rejects', async () => {
    const CA = json(URI.CA);
    (CA.credentialSubject as JsonObject).id = 'https://other-lab.vc4qi.example/controller';
    const result = await run(await reissue(CA));
    expect(trace(result, 'route:direct-accreditation:principal-binding')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a method outside the record contradicts coverage', async () => {
    const result = await run(await reissue(undefined, d => { groups(d)[0]!.methodIris = [`${CAL}DeadWeightTester`]; }));
    expect(result.authorization[0]).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a coverage factor other than 2 is not mapped (gate 4)', async () => {
    const result = await run(await reissue(undefined, d => { result0(d).coverageFactor = '3'; }));
    expect(trace(result, 'claim-mapping:g1')).toMatchObject({ gate: 4, state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('refuses a profile that does not state whether the CMC floor applies', async () => {
    const { bindingRules: _unused, ...withoutRule } = profileJson();
    await expect(run({}, request(), loadRelianceProfile(withoutRule))).rejects.toThrow(/applyCmcFloor/);
  });
});

describe('S18, S19, S21 under the calibration binding', () => {
  it('S18: a record restricting methods against a group naming none is not established (no empty-array bypass)', async () => {
    for (const edit of [(d: JsonObject) => { groups(d)[0]!.methodIris = []; }, (d: JsonObject) => { delete groups(d)[0]!.methodIris; }]) {
      const result = await run(await reissue(undefined, edit));
      expect(trace(result, 'claim-coverage:g1:direct-accreditation'))
        .toMatchObject({ state: 'not_established', reason: expect.stringMatching(/names no governed method/) });
      expect(result.authorization[0]?.state).toBe('not_established');
      expect(result.decision).toBe('not_established');
    }
  });

  it('S19: a failing first group is not erased by a passing later group', async () => {
    const result = await run(await reissue(undefined, d => { result0(d).value = '15000'; })); // 15 MPa > 10 MPa
    expect(result.authorization.map(a => a.state)).toEqual(['contradicted', 'established']);
    expect(trace(result, 'claim-coverage:g1:direct-accreditation')?.reason).toMatch(/15000 kPa is outside 0–10000 kPa/);
    expect(result.decision).toBe('reject');
  });

  it('S21: an uncertainty below the admitted CMC contradicts scope when the profile applies the floor', async () => {
    const overrides = await reissue(undefined, d => { result0(d).expandedUncertainty = '0.3'; }); // 0.3 kPa < 0.5 kPa
    const applied = await run(overrides);
    expect(trace(applied, 'claim-coverage:g1:direct-accreditation')?.reason).toMatch(/U = 0.3 kPa is below the admitted CMC 0.5 kPa/);
    expect(applied.authorization[0]?.state).toBe('contradicted');
    expect(applied.conformity).toMatchObject({ requested: false }); // independent of conformity
    expect(applied.decision).toBe('reject');
    const notApplied = loadRelianceProfile({ ...profileJson(), bindingRules: { applyCmcFloor: false } });
    expect((await run(overrides, request(), notApplied)).decision).toBe('accept');
  });
});

const capabilityRequest = (overrides: Partial<RelianceRequestInput> = {}) => request({
  requestId: 'urn:uuid:cal-v1-capability', targetId: URI.DCC2, selectedClaims: [{ id: 'g1', sourcePointer: G1 }],
  suppliedEvidence: [URI.O, URI.CA], ...selects(capabilityProfile), ...overrides,
});
const runCapability = (overrides: Record<string, string | null> = {}, p = capabilityProfile) => run(overrides, capabilityRequest(), p);

describe('calibration-capability: a bounded operational scope within the accreditation', () => {
  it('accepts DCC-2 through the operational-scope route, covered by the operational scope record', async () => {
    const result = await runCapability();
    expect(trace(result, 'route:operational-scope')).toMatchObject({ state: 'established' });
    expect(trace(result, 'route:operational-scope:bounded-projection')?.reason).toMatch(/scope-pressure-low lies within scope-pressure/);
    expect(result.authorization[0]?.routeWitnessIds)
      .toEqual(['route:operational-scope', URI.DCC2, URI.O, URI.CA, `record:${URI.O}#scope-pressure-low`]);
    expect(result.decision).toBe('accept');
  });

  it('an operational scope wider than the accreditation is no valid projection (no widening)', async () => {
    const result = await runCapability(await reissueChain([
      [URI.O, d => { (scope0(d).range as JsonObject).to = '20'; }], [URI.DCC2],
    ]));
    expect(trace(result, 'route:operational-scope:bounded-projection'))
      .toMatchObject({ state: 'contradicted', reason: expect.stringMatching(/0–20000 kPa is not within 0–10000 kPa/) });
    expect(result.decision).toBe('reject');
  });

  it('a better capability than admitted widens the scope when the profile applies the CMC floor', async () => {
    const overrides = await reissueChain([
      [URI.O, d => { (scope0(d).cmcFloor as JsonObject).value = '0.3'; }],
      [URI.DCC2, d => { result0(d).expandedUncertainty = '0.4'; }],
    ]);
    const applied = await runCapability(overrides);
    expect(trace(applied, 'route:operational-scope:bounded-projection')?.reason).toMatch(/CMC 0.3 kPa is below the admitted 0.5 kPa/);
    expect(applied.decision).toBe('reject');
    const notApplied = loadRelianceProfile({ ...profileJson('cal-verifier-capability-1.json'), bindingRules: { applyCmcFloor: false } });
    expect((await runCapability(overrides, notApplied)).decision).toBe('accept');
  });

  it('C08 analogue: an accreditation without scope-maintenance permission gives no valid projection', async () => {
    const result = await runCapability(await reissueChain([
      [URI.CA, d => { subject(d).permittedActivity = [`${CAL}issueCalibrationCertificate`]; }], [URI.O], [URI.DCC2],
    ]));
    expect(trace(result, 'route:operational-scope:projection-permission')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a group inside the accreditation but outside the operational scope is not rescued by the parent', async () => {
    const result = await runCapability(await reissueChain([[URI.DCC2, d => { result0(d).value = '5000'; }]]));
    expect(trace(result, 'claim-coverage:g1:operational-scope'))
      .toMatchObject({ state: 'contradicted', reason: expect.stringMatching(/5000 kPa is outside 0–2000 kPa/) });
    expect(result.authorization[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });
});

const mandateRequest = (overrides: Partial<RelianceRequestInput> = {}) => request({
  requestId: 'urn:uuid:cal-v1-mandate', targetId: URI.DCCN, selectedClaims: [{ id: 'g1', sourcePointer: G1 }],
  suppliedEvidence: [URI.M], ...selects(nmiProfile), ...overrides,
});
const runMandate = (overrides: Record<string, string | null> = {}, p = nmiProfile) => run(overrides, mandateRequest(), p);

describe('nmi-legal-mandate: a statutory route with no accreditation root', () => {
  it('accepts DCC-N through the statutory-mandate route; no accreditation is on the path', async () => {
    const result = await runMandate();
    expect(trace(result, 'route:statutory-mandate')).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.routeWitnessIds)
      .toEqual(['route:statutory-mandate', URI.DCCN, URI.M, `record:${URI.M}#scope-pressure-primary`]);
    expect(result.authorization[0]?.routeWitnessIds.some(w => w.includes('nab.'))).toBe(false);
    expect(result.limitations.join(' ')).toMatch(/no legal effect/);
    expect(result.decision).toBe('accept');
  });

  it('the mandate issuer must be configured for designating metrology institutes', async () => {
    const anchors = [
      [{ id: URI.NAB, purposes: ['accredit-calibration-laboratories'] }],
      [{ id: URI.MINISTRY, purposes: ['accredit-calibration-laboratories'] }],
    ];
    for (const trustAnchors of anchors) {
      const result = await runMandate({}, loadRelianceProfile({ ...profileJson('cal-verifier-nmi-1.json'), trustAnchors }));
      expect(trace(result, 'route:statutory-mandate:trust-anchor')).toMatchObject({ state: 'not_established' });
      expect(result.decision).toBe('not_established');
    }
  });

  it('a mandate naming another institute contradicts principal binding', async () => {
    const result = await runMandate(await reissueChain([
      [URI.M, d => { subject(d).id = 'https://other-nmi.vc4qi.example/controller'; }], [URI.DCCN],
    ]));
    expect(trace(result, 'route:statutory-mandate:principal-binding')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('a certificate outside the mandated methods is not covered', async () => {
    const result = await runMandate(await reissueChain([
      [URI.DCCN, d => { groups(d)[0]!.methodIris = [`${CAL}PressureComparison`]; }],
    ]));
    expect(trace(result, 'claim-coverage:g1:statutory-mandate')).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });
});

describe('several permitted routes compose as a three-valued OR', () => {
  const allRoutes = loadRelianceProfile({
    ...profileJson(), id: 'https://vc4qi.example/profiles/cal-verifier-all-routes',
    trustAnchors: [{ id: URI.NAB, purposes: ['accredit-calibration-laboratories'] }, { id: URI.MINISTRY, purposes: ['designate-national-metrology-institutes'] }],
    authority: { certificateRoutes: ['direct-accreditation', 'operational-scope', 'statutory-mandate'], globalRestrictions: [], maxRoutes: 4 },
  });
  const req = (targetId: string, suppliedEvidence: string[], selectedClaims = [{ id: 'g1', sourcePointer: G1 }]) =>
    request({ targetId, suppliedEvidence, selectedClaims, ...selects(allRoutes) });

  it('each certificate is accepted through the one route its own references reach', async () => {
    const expected: [string, string[], string][] = [
      [URI.DCC, [URI.CA], 'direct-accreditation'], [URI.DCC2, [URI.O, URI.CA], 'operational-scope'], [URI.DCCN, [URI.M], 'statutory-mandate'],
    ];
    for (const [target, evidence, winner] of expected) {
      const result = await run({}, req(target, evidence), allRoutes);
      expect(result.authorization[0]?.routeWitnessIds[0]).toBe(`route:${winner}`);
      expect(result.decision).toBe('accept');
    }
  });

  it('a contradicted route beside routes with no reference is not established, not rejected', async () => {
    const CA = json(URI.CA);
    (CA.credentialSubject as JsonObject).id = 'https://other-lab.vc4qi.example/controller';
    const result = await run(await reissue(CA), req(URI.DCC, [URI.CA]), allRoutes);
    expect(trace(result, 'route:direct-accreditation')).toMatchObject({ state: 'contradicted' });
    expect(trace(result, 'route:statutory-mandate')).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });
});
