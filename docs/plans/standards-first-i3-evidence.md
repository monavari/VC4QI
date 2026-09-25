# I3 evidence: authority routes and required support

**25 September 2026. I3 step 1 done in both languages: the operational-scope authority
route and the required-study support are evaluated on the signed RM chain.** The legacy
evaluator is still the default. Claim scope coverage and conformity (I4) are not
implemented, so no request is accepted yet. Cycles, global restriction evaluators and a
second signed route are still open (see Limits).

## What was added

| Part | Location | Behaviour |
| --- | --- | --- |
| Exact scope arithmetic | `reliance/rm-scope.ts`, `rm_scope.py` | Decimal strings are compared as exact rationals in kg/kg (mg/kg = 10⁻⁶). Malformed numbers and unknown units are never compared. `containedIn` requires each child record to lie inside **one** complete parent record, with the same matrix, form and quantity kind, a subset of properties and methods, and a range inside the parent's. It returns the matching child ⊆ parent pairs as witnesses |
| Authority routes | `reliance/rm-v1-authority.ts`, `rm_v1_authority.py` | `operational-scope` (D ← O ← A ← anchor) bases: authorizing-reference, principal-binding, self-maintained-scope, activity-permission, maintenance-grant, accreditation-grantee, projection-permission, bounded-projection, trust-anchor. `direct-accreditation` (D ← A ← anchor) bases: authorizing-reference, principal-binding, activity-permission, trust-anchor. An unknown route id is `not_established` (no installed evaluator) |
| Composition | `composeAuthority`, `compose_authority` | Authorized = AND(global restrictions) AND OR(complete routes); each route = AND(its bases). A search stopped by `maxRoutes` never counts as disproving every route (C16) |
| Required support | `certificateSupport`, `certificate_support` | The study must be referenced from `evidence`, cover the same batch, property and matrix, have an established outcome and precede certification. It must also carry its own laboratory authority H (lab-authority reference, laboratory binding, study permission, study scope, anchor for the lab-recognition purpose) |
| Profile | `profiles/rm-verifier-1.json`, `profile.ts`, `profile.py` | New `authority` section: `certificateRoutes` (ordered, verifier-owned), `globalRestrictions` (none configured) and `maxRoutes` |
| Evaluator | `rm-v1-slice.ts`, `rm_v1_artifacts.py` | Follows only `termsOfUse.authorizationCredential.id` and `evidence.id` from the target, within `maxDepth`. A credential is usable = AND(protection, identity, validity, status). Gate 5 records `route:<id>` and `route:<id>:<basis>`; gate 6 records `support:<basis>`. Claim authorization is contradicted when authority is, and otherwise `not_established` until I4 checks the claim's scope. Route witnesses are `route:<id>` plus the chain |
| Schemas | `scripts/rm-v1/build-resources.mjs` | `termsOfUse` (up to 4) and `evidence` are now optional in the certificate, operational-scope and study schemas, so a missing reference can be evaluated rather than rejected at the schema check. Regenerated; the signed fixtures are byte-identical |
| Manifest (V08) | `manifest.json` `discoveryAndIntegrity.independentGrantBinding` | Owner decision: independently discovered grants are **unsupported**. Authority counts only through `termsOfUse` references on the credential chain |
| Test helpers | `tests/rm-v1-helpers.ts`, Python `reissue` | `reissue` re-signs changed credentials and every credential whose `relatedResource` digest pins them, in the order A, H, O, S, D. A mutated chain is therefore tested on its own authority, not masked by an integrity failure |

## Controls (both languages)

| Case | Change | Result |
| --- | --- | --- |
| Baseline | Signed chain unchanged | Every operational-scope basis is established; bounded-projection cites `scope-as-m1 ⊆ scope-as`; support is established with witnesses D, S, H |
| P06 | O granted to the lab | principal-binding contradicted → reject |
| P06 | A names the lab as grantee (chain re-issued) | Integrity holds; accreditation-grantee contradicted → reject |
| P06 | O without a grantee | O contradicted at its schema; authorizing-reference contradicted, and the reason names the missing `id` → reject |
| C08 | A lacks the scope-maintenance activity | projection-permission contradicted → reject |
| Projection | O's range upper bound 600 > A's 500 mg/kg | bounded-projection contradicted |
| Units | O in kg/kg equal to A; then 10⁻¹⁰ wider | established; contradicted |
| V04 | `termsOfUse` type `TrustFrameworkPolicy` | Cannot be signed in safe mode; unsigned D is contradicted at the schema check; authorization `not_established`, no witnesses |
| V05/V08 | D re-signed without `termsOfUse`; A still supplied | authorizing-reference `not_established`; authorization `not_established`; support still established; decision `not_established` |
| V07 | Authentic D197 added to supplied evidence | Same witnesses and decision |
| Anchor | Profile anchor lacks the accreditation purpose | trust-anchor `not_established` |
| C09 | S re-signed without laboratory authority | Support `not_established` |
| C10 | S about another batch (chain re-issued) | same-batch contradicted, laboratory-binding established → reject |
| C11 | S absent | Support `not_established`, decision `not_established` |
| Study scope | H does not cover the study type | study-scope contradicted |
| Timing | Study after certification | study-precedes-certification contradicted |
| C01–C07 | Route composition (unit) | AND within routes, OR between complete routes only, restriction outside the OR, nothing invented without restrictions |
| C16 | Unexplored route; `maxRoutes` 1 with two routes | `not_established` citing the budget; end to end the second route is `not_run` |
| Reissue | Re-sign D unchanged | Byte-identical to the signed fixture |

## Commands and results

```bash
pnpm -C packages/core-ts exec vitest run tests/rm-v1-authority.test.ts tests/rm-v1-slice.test.ts   # 62 passed, exit 0
uv run --locked --all-packages --extra dev pytest packages/core-py/tests/test_rm_v1_authority.py packages/core-py/tests/test_rm_v1_slice.py   # 60 passed, exit 0
pnpm -r build                       # exit 0
pnpm -r --if-present lint           # exit 0
pnpm -C packages/core-ts test       # 353 passed; the 9 network-only legacy failures (w3.org blocked here)
pnpm test:scenarios                 # exit 0
.venv/bin/python -m pytest packages/core-py/tests   # 306 passed, 1 skipped
pnpm validate:schemas               # exit 0
node scripts/rm-v1/build-resources.mjs --check                      # up to date
(cd packages/core-ts && npx tsx scripts/generate-rm-v1-artifacts.ts --check)   # up to date
pnpm -C apps/demo-web build:poster  # exit 0; bundle changes only by the regenerated schemas and manifest
.venv/bin/ruff check packages/core-py; .venv/bin/mypy packages/core-py   # 204 and 198, unchanged
```

A headless Chromium load of `site/m375a/` renders the accepted preview with no console
errors.

Ledger: V04, V05, V07, P06, C08, C09, C10, C11 and C16 are `passing`. V08 is
`excluded_unsupported`. C01–C05 and C07 are still `not_implemented`, with unit-level
composition evidence recorded.

## Limits

- **C01–C06:** the profile installs only the operational-scope route. A signed second
  route fixture (for example direct accreditation, or competence AND scheme
  permission) and an applicable global suspension are needed before these pass on
  signed data. No global restriction evaluator is installed; C06 is composition-only.
- **C12–C15:** RM routes are fixed-depth and type-directed (D → O → A, D → S → H), so no
  required cycle can form on the installed routes. Active-stack cycle detection, shared
  DAG reuse and inert provenance cycles still need implementation and tests.
- **V06:** the RM context defines no derivation term, so a `prov:wasDerivedFrom`-only
  credential cannot be signed in safe mode. A dedicated control is pending.
- Claim scope coverage, conformity and the S cases are I4. Until then, authorization of
  the selected claim is at best `not_established`.
