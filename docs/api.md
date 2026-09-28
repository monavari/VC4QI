# API and migration

VC4QI ships one canonical TypeScript library, `@qi-vc/core` (`packages/core-ts`), and a
Python mirror, `qi_vc_core` (`packages/core-py`). Both are unreleased research code at
version 0.3.0; the new reliance API may still change.

## Two evaluators, side by side

| | Standards-first reliance (new) | Legacy graph verifier |
| --- | --- | --- |
| Entry points (TS) | `evaluateRmSlice`, `evaluateCalSlice`, `evaluateGsSlice` from `@qi-vc/core/reliance/{rm,cal,gs}-v1-slice` | `verifier.verifyCredentialGraph` (default today), or `legacy.evaluateLegacyProfile` |
| Entry points (Python) | `evaluate_rm_slice` in `qi_vc_core.reliance.rm_v1_artifacts`, `evaluate_cal_slice` in `…cal_v1`, `evaluate_gs_slice` in `…gs_v1` | `verify_credential_graph`, or `qi_vc_core.legacy.evaluate_legacy_profile` |
| Input | A reliance request plus a binding manifest and a verifier profile | Target credential, policy and resolver options |
| Output | `RelianceResult`: separate verification, authorization, support, conformity and decision, with trace and witnesses | `verified` from a zero FAIL count, plus a legacy trace |
| Credentials | The signed experimental bindings in `bindings/experimental/` | The legacy examples in `testdata/examples/` |

The default entry point is still the legacy verifier. Switching the default is the last
step of phase I5 and will be a breaking change (drafted as version 0.4.0).

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
import { readFileSync } from 'node:fs';
import { reliance } from '@qi-vc/core';
import { evaluateRmSlice } from '@qi-vc/core/reliance/rm-v1-slice';
import { readPinnedResources } from '@qi-vc/core/reliance/rm-v1-node';

const dir = 'bindings/experimental/rm-v1/';
const manifest = reliance.loadBindingManifest(JSON.parse(readFileSync(dir + 'manifest.json', 'utf8')));
const profile = reliance.loadRelianceProfile(JSON.parse(readFileSync(dir + 'profiles/rm-verifier-1.json', 'utf8')));
const catalog = new reliance.StaticResourceCatalog([
  ...readPinnedResources(dir + 'catalog.json'),
  ...readPinnedResources(dir + 'test-vectors/signed/catalog.json'),
]);
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
const { result } = await evaluateRmSlice(request, catalog, manifest, profile);
console.log(result.decision); // 'accept' for x = 178
```

## Legacy profile

`legacy.evaluateLegacyProfile(target, policy, options)` (Python
`qi_vc_core.legacy.evaluate_legacy_profile`) runs the v0.3 graph verifier on the
original signed bytes. It refuses `skipProof` and `skipStatus`, and returns a result
labelled with the legacy profile (`legacy-qi-vc-graph` 0.3), never a reliance result.
The standards-first evaluators never fall back to it: a legacy credential under a new
profile stops at the gate-0 carrier check.

## What changes, and how

| Legacy surface | Standards-first replacement |
| --- | --- |
| `verifyCredentialGraph(target, policy, options)` | A reliance request under a verifier-selected binding and profile |
| `CredentialEvidenceReference` with three relations and six basis kinds | Native carriers (`termsOfUse`, `evidence`, `relatedResource`) interpreted by a binding |
| `verified` from zero FAIL results | Separate verification, authorization, support, conformity and a three-state decision |
| Optional proof skipping in demos | Always-on protection; simulation is labelled as such |
| Credential-ID graph edges | Artifact identity plus context-specific node-uses and route and record witnesses |
| Mandatory custom `scopeRef` | A verifier-owned claim-to-record witness |
| Legacy policy and presentation-query paths | Profile-derived paths; a query match alone is never reliance |

The transition runs in this order:

1. New types and signed slices alongside the legacy runtime (done, I1–I4).
2. Legacy fixtures and tests kept in a clearly labelled lane (done).
3. Migrated credentials regenerated from generators, never edited with old proofs kept
   (done for all base use cases, I5 steps 2–3).
4. Legacy evaluation only through the explicit legacy profile, with no fallback (done,
   I5 step 1).
5. Switch the default, and migrate policies, examples, queries and demo consumers
   together (next, I5 step 4).

Python mirrors the supported semantics and states, routes, records and arithmetic; a
committed parity vector (`bindings/experimental/rm-v1/test-vectors/parity/`) checks that
both languages agree exactly. Python evaluates TS-derived selective-disclosure subsets
semantically only; it does not verify SD cryptography.

No release, tag or DOI is claimed. Existing citation metadata describes the historical
v0.3.0.
