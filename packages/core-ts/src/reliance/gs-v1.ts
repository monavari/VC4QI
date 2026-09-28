// SPDX-License-Identifier: Apache-2.0
// Identifiers and artifact binding for the experimental GS certification v1 binding.
// Browser-safe: the Node-only pinned-resource loader lives in gs-v1-node.ts.
import type { ArtifactBinding } from './rm-v1-artifacts.js';
import { VC_V2_CONTEXT } from './rm-v1.js';

export const GS_V1_BINDING_ID = 'https://vc4qi.example/bindings/gs/1';
export const GS_V1_CONTEXT = 'https://vc4qi.example/contexts/gs/1';
export const GS_V1_VOCAB = 'https://vc4qi.example/bindings/gs/1#';
export const GS_V1_SCHEMA_BASE = 'https://vc4qi.example/schemas/gs/1/';

export const GS_V1_ARTIFACT_BINDING: ArtifactBinding = Object.freeze({
  name: 'GS certification v1',
  schemas: Object.freeze({
    GsAccreditation: `${GS_V1_SCHEMA_BASE}accreditation.json`,
    GsSchemeAuthorization: `${GS_V1_SCHEMA_BASE}scheme-authorization.json`,
    GsCertificate: `${GS_V1_SCHEMA_BASE}certificate.json`,
    GsProductPassport: `${GS_V1_SCHEMA_BASE}product-passport.json`,
    BitstringStatusListCredential: `${GS_V1_SCHEMA_BASE}status-list.json`,
  }),
  contexts: (type: unknown) => (type === 'BitstringStatusListCredential' ? [VC_V2_CONTEXT] : [VC_V2_CONTEXT, GS_V1_CONTEXT]),
});
