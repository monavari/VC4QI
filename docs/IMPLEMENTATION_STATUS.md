# Implementation status

**Validated 24 September 2026. D0–D4 and I0 complete; runtime remains legacy.**
The [handover](plans/standards-first-handover-2026-09-21.txt) and [model](MODEL_SPEC.md)
are requirements, not implementation evidence. No new-model acceptance case is claimed
passing by this preparation phase.

## Capabilities and limitations

| Area | Existing behavior / evidence | Work still required |
| --- | --- | --- |
| Graph/types/policy | Three serialized relations and six basis labels, legacy policy matcher | Binding compiler, contextual node-uses, complete routes/restrictions and explicit legacy adapter |
| Results | `verified` from absence of FAIL | Three-state obligation evaluation; separate verification and reliance |
| Principal/scope | I0 complete-record matching, finite pressure bounds, RM retry and DCC method/group safety | Missing-principal safeguards, binding-defined projection, exact RM quantities and witnesses |
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
sets `safe: false`; this remains a migration gap. I0 repaired uv/Make setup and CI pins;
the dedicated new-profile, offline and UI coverage remains future work.

## I0 results, 24 September 2026

226 TS tests and 196 Python tests pass, with one existing Python skip. This includes
38 shared unsigned vectors plus one non-finite-bound test per language. Build, scenarios,
schema checks and TS lint pass. Locked uv/Make setup and CI package-manager pins are repaired.
Python lint retains baseline debt: Ruff core diagnostics decreased 208→204, mypy remains
198; no new diagnostics were added. See [I0 evidence](plans/standards-first-i0-evidence.md)
for exact commands, inventories and limitations. All 83 new-profile acceptance cases
remain unimplemented; eleven have partial legacy predicate evidence.

## I1 prerequisite, 24 September 2026

The proof verifiers now reject unsupported received metadata and preserve supported
options in their hash input. Seven bypass controls failed before the fix; all eight
shared controls now pass in each language. Current totals are **234 TS passed; 204
Python passed, 1 skipped**. Build, scenarios, TS lint and schema checks pass; existing
Python lint debt remains. See [I1 protection audit](plans/standards-first-i1-protection-audit.md).
The executable manifest, new request/result API, safe protection/catalog path and signed
RM slice are still pending. I0's four GitHub CI jobs passed for `8356b42`.

## Migration and historical claims

Work branch: `refactor/standards-first-reconciliation`, retaining merged registry,
governed-identifier and GS work. The missing `63231d2` scope patch's safety properties
were reproduced in I0. D0–D4 updated documentation; I1–I8 implement the new evaluator.
Track outcomes in the [83-case ledger](plans/standards-first-acceptance.csv) and
[requirements map](plans/standards-first-traceability.md), with commands and witnesses.

Historical v0.3.0 claims concern the manuscript-v2.1 implementation. The prior model/task
are [preserved snapshots](history/README.md); earlier execution reports remain in
[RECONCILIATION_REPORT](../RECONCILIATION_REPORT.md). v0.1's fixed chain is retained on
`archive/three-layer-capability-model`. `CITATION.cff` retains existing historical metadata;
its DOI has not been verified as an archive of the new work. No new release, DOI,
publication, full standards conformance or external institutional endorsement is claimed.
