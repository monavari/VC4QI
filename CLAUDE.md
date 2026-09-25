# CLAUDE.md — VC4QI project instructions

Follow [AGENTS.md](AGENTS.md), which is the shared current instruction source.
The standards-first [handover](docs/plans/standards-first-handover-2026-09-21.txt)
supersedes the old three-relation lock, six-basis model and blanket kernel freeze.

Start with [RECONCILIATION_TASK.md](RECONCILIATION_TASK.md),
[MODEL_SPEC](docs/MODEL_SPEC.md), [the plan](docs/plans/standards-first-reconciliation.md)
and [implementation status](docs/IMPLEMENTATION_STATUS.md). Work on
`refactor/standards-first-reconciliation`; preserve unrelated changes and the
archive branch. Do not push, tag or publish without session authorization.

TypeScript is canonical; Python mirrors supported semantics. Fixtures are generated
and signed: update generators and reissue, never patch signed output. Preserve
original representations and safe JSON-LD processing. Local experimental binding
terms and narrowly necessary reviewed dependencies are permitted by the handover;
no universal replacement edge vocabulary or whole-stack framework rewrite is required.

The runtime still implements the legacy model. New normative docs describe a target,
not a completed migration. Keep actual commands/results and unknown mechanisms in
the append-only report and acceptance ledger. Setup, checks, demo guardrails,
model allocation and escalation rules are maintained in AGENTS.md rather than
repeated here. Historical model-specific staffing instructions are superseded.
