// Scenario definitions — data-driven from testdata/examples fixtures.
//
// DESIGN: the graph (nodes/edges/documents) is DERIVED by walking each
// credential's `evidence[]`, never hand-maintained. Editing a fixture's id,
// evidence references, or adding/removing a credential can therefore not
// desync the rendered picture from what the verifier actually walks.
//
// A scenario declares only what cannot be derived: which example directory to
// load, the profile letter, display copy, and optional label/actor overrides.
// The passing target, evidence docs, policy, trust registry, and the failing
// variant are all loaded straight from the fixtures on disk.

import type { JsonObject } from '@qi-vc/core';

// ── Eager-load every fixture JSON under testdata/examples ─────────────────────
// Keyed by absolute-ish module path; we index into it by example dir + filename.
const FIXTURES = import.meta.glob('../../../../testdata/examples/**/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, JsonObject>;

function fixture(dir: string, ...parts: string[]): JsonObject | undefined {
  const suffix = ['', dir, ...parts].join('/'); // e.g. /calibration-direct/target-credential.json
  const key = Object.keys(FIXTURES).find((k) => k.endsWith(suffix));
  return key ? FIXTURES[key] : undefined;
}

function evidenceDocs(dir: string): Record<string, JsonObject> {
  const prefix = `/${dir}/evidence/`;
  const docs: Record<string, JsonObject> = {};
  for (const [k, v] of Object.entries(FIXTURES)) {
    if (k.includes(prefix)) {
      const id = (v as JsonObject).id as string | undefined;
      if (id) docs[id] = v;
    }
  }
  return docs;
}

// ── Public types ──────────────────────────────────────────────────────────────

export interface PolicyProfile {
  id: string;
  description?: string;
  targetCredentialTypes: string[];
  requiredEvidence: unknown[];
  checks: Record<string, unknown>;
}

export type EdgeRelation = 'authorizedBy' | 'derivedFrom' | 'supportedBy';
export type ActorRole = 'accreditationBody' | 'lab' | 'schemeAuthority' | 'nmi' | 'rmProducer';

export interface ScenarioActor {
  id: string;
  label: string;
  role: ActorRole;
  did: string;
}

export interface ScenarioNode {
  id: string;
  label: string;
  credentialType: string;
  actorId: string;
  credential: JsonObject;
  isTarget: boolean;
}

export interface ScenarioEdge {
  from: string;
  to: string;
  relation: EdgeRelation;
  basisKind?: string;
}

export interface Scenario {
  id: string;
  profile: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  title: string;
  subtitle: string;
  description: string;
  actors: ScenarioActor[];
  nodes: ScenarioNode[];
  edges: ScenarioEdge[];
  policy: PolicyProfile;
  documents: Record<string, JsonObject>;
  trustRegistry: JsonObject;
  failingTarget?: JsonObject;
}

// ── Display-metadata declaration (the only hand-authored part) ─────────────────

interface ScenarioSpec {
  id: string;
  profile: Scenario['profile'];
  dir: string;                 // testdata/examples/<dir>
  title: string;
  subtitle: string;
  description: string;
  failingFile?: string;        // defaults to failing-target-credential.json, else reject-credential.json
  /** Optional label override per credential type, e.g. { DigitalCalibrationCertificate: 'Calibration Certificate' }. */
  typeLabels?: Record<string, string>;
  /** Optional actor metadata per issuer DID. Role drives node colour; label is the display name. */
  actors?: Record<string, { label: string; role: ActorRole }>;
}

// ── Derivation helpers ─────────────────────────────────────────────────────────

const DEFAULT_TYPE_LABELS: Record<string, string> = {
  TestReport: 'Test Report',
  DigitalCalibrationCertificate: 'Calibration Certificate',
  AccreditationCertificate: 'Accreditation',
  LegalMandateEvidence: 'Legal Mandate',
  CalibrationCapabilityAuthorization: 'Operational Scope',
  IssuingScopeCredential: 'Operational Scope',
  OperationalScopeEvidence: 'Operational Scope',
  SchemeAuthorizationCredential: 'Scheme Authorization',
  SchemeAuthorizationEvidence: 'Scheme Authorization',
  GSCertificate: 'GS Certificate',
  ReferenceMaterialCertificate: 'RM Certificate',
  ReferenceMaterialStudy: 'RM Study',
};

/** The substantive (non-VerifiableCredential) type of a credential. */
function credentialType(cred: JsonObject): string {
  const types = (cred.type as string[] | undefined) ?? [];
  return types.find((t) => t !== 'VerifiableCredential') ?? 'Credential';
}

function issuerDid(cred: JsonObject): string {
  const iss = cred.issuer;
  if (typeof iss === 'string') return iss;
  if (iss && typeof iss === 'object') return ((iss as JsonObject).id as string) ?? 'unknown';
  return 'unknown';
}

/** Guess an actor role from credential type — only used when no override is given. */
function inferRole(type: string): ActorRole {
  if (type === 'AccreditationCertificate') return 'accreditationBody';
  if (type === 'SchemeAuthorizationCredential') return 'schemeAuthority';
  if (type === 'LegalMandateEvidence') return 'nmi';
  if (type === 'ReferenceMaterialCertificate' || type === 'ReferenceMaterialStudy') return 'rmProducer';
  return 'lab';
}

interface DerivedGraph {
  actors: ScenarioActor[];
  nodes: ScenarioNode[];
  edges: ScenarioEdge[];
  documents: Record<string, JsonObject>;
}

/**
 * Walk the target credential's evidence graph, collecting every reachable
 * credential as a node and every evidence reference as an edge. The credential
 * set is the source of truth — labels/actors are derived (with optional spec
 * overrides) and the topology comes entirely from `evidence[]`.
 */
function deriveGraph(spec: ScenarioSpec, target: JsonObject, docs: Record<string, JsonObject>): DerivedGraph {
  const typeLabels = { ...DEFAULT_TYPE_LABELS, ...(spec.typeLabels ?? {}) };
  const actorOverrides = spec.actors ?? {};

  const nodes: ScenarioNode[] = [];
  const edges: ScenarioEdge[] = [];
  const actorsByDid = new Map<string, ScenarioActor>();
  const seen = new Set<string>();

  function actorIdFor(cred: JsonObject): string {
    const did = issuerDid(cred);
    if (!actorsByDid.has(did)) {
      const ov = actorOverrides[did];
      const type = credentialType(cred);
      actorsByDid.set(did, {
        id: did,
        did,
        label: ov?.label ?? did.replace(/^did:web:/, '').replace(/\.example.*$/, ''),
        role: ov?.role ?? inferRole(type),
      });
    }
    return did;
  }

  function visit(cred: JsonObject, isTarget: boolean): void {
    const id = cred.id as string;
    if (!id || seen.has(id)) return;
    seen.add(id);

    const type = credentialType(cred);
    nodes.push({
      id,
      label: typeLabels[type] ?? type,
      credentialType: type,
      actorId: actorIdFor(cred),
      credential: cred,
      isTarget,
    });

    const evidence = (cred.evidence as JsonObject[] | undefined) ?? [];
    for (const ref of evidence) {
      const toId = ref.id as string | undefined;
      if (!toId) continue;
      const relation = (ref.relation as EdgeRelation) ?? 'authorizedBy';
      const basis = ref.authorizationBasis as JsonObject | undefined;
      edges.push({
        from: id,
        to: toId,
        relation,
        ...(basis?.kind ? { basisKind: basis.kind as string } : {}),
      });
      const child = docs[toId];
      if (child) visit(child, false);
    }
  }

  visit(target, true);

  return { actors: [...actorsByDid.values()], nodes, edges, documents: docs };
}

// ── Build a Scenario from a spec ────────────────────────────────────────────────

function buildScenario(spec: ScenarioSpec): Scenario {
  const target = fixture(spec.dir, 'target-credential.json');
  if (!target) throw new Error(`Missing target-credential.json for ${spec.dir}`);
  const policy = fixture(spec.dir, 'policy.json');
  const trustRegistry = fixture(spec.dir, 'trust-registry.json');
  if (!policy || !trustRegistry) throw new Error(`Missing policy/trust-registry for ${spec.dir}`);

  const docs = evidenceDocs(spec.dir);
  const { actors, nodes, edges, documents } = deriveGraph(spec, target, docs);

  // Failing variant: load the real fixture if present (never synthesise corruption).
  const failingTarget =
    fixture(spec.dir, spec.failingFile ?? 'failing-target-credential.json') ??
    fixture(spec.dir, 'reject-credential.json');

  return {
    id: spec.id,
    profile: spec.profile,
    title: spec.title,
    subtitle: spec.subtitle,
    description: spec.description,
    actors,
    nodes,
    edges,
    policy: policy as unknown as PolicyProfile,
    documents,
    trustRegistry,
    ...(failingTarget ? { failingTarget } : {}),
  };
}

// ── Scenario specs (display metadata only) ──────────────────────────────────────

const SPECS: ScenarioSpec[] = [
  {
    id: 'calibration-direct',
    profile: 'A',
    dir: 'calibration-direct-accreditation',
    title: 'Profile A — Accreditation only',
    subtitle: 'Standard accredited calibration lab',
    description:
      'A calibration certificate issued directly under an accreditation. ' +
      'Single authorizedBy edge from the certificate to the accreditation body. ' +
      'Baseline case — no derivation check.',
    actors: {
      'did:web:nab.example': { label: 'Accreditation Body', role: 'accreditationBody' },
      'did:web:lab.example': { label: 'Calibration Lab', role: 'lab' },
    },
  },
  {
    id: 'calibration-capability',
    profile: 'B',
    dir: 'calibration-capability',
    title: 'Profile B — Accreditation + operational scope',
    subtitle: 'Flexible-scope issuance with derivation check',
    description:
      'The lab holds an operational-scope credential derivedFrom its accreditation ' +
      '(subset-checked: scope ⊑ accreditation). The DCC is then authorizedBy that ' +
      'operational scope. Shows the per-edge derivation check in action.',
    actors: {
      'did:web:nab.example': { label: 'Accreditation Body', role: 'accreditationBody' },
      'did:web:lab.example': { label: 'Calibration Lab', role: 'lab' },
    },
  },
  {
    id: 'nmi-legal-mandate',
    profile: 'C',
    dir: 'nmi-legal-mandate',
    title: 'Profile C — Legal mandate / Metrology Authority',
    subtitle: 'National Metrology Institute — statutory authority',
    description:
      'A DCC from a National Metrology Institute (NMI). Authority derives from a ' +
      'legal mandate — no accreditation root. The authorizedBy edge carries ' +
      'kind: legalMandate. No derivation check — the mandate is independent authority.',
    actors: {
      'did:web:nmi.example': { label: 'National Metrology Institute', role: 'nmi' },
    },
  },
  {
    id: 'gs-scheme-authorization',
    profile: 'D',
    dir: 'gs-scheme-authorization',
    title: 'Profile D — Notification / Scheme (GS mark)',
    subtitle: 'Notified body composing accreditation + scheme authority',
    description:
      'A GS product-safety certificate authorized jointly by a scheme authorization ' +
      '(independent authority, no subset check) and a competence accreditation. ' +
      'Key structural test: the independent scheme edge is not subset-bounded by accreditation.',
    actors: {
      'did:web:nab.example': { label: 'Accreditation Body', role: 'accreditationBody' },
      'did:web:scheme-authority.example': { label: 'Scheme Authority', role: 'schemeAuthority' },
      'did:web:gs-body.example': { label: 'Notified Body (GS)', role: 'lab' },
    },
  },
  {
    id: 'reference-material-recursive',
    profile: 'E',
    dir: 'reference-material-recursive',
    title: 'Profile E — Reference Material (recursive chain)',
    subtitle: 'RM certificate with derived operational scope',
    description:
      'A reference material certificate. The RM producer derives an operational scope ' +
      'from their RM accreditation (subset-checked), then issues the RM cert authorizedBy ' +
      'that scope. Demonstrates recursive graph walk: RM cert → op-scope → accreditation.',
    failingFile: 'reject-credential.json',
    actors: {
      'did:web:a2la.example': { label: 'Accreditation Body (RM)', role: 'accreditationBody' },
      'did:web:rm-producer.example': { label: 'RM Producer', role: 'rmProducer' },
    },
  },
  {
    id: 'test-report-supported-dcc',
    profile: 'F',
    dir: 'test-report-supported-dcc',
    title: 'Profile F — Test report with supporting DCC',
    subtitle: 'supportedBy relation — non-authorizing evidence',
    description:
      'A test report supported by a DCC (non-authorizing evidence). The supportedBy ' +
      'edge does not grant authority — it links corroborating evidence. The DCC itself ' +
      'is still authorized by an accreditation. Demonstrates the three-edge-type model: ' +
      'authorizedBy, derivedFrom, and supportedBy each have distinct semantics.',
    actors: {
      'did:web:nab.example': { label: 'Accreditation Body', role: 'accreditationBody' },
      'did:web:lab.example': { label: 'Calibration / Test Lab', role: 'lab' },
    },
  },
];

export const SCENARIOS: Scenario[] = SPECS.map(buildScenario);

export const scenarioA = SCENARIOS[0]!;
export const scenarioB = SCENARIOS[1]!;
export const scenarioC = SCENARIOS[2]!;
export const scenarioD = SCENARIOS[3]!;
export const scenarioE = SCENARIOS[4]!;
export const scenarioF = SCENARIOS[5]!;
