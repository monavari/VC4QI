// SPDX-License-Identifier: Apache-2.0
// T1–T12 scenario tests — Appendix C, Table C1 of the paper.
// Each test uses a valid three-layer chain as the baseline and applies one targeted
// modification, then asserts the expected reason code from the verifier.
import { describe, it, expect, beforeEach } from 'vitest';
import { verify } from '../../packages/core-ts/src/verifier/index.js';
import { computeHashBinding } from '../../packages/core-ts/src/canonicalize/index.js';
import { buildStatusListCredential, createBitstring, setBit } from '../../packages/core-ts/src/status/index.js';
import { clearRegistryCache } from '../../packages/core-ts/src/trust-registry/index.js';
import type { JsonObject } from '../../packages/core-ts/src/types.js';
import {
  makeAccreditationDcc,
  makeCapabilityDcc,
  makeDcc,
  makeAccreditationDrmd,
  makeCapabilityDrmd,
  makeDrmd,
  makeTrustRegistry,
  makeVerifyOpts,
  DAKKS_DID,
  TESTLAB_DID,
  BAM_DID,
} from './fixtures.js';

beforeEach(() => clearRegistryCache());

// ── T1: DCC range out of scope ────────────────────────────────────────────────
// Paper: F1 — DCC range.to = 1500 kPa; scope range.to = 1000 kPa → RANGE_OUT_OF_SCOPE

describe('T1 — RANGE_OUT_OF_SCOPE', () => {
  it('fails when DCC measurement value exceeds scope range', async () => {
    const acc = makeAccreditationDcc();
    const cap = await makeCapabilityDcc(acc);
    // value = 1500 kPa > capability scope range.to = 600 kPa
    const dcc = await makeDcc(cap, 1500);
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(dcc, opts);
    const rule6 = result.results.filter(r => r.rule === 6);
    expect(result.verified).toBe(false);
    expect(rule6.some(r => r.status === 'FAIL' && r.detail.includes('RANGE_OUT_OF_SCOPE'))).toBe(true);
  });
});

// ── T2: DCC method out of scope ───────────────────────────────────────────────
// Paper: F2 — method not in authorized set → METHOD_OUT_OF_SCOPE

describe('T2 — METHOD_OUT_OF_SCOPE', () => {
  it('fails when DCC method is not in allowedMethods', async () => {
    const acc = makeAccreditationDcc();
    const cap = await makeCapabilityDcc(acc);
    // Use a method not in [DKD-R 6-1:2014, EA-10/17]
    const dcc = await makeDcc(cap, 300, 'EURAMET cg-3:2011');
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(dcc, opts);
    const rule6 = result.results.filter(r => r.rule === 6);
    expect(result.verified).toBe(false);
    expect(rule6.some(r => r.status === 'FAIL' && r.detail.includes('METHOD_OUT_OF_SCOPE'))).toBe(true);
  });
});

// ── T3: DCC uncertainty widening ─────────────────────────────────────────────
// Paper: F3 — U(p) = 0.10% of 300 kPa; scope bound = 0.05% → UNCERTAINTY_WIDENING

describe('T3 — UNCERTAINTY_WIDENING (DCC)', () => {
  it('fails when DCC expanded uncertainty exceeds scope bound', async () => {
    const acc = makeAccreditationDcc();
    const cap = await makeCapabilityDcc(acc);
    // 0.10% of 300 kPa = 0.30 kPa; scope bound is 0.05% = 0.15 kPa
    const dcc = await makeDcc(cap, 300, 'DKD-R 6-1:2014', 0.30);
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(dcc, opts);
    const rule6 = result.results.filter(r => r.rule === 6);
    expect(result.verified).toBe(false);
    expect(rule6.some(r => r.status === 'FAIL' && r.detail.includes('UNCERTAINTY_WIDENING'))).toBe(true);
  });
});

// ── T4: Flexible-scope uncertainty widening (EA-2/15 analogue) ───────────────
// Paper: F4 — method within scope, but uncertainty wider than bound → UNCERTAINTY_WIDENING

describe('T4 — UNCERTAINTY_WIDENING (flexible-scope)', () => {
  it('fails when method is valid but uncertainty exceeds bound (EA-2/15 analogue)', async () => {
    const acc = makeAccreditationDcc();
    const cap = await makeCapabilityDcc(acc);
    // EA-10/17 is allowed, but uncertainty is too wide
    const dcc = await makeDcc(cap, 300, 'EA-10/17', 1.0); // 0.33% >> 0.05% bound
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(dcc, opts);
    const rule6 = result.results.filter(r => r.rule === 6);
    expect(result.verified).toBe(false);
    expect(rule6.some(r => r.status === 'FAIL' && r.detail.includes('UNCERTAINTY_WIDENING'))).toBe(true);
  });
});

// ── T5: DRMD property outside allowedProperties ───────────────────────────────
// Paper: F5 — DRMD certifies a property absent from allowedProperties → MATRIX_PROPERTY_MISMATCH

describe('T5 — MATRIX_PROPERTY_MISMATCH (DRMD property not in scope)', () => {
  it('fails when DRMD certifies a property not in allowedProperties', async () => {
    const acc = makeAccreditationDrmd();
    const cap = await makeCapabilityDrmd(acc);
    const drmd = await makeDrmd(cap, {
      credentialSubject: {
        id: 'did:web:bam.de:crm:M375a:scenario',
        administrativeData: {
          coreData: { titleOfTheDocument: 'referenceMaterialCertificate', uniqueIdentifier: 'T5' },
          validity: { validFrom: '2025-01-01', validUntil: '2099-12-31' },
          referenceMaterialProducer: { name: 'BAM', id: BAM_DID, accreditationNumber: 'D-RM-11075-01-00' },
        },
        materials: [{ name: 'CuZn39Pb3', materialIdentifiers: [{ type: 'BAM-CERT', value: 'M375a' }] }],
        materialPropertiesList: [{
          propertyIdentifiers: ['massFraction'],
          isCertified: true,
          name: 'Certified values with out-of-scope property',
          results: [
            { name: 'Copper (Cu)', data: { quantity: { value: 57.68, unit: { ucumCode: '%', unitIri: 'http://qudt.org/vocab/unit/PERCENT' }, uncertainty: { expandedUncertainty: 0.14, coverageFactor: 2 } } } },
            // Uranium is not in allowedProperties
            { name: 'Uranium (U)', data: { quantity: { value: 0.001, unit: { ucumCode: 'mg/kg', unitIri: 'http://qudt.org/vocab/unit/MilliGM-PER-KiloGM' }, uncertainty: { expandedUncertainty: 0.0001, coverageFactor: 2 } } } },
          ],
        }],
      },
    });
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(drmd, opts);
    const rule6 = result.results.filter(r => r.rule === 6);
    expect(result.verified).toBe(false);
    expect(rule6.some(r => r.status === 'FAIL' && r.detail.includes('MATRIX_PROPERTY_MISMATCH'))).toBe(true);
  });
});

// ── T6: DRMD Variant B — external lab scope gap ───────────────────────────────
// Paper: F7 — lab whose 17025 scope has no Cd; DRMD attributes Cd to that lab
// This test demonstrates the characterisationOf relation; full F7 requires
// per-lab scope checks which are surfaced in the evidence resolution step.
// We test that the CapabilityCredential scope check correctly rejects Cd
// when the capability doesn't list it.

describe('T6 — NO_SCOPE_ENTRY / MATRIX_PROPERTY_MISMATCH (DRMD Variant B lab gap)', () => {
  it('fails when DRMD certifies Cd but capability allowedProperties excludes Cd', async () => {
    const acc = makeAccreditationDrmd();
    // Capability that excludes Cd from allowedProperties
    const capNoCd = await makeCapabilityDrmd(acc, {
      credentialSubject: {
        id: BAM_DID,
        constraints: {
          credentialType: 'ReferenceMaterialCertificate',
          scopeEntries: [{
            matrix: ['non-ferrous metals and alloys'],
            allowedForms: ['disc', 'powder', 'chips'],
            allowedProperties: ['Cu', 'Zn', 'Pb', 'Sn', 'Ni', 'Fe', 'Mn', 'Ag'],
            // Cd is intentionally omitted
            uncertainty: { type: 'relativeExpanded', maxRelativeU_k2: 0.05 },
          }],
        },
      },
    });
    const capHash = await computeHashBinding(capNoCd);

    const drmd: JsonObject = {
      '@context': ['https://www.w3.org/ns/credentials/v2'],
      type: ['VerifiableCredential', 'ReferenceMaterialCertificate'],
      id: 'https://bam.de/credentials/rm/t6',
      issuer: BAM_DID,
      validFrom: '2025-01-01T00:00:00Z',
      validUntil: '2099-12-31T23:59:59Z',
      credentialSubject: {
        id: 'did:web:bam.de:crm:M375a:t6',
        administrativeData: {
          coreData: { titleOfTheDocument: 'rmc', uniqueIdentifier: 'T6' },
          validity: { validFrom: '2025-01-01', validUntil: '2099-12-31' },
          referenceMaterialProducer: { name: 'BAM', id: BAM_DID, accreditationNumber: 'D-RM-11075-01-00' },
        },
        materials: [{ name: 'CuZn39Pb3', materialIdentifiers: [{ type: 'BAM-CERT', value: 'M375a' }] }],
        materialPropertiesList: [{
          propertyIdentifiers: ['massFraction'],
          isCertified: true,
          name: 'Certified values including Cd (out of capability scope)',
          results: [
            { name: 'Copper (Cu)', data: { quantity: { value: 57.68, unit: { ucumCode: '%', unitIri: 'http://qudt.org/vocab/unit/PERCENT' }, uncertainty: { expandedUncertainty: 0.14, coverageFactor: 2 } } } },
            { name: 'Cadmium (Cd)', data: { quantity: { value: 62.4, unit: { ucumCode: 'mg/kg', unitIri: 'http://qudt.org/vocab/unit/MilliGM-PER-KiloGM' }, uncertainty: { expandedUncertainty: 1.5, coverageFactor: 2 } } } },
          ],
        }],
      },
      evidence: [{
        id: String(capNoCd.id),
        type: 'CapabilityCredentialReference',
        hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: capHash },
      }],
      proof: {
        type: 'DataIntegrityProof', cryptosuite: 'eddsa-rdfc-2022',
        proofPurpose: 'assertionMethod', verificationMethod: `${BAM_DID}#key-1`,
        created: '2025-01-01T09:00:00Z', proofValue: 'zDUMMY',
      },
    };

    const opts = makeVerifyOpts(capNoCd, acc);
    const result = await verify(drmd, opts);
    const rule6 = result.results.filter(r => r.rule === 6);
    expect(result.verified).toBe(false);
    expect(rule6.some(r => r.status === 'FAIL')).toBe(true);
  });
});

// ── T7: Derivation violation — capability range exceeds accreditation ──────────
// Paper: F9 — CapabilityCredential range.to = 2000 kPa; Accreditation scope = 1000 kPa

describe('T7 — DERIVATION_VIOLATION', () => {
  it('fails when capability range exceeds accreditation scope', async () => {
    const acc = makeAccreditationDcc(); // scope range.to = 1000 kPa
    // Capability claims up to 2000 kPa — exceeds accreditation
    const capOver = await makeCapabilityDcc(acc, {
      credentialSubject: {
        id: TESTLAB_DID,
        constraints: {
          credentialType: 'DigitalCalibrationCertificate',
          scopeEntries: [{
            measurand: 'pressure',
            allowedMethods: ['DKD-R 6-1:2014'],
            range: { from: 0, to: 2000, unit: { ucumCode: 'kPa', unitIri: 'http://qudt.org/vocab/unit/KiloPA' } },
            uncertainty: { type: 'relativePercent', maxRelativePercent: 0.05 },
          }],
        },
      },
    });
    const dcc = await makeDcc(capOver, 300);
    const opts = makeVerifyOpts(capOver, acc);

    const result = await verify(dcc, opts);
    const rule2 = result.results.filter(r => r.rule === 2);
    expect(result.verified).toBe(false);
    expect(rule2.some(r => r.status === 'FAIL' && r.detail.includes('DERIVATION_VIOLATION'))).toBe(true);
  });
});

// ── T8: Status bit set (suspended) ───────────────────────────────────────────
// Paper: F10 — AccreditationCredential status list bit set to suspended

describe('T8 — STATUS (suspended accreditation)', () => {
  it('fails when accreditation credential status bit is set', async () => {
    const bits = createBitstring(256);
    setBit(bits, 0, true); // bit 0 = suspended
    const statusListId = 'https://dakks.de/status/lists/scenario-t8';
    const statusListCred = buildStatusListCredential(DAKKS_DID, statusListId, bits);

    const acc = makeAccreditationDcc({
      credentialStatus: {
        id: `${statusListId}#0`,
        type: 'BitstringStatusListEntry',
        statusPurpose: 'revocation',
        statusListIndex: '0',
        statusListCredential: statusListId,
      },
    });
    const cap = await makeCapabilityDcc(acc);
    const dcc = await makeDcc(cap, 300);

    const opts = {
      ...makeVerifyOpts(cap, acc, { [statusListId]: statusListCred }, []),
    };
    const result = await verify(dcc, opts);
    const rule4 = result.results.filter(r => r.rule === 4);
    expect(result.verified).toBe(false);
    expect(rule4.some(r => r.status === 'FAIL' && r.detail.toLowerCase().includes('bit set'))).toBe(true);
  });
});

// ── T9: Issuer DID not in trust registry ─────────────────────────────────────
// Paper: F13 — did:web:unknown-nab.example not in trust registry

describe('T9 — NOT_IN_REGISTRY', () => {
  it('fails when accreditation issuer is not in trust registry', async () => {
    const unknownNabAcc = makeAccreditationDcc({ issuer: 'did:web:unknown-nab.example' });
    const cap = await makeCapabilityDcc(unknownNabAcc);
    const dcc = await makeDcc(cap, 300);

    const trustRegistry = makeTrustRegistry([{ id: DAKKS_DID }]); // only DAKKS, not unknown-nab
    const opts = {
      fetchDocument: async (uri: string) => {
        if (uri === String(cap.id)) return cap;
        if (uri === String(unknownNabAcc.id)) return unknownNabAcc;
        throw new Error(`Unknown URI: ${uri}`);
      },
      resolveTrustRegistry: async (_did: string) => trustRegistry,
      skipRules: [4],
    };

    const result = await verify(dcc, opts);
    const rule2 = result.results.filter(r => r.rule === 2);
    expect(result.verified).toBe(false);
    expect(rule2.some(r => r.status === 'FAIL' && r.detail.toLowerCase().includes('not found'))).toBe(true);
  });
});

// ── T10: Hash mismatch ────────────────────────────────────────────────────────
// Paper: F14 — evidence reference hash modified; resolved credential unchanged

describe('T10 — HASH_MISMATCH', () => {
  it('fails when evidence hash does not match resolved credential', async () => {
    const acc = makeAccreditationDcc();
    const cap = await makeCapabilityDcc(acc);
    const dcc = await makeDcc(cap, 300);

    // Corrupt the hash in the DCC evidence
    const tamperedDcc: JsonObject = {
      ...dcc,
      evidence: [{
        ...(dcc.evidence as JsonObject[])[0],
        hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: 'zBADHASHVALUE' },
      }],
    };
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(tamperedDcc, opts);
    const rule5 = result.results.filter(r => r.rule === 5);
    expect(result.verified).toBe(false);
    expect(rule5.some(r => r.status === 'FAIL' && r.detail.toLowerCase().includes('mismatch'))).toBe(true);
  });
});

// ── T11: Valid DCC (positive test) ────────────────────────────────────────────
// Paper: T10 positive — all checks pass

describe('T11 — VALID (DCC)', () => {
  it('passes all checks for a valid DCC chain', async () => {
    const acc = makeAccreditationDcc();
    const cap = await makeCapabilityDcc(acc);
    const dcc = await makeDcc(cap, 300, 'DKD-R 6-1:2014', 0.15);
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(dcc, opts);
    const fails = result.results.filter(r => r.status === 'FAIL');
    expect(fails).toEqual([]);
    expect(result.verified).toBe(true);
  });
});

// ── T12: Valid DRMD Variant A (positive test) ─────────────────────────────────
// Paper: T11 positive — valid DRMD, single accreditation

describe('T12 — VALID (DRMD Variant A)', () => {
  it('passes all checks for a valid DRMD chain', async () => {
    const acc = makeAccreditationDrmd();
    const cap = await makeCapabilityDrmd(acc);
    const drmd = await makeDrmd(cap);
    const opts = makeVerifyOpts(cap, acc);

    const result = await verify(drmd, opts);
    const fails = result.results.filter(r => r.status === 'FAIL');
    expect(fails).toEqual([]);
    expect(result.verified).toBe(true);
  });
});
