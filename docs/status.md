# Status

**Version 0.4.0, 5 November 2026.** The standards-first evaluator decides real requests
on signed fixtures for all base use cases, in TypeScript and Python, and is the
library's only verifier. All authorities, keys and grants are fictional; no real
accreditation or external endorsement is claimed.

## What runs today

| Area | State |
| --- | --- |
| Reliance evaluator (gates 0–6) | Implemented for the RM, calibration and GS bindings in both languages, with a committed RM parity vector |
| Signed fixtures | Generated for RM (A, A2, O, D178/197/520, S, H), calibration (CAL-A, CAL-O, CAL-M, CAL-T, DCC-1, DCC-2, DCC-N, REPORT-1) and GS (GS-A, GS-S, GSC-1–3, TR-1–3, FI-1, TL-A, GSM-1–6, DPP-1–3), with controller documents and status lists |
| Protection and time | `eddsa-rdfc-2022` over JSON-LD safe mode, keys authorized by signed controller documents, exact-byte integrity, Bitstring status with freshness, validity at the activity time |
| Resolution | Offline, from a pinned catalog per binding; no network access and no trust registry (anchors are profile configuration) |
| API | `evaluateReliance` (Python `evaluate_reliance`) over the installed binding; see [API](api.md) |
| Demonstrator | Runs the full evaluators (gates 0–6) in the browser for RM, DCC, GS and DPP examples, a guided GS story and an RM actor board that signs suspensions, revocations and typed certificates live with the fixture keys |
| Not implemented | Authority-issued answers and Recognized Entities discovery, selective disclosure, historical status at a past time (returns `not_established`), a wallet, a verifier service |

The v0.3 graph verifier, its fixtures, the selective-disclosure path and the legacy
graph-explorer demo were removed in 0.4.0; tag
[`v0.3.0`](https://github.com/monavari/VC4QI/tree/v0.3.0) keeps them.

## Acceptance ledger

The [83-case ledger](acceptance-ledger.csv) records each case's expected outcome, test
and evidence: **65 passing, 3 excluded as unsupported, 15 not implemented**.

- Excluded: P05 (the bindings use no trust registry; anchors are profile
  configuration), V08 (grants discovered outside the credential chain) and V03 (the
  explicit legacy profile, removed in 0.4.0).
- Not implemented: E01–E15 (authority answers and Recognized Entities, selective
  disclosure, compiled-graph UI interaction tests and an offline reproducibility
  package).

Ledger evidence that cites `evidence.md` refers to the phase log retired in 0.4.0; it
is at commit
[`fc36bc6`](https://github.com/monavari/VC4QI/blob/fc36bc6/docs/plans/evidence.md).

## Latest checks

On 5 November 2026, for the 0.4.0 tree:

| Check | Result |
| --- | --- |
| `pnpm -r build` and `pnpm -r --if-present lint` | Pass |
| `pnpm -C packages/core-ts test` | 286 passed (19 files) |
| `uv run --locked --all-packages --extra dev pytest packages/core-py/tests` | 267 passed |
| `pnpm check:generated` | All resources, signed fixtures and the parity vector up to date |
| `pnpm docs:check` | All links valid |
| Python Ruff / mypy | 23 / 30 recorded findings, all in pre-existing proof, canonicalization and utility code (down from 204 / 198 before the cleanup) |

## Open issues

- Two checks need network access: comparing the vendored VCDM 2.0 context with W3C's
  published bytes, and an independent proof-suite transformation vector. Until then the
  binding manifests stay `incomplete`.
- Historical scope evidence is not implemented: an activity that predates the scope that
  covers it today is `not_established` ("a later scope cannot authorize it"), never a
  demonstrated rejection (case P14).
- Resource budgets cover resources, depth, bytes, decompression and routes; there is no
  wall-clock time budget.
- PyLD has no JSON-LD safe mode; Python rejects undefined terms with a narrower sentinel
  expansion check.
- The demonstrator covers a selection of cases per binding, not every fixture. UI
  interaction is checked by a bundle-level test, not by a browser lane in CI.
