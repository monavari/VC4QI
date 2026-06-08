// SPDX-License-Identifier: Apache-2.0
import type { PolicyProfile, RequiredEvidence } from '../policy/types.js';
import type { JsonObject } from '../types.js';

function evidenceClaims(requirement: RequiredEvidence): JsonObject[] {
  const claims: JsonObject[] = [];
  if (requirement.relation) {
    claims.push({ path: ['evidence', 'relation'], values: [requirement.relation] });
  }
  if (requirement.authorizationBasis?.kind) {
    claims.push({ path: ['evidence', 'authorizationBasis', 'kind'], values: [requirement.authorizationBasis.kind] });
  }
  if (requirement.authorizationBasis?.issuerRole) {
    claims.push({ path: ['evidence', 'authorizationBasis', 'issuerRole'], values: [requirement.authorizationBasis.issuerRole] });
  }
  return claims;
}

function requirementToDescriptor(requirement: RequiredEvidence): JsonObject {
  if (requirement.anyOf?.length) {
    // anyOf: emit one descriptor per alternative; the first alternative's id is used
    // as the descriptor id and the alternatives are expressed as optional variants.
    return {
      id: requirement.id,
      format: 'vc+ld',
      optional: requirement.required === false,
      multiple: true,
      claims: requirement.anyOf.flatMap(alt => evidenceClaims(alt)),
    };
  }
  return {
    id: requirement.id,
    format: 'vc+ld',
    optional: requirement.required === false,
    claims: evidenceClaims(requirement),
  };
}

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
      ...policy.requiredEvidence.map(requirementToDescriptor),
    ],
  };
}
