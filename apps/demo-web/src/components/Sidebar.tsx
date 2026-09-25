import { useDemoStore, runVerifier } from '../store/index.js';
import { SCENARIOS } from '../scenarios/index.js';
import clsx from 'clsx';
import type { TraceEntry, VerificationTrace } from '@qi-vc/core';

const REPLAY_STEP_MS = 420;

function delay(ms: number): Promise<void> {
  return new Promise(resolve => window.setTimeout(resolve, ms));
}

/**
 * Order a completed verifier trace into visual frames that follow evidence
 * edges from the scanned target outward toward the authority roots. This is a
 * presentation-only replay; the verifier still computes one complete result.
 */
function traceReplayFrames(
  scenario: (typeof SCENARIOS)[number],
  trace: VerificationTrace,
): TraceEntry[][] {
  const targetId = scenario.nodes.find(node => node.isTarget)?.id ?? trace.target;
  const depth = new Map<string, number>([[targetId, 0]]);
  const queue = [targetId];

  while (queue.length > 0) {
    const from = queue.shift()!;
    const nextDepth = (depth.get(from) ?? 0) + 1;
    for (const edge of scenario.edges.filter(candidate => candidate.from === from)) {
      if (depth.has(edge.to)) continue;
      depth.set(edge.to, nextDepth);
      queue.push(edge.to);
    }
  }

  const indexed = trace.results.map((entry, index) => ({ entry, index }));
  const used = new Set<number>();
  const frames: TraceEntry[][] = [];
  const maxDepth = Math.max(0, ...depth.values());

  for (let currentDepth = 0; currentDepth <= maxDepth; currentDepth++) {
    const nodeIds = new Set(
      [...depth.entries()]
        .filter(([, value]) => value === currentDepth)
        .map(([id]) => id),
    );

    const nodeFrame = indexed.filter(({ entry, index }) =>
      !used.has(index) &&
      entry.level !== 'policy' &&
      !entry.from &&
      !entry.to &&
      Boolean(entry.target && nodeIds.has(entry.target)));
    nodeFrame.forEach(({ index }) => used.add(index));
    if (nodeFrame.length > 0) frames.push(nodeFrame.map(({ entry }) => entry));

    const edgeFrame = indexed.filter(({ entry, index }) =>
      !used.has(index) && Boolean(entry.from && nodeIds.has(entry.from)));
    edgeFrame.forEach(({ index }) => used.add(index));
    if (edgeFrame.length > 0) frames.push(edgeFrame.map(({ entry }) => entry));
  }

  const finalFrame = indexed
    .filter(({ index }) => !used.has(index))
    .map(({ entry }) => entry);
  if (finalFrame.length > 0) frames.push(finalFrame);
  return frames;
}

const PROFILE_COLORS: Record<string, string> = {
  A: 'bg-blue-50   text-blue-700   border-blue-300',
  B: 'bg-violet-50 text-violet-700 border-violet-300',
  C: 'bg-amber-50  text-amber-700  border-amber-300',
  D: 'bg-teal-50   text-teal-700   border-teal-300',
  E: 'bg-rose-50   text-rose-700   border-rose-300',
  F: 'bg-orange-50 text-orange-700 border-orange-300',
};

export function Sidebar() {
  const { activeScenario, mode, running, trace, setScenario, setMode, setTrace, setRunning } = useDemoStore();

  async function handleRun() {
    setRunning(true);
    setTrace(null);
    try {
      const result = await runVerifier(activeScenario, mode);
      const revealed: TraceEntry[] = [];
      for (const frame of traceReplayFrames(activeScenario, result)) {
        revealed.push(...frame);
        setTrace({ ...result, results: [...revealed] });
        await delay(REPLAY_STEP_MS);
      }
      setTrace(result);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col border-r border-slate-200 bg-white overflow-y-auto shadow-sm min-h-0 h-full">
      {/* Header */}
      <div className="px-3 py-3 border-b border-slate-200">
        <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest">VC4QI</span>
        <h1 className="text-[11px] font-semibold text-slate-800 mt-0.5">Evidence Graph Verifier</h1>
        <p className="text-[10px] text-slate-400 mt-0.5">Policy-resolved QI credential verification</p>
      </div>

      {/* Scenarios */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Profiles (§7)</p>
        <div className="flex flex-col gap-0.5">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              disabled={running}
              onClick={() => setScenario(sc.id)}
              className={clsx(
                'w-full text-left rounded px-2 py-1.5 transition-all disabled:cursor-not-allowed disabled:opacity-50',
                activeScenario.id === sc.id
                  ? 'bg-slate-100 ring-1 ring-slate-300'
                  : 'hover:bg-slate-50',
              )}
            >
              <div className="flex items-center gap-1.5">
                <span className={clsx('text-[9px] font-bold px-1 py-0.5 rounded border shrink-0', PROFILE_COLORS[sc.profile])}>
                  {sc.profile}
                </span>
                <span className="text-[11px] font-medium text-slate-700 truncate">{sc.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mode toggle */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Variant</p>
        <div className="flex rounded overflow-hidden border border-slate-200">
          <button
            disabled={running}
            onClick={() => setMode('passing')}
            className={clsx('flex-1 py-1 text-[11px] font-medium transition-colors',
              mode === 'passing' ? 'bg-green-600 text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50')}
          >
            Passing
          </button>
          <button
            disabled={running}
            onClick={() => setMode('failing')}
            className={clsx('flex-1 py-1 text-[11px] font-medium transition-colors border-l border-slate-200',
              mode === 'failing' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50')}
          >
            Failing
          </button>
        </div>
      </div>

      {/* Run button */}
      <div className="px-3 py-2">
        <button
          onClick={handleRun}
          disabled={running}
          className={clsx(
            'w-full py-1.5 rounded text-[11px] font-semibold transition-all',
            running
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
          )}
        >
          {running ? 'Verifying…' : 'Run Verifier'}
        </button>
      </div>

      {/* Result badge */}
      {trace && !running && (
        <div className="px-3 pb-2">
          <div className={clsx(
            'rounded px-2.5 py-2 flex items-center gap-2 border',
            trace.verified
              ? 'bg-green-50 border-green-300'
              : 'bg-red-50 border-red-300',
          )}>
            <span className={clsx('text-base font-bold shrink-0', trace.verified ? 'text-green-600' : 'text-red-600')}>
              {trace.verified ? '✓' : '✗'}
            </span>
            <div>
              <p className={clsx('text-[11px] font-semibold', trace.verified ? 'text-green-700' : 'text-red-700')}>
                {trace.verified ? 'Accepted' : 'Rejected'}
              </p>
              <p className="text-[10px] text-slate-500">
                {trace.summary.failures} failure{trace.summary.failures !== 1 ? 's' : ''},&nbsp;
                {trace.summary.warnings} warning{trace.summary.warnings !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scenario description */}
      <div className="px-3 py-3 mt-auto border-t border-slate-200">
        <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
          {activeScenario.title}
        </p>
        <p className="text-[10px] text-slate-500 leading-relaxed">{activeScenario.description}</p>
      </div>
    </div>
  );
}
