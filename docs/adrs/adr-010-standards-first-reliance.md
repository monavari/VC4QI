# ADR-010 Standards-first bindings and reliance evaluation

## Status

Accepted on 22 September 2026 and implemented for the experimental RM, calibration and
GS bindings. Since v0.4 the reliance evaluator is the only verifier in the repository.
It superseded ADRs 002, 004, 005, 006 (evidence graph), 007 and 008 and amended 009;
those records remain at tag `v0.3.0`.

## Context

The standards-first requirements replaced the v0.3 wire-edge contract and kernel freeze. Institutional authority and support must be
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
- Separate artifacts and contextual node-uses; apply the seven gates of the model.
  Authenticate keys, registries, status and original representations before business use.
- Aggregate established/contradicted/not-established obligations independently from trace
  counts. Separate verification, authorization, support, conformity and overall reliance.
- Compose complete routes with applicable global restrictions; check principal and granting
  rights, permitted operational containment, complete scope records and independent support.
- Separate scope from conformity and uncertainty capability/customer rules. The RM baseline
  has no accreditation uncertainty ceiling and must execute all three headline outcomes.
- Use suite-specific transforms and standard resource-integrity rules; no sole generic
  RDF/JSON digest assumption. Pin static resources and keep safe expansion.
- Treat selective disclosure as a presentation constraint: a disclosed subset must keep
  every binding-derived required fact. No universal custom `scopeRef`.
- Support scoped experimental authority answers and pinned Recognized Entities discovery;
  do not claim full draft, wallet, legal or deployed institutional interoperability.

## Consequences

New wire, profile and API versions were required. The v0.3 graph verifier was first
isolated behind an explicit legacy profile with no fallback, then removed in v0.4.
Required tests assert state, reason and gate, selected records and routes, and
arithmetic witnesses. Documentation distinguishes implemented, simulated and
unsupported behavior.

See the [model](../model.md), [bindings](../bindings.md) and [API](../api.md).
