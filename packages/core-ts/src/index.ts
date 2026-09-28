// SPDX-License-Identifier: Apache-2.0
// Public API surface of @qi-vc/core
export * from './types.js';
export * as schemas from './schemas/index.js';
export * as canonicalize from './canonicalize/index.js';
export * as proofs from './proofs/index.js';
export * as status from './status/index.js';
export * as trustRegistry from './trust-registry/index.js';
export * as issuer from './issuer/index.js';
export * as verifier from './verifier/index.js';
export * as scope from './scope/index.js';
export * as evidence from './evidence/index.js';
export * as policy from './policy/index.js';
export * as edge from './edge/index.js';
export * as terms from './terms/index.js';
export * as assessment from './assessment/index.js';
export * as presentationQuery from './presentation-query/index.js';
export * as reliance from './reliance/index.js';
/** Explicit legacy compatibility: the v0.3 graph verifier, selected by profile, labelled legacy. */
export * as legacy from './legacy/index.js';
