# Plan: a published vocabulary and recorded decisions

Status: proposed, not started (16 November 2026). This plan replaces the OIML-only plan
of 15 November; its checked OIML mapping is kept below as one part of the vocabulary.

## Goal

Every term and every design choice in VC4QI can be looked up, linked and cited, and
none reads as arbitrary. That means three things:

- **Meaning:** each VC4QI term has a definition in our own words and, where one exists,
  a mapping to the external concept it follows.
- **Reason:** each design choice has a decision record (ADR) that says what was decided,
  why, and what was rejected.
- **Citation:** each released version is citable through its Zenodo DOI, and every term
  and decision has a stable anchor that can be linked.

This is how comparable projects work: W3C vocabularies and community vocabularies such
as the W3C security vocabulary (`w3id.org/security`), the Data Privacy Vocabulary
(`w3id.org/dpv`) and RO-Crate (`w3id.org/ro/crate`) publish each term with a definition,
status and source at a persistent address, and record their decisions separately.

## Rules

- **Our own words.** Definitions are written by us. External definitions are never
  copied: VIM, VIML and ISO/IEC 17000 are copyrighted, and VC4QI has no agreement with
  OIML, JCGM, ISO or anyone else. We store links, clause numbers and short term names.
- **Reuse only under a published open licence**, with the attribution it asks for (for
  example CC BY 3.0 IGO for the BIPM SI Reference Point).
- **"Mapped to", never "compatible with" or "compliant with"** a body's vocabulary, so no
  endorsement is implied.
- **No identifiers under a real institution's namespace.** Version 1 of the bindings
  keeps `https://vc4qi.example/…`; resolvable identifiers come in step 2.

## Step 1: vocabulary page, decision records, licences (about 2 days, no identifier change)

### 1.1 The vocabulary

- **One source file**, `docs/vocabulary/terms.json`, one entry per VC4QI term:
  - `term`, `iri` (today's `vc4qi.example` IRI), `kind` (credential type, link type,
    property, value element), `bindings` (rm, cal, gs);
  - `definition` in our own words, one or two sentences;
  - `source`: the external concept it follows, with name, edition and clause (W3C VCDM
    section, PTB D-SI element, OIML VIM/VIML concept with its ISO/IEC 17000 clause, QUDT
    kind, BIPM SI unit), or none;
  - `match`: `exact`, `close` or `none`, in the SKOS sense;
  - `status` (`experimental`), `since` (binding version), `decision` (ADR link).
- **A generator**, `scripts/build-vocabulary.mjs`, writes:
  - `docs/vocabulary.md`, a published page with one anchor per term, grouped by kind,
    added to the site navigation;
  - `site/vocab/vc4qi-1.ttl`, the same content as SKOS in Turtle, with `skos:exactMatch`
    or `skos:closeMatch` to the external concept and `dcterms:source` for the clause.
- **Checks:** `--check` mode joins `pnpm check:generated`; a test fails if a term in a
  binding context is missing from `terms.json`, or an entry names a term no context has.
- **What links to it:** "Where the terms come from" in `docs/bindings.md` points to the
  page instead of repeating it; the demo glossaries link each word to its entry.
- **Not changed:** contexts, schemas, credentials, signed fixtures, evaluators, verdicts.

#### Initial mappings (proposed; clause numbers checked at the pinned OIML commit)

Match is `exact` or `close` in the SKOS sense. The ISO/IEC 17000:2020 clause comes from
each VIML concept's own source record.

##### Metrology words (VIM 2012)

| VC4QI term | Binding | OIML concept | Clause | Match |
| --- | --- | --- | --- | --- |
| `quantityTypeQUDT` | all | VIM 1.2 kind of quantity | JCGM 200:2012, 1.2 | exact |
| `unit` | all | VIM 1.9 measurement unit | JCGM 200:2012, 1.9 | exact |
| `value` (of a `real`) | all | VIM 2.10 measured quantity value | JCGM 200:2012, 2.10 | close (a certified value is also a measured quantity value; a GS rated power is a declared value) |
| `measurementUncertaintyUnivariate` | all | VIM 2.26 measurement uncertainty | JCGM 200:2012, 2.26 | close |
| `expandedMU`, `valueExpandedMU` | all | VIM 2.35 expanded measurement uncertainty | JCGM 200:2012, 2.35 | exact |
| `coverageFactor` | all | VIM 2.38 coverage factor | JCGM 200:2012, 2.38 | exact |
| `coverageProbability` | all | VIM 2.37 coverage probability | JCGM 200:2012, 2.37 | exact |
| `methodIri` | rm, cal | VIM 2.6 measurement procedure | JCGM 200:2012, 2.6 | close |
| `range` in a scope record | rm, cal | VIM 4.7 measuring interval | JCGM 200:2012, 4.7 | close (VIM ties it to an instrument; ours is a scope's range) |
| `RmCertificate` | rm | VIM 5.14 certified reference material | JCGM 200:2012, 5.14 | close (the credential is the certificate that accompanies the CRM) |
| `CalCertificate` | cal | VIM 2.39 calibration | JCGM 200:2012, 2.39 | close (the credential records a calibration) |
| CMC floor, traceability chain | cal | VIM 2.41 metrological traceability | JCGM 200:2012, 2.41 | close |

##### Conformity-assessment words (VIML 2022, section A)

| VC4QI term | Binding | OIML concept | Clause | Match |
| --- | --- | --- | --- | --- |
| `RmpAccreditation`, `LabAccreditation`, `CalAccreditation`, `GsAccreditation` | all | VIML A.19 accreditation | ISO/IEC 17000:2020, 7.7 | exact |
| the NAB (issuer of accreditations) | all | VIML A.3 accreditation body | ISO/IEC 17000:2020, 4.7 | exact |
| `FlexibleScopeList`, `CalOperationalScope` | rm, cal | VIML A.16 scope of attestation | ISO/IEC 17000:2020, 7.4 | close (an operational detail inside the accredited scope) |
| `GsCertificate` | gs | VIML A.18 certification | ISO/IEC 17000:2020, 7.6 | exact |
| `GsSchemeAuthorization` | gs | VIML A.30 designation | ISO/IEC 17000:2020, 9.2 | close; bears on the open `GsDesignation` rename |
| GS scheme | gs | VIML A.5 conformity assessment scheme | ISO/IEC 17000:2020, 4.9 | exact |
| `GsTestReport`, `CalTestReport` | gs, cal | VIML A.10 testing | ISO/IEC 17000:2020, 6.2 | close (the report records testing) |
| `GsInspectionReport` | gs | VIML A.11 inspection | ISO/IEC 17000:2020, 6.3 | close |
| appointment (`VerifiableAuthorisationForTrustChain`, APP-NAB) | rm, cal | VIML A.30 designation | ISO/IEC 17000:2020, 9.2 | close (ISO designates a body to do conformity assessment; here the state appoints the accreditation body) |
| the state (issuer of APP-NAB) | rm, cal | VIML A.31 designating authority | ISO/IEC 17000:2020, 9.3 | close |
| recognition (`RecognizedEntityCredential`, REC-NAB, `RecognitionPolicy`) | rm, cal | VIML A.33 recognition | ISO/IEC 17000:2020, 9.5 | close (ISO recognises a result; Global ACI recognises a body) |
| Global ACI's arrangement | rm, cal | VIML A.37 multilateral arrangement | ISO/IEC 17000:2020, 9.9 | close |
| status purpose `suspension` | all | VIML A.21 suspension | ISO/IEC 17000:2020, 8.2 | exact |
| `CalLegalMandate`, the ministry | cal | VIML 1.05 metrological authority (subject), A.30 designation (act) | OIML V 1:2022, 1.05 | close |

##### No OIML concept: stays VC4QI's or its existing source

- `IssuedUnderPolicy`: a link type; its meaning comes from the credential it points to.
- `HomogeneityStudy`: ISO 17034 / ISO Guide 35 term; VIM has none.
- `GsMarkCredential`, `ProductPassport`: no mark or passport concept in VIML section A;
  the passport stays with ESPR.
- Revocation (status purpose `revocation`): ISO/IEC 17000:2020, 8.3 *withdrawal* is not
  in VIML 2022 section A, so it stays with W3C Bitstring Status List.
- ISO/IEC 17025 and ISO 17034 as named standards in `mainScope` and accreditation scopes:
  they are what an accreditation covers, not vocabulary, and stay.

#### SI units

Beside each D-SI unit identifier, the entry names the BIPM SI Reference Point IRI where
one resolves (checked 16 November 2026: `kilopascal`, `megapascal`,
`milligram.kilogram-1` and `watt` resolve; `percent` does not and stays without).
Quantity kinds stay with QUDT: the SI Reference Point answers any `quantities/<name>`
with the same stub, so those IRIs prove nothing. The data is CC BY 3.0 IGO: credit BIPM,
link the licence, keep the original IRIs, imply no endorsement.

#### OIML source pin

Repository <https://github.com/oimlsmart/vocab>, commit
`e2e6e0312c65d9ab0eec530e7f18cea9963f436b` (26 September 2026). Concept IRIs
`https://oimlsmart.github.io/vocab/dataset/<vim-2012|viml-2022>/concept/<id>` resolve to
HTML and carry no persistence promise, so every entry also records the official clause.
The repository's code is MIT; its README states "Copyright OIML" for the terminology
content, which we link and do not copy. VIM is pinned to the third edition (2012).

### 1.2 Decision records

New ADRs in the existing format (`docs/adrs/`), numbered from 011, written from what the
repository implements. Each vocabulary entry links to the ADR behind it.

| ADR | Decision | Status |
| --- | --- | --- |
| 011 | Upward links are `termsOfUse` entries with VC4QI link types (`IssuedUnderPolicy`, `RecognitionPolicy`), one entry per linked credential with its `digestSRI`; why not a W3C or EBSI type | Accepted; implemented |
| 012 | The state's appointment of the accreditation body is a chain root, in the shape of EBSI's `VerifiableAuthorisationForTrustChain` (VCDM 2.0 Example 28) | Accepted; implemented |
| 013 | Recognition is not authority: Global ACI's recognition (W3C Recognized Entities) supports standing but grants nothing | Accepted; implemented |
| 014 | Roots belong to institutions, not domains: RM and calibration share the NAB's appointment and recognition | Accepted; implemented |
| 015 | Every measured value is a PTB D-SI 2.2.1 real, read as an exact decimal | Accepted; implemented |
| 016 | Experimental identifiers live under `vc4qi.example`; JSON terms keep their source's names; nothing is minted under a real institution | Accepted; implemented |
| 017 | Terms carry our own definitions, mapped to W3C, PTB D-SI and OIML VIM/VIML by clause; external definitions are not copied | Proposed (this plan) |

The ADRs state decisions and reasons only; they do not name people, meetings or
unpublished work. Each is reviewed before it is merged.

### 1.3 Licences of what we use

- **Licence column** in "Where the terms come from" (`docs/bindings.md`), one row per
  source: W3C (W3C Software and Document License), PTB D-SI (LGPL-3.0, referenced by URL
  and digest, not copied), QUDT, EBSI, the DRMD (LGPL-3.0 schema, per its README), ESPR,
  ISO standard names, OIML (linked only), BIPM SI Reference Point (CC BY 3.0 IGO).
- **Fix a real gap:** `bindings/vendor/credentials-v2.jsonld` and
  `security-multikey-v1.jsonld` are copies of W3C files, and the W3C licence requires its
  notice on all copies. Add `bindings/vendor/README.md` with each file's source URL,
  retrieval date and the W3C notice, and reference it from `NOTICE`.
- **Record the M375a values' source:** the certified values come from the DRMD
  transcription (`mehranmo/drmd`, v0.3.0); note the source and its licence beside the
  existing demo credit.

## Step 2: resolvable identifiers (later, with binding version 2)

- Register `https://w3id.org/vc4qi/` with a pull request to `perma-id/w3id.org`
  (checked 16 November 2026: the name is free), redirecting to the vocabulary on GitHub
  Pages. If the site moves, only the redirect changes.
- Introduce binding version 2 (`rm/2`, `cal/2`, `gs/2`) with context and term IRIs under
  `w3id.org/vc4qi`; version 1 stays on `vc4qi.example` with its signed fixtures.
- Cost: new contexts, schemas and catalogs, all fixtures signed again for version 2, and
  both evaluators accepting both versions. Larger than the calibration-roots change.
- Optional: register the vocabulary in Linked Open Vocabularies or FAIRsharing.

## Open decisions

- Step 1 as one PR or three (vocabulary, ADRs, licences); the licence fix can go first.
- The `close` matches in the mapping, especially designation for the state's appointment
  and recognition for Global ACI.
- When step 2 happens: with the paper, or later.
- Still open from before: rename GS-S to `GsDesignation`; the playground.
