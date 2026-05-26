// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';
import { checkScopeInclusion } from '../scope/index.js';
import { isTrustedIssuer, parseTrustRegistryCredential } from '../trust-registry/index.js';

export interface EdgeEvaluationOptions {
  resolveTrustRegistry?: (issuerDid: string, context?: unknown) => Promise<JsonObject>;
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
      const registry = parseTrustRegistryCredential(registryCredential);
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
      results.push(traceEntry({
        id: `trust-registry-${evidenceIssuer}`,
        level: 'edge',
        from: edge.from,
        to: edge.to,
        relation: edge.relation,
        status: 'FAIL',
        code: 'TRUST_REGISTRY_ERROR',
        detail: `Trust registry check failed: ${String(error)}`,
      }));
    }
  } else {
    results.push(traceEntry({
      id: `trust-registry-${evidenceIssuer}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'WARN',
      code: 'TRUST_REGISTRY_NOT_AVAILABLE',
      detail: 'No trust registry resolver was provided.',
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
