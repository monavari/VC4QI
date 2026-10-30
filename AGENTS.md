# AGENTS.md — VC4QI agent configuration

## Scope and sources

VC4QI is a research reference implementation of standards-first reliance evaluation for
Quality Infrastructure credentials. Read, in order:

1. The active user instructions.
2. The [model](docs/model.md) and [ADR-010](docs/adrs/adr-010-standards-first-reliance.md).
3. [Status](docs/status.md) and the [acceptance ledger](docs/acceptance-ledger.csv).

Documentation of a target is not execution evidence. Manuscript sources are not in the
repository; do not invent paper section numbers or publication claims.

## Repository and branches

TypeScript in `packages/core-ts` is canonical; `packages/core-py` mirrors supported
semantics through shared fixtures and a parity vector. Bindings live in
`bindings/experimental/`, the demonstrator bundle in `apps/demonstrator`, the website
in `site/`.

Work on a branch from `main`. Do not touch `archive/three-layer-capability-model`. Do
not push, tag, publish or create a release without active session authorization.
Preserve unrelated working changes.

## Rules

- No universal serialized relation vocabulary. Bindings map protected native facts to
  verifier-owned obligations; PROV provenance establishes neither granting rights nor
  containment.
- Required obligations use `established`, `contradicted`, `not_established`; `not_run`
  is execution metadata. Absence of a failure never establishes reliance.
- Complete routes, global restrictions, principal and grant permission, well-founded
  support, scope and optional conformity are distinct requirements. The RM baseline has
  no accreditation uncertainty ceiling.
- Keep original secured representations intact before protection verification. Never
  redefine W3C or schema.org protected terms; always use JSON-LD safe mode.
- Experimental terms live under the reserved `vc4qi.example` namespace with a versioned
  context and schema. Never claim they are production standards or mint terms under a
  real institution's namespace.
- Prefer existing dependencies; a narrowly necessary maintained dependency needs a
  documented purpose, licence review and tests.

## Fixtures

Never hand-edit generated signed fixtures, catalogs or the parity vector. Change the
generator and regenerate; every generator has a `--check` mode (`pnpm check:generated`).
Fictional keys are derived from public seeds and must stay labelled as insecure.
For a missing real-world governance input, insert a localized `TODO(human): <question>`
rather than inventing an answer.

## Checks

Node 20, pnpm 10.15.1, Python 3.12 and uv 0.12.17; see [CONTRIBUTING](CONTRIBUTING.md).

```bash
pnpm -r build
pnpm -r --if-present lint
pnpm -C packages/core-ts test
uv run --locked --all-packages --extra dev pytest packages/core-py/tests
pnpm check:generated
pnpm docs:check
```

Python lint has recorded baseline debt; a change must not increase it. Report
unavailable or failed checks explicitly and never present earlier results as new
evidence. Update the ledger when a case changes state, with the command and exit code.

## Completion

Keep the documentation set small: update the page that owns a topic (see
`docs/index.md`) rather than adding one. Record user-visible changes in
`CHANGELOG.md`. No unexecuted test, external endorsement or future release may be
reported as complete.
