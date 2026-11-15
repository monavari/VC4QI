// SPDX-License-Identifier: Apache-2.0
// Identifiers and artifact binding for the experimental calibration (DCC) v1 binding.
// Browser-safe: the Node-only pinned-resource loader lives in cal-v1-node.ts.
import type { ArtifactBinding } from './rm-v1-artifacts.js';
import { RECOGNIZED_ENTITIES_DRAFT_CONTEXT, RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, VC_V2_CONTEXT } from './rm-v1.js';

export const CAL_V1_BINDING_ID = 'https://vc4qi.example/bindings/cal/1';
export const CAL_V1_CONTEXT = 'https://vc4qi.example/contexts/cal/1';
export const CAL_V1_VOCAB = 'https://vc4qi.example/bindings/cal/1#';
export const CAL_V1_SCHEMA_BASE = 'https://vc4qi.example/schemas/cal/1/';

export const CAL_V1_ARTIFACT_BINDING: ArtifactBinding = Object.freeze({
  name: 'calibration v1',
  schemas: Object.freeze({
    CalAccreditation: `${CAL_V1_SCHEMA_BASE}accreditation.json`,
    CalOperationalScope: `${CAL_V1_SCHEMA_BASE}operational-scope.json`,
    CalLegalMandate: `${CAL_V1_SCHEMA_BASE}legal-mandate.json`,
    CalCertificate: `${CAL_V1_SCHEMA_BASE}certificate.json`,
    CalTestReport: `${CAL_V1_SCHEMA_BASE}test-report.json`,
    // Status lists of this binding's issuers, and of the shared roots' issuers (the state,
    // Global ACI), which publish them with the RM binding's carrier.
    BitstringStatusListCredential: [`${CAL_V1_SCHEMA_BASE}status-list.json`, `${RM_V1_SCHEMA_BASE}status-list.json`],
    // The shared roots of the accreditation body, read with the RM binding's carriers:
    // the state's appointment (APP-NAB) and Global ACI's recognition (REC-NAB).
    RecognizedEntityCredential: `${RM_V1_SCHEMA_BASE}recognized-entity.json`,
    VerifiableAuthorisationForTrustChain: `${RM_V1_SCHEMA_BASE}appointment.json`,
  }),
  contexts: (type: unknown) => (type === 'BitstringStatusListCredential' ? [VC_V2_CONTEXT]
    : type === 'RecognizedEntityCredential' ? [VC_V2_CONTEXT, RECOGNIZED_ENTITIES_DRAFT_CONTEXT]
      : type === 'VerifiableAuthorisationForTrustChain' ? [VC_V2_CONTEXT, RM_V1_CONTEXT]
        : [VC_V2_CONTEXT, CAL_V1_CONTEXT]),
});
