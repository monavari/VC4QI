# ADR-003 Bitstring Status List v1.0 over StatusList2021

## Status

Accepted

## Context

Credential revocation and suspension require a status mechanism. The prior art
used `StatusList2021Entry`, which was a draft specification at the time. The
W3C Verifiable Credentials Working Group published **Bitstring Status List v1.0**
as a W3C Recommendation in May 2025, superseding StatusList2021.

## Decision

Use `BitstringStatusListEntry` and `BitstringStatusList` throughout:

- `credentialStatus.type` = `"BitstringStatusListEntry"`
- Status list credentials use `type` = `"BitstringStatusListCredential"`
- Encoding: gzip-compressed bitstring, base64url-encoded, per the W3C Recommendation
  (<https://www.w3.org/TR/vc-bitstring-status-list/>)

`StatusList2021Entry` is not used anywhere in this repository.

## Consequences

- Conformant with the W3C Recommendation as of May 2025.
- Verifiers that only support StatusList2021 will need to be updated; this is
  expected as the ecosystem migrates to the Recommendation.
- The `packages/core-ts/src/status/` and `packages/core-py/qi_vc_core/status/`
  modules implement generate, encode, decode, and bit-check operations.
