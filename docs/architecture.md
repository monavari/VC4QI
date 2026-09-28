# Architecture

The verifier takes a reliance request and a verifier-selected binding and profile. It
resolves candidate evidence within budgets, verifies each artifact's original bytes,
maps protected facts, evaluates obligations gate by gate and returns separate
verification, authorization, support, conformity and decision results with witnesses.
The semantics are in the [model](model.md); the public API is in [API](api.md).

## Repository layout

| Path | Contents |
| --- | --- |
| `packages/core-ts` | Canonical TypeScript library `@qi-vc/core`: the new `reliance` evaluator and the legacy modules |
| `packages/core-py` | Python mirror `qi_vc_core`, checked against the same fixtures and a parity vector |
| `bindings/experimental/` | The RM, calibration and GS bindings: contexts, schemas, manifests, profiles, signed test vectors |
| `apps/demo-web` | Browser demo (legacy graph explorer) and the demonstrator bundled into `site/demo` |
| `site/` | Static project website published to GitHub Pages, with these docs rendered into it |
| `contexts/v1`, `schemas/v1`, `policies`, `testdata/examples`, `examples` | Legacy artifacts of the manuscript-v2.1 model |
| `packages/lims-adapter`, `packages/verifier-service` | Scaffolds only, not working services |

## The new evaluator (`reliance/`)

| Gates | Responsibility | TypeScript modules (Python counterparts in `qi_vc_core/reliance/`) |
| --- | --- | --- |
| Contracts | Request and result types, three-state operators, trace | `types.ts`, `index.ts` |
| Inputs | Binding manifests, verifier profiles, pinned resource catalog | `manifest.ts`, `profile.ts`, `catalog.ts`, `*-node.ts` loaders |
| 0–3 | Plan refusal, bounded resolution, protection, key authorization, identity, validity, status; shared by every binding | `binding-chain.ts`, `rm-v1-artifacts.ts`, `key-authorization.ts`, `status-list.ts` |
| 4–6 (RM) | Claim mapping, routes and restrictions, scope coverage, study support, conformity | `rm-v1-claims.ts`, `rm-scope.ts`, `rm-v1-authority.ts`, `rm-v1-slice.ts` |
| 4–6 (calibration) | Measurement groups, pressure units, CMC floors, three routes, instrument-calibration support | `cal-v1-evaluator.ts`, `cal-v1-slice.ts` |
| 4–6 (GS) | Certification statement, competence AND scheme permission | `gs-v1-evaluator.ts`, `gs-v1-slice.ts` |

Route helpers (typed authorizing reference, principal binding, anchor purpose, validity
at the activity time) are shared across bindings. Each binding adds only its own
mapping, coverage and routes.

Design rules:

- Candidate parsing is not accepted authority; a lower-gate failure can never feed a
  higher gate.
- Only the target and the credentials on the winning route and support chains decide
  the request; failures on unused alternatives are reported as diagnostics.
- Resolution is catalog-only and offline; unknown URIs are refused.
- Configuration selects installed evaluators; nothing executes issuer-supplied code.

## The legacy runtime

`verifier/`, `evidence/`, `edge/`, `policy/`, `scope/`, `assessment/` and
`presentation-query/` implement the manuscript-v2.1 graph model with
`CredentialEvidenceReference` and three serialized relations. They remain the default
API until the I5 switch, and stay available afterwards through the explicit
[legacy profile](api.md#legacy-profile).

## TypeScript and Python

TypeScript is canonical. Python mirrors every supported semantic feature against the
same signed fixtures; the RM parity vector requires identical decisions, witnesses,
arithmetic and gate 4–6 traces. Known differences:

- PyLD has no JSON-LD safe mode. Python rejects undefined terms with a sentinel
  expansion check, which is narrower; closed JSON Schemas reject undeclared properties
  in both languages.
- Python does not issue, derive or verify `ecdsa-sd-2023` proofs; it evaluates
  TS-derived disclosed subsets semantically.
- Two implementations agreeing on a fixture is not independent cryptographic
  conformance.

## Demo and website

`apps/demo-web` is the existing graph explorer: seven legacy scenarios (A–F, with two GS
variants), actor grouping, credential inspection, trace replay and selective
disclosure. Only the two GS variants run graph proof checks; the others skip them.
Replay delay is presentation, not verification time.

The demonstrator (`site/demo`, with RM, DCC, GS and DPP tabs) runs entirely in the
browser: `pnpm -C apps/demo-web build:poster` bundles the repository's RM, calibration
and GS slice evaluators (all seven gates) with the pinned resources, signed fixtures and
verifier profiles of all three bindings into `site/demo/verifier.js`, and CI checks the
bundle is current. `site/m375a/` redirects to the RM tab so the poster QR code stays
valid. Node's `zlib` is replaced
by a bounded gunzip shim (`apps/demo-web/poster/zlib-browser.ts`, using `fflate`), so
status lists are verified in the browser too. Nothing is fetched and no server is
needed; `tests/demonstrator.test.ts` runs the shipped bundle through its scenarios.
