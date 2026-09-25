# Tutorial 01 — inspect the existing DCC flow

**Executable legacy walkthrough; the new reliance API is not implemented yet.**
Inspect `testdata/examples/calibration-direct-accreditation` and its policy/registry.
Its target uses legacy `CredentialEvidenceReference` entries with bare `authorizedBy`,
`authorizationBasis.kind` and integrity metadata. These are not new-profile requirements.

After [setup](../../CONTRIBUTING.md), run the existing suites:

```bash
pnpm -C packages/core-ts test
.venv/bin/python -m pytest packages/core-py/tests
pnpm test:scenarios
```

The root scenario helper skips graph credential proofs, so its success is semantic
simulation, not complete cryptographic reliance. Inspect trace reasons and the selected
fixture/key setup; do not interpret a legacy boolean as the new result contract.

The migrated walkthrough will select a binding/profile and claims, inspect document
verification, principal/authority route and scope witness, then any requested conformity.
It will use real signed fixtures, not modified JSON retaining old proofs. See
[API migration](../API_MIGRATION.md) and [schema notes](../schemas/digital-calibration-certificate.md).
