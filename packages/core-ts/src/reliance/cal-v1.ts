// SPDX-License-Identifier: Apache-2.0
// Identifiers and artifact binding for the experimental calibration (DCC) v1 binding.
// Browser-safe: the Node-only pinned-resource loader lives in cal-v1-node.ts.
import type { ArtifactBinding } from './rm-v1-artifacts.js';
import { VC_V2_CONTEXT } from './rm-v1.js';

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
    BitstringStatusListCredential: `${CAL_V1_SCHEMA_BASE}status-list.json`,
  }),
  contexts: (type: unknown) => (type === 'BitstringStatusListCredential' ? [VC_V2_CONTEXT] : [VC_V2_CONTEXT, CAL_V1_CONTEXT]),
});
