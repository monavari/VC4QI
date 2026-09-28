# Status

**28 September 2026.** The standards-first evaluator decides real requests on signed
fixtures for all base use cases, in TypeScript and Python. The default public API is
still the legacy verifier; switching it is the next step. Nothing here is a release, and
no real accreditation or external endorsement is claimed.

## What runs today

| Area | State |
| --- | --- |
| Reliance evaluator (gates 0–6) | Implemented for the RM, calibration and GS bindings in both languages, with a committed RM parity vector |
| Signed fixtures | Generated for RM (A, A2, O, D178/197/520, S, H), calibration (CAL-A, CAL-O, CAL-M, CAL-T, DCC-1, DCC-2, DCC-N, REPORT-1) and GS (GS-A, GS-S, GSC-1), with controller documents and status lists |
| Protection and time | `eddsa-rdfc-2022` over JSON-LD safe mode, authorized keys, exact-byte integrity, Bitstring status with freshness, validity at the activity time |
| Legacy compatibility | Explicit, labelled legacy profile with no fallback; both GS application variants verify under it |
| Default API | Still the legacy `verifyCredentialGraph`; the switch is I5 step 4 |
| Selective disclosure | TypeScript `ecdsa-sd-2023` on legacy fixtures; Python evaluates disclosed subsets semantically only |
| Demo | The M375a demonstrator runs the full evaluator (gates 0–6) in the browser; the older graph explorer still shows the legacy model |
| Not implemented | Authority-issued answers and Recognized Entities (I6), compiled-graph demo (I7), final reproducibility package (I8), wallet, verifier service and LIMS adapter |

## Acceptance ledger

The [83-case ledger](plans/standards-first-acceptance.csv) records each case's
expected outcome, test and evidence: **66 passing, 2 excluded as unsupported (P05, V08),
15 not implemented** (E01–E15: the I6–I8 adapter, disclosure, demo and offline
cases). The excluded cases are declared capability limits, not failures: P05 (the new
bindings use no trust registry; anchors are profile configuration) and V08 (grants
discovered outside the credential chain).

## Phases

| Phase | Result |
| --- | --- |
| D0–D4 | Documentation reset to the standards-first model (22 September) |
| I0 | Locked setup, inventories and shared scope regressions (24 September) |
| I1 | Binding manifest, request and result contracts, pinned resources, signed RM slice (25 September) |
| I2 | Gate trace, status lists, plan refusal and resource budgets (25 September) |
| I3 | Complete routes, global restriction and independently authorized support (25 September) |
| I4 | Claim mapping, scope coverage, conformity, time rules and parity; first accepted request (27 September) |
| I5 | Legacy profile, shared gate 0–3 pipeline, calibration and GS bindings, all base use cases migrated (28 September); default-API switch open |
| I6–I8 | Not started |

Commands, results and limitations for every phase are in the
[implementation evidence](plans/evidence.md) and the append-only
[report](https://github.com/monavari/VC4QI/blob/main/RECONCILIATION_REPORT.md). The
full plan is the [execution plan](plans/standards-first-reconciliation.md).

## Latest checks

At the end of I5 step 3 (commit `514972b`): TypeScript 439 passed, plus 9 legacy tests
that fetch from w3.org and fail only offline; Python 409 passed, 1 skipped; all
generator `--check` modes, schema validation, scenarios and build pass. Python lint has
recorded baseline debt (Ruff 204, mypy 198) that no phase has increased.

## Open issues

- Two I1 checks need network access: comparing the vendored VCDM 2.0 context with W3C's
  published bytes, and an independent proof-suite transformation vector. Until then the
  binding manifests stay `incomplete`.
- The legacy canonicalization path runs JSON-LD with `safe: false`, so legacy
  signatures cover only terms their contexts define; the new evaluator always uses safe
  mode.
- The demonstrator covers the RM use case only; the calibration and GS use cases and the
  legacy graph explorer are not yet on the new result (I7). UI interaction is checked by a
  local browser run and a bundle-level test, not by a browser lane in CI.
- Root scenario tests skip graph proofs, and schema validation skips legacy examples
  without `$schema`.
