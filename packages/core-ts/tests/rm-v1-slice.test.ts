// SPDX-License-Identifier: Apache-2.0
import * as ed from '@noble/ed25519';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { createProof } from '../src/proofs/index.js';
import {
  catalogDocumentLoader, createRelianceRequest, loadBindingManifest, sha384SRI,
  StaticResourceCatalog, type StaticResourceInput,
} from '../src/reliance/index.js';
import { evaluateRmSlice, verifyRmArtifact } from '../src/reliance/rm-v1-artifacts.js';
import { readPinnedResources } from '../src/reliance/rm-v1-node.js';
import type { JsonObject } from '../src/types.js';

const repoRoot = new URL('../../../', import.meta.url);
const rmDir = new URL('bindings/experimental/rm-v1/', repoRoot);
const manifest = loadBindingManifest(JSON.parse(readFileSync(new URL('manifest.json', rmDir), 'utf8')));
const signed = readPinnedResources(new URL('test-vectors/signed/catalog.json', rmDir).pathname);

const URI = {
  A: 'https://nab.vc4qi.example/credentials/A',
  H: 'https://nab.vc4qi.example/credentials/H',
  O: 'https://producer.vc4qi.example/credentials/O',
  S: 'https://lab.vc4qi.example/credentials/S',
  D: 'https://producer.vc4qi.example/credentials/D178',
  D197: 'https://producer.vc4qi.example/credentials/D197',
  D520: 'https://producer.vc4qi.example/credentials/D520',
  PRODUCER: 'https://producer.vc4qi.example/controller',
  LAB: 'https://lab.vc4qi.example/controller',
};
const NOW = '2026-09-25T12:00:00Z';
const budget = { maxResources: 256, maxBytes: 5_000_000 };
const text = (uri: string) => new TextDecoder().decode(signed.find(r => r.uri === uri)!.bytes);
const json = (uri: string) => JSON.parse(text(uri)) as JsonObject;
const serialize = (document: JsonObject) => `${JSON.stringify(document, null, 2)}\n`;

/** Catalog with the pinned resources and signed fixtures, optionally replaced or removed. */
function session(overrides: Record<string, string | null> = {}) {
  const base = readPinnedResources(new URL('catalog.json', rmDir).pathname);
  const inputs: StaticResourceInput[] = [...base, ...signed]
    .filter(resource => overrides[resource.uri] !== null)
    .map(resource => {
      const replacement = overrides[resource.uri];
      if (typeof replacement !== 'string') return resource;
      const bytes = new TextEncoder().encode(replacement);
      return { ...resource, bytes, digestSRI: sha384SRI(bytes) };
    });
  return new StaticResourceCatalog(inputs).openSession(budget);
}

async function fixtureKey(name: string) {
  const seed = createHash('sha256').update(`vc4qi-rm-v1-insecure-fixture-key:${name}`).digest();
  return { seed, publicKey: await ed.getPublicKeyAsync(seed) };
}

/** Re-sign an unsigned document with a named fixture key, claiming `method`. */
async function resign(document: JsonObject, keyName: string, method: string): Promise<string> {
  const { proof: _proof, ...unsigned } = document;
  const key = await fixtureKey(keyName);
  const proof = await createProof(unsigned, {
    id: method, controller: method.split('#')[0]!, privateKey: key.seed, publicKey: key.publicKey,
  }, { created: '2026-02-01T00:00:00Z', documentLoader: catalogDocumentLoader(session()), safe: true });
  return serialize({ ...unsigned, proof });
}

function request(overrides: Partial<Parameters<typeof createRelianceRequest>[0]> = {}) {
  return createRelianceRequest({
    requestId: 'urn:uuid:rm-v1-slice-request',
    targetId: URI.D,
    selectedClaims: [{ id: 'as-mass-fraction', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }],
    purpose: 'use-as-calibrant',
    binding: { id: manifest.id, version: manifest.version },
    profile: { id: 'https://vc4qi.example/profiles/rm-verifier', version: '1' },
    trustConfigId: 'https://vc4qi.example/trust/fixture-nab-anchor',
    evaluationTime: NOW,
    activityTime: NOW,
    suppliedEvidence: [URI.A, URI.O, URI.S, URI.H],
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
    conformity: { requirementId: 'as-plus-u-le-200', decisionRuleId: 'simple-acceptance' },
    ...overrides,
  });
}

describe('RM v1 signed vertical slice (I1)', () => {
  it('generated signed fixtures are up to date', () => {
    const tsx = new URL('node_modules/.bin/tsx', repoRoot).pathname;
    const script = new URL('../scripts/generate-rm-v1-artifacts.ts', import.meta.url).pathname;
    expect(() => execFileSync(tsx, [script, '--check'], { stdio: 'pipe' })).not.toThrow();
  });

  it.each(['A', 'H', 'O', 'S', 'D', 'D197', 'D520'] as const)('%s is protected, authorized, valid and integrity-bound', async name => {
    const result = await verifyRmArtifact(URI[name], session(), { manifest, evaluationTime: NOW });
    expect(result.protection.state, result.protection.reasons.join('; ')).toBe('established');
    expect(result.checks.map(c => c.check)).toEqual(
      ['resolve', 'parse', 'carrier', 'type', 'schema', 'proof', 'key', 'signature']);
    expect(result.keyAuthorization?.code).toBe('AUTHORIZED');
    expect(result.validity.state).toBe('established');
    expect(result.relatedResources.every(r => r.state === 'established')).toBe(true);
    expect(result.digestSRI).toBe(sha384SRI(new TextEncoder().encode(text(URI[name]))));
  });

  it('extracts protected D facts with concrete source pointers', async () => {
    const result = await verifyRmArtifact(URI.D, session(), { manifest, evaluationTime: NOW });
    const byFact = (fact: string) => result.facts.filter(f => f.fact === fact);
    expect(byFact('grantorOrActor')).toEqual([{ fact: 'grantorOrActor', pointer: '/issuer', value: URI.PRODUCER }]);
    expect(byFact('authorizingReference')).toEqual([
      { fact: 'authorizingReference', pointer: '/termsOfUse/0/authorizationCredential/id', value: URI.O }]);
    expect(byFact('requiredStudy')).toEqual([{ fact: 'requiredStudy', pointer: '/evidence/0/id', value: URI.S }]);
    const [selected] = byFact('selectedResult');
    expect(selected?.pointer).toBe('/credentialSubject/materialPropertiesList/0/results/0');
    expect((selected?.value as { data: { quantity: { value: string } } }).data.quantity.value).toBe('178');
  });

  it('authentic D with A/O/S/H alone does not establish reliance', async () => {
    const { result } = await evaluateRmSlice(request(), session(), manifest);
    expect(result.artifactVerification.every(r => r.state === 'established')).toBe(true);
    expect(result.authorization).toHaveLength(1);
    expect(result.authorization[0]).toMatchObject({ state: 'not_established', execution: 'not_run' });
    expect(result.support[0]).toMatchObject({ state: 'not_established', execution: 'not_run' });
    expect(result.conformity).toMatchObject({ requested: true, state: 'not_established', execution: 'not_run' });
    expect(result.decision).toBe('not_established');
    expect(Object.isFrozen(result)).toBe(true);
  });

  it('reports a gate-numbered trace per node-use and the observed resources', async () => {
    const { result } = await evaluateRmSlice(request(), session(), manifest);
    expect(result.requestId).toBe('urn:uuid:rm-v1-slice-request');
    const target = result.trace.filter(t => t.nodeUse.startsWith(`${URI.D} |`));
    expect(target.every(t => t.nodeUse.includes('| target |'))).toBe(true);
    const byPredicate = (p: string) => target.find(t => t.predicate === p);
    expect(byPredicate('schema')).toMatchObject({ gate: 0, state: 'established' });
    expect(byPredicate('related-resource-integrity')).toMatchObject({ gate: 1, state: 'established' });
    expect(byPredicate('signature')).toMatchObject({ gate: 2, state: 'established' });
    expect(byPredicate('validity-period')).toMatchObject({ gate: 3, state: 'established' });
    expect(byPredicate('claim-authorization:as-mass-fraction')).toMatchObject({ gate: 5, execution: 'not_run' });
    expect(byPredicate('conformity:as-plus-u-le-200')).toMatchObject({ gate: 6, execution: 'not_run' });
    expect(result.resources.map(r => r.uri).sort()).toEqual([URI.A, URI.D, URI.H, URI.O, URI.S].sort());
    expect(result.resources.every(r => r.kind === 'artifact' && r.digestSRI.startsWith('sha384-'))).toBe(true);
  });

  it('signed fixtures carry no legacy relation/basis wire fields', () => {
    for (const resource of signed) {
      const serialized = new TextDecoder().decode(resource.bytes);
      for (const legacy of ['authorizedBy', 'derivedFrom', 'supportedBy', 'authorizationBasis', 'scopeRef', 'qi-vc'])
        expect(serialized, `${resource.uri} contains ${legacy}`).not.toContain(legacy);
    }
  });

  describe('negative controls', () => {
    it('an arbitrary authorization policy name is not accepted', async () => {
      for (const name of ['AuthorizedByPolicy', 'RmAuthorizationPolicyV2', 'rmAuthorizationPolicy']) {
        const document = json(URI.D);
        (document.termsOfUse as JsonObject[])[0]!.type = name;
        const artifact = await verifyRmArtifact(URI.D, session({ [URI.D]: serialize(document) }), { manifest, evaluationTime: NOW });
        expect(artifact.checks.at(-1), name).toMatchObject({ check: 'schema', state: 'contradicted' });
        expect(artifact.facts).toEqual([]);
      }
    });

    it('a changed value without re-signing is rejected and yields no facts', async () => {
      const document = json(URI.D);
      ((document.credentialSubject as JsonObject).materialPropertiesList as JsonObject[])[0]!
        .results = [{ ...(((document.credentialSubject as JsonObject).materialPropertiesList as JsonObject[])[0]!.results as JsonObject[])[0]!,
          data: { quantity: { quantityKind: 'https://vc4qi.example/bindings/rm/1#MassFraction', value: '150',
            unit: { ucumCode: 'mg/kg' }, uncertainty: { expandedUncertainty: '5', coverageFactor: '2' } } } }];
      const s = session({ [URI.D]: serialize(document) });
      const artifact = await verifyRmArtifact(URI.D, s, { manifest, evaluationTime: NOW });
      expect(artifact.protection.state).toBe('contradicted');
      expect(artifact.checks.at(-1)).toMatchObject({ check: 'signature', state: 'contradicted' });
      expect(artifact.facts).toEqual([]);
      expect(artifact.validity.execution).toBe('not_run');
      const { result } = await evaluateRmSlice(request(), session({ [URI.D]: serialize(document) }), manifest);
      expect(result.decision).toBe('reject');
      expect(result.authorization[0]?.reasons[0]).toMatch(/not protected/);
      const signature = result.trace.find(t => t.nodeUse.startsWith(`${URI.D} |`) && t.predicate === 'signature');
      expect(signature).toMatchObject({ gate: 2, state: 'contradicted' });
      const validity = result.trace.find(t => t.nodeUse.startsWith(`${URI.D} |`) && t.predicate === 'validity-period');
      expect(validity).toMatchObject({ gate: 3, execution: 'not_run' });
    });

    it('a valid signature by another party\'s key is rejected (unauthorized key)', async () => {
      // Correctly signed by the laboratory's own key, but D's issuer is the producer.
      const forged = await resign(json(URI.D), 'lab', `${URI.LAB}#key-1`);
      const artifact = await verifyRmArtifact(URI.D, session({ [URI.D]: forged }), { manifest, evaluationTime: NOW });
      expect(artifact.checks.at(-1)).toMatchObject({ check: 'key', state: 'contradicted' });
      expect(artifact.keyAuthorization?.code).toBe('NOT_ISSUER_CONTROLLER');
    });

    it('a proof that names the issuer key but was made with another key fails the signature', async () => {
      const forged = await resign(json(URI.D), 'lab', `${URI.PRODUCER}#key-1`);
      const artifact = await verifyRmArtifact(URI.D, session({ [URI.D]: forged }), { manifest, evaluationTime: NOW });
      expect(artifact.keyAuthorization?.code).toBe('AUTHORIZED');
      expect(artifact.checks.at(-1)).toMatchObject({ check: 'signature', state: 'contradicted' });
    });

    it('the genuine key re-signing changed content still verifies (control for the two cases above)', async () => {
      const document = json(URI.D);
      document.validUntil = '2028-01-31T00:00:00Z';
      const resigned = await resign(document, 'producer', `${URI.PRODUCER}#key-1`);
      const artifact = await verifyRmArtifact(URI.D, session({ [URI.D]: resigned }), { manifest, evaluationTime: NOW });
      expect(artifact.protection.state).toBe('established');
    });

    it('an undeclared claim is rejected before any fact is read', async () => {
      const document = json(URI.D);
      (document.credentialSubject as JsonObject).unmappedClaim = 'would be dropped by unsafe expansion';
      // Safe-mode signing refuses the undefined term, so keep the original proof.
      await expect(resign(document, 'producer', `${URI.PRODUCER}#key-1`)).rejects.toThrow();
      const artifact = await verifyRmArtifact(URI.D, session({ [URI.D]: serialize(document) }), { manifest, evaluationTime: NOW });
      expect(artifact.protection.state).toBe('contradicted');
      expect(artifact.checks.at(-1)?.check).toBe('schema');
      expect(artifact.facts).toEqual([]);
    });

    it('changed bytes of a referenced resource contradict integrity even when its signature holds', async () => {
      const s = session({ [URI.O]: `${text(URI.O)} ` });
      const artifactO = await verifyRmArtifact(URI.O, s, { manifest, evaluationTime: NOW });
      expect(artifactO.protection.state).toBe('established');
      const { result } = await evaluateRmSlice(request(), session({ [URI.O]: `${text(URI.O)} ` }), manifest);
      const integrity = result.artifactVerification.find(r => r.artifactId === URI.O && r.reasons[0]?.startsWith('integrity'));
      expect(integrity?.state).toBe('contradicted');
      expect(result.decision).toBe('reject');
    });

    it('a missing referenced study is not established, not rejected', async () => {
      const { result } = await evaluateRmSlice(
        request({ suppliedEvidence: [URI.A, URI.O, URI.H] }), session({ [URI.S]: null }), manifest);
      const integrity = result.artifactVerification.find(r => r.artifactId === URI.S);
      expect(integrity?.state).toBe('not_established');
      expect(result.decision).toBe('not_established');
    });

    it('a missing target or controller document is not established', async () => {
      const missing = await verifyRmArtifact(URI.D, session({ [URI.D]: null }), { manifest, evaluationTime: NOW });
      expect(missing.checks).toEqual([expect.objectContaining({ check: 'resolve', state: 'not_established' })]);
      const noController = await verifyRmArtifact(URI.D, session({ [URI.PRODUCER]: null }), { manifest, evaluationTime: NOW });
      expect(noController.checks.at(-1)).toMatchObject({ check: 'key', state: 'not_established' });
      expect(noController.keyAuthorization?.code).toBe('CONTROLLER_NOT_INSTALLED');
    });

    it('an unsupported context combination or proof set is not established', async () => {
      const reordered = json(URI.D);
      reordered['@context'] = [...(reordered['@context'] as string[])].reverse();
      const carrier = await verifyRmArtifact(URI.D, session({ [URI.D]: serialize(reordered) }), { manifest, evaluationTime: NOW });
      expect(carrier.checks.at(-1)).toMatchObject({ check: 'carrier', state: 'not_established' });
      const proofSet = json(URI.D);
      proofSet.proof = [proofSet.proof];
      const set = await verifyRmArtifact(URI.D, session({ [URI.D]: serialize(proofSet) }), { manifest, evaluationTime: NOW });
      expect(set.protection.state).not.toBe('established');
    });

    it('an expired target is rejected on validity after protection', async () => {
      const { result } = await evaluateRmSlice(request({ evaluationTime: '2029-01-01T00:00:00Z' }), session(), manifest);
      const validity = result.artifactVerification.find(r => r.artifactId === URI.D && r.reasons[0]?.startsWith('validity'));
      expect(validity?.state).toBe('contradicted');
      expect(result.decision).toBe('reject');
    });

    it('a selected claim outside the protected results is not established', async () => {
      const { result } = await evaluateRmSlice(
        request({ selectedClaims: [{ id: 'issuer', sourcePointer: '/issuer' }] }), session(), manifest);
      expect(result.authorization[0]).toMatchObject({ state: 'not_established', execution: 'executed' });
    });
  });
});
