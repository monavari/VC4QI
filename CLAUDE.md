# CLAUDE.md — VC4QI project instructions for Claude Code

## Project summary

pnpm + uv monorepo. TypeScript (`packages/core-ts`) is canonical; Python
(`packages/core-py`) mirrors verifier behavior over shared JSON fixtures.
The repo is mid-migration from v0.1 (three-layer capability model, archived) to
v0.2/v0.3 (manuscript v2.1 model). See `RECONCILIATION_TASK.md` for the full
migration brief.

## Build & test commands

```bash
pnpm -r build                        # TS typecheck + build
pnpm -r test                         # vitest
pnpm test:scenarios                  # cross-cutting scenarios
pytest packages/core-py/tests        # Python
pnpm validate:schemas                # JSON Schema validation
make test                            # pnpm test + uv run pytest
make lint                            # pnpm lint + ruff + mypy
```

## Key file locations

| What | Where |
|---|---|
| TS evidence types | `packages/core-ts/src/evidence/types.ts` |
| Py evidence types | `packages/core-py/qi_vc_core/evidence/types.py` |
| TS edge dispatcher | `packages/core-ts/src/edge/evaluateEdge.ts` |
| Py edge dispatcher | `packages/core-py/qi_vc_core/edge/evaluate.py` |
| TS verifier | `packages/core-ts/src/verifier/` |
| Py verifier | `packages/core-py/qi_vc_core/verifier/graph_verifier.py` |
| QI evidence context | `contexts/v1/qi-evidence-context.jsonld` |
| Fixture generators | `scripts/generate-v02-fixtures.js`, `packages/core-ts/scripts/gen-interop-fixture.ts` |
| Parity tests (TS) | `tests/shared-fixtures.test.ts` |
| Parity tests (Py) | `tests/test_shared_fixtures.py` |
| Digest helper (Py) | `packages/core-py/qi_vc_core/evidence/digest.py` |
| ADRs | `docs/adrs/` |

## Current migration state (v0.3.0 — Part A complete)

Part A (Phases 1–5) is complete. The following have been fixed:
- `EvidenceRelation` is now 3 bare tokens: `authorizedBy`, `derivedFrom`, `supportedBy`.
- `EvidenceRole` enum deleted; `role` field removed everywhere.
- `AuthorizationBasisKind` is now 6 bare tokens: `accreditation`, `legalMandate`,
  `notification`, `schemeAuthorization`, `recognition`, `operationalScope`.
- Edge modules for `recognizedBy`, `notifiedBy`, `statusProvidedBy` deleted.
- `contexts/v1/qi-evidence-context.jsonld` rewritten per §1.5 with `@type: @vocab`.

**Next**: Part B (Phase 6 — selective disclosure). Use Claude Opus.

## Guardrails (read before touching anything)

- Do not rebuild the research kernel (`evidence/`, `verifier/`, `edge/`, `policy/`,
  `scope/`, `presentation-query/`). Only trim dead branches (deleted relations).
- Do not replace the hand-rolled plumbing (`proofs/`, `status/`, `trust-registry/`,
  `canonicalize/`, `utils/`) with Digital Bazaar or any external VC library.
  Part B adds SD deps only on the TS side, for `proofs/sd.ts` only.
- Never hand-edit signed/generated fixture JSON. Regenerate via the generators.
- Never invent vocabulary, relations, or basis kinds not in `RECONCILIATION_TASK.md §1`.
- Escalate uncertainties with `TODO(human):` comments + a line in
  `RECONCILIATION_REPORT.md`.

## Model guidance

- **Part A (Phases 1–5):** deterministic, low-judgment. Claude Sonnet or Haiku is fine.
- **Part B (Phases 6–8):** judgment-heavy (selective disclosure design decisions,
  cryptosuite choices, parity scope). Use Claude Opus or pause for human review at
  each `D-SD-*` decision point.

## Branch

`refactor/manuscript-v2.1`. Do not tag or create releases.
