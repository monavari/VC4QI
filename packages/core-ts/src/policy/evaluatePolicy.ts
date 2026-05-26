// SPDX-License-Identifier: Apache-2.0
import type { TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type { EvidenceEdge, EvidenceGraph } from '../evidence/types.js';
import type { PolicyProfile, RequiredEvidence } from './types.js';

function edgeMatchesRequirement(
  edge: EvidenceEdge,
  graph: EvidenceGraph,
  requirement: RequiredEvidence,
): boolean {
  if (requirement.relation && edge.relation !== requirement.relation) return false;
  if (requirement.role && edge.role !== requirement.role) return false;

  const expectedKind = requirement.authorizationBasis?.kind;
  if (expectedKind && edge.authorizationBasis?.kind !== expectedKind) return false;

  const expectedIssuerRole = requirement.authorizationBasis?.issuerRole;
  if (expectedIssuerRole && edge.authorizationBasis?.issuerRole !== expectedIssuerRole) return false;

  if (requirement.targetCredentialTypes?.length) {
    const node = graph.nodes[edge.to];
    if (!node) return false;
    if (!requirement.targetCredentialTypes.some(type => node.types.includes(type))) return false;
  }

  return true;
}

function requirementSatisfied(graph: EvidenceGraph, requirement: RequiredEvidence): boolean {
  if (requirement.anyOf?.length) {
    return requirement.anyOf.some(option => requirementSatisfied(graph, option));
  }
  return graph.edges.some(edge => edgeMatchesRequirement(edge, graph, requirement));
}

export function evaluatePolicy(graph: EvidenceGraph, policy: PolicyProfile): TraceEntry[] {
  const results: TraceEntry[] = [];
  const targetNode = graph.nodes[graph.targetId];
  const targetTypes = targetNode?.types ?? [];

  if (policy.targetCredentialTypes.some(type => targetTypes.includes(type))) {
    results.push(traceEntry({
      id: 'target-type-match',
      level: 'policy',
      target: graph.targetId,
      status: 'PASS',
      code: 'TARGET_TYPE_MATCH',
      detail: `Target credential type matches policy ${policy.id}.`,
    }));
  } else {
    results.push(traceEntry({
      id: 'target-type-match',
      level: 'policy',
      target: graph.targetId,
      status: 'FAIL',
      code: 'TARGET_TYPE_MISMATCH',
      detail: `Target credential types [${targetTypes.join(', ')}] do not match policy ${policy.id}.`,
    }));
  }

  for (const requirement of policy.requiredEvidence) {
    const required = requirement.required !== false;
    const satisfied = requirementSatisfied(graph, requirement);
    if (satisfied) {
      results.push(traceEntry({
        id: requirement.id,
        level: 'policy',
        target: graph.targetId,
        status: 'PASS',
        code: 'REQUIRED_EVIDENCE_PRESENT',
        detail: `Required evidence '${requirement.id}' is present.`,
      }));
    } else {
      results.push(traceEntry({
        id: requirement.id,
        level: 'policy',
        target: graph.targetId,
        status: required ? 'FAIL' : 'SKIP',
        code: required ? 'REQUIRED_EVIDENCE_MISSING' : 'OPTIONAL_EVIDENCE_MISSING',
        detail: `Required evidence '${requirement.id}' is missing.`,
      }));
    }
  }

  if (policy.statusPolicy?.historical === 'required') {
    results.push(traceEntry({
      id: 'historical-status',
      level: 'policy',
      target: graph.targetId,
      status: 'FAIL',
      code: 'HISTORICAL_STATUS_UNSUPPORTED',
      detail: 'Historical status checking is not implemented in v0.2.',
    }));
  }

  return results;
}
