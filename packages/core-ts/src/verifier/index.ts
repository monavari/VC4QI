// SPDX-License-Identifier: Apache-2.0
// Evidence-graph verifier for QI credentials.
import { buildEvidenceGraph } from '../evidence/buildEvidenceGraph.js';
import { evaluateEdge } from '../edge/evaluateEdge.js';
import { evaluatePolicy } from '../policy/evaluatePolicy.js';
import type { PolicyProfile } from '../policy/types.js';
import { validate, SCHEMA_IDS } from '../schemas/index.js';
import { checkStatusBit } from '../status/index.js';
import { verifyProof } from '../proofs/index.js';
import { verifySd } from '../proofs/sd.js';
import { evaluateTermsOfUse } from '../terms/index.js';
import type {
  BitstringStatusListEntry,
  DocumentLoader,
  JsonObject,
  TraceEntry,
  VerificationTrace,
} from '../types.js';
import { traceEntry, makeVerificationTrace } from './trace.js';

export interface VerifyGraphOptions {
  fetchDocument?: (uri: string) => Promise<JsonObject>;
  documentLoader?: DocumentLoader;
  resolveKey?: (verificationMethod: string) => Promise<Uint8Array>;
  /**
   * Document loader used only for ecdsa-sd-2023 selective-disclosure verification.
   * Must resolve the proof's verificationMethod to the issuer's P-256 Multikey
   * document and its controller document. Defaults to `documentLoader` when omitted.
   */
  sdDocumentLoader?: DocumentLoader;
  resolveTrustRegistry?: (issuerDid: string, context?: unknown) => Promise<JsonObject>;
  resolveStatusList?: (url: string) => Promise<JsonObject>;
  maxDepth?: number;
  maxEvidenceNodes?: number;
  skipProof?: boolean;
  skipStatus?: boolean;
  verificationTime?: Date;
}

function credentialId(credential: JsonObject): string {
  return String(credential.id ?? '');
}

function credentialTypes(credential: JsonObject): string[] {
  const type = credential.type;
  if (Array.isArray(type)) return type.map(String);
  if (typeof type === 'string') return [type];
  return [];
}

function schemaIdFor(credential: JsonObject): string | undefined {
  if (typeof credential.$schema === 'string') return credential.$schema;
  const schema = credential.credentialSchema as JsonObject | undefined;
  if (typeof schema?.id === 'string') return schema.id;
  const types = credentialTypes(credential);
  if (types.includes('DigitalCalibrationCertificate')) return SCHEMA_IDS.DCC;
  if (types.includes('ReferenceMaterialCertificate')) return SCHEMA_IDS.RMC;
  return undefined;
}

async function evaluateSchema(
  credential: JsonObject,
  policy: PolicyProfile,
): Promise<TraceEntry[]> {
  const mode = policy.checks.schema ?? 'optional';
  if (mode === 'ignored') return [];
  const id = credentialId(credential);
  const schemaId = schemaIdFor(credential);
  if (!schemaId) {
    return [traceEntry({
      id: `schema-${id}`,
      level: 'credential',
      target: id,
      status: mode === 'required' ? 'SKIP' : 'SKIP',
      code: 'SCHEMA_NOT_DECLARED',
      detail: 'No schema is declared for this evidence node.',
    })];
  }

  const result = validate(credential, schemaId);
  return [traceEntry({
    id: `schema-${id}`,
    level: 'credential',
    target: id,
    status: result.valid ? 'PASS' : 'FAIL',
    code: result.valid ? 'SCHEMA_VALID' : 'SCHEMA_INVALID',
    detail: result.valid
      ? `Credential matches schema ${schemaId}.`
      : `Schema validation failed: ${result.errors.join('; ')}`,
  })];
}

/**
 * Test-facing wrapper around the internal proof evaluation, so the cryptosuite
 * dispatch (eddsa-rdfc-2022 vs ecdsa-sd-2023) can be exercised in isolation
 * without building a full evidence graph. Returns the single proof TraceEntry.
 */
export async function evaluateProofForTest(
  credential: JsonObject,
  policy: PolicyProfile,
  options: VerifyGraphOptions = {},
): Promise<TraceEntry> {
  const entries = await evaluateProof(credential, policy, options);
  const entry = entries[0];
  if (!entry) throw new Error('proof evaluation returned no trace entry');
  return entry;
}

async function evaluateProof(
  credential: JsonObject,
  policy: PolicyProfile,
  options: VerifyGraphOptions,
): Promise<TraceEntry[]> {
  const mode = policy.checks.proof ?? 'optional';
  if (mode === 'ignored') return [];
  const id = credentialId(credential);
  if (options.skipProof) {
    return [traceEntry({
      id: `proof-${id}`,
      level: 'credential',
      target: id,
      status: 'SKIP',
      code: 'PROOF_SKIPPED',
      detail: 'Proof verification skipped by caller.',
    })];
  }
  const proof = credential.proof as JsonObject | undefined;
  if (!proof) {
    return mode === 'required'
      ? [traceEntry({
          id: `proof-${id}`,
          level: 'credential',
          target: id,
          status: 'FAIL',
          code: 'PROOF_REQUIRED',
          detail: 'Policy requires a proof.',
        })]
      : [];
  }
  // Dispatch on cryptosuite. The ecdsa-sd-2023 selective-disclosure path is
  // verified by proofs/sd.ts (Digital Bazaar) over a document loader that resolves
  // the issuer's P-256 multikey; the eddsa-rdfc-2022 path below is unchanged and
  // still uses the hand-rolled verifier with raw Ed25519 key bytes from resolveKey.
  if (proof.cryptosuite === 'ecdsa-sd-2023') {
    const sdLoader = options.sdDocumentLoader ?? options.documentLoader;
    if (!sdLoader) {
      return [traceEntry({
        id: `proof-${id}`,
        level: 'credential',
        target: id,
        status: mode === 'required' ? 'FAIL' : 'WARN',
        code: 'PROOF_RESOLVER_MISSING',
        detail: 'No document loader was provided for ecdsa-sd-2023 verification.',
      })];
    }
    try {
      const { verified, error } = await verifySd(credential, { documentLoader: sdLoader });
      return [traceEntry({
        id: `proof-${id}`,
        level: 'credential',
        target: id,
        status: verified ? 'PASS' : 'FAIL',
        code: verified ? 'PROOF_VALID' : 'PROOF_INVALID',
        detail: verified
          ? 'Selective-disclosure (ecdsa-sd-2023) proof verified over disclosed subset.'
          : `Selective-disclosure proof failed verification: ${error ?? 'unknown error'}`,
      })];
    } catch (error) {
      return [traceEntry({
        id: `proof-${id}`,
        level: 'credential',
        target: id,
        status: 'FAIL',
        code: 'PROOF_VERIFICATION_ERROR',
        detail: `Proof verification failed: ${String(error)}`,
      })];
    }
  }
  if (!options.resolveKey) {
    return [traceEntry({
      id: `proof-${id}`,
      level: 'credential',
      target: id,
      status: mode === 'required' ? 'FAIL' : 'WARN',
      code: 'PROOF_RESOLVER_MISSING',
      detail: 'No key resolver was provided for proof verification.',
    })];
  }
  try {
    const verificationMethod = String(proof.verificationMethod ?? '');
    const publicKey = await options.resolveKey(verificationMethod);
    const proofOptions: { documentLoader?: DocumentLoader } = {};
    if (options.documentLoader !== undefined) proofOptions.documentLoader = options.documentLoader;
    const ok = await verifyProof(credential, publicKey, proofOptions);
    return [traceEntry({
      id: `proof-${id}`,
      level: 'credential',
      target: id,
      status: ok ? 'PASS' : 'FAIL',
      code: ok ? 'PROOF_VALID' : 'PROOF_INVALID',
      detail: ok ? 'Data Integrity proof verified.' : 'Data Integrity proof failed verification.',
    })];
  } catch (error) {
    return [traceEntry({
      id: `proof-${id}`,
      level: 'credential',
      target: id,
      status: 'FAIL',
      code: 'PROOF_VERIFICATION_ERROR',
      detail: `Proof verification failed: ${String(error)}`,
    })];
  }
}

async function defaultFetchDocument(uri: string): Promise<JsonObject> {
  const response = await fetch(uri, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${uri}`);
  return response.json() as Promise<JsonObject>;
}

function statusModeFor(
  credentialIdValue: string,
  targetId: string,
  policy: PolicyProfile,
): 'required' | 'optional' | 'ignored' | 'unsupported' {
  if (policy.checks.status) return policy.checks.status;
  if (credentialIdValue === targetId) return policy.statusPolicy?.target ?? 'optional';
  return policy.statusPolicy?.authorizingEvidence ?? 'optional';
}

async function evaluateStatus(
  credential: JsonObject,
  targetId: string,
  policy: PolicyProfile,
  options: VerifyGraphOptions,
): Promise<TraceEntry[]> {
  const id = credentialId(credential);
  const mode = statusModeFor(id, targetId, policy);
  if (mode === 'ignored' || options.skipStatus) {
    return [traceEntry({
      id: `status-${id}`,
      level: 'credential',
      target: id,
      status: 'SKIP',
      code: options.skipStatus ? 'STATUS_SKIPPED' : 'STATUS_IGNORED',
      detail: 'Status check skipped.',
    })];
  }
  const status = credential.credentialStatus as BitstringStatusListEntry | undefined;
  if (!status) {
    return mode === 'required'
      ? [traceEntry({
          id: `status-${id}`,
          level: 'credential',
          target: id,
          status: 'FAIL',
          code: 'STATUS_REQUIRED',
          detail: 'Policy requires credentialStatus.',
        })]
      : [];
  }
  if (status.type !== 'BitstringStatusListEntry') {
    return [traceEntry({
      id: `status-${id}`,
      level: 'credential',
      target: id,
      status: 'FAIL',
      code: 'UNSUPPORTED_STATUS_ENTRY',
      detail: `Unsupported credentialStatus type ${String(status.type)}.`,
    })];
  }
  const fetchStatus = options.resolveStatusList ?? options.fetchDocument ?? defaultFetchDocument;
  try {
    const list = await fetchStatus(status.statusListCredential);
    const isSet = checkStatusBit(status, list);
    const code = status.statusPurpose === 'suspension' ? 'CREDENTIAL_SUSPENDED' : 'CREDENTIAL_REVOKED';
    return [traceEntry({
      id: `status-${id}`,
      level: 'credential',
      target: id,
      status: isSet ? 'FAIL' : 'PASS',
      code: isSet ? code : 'STATUS_VALID',
      detail: isSet
        ? `Status bit ${status.statusListIndex} is set for ${status.statusPurpose}.`
        : `Status bit ${status.statusListIndex} is clear.`,
    })];
  } catch (error) {
    return [traceEntry({
      id: `status-${id}`,
      level: 'credential',
      target: id,
      status: mode === 'required' ? 'FAIL' : 'WARN',
      code: 'STATUS_CHECK_FAILED',
      detail: `Status check failed: ${String(error)}`,
    })];
  }
}

async function evaluateCredentialNode(
  credential: JsonObject,
  targetId: string,
  policy: PolicyProfile,
  options: VerifyGraphOptions,
): Promise<TraceEntry[]> {
  const results: TraceEntry[] = [];
  results.push(...await evaluateSchema(credential, policy));
  results.push(...await evaluateProof(credential, policy, options));
  results.push(...await evaluateStatus(credential, targetId, policy, options));
  results.push(...evaluateTermsOfUse(credential, policy));
  return results;
}

export async function verifyCredentialGraph(
  targetCredential: JsonObject,
  policy: PolicyProfile,
  options: VerifyGraphOptions = {},
): Promise<VerificationTrace> {
  const targetId = credentialId(targetCredential);
  const results: TraceEntry[] = [];

  const graphOptions: Parameters<typeof buildEvidenceGraph>[1] = {
    requireDigest: policy.checks.digest === 'required',
  };
  if (options.fetchDocument !== undefined) graphOptions.fetchDocument = options.fetchDocument;
  const maxDepth = options.maxDepth ?? policy.limits?.maxDepth;
  const maxEvidenceNodes = options.maxEvidenceNodes ?? policy.limits?.maxEvidenceNodes;
  if (maxDepth !== undefined) graphOptions.maxDepth = maxDepth;
  if (maxEvidenceNodes !== undefined) graphOptions.maxEvidenceNodes = maxEvidenceNodes;
  const graphResult = await buildEvidenceGraph(targetCredential, graphOptions);

  results.push(...graphResult.results);

  for (const node of Object.values(graphResult.graph.nodes)) {
    results.push(...await evaluateCredentialNode(node.credential, targetId, policy, options));
  }

  for (const edge of graphResult.graph.edges) {
    const edgeOptions: Parameters<typeof evaluateEdge>[3] = {};
    if (options.resolveTrustRegistry !== undefined) edgeOptions.resolveTrustRegistry = options.resolveTrustRegistry;
    if (options.verificationTime !== undefined) edgeOptions.verificationTime = options.verificationTime;
    results.push(...await evaluateEdge(edge, graphResult.graph, policy, edgeOptions));
  }

  results.push(...evaluatePolicy(graphResult.graph, policy));

  return makeVerificationTrace({
    profile: policy.id,
    target: targetId,
    nodesResolved: Object.keys(graphResult.graph.nodes).length,
    edgesEvaluated: graphResult.graph.edges.length,
    results,
  });
}
