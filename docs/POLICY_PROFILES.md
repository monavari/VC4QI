# Policy Profiles

Policy profiles describe which evidence is sufficient for a verifier use case.
They are intentionally small in v0.2 and do not implement a full rule language.

Profiles can require a target credential type, evidence relation, role,
`authorizationBasis.kind`, supporting credential types, digest checks, status
checks, derivation checks, scope checks, and graph limits.

Profiles included in `policies/profiles/`:

- `calibration-direct-accreditation`
- `calibration-capability`
- `ptb-legal-mandate`
- `reference-material-recursive`
- `gs-scheme-authorization`

Each profile has shared fixtures under `testdata/examples/`.
