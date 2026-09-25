# Standards-first requirements and documentation traceability

**Updated 25 September 2026: D0–D4 and I0 complete; I1 implemented (two network-dependent
checks open); I2 in progress with 15 cases passing and P05 excluded; I3–I8 pending.** Ledger phase labels were refined by the 25 September
milestone audit (one owning phase per case where possible).
Source: [unaltered supplied handover](standards-first-handover-2026-09-21.txt).
The [83-case CSV](standards-first-acceptance.csv) retains exact case IDs, inputs and
expected outcomes. I0 classified all 83 new-profile cases as `not_implemented` and
annotated partial legacy predicate evidence where relevant. None claims a signed
new-profile pass. See [I0 evidence](standards-first-i0-evidence.md) and its inventories.

| Source section | Contract / documentation | Implementation phase / surface | Evidence needed |
| --- | --- | --- | --- |
| §0 mandate/supersession | AGENTS, active task, ADR-010 and historical snapshots | D0 | No active old wire lock; history preserved |
| §1 base/regressions | Plan baseline and running report | I0; TS/Python scope and shared vectors | Actual ancestry/environment; missing-patch safety controls |
| §2 four layers | MODEL_SPEC §1; ARCHITECTURE | I1/I2; small core/binding interfaces | Protected vertical slice, no universal graph vocabulary |
| §3 carriers/manifest/legacy | VOCABULARY, BINDING_MANIFEST, API_MIGRATION | I1/I5; types, contexts, schemas, generators | V01–V12, exact mapping/protection/compatibility |
| §4 request/results | MODEL_SPEC §3; API_MIGRATION | I1/I2; TS/Python verifier and trace | Truth tables, unknown/not-run controls, separate results |
| §5 graph/identity/gates | MODEL_SPEC §4; ARCHITECTURE | I2/I3; compiler/resolver/cache | P11/P15/P16, C12–C16 and source witnesses |
| §6 authority/scope/RM | MODEL_SPEC §§5–6; POLICY_PROFILES; SCOPE_TERMS | I3/I4; routes/scope/decision modules | S01–S24, principal controls, 178/197/520 witnesses |
| §7 protection/time/resources | MODEL_SPEC §8; SECURITY; BINDING_MANIFEST | I1/I2/I8; proofs/status/registry/loaders | P01–P16, independent suite vectors, offline E15 |
| §8 support/answers | MODEL_SPEC §7; ASSESSMENT | I3/I6; support/attestation adapters | C09–C14, E05–E09 exact-question/authority controls |
| §9 recognition/infrastructure | MODEL_SPEC §7; manifest exclusions; NON_GOALS | I6; optional binding | E01–E04, pinned draft, declared unsupported discovery |
| §10 presentations/SD | SELECTIVE_DISCLOSURE; PRESENTATION_QUERY; PYTHON_PARITY | I5/I7; queries/SD/identity | E10/E11, disclosed sufficiency, honest crypto scope |
| §11 repository map | Execution plan and document inventory | All phases | Every active consumer migrated or explicitly legacy |
| §12 demo | Scenario catalogue; tutorials; status | I7; graph/store/inspectors/controls | E12–E14 actual interaction and reissuance/tamper tests |
| §13 acceptance | Acceptance CSV | I0–I8 | State/reason/gate/witness assertions and execution outputs |
| §14 sequence | Active task and execution plan | D0–D4 then I0–I8 | Coherent reviewed phases, incremental language parity |
| §15 validation | AGENTS; CONTRIBUTING; running report | I0/I8; scripts/CI | Commands/exits, environment, explicit failed/skipped lanes |
| §16 manuscript claims | PAPER_FEEDBACK; README; status | D2/I8 | Honest implementation/experimental/simulation boundaries |
| §17 completion | Active task, plan, final report | I8 | Actual tree/commit/review state and justified exclusions |
| §18 provenance | Source snapshot and dated primary references | D3/I6/I8 | Version pins, attribution, no fabricated release/endorsement |

Paths in the contract column refer to root instructions or `docs/` as appropriate.
The [document inventory](standards-first-document-inventory.csv) assigns a review disposition
to every tracked project Markdown file plus citation/build/CI metadata. An unchanged
conduct/license/governance document is not evidence of an omitted review.

## Recording acceptance

For each case retain code/test paths, command, exit code and witness/output location.
Use `not_implemented`, `implemented_not_run`, `passing`, `failing` or
`excluded_unsupported` after assessment. Unsupported discovery is an explicit capability
boundary, not a passing claim of full external conformance. Required unresolved obligations
remain not established even when the process exits normally.

The matrix alone does not cover all architectural obligations: use the section map above
for source precedence, documentation, governance, interface and evidence requirements.
Document proofs, real versus simulated checks, actual record/routes/arithmetic, and
independent crypto known-answer evidence separately. No new-model case was run by the
documentation pass. See [implementation status](../IMPLEMENTATION_STATUS.md).
