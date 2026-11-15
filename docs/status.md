# Status

**Version 0.4.0, 5 November 2026.** The standards-first evaluator decides real requests
on signed fixtures for all base use cases, in TypeScript and Python, and is the
library's only verifier. All authorities, keys and grants are fictional; no real
accreditation or external endorsement is claimed.

## What runs today

| Area | State |
| --- | --- |
| Reliance evaluator (gates 0–6) | Implemented for the RM, calibration and GS bindings in both languages, with a committed RM parity vector |
| Signed fixtures | Generated for RM (APP-NAB, REC-NAB, ACC-RMP, ACC-RMP-2, ACC-LAB, LIST-RMP, HOM-LOT1, RM178/197/520; every credential named, every link carrying its digest), calibration (CAL-A, CAL-O, CAL-M, CAL-T, DCC-1, DCC-2, DCC-N, REPORT-1) and GS (GS-A, GS-S, GSC-1–3, TR-1–3, FI-1, TL-A, GSM-1–6, DPP-1–3), with controller documents and status lists; every value is a PTB D-SI 2.2.1 real with a QUDT quantity kind |
| Protection and time | `eddsa-rdfc-2022` over JSON-LD safe mode, keys authorized by signed controller documents, exact-byte integrity, Bitstring status with freshness, validity at the activity time |
| Resolution | Offline, from a pinned catalog per binding; no network access and no trust registry (anchors are profile configuration) |
| Recognition (RM, experimental) | One recognition credential per body: A and H name R in a `termsOfUse` `RecognitionPolicy` (pinned by digest, mirrored in `issuer.recognizedIn`); R is a single-subject W3C Recognized Entities credential (Working Draft of 12 November 2026) from a fictional Global ACI stand-in, with the main scopes in `registration`. Recognition grants no authority: a verifier that anchors the recognizer (`rm-verifier-global-aci-1`) accepts the accreditation body for the main scope each grant requires; one that anchors the body never relies on R. Discovery through `issuer.recognizedIn` alone or identifiers is not implemented |
| Appointment (RM, experimental) | A fictional state's appointment of the accreditation body, APP, in the shape of EBSI's `VerifiableAuthorisationForTrustChain` (`permissionFor` with schema, types and jurisdiction; a `TrustFrameworkPolicy` naming the legal basis). A and H name it in a `termsOfUse` `IssuedUnderPolicy`, pinned by digest. A verifier that anchors the state (`rm-verifier-state-1`) accepts the body through it; one that anchors the body or Global ACI never relies on it. EBSI's registry lookup is not implemented |
| API | `evaluateReliance` (Python `evaluate_reliance`) over the installed binding; see [API](api.md) |
| Demonstrator | Runs the full evaluators (gates 0–6) in the browser for RM, DCC, GS and DPP examples, and RM and GS actor boards that sign suspensions, revocations and typed certificates live with the fixture keys |
| Not implemented | Authority-issued answers, Recognized Entities discovery (`recognizedIn`, identifier-based), selective disclosure, discovery of kept status lists (status at a past time is answered only by a list in force then that the request is given), trusted timestamps, a wallet, a verifier service |

The v0.3 graph verifier, its fixtures, the selective-disclosure path and the legacy
graph-explorer demo were removed in 0.4.0; tag
[`v0.3.0`](https://github.com/monavari/VC4QI/tree/v0.3.0) keeps them.

## Acceptance ledger

The [96-case ledger](acceptance-ledger.csv) records each case's expected outcome, test
and evidence: **81 passing, 3 excluded as unsupported, 12 not implemented**.

- Excluded: P05 (the bindings use no trust registry; anchors are profile
  configuration), V08 (grants discovered outside the credential chain) and V03 (the
  explicit legacy profile, removed in 0.4.0).
- Passing since 0.4.0: E01–E03 and E16–E20, recognition of the accreditation body
  through the recognition credential its grants point up to (unreleased, branch
  `feat/global-aci-recognition`).
- Not implemented: E04–E15 (Recognized Entities discovery, authority answers, selective
  disclosure, compiled-graph UI interaction tests and an offline reproducibility
  package).

Ledger evidence that cites `evidence.md` refers to the phase log retired in 0.4.0; it
is at commit
[`fc36bc6`](https://github.com/monavari/VC4QI/blob/fc36bc6/docs/plans/evidence.md).

## Latest checks

On 15 November 2026, for the D-SI values change (branch `DSI`):

| Check | Result |
| --- | --- |
| `pnpm -r build` and `pnpm -r --if-present lint` | Pass |
| `pnpm -C packages/core-ts test` | 345 passed (22 files) |
| `uv run --locked --all-packages --extra dev pytest packages/core-py/tests` | 314 passed |
| `pnpm check:generated` | All resources, signed fixtures and the parity vector up to date |
| `pnpm docs:check` | All links valid |
| Python Ruff / mypy | 23 / 30 recorded findings, unchanged, all in pre-existing proof, canonicalization and utility code |
| markdownlint | 5 pre-existing list-numbering findings in `apps/demonstrator/DESIGN.md` |

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
