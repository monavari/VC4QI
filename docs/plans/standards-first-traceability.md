# Standards-first requirements and documentation traceability

**Updated 28 September 2026.** This map links each section of the
[requirements handover](standards-first-handover-2026-09-21.txt) to the page that states
the contract, the phase that implements it and the evidence that shows it. The
[83-case ledger](standards-first-acceptance.csv) keeps exact case IDs, inputs, expected
outcomes and current states (66 passing, 2 excluded, 15 not implemented); see
[status](../status.md).

| Source section | Contract / documentation | Implementation phase / surface | Evidence needed |
| --- | --- | --- | --- |
| §0 mandate/supersession | AGENTS, execution plan, ADR-010 and historical snapshots | D0 | No active old wire lock; history preserved |
| §1 base/regressions | Plan baseline and running report | I0; TS/Python scope and shared vectors | Actual ancestry/environment; missing-patch safety controls |
| §2 four layers | Model §1; architecture | I1/I2; small core/binding interfaces | Protected vertical slice, no universal graph vocabulary |
| §3 carriers/manifest/legacy | Model §2; bindings; API | I1/I5; types, contexts, schemas, generators | V01–V12, exact mapping/protection/compatibility |
| §4 request/results | Model §3; API | I1/I2; TS/Python verifier and trace | Truth tables, unknown/not-run controls, separate results |
| §5 graph/identity/gates | Model §4; architecture | I2/I3; compiler/resolver/cache | P11/P15/P16, C12–C16 and source witnesses |
| §6 authority/scope/RM | Model §§5–6; bindings | I3/I4; routes/scope/decision modules | S01–S24, principal controls, 178/197/520 witnesses |
| §7 protection/time/resources | Model §8; SECURITY; bindings | I1/I2/I8; proofs/status/registry/loaders | P01–P16, independent suite vectors, offline E15 |
| §8 support/answers | Model §7; applications | I3/I6; support/attestation adapters | C09–C14, E05–E09 exact-question/authority controls |
| §9 recognition/infrastructure | Model §§7, 9; manifest exclusions | I6; optional binding | E01–E04, pinned draft, declared unsupported discovery |
| §10 presentations/SD | Applications; architecture (parity) | I5/I7; queries/SD/identity | E10/E11, disclosed sufficiency, honest crypto scope |
| §11 repository map | Execution plan and documentation index | All phases | Every active consumer migrated or explicitly legacy |
| §12 demo | Use cases; status | I7; graph/store/inspectors/controls | E12–E14 actual interaction and reissuance/tamper tests |
| §13 acceptance | Acceptance CSV | I0–I8 | State/reason/gate/witness assertions and execution outputs |
| §14 sequence | Execution plan | D0–D4 then I0–I8 | Coherent reviewed phases, incremental language parity |
| §15 validation | AGENTS; CONTRIBUTING; running report | I0/I8; scripts/CI | Commands/exits, environment, explicit failed/skipped lanes |
| §16 manuscript claims | Manuscript feedback; README; status | D2/I8 | Honest implementation/experimental/simulation boundaries |
| §17 completion | Execution plan, final report | I8 | Actual tree/commit/review state and justified exclusions |
| §18 provenance | Source snapshot and dated primary references | D3/I6/I8 | Version pins, attribution, no fabricated release/endorsement |

Contract pages are under `docs/` unless they are root files (AGENTS, SECURITY, README).

## Recording acceptance

For each case retain code/test paths, command, exit code and witness/output location.
Use `not_implemented`, `implemented_not_run`, `passing`, `failing` or
`excluded_unsupported` after assessment. Unsupported discovery is an explicit capability
boundary, not a passing claim of full external conformance. Required unresolved obligations
remain not established even when the process exits normally.

The matrix alone does not cover all architectural obligations: use the section map above
for source precedence, documentation, governance, interface and evidence requirements.
Document proofs, real versus simulated checks, actual records, routes and arithmetic,
and independent crypto known-answer evidence separately. See the
[implementation evidence](evidence.md).
