# Human/agent assessment

VC4QI separates deterministic verification from domain assessment.

The verifier can always check graph structure, evidence digests, proofs, status,
issuer trust, principal binding, required evidence, and the scope semantics that
have an implemented checker. A JSON Schema can establish document shape, but it
cannot decide every conformity question. Some credentials also lack a sufficiently
rich schema for a deterministic domain decision.

For those cases, a policy can select credential types for semantic assessment:

```json
{
  "assessment": {
    "mode": "required",
    "targetCredentialTypes": ["TestReport", "InspectionReport"],
    "allowedMethods": ["agent", "human", "hybrid"]
  }
}
```

The application supplies an assessment evaluator to the verifier. The evaluator
receives the complete credential node and, when invoked through graph verification,
the target credential plus the resolved evidence graph. This lets a domain adapter
compare related credentials instead of deciding from one sparse report in isolation.
It returns:

- `outcome`: `pass`, `fail`, or `indeterminate`;
- `method`: `agent`, `human`, or `hybrid`;
- `assessorId` and optionally `assessmentId`;
- an explanation suitable for the verification trace.

A required assessment fails closed when the evaluator is absent, throws, uses a
method the policy does not admit, or returns `indeterminate`. An optional
indeterminate result is a warning. A performed `fail` result is always a failure.
There is deliberately no confidence score: the operative policy still produces a
binary verification verdict with reason codes.

## HITL path

The verifier does not contain a long-running workflow engine. A human-in-the-loop
adapter can pause outside the kernel, collect the human decision, and resume or
rerun verification with an evaluator that returns the completed result. A hybrid
adapter can let an agent decide routine cases and route indeterminate cases to a
human reviewer.

Assessment supplements deterministic gates; it cannot override an invalid proof,
schema, status, digest, authority edge, derivation, or graph. It is a conjunct of
the verifier's policy predicate `P`, not a fourth evidence relation or a new trust
anchor.

Portable domain evidence should still be represented by signed credentials such
as `TestReport` or `InspectionReport` and connected with `supportedBy`. The runtime
assessment records how the verifier interpreted sparse or non-computable content.
Its `assessmentId` can refer to an external audit record, but VC4QI does not itself
persist or sign that record.

## GS example

The `gs-hair-dryer-hitl` fixture requires:

- an agent assessment of the product type-examination `TestReport`;
- a human assessment of the manufacturer `InspectionReport`;
- both reports as non-authorizing support for the GS body's type-level
  `GSCertificate`;
- a QR-resolved `Product` VC issued by the manufacturer for one serialized
  unit and `authorizedBy` that certificate;
- a GS issuing-scope credential derived from accreditation and independently
  authorized by ZLS.

The fixture signs the full graph with a TEST ONLY key. Its canonical pass test
runs with proof skipping disabled, in addition to checking the manufacturer ↔
certificate subject binding, digests, trust, policy, derivation, and assessments.

The evaluator demonstrates the assessment path. It does not implement the GS
technical rules or decide legal validity. Exact GS testing bases and the governed
product-scope vocabulary remain domain-governance inputs.

The companion `gs-hair-dryer-external-test-lab-hitl` fixture uses the same QR
and assessment pattern but separates roles. Hanseatic Product Testing issues its
own `IssuingScopeCredential`, derived only from its NAB accreditation, and issues
the `TestReport` under that scope. The GS body is identified as the Schema.org
`customer`, commissions and uses the report, and remains responsible for the
`GSCertificate` and `InspectionReport` under its separate NAB- and ZLS-backed scope.
The assessment binds the report, certificate, serialized product, manufacturer,
customer, and independent laboratory competence path across the resolved graph.
