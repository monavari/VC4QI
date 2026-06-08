# ADR-008: Three evidence relations, no EvidenceRole

**Status**: Accepted  
**Date**: 2026-06-08  
**Relates to**: ADR-005 (VC chain design)

## Context

The v0.2 model included six `qi:`-prefixed `EvidenceRelation` values
(`qi:authorizedBy`, `qi:derivedFrom`, `qi:supportedBy`, `qi:recognizedBy`,
`qi:notifiedBy`, `qi:statusProvidedBy`) and an `EvidenceRole` enum
(`authorizing`, `informative`, `status-provider`). The manuscript v2.1 paper
reduced this to three relations and removed the role concept entirely.

Additionally, all vocabulary tokens carried an explicit `qi:` prefix in
credential JSON, making the JSON-LD context expansion redundant and coupling
serialized values to the namespace prefix.

## Decision

1. **Three relations only**: `authorizedBy`, `derivedFrom`, `supportedBy`.
   - `recognizedBy`, `notifiedBy`, `statusProvidedBy` are deleted.
   - Their semantics can be expressed via `authorizedBy` with an appropriate
     `authorizationBasis.kind` (e.g., `recognition`, `notification`).

2. **No `EvidenceRole`**: The role of a piece of evidence is derivable from its
   relation type and basis kind. A separate `role` field adds redundancy and was
   never evaluated by any policy rule.

3. **Bare tokens in credential JSON**: Values are written as `authorizedBy`, not
   `qi:authorizedBy`. The JSON-LD context sets `@type: @vocab` on the `relation`
   and `kind` properties so bare tokens expand to their full IRIs at the semantic
   layer. This eliminates the serialization/vocabulary coupling.

4. **Six `AuthorizationBasisKind` values**: `accreditation`, `legalMandate`,
   `notification`, `schemeAuthorization`, `recognition`, `operationalScope`.
   The former `capability` token is renamed to `operationalScope` to better
   reflect its meaning (self-declared operational scope rather than a derived
   capability).

## Consequences

- All credential issuers must use bare tokens (breaking change for v0.2 credentials).
- Policy evaluators no longer match on `role`; matching is by `relation` and
  `authorizationBasis.kind`.
- The edge dispatcher (`evaluateEdge`) handles exactly three cases; removed
  modules reduce attack surface.
- JSON-LD processors see the same expanded IRIs as before; wire format is simpler.
