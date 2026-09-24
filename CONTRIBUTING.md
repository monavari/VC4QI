# Contributing to VC4QI

Thank you for considering a contribution. This document describes the process
for submitting changes.

## Development setup

Install Node 20, pnpm 10.15.1 and Python 3.12 first. The current local package-manager
pin is 10.15.1; CI still selects pnpm 9 and will be reconciled in I0. From a checkout:

```bash
pnpm install --frozen-lockfile
python3 -m venv .venv
.venv/bin/python -m pip install -e 'packages/core-py[dev]'
```

Use an existing project venv when already configured. Root uv workspace/Make targets
currently include scaffold packages without package manifests; use explicit commands
until I0 repairs them. `make setup` does not itself install Node or Python.

```bash
pnpm -r build
pnpm -r --if-present lint
pnpm -C packages/core-ts test
.venv/bin/python -m pytest packages/core-py/tests
pnpm test:scenarios
pnpm validate:schemas
```

Run Python lint via the configured environment and report unavailable checks explicitly.
The scenario command skips graph proofs; schema validation skips some examples without
`$schema`. Add dedicated new-profile/offline/UI lanes during migration. For documentation
changes, check Markdown, links and consistency; do not invent runtime execution evidence.
See [current status](docs/IMPLEMENTATION_STATUS.md).

## Branch naming

This reconciliation uses `refactor/standards-first-reconciliation`; follow
[AGENTS.md](AGENTS.md) and the [active task](RECONCILIATION_TASK.md).

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
