import clsx from 'clsx';
import { Sidebar } from './components/Sidebar.js';
import { CredentialGraph } from './components/CredentialGraph.js';
import { Inspector } from './components/Inspector.js';
import { DisclosureView } from './components/DisclosureView.js';
import { useDemoStore, type DemoView } from './store/index.js';

const TABS: { id: DemoView; label: string }[] = [
  { id: 'verifier', label: 'Evidence graph' },
  { id: 'disclosure', label: 'Selective disclosure' },
];

export default function App() {
  const { view, setView } = useDemoStore();

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50">
      {/* Top bar with view tabs */}
      <header className="shrink-0 flex items-center gap-4 px-4 h-11 border-b border-slate-200 bg-white">
        <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">VC4QI</span>
        <nav className="flex items-center gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setView(t.id)}
              className={clsx(
                'text-xs font-medium px-3 py-1.5 rounded-md transition-colors',
                view === t.id ? 'bg-slate-100 text-slate-800' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50',
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {/* View body */}
      <div className="flex-1 flex overflow-hidden">
        {view === 'verifier' ? (
          <>
            <Sidebar />
            <CredentialGraph />
            <Inspector />
          </>
        ) : (
          <DisclosureView />
        )}
      </div>
    </div>
  );
}
