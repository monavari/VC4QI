// SPDX-License-Identifier: Apache-2.0
// Identifiers for the experimental RM v1 binding. Browser-safe: the Node-only
// pinned-resource loader lives in rm-v1-node.ts and is not re-exported here.

export const VC_V2_CONTEXT = 'https://www.w3.org/ns/credentials/v2';
export const RM_V1_CONTEXT = 'https://vc4qi.example/contexts/rm/1';
export const RM_V1_VOCAB = 'https://vc4qi.example/bindings/rm/1#';
export const RM_V1_SCHEMA_BASE = 'https://vc4qi.example/schemas/rm/1/';
/**
 * Repository-owned stand-in for the W3C Recognized Entities context, which the W3C
 * has not published yet. Its terms expand to the draft vocabulary
 * (https://www.w3.org/ns/credentials/recognized-entities#) of the Working Draft of
 * 12 November 2026; the main-scope extension terms are RM binding terms.
 */
export const RECOGNIZED_ENTITIES_DRAFT_CONTEXT = 'https://vc4qi.example/contexts/recognized-entities/draft-20261112';
