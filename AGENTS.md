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
**TypeScript is canonical; Python mirrors it** over shared JSON fixtures.

Read these for context (they sit *under* this file):
- `RECONCILIATION_TASK.md` — the phased migration brief (what to do next).
- `docs/MODEL_SPEC.md` — the normative model from the manuscript (§4–§8: what the
  code must satisfy). **Where spec and repo disagree, the spec wins.**
- `RECONCILIATION_REPORT.md` — running log; append, don't rewrite.
- `docs/PAPER_FEEDBACK.md` — where implementation contradicts a standard the paper
  relies on; add to it when you find another.

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
pnpm -C packages/core-ts test          # canonical TS suite (vitest)
pnpm test:scenarios
python3 -m pytest packages/core-py/tests   # use this if `uv` is not installed
pnpm validate:schemas
uv run ruff check . && uv run mypy packages/core-py   # if uv is set up; else skip lint
```

Shorthand: `make test` and `make lint` (both need `uv`). Regenerate SD fixtures
with `pnpm -C packages/core-ts exec tsx scripts/gen-sd-fixtures.ts`.

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
  `scope/`, `presentation-query/`). Add new *test vectors*, not new algorithms.
- Do not replace the hand-rolled plumbing (`proofs/`, `status/`, `trust-registry/`,
  `canonicalize/`, `utils/`) with Digital Bazaar or any VC framework. The **one**
  exception is the SD cryptosuite in `packages/core-ts/src/proofs/sd.ts` (TS only).
- Do not add new runtime dependencies — it's a decision, not a default. Stop and
  ask (especially for a VC/DID framework, or an ECDSA library on the Python side).
- Do not invent new vocabulary terms, relations, or basis kinds. `qi:`-prefixed
  tokens belong only in `@context` mappings, never as a *value* in a credential or
  code literal.
- Do not flatten or redesign credential schemas beyond what the task specifies.
- **Do not re-shadow W3C/schema.org protected terms** (`name`, `description`,
  `issuer`, `digestSRI`, `digestMultibase`) in any context — reuse them.

## JSON-LD safe mode is the law now

Selective disclosure canonicalizes in JSON-LD **safe mode**, which rejects any
undefined property or protected-term redefinition. Every term a credential uses
must expand to an absolute IRI against `credentials/v2`. The legacy
`eddsa-rdfc-2022` path ran safe mode *off* and hid context defects; do not rely on
that. See `docs/PAPER_FEEDBACK.md` (F-1..F-3).

## Locked decisions (do not re-litigate)

- **Three edge relations**: `authorizedBy` (independent, **no** subset check),
  `derivedFrom` (bounded projection, **triggers the derivation check**),
  `supportedBy` (non-authorizing, recursive, **no** `authorizationBasis`). One
  credential may carry both authorizing kinds at once; the derivation check runs
  **per edge** against the specific parent it references.
- **No `role` field** (implied by `relation`). `issuerRole` inside
  `authorizationBasis` is different and stays.
- **Six basis kinds**: `accreditation`, `legalMandate`, `notification`,
  `schemeAuthorization`, `recognition`, `operationalScope`.
- **Selective disclosure = `ecdsa-sd-2023`, not BBS** (D-SD-2). BBS is a noted
  future option only.
- **Python does not do SD crypto** (D-SD-4): it verifies the TS-derived disclosed
  subset at the *kernel* level only. `packages/core-py/qi_vc_core/proofs/sd.py` is
  a marked scaffold, intentionally not implemented.

Per-decision rationale (D-SD-1..D-SD-5) is in `RECONCILIATION_REPORT.md` (Part B).

## Demo web app (`apps/demo-web`)

A Vite + React 19 + Tailwind v4 browser demo. Run with:

```bash
cd apps/demo-web && pnpm dev    # dev server at http://localhost:5173
pnpm exec vite build            # production build check
```

Architecture:
- **`src/scenarios/index.ts`** — five scenario definitions (A–E) mapping fixtures to
  React Flow graph metadata. Each scenario has `nodes`, `edges`, `policy`,
  `documents`, `trustRegistry`, and `failingTarget`.
- **`src/store/index.ts`** — Zustand store + `runVerifier()` which calls
  `verifyCredentialGraph` from `@qi-vc/core` with `skipProof: true`.
- **`src/components/CredentialGraph.tsx`** — React Flow graph. BFS layout puts
  authority roots at top, target credential at bottom (matching paper Fig. 2).
  Node badge driven by both `level='credential'` and `level='edge'` trace entries —
  edge-level FAILs (e.g. DIGEST_MISMATCH) mark the `from` node.
- **`src/components/Sidebar.tsx`** — profile selector, pass/fail variant toggle,
  run button, result badge.
- **`src/components/Inspector.tsx`** — per-node/edge trace viewer + JSON display.
- **`vite.config.ts`** — inline stubs for three Node-only core-ts modules (schemas,
  status, document-loader) via Vite `load` hook on absolute paths; `node:crypto`
  aliased to `src/stubs/crypto.ts` using `@noble/hashes`.

Visual conventions (match paper figures):
- `authorizedBy`: solid blue (#2563eb)
- `derivedFrom`: dashed green (#16a34a)
- `supportedBy`: dotted grey (#94a3b8)
- Node fill: light pastel per actor role (blue/violet/amber/teal/rose)
- Theme: light (white canvas, slate sidebars)

Guardrails:
- Do **not** add new runtime dependencies without discussion.
- Do **not** hand-edit fixture JSON in `testdata/`; synthetic demo fixtures (bad
  digestSRI) are defined inline in `src/scenarios/index.ts`.
- Vite stubs must stay in sync with `packages/core-ts` API surface if that changes.

## Current state & task

Part A (Phases 1–5), Part B **Phase 6** (selective disclosure / G2), and **B1**
(full policy expressibility — `policyToDcql`, `policyToPresentationDefinition`,
`validatePresentationSubmission`) are **complete and green** (129 TS tests, 101 Python).
The **demo web app** (P1) is live at `apps/demo-web` with all five profiles, pass/fail
variants, light theme, and paper-matching edge colours. See `RECONCILIATION_TASK.md`
for the full brief. Next, both optional and low-judgment:

- **Phase 7** — GS / Profile D test vector. Skeleton is stubbed under
  `examples/gs/` with TODO(human) placeholders; see `RECONCILIATION_TASK.md` §11
  and `docs/MODEL_SPEC.md` §7 (Profile D). One credential carries **both** a
  `derivedFrom` edge (`kind: accreditation`, subset-checked) **and** an
  `authorizedBy` edge (`kind: schemeAuthorization`, independent), plus a GS
  certificate authorized by it. Expected: `accept`.
- **Phase 8** — release prep (version bumps, `CITATION.cff`, README). Mechanical;
  see §12. Do **not** tag or release.

## Commit style

```
refactor(phase-N): short description
```

One commit per phase.
