// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';
import type {
  AuthorizationBasisKind,
  CredentialEvidenceReference,
  EvidenceRelation,
} from './types.js';

const RELATIONS = new Set<EvidenceRelation>([
  'authorizedBy',
  'derivedFrom',
  'supportedBy',
]);

const BASIS_KINDS = new Set<AuthorizationBasisKind>([
  'accreditation',
  'legalMandate',
  'notification',
  'schemeAuthorization',
  'recognition',
  'operationalScope',
]);

// supportedBy must NOT carry authorizationBasis; authorizedBy and derivedFrom require it
const BASIS_REQUIRED = new Set<EvidenceRelation>([
  'authorizedBy',
  'derivedFrom',
]);

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export interface NormalizeEvidenceResult {
  references: CredentialEvidenceReference[];
  results: TraceEntry[];
}

export function normalizeEvidence(
  credential: JsonObject,
  credentialId = String(credential.id ?? ''),
): NormalizeEvidenceResult {
  const raw = credential.evidence;
  const results: TraceEntry[] = [];
  const references: CredentialEvidenceReference[] = [];

  if (raw === undefined) {
    return { references, results };
  }

  const entries = Array.isArray(raw) ? raw : [raw];
  for (const [index, entry] of entries.entries()) {
    const target = `${credentialId}#evidence-${index}`;
    if (!isObject(entry) || entry.type !== 'CredentialEvidenceReference') {
      results.push(traceEntry({
        id: `evidence-${index}-unsupported`,
        level: 'credential',
        target,
        status: 'FAIL',
        code: 'UNSUPPORTED_EVIDENCE_REFERENCE',
        detail: 'Evidence entries must use type CredentialEvidenceReference.',
      }));
      continue;
    }

    const relation = entry.relation;
    const id = entry.id;

    if (typeof id !== 'string' || id.length === 0) {
      results.push(traceEntry({
        id: `evidence-${index}-missing-id`,
        level: 'credential',
        target,
        status: 'FAIL',
        code: 'EVIDENCE_ID_REQUIRED',
        detail: 'Evidence reference is missing id.',
      }));
      continue;
    }

    if (typeof relation !== 'string' || !RELATIONS.has(relation as EvidenceRelation)) {
      results.push(traceEntry({
        id: `evidence-${index}-relation`,
        level: 'credential',
        target,
        status: 'FAIL',
        code: 'UNSUPPORTED_EVIDENCE_RELATION',
        detail: `Unsupported evidence relation '${String(relation)}'.`,
      }));
      continue;
    }

    const authorizationBasis = entry.authorizationBasis;
    if (BASIS_REQUIRED.has(relation as EvidenceRelation) && !isObject(authorizationBasis)) {
      results.push(traceEntry({
        id: `evidence-${index}-basis`,
        level: 'credential',
        target,
        status: 'FAIL',
        code: 'AUTHORIZATION_BASIS_REQUIRED',
        detail: `${relation} evidence requires authorizationBasis.`,
      }));
      continue;
    }

    if (isObject(authorizationBasis)) {
      const kind = authorizationBasis.kind;
      if (typeof kind !== 'string' || !BASIS_KINDS.has(kind as AuthorizationBasisKind)) {
        results.push(traceEntry({
          id: `evidence-${index}-basis-kind`,
          level: 'credential',
          target,
          status: 'FAIL',
          code: 'UNSUPPORTED_AUTHORIZATION_BASIS_KIND',
          detail: `Unsupported authorizationBasis.kind '${String(kind)}'.`,
        }));
        continue;
      }
    }

    const normalized: CredentialEvidenceReference = {
      id,
      type: 'CredentialEvidenceReference',
      relation: relation as EvidenceRelation,
    };
    if (isObject(authorizationBasis)) {
      normalized.authorizationBasis = {
        kind: authorizationBasis.kind as AuthorizationBasisKind,
      };
      if (typeof authorizationBasis.issuerRole === 'string') normalized.authorizationBasis.issuerRole = authorizationBasis.issuerRole;
      if (typeof authorizationBasis.legalBasis === 'string') normalized.authorizationBasis.legalBasis = authorizationBasis.legalBasis;
      if (typeof authorizationBasis.scheme === 'string') normalized.authorizationBasis.scheme = authorizationBasis.scheme;
      if (typeof authorizationBasis.scopeRef === 'string') normalized.authorizationBasis.scopeRef = authorizationBasis.scopeRef;
    }
    if (typeof entry.digestMultibase === 'string') normalized.digestMultibase = entry.digestMultibase;
    if (typeof entry.digestSRI === 'string') normalized.digestSRI = entry.digestSRI;
    references.push(normalized);
  }

  return { references, results };
}
