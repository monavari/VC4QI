// SPDX-License-Identifier: Apache-2.0
// Shared fixture builders for T1-T12 scenario tests (Appendix C, Table C1).
// Each test starts from a valid three-layer chain and applies one targeted modification.
import { computeHashBinding } from '../../packages/core-ts/src/canonicalize/index.js';
import { buildStatusListCredential, createBitstring, setBit } from '../../packages/core-ts/src/status/index.js';
import type { JsonObject } from '../../packages/core-ts/src/types.js';

export const DAKKS_DID = 'did:web:dakks.de';
export const TESTLAB_DID = 'did:web:testlab.example';
export const BAM_DID = 'did:web:bam.de';

// ── AccreditationCredential: ISO/IEC 17025 pressure lab ──────────────────────

export function makeAccreditationDcc(overrides: Partial<JsonObject> = {}): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'AccreditationCredential'],
    id: 'https://dakks.de/credentials/accreditation/D-K-12345-67-89',
    issuer: DAKKS_DID,
    validFrom: '2025-09-01T00:00:00Z',
    validUntil: '2030-09-01T00:00:00Z',
    credentialSubject: {
      id: TESTLAB_DID,
      scheme: 'ISO/IEC 17025:2017',
      accreditationReference: 'D-K-12345-67-89',
      scope: [{
        id: 'scope-001',
        measurand: 'pressure',
        allowedMethods: ['DKD-R 6-1:2014', 'EA-10/17'],
        range: { from: 0, to: 1000, unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' } },
        uncertainty: { type: 'relativePercent', maxRelativePercent: 0.05 },
      }],
    },
    ...overrides,
  };
}

// ── CapabilityCredential: DCC pressure ───────────────────────────────────────

export async function makeCapabilityDcc(
  accreditation: JsonObject,
  overrides: Partial<JsonObject> = {},
): Promise<JsonObject> {
  const accHash = await computeHashBinding(accreditation);
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'CapabilityCredential'],
    id: 'https://dakks.de/credentials/capability/D-K-12345-67-89/dcc',
    issuer: DAKKS_DID,
    validFrom: '2025-09-01T00:00:00Z',
    validUntil: '2030-09-01T00:00:00Z',
    credentialSubject: {
      id: TESTLAB_DID,
      constraints: {
        credentialType: 'DigitalCalibrationCertificate',
        scopeEntries: [{
          measurand: 'pressure',
          allowedMethods: ['DKD-R 6-1:2014', 'EA-10/17'],
          range: { from: 0, to: 600, unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' } },
          uncertainty: { type: 'relativePercent', maxRelativePercent: 0.05 },
        }],
      },
    },
    evidence: [{
      id: 'https://dakks.de/credentials/accreditation/D-K-12345-67-89',
      type: 'CapabilityCredentialReference',
      hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: accHash },
    }],
    ...overrides,
  };
}

// ── Domain credential: DCC pressure transducer ───────────────────────────────

export async function makeDcc(
  capability: JsonObject,
  resultValue = 300,   // kPa — within 0–600 scope
  method = 'DKD-R 6-1:2014',
  expandedU = 0.15,    // 0.05% of 300 kPa = 0.15 kPa → within bound
  overrides: Partial<JsonObject> = {},
): Promise<JsonObject> {
  const capHash = await computeHashBinding(capability);
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
    id: 'urn:uuid:dcc-scenario-001',
    issuer: TESTLAB_DID,
    validFrom: '2026-01-01T00:00:00Z',
    credentialSubject: {
      id: 'urn:item:pressure-transducer-001',
      administrativeData: {
        coreData: {
          uniqueIdentifier: 'DCC-SCENARIO-001',
          beginPerformanceDate: '2025-12-31T09:00:00Z',
          endPerformanceDate: '2026-01-01T00:00:00Z',
        },
        items: [{ name: 'Pressure Transducer' }],
        calibrationLaboratory: { name: 'TestLab GmbH' },
        customer: { name: 'Scenario Customer GmbH' },
      },
      measurementResults: [{
        measurand: 'Pressure',
        usedMethods: [{ name: method, reference: method }],
        results: [{
          data: {
            quantity: {
              quantityKind: 'http://qudt.org/vocab/quantitykind/Pressure',
              value: resultValue,
              unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' },
              uncertainty: { expandedUncertainty: expandedU, coverageFactor: 2, coverageProbability: 0.95 },
            },
          },
        }],
      }],
    },
    evidence: [{
      id: 'https://dakks.de/credentials/capability/D-K-12345-67-89/dcc',
      type: 'CapabilityCredentialReference',
      hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: capHash },
    }],
    proof: {
      type: 'DataIntegrityProof',
      cryptosuite: 'eddsa-rdfc-2022',
      proofPurpose: 'assertionMethod',
      verificationMethod: `${TESTLAB_DID}#key-1`,
      created: '2026-01-01T00:00:00Z',
      proofValue: 'zDUMMY_PROOF_FOR_SCENARIO_TESTS',
    },
    ...overrides,
  };
}

// ── AccreditationCredential: ISO 17034 BAM ────────────────────────────────────

export function makeAccreditationDrmd(overrides: Partial<JsonObject> = {}): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'AccreditationCredential'],
    id: 'https://dakks.de/credentials/accreditation/D-RM-11075-01-00',
    issuer: DAKKS_DID,
    validFrom: '2016-01-01T00:00:00Z',
    validUntil: '2030-12-31T23:59:59Z',
    credentialSubject: {
      id: BAM_DID,
      scheme: 'ISO 17034:2016',
      accreditationReference: 'D-RM-11075-01-00',
      scope: [{
        matrix: ['non-ferrous metals and alloys'],
        allowedForms: ['disc', 'powder', 'chips'],
        allowedProperties: [
          'Cu', 'Zn', 'Pb', 'Sn', 'Ni', 'Fe',
          'Mn', 'Ag', 'Al', 'As', 'Bi', 'Cd',
          'Co', 'Cr', 'Sb', 'Te', 'In', 'P',
        ],
        uncertainty: { type: 'relativeExpanded', maxRelativeU_k2: 0.10 },
      }],
    },
    ...overrides,
  };
}

// ── CapabilityCredential: DRMD BAM ────────────────────────────────────────────

export async function makeCapabilityDrmd(
  accreditation: JsonObject,
  overrides: Partial<JsonObject> = {},
): Promise<JsonObject> {
  const accHash = await computeHashBinding(accreditation);
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'CapabilityCredential'],
    id: 'https://dakks.de/credentials/capability/D-RM-11075-01-00/drmd',
    issuer: DAKKS_DID,
    validFrom: '2025-01-01T00:00:00Z',
    validUntil: '2030-12-31T23:59:59Z',
    credentialSubject: {
      id: BAM_DID,
      constraints: {
        credentialType: 'ReferenceMaterialCertificate',
        scopeEntries: [{
          matrix: ['non-ferrous metals and alloys'],
          allowedForms: ['disc', 'powder', 'chips'],
          allowedProperties: [
            'Cu', 'Zn', 'Pb', 'Sn', 'Ni', 'Fe',
            'Mn', 'Ag', 'Al', 'As', 'Bi', 'Cd',
            'Co', 'Cr', 'Sb', 'Te', 'In', 'P',
          ],
          uncertainty: { type: 'relativeExpanded', maxRelativeU_k2: 0.05 },
        }],
      },
    },
    evidence: [{
      id: 'https://dakks.de/credentials/accreditation/D-RM-11075-01-00',
      type: 'CapabilityCredentialReference',
      hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: accHash },
    }],
    ...overrides,
  };
}

// ── Domain credential: DRMD M375a ─────────────────────────────────────────────

export async function makeDrmd(
  capability: JsonObject,
  overrides: Partial<JsonObject> = {},
): Promise<JsonObject> {
  const capHash = await computeHashBinding(capability);
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
    id: 'https://bam.de/credentials/rm/M375a/scenario',
    issuer: BAM_DID,
    validFrom: '2025-01-01T00:00:00Z',
    validUntil: '2099-12-31T23:59:59Z',
    credentialSubject: {
      id: 'did:web:bam.de:crm:M375a:scenario',
      administrativeData: {
        coreData: {
          titleOfTheDocument: 'referenceMaterialCertificate',
          uniqueIdentifier: 'M375a-SCENARIO',
        },
        validity: { validFrom: '2025-01-01', validUntil: '2099-12-31' },
        referenceMaterialProducer: {
          name: 'BAM',
          id: BAM_DID,
          accreditationNumber: 'D-RM-11075-01-00',
        },
      },
      materials: [{ name: 'CuZn39Pb3', materialIdentifiers: [{ type: 'BAM-CERT', value: 'M375a' }] }],
      materialPropertiesList: [
        {
          propertyIdentifiers: ['massFraction'],
          isCertified: true,
          name: 'Certified major elements',
          results: [
            { name: 'Copper (Cu)', data: { quantity: { value: 57.68, unit: { ucumCode: '%', unitIri: 'http://qudt.org/vocab/unit/PERCENT' }, uncertainty: { expandedUncertainty: 0.14, coverageFactor: 2 } } } },
            { name: 'Zinc (Zn)', data: { quantity: { value: 38.2, unit: { ucumCode: '%', unitIri: 'http://qudt.org/vocab/unit/PERCENT' }, uncertainty: { expandedUncertainty: 0.4, coverageFactor: 2 } } } },
            { name: 'Lead (Pb)', data: { quantity: { value: 3.07, unit: { ucumCode: '%', unitIri: 'http://qudt.org/vocab/unit/PERCENT' }, uncertainty: { expandedUncertainty: 0.06, coverageFactor: 2 } } } },
          ],
        },
        {
          propertyIdentifiers: ['massFraction'],
          isCertified: false,
          name: 'Informative only',
          results: [
            { name: 'Silicon (Si)', data: { quantity: { value: 103, unit: { ucumCode: 'mg/kg', unitIri: 'http://qudt.org/vocab/unit/MilliGM-PER-KiloGM' }, uncertainty: { expandedUncertainty: 12, coverageFactor: 2 } } } },
          ],
        },
      ],
    },
    evidence: [{
      id: 'https://dakks.de/credentials/capability/D-RM-11075-01-00/drmd',
      type: 'CapabilityCredentialReference',
      hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: capHash },
    }],
    proof: {
      type: 'DataIntegrityProof',
      cryptosuite: 'eddsa-rdfc-2022',
      proofPurpose: 'assertionMethod',
      verificationMethod: `${BAM_DID}#key-1`,
      created: '2025-01-01T09:00:00Z',
      proofValue: 'zDUMMY_PROOF_FOR_SCENARIO_TESTS',
    },
    ...overrides,
  };
}

// ── Trust registry ─────────────────────────────────────────────────────────────

export function makeTrustRegistry(entries: { id: string }[]): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'TrustRegistryCredential'],
    id: 'https://dakks.de/trust-registry',
    issuer: DAKKS_DID,
    credentialSubject: {
      id: 'https://dakks.de/trust-registry#list',
      registryEntries: entries,
    },
  };
}

// ── Common VerifyOptions builder ────────────────────────────────────────────────

export function makeVerifyOpts(
  capability: JsonObject,
  accreditation: JsonObject,
  extraDocs: Record<string, JsonObject> = {},
  skipRules: number[] = [4],
) {
  const trustRegistry = makeTrustRegistry([{ id: DAKKS_DID }]);
  const docStore: Record<string, JsonObject> = {
    [String(capability.id)]: capability,
    [String(accreditation.id)]: accreditation,
    ...extraDocs,
  };
  return {
    fetchDocument: async (uri: string) => {
      if (uri in docStore) return docStore[uri];
      throw new Error(`Unknown URI: ${uri}`);
    },
    resolveTrustRegistry: async (_did: string) => trustRegistry,
    skipRules,
  };
}
