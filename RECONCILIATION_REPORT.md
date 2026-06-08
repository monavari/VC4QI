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
  - Trust registry: `RM_PRODUCER` → `operationalScope`; DAKKS → `accreditation`.
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
|---|---|
| Tests failed after Phase 1 due to `qi:` prefixed values in fixture JSON | Stripped prefix from all testdata with `sed`; recomputed digests |
| `DIGEST_MISMATCH` after removing `role` fields from fixtures | Recomputed all `digestSRI` values via inline Node.js script |
| Trust registry listed `"capability"` not `"operationalScope"` | Updated fixture; generator now uses `operationalScope` |
| `VALIDITY_WINDOW_VIOLATION`: OperationalScope expired after Accreditation | Extended `accreditation()` builder default `validUntil` to `2029-01-01`; regenerated |

## Acceptance check

```
✓ 105 TypeScript tests (pnpm vitest run in packages/core-ts)
✓ 96 Python tests (python3 -m pytest in packages/core-py)
✓ No escalated TODOs
✓ All Phase 1–5 items complete
```

---

# Part B — Phase 6 (Selective disclosure / G2)

Status: **COMPLETE.** G2 is implemented end-to-end: an `ecdsa-sd-2023`-secured RM
credential is derived to a disclosed subset and that subset verifies (and tamper-
fails); the existing `eddsa-rdfc-2022` path is unchanged. Full suites green —
**112 TS tests** (was 104) and **101 Python tests** (was 96), schemas + scenarios
pass. The two decisions that briefly blocked fixtures (cryptosuite choice; a
JSON-LD context conflict with W3C VC 2.0) are both resolved and recorded below.

## D-SD decisions taken

| Decision | Resolution | Notes |
|---|---|---|
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
- **Phase 7 fixtures** — finish `testdata/examples/gs-profile-d/` per its README
  (real scope values, recomputed digests, expected-trace), then un-skip the two
  tests. Low-judgment; suitable for Sonnet/Codex.
- **Phase 8** — release prep (version bumps, `CITATION.cff`, README); mechanical.
