// SPDX-License-Identifier: Apache-2.0
// Selective-disclosure (G2 / Phase 6) tests: ecdsa-sd-2023 issue/derive/verify
// over real BAM-M375a fixtures, plus the verifier's cryptosuite dispatch.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { issueSd, deriveSd, verifySd, generateSdKey } from '../src/proofs/sd.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';
import { evaluateProofForTest } from '../src/verifier/index.js';
import type { DocumentLoader, JsonObject } from '../src/types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..', '..');

function readJson(rel: string): JsonObject {
  return JSON.parse(readFileSync(join(ROOT, rel), 'utf8')) as JsonObject;
}

const signed = readJson('examples/rm/reference-material-certificate.sd.json');
const derived = readJson('examples/rm/reference-material-certificate.sd-derived.json');
const vmDoc = readJson('examples/rm/rm-producer-key.jsonld');
const controllerDoc = readJson('examples/rm/rm-producer-controller.jsonld');

// A document loader that resolves the issuer's P-256 multikey + controller doc,
// falling through to the project loader (vendored W3C + qi contexts) for the rest.
function sdLoader(): DocumentLoader {
  const base = buildDocumentLoader({ strict: true });
  const map: Record<string, JsonObject> = {
    [String(vmDoc.id)]: vmDoc,
    [String(controllerDoc.id)]: controllerDoc,
  };
  return async (url: string) => {
    const doc = map[url];
    if (doc) return { contextUrl: null, document: doc, documentUrl: url };
    return base(url);
  };
}

describe('ecdsa-sd-2023 fixtures (BAM-M375a)', () => {
  it('base credential carries an ecdsa-sd-2023 proof', () => {
    const proof = signed.proof as JsonObject;
    expect(proof.type).toBe('DataIntegrityProof');
    expect(proof.cryptosuite).toBe('ecdsa-sd-2023');
  });

  it('derived subset discloses mandatory fields and withholds personnel', () => {
    const subject = derived.credentialSubject as JsonObject;
    // Mandatory (D-SD-1): the verifier needs these to run the kernel.
    expect(subject.materialPropertiesList).toBeDefined();
    expect(subject.administrativeData).toBeDefined();
    // Selectively disclosable, withheld in the routine subset.
    expect('respPersons' in subject).toBe(false);
  });

  it('certified value + expanded uncertainty survive disclosure (As 178 ± 5 mg/kg)', () => {
    const subject = derived.credentialSubject as JsonObject;
    const list = subject.materialPropertiesList as JsonObject[];
    const results = list[0]!.results as JsonObject[];
    const as = results.find((r) => String(r.name).includes('As'))!;
    const quantity = (as.data as JsonObject).quantity as JsonObject;
    expect(quantity.value).toBe(178);
    expect((quantity.uncertainty as JsonObject).expandedUncertainty).toBe(5);
    expect(as.scopeRef).toBe('scope-entry-As-CuZn');
  });

  it('the derived disclosed subset verifies cryptographically', async () => {
    const result = await verifySd(derived, { documentLoader: sdLoader() });
    expect(result.verified).toBe(true);
  });

  it('tampering with a disclosed value fails verification', async () => {
    const tampered = JSON.parse(JSON.stringify(derived)) as JsonObject;
    const subject = tampered.credentialSubject as JsonObject;
    const results = (subject.materialPropertiesList as JsonObject[])[0]!.results as JsonObject[];
    const quantity = (results[0]!.data as JsonObject).quantity as JsonObject;
    quantity.value = 999;
    const result = await verifySd(tampered, { documentLoader: sdLoader() });
    expect(result.verified).toBe(false);
  });

  it('round-trips issue -> derive -> verify with a fresh key', async () => {
    const documentLoader = buildDocumentLoader({ strict: true });
    const key = await generateSdKey({
      id: 'did:web:fresh.example#key-2',
      controller: 'did:web:fresh.example',
    });
    const credential: JsonObject = {
      '@context': [
        'https://www.w3.org/ns/credentials/v2',
        'https://w3id.org/qi-vc/contexts/v1/qi-evidence-context.jsonld',
        'https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld',
      ],
      type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
      id: 'urn:uuid:rm-roundtrip',
      issuer: 'did:web:fresh.example',
      validFrom: '2026-02-01T00:00:00Z',
      credentialSubject: {
        id: 'urn:example:lot:rt',
        materials: [{ name: 'BAM-M375a', matrix: 'CuZn39Pb3 (leaded brass)' }],
        respPersons: [{ name: 'Dr. S. Richter', role: 'Committee for Certification' }],
      },
    };
    const base = await issueSd(credential, key, {
      mandatoryPointers: ['/issuer', '/credentialSubject/materials'],
      documentLoader,
    });
    const disclosed = await deriveSd(base, { selectivePointers: [], documentLoader });
    expect('respPersons' in (disclosed.credentialSubject as JsonObject)).toBe(false);

    // Resolve the fresh key via a controller doc.
    const vm = {
      '@context': 'https://w3id.org/security/multikey/v1',
      id: key.id,
      type: 'Multikey',
      controller: key.controller,
      publicKeyMultibase: key.publicKeyMultibase,
    };
    const controller = {
      '@context': ['https://www.w3.org/ns/did/v1', 'https://w3id.org/security/multikey/v1'],
      id: key.controller,
      assertionMethod: [vm],
    };
    const loader: DocumentLoader = async (url: string) => {
      if (url === key.id) return { contextUrl: null, document: vm, documentUrl: url };
      if (url === key.controller) return { contextUrl: null, document: controller, documentUrl: url };
      return documentLoader(url);
    };
    const result = await verifySd(disclosed, { documentLoader: loader });
    expect(result.verified).toBe(true);
  });
});

describe('verifier cryptosuite dispatch', () => {
  it('verifies an ecdsa-sd-2023 credential through the verifier SD branch', async () => {
    const trace = await evaluateProofForTest(
      derived,
      {
        id: 'test-proof-only',
        targetCredentialTypes: ['ReferenceMaterialCertificate'],
        requiredEvidence: [],
        checks: { proof: 'required' },
      },
      { sdDocumentLoader: sdLoader() },
    );
    expect(trace.status).toBe('PASS');
    expect(trace.code).toBe('PROOF_VALID');
  });

  it('reports FAIL through the verifier when an SD value is tampered', async () => {
    const tampered = JSON.parse(JSON.stringify(derived)) as JsonObject;
    const subject = tampered.credentialSubject as JsonObject;
    const results = (subject.materialPropertiesList as JsonObject[])[0]!.results as JsonObject[];
    const quantity = (results[0]!.data as JsonObject).quantity as JsonObject;
    quantity.value = 999;
    const trace = await evaluateProofForTest(
      tampered,
      {
        id: 'test-proof-only',
        targetCredentialTypes: ['ReferenceMaterialCertificate'],
        requiredEvidence: [],
        checks: { proof: 'required' },
      },
      { sdDocumentLoader: sdLoader() },
    );
    expect(trace.status).toBe('FAIL');
    expect(trace.code).toBe('PROOF_INVALID');
  });
});
