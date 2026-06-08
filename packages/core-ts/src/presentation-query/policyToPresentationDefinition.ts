// SPDX-License-Identifier: Apache-2.0
import type { PolicyProfile, RequiredEvidence } from '../policy/types.js';
import type { JsonObject } from '../types.js';

function evidenceFields(requirement: RequiredEvidence): JsonObject[] {
  const fields: JsonObject[] = [];
  if (requirement.relation) {
    fields.push({
      path: ['$.evidence[*].relation'],
      filter: { const: requirement.relation },
    });
  }
  if (requirement.authorizationBasis?.kind) {
    fields.push({
      path: ['$.evidence[*].authorizationBasis.kind'],
      filter: { const: requirement.authorizationBasis.kind },
    });
  }
  if (requirement.authorizationBasis?.issuerRole) {
    fields.push({
      path: ['$.evidence[*].authorizationBasis.issuerRole'],
      filter: { const: requirement.authorizationBasis.issuerRole },
    });
  }
  return fields;
}

function requirementToInputDescriptor(requirement: RequiredEvidence): JsonObject {
  if (requirement.anyOf?.length) {
    // DIF PE expresses alternatives via submission_requirements + group membership.
    // For the narrow QI case we flatten alternatives into one_of groups: each
    // alternative becomes a field with a filter over the union of its values.
    const relationValues = requirement.anyOf
      .map(alt => alt.relation as string | undefined)
      .filter((v): v is string => v !== undefined);
    const kindValues = requirement.anyOf
      .map(alt => alt.authorizationBasis?.kind as string | undefined)
      .filter((v): v is string => v !== undefined);

    const fields: JsonObject[] = [];
    if (relationValues.length > 0) {
      fields.push({
        path: ['$.evidence[*].relation'],
        filter: { type: 'string', enum: relationValues },
      });
    }
    if (kindValues.length > 0) {
      fields.push({
        path: ['$.evidence[*].authorizationBasis.kind'],
        filter: { type: 'string', enum: kindValues },
      });
    }

    return {
      id: requirement.id,
      purpose: `Evidence satisfying any of: ${requirement.anyOf.map(a => a.id ?? a.relation ?? a.authorizationBasis?.kind).join(', ')}`,
      constraints: { fields },
    };
  }

  return {
    id: requirement.id,
    constraints: {
      fields: [
        {
          path: ['$.type'],
          filter: { type: 'array', contains: { type: 'string' } },
        },
        ...evidenceFields(requirement),
      ],
    },
  };
}

export function policyToPresentationDefinition(policy: PolicyProfile): JsonObject {
  return {
    id: `${policy.id}-presentation-definition`,
    name: policy.id,
    purpose: 'Request credentials needed for QI evidence-graph verification.',
    input_descriptors: [
      {
        id: 'target-credential',
        constraints: {
          fields: [
            {
              path: ['$.type'],
              filter: {
                type: 'array',
                contains: { enum: policy.targetCredentialTypes },
              },
            },
          ],
        },
      },
      ...policy.requiredEvidence.map(requirementToInputDescriptor),
    ],
  };
}
