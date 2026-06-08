// SPDX-License-Identifier: Apache-2.0
// Generate the selective-disclosure (G2 / Phase 6) fixtures for the
// reference-material certificate, using real BAM-M375a values (see
// examples/rm/source/). Produces, with a deterministic ECDSA P-256 key:
//
//   examples/rm/reference-material-certificate.sd.json
//       — SD-secured ("base") RM credential (commits to all fields).
//   examples/rm/reference-material-certificate.sd-derived.json
//       — holder-derived disclosed subset (personnel + producer contact withheld).
//   examples/rm/rm-producer-key.jsonld          — issuer P-256 Multikey document.
//   examples/rm/rm-producer-controller.jsonld   — controller doc (assertionMethod).
//   packages/core-py/tests/fixtures/sd_derived_credential.json
//       — the derived subset + verificationMethod docs, for Python kernel parity.
//
// Run: pnpm -C packages/core-ts exec tsx scripts/gen-sd-fixtures.ts
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
const RM_CONTEXT = 'https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld';
const RMC_SCHEMA = 'https://w3id.org/qi-vc/schemas/v1/reference-material-certificate.json';

// Deterministic ECDSA P-256 multikey for the RM producer (D-SD-3). This is the
// SD issuer key; it is distinct from the Ed25519 key (#key-1) used by the
// eddsa-rdfc-2022 path. Frozen here so fixtures are reproducible (the DB library
// has no seeded generation). #key-2 is the SD verification method.
const SD_KEY: EcdsaMultikeyPair = {
  id: 'did:web:rm-producer.example#key-2',
  controller: 'did:web:rm-producer.example',
  type: 'Multikey',
  publicKeyMultibase: 'zDnaeZKc83Lj4G69ikeWz1bEzn7t6SyjD9poBjqhXzAfxUwvr',
  secretKeyMultibase: 'z42ttX24ypq6cMVEecPfN2PqHXs7EwcuvKGFzyPahD81zMLe',
};

// Certified analyte values, taken verbatim from BAM-M375a (CuZn39Pb3, leaded brass).
// All certified, coverage factor k = 2 (GUM, ISO/IEC Guide 98-3:2008).
function result(
  scopeRef: string,
  name: string,
  value: number,
  ucumCode: string,
  expandedUncertainty: number,
): JsonObject {
  return {
    name,
    scopeRef,
    data: {
      quantity: {
        quantityKind: 'http://qudt.org/vocab/quantitykind/MassFraction',
        value,
        unit: { ucumCode },
        uncertainty: { expandedUncertainty, coverageFactor: 2 },
      },
    },
  };
}

/** Build the unsecured SD RM credential from real BAM-M375a data. */
function buildCredential(): JsonObject {
  return {
    '@context': [VC_CONTEXT, QI_CONTEXT, RM_CONTEXT],
    type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
    id: 'urn:uuid:rm-cert-sd-001',
    issuer: 'did:web:rm-producer.example',
    validFrom: '2026-02-01T00:00:00Z',
    validUntil: '2028-02-01T00:00:00Z',
    credentialSchema: { id: RMC_SCHEMA, type: 'JsonSchema' },
    credentialSubject: {
      id: 'urn:example:lot:rm-CuZn-001',
      administrativeData: {
        coreData: {
          titleOfTheDocument: 'Reference Material Certificate',
          uniqueIdentifier: 'BAM-M375a',
        },
        validity: { validFrom: '2026-02-01', validUntil: '2028-02-01' },
        // Producer identity is mandatory; its detailed contact block is selectively
        // disclosable (D-SD-1) — see selectivePointers below for what the holder reveals.
        referenceMaterialProducer: {
          id: 'did:web:rm-producer.example',
          name: 'Bundesanstalt für Materialforschung und -prüfung (BAM)',
          // Selectively disclosable contact details (withheld in the derived subset).
          location: 'Richard-Willstätter-Str 11, 12489 Berlin, DE',
        },
      },
      materials: [
        {
          name: 'BAM-M375a',
          matrix: 'CuZn39Pb3 (leaded brass)',
          form: 'disc',
          materialIdentifiers: [{ type: 'lotNumber', value: 'BAM-M375a' }],
        },
      ],
      materialPropertiesList: [
        {
          propertyIdentifiers: ['Cu', 'Pb', 'As'],
          isCertified: true,
          results: [
            result('scope-entry-Cu-CuZn', 'Copper (Cu)', 57.68, '%', 0.14),
            result('scope-entry-Pb-CuZn', 'Lead (Pb)', 3.07, '%', 0.06),
            result('scope-entry-As-CuZn', 'Arsenic (As)', 178.0, 'mg/kg', 5.0),
          ],
        },
      ],
      // Selectively disclosable personnel (D-SD-1): the certifying committee.
      // Real names from BAM-M375a. Withheld in the routine-verification subset.
      respPersons: [
        { name: 'Dr. S. Richter', role: 'Committee for Certification' },
        { name: 'Dr. S. Recknagel', role: 'Project Coordinator' },
      ],
    },
    evidence: [
      {
        type: 'CredentialEvidenceReference',
        id: 'urn:uuid:operational-scope-001',
        relation: 'authorizedBy',
        authorizationBasis: { kind: 'operationalScope', issuerRole: 'referenceMaterialProducer' },
      },
    ],
  };
}

// Mandatory pointers (D-SD-1): always disclosed. The verifier needs the property,
// matrix, value, uncertainty, and scopeRef for each certified result, plus the
// evidence edges, to run the kernel. Producer *identity* (id/name) is mandatory;
// the contact `location` and `respPersons` are NOT listed here, so they are
// selectively disclosable.
const MANDATORY_POINTERS = [
  '/issuer',
  '/validFrom',
  '/validUntil',
  '/credentialSchema',
  '/credentialSubject/id',
  '/credentialSubject/administrativeData/coreData',
  '/credentialSubject/administrativeData/validity',
  '/credentialSubject/administrativeData/referenceMaterialProducer/id',
  '/credentialSubject/administrativeData/referenceMaterialProducer/name',
  '/credentialSubject/materials',
  '/credentialSubject/materialPropertiesList',
  '/evidence',
];

// What the holder chooses to disclose in the routine-verification subset:
// nothing beyond the mandatory set. (To reveal personnel, a holder would add
// '/credentialSubject/respPersons' here.) Empty => only mandatory fields appear.
const SELECTIVE_POINTERS: string[] = [];

function writeJson(absPath: string, value: unknown): void {
  mkdirSync(dirname(absPath), { recursive: true });
  writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`);
}

async function main(): Promise<void> {
  const documentLoader = buildDocumentLoader({ strict: true });

  // Issuer P-256 multikey document + controller document (lists key under
  // assertionMethod, as the SD verifier requires).
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

  writeJson(join(ROOT, 'examples/rm/reference-material-certificate.sd.json'), signed);
  writeJson(join(ROOT, 'examples/rm/reference-material-certificate.sd-derived.json'), derived);
  writeJson(join(ROOT, 'examples/rm/rm-producer-key.jsonld'), vmDoc);
  writeJson(join(ROOT, 'examples/rm/rm-producer-controller.jsonld'), controllerDoc);

  // Python parity fixture: the derived subset plus the resolver documents, so the
  // Python kernel can run graph/policy/scope over the SAME disclosed credential.
  // Python does NOT verify the SD crypto (D-SD-4).
  writeJson(join(ROOT, 'packages/core-py/tests/fixtures/sd_derived_credential.json'), {
    derivedCredential: derived,
    verificationMethod: vmDoc,
    controller: controllerDoc,
  });

  const subjectKeys = Object.keys((derived.credentialSubject as JsonObject) ?? {});
  console.log('Wrote SD fixtures.');
  console.log('  base proof cryptosuite:', (signed.proof as JsonObject)?.cryptosuite);
  console.log('  derived subject keys:', subjectKeys.join(', '));
  console.log('  respPersons withheld:', !subjectKeys.includes('respPersons'));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
