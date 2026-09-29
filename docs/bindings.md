# Bindings

A **binding** tells a verifier how to read one family of credentials: which contexts,
schemas and types it accepts, where each fact lives, which authority routes exist and
how scope is compared. The core evaluator knows no domain terms; everything
domain-specific comes from a binding and a verifier profile. See the [model](model.md)
for the semantics a binding must respect.

## Implemented experimental bindings

All three bindings are repository-owned, fictional research fixtures under the reserved
`vc4qi.example` namespace. They are not external standards and grant no real
accreditation or legal effect.

| Binding | Use cases | Credential types | Routes | Profiles |
| --- | --- | --- | --- | --- |
| [RM v1](../bindings/experimental/rm-v1/README.md) `…/bindings/rm/1` | reference-material-recursive | `RmAccreditation`, `RmOperationalScope`, `RmCertificate`, `RmStudy`, `RmLabAuthority` | `operational-scope`, `direct-accreditation`; restriction `accreditation-suspension`; required study support | `rm-verifier-1`, `rm-verifier-two-routes-1` |
| [Calibration v1](../bindings/experimental/cal-v1/README.md) `…/bindings/cal/1` | calibration-direct-accreditation, calibration-capability, nmi-legal-mandate, test-report-supported-dcc | `CalAccreditation`, `CalOperationalScope`, `CalLegalMandate`, `CalCertificate`, `CalTestReport` | `direct-accreditation`, `operational-scope`, `statutory-mandate`; required instrument-calibration support for test reports | `cal-verifier-1`, `cal-verifier-capability-1`, `cal-verifier-nmi-1`, `cal-verifier-test-report-1` |
| [GS v1](../bindings/experimental/gs-v1/README.md) `…/bindings/gs/1` | gs-scheme-authorization, experimental product passport | `GsAccreditation`, `GsSchemeAuthorization`, `GsCertificate`, `GsTestReport`, `GsInspectionReport`, `GsProductPassport` | `competence-and-scheme-permission`, `gs-certified-product`; required type-examination and factory-inspection support | `gs-verifier-1`, `gs-verifier-dpp-1` |

Each binding directory holds a hand-authored context, generated schemas and a pinned
resource catalog, a `manifest.json`, verifier profiles and signed test vectors. The
schemas, catalogs and signed fixtures are produced by generators
(`scripts/<binding>/build-resources.mjs` and
`packages/core-ts/scripts/generate-<binding>-artifacts.ts`); every generator has a
`--check` mode that fails on stale output. Never edit generated or signed files by hand.

Each manifest keeps `installation.status: incomplete` until an independent
transformation vector (a published test vector for the proof suite) is in place. The
binding-specific evaluators (`evaluateRmSlice`, `evaluateCalSlice`, `evaluateGsSlice`)
run them explicitly; see [API](api.md).

## Manifest contract

A manifest covers twelve categories. Configuration only selects installed, reviewed
evaluators; it never loads code from an issuer. Any change in meaning needs a new
manifest version and regression tests.

| Category | What it pins |
| --- | --- |
| Identity and governance | Binding ID, version, owner, experimental status |
| Carrier and schema | Model version, credential types, contexts, schemas and content hashes |
| Fact mapping | Native paths and expanded IRIs for grantor, grantee, activity, scope, support and time |
| Cardinality | Subjects, policies, collections and how ambiguous selections are refused |
| Discovery and integrity | Reference carriers, integrity representation and grant discovery |
| Recognized types | What each policy or evidence type can and cannot establish |
| Principal and rights | Identity equality, granting rights, scope maintenance permission |
| Scope and mapping | Dimensions, units, boundaries, empty and missing rules, mapping version |
| Routes and restrictions | Complete alternative routes and global restrictions |
| Protection, time and I/O | Proof suites, key relationships, status, validity and resolver budgets |
| Support and disclosure | Required support, evidence closure and disclosed facts |
| Evidence and exclusions | Test vectors, evidence documents and unsupported cases |

## Common rules across the bindings

- **Authorization references** are typed: `termsOfUse` holds a recognized policy with
  `authorizationCredential: {id, type}`. A route selects its reference by the declared
  type; the resolved credential must have that type, and several references of one type
  are ambiguous rather than "take the first".
- **Integrity**: `relatedResource` pins each referenced credential by SHA-384 SRI over
  its exact signed bytes.
- **Protection**: `eddsa-rdfc-2022` proofs over JSON-LD safe mode, with keys taken from
  the issuer's controller document and authorized for `assertionMethod`.
- **Status**: every credential names a W3C Bitstring Status List signed by its own
  issuer; freshness comes from the profile.
- **Quantities** are decimal strings compared with exact arithmetic. Ordered
  collections (`results`, `measurementGroups`) are JSON-LD lists, so their order, and
  therefore every index pointer in a witness, is covered by the signature.
- **Discovery**: only credentials reached through the chain's own references count.
  Independently discovered grants are declared unsupported.

## RM v1 in detail

The RM binding is the complete reference witness of the [model](model.md#6-scope-quantities-and-conformity):
accreditation A, operational scope O, certificate D, study S and laboratory authority H.

| Fact | Native path |
| --- | --- |
| Grantor or actor | `/issuer` |
| Grantee (A, O, H) | `/credentialSubject/id` |
| Batch (D, S) | `/credentialSubject/id` |
| Permitted activity | `/credentialSubject/permittedActivity[]` (`issueRmCertificate`, `maintainRmScope`, `issueRmStudy`) |
| Scope records | `/credentialSubject/scope[]` with `matrixIri`, `formIri`, `allowedPropertyIris`, `allowedMethodIris`, `range` |
| Authorizing reference | `/termsOfUse[]` of type `RmAuthorizationPolicy` |
| Required study | `/evidence[]` of type `RmStudyReference` |
| Activity time | `/credentialSubject/activityTime` |
| Selected claim | `/credentialSubject/materialPropertiesList/i/results/j` |

The context uses the prefix `rm:` because VCDM 2.0 already protects `exp`. Units are
exactly `mg/kg` and `kg/kg` (1 mg/kg = 10⁻⁶ kg/kg), bounds are inclusive, and U must be
symmetric with k = 2. The only baseline route for D runs through O, which must lie
within A; A admitting M2 does not bypass O's M1 restriction.

## Adding a binding term

Use an exact, validated external term where one exists, with its version and source.
Keep native DCC/D-SI XML, and claim SIS or SIRP support only after a pinned mapping is
validated. Otherwise define the term in a local `.example` namespace with a safe context
and witness-bearing tests. Never mint identifiers under a real institution's namespace
or invent plausible external terms.

## Legacy artifacts

The repository-root `contexts/v1`, `schemas/v1`, `policies` and `testdata/examples`
implement the superseded manuscript-v2.1 model (`CredentialEvidenceReference` with
`authorizedBy`, `derivedFrom`, `supportedBy` and `authorizationBasis.kind`). They are
evaluated only through the explicit [legacy profile](api.md#legacy-profile) and are kept
for provenance and the demo.

| Legacy identifier | Status |
| --- | --- |
| `http://qudt.org/vocab/quantitykind/Pressure`, `MassFraction` and `http://qudt.org/vocab/unit/` | QUDT identifiers used only by the legacy binding |
| `https://w3id.org/qi-vc/terms/v1/matrix/CuZn39Pb3`, `CuZn40Pb2` | Repository placeholders, not institutional governance |
| `https://w3id.org/qi-vc/terms/v1/element/As`, `method/EURAMET-cg-17`, `form/disc` | Legacy placeholders |

The legacy schema validator skips examples without `$schema`, so a passing
`pnpm validate:schemas` does not cover every legacy example.
