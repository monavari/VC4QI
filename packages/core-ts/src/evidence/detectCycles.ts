// SPDX-License-Identifier: Apache-2.0
import type { EvidenceGraph } from './types.js';

export function detectCycles(graph: EvidenceGraph): string[][] {
  const adjacency = new Map<string, string[]>();
  for (const edge of graph.edges) {
    const current = adjacency.get(edge.from) ?? [];
    current.push(edge.to);
    adjacency.set(edge.from, current);
  }

  const cycles: string[][] = [];
  const active: string[] = [];
  const visited = new Set<string>();

  function visit(node: string): void {
    if (active.includes(node)) {
      cycles.push(active.slice(active.indexOf(node)).concat(node));
      return;
    }
    if (visited.has(node)) return;
    visited.add(node);
    active.push(node);
    for (const next of adjacency.get(node) ?? []) visit(next);
    active.pop();
  }

  visit(graph.targetId);
  return cycles;
}
