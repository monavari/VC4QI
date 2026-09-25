# Standards-first reconciliation — active task

**Documentation D0–D4 and preparation I0 complete. I1 in progress: signed binding slice.**

[I0 evidence, 24 September 2026](docs/plans/standards-first-i0-evidence.md) records
passing runtime checks and existing Python lint debt. The evaluator remains legacy.

The governing thesis is that credentials represent institutional authority and
evidence without creating that authority. Verifier-selected profiles determine
reliance; accepted semantics and supported procedures determine scope.

## Requirements and history

The [complete supplied handover](docs/plans/standards-first-handover-2026-09-21.txt)
is the task-specific requirements source. Its §0.1 supersedes the old serialized
edge/basis locks and kernel freeze. [MODEL_SPEC](docs/MODEL_SPEC.md) is the developer
contract; [ADR-010](docs/adrs/adr-010-standards-first-reliance.md) records the change.
The [old execution brief](docs/history/reconciliation-manuscript-v2.1.txt) and
[old model](docs/history/model-spec-manuscript-v2.1.txt) are historical snapshots,
not active instructions. Later user instructions take precedence.

Keep the existing repository and replace the evaluator in stages. The current base
`225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9` includes registry/governed-identifier fixes
and GS/assessment work. The later `63231d2` scope patch is absent locally; I0 reproduced
its safety properties in shared unsigned regression vectors without claiming to apply it.
Work on `refactor/standards-first-reconciliation` under [AGENTS.md](AGENTS.md).

I1's proof-option prerequisite and request/result/manifest/catalog slice are complete.
The remaining protected signed-slice work is tracked in the
[I1 audit](docs/plans/standards-first-i1-protection-audit.md) and
[contract evidence](docs/plans/standards-first-i1-contract-evidence.md).

## Ordered work

The [detailed plan](docs/plans/standards-first-reconciliation.md) specifies file
ownership, deliverables and exit gates. D0–D4 update guidance, model/contracts,
explanatory documents, traceability and consistency before runtime model changes.

| Phase | Deliverable and principal exit evidence |
| --- | --- |
| I0 — complete | Locked setup, consumer/resource inventory, shared scope regressions; existing Python lint debt recorded. |
| I1 | Binding manifest, new request/result types and a real signed vertical slice with protected source provenance. |
| I2 | Binding-driven compiler, seven gates, bounded resources and three-state outcomes; V/P controls. |
| I3 | Complete routes/global restrictions and independently justified recursive support; C controls. |
| I4 | Full signed A/O/D/S/H RM chain, scope/conformity and TS/Python semantic parity; S controls. |
| I5 | Regenerated artifacts and six base use cases, both GS variants, explicit legacy adapter and default API switch. |
| I6 | Authority-issued scope answers and limited pinned Recognized Entities adapter; E01–E09. |
| I7 | Compiled-graph demo, real controls, honest simulation and retained SD; E10–E14. |
| I8 | Required CI, offline execution, witnesses, limitations, migration notes and review package; E15 and final ledger. |

No new-profile acceptance is established merely by a successful legacy test.
Each phase keeps Python semantics aligned and appends actual evidence to
[RECONCILIATION_REPORT.md](RECONCILIATION_REPORT.md). Use the
[83-case ledger](docs/plans/standards-first-acceptance.csv) and
[requirements map](docs/plans/standards-first-traceability.md). Query matching,
format validity, document verification and reliance are separate claims.

## Required witness and exclusions

For fictional RM authority A ([50,500] mg/kg, M1/M2), controlled O (M1), certificate
D (CuZn39Pb3/As, U=5, k=2), required study S and independent laboratory authority H:
178 accepts with 183≤200; 197 is authorized but rejects conformity with 202>200;
520 rejects scope and does not run conformity. No accreditation uncertainty ceiling
is invented. The exact boundary and negative tests are in handover §13.

The experimental baseline need not implement a full wallet, EUDI/EBSI deployment,
ontology reasoner, timestamp service or real accreditation infrastructure. Mark
unsupported paths explicitly. No actual manuscript sources are present; record
manuscript corrections in PAPER_FEEDBACK rather than claiming the paper was edited.
Publication, tags, package releases and new archive identifiers are separate actions.
