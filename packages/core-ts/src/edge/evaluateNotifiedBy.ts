// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';
import { isTrustedIssuer, parseTrustRegistryCredential } from '../trust-registry/index.js';

export interface NotifiedByOptions {
  resolveTrustRegistry?: (issuerDid: string, context?: unknown) => Promise<JsonObject>;
  verificationTime?: Date;
}

function issuerId(credential: JsonObject): string {
  const issuer = credential.issuer;
  if (typeof issuer === 'string') return issuer;
  if (typeof issuer === 'object' && issuer !== null) return String((issuer as JsonObject).id ?? '');
  return '';
}

export async function evaluateNotifiedBy(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  _policy: PolicyProfile,
  options: NotifiedByOptions = {},
): Promise<TraceEntry[]> {
  const evidence = graph.nodes[edge.to]?.credential;
  if (!evidence) {
    return [traceEntry({
      id: `edge-notifiedBy-${edge.from}-to-${edge.to}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'FAIL',
      code: 'NOTIFICATION_EVIDENCE_MISSING',
      detail: 'Notification evidence could not be resolved.',
    })];
  }

  if (!options.resolveTrustRegistry) {
    return [traceEntry({
      id: `edge-notifiedBy-${edge.from}-to-${edge.to}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'WARN',
      code: 'TRUST_REGISTRY_NOT_AVAILABLE',
      detail: 'No trust registry resolver was provided for notification evidence.',
    })];
  }

  const issuer = issuerId(evidence);
  const registry = parseTrustRegistryCredential(await options.resolveTrustRegistry(issuer, edge.authorizationBasis));
  const trusted = isTrustedIssuer(
    registry,
    issuer,
    edge.authorizationBasis?.kind,
    edge.authorizationBasis?.issuerRole,
    undefined,
    options.verificationTime,
  );
  return [traceEntry({
    id: `edge-notifiedBy-${edge.from}-to-${edge.to}`,
    level: 'edge',
    from: edge.from,
    to: edge.to,
    relation: edge.relation,
    status: trusted ? 'PASS' : 'FAIL',
    code: trusted ? 'NOTIFICATION_AUTHORITY_TRUSTED' : 'NOTIFICATION_AUTHORITY_UNTRUSTED',
    detail: trusted ? 'Notification authority is trusted.' : 'Notification authority is not trusted.',
  })];
}
