// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';
import { evaluateAuthorizedBy, type EdgeEvaluationOptions } from './evaluateAuthorizedBy.js';
import { evaluateDerivedFrom } from './evaluateDerivedFrom.js';
import { evaluateSupportedBy } from './evaluateSupportedBy.js';

export interface EvaluateEdgeOptions extends EdgeEvaluationOptions {
  resolveTrustRegistry?: (issuerDid: string, context?: unknown) => Promise<JsonObject>;
  verificationTime?: Date;
}

export async function evaluateEdge(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  policy: PolicyProfile,
  options: EvaluateEdgeOptions = {},
): Promise<TraceEntry[]> {
  switch (edge.relation) {
    case 'authorizedBy':
      return evaluateAuthorizedBy(edge, graph, policy, options);
    case 'derivedFrom':
      return evaluateDerivedFrom(edge, graph, policy);
    case 'supportedBy':
      return evaluateSupportedBy(edge, graph, policy);
    default:
      return [traceEntry({
        id: `edge-unsupported-${edge.from}-to-${edge.to}`,
        level: 'edge',
        from: edge.from,
        to: edge.to,
        relation: edge.relation,
        status: 'FAIL',
        code: 'UNSUPPORTED_EVIDENCE_RELATION',
        detail: `Unsupported evidence relation ${edge.relation}.`,
      })];
  }
}
