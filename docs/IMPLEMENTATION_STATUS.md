# Implementation status

**Validated 23 September 2026. Documentation D0–D4 is complete; runtime remains legacy.**
The [handover](plans/standards-first-handover-2026-09-21.txt) and [model](MODEL_SPEC.md)
are requirements, not implementation evidence. No new-model acceptance case is claimed
passing by this documentation update.

## Capabilities and limitations

| Area | Existing behavior / evidence | Work still required |
| --- | --- | --- |
| Graph/types/policy | Three serialized relations and six basis labels, legacy policy matcher | Binding compiler, contextual node-uses, complete routes/restrictions and explicit legacy adapter |
| Results | `verified` from absence of FAIL | Three-state obligation evaluation; separate verification and reliance |
| Principal/scope | Governed identifier equality and existing containment checks | Missing-principal safeguards, complete-record checks, both endpoints, exact quantities and permitted projection |
| RM | Legacy recursive and SD fixtures | Full signed A/O/D/S/H chain; real 178/197/520 scope/conformity witnesses |
| Protection | Ed25519 integration, signed registry work and TS SD tests | Suite/authorized-key audit; safe general expansion; full authenticated status, resource identity and time rules |
| Support/assessment | Graph resolution and GS human/agent/hybrid callback | Independent role-specific support authority and batch/instrument/time applicability |
| TS selective disclosure | Existing ECDSA-SD base/derived examples and tests | New binding mandatory disclosure and suite-aware representation identity |
| Python SD | Semantic processing of TS-derived subset | Explicit assurance boundary; SD crypto remains unsupported |
| Presentation queries | Legacy policy-to-query helpers and limited submission matcher | New accepted native paths; sufficient closure; interactive security only if implemented |
| Demo | Seven entries A–F, two D variants, inspection/replay/SD | Compiled evaluator graph, distinct results/assurance, signed RM controls and actual interaction tests |
| Experimental adapters | No new scope-answer or Recognized Entities adapter | Scoped I6 implementation, pinned manifest and explicit exclusions |
| Services / live institutions | LIMS/verifier-service scaffolds; fictional local inputs | No production service, accreditation infrastructure, wallet/legal interoperability or physical assurance claim |

The current demo enables graph proofs for the two GS application variants and skips them
elsewhere. Its constant fixture-key callback is not an adversarial identity test. The
external laboratory's authority remains independent of the GS body commissioning its
report. Browser stubs and application assessments have their own assurance boundaries.

## Recorded baseline, 21 September 2026

Base `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`; Node 20.19.0, pnpm 10.15.1,
Python 3.12.3. These checks preceded the documentation update and are not new execution:

| Check | Result |
| --- | --- |
| Core TS tests | 187 passed |
| Project-venv Python tests | 157 passed, 1 skipped; system Python lacked pytest |
| Build | Core and demo passed; bundle-size warning |
| Existing pnpm lint | Core typecheck passed; Python lint not run |
| Root scenarios | 2 passed with graph proof skipping |
| Schema command | 4 schemas and 2 examples passed; six examples skipped without `$schema` |

Passing legacy tests does not prove the revised calculus, independent crypto conformance,
offline static resolution or actual UI interactions. Current general canonicalization
sets `safe: false`; this remains a migration gap. Root uv/Make workspace declarations
reference scaffold packages; CI uses pnpm 9 while metadata pins 10.15.1. I0/I8 must repair
commands/coverage rather than treat documentation warnings as fixes.

## Migration and historical claims

Work branch: `refactor/standards-first-reconciliation`, retaining merged registry,
governed-identifier and GS work. The missing `63231d2` scope patch's safety properties
must be recovered or reproduced. D0–D4 are documentation; I0–I8 implement the target.
Track outcomes in the [83-case ledger](plans/standards-first-acceptance.csv) and
[requirements map](plans/standards-first-traceability.md), with commands and witnesses.

Historical v0.3.0 claims concern the manuscript-v2.1 implementation. The prior model/task
are [preserved snapshots](history/README.md); earlier execution reports remain in
[RECONCILIATION_REPORT](../RECONCILIATION_REPORT.md). v0.1's fixed chain is retained on
`archive/three-layer-capability-model`. `CITATION.cff` retains existing historical metadata;
its DOI has not been verified as an archive of the new work. No new release, DOI,
publication, full standards conformance or external institutional endorsement is claimed.
