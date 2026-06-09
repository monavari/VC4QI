import { create } from 'zustand';
import type { VerificationTrace, JsonObject } from '@qi-vc/core';
import type { Scenario } from '../scenarios/index.js';
import { SCENARIOS } from '../scenarios/index.js';

export type VerifyMode = 'passing' | 'failing';

interface DemoState {
  activeScenario: Scenario;
  mode: VerifyMode;
  trace: VerificationTrace | null;
  running: boolean;
  selectedNodeId: string | null;
  selectedEdgeKey: string | null;

  setScenario: (id: string) => void;
  setMode: (mode: VerifyMode) => void;
  setTrace: (trace: VerificationTrace | null) => void;
  setRunning: (running: boolean) => void;
  selectNode: (id: string | null) => void;
  selectEdge: (key: string | null) => void;
}

export const useDemoStore = create<DemoState>((set) => ({
  activeScenario: SCENARIOS[0]!,
  mode: 'passing',
  trace: null,
  running: false,
  selectedNodeId: null,
  selectedEdgeKey: null,

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
  const target: JsonObject =
    mode === 'failing' && scenario.failingTarget
      ? scenario.failingTarget
      : scenario.nodes.find((n) => n.isTarget)!.credential;

  const docs = scenario.documents;
  return verifyCredentialGraph(
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
}
