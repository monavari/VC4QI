# I5 evidence: legacy isolation, migration and the default API

**28 September 2026. I5 step 1 done in both languages: legacy evaluation is reachable
only through an explicitly selected, labelled legacy profile, and a legacy credential
under the standards-first profile is unsupported with no fallback.** Still open in I5:
the migrated calibration (DCC) binding (S18, S19, S21), migration of the remaining
base use cases, and switching the default API.

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
