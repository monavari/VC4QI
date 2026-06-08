# Vocabulary

VC4QI reuses standard VC 2.0 properties before minting QI-specific terms.

Standard properties keep their VC meanings:

- `@context` gives terms semantic meaning.
- `type` identifies broad credential and artifact categories.
- `credentialSchema` points to structural validation rules.
- `evidence` carries authorizing, supporting, and derived-from references.
- `credentialStatus` carries revocation and suspension status.
- `termsOfUse` carries disclosure obligations, audit access, market-surveillance
  rules, and usage restrictions.

## Evidence relations

QI terms are profile terms under `https://w3id.org/qi-vc/vocab/v1#`. Values in
credentials are bare tokens — the JSON-LD context (`@type: @vocab`) expands them
to their full IRIs at the semantic layer.

Three `relation` values are defined:

| Token | Semantics |
|---|---|
| `authorizedBy` | Independent grant on the issuer's own terms. Requires `authorizationBasis`. |
| `derivedFrom` | Subset of a parent scope. Requires `authorizationBasis`. Triggers derivation check. |
| `supportedBy` | Non-authorizing supporting evidence. Must NOT carry `authorizationBasis`. |

## Authorization basis kinds

`authorizationBasis.kind` describes the kind of evidence a policy may evaluate.
It does not itself grant permission. Six values are defined:

| Token | Meaning |
|---|---|
| `accreditation` | Formal third-party accreditation (e.g., ISO/IEC 17025). |
| `legalMandate` | Statutory or regulatory authority. |
| `notification` | Notified body status under EU legislation. |
| `schemeAuthorization` | Authorization by a certification scheme owner. |
| `recognition` | Mutual recognition arrangement between bodies. |
| `operationalScope` | Self-declared operational scope (e.g., RM producer, market surveillance). |

DPP vocabularies are adjacent vocabularies to align with. VC4QI does not redefine
or replace them.
