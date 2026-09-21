import { create } from 'zustand';
import type { VerificationTrace, JsonObject } from '@qi-vc/core';
import type { Scenario } from '../scenarios/index.js';
import { SCENARIOS } from '../scenarios/index.js';
import { sdLoader } from '../sd/disclose.js';

/**
 * Public half of the TEST ONLY Ed25519 key that signs the trust-registry
 * fixtures (tests/fixtures/keys/test-ed25519-key.json). Demo fixtures only.
 */
const TEST_REGISTRY_PUBLIC_KEY = Uint8Array.from(
  '2152f8d19b791d24453242e15f2eab6cb7cffa7b6a5ed30097960e069881db12'
    .match(/.{2}/g)!
    .map((b) => parseInt(b, 16)),
);

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

const SCHEMA = 'https://schema.org/';

function asObject(value: unknown): JsonObject | undefined {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as JsonObject
    : undefined;
}

function idOf(value: unknown): string {
  return String(asObject(value)?.id ?? '');
}

/**
 * Demo assessment adapter for sparse GS reports. This is deliberately outside
 * the verifier kernel: an operative deployment can replace it with an agent,
 * human workflow, or domain service implementing the same request/result API.
 */
function assessGsReport(request: {
  credential: JsonObject;
  credentialId: string;
  credentialTypes: string[];
  policyId: string;
  targetCredential?: JsonObject;
  evidenceGraph?: {
    nodes: Record<string, { credential: JsonObject }>;
    edges: Array<{ from: string; to: string; relation: string }>;
  };
}) {
  const isInspection = request.credentialTypes.includes('InspectionReport');
  const method = isInspection ? 'human' as const : 'agent' as const;
  const assessorId = isInspection
    ? 'urn:example:person:factory-inspector-01'
    : 'urn:example:agent:product-safety-reviewer-01';
  const graph = request.evidenceGraph;
  const target = request.targetCredential;
  if (!graph || !target) {
    return {
      outcome: 'indeterminate' as const,
      method,
      assessorId,
      detail: 'The resolved graph and target credential are required for GS semantic assessment.',
    };
  }

  const subject = asObject(request.credential.credentialSubject);
  const rating = asObject(subject?.[`${SCHEMA}reviewRating`]);
  const problems: string[] = [];
  if (rating?.[`${SCHEMA}ratingValue`] !== 'pass') {
    problems.push('the recorded report outcome is not pass');
  }

  const supportEdge = graph.edges.find(edge =>
    edge.to === request.credentialId &&
    edge.relation === 'supportedBy' &&
    Array.isArray(graph.nodes[edge.from]?.credential.type) &&
    (graph.nodes[edge.from]!.credential.type as unknown[]).includes('GSCertificate'));
  const certificate = supportEdge ? graph.nodes[supportEdge.from]?.credential : undefined;
  if (!certificate) {
    problems.push('no GS certificate supports this report');
  } else {
    const certificateSubject = asObject(certificate.credentialSubject);
    const certificateProduct = asObject(certificateSubject?.[`${SCHEMA}itemReviewed`]);
    const targetSubject = asObject(target.credentialSubject);
    const targetManufacturer = idOf(targetSubject?.[`${SCHEMA}manufacturer`]);
    const certificateManufacturer = idOf(certificateProduct?.[`${SCHEMA}manufacturer`]);

    if (isInspection) {
      if (idOf(subject?.[`${SCHEMA}itemReviewed`]) !== String(certificateSubject?.id ?? '')) {
        problems.push('the inspected manufacturer does not match the certificate subject');
      }
      if (String(subject?.id ?? '') !== idOf(subject?.[`${SCHEMA}location`])) {
        problems.push('the inspected facility does not match the report location');
      }
    } else {
      const reportProduct = asObject(subject?.[`${SCHEMA}itemReviewed`]);
      if (String(reportProduct?.id ?? '') !== String(certificateProduct?.id ?? '')) {
        problems.push('the tested product type does not match the certified product type');
      }
      if (idOf(targetSubject?.[`${SCHEMA}isVariantOf`]) !== String(certificateProduct?.id ?? '')) {
        problems.push('the serialized product is not linked to the certified product type');
      }

      const certificateIssuer = String(certificate.issuer ?? '');
      const reportIssuer = String(request.credential.issuer ?? '');
      if (reportIssuer !== certificateIssuer) {
        if (idOf(reportProduct?.[`${SCHEMA}manufacturer`]) !== certificateManufacturer) {
          problems.push('the test-report manufacturer does not match the certificate manufacturer');
        }
        if (idOf(subject?.[`${SCHEMA}customer`]) !== certificateIssuer) {
          problems.push('the external report does not identify the GS body as customer');
        }
        const reportScopeEdge = graph.edges.find(edge =>
          edge.from === request.credentialId && edge.relation === 'authorizedBy');
        const reportScope = reportScopeEdge
          ? graph.nodes[reportScopeEdge.to]?.credential
          : undefined;
        const reportScopeSubject = asObject(reportScope?.credentialSubject);
        if (!reportScope || String(reportScope.issuer ?? '') !== reportIssuer) {
          problems.push('the external laboratory scope was not issued by the laboratory');
        }
        if (String(reportScopeSubject?.id ?? '') !== reportIssuer) {
          problems.push('the laboratory scope subject is not the report issuer');
        }
        const accreditationEdge = reportScopeEdge && graph.edges.find(edge =>
          edge.from === reportScopeEdge.to && edge.relation === 'derivedFrom');
        const accreditation = accreditationEdge
          ? graph.nodes[accreditationEdge.to]?.credential
          : undefined;
        const accreditationSubject = asObject(accreditation?.credentialSubject);
        const accreditationTypes = Array.isArray(accreditation?.type)
          ? accreditation.type.map(String)
          : [];
        if (!accreditation ||
            !accreditationTypes.includes('AccreditationCertificate') ||
            String(accreditation.issuer ?? '') !== 'did:web:nab.example' ||
            String(accreditationSubject?.id ?? '') !== reportIssuer) {
          problems.push('the laboratory scope is not derived from its own NAB accreditation');
        }
        const dependsOnGsAuthority = reportScopeEdge && graph.edges.some(edge =>
          edge.from === reportScopeEdge.to && edge.relation === 'authorizedBy');
        if (dependsOnGsAuthority) {
          problems.push('the laboratory competence scope must not derive authority from the GS body');
        }
      }
    }

    if (String(certificateSubject?.id ?? '') !== targetManufacturer ||
        certificateManufacturer !== targetManufacturer) {
      problems.push('the product, certificate, and manufacturer identities do not agree');
    }
  }

  const passed = problems.length === 0;
  return {
    outcome: passed ? 'pass' as const : 'fail' as const,
    method,
    assessorId,
    assessmentId: `urn:example:assessment:${request.credentialId.split(':').at(-1)}`,
    detail: passed
      ? `${isInspection ? 'Human' : 'Agent'} assessment bound the report to the GS certificate, product, manufacturer, and authority path.`
      : `GS semantic assessment failed: ${problems.join('; ')}.`,
  };
}

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
      // The GS QR scenario signs every graph credential, so it exercises the
      // complete proof gate. Older visual fixtures still carry placeholders.
      skipProof: ![
        'gs-hair-dryer-hitl',
        'gs-hair-dryer-external-test-lab-hitl',
      ].includes(scenario.id),
      fetchDocument: async (uri) => {
        const doc = docs[uri];
        if (!doc) throw new Error(`Unknown document: ${uri}`);
        return doc;
      },
      resolveTrustRegistry: async () => scenario.trustRegistry,
      // The trust registry is a signed credential and its proof is verified
      // before any entry is read (SEC-1), independently of `skipProof`. The
      // fixtures are signed with the TEST ONLY key; the loader serves qi-core
      // and the vendored W3C contexts from the bundle so this stays offline.
      resolveKey: async () => TEST_REGISTRY_PUBLIC_KEY,
      documentLoader: sdLoader,
      assessCredential: assessGsReport,
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
