import clsx from 'clsx';
import { useRef } from 'react';
import { Sidebar } from './components/Sidebar.js';
import { CredentialGraph } from './components/CredentialGraph.js';
import { Inspector } from './components/Inspector.js';
import { DisclosureView } from './components/DisclosureView.js';
import { ResizeHandle, useResizeWidth } from './components/ResizeHandle.js';
import { useDemoStore, type DemoView } from './store/index.js';

const TABS: { id: DemoView; label: string }[] = [
  { id: 'verifier', label: 'Evidence graph' },
  { id: 'disclosure', label: 'Selective disclosure' },
];

export default function App() {
  const { view, setView } = useDemoStore();

  const sidebarResize = useResizeWidth({ defaultWidth: 208, minWidth: 160, maxWidth: 360, side: 'right' });
  const inspectorResize = useResizeWidth({ defaultWidth: 288, minWidth: 200, maxWidth: 480, side: 'left' });

  // Attach refs to the actual panel elements
  const sidebarEl = useRef<HTMLElement | null>(null);
  const inspectorEl = useRef<HTMLElement | null>(null);

  function setSidebarRef(el: HTMLElement | null) {
    sidebarEl.current = el;
    (sidebarResize.panelRef as React.MutableRefObject<HTMLElement | null>).current = el;
  }
  function setInspectorRef(el: HTMLElement | null) {
    inspectorEl.current = el;
    (inspectorResize.panelRef as React.MutableRefObject<HTMLElement | null>).current = el;
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50">
      {/* Top bar */}
      <header className="shrink-0 flex items-center gap-4 px-4 h-9 border-b border-slate-200 bg-white">
        <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest">VC4QI</span>
        <nav className="flex items-center gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setView(t.id)}
              className={clsx(
                'text-[11px] font-medium px-2.5 py-1 rounded transition-colors',
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
            {/* Left sidebar — resizable */}
            <aside
              ref={setSidebarRef}
              style={{ width: sidebarResize.defaultWidth, minWidth: 160, maxWidth: 360, flexShrink: 0 }}
              className="flex flex-col"
            >
              <Sidebar />
            </aside>
            <ResizeHandle onMouseDown={sidebarResize.onMouseDown} side="right" />

            <CredentialGraph />

            <ResizeHandle onMouseDown={inspectorResize.onMouseDown} side="left" />
            {/* Right inspector — resizable */}
            <aside
              ref={setInspectorRef}
              style={{ width: inspectorResize.defaultWidth, minWidth: 200, maxWidth: 480, flexShrink: 0 }}
              className="flex flex-col"
            >
              <Inspector />
            </aside>
          </>
        ) : (
          <DisclosureView />
        )}
      </div>
    </div>
  );
}
