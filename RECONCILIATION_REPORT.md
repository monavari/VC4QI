# Reconciliation Report — Part A (Phases 1–5)

**Branch**: `refactor/manuscript-v2.1`  
**Date**: 2026-06-08  
**Manuscript version**: v2.1

## Summary

All Part A phases (1–5) are complete. All 105 TypeScript tests and 96 Python
tests pass. No TODOs were escalated.

## Phase 1 — Type definitions and edge modules

- `EvidenceRelation` reduced to 3 bare tokens: `authorizedBy`, `derivedFrom`, `supportedBy`.
- `EvidenceRole` type deleted; `role` field removed from `CredentialEvidenceReference`,
  `EvidenceEdge`, `RequiredEvidence`, and all policy evaluation code.
- `AuthorizationBasisKind` reduced to 6 bare tokens: `accreditation`, `legalMandate`,
  `notification`, `schemeAuthorization`, `recognition`, `operationalScope`.
- Deleted TypeScript edge modules: `evaluateRecognizedBy.ts`, `evaluateNotifiedBy.ts`,
  `evaluateStatusProvidedBy.ts`.
- Deleted Python edge modules: `recognized_by.py`, `notified_by.py`, `status_provided_by.py`.
- `evaluateEdge.ts` and `evaluate.py` updated to dispatch on 3 relations only.
- `normalizeEvidence.ts` and `normalize.py` updated: removed role validation,
  added `supportedBy` → must not carry `authorizationBasis` check.

## Phase 2 — JSON-LD context and schemas

- `contexts/v1/qi-evidence-context.jsonld` rewritten per §1.5:
  - `@type: @vocab` on `relation` and `kind` so bare tokens expand to full IRIs.
  - Bare-token aliases for all 3 relations and 6 basis kinds.
  - Removed `role`, `recognizedBy`, `notifiedBy`, `statusProvidedBy`.
- `contexts/v1/qi-core.jsonld`, `qi-rm.jsonld`, `qi-calibration.jsonld`: removed `role`.
- `schemas/v1/_shared/common.json`:
  - `EvidenceRelation` enum: 3 bare tokens.
  - `AuthorizationBasisKind` enum: 6 bare tokens.
  - `EvidenceRole` definition deleted.
  - `CredentialEvidenceReference`: `required` array updated; added `allOf` to enforce
    `supportedBy` must not carry `authorizationBasis`.
- All testdata JSON files: stripped `qi:` prefix, removed `role` fields,
  replaced `capability` with `operationalScope`.
- All `digestSRI` values recomputed after content changes.

## Phase 3 — Dead-branch removal

No additional dead branches found beyond what was removed in Phase 1.

## Phase 4 — Fixture regeneration (Profile B)

- `scripts/generate-v02-fixtures.js` updated:
  - `RM_PRODUCER`: `did:web:rm-producer.example` (was `did:web:rm.example`).
  - `evidenceRef()`: removed `role` parameter.
  - All fixtures use bare tokens.
  - `referenceMaterial()` rewritten with Profile B canonical values:
    matrix CuZn39Pb3 brass, property As (arsenic), value 178 mg/kg, U=5 mg/kg, k=2.
  - OperationalScope self-issued by `RM_PRODUCER`.
  - Trust registry: `RM_PRODUCER` → `operationalScope`; NAB → `accreditation`.
  - `accreditation()` builder: `validUntil` made configurable (default `2029-01-01`).
    Fixed a validity-window violation where `opScope.validUntil > acc.validUntil`.
- Generator rerun; fixtures regenerated including updated `digestSRI` values.

## Phase 5 — Documentation

- `docs/VOCABULARY.md`: updated to reflect 3 relations and 6 basis kinds; removed
  `qi:` prefix from all token references; added tables.
- `docs/IMPLEMENTATION_STATUS.md`: added v0.3 section, removed "being refactored" language.
- `CHANGELOG.md`: added `v0.3.0` entry with full breaking-change list.
- `docs/adrs/adr-008-three-relations-no-role.md`: new ADR documenting the decision.

## Issues encountered

| Issue | Resolution |
| --- | --- |
| Tests failed after Phase 1 due to `qi:` prefixed values in fixture JSON | Stripped prefix from all testdata with `sed`; recomputed digests |
| `DIGEST_MISMATCH` after removing `role` fields from fixtures | Recomputed all `digestSRI` values via inline Node.js script |
| Trust registry listed `"capability"` not `"operationalScope"` | Updated fixture; generator now uses `operationalScope` |
| `VALIDITY_WINDOW_VIOLATION`: OperationalScope expired after Accreditation | Extended `accreditation()` builder default `validUntil` to `2029-01-01`; regenerated |

## Acceptance check

```text
✓ 105 TypeScript tests (pnpm vitest run in packages/core-ts)
✓ 96 Python tests (python3 -m pytest in packages/core-py)
✓ No escalated TODOs
✓ All Phase 1–5 items complete
```

---

## Part B — Phase 6 (Selective disclosure / G2)

Status: **COMPLETE.** G2 is implemented end-to-end: an `ecdsa-sd-2023`-secured RM
credential is derived to a disclosed subset and that subset verifies (and tamper-
fails); the existing `eddsa-rdfc-2022` path is unchanged. Full suites green —
**112 TS tests** (was 104) and **101 Python tests** (was 96), schemas + scenarios
pass. The two decisions that briefly blocked fixtures (cryptosuite choice; a
JSON-LD context conflict with W3C VC 2.0) are both resolved and recorded below.

## D-SD decisions taken

| Decision | Resolution | Notes |
| --- | --- | --- |
| **D-SD-1** disclosable fields | Mandatory: issuer, validity, credentialSchema, subject id, administrativeData (coreData/validity), producer **id+name**, materials, materialPropertiesList (property + value + unit + uncertainty + scopeRef), and the `evidence[]` edges. Selectively disclosable: producer **contact `location`** and **`respPersons`** (certifying committee). | Real values from BAM-M375a (Cu/Pb/As). Encoded as `MANDATORY_POINTERS` in `gen-sd-fixtures.ts`. |
| **D-SD-2** cryptosuite | **RESOLVED: `ecdsa-sd-2023` (no BBS).** Institutional holders have no anti-correlation need; ECDSA Cryptosuites is a finished W3C Recommendation (BBS is still Candidate-Rec); P-256 aligns with HSM/qualified-seal (§8.5) where BLS12-381 does not; same Data Integrity family as the existing `eddsa-rdfc-2022`. BBS noted as a future option only if an individual-level/anti-correlation use case appears. | `sd.ts` still isolates the cryptosuite to a single swap point should that ever change. |
| **D-SD-3** issuer key | Add a P-256 multikey `did:web:rm-producer.example#key-2` alongside the Ed25519 `#key-1`. Verifier dispatches on `proof.cryptosuite`; Ed25519/eddsa-rdfc-2022 path untouched. | Deterministic frozen key embedded in the generator (DB lib has no seeded gen). |
| **D-SD-4** Python parity | Python **verifies the derived disclosed subset at the kernel level only** (graph/policy/scope), consuming the TS-derived fixture. Python does **not** implement or cryptographically verify SD. | `TODO(human)`: Python SD cryptographic verification is out of scope (no Python SD lib; would violate the dependency policy). |
| **D-SD-5** disclosure obligations (B4) | Docs-only. Holder selective disclosure operates **beneath** any lawful full-record access obligation; SD is privacy minimization for routine verification, not a way to evade regulatory full disclosure. | To be added to the Phase-6 docs note. |

## What is implemented (and verified working)

- **Dependencies (TS only):** `@digitalbazaar/ecdsa-sd-2023-cryptosuite`,
  `@digitalbazaar/data-integrity`, `@digitalbazaar/ecdsa-multikey`, plus
  `jsonld-signatures` (the required driver for the above — a 4th SD-only dep,
  approved). No VC/DID framework added elsewhere.
- **`packages/core-ts/src/proofs/sd.ts`** — `generateSdKey` / `issueSd` /
  `deriveSd` / `verifySd` over `ecdsa-sd-2023`. Sits alongside the hand-rolled
  `eddsa-rdfc-2022` in `proofs/index.ts`; does not touch it.
- **`packages/core-ts/src/proofs/digitalbazaar.d.ts`** — minimal ambient types
  for the (untyped) DB packages.
- **Verifier dispatch** — `verifier/index.ts` branches on `proof.cryptosuite`;
  `ecdsa-sd-2023` → `verifySd`; everything else → existing Ed25519 path. Added
  option `sdDocumentLoader`.
- **Document loader** — `utils/document-loader.ts` now serves vendored
  `credentials/v2`, `security/multikey/v1`, and `qi-evidence-context` locally
  (`contexts/v1/vendor/`) for deterministic, offline SD operations.
- **Generator** — `packages/core-ts/scripts/gen-sd-fixtures.ts` (real BAM-M375a
  values; writes base + derived fixtures, vm/controller docs, Python parity
  fixture). Runs end-to-end.
- **Fixtures** — `examples/rm/reference-material-certificate.sd.json` (base),
  `…sd-derived.json` (disclosed subset, personnel withheld),
  `rm-producer-key.jsonld` + `rm-producer-controller.jsonld` (resolver docs),
  `packages/core-py/tests/fixtures/sd_derived_credential.json` (Python parity).
- **Tests** — `packages/core-ts/tests/sd.test.ts` (8): base proof is
  `ecdsa-sd-2023`; mandatory disclosed / personnel withheld; As 178 ± 5 mg/kg +
  scopeRef survive; disclosed subset verifies; tamper fails; verifier dispatch
  PASS/FAIL; fresh-key issue→derive→verify round-trip.
  `packages/core-py/tests/test_sd_parity.py` (5): kernel runs over the disclosed
  subset, edge classified `authorizedBy`/`operationalScope`, SD crypto ignored.
- **Provenance** — `examples/rm/source/BAM_M375a.xml` + `README.md`.
- **Docs** — `docs/SELECTIVE_DISCLOSURE.md`, `docs/MODEL_SPEC.md`,
  `docs/adrs/adr-009-selective-disclosure-ecdsa-sd-2023.md`, and
  `docs/PAPER_FEEDBACK.md` (the VC 2.0 context findings).

## Resolved decisions that briefly blocked fixtures

1. **JSON-LD context conflict with W3C VC 2.0 — RESOLVED (and fed back to the
   paper).** `ecdsa-sd-2023` canonicalizes in JSON-LD **safe mode**, which rejected
   `contexts/v1/qi-rm.jsonld` because it shadowed the W3C-protected terms
   `digestSRI` / `digestMultibase` (already standardized in credentials/v2) and
   `name` / `description` (schema.org). The legacy `eddsa-rdfc-2022` path hid this
   by running safe mode off. **Fix:** drop those redefinitions and inherit the W3C
   definitions — the standards-aligned reading. `qi-rm.jsonld` now expands clean in
   safe mode with zero dropped terms; the existing eddsa RM fixture + RM schema
   still validate. Same shadowing remains in `qi-core`/`qi-calibration` (not
   SD-signed, non-blocking) — see `docs/PAPER_FEEDBACK.md` F-1..F-3.

2. ~~D-SD-2 cryptosuite confirmation~~ — **RESOLVED**: `ecdsa-sd-2023` (no BBS).

## Context cleanup (F-1/F-2 across all contexts) — DONE

All three contexts (`qi-rm`, `qi-core`, `qi-calibration`) are now VC-2.0-aligned:
the `digestSRI` / `digestMultibase` shadows are removed everywhere, and
`qi-calibration` also drops its `name` / `description` / `issuer` shadows. Verified:
a DCC round-trips issue→derive→verify under `ecdsa-sd-2023`, so every QI credential
type — not just the RM certificate — is SD-ready. Schemas, scenarios, and both full
suites stay green (112 TS / 101 Python). See `docs/PAPER_FEEDBACK.md` F-1..F-3.

## Handoff scaffolding (for Sonnet / Codex)

To enable continuation on a cheaper model, the following landing spots were added
(all non-breaking; suites stay green with the new tests skipped):

- **`AGENTS.md`** — refreshed with the locked decisions (three relations, no
  `role`, six basis kinds, `ecdsa-sd-2023` not BBS, Python = kernel parity only),
  the JSON-LD safe-mode rule, the SD-only dependency exception, and pointers to
  `docs/MODEL_SPEC.md` (spec wins on disagreement) and this report.
- **Python SD scaffold** — `packages/core-py/qi_vc_core/proofs/sd.py` exposes
  `verify_sd(...)` raising `NotImplementedError` with `SD_SUPPORTED = False` and a
  `TODO(human)`; contract pinned by `packages/core-py/tests/test_sd_scaffold.py`
  (one xfail-style skipped test for the future impl).
- **Phase 7 (Profile D) skeleton** — `testdata/examples/gs-profile-d/` with
  structurally-correct stub fixtures (GS cert → issuing-scope VC that carries one
  `derivedFrom` accreditation edge **and** one `authorizedBy` schemeAuthorization
  edge), a driving `README.md`, and `it.skip` / `@pytest.mark.skip` test stubs in
  `verifier.test.ts` and `test_verifier.py`. All domain specifics and `digestSRI`
  values are `TODO(human)`; the edge structure is correct.

## Remaining `TODO(human)`

- **Python SD cryptographic verification** is intentionally out of scope (D-SD-4):
  no Python SD library exists and adding a VC framework would breach the dependency
  policy. Marked in `packages/core-py/qi_vc_core/proofs/sd.py` and
  `tests/test_sd_parity.py`. This is a deliberate scope boundary, not pending work.
  *Future idea:* a small self-contained pure-Python `ecdsa-sd-2023` verifier (on
  `cryptography` + `cbor2`, no VC framework) would be a genuinely useful standalone
  library, since the Python VC ecosystem currently lacks one — worth spinning out
  as its own repo rather than vendoring here.
- ~~**Phase 7 fixtures**~~ — **DONE** (commit `411ea30`). See "Phase 7 & 8" below.
- ~~**Phase 8** — release prep~~ — **DONE** (code only; tag/Zenodo remain human
  steps). See "Phase 7 & 8" below.

---

## Part B — Phase 7 (Profile D vector) & Phase 8 (release prep)

## Phase 7 — Profile D test vector (`testdata/examples/gs-profile-d/`)

Completed the skeleton left in handoff. Profile D's purpose is to exercise the
**per-edge** derivation check: a single issuing-scope credential carries one
`derivedFrom` (accreditation, subset-checked) edge **and** one `authorizedBy`
(schemeAuthorization, independent) edge, and the GS certificate is authorized by
that issuing-scope credential.

- **Domain chosen:** GS product-safety mark for a household electrical appliance.
  Scope dimension is electrical-safety voltage range under IEC test standards.
- **Subset relation (the point of the vector):** accreditation scope =
  `ElectricalSafety`, methods `IEC 60335-1` + `IEC 60950-1`, range 0–1000 V;
  issuing-scope = `ElectricalSafety`, method `IEC 60335-1` only, range 0–**250 V**.
  The issuing scope is a genuine subset on both the method set and the range, so
  the `derivedFrom` edge yields `DERIVATION_VALID`.
- **digestSRI:** recomputed (sha384 over the stable-stringified unsecured
  document) bottom-up — accreditation and scheme-authorization digests embedded
  into the issuing-scope credential first, then the issuing-scope digest embedded
  into the target. All three verified to match the kernel's `computeDigestSRI`.
- **expected-trace.json:** captured from the live verifier. Asserts
  `verified: true`, `DERIVATION_VALID` on the `derivedFrom` accreditation edge,
  and the independent `authorizedBy` schemeAuthorization edge accepted with
  `TRUSTED_ISSUER` / `SUBJECT_BOUND` only — **no `DERIVATION_*` code on it**,
  confirming the independent edge is not subset-bounded.
- **Tests un-skipped:** `verifier.test.ts` and `test_verifier.py` (TS↔Python
  parity preserved). No failing variant was added (it was optional in the README).

## Phase 8 — release prep (code only)

- **Version → 0.3.0** in `package.json`, `packages/core-ts/package.json`, and
  `packages/core-py/pyproject.toml`. (`lims-adapter` and `verifier-service` are
  empty placeholder dirs with no manifest — nothing to bump.)
- **`CITATION.cff`:** added `version: 0.3.0`, `date-released: 2026-06-08`, a
  `doi:` field with a `TODO(human)` placeholder for the Zenodo DOI, and a
  `preferred-citation` block pointing to the manuscript.
- **`README.md`:** Status section now notes the `0.3.0` tag corresponds to the
  manuscript submission; also fixed a stale evidence example that still showed
  the pre-Part-A model (`qi:` prefixes + the removed `role` field) — see
  `docs/PAPER_FEEDBACK.md` F-4.
- **Not done (deliberate, human steps per §12):** no git tag, no push of a tag,
  no Zenodo archive, no DOI minting.

## Final acceptance (Part B §13)

- TS **113** tests green (includes the un-skipped Profile D vector), Python **105**
  green (1 unrelated skip), `pnpm validate:schemas` 6/6.
- G2 SD path and the `eddsa-rdfc-2022` path both still pass unchanged.
- No new runtime dependencies beyond the three Digital Bazaar SD packages (TS).

---

## Part B re-verification run (2026-06-09)

Re-ran the full §0.5 matrix to confirm the Phase-6 claims above against the
actual tree (reports can drift from disk). Phase 6 SD code, deps, fixtures, and
tests were all present as described. **However the suite was not green:** 12
`core-ts` verifier tests failed, all with `DIGEST_MISMATCH`.

## Root cause (a pre-existing Part-A regression, not SD)

Commit `a95d375` ("rename DAkkS → NAB") edited the bytes of the accreditation /
capability **evidence documents** (`did:web:dakks.example` → `did:web:nab.example`)
and the generator's `DAKKS`/`NAB` variable, **but the fixture generator was never
re-run.** Every parent credential's `digestSRI` therefore still pinned the old
(pre-rename) evidence bytes, so each chain failed the evidence-digest check. The
SD tests passed throughout (they sign freshly-generated fixtures), confirming the
breakage was unrelated to Phase 6.

## Fix

Re-ran `node scripts/generate-v02-fixtures.js` (the canonical, deterministic
generator — verified byte-stable across runs; frozen eddsa key, no proof churn).
This recomputed `digestSRI` across 16 fixtures. Diff is **digest-only** on 15 of
them.

- **GS scope conflict (the 16th file) — decision recorded.**
  `testdata/examples/gs-scheme-authorization/evidence/gs-competence-accreditation-001.json`
  carried a hand-added `Mass / OIML R 111` scope (introduced post-generator in
  commit `108f4de` to give the demo-web UI something to render). The generator
  emits `scope: []` for this fixture. The GS policy uses
  `scopeInclusion: 'ignored'`, so scope content does not affect verification.
  **Decision (human, 2026-06-09): generator wins — `scope: []`.** The Mass scope
  was calibration boilerplate, semantically wrong for a GS product-safety
  competence accreditation. The demo-web GS accreditation card now renders with
  no scope.

The SD fixtures (`*.sd.json`, `*.sd-derived.json`, Python SD parity fixtures)
were intentionally **not** regenerated/committed: `ecdsa-sd-2023` proofs are
non-deterministic (fresh per-signature HMAC/nonce), so regenerating them only
adds churn — they were never broken (the digest drift was confined to the
deterministic eddsa chains).

## Re-verification result (current tree)

```text
✓ pnpm -r build              (core-ts + demo-web)
✓ 140 TS tests (15 files)    (was 12 failing)
✓ 2 scenario tests
✓ pnpm validate:schemas      6 passed, 0 failed
✓ 110 Python tests, 1 skip   (the intentional Python-SD-out-of-scope skip, D-SD-4)
```

No new dependencies added. No source code changed — the fix was fixture
regeneration only. All D-SD-* decisions stand as recorded above; the one new
decision in this run (GS scope) is logged here.

---

## Stage 1 — SEC-1, FC-1, FC-2 (overhaul work order)

Branch `fix/sec-1-verify-registry`, from `origin/main` @ `8847bc4`.

Scope from `VC4QI_repo_overhaul_handover.md` §4 stage 1: make the trust decision
cryptographically grounded, and make absent trust infrastructure fail closed.

### Baseline recorded before any edit

```text
✓ pnpm -r build              (core-ts + demo-web)
✓ 140 TS tests (15 files)
✓ 2 scenario tests
✓ pnpm validate:schemas      6 passed, 0 failed
✓ 110 Python tests, 1 skip   (D-SD-4)
```

`AGENTS.md` claims "129 TS tests, 101 Python"; the observed counts above are the
correct ones. Undercount in the doc, not a regression.

### After stage 1

```text
✓ pnpm -r build              (core-ts + demo-web)
✓ 161 TS tests (16 files)    (+21)
✓ 2 scenario tests
✓ pnpm validate:schemas      6 passed, 0 failed
✓ 133 Python tests, 1 skip   (+23)
✓ ruff 203 errors            (204 on origin/main)
```

All six worked chains still accept, verified additionally under a **strict
offline document loader** that refuses any network fetch.

### What changed, and why it was more than the handover described

The handover described SEC-1 as "verify the registry credential's proof before
parsing". Doing only that would have been cryptographically decorative. See
`docs/PAPER_FEEDBACK.md` F-3b: with `safe: false` canonicalization, the registry
proof covered four triples and **not the registry entries**. Closing SEC-1
therefore also required defining the registry-entry vocabulary
(`contexts/v1/qi-core.jsonld`, scoped context on `registryEntries`) and really
signing the fixtures, which previously carried no proof at all.

### Decisions taken

- **D-TR-1 — verified registry as a distinct type.** `isTrustedIssuer` accepts
  only `VerifiedTrustRegistry`, a branded type unconstructable outside the
  module; `parseTrustRegistryCredential` is unexported. Python mirrors the
  intent with a runtime `TypeError`, since it has no equivalent of the brand.
  Rationale: SEC-1 should be enforced by the type system, not by convention, so
  a future call site cannot reintroduce the defect.
- **D-TR-2 — registry verification is independent of `skipProof`.** `skipProof`
  suppresses proof checks on the graph's own credentials; it does not suppress
  verification of the trust anchor. Both `fixture-helpers.ts` and
  `apps/demo-web` therefore supply a key resolver.
- **D-TR-3 — retrieval loader and canonicalization loader are separate
  parameters** (`documentLoader` vs `proofDocumentLoader`). A loader that serves
  the registry for every URL would otherwise be asked to resolve the registry's
  own `@context` and return the registry itself.
- **D-TR-4 — scoped, not global, context terms.** The registry entry terms are
  defined inside a scoped `@context` on `registryEntries` so `status`,
  `validFrom` and `validUntil` do not shadow the VC-level terms anywhere else.

### Pre-existing defects found while doing this (not caused by stage 1)

1. **`uv sync` / `make test` / `make lint` cannot run.** Root `pyproject.toml`
   declares `packages/verifier-service` and `packages/lims-adapter` as uv
   workspace members, but both are empty stubs with no `pyproject.toml`
   (`verifier-service` holds only `app/.gitkeep`). CI sidesteps this by
   pip-installing `packages/core-py[dev]` directly. The handover describes both
   as real packages; they are not.
2. **Python never verified any proof.** `graph_verifier._evaluate_proof` never
   referenced `options.resolve_key`. The parity suite did not catch it because
   every fixture runs with `skip_proof=True`. Fixed in this stage.
3. **The Python document loader was missing** `qi-evidence-context` and the
   vendored W3C contexts the TS loader serves. Invisible while Python never
   canonicalized. Fixed in this stage; the two maps must now be kept in step.
4. **The `zPlaceholderProof` corpus.** `scripts/generate-v02-fixtures.js:44`
   emits a literal `proofValue: 'zPlaceholderProof'` for 24 fixtures. Only the
   trust registries are really signed as of this stage. This is why
   `skipProof: true` is pervasive, and it is why no test exercises real proof
   verification through `verifyCredentialGraph`.

### Deliberately not done in stage 1

- `verifier/index.ts` `STATUS_CHECK_FAILED`. The handover groups it with FC-1,
  but it is a fetch error rather than resolver absence — that is FC-3, whose
  rule is qualified by a bounded grace period the trace must name. Modelling
  grace periods is its own stage.
- **SEC-8 vs `skipProof`.** A run with `skipProof: true` produces an all-`SKIP`
  trace and `summarizeTrace` still reports `verified: true`. A run in which no
  check executed is presentable as a pass. `apps/demo-web` depends on this.
  Needs its own decision.
- **`binds` can vanish silently.** `evaluateAuthorizedBy.ts` guards the
  principal-binding comparison with `if (sourceIssuer && evidenceSubject)`; when
  either is empty no trace entry is emitted at all, so the check disappears
  rather than failing. Now documented as a predicate in `MODEL_SPEC` §2/§4 (D-3);
  the code fix belongs with stage 2/3.
- **SEC-7.** No SSRF guard, size bound or timeout on any fetch, repo-wide
  (`utils/document-loader.ts`, `trust-registry/index.ts`, `verifier/index.ts`).
- **ADR-004 artifacts** `schemas/v1/trust-registry-entry.json` and
  `policies/trust-registry-credential.json` are referenced by the ADR but do not
  exist.

---

## Stage 2 — D-1, SCO-1, SCO-2, SCO-3, TST-4

Branch `fix/sco-1-governed-identifiers`, stacked on `fix/sec-1-verify-registry`
(it edits the same `MODEL_SPEC` section and needs stage 1's fixture helpers).

### The unsoundness removed

`scope/index.ts` matched categorical dimensions by lowercasing free text and
testing substring containment in both directions. `"As"` matched `"Ash"`; a
scope entry for `"CuZn"` admitted a claim about `"CuZn39Pb3"`. The formal core
claims soundness relative to a decidable `in`. `in` was decidable and **wrong**,
in the paper's only witness.

Sites removed: measurand match, `allowedMethods` match, matrix match,
`allowedForms` match, and the element-symbol regex that parsed `"Arsenic (As)"`
into `"As"` — which made the label a comparison operand by the back door. The
derivation check `⊑` was affected too (it lowercased measurands), not only `in`.

### Result

```text
✓ 176 TS tests (17 files)     (+15 over stage 1)
✓ 148 Python tests, 1 skip    (+15 over stage 1)
✓ 2 scenario tests, schemas 6/6, build + tsc + markdownlint green
✓ ruff 212 (203 at stage 1 tip; the delta is E501 in test_scope.py)
```

All six worked chains still accept, and scope inclusion genuinely runs on
identifiers — `SCOPE_INCLUSION_VALID` and `DERIVATION_VALID` appear in the
traces rather than the check being skipped.

### Decisions taken (stage 2)

- **D-SCO-1 — governed identifiers now, real where they exist.** QUDT for
  quantity kinds (the repo already uses QUDT unit IRIs); repo-minted
  `https://w3id.org/qi-vc/terms/v1/...` for matrix, method, element and form,
  documented in `docs/SCOPE_TERMS.md` as **placeholders standing in for a QI
  Term-Service (B5/MOD-8), not authoritative identifiers**. Minting these
  required an explicit override of the AGENTS.md prohibition on inventing
  vocabulary, taken deliberately rather than by drift.
- **D-SCO-2 — absent governed term fails.** `UNRESOLVED_SCOPE_TERM`, never a
  fallback to label comparison (SCO-3, FC-6). This applies symmetrically: a
  *scope entry* that restricts a dimension by label alone also fails, so an
  unenforceable limit cannot be silently ignored.
- **D-SCO-3 — identity yes, subsumption no.** Two identifiers are equal or they
  are not. Nothing decides that CuZn39Pb3 falls under "non-ferrous metals and
  alloys"; a taxonomic resolver is a future pluggable interface defaulting to
  fail-closed (SCO-6).
- **D-SCO-4 — empty scope confers no scope.** Both scope checkers returned
  `passed: true` for an empty entry list, and `checkScopeInclusion` passed under
  the default `optional` mode. A scope check that succeeds against nothing is
  the same fail-open class as FC-1/FC-2. Now `NO_SCOPE_ENTRY`.

### Honest gaps — D-2's vectors are only partly implementable

The spec now carries the three-case worked example (178 accept / 197
decision-rule reject / 520 out-of-scope). Only part of it can be exercised
against this implementation, and pretending otherwise would repeat the defect
this overhaul exists to fix:

1. **The decision-rule conjunct of `P` does not exist in code.** D-1 moved the
   decision rule out of `in` and into a separate conjunct; the implementation
   evaluates `in` (containment) only. There is nothing to compare a policy limit
   against, so the **197 mg/kg case cannot be tested**. That conjunct is SCO-5
   (decision rule and guard band supplied by policy at evaluation time, named in
   the trace) and is not built.
2. **`DrmdScopeEntry` has no range dimension.** The DCC path checks
   `range.from`/`range.to`; the RM path checks matrix, form, property and
   uncertainty only. The paper's worked example turns on an accredited range of
   50–500 mg/kg, so the **520 mg/kg out-of-scope case cannot be expressed** for
   an RM credential either.

TST-4 — CuZn39Pb3 against CuZn40Pb2 — **is** implemented, in both languages, as
the requirements register demands.

### Also not done

- **`⪯ᵢ` orientation declaration (D-5).** Now stated in the spec: a profile must
  declare the orientation of any dimension it introduces, and an undeclared
  orientation must not silently pass. Not enforced in code.
- **Spanning refusal (D-5).** Domination by a single parent record is
  implemented for `allowedPropertyIris`; the range dimension still searches all
  matching parents.
- **The uncertainty floor (F-7 / D-1).** `in` should require that where a scope
  entry states a capability the reported uncertainty is *not below* it. The
  implementation models a ceiling only. Recorded in `docs/PAPER_FEEDBACK.md`
  F-7 already; still open.

---

## GS hair-dryer scenario and generalized assessment path (2026-08-19)

Added a new scenario without modifying the existing
`testdata/examples/gs-scheme-authorization/` fixture. The source process model
was the English AP2 GS evaluation report supplied for this task. The scenario
uses claims from the report's verified process description; its draft questions
and explicitly unverified AI-generated research notes were not treated as
requirements or evidence.

### New GS evidence graph

`testdata/examples/gs-hair-dryer-hitl/` models a synthetic hand-held hair dryer:

- the final `GSCertificate` is `authorizedBy` a GS issuing-scope credential;
- it is `supportedBy` a product type-examination `TestReport` and an initial
  manufacturer `InspectionReport`;
- both reports are themselves `authorizedBy` the same issuing scope, because
  the chosen scenario uses the GS body's in-house laboratory and inspection
  function under the GS body's legal responsibility;
- the issuing scope is `derivedFrom` accreditation and independently
  `authorizedBy` a ZLS `schemeAuthorization` credential.

The factory report covers personnel, equipment, incoming-goods controls,
production controls, intermediate/final checks, and safety-component
traceability. The product report covers electrical safety, overheating,
foreseeable water hazards, materials, ergonomics, marking, and instructions.
The final certificate is about a product type and its series production, not an
individual serialized unit.

### Assessment decisions

- **D-AS-1 — assessment is a conjunct of policy `P`.** Added an optional policy
  `assessment` block and a verifier-supplied evaluator. It supplements schema
  and scope checks; it cannot override any failed deterministic gate and does
  not add a fourth evidence relation or basis kind.
- **D-AS-2 — three admitted methods, no confidence score.** Results identify
  `agent`, `human`, or `hybrid`, plus assessor/assessment identifiers and an
  explanation. Outcomes are pass/fail/indeterminate; final verification remains
  binary with reason codes.
- **D-AS-3 — required assessment fails closed.** Missing evaluator, evaluator
  error, disallowed method, invalid result, and required indeterminate result
  are failures. Optional missing assessment is skipped; optional indeterminate
  is a warning; a performed fail always fails.
- **D-AS-4 — HITL orchestration stays outside the kernel.** An adapter may pause
  externally, collect a human decision, and rerun/resume verification. The
  verifier does not become a workflow engine. Signed domain reports remain the
  portable evidence; `assessmentId` may point to an external audit record, but
  VC4QI does not persist or sign that record.
- **D-GS-1 — supporting reports do not authorize.** The certificate's links to
  `TestReport` and `InspectionReport` use `supportedBy` with no
  `authorizationBasis`. Each report retains its own authorizing edge.
- **D-GS-2 — no invented GS semantic checker.** The Profile D derivation vector
  checks the supported structural scope dimension (`authorizedCredentialTypes`).
  Product-specific scope inclusion remains `ignored`; human/agent assessment
  covers the sparse content at policy level without pretending to solve B5.
- **D-GS-3 — JSON-LD safe-mode-clean scenario.** Scenario-local aliases cover
  existing QI credential types/fields, and product/review facts use absolute
  schema.org IRIs. A test canonicalizes every graph credential with JSON-LD
  `safe: true`.

### Remaining `TODO(human)`

- Confirm the exact applicable GS testing bases, versions, product-group scope,
  and real authorization/accreditation wording before replacing the synthetic
  values. The AP2 report itself lists the required-document connections as an
  open question.
- Decide whether a later deployment requires the runtime assessment result to
  be issued as its own signed, portable assessment credential. This change
  deliberately records assessment provenance in the verification trace and an
  optional external `assessmentId`, without inventing a new credential
  vocabulary or authority kind.

### Verification

```text
✓ 183 TypeScript tests (18 files)
✓ 154 Python tests, 1 intentional SD skip
✓ 2 repository scenario tests
✓ schema validation 6/6
✓ core-ts and demo-web TypeScript checks
✓ demo-web production build
✓ ruff on the new/modified assessment tests and assessment module
✓ git diff --check
```

The `qi_vc_core` source-package mypy run still reports the same 11 pre-existing
errors already present at the stage-2 baseline (scope/evidence return typing and
stale `type: ignore` comments); no new mypy error originates in the assessment
module. The broader `packages/core-py` path also includes the existing largely
untyped test corpus and therefore remains substantially noisier.

### GS QR-target revision (2026-08-19)

The first scenario draft stopped at the GS body's product-type certificate.
That description above is retained as history but is superseded for the final
application target by the following extension:

- the QR URL identifies a `Product` VC for serialized unit
  `HD01-2026-000042`;
- Nordlicht, the fictional manufacturer, issues that unit credential;
- its `authorizedBy` edge resolves the GS body's `GSCertificate`;
- the certificate subject is the manufacturer and its `itemReviewed` is the
  HD-01 product type, so the kernel's ordinary authorization subject binding
  proves that the certificate authorizes the unit credential's issuer;
- the certificate remains supported by the type-examination and initial
  factory-inspection reports, and the inspection explicitly reviews the
  manufacturer and manufacturing site;
- the older `gs-scheme-authorization` fixture remains unchanged.

**D-GS-4 — no new QI vocabulary for the delivery credential.** The unit target
uses the existing schema.org `Product` class through a scenario-local alias.
The GS semantics are carried by its QR URL and authorizing edge to the
`GSCertificate`; no new evidence relation, basis kind, or `qi:` value was
introduced.

**D-GS-5 — proof-enabled canonical pass.** The generator's signing pass now
signs all seven credentials in this scenario with the repository's TEST ONLY
fixture key and issuer-specific verification-method identifiers. Both TS and
Python canonical tests set proof skipping to false. The observed TS trace was:

```text
verified: true
target: https://products.nordlicht-appliances.example/hd-01/serial/HD01-2026-000042/gs-mark
nodesResolved: 7
edgesEvaluated: 8
failures: 0
warnings: 0
PROOF_VALID: 7
DIGEST_VALID: 8
SUBJECT_BOUND: 5
TRUSTED_ISSUER: 5
ASSESSMENT_PASSED: 2
```

### Browser verification correction (2026-08-19)

An end-to-end headless Firefox run selected each GS scenario in the demo and
clicked `Run Verifier`. The first run exposed a browser-only defect: the shared
Base58btc decoder used Node's global `Buffer`, which is unavailable in Firefox.
The proof verifier caught the resulting decode exception and reported every
graph and trust-registry signature as `PROOF_INVALID`.

`packages/core-ts/src/utils/base58btc.ts` now converts its decoded `BigInt`
directly to `Uint8Array`, without `Buffer` or a new dependency. Repeating the UI
run produced:

```text
Scan one product's GS QR mark: Accepted — 0 failures, 0 warnings
Separate laboratory tests the product type: Accepted — 0 failures, 0 warnings
PROOF_INVALID entries displayed: none
PROOF_VALID entries displayed: yes
```

The 184-test TypeScript suite, demo typecheck, production build, and
`git diff --check` remained green after the correction.

### Demo trace replay (2026-08-19)

The demo now replays a completed verification trace in breadth-first graph
depth order, starting at the scanned product credential and moving upward along
its evidence edges. Node and edge frames are revealed every 420 ms; scenario
and pass/fail controls remain disabled during replay, and the final
Accepted/Rejected badge appears only when replay finishes. This is deliberately
presentation-only: the kernel still returns one complete, unmodified trace.

A headless Firefox UI run observed progressive trace entry counts and final
acceptance for both GS scenarios:

```text
in-house testing: 3.7 s replay, Accepted, 0 failures, 0 warnings
external test lab: 4.3 s replay, Accepted, 0 failures, 0 warnings
```

### GS failing-variant correction (2026-08-19)

The GS scenario specs originally had no `failing-target-credential.json`, so
the demo's Failing selection fell back to the passing target. Both generators
now emit a failing QR credential with a valid Data Integrity proof but a
deliberately incorrect `digestSRI` for its referenced GS certificate. The
complete evidence graphs still resolve and all credential proofs verify; the
single rejection reason is therefore `DIGEST_MISMATCH`.

Headless Firefox exercised the Failing selector and `Run Verifier` for both
animated scenarios:

```text
in-house testing: Rejected — 1 failure, 0 warnings — DIGEST_MISMATCH
external test lab: Rejected — 1 failure, 0 warnings — DIGEST_MISMATCH
PROOF_INVALID entries: none
```

Final regression result: 186 TypeScript tests, 156 Python tests plus one
intentional skip, repository scenario tests, schema validation, demo typecheck,
production build, ruff, and `git diff --check` all pass.

Repository verification after adding the vector:

```text
✓ 184 TypeScript tests (18 files)
✓ 155 Python tests, 1 intentional SD skip
✓ 2 repository scenario tests
✓ schema validation 6/6
✓ core-ts and demo-web TypeScript checks
✓ demo-web production build
✓ targeted ruff and mypy checks
✓ git diff --check
```

### Separate testing-laboratory GS vector (2026-08-19)

Added `gs-hair-dryer-external-test-lab-hitl` as a second scenario; the existing
in-house-laboratory vector is retained. The new graph separates the following
responsibilities:

- Nordlicht issues the QR-resolved credential for serialized unit
  `HD01-2026-000043`;
- the GS body issues the manufacturer-bound `GSCertificate` and performs the
  initial factory inspection;
- Hanseatic Product Testing, a distinct laboratory, issues the product
  `TestReport`; its reviewed-product claim identifies Nordlicht as manufacturer;
- the laboratory's `TestReport` is `authorizedBy` its own
  `IssuingScopeCredential`, and that scope is `derivedFrom` a separate
  accreditation whose subject is the laboratory;
- the GS body's issuing scope remains separately derived from its accreditation
  and independently authorized by ZLS.

No new relation, authorization-basis kind, or QI vocabulary term was added. The
policy selects the external-laboratory path using `issuerRole:
testingLaboratory` on the report's `operationalScope` edge. The proof-enabled TS
trace returned:

```text
verified: true
target: https://products.nordlicht-appliances.example/hd-01/serial/HD01-2026-000043/gs-mark
nodesResolved: 9
edgesEvaluated: 9
failures: 0
warnings: 0
PROOF_VALID: 9
DIGEST_VALID: 9
DERIVATION_VALID: 2
SUBJECT_BOUND: 5
TRUSTED_ISSUER: 5
ASSESSMENT_PASSED: 2
```

### External-laboratory responsibility correction (2026-08-19)

The external-laboratory vector now models the confirmed subcontract workflow:

- Hanseatic Product Testing remains issuer of the `TestReport` about product
  type `urn:example:product-type:hair-dryer-hd-01`;
- the report identifies `did:web:gs-body.example` as its Schema.org `customer`,
  rather than treating the report subject as a transport recipient;
- the GS body issues the laboratory's `IssuingScopeCredential`, whose subject is
  `did:web:hanseatic-product-testing.example`;
- that delegated scope is `derivedFrom` the laboratory's NAB accreditation and
  independently `authorizedBy` the GS body's own issuing scope;
- the GS body remains issuer of the `GSCertificate` and factory inspection, and
  Nordlicht remains issuer of the serialized product QR credential.

No new evidence relation, authorization-basis kind, runtime dependency, or QI
vocabulary term was added. The general assessment request now receives the
resolved graph and target when invoked through graph verification. The demo's
agent/human adapter uses that context to bind report outcome, product type,
manufacturer, GS customer, certificate, and delegated authority path. A negative
test that changes the report customer to the manufacturer fails with
`ASSESSMENT_FAILED`.

Current external-laboratory pass trace:

```text
verified: true
nodesResolved: 9
edgesEvaluated: 10
failures: 0
warnings: 0
PROOF_VALID: 9
DERIVATION_VALID: 2
SUBJECT_BOUND: 6
ASSESSMENT_PASSED: 2
```

The demo-web runner is covered directly under Vite for both GS scenarios:
passing variants accept with two completed assessments, while the signed
digest-mismatch variants reject with `DIGEST_MISMATCH`.

### Independent external-laboratory scope correction (2026-08-19)

This section supersedes the GS-body-issued laboratory delegation described in
the preceding “External-laboratory responsibility correction.” The confirmed
model has two independent operational scopes:

- the GS body's scope is issued to and by the GS body, is `derivedFrom` its NAB
  accreditation, is `authorizedBy` the ZLS scheme authorization, and permits
  `GSCertificate` and `InspectionReport` issuance;
- the external laboratory's scope is issued to and by Hanseatic Product
  Testing, is `derivedFrom` only the laboratory's NAB accreditation, and permits
  `TestReport` issuance;
- the laboratory's `TestReport` is `authorizedBy` the laboratory scope;
- the GS body is the report customer and uses the report as evidence for the GS
  certificate, but commissioning the test is not the source of the laboratory's
  competence or authority.

The issuer-grouped demo therefore places the laboratory scope and test report
inside the external-laboratory frame, the GS scope and GS outputs inside the GS
body frame, and both accreditation credentials inside the NAB frame. The
external-laboratory assessment checks the exact NAB issuer, laboratory subject
binding, report issuer/scope binding, GS-body customer, and absence of a GS
`authorizedBy` edge on the laboratory scope.

Current external-laboratory pass trace:

```text
verified: true
nodesResolved: 9
edgesEvaluated: 9
failures: 0
warnings: 0
PROOF_VALID: 9
DERIVATION_VALID: 2
SUBJECT_BOUND: 5
ASSESSMENT_PASSED: 2
```

## Standards-first overhaul planning (2026-09-21)

Planning only, requested before documentation and implementation changes. The
supplied handover is preserved without modification under
`docs/plans/standards-first-handover-2026-09-21.txt`. The proposed documentation
sequence, full document inventory, implementation phases, reuse/replacement
assessment and evidence requirements are in
[the reconciliation plan](docs/plans/standards-first-reconciliation.md).
The accompanying CSV records all 83 acceptance cases as `not_assessed` against
the new requirements; existing green tests do not establish those cases.

Inspected base: `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9` on
`refactor/manuscript-v2.1`, initially clean. The governed-identifier fix
`17dc96d` is an ancestor; the later `63231d2` scope patch is unavailable locally.
The plan preserves the merged GS/assessment history and reproduces the missing
patch's safety properties through shared regression vectors. No remote refs were
fetched, and no push, commit, tag, release or manuscript edit was performed.

Fresh baseline checks used Node 20.19.0, pnpm 10.15.1 and Python 3.12.3:

- `pnpm -C packages/core-ts test`: exit 0, 187 passed.
- `python3 -m pytest packages/core-py/tests -q`: exit 1, system interpreter lacks
  pytest. Existing `.venv/bin/python -m pytest packages/core-py/tests -q`:
  exit 0, 157 passed and 1 skipped.
- `pnpm -r build`: exit 0, including demo build; bundle-size warning remains.
- `pnpm -r --if-present lint`: exit 0, core TypeScript typecheck-based lint.
- `pnpm test:scenarios`: exit 0, 2 passed. This is not browser interaction coverage.
- `pnpm validate:schemas`: exit 0, 4 schemas and 2 examples passed; six examples
  were skipped because they have no `$schema` field.

Recommendation: retain the repository and useful infrastructure, replace the
default evaluator contracts in stages, and isolate legacy wire behavior. Update
active guidance and normative/explanatory documentation together before changing
the model in runtime code. Active documents have not yet been migrated; historical
claims above remain historical. No runtime or signed fixture files were changed.

## Standards-first documentation pass (2026-09-22)

The user requested continuation after the planning pass and authorized task-specific
Astra/Sol/Luna delegation. All three delegated runs failed before producing work with
"workspace is out of credits". The main agent completed the documentation locally;
no independent agent review or model-specific output is claimed.

A normal `git fetch origin` completed with exit 0. The remote manuscript branch still
pointed to `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`, and main to `8847bc4`.
Created `refactor/standards-first-reconciliation` from the merged baseline, retaining
registry/governed-identifier and GS/assessment work plus the prior planning artifacts.
The `63231d2` patch is still unavailable locally. No remote write, tag or release occurred.

### Documentation changes

- Replaced active agent/task guidance and the normative model; preserved exact old task
  and model snapshots under `docs/history/`. Added ADR-010 and explicit supersession or
  current-applicability notes without rewriting prior decision bodies.
- Reconciled architecture, vocabulary, profiles, scope, SD, queries, assessments, parity,
  schemas/tutorials, scenario/fixture notes, public status, security and contributor guidance.
- Added the twelve-category manifest guide with a concrete experimental RM candidate,
  exact candidate paths/IRIs and stated limits, plus API migration and requirements mapping.
  These are design documents, not newly implemented schemas or an executable manifest.
- Recorded 69 document/config review dispositions and kept all 83 new acceptance cases
  `not_assessed`. Existing citation metadata and unrelated conduct/governance rules remain.
- Appended manuscript corrections. No actual manuscript source was supplied or edited.
  The updated docs distinguish legacy runtime evidence from the target and experimental,
  simulated or unsupported behavior. Required command/workspace/CI repairs remain I0/I8.

### Documentation verification

Validation results are recorded below after the final checks. Runtime checks were not
rerun for this documentation-only pass; the 21 September baseline above remains historical.
No source, schema, context, policy, signed JSON fixture, dependency or lockfile was changed.
The Markdown linter was run through transient `npx`, not added as a project dependency.
It initially found three newly introduced blank-line errors (fixed) and a pre-existing
duplicate heading in this append-only report. A file-local MD024 setting now checks
sibling duplicates, allowing historical phase headings to recur without rewriting them.
The transient linter installation emitted a Node-engine warning for a dependency; the
actual lint result is recorded separately from that installation warning.

D0–D4 completion is limited to documentation. I0 is next: executable setup/CI repair,
current checks, consumer inventory and shared safety regressions, followed by I1's signed
vertical slice. New-model verification and release completion are not claimed.

<!-- markdownlint-configure-file {"MD024": {"siblings_only": true}} -->

## Documentation acceptance and implementation handoff (2026-09-23)

D0–D4 is complete as a documentation-only phase on
`refactor/standards-first-reconciliation`. HEAD remains the inspected base
`225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`; the documentation changes are local and
uncommitted. No runtime/model migration, remote write, tag or release is claimed.

Checks performed:

- Markdown lint over all 59 tracked/new project Markdown files: exit 0, using
  `npx --yes markdownlint-cli@0.41.0 --config .markdownlint.json` with the explicit file list.
- Local-link/inventory checks: 173 local links resolve; all 59 Markdown files are
  represented in the 69-entry documentation/config review inventory.
- All 83 V/P/S/C/E acceptance IDs match the handover and remain `not_assessed`.
  Documentation completion does not change runtime acceptance status.
- The source handover SHA-256 matches the value recorded in the plan. Archived old
  task/model files are byte-identical to their base-commit versions; the report retains
  its original content as an unchanged prefix.
- `git diff --check`: exit 0 after removing a trailing-space artifact in changed ADR
  status metadata. Runtime source, executable configuration, schemas, contexts, signed
  fixtures, dependency manifests/lockfiles and citation metadata remain unchanged.
- Historical wire terminology is confined to explicitly labeled legacy/history content
  or migration explanations. No active instruction requires the old three-relation model.

The two open documents have explicit boundaries: the historical graph ADR points to
ADR-010, and the RM source note distinguishes an abridged XML transcription from verified
XML signatures and fictional fixture issuance. The experimental binding draft also keeps
byte-pinned dependencies distinct from legitimate selective-disclosure representations.

Next is I0 from the active task: repair workspace/CI commands, run the current implementation
baseline, classify the new acceptance coverage, inventory wire consumers and preserve the
missing scope patch's safety properties. I1 then implements the machine-readable binding
manifest and first signed vertical slice. No additional paper source was available to edit.

## Standards-first I0 — 24 September 2026

Documentation D0–D4 was committed as `51fd945` and pushed to
`refactor/standards-first-reconciliation` after the user explicitly authorized
incremental branch pushes. Historical content above remains unchanged. I0 preparation
is now complete; the new evaluator and signed RM baseline remain I1–I8 work.

I0 repairs the uv workspace, adds a locked dependency resolution and aligns Make/CI
commands with the actual packages. CI uses the package-manager pin and also runs on
this branch. Development tool additions are Ruff 0.4.5 (the existing pre-commit version)
and mypy `>=1.10,<2`; no runtime dependency declaration was added. Existing dependency
bounds resolved newer packages, so the complete suites were rerun after locked setup.
No signed fixture, context, schema or release metadata was modified.

Shared TS/Python scope fixes implement one-parent complete-record containment,
finite ordered pressure bounds with supported consistent units, RM complete-alternative
retries, required DCC method identifiers and retention of earlier group failures.
The first 36 shared unsigned vectors failed 23 cases in both languages before the fix.
All now pass; two explicit GS type-domain controls and non-finite-bound tests bring
the added suite to 39 tests per language. No missing commit was represented as applied.

Executed results: `CI=true make setup`, `make test`, `pnpm -r build`, TypeScript lint,
root scenarios and schema checks exit 0. Totals: **226 TS tests; 196 Python passed,
1 existing skip; 2 root scenarios; 4 schemas and 2 examples**. Six schema examples
remain skipped without `$schema`; Vite retains its bundle-size warning.

Python Ruff and mypy still exit 1. Comparing the same installed tools against an
extraction of base `225e78f` found Ruff decreased from 208 to 204 diagnostics and mypy
stayed at 198 in 24 files, with no new file/rule/message diagnostics. `make lint`
stops on this Ruff debt; mypy was separately executed. No lint rule was suppressed.

The [I0 evidence](docs/plans/standards-first-i0-evidence.md) records exact commands,
remaining semantic limits, 111 legacy-identifier consumer files and six observed
static-loader resource hashes. All 83 new-profile acceptance cases are classified
`not_implemented`; eleven S rows cite partial legacy predicate coverage without
claiming a new-profile pass. Python's old label-based `check_derivation` helper remains
deprecated and outside the graph path/assurance of the fixed `check_derived_edge`.

Astra completed bounded read-only reviews; Sol/Luna hit workspace credit limits and
made no edits, so implementation and validation continued locally. Next is I1:
executable binding manifest, request/result contract and first signed RM vertical slice.

## Standards-first I1 prerequisite — 24 September 2026

I0 `8356b42` was pushed to the authorized working branch and all four jobs passed in
[GitHub CI run 36030304329](https://github.com/monavari/VC4QI/actions/runs/36030304329).
The user requested continuation. A bounded Astra/local protection audit found that
legacy proof verification rebuilt type/purpose and discarded additional received
proof options. Seven mutation controls reproduced incorrect acceptance in each language.

Both implementations now reject unsupported metadata and hash their supported received
proof options. Eight shared controls (seven negatives, one unchanged positive) pass.
`make test` exits 0: **234 TS; 204 Python passed, 1 existing skip; 2 root scenarios**.
Build, TS lint and schema validation exit 0 with the already recorded bundle warning
and schema coverage limitations. No signed fixture or dependency was changed.

[The I1 audit](docs/plans/standards-first-i1-protection-audit.md) records remaining
protection and catalog work, the minimal manifest/request/result contract and signed
vertical-slice sequence. F-6 records the manuscript-facing implication. Astra reviewed
the bounded fix without finding a blocking regression. I1 is in progress, not complete;
new-profile acceptance remains unimplemented. Existing Python lint debt remains visible.

## Standards-first I1 contract slice — 25 September 2026

The first executable I1 contract slice adds parallel TypeScript/Python immutable
reliance requests and separated result surfaces, complete three-state truth-table
operators, and refusal of empty required state lists. A `not_run` predicate must be
`not_established`. Request validation rejects empty/duplicate claim selection,
malformed explicit-offset times and resolver budgets outside the shared positive
safe-integer domain.

The repository-owned [RM v1 manifest](bindings/experimental/rm-v1/manifest.json)
covers all twelve required categories and validates against a closed top-level schema.
It explicitly lists missing context/schema resources and remains `incomplete`; both
libraries refuse to select it. No credential, context, schema or proof was invented to
make it installable. The legacy evaluator remains the default.

An isolated static catalog verifies SHA-384 SRI against exact input bytes, keeps and
returns defensive copies, refuses unknown URLs, performs no network I/O, and applies
request-local resource/byte limits. Astra's review reproduced Node Buffer aliasing and
mutable-budget bypasses; both were fixed with byte copies and frozen budget snapshots.
The review also found Python accepted `+01:60` and integers beyond `2^53-1`; parity
validation now rejects both. No additional manifest/truth-table blocker was found.

Sol left a useful initial TS contract before its delegated run reported workspace-credit
failure. Luna produced no manifest files before the same failure. Their outputs were
not trusted without local review and tests; repeated failing delegation was stopped.
The [contract evidence](docs/plans/standards-first-i1-contract-evidence.md) records the
implemented boundary and remaining signed-slice work.

Focused final checks pass: **25 TS reliance/manifest/catalog tests**, **11 Python
counterparts**, TS typecheck, Ruff on the new Python surface and mypy on the new package.
Full-suite totals and existing warnings/debt are recorded after the final rerun below.

Final I1 contract-slice validation completed on 25 September 2026. `make test` passes
**259 TypeScript tests; 215 Python tests with 1 existing skip; and 2 root scenarios**.
`pnpm -r build`, TypeScript lint and schema validation pass; the existing Vite chunk
warning and six schema-example skips remain. Python-wide Ruff reports 204 existing
diagnostics (original baseline: 208). Python-wide mypy reports the unchanged baseline
of 198 errors in 24 legacy files; focused Ruff and mypy checks for the new reliance
package and tests pass. This evidence completes only the contract/catalog sub-slice.
The protected signed RM vertical slice remains required before I1 can close.

The user's requested cheaper-model retry then completed. Terra corrected one status
overclaim: the manifest envelope is complete, while catalog bytes and hashes remain
pending. Luna found mutable Python runtime inputs, unchecked semantic/execution/decision
domains and trust in a self-reported installable flag. The implementation now copies
Python buffers and collections, validates state domains in both languages, rejects year
zero consistently and refuses all binding selection until catalog-backed installation
verification exists. Added controls bring the focused totals to **29 TypeScript and 14
Python tests**. The final complete rerun supersedes the immediately preceding totals:
**263 TypeScript tests; 218 Python tests with 1 existing skip; and 2 root scenarios**.

The next I1 prerequisite adds opt-in safe JSON-LD canonicalization to the retained EdDSA
primitive and an isolated, budgeted, catalog-backed document loader for the new reliance
path. Controls prove undefined terms are rejected, safe issuance/verification round trips,
loader results are isolated and unknown URIs fail offline. A W3C Appendix B.1 control
verifies the published combined-hash signature and public key bytes. It is an independent
primitive vector, not yet a full transformation vector. The legacy default remains
unchanged. Issuer/controller/`assertionMethod` authorization and the signed RM D/A
artifacts remain pending. The complete TypeScript suite passes **267 tests**; final
cross-repository checks for this prerequisite are recorded with its commit.
This prerequisite is TypeScript-only: the current Python PyLD backend does not enforce
the equivalent safe option, so Python safe-processing parity remains explicit follow-up work.

## Project website and BAM-M375a poster demonstrator — 25 September 2026

At the user's request a static project site was added in `site/`, deployed to GitHub
Pages by `.github/workflows/pages.yml` (source "GitHub Actions"; `main` only). It holds
a landing page, the user-supplied BAM-M375a demonstrator at `m375a/` and print QR codes
for `https://monavari.github.io/VC4QI/m375a/` and the landing page (segno, level Q/H;
both decoded back to their URLs with OpenCV). The demonstrator footer now states it is a
self-contained illustration and that the repository's evaluator for this model is still
being implemented; it is not I1–I8 evidence and changes no acceptance-ledger case.

Headless Chromium 1194 at 390 px: 178 accepts (183 ≤ 200), 197 rejects conformity
(202 > 200), 520 rejects scope with conformity not asked, and the tamper toggle rejects
authenticity with later gates not asked. No network requests or page errors; no
horizontal overflow in light or dark mode. Pages deployment itself is not yet executed.

## Standards-first I1 pinned RM resources — 25 September 2026

Continuing I1 at the user's request. Added the hand-authored RM v1 context
(`bindings/experimental/rm-v1/resources/contexts/rm-1.jsonld`) and a generator,
`scripts/rm-v1/build-resources.mjs`, that emits the seven schemas and `catalog.json`
(URI, path, media type, origin, version, SHA-384 SRI over exact bytes; `--check` detects
stale output). Design choices recorded in the binding README: `rm:` prefix because the
VCDM 2.0 context protects `exp`; decimal strings typed `xsd:decimal` for exact
quantities; `@list` for `materials`, `materialPropertiesList` and `results` so native
index pointers are signed. The VCDM 2.0 bytes are the existing vendored copy; they were
not compared with W3C's published hash here (network to w3.org is blocked).

New `loadRmV1Catalog`/`load_rm_v1_catalog` install the index into the isolated catalog.
The manifest's pending list now names controller documents, the A/O/D178/S/H artifacts
and the status list instead of the pinned contexts/schemas; it remains `incomplete`.

Results in this environment: `pnpm -C packages/core-ts test` 265 passed, 9 failed. The
9 failures are the pre-existing legacy canonicalize/proof tests that fetch
`https://www.w3.org/ns/credentials/v2` over the network (HTTP 403 from this sandbox's
proxy); they are unchanged by this work and pass in CI. The 7 new TypeScript tests pass
offline. Python: 222 passed, 1 existing skip (4 new). TS lint, schema validation and
scenarios exit 0; focused Ruff and mypy on `qi_vc_core/reliance` pass. No signed fixture
was changed and no acceptance-ledger case is marked passing.

## Standards-first I1 verification-method authorization — 25 September 2026

Added `authorizeAssertionMethod` (TS `reliance/key-authorization.ts`) and its Python
mirror `authorize_assertion_method`. A proof key counts only when the method URL's
controller document equals the credential issuer (exact identifiers, no aliases), is
installed in the isolated catalog (processed as plain JSON), identifies itself by that
URL, lists exactly one Multikey method with that id controlled by the issuer, carries an
Ed25519 multikey, and references it from `assertionMethod`. Missing/unsupported inputs
(no issuer, uninstalled or invalid controller document, non-Multikey type, key
revocation/expiry metadata, embedded assertion methods) are `not_established`; evidence
that the key is not the issuer's assertion key is `contradicted`. The established
outcome returns the raw public key and the controller document's SRI digest.

`testdata/regressions/key-authorization.json` holds 17 shared unsigned cases (KA-01 to
KA-17), including another controller's valid key, an authentication-only key, a
controller-id mismatch, duplicate method ids and a P-256 key. Keys are insecure
fictional fixtures derived from public seeds. All 17 pass in both languages.

Results: TS 283 passed, 9 failed (the same network-fetching legacy tests as above);
Python 239 passed, 1 existing skip; TS lint exit 0; Ruff and mypy on the reliance
package and new tests pass. This establishes the authorization rule only: no signed
artifact uses it yet, and no acceptance-ledger case is marked passing.
