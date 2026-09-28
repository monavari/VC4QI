# I5 evidence: legacy isolation, migration and the default API

**28 September 2026. I5 steps 1–2 and step 3a done in both languages.**

- Legacy evaluation is reachable only through an explicitly selected, labelled legacy
  profile, with no fallback (V02, V03).
- The shared gate 0–3 pipeline serves every binding.
- The calibration-direct-accreditation use case is migrated to a new signed calibration
  (DCC) binding (S18, S19, S21).
- The calibration-capability and nmi-legal-mandate use cases are migrated to the same
  binding, with an operational-scope route and a statutory-mandate route (step 3a).

Still open in I5: migration of test-report-supported-dcc and gs-scheme-authorization,
keeping both GS application variants, and switching the default API.

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

## Step 3a: calibration-capability and nmi-legal-mandate

Both use cases are migrated to the calibration v1 binding. The generators now also
produce a laboratory operational scope `CAL-O` with certificate `DCC-2`, and a
fictional ministry's statutory mandate `CAL-M` to a national metrology institute with
certificate `DCC-N`. `CAL-A` now also permits maintaining a calibration scope, so
`DCC-1` was re-issued with the new digest.

| Part | Behaviour |
| --- | --- |
| `operational-scope` route | DCC-2 ← O ← CA ← anchor. Bases: typed reference, principal binding, O issued by its own grantee, O permits issuing certificates, O cites CA, CA names O's issuer, CA permits scope maintenance, bounded projection, anchor purpose `accredit-calibration-laboratories`, O and CA in force at the activity time |
| Bounded projection | `calContainedIn` / `cal_contained_in`: each O record lies within one CA record, with the same quantity kind, a subset of its methods and a range inside its range (exact pascals). When the profile applies the CMC floor, O must state a floor that is not below CA's. Claims are covered by O's records only |
| `statutory-mandate` route | DCC-N ← M ← anchor purpose `designate-national-metrology-institutes`. Bases: typed reference, principal binding, activity permission, anchor, M in force at the activity time. No accreditation root is required or configured |
| Profiles | `cal-verifier-capability-1` (operational-scope, NAB anchor) and `cal-verifier-nmi-1` (statutory-mandate, ministry anchor only). `cal-verifier-1` is unchanged |
| Limitations | Every calibration result now states that fixture grants are fictional and have no legal effect |

One profile per use case keeps the decision semantics explicit. Under a profile that
permits all three routes, a contradicted route beside routes with no reference is
`not_established`, not `reject`, because three-valued OR lets a missing route dominate
a contradicted one. A test covers this.

| Case | Input | Result |
| --- | --- | --- |
| Capability | DCC-2 under the capability profile | Accepted; witnesses route, DCC-2, O, CA, `record:O#scope-pressure-low` |
| No widening | O range up to 20 MPa (CA: 10 MPa) | `bounded-projection` contradicted; reject |
| No widening | O CMC 0.3 kPa below CA's 0.5 kPa | Contradicted; accepted when the profile does not apply the floor |
| C08 analogue | CA without `maintainCalibrationScope` | `projection-permission` contradicted; reject |
| No parent fallback | DCC-2 group at 5 MPa (inside CA, outside O) | Coverage on O contradicted; reject |
| Mandate | DCC-N under the NMI profile | Accepted; witnesses route, DCC-N, M, `record:M#scope-pressure-primary`; no accreditation on the path |
| Anchor purpose | Ministry not configured, or configured only to accredit | `trust-anchor` not_established; not_established |
| Principal | M naming another institute | Contradicted; reject |
| Coverage | DCC-N by PressureComparison (M allows PressureBalance) | Contradicted; reject |
| Route OR | All-routes profile: each certificate | Accepted through the route its own references reach |
| Route OR | All-routes profile: CA naming another laboratory | `not_established` (other routes have no reference) |

Step 3a results:

- TS 422 passed plus the 9 network-only legacy failures; Python 392 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, scenarios, schemas, the RM and calibration resource and fixture `--check`
  modes and the RM parity check pass.
- Ledger totals unchanged (66 passing, 2 excluded, 15 not implemented); the migrated use
  cases are recorded here rather than as new ledger rows.
