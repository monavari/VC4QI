# VC4QI

VC4QI is a reference implementation of a policy-resolved evidence-graph verifier
for Quality Infrastructure credentials. It builds on W3C VC 2.0 primitives and
adds QI-specific evidence relations, policy profiles, scope checks, derivation
checks, and verification traces.

[![CI](https://github.com/monavari/VC4QI/actions/workflows/ci.yml/badge.svg)](https://github.com/monavari/VC4QI/actions/workflows/ci.yml)
[![CodeQL](https://github.com/monavari/VC4QI/actions/workflows/codeql.yml/badge.svg)](https://github.com/monavari/VC4QI/actions/workflows/codeql.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](LICENSE-docs)

## Status

`main` tracks the manuscript v2.1 model: QI credentials are verified by
resolving typed evidence edges and applying a policy profile. The v0.1 chain
implementation is archived in `archive/three-layer-capability-model`.

The `0.3.0` tagged release corresponds to the manuscript submission.

TypeScript is canonical. Python mirrors public behavior using shared JSON
fixtures in `testdata/`.

## Architecture

Domain credentials keep established artifact types such as
`DigitalCalibrationCertificate`, `ReferenceMaterialCertificate`, `TestReport`,
`InspectionReport`, and `ConformityCertificate`.

Authorizing and supporting relationships are expressed through
`CredentialEvidenceReference` entries in VC `evidence`:

```json
{
  "type": "CredentialEvidenceReference",
  "id": "urn:uuid:accreditation-direct-001",
  "relation": "authorizedBy",
  "authorizationBasis": {
    "kind": "accreditation"
  },
  "digestSRI": "sha384-..."
}
```

The three evidence relations are `authorizedBy` (independent authority),
`derivedFrom` (subset-checked projection), and `supportedBy` (supporting
evidence). On authorizing edges, `authorizationBasis.kind` is one of six bare
tokens: `accreditation`, `legalMandate`, `notification`, `schemeAuthorization`,
`recognition`, `operationalScope`. Verifier policy determines which are
sufficient for a use case.

## Quickstart

```bash
pnpm install
pnpm -r build
pnpm -r test
pnpm validate:schemas
pytest packages/core-py/tests
```

## Structure

| Directory | Description |
| --- | --- |
| `schemas/v1/` | JSON Schema 2020-12 credential and policy schemas |
| `contexts/v1/` | JSON-LD contexts and QI evidence context |
| `policies/profiles/` | v0.2 policy profiles |
| `testdata/` | Shared fixtures used by TypeScript and Python |
| `packages/core-ts/` | Canonical TypeScript implementation |
| `packages/core-py/` | Python parity implementation |
| `docs/` | Architecture, vocabulary, policy, and parity docs |

## Core API

TypeScript:

```ts
import { verifier } from '@qi-vc/core';

const trace = await verifier.verifyCredentialGraph(targetCredential, policy, {
  fetchDocument,
  resolveTrustRegistry,
  skipProof: true,
});
```

Python:

```py
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

trace = verify_credential_graph(
    target_credential,
    policy,
    VerifyGraphOptions(fetch_document=fetch_document, skip_proof=True),
)
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Vocabulary](docs/VOCABULARY.md)
- [Policy Profiles](docs/POLICY_PROFILES.md)
- [Presentation Query](docs/PRESENTATION_QUERY.md)
- [Python Parity](docs/PYTHON_PARITY.md)
- [Non-goals](docs/NON_GOALS.md)
- [Implementation Status](docs/IMPLEMENTATION_STATUS.md)

## License

Code: [Apache-2.0](LICENSE). Documentation: [CC-BY-4.0](LICENSE-docs).
