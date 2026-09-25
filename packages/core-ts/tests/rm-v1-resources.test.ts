// SPDX-License-Identifier: Apache-2.0
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormatsModule from 'ajv-formats';
import { describe, expect, it } from 'vitest';
import { canonicalize } from '../src/canonicalize/index.js';
import {
  catalogDocumentLoader, loadRmV1Catalog, RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, RM_V1_VOCAB,
  VC_V2_CONTEXT,
} from '../src/reliance/index.js';
import type { JsonObject } from '../src/types.js';

const Ajv = Ajv2020 as unknown as typeof import('ajv/dist/2020.js').default;
const addFormats = addFormatsModule as unknown as (ajv: InstanceType<typeof Ajv>) => void;
const repoRoot = new URL('../../../', import.meta.url);
const manifest = JSON.parse(readFileSync(
  new URL('bindings/experimental/rm-v1/manifest.json', repoRoot), 'utf8',
)) as { carrierAndSchema: { requiredContexts: string[]; schemaUris: string[] } };

const rm = (term: string) => `${RM_V1_VOCAB}${term}`;
const budget = { maxResources: 64, maxBytes: 1_000_000 };

/** Unsigned certificate-shaped sample used only to exercise the pinned resources. */
function sampleCertificate(): JsonObject {
  return {
    '@context': [VC_V2_CONTEXT, RM_V1_CONTEXT],
    id: 'https://producer.vc4qi.example/credentials/D-sample',
    type: ['VerifiableCredential', 'RmCertificate'],
    issuer: 'https://producer.vc4qi.example/controller',
    validFrom: '2026-02-01T00:00:00Z',
    validUntil: '2028-02-01T00:00:00Z',
    credentialSchema: { id: `${RM_V1_SCHEMA_BASE}certificate.json`, type: 'JsonSchema' },
    credentialSubject: {
      id: 'urn:vc4qi-example:batch:M375a-sample',
      activityTime: '2026-01-20T00:00:00Z',
      materials: [{ matrixIri: rm('CuZn39Pb3'), formIri: rm('Disc'), name: 'Fictional brass disc' }],
      materialPropertiesList: [{
        isCertified: true,
        results: [
          {
            propertyIri: rm('As'), methodIri: rm('M1'),
            data: { quantity: {
              quantityKind: rm('MassFraction'), value: '178', unit: { ucumCode: 'mg/kg' },
              uncertainty: { expandedUncertainty: '5', coverageFactor: '2' },
            } },
          },
          {
            propertyIri: rm('Pb'), methodIri: rm('M1'),
            data: { quantity: {
              quantityKind: rm('MassFraction'), value: '30000', unit: { ucumCode: 'mg/kg' },
              uncertainty: { expandedUncertainty: '400', coverageFactor: '2' },
            } },
          },
        ],
      }],
    },
    termsOfUse: [{
      type: 'RmAuthorizationPolicy',
      authorizationCredential: { id: 'https://producer.vc4qi.example/credentials/O' },
    }],
    evidence: [{ id: 'https://lab.vc4qi.example/credentials/S', type: 'RmStudyReference' }],
    relatedResource: [{
      id: 'https://producer.vc4qi.example/credentials/O',
      digestSRI: `sha384-${'A'.repeat(64)}`,
    }],
  };
}

async function safeNQuads(document: JsonObject): Promise<string> {
  const loader = catalogDocumentLoader(loadRmV1Catalog().openSession(budget));
  return canonicalize(document, loader, { safe: true });
}

describe('experimental RM v1 pinned resources', () => {
  it('generated schemas and the catalog index are up to date', () => {
    const script = new URL('scripts/rm-v1/build-resources.mjs', repoRoot);
    expect(() => execFileSync(process.execPath, [script.pathname, '--check'], { stdio: 'pipe' }))
      .not.toThrow();
  });

  it('pins every context and schema the manifest requires, with verified bytes', () => {
    const session = loadRmV1Catalog().openSession(budget);
    const uris = [...manifest.carrierAndSchema.requiredContexts, ...manifest.carrierAndSchema.schemaUris];
    for (const uri of uris) expect(session.resolve(uri).digestSRI).toMatch(/^sha384-/);
  });

  it('compiles every schema and validates the sample certificate shape', () => {
    const session = loadRmV1Catalog().openSession(budget);
    const ajv = new Ajv({ allErrors: true, strict: true });
    addFormats(ajv);
    for (const uri of manifest.carrierAndSchema.schemaUris) {
      ajv.addSchema(JSON.parse(new TextDecoder().decode(session.resolve(uri).bytes)));
    }
    const validate = ajv.getSchema(`${RM_V1_SCHEMA_BASE}certificate.json`)!;
    expect(validate(sampleCertificate()), JSON.stringify(validate.errors)).toBe(true);
    const extra = sampleCertificate();
    (extra.credentialSubject as JsonObject).unmapped = 'x';
    expect(validate(extra)).toBe(false);
  });

  it('expands the sample in JSON-LD safe mode with exact decimal and IRI facts', async () => {
    const nquads = await safeNQuads(sampleCertificate());
    expect(nquads).toContain(`<${rm('value')}> "178"^^<http://www.w3.org/2001/XMLSchema#decimal>`);
    expect(nquads).toContain(`<${rm('methodIri')}> <${rm('M1')}>`);
    expect(nquads).toContain(`<${rm('authorizationCredential')}> <https://producer.vc4qi.example/credentials/O>`);
    expect(nquads).toContain('<https://www.w3.org/2018/credentials#digestSRI>');
  });

  it('rejects an undefined term instead of silently dropping it', async () => {
    const document = sampleCertificate();
    (document.credentialSubject as JsonObject).unmappedClaim = 'dropped by unsafe expansion';
    await expect(safeNQuads(document)).rejects.toThrow();
  });

  it('signs result order: reordering results changes the canonical form', async () => {
    const original = sampleCertificate();
    const reordered = sampleCertificate();
    const group = ((reordered.credentialSubject as JsonObject).materialPropertiesList as JsonObject[])[0]!;
    (group.results as JsonObject[]).reverse();
    expect(await safeNQuads(reordered)).not.toBe(await safeNQuads(original));
  });

  it('never resolves an unpinned context', async () => {
    const document = sampleCertificate();
    document['@context'] = [VC_V2_CONTEXT, 'https://vc4qi.example/contexts/rm/2'];
    const error = await safeNQuads(document).then(() => null, (reason: unknown) => reason);
    // jsonld wraps loader failures; the catalog's refusal is the underlying cause.
    const cause = (error as { details?: { cause?: { code?: string } } } | null)?.details?.cause;
    expect(cause?.code).toBe('RESOURCE_NOT_FOUND');
  });
});
