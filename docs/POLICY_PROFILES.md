# Policy Profiles

Policy profiles describe which evidence is sufficient for a verifier use case.
They are intentionally small in v0.2 and do not implement a full rule language.

Profiles can require a target credential type, evidence relation, role,
`authorizationBasis.kind`, supporting credential types, digest checks, status
checks, derivation checks, scope checks, and graph limits.

Profiles may also include an `assessment` block selecting sparse-schema or
non-computable credential types for a verifier-supplied human, agent, or hybrid
assessment. A required assessment fails closed when no evaluator is supplied or
the result is indeterminate. See [Human/agent assessment](ASSESSMENT.md).

Profiles included in `policies/profiles/`:

- `calibration-direct-accreditation`
- `calibration-capability`
- `nmi-legal-mandate`
- `reference-material-recursive`
- `gs-scheme-authorization`
- `gs-hair-dryer-hitl`
- `gs-hair-dryer-external-test-lab-hitl`

Each profile has shared fixtures under `testdata/examples/`.
