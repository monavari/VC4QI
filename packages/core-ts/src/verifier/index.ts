// SPDX-License-Identifier: Apache-2.0
// Six-rule verification engine for the QI-VC credential chain.
// See ADR-005 for the full algorithm and rationale.
import { verifyProof } from '../proofs/index.js';
import { verifyHashBinding } from '../canonicalize/index.js';
import { checkStatusBit } from '../status/index.js';
import { isTrustedIssuer, parseTrustRegistryCredential } from '../trust-registry/index.js';
import type {
  JsonObject,
  DocumentLoader,
  RuleResult,
  VerificationResult,
  BitstringStatusListEntry,
} from '../types.js';

export interface VerifyOptions {
  documentLoader?: DocumentLoader;
  /** Resolve a URI to a JSON object (credential or status list) */
  fetchDocument?: (uri: string) => Promise<JsonObject>;
  /** Resolve a DID to its public key bytes (Ed25519) */
  resolveKey?: (verificationMethod: string) => Promise<Uint8Array>;
  /** Resolve the TrustRegistryCredential for a given issuer DID */
  resolveTrustRegistry?: (issuerDid: string) => Promise<JsonObject>;
  /** Resolve a BitstringStatusListCredential from a URL */
  resolveStatusList?: (url: string) => Promise<JsonObject>;
  /** Skip specific rules by number (e.g. [4] to skip status check in offline tests) */
  skipRules?: number[];
}

function pass(rule: number, id: string, detail: string): RuleResult {
  return { rule, id, status: 'PASS', detail };
}
function fail(rule: number, id: string, detail: string): RuleResult {
  return { rule, id, status: 'FAIL', detail };
}
function skip(rule: number, id: string, detail: string): RuleResult {
  return { rule, id, status: 'SKIP', detail };
}

function issuerId(credential: JsonObject): string {
  const iss = credential.issuer;
  if (typeof iss === 'string') return iss;
  if (typeof iss === 'object' && iss !== null) return String((iss as JsonObject).id ?? '');
  return '';
}

function subjectId(credential: JsonObject): string {
  const cs = credential.credentialSubject as JsonObject | undefined;
  return String(cs?.id ?? '');
}

function evidenceEntry(credential: JsonObject): JsonObject | null {
  const ev = credential.evidence;
  if (Array.isArray(ev) && ev.length > 0) return ev[0] as JsonObject;
  return null;
}

/**
 * Verify a domain credential (DCC or DRMD) against the full six-rule chain.
 *
 * Rule 1 — Domain credential issuer DID == CapabilityCredential subject DID
 * Rule 2 — AccreditationCredential issuer is active in TrustRegistryCredential
 * Rule 3 — Temporal validity: domain VC within capability window, capability within accreditation window
 * Rule 4 — BitstringStatusListEntry bit = 0 for all credentials in the chain
 * Rule 5 — hashBinding: domain→capability and capability→accreditation match
 * Rule 6 — Domain payload scope ⊆ CapabilityCredential scope
 */
export async function verify(
  domainCredential: JsonObject,
  opts: VerifyOptions = {},
): Promise<VerificationResult> {
  const results: RuleResult[] = [];
  const skip_ = new Set(opts.skipRules ?? []);

  const fetchDoc = opts.fetchDocument ?? (async (uri: string) => {
    const res = await fetch(uri, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${uri}`);
    return res.json() as Promise<JsonObject>;
  });

  // ── Resolve CapabilityCredential via evidence ──────────────────────────
  const capEvidence = evidenceEntry(domainCredential);
  if (!capEvidence || capEvidence.type !== 'CapabilityCredentialReference') {
    return {
      verified: false,
      results: [fail(1, 'issuer-matches-capability-subject',
        'Domain credential has no CapabilityCredentialReference in evidence')],
      error: 'Missing capability evidence',
    };
  }

  let capabilityCredential: JsonObject;
  try {
    capabilityCredential = await fetchDoc(String(capEvidence.id));
  } catch (err) {
    return {
      verified: false,
      results: [fail(1, 'issuer-matches-capability-subject',
        `Cannot fetch CapabilityCredential: ${err}`)],
    };
  }

  // ── Resolve AccreditationCredential via capability evidence ────────────
  const accEvidence = evidenceEntry(capabilityCredential);
  if (!accEvidence) {
    return {
      verified: false,
      results: [fail(2, 'accreditation-issuer-trusted',
        'CapabilityCredential has no evidence referencing AccreditationCredential')],
    };
  }

  let accreditationCredential: JsonObject;
  try {
    accreditationCredential = await fetchDoc(String(accEvidence.id));
  } catch (err) {
    return {
      verified: false,
      results: [fail(2, 'accreditation-issuer-trusted',
        `Cannot fetch AccreditationCredential: ${err}`)],
    };
  }

  // ── Rule 1: issuer-matches-capability-subject ─────────────────────────
  {
    const domainIssuer = issuerId(domainCredential);
    const capSubject = subjectId(capabilityCredential);
    if (domainIssuer && capSubject && domainIssuer === capSubject) {
      results.push(pass(1, 'issuer-matches-capability-subject',
        `Domain issuer ${domainIssuer} == CapabilityCredential subject`));
    } else {
      results.push(fail(1, 'issuer-matches-capability-subject',
        `Domain issuer '${domainIssuer}' ≠ CapabilityCredential subject '${capSubject}'`));
    }
  }

  // ── Rule 2: accreditation-issuer-trusted ─────────────────────────────
  if (skip_.has(2)) {
    results.push(skip(2, 'accreditation-issuer-trusted', 'Skipped by caller'));
  } else {
    try {
      const accIssuer = issuerId(accreditationCredential);
      let trustRegistry: JsonObject;
      if (opts.resolveTrustRegistry) {
        trustRegistry = await opts.resolveTrustRegistry(accIssuer);
      } else {
        // Try to derive trust registry URL from issuer DID (did:web convention)
        const registryUrl = deriveRegistryUrl(accIssuer);
        trustRegistry = await fetchDoc(registryUrl);
      }
      const registry = parseTrustRegistryCredential(trustRegistry);
      if (isTrustedIssuer(registry, accIssuer)) {
        results.push(pass(2, 'accreditation-issuer-trusted',
          `Issuer ${accIssuer} is active in TrustRegistryCredential`));
      } else {
        results.push(fail(2, 'accreditation-issuer-trusted',
          `Issuer ${accIssuer} not found or expired in TrustRegistryCredential`));
      }
    } catch (err) {
      results.push(fail(2, 'accreditation-issuer-trusted',
        `Trust registry check failed: ${err}`));
    }
  }

  // ── Rule 3: temporal validity ─────────────────────────────────────────
  {
    const domainFrom = String(domainCredential.validFrom ?? '');
    const capFrom = String(capabilityCredential.validFrom ?? '');
    const capUntil = String(capabilityCredential.validUntil ?? '');
    const accFrom = String(accreditationCredential.validFrom ?? '');
    const accUntil = String(accreditationCredential.validUntil ?? '');

    const domainDate = domainFrom ? new Date(domainFrom) : null;
    const capFromDate = capFrom ? new Date(capFrom) : null;
    const capUntilDate = capUntil ? new Date(capUntil) : null;
    const accFromDate = accFrom ? new Date(accFrom) : null;
    const accUntilDate = accUntil ? new Date(accUntil) : null;

    let temporalOk = true;
    const temporalDetails: string[] = [];

    // Domain VC must be within capability window
    if (domainDate && capFromDate && domainDate < capFromDate) {
      temporalOk = false;
      temporalDetails.push(`domain validFrom (${domainFrom}) is before capability validFrom (${capFrom})`);
    }
    if (domainDate && capUntilDate && domainDate > capUntilDate) {
      temporalOk = false;
      temporalDetails.push(`domain validFrom (${domainFrom}) is after capability validUntil (${capUntil})`);
    }
    // Capability must be within accreditation window
    if (capFromDate && accFromDate && capFromDate < accFromDate) {
      temporalOk = false;
      temporalDetails.push(`capability validFrom (${capFrom}) is before accreditation validFrom (${accFrom})`);
    }
    if (capFromDate && accUntilDate && capFromDate > accUntilDate) {
      temporalOk = false;
      temporalDetails.push(`capability validFrom (${capFrom}) is after accreditation validUntil (${accUntil})`);
    }

    if (temporalOk) {
      results.push(pass(3, 'temporal-validity', 'All validity windows are consistent'));
    } else {
      results.push(fail(3, 'temporal-validity', temporalDetails.join('; ')));
    }
  }

  // ── Rule 4: status-bit-clear ──────────────────────────────────────────
  if (skip_.has(4)) {
    results.push(skip(4, 'status-bit-clear', 'Skipped by caller'));
  } else {
    const statusResults = await checkAllStatusBits(
      [domainCredential, capabilityCredential, accreditationCredential],
      opts.resolveStatusList ?? fetchDoc,
    );
    results.push(...statusResults);
  }

  // ── Rule 5: hash-binding-matches ──────────────────────────────────────
  if (skip_.has(5)) {
    results.push(skip(5, 'hash-binding-matches', 'Skipped by caller'));
  } else {
    // Check domain → capability
    const capHashOk = await checkHashBinding(
      capabilityCredential,
      capEvidence,
      opts.documentLoader,
    );
    results.push(capHashOk
      ? pass(5, 'hash-binding-matches',
          'domain→capability hashBinding verified')
      : fail(5, 'hash-binding-matches',
          'domain→capability hashBinding mismatch'));

    // Check capability → accreditation
    if (accEvidence) {
      const accHashOk = await checkHashBinding(
        accreditationCredential,
        accEvidence,
        opts.documentLoader,
      );
      results.push(accHashOk
        ? pass(5, 'hash-binding-matches',
            'capability→accreditation hashBinding verified')
        : fail(5, 'hash-binding-matches',
            'capability→accreditation hashBinding mismatch'));
    }
  }

  // ── Rule 6: scope-covers-payload ──────────────────────────────────────
  if (skip_.has(6)) {
    results.push(skip(6, 'scope-covers-payload', 'Skipped by caller'));
  } else {
    const scopeResult = checkScopeCoverage(domainCredential, capabilityCredential);
    results.push(scopeResult);
  }

  const verified = results.every(r => r.status !== 'FAIL');
  return { verified, results };
}

// ── Helpers ───────────────────────────────────────────────────────────────

async function checkAllStatusBits(
  credentials: JsonObject[],
  fetchDoc: (url: string) => Promise<JsonObject>,
): Promise<RuleResult[]> {
  const ruleResults: RuleResult[] = [];

  for (const cred of credentials) {
    const status = cred.credentialStatus as BitstringStatusListEntry | undefined;
    if (!status) continue;
    if (status.type !== 'BitstringStatusListEntry') continue;

    try {
      const listCredential = await fetchDoc(status.statusListCredential);
      const isSet = checkStatusBit(status, listCredential);
      if (isSet) {
        ruleResults.push(fail(4, 'status-bit-clear',
          `Status bit SET for credential (index ${status.statusListIndex}) — credential is ${status.statusPurpose === 'revocation' ? 'revoked' : 'suspended'}`));
      } else {
        ruleResults.push(pass(4, 'status-bit-clear',
          `Status bit clear for credential (index ${status.statusListIndex})`));
      }
    } catch (err) {
      ruleResults.push(fail(4, 'status-bit-clear',
        `Cannot check status list ${status.statusListCredential}: ${err}`));
    }
  }

  if (ruleResults.length === 0) {
    ruleResults.push(skip(4, 'status-bit-clear', 'No BitstringStatusListEntry found in chain'));
  }
  return ruleResults;
}

async function checkHashBinding(
  referencedCredential: JsonObject,
  evidenceEntry: JsonObject,
  documentLoader?: DocumentLoader,
): Promise<boolean> {
  const hashBinding = evidenceEntry.hashBinding as
    { digestAlgorithm: string; digestMultibase: string } | undefined;
  if (!hashBinding) return false;

  // Remove proof before hashing, per ADR-005
  const { proof: _proof, ...unsecured } = referencedCredential;
  try {
    return verifyHashBinding(
      unsecured as JsonObject,
      hashBinding.digestMultibase,
      documentLoader,
    );
  } catch {
    return false;
  }
}

function checkScopeCoverage(
  domainCredential: JsonObject,
  capabilityCredential: JsonObject,
): RuleResult {
  const capSubject = capabilityCredential.credentialSubject as JsonObject | undefined;
  const scope = capSubject?.scope as JsonObject | undefined;

  if (!scope) {
    return skip(6, 'scope-covers-payload',
      'CapabilityCredential has no scope — check skipped');
  }

  const authorizedTypes = scope.authorizedCredentialTypes as string[] | undefined ?? [];
  const domainTypes = (domainCredential.type as string[] | undefined) ?? [];
  const domainType = domainTypes.find(t => t !== 'VerifiableCredential');

  if (domainType && authorizedTypes.length > 0 && !authorizedTypes.includes(domainType)) {
    return fail(6, 'scope-covers-payload',
      `Domain type '${domainType}' not in capability authorizedCredentialTypes: [${authorizedTypes.join(', ')}]`);
  }

  return pass(6, 'scope-covers-payload',
    'Domain credential type is within CapabilityCredential scope');
}

function deriveRegistryUrl(issuerDid: string): string {
  // did:web:example.com → https://example.com/.well-known/trust-registry
  if (issuerDid.startsWith('did:web:')) {
    const host = issuerDid.slice('did:web:'.length).replace(/:/g, '/');
    return `https://${host}/.well-known/trust-registry.json`;
  }
  throw new Error(`Cannot derive trust registry URL from DID: ${issuerDid}`);
}
