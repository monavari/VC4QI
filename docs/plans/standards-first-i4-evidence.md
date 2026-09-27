# I4 evidence: claim scope coverage, conformity and first acceptance

**27 September 2026. I4 complete in both languages: the new evaluator maps the
selected result (gate 4), covers it with one complete scope record on each route
(gate 5), checks conformity separately (gate 6) and applies the current-reliance time
rules. The signed chain for x = 178 is accepted, and a committed parity vector shows
that TypeScript and Python agree exactly.** The legacy evaluator is still the default
API (switched in I5).

## What was added

| Part | Location | Behaviour |
| --- | --- | --- |
| Claim mapping (gate 4) | `reliance/rm-v1-claims.ts`, `rm_v1_claims.py` (`mapClaim`) | The selected result becomes governed coordinates: matrix and form from the single material, property, method, quantity kind, and exact kg/kg value and expanded uncertainty. Only mg/kg and kg/kg map; k must be exactly 2; a missing identifier is named. Anything else is `not_established` at gate 4 |
| Claim coverage (gate 5) | `claimCoverage`, `claimAuthority` (`rm-v1-authority.ts`) | Per route, against that route's own scope credential only: O for operational-scope, A for direct-accreditation. Never falls back to a parent grant (S07). One record must cover every dimension (matrix, form, quantity kind, property, method, inclusive range). Records are alternatives (OR), never spliced. A reversed range is invalid (contradicted); an unreadable one is `not_established`. The claim is authorized as AND(restrictions) AND OR(route AND coverage) |
| Method succession | manifest `scopeAndMapping.methodRevisions`; profile `mapping.methodSuccession` | The binding declares the vocabulary fact that M2 revises M1. The verifier profile chooses `accept-successor`, `require-extension` or `none`; `none` leaves the claim `not_established` with the missing rule named. A method with no declared revision is simply not allowed |
| Conformity (gate 6) | `evaluateConformity`; profile `conformity.requirements`, `conformity.decisionRules` | Requirements (property, quantity kind, upper limit) and decision rules (simple acceptance, or guard band w = U) are verifier-owned and selected by id. Conformity runs only for an authorized claim and applies to exactly one selected claim. Arithmetic is exact and shown in the requirement's unit, so mg/kg and kg/kg inputs give the same witness |
| Witnesses | `rm-v1-slice.ts`, `rm_v1_artifacts.py` | The claim witness is `route:<id>`, the route chain and `record:<covering record>`. The support witness is the D, S, H chain. The conformity reason carries the arithmetic. Trace: `claim-mapping:<claim>` (gate 4), `claim-coverage:<claim>:<route>` (gate 5), `conformity:<requirement>` (gate 6) |
| Profiles | `profiles/rm-verifier-1.json`, `rm-verifier-two-routes-1.json` | `mapping.methodSuccession: none`; requirement `as-mass-fraction-max-200-mg-per-kg`; rules `guarded-acceptance-expanded-u` and `simple-acceptance`. Missing sections are never defaulted |
| Scope arithmetic | `rm-scope.ts`, `rm_scope.py` | A reversed child interval in a bounded projection is now contradicted (invalid data), not merely unknown |

## Controls (both languages, signed and re-issued with the fixture keys)

| Case | Input | Result |
| --- | --- | --- |
| S01 / P01 / V01 | x = 178, U = 5 | Covered by `O#scope-as-m1`; "178 + 5 = 183 ≤ 200 mg/kg"; **accept** with witnesses route, D, O, A, record; support D, S, H |
| S02 | D197 | Authorized; "197 + 5 = 202 > 200 mg/kg"; reject for the rule. Authorization-only: accept |
| S03 | D520 | "value is above the range"; conformity not run; reject |
| S04 | x = 195 | "195 + 5 = 200 ≤ 200 mg/kg"; accept (inclusive limit) |
| S05 | x = 500, authorization only | Accept (inclusive upper endpoint) |
| S06 | x = 49.9; x = 50 | Below range, reject; lower endpoint accepted |
| S07 | M2 against O = {M1}, A = {M1, M2} | Checked against O only; `not_established` ("no governed M1 → M2 succession rule") |
| S08 | Same, three profiles | accept-successor: accept; require-extension: contradicted; none: `not_established`. Unrevised M3: contradicted |
| S09 | Records As/M1 and Pb/M3; claim As/M3 | Contradicted; no synthetic record |
| S10 | Form, matrix and property split across records | Contradicted; "No single scope record covers the claim" |
| S11 | Claims As and Pb, each with its own record | Both established with different record witnesses; accept |
| S12 | O 100–400 over A records 50–300 and 300–500 | Projection contradicted; no union |
| S13 | O lower bound 40 below A's 50 | Projection contradicted |
| S14 | Unit ppm; k = 3 | Schema refuses ppm (reject); k = 3 not mapped at gate 4 |
| S15 | 0.000178 kg/kg, U 0.000005 kg/kg | Same decision, record and arithmetic as mg/kg |
| S16 | U = NaN, Infinity, -5; reversed scope 500–50 | Schema refusal; reversed range contradicted; reject |
| S17 | As/Ash, CuZn39Pb3/CuZn40Pb2, M1/M1a | Contradicted by exact identifiers |
| S20 | Missing or empty scope endpoint | Never a successful containment or accept |
| S22 | U = 40 | Authorized (no ceiling); fails only the rule, "178 + 40 = 218 > 200" |
| S23 | Asymmetric uncertainty member | TS safe mode refuses to sign it; the closed schema refuses it (reject); never symmetrized |
| S24 | No claims; claim on a missing result | Request validation refuses empty claims; missing result `not_established` |
| Profile | Unknown requirement id | Conformity `not_established` |

Earlier tests that asserted "never accept" were updated to the new behaviour: P01
accept, C03 and C07 accept, P15 accept/reject/accept, and the clean status chain accept.

## Step 2: time rules and cross-language parity

| Part | Location | Behaviour |
| --- | --- | --- |
| Historical question (P13) | `status-list.ts`, `status_list.py` | A status list observed at T says nothing about an earlier activity. When the request's `activityTime` precedes the list's `validFrom`, status is `not_established` ("historical status is unavailable"); current status is never substituted (handover §7.3) |
| Scope in force at the activity (P14) | `rm-v1-authority.ts`, `rm_v1_authority.py` | Each route adds `scope-in-force-at-activity`: the certificate's own `activityTime` must fall within the validity of every grant on the route (O and A; A for direct accreditation). Scope evidence issued after the activity cannot authorize it, even if it covers the claim today |
| Parity vector | `scripts/generate-rm-v1-parity.ts`, `tests/rm-v1-parity.ts`, `test-vectors/parity/i4-outcomes.json`, `test_rm_v1_parity.py` | Eight scenarios over the signed fixtures (178, 197, 520 with the guarded rule; 197 authorization-only and under simple acceptance; an unknown requirement; a historical question; the two-route profile). Each records the decision, claim states and witnesses, support, conformity reasons with arithmetic, and every gate 4–6 trace entry with its reason. Both languages must reproduce the file exactly; a tampered expectation is detected |

| Case | Input | Result |
| --- | --- | --- |
| P13 | `activityTime` 2026-03-01, lists observed 2026-09-01 | Status `not_established`; decision `not_established`. The current question is accepted |
| P14 | O valid only from 2026-01-25; D's activity 2026-01-20 | Projection still established; `scope-in-force-at-activity` `not_established`; claim and decision `not_established` |
| Baseline | D178 | "O and A were in force at the activity time 2026-01-20" |

Step 2 results: ledger command 107 TS and 118 Python tests, exit 0; TS 398 passed plus
the 9 network-only legacy failures; Python 364 passed, 1 skipped; Ruff 204 and mypy 198
unchanged; build, lint, scenarios, schemas, the resource, fixture and parity `--check`
modes, and the poster build pass. Ledger: P13 and P14 `passing`; 61 passing, 2
excluded, 20 not implemented.

## Commands and results (step 1)

```bash
pnpm -C packages/core-ts exec vitest run tests/rm-v1-claims.test.ts tests/rm-v1-authority.test.ts tests/rm-v1-slice.test.ts   # 103 passed
uv run --locked --all-packages --extra dev pytest packages/core-py/tests/test_rm_v1_claims.py packages/core-py/tests/test_rm_v1_authority.py packages/core-py/tests/test_rm_v1_slice.py   # 107 passed
pnpm -r build; pnpm -r --if-present lint; pnpm test:scenarios; pnpm validate:schemas   # exit 0
pnpm -C packages/core-ts test        # 394 passed; the 9 network-only legacy failures (w3.org blocked here)
.venv/bin/python -m pytest packages/core-py/tests   # 353 passed, 1 skipped
node scripts/rm-v1/build-resources.mjs --check; (cd packages/core-ts && npx tsx scripts/generate-rm-v1-artifacts.ts --check)   # up to date
.venv/bin/ruff check packages/core-py; .venv/bin/mypy packages/core-py   # 204 and 198, unchanged
pnpm -C apps/demo-web build:poster   # exit 0; bundle changes only by the manifest
```

Ledger: V01, P01, S01–S17, S20, S22–S24 `passing` (S18, S19 and S21 are DCC cases for
I5). Totals: 59 passing, 2 excluded, 22 not implemented.

## Limits

- **Time:** the baseline answers current-reliance questions. A historical question is
  refused rather than answered; authenticated historical status is not implemented.
- **Poster page:** the page still runs the repository's artifact verifier plus a labelled
  preview of gates 4–6. The real evaluator uses Node zlib for status lists; moving it
  into the browser bundle is a separate task.
- **S23:** asymmetric uncertainty is refused because the binding's schema and context do
  not define it, not by a dedicated "unsupported" state. Python signs the undefined term
  (PyLD has no safe mode) and refuses it at verification.
