# Vocabulary

VC4QI reuses standard VC 2.0 properties before minting QI-specific terms.

Standard properties keep their VC meanings:

- `@context` gives terms semantic meaning.
- `type` identifies broad credential and artifact categories.
- `credentialSchema` points to structural validation rules.
- `evidence` carries authorizing, supporting, recognition, notification, and
  status-provider references.
- `credentialStatus` carries revocation and suspension status.
- `termsOfUse` carries disclosure obligations, audit access, market-surveillance
  rules, and usage restrictions.

QI terms are profile terms under `https://w3id.org/qi-vc/vocab/v1#`. Evidence
relation terms such as `qi:authorizedBy`, `qi:derivedFrom`, and `qi:supportedBy`
are evidentiary descriptors. They are not OAuth-style grants and they are not
new institutional credential classes.

`authorizationBasis.kind` describes the kind of evidence a policy may evaluate,
for example `qi:accreditation`, `qi:legalMandate`, or
`qi:schemeAuthorization`. It does not itself grant permission.

DPP vocabularies are adjacent vocabularies to align with. VC4QI does not redefine
or replace them.
