# Contributing to qi-vc-poc

Thank you for considering a contribution. This document describes the process
for submitting changes.

## Development setup

```bash
git clone https://github.com/monavari/qi-vc-poc.git
cd qi-vc-poc
make setup
```

`make setup` installs Node 20 (pnpm), Python 3.12 (uv), and pre-commit hooks.

## Branch naming

| Purpose | Pattern |
|---------|---------|
| Milestone work | `m<N>-<short-name>` (e.g., `m1-schemas`) |
| Feature | `feat/<short-name>` |
| Bug fix | `fix/<short-name>` |
| Documentation | `docs/<short-name>` |

## Commit format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
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

## Dependency additions

New runtime dependencies require a rationale comment in the PR description
and will be reviewed by a maintainer. Prefer audited, widely-used libraries.

## Code of Conduct

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
