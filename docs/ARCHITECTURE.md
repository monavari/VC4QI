# Architecture

**Target architecture; runtime migration pending.** See [MODEL_SPEC](MODEL_SPEC.md)
for normative semantics and [IMPLEMENTATION_STATUS](IMPLEMENTATION_STATUS.md) for
what the current checkout executes.

The verifier accepts a reliance request and an accepted binding/profile. It preserves
secured artifacts, discovers candidate references, validates applicable structure,
identity, protection and time, maps protected native facts, then compiles and evaluates
obligations. It returns separate verification, authorization, support, conformity and
reliance results with source/record/route witnesses. The demo renders that compiled graph.

| Boundary | Responsibility | Current migration surface |
| --- | --- | --- |
| Binding/profile | Exact paths, IRIs, schemas, security and authority interpretation | New manifest plus `contexts/`, `schemas/`, `policies/` |
| Resource/protection | Bounded resolution, immutable identity, suite verification, authenticated status/registry | `utils/`, `proofs/`, `canonicalize/`, `status/`, `trust-registry/` |
| Mapping/compiler | Protected fact provenance; artifact versus contextual node-use | Replace default `evidence/` and wire-enum `edge/` dispatch |
| Obligation evaluator | Three-state composition, routes, restrictions, well-founded support | `verifier/`, `policy/`, TS/Python mirrors |
| Domain evaluator | Complete records, quantity semantics, containment and separate conformity | `scope/` and accepted domain modules |
| Applications | Querying, disclosure, assessment, report/graph UI | `presentation-query/`, `assessment/`, `apps/demo-web` |

The four layers in MODEL_SPEC separate core logic, selected bindings, reference software
and fictional fixtures. Ports remain small with a real baseline implementation. There is
no general remote-code rules engine or invented universal credential graph vocabulary.
Candidate parsing is not accepted authority; lower-gate failures cannot feed higher-gate
business facts. Contextual reliance caching is separate from verified-artifact caching.

The current runtime uses `CredentialEvidenceReference` and three serialized relations.
Those modules remain functional legacy code until the signed vertical slice and full RM
baseline justify switching defaults. Existing graph layout, actor grouping, inspectors,
trace replay and SD presentation are preserved. Replay delay is UI presentation, not
verification time or an assurance claim. Browser stubs and proof skipping must be visible
in assurance reports. Verifier-service and LIMS directories are scaffolds.

See [binding design](BINDING_MANIFEST.md), [migration contract](API_MIGRATION.md),
[policies](POLICY_PROFILES.md) and [execution phases](plans/standards-first-reconciliation.md).
