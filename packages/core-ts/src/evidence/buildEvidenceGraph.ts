// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import { normalizeEvidence } from './normalizeEvidence.js';
import { verifyDigest } from './verifyDigest.js';
import type { EvidenceEdge, EvidenceGraph, EvidenceNode } from './types.js';

export interface BuildEvidenceGraphOptions {
  fetchDocument?: (uri: string) => Promise<JsonObject>;
  maxDepth?: number;
  maxEvidenceNodes?: number;
  requireDigest?: boolean;
}

export interface BuildEvidenceGraphResult {
  graph: EvidenceGraph;
  results: TraceEntry[];
}

function credentialId(credential: JsonObject): string {
  return String(credential.id ?? '');
}

function issuerId(credential: JsonObject): string {
  const issuer = credential.issuer;
  if (typeof issuer === 'string') return issuer;
  if (typeof issuer === 'object' && issuer !== null) return String((issuer as JsonObject).id ?? '');
  return '';
}

function credentialTypes(credential: JsonObject): string[] {
  const type = credential.type;
  if (Array.isArray(type)) return type.map(String);
  if (typeof type === 'string') return [type];
  return [];
}

function toNode(credential: JsonObject, fallbackId?: string): EvidenceNode {
  return {
    id: credentialId(credential) || fallbackId || '',
    credential,
    issuer: issuerId(credential),
    types: credentialTypes(credential),
  };
}

async function defaultFetchDocument(uri: string): Promise<JsonObject> {
  const response = await fetch(uri, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${uri}`);
  return response.json() as Promise<JsonObject>;
}

export async function buildEvidenceGraph(
  targetCredential: JsonObject,
  options: BuildEvidenceGraphOptions = {},
): Promise<BuildEvidenceGraphResult> {
  const maxDepth = options.maxDepth ?? 8;
  const maxEvidenceNodes = options.maxEvidenceNodes ?? 32;
  const fetchDocument = options.fetchDocument ?? defaultFetchDocument;
  const results: TraceEntry[] = [];
  const targetId = credentialId(targetCredential);
  const graph: EvidenceGraph = {
    targetId,
    nodes: {},
    edges: [],
  };
  const visited = new Set<string>();
  const activePath: string[] = [];

  graph.nodes[targetId] = toNode(targetCredential, targetId);

  async function visit(credential: JsonObject, depth: number): Promise<void> {
    const from = credentialId(credential);
    if (depth > maxDepth) {
      results.push(traceEntry({
        id: `max-depth-${from}`,
        level: 'graph',
        target: from,
        status: 'FAIL',
        code: 'MAX_DEPTH_EXCEEDED',
        detail: `Evidence graph exceeded maxDepth ${maxDepth}.`,
      }));
      return;
    }

    if (activePath.includes(from)) {
      results.push(traceEntry({
        id: `cycle-${from}`,
        level: 'graph',
        target: from,
        status: 'FAIL',
        code: 'CYCLE_DETECTED',
        detail: `Cycle detected at ${from}.`,
      }));
      return;
    }

    if (visited.has(from)) return;
    visited.add(from);
    activePath.push(from);

    const normalized = normalizeEvidence(credential, from);
    results.push(...normalized.results);

    for (const evidence of normalized.references) {
      const to = evidence.id;
      graph.edges.push({
        from,
        to,
        relation: evidence.relation,
        authorizationBasis: evidence.authorizationBasis,
        digestMultibase: evidence.digestMultibase,
        digestSRI: evidence.digestSRI,
      });

      if (activePath.includes(to)) {
        results.push(traceEntry({
          id: `cycle-${from}-to-${to}`,
          level: 'graph',
          from,
          to,
          relation: evidence.relation,
          status: 'FAIL',
          code: 'CYCLE_DETECTED',
          detail: `Evidence edge creates a cycle from ${from} to ${to}.`,
        }));
        continue;
      }

      if (!graph.nodes[to] && Object.keys(graph.nodes).length >= maxEvidenceNodes) {
        results.push(traceEntry({
          id: `max-nodes-${to}`,
          level: 'graph',
          target: to,
          status: 'FAIL',
          code: 'MAX_EVIDENCE_NODES_EXCEEDED',
          detail: `Evidence graph exceeded maxEvidenceNodes ${maxEvidenceNodes}.`,
        }));
        continue;
      }

      let referenced: JsonObject;
      try {
        referenced = await fetchDocument(to);
      } catch (error) {
        results.push(traceEntry({
          id: `resolve-${to}`,
          level: 'graph',
          target: to,
          status: 'FAIL',
          code: 'EVIDENCE_RESOLUTION_FAILED',
          detail: `Could not resolve evidence ${to}: ${String(error)}`,
        }));
        continue;
      }

      const node = toNode(referenced, to);
      graph.nodes[to] = node;
      results.push(traceEntry({
        id: `resolve-${to}`,
        level: 'graph',
        target: to,
        status: 'PASS',
        code: 'EVIDENCE_RESOLVED',
        detail: `Resolved evidence ${to}.`,
      }));

      results.push(verifyDigest(evidence, referenced, {
        from,
        to,
        relation: evidence.relation,
        requireDigest: options.requireDigest,
      }));

      await visit(referenced, depth + 1);
    }

    activePath.pop();
  }

  await visit(targetCredential, 0);
  return { graph, results };
}
