// SPDX-License-Identifier: Apache-2.0
// Public API surface of @qi-vc/core
export * from './types.js';
export * as canonicalize from './canonicalize/index.js';
export * as proofs from './proofs/index.js';
export * as reliance from './reliance/index.js';
/** The entry point: standards-first reliance under a verifier-installed binding and profile. */
export { evaluateReliance, SUPPORTED_BINDINGS, type RelianceEvaluation } from './reliance/evaluate.js';
