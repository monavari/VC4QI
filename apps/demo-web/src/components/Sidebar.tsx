import { useDemoStore, runVerifier } from '../store/index.js';
import { SCENARIOS } from '../scenarios/index.js';
import clsx from 'clsx';

const PROFILE_COLORS: Record<string, string> = {
  A: 'bg-blue-50   text-blue-700   border-blue-300',
  B: 'bg-violet-50 text-violet-700 border-violet-300',
  C: 'bg-amber-50  text-amber-700  border-amber-300',
  D: 'bg-teal-50   text-teal-700   border-teal-300',
  E: 'bg-rose-50   text-rose-700   border-rose-300',
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

  return (
    <aside className="w-72 shrink-0 flex flex-col border-r border-slate-200 bg-white overflow-y-auto shadow-sm">
      {/* Header */}
      <div className="px-4 py-5 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">VC4QI</span>
        </div>
        <h1 className="text-sm font-semibold text-slate-800">Evidence Graph Verifier</h1>
        <p className="text-xs text-slate-500 mt-0.5">Policy-resolved QI credential verification</p>
      </div>

      {/* Scenarios */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Profiles (§7)</p>
        <div className="flex flex-col gap-1.5">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setScenario(sc.id)}
              className={clsx(
                'w-full text-left rounded-lg px-3 py-2.5 transition-all',
                activeScenario.id === sc.id
                  ? 'bg-slate-100 ring-1 ring-slate-300'
                  : 'hover:bg-slate-50',
              )}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className={clsx('text-[10px] font-bold px-1.5 py-0.5 rounded border', PROFILE_COLORS[sc.profile])}>
                  {sc.profile}
                </span>
                <span className="text-xs font-medium text-slate-700 truncate">{sc.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mode toggle */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Variant</p>
        <div className="flex rounded-lg overflow-hidden border border-slate-200">
          <button
            onClick={() => setMode('passing')}
            className={clsx('flex-1 py-1.5 text-xs font-medium transition-colors',
              mode === 'passing' ? 'bg-green-600 text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50')}
          >
            Passing
          </button>
          <button
            onClick={() => setMode('failing')}
            className={clsx('flex-1 py-1.5 text-xs font-medium transition-colors border-l border-slate-200',
              mode === 'failing' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50')}
          >
            Failing
          </button>
        </div>
      </div>

      {/* Run button */}
      <div className="px-4 py-3">
        <button
          onClick={handleRun}
          disabled={running}
          className={clsx(
            'w-full py-2.5 rounded-lg text-sm font-semibold transition-all',
            running
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
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
              ? 'bg-green-50 border-green-300'
              : 'bg-red-50 border-red-300',
          )}>
            <span className={clsx('text-lg font-bold', trace.verified ? 'text-green-600' : 'text-red-600')}>
              {trace.verified ? '✓' : '✗'}
            </span>
            <div>
              <p className={clsx('text-sm font-semibold', trace.verified ? 'text-green-700' : 'text-red-700')}>
                {trace.verified ? 'Accepted' : 'Rejected'}
              </p>
              <p className="text-xs text-slate-500">
                {trace.summary.failures} failure{trace.summary.failures !== 1 ? 's' : ''},&nbsp;
                {trace.summary.warnings} warning{trace.summary.warnings !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scenario description */}
      <div className="px-4 py-3 mt-auto border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
          {activeScenario.title}
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">{activeScenario.description}</p>
      </div>
    </aside>
  );
}
