import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  type NodeProps,
  type EdgeProps,
  type ReactFlowInstance,
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

type ActorRole = 'accreditationBody' | 'lab' | 'schemeAuthority' | 'nmi' | 'rmProducer';

const ROLE_HEX: Record<ActorRole, string> = {
  accreditationBody: C.acc,    // blue
  lab:               C.dom,    // teal (domain credential issuer)
  schemeAuthority:   C.indep,  // amber (independent authority)
  nmi:               C.acc,    // blue (authorizing, like accreditation body)
  rmProducer:        C.dom,    // teal
};

// Light tint backgrounds (CSS colour with low opacity applied inline)
const ROLE_BG: Record<ActorRole, string> = {
  accreditationBody: '#EBF2FA',  // tint of #2D6CB5
  lab:               '#E6F4F3',  // tint of #1B7F79
  schemeAuthority:   '#FAF0E0',  // tint of #C8862A
  nmi:               '#EBF2FA',
  rmProducer:        '#E6F4F3',
};

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
        minWidth: 130,
        maxWidth: 200,
      }}
      className="rounded-lg px-2.5 py-2 cursor-pointer transition-all shadow-sm bg-white relative"
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

const nodeTypes = { credential: CredentialNode };
const edgeTypes = { evidence: EvidenceEdge };

// ── Layout helper (BFS layered, authority at top) ─────────────────────────────

function autoLayout(
  nodes: { id: string }[],
  edges: { from: string; to: string }[],
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  const inDegree = new Map(nodes.map((n) => [n.id, 0]));
  const adj = new Map(nodes.map((n) => [n.id, [] as string[]]));

  for (const e of edges) {
    inDegree.set(e.to, (inDegree.get(e.to) ?? 0) + 1);
    adj.get(e.from)?.push(e.to);
  }

  const queue = nodes.filter((n) => (inDegree.get(n.id) ?? 0) === 0).map((n) => n.id);
  const layer = new Map<string, number>();
  let maxLayer = 0;

  while (queue.length > 0) {
    const id = queue.shift()!;
    const l = layer.get(id) ?? 0;
    maxLayer = Math.max(maxLayer, l);
    for (const next of (adj.get(id) ?? [])) {
      const nextLayer = Math.max(layer.get(next) ?? 0, l + 1);
      layer.set(next, nextLayer);
      queue.push(next);
    }
  }

  // Invert: authority roots (deepest BFS leaf) at top (y=0);
  // target credential (BFS source) at bottom.
  const byLayer = new Map<number, string[]>();
  for (const n of nodes) {
    const l = layer.get(n.id) ?? 0;
    const inv = maxLayer - l;
    if (!byLayer.has(inv)) byLayer.set(inv, []);
    byLayer.get(inv)!.push(n.id);
  }

  const GAP_Y = 140;
  const GAP_X = 190;

  for (const [layerIdx, ids] of byLayer) {
    const totalWidth = (ids.length - 1) * GAP_X;
    ids.forEach((id, i) => {
      positions.set(id, { x: i * GAP_X - totalWidth / 2, y: layerIdx * GAP_Y });
    });
  }

  return positions;
}

// ── Main graph component ──────────────────────────────────────────────────────

export function CredentialGraph() {
  const { activeScenario, trace, selectedNodeId, selectedEdgeKey } = useDemoStore();

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

  const positions = useMemo(
    () => autoLayout(activeScenario.nodes, activeScenario.edges),
    [activeScenario],
  );

  const rfNodes = useMemo(() =>
    activeScenario.nodes.map((n) => {
      const actor = activeScenario.actors.find((a) => a.id === n.actorId)!;
      const pos = positions.get(n.id) ?? { x: 0, y: 0 };
      return {
        id: n.id,
        type: 'credential',
        position: pos,
        data: {
          label: n.label,
          credentialType: n.credentialType,
          actorId: n.actorId,
          actorLabel: actor?.label ?? n.actorId,
          actorRole: (actor?.role ?? 'lab') as ActorRole,
          isTarget: n.isTarget,
          traceStatus: nodeStatus.get(n.id) ?? null,
          isSelected: selectedNodeId === n.id,
        } satisfies CredentialNodeData,
      };
    }),
    [activeScenario, positions, nodeStatus, selectedNodeId],
  );

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
      </div>

      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={onNodeClick}
        onInit={onInit}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        className="bg-white"
      >
        <Background color="#e2e8f0" gap={24} size={1} />
        <Controls />
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
