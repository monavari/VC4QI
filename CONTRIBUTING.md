# Contributing to VC4QI

Thank you for considering a contribution. This document describes the process
for submitting changes.

## Development setup

Install Node 20, pnpm 10.15.1, Python 3.12 and uv 0.12.17 first. CI and local setup
use the repository package-manager pin and the committed Python lock. From a checkout:

```bash
pnpm install --frozen-lockfile
uv sync --locked --all-packages --extra dev
```

`make setup` runs these two installation commands; it does not install the prerequisite
tools. The uv workspace includes only core-py; service and LIMS scaffolds are excluded.
uv uses the project `.venv`, even if an unrelated environment is active.

```bash
pnpm -r build
pnpm -r --if-present lint
pnpm -C packages/core-ts test
uv run --locked --all-packages --extra dev pytest packages/core-py/tests
pnpm test:scenarios
pnpm validate:schemas
```

`make test` runs TS, scenarios and Python tests. `make lint` runs the existing TS
check and Python Ruff/mypy checks. Python lint currently fails on recorded baseline debt
(Ruff 204, mypy 198; see the
[I0 evidence](docs/plans/evidence.md#i0-baseline-and-scope-safety)); a change must not
increase it. Do not suppress rules or report lint as passing.

Generated files have `--check` modes that CI-style reviews expect to pass, for example
`node scripts/cal-v1/build-resources.mjs --check` and
`pnpm -C packages/core-ts exec tsx scripts/generate-cal-v1-artifacts.ts --check` (the
same for `rm-v1` and `gs-v1`). The scenario command skips graph proofs, and schema
validation skips legacy examples without `$schema`; see [status](docs/status.md).

For documentation changes, run markdownlint and the site build's link check:

```bash
npx markdownlint-cli2 --config .markdownlint.json "**/*.md"
pnpm docs:check
```

Documentation lives in the few pages listed in [docs/index.md](docs/index.md). Update
the page that owns a topic instead of adding a new file, and never invent execution
evidence.

## Branch naming

The reconciliation follows [AGENTS.md](AGENTS.md) and the
[execution plan](docs/plans/standards-first-reconciliation.md).

| Purpose | Pattern |
| --- | --- |
| Milestone work | `m<N>-<short-name>` (e.g., `m1-schemas`) |
| Feature | `feat/<short-name>` |
| Bug fix | `fix/<short-name>` |
| Documentation | `docs/<short-name>` |

## Commit format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`.

Scope examples: `schemas`, `core-ts`, `core-py`, `verifier`, `demo`.

## Pull request requirements

- CI must be green
- At least one approving review
- Signed commits (`git config commit.gpgsign true`)
- SPDX license headers present in all new source files
- CHANGELOG.md updated under `[Unreleased]`
- No production keys or secrets in committed files

## Schema governance

Substantive changes to `schemas/`, `contexts/`, or `policies/` require:

1. An Architecture Decision Record (ADR) in `docs/adrs/`
2. Reference implementations updated (both TS and Python)
3. Two maintainer approvals
4. At least 14 days open for community comment

Hot-fixes for security or compliance issues may bypass the comment period;
this must be explicitly noted in the PR description.

## SPDX headers

Every source file must begin with a license header:

```typescript
// SPDX-License-Identifier: Apache-2.0
```

```python
# SPDX-License-Identifier: Apache-2.0
```

```yaml
# SPDX-License-Identifier: Apache-2.0
```

Documentation files (`.md`) are covered by CC-BY-4.0 and do not need SPDX headers.

## Test requirements

- Unit tests for all new public functions
- Integration tests for cross-module flows
- Coverage must not decrease below 80% for `packages/core-ts` and `packages/core-py`
- Scenario tests for any new end-to-end flow
- Requirement/case IDs, commands/exits and relevant state/reason/route/record/arithmetic witnesses
- Explicit distinction between real protection, simulated checks and unsupported integrations

## Dependency additions

The standards-first handover permits narrowly necessary maintained dependencies with
a documented purpose, version/license review and tests. Prefer existing dependencies;
do not replace the whole stack or add unrelated frameworks. Record the rationale in
the PR. Existing maintainer/schema review rules govern merging; they do not require
repeated permission for authorized local migration work.

## Code of Conduct

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
