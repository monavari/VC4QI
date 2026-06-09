import { Sidebar } from './components/Sidebar.js';
import { CredentialGraph } from './components/CredentialGraph.js';
import { Inspector } from './components/Inspector.js';

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <CredentialGraph />
      <Inspector />
    </div>
  );
}
