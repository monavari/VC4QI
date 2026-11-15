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
| [RM v1](../bindings/experimental/rm-v1/README.md) `…/bindings/rm/1` | reference-material-recursive | `RmpAccreditation`, `FlexibleScopeList`, `RmCertificate`, `HomogeneityStudy`, `LabAccreditation` | `operational-scope`, `direct-accreditation`; restriction `accreditation-suspension`; required study support | `rm-verifier-1`, `rm-verifier-two-routes-1` |
| [Calibration v1](../bindings/experimental/cal-v1/README.md) `…/bindings/cal/1` | calibration-direct-accreditation, calibration-capability, nmi-legal-mandate, test-report-supported-dcc | `CalAccreditation`, `CalOperationalScope`, `CalLegalMandate`, `CalCertificate`, `CalTestReport` | `direct-accreditation`, `operational-scope`, `statutory-mandate`; required instrument-calibration support for test reports | `cal-verifier-1`, `cal-verifier-capability-1`, `cal-verifier-nmi-1`, `cal-verifier-test-report-1` |
| [GS v1](../bindings/experimental/gs-v1/README.md) `…/bindings/gs/1` | gs-scheme-authorization, experimental product passport | `GsAccreditation`, `GsSchemeAuthorization`, `GsCertificate`, `GsTestReport`, `GsInspectionReport`, `GsMarkCredential`, `ProductPassport` | `competence-and-scheme-permission`, `gs-certified-product`, `responsible-economic-operator`; required type-examination and factory-inspection support | `gs-verifier-1`, `gs-verifier-mark-1`, `gs-verifier-dpp-1` |

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

- **Links** are single entries: a `termsOfUse` entry whose `id` is the credential it
  names and whose `type` says what the link means (`IssuedUnderPolicy`, a grant;
  `RecognitionPolicy`, a recognition), or an `evidence` entry. A route selects its
  reference by the type of the credential the entry names; a named credential that cannot
  be read leaves it not established, and several of one type are ambiguous rather than
  "take the first". EBSI's `IssuanceCertificate` term of use names the issuer's
  accreditation the same way, by `id`.
- **Integrity**: each link entry carries `digestSRI`, the SHA-384 SRI of the exact signed
  bytes of the credential it names (VCDM 2.0 §5.3: any object with an `id` MAY carry
  integrity information). There is no separate `relatedResource` list.
- **Protection**: `eddsa-rdfc-2022` proofs over JSON-LD safe mode, with keys taken from
  the issuer's controller document and authorized for `assertionMethod`.
- **Status**: every credential names a W3C Bitstring Status List signed by its own
  issuer; freshness comes from the profile.
- **Quantities** are PTB D-SI 2.2.1 reals (see [Quantity values](#quantity-values-ptb-d-si)):
  decimal strings compared with exact arithmetic. Ordered collections (`results`,
  `measurementGroups`) are JSON-LD lists, so their order, and therefore every index
  pointer in a witness, is covered by the signature.
- **Discovery**: only credentials reached through the chain's own references count.
  Independently discovered grants are declared unsupported.

## RM v1 in detail

The RM binding is the complete reference witness of the [model](model.md#6-scope-quantities-and-conformity):
the accreditation of the RM producer ACC-RMP (the paper's A), the producer's flexible scope
list LIST-RMP (O), the certificate RM178 (D), the homogeneity study HOM-LOT1 (S) and the
laboratory's accreditation ACC-LAB (H). Each credential's code is the last part of its id.

| Fact | Native path |
| --- | --- |
| Grantor or actor | `/issuer` |
| Grantee (A, O, H) | `/credentialSubject/id` |
| Batch (D, S) | `/credentialSubject/id` |
| Permitted activity | `/credentialSubject/permittedActivity[]` (`issueRmCertificate`, `maintainRmScope`, `issueRmStudy`) |
| Scope records | `/credentialSubject/scope[]` with `matrixIri`, `formIri`, `allowedPropertyIris`, `allowedMethodIris`, `range` |
| Authorizing reference | `/termsOfUse[]/id` of type `IssuedUnderPolicy`, with `digestSRI` |
| Recognition reference (ACC-RMP, ACC-LAB) | `/termsOfUse[]/id` of type `RecognitionPolicy`, with `digestSRI`, mirrored in `/issuer/recognizedIn`; never authority |
| Appointment reference (ACC-RMP, ACC-LAB) | `/termsOfUse[]/id` of type `IssuedUnderPolicy` naming a `VerifiableAuthorisationForTrustChain` |
| Appointment permission (APP) | `/credentialSubject/permissionFor[]` with `schemaId`, `types`, `jurisdiction` (EBSI shape); legal basis in `/termsOfUse/legalBasis` |
| Required study | `/evidence[]` of type `HomogeneityStudyReference` |
| Activity time | `/credentialSubject/activityTime` |
| Selected claim | `/credentialSubject/materialPropertiesList/i/results/j` |

The context uses the prefix `rm:` because VCDM 2.0 already protects `exp`. The link
types (`IssuedUnderPolicy`, `RecognitionPolicy`) are not RM terms: every binding maps them to the shared
namespace `https://vc4qi.example/ns/chain#`, so a grant link means the same in RM,
calibration and GS, and the protected contexts can be combined. The appointment terms
(`VerifiableAuthorisationForTrustChain`, `TrustFrameworkPolicy`, `trustFramework`,
`policyId`, `legalBasis`, `permissionFor`, `schemaId`, `types`, `jurisdiction`) expand to
the issuer-dependent IRIs that EBSI's examples and VCDM 2.0 Example 28 expand to, so the
appointment's triples equal EBSI's; EBSI publishes no vocabulary of its own. Each
certified value is a D-SI real at `data/quantity/real` with `quantityTypeQUDT`
`MassFraction`. Units are exactly the D-SI identifiers `\milli\gram\kilogram\tothe{-1}`,
`\kilogram\kilogram\tothe{-1}` and `\percent` (mg/kg = 10⁻⁶ kg/kg, % = 10⁻² kg/kg),
bounds are inclusive, and U must be a symmetric `expandedMU` with k = 2. The only baseline route for D runs through O, which must lie
within A; A admitting M2 does not bypass O's M1 restriction.

## Quantity values (PTB D-SI)

Every measured value in the three bindings is one `si:real` of **PTB D-SI 2.2.1**, the
XML schema the DCC and the DRMD use for numbers, units and uncertainties. D-SI is the
single reference for values; the manifests pin it by URL and SHA-384
(`https://www.ptb.de/si/v2.2.1/SI_Format.xsd`; source tag `2.2.1` of
`gitlab1.ptb.de/d-ptb/d-si/xsd-d-si`, identical apart from line endings). A value is
written in JSON with D-SI's element names:

```json
"real": {
  "label": "As",
  "quantityTypeQUDT": "MassFraction",
  "value": "178",
  "unit": "\\milli\\gram\\kilogram\\tothe{-1}",
  "measurementUncertaintyUnivariate": { "expandedMU": {
    "valueExpandedMU": "5", "coverageFactor": "2",
    "coverageProbability": "0.95", "distribution": "normal" } }
}
```

| D-SI element | Read by the evaluators | Rule |
| --- | --- | --- |
| `quantityTypeQUDT` | yes | A QUDT quantity-kind name (`MassFraction`, `Pressure`, `Power`), compared exactly |
| `value`, `valueExpandedMU` | yes | `xsd:decimal` strings: the subset of D-SI's `si:decimalType` without sign, exponent or `NaN` |
| `unit` | yes | One exact D-SI identifier per unit, from the manifest's `units`; D-SI's unit grammar is not parsed, so `\milli\gram\per\kilogram`, UCUM codes and every unlisted unit are refused |
| `coverageFactor` | yes | Must be 2 |
| `label`, `coverageProbability`, `distribution` | no | Recorded, never interpreted |
| `standardMU`, `coverageIntervalMU`, multivariate forms | no | Not established |

The JSON-LD terms carry D-SI's names but expand in each binding's own `vc4qi.example`
namespace: D-SI is an XML schema with no RDF vocabulary, and terms are never minted
under PTB's namespace. Values stay exact decimals because D-SI's `si:decimalType`
restricts `xs:double`, a binary type in which, for example, 0.7 % is not exactly
0.007 kg/kg. For the same reason the bindings do not use PTB's SIS ontology
(`https://ptb.de/sis/`, v0.2.0), which types values as `xsd:double`. The BIPM SI
Reference Point (`https://si-digital-framework.org/SI`) identifies SI units but has no
mass fraction and no percent, so it is not used either. Scope ranges (`range`) and CMC
floors (`cmcFloor`) keep their local structure, since D-SI 2.2.1 has no range type;
their `unit` is a D-SI identifier.

## Where the terms come from

| Source | Version | Terms in the bindings |
| --- | --- | --- |
| W3C Verifiable Credentials Data Model 2.0 | Recommendation, 15 May 2025 | `issuer`, `credentialSubject`, `validFrom`, `validUntil`, `termsOfUse`, `evidence`, `credentialStatus`, `credentialSchema`, `digestSRI`, `name`, `description` |
| W3C Data Integrity, `eddsa-rdfc-2022`; Bitstring Status List | Recommendations | `proof`; `BitstringStatusListEntry` and status list credentials |
| W3C Recognized Entities | Working Draft, 12 November 2026 (stand-in context) | `RecognizedEntityCredential`, `recognizedIn` (RM) |
| EBSI trust chain, issuer-dependent IRIs (VCDM 2.0 Example 28) | as published in EBSI's examples | `VerifiableAuthorisationForTrustChain`, `TrustFrameworkPolicy`, `permissionFor`, `schemaId`, `types`, `jurisdiction`, `legalBasis` (RM) |
| **PTB D-SI** | **2.2.1** | Every value: `real`, `label`, `quantityTypeQUDT`, `value`, `unit`, `measurementUncertaintyUnivariate`, `expandedMU`, `valueExpandedMU`, `coverageFactor`, `coverageProbability`, `distribution` (all bindings) |
| QUDT quantity kinds, through D-SI | names as D-SI's `quantityTypeQUDT` carries them | `MassFraction` (RM), `Pressure` (calibration), `Power` (GS passport) |
| BAM DRMD (digital reference material document) | 0.3.0 | Structure of the RM certificate: `materials`, `materialPropertiesList`, `isCertified`, `results`, `data`, `quantity` |
| PTB DCC (digital calibration certificate) | structure only, simplified | Measurement groups of results, each a D-SI real (calibration); not native DCC XML |
| EU Digital Product Passport (ESPR) | list of passport information | Passport sections: unique product identifier, GTIN, commodity code, economic operator, facility, technical data, sustainability, compliance information (GS) |
| ISO 17034, ISO/IEC 17025, ILAC and IAF main scope | wording only | Accreditation and scope wording, `mainScope` (RM) |
| VC4QI, `https://vc4qi.example/…` | binding version 1 | Credential types, link types (`IssuedUnderPolicy`, `RecognitionPolicy`), scope records, method, matrix and property identifiers, and the local names of the terms above |

## Adding a binding term

Use an exact, validated external term where one exists, with its version and source,
and add it to the table above. Values follow D-SI 2.2.1 as described above; keep native
DCC or DRMD XML out of the bindings. Otherwise define the term in a local `.example`
namespace with a safe context and witness-bearing tests. Never mint identifiers under a
real institution's namespace or invent plausible external terms.
