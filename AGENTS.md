# AGENTS.md — VC4QI agent configuration

## Mandate and source order

VC4QI is migrating from the manuscript-v2.1 implementation to the standards-first
reliance model. The runtime is still legacy; documentation of the target is not
execution evidence. Read, in order:

1. The active user instructions.
2. [The supplied reconciliation requirements](docs/plans/standards-first-handover-2026-09-21.txt),
   including explicit supersessions in §0.1.
3. [The active task](RECONCILIATION_TASK.md), [model](docs/MODEL_SPEC.md),
   [execution plan](docs/plans/standards-first-reconciliation.md) and
   [ADR-010](docs/adrs/adr-010-standards-first-reliance.md).
4. [Implementation status](docs/IMPLEMENTATION_STATUS.md) and the append-only
   [report](RECONCILIATION_REPORT.md).

The handover resolves conflicts with older instructions. Historical documents and
accepted-but-superseded ADRs do not restore obsolete requirements. Actual manuscript
sources are not included; do not invent paper section numbers or publication claims.

## Repository and branch

TypeScript in `packages/core-ts` is canonical; `packages/core-py` mirrors supported
semantics through shared fixtures. `apps/demo-web` is the existing browser demo.
`packages/lims-adapter` and `packages/verifier-service` are scaffolds, not completed
services. Contexts, schemas, policies, examples and docs live at the repository root.

Work on `refactor/standards-first-reconciliation`, preserving the merged baseline
at `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`. Do not touch
`archive/three-layer-capability-model`. Do not push, tag, publish or create a release
without active session authorization. Preserve unrelated working changes.

## Migration rules

- Changes to the evaluator, graph, policy, scope and presentation-query code are
  authorized when needed for the new model. Retain useful infrastructure and
  regressions; isolate legacy behavior behind explicit profile selection.
- No universal serialized relation vocabulary or closed six-basis model is required.
  Accepted bindings map protected native facts to verifier-owned obligations.
  PROV provenance does not establish granting rights or containment.
- Prefer existing dependencies. A narrowly necessary maintained dependency is
  permitted with documented purpose, version/license review and tests. Do not
  replace the whole stack or add unrelated frameworks.
- Experimental fixture binding terms are permitted under a clearly owned reserved
  `.example` namespace with versioned interpretation/context/schema. Do not claim
  they are production standards or invent plausible external ontology terms.
- Keep original secured representations intact before protection verification.
  Never redefine W3C/schema.org protected terms or drop decision-relevant data
  through unsafe JSON-LD expansion. The legacy `safe: false` path is a known gap.
- Required obligations use `established`, `contradicted`, `not_established`;
  `not_run` is execution metadata. Absence of FAIL does not establish reliance.
- Complete routes, global restrictions, principal/grant permission, well-founded
  support, scope and optional conformity are distinct requirements. The RM baseline
  has no accreditation uncertainty ceiling.
- Preserve TS `ecdsa-sd-2023`; Python SD remains semantic evaluation of a TS-derived
  subset, not Python SD cryptographic verification.

## Fixtures and unresolved inputs

Never hand-edit generated signed fixtures. Change generators and regenerate proofs
and integrity metadata according to the selected binding. For a hand-authored signed
artifact, changing content requires reissuance; recomputing a digest alone is not enough.
Fictional test keys and authorities must remain clearly labeled.

Routine implementation choices already authorized by the handover do not require
confirmation. For missing real-world governance inputs, insert a localized
`TODO(human): <question>` and append its impact to the report. Continue independent
work; do not substitute TODOs for the specified fictional baseline.

## Setup and checks

Use Node 20 and pnpm 10.15.1 (the current package-manager pin), Python 3.12, and
an isolated Python environment. See [CONTRIBUTING.md](CONTRIBUTING.md) for setup.
Root uv workspace/Make targets currently reference scaffolds; do not advertise them
as working until repaired in I0. CI's pnpm 9 selection also needs reconciliation.

For each implementation phase, record actual commands, exit codes and limitations:

```bash
pnpm -r build
pnpm -r --if-present lint
pnpm -C packages/core-ts test
pnpm test:scenarios
.venv/bin/python -m pytest packages/core-py/tests
pnpm validate:schemas
```

Run Python lint when its environment is configured, and report unavailable/failed
checks explicitly. For a documentation-only phase, run Markdown/link/consistency
checks; do not present earlier runtime results as new evidence. Add dedicated signed
RM, semantic parity, offline-resource and actual UI interaction lanes during migration.
Current schema validation skips some examples without `$schema`; exit 0 is not full
fixture coverage. Never hand-edit output to make an acceptance test pass.

## Demo

Preserve the seven demo entries covering A–F, including both GS application variants,
actor grouping, graph/credential inspection, replay and selective disclosure. Two GS
variants currently enable proof checks; other scenarios skip them. The target UI
must render the evaluator's compiled graph and distinguish simulation from verified
reliance. Keep Vite stubs in sync with core APIs and report their assurance limits.

Use `pnpm -C apps/demo-web dev` or `pnpm -C apps/demo-web build`. Existing colors
may remain as internal display conventions; they do not define credential vocabulary.

## Collaboration and completion

Per the user's model allocation: Astra for difficult semantic/design review, Sol
for implementation/integration, Luna at max reasoning for bounded documentation and
consistency work. Delegate only independent tasks with narrow context and distinct
file ownership. Avoid repeated whole-repository audits. If delegated runs cannot
start, report the limitation and continue locally where possible.

Append evidence to `RECONCILIATION_REPORT.md`; keep historical claims intact.
Track requirements and the 83 cases in `docs/plans/`. Use
`refactor(phase-N): short description` for coherent phase commits or meaningful units.
No unexecuted test, external endorsement or future release may be reported as complete.
