import { useDemoStore, runVerifier } from '../store/index.js';
import { SCENARIOS } from '../scenarios/index.js';
import clsx from 'clsx';

const PROFILE_COLORS: Record<string, string> = {
  A: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  B: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  C: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  D: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  E: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
};

export function Sidebar() {
  const { activeScenario, mode, running, trace, setScenario, setMode, setTrace, setRunning } = useDemoStore();

  async function handleRun() {
    setRunning(true);
    setTrace(null);
    try {
      const result = await runVerifier(activeScenario, mode);
      setTrace(result);
    } finally {
      setRunning(false);
    }
  }

  const hasFailingVariant = Boolean(activeScenario.failingTarget);

  return (
    <aside className="w-72 shrink-0 flex flex-col border-r border-zinc-800 bg-zinc-900 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-5 border-b border-zinc-800">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest">VC4QI</span>
        </div>
        <h1 className="text-sm font-semibold text-zinc-100">Evidence Graph Verifier</h1>
        <p className="text-xs text-zinc-500 mt-0.5">Policy-resolved QI credential verification</p>
      </div>

      {/* Scenarios */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Profiles (§7)</p>
        <div className="flex flex-col gap-1.5">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setScenario(sc.id)}
              className={clsx(
                'w-full text-left rounded-lg px-3 py-2.5 transition-all',
                activeScenario.id === sc.id
                  ? 'bg-zinc-700 ring-1 ring-zinc-500'
                  : 'hover:bg-zinc-800',
              )}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className={clsx('text-[10px] font-bold px-1.5 py-0.5 rounded border', PROFILE_COLORS[sc.profile])}>
                  {sc.profile}
                </span>
                <span className="text-xs font-medium text-zinc-200 truncate">{sc.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mode toggle */}
      {hasFailingVariant && (
        <div className="px-4 pt-3 pb-2">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Variant</p>
          <div className="flex rounded-lg overflow-hidden border border-zinc-700">
            <button
              onClick={() => setMode('passing')}
              className={clsx('flex-1 py-1.5 text-xs font-medium transition-colors',
                mode === 'passing' ? 'bg-emerald-600 text-white' : 'text-zinc-400 hover:text-zinc-200')}
            >
              Passing
            </button>
            <button
              onClick={() => setMode('failing')}
              className={clsx('flex-1 py-1.5 text-xs font-medium transition-colors',
                mode === 'failing' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-zinc-200')}
            >
              Failing
            </button>
          </div>
        </div>
      )}

      {/* Run button */}
      <div className="px-4 py-3">
        <button
          onClick={handleRun}
          disabled={running}
          className={clsx(
            'w-full py-2.5 rounded-lg text-sm font-semibold transition-all',
            running
              ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40',
          )}
        >
          {running ? 'Verifying…' : 'Run Verifier'}
        </button>
      </div>

      {/* Result badge */}
      {trace && (
        <div className="px-4 py-2">
          <div className={clsx(
            'rounded-lg px-3 py-2.5 flex items-center gap-2 border',
            trace.verified
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-red-500/10 border-red-500/30',
          )}>
            <span className={clsx('text-lg', trace.verified ? 'text-emerald-400' : 'text-red-400')}>
              {trace.verified ? '✓' : '✗'}
            </span>
            <div>
              <p className={clsx('text-sm font-semibold', trace.verified ? 'text-emerald-300' : 'text-red-300')}>
                {trace.verified ? 'Accepted' : 'Rejected'}
              </p>
              <p className="text-xs text-zinc-500">
                {trace.summary.failures} failure{trace.summary.failures !== 1 ? 's' : ''},&nbsp;
                {trace.summary.warnings} warning{trace.summary.warnings !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scenario description */}
      <div className="px-4 py-3 mt-auto border-t border-zinc-800">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
          {activeScenario.title}
        </p>
        <p className="text-xs text-zinc-400 leading-relaxed">{activeScenario.description}</p>
      </div>
    </aside>
  );
}
