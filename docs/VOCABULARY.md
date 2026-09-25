# Vocabulary and ownership

**Target binding rules; existing v1 artifacts are legacy.** No universal serialized
edge/basis vocabulary is required by the [model](MODEL_SPEC.md).

| Surface | Accepted responsibility |
| --- | --- |
| `@context` | Versioned JSON-LD meaning, with safe processing and no protected-term redefinition |
| `type`, `credentialSchema` | Declared artifact types and applicable validation; verifier-controlled dispatch |
| `termsOfUse` | Recognized policy/authorization interpretation under a specific accepted binding |
| `evidence` | Recognized non-authorizing supporting information in the baseline binding |
| `relatedResource` | Resource integrity according to the chosen standard representation rules |
| `credentialStatus` | Selected status mechanism with authenticated signer, applicability and freshness |
| DCMI conformance declaration | Profile identification, not a requirement that the verifier trust that profile |

These are carrier roles; VCDM does not define the QI reliance calculus. A type named
like a trust policy has no authority without an accepted interpretation. Native domain
standards may supply their own links, which a binding preserves and interprets explicitly.
See [manifest requirements](BINDING_MANIFEST.md) for exact paths/IRIs and cardinalities.

Internal software names such as node-use, bounded projection, route, support, witness,
`established`, `contradicted`, `not_established` and `not_run` are not credential terms.
A verifier-owned record witness replaces a universal mandatory custom claim-to-parent pointer.

Existing `contexts/v1/`, schemas and fixtures still use `CredentialEvidenceReference`,
`authorizedBy`, `derivedFrom`, `supportedBy`, `authorizationBasis.kind` and sometimes
`scopeRef`. These describe the legacy profile only. The new default must not emit or
require them, nor rename the same generic wrapper to simulate a standards migration.
PROV provenance supplies neither permission nor operational containment.

Local RM fixture vocabulary is authorized only as a versioned experimental binding in
an unmistakable `.example` namespace. Exact domain terms must be documented and mapped
safely; no plausible external SIS/SIRP terms or institutional endorsement may be invented.
Unknown optional annotations remain inert. Missing required meaning blocks reliance.
Use W3C/schema.org terms without shadowing `issuer`, `name`, `description`, `digestSRI`
or `digestMultibase`. Binding configuration is not a new credential vocabulary.
