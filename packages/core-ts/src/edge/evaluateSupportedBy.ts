// SPDX-License-Identifier: Apache-2.0
import type { TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';

export function evaluateSupportedBy(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  _policy: PolicyProfile,
): TraceEntry[] {
  const target = graph.nodes[edge.to];
  return [traceEntry({
    id: `edge-supportedBy-${edge.from}-to-${edge.to}`,
    level: 'edge',
    from: edge.from,
    to: edge.to,
    relation: edge.relation,
    status: target ? 'PASS' : 'FAIL',
    code: target ? 'SUPPORTING_EVIDENCE_RESOLVED' : 'SUPPORTING_EVIDENCE_MISSING',
    detail: target
      ? 'Supporting credential was resolved and remains part of recursive graph evaluation.'
      : 'Supporting credential could not be resolved.',
  })];
}
