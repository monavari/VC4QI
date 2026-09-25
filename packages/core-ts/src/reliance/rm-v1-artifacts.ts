// SPDX-License-Identifier: Apache-2.0
// I1 signed vertical slice for the experimental RM v1 binding.
//
// verifyRmArtifact checks one artifact from its exact catalog bytes: supported
// carrier, pinned schema, one eddsa-rdfc-2022 proof by a key the issuer controls for
// assertionMethod, and a signature over JSON-LD safe-mode canonicalization with the
// offline catalog. Only after protection is established does it read validity and
// extract facts by the manifest's native paths, with concrete source pointers.
//
// evaluateRmSlice wraps that in the reliance result contract. Authorization, support
// and conformity are not implemented in I1, so they are reported as not_run and the
// overall decision can never be accept: authentic artifacts alone establish no reliance.
//
// Node-oriented (Ajv, jsonld); not exported from the browser-reachable barrel.
import Ajv2020 from 'ajv/dist/2020.js';
import addFormatsModule from 'ajv-formats';
import { verifyProof } from '../proofs/index.js';
import type { JsonObject } from '../types.js';
import {
  catalogDocumentLoader, CatalogError, type CatalogSession, sha384SRI,
} from './catalog.js';
import {
  createRelianceResult, decisionFromRequired, semanticAnd,
} from './index.js';
import { authorizeAssertionMethod, type KeyAuthorization } from './key-authorization.js';
import { RM_V1_BINDING_ID, type BindingManifest } from './manifest.js';
import { RM_V1_CONTEXT, RM_V1_SCHEMA_BASE, VC_V2_CONTEXT } from './rm-v1.js';
import type {
  ArtifactVerificationResult, PredicateResult, RelianceRequest, RelianceResult, SemanticState,
} from './types.js';

const Ajv = Ajv2020 as unknown as typeof import('ajv/dist/2020.js').default;
const addFormats = addFormatsModule as unknown as (ajv: InstanceType<typeof Ajv>) => void;

/** Recognized RM v1 credential types and the schema each must declare. */
export const RM_V1_ARTIFACT_SCHEMAS: Readonly<Record<string, string>> = Object.freeze({
  RmAccreditation: `${RM_V1_SCHEMA_BASE}accreditation.json`,
  RmOperationalScope: `${RM_V1_SCHEMA_BASE}operational-scope.json`,
  RmCertificate: `${RM_V1_SCHEMA_BASE}certificate.json`,
  RmStudy: `${RM_V1_SCHEMA_BASE}study.json`,
  RmLabAuthority: `${RM_V1_SCHEMA_BASE}lab-authority.json`,
});

export type ProtectionCheck =
  | 'resolve' | 'parse' | 'carrier' | 'type' | 'schema' | 'proof' | 'key' | 'signature';

export interface CheckOutcome {
  readonly check: ProtectionCheck;
  readonly state: SemanticState;
  readonly reason: string;
}

export interface ProtectedFact {
  readonly fact: string;
  /** RFC 6901 pointer into the original secured JSON. */
  readonly pointer: string;
  readonly value: unknown;
}

export interface RelatedResourceCheck {
  readonly id: string;
  readonly state: SemanticState;
  readonly reason: string;
}

export interface RmArtifactVerification {
  readonly artifactId: string;
  readonly artifactType?: string;
  /** SHA-384 SRI over the exact bytes that were verified. */
  readonly digestSRI?: string;
  readonly protection: ArtifactVerificationResult;
  readonly checks: readonly CheckOutcome[];
  readonly keyAuthorization?: KeyAuthorization;
  /** Executed only after protection is established. */
  readonly validity: PredicateResult;
  /** Integrity of relatedResource references; empty unless protection is established. */
  readonly relatedResources: readonly RelatedResourceCheck[];
  /** Empty unless protection is established. */
  readonly facts: readonly ProtectedFact[];
}

export interface VerifyRmArtifactOptions {
  readonly manifest: BindingManifest;
  readonly evaluationTime: string;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

const escapePointer = (segment: string) => segment.replace(/~/g, '~0').replace(/\//g, '~1');

/** Evaluate a manifest native path (with `*` over arrays) to concrete pointers. */
export function resolveNativePath(document: unknown, path: string): { pointer: string; value: unknown }[] {
  if (!path.startsWith('/')) return [];
  let frontier: { pointer: string; value: unknown }[] = [{ pointer: '', value: document }];
  for (const segment of path.slice(1).split('/')) {
    const next: { pointer: string; value: unknown }[] = [];
    for (const { pointer, value } of frontier) {
      if (segment === '*') {
        if (Array.isArray(value)) {
          value.forEach((item, index) => next.push({ pointer: `${pointer}/${index}`, value: item }));
        }
      } else if (isObject(value) && Object.hasOwn(value, segment)) {
        next.push({ pointer: `${pointer}/${escapePointer(segment)}`, value: value[segment] });
      }
    }
    frontier = next;
  }
  return frontier;
}

/** Resolve an RFC 6901 pointer; undefined when it does not resolve. */
export function resolvePointer(document: unknown, pointer: string): unknown {
  if (pointer === '') return document;
  if (!pointer.startsWith('/')) return undefined;
  let value: unknown = document;
  for (const raw of pointer.slice(1).split('/')) {
    const segment = raw.replace(/~1/g, '/').replace(/~0/g, '~');
    if (Array.isArray(value) && /^(0|[1-9][0-9]*)$/.test(segment)) value = value[Number(segment)];
    else if (isObject(value) && Object.hasOwn(value, segment)) value = value[segment];
    else return undefined;
  }
  return value;
}

function predicate(
  state: SemanticState, reasons: string[], sourcePointers: string[] = [],
  execution: 'executed' | 'not_run' = 'executed',
): PredicateResult {
  return Object.freeze({
    state, execution, reasons: Object.freeze(reasons), sourcePointers: Object.freeze(sourcePointers),
  });
}

const notRun = (reason: string) => predicate('not_established', [reason], [], 'not_run');

function validity(document: JsonObject, evaluationTime: string): PredicateResult {
  const at = Date.parse(evaluationTime);
  const from = typeof document.validFrom === 'string' ? Date.parse(document.validFrom) : NaN;
  const until = typeof document.validUntil === 'string' ? Date.parse(document.validUntil) : NaN;
  if (!Number.isFinite(at) || !Number.isFinite(from) || !Number.isFinite(until)) {
    return predicate('not_established', ['Validity period or evaluation time is missing or invalid.']);
  }
  const pointers = ['/validFrom', '/validUntil'];
  if (at < from) return predicate('contradicted', [`Not yet valid at ${evaluationTime}.`], pointers);
  if (at > until) return predicate('contradicted', [`Expired before ${evaluationTime}.`], pointers);
  return predicate('established', [`Valid at ${evaluationTime}.`], pointers);
}

function relatedResourceChecks(document: JsonObject, session: CatalogSession): RelatedResourceCheck[] {
  const references = Array.isArray(document.relatedResource) ? document.relatedResource : [];
  return references.filter(isObject).map(reference => {
    const id = String(reference.id);
    try {
      const actual = sha384SRI(session.resolve(id).bytes);
      return actual === reference.digestSRI
        ? { id, state: 'established' as const, reason: 'Digest matches the exact referenced bytes.' }
        : { id, state: 'contradicted' as const, reason: `Digest mismatch: referenced bytes hash to ${actual}.` };
    } catch (error) {
      const code = error instanceof CatalogError ? error.code : 'UNAVAILABLE';
      return { id, state: 'not_established' as const, reason: `Referenced resource unavailable: ${code}.` };
    }
  });
}

/** Verify one RM v1 artifact from its exact catalog bytes. Never throws for untrusted input. */
export async function verifyRmArtifact(
  uri: string, session: CatalogSession, options: VerifyRmArtifactOptions,
): Promise<RmArtifactVerification> {
  const checks: CheckOutcome[] = [];
  const skipped = notRun('Not evaluated because protection is not established.');
  const finish = (
    extra: Partial<RmArtifactVerification> = {},
  ): RmArtifactVerification => {
    const state = semanticAnd(checks.map(check => check.state));
    return Object.freeze({
      artifactId: uri,
      protection: Object.freeze({
        artifactId: uri,
        ...predicate(state, checks.filter(c => c.state !== 'established').map(c => `${c.check}: ${c.reason}`)
          .concat(state === 'established' ? ['Protection established from the original secured bytes.'] : [])),
      }),
      checks: Object.freeze(checks.map(check => Object.freeze(check))),
      validity: skipped,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...extra,
    });
  };
  const fail = (check: ProtectionCheck, state: SemanticState, reason: string, extra = {}) => {
    checks.push({ check, state, reason });
    return finish(extra);
  };

  let bytes: Uint8Array;
  try {
    bytes = session.resolve(uri).bytes;
  } catch (error) {
    const code = error instanceof CatalogError ? error.code : 'UNAVAILABLE';
    return fail('resolve', 'not_established', `Artifact is not available: ${code}.`);
  }
  const digestSRI = sha384SRI(bytes);
  checks.push({ check: 'resolve', state: 'established', reason: `Resolved ${bytes.byteLength} bytes.` });

  let document: unknown;
  try {
    document = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
  } catch {
    return fail('parse', 'contradicted', 'Artifact bytes are not valid UTF-8 JSON.', { digestSRI });
  }
  if (!isObject(document)) return fail('parse', 'contradicted', 'Artifact is not a JSON object.', { digestSRI });
  checks.push({ check: 'parse', state: 'established', reason: 'Strict UTF-8 JSON object.' });

  const contexts = document['@context'];
  if (!Array.isArray(contexts) || contexts.length !== 2 ||
      contexts[0] !== VC_V2_CONTEXT || contexts[1] !== RM_V1_CONTEXT) {
    return fail('carrier', 'not_established',
      'Only the exact VCDM 2.0 + RM v1 context combination is supported.', { digestSRI });
  }
  checks.push({ check: 'carrier', state: 'established', reason: 'Exact supported context combination.' });

  const types = Array.isArray(document.type) ? document.type : [];
  const artifactType = types.length === 2 && types[0] === 'VerifiableCredential' ? String(types[1]) : undefined;
  const schemaId = artifactType === undefined ? undefined : RM_V1_ARTIFACT_SCHEMAS[artifactType];
  if (schemaId === undefined) {
    return fail('type', 'not_established', 'Credential type is not a recognized RM v1 artifact type.', { digestSRI });
  }
  const declared = isObject(document.credentialSchema) ? document.credentialSchema.id : undefined;
  if (declared !== schemaId) {
    return fail('type', 'contradicted', `${artifactType} must declare schema ${schemaId}.`, { digestSRI, artifactType });
  }
  checks.push({ check: 'type', state: 'established', reason: `${artifactType} with its pinned schema.` });

  try {
    const ajv = new Ajv({ allErrors: true, strict: true });
    addFormats(ajv);
    const schema = JSON.parse(new TextDecoder().decode(session.resolve(schemaId).bytes)) as object;
    const validate = ajv.compile(schema);
    if (!validate(document)) {
      const detail = (validate.errors ?? []).map(e => `${e.instancePath || '/'} ${e.message ?? ''}`).join('; ');
      return fail('schema', 'contradicted', `Schema validation failed: ${detail}`, { digestSRI, artifactType });
    }
  } catch (error) {
    const code = error instanceof CatalogError ? error.code : 'INVALID_SCHEMA';
    return fail('schema', 'not_established', `Pinned schema unavailable: ${code}.`, { digestSRI, artifactType });
  }
  checks.push({ check: 'schema', state: 'established', reason: 'Valid against the pinned schema.' });

  const proof = document.proof;
  if (Array.isArray(proof)) {
    return fail('proof', 'not_established', 'Proof sets and chains are unsupported in the initial slice.', { digestSRI, artifactType });
  }
  if (!isObject(proof)) {
    return fail('proof', 'not_established', 'The artifact carries no proof.', { digestSRI, artifactType });
  }
  checks.push({ check: 'proof', state: 'established', reason: 'One eddsa-rdfc-2022 assertionMethod proof.' });

  const keyAuthorization = authorizeAssertionMethod(document.issuer, proof.verificationMethod, session);
  if (keyAuthorization.state !== 'established' || keyAuthorization.publicKey === undefined) {
    return fail('key', keyAuthorization.state === 'established' ? 'not_established' : keyAuthorization.state,
      `${keyAuthorization.code}: ${keyAuthorization.reason}`, { digestSRI, artifactType, keyAuthorization });
  }
  checks.push({ check: 'key', state: 'established', reason: keyAuthorization.reason });

  try {
    const loader = catalogDocumentLoader(session);
    const valid = await verifyProof(document as JsonObject, keyAuthorization.publicKey, {
      documentLoader: loader, safe: true,
    });
    if (!valid) {
      return fail('signature', 'contradicted', 'Signature does not verify over the safe canonical form.',
        { digestSRI, artifactType, keyAuthorization });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message.split('\n')[0] : String(error);
    return fail('signature', 'contradicted', `Safe JSON-LD processing rejected the artifact: ${message}`,
      { digestSRI, artifactType, keyAuthorization });
  }
  checks.push({ check: 'signature', state: 'established', reason: 'Ed25519 signature verifies (safe mode, offline catalog).' });

  const facts: ProtectedFact[] = [];
  for (const mapping of options.manifest.factMappings) {
    const fact = String(mapping.fact);
    for (const { pointer, value } of resolveNativePath(document, String(mapping.nativePath))) {
      facts.push(Object.freeze({ fact, pointer, value: structuredClone(value) }));
    }
  }
  return finish({
    digestSRI,
    artifactType: artifactType as string,
    keyAuthorization,
    validity: validity(document as JsonObject, options.evaluationTime),
    relatedResources: Object.freeze(relatedResourceChecks(document as JsonObject, session).map(c => Object.freeze(c))),
    facts: Object.freeze(facts),
  });
}

export interface RmSliceEvaluation {
  readonly result: RelianceResult;
  readonly artifacts: readonly RmArtifactVerification[];
}

const SELECTED_RESULT = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;

/**
 * Evaluate a reliance request with the I1 slice. Protection and validity of the
 * target and supplied evidence are executed; authorization, support and conformity
 * are not implemented yet and are reported as not_run, so the decision is at best
 * not_established. A contradicted artifact yields reject.
 */
export async function evaluateRmSlice(
  request: RelianceRequest, session: CatalogSession, manifest: BindingManifest,
): Promise<RmSliceEvaluation> {
  if (request.binding.id !== RM_V1_BINDING_ID || request.binding.version !== manifest.version ||
      manifest.id !== RM_V1_BINDING_ID) {
    throw new Error(`The I1 slice evaluates only ${RM_V1_BINDING_ID}@${manifest.version}.`);
  }
  const options = { manifest, evaluationTime: request.evaluationTime };
  const target = await verifyRmArtifact(request.targetId, session, options);
  const evidence: RmArtifactVerification[] = [];
  for (const uri of request.suppliedEvidence) {
    if (uri !== request.targetId) evidence.push(await verifyRmArtifact(uri, session, options));
  }
  const artifacts = [target, ...evidence];

  // Per artifact: protection, validity, and the integrity of each relatedResource it
  // names. A digest mismatch contradicts; an unavailable reference is not established.
  const artifactVerification: ArtifactVerificationResult[] = artifacts.flatMap(artifact => [
    artifact.protection,
    { artifactId: artifact.artifactId, ...artifact.validity,
      reasons: artifact.validity.reasons.map(reason => `validity: ${reason}`) },
    ...artifact.relatedResources.map(check => ({
      artifactId: check.id,
      ...predicate(check.state, [`integrity (from ${artifact.artifactId}): ${check.reason}`], ['/relatedResource']),
    })),
  ]);

  const targetDocument = target.protection.state === 'established'
    ? JSON.parse(new TextDecoder().decode(session.resolve(request.targetId).bytes)) as unknown
    : undefined;
  const authorization = request.selectedClaims.map(claim => {
    const inTarget = targetDocument !== undefined && SELECTED_RESULT.test(claim.sourcePointer)
      && resolvePointer(targetDocument, claim.sourcePointer) !== undefined;
    return {
      claimId: claim.id,
      routeWitnessIds: [],
      ...(inTarget
        ? notRun('Claim authorization (routes, scope, principal binding) is implemented in I3/I4.')
        : predicate('not_established', [targetDocument === undefined
          ? 'The target is not protected, so its claims are not read.'
          : `Selected claim ${claim.sourcePointer} is not a result in the protected target.`])),
    };
  });
  const support = [{
    obligationId: 'rm-v1:required-study',
    witnessIds: [],
    ...notRun('Required-study support and laboratory authority are implemented in I3.'),
  }];
  const conformity = request.conformity
    ? { requested: true as const, ...request.conformity, ...notRun('Conformity is implemented in I4.') }
    : { requested: false as const, execution: 'not_run' as const };

  const required: SemanticState[] = [
    ...artifactVerification.map(result => result.state),
    ...authorization.map(result => result.state),
    ...support.map(result => result.state),
    ...(conformity.requested ? [conformity.state] : []),
  ];
  const decision = decisionFromRequired(required);

  const result = createRelianceResult({
    targetId: request.targetId,
    binding: request.binding,
    profile: request.profile,
    artifactVerification,
    authorization,
    support,
    conformity,
    decision,
    limitations: [
      'I1 slice: authorization, support and conformity are not implemented and never establish reliance.',
      'Credential status is not checked in I1.',
    ],
  });
  return Object.freeze({ result, artifacts: Object.freeze(artifacts) });
}
