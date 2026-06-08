// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';

export interface PresentationSubmissionValidation {
  valid: boolean;
  results: TraceEntry[];
}

// ── Narrow JSONPath evaluator ─────────────────────────────────────────────────
// Handles the three path patterns emitted by policyToPresentationDefinition:
//   $.type                              — top-level array field
//   $.evidence[*].relation              — array of evidence objects, scalar field
//   $.evidence[*].authorizationBasis.kind      — array of evidence objects, nested scalar
//   $.evidence[*].authorizationBasis.issuerRole — same pattern

function evaluatePath(credential: JsonObject, path: string): unknown[] {
  // $.fieldName — always wrap in a single-element array so the filter receives
  // the field value itself (including arrays), not the individual elements.
  const topLevel = /^\$\.([A-Za-z_][A-Za-z0-9_]*)$/.exec(path);
  if (topLevel) {
    const field = credential[topLevel[1] as string];
    if (field === undefined) return [];
    return [field];
  }

  // $.arrayField[*].scalarField  or  $.arrayField[*].nested.scalarField
  const wildcard = /^\$\.([A-Za-z_][A-Za-z0-9_]*)\[\*\]\.(.+)$/.exec(path);
  if (wildcard) {
    const arrayField = credential[wildcard[1] as string];
    if (!Array.isArray(arrayField)) return [];
    const nestedPath = (wildcard[2] as string).split('.');
    const values: unknown[] = [];
    for (const item of arrayField) {
      let node: unknown = item;
      for (const key of nestedPath) {
        if (node === null || typeof node !== 'object') { node = undefined; break; }
        node = (node as JsonObject)[key as string];
      }
      if (node !== undefined) values.push(node);
    }
    return values;
  }

  return [];
}

function filterMatches(value: unknown, filter: JsonObject): boolean {
  // { const: v } — exact equality
  if ('const' in filter) return value === filter.const;

  // { enum: [...] } or { type: 'string', enum: [...] } — membership
  if (Array.isArray(filter.enum)) return (filter.enum as unknown[]).includes(value);

  // { type: 'array', contains: { enum: [...] } } — array contains one of the values
  if (filter.type === 'array' && typeof filter.contains === 'object' && filter.contains !== null) {
    if (!Array.isArray(value)) return false;
    const contains = filter.contains as JsonObject;
    if (Array.isArray(contains.enum)) {
      return (value as unknown[]).some(v => (contains.enum as unknown[]).includes(v));
    }
    // { type: 'array', contains: { type: 'string' } } — any string element present
    if (contains.type === 'string') {
      return (value as unknown[]).some(v => typeof v === 'string');
    }
  }

  // { type: 'string' } — value is a non-empty string
  if (filter.type === 'string') return typeof value === 'string';

  return true;
}

function fieldSatisfied(credential: JsonObject, field: JsonObject): boolean {
  const paths = field.path as string[] | undefined;
  if (!paths || paths.length === 0) return true;
  const filter = field.filter as JsonObject | undefined;

  for (const path of paths) {
    const values = evaluatePath(credential, path);
    // If the field is absent from this credential the constraint is not applicable
    // (e.g. $.evidence[*].relation is a wallet-selection hint, not a rejection
    // criterion on the evidence credential itself which has no evidence array).
    if (values.length === 0) return true;
    if (!filter) return true;
    if (values.some(v => filterMatches(v, filter))) return true;
  }
  return false;
}

function descriptorSatisfied(descriptor: JsonObject, credential: JsonObject): boolean {
  const constraints = descriptor.constraints as JsonObject | undefined;
  if (!constraints) return true;
  const fields = constraints.fields as JsonObject[] | undefined;
  if (!fields || fields.length === 0) return true;
  return fields.every(field => fieldSatisfied(credential, field));
}

// ── Public API ────────────────────────────────────────────────────────────────

export function validatePresentationSubmission(
  presentationDefinition: JsonObject,
  presentationSubmission: JsonObject,
  /** Presented credentials keyed by descriptor id, or a flat array (positional). */
  credentials?: Record<string, JsonObject> | JsonObject[],
): PresentationSubmissionValidation {
  const descriptors = presentationDefinition.input_descriptors;
  const mappings = presentationSubmission.descriptor_map;
  const expected = Array.isArray(descriptors)
    ? (descriptors as JsonObject[])
    : [];
  const present = Array.isArray(mappings)
    ? (mappings as JsonObject[]).map(m => String(m.id))
    : [];

  const results = expected.map(descriptor => {
    const id = String(descriptor.id);
    const isMapped = present.includes(id);

    if (!isMapped) {
      return traceEntry({
        id: `presentation-${id}`,
        level: 'presentation',
        target: id,
        status: 'FAIL',
        code: 'PRESENTATION_DESCRIPTOR_MISSING',
        detail: `Presentation descriptor ${id} is missing.`,
      });
    }

    // Field-value check when a credential is supplied for this descriptor.
    if (credentials) {
      const credential = Array.isArray(credentials)
        ? (credentials[present.indexOf(id)] ?? null)
        : (credentials[id] ?? null);

      if (credential !== null) {
        const satisfied = descriptorSatisfied(descriptor, credential);
        if (!satisfied) {
          return traceEntry({
            id: `presentation-${id}`,
            level: 'presentation',
            target: id,
            status: 'FAIL',
            code: 'PRESENTATION_FIELD_MISMATCH',
            detail: `Credential for descriptor ${id} does not satisfy required field constraints.`,
          });
        }
      }
    }

    return traceEntry({
      id: `presentation-${id}`,
      level: 'presentation',
      target: id,
      status: 'PASS',
      code: 'PRESENTATION_DESCRIPTOR_SATISFIED',
      detail: `Presentation descriptor ${id} is mapped.`,
    });
  });

  return {
    valid: results.every(result => result.status !== 'FAIL'),
    results,
  };
}
