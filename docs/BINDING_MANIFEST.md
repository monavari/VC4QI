# Binding manifest and experimental RM design

**Design contract updated 25 September 2026. The RM v1 manifest exists but is not
installable; the signed vertical slice remains pending.** The machine-readable
[manifest and schema](../bindings/experimental/rm-v1/) implement the twelve-category
envelope with explicit pending resources. This document explains the candidate; it
is not external conformance. Compare the
[model](MODEL_SPEC.md), [vocabulary](VOCABULARY.md) and handover §3.3.

## Manifest contract

| Required category | Content to pin and test |
| --- | --- |
| Identity/governance | Profile and binding ID, version, owner, experimental/production status |
| Carrier/schema | Exact accepted model versions, credential types, contexts, schemas/shapes and content hashes |
| Fact mapping | Expanded IRIs and native paths for grantor, grantee, activity, scope, support and time |
| Cardinality | Object/collection handling, subjects, policies, schemas and status entries; deterministic composition |
| Discovery/integrity | Reference locations, exact integrity representation, authenticated grant discovery and actor binding |
| Recognized types | What each policy/evidence type can establish, and what it cannot |
| Principal/rights | Equality/equivalence, granting rights, operational-scope maintenance permission |
| Scope/mapping | Dimensions, units, boundaries, missing/empty rules, mapping version and evaluator identifiers |
| Routes/restrictions | Complete alternatives, conjunctions and applicable global restrictions |
| Protection/time/I/O | Suites, key relationships, status authorization/freshness, temporal policy and bounded resolver |
| Support/disclosure | Applicability, required evidence closure, mandatory disclosed facts and presentation rules |
| Evidence/exclusions | Test-vector IDs/paths, real execution evidence, unsupported cases and limitations |

Configuration selects installed, reviewed evaluators. It must not load executable
code from an issuer-provided URL. Missing required mapping is not an established
predicate. Changes to meaning require an explicit manifest version and regression tests.
The current manifest's `installation.status` is `incomplete`, and both libraries
refuse to select it. See the [contract evidence](plans/standards-first-i1-contract-evidence.md).

## Candidate local RM binding

The candidate ID is `https://vc4qi.example/bindings/rm/1`; vocabulary namespace
`https://vc4qi.example/bindings/rm/1#` is abbreviated **exp:** only in this document.
All terms in that namespace are owned by this repository's fictional experiment,
not a QI institution. Version 1 is a proposed binding version, independent of the
software release number. Canonical resource URLs are resolved by a fixture catalog,
not a claim that a public `.example` service exists.

Use VCDM2 and `https://www.w3.org/ns/credentials/v2` plus the candidate context
`https://vc4qi.example/contexts/rm/1`. Candidate schema URLs are
`https://vc4qi.example/schemas/rm/1/{accreditation,operational-scope,certificate,study,lab-authority,authorization-policy,study-reference}.json`.
The braces are a compact enumeration here, not a literal URL to retrieve. I1 must
create and pin every used resource and prove safe expansion, rather than assume these
planned URLs currently resolve. Accepted new credential types are local exp:
`RmAccreditation`, `RmOperationalScope`, `RmCertificate`, `RmStudy`, `RmLabAuthority`,
alongside `VerifiableCredential`. Status uses its selected standard binding.

| Fact | Candidate native path | Expanded meaning and interpretation |
| --- | --- | --- |
| Grantor / result actor | `/issuer` string or `/issuer/id` | Standard VCDM issuer; institutional granting rights checked separately |
| Grant grantee | `/credentialSubject/id` in A/O/H | Standard subject identity, selected by artifact type; equal to actor exercising the grant |
| Domain object / batch | `/credentialSubject/id` in D/S | Standard subject identity, interpreted as material batch in this binding; not the support issuer |
| Permitted activity | `/credentialSubject/permittedActivity[]` in A/O/H | exp:permittedActivity, IRI-valued; local activities `issueRmCertificate`, `maintainRmScope`, `issueRmStudy` |
| Scope records | `/credentialSubject/scope[]` in A/O/H | exp:scope; whole records identified by standard `id` |
| Record constraints | scope record `matrixIri`, `formIri`, `allowedPropertyIris`, `allowedMethodIris`, `range` | Corresponding exp: terms, except record `id`; no field contributes authority by its label alone |
| Range | record `/range/from`, `/range/to`, `/range/unit` | exp:from/to/unit under exp:range; inclusive, exact mass-fraction quantities |
| Authorizing reference | `/termsOfUse[]`, type exp:RmAuthorizationPolicy, `/authorizationCredential/id` | exp:authorizationCredential names an artifact under accepted interpretation; no legacy relation/basis wrapper |
| Required study | `/evidence[]`, type exp:RmStudyReference, `/id` | Standard evidence/reference identity; the type activates profile-defined support applicability |
| Integrity | `/relatedResource[]` keyed by referenced `id` | Standard resource integrity; bind the exact catalog representation, not a renamed custom edge digest |
| Validity | `/validFrom`, `/validUntil` | Standard validity, not implicitly native issuance time |
| Activity time | `/credentialSubject/activityTime` in D/S | exp:activityTime, separately matched to request and grant applicability |

A permits RM issuance and operational-scope maintenance for the producer. O's producer
must match A's grantee, have maintenance permission, and publish only a contained scope;
O's grantee is that same producer. D's issuer binds to O's grantee. S's issuer binds to
H's laboratory grantee. H is established from its own independently configured authority;
commissioning a study does not grant the laboratory competence. These meanings arise
from artifact types, protected facts and the profile, not a serialized edge enum.

Retain the richer RM claim structure rather than flattening it. Candidate claim paths:

| Claim component | Path below `/credentialSubject` |
| --- | --- |
| Material | `/materials/0/matrixIri`, `/materials/0/formIri` |
| Certified group | `/materialPropertiesList/i/isCertified` |
| Selected result | `/materialPropertiesList/i/results/j` |
| Property and method | result `/propertyIri`, `/methodIri` |
| Quantity | result `/data/quantity/quantityKind`, `/value`, `/unit/ucumCode` |
| Expanded uncertainty | result `/data/quantity/uncertainty/expandedUncertainty`, `/coverageFactor` |

These existing-style field names are mapped explicitly to exp: IRIs in the candidate
context (standard `id`, `type`, `name`, `description` retain standard definitions).
`i`/`j` are indices selected by the request, not literal keys. Every intermediate
property also needs a defined context mapping and shape in I1. Labels and uncertified
unrequested properties are inert; requested omitted/uncertified results cannot vanish
into an accepted empty selection. There is no mandatory custom `scopeRef`.

## Cardinality, semantics and closure

The minimal RM candidate admits one subject and one material per artifact, nonempty
scope collections, and one selected authorizing policy for each D/O/S use. Required
support may be a collection. It accepts only explicitly listed context/schema
combinations; multiple recognized combinations need deterministic composition.
Additional optional annotations remain inert. Multiple applicable subjects/policies
that this initial binding cannot select unambiguously are explicitly unsupported,
not resolved by taking the first element. Expanded support can be added under a
versioned binding without changing core logic.

The local quantity vocabulary identifies mass fraction, matrix CuZn39Pb3, disc, arsenic,
M1 and M2 under the same exp: namespace. Unit encodings are exactly `mg/kg` and `kg/kg`
under this experimental quantity interpretation. Normalize by exact powers of ten;
use exact decimal/rational comparisons, inclusive bounds, nonnegative U and k=2.
Contradictory indicators, reversed/nonfinite bounds, missing restricted dimensions and
unsupported asymmetric uncertainty cannot establish scope/decision predicates. The
baseline has no accreditation U ceiling. Do not claim these are validated SIS terms.

The only baseline D route uses O, with O bounded by A; A admitting M2 does not create a
bypass around O's M1 restriction. S and its independent H are required. Authorities
and global suspensions are selected by configured trust/activity applicability, not
all supplied documents indiscriminately. Anchors have explicit purpose/rights.
Alternative discovery and method-succession profiles require their own accepted rules.

Required closure can be supplied offline. The initial RM binding requires authenticated
current status for required non-anchor A/O/D/S/H credentials; status resources have
explicit protection/validity/freshness rules without recursively requiring status for
the same status statement. Request/profile freshness limits and evaluation/activity
instants are explicit inputs with no silent default. Historical reliance is unsupported
without the necessary authenticated historical scope/status evidence.

## Protection, integrity and disclosure

The [I1 protection audit](plans/standards-first-i1-protection-audit.md) records the first
legacy metadata fix and the remaining prerequisites. The signed slice is not complete.

Use existing Ed25519/Data Integrity integration only after I1 audits its claimed suite
transforms, safe expansion and authorized `assertionMethod`/controller mapping. A valid
signature under an unrelated key is insufficient. TS SD is a separately tested supported
representation; Python does not perform its crypto. No fixture may pass protection
through a placeholder proof or constant any-issuer key resolver.

For the candidate JSON resource binding, publish immutable fixture bytes and standard
SRI metadata using SHA-384 over those exact bytes. Do not hash parsed/reserialized JSON
or proof-stripped RDF and call it byte integrity. I1 must validate the chosen representation
against VCDM resource-integrity processing and test byte changes versus unavailability.
Suite-specific proof transforms remain separate. Catalog entries pin canonical URL,
origin/version, bytes, media type and content hash; dynamic status observations remain
time-stamped. Initial fixture resolution is catalog-only and fails closed on unknown URLs.

Disclosure must preserve selected values and their meaning, issuer/subject/activity/time,
restrictions, authorizing policy and support references, plus required integrity/security
facts. Missing required information yields insufficient reliance, not a successful partial
credential. A flat bundle is enough when it establishes closure; do not duplicate full
transitive graphs into each credential. Interactive holder-binding is a separate adapter.

SD-derived objects must not be treated as the original byte-pinned representation. This
candidate's byte-pinned dependencies are full immutable artifacts; deriving the target is
a separate suite-aware representation. If a profile permits disclosure of a dependency,
its integrity/identity binding must explicitly support that representation or require the
original resource. A legitimate SD proof does not excuse an actual required byte-digest
mismatch. This follows the [VCDM resource-integrity guidance](https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/#integrity-of-related-resources)
against placing objects intended for selective/unlinkable disclosure in `relatedResource`.

## Acceptance and excluded coverage

The 178/197/520 and boundary witnesses, V/P/S/C controls, disclosure insufficiency and
offline E15 cases are specified in the [ledger](plans/standards-first-acceptance.csv).
I1 pins actual file paths and independent crypto vectors; new-profile cases remain
`not_implemented` until their executable contracts and tests exist. The local baseline makes no real accreditation, legal compliance, physical
sample truth, public deployment or production ontology claim.

External authority answers and Recognized Entities are additional I6 bindings with their
own manifests, not silently merged into this baseline. Pin Recognized Entities to the
[6 September 2026 snapshot](https://www.w3.org/TR/2026/WD-vc-recognized-entities-1.0-20260906/); initially support credential discovery only, and explicitly
report identifier/VP discovery unsupported. A recognized action/output does not establish
QI scope/support/conformity. A point answer cannot establish O⊆A. Full EBSI/EUDI wallet
integration, timestamps and general ontology reasoning remain outside this migration.
