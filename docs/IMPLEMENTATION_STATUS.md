# Implementation Status

## v0.3

Aligned with manuscript v2.1:

- Evidence relations reduced to 3 bare tokens: `authorizedBy`, `derivedFrom`, `supportedBy`.
- `EvidenceRole` enum and all `role` fields removed.
- `AuthorizationBasisKind` reduced to 6 bare tokens; `capability` renamed to `operationalScope`.
- Deleted edge modules for `recognizedBy`, `notifiedBy`, `statusProvidedBy`.
- JSON-LD context updated so bare tokens expand to full IRIs via `@type: @vocab`.
- Profile B canonical values for RM certificate (As in CuZn39Pb3 brass, 178 mg/kg).

## v0.2

Aligned with manuscript v2.0 / v2.1 model:

```text
DomainCredential -- evidence[] --> policy-resolved evidence graph
```

TypeScript is the canonical implementation. Python mirrors the public verifier
behavior using shared JSON fixtures.

## v0.1 Archive

v0.1 implemented the old three-layer chain with authority evidence, capability
evidence, and a domain credential as fixed positions:

```text
authority evidence -> capability evidence -> domain credential
```

That implementation is archived in the branch
`archive/three-layer-capability-model`.
