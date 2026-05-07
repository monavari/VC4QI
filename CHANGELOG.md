# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Paper alignment: `policies/verification-policy-v1.json` — machine-readable
  six-rule verification policy with full reason-code table (Table 3).
- Paper alignment: `docs/adrs/adr-007-m375a-worked-example.md` — decision
  record for the M375a canonical DRMD fixture.
- Paper alignment: verifier Rule 0 — optional eddsa-rdfc-2022 cryptographic
  proof check; runs when `VerifyOptions.resolveKey` is provided; gap documented
  in paper §9 Limitation 2.
- `infra/w3id/.htaccess` — redirect rules for the w3id.org/qi-vc namespace
  (pending PR to perma-id/w3id.org).

## [0.3.0] — M3 + Paper Alignment

### Added

- `packages/core-py/` — Python core library with functional parity to
  `@qi-vc/core`: modules for types, base58btc, URDNA2015 canonicalization,
  eddsa-rdfc-2022 proofs (PyNaCl), Bitstring Status List, trust registry,
  issuer, scope-inclusion, and six-rule verifier. 61 pytest tests including
  cross-language interop (TS signs → Python verifies).
- `packages/core-ts/src/scope/index.ts` — scope-inclusion algorithm (paper
  §6.2, Listing 4): DCC range/method/uncertainty and DRMD
  matrix/property/uncertainty checks; derivation check (Rule 2b).
- `tests/scenarios/` — T1–T12 scenario test catalogue (Appendix C, Table C1):
  10 failure cases + 2 positive tests, all passing.
- `examples/accreditation/` — ISO/IEC 17025 pressure (DAkkS D-K-12345-67-89)
  and ISO 17034 BAM (D-RM-11075-01-00) AccreditationCredential examples.
- `examples/capability/` — DCC pressure and DRMD BAM CapabilityCredential
  examples with `constraints.scopeEntries`.
- `examples/rm/reference-material-certificate-multi-lab.jsonld` — DRMD Variant
  B for M375a with three characterizing labs and `characterisationOf` evidence.
- Root `vitest.config.ts` to run scenario tests from the repo root.

### Fixed

- `examples/rm/reference-material-certificate.json`: corrected BAM
  `accreditationNumber` to real DAkkS reference `D-RM-11075-01-00`.
- `checkDerivation` in scope module: now iterates `constraints.scopeEntries`
  instead of reading `constraints.range` directly.
- `checkDrmdScopeInclusion`: matrix filtering only applies when the credential
  material carries an explicit `matrix` field; alloy product names are not scope
  categories.

## [0.2.0] — M2

### Added

- `packages/core-ts/` — TypeScript core library (`@qi-vc/core`) with 87
  passing tests covering: base58btc, URDNA2015 canonicalization, eddsa-rdfc-2022
  Data Integrity proofs, Bitstring Status List, trust registry, issuer, and
  six-rule chain verifier.
- `packages/core-ts/scripts/gen-interop-fixture.ts` — generates the
  cross-language interop fixture used by the Python test suite.

## [0.1.0] — M1

### Added

- `schemas/v1/` — JSON Schema 2020-12 definitions for
  `DigitalCalibrationCertificate` and `ReferenceMaterialCertificate`.
- `contexts/v1/` — JSON-LD contexts `qi-calibration.jsonld` and `qi-rm.jsonld`.
- `docs/` — architecture overview, scenario catalogue, ADR-000 through ADR-006.
- `examples/` — initial golden-path DCC and DRMD credential examples.

## [0.0.1] — M0

### Added

- Repository scaffolding — governance files, CI skeleton, devcontainer,
  workspace configuration (pnpm + uv), GitHub Actions (CI, CodeQL, release),
  issue/PR templates, Makefile, schema validation script stub.
