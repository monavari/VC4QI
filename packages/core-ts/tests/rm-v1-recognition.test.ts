// SPDX-License-Identifier: Apache-2.0
// Recognition of the accreditation body by an arrangement anchor, one credential per
// recognized body (a W3C Recognized Entities credential, Working Draft of 4 November
// 2026): ledger E01-E03 and E16-E20. A and H point up to R through termsOfUse, pinned
// by digest; the verifier abroad trusts only the fictional Global ACI stand-in.
import { describe, expect, it } from 'vitest';
import { loadRelianceProfile, type RelianceProfile } from '../src/reliance/index.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import type { JsonObject } from '../src/types.js';
import {
  catalogWith, globalAciProfile, globalAciProfileJson, json, manifest, profile, reissue, request, statusListWith, URI,
} from './rm-v1-helpers.js';

type Result = Awaited<ReturnType<typeof evaluateRmSlice>>['result'];
const abroad = (p: RelianceProfile = globalAciProfile, target: string = URI.D) =>
  request({ targetId: target, profile: { id: p.id, version: p.version } });
const run = (overrides: Record<string, string | null> = {}, p: RelianceProfile = globalAciProfile, target: string = URI.D) =>
  evaluateRmSlice(abroad(p, target), catalogWith(overrides), manifest, p).then(e => e.result);
const domestic = (overrides: Record<string, string | null> = {}) =>
  evaluateRmSlice(request(), catalogWith(overrides), manifest, profile).then(e => e.result);
const anchorBasis = (result: Result) => result.trace.find(t => t.predicate === 'route:operational-scope:trust-anchor');
const labAnchor = (result: Result) => result.trace.find(t => t.predicate === 'support:laboratory-anchor');
const subject = (r: JsonObject) => r.credentialSubject as JsonObject;
const actions = (r: JsonObject) => subject(r).recognizedTo as JsonObject[];
const RM_PRODUCTION = 'Reference material production';

/** R re-issued by Global ACI after `edit`, and the chain below it re-pinned and re-signed. */
async function recognitionWith(edit: (r: JsonObject) => void): Promise<Record<string, string | null>> {
  const r = json(URI.R);
  edit(r);
  return reissue({ [URI.R]: r });
}

describe('E01-E03: the verifier abroad follows A and H up to the recognition of their issuer', () => {
  it('E01: D178 is relied upon; R is on the route and support witness paths and its pin holds', async () => {
    const result = await run();
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    // Identical to the Python mirror's reason (test_reasons_match_typescript_for_the_accepted_case).
    expect(anchorBasis(result)?.reason).toBe(`${URI.NAB} is recognized by ${URI.GACI} (a configured anchor for `
      + 'recognize-accreditation-bodies) to accredit for Reference material production under ISO 17034:2016, '
      + `in force at 2026-01-20T00:00:00Z, in ${URI.R}.`);
    expect(labAnchor(result)).toMatchObject({ state: 'established' });
    expect(labAnchor(result)?.reason).toMatch(/Testing under ISO\/IEC 17025:2017/);
    expect(result.authorization[0]?.routeWitnessIds).toContain(URI.R);
    expect(result.support[0]?.witnessIds).toContain(URI.R);
    expect(result.trace.find(t => t.predicate === 'restriction:accreditation-suspension')).toMatchObject({ state: 'established' });
    expect(result.trace.some(t => t.predicate === 'related-resource-integrity' && t.nodeUse.startsWith(`${URI.A} |`)
      && t.reason.startsWith(URI.R) && t.state === 'established')).toBe(true);
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

  it('D197 is authorized through R and rejected only by the verifier\'s guarded rule', async () => {
    const result = await run({}, globalAciProfile, 'https://producer.vc4qi.example/credentials/D197');
    expect(result.authorization[0]?.state).toBe('established');
    expect(result.conformity).toMatchObject({ state: 'contradicted' });
    expect(result.decision).toBe('reject');
  });

  it('E02: a recognition only for testing contradicts the producer route', async () => {
    const overrides = await recognitionWith(r => {
      subject(r).recognizedTo = actions(r).filter(a => (a.mainScope as JsonObject).activity !== RM_PRODUCTION);
    });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/not to accredit for Reference material production/);
    expect(labAnchor(result)).toMatchObject({ state: 'established' });
    expect(result.decision).toBe('reject');
  });

  it('E02 (laboratory): a recognition without the testing main scope contradicts required support', async () => {
    const overrides = await recognitionWith(r => {
      subject(r).recognizedTo = actions(r).filter(a => (a.mainScope as JsonObject).activity === RM_PRODUCTION);
    });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    expect(labAnchor(result)).toMatchObject({ state: 'contradicted' });
    expect(result.support[0]?.state).toBe('contradicted');
    expect(result.decision).toBe('reject');
  });
});

describe('E16-E20: what a recognition cannot do', () => {
  it('E16: a recognition of another body breaks the handshake and contradicts', async () => {
    const overrides = await recognitionWith(r => { subject(r).id = 'https://other-ab.vc4qi.example/controller'; });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/recognizes https:\/\/other-ab\.vc4qi\.example\/controller, not https:\/\/nab\.vc4qi\.example\/controller/);
    expect(result.decision).toBe('reject');
  });

  it('E17: Global ACI suspends its recognition of the NAB, and reliance through it is contradicted', async () => {
    const result = await run({ [URI.GACI_SUSPENSION]: await statusListWith(URI.GACI_SUSPENSION, [0]) });
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/has suspended its recognition https:\/\/global-aci\.vc4qi\.example\/credentials\/R/);
    expect(result.decision).toBe('reject');
  });

  it('E17 (domestic): the same suspension does not touch a verifier that anchors the body directly', async () => {
    const result = await domestic({ [URI.GACI_SUSPENSION]: await statusListWith(URI.GACI_SUSPENSION, [0]) });
    expect(result.decision).toBe('accept');
    expect(result.authorization[0]?.routeWitnessIds).not.toContain(URI.R);
  });

  it('E17 (domestic): a verifier that anchors the body directly does not need the recognition at all', async () => {
    const result = await domestic({ [URI.R]: null });
    expect(result.decision).toBe('accept');
  });

  it('E18: recognition without stated actions is not accepted', async () => {
    const result = await run(await recognitionWith(r => { delete subject(r).recognizedTo; }));
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/without recognized actions/);
  });

  it('E19: recognition that begins after the activity cannot authorize it', async () => {
    const result = await run(await recognitionWith(r => { for (const a of actions(r)) a.validFrom = '2026-02-01T00:00:00Z'; }));
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/at the activity time 2026-01-20/);
  });

  it('E20: a recognition by an issuer the profile does not anchor for recognition establishes nothing', async () => {
    const p = loadRelianceProfile({ ...globalAciProfileJson(),
      trustAnchors: [{ id: URI.GACI, purposes: ['accredit-rm-producers'] }] });
    const result = await run({}, p);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/is not a configured anchor for recognize-accreditation-bodies/);
  });

  it('E20: a body cannot recognize itself', async () => {
    const overrides = await recognitionWith(r => {
      r.issuer = { id: URI.NAB, type: 'RecognizedIssuer', name: 'Fictional national accreditation body' };
      // Its own status entries, so that the recognition is otherwise usable.
      r.credentialStatus = [[URI.NAB_STATUS, 'revocation'], [URI.NAB_SUSPENSION, 'suspension']].map(([list, purpose]) => ({
        id: `${list}#5`, type: 'BitstringStatusListEntry', statusPurpose: purpose, statusListIndex: '5', statusListCredential: list,
      }));
    });
    const result = await run(overrides);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/https:\/\/nab\.vc4qi\.example\/controller, issuer of .* is not a configured anchor/);
    expect(result.decision).toBe('not_established');
  });

  it('an unavailable recognition leaves authority not established; nothing is guessed', async () => {
    const result = await run({ [URI.R]: null });
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/not available: RESOURCE_NOT_FOUND/);
    expect(result.decision).toBe('not_established');
  });

  it('a matching action that names another recognizer is contradicted', async () => {
    const result = await run(await recognitionWith(r => {
      for (const a of actions(r)) a.recognizedBy = 'https://other-anchor.vc4qi.example/controller';
    }));
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

  it('a recognition that nothing in the chain references confers nothing, even when supplied', async () => {
    const A = json(URI.A);
    delete A.termsOfUse;
    delete A.relatedResource;
    const overrides = await reissue({ [URI.A]: A });
    const req = request({ profile: { id: globalAciProfile.id, version: globalAciProfile.version },
      suppliedEvidence: [URI.A, URI.O, URI.S, URI.H, URI.R] });
    const result = await evaluateRmSlice(req, catalogWith(overrides), manifest, globalAciProfile).then(e => e.result);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/points up to no RecognizedEntityCredential/);
    expect(labAnchor(result)).toMatchObject({ state: 'established' });
    expect(result.decision).toBe('not_established');
  });
});
