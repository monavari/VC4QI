# I3 evidence: authority routes and required support

**25 September 2026. I3 steps 1 and 2 done in both languages: two authority routes, a
global suspension restriction and the required-study support are evaluated on the
signed RM chain.** The legacy evaluator is still the default. Claim scope coverage and
conformity (I4) are not implemented, so no request is accepted yet. Cycles (C12–C15)
and V06 are still open (see Limits).

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

## Step 2: second signed route and the global suspension restriction

| Part | Location | Behaviour |
| --- | --- | --- |
| Typed references | `build-resources.mjs` (authorization-policy schema), `rm-v1-authority.ts`, `rm_v1_authority.py` | `termsOfUse[].authorizationCredential` is `{id, type}`. A route selects its reference by the declared type, so an unavailable or unusable reference still belongs to exactly one route; the resolved credential must have the declared type, otherwise the reference is contradicted |
| Second accreditation A2 | generator, `credentials/A2.json` | NAB grants the producer RM certification directly (no scope maintenance). D178 does not reference it, so it confers nothing there (V07) |
| Suspension status | generator, `status/nab-suspension.json`, `status-list.ts`, `status_list.py` | NAB accreditations carry two Bitstring entries, `revocation` and `suspension` (VCDM 2.0 array). Gate 3 selects the single entry for the profile's purposes (revocation); suspension entries are read only by the restriction. Status wording follows the purpose |
| `accreditation-suspension` | `rm-v1-authority.ts`, `rm_v1_authority.py`, both profiles | Applies to every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's `termsOfUse` references, on any route and whether or not that route succeeds. Each needs a fresh suspension status from its issuer with the bit clear; a missing or unreadable one is `not_established`. It sits outside the OR, so another route cannot bypass it |
| Two-route profile | `profiles/rm-verifier-two-routes-1.json` | Fictional: (operational scope within A) OR (direct accreditation), plus the restriction. The default profile keeps the single operational-scope route and gains the restriction |
| Decisive verification | `rm-v1-slice.ts`, `rm_v1_artifacts.py` | Only the target and the credentials on the selected route and support chains decide the request. A failed credential on an unused alternative is reported but diagnostic (C03, C07); when nothing is established, failures still decide through the route and support states |
| Trace | same | Gate 5 now records `authority` (the composed result) and `route:<id>` for each executed route, besides each basis and restriction |

Controls (both languages, two-route profile unless noted):

| Case | Change | Result |
| --- | --- | --- |
| C01 | D re-issued citing O and A2 | Both routes established; restriction covers A and A2 and holds; authority established |
| C02 | O without its accreditation reference (default profile) | maintenance-grant `not_established`; route and authority `not_established` |
| C03 | O granted to the lab; D cites A2 too | operational-scope contradicted, direct-accreditation established; authority established with witnesses `route:direct-accreditation`, D, A2; no reject |
| C04 | O and A2 granted to the lab | Both routes contradicted → reject |
| C05 | O granted to the lab; A2 unavailable | Contradicted + unresolved → `not_established` |
| C06 | A2's suspension bit set; operational route complete | Restriction contradicted ("A2: Suspended") → reject. Also with A suspended under the default profile |
| C07 | A2's revocation bit set | Direct route contradicted; restriction holds; authority established; A2's failure does not reject |
| Status | Suspension list unavailable | Restriction and authority `not_established` |
| Typing | D's O reference retargeted to A2 | authorizing-reference contradicted ("declares RmOperationalScope") |

Regenerated: schemas and catalog, signed fixtures (A, O, S, D178/197/520 bytes change
through typed references and A's suspension entry; A2 and the suspension list are new),
and the poster bundle, which still verifies and renders "Accepted" in headless Chromium.

Step 2 results: ledger command 72 TS and 70 Python tests, exit 0; TS 363 passed plus the
9 network-only legacy failures; Python 316 passed, 1 skipped; Ruff 204 and mypy 198
unchanged; build, lint, scenarios, schemas and both generator checks pass.

## Commands and results (step 1)

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

Ledger after step 1: V04, V05, V07, P06, C08–C11 and C16 `passing`; V08
`excluded_unsupported`. After step 2, C01–C07 are also `passing` (31 passing in total).

## Limits

- **Restriction discovery:** the suspension restriction sees only accreditations the
  chain references. A suspension of an accreditation nothing references is not
  discovered (consistent with V08). The fixture routes are the RM binding's
  illustrative profile, not a GS or legal rule.
- **C12–C15:** RM routes are fixed-depth and type-directed (D → O → A, D → S → H), so no
  required cycle can form on the installed routes. Active-stack cycle detection, shared
  DAG reuse and inert provenance cycles still need implementation and tests.
- **V06:** the RM context defines no derivation term, so a `prov:wasDerivedFrom`-only
  credential cannot be signed in safe mode. A dedicated control is pending.
- Claim scope coverage, conformity and the S cases are I4. Until then, authorization of
  the selected claim is at best `not_established`.
