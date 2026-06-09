import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  type NodeProps,
  type EdgeProps,
  getBezierPath,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import clsx from 'clsx';
import { useDemoStore } from '../store/index.js';
import type { TraceEntry } from '@qi-vc/core';

// ── Edge colours & styles ────────────────────────────────────────────────────

const RELATION_STYLES = {
  authorizedBy: { stroke: '#818cf8', label: 'authorizedBy', dash: '' },
  derivedFrom:  { stroke: '#34d399', label: 'derivedFrom',  dash: '6,3' },
  supportedBy:  { stroke: '#94a3b8', label: 'supportedBy',  dash: '2,4' },
} as const;

const ACTOR_ROLE_COLORS = {
  accreditationBody: 'border-sky-500 bg-sky-950',
  lab:               'border-violet-500 bg-violet-950',
  schemeAuthority:   'border-amber-500 bg-amber-950',
  nmi:               'border-emerald-500 bg-emerald-950',
  rmProducer:        'border-rose-500 bg-rose-950',
} as const;

// ── Credential node component ────────────────────────────────────────────────

type CredentialNodeData = {
  label: string;
  credentialType: string;
  actorId: string;
  actorLabel: string;
  actorRole: keyof typeof ACTOR_ROLE_COLORS;
  isTarget: boolean;
  traceStatus?: 'pass' | 'fail' | 'mixed' | null;
  isSelected: boolean;
};

function CredentialNode({ data, id }: NodeProps) {
  const d = data as CredentialNodeData;
  const { selectNode } = useDemoStore();

  const borderColor = d.isSelected
    ? 'ring-2 ring-white'
    : d.traceStatus === 'fail'
      ? 'ring-2 ring-red-500'
      : d.isTarget
        ? 'ring-2 ring-indigo-400'
        : '';

  return (
    <div
      onClick={() => selectNode(id)}
      className={clsx(
        'rounded-xl border px-4 py-3 cursor-pointer min-w-[160px] transition-all shadow-xl',
        ACTOR_ROLE_COLORS[d.actorRole],
        borderColor,
      )}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      {d.isTarget && (
        <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block mb-1">
          Target
        </span>
      )}
      <p className="text-sm font-semibold text-zinc-100 leading-tight">{d.label}</p>
      <p className="text-[10px] text-zinc-400 mt-0.5 font-mono">{d.credentialType}</p>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
        <span className="text-[10px] text-zinc-400 truncate">{d.actorLabel}</span>
      </div>
      {d.traceStatus && (
        <div className={clsx(
          'mt-2 text-[10px] font-semibold rounded px-1.5 py-0.5 inline-block',
          d.traceStatus === 'pass' ? 'bg-emerald-500/20 text-emerald-300' :
          d.traceStatus === 'fail' ? 'bg-red-500/20 text-red-300' :
          'bg-zinc-500/20 text-zinc-300',
        )}>
          {d.traceStatus.toUpperCase()}
        </div>
      )}
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

  const strokeColor = d.traceStatus === 'fail' ? '#f87171' : style.stroke;

  return (
    <g onClick={() => selectEdge(id)} className="cursor-pointer">
      <path
        d={edgePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={d.isSelected ? 3 : 2}
        strokeDasharray={style.dash || undefined}
        markerEnd={`url(#arrow-${d.relation})`}
        opacity={0.85}
      />
      <foreignObject x={labelX - 60} y={labelY - 14} width={120} height={28}>
        <div className={clsx(
          'text-center text-[10px] font-mono px-1.5 py-0.5 rounded border truncate',
          d.traceStatus === 'fail'
            ? 'bg-red-950 border-red-700 text-red-300'
            : 'bg-zinc-900 border-zinc-700 text-zinc-400',
        )}>
          {d.basisKind ?? style.label}
        </div>
      </foreignObject>
    </g>
  );
}

const nodeTypes = { credential: CredentialNode };
const edgeTypes = { evidence: EvidenceEdge };

// ── Layout helper (simple top-down layered) ──────────────────────────────────

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

  // BFS layers (target at top, roots at bottom)
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

  // Group by layer
  const byLayer = new Map<number, string[]>();
  for (const n of nodes) {
    const l = layer.get(n.id) ?? 0;
    const inverted = maxLayer - l; // target (deepest in BFS from sources, shallowest visually) at top
    if (!byLayer.has(inverted)) byLayer.set(inverted, []);
    byLayer.get(inverted)!.push(n.id);
  }

  const GAP_Y = 160;
  const GAP_X = 220;

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

  // Build per-node and per-edge trace status summaries
  const nodeStatus = useMemo(() => {
    const map = new Map<string, 'pass' | 'fail' | 'mixed'>();
    if (!trace) return map;
    const credentialEntries = trace.results.filter((r: TraceEntry) => r.level === 'credential');
    for (const entry of credentialEntries) {
      const nodeId = entry.target ?? '';
      const current = map.get(nodeId);
      if (entry.status === 'FAIL') {
        map.set(nodeId, 'fail');
      } else if (!current && (entry.status === 'PASS')) {
        map.set(nodeId, 'pass');
      } else if (current === 'pass' && entry.status === 'FAIL') {
        map.set(nodeId, 'fail');
      }
    }
    return map;
  }, [trace]);

  const edgeStatus = useMemo(() => {
    const map = new Map<string, 'pass' | 'fail'>();
    if (!trace) return map;
    for (const entry of trace.results.filter((r: TraceEntry) => r.level === 'edge')) {
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
          actorRole: actor?.role ?? 'lab',
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

  return (
    <div className="flex-1 relative">
      {/* Legend */}
      <div className="absolute top-3 right-3 z-10 bg-zinc-900/90 border border-zinc-700 rounded-lg px-3 py-2 flex flex-col gap-1.5 backdrop-blur-sm">
        {Object.entries(RELATION_STYLES).map(([rel, s]) => (
          <div key={rel} className="flex items-center gap-2">
            <svg width="28" height="10" className="shrink-0">
              <line x1="0" y1="5" x2="28" y2="5" stroke={s.stroke} strokeWidth="2"
                strokeDasharray={s.dash || undefined} />
            </svg>
            <span className="text-[10px] font-mono text-zinc-400">{rel}</span>
          </div>
        ))}
      </div>

      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        className="bg-zinc-950"
      >
        <Background color="#27272a" gap={24} size={1} />
        <Controls className="[&_button]:bg-zinc-800 [&_button]:border-zinc-700 [&_button]:text-zinc-300" />
        <MiniMap
          nodeColor={(n) => {
            const d = n.data as CredentialNodeData;
            return d.isTarget ? '#6366f1' : '#52525b';
          }}
          className="bg-zinc-900 border-zinc-700"
        />
        {/* Arrow markers */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            {Object.entries(RELATION_STYLES).map(([rel, s]) => (
              <marker key={rel} id={`arrow-${rel}`} markerWidth="8" markerHeight="8"
                refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={s.stroke} />
              </marker>
            ))}
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
}
