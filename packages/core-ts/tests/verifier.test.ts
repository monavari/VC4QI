// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { codes, verifyFixture } from './fixture-helpers.js';

describe('verifyCredentialGraph shared fixtures', () => {
  it('passes DCC authorized directly by accreditation', async () => {
    const trace = await verifyFixture('calibration-direct-accreditation');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_PRESENT');
    expect(codes(trace)).toContain('SCOPE_INCLUSION_VALID');
  });

  it('passes DCC authorized by capability derived from accreditation', async () => {
    const trace = await verifyFixture('calibration-capability');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('DERIVATION_VALID');
  });

  it('passes DCC authorized by legal mandate without accreditation', async () => {
    const trace = await verifyFixture('nmi-legal-mandate');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('TRUSTED_ISSUER');
    expect(trace.results.some(result => result.detail.includes('qi:accreditation'))).toBe(false);
  });

  it('passes ReferenceMaterialCertificate supported by an RM study', async () => {
    const trace = await verifyFixture('reference-material-recursive');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('SUPPORTING_EVIDENCE_RESOLVED');
  });

  it('passes TestReport supportedBy a DCC', async () => {
    const trace = await verifyFixture('test-report-supported-dcc');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('SUPPORTING_EVIDENCE_RESOLVED');
  });

  it('fails GS certificate missing scheme authorization', async () => {
    const trace = await verifyFixture('gs-scheme-authorization', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_MISSING');
  });

  it('fails when capability exceeds accreditation scope', async () => {
    const trace = await verifyFixture('calibration-capability', 'failing-target-credential.json');
    expect(trace.verified).toBe(false);
    expect(codes(trace)).toContain('DERIVATION_VIOLATION');
  });

  // Profile D — GS certificate authorized jointly by an independent scheme
  // authorization (kind: schemeAuthorization, no subset check) and a competence
  // accreditation (kind: accreditation). Both authorizing edges must resolve and
  // the required-evidence set must be satisfied for the certificate to accept.
  it('passes GS Profile D: authorizedBy scheme + accreditation (independent edges)', async () => {
    const trace = await verifyFixture('gs-scheme-authorization');
    expect(trace.verified).toBe(true);
    expect(codes(trace)).toContain('REQUIRED_EVIDENCE_PRESENT');
    expect(codes(trace)).toContain('TRUSTED_ISSUER');
  });
});
