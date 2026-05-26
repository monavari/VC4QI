// SPDX-License-Identifier: Apache-2.0
import type { PolicyProfile } from '../policy/types.js';
import type { JsonObject } from '../types.js';

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
      ...policy.requiredEvidence.map(requirement => ({
        id: requirement.id,
        constraints: {
          fields: [
            {
              path: ['$.evidence[*].relation'],
              filter: requirement.relation ? { const: requirement.relation } : {},
            },
          ],
        },
      })),
    ],
  };
}
