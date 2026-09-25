# ADR-010 Standards-first bindings and reliance evaluation

## Status

Accepted as the migration target on 22 September 2026; runtime implementation pending.
Supersedes [ADR-008](adr-008-three-relations-no-role.md), the all-relations-in-evidence
contract of [the historical graph ADR](../adr/ADR-006-evidence-graph-architecture.md),
the sole-canonicalizer requirement of [ADR-002](adr-002-urdna2015-canonicalization.md),
the universal registry/root contract of [ADR-004](adr-004-trust-registry-as-vc.md), and
[ADR-007's canonical fixture assumptions](adr-007-m375a-worked-example.md).
It amends ADR-009's disclosure requirements while retaining TS ECDSA-SD and Python's
semantic-only SD scope. Prior decision text remains historical evidence.

## Context

The [new handover](../plans/standards-first-handover-2026-09-21.txt) replaces the old
wire-edge contract and kernel freeze. Institutional authority and support must be
interpreted through accepted native bindings, while required reliance predicates need
explicit evidence states, complete routes and well-founded recursive justification.
Existing crypto/fixtures/demo infrastructure remains useful, but old failure-count
aggregation and wire dispatch cannot represent the new contract reliably.

## Decision

- Keep the repository and replace evaluator abstractions in stages. Maintain TS canonical
  and Python semantic parity, preserving useful regressions and application behavior.
- Require no universal serialized relation/basis vocabulary. Compile obligations from
  protected native facts, including accepted authoritative discovery, with provenance.
- Use recognized `termsOfUse` authorization interpretation, non-authorizing `evidence`,
  selected standard resource integrity and applicable schemas in the baseline binding.
  Publish versioned manifests and explicitly local experimental terms where necessary.
- Separate artifacts and contextual node-uses; apply the seven gates in MODEL_SPEC.
  Authenticate keys, registries, status and original representations before business use.
- Aggregate established/contradicted/not-established obligations independently from trace
  counts. Separate verification, authorization, support, conformity and overall reliance.
- Compose complete routes with applicable global restrictions; check principal and granting
  rights, permitted operational containment, complete scope records and independent support.
- Separate scope from conformity and uncertainty capability/customer rules. The RM baseline
  has no accreditation uncertainty ceiling and must execute all three headline outcomes.
- Use suite-specific transforms and standard resource-integrity rules; no sole generic
  RDF/JSON digest assumption. Pin static resources and keep safe expansion.
- Retain selective disclosure with binding-derived required facts, not a universal custom
  `scopeRef`. Preserve Python's lack of SD crypto as an explicit boundary.
- Support scoped experimental authority answers and pinned Recognized Entities discovery;
  do not claim full draft, wallet, legal or deployed institutional interoperability.

## Consequences

New wire/profile/API versions are required. Explicit legacy adapters verify the original
secured representation before mapping; no silent fallback or transferred signature claim.
The current runtime and test counts establish only legacy capabilities until migration.
Required tests assert state, reason/gate, selected records/routes and arithmetic witnesses.
Documentation and release metadata must distinguish target, implemented, simulated and
unsupported behavior. Existing historical citations are not identifiers for a future release.

See [MODEL_SPEC](../MODEL_SPEC.md), [binding design](../BINDING_MANIFEST.md),
[API migration](../API_MIGRATION.md) and [execution plan](../plans/standards-first-reconciliation.md).
