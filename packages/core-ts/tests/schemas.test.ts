// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from 'vitest';
import { validate, assertValid, SCHEMA_IDS } from '../src/schemas/index.js';

// Valid base58btc multibase strings (pattern: ^z[1-9A-HJ-NP-Za-km-z]+$)
const VALID_DIGEST_1 = 'zHash1234567TestABCDE';
const VALID_DIGEST_2 = 'zHash7654321TestFGHJK';

const minimalDcc = {
  '@context': [
    'https://www.w3.org/ns/credentials/v2',
    'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld',
  ],
  type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
  id: 'urn:uuid:dcc-test-001',
  issuer: 'did:web:cal.example.com',
  validFrom: '2025-01-01T00:00:00Z',
  credentialSubject: {
    id: 'urn:item:pressure-transmitter-001',
    administrativeData: {
      coreData: {
        uniqueIdentifier: 'DCC-2025-001',
        beginPerformanceDate: '2025-01-01T08:00:00Z',
        endPerformanceDate: '2025-01-01T16:00:00Z',
      },
      items: [
        { name: 'Pressure Transmitter' },
      ],
      calibrationLaboratory: { name: 'Test Calibration Lab' },
      customer: { name: 'Test Customer GmbH' },
    },
    measurementResults: [
      {
        measurand: 'Pressure',
        results: [
          {
            data: {
              quantity: {
                quantityKind: 'http://qudt.org/vocab/quantitykind/Pressure',
                value: 10.002,
                unit: { ucumCode: 'bar' },
              },
            },
          },
        ],
      },
    ],
  },
  evidence: [
    {
      id: 'https://accreditor.example.com/cap/001',
      type: 'CapabilityCredentialReference',
      hashBinding: {
        digestAlgorithm: 'sha-256',
        digestMultibase: VALID_DIGEST_1,
      },
    },
  ],
  proof: {
    type: 'DataIntegrityProof',
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:web:cal.example.com#key-1',
    proofValue: 'zTestProof1234ABCDE',
  },
};

const minimalRmc = {
  '@context': [
    'https://www.w3.org/ns/credentials/v2',
    'https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld',
  ],
  type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
  id: 'urn:uuid:rmc-test-001',
  issuer: 'did:web:rm.example.com',
  validFrom: '2025-01-01T00:00:00Z',
  validUntil: '2027-01-01T00:00:00Z',
  credentialSubject: {
    id: 'urn:lot:ph-buffer-001',
    administrativeData: {
      coreData: {
        titleOfTheDocument: 'Certificate of Analysis',
        uniqueIdentifier: 'RMC-2025-001',
      },
      validity: {
        validFrom: '2025-01-01',
        validUntil: '2027-01-01',
      },
      referenceMaterialProducer: { name: 'Test RM Producer GmbH' },
    },
    materials: [
      {
        name: 'pH Buffer Solution 7.00',
        materialIdentifiers: [
          { type: 'lotNumber', value: 'LOT-2025-PH700-001' },
        ],
      },
    ],
    materialPropertiesList: [
      {
        propertyIdentifiers: ['pH'],
        results: [
          {
            data: {
              quantity: {
                quantityKind: 'http://qudt.org/vocab/quantitykind/Acidity',
                value: 7.00,
                unit: { ucumCode: '1' },
              },
            },
          },
        ],
      },
    ],
  },
  evidence: [
    {
      id: 'https://accreditor.example.com/cap/002',
      type: 'CapabilityCredentialReference',
      hashBinding: {
        digestAlgorithm: 'sha-256',
        digestMultibase: VALID_DIGEST_2,
      },
    },
  ],
  proof: {
    type: 'DataIntegrityProof',
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:web:rm.example.com#key-1',
    proofValue: 'zTestProof5678ABCDE',
  },
};

describe('schema validation — DCC', () => {
  it('validates a minimal valid DCC', () => {
    const result = validate(minimalDcc, SCHEMA_IDS.DCC);
    if (!result.valid) console.error('DCC errors:', result.errors);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('rejects a DCC missing issuer', () => {
    const { issuer: _, ...bad } = minimalDcc;
    const result = validate(bad as never, SCHEMA_IDS.DCC);
    expect(result.valid).toBe(false);
  });

  it('rejects a DCC missing evidence', () => {
    const bad = { ...minimalDcc, evidence: [] };
    const result = validate(bad, SCHEMA_IDS.DCC);
    expect(result.valid).toBe(false);
  });

  it('rejects a DCC with wrong type array', () => {
    const bad = { ...minimalDcc, type: ['VerifiableCredential'] };
    const result = validate(bad, SCHEMA_IDS.DCC);
    expect(result.valid).toBe(false);
  });

  it('rejects a DCC with empty measurementResults', () => {
    const bad = {
      ...minimalDcc,
      credentialSubject: { ...minimalDcc.credentialSubject, measurementResults: [] },
    };
    const result = validate(bad, SCHEMA_IDS.DCC);
    expect(result.valid).toBe(false);
  });

  it('assertValid does not throw for valid DCC', () => {
    expect(() => assertValid(minimalDcc, SCHEMA_IDS.DCC)).not.toThrow();
  });

  it('assertValid throws for invalid DCC', () => {
    const { proof: _, ...noProof } = minimalDcc;
    expect(() => assertValid(noProof as never, SCHEMA_IDS.DCC)).toThrow('Schema validation failed');
  });
});

describe('schema validation — RMC', () => {
  it('validates a minimal valid RMC', () => {
    const result = validate(minimalRmc, SCHEMA_IDS.RMC);
    if (!result.valid) console.error('RMC errors:', result.errors);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('rejects an RMC missing validUntil', () => {
    const { validUntil: _, ...bad } = minimalRmc;
    const result = validate(bad as never, SCHEMA_IDS.RMC);
    expect(result.valid).toBe(false);
  });

  it('rejects an RMC missing evidence', () => {
    const bad = { ...minimalRmc, evidence: [] };
    const result = validate(bad, SCHEMA_IDS.RMC);
    expect(result.valid).toBe(false);
  });

  it('rejects an RMC with missing materialIdentifiers', () => {
    const bad = {
      ...minimalRmc,
      credentialSubject: {
        ...minimalRmc.credentialSubject,
        materials: [{ name: 'pH Buffer' }], // missing materialIdentifiers
      },
    };
    const result = validate(bad, SCHEMA_IDS.RMC);
    expect(result.valid).toBe(false);
  });
});

describe('schema validation — error cases', () => {
  it('returns error when schemaId is unknown', () => {
    const result = validate({}, 'https://unknown.example.com/schema.json');
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('Schema not found');
  });

  it('returns error when no schemaId and no $schema field', () => {
    const result = validate({});
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain('No $schema');
  });

  it('uses $schema field when no schemaId passed', () => {
    const doc = { ...minimalDcc, $schema: SCHEMA_IDS.DCC };
    const result = validate(doc);
    expect(result.valid).toBe(true);
  });
});
