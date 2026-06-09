import { create } from 'zustand';
import type { VerificationTrace, JsonObject } from '@qi-vc/core';
import type { Scenario } from '../scenarios/index.js';
import { SCENARIOS } from '../scenarios/index.js';

export type VerifyMode = 'passing' | 'failing';
export type DemoView = 'verifier' | 'disclosure';

interface DemoState {
  view: DemoView;
  activeScenario: Scenario;
  mode: VerifyMode;
  trace: VerificationTrace | null;
  running: boolean;
  selectedNodeId: string | null;
  selectedEdgeKey: string | null;

  setView: (view: DemoView) => void;
  setScenario: (id: string) => void;
  setMode: (mode: VerifyMode) => void;
  setTrace: (trace: VerificationTrace | null) => void;
  setRunning: (running: boolean) => void;
  selectNode: (id: string | null) => void;
  selectEdge: (key: string | null) => void;
}

export const useDemoStore = create<DemoState>((set) => ({
  view: 'verifier',
  activeScenario: SCENARIOS[0]!,
  mode: 'passing',
  trace: null,
  running: false,
  selectedNodeId: null,
  selectedEdgeKey: null,

  setView: (view) => set({ view }),
  setScenario: (id) => set((s) => {
    const scenario = SCENARIOS.find((sc) => sc.id === id) ?? s.activeScenario;
    return { activeScenario: scenario, trace: null, selectedNodeId: null, selectedEdgeKey: null };
  }),
  setMode: (mode) => set({ mode, trace: null }),
  setTrace: (trace) => set({ trace }),
  setRunning: (running) => set({ running }),
  selectNode: (id) => set({ selectedNodeId: id, selectedEdgeKey: null }),
  selectEdge: (key) => set({ selectedEdgeKey: key, selectedNodeId: null }),
}));

// Run verifier in-browser, importing the core library directly
export async function runVerifier(
  scenario: Scenario,
  mode: VerifyMode,
): Promise<VerificationTrace> {
  const { verifyCredentialGraph } = await import('@qi-vc/core').then(m => m.verifier);
  const passingTarget = scenario.nodes.find((n) => n.isTarget)!.credential;
  const target: JsonObject =
    mode === 'failing' && scenario.failingTarget
      ? scenario.failingTarget
      : passingTarget;

  const docs = scenario.documents;
  const result = await verifyCredentialGraph(
    target,
    scenario.policy as Parameters<typeof verifyCredentialGraph>[1],
    {
      skipProof: true,
      fetchDocument: async (uri) => {
        const doc = docs[uri];
        if (!doc) throw new Error(`Unknown document: ${uri}`);
        return doc;
      },
      resolveTrustRegistry: async () => scenario.trustRegistry,
    },
  );

  // Remap failing-target ID back to the graph node ID so CredentialGraph
  // can match trace entries to displayed nodes (which always use passing IDs).
  if (mode === 'failing' && scenario.failingTarget) {
    const failId = (scenario.failingTarget as JsonObject).id as string;
    const passId = (passingTarget as JsonObject).id as string;
    if (failId && passId && failId !== passId) {
      result.results = result.results.map((r) => ({
        ...r,
        target: r.target === failId ? passId : r.target,
        from:   r.from   === failId ? passId : r.from,
        to:     r.to     === failId ? passId : r.to,
      }));
      if (result.target === failId) (result as { target: string }).target = passId;
    }
  }

  return result;
}
