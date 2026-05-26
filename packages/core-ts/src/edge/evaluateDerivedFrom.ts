// SPDX-License-Identifier: Apache-2.0
import type { TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile } from '../policy/types.js';
import { checkDerivedEdge } from '../scope/index.js';

export function evaluateDerivedFrom(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  policy: PolicyProfile,
): TraceEntry[] {
  const child = graph.nodes[edge.from]?.credential;
  const parent = graph.nodes[edge.to]?.credential;
  if (!child || !parent) {
    return [traceEntry({
      id: `edge-derivedFrom-${edge.from}-to-${edge.to}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'FAIL',
      code: 'EVIDENCE_NODE_MISSING',
      detail: 'Cannot evaluate derivation edge because a node is missing.',
    })];
  }

  const result = checkDerivedEdge(child, parent, edge, policy);
  if (result.passed) {
    return [traceEntry({
      id: `edge-derivedFrom-${edge.from}-to-${edge.to}`,
      level: 'edge',
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      status: 'PASS',
      code: 'DERIVATION_VALID',
      detail: 'Child authority or scope is within parent evidence.',
    })];
  }

  return result.violations.map(violation => traceEntry({
    id: `edge-derivedFrom-${edge.from}-to-${edge.to}-${violation.code}`,
    level: 'edge',
    from: edge.from,
    to: edge.to,
    relation: edge.relation,
    status: 'FAIL',
    code: violation.code,
    detail: violation.detail,
  }));
}
