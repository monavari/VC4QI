# Scenario catalogue

## Existing legacy scenarios

Demo labels are UI metadata, not externally governed profile IDs. Seven entries cover
A–F with two D application variants. Eight generated example directories include the
older GS scheme case as well. All require migration to the new binding/results.

| Fixture directory | Demo | Behavior to preserve | Current graph proof assurance |
| --- | --- | --- | --- |
| calibration-direct-accreditation | A | Direct calibration authority | Demo skips graph proofs |
| calibration-capability | B | Permitted bounded operational scope | Demo skips graph proofs |
| nmi-legal-mandate | C | Statutory/metrology route | Demo skips graph proofs |
| gs-scheme-authorization | No separate current entry | Scheme permission combined with competence | Inspect selected test runner; no new-model claim |
| gs-hair-dryer-hitl | D | Serialized product, GS certificate, in-house reports and assessments | GS demo enables proof checks using test keys |
| gs-hair-dryer-external-test-lab-hitl | D | Independently authorized external laboratory; GS certification/inspection | GS demo enables proof checks using test keys |
| reference-material-recursive | E | RM, bounded scope and independently authorized study | Demo skips graph proofs |
| test-report-supported-dcc | F | Test report uses supporting calibration | Demo skips graph proofs |

The current constant fixture key callback is not adversarial issuer/key-binding coverage.
Root `pnpm test:scenarios` runs two legacy tests with graph proof skipping. Other package
and demo tests cover additional behavior; neither count proves the full target model.

## Target acceptance

The [83-case ledger](../plans/standards-first-acceptance.csv) records carrier V, protection P,
scope S, composition C and adapter/UI E cases. Each must assert evidence state, gate/reason
and relevant route/record/arithmetic witness. Re-sign semantic mutations; leave signatures
invalid only for protection tests. A negative boolean alone is insufficient evidence.

The RM headline is 178 accepted, 197 authorized but rejected for conformity, 520 rejected
for scope with conformity not run. Required support can be missing (not established) or
wrong-batch (contradicted). Cycles on required dependencies, shared DAGs, global suspensions
and budget exhaustion need distinct controls. Actual guided UI transitions, inspector
selection, reissuance/tampering and simulation labels are I7 acceptance, not proven by a
Vite build. See [MODEL_SPEC](../MODEL_SPEC.md) and [status](../IMPLEMENTATION_STATUS.md).
