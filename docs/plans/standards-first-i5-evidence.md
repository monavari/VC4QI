# I5 evidence: legacy isolation, migration and the default API

**28 September 2026. I5 steps 1–2 done in both languages.**

- Legacy evaluation is reachable only through an explicitly selected, labelled legacy
  profile, with no fallback (V02, V03).
- The shared gate 0–3 pipeline serves every binding.
- The calibration-direct-accreditation use case is migrated to a new signed calibration
  (DCC) binding (S18, S19, S21).

Still open in I5: migration of the remaining base use cases and switching the default
API.

## Step 1: explicit legacy profile (V02, V03)

| Part | Location | Behaviour |
| --- | --- | --- |
| Legacy adapter | `packages/core-ts/src/legacy/index.ts` (exported as `legacy`), `qi_vc_core/legacy` | `evaluateLegacyProfile(target, policy, options)` runs the v0.3 graph verifier on the **original secured representation**: `skipProof` and `skipStatus` are refused. The result is a `LegacyEvaluation`, not a reliance result: profile `legacy-qi-vc-graph` 0.3 with `label: legacy`, a decision under legacy semantics (any FAIL rejects; the verifier's own `verified` accepts; otherwise not established), the unmodified legacy trace and explicit limitations. No gate trace or witnesses are claimed |
| No fallback | `rm-v1-slice.ts`, `rm_v1_artifacts.py` (unchanged) | The standards-first evaluator never calls the legacy verifier. A legacy credential stops at the gate-0 carrier check |
| Test helper | Python `catalog_with` | Like the TS helper, adds URIs that are not in the pinned sets as extra resources |

| Case | Input | Result |
| --- | --- | --- |
| V02 | Legacy calibration target under the RM v1 profile | Carrier `not_established` ("exact supported context combination"); claim `not_established`, no witnesses; decision `not_established`; no legacy output in the result |
| V03 | GS hair-dryer graph under the legacy profile | 7 real proofs verified; accepted and labelled legacy with limitations |
| V03 | Placeholder-proof calibration graph under the legacy profile | The placeholder proof is never valid; not accepted |
| V03 | `skipProof` / `skipStatus` requested | Refused |

Step 1 results: TS 402 passed plus the 9 network-only legacy failures; Python 369
passed, 1 skipped; Ruff 204 and mypy 198 unchanged; build, lint, scenarios, schemas and
the poster build pass. Ledger: V02 and V03 `passing` (63 passing, 2 excluded, 18 not
implemented).

## Step 2: shared gate 0–3 pipeline and the calibration binding (S18, S19, S21)

**2a, refactor with no behaviour change.**

- Plan refusal, bounded resolution and reference following, protection, identity,
  validity, credential and suspension status, node facts and the per-artifact trace
  moved out of the RM slice into `reliance/binding-chain.ts` (`verifyChain`,
  `planRefusal`, `refusePlan`). The Python counterparts are `verify_chain`,
  `plan_refusal` and `refuse_plan`.
- The artifact verifier takes an optional `ArtifactBinding` (types, schemas, contexts).
- All RM tests and the byte-exact parity vector pass unchanged in both languages.

**2b, the calibration v1 binding** (`bindings/experimental/cal-v1`).

| Part | Behaviour |
| --- | --- |
| Artifacts | A signed `CalAccreditation` CA (NAB → laboratory, pressure 0–10 MPa, method PressureComparison, CMC 0.5 kPa) and a signed `CalCertificate` DCC-1 with two measurement groups; typed `CalAuthorizationPolicy` reference; Bitstring status |
| Gate 4 | Each result maps to exact pascals (Pa, kPa, MPa; k = 2 only); anything else is `not_established` |
| Gate 5 route | Direct accreditation via shared route helpers: typed reference, principal binding, activity permission, anchor purpose `accredit-calibration-laboratories`, accreditation in force at the certificate's activity time |
| Gate 5 coverage | One complete record must cover the group's quantity kind, every method it names and every result's range; with `bindingRules.applyCmcFloor`, no expanded uncertainty may be below the CMC floor. A record restricting methods against a group naming none is `not_established` |
| Claims | Each selected measurement group is a separate required claim; the decision is their conjunction |
| Profile | `bindingRules` is a new optional, frozen profile section (both languages); the calibration evaluator refuses a profile that does not state `applyCmcFloor` |

| Case | Input | Result |
| --- | --- | --- |
| Use case | DCC-1 with both groups | Accepted; witnesses route, DCC-1, CA, `record:CA#scope-pressure` |
| Principal | CA naming another laboratory | `principal-binding` contradicted; reject |
| Method | Group names DeadWeightTester | Contradicted; reject |
| Gate 4 | k = 3 | `not_established` |
| S18 | Group names no method (empty or missing) | `not_established` ("names no governed method") |
| S19 | g1 at 15000 kPa, g2 valid | Claims [contradicted, established]; reject |
| S21 | g1 U = 0.3 kPa < CMC 0.5 kPa | Contradicted, no conformity involved; accepted when the profile does not apply the floor |

Step 2 results:

- TS 410 passed plus the 9 network-only legacy failures; Python 378 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, scenarios, schemas, the RM and calibration resource and fixture `--check`
  modes, the RM parity check and the poster build (unchanged) pass.
- Ledger: S18, S19 and S21 `passing` (66 passing, 2 excluded, 15 not implemented).
