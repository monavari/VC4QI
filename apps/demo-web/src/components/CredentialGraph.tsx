import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  useNodesState,
  type NodeProps,
  type Node,
  type EdgeProps,
  type ReactFlowInstance,
  type OnNodeDrag,
  type CoordinateExtent,
  getBezierPath,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useDemoStore } from '../store/index.js';


// ── Paper colour palette (exact hex from manuscript macro table) ──────────────
// cdom  #1B7F79  teal    — domain / substantive credential
// cacc  #2D6CB5  blue    — accreditation / authorizing edge
// cindep #C8862A amber   — independent authority (notification, scheme)
// cops  #6FA8DC  lt-blue — operational scope / derivedFrom edge
// csupp #D9703A  orange  — supporting evidence / supportedBy edge
// cver  #B23A48  red     — verifier / verification / fail

const C = {
  dom:   '#1B7F79',
  acc:   '#2D6CB5',
  indep: '#C8862A',
  ops:   '#6FA8DC',
  supp:  '#D9703A',
  ver:   '#B23A48',
} as const;

// ── Edge styles ───────────────────────────────────────────────────────────────

const RELATION_STYLES = {
  authorizedBy: { stroke: C.acc,   label: 'authorizedBy', dash: '' },
  derivedFrom:  { stroke: C.ops,   label: 'derivedFrom',  dash: '8,4' },
  supportedBy:  { stroke: C.supp,  label: 'supportedBy',  dash: '3,5' },
} as const;

// ── Node role colours (fill tint + ring hex) ──────────────────────────────────

type ActorRole = 'accreditationBody' | 'lab' | 'schemeAuthority' | 'nmi' | 'rmProducer' | 'manufacturer';

const ROLE_HEX: Record<ActorRole, string> = {
  accreditationBody: C.acc,    // blue
  lab:               C.dom,    // teal (domain credential issuer)
  schemeAuthority:   C.indep,  // amber (independent authority)
  nmi:               C.acc,    // blue (authorizing, like accreditation body)
  rmProducer:        C.dom,    // teal
  manufacturer:      '#7C3AED', // violet
};

// Light tint backgrounds (CSS colour with low opacity applied inline)
const ROLE_BG: Record<ActorRole, string> = {
  accreditationBody: '#EBF2FA',  // tint of #2D6CB5
  lab:               '#E6F4F3',  // tint of #1B7F79
  schemeAuthority:   '#FAF0E0',  // tint of #C8862A
  nmi:               '#EBF2FA',
  rmProducer:        '#E6F4F3',
  manufacturer:      '#F3E8FF',
};

export const ISSUER_FRAME_HEADER_HEIGHT = 50;

// ── Credential node component ─────────────────────────────────────────────────

type CredentialNodeData = {
  label: string;
  credentialType: string;
  actorId: string;
  actorLabel: string;
  actorRole: ActorRole;
  isTarget: boolean;
  traceStatus?: 'pass' | 'fail' | 'mixed' | null;
  isSelected: boolean;
};

function CredentialNode({ data, id }: NodeProps) {
  const d = data as CredentialNodeData;
  const { selectNode } = useDemoStore();

  const roleHex = ROLE_HEX[d.actorRole];
  const roleBg  = ROLE_BG[d.actorRole];

  // Ring colour: status overrides role; target gets thicker ring
  const ringHex = d.isSelected
    ? '#0f172a'
    : d.traceStatus === 'fail' || d.traceStatus === 'mixed'
      ? C.ver
      : roleHex;

  const ringWidth = d.isSelected || d.isTarget ? 3 : 2;

  return (
    <div
      onClick={() => selectNode(id)}
      style={{
        background: roleBg,
        outline: `${ringWidth}px solid ${ringHex}`,
        outlineOffset: '0px',
        width: '100%',
        minWidth: 130,
        maxWidth: 200,
      }}
      className="rounded-lg px-2.5 py-2 cursor-grab active:cursor-grabbing transition-all shadow-sm bg-white relative"
    >
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />

      {/* Status icon */}
      {d.traceStatus && (
        <span
          style={{
            background: d.traceStatus === 'pass' ? '#16a34a' : d.traceStatus === 'fail' ? C.ver : C.indep,
          }}
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-bold shadow"
        >
          {d.traceStatus === 'pass' ? '✓' : d.traceStatus === 'fail' ? '✗' : '~'}
        </span>
      )}

      {d.isTarget && (
        <span
          style={{ color: C.dom }}
          className="text-[8px] font-bold uppercase tracking-widest block mb-0.5"
        >
          Target
        </span>
      )}
      <p className="text-[11px] font-semibold text-slate-800 leading-tight">{d.label}</p>
      <p className="text-[9px] text-slate-400 mt-0.5 font-mono truncate">{d.credentialType}</p>
      <div className="mt-1 flex items-center gap-1">
        <span
          style={{ background: roleHex }}
          className="w-1.5 h-1.5 rounded-full shrink-0"
        />
        <span className="text-[9px] text-slate-500 truncate">{d.actorLabel}</span>
      </div>
    </div>
  );
}

// ── Issuer frame component ───────────────────────────────────────────────────

type IssuerFrameData = {
  actorId: string;
  actorLabel: string;
  actorRole: ActorRole;
  credentialCount: number;
};

function IssuerFrame({ data }: NodeProps) {
  const d = data as IssuerFrameData;
  const color = ROLE_HEX[d.actorRole];
  const background = ROLE_BG[d.actorRole];
  return (
    <div
      style={{ borderColor: color, background }}
      className="w-full h-full rounded-2xl border-2 border-dashed shadow-sm relative cursor-grab active:cursor-grabbing"
    >
      <div
        style={{ borderColor: color }}
        className="absolute top-0 left-0 right-0 min-h-10 px-3 py-2 border-b border-dashed rounded-t-2xl bg-white/75"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p style={{ color }} className="text-[10px] font-bold uppercase tracking-wider truncate">
              {d.actorLabel}
            </p>
            <p className="text-[8px] font-mono text-slate-400 truncate">{d.actorId}</p>
          </div>
          <span
            style={{ color, borderColor: color }}
            className="shrink-0 rounded-full border bg-white px-1.5 py-0.5 text-[8px] font-semibold"
          >
            {d.credentialCount} VC{d.credentialCount === 1 ? '' : 's'}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Edge component ────────────────────────────────────────────────────────────

type EvidenceEdgeData = {
  relation: keyof typeof RELATION_STYLES;
  basisKind?: string;
  traceStatus?: 'pass' | 'fail' | null;
  isSelected: boolean;
};

function EvidenceEdge({ id, sourceX, sourceY, targetX, targetY, data }: EdgeProps) {
  const d = data as EvidenceEdgeData;
  const style = RELATION_STYLES[d.relation] ?? RELATION_STYLES.authorizedBy;
  const { selectEdge } = useDemoStore();

  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY });

  const strokeColor = d.traceStatus === 'fail' ? C.ver : style.stroke;
  const markerId = d.traceStatus === 'fail' ? 'arrow-fail' : `arrow-${d.relation}`;

  const badgeFill = d.traceStatus === 'fail' ? C.ver : '#16a34a';
  const badgeSymbol = d.traceStatus === 'fail' ? '✗' : '✓';

  return (
    <g onClick={() => selectEdge(id)} className="cursor-pointer">
      {/* Wider transparent hit area */}
      <path d={edgePath} fill="none" stroke="transparent" strokeWidth={12} />
      <path
        d={edgePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={d.isSelected ? 3 : 2}
        strokeDasharray={style.dash || undefined}
        markerEnd={`url(#${markerId})`}
      />
      {/* Pass/fail badge above the label pill — shown after verifier runs */}
      {d.traceStatus && (
        <>
          <circle cx={labelX} cy={labelY - 24} r={7} fill={badgeFill} />
          <text x={labelX} y={labelY - 20} textAnchor="middle"
            fill="white" fontSize="9" fontWeight="bold">{badgeSymbol}</text>
        </>
      )}
      <foreignObject x={labelX - 62} y={labelY - 14} width={124} height={28}>
        <div
          style={d.traceStatus === 'fail'
            ? { background: '#FEE2E2', border: `1px solid ${C.ver}`, color: C.ver }
            : d.traceStatus === 'pass'
              ? { background: '#f0fdf4', border: '1px solid #86efac', color: '#15803d' }
              : { background: '#ffffff', border: '1px solid #cbd5e1', color: '#475569' }}
          className="text-center text-[10px] font-mono px-1.5 py-0.5 rounded truncate shadow-sm"
        >
          {d.basisKind ?? style.label}
        </div>
      </foreignObject>
    </g>
  );
}

const nodeTypes = { credential: CredentialNode, issuerFrame: IssuerFrame };
const edgeTypes = { evidence: EvidenceEdge };

// ── Layout helper (layered + crossing-reduction sweeps) ───────────────────────

export function autoLayout(
  nodes: { id: string }[],
  edges: { from: string; to: string }[],
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  const ids = new Set(nodes.map(node => node.id));
  const depth = new Map(nodes.map(node => [node.id, 0]));

  // Edges point from a credential to evidence above it. Repeated relaxation
  // computes the longest target-to-authority distance without depending on the
  // input document order. The iteration cap keeps malformed cyclic input safe;
  // cycle rejection remains the verifier's responsibility.
  for (let iteration = 0; iteration < nodes.length; iteration += 1) {
    let changed = false;
    for (const edge of edges) {
      if (!ids.has(edge.from) || !ids.has(edge.to)) continue;
      const candidate = (depth.get(edge.from) ?? 0) + 1;
      if (candidate > (depth.get(edge.to) ?? 0)) {
        depth.set(edge.to, candidate);
        changed = true;
      }
    }
    if (!changed) break;
  }

  const maxDepth = Math.max(0, ...depth.values());
  const layers = new Map<number, string[]>();
  for (const node of nodes) {
    const d = Math.min(depth.get(node.id) ?? 0, maxDepth);
    if (!layers.has(d)) layers.set(d, []);
    layers.get(d)!.push(node.id);
  }

  const incoming = new Map(nodes.map(node => [node.id, [] as string[]]));
  const outgoing = new Map(nodes.map(node => [node.id, [] as string[]]));
  for (const edge of edges) {
    if (!ids.has(edge.from) || !ids.has(edge.to)) continue;
    outgoing.get(edge.from)?.push(edge.to);
    incoming.get(edge.to)?.push(edge.from);
  }

  function normalizedRank(id: string): number {
    const d = depth.get(id) ?? 0;
    const layerIds = layers.get(d) ?? [];
    if (layerIds.length <= 1) return 0;
    return (layerIds.indexOf(id) / (layerIds.length - 1)) * 2 - 1;
  }

  function sortLayer(layerDepth: number, neighbours: Map<string, string[]>): void {
    const layerIds = layers.get(layerDepth);
    if (!layerIds || layerIds.length <= 1) return;
    const previousOrder = new Map(layerIds.map((id, index) => [id, index]));
    const score = (id: string): number | undefined => {
      const adjacent = (neighbours.get(id) ?? []).filter(other =>
        (depth.get(other) ?? 0) !== layerDepth);
      if (adjacent.length === 0) return undefined;
      return adjacent.reduce((sum, other) => sum + normalizedRank(other), 0) / adjacent.length;
    };
    layerIds.sort((a, b) => {
      const aScore = score(a);
      const bScore = score(b);
      if (aScore === undefined && bScore === undefined) {
        return (previousOrder.get(a) ?? 0) - (previousOrder.get(b) ?? 0);
      }
      if (aScore === undefined) return 1;
      if (bScore === undefined) return -1;
      return aScore - bScore ||
        (previousOrder.get(a) ?? 0) - (previousOrder.get(b) ?? 0);
    });
  }

  // Alternating barycentric sweeps are the crossing-reduction stage of a
  // Sugiyama-style layered layout. They reorder only within a depth, so the
  // authority-above-product hierarchy is never changed.
  for (let sweep = 0; sweep < 4; sweep += 1) {
    for (let d = 1; d <= maxDepth; d += 1) sortLayer(d, incoming);
    for (let d = maxDepth - 1; d >= 0; d -= 1) sortLayer(d, outgoing);
  }

  const GAP_Y = 165;
  const GAP_X = 230;

  for (const [layerDepth, layerIds] of layers) {
    const layerIdx = maxDepth - layerDepth;
    const totalWidth = (layerIds.length - 1) * GAP_X;
    layerIds.forEach((id, i) => {
      positions.set(id, { x: i * GAP_X - totalWidth / 2, y: layerIdx * GAP_Y });
    });
  }

  return positions;
}

export interface IssuerFramePlacement {
  id: string;
  actorId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  credentialIds: string[];
}

export interface IssuerGroupedLayout {
  frames: IssuerFramePlacement[];
  /** Credential positions are relative to their issuer parent frame. */
  credentialPositions: Map<string, { x: number; y: number }>;
}

export function issuerFrameBodyExtent(
  frame: Pick<IssuerFramePlacement, 'width' | 'height'>,
): CoordinateExtent {
  return [[0, ISSUER_FRAME_HEADER_HEIGHT], [frame.width, frame.height]];
}

type Rectangle = { x: number; y: number; width: number; height: number };

export function rectanglesOverlap(a: Rectangle, b: Rectangle): boolean {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

function frameRectangle(node: Node): Rectangle | undefined {
  if (node.type !== 'issuerFrame') return undefined;
  const width = typeof node.style?.width === 'number'
    ? node.style.width
    : Number.parseFloat(String(node.style?.width ?? ''));
  const height = typeof node.style?.height === 'number'
    ? node.style.height
    : Number.parseFloat(String(node.style?.height ?? ''));
  if (!Number.isFinite(width) || !Number.isFinite(height)) return undefined;
  return { x: node.position.x, y: node.position.y, width, height };
}

/**
 * Convert the crossing-reduced layered layout into non-overlapping issuer
 * columns. React Flow credentials use these frames as parent nodes, keeping
 * every VC visually and interactively inside the issuer that created it.
 */
export function issuerGroupedLayout(
  nodes: { id: string; actorId: string }[],
  edges: { from: string; to: string }[],
): IssuerGroupedLayout {
  const flat = autoLayout(nodes, edges);
  const groups = new Map<string, typeof nodes>();
  for (const node of nodes) {
    if (!groups.has(node.actorId)) groups.set(node.actorId, []);
    groups.get(node.actorId)!.push(node);
  }

  const originalGroupOrder = new Map([...groups.keys()].map((id, index) => [id, index]));
  const initialGroups = [...groups.entries()].sort(([actorA, nodesA], [actorB, nodesB]) => {
    const averageX = (groupNodes: typeof nodes) =>
      groupNodes.reduce((sum, node) => sum + (flat.get(node.id)?.x ?? 0), 0) /
      Math.max(groupNodes.length, 1);
    return averageX(nodesA) - averageX(nodesB) ||
      (originalGroupOrder.get(actorA) ?? 0) - (originalGroupOrder.get(actorB) ?? 0);
  });

  const NODE_WIDTH = 180;
  const NODE_HEIGHT = 82;
  const NODE_GAP = 28;
  const FRAME_PADDING_X = 24;
  const FRAME_PADDING_BOTTOM = 22;
  const FRAME_GAP = 72;

  const dimensions = initialGroups.map(([actorId, groupNodes]) => {
    const rows = new Map<number, typeof nodes>();
    for (const node of groupNodes) {
      const y = flat.get(node.id)?.y ?? 0;
      if (!rows.has(y)) rows.set(y, []);
      rows.get(y)!.push(node);
    }
    const largestRow = Math.max(1, ...[...rows.values()].map(row => row.length));
    const width = Math.max(
      250,
      largestRow * NODE_WIDTH + (largestRow - 1) * NODE_GAP + FRAME_PADDING_X * 2,
    );
    const ys = groupNodes.map(node => flat.get(node.id)?.y ?? 0);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const height = ISSUER_FRAME_HEADER_HEIGHT +
      (maxY - minY) + NODE_HEIGHT + FRAME_PADDING_BOTTOM;
    return { actorId, groupNodes, rows, width, height, minY };
  });

  const credentialPositions = new Map<string, { x: number; y: number }>();
  for (const group of dimensions) {
    for (const [rowY, rowNodes] of group.rows) {
      rowNodes.sort((a, b) => (flat.get(a.id)?.x ?? 0) - (flat.get(b.id)?.x ?? 0));
      const rowWidth = rowNodes.length * NODE_WIDTH + (rowNodes.length - 1) * NODE_GAP;
      const rowStart = (group.width - rowWidth) / 2;
      rowNodes.forEach((node, index) => {
        credentialPositions.set(node.id, {
          x: rowStart + index * (NODE_WIDTH + NODE_GAP),
          y: ISSUER_FRAME_HEADER_HEIGHT + rowY - group.minY,
        });
      });
    }
  }

  // Recalculate issuer positions after the credentials have been reframed.
  // Candidate frame orders are scored using the final relative VC positions:
  // proper inter-frame edge crossings dominate, then horizontal edge length,
  // then displacement from the stable pre-grouping order. Only x changes here;
  // frame y keeps every credential on its original hierarchy row.
  const actorByCredential = new Map(nodes.map(node => [node.id, node.actorId]));
  const initialActorIndex = new Map(dimensions.map((group, index) => [group.actorId, index]));

  function arrangementScore(order: typeof dimensions): [number, number, number] {
    const leftByActor = new Map<string, number>();
    let left = 0;
    for (const group of order) {
      leftByActor.set(group.actorId, left);
      left += group.width + FRAME_GAP;
    }

    const segments: Array<{
      from: string;
      to: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }> = [];
    let horizontalLength = 0;
    for (const edge of edges) {
      const fromActor = actorByCredential.get(edge.from);
      const toActor = actorByCredential.get(edge.to);
      if (!fromActor || !toActor || fromActor === toActor) continue;
      const fromPosition = credentialPositions.get(edge.from);
      const toPosition = credentialPositions.get(edge.to);
      if (!fromPosition || !toPosition) continue;
      const x1 = (leftByActor.get(fromActor) ?? 0) + fromPosition.x + NODE_WIDTH / 2;
      const x2 = (leftByActor.get(toActor) ?? 0) + toPosition.x + NODE_WIDTH / 2;
      const y1 = (flat.get(edge.from)?.y ?? 0) + NODE_HEIGHT / 2;
      const y2 = (flat.get(edge.to)?.y ?? 0) + NODE_HEIGHT / 2;
      horizontalLength += Math.abs(x1 - x2);
      segments.push({ from: edge.from, to: edge.to, x1, y1, x2, y2 });
    }

    const orientation = (
      ax: number,
      ay: number,
      bx: number,
      by: number,
      cx: number,
      cy: number,
    ) => (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    let crossings = 0;
    for (let i = 0; i < segments.length; i += 1) {
      const a = segments[i]!;
      for (let j = i + 1; j < segments.length; j += 1) {
        const b = segments[j]!;
        if (a.from === b.from || a.from === b.to || a.to === b.from || a.to === b.to) continue;
        const ab1 = orientation(a.x1, a.y1, a.x2, a.y2, b.x1, b.y1);
        const ab2 = orientation(a.x1, a.y1, a.x2, a.y2, b.x2, b.y2);
        const ba1 = orientation(b.x1, b.y1, b.x2, b.y2, a.x1, a.y1);
        const ba2 = orientation(b.x1, b.y1, b.x2, b.y2, a.x2, a.y2);
        if (ab1 * ab2 < 0 && ba1 * ba2 < 0) crossings += 1;
      }
    }

    const displacement = order.reduce((sum, group, index) =>
      sum + Math.abs(index - (initialActorIndex.get(group.actorId) ?? index)), 0);
    return [crossings, horizontalLength, displacement];
  }

  function isBetter(
    candidate: [number, number, number],
    incumbent: [number, number, number],
  ): boolean {
    return candidate[0] < incumbent[0] ||
      (candidate[0] === incumbent[0] && candidate[1] < incumbent[1]) ||
      (candidate[0] === incumbent[0] && candidate[1] === incumbent[1] &&
        candidate[2] < incumbent[2]);
  }

  let orderedDimensions = dimensions;
  let bestScore = arrangementScore(orderedDimensions);
  // Current scenarios have at most five issuers. Exhaustive search is exact at
  // that scale; larger future graphs use deterministic adjacent-swap sweeps.
  if (dimensions.length <= 6) {
    const visit = (prefix: typeof dimensions, remaining: typeof dimensions): void => {
      if (remaining.length === 0) {
        const score = arrangementScore(prefix);
        if (isBetter(score, bestScore)) {
          orderedDimensions = [...prefix];
          bestScore = score;
        }
        return;
      }
      for (let index = 0; index < remaining.length; index += 1) {
        visit(
          [...prefix, remaining[index]!],
          [...remaining.slice(0, index), ...remaining.slice(index + 1)],
        );
      }
    };
    visit([], dimensions);
  } else {
    for (let sweep = 0; sweep < 4; sweep += 1) {
      let changed = false;
      for (let index = 0; index < orderedDimensions.length - 1; index += 1) {
        const candidate = [...orderedDimensions];
        [candidate[index], candidate[index + 1]] =
          [candidate[index + 1]!, candidate[index]!];
        const score = arrangementScore(candidate);
        if (isBetter(score, bestScore)) {
          orderedDimensions = candidate;
          bestScore = score;
          changed = true;
        }
      }
      if (!changed) break;
    }
  }

  const totalWidth = orderedDimensions.reduce((sum, group) => sum + group.width, 0) +
    Math.max(orderedDimensions.length - 1, 0) * FRAME_GAP;
  let cursorX = -totalWidth / 2;
  const frames: IssuerFramePlacement[] = [];
  for (const group of orderedDimensions) {
    frames.push({
      id: `issuer-frame:${group.actorId}`,
      actorId: group.actorId,
      x: cursorX,
      y: group.minY - ISSUER_FRAME_HEADER_HEIGHT,
      width: group.width,
      height: group.height,
      credentialIds: group.groupNodes.map(node => node.id),
    });
    cursorX += group.width + FRAME_GAP;
  }

  return { frames, credentialPositions };
}

// ── Main graph component ──────────────────────────────────────────────────────

export function CredentialGraph() {
  const {
    activeScenario,
    trace,
    selectedNodeId,
    selectedEdgeKey,
    selectNode,
    selectEdge,
  } = useDemoStore();

  // Node status: credential-level + edge-level FAILs (edge FAIL marks the FROM node).
  const nodeStatus = useMemo(() => {
    const map = new Map<string, 'pass' | 'fail' | 'mixed'>();
    if (!trace) return map;

    function applyStatus(nodeId: string, status: 'PASS' | 'FAIL' | 'SKIP' | 'WARN') {
      if (!nodeId) return;
      const current = map.get(nodeId);
      if (status === 'FAIL') {
        map.set(nodeId, current === 'pass' ? 'mixed' : 'fail');
      } else if ((status === 'PASS' || status === 'SKIP') && !current) {
        // SKIP counts as pass for badge purposes — the node was evaluated,
        // no check failed (proof/status skipped by policy, not an error).
        map.set(nodeId, 'pass');
      }
    }

    for (const entry of trace.results) {
      if (entry.level === 'credential') {
        applyStatus(entry.target ?? '', entry.status);
      } else if (entry.level === 'edge') {
        // Edge FAIL (digest/derivation) marks the FROM node — its evidence ref is broken.
        applyStatus(entry.from ?? '', entry.status);
      } else if (entry.level === 'graph' && entry.status === 'FAIL') {
        // Graph-level resolution failure: mark the target that couldn't be resolved.
        // Also mark the overall target credential as failed when graph resolution fails.
        applyStatus(entry.target ?? '', entry.status);
        applyStatus(trace.target, entry.status);
      }
    }
    return map;
  }, [trace]);

  const edgeStatus = useMemo(() => {
    const map = new Map<string, 'pass' | 'fail'>();
    if (!trace) return map;
    // Include both 'edge' and 'scope' level entries — scope entries (e.g.
    // SCOPE_INCLUSION_VALID) carry from/to and represent per-edge verdicts.
    for (const entry of trace.results) {
      if (entry.level !== 'edge' && entry.level !== 'scope') continue;
      if (!entry.from && !entry.to) continue;
      const key = `${entry.from ?? ''}-${entry.to ?? ''}`;
      if (entry.status === 'FAIL') map.set(key, 'fail');
      else if (!map.has(key) && entry.status === 'PASS') map.set(key, 'pass');
    }
    return map;
  }, [trace]);

  const groupedLayout = useMemo(
    () => issuerGroupedLayout(activeScenario.nodes, activeScenario.edges),
    [activeScenario],
  );

  // React Flow needs controlled node state plus onNodesChange for drag updates
  // to persist. Keep layout positions separate from trace decorations so a
  // verification replay does not snap manually arranged nodes back into place.
  const layoutNodes = useMemo<Node<CredentialNodeData | IssuerFrameData>[]>(() => {
    const frameNodes: Node<IssuerFrameData>[] = groupedLayout.frames.map(frame => {
      const actor = activeScenario.actors.find(candidate => candidate.id === frame.actorId);
      return {
        id: frame.id,
        type: 'issuerFrame',
        position: { x: frame.x, y: frame.y },
        style: { width: frame.width, height: frame.height },
        draggable: true,
        selectable: false,
        connectable: false,
        focusable: false,
        className: 'cursor-grab active:cursor-grabbing',
        zIndex: 0,
        data: {
          actorId: frame.actorId,
          actorLabel: actor?.label ?? frame.actorId,
          actorRole: (actor?.role ?? 'lab') as ActorRole,
          credentialCount: frame.credentialIds.length,
        },
      };
    });
    const parentByCredential = new Map<string, string>();
    for (const frame of groupedLayout.frames) {
      for (const credentialId of frame.credentialIds) {
        parentByCredential.set(credentialId, frame.id);
      }
    }
    const credentialNodes: Node<CredentialNodeData>[] = activeScenario.nodes.map((n) => {
      const actor = activeScenario.actors.find((a) => a.id === n.actorId)!;
      const pos = groupedLayout.credentialPositions.get(n.id) ?? { x: 0, y: 50 };
      const parentFrame = groupedLayout.frames.find(frame => frame.actorId === n.actorId);
      return {
        id: n.id,
        type: 'credential',
        position: pos,
        parentId: parentByCredential.get(n.id),
        extent: parentFrame ? issuerFrameBodyExtent(parentFrame) : 'parent',
        expandParent: false,
        style: { width: 180 },
        zIndex: 2,
        data: {
          label: n.label,
          credentialType: n.credentialType,
          actorId: n.actorId,
          actorLabel: actor?.label ?? n.actorId,
          actorRole: (actor?.role ?? 'lab') as ActorRole,
          isTarget: n.isTarget,
          traceStatus: null,
          isSelected: false,
        } satisfies CredentialNodeData,
      };
    });
    // React Flow requires parent nodes to precede their children.
    return [...frameNodes, ...credentialNodes];
  }, [activeScenario, groupedLayout]);

  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(layoutNodes);

  // A scenario change intentionally restores its canonical layered layout.
  useEffect(() => {
    setRfNodes(layoutNodes);
  }, [activeScenario.id, layoutNodes, setRfNodes]);

  // Status/selection updates preserve positions chosen by the user.
  useEffect(() => {
    setRfNodes(current => current.map(node => node.type === 'credential'
      ? {
          ...node,
          data: {
            ...node.data,
            traceStatus: nodeStatus.get(node.id) ?? null,
            isSelected: selectedNodeId === node.id,
          },
        }
      : node));
  }, [nodeStatus, selectedNodeId, setRfNodes]);

  const rfEdges = useMemo(() =>
    activeScenario.edges.map((e, i) => {
      const key = `${e.from}-${e.to}`;
      return {
        id: `edge-${i}-${key}`,
        source: e.from,
        target: e.to,
        type: 'evidence',
        data: {
          relation: e.relation,
          basisKind: e.basisKind,
          traceStatus: edgeStatus.get(key) ?? null,
          isSelected: selectedEdgeKey === `edge-${i}-${key}`,
        } satisfies EvidenceEdgeData,
      };
    }),
    [activeScenario, edgeStatus, selectedEdgeKey],
  );

  const onNodeClick = useCallback(() => {}, []);

  const onPaneClick = useCallback(() => {
    selectNode(null);
    selectEdge(null);
  }, [selectEdge, selectNode]);

  const frameDragOriginRef = useRef<{
    id: string;
    position: { x: number; y: number };
  } | null>(null);

  const onNodeDragStart = useCallback<OnNodeDrag<Node<CredentialNodeData | IssuerFrameData>>>((_event, node) => {
    if (node.type !== 'issuerFrame') return;
    frameDragOriginRef.current = {
      id: node.id,
      position: { ...node.position },
    };
  }, []);

  const onNodeDragStop = useCallback<OnNodeDrag<Node<CredentialNodeData | IssuerFrameData>>>((_event, node) => {
    if (node.type !== 'issuerFrame') return;
    const dragged = frameRectangle(node);
    const overlapsAnotherFrame = dragged !== undefined && rfNodes.some(other => {
      if (other.id === node.id) return false;
      const otherFrame = frameRectangle(other);
      return otherFrame ? rectanglesOverlap(dragged, otherFrame) : false;
    });

    const origin = frameDragOriginRef.current;
    if (overlapsAnotherFrame && origin?.id === node.id) {
      setRfNodes(current => current.map(candidate => candidate.id === node.id
        ? { ...candidate, position: origin.position }
        : candidate));
    }
    frameDragOriginRef.current = null;
  }, [rfNodes, setRfNodes]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rfInstanceRef = useRef<ReactFlowInstance<any, any> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInit = useCallback((instance: ReactFlowInstance<any, any>) => {
    rfInstanceRef.current = instance;
  }, []);

  // Re-fit the view whenever the active scenario changes so all nodes are visible.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      rfInstanceRef.current?.fitView({ padding: 0.3, duration: 300 });
    });
    return () => cancelAnimationFrame(id);
  }, [activeScenario]);

  const resetLayout = useCallback(() => {
    const canonicalPositions = new Map(layoutNodes.map(node => [node.id, node.position]));
    setRfNodes(current => current.map(node => ({
      ...node,
      position: canonicalPositions.get(node.id) ?? node.position,
    })));
    requestAnimationFrame(() => {
      rfInstanceRef.current?.fitView({ padding: 0.3, duration: 300 });
    });
  }, [layoutNodes, setRfNodes]);

  return (
    <div className="flex-1 relative bg-white">
      {/* Legend */}
      <div className="absolute top-3 right-3 z-10 bg-white/95 border border-slate-200 rounded-lg px-3 py-2.5 flex flex-col gap-2 shadow-sm">
        <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Edges</p>
        {Object.entries(RELATION_STYLES).map(([rel, s]) => (
          <div key={rel} className="flex items-center gap-2">
            <svg width="28" height="10" className="shrink-0">
              <line x1="0" y1="5" x2="28" y2="5" stroke={s.stroke} strokeWidth="2"
                strokeDasharray={s.dash || undefined} />
            </svg>
            <span className="text-[10px] font-mono text-slate-600">{rel}</span>
          </div>
        ))}
        <div className="border-t border-slate-100 pt-1.5 flex flex-col gap-1">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Status</p>
          {[
            { color: '#16a34a', label: 'pass' },
            { color: C.ver,    label: 'fail' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span style={{ background: color }} className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white text-[8px] font-bold shrink-0">
                {label === 'pass' ? '✓' : '✗'}
              </span>
              <span className="text-[10px] text-slate-600">{label}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 pt-1.5 flex flex-col gap-1">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">
            Issuers
          </p>
          {activeScenario.actors.map(actor => (
            <div key={actor.id} className="flex items-center gap-2" title={actor.did}>
              <span
                style={{
                  background: ROLE_BG[actor.role],
                  borderColor: ROLE_HEX[actor.role],
                }}
                className="w-7 h-4 rounded border-2 border-dashed shrink-0"
              />
              <span className="text-[10px] text-slate-600 truncate max-w-36">
                {actor.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-14 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={resetLayout}
          className="bg-white/95 border border-slate-200 rounded-md px-2.5 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
          title="Restore the canonical authority-to-product layout"
        >
          Reset layout
        </button>
        <span className="bg-white/90 border border-slate-200 rounded-md px-2 py-1.5 text-[9px] text-slate-500 shadow-sm">
          Drag nodes · drag canvas · scroll to zoom
        </span>
      </div>

      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={onNodeClick}
        onNodeDragStart={onNodeDragStart}
        onNodeDragStop={onNodeDragStop}
        onPaneClick={onPaneClick}
        onInit={onInit}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
        panOnDrag
        zoomOnScroll
        zoomOnPinch
        zoomOnDoubleClick
        minZoom={0.2}
        maxZoom={2.5}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        className="bg-white"
      >
        <Background color="#e2e8f0" gap={24} size={1} />
        <Controls />
        <MiniMap
          pannable
          zoomable
          position="bottom-right"
          nodeColor={node => {
            const role = (node.data as CredentialNodeData | undefined)?.actorRole ?? 'lab';
            return ROLE_HEX[role];
          }}
          nodeStrokeWidth={3}
          maskColor="rgba(241, 245, 249, 0.65)"
          className="!bg-white/95 !border !border-slate-200 !rounded-lg !shadow-sm"
        />
        {/* Arrow markers — sized in userSpaceOnUse so visible at strokeWidth=2 */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            {Object.entries(RELATION_STYLES).map(([rel, s]) => (
              <marker key={rel} id={`arrow-${rel}`}
                markerWidth="10" markerHeight="10"
                refX="9" refY="5"
                orient="auto"
                markerUnits="userSpaceOnUse">
                <path d="M0,1 L0,9 L9,5 z" fill={s.stroke} />
              </marker>
            ))}
            <marker id="arrow-fail"
              markerWidth="10" markerHeight="10"
              refX="9" refY="5"
              orient="auto"
              markerUnits="userSpaceOnUse">
              <path d="M0,1 L0,9 L9,5 z" fill={C.ver} />
            </marker>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
}
