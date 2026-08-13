// SPDX-License-Identifier: Apache-2.0
import type { DocumentLoader, JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';
import { checkScopeInclusion } from '../scope/index.js';
import {
  isTrustedIssuer,
  verifyTrustRegistryCredential,
  TrustRegistryVerificationError,
} from '../trust-registry/index.js';

export interface EdgeEvaluationOptions {
  resolveTrustRegistry?: (issuerDid: string, context?: unknown) => Promise<JsonObject>;
  /**
   * Resolves the key that vouches for the TrustRegistryCredential's proof.
   * Required whenever a trust registry is consulted: the registry is a signed
   * credential, and its proof is verified before any entry is read (SEC-1).
   */
  resolveKey?: (verificationMethod: string) => Promise<Uint8Array>;
  documentLoader?: DocumentLoader;
  verificationTime?: Date;
}

function issuerId(credential: JsonObject): string {
  const issuer = credential.issuer;
  if (typeof issuer === 'string') return issuer;
  if (typeof issuer === 'object' && issuer !== null) return String((issuer as JsonObject).id ?? '');
  return '';
}

function subjectId(credential: JsonObject): string {
  const subject = credential.credentialSubject;
  if (typeof subject === 'object' && subject !== null) return String((subject as JsonObject).id ?? '');
  return '';
}

function primaryType(credential: JsonObject): string | undefined {
  const type = credential.type;
  const types = Array.isArray(type) ? type.map(String) : typeof type === 'string' ? [type] : [];
  return types.find(value => value !== 'VerifiableCredential');
}

export async function evaluateAuthorizedBy(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  policy: PolicyProfile,
  options: EdgeEvaluationOptions = {},
): Promise<TraceEntry[]> {
  const results: TraceEntry[] = [];
  const source = graph.nodes[edge.from]?.credential;
  const evidence = graph.nodes[edge.to]?.credential;
  if (!source || !evidence) {
    return [traceEntry({
      id: `edge-authorizedBy-${edge.from}-to-${edge.to}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'FAIL',
      code: 'EVIDENCE_NODE_MISSING',
      detail: 'Cannot evaluate authorization edge because a node is missing.',
    })];
  }

  const evidenceIssuer = issuerId(evidence);
  if (options.resolveTrustRegistry) {
    try {
      const registryCredential = await options.resolveTrustRegistry(evidenceIssuer, {
        authorizationBasisKind: edge.authorizationBasis?.kind,
        issuerRole: edge.authorizationBasis?.issuerRole,
      });
      // SEC-1: verify the registry credential's proof before reading any entry
      // out of it. Throws TrustRegistryVerificationError, handled below with a
      // reason code that names which condition failed.
      const registry = await verifyTrustRegistryCredential(registryCredential, {
        ...(options.resolveKey ? { resolveKey: options.resolveKey } : {}),
        ...(options.documentLoader ? { documentLoader: options.documentLoader } : {}),
      });
      const trusted = isTrustedIssuer(
        registry,
        evidenceIssuer,
        edge.authorizationBasis?.kind,
        edge.authorizationBasis?.issuerRole,
        primaryType(evidence),
        options.verificationTime,
      );
      results.push(traceEntry({
        id: `trusted-${evidenceIssuer}`,
        level: 'edge',
        from: edge.from,
        to: edge.to,
        relation: edge.relation,
        status: trusted ? 'PASS' : 'FAIL',
        code: trusted ? 'TRUSTED_ISSUER' : 'UNTRUSTED_ISSUER',
        detail: trusted
          ? `${evidenceIssuer} is trusted for ${edge.authorizationBasis?.kind ?? 'unspecified evidence'}.`
          : `${evidenceIssuer} is not trusted for ${edge.authorizationBasis?.kind ?? 'unspecified evidence'}.`,
      }));
    } catch (error) {
      // Surface the specific condition rather than one opaque failure, so the
      // trace distinguishes "check not performed" from "check failed" (SEC-8).
      const code = error instanceof TrustRegistryVerificationError
        ? error.code
        : 'TRUST_REGISTRY_ERROR';
      results.push(traceEntry({
        id: `trust-registry-${evidenceIssuer}`,
        level: 'edge',
        from: edge.from,
        to: edge.to,
        relation: edge.relation,
        status: 'FAIL',
        code,
        detail: `Trust registry check failed: ${String(error)}`,
      }));
    }
  } else {
    // FC-2: an authority-conveying edge with no trust registry resolver is a
    // failure, not a warning. Without registry resolution the issuer's
    // identifier never resolves through an admitted registry, so the graph is
    // ill-formed and no verdict is available (MODEL_SPEC §4).
    results.push(traceEntry({
      id: `trust-registry-${evidenceIssuer}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'FAIL',
      code: 'TRUST_REGISTRY_NOT_AVAILABLE',
      detail: 'No trust registry resolver was configured, so issuer recognition was never checked.',
    }));
  }

  const sourceIssuer = issuerId(source);
  const evidenceSubject = subjectId(evidence);
  if (sourceIssuer && evidenceSubject) {
    const matches = sourceIssuer === evidenceSubject;
    results.push(traceEntry({
      id: `subject-binding-${edge.from}-to-${edge.to}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: matches ? 'PASS' : 'FAIL',
      code: matches ? 'SUBJECT_BOUND' : 'SUBJECT_BINDING_MISMATCH',
      detail: matches
        ? 'Authorizing evidence subject matches source credential issuer.'
        : `Authorizing evidence subject '${evidenceSubject}' does not match source issuer '${sourceIssuer}'.`,
    }));
  }

  if (policy.checks.scopeInclusion && policy.checks.scopeInclusion !== 'ignored') {
    const scopeResult = checkScopeInclusion(source, evidence, policy);
    if (scopeResult.violations.length === 0) {
      results.push(traceEntry({
        id: `scope-${edge.from}-to-${edge.to}`,
        level: 'scope',
        from: edge.from,
        to: edge.to,
        relation: edge.relation,
        status: 'PASS',
        code: 'SCOPE_INCLUSION_VALID',
        detail: 'Credential payload is within authorizing evidence scope.',
      }));
    } else {
      results.push(...scopeResult.violations.map(violation => traceEntry({
        id: `scope-${edge.from}-to-${edge.to}-${violation.code}`,
        level: 'scope' as const,
        from: edge.from,
        to: edge.to,
        relation: edge.relation,
        status: 'FAIL' as const,
        code: violation.code,
        detail: violation.detail,
      })));
    }
  }

  return results;
}
