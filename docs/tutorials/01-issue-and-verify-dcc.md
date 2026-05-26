# Tutorial 01 — Verify a Digital Calibration Certificate

This tutorial uses the v0.2 evidence-graph fixture
`testdata/examples/calibration-direct-accreditation`.

The DCC has `evidence` with a `CredentialEvidenceReference` using
`qi:authorizedBy`, an `authorizationBasis.kind`, and `digestSRI`.

Run:

```bash
pnpm --filter @qi-vc/core test
pytest packages/core-py/tests
```
