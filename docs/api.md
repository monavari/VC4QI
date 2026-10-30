# API

VC4QI ships one canonical TypeScript library, `@qi-vc/core` (`packages/core-ts`), and a
Python mirror, `qi_vc_core` (`packages/core-py`). Both are research code at version
0.4.0; the reliance API may still change.

## Entry points

| | TypeScript | Python |
| --- | --- | --- |
| Any installed binding | `evaluateReliance` from `@qi-vc/core` | `evaluate_reliance` from `qi_vc_core` |
| One binding | `evaluateRmSlice`, `evaluateCalSlice`, `evaluateGsSlice` from `@qi-vc/core/reliance/{rm,cal,gs}-v1-slice` | `evaluate_rm_slice`, `evaluate_cal_slice`, `evaluate_gs_slice` |
| Install a binding | `installBinding` from `@qi-vc/core/reliance/binding-node` | `install_binding` |

`evaluateReliance(request, catalog, manifest, profile)` runs the gate 0–6 evaluator of
the verifier's installed binding (`SUPPORTED_BINDINGS`: RM, calibration and GS v1). A
binding without an evaluator is a configuration error; nothing falls back to another
evaluator.

## Reliance request and result

The contract types live in the TS `reliance` namespace and in `qi_vc_core.reliance`.
`createRelianceRequest` / `create_reliance_request` validate and freeze a request:

| Field | Meaning |
| --- | --- |
| `requestId` | Caller's identifier, echoed in the result |
| `targetId` | The credential to rely on |
| `selectedClaims` | `{id, sourcePointer}` pairs, for example `/credentialSubject/materialPropertiesList/0/results/0` |
| `purpose`, `binding`, `profile` | What the reliance is for, and the verifier-selected binding and profile (id and version) |
| `trustConfigId` | The verifier's trust configuration |
| `evaluationTime`, `activityTime` | When the question is asked, and the time it concerns |
| `suppliedEvidence` | Credentials offered alongside the target |
| `resolverLimits` | `maxResources`, `maxDepth`, `maxBytes` budgets |
| `conformity` | Optional `{requirementId, decisionRuleId}` chosen from the profile |

The result reports:

- `artifactVerification`: per credential, gates 0–3 (structure, identity, protection,
  time and status);
- `authorization`: per selected claim, the state and its route and record witnesses;
- `support`: per required obligation (a study, an instrument calibration);
- `conformity`: the requested rule and its arithmetic, or not requested or not run;
- `decision`: `accept`, `reject` or `not_established`;
- `trace`: gate-numbered entries (gate, node-use, predicate, state, execution, reason,
  source paths);
- `resources`: every resource observed, with its SHA-384 SRI;
- `limitations`: what the result does not establish.

A request that names a profile or binding other than the verifier's is refused without
evaluation.

## Example

The tests are the runnable reference; for example
`packages/core-ts/tests/rm-v1-claims.test.ts` and
`packages/core-py/tests/test_rm_v1_claims.py`. In outline (TypeScript):

```ts
import { evaluateReliance, reliance } from '@qi-vc/core';
import { installBinding } from '@qi-vc/core/reliance/binding-node';

// Manifest, one verifier profile, and a catalog of the pinned resources and signed test vectors.
const { manifest, profile, catalog } = installBinding('bindings/experimental/rm-v1', 'rm-verifier-1');
const request = reliance.createRelianceRequest({
  requestId: 'urn:uuid:example', targetId: 'https://producer.vc4qi.example/credentials/D178',
  selectedClaims: [{ id: 'as', sourcePointer: '/credentialSubject/materialPropertiesList/0/results/0' }],
  purpose: 'use-as-calibrant',
  binding: { id: manifest.id, version: manifest.version },
  profile: { id: profile.id, version: profile.version },
  trustConfigId: 'https://vc4qi.example/trust/fixture-nab-anchor',
  evaluationTime: '2026-09-25T12:00:00Z', activityTime: '2026-09-25T12:00:00Z',
  suppliedEvidence: [], resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5_000_000 },
  conformity: { requirementId: 'as-mass-fraction-max-200-mg-per-kg', decisionRuleId: 'guarded-acceptance-expanded-u' },
});
const { result } = await evaluateReliance(request, catalog, manifest, profile);
console.log(result.decision); // 'accept' for x = 178
```

## Changes from 0.3.0

0.4.0 removes the v0.3 policy-resolved graph verifier (`verifyCredentialGraph`, the
`legacy` namespace), its policies, contexts, schemas and fixtures, presentation-query
helpers, verifier assessments and the `ecdsa-sd-2023` selective-disclosure path. They
remain available at tag [`v0.3.0`](https://github.com/monavari/VC4QI/tree/v0.3.0).

| 0.3.0 | 0.4.0 |
| --- | --- |
| `verifyCredentialGraph(target, policy, options)` | A reliance request under a verifier-selected binding and profile |
| `CredentialEvidenceReference` with three relations and six basis kinds | Native carriers (`termsOfUse`, `evidence`, `relatedResource`) interpreted by a binding |
| `verified` from zero FAIL results | Separate verification, authorization, support, conformity and a three-state decision |
| Optional proof skipping in demos | Always-on protection |
| Mandatory custom `scopeRef` | A verifier-owned claim-to-record witness |

A credential in the v0.3 format under a v0.4 profile stops at the gate-0 carrier check
(case V02).

Python mirrors the supported semantics and states, routes, records and arithmetic; a
committed parity vector (`bindings/experimental/rm-v1/test-vectors/parity/`) checks that
both languages agree exactly.
