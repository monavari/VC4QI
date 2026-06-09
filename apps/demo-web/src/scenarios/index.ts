// Scenario definitions — maps testdata/examples fixtures to display metadata.

import calibrationDirectPolicy from '../../../../testdata/examples/calibration-direct-accreditation/policy.json';
import calibrationDirectTarget from '../../../../testdata/examples/calibration-direct-accreditation/target-credential.json';
import calibrationDirectTrust from '../../../../testdata/examples/calibration-direct-accreditation/trust-registry.json';
import calibrationDirectAcc from '../../../../testdata/examples/calibration-direct-accreditation/evidence/accreditation-direct-001.json';

import calibrationCapPolicy from '../../../../testdata/examples/calibration-capability/policy.json';
import calibrationCapTarget from '../../../../testdata/examples/calibration-capability/target-credential.json';
import calibrationCapFailing from '../../../../testdata/examples/calibration-capability/failing-target-credential.json';
import calibrationCapTrust from '../../../../testdata/examples/calibration-capability/trust-registry.json';
import calibrationCapAcc from '../../../../testdata/examples/calibration-capability/evidence/accreditation-capability-001.json';
import calibrationCapScope from '../../../../testdata/examples/calibration-capability/evidence/capability-001.json';

import gsProfileDPolicy from '../../../../testdata/examples/gs-profile-d/policy.json';
import gsProfileDTarget from '../../../../testdata/examples/gs-profile-d/target-credential.json';
import gsProfileDTrust from '../../../../testdata/examples/gs-profile-d/trust-registry.json';
import gsProfileDAcc from '../../../../testdata/examples/gs-profile-d/evidence/accreditation-001.json';
import gsProfileDScope from '../../../../testdata/examples/gs-profile-d/evidence/gs-issuing-scope-001.json';
import gsProfileDScheme from '../../../../testdata/examples/gs-profile-d/evidence/scheme-authorization-001.json';

import ptbPolicy from '../../../../testdata/examples/ptb-legal-mandate/policy.json';
import ptbTarget from '../../../../testdata/examples/ptb-legal-mandate/target-credential.json';
import ptbTrust from '../../../../testdata/examples/ptb-legal-mandate/trust-registry.json';
import ptbMandate from '../../../../testdata/examples/ptb-legal-mandate/evidence/ptb-legal-mandate-001.json';

import gsSchemeAuthFailing from '../../../../testdata/examples/gs-scheme-authorization/failing-target-credential.json';

import rmPolicy from '../../../../testdata/examples/reference-material-recursive/policy.json';
import rmTarget from '../../../../testdata/examples/reference-material-recursive/target-credential.json';
import rmTrust from '../../../../testdata/examples/reference-material-recursive/trust-registry.json';
import rmAcc from '../../../../testdata/examples/reference-material-recursive/evidence/rm-accreditation-001.json';
import rmOpScope from '../../../../testdata/examples/reference-material-recursive/evidence/operational-scope-001.json';
import rmStudy from '../../../../testdata/examples/reference-material-recursive/evidence/rm-study-001.json';
import rmStudyLabAcc from '../../../../testdata/examples/reference-material-recursive/evidence/rm-study-lab-accreditation-001.json';

import type { JsonObject } from '@qi-vc/core';

// Synthetic failing targets for demo — bad digestSRI triggers DIGEST_VALID: FAIL.
// These are intentionally broken credentials used only in the demo failing variant.
const BROKEN_DIGEST = 'sha384-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

const calibrationDirectFailing: JsonObject = {
  ...(calibrationDirectTarget as JsonObject),
  id: 'urn:uuid:dcc-direct-fail-demo',
  evidence: [
    {
      type: 'CredentialEvidenceReference',
      id: 'urn:uuid:accreditation-direct-001',
      relation: 'authorizedBy',
      authorizationBasis: { kind: 'accreditation' },
      digestSRI: BROKEN_DIGEST,
    },
  ],
} as JsonObject;

const ptbFailing: JsonObject = {
  ...(ptbTarget as JsonObject),
  id: 'urn:uuid:dcc-ptb-fail-demo',
  evidence: [
    {
      type: 'CredentialEvidenceReference',
      id: 'urn:uuid:ptb-legal-mandate-001',
      relation: 'authorizedBy',
      authorizationBasis: { kind: 'legalMandate' },
      digestSRI: BROKEN_DIGEST,
    },
  ],
} as JsonObject;

const rmFailing: JsonObject = {
  ...(rmTarget as JsonObject),
  id: 'urn:uuid:rm-cert-fail-demo',
  evidence: [
    {
      type: 'CredentialEvidenceReference',
      id: 'urn:uuid:operational-scope-001',
      relation: 'authorizedBy',
      authorizationBasis: { kind: 'operationalScope' },
      digestSRI: BROKEN_DIGEST,
    },
    {
      type: 'CredentialEvidenceReference',
      id: 'urn:uuid:rm-study-001',
      relation: 'supportedBy',
      digestSRI: BROKEN_DIGEST,
    },
  ],
} as JsonObject;

// PolicyProfile is imported from the core-ts source directly (type-only)
export interface PolicyProfile {
  id: string;
  description?: string;
  targetCredentialTypes: string[];
  requiredEvidence: unknown[];
  checks: Record<string, unknown>;
}

export type EdgeRelation = 'authorizedBy' | 'derivedFrom' | 'supportedBy';

export interface ScenarioActor {
  id: string;
  label: string;
  role: 'accreditationBody' | 'lab' | 'schemeAuthority' | 'nmi' | 'rmProducer';
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
  profile: 'A' | 'B' | 'C' | 'D' | 'E';
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

// ── A: Accreditation-only ─────────────────────────────────────────────────────

export const scenarioA: Scenario = {
  id: 'calibration-direct',
  profile: 'A',
  title: 'Profile A — Accreditation only',
  subtitle: 'Standard accredited calibration lab',
  description:
    'A calibration certificate issued directly under an accreditation. ' +
    'Single authorizedBy edge from the certificate to the accreditation body. ' +
    'Baseline case — no derivation check.',
  actors: [
    { id: 'acc-body', label: 'Accreditation Body', role: 'accreditationBody', did: 'did:web:dakks.example' },
    { id: 'lab', label: 'Calibration Lab', role: 'lab', did: 'did:web:lab.example' },
  ],
  nodes: [
    {
      id: 'urn:uuid:accreditation-direct-001',
      label: 'Accreditation',
      credentialType: 'AccreditationCertificate',
      actorId: 'acc-body',
      credential: calibrationDirectAcc as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:dcc-direct-001',
      label: 'Calibration Certificate',
      credentialType: 'DigitalCalibrationCertificate',
      actorId: 'lab',
      credential: calibrationDirectTarget as JsonObject,
      isTarget: true,
    },
  ],
  edges: [
    { from: 'urn:uuid:dcc-direct-001', to: 'urn:uuid:accreditation-direct-001', relation: 'authorizedBy', basisKind: 'accreditation' },
  ],
  policy: calibrationDirectPolicy as unknown as PolicyProfile,
  documents: { 'urn:uuid:accreditation-direct-001': calibrationDirectAcc as JsonObject },
  trustRegistry: calibrationDirectTrust as JsonObject,
  failingTarget: calibrationDirectFailing,
};

// ── B: Operational scope (derived) ───────────────────────────────────────────

export const scenarioB: Scenario = {
  id: 'calibration-capability',
  profile: 'B',
  title: 'Profile B — Accreditation + operational scope',
  subtitle: 'Flexible-scope issuance with derivation check',
  description:
    'The lab holds an operational-scope credential derivedFrom its accreditation ' +
    '(subset-checked: scope ⊑ accreditation). The DCC is then authorizedBy that ' +
    'operational scope. Shows the per-edge derivation check in action.',
  actors: [
    { id: 'acc-body', label: 'Accreditation Body', role: 'accreditationBody', did: 'did:web:dakks.example' },
    { id: 'lab', label: 'Calibration Lab', role: 'lab', did: 'did:web:lab.example' },
  ],
  nodes: [
    {
      id: 'urn:uuid:accreditation-capability-001',
      label: 'Accreditation',
      credentialType: 'AccreditationCertificate',
      actorId: 'acc-body',
      credential: calibrationCapAcc as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:capability-001',
      label: 'Operational Scope',
      credentialType: 'IssuingScopeCredential',
      actorId: 'lab',
      credential: calibrationCapScope as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:dcc-capability-001',
      label: 'Calibration Certificate',
      credentialType: 'DigitalCalibrationCertificate',
      actorId: 'lab',
      credential: calibrationCapTarget as JsonObject,
      isTarget: true,
    },
  ],
  edges: [
    { from: 'urn:uuid:capability-001', to: 'urn:uuid:accreditation-capability-001', relation: 'derivedFrom', basisKind: 'accreditation' },
    { from: 'urn:uuid:dcc-capability-001', to: 'urn:uuid:capability-001', relation: 'authorizedBy', basisKind: 'operationalScope' },
  ],
  policy: calibrationCapPolicy as unknown as PolicyProfile,
  documents: {
    'urn:uuid:accreditation-capability-001': calibrationCapAcc as JsonObject,
    'urn:uuid:capability-001': calibrationCapScope as JsonObject,
  },
  trustRegistry: calibrationCapTrust as JsonObject,
  failingTarget: calibrationCapFailing as JsonObject,
};

// ── C: Legal mandate / NMI ───────────────────────────────────────────────────

export const scenarioC: Scenario = {
  id: 'ptb-legal-mandate',
  profile: 'C',
  title: 'Profile C — Legal mandate / Metrology Authority',
  subtitle: 'National Metrology Institute — statutory authority',
  description:
    'A DCC from a National Metrology Institute (NMI). Authority derives from a ' +
    'legal mandate — no accreditation root. The authorizedBy edge carries ' +
    'kind: legalMandate. No derivation check — the mandate is independent authority.',
  actors: [
    { id: 'nmi', label: 'National Metrology Institute', role: 'nmi', did: 'did:web:nmi.example' },
    { id: 'lab', label: 'NMI Lab', role: 'lab', did: 'did:web:nmi-lab.example' },
  ],
  nodes: [
    {
      id: 'urn:uuid:ptb-legal-mandate-001',
      label: 'Legal Mandate',
      credentialType: 'LegalMandateCredential',
      actorId: 'nmi',
      credential: ptbMandate as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:dcc-ptb-001',
      label: 'Calibration Certificate',
      credentialType: 'DigitalCalibrationCertificate',
      actorId: 'lab',
      credential: ptbTarget as JsonObject,
      isTarget: true,
    },
  ],
  edges: [
    { from: 'urn:uuid:dcc-ptb-001', to: 'urn:uuid:ptb-legal-mandate-001', relation: 'authorizedBy', basisKind: 'legalMandate' },
  ],
  policy: ptbPolicy as unknown as PolicyProfile,
  documents: { 'urn:uuid:ptb-legal-mandate-001': ptbMandate as JsonObject },
  trustRegistry: ptbTrust as JsonObject,
  failingTarget: ptbFailing,
};

// ── D: Notification / Scheme (GS mark) ───────────────────────────────────────

export const scenarioD: Scenario = {
  id: 'gs-profile-d',
  profile: 'D',
  title: 'Profile D — Notification / Scheme (GS mark)',
  subtitle: 'Notified body composing accreditation + scheme authority',
  description:
    'A GS product-safety certificate. The issuing-scope VC carries two edges: ' +
    'derivedFrom the accreditation (subset-checked, DERIVATION_VALID expected) AND ' +
    'authorizedBy the scheme authorization (independent, no subset check). ' +
    'Key structural test: derivation runs per-edge.',
  actors: [
    { id: 'acc-body', label: 'Accreditation Body', role: 'accreditationBody', did: 'did:web:dakks.example' },
    { id: 'scheme-auth', label: 'Scheme Authority', role: 'schemeAuthority', did: 'did:web:scheme-authority.example' },
    { id: 'gs-body', label: 'Notified Body (GS)', role: 'lab', did: 'did:web:gs-body.example' },
  ],
  nodes: [
    {
      id: 'urn:uuid:accreditation-001',
      label: 'Accreditation',
      credentialType: 'AccreditationCertificate',
      actorId: 'acc-body',
      credential: gsProfileDAcc as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:scheme-authorization-001',
      label: 'Scheme Authorization',
      credentialType: 'SchemeAuthorizationCredential',
      actorId: 'scheme-auth',
      credential: gsProfileDScheme as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:gs-issuing-scope-001',
      label: 'GS Issuing Scope',
      credentialType: 'IssuingScopeCredential',
      actorId: 'gs-body',
      credential: gsProfileDScope as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:gs-cert-profile-d-001',
      label: 'GS Certificate',
      credentialType: 'GSCertificate',
      actorId: 'gs-body',
      credential: gsProfileDTarget as JsonObject,
      isTarget: true,
    },
  ],
  edges: [
    { from: 'urn:uuid:gs-issuing-scope-001', to: 'urn:uuid:accreditation-001', relation: 'derivedFrom', basisKind: 'accreditation' },
    { from: 'urn:uuid:gs-issuing-scope-001', to: 'urn:uuid:scheme-authorization-001', relation: 'authorizedBy', basisKind: 'schemeAuthorization' },
    { from: 'urn:uuid:gs-cert-profile-d-001', to: 'urn:uuid:gs-issuing-scope-001', relation: 'authorizedBy', basisKind: 'schemeAuthorization' },
  ],
  policy: gsProfileDPolicy as unknown as PolicyProfile,
  documents: {
    'urn:uuid:accreditation-001': gsProfileDAcc as JsonObject,
    'urn:uuid:scheme-authorization-001': gsProfileDScheme as JsonObject,
    'urn:uuid:gs-issuing-scope-001': gsProfileDScope as JsonObject,
  },
  trustRegistry: gsProfileDTrust as JsonObject,
  failingTarget: gsSchemeAuthFailing as JsonObject,
};

// ── E: Recursive RM chain ─────────────────────────────────────────────────────

export const scenarioE: Scenario = {
  id: 'reference-material-recursive',
  profile: 'E',
  title: 'Profile E — Reference Material (recursive chain)',
  subtitle: 'RM certificate with derived operational scope',
  description:
    'A reference material certificate. The RM producer derives an operational scope ' +
    'from their RM accreditation (subset-checked), then issues the RM cert authorizedBy ' +
    'that scope. Demonstrates recursive graph walk: RM cert → op-scope → accreditation.',
  actors: [
    { id: 'acc-body', label: 'Accreditation Body (RM)', role: 'accreditationBody', did: 'did:web:a2la.example' },
    { id: 'rm-producer', label: 'RM Producer', role: 'rmProducer', did: 'did:web:rm-producer.example' },
  ],
  nodes: [
    {
      id: 'urn:uuid:rm-accreditation-001',
      label: 'RM Accreditation',
      credentialType: 'AccreditationCertificate',
      actorId: 'acc-body',
      credential: rmAcc as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:operational-scope-001',
      label: 'Operational Scope',
      credentialType: 'IssuingScopeCredential',
      actorId: 'rm-producer',
      credential: rmOpScope as JsonObject,
      isTarget: false,
    },
    {
      id: 'urn:uuid:rm-cert-001',
      label: 'RM Certificate',
      credentialType: 'ReferenceMaterialCertificate',
      actorId: 'rm-producer',
      credential: rmTarget as JsonObject,
      isTarget: true,
    },
  ],
  edges: [
    { from: 'urn:uuid:operational-scope-001', to: 'urn:uuid:rm-accreditation-001', relation: 'derivedFrom', basisKind: 'accreditation' },
    { from: 'urn:uuid:rm-cert-001', to: 'urn:uuid:operational-scope-001', relation: 'authorizedBy', basisKind: 'operationalScope' },
  ],
  policy: rmPolicy as unknown as PolicyProfile,
  documents: {
    'urn:uuid:rm-accreditation-001':         rmAcc as JsonObject,
    'urn:uuid:operational-scope-001':        rmOpScope as JsonObject,
    'urn:uuid:rm-study-001':                 rmStudy as JsonObject,
    'urn:uuid:rm-study-lab-accreditation-001': rmStudyLabAcc as JsonObject,
  },
  trustRegistry: rmTrust as JsonObject,
  failingTarget: rmFailing,
};

export const SCENARIOS: Scenario[] = [scenarioA, scenarioB, scenarioC, scenarioD, scenarioE];
