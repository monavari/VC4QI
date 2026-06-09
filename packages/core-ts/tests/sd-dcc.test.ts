// SPDX-License-Identifier: Apache-2.0
// Selective-disclosure (G2 / Phase 6) tests for the DIGITAL CALIBRATION
// CERTIFICATE — the per-customer privacy showcase (D-SD-1, revised). A DCC
// holder discloses the measured value, uncertainty, measurand, lab, and scope
// while withholding who commissioned the calibration (customer) and which exact
// instrument it was (serial/manufacturer). Mirrors sd.test.ts (RM) over DCC
// fixtures, and exercises the verifier's cryptosuite dispatch.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { issueSd, deriveSd, verifySd } from '../src/proofs/sd.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';
import { evaluateProofForTest } from '../src/verifier/index.js';
import type { DocumentLoader, JsonObject } from '../src/types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..', '..');

function readJson(rel: string): JsonObject {
  return JSON.parse(readFileSync(join(ROOT, rel), 'utf8')) as JsonObject;
}

const signed = readJson('examples/calibration/digital-calibration-certificate.sd.json');
const derived = readJson('examples/calibration/digital-calibration-certificate.sd-derived.json');
const vmDoc = readJson('examples/calibration/lab-key.jsonld');
const controllerDoc = readJson('examples/calibration/lab-controller.jsonld');

// Resolves the lab's P-256 multikey + controller doc, falling through to the
// project loader (vendored W3C + qi contexts) for everything else.
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

function admin(cred: JsonObject): JsonObject {
  return (cred.credentialSubject as JsonObject).administrativeData as JsonObject;
}

describe('ecdsa-sd-2023 DCC fixtures (per-customer privacy)', () => {
  it('base credential carries an ecdsa-sd-2023 proof', () => {
    const proof = signed.proof as JsonObject;
    expect(proof.type).toBe('DataIntegrityProof');
    expect(proof.cryptosuite).toBe('ecdsa-sd-2023');
  });

  it('derived subset withholds the customer identity', () => {
    expect('customer' in admin(derived)).toBe(false);
  });

  it('derived subset withholds the instrument serial and manufacturer', () => {
    const item = (admin(derived).items as JsonObject[])[0]!;
    expect('identifications' in item).toBe(false);
    expect('manufacturer' in item).toBe(false);
    // The generic item name is still disclosed (mandatory).
    expect(item.name).toBe('Pressure transmitter');
  });

  it('certified value + expanded uncertainty survive disclosure (500 ± 1 kPa)', () => {
    const subject = derived.credentialSubject as JsonObject;
    const results = (subject.measurementResults as JsonObject[])[0]!.results as JsonObject[];
    const quantity = (results[0]!.data as JsonObject).quantity as JsonObject;
    expect(quantity.value).toBe(500);
    expect((quantity.unit as JsonObject).ucumCode).toBe('kPa');
    expect((quantity.uncertainty as JsonObject).expandedUncertainty).toBe(1);
    expect(results[0]!.scopeRef).toBe('pressure-scope');
  });

  it('the disclosed subset retains the authorizing evidence edge', () => {
    const evidence = derived.evidence as JsonObject[];
    expect(evidence).toHaveLength(1);
    expect(evidence[0]!.relation).toBe('authorizedBy');
  });

  it('the derived disclosed subset verifies cryptographically', async () => {
    const result = await verifySd(derived, { documentLoader: sdLoader() });
    expect(result.verified).toBe(true);
  });

  it('tampering with the disclosed value fails verification', async () => {
    const tampered = JSON.parse(JSON.stringify(derived)) as JsonObject;
    const subject = tampered.credentialSubject as JsonObject;
    const results = (subject.measurementResults as JsonObject[])[0]!.results as JsonObject[];
    const quantity = (results[0]!.data as JsonObject).quantity as JsonObject;
    quantity.value = 9999;
    const result = await verifySd(tampered, { documentLoader: sdLoader() });
    expect(result.verified).toBe(false);
  });

  it('a holder can additionally disclose the customer by re-deriving from the base', async () => {
    // The SD base credential commits to every field; a holder who chooses to
    // reveal the customer adds the selective pointer and re-derives. This proves
    // the customer was withheld by choice, not absent from the issuance.
    const disclosed = await deriveSd(signed, {
      selectivePointers: ['/credentialSubject/administrativeData/customer'],
      documentLoader: sdLoader(),
    });
    const cust = admin(disclosed).customer as JsonObject | undefined;
    expect(cust?.name).toBe('Contoso Pharma Ltd');
    const result = await verifySd(disclosed, { documentLoader: sdLoader() });
    expect(result.verified).toBe(true);
  });
});

describe('verifier cryptosuite dispatch (DCC SD)', () => {
  it('verifies an ecdsa-sd-2023 DCC through the verifier SD branch', async () => {
    const trace = await evaluateProofForTest(
      derived,
      {
        id: 'test-proof-only',
        targetCredentialTypes: ['DigitalCalibrationCertificate'],
        requiredEvidence: [],
        checks: { proof: 'required' },
      },
      { sdDocumentLoader: sdLoader() },
    );
    expect(trace.status).toBe('PASS');
    expect(trace.code).toBe('PROOF_VALID');
  });

  it('reports FAIL through the verifier when a disclosed DCC value is tampered', async () => {
    const tampered = JSON.parse(JSON.stringify(derived)) as JsonObject;
    const subject = tampered.credentialSubject as JsonObject;
    const results = (subject.measurementResults as JsonObject[])[0]!.results as JsonObject[];
    const quantity = (results[0]!.data as JsonObject).quantity as JsonObject;
    quantity.value = 9999;
    const trace = await evaluateProofForTest(
      tampered,
      {
        id: 'test-proof-only',
        targetCredentialTypes: ['DigitalCalibrationCertificate'],
        requiredEvidence: [],
        checks: { proof: 'required' },
      },
      { sdDocumentLoader: sdLoader() },
    );
    expect(trace.status).toBe('FAIL');
    expect(trace.code).toBe('PROOF_INVALID');
  });
});

// Round-trip issue → derive → verify with a fresh key, independent of the
// committed fixtures, guards against the generator and the runtime drifting apart.
describe('ecdsa-sd-2023 DCC round-trip', () => {
  it('issues, derives a subset, and verifies with a fresh key', async () => {
    const documentLoader = buildDocumentLoader({ strict: true });
    const { generateSdKey } = await import('../src/proofs/sd.js');
    const key = await generateSdKey({ id: 'did:web:fresh-lab.example#key-2', controller: 'did:web:fresh-lab.example' });
    const credential: JsonObject = {
      '@context': [
        'https://www.w3.org/ns/credentials/v2',
        'https://w3id.org/qi-vc/contexts/v1/qi-evidence-context.jsonld',
        'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld',
      ],
      type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
      id: 'urn:uuid:dcc-roundtrip',
      issuer: 'did:web:fresh-lab.example',
      validFrom: '2026-01-15T00:00:00Z',
      credentialSubject: {
        id: 'urn:example:item:rt',
        administrativeData: {
          items: [{ name: 'Pressure transmitter' }],
          customer: { name: 'Secret Customer Ltd' },
        },
      },
    };
    const base = await issueSd(credential, key, {
      mandatoryPointers: ['/issuer', '/credentialSubject/administrativeData/items'],
      documentLoader,
    });
    const disclosed = await deriveSd(base, { selectivePointers: [], documentLoader });
    expect('customer' in ((disclosed.credentialSubject as JsonObject).administrativeData as JsonObject)).toBe(false);

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
