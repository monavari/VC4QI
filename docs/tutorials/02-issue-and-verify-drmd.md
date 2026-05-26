# Tutorial 02 — Verify a Reference Material Certificate

This tutorial uses the v0.2 recursive evidence fixture
`testdata/examples/reference-material-recursive`.

The certificate is authorized by operational-scope evidence and supported by a
`ReferenceMaterialStudy`. The operational scope is derived from parent authority
evidence, and the study has its own authorizing evidence.

Run:

```bash
pnpm --filter @qi-vc/core test
pytest packages/core-py/tests
```
