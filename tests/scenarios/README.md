# Scenario tests

The root `pnpm test:scenarios` command currently runs two tests over legacy examples.
Its helper sets `skipProof: true` for graph credentials while separately providing a key
for registry protection. This is not a signed end-to-end new-profile verification lane.
Package-level TS/Python suites cover additional policy, scope, digest, status and query
behavior. Demo store tests are not complete browser interaction tests.

Migration adds shared [V/P/S/C/E acceptance vectors](../../docs/plans/standards-first-acceptance.csv),
real signed RM execution, semantic state/record/route/arithmetic comparisons, offline static
resource execution and actual UI interaction coverage. Assert reasons and witnesses, not
just a boolean. See [scenario catalogue](../../docs/scenarios/scenario-catalogue.md).
