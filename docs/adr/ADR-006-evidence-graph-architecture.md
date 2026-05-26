# ADR-006 Evidence Graph Architecture

## Status

Accepted for v0.2.

## Context

The v0.1 implementation modeled QI verification as a fixed ordered authority
chain:

```text
authority evidence -> optional capability evidence -> domain credential
```

That model was useful for the first prototype, but it no longer matches manuscript
v2.0 / v2.1, "Digital Trust Chains for Quality Infrastructure: A Verifiable
Credentials Framework". QI workflows are heterogeneous. Accreditation matters, but
not every QI claim is rooted in accreditation. Some claims are authorized by legal
mandate, independent scheme authorization, notification, recognition evidence, or
supporting domain credentials.

## Decision

VC4QI v0.2 uses a policy-resolved evidence graph.

Domain artifacts retain established credential types such as
`DigitalCalibrationCertificate`, `ReferenceMaterialCertificate`, `TestReport`,
`InspectionReport`, and `ConformityCertificate`. Authorizing and supporting
relationships are expressed through VC `evidence` entries whose public type is
`CredentialEvidenceReference`.

The verifier resolves every evidence edge, builds a graph, evaluates edge
semantics, and then asks a policy profile whether the available evidence is
sufficient for the use case.

## Consequences

- VCs represent authority; they do not create it.
- The framework defines no new institutional credential classes.
- Capability evidence is optional. It is one possible `qi:authorizedBy` relation,
  not a mandatory layer.
- Accreditation is one authority source among several.
- Supporting evidence is often another domain credential.
- Derived vs independent authority is an edge property, not a credential type
  property.
- Presentation Exchange and DCQL can request credentials or fields, but they do
  not replace the QI verifier.
- TypeScript is the canonical implementation.
- Python mirrors public behavior using shared JSON fixtures and trace codes.

## Implementation Notes

The old v0.1 implementation has been archived in the Git branch
`archive/three-layer-capability-model`. The `main` branch now carries the v0.2
evidence-graph implementation.
