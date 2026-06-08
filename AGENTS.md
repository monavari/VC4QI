# AGENTS.md — VC4QI agent configuration

This file is read automatically by Codex and compatible agentic coders. It defines
the working rules, commands, and guardrails for this repository.

---

## Repository overview

pnpm + uv monorepo. Packages:
- `packages/core-ts` — TypeScript canonical implementation
- `packages/core-py` — Python parity implementation
- `packages/lims-adapter` — LIMS adapter
- `packages/verifier-service` — verifier HTTP service

Contexts, schemas, examples, and docs live at the repo root level.

## Branch policy

All agent work goes on `refactor/manuscript-v2.1`. Do **not** push, tag, create
releases, or touch `archive/three-layer-capability-model`.

## One-time setup

```bash
npm install -g pnpm && pnpm install
pip install -e "packages/core-py[dev]"
# or: pip install uv && uv sync --all-packages
```

## Checks — run after every phase (all must stay green)

```bash
pnpm -r build
pnpm -r test
pnpm test:scenarios
pytest packages/core-py/tests
pnpm validate:schemas
uv run ruff check . && uv run mypy packages/core-py
```

Shorthand: `make test` and `make lint`.

## Fixture discipline

Fixtures are **generated and signed**. Do not hand-edit signed JSON output.
Change values in generators (`scripts/generate-v02-fixtures.js`,
`packages/core-ts/scripts/gen-interop-fixture.ts`) and re-run. For hand-authored
fixtures (no generator), edit directly and recompute `digestSRI` via the digest
helper.

## Escalation rule

If a change requires a judgment call or a value not derivable from the task spec,
insert `TODO(human): <question>` at the site and log it in `RECONCILIATION_REPORT.md`.
Continue with the rest. **Never guess or invent vocabulary, values, or fixtures.**

## What NOT to do

- Do not rebuild the research kernel (`evidence/`, `verifier/`, `edge/`, `policy/`,
  `scope/`, `presentation-query/`).
- Do not replace the hand-rolled plumbing (`proofs/`, `status/`, `trust-registry/`,
  `canonicalize/`, `utils/`) with Digital Bazaar or any VC framework.
- Do not add new runtime dependencies in Part A.
- Do not invent new vocabulary terms, relations, or basis kinds.
- Do not flatten or redesign credential schemas beyond what the task specifies.

## Task

See `RECONCILIATION_TASK.md` for the full phase-by-phase brief (Part A = Phases 1–5;
Part B = Phases 6–8). Start with Part A only.

## Commit style

```
refactor(phase-N): short description
```

One commit per phase.
