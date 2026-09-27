# I4 evidence: claim scope coverage, conformity and first acceptance

**27 September 2026. I4 step 1 done in both languages: the new evaluator maps the
selected result (gate 4), covers it with one complete scope record on each route
(gate 5) and checks conformity separately (gate 6). The signed chain for x = 178 is
accepted.** The legacy evaluator is still the default API (switched in I5). Historical
time rules (P13, P14) are still open.

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

## Commands and results

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

- **P13, P14 (time):** a historical reliance question and an activity that predates its
  scope evidence are not yet distinguished from a current question. Step 2.
- **Poster page:** the page still runs the repository's artifact verifier plus a labelled
  preview of gates 4–6. The real evaluator uses Node zlib for status lists; moving it
  into the browser bundle is a separate task.
- **S23:** asymmetric uncertainty is refused because the binding's schema and context do
  not define it, not by a dedicated "unsupported" state. Python signs the undefined term
  (PyLD has no safe mode) and refuses it at verification.
