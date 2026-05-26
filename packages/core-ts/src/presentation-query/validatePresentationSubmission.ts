// SPDX-License-Identifier: Apache-2.0
import type { JsonObject, TraceEntry } from '../types.js';
import { traceEntry } from '../verifier/trace.js';

export interface PresentationSubmissionValidation {
  valid: boolean;
  results: TraceEntry[];
}

export function validatePresentationSubmission(
  presentationDefinition: JsonObject,
  presentationSubmission: JsonObject,
): PresentationSubmissionValidation {
  const descriptors = presentationDefinition.input_descriptors;
  const mappings = presentationSubmission.descriptor_map;
  const expected = Array.isArray(descriptors) ? descriptors.map(descriptor => String((descriptor as JsonObject).id)) : [];
  const present = Array.isArray(mappings) ? mappings.map(mapping => String((mapping as JsonObject).id)) : [];

  const results = expected.map(id => {
    const ok = present.includes(id);
    return traceEntry({
      id: `presentation-${id}`,
      level: 'presentation',
      target: id,
      status: ok ? 'PASS' : 'FAIL',
      code: ok ? 'PRESENTATION_DESCRIPTOR_SATISFIED' : 'PRESENTATION_DESCRIPTOR_MISSING',
      detail: ok ? `Presentation descriptor ${id} is mapped.` : `Presentation descriptor ${id} is missing.`,
    });
  });

  return {
    valid: results.every(result => result.status !== 'FAIL'),
    results,
  };
}
