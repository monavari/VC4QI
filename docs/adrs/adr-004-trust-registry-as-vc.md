# ADR-004 Trust Registry as a Signed Verifiable Credential

## Status

Accepted

## Context

The prior art used a static `trusted-aa-list-v1.json` file listing trusted
Accreditation Authority DIDs. This file is not tamper-evident; anyone who can
modify the file can add unauthorised issuers without detection.

## Decision

The trust registry is itself a **Verifiable Credential** (`TrustRegistryCredential`)
signed by the root authority and resolvable via `did:web`. The credential lists
authorised Accreditation Authority DIDs with their accreditation scope and
validity period.

Verification Rule 6 checks that the credential chain's AA DID appears in a
valid, unrevoked `TrustRegistryCredential` fetched from the root authority's
`did:web` endpoint. The registry credential is cached with a configurable TTL.

The registry credential schema is at `schemas/v1/trust-registry-entry.json`.
A signed example lives at `policies/trust-registry-credential.json`.

## Consequences

- Unauthorised modifications to the trust registry are detectable by verifying
  the `TrustRegistryCredential`'s Data Integrity proof.
- The root authority's DID must be configured as a bootstrap trust anchor
  (a single hardcoded value per deployment).
- Adds a network dependency for trust registry resolution; mitigated by caching
  and a local fallback for test environments.
