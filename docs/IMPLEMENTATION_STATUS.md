# Implementation Status

## v0.2

`main` is being refactored to the manuscript v2.0 / v2.1 model:

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
