// SPDX-License-Identifier: Apache-2.0
// Recognition of the accreditation body through an arrangement's signatory list (a W3C
// Recognized Entities credential, Working Draft of 4 November 2026): ledger E01-E03 and
// E16-E20. The verifier abroad trusts only the fictional Global ACI stand-in.
import { describe, expect, it } from 'vitest';
import { loadRelianceProfile, type RelianceProfile } from '../src/reliance/index.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import type { JsonObject } from '../src/types.js';
import {
  catalogWith, globalAciProfile, globalAciProfileJson, json, manifest, profile, request, resign, statusListWith, URI,
} from './rm-v1-helpers.js';

type Result = Awaited<ReturnType<typeof evaluateRmSlice>>['result'];
const abroad = (p: RelianceProfile = globalAciProfile, target: string = URI.D) =>
  request({ targetId: target, profile: { id: p.id, version: p.version } });
const run = (overrides: Record<string, string | null> = {}, p: RelianceProfile = globalAciProfile, target: string = URI.D) =>
  evaluateRmSlice(abroad(p, target), catalogWith(overrides), manifest, p).then(e => e.result);
const anchorBasis = (result: Result) => result.trace.find(t => t.predicate === 'route:operational-scope:trust-anchor');
const labAnchor = (result: Result) => result.trace.find(t => t.predicate === 'support:laboratory-anchor');
const entity = (list: JsonObject) => (list.credentialSubject as JsonObject[])[0]!;
const actions = (list: JsonObject) => entity(list).recognizedTo as JsonObject[];
const RM_PRODUCTION = 'Reference material production';

/** The signatory list re-issued by its own issuer after `edit`. */
async function listWith(edit: (list: JsonObject) => void): Promise<Record<string, string>> {
  const list = json(URI.SIGNATORIES);
  edit(list);
  return { [URI.SIGNATORIES]: await resign(list) };
}

describe('E01-E03: the verifier abroad reaches the accreditation body through the signatory list', () => {
  it('E01: D178 is relied upon; the list is on the route and support witness paths', async () => {
    const result = await run();
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    expect(anchorBasis(result)?.reason).toMatch(/recognized by https:\/\/global-aci\.vc4qi\.example\/controller .* to accredit for Reference material production under ISO 17034:2016/);
    expect(labAnchor(result)).toMatchObject({ state: 'established' });
    expect(labAnchor(result)?.reason).toMatch(/Testing under ISO\/IEC 17025:2017/);
    expect(result.authorization[0]?.routeWitnessIds).toContain(URI.SIGNATORIES);
    expect(result.support[0]?.witnessIds).toContain(URI.SIGNATORIES);
    expect(result.trace.find(t => t.predicate === 'restriction:accreditation-suspension')).toMatchObject({ state: 'established' });
    expect(result.trace.some(t => t.nodeUse.startsWith(`${URI.SIGNATORIES} |`) && t.nodeUse.includes('| recognition-list |'))).toBe(true);
    expect(result.conformity).toMatchObject({ requested: true, state: 'established' });
    expect(result.decision).toBe('accept');
  });

  it('E03: recognized, action recognized, and D520 is still outside the producer\'s scope', async () => {
    const result = await run({}, globalAciProfile, 'https://producer.vc4qi.example/credentials/D520');
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.state).toBe('contradicted');
    expect(result.authorization[0]?.reasons.join(' ')).toMatch(/50|500|range/);
    expect(result.decision).toBe('reject');
  });

  it('D197 is authorized through the list and rejected only by the verifier\'s guarded rule', async () => {
    const result = await run({}, globalAciProfile, 'https://producer.vc4qi.example/credentials/D197');
    expect(result.authorization[0]?.state).toBe('established');
    expect(result.conformity).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('E02: a list recognizing the body only for testing contradicts the producer route', async () => {
    const overrides = await listWith(list => {
      entity(list).recognizedTo = actions(list).filter(a => (a.mainScope as JsonObject).activity !== RM_PRODUCTION);
    });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/not to accredit for Reference material production/);
    expect(labAnchor(result)).toMatchObject({ state: 'established' });
    expect(result.decision).toBe('reject');
  });

  it('E02 (laboratory): a list without the testing main scope contradicts required support', async () => {
    const overrides = await listWith(list => {
      entity(list).recognizedTo = actions(list).filter(a => (a.mainScope as JsonObject).activity === RM_PRODUCTION);
    });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    expect(labAnchor(result)).toMatchObject({ state: 'contradicted' });
    expect(result.support[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });
});

describe('E16-E20: what a signatory list cannot do', () => {
  it('E16: a list that does not name the accreditation body leaves authority not established', async () => {
    const overrides = await listWith(list => { entity(list).id = 'https://other-ab.vc4qi.example/controller'; });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/does not list https:\/\/nab\.vc4qi\.example\/controller/);
    expect(result.decision).toBe('not_established');
  });

  it('E17: the arrangement anchor suspends its list, and reliance on it is contradicted', async () => {
    const result = await run({ [URI.GACI_SUSPENSION]: await statusListWith(URI.GACI_SUSPENSION, [0]) });
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/has suspended its signatory list/);
    expect(result.decision).toBe('reject');
  });

  it('E17 (domestic): the same suspension does not touch a verifier that trusts the body directly', async () => {
    const overrides = { [URI.GACI_SUSPENSION]: await statusListWith(URI.GACI_SUSPENSION, [0]) };
    const result = await evaluateRmSlice(request(), catalogWith(overrides), manifest, profile).then(e => e.result);
    expect(result.decision).toBe('accept');
    expect(result.artifactVerification.some(a => a.artifactId === URI.SIGNATORIES)).toBe(false);
  });

  it('E18: recognition without stated actions is not accepted', async () => {
    const overrides = await listWith(list => { delete entity(list).recognizedTo; });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/without recognized actions/);
  });

  it('E19: recognition that begins after the activity cannot authorize it', async () => {
    const overrides = await listWith(list => { for (const a of actions(list)) a.validFrom = '2026-02-01T00:00:00Z'; });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/at the activity time 2026-01-20/);
  });

  it('E20: a list signed by an issuer the profile does not anchor for the list purpose establishes nothing', async () => {
    const p = loadRelianceProfile({ ...globalAciProfileJson(),
      trustAnchors: [{ id: URI.GACI, purposes: ['accredit-rm-producers'] }] });
    const result = await run({}, p);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/is not a configured anchor for recognize-accreditation-bodies/);
  });

  it('an unavailable list leaves authority not established; nothing is guessed', async () => {
    const result = await run({ [URI.SIGNATORIES]: null });
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/not available: RESOURCE_NOT_FOUND/);
    expect(result.decision).toBe('not_established');
  });

  it('a matching action that names another recognizer is contradicted', async () => {
    const overrides = await listWith(list => { for (const a of actions(list)) a.recognizedBy = 'https://other-anchor.vc4qi.example/controller'; });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
  });

  it('malformed recognition rules are never defaulted', async () => {
    const json = globalAciProfileJson();
    const rules = (json.bindingRules as JsonObject).recognition as JsonObject;
    delete rules.action;
    const result = await run({}, loadRelianceProfile(json));
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/recognition rules are malformed/);
  });

  it('a holder cannot supply a list the profile does not name', async () => {
    const p = loadRelianceProfile({ ...globalAciProfileJson(), bindingRules: {} });
    const req = request({ profile: { id: p.id, version: p.version }, suppliedEvidence: [URI.A, URI.O, URI.S, URI.H, URI.SIGNATORIES] });
    const result = await evaluateRmSlice(req, catalogWith(), manifest, p).then(e => e.result);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });
});
