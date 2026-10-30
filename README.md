# VC4QI

**Verifiable Credentials for Quality Infrastructure.** A research reference
implementation for deciding what a verifier may rely on when it receives
accreditation, calibration, reference-material or certification credentials.

[![CI](https://github.com/monavari/VC4QI/actions/workflows/ci.yml/badge.svg)](https://github.com/monavari/VC4QI/actions/workflows/ci.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

- **Website and documentation:** <https://monavari.github.io/VC4QI/>
- **Demonstrator (RM · DCC · GS · DPP):** <https://monavari.github.io/VC4QI/demo/>

## The idea

Credentials represent institutional authority and evidence; they do not create it. The
verifier selects a profile, and the evaluator answers each question separately: is the
credential authentic and current, is the issuer authorized for this exact claim, is the
required support in place, and does the value meet the verifier's own requirement? Each
answer is *established*, *contradicted* or *not established*, and "cannot tell" never
counts as yes.

In the fictional reference-material example, an arsenic value of 178 mg/kg is accepted,
197 mg/kg is authorized but fails the verifier's limit, and 520 mg/kg is outside the
producer's scope. These cases run on signed test credentials in both languages.

## Status

The standards-first evaluator decides requests for all base use cases (reference
material, calibration, statutory metrology, test reports and GS certification) on signed
fixtures, in TypeScript with a Python mirror, and is the library's only verifier since
0.4.0 (the v0.3 graph verifier remains at tag `v0.3.0`). Authorities, keys and grants
are fictional; no real accreditation or external endorsement is claimed. See
[status](docs/status.md).

## Run it

Install Node 20, pnpm 10.15.1, Python 3.12 and uv 0.12.17, then:

```bash
pnpm install --frozen-lockfile
uv sync --locked --all-packages --extra dev
pnpm -r build
pnpm -C packages/core-ts test
.venv/bin/python -m pytest packages/core-py/tests
```

Rebuild the demonstrator bundle with `pnpm -C apps/demonstrator build`, and build the
website with the demonstrator and documentation locally with `pnpm docs:build` (output
in `_site/`; open `_site/demo/index.html`). More checks are listed in
[CONTRIBUTING](CONTRIBUTING.md).

## Documentation

| Page | Contents |
| --- | --- |
| [Reliance model](docs/model.md) | The rules: carriers, states, gates, authority, scope, support |
| [Status](docs/status.md) | What runs today, the acceptance ledger and open issues |
| [Use cases](docs/use-cases.md) | The example scenarios and how to run them |
| [API](docs/api.md) | The reliance API and the changes from 0.3.0 |
| [Bindings](docs/bindings.md) | How each credential family is interpreted |
| [Architecture](docs/architecture.md) | Code layout, gates and TypeScript–Python parity |

Project records: [acceptance ledger](docs/acceptance-ledger.csv),
[architecture decisions](docs/adrs/README.md) and [changelog](CHANGELOG.md).

## License

Code: [Apache-2.0](LICENSE). Documentation: [CC BY 4.0](LICENSE-docs).
