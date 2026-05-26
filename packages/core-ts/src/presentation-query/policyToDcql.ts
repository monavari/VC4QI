// SPDX-License-Identifier: Apache-2.0
import type { PolicyProfile } from '../policy/types.js';
import type { JsonObject } from '../types.js';

export function policyToDcql(policy: PolicyProfile): JsonObject {
  return {
    credentials: [
      {
        id: 'target',
        format: 'vc+ld',
        claims: [
          {
            path: ['type'],
            values: policy.targetCredentialTypes,
          },
        ],
      },
      ...policy.requiredEvidence.map(requirement => ({
        id: requirement.id,
        format: 'vc+ld',
        claims: requirement.relation
          ? [{ path: ['evidence', 'relation'], values: [requirement.relation] }]
          : [],
      })),
    ],
  };
}
