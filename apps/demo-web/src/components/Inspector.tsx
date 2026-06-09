import { useMemo } from 'react';
import clsx from 'clsx';
import { useDemoStore } from '../store/index.js';
import { CredentialCard } from './CredentialCard.js';
import type { TraceEntry } from '@qi-vc/core';

const STATUS_STYLE: Record<string, string> = {
  PASS: 'bg-green-50  text-green-700  border-green-300',
  FAIL: 'bg-red-50    text-red-700    border-red-300',
  SKIP: 'bg-slate-50  text-slate-500  border-slate-300',
  WARN: 'bg-amber-50  text-amber-700  border-amber-300',
};

function TraceRow({ entry }: { entry: TraceEntry }) {
  return (
    <div className="border-b border-slate-100 py-2 px-3">
      <div className="flex items-center gap-2 mb-0.5">
        <span className={clsx('border rounded px-1 py-0.5 font-mono text-[9px] shrink-0', STATUS_STYLE[entry.status])}>
          {entry.status}
        </span>
        <span className="font-mono text-[10px] text-slate-700 truncate">{entry.code}</span>
      </div>
      <p className="text-[10px] text-slate-500 leading-relaxed pl-0.5">{entry.detail}</p>
    </div>
  );
}

function PanelHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="px-4 py-3 border-b border-slate-200 shrink-0 bg-white">
      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">{title}</p>
      {subtitle && <p className="text-[10px] text-slate-500 font-mono truncate">{subtitle}</p>}
    </div>
  );
}

export function Inspector() {
  const { activeScenario, trace, selectedNodeId, selectedEdgeKey } = useDemoStore();

  const selectedNode = useMemo(
    () => activeScenario.nodes.find((n) => n.id === selectedNodeId) ?? null,
    [activeScenario, selectedNodeId],
  );

  const selectedEdge = useMemo(() => {
    if (!selectedEdgeKey) return null;
    const parts = selectedEdgeKey.split('-');
    const idx = Number(parts[1]);
    return activeScenario.edges[idx] ?? null;
  }, [activeScenario, selectedEdgeKey]);

  const nodeTrace = useMemo(() => {
    if (!trace || !selectedNodeId) return [];
    return trace.results.filter((r: TraceEntry) =>
      r.target === selectedNodeId || r.from === selectedNodeId || r.to === selectedNodeId,
    );
  }, [trace, selectedNodeId]);

  const edgeTrace = useMemo(() => {
    if (!trace || !selectedEdge) return [];
    return trace.results.filter((r: TraceEntry) =>
      r.from === selectedEdge.from && r.to === selectedEdge.to,
    );
  }, [trace, selectedEdge]);

  const allTrace = useMemo(() => trace?.results ?? [], [trace]);

  // Node pass/fail status from trace
  const nodeStatus = useMemo((): 'pass' | 'fail' | null => {
    if (!trace || !selectedNodeId) return null;
    const relevant = trace.results.filter((r: TraceEntry) =>
      r.target === selectedNodeId || r.from === selectedNodeId,
    );
    if (relevant.some((r) => r.status === 'FAIL')) return 'fail';
    if (relevant.some((r) => r.status === 'PASS')) return 'pass';
    return null;
  }, [trace, selectedNodeId]);

  // ── Empty state — no selection ────────────────────────────────────────────
  if (!selectedNodeId && !selectedEdgeKey) {
    return (
      <div className="flex-1 flex flex-col border-l border-slate-200 bg-white shadow-sm min-h-0 h-full">
        <div className="px-4 py-3 border-b border-slate-200 shrink-0">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Verification Trace</p>
          {trace && (
            <p className="text-[10px] text-slate-400 mt-0.5">
              {trace.summary.nodesResolved} nodes · {trace.summary.edgesEvaluated} edges · {allTrace.length} entries
            </p>
          )}
        </div>
        {allTrace.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[10px] text-slate-400 text-center px-6">
              Run the verifier, then click a node or edge to inspect its trace entries.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {allTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
          </div>
        )}
      </div>
    );
  }

  // ── Node selected ─────────────────────────────────────────────────────────
  if (selectedNode) {
    return (
      <div className="flex-1 flex flex-col border-l border-slate-200 bg-white shadow-sm min-h-0 h-full">
        <PanelHeader title="Credential" subtitle={selectedNode.id} />

        {/* Trace entries (collapsible section) */}
        {nodeTrace.length > 0 && (
          <div className="border-b border-slate-200 shrink-0 max-h-40 overflow-y-auto">
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest px-4 py-2 sticky top-0 bg-white border-b border-slate-100">
              Trace — {nodeTrace.length} entries
            </p>
            <div className="divide-y divide-slate-100">
              {nodeTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
            </div>
          </div>
        )}

        {/* Credential card */}
        <div className="flex-1 overflow-y-auto px-4 py-3 min-h-0">
          <CredentialCard
            cred={selectedNode.credential}
            isTarget={selectedNode.isTarget}
            status={nodeStatus}
          />
        </div>
      </div>
    );
  }

  // ── Edge selected ─────────────────────────────────────────────────────────
  if (selectedEdge) {
    const RELATION_COLOR: Record<string, string> = {
      authorizedBy: 'border-blue-400 text-blue-700 bg-blue-50',
      derivedFrom:  'border-sky-400 text-sky-700 bg-sky-50',
      supportedBy:  'border-orange-400 text-orange-700 bg-orange-50',
    };

    return (
      <div className="flex-1 flex flex-col border-l border-slate-200 bg-white shadow-sm min-h-0 h-full">
        <PanelHeader title="Evidence Edge" />
        <div className="px-4 py-3 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={clsx('text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border', RELATION_COLOR[selectedEdge.relation] ?? 'border-slate-300 text-slate-600 bg-slate-50')}>
              {selectedEdge.relation}
            </span>
            {selectedEdge.basisKind && (
              <span className="text-[9px] text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded">{selectedEdge.basisKind}</span>
            )}
          </div>
          <div className="text-[10px] text-slate-500 font-mono space-y-0.5">
            <p className="truncate"><span className="text-slate-400">from </span>{selectedEdge.from.split(':').pop()}</p>
            <p className="truncate"><span className="text-slate-400">to   </span>{selectedEdge.to.split(':').pop()}</p>
          </div>
        </div>

        {edgeTrace.length > 0 ? (
          <div className="flex-1 overflow-y-auto">
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest px-4 py-2 sticky top-0 bg-white border-b border-slate-100">
              Trace — {edgeTrace.length} entries
            </p>
            <div className="divide-y divide-slate-100">
              {edgeTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center px-4">
            <p className="text-[10px] text-slate-400 text-center">Run the verifier to see trace entries for this edge.</p>
          </div>
        )}
      </div>
    );
  }

  return null;
}
