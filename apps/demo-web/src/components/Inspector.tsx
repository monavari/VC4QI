import { useMemo } from 'react';
import clsx from 'clsx';
import { useDemoStore } from '../store/index.js';
import type { TraceEntry } from '@qi-vc/core';

const STATUS_STYLE: Record<string, string> = {
  PASS: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  FAIL: 'bg-red-500/15 text-red-300 border-red-500/30',
  SKIP: 'bg-zinc-500/15 text-zinc-400 border-zinc-600',
  WARN: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
};

function TraceRow({ entry }: { entry: TraceEntry }) {
  return (
    <div className="border-b border-zinc-800 py-2 px-3 text-xs">
      <div className="flex items-center gap-2 mb-0.5">
        <span className={clsx('border rounded px-1 py-0.5 font-mono text-[10px] shrink-0', STATUS_STYLE[entry.status])}>
          {entry.status}
        </span>
        <span className="font-mono text-zinc-300 truncate">{entry.code}</span>
      </div>
      <p className="text-zinc-500 leading-relaxed pl-0.5">{entry.detail}</p>
    </div>
  );
}

function JsonViewer({ data }: { data: unknown }) {
  return (
    <pre className="text-[10px] font-mono text-zinc-400 overflow-auto max-h-72 bg-zinc-950 rounded-lg p-3 border border-zinc-800 leading-relaxed">
      {JSON.stringify(data, null, 2)}
    </pre>
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
    // edgeKey format: edge-{i}-{from}-{to}
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

  // No selection — show full trace or empty state
  if (!selectedNodeId && !selectedEdgeKey) {
    return (
      <aside className="w-80 shrink-0 flex flex-col border-l border-zinc-800 bg-zinc-900 overflow-y-auto">
        <div className="px-4 py-4 border-b border-zinc-800">
          <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Verification Trace</h2>
          {trace && (
            <p className="text-xs text-zinc-500 mt-1">
              {trace.summary.nodesResolved} nodes · {trace.summary.edgesEvaluated} edges · {allTrace.length} entries
            </p>
          )}
        </div>
        {allTrace.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-xs text-zinc-600 text-center px-6">
              Run the verifier, then click a node or edge to inspect its trace entries.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800/50">
            {allTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
          </div>
        )}
      </aside>
    );
  }

  return (
    <aside className="w-80 shrink-0 flex flex-col border-l border-zinc-800 bg-zinc-900 overflow-y-auto">
      {selectedNode && (
        <>
          <div className="px-4 py-4 border-b border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Credential</p>
            <h2 className="text-sm font-semibold text-zinc-100">{selectedNode.label}</h2>
            <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{selectedNode.credentialType}</p>
            {selectedNode.isTarget && (
              <span className="mt-1 inline-block text-[10px] font-bold text-indigo-300 uppercase tracking-widest">
                Target credential
              </span>
            )}
          </div>

          {nodeTrace.length > 0 && (
            <div className="border-b border-zinc-800">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest px-4 py-2">
                Trace entries
              </p>
              <div className="divide-y divide-zinc-800/50">
                {nodeTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
              </div>
            </div>
          )}

          <div className="px-4 py-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Credential JSON</p>
            <JsonViewer data={selectedNode.credential} />
          </div>
        </>
      )}

      {selectedEdge && (
        <>
          <div className="px-4 py-4 border-b border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Edge</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={clsx('text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border',
                selectedEdge.relation === 'derivedFrom'  ? 'border-emerald-500/50 text-emerald-300 bg-emerald-950' :
                selectedEdge.relation === 'authorizedBy' ? 'border-indigo-500/50 text-indigo-300 bg-indigo-950' :
                'border-zinc-600 text-zinc-400 bg-zinc-900',
              )}>
                {selectedEdge.relation}
              </span>
              {selectedEdge.basisKind && (
                <span className="text-[10px] text-zinc-400 font-mono">{selectedEdge.basisKind}</span>
              )}
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 font-mono truncate">
              {selectedEdge.from.split(':').pop()} → {selectedEdge.to.split(':').pop()}
            </p>
          </div>

          {edgeTrace.length > 0 ? (
            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest px-4 py-2">
                Trace entries
              </p>
              <div className="divide-y divide-zinc-800/50">
                {edgeTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
              </div>
            </div>
          ) : (
            <div className="px-4 py-3">
              <p className="text-xs text-zinc-600">Run the verifier to see trace entries for this edge.</p>
            </div>
          )}
        </>
      )}
    </aside>
  );
}
