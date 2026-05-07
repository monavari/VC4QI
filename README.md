# qi-vc-poc

> Verifiable Credentials reference implementation for Quality Infrastructure

A polyglot (TypeScript + Python) reference implementation of W3C Verifiable
Credentials 2.0 for accreditation, calibration, reference materials, GS mark,
product carbon footprint, and Digital Product Passport use cases.

Built on the three-layer credential architecture
(AccreditationCredential → CapabilityCredential → Domain Credentials)
described in [Monavari et al., 2026].

[![CI](https://github.com/monavari/VC4QI/actions/workflows/ci.yml/badge.svg)](https://github.com/monavari/VC4QI/actions/workflows/ci.yml)
[![CodeQL](https://github.com/monavari/VC4QI/actions/workflows/codeql.yml/badge.svg)](https://github.com/monavari/VC4QI/actions/workflows/codeql.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](LICENSE-docs)

## Status

Active development — paper reference implementation.
See [CHANGELOG.md](CHANGELOG.md) for milestone notes.

| Milestone | Description | Tests |
|-----------|-------------|-------|
| M0 | Repository scaffolding | — |
| M1 | DCC and DRMD schemas + JSON-LD contexts | — |
| M2 | TypeScript core library (`@qi-vc/core`) | 87 |
| M3 | Python core library (`qi_vc_core`) | 61 |
| Paper | Scope algorithm, T1–T12 scenario tests | 12 |

## Architecture

The three-layer credential model:

```
Accreditation Authority (AA)
  └─ AccreditationCredential → issued to CAB
       └─ CapabilityCredential → scope-bounded issuance authorization
            └─ Domain Credentials (DCC, RMC, GS, PCF, DPP) → issued to subjects
```

## Quickstart

```bash
git clone https://github.com/monavari/VC4QI.git
cd VC4QI
make setup           # install toolchain (Node 20 + Python 3.12 + pnpm + uv)
make test            # run all tests
make demo            # open the demo at localhost:5173
```

## Structure

| Directory | Description |
|-----------|-------------|
| `schemas/v1/` | JSON Schema 2020-12 credential schemas |
| `contexts/v1/` | JSON-LD contexts |
| `policies/` | Verification policy + PEX presentation definitions |
| `packages/core-ts/` | TypeScript reference implementation |
| `packages/core-py/` | Python reference implementation |
| `apps/demo-web/` | React demo application |
| `apps/procurement-agent/` | Agentic procurement compliance scenario |
| `examples/` | Golden-path example credentials |
| `docs/` | Architecture docs, scenarios, ADRs |

## Prior Art

This repository builds on [mehranmo/VC-calibration-chain](https://github.com/mehranmo/VC-calibration-chain),
the v0.1 implementation of the same conceptual framework. We acknowledge that
prior work as the foundation for schemas and verification policy architecture.

## License

Code: [Apache-2.0](LICENSE). Documentation: [CC-BY-4.0](LICENSE-docs).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). By contributing you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
