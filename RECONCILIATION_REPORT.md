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
