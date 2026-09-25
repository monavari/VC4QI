# VC4QI

VC4QI is a research reference implementation for evaluating reliance on Quality
Infrastructure credentials. Credentials represent institutional authority and evidence;
verifier-selected profiles and accepted semantics determine what a verifier can rely on.

[![CI](https://github.com/monavari/VC4QI/actions/workflows/ci.yml/badge.svg)](https://github.com/monavari/VC4QI/actions/workflows/ci.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

## Project website and poster demo

The static site in [`site/`](site/) is published to GitHub Pages by
[`pages.yml`](.github/workflows/pages.yml):

- Project page: <https://monavari.github.io/VC4QI/>
- BAM-M375a demonstrator: <https://monavari.github.io/VC4QI/m375a/>
  (QR code: [`site/assets/qr-m375a.svg`](site/assets/qr-m375a.svg))

The demonstrator is a self-contained browser illustration of the target reliance model
with fictional authorities and keys; it does not run the repository's evaluator.

## Current status

The documentation now specifies the **standards-first target**. Runtime code, v1 schemas,
policies and fixtures still implement the legacy manuscript-v2.1 model. I0 restored scope safety and locked workspace setup; the evaluator migration is
tracked; this branch is not a new release or proof that the revised paper's
full witness executes. TypeScript is canonical; Python mirrors supported semantics.

| Capability | Current status |
| --- | --- |
| Legacy graph/policy/scope checks and application assessments | Implemented, with known gaps documented in the migration plan |
| TS ECDSA-SD issuance/derivation/verification | Implemented for existing fixtures; new binding/disclosure rules pending |
| Python processing of TS-derived SD subsets | Semantic evaluation only; no Python SD crypto |
| Demo | Seven legacy entries covering A–F, including two GS variants; assurance varies by scenario |
| New reliance contract / RM binding | TS/Python request/result and three-state operators; RM v1 manifest is explicitly incomplete and non-installable |
| Complete routes and signed RM witness | Runtime implementation pending |
| Authority-issued scope answers / Recognized Entities | Planned experimental adapters, not implemented integrations |
| Verifier HTTP service / LIMS adapter | Scaffold directories |

See [implementation status](docs/IMPLEMENTATION_STATUS.md) for dated test evidence and
limitations. Existing citation metadata describes historical v0.3.0; no new DOI, release
or external endorsement is claimed. The v0.1 chain remains in the archive branch.

## Target model

Accepted bindings interpret protected native facts into internal obligations. The baseline
uses recognized `termsOfUse` authorization policies, `evidence` for support, selected
resource integrity and applicable schemas. The core requires no universal serialized edge
vocabulary. Original signatures, authorized keys, time and mappings are checked before
facts establish authority or support.

Document verification, authorization, support, conformity and overall reliance are separate.
Missing required evidence produces `not_established`; it cannot be hidden in a warning count.
The fictional RM example separates 178 mg/kg accepted, 197 authorized but rejected for
conformity, and 520 rejected for scope. These are target acceptance cases until I4 is proven.

## Run the current implementation

Install Node 20, pnpm 10.15.1, Python 3.12 and uv 0.12.17. From the repository root:

```bash
pnpm install --frozen-lockfile
uv sync --locked --all-packages --extra dev
pnpm -r build
pnpm -C packages/core-ts test
.venv/bin/python -m pytest packages/core-py/tests
pnpm test:scenarios
pnpm validate:schemas
```

The last two commands cover legacy fixtures: root scenarios skip graph proofs and schema
validation skips some examples lacking `$schema`. They do not establish the new signed RM
baseline. Setup/check limitations are in [CONTRIBUTING](CONTRIBUTING.md).
Run the browser demo with `pnpm -C apps/demo-web dev`. Its two GS variants enable graph
proof checks with test keys; other entries currently skip them. Simulation is not verified
reliance even if the current legacy UI presents a green result.

## Structure and API

`packages/core-ts` and `packages/core-py` contain the implemented libraries;
`apps/demo-web` contains the demo. `contexts/v1`, `schemas/v1`, `policies` and `testdata`
contain existing legacy artifacts. `docs` distinguishes the target model and actual status.

The current entry points remain `verifier.verifyCredentialGraph` in TS and
`verify_credential_graph` in Python. Their `verified` result is a legacy contract, not the
new reliance result. See [API migration](docs/API_MIGRATION.md) and the explicitly legacy
[DCC](docs/tutorials/01-issue-and-verify-dcc.md) / [RM](docs/tutorials/02-issue-and-verify-drmd.md)
walkthroughs. No future API is presented as runnable code.

## Documentation

- [Active task](RECONCILIATION_TASK.md) and [execution plan](docs/plans/standards-first-reconciliation.md)
- [Model](docs/MODEL_SPEC.md), [architecture](docs/ARCHITECTURE.md) and [binding design](docs/BINDING_MANIFEST.md)
- [Vocabulary](docs/VOCABULARY.md), [profiles](docs/POLICY_PROFILES.md) and [scope terms](docs/SCOPE_TERMS.md)
- [Assessment](docs/ASSESSMENT.md), [queries](docs/PRESENTATION_QUERY.md) and [selective disclosure](docs/SELECTIVE_DISCLOSURE.md)
- [Parity](docs/PYTHON_PARITY.md), [scenario catalogue](docs/scenarios/scenario-catalogue.md) and [non-goals](docs/NON_GOALS.md)
- [Requirements/evidence map](docs/plans/standards-first-traceability.md) and [running report](RECONCILIATION_REPORT.md)

## License

Code: [Apache-2.0](LICENSE). Documentation: [CC-BY-4.0](LICENSE-docs).
