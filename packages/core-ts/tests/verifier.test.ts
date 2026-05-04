// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect, beforeEach } from 'vitest';
import { verify } from '../src/verifier/index.js';
import { computeHashBinding } from '../src/canonicalize/index.js';
import { buildStatusListCredential, createBitstring, setBit } from '../src/status/index.js';
import { clearRegistryCache } from '../src/trust-registry/index.js';
import type { JsonObject } from '../src/types.js';

// ── Minimal credential fixtures ──────────────────────────────────────────────

const ROOT_DID = 'did:web:root.example.com';
const ACC_DID = 'did:web:accreditor.example.com';
const CAB_DID = 'did:web:lab.example.com';

function makeAccreditation(overrides: Partial<JsonObject> = {}): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'AccreditationCredential'],
    id: 'https://root.example.com/acc/001',
    issuer: ACC_DID,  // Accreditation body issues the AccreditationCredential
    validFrom: '2024-01-01T00:00:00Z',
    validUntil: '2028-01-01T00:00:00Z',
    credentialSubject: {
      id: CAB_DID,
      scope: { authorizedCredentialTypes: ['DigitalCalibrationCertificate'] },
    },
    ...overrides,
  };
}

function makeCapability(
  accHash: string,
  overrides: Partial<JsonObject> = {},
): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'CapabilityCredential'],
    id: 'https://accreditor.example.com/cap/001',
    issuer: ACC_DID,
    validFrom: '2024-06-01T00:00:00Z',
    validUntil: '2027-06-01T00:00:00Z',
    credentialSubject: {
      id: CAB_DID,
      scope: { authorizedCredentialTypes: ['DigitalCalibrationCertificate'] },
    },
    evidence: [
      {
        id: 'https://root.example.com/acc/001',
        type: 'CapabilityCredentialReference',
        hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: accHash },
      },
    ],
    ...overrides,
  };
}

function makeDomain(
  capHash: string,
  overrides: Partial<JsonObject> = {},
): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'DigitalCalibrationCertificate'],
    id: 'urn:uuid:dcc-001',
    issuer: CAB_DID,
    validFrom: '2025-01-01T00:00:00Z',
    credentialSubject: { id: 'urn:item:pressure-001' },
    evidence: [
      {
        id: 'https://accreditor.example.com/cap/001',
        type: 'CapabilityCredentialReference',
        hashBinding: { digestAlgorithm: 'sha-256', digestMultibase: capHash },
      },
    ],
    proof: {
      type: 'DataIntegrityProof',
      cryptosuite: 'eddsa-rdfc-2022',
      proofPurpose: 'assertionMethod',
      verificationMethod: `${CAB_DID}#key-1`,
      created: '2025-01-01T00:00:00Z',
      proofValue: 'zTestProof',
    },
    ...overrides,
  };
}

function makeTrustRegistry(dids: string[]): JsonObject {
  return {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiableCredential', 'TrustRegistryCredential'],
    id: 'https://root.example.com/.well-known/trust-registry.json',
    issuer: ROOT_DID,
    validFrom: '2024-01-01T00:00:00Z',
    credentialSubject: {
      id: ROOT_DID,
      registryEntries: dids.map(id => ({ id })),
    },
  };
}

/** Build a fully consistent credential chain with correct hashes */
async function buildValidChain(): Promise<{
  domainCredential: JsonObject;
  capabilityCredential: JsonObject;
  accreditationCredential: JsonObject;
  trustRegistry: JsonObject;
}> {
  const accreditationCredential = makeAccreditation();
  const { proof: _ap, ...unsecuredAcc } = accreditationCredential;
  const accHash = await computeHashBinding(unsecuredAcc as JsonObject);

  const capabilityCredential = makeCapability(accHash);
  const { proof: _cp, ...unsecuredCap } = capabilityCredential;
  const capHash = await computeHashBinding(unsecuredCap as JsonObject);

  const domainCredential = makeDomain(capHash);
  const trustRegistry = makeTrustRegistry([ACC_DID]);

  return { domainCredential, capabilityCredential, accreditationCredential, trustRegistry };
}

function makeVerifyOpts(chain: {
  capabilityCredential: JsonObject;
  accreditationCredential: JsonObject;
  trustRegistry: JsonObject;
}) {
  return {
    fetchDocument: async (uri: string): Promise<JsonObject> => {
      if (uri === String((chain.capabilityCredential as JsonObject).id)) return chain.capabilityCredential;
      if (uri === String((chain.accreditationCredential as JsonObject).id)) return chain.accreditationCredential;
      throw new Error(`Unknown URI: ${uri}`);
    },
    resolveTrustRegistry: async (_did: string) => chain.trustRegistry,
    skipRules: [4], // Skip status check (no live status list in unit tests)
  };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('verify — happy path', () => {
  beforeEach(() => clearRegistryCache());

  it('returns verified=true when all 5 non-status rules pass', async () => {
    const chain = await buildValidChain();
    const result = await verify(chain.domainCredential, makeVerifyOpts(chain));

    expect(result.verified).toBe(true);
    const failed = result.results.filter(r => r.status === 'FAIL');
    expect(failed).toHaveLength(0);
  });

  it('includes results for all 6 rules', async () => {
    const chain = await buildValidChain();
    const result = await verify(chain.domainCredential, makeVerifyOpts(chain));

    const ruleNums = result.results.map(r => r.rule);
    expect(ruleNums).toContain(1);
    expect(ruleNums).toContain(2);
    expect(ruleNums).toContain(3);
    expect(ruleNums).toContain(4); // SKIP
    expect(ruleNums).toContain(5);
    expect(ruleNums).toContain(6);
  });
});

describe('verify — Rule 1: issuer-matches-capability-subject', () => {
  beforeEach(() => clearRegistryCache());

  it('fails when domain issuer ≠ capability subject', async () => {
    const chain = await buildValidChain();
    const badCap = {
      ...chain.capabilityCredential,
      credentialSubject: { id: 'did:web:wrong.example.com', scope: { authorizedCredentialTypes: ['DigitalCalibrationCertificate'] } },
    };
    const opts = {
      ...makeVerifyOpts({ ...chain, capabilityCredential: badCap }),
      fetchDocument: async (uri: string): Promise<JsonObject> => {
        if (uri === String(badCap.id)) return badCap;
        if (uri === String(chain.accreditationCredential.id)) return chain.accreditationCredential;
        throw new Error(`Unknown URI: ${uri}`);
      },
    };
    const result = await verify(chain.domainCredential, opts);

    const r1 = result.results.find(r => r.rule === 1);
    expect(r1?.status).toBe('FAIL');
  });
});

describe('verify — Rule 2: accreditation-issuer-trusted', () => {
  beforeEach(() => clearRegistryCache());

  it('fails when accreditation issuer not in trust registry', async () => {
    const chain = await buildValidChain();
    const emptyRegistry = makeTrustRegistry([]); // no entries
    const opts = {
      ...makeVerifyOpts(chain),
      resolveTrustRegistry: async () => emptyRegistry,
    };
    const result = await verify(chain.domainCredential, opts);

    const r2 = result.results.find(r => r.rule === 2);
    expect(r2?.status).toBe('FAIL');
  });

  it('is skipped when skipRules includes 2', async () => {
    const chain = await buildValidChain();
    const opts = { ...makeVerifyOpts(chain), skipRules: [2, 4] };
    const result = await verify(chain.domainCredential, opts);

    const r2 = result.results.find(r => r.rule === 2);
    expect(r2?.status).toBe('SKIP');
  });
});

describe('verify — Rule 3: temporal-validity', () => {
  beforeEach(() => clearRegistryCache());

  it('fails when domain validFrom is outside capability window', async () => {
    const chain = await buildValidChain();

    // Domain credential issued BEFORE capability starts
    const earlyDomain = { ...chain.domainCredential, validFrom: '2023-01-01T00:00:00Z' };
    const result = await verify(earlyDomain, makeVerifyOpts(chain));

    const r3 = result.results.find(r => r.rule === 3);
    expect(r3?.status).toBe('FAIL');
    expect(r3?.detail).toContain('before capability validFrom');
  });

  it('passes when all dates are in correct order', async () => {
    const chain = await buildValidChain();
    const result = await verify(chain.domainCredential, makeVerifyOpts(chain));

    const r3 = result.results.find(r => r.rule === 3);
    expect(r3?.status).toBe('PASS');
  });
});

describe('verify — Rule 4: status-bit-clear', () => {
  beforeEach(() => clearRegistryCache());

  it('is skipped when skipRules includes 4', async () => {
    const chain = await buildValidChain();
    const result = await verify(chain.domainCredential, makeVerifyOpts(chain));

    const r4 = result.results.find(r => r.rule === 4);
    expect(r4?.status).toBe('SKIP');
  });

  it('skips gracefully when no credentialStatus in chain', async () => {
    const chain = await buildValidChain();
    const opts = {
      ...makeVerifyOpts(chain),
      skipRules: [], // Don't skip rule 4
      resolveStatusList: async (_url: string): Promise<JsonObject> => {
        throw new Error('should not be called');
      },
    };
    const result = await verify(chain.domainCredential, opts);

    // Should auto-skip because no BitstringStatusListEntry present
    const r4s = result.results.filter(r => r.rule === 4);
    expect(r4s.every(r => r.status !== 'FAIL')).toBe(true);
  });

  it('passes when status bit is clear', async () => {
    const chain = await buildValidChain();
    const bits = createBitstring();
    const statusListUrl = 'https://example.com/status/1';
    const statusList = buildStatusListCredential(ACC_DID, statusListUrl, bits);

    const domainWithStatus = {
      ...chain.domainCredential,
      credentialStatus: {
        id: `${statusListUrl}#0`,
        type: 'BitstringStatusListEntry',
        statusPurpose: 'revocation',
        statusListIndex: '0',
        statusListCredential: statusListUrl,
      },
    };

    const opts = {
      ...makeVerifyOpts(chain),
      skipRules: [], // Run rule 4
      fetchDocument: async (uri: string): Promise<JsonObject> => {
        if (uri === String(chain.capabilityCredential.id)) return chain.capabilityCredential;
        if (uri === String(chain.accreditationCredential.id)) return chain.accreditationCredential;
        if (uri === statusListUrl) return statusList;
        throw new Error(`Unknown URI: ${uri}`);
      },
    };

    const result = await verify(domainWithStatus, opts);
    const r4s = result.results.filter(r => r.rule === 4);
    expect(r4s.some(r => r.status === 'PASS')).toBe(true);
    expect(r4s.every(r => r.status !== 'FAIL')).toBe(true);
  });

  it('fails when status bit is set (revoked)', async () => {
    const chain = await buildValidChain();
    const bits = createBitstring();
    setBit(bits, 7, true); // revoke index 7
    const statusListUrl = 'https://example.com/status/2';
    const statusList = buildStatusListCredential(ACC_DID, statusListUrl, bits);

    const domainWithStatus = {
      ...chain.domainCredential,
      credentialStatus: {
        id: `${statusListUrl}#7`,
        type: 'BitstringStatusListEntry',
        statusPurpose: 'revocation',
        statusListIndex: '7',
        statusListCredential: statusListUrl,
      },
    };

    const opts = {
      ...makeVerifyOpts(chain),
      skipRules: [], // Run rule 4
      fetchDocument: async (uri: string): Promise<JsonObject> => {
        if (uri === String(chain.capabilityCredential.id)) return chain.capabilityCredential;
        if (uri === String(chain.accreditationCredential.id)) return chain.accreditationCredential;
        if (uri === statusListUrl) return statusList;
        throw new Error(`Unknown URI: ${uri}`);
      },
    };

    const result = await verify(domainWithStatus, opts);
    const r4 = result.results.find(r => r.rule === 4 && r.status === 'FAIL');
    expect(r4).toBeDefined();
    expect(r4?.detail).toContain('revoked');
  });
});

describe('verify — Rule 5: hash-binding-matches', () => {
  beforeEach(() => clearRegistryCache());

  it('fails when capabilityCredential hash does not match', async () => {
    const chain = await buildValidChain();
    const badDomain = makeDomain('zWrongHash11111111111111111111111111111111111111');
    const result = await verify(badDomain, makeVerifyOpts(chain));

    const r5 = result.results.find(r => r.rule === 5 && r.detail.includes('domain→capability') && r.status === 'FAIL');
    expect(r5).toBeDefined();
  });

  it('is skipped when skipRules includes 5', async () => {
    const chain = await buildValidChain();
    const opts = { ...makeVerifyOpts(chain), skipRules: [4, 5] };
    const result = await verify(chain.domainCredential, opts);

    const r5 = result.results.find(r => r.rule === 5);
    expect(r5?.status).toBe('SKIP');
  });
});

describe('verify — Rule 6: scope-covers-payload', () => {
  beforeEach(() => clearRegistryCache());

  it('fails when domain type not in capability scope', async () => {
    const chain = await buildValidChain();

    // Capability only allows DRMD, but domain is a DCC
    const restrictedCap = {
      ...chain.capabilityCredential,
      credentialSubject: {
        id: CAB_DID,
        scope: { authorizedCredentialTypes: ['ReferenceMaterialCertificate'] },
      },
    };
    const opts = {
      ...makeVerifyOpts({ ...chain, capabilityCredential: restrictedCap }),
      fetchDocument: async (uri: string): Promise<JsonObject> => {
        if (uri === String(restrictedCap.id)) return restrictedCap;
        if (uri === String(chain.accreditationCredential.id)) return chain.accreditationCredential;
        throw new Error(`Unknown URI: ${uri}`);
      },
    };

    const result = await verify(chain.domainCredential, opts);
    const r6 = result.results.find(r => r.rule === 6);
    expect(r6?.status).toBe('FAIL');
    expect(r6?.detail).toContain('DigitalCalibrationCertificate');
  });

  it('skips gracefully when capability has no scope', async () => {
    const chain = await buildValidChain();

    const noScopeCap = {
      ...chain.capabilityCredential,
      credentialSubject: { id: CAB_DID }, // No scope field
    };
    const opts = {
      ...makeVerifyOpts({ ...chain, capabilityCredential: noScopeCap }),
      fetchDocument: async (uri: string): Promise<JsonObject> => {
        if (uri === String(noScopeCap.id)) return noScopeCap;
        if (uri === String(chain.accreditationCredential.id)) return chain.accreditationCredential;
        throw new Error(`Unknown URI: ${uri}`);
      },
    };

    const result = await verify(chain.domainCredential, opts);
    const r6 = result.results.find(r => r.rule === 6);
    expect(r6?.status).toBe('SKIP');
  });
});

describe('verify — structural failures', () => {
  beforeEach(() => clearRegistryCache());

  it('fails immediately when domain has no evidence', async () => {
    const { evidence: _, ...noEvidence } = makeDomain('zAny');
    const result = await verify(noEvidence as JsonObject, {});
    expect(result.verified).toBe(false);
    expect(result.error).toContain('Missing capability evidence');
  });

  it('fails when domain evidence has wrong type', async () => {
    const domain = makeDomain('zAny');
    const bad = {
      ...domain,
      evidence: [{ id: 'https://x.example', type: 'SomethingElse' }],
    };
    const result = await verify(bad, {});
    expect(result.verified).toBe(false);
    expect(result.results[0]?.detail).toContain('CapabilityCredentialReference');
  });

  it('fails when capability cannot be fetched', async () => {
    const domain = makeDomain('zAny');
    const result = await verify(domain, {
      fetchDocument: async (_uri: string) => { throw new Error('Network error'); },
    });
    expect(result.verified).toBe(false);
    expect(result.results[0]?.detail).toContain('Cannot fetch CapabilityCredential');
  });

  it('fails when accreditation cannot be fetched', async () => {
    const chain = await buildValidChain();

    // Cap has no evidence -> accreditation fetch will fail
    const capNoEvidence = { ...chain.capabilityCredential, evidence: undefined };
    const opts = {
      fetchDocument: async (uri: string): Promise<JsonObject> => {
        if (uri === String(chain.capabilityCredential.id)) return capNoEvidence as JsonObject;
        throw new Error(`Unknown URI: ${uri}`);
      },
    };
    const result = await verify(chain.domainCredential, opts);
    expect(result.verified).toBe(false);
    expect(result.results[0]?.detail).toContain('AccreditationCredential');
  });
});
