// SPDX-License-Identifier: Apache-2.0
// A state's appointment of the accreditation body (ledger E21-E28): APP, in the shape of
// EBSI's VerifiableAuthorisationForTrustChain, is named by A, A2 and H in a termsOfUse
// IssuedUnderPolicy and pinned by digest. A verifier that anchors the state follows it;
// a verifier that anchors the body, or Global ACI, never relies on it.
import { describe, expect, it } from 'vitest';
import { loadRelianceProfile, type RelianceProfile } from '../src/reliance/index.js';
import { evaluateRmSlice } from '../src/reliance/rm-v1-slice.js';
import type { JsonObject } from '../src/types.js';
import {
  catalogWith, globalAciProfile, globalAciProfileJson, json, manifest, profile, reissue, request, stateProfile,
  stateProfileJson, statusListWith, URI,
} from './rm-v1-helpers.js';

type Result = Awaited<ReturnType<typeof evaluateRmSlice>>['result'];
const run = (overrides: Record<string, string | null> = {}, p: RelianceProfile = stateProfile, target: string = URI.D) =>
  evaluateRmSlice(request({ targetId: target, profile: { id: p.id, version: p.version } }), catalogWith(overrides), manifest, p)
    .then(e => e.result);
const anchorBasis = (result: Result) => result.trace.find(t => t.predicate === 'route:operational-scope:trust-anchor');
const labAnchor = (result: Result) => result.trace.find(t => t.predicate === 'support:laboratory-anchor');
const subject = (d: JsonObject) => d.credentialSubject as JsonObject;
const permissions = (d: JsonObject) => subject(d).permissionFor as JsonObject[];

/** APP re-issued by the state after `edit`, and the chain below it re-pinned and re-signed. */
async function appointmentWith(edit: (app: JsonObject) => void): Promise<Record<string, string | null>> {
  const app = json(URI.APP);
  edit(app);
  return reissue({ [URI.APP]: app });
}

describe('E21-E22: the verifier that anchors the state follows A and H up to the appointment', () => {
  it('E21: D178 is relied upon; APP is on the route and support witness paths and its pin holds', async () => {
    const result = await run();
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    // Identical to the Python mirror's reason.
    expect(anchorBasis(result)?.reason).toBe(`${URI.NAB} is appointed by ${URI.STATE} (a configured anchor for `
      + 'appoint-accreditation-bodies) to issue RmAccreditation in https://publications.europa.eu/resource/authority/atu/DEU, '
      + `in force at 2026-01-20T00:00:00Z, in ${URI.APP}.`);
    expect(labAnchor(result)).toMatchObject({ state: 'established' });
    expect(labAnchor(result)?.reason).toMatch(/to issue RmLabAuthority/);
    expect(result.authorization[0]?.routeWitnessIds).toContain(URI.APP);
    expect(result.authorization[0]?.routeWitnessIds).not.toContain(URI.R);
    expect(result.support[0]?.witnessIds).toContain(URI.APP);
    expect(result.trace.find(t => t.predicate === 'restriction:accreditation-suspension')).toMatchObject({ state: 'established' });
    expect(result.trace.some(t => t.predicate === 'related-resource-integrity' && t.nodeUse.startsWith(`${URI.A} |`)
      && t.reason.startsWith(URI.APP) && t.state === 'established')).toBe(true);
    expect(result.decision).toBe('accept');
  });

  it('E22: D520 is appointed through and still outside the producer\'s scope; D197 fails only the guarded rule', async () => {
    const r520 = await run({}, stateProfile, 'https://producer.vc4qi.example/credentials/D520');
    expect(anchorBasis(r520)).toMatchObject({ state: 'established' });
    expect(r520.decision).toBe('reject');
    const r197 = await run({}, stateProfile, 'https://producer.vc4qi.example/credentials/D197');
    expect(r197.authorization[0]?.state).toBe('established');
    expect(r197.conformity).toMatchObject({ state: 'contradicted' });
  });
});

describe('E23-E28: what an appointment decides, and for whom', () => {
  it('E23: the state suspends its appointment, and reliance through it is contradicted', async () => {
    const result = await run({ [URI.STATE_SUSPENSION]: await statusListWith(URI.STATE_SUSPENSION, [0]) });
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/has suspended its appointment https:\/\/state\.vc4qi\.example\/credentials\/APP/);
    expect(result.decision).toBe('reject');
  });

  it('E23: the state revokes its appointment, and reliance through it is contradicted', async () => {
    const result = await run({ [URI.STATE_STATUS]: await statusListWith(URI.STATE_STATUS, [0]) });
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/Appointment https:\/\/state\.vc4qi\.example\/credentials\/APP is not usable/);
    expect(result.decision).toBe('reject');
  });

  it('E24: verifiers that anchor the body or Global ACI never rely on the appointment', async () => {
    const suspended = { [URI.STATE_SUSPENSION]: await statusListWith(URI.STATE_SUSPENSION, [0]) };
    const domestic = await run(suspended, profile);
    expect(domestic.decision).toBe('accept');
    expect(domestic.authorization[0]?.routeWitnessIds).not.toContain(URI.APP);
    expect((await run({ [URI.APP]: null }, profile)).decision).toBe('accept');
    const abroad = await run(suspended, globalAciProfile);
    expect(abroad.decision).toBe('accept');
    expect(abroad.authorization[0]?.routeWitnessIds).not.toContain(URI.APP);
  });

  it('E25: an appointment of another body breaks the handshake and contradicts', async () => {
    const result = await run(await appointmentWith(app => { subject(app).id = 'https://other-ab.vc4qi.example/controller'; }));
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/appoints https:\/\/other-ab\.vc4qi\.example\/controller, not https:\/\/nab\.vc4qi\.example\/controller/);
    expect(result.decision).toBe('reject');
  });

  it('E26: an appointment that does not permit laboratory authorities contradicts required support', async () => {
    const result = await run(await appointmentWith(app => {
      subject(app).permissionFor = permissions(app).filter(p => !(p.types as string[]).includes('RmLabAuthority'));
    }));
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    expect(labAnchor(result)).toMatchObject({ state: 'contradicted' });
    expect(labAnchor(result)?.reason).toMatch(/permits https:\/\/nab\.vc4qi\.example\/controller to issue RmAccreditation, not RmLabAuthority/);
    expect(result.decision).toBe('reject');
  });

  it('E26: an appointment for another jurisdiction than the verifier requires contradicts', async () => {
    const json = stateProfileJson();
    ((json.bindingRules as JsonObject).appointment as JsonObject).jurisdiction = 'https://publications.europa.eu/resource/authority/atu/FRA';
    const result = await run({}, loadRelianceProfile(json));
    expect(anchorBasis(result)).toMatchObject({ state: 'contradicted' });
    expect(anchorBasis(result)?.reason).toMatch(/permits RmAccreditation for .*atu\/DEU, not for .*atu\/FRA/);
  });

  it('E27: an appointment that begins after the activity cannot authorize it', async () => {
    const result = await run(await appointmentWith(app => { app.validFrom = '2026-02-01T00:00:00Z'; }));
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/was not in force at the activity time 2026-01-20/);
    expect(result.decision).toBe('not_established');
  });

  it('E28: an appointment by an issuer the profile does not anchor for appointing establishes nothing', async () => {
    const p = loadRelianceProfile({ ...stateProfileJson(), trustAnchors: [{ id: URI.STATE, purposes: ['recognize-accreditation-bodies'] }] });
    const result = await run({}, p);
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/is not a configured anchor for appoint-accreditation-bodies/);
  });

  it('a grant that names no appointment establishes nothing for the state verifier', async () => {
    const A = json(URI.A);
    A.termsOfUse = (A.termsOfUse as JsonObject[]).filter(t => t.type !== 'IssuedUnderPolicy');
    A.relatedResource = (A.relatedResource as JsonObject[]).filter(r => r.id !== URI.APP);
    const result = await run(await reissue({ [URI.A]: A }));
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/names no VerifiableAuthorisationForTrustChain in an IssuedUnderPolicy/);
    expect(result.decision).toBe('not_established');
  });

  it('an unavailable appointment leaves authority not established; nothing is guessed', async () => {
    const result = await run({ [URI.APP]: null });
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(result.decision).toBe('not_established');
  });

  it('malformed appointment rules are never defaulted', async () => {
    const json = stateProfileJson();
    delete ((json.bindingRules as JsonObject).appointment as JsonObject).appointerPurpose;
    const result = await run({}, loadRelianceProfile(json));
    expect(anchorBasis(result)).toMatchObject({ state: 'not_established' });
    expect(anchorBasis(result)?.reason).toMatch(/appointment rules are malformed/);
  });

  it('a verifier that accepts both bases relies on recognition when the appointment is suspended', async () => {
    const both = loadRelianceProfile({
      ...globalAciProfileJson(),
      trustAnchors: [
        { id: URI.STATE, purposes: ['appoint-accreditation-bodies'] },
        { id: URI.GACI, purposes: ['recognize-accreditation-bodies'] },
      ],
      bindingRules: { ...(globalAciProfileJson().bindingRules as JsonObject), ...(stateProfileJson().bindingRules as JsonObject) },
    });
    const ok = await run({}, both);
    expect(ok.authorization[0]?.routeWitnessIds).toContain(URI.APP);
    const result = await run({ [URI.STATE_SUSPENSION]: await statusListWith(URI.STATE_SUSPENSION, [0]) }, both);
    expect(anchorBasis(result)).toMatchObject({ state: 'established' });
    expect(result.authorization[0]?.routeWitnessIds).toContain(URI.R);
    expect(result.decision).toBe('accept');
  });
});
