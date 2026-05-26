// SPDX-License-Identifier: Apache-2.0
import type { TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';

export function evaluateRecognizedBy(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  _policy: PolicyProfile,
): TraceEntry[] {
  const target = graph.nodes[edge.to];
  return [traceEntry({
    id: `edge-recognizedBy-${edge.from}-to-${edge.to}`,
    level: 'edge',
    from: edge.from,
    to: edge.to,
    relation: edge.relation,
    status: target ? 'PASS' : 'FAIL',
    code: target ? 'RECOGNITION_EVIDENCE_RESOLVED' : 'RECOGNITION_EVIDENCE_MISSING',
    detail: target ? 'Recognition evidence was resolved.' : 'Recognition evidence could not be resolved.',
  })];
}
