# Scenario tests

The root `pnpm test:scenarios` command currently runs two tests over legacy examples.
Its helper sets `skipProof: true` for graph credentials while separately providing a key
for registry protection. This is not a signed end-to-end new-profile verification lane.
Package-level TS/Python suites cover additional policy, scope, digest, status and query
behavior. Demo store tests are not complete browser interaction tests.

Signed standards-first execution lives in the package suites (`rm-v1-*`, `cal-v1`,
`gs-v1`, `legacy-profile`), tracked by the
[acceptance ledger](../../docs/plans/standards-first-acceptance.csv). Offline-bundle and
actual UI interaction lanes are still to come (I7/I8). Assert reasons and witnesses, not
just a boolean. See [scenario catalogue](../../docs/use-cases.md).
