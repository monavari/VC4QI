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
