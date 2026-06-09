import { useMemo } from 'react';
import clsx from 'clsx';
import { useDemoStore } from '../store/index.js';
import type { TraceEntry } from '@qi-vc/core';

const STATUS_STYLE: Record<string, string> = {
  PASS: 'bg-green-50  text-green-700  border-green-300',
  FAIL: 'bg-red-50    text-red-700    border-red-300',
  SKIP: 'bg-slate-50  text-slate-500  border-slate-300',
  WARN: 'bg-amber-50  text-amber-700  border-amber-300',
};

function TraceRow({ entry }: { entry: TraceEntry }) {
  return (
    <div className="border-b border-slate-100 py-2 px-3 text-xs">
      <div className="flex items-center gap-2 mb-0.5">
        <span className={clsx('border rounded px-1 py-0.5 font-mono text-[10px] shrink-0', STATUS_STYLE[entry.status])}>
          {entry.status}
        </span>
        <span className="font-mono text-slate-700 truncate">{entry.code}</span>
      </div>
      <p className="text-slate-500 leading-relaxed pl-0.5">{entry.detail}</p>
    </div>
  );
}

function JsonViewer({ data }: { data: unknown }) {
  return (
    <pre className="text-[10px] font-mono text-slate-700 overflow-auto flex-1 min-h-0 bg-slate-50 rounded-lg p-3 border border-slate-200 leading-relaxed">
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

  if (!selectedNodeId && !selectedEdgeKey) {
    return (
      <aside className="w-80 shrink-0 flex flex-col border-l border-slate-200 bg-white shadow-sm min-h-0">
        <div className="px-4 py-4 border-b border-slate-200 shrink-0">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Verification Trace</h2>
          {trace && (
            <p className="text-xs text-slate-400 mt-1">
              {trace.summary.nodesResolved} nodes · {trace.summary.edgesEvaluated} edges · {allTrace.length} entries
            </p>
          )}
        </div>
        {allTrace.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-xs text-slate-400 text-center px-6">
              Run the verifier, then click a node or edge to inspect its trace entries.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {allTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
          </div>
        )}
      </aside>
    );
  }

  return (
    <aside className="w-80 shrink-0 flex flex-col border-l border-slate-200 bg-white shadow-sm min-h-0">
      {selectedNode && (
        <>
          <div className="px-4 py-4 border-b border-slate-200 shrink-0">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Credential</p>
            <h2 className="text-sm font-semibold text-slate-800">{selectedNode.label}</h2>
            <p className="text-[10px] font-mono text-slate-500 mt-0.5">{selectedNode.credentialType}</p>
            {selectedNode.isTarget && (
              <span className="mt-1 inline-block text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                Target credential
              </span>
            )}
          </div>

          {nodeTrace.length > 0 && (
            <div className="border-b border-slate-200 shrink-0 max-h-56 overflow-y-auto">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-4 py-2 sticky top-0 bg-white">
                Trace entries
              </p>
              <div className="divide-y divide-slate-100">
                {nodeTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
              </div>
            </div>
          )}

          <div className="flex flex-col flex-1 px-4 py-3 min-h-0">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 shrink-0">Credential JSON</p>
            <JsonViewer data={selectedNode.credential} />
          </div>
        </>
      )}

      {selectedEdge && (
        <>
          <div className="px-4 py-4 border-b border-slate-200 shrink-0">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Edge</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={clsx('text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border',
                selectedEdge.relation === 'derivedFrom'  ? 'border-green-400 text-green-700 bg-green-50' :
                selectedEdge.relation === 'authorizedBy' ? 'border-blue-400  text-blue-700  bg-blue-50' :
                'border-slate-300 text-slate-600 bg-slate-50',
              )}>
                {selectedEdge.relation}
              </span>
              {selectedEdge.basisKind && (
                <span className="text-[10px] text-slate-500 font-mono">{selectedEdge.basisKind}</span>
              )}
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-mono truncate">
              {selectedEdge.from.split(':').pop()} → {selectedEdge.to.split(':').pop()}
            </p>
          </div>

          {edgeTrace.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-4 py-2 sticky top-0 bg-white">
                Trace entries
              </p>
              <div className="divide-y divide-slate-100">
                {edgeTrace.map((entry, i) => <TraceRow key={i} entry={entry} />)}
              </div>
            </div>
          ) : (
            <div className="px-4 py-3">
              <p className="text-xs text-slate-400">Run the verifier to see trace entries for this edge.</p>
            </div>
          )}
        </>
      )}
    </aside>
  );
}
