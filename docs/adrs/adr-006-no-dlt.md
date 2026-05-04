# ADR-006 No Distributed Ledger Technology

## Status

Accepted

## Context

Distributed ledger technology (DLT / blockchain) is sometimes proposed as a
trust registry or revocation mechanism for Verifiable Credentials. Several
reviewers of the conceptual framework asked whether a blockchain should anchor
the accreditation chain.

## Decision

This repository does not use any DLT. Trust is established through:

1. A signed `TrustRegistryCredential` (ADR-004) anchored at a root authority
   `did:web` endpoint.
2. Data Integrity proofs (eddsa-rdfc-2022) on every credential.
3. Bitstring Status List v1.0 (ADR-003) for revocation, hosted by the issuing
   authority.

## Consequences

- No dependency on a specific chain, wallet, or token ecosystem.
- Trust registry and status list hosting is the responsibility of the issuing
  authority — operationally simpler than running a node.
- DLT-based anchoring can be layered on top by a deployment that requires it,
  without changes to credential schemas or the verification policy.
- This decision is motivated by the principle that trust in quality
  infrastructure derives from legal and institutional authority (accreditation
  law), not from computational consensus.
