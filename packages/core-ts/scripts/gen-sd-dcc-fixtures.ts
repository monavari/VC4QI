// SPDX-License-Identifier: Apache-2.0
// Generate the selective-disclosure (G2 / Phase 6) fixtures for the DIGITAL
// CALIBRATION CERTIFICATE (DCC). This is the per-customer privacy showcase
// (D-SD-1, revised): unlike an RM certificate (publicly published), a DCC is
// issued to one customer and carries commercially sensitive fields — the
// customer's identity and the calibrated instrument's serial/manufacturer.
//
// A holder presenting the DCC to a downstream verifier discloses the measured
// value, expanded uncertainty, measurand, calibration lab, and scope — but
// WITHHOLDS who commissioned the calibration and which exact instrument it was.
//
// Produces, with a deterministic ECDSA P-256 key:
//
//   examples/calibration/digital-calibration-certificate.sd.json
//       — SD-secured ("base") DCC (commits to all fields).
//   examples/calibration/digital-calibration-certificate.sd-derived.json
//       — holder-derived disclosed subset (customer + instrument id withheld).
//   examples/calibration/lab-key.jsonld          — issuer P-256 Multikey document.
//   examples/calibration/lab-controller.jsonld   — controller doc (assertionMethod).
//   packages/core-py/tests/fixtures/sd_dcc_derived_credential.json
//       — the derived subset + verificationMethod docs, for Python kernel parity.
//
// Run: pnpm -C packages/core-ts exec tsx scripts/gen-sd-dcc-fixtures.ts
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import { issueSd, deriveSd } from '../src/proofs/sd.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';
import type { EcdsaMultikeyPair, JsonObject } from '../src/types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..', '..');

const VC_CONTEXT = 'https://www.w3.org/ns/credentials/v2';
const QI_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-evidence-context.jsonld';
const CAL_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld';
const DCC_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/digital-calibration-certificate.json';

// Deterministic ECDSA P-256 multikey for the calibration lab (D-SD-3). Distinct
// from the lab's Ed25519 key (#key-1) used by the eddsa-rdfc-2022 path. Frozen
// here so fixtures are reproducible (the DB library has no seeded generation).
// #key-2 is the SD verification method. (Generated once via generateSdKey, then
// pinned below.)
const SD_KEY: EcdsaMultikeyPair = {
  id: 'did:web:lab.example#key-2',
  controller: 'did:web:lab.example',
  type: 'Multikey',
  publicKeyMultibase: 'zDnaeh4p6jGci8CSEywW65678rCbewEikbtkhaY5DuN6ZEUmE',
  secretKeyMultibase: 'z42txxvkxEjk7piEKDwMPv7ned7WmKccNkQYBrbanpovrZ3z',
};

/** Build the unsecured SD DCC. Pressure calibration, value 500 ± 1 kPa (k=2). */
function buildCredential(): JsonObject {
  return {
    '@context': [VC_CONTEXT, QI_CONTEXT, CAL_CONTEXT],
    type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
    id: 'urn:uuid:dcc-sd-001',
    issuer: 'did:web:lab.example',
    validFrom: '2026-01-15T00:00:00Z',
    credentialSchema: { id: DCC_SCHEMA, type: 'JsonSchema' },
    credentialSubject: {
      id: 'urn:example:item:pressure-001',
      administrativeData: {
        coreData: {
          uniqueIdentifier: 'dcc-sd-001',
          beginPerformanceDate: '2026-01-14T08:00:00Z',
          endPerformanceDate: '2026-01-14T16:00:00Z',
        },
        // The calibrated instrument. Its serial/model identifications and the
        // manufacturer are selectively disclosable (sensitive: identifies the
        // exact unit). The item name stays in the mandatory block.
        items: [
          {
            name: 'Pressure transmitter',
            manufacturer: { name: 'Acme Instruments GmbH' },
            identifications: [
              { type: 'serialNumber', value: 'SN-77F3-22914' },
              { type: 'model', value: 'PT-9000' },
            ],
          },
        ],
        calibrationLaboratory: { id: 'did:web:lab.example', name: 'Calibration laboratory' },
        // The customer who commissioned the calibration — selectively disclosable
        // (D-SD-1): a holder proving "this unit is in tolerance" need not reveal
        // who they are.
        customer: { name: 'Contoso Pharma Ltd', location: 'Basel, CH' },
      },
      measurementResults: [
        {
          measurand: 'Pressure',
          usedMethods: [{ name: 'Pressure calibration', reference: 'EURAMET cg-17' }],
          results: [
            {
              name: 'Pressure at nominal point',
              scopeRef: 'pressure-scope',
              data: {
                quantity: {
                  quantityKind: 'http://qudt.org/vocab/quantitykind/Pressure',
                  value: 500,
                  unit: { ucumCode: 'kPa' },
                  uncertainty: { expandedUncertainty: 1, coverageFactor: 2 },
                },
              },
            },
          ],
        },
      ],
    },
    evidence: [
      {
        type: 'CredentialEvidenceReference',
        id: 'urn:uuid:accreditation-direct-001',
        relation: 'authorizedBy',
        authorizationBasis: { kind: 'accreditation', issuerRole: 'nationalAccreditationBody' },
      },
    ],
  };
}

// Mandatory pointers (D-SD-1): always disclosed. A downstream verifier needs the
// measurand, value, uncertainty, unit, and scopeRef, plus the calibration lab
// identity and evidence edges, to run the kernel and judge the result. The item
// *name* is disclosed; its serial/model identifications + manufacturer are NOT
// listed here (so they are selectively disclosable). The customer block is NOT
// listed (selectively disclosable).
const MANDATORY_POINTERS = [
  '/issuer',
  '/validFrom',
  '/credentialSchema',
  '/credentialSubject/id',
  '/credentialSubject/administrativeData/coreData',
  '/credentialSubject/administrativeData/items/0/name',
  '/credentialSubject/administrativeData/calibrationLaboratory',
  '/credentialSubject/measurementResults',
  '/evidence',
];

// Routine-verification subset: the holder discloses nothing beyond the mandatory
// set — customer identity and instrument serial/manufacturer stay hidden. (To
// reveal them, a holder would add the corresponding pointers here.)
const SELECTIVE_POINTERS: string[] = [];

function writeJson(absPath: string, value: unknown): void {
  mkdirSync(dirname(absPath), { recursive: true });
  writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`);
}

async function main(): Promise<void> {
  if (SD_KEY.publicKeyMultibase === '__PUBLIC_KEY__') {
    // First run: mint a key, print it, and stop so it can be pinned above.
    const kp = await EcdsaMultikey.generate({ curve: 'P-256', id: SD_KEY.id, controller: SD_KEY.controller });
    const exported = await kp.export({ publicKey: true, secretKey: true });
    console.log('Pin this key into SD_KEY, then re-run:');
    console.log('  publicKeyMultibase:', exported.publicKeyMultibase);
    console.log('  secretKeyMultibase:', exported.secretKeyMultibase);
    return;
  }

  const documentLoader = buildDocumentLoader({ strict: true });

  const vmDoc = {
    '@context': 'https://w3id.org/security/multikey/v1',
    id: SD_KEY.id,
    type: 'Multikey',
    controller: SD_KEY.controller,
    publicKeyMultibase: SD_KEY.publicKeyMultibase,
  };
  const controllerDoc = {
    '@context': ['https://www.w3.org/ns/did/v1', 'https://w3id.org/security/multikey/v1'],
    id: SD_KEY.controller,
    assertionMethod: [vmDoc],
  };

  // Sanity: confirm the frozen key bytes round-trip through the library.
  await EcdsaMultikey.from({
    id: SD_KEY.id,
    controller: SD_KEY.controller,
    type: SD_KEY.type,
    publicKeyMultibase: SD_KEY.publicKeyMultibase,
    secretKeyMultibase: SD_KEY.secretKeyMultibase,
  });

  const credential = buildCredential();
  const signed = await issueSd(credential, SD_KEY, {
    mandatoryPointers: MANDATORY_POINTERS,
    documentLoader,
  });
  const derived = await deriveSd(signed, {
    selectivePointers: SELECTIVE_POINTERS,
    documentLoader,
  });

  writeJson(join(ROOT, 'examples/calibration/digital-calibration-certificate.sd.json'), signed);
  writeJson(join(ROOT, 'examples/calibration/digital-calibration-certificate.sd-derived.json'), derived);
  writeJson(join(ROOT, 'examples/calibration/lab-key.jsonld'), vmDoc);
  writeJson(join(ROOT, 'examples/calibration/lab-controller.jsonld'), controllerDoc);

  // Python parity fixture: the derived subset plus resolver docs, so the Python
  // kernel can run graph/policy/scope over the SAME disclosed credential.
  // Python does NOT verify the SD crypto (D-SD-4).
  writeJson(join(ROOT, 'packages/core-py/tests/fixtures/sd_dcc_derived_credential.json'), {
    derivedCredential: derived,
    verificationMethod: vmDoc,
    controller: controllerDoc,
  });

  const admin = (derived.credentialSubject as JsonObject)?.administrativeData as JsonObject;
  console.log('Wrote DCC SD fixtures.');
  console.log('  base proof cryptosuite:', (signed.proof as JsonObject)?.cryptosuite);
  console.log('  customer withheld:', !('customer' in admin));
  const item0 = (admin.items as JsonObject[])?.[0] ?? {};
  console.log('  instrument identifications withheld:', !('identifications' in item0));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
