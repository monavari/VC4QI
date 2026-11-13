# Changelog

## Unreleased

- **One recognition credential per accreditation body (RM, experimental).** A fictional
  Global ACI stand-in issues R, a W3C Recognized Entities credential (Working Draft of
  4 November 2026) with one subject, the NAB, recognized to accredit for RM production
  (ISO 17034) and testing (ISO/IEC 17025), with its own revocation and suspension
  entries. A, A2 and H point up to R through `termsOfUse` (`authorizationCredential` of
  type `RecognizedEntityCredential`), pinned by digest; their schemas accept it, the RM
  context defines the type, and the chain below them is re-signed. A verifier whose
  profile anchors the recognizer (`rm-verifier-global-aci-1`; `bindingRules.recognition`
  names the recognizer purpose, action and main scopes, and no recognition) accepts the
  NAB through R; one that anchors the NAB never relies on R, not even when R is
  unavailable, because a decisive credential's digest pin on a reference off the witness
  paths no longer decides. A recognition of another body contradicts; one that nothing
  references, or that the body issued itself, establishes nothing. Ledger E01–E03 and
  E16–E20 pass in TypeScript and Python. Recognition never widens QI scope: D520 is
  recognized and still rejected. Status lists compare issuer identifiers, so an issuer
  object with an `id` is accepted. This replaces the profile-named signatory list
  `MRA-2026` of the same unreleased branch.
- **Valid when it was issued? (RM, status at the activity time).** A request asks about
  its activity time; status at that time is established only by a list of the same
  issuer in force and fresh then. A list signed later still cannot say what held earlier
  (P13: not established); a list the issuer signed and kept from that time answers it.
  The generator writes the issuers' January 2026 lists to their own archive catalog
  (`test-vectors/signed/status-archive/2026-01`). Freshness is judged at the time asked
  about; for current questions nothing changes. W3C Recognized Entities (draft of
  4 November 2026) evaluates validity windows at a past date but not status at that date.
- **Recognition is not authority (RM).** An accreditation body's authority is its
  national appointment; a recognition by an arrangement anchor tells a verifier that
  trusts the anchor to accept the body, and grants nothing. Every upward link stays a
  `termsOfUse` entry, followed and pinned by digest the same way, and its type now says
  what it means: `IssuedUnderPolicy` (`authorizationCredential`, formerly
  `RmAuthorizationPolicy`) for a grant, `RecognitionPolicy` (`recognitionCredential`)
  for a recognition (VCDM 2.0 §5.5: "the procedures or policies that were used in
  issuing"). A and H name R in a `RecognitionPolicy` and mirror it as
  `issuer.recognizedIn` (W3C Recognized Entities), which must name the same credential;
  a mismatch contradicts, and `recognizedIn` alone establishes nothing. R names the
  action in `recognizedTo` and carries the main scopes in `registration` (the ILAC and
  IAF main scope, an RM binding extension term; `mainScope` was never Recognized
  Entities vocabulary). The stand-in context follows the Working Draft of 12 November
  2026 (`draft-20261112`); earlier text naming a "Working Draft of 4 November 2026" was
  wrong. Schemas (`issued-under-policy.json`, `recognition-policy.json`), fixtures,
  evaluator (TypeScript and Python) and tests are updated; new tests cover a mismatched
  mirror, `recognizedIn` without a policy, and a recognition named as a grant (rejected
  at the schema).
- **The vertical RM layout, rebuilt.** Three columns: the step and the verifier's policy
  check on the left; the chain top to bottom in one place in the middle, with compact
  cards and every control always in its lane; the selected credential on the right,
  laid out for reading (a floating sheet on narrower screens). Recognition links are
  drawn dash-dot and labelled with their policy type; credentials lead with a full name
  and keep the paper's letter as a code; column descriptions and other unneeded text
  are removed. Measured in Firefox at 1920×1080 and 1280×720: no credential moves
  between steps in any layout, no console errors, and every example case gives its
  expected verdict.
- **The RM story opens with the credential's parts, and reconciles Recognized Entities
  with terms of use.** A first page lists each property of D178 (type, issuer,
  credentialSubject, validity, status, termsOfUse, evidence, relatedResource, proof)
  with what W3C VCDM 2.0 says it is for, its value in D178 and how the board draws it,
  and says explicitly why a term of use points up to an authority: VCDM §5.5 lists "the
  identity of the entity under whose authority the issuer issued this particular
  verifiable credential" among what terms of use tell a verifier, §5.1 and §5.9 leave the
  chain to an authorization framework (here, the verifier's profile), and EBSI and cheqd
  use the same place. A page after the proposal reconciles the W3C Recognized Entities
  Working Draft of 12 November 2026: `issuer.recognizedIn` finds where an issuer is
  recognized, and a proposed `IssuedUnderPolicy` term of use binds a credential to the
  grant it was issued under, pinned by digest, every entry required. A draft definition
  and the open questions are on the page; the evaluator does not implement it yet.
- **The demonstrator explains its links (RM, GS).** Every card shows its credential
  type (`RmAccreditation`, `RecognizedEntityCredential`, …). The key sits above the board
  and reads the lines in plain words: *acts under* (`termsOfUse`) and *is backed by*
  (`evidence`). In build steps each new line carries its field's name. Clicking a
  credential explains it: what its type is, who signed it about whom, what it points to
  and what points to it, and every check that touched it. Clicking a line explains the
  link: the field, the pinning digest, the link as signed, what a verifier checks on it,
  and the checks run here. A *Terms* button lists the vocabulary. Lines leave and enter
  on facing sides, share a side without overlapping, and their heads point along the
  visible end of the line. The RM build steps say which field each link is.
- **RM story, top to bottom.** `demo/rm/vertical.html` draws the RM story in lanes of
  authority, with an explainer beside them: what a step adds, the verifier's policy check
  with the checks behind each question, or the credential or link selected. Both RM
  layouts share one configuration (`site/demo/rm/config.js`) and switch while keeping the
  step.
- **The actor board holds still.** Stepping through the RM and GS stories no longer moves
  the board: the header keeps room for a two-line title and the acting parties,
  credentials not yet issued and columns not yet reached hold their place invisibly,
  cards keep a line for tags with the state icon outside the text, the verifier's
  column no longer stretches the credential rows, column headers keep their
  descriptions, re-signed status lists are filled rather than relabelled, the
  recognition band moves under the board, and the scrollbar's room is kept. Measured in
  Firefox at 1920×1080 and 1280×720: no credential moves between steps. A credential
  left out keeps its content on its card, marked "not shown". The suspension tag on A
  reads "suspended".
- **RM story, eleven steps.** Opens with D178 drawn with what each link points to (up,
  down, sideways, beside) next to eight design rules; builds the chain in three steps
  (R; then A and H; then O, S and D); one "Try to break it" step with every manipulation
  live, including clicking a citation line to leave that credential out; one decision
  step where the verifier's rule and its limit (180, 200 or 250 mg/kg) can be changed;
  the verifier abroad; and "Was it valid when it was issued?" (today, at issuance with
  today's lists, at issuance with the lists kept from January). Steps carry one or two
  sentences, guided steps hide locked controls whose value they did not change, actor
  descriptions show while the chain is built, and the board fits 1920×1080. The
  presentation placeholder is removed from the RM story.
- **Accreditations name sets (RM).** A now reads like its annex row: non-ferrous metals
  and alloys, element contents, solid forms, 0.1 mg/kg – 997 g/kg, methods M1 and M2;
  H covers homogeneity studies of element contents in non-ferrous metals and alloys. The
  manifest's `scopeAndMapping.broader` holds the binding's governed hierarchy
  (`skos:broader`: CuZn39Pb3 under copper alloys under non-ferrous metals and alloys,
  discs under solid forms, As, Cu, Zn and Pb under element contents), applied
  transitively to matrix, form and property in containment, claim coverage and study
  scope, in TypeScript and Python. It never runs downward, malformed entries are
  ignored, and labels are still never compared. The chain is re-signed and the parity
  vector regenerated (record identifiers in reasons).
- The laboratory anchor purpose `recognize-rm-laboratories` is renamed
  `accredit-rm-laboratories`, since "recognize" now means Recognized Entities
  recognition; the RM parity vector changes only in that string.
- RM story: it opens with one credential read by where it points (D178 itself: up,
  down, sideways, state, shape and seal, and where each word comes from), adds Global ACI
  as a column and R as the first credential built (marked as a proposal), and closes
  the decision part with a proposal page comparing a list of recognized bodies with one
  credential per recognition. Credential H is the laboratory's accreditation, not a
  "recognition". The verifier's root is one of three (this accreditation body, the
  Global ACI stand-in, another body); two steps show D520 recognized and still out of
  scope, and Global ACI suspending R, which stops the verifier abroad but not one that
  trusts the accreditation body. Suspending R sits in Global ACI's column; links to R are
  grey, and R is tagged, when the verifier accepted without relying on it. The board
  takes any number of actor columns. The GS story says a verifier "trusts" its roots.
- The DPP tab gains the same verifier choice ("Accreditation body only"), using a
  demonstrator-only profile derived from `gs-verifier-dpp-1` without the scheme owner's
  anchor. When a single question cannot be told, the verdict line now gives its first
  reason.
- The examples page (`site/demo/`) is redesigned for presenting: on wide screens the heading, verdict
  and credential sit beside the chain; one colour per state (green holds, red fails,
  amber cannot be told) runs through the verdict, the six questions, the chain's boxes
  and lines; and headings, text and spacing follow one scale. Phones keep one column.
- A second demonstrator page, the **RM story** (`site/demo/rm/`), puts the
  reference-material chain on an actor board: one column each for the accreditation
  body, the laboratory, the RM producer, the customer lab (holder) and the verifier, with
  every credential in its issuer's column and the citations drawn across them. Actors
  join the board as the chain reaches them, starting with the accreditation body alone.
  Sixteen steps build the chain, verify it, manipulate it (an edited value, a withheld study, a
  value outside the accredited range, a suspended accreditation), let three verifiers
  decide (guarded and simple acceptance of 197 ± 5, and one that does not trust the
  accreditation body, where a placeholder marks international recognition as not
  evaluated), and show a labelled presentation placeholder; the last step makes
  every action live. Suspending, revoking and certifying a typed value sign new
  documents in the browser (`apps/demonstrator/live-sign.ts`) with the same proof code
  and public fixture keys as the generator; the bundle test checks that they verify like
  the generated fixtures. The design rules are in `apps/demonstrator/DESIGN.md`.
- A **GS story** (`site/demo/gs/`) puts the GS chain on the same actor board: the
  accreditation body, the scheme owner, the GS body, the manufacturer and the verifier.
  Fifteen steps build the chain up to a product passport, verify it, manipulate it (an
  edited serial, a borrowed mark credential, a withheld type examination, a certificate
  withdrawn live by the GS body), let two verifiers decide (market surveillance, and a
  buyer abroad who does not trust the scheme owner), show a presentation placeholder and
  make every action live, including revoking the accreditation or the scheme permission.
  Both boards now share `site/demo/board.js` and `board.css`. In the credential graph a
  deeper link takes the verification of the credential it points to, so a borrowed link
  is the only red line. The examples page keeps its RM, DCC, GS and DPP tabs, links to
  both stories and opens on the RM example.
- The signed RM v1 accreditation `A` is now broad, shaped after a flexible-scope annex
  row of an RM producer accreditation ("non-ferrous metals and alloys, element
  contents"): As, Cu, Zn and Pb in the brass, methods M1 and M2, 0.1 mg/kg to 997 g/kg
  (written as 997000 mg/kg; its record is now `A#scope-elements`). The producer's
  operational scope `O` is unchanged (As, M1, 50–500 mg/kg) and is now visibly its own,
  narrower list. Every decision of the worked example is unchanged: 520 mg/kg is still
  outside the scope that the certificate draws on. Fixtures and the parity vector are
  regenerated; S13 and two projection tests (TypeScript and Python) move their bounds to
  A's new range. Matrices are still compared exactly, so the record names the brass, not
  a material class.

## 0.4.0 — 2026-11-05

- **Breaking: the v0.3 graph verifier and its material are removed.** The library's only
  verifier is the standards-first reliance evaluator (`evaluateReliance`, Python
  `evaluate_reliance`). Removed: the `legacy` namespace (`verifyCredentialGraph`,
  `evaluateLegacyProfile`), presentation-query helpers, verifier assessments, the
  `ecdsa-sd-2023` selective-disclosure path, the trust-registry credential, the v0.3
  contexts, schemas, policies, examples and scenario fixtures, the legacy graph-explorer
  demo, and the LIMS and verifier-service scaffolds. Tag `v0.3.0` keeps all of them.
  A v0.3 credential under a v0.4 profile stops at the gate-0 carrier check (V02); the
  explicit legacy-profile case V03 is excluded.
- The vendored W3C contexts move to `bindings/vendor/`; binding catalogs are
  regenerated with unchanged digests, and no signed fixture changes.
- The demonstrator bundle builds from `apps/demonstrator` (`pnpm -C apps/demonstrator
  build`); `site/demo/verifier.js` changes only in the embedded manifests' ledger path.
- CI checks every generator's `--check` mode (`pnpm check:generated`) in place of the
  v0.3 schema validator and scenario tests.
- Project records are condensed: the reconciliation report, phase plans, evidence log,
  handover, traceability tables, manuscript feedback and superseded ADRs are removed
  (they remain in the history at commit `fc36bc6`). The acceptance ledger moves to
  `docs/acceptance-ledger.csv`.
- The repository carries no institutional affiliation; the RM example is named M375a.
- GS binding: factory inspection is authorized by the certification body's certification
  competence (`certifyProducts`) instead of a separately accredited `inspectFactories`
  activity, which is removed; the GS fixtures are regenerated. Documentation names the
  fictional accreditation body's DAkkS role, states that the product passports are
  experimental manufacturer credentials outside today's GS scheme, and lists the expected
  outcomes. A new negative case requires certification permission for the inspection.
- The GS mark for a unit and the product passport are separate credentials. The former
  `GsProductPassport` becomes `GsMarkCredential` (`GSM-1` to `GSM-6`, profile
  `gs-verifier-mark-1`): the manufacturer's GS-mark claim for one unit, authorized through
  the GS certificate; its marking must name its own model (`GSM-6` is contradicted). A new
  `ProductPassport` (`DPP-1` to `DPP-3`, profile `gs-verifier-dpp-1`, route
  `responsible-economic-operator`) is shaped after the EU DPP (ESPR): unique product
  identifier, GTIN, commodity code, economic operator, facility, technical and
  sustainability data and compliance information. Its GS-mark entry is supported by the
  unit's GS-mark credential, which keeps its own route; only that entry is interpreted.
  Demonstrator GS and DPP tabs, docs and tests in both languages follow.

### Earlier unreleased changes, included in 0.4.0

- The GS binding now follows the legacy GS examples: a GS mark on a product unit rests
  on a GS certificate, which needs the GS body's accreditation (competence), the
  scheme authorization (now issued by a fictional authority in the ZLS role) and two
  studies, a type examination and a factory inspection (gate 6). Each study must concern
  the certificate, have passed, precede the certification and be issued under an
  accreditation that permits the activity. New fixtures: `TL-A` (external testing
  laboratory), `FI-1`, `TR-1` to `TR-3`, `GSC-3`, `DPP-3` to `DPP-5`. The accepted
  product is now a hair dryer (household appliances); the toy is outside the scheme
  scope. TypeScript and Python.

- The RM certificate fixtures carry the full certified set of the M375a DRMD
  transcription (As 178 mg/kg, Cu 57.68 %, Zn 38.2 %, Pb 3.07 %, all k = 2); the As
  value remains the selected claim.

- The demonstrator page is simpler. The credential card shows the whole claim (for RM,
  the table of certified values). The credential chain is generated from the
  credentials' own `termsOfUse` and `evidence` references and coloured by the
  evaluator's result, instead of being drawn by hand. The GS tab starts at the GS mark;
  the DPP tab checks whether a unit is bound to its certificate (early unit, another
  company).

- **Breaking (drafted as 0.4.0): the default API is standards-first reliance.** The
  package root exports `evaluateReliance(request, catalog, manifest, profile)` and
  `SUPPORTED_BINDINGS` (Python `evaluate_reliance`, `install_binding`), which run the
  installed binding's gate 0–6 evaluator with no fallback. The v0.3 graph verifier and
  presentation queries move under `legacy` (`legacy.verifyCredentialGraph`,
  `legacy.presentationQuery`; subpaths `@qi-vc/core/legacy/verifier` and
  `@qi-vc/core/legacy/presentation-query`; Python `qi_vc_core.legacy`). A Node helper,
  `installBinding(directory, profileName)`, loads a binding's manifest, one profile and
  its pinned resources. The default path imports no legacy module (checked by a test).

- The demonstrator moves to `site/demo/` and covers four examples, chosen from a top bar:
  RM (M375a), DCC (direct accreditation, capability scope, NMI mandate, supported
  test report), GS (hair dryers accepted, a toy rejected because the scheme
  permission does not cover toys) and an experimental product passport (DPP). Every tab
  runs the repository's own evaluator in the browser, with tamper and withhold controls
  and deep links (`#example/case`). `site/m375a/` redirects to the RM tab.

- Add an experimental product passport to the GS binding: `GsProductPassport`, profile
  `gs-verifier-dpp-1` and route `gs-certified-product`. A passport's GS-mark claim is
  authorized only through a typed reference to a GS certificate that names the passport
  issuer as manufacturer, certifies the passport's model, was in force when the unit was
  placed on the market and itself holds competence AND scheme permission. New fixtures:
  manufacturer controller and status list and passports `DPP-1` to `DPP-5`.
  This is a research illustration, not EU DPP (ESPR) conformance. TypeScript and Python
  mirror it.

- The M375a demonstrator now runs the complete reliance evaluator (`evaluateRmSlice`,
  gates 0–6) in the browser, with no server and no preview rules. The page answers six
  questions (authentic, current, understood, authorized, supported, fit for use) with
  controls for the certified value, the verifier's question, a tamper test and a
  withheld study. Status lists are verified in the browser through a bounded gunzip shim
  (`fflate`), and the status-list decoder no longer needs Node's `Buffer`.

- Consolidate the documentation into eight guide pages (`docs/index.md`, `model`,
  `status`, `use-cases`, `api`, `bindings`, `architecture`, `applications`) plus the
  manuscript feedback, one implementation-evidence page and an ADR index. Nineteen
  overlapping or stale pages, nine per-phase evidence files, `RECONCILIATION_TASK.md` and
  the obsolete document inventory are merged or removed. The GitHub Pages site now
  renders the documentation (`pnpm docs:build`), and `pnpm docs:check` fails on any
  broken relative link or anchor in the repository's Markdown (run in CI).

- Add an experimental signed GS certification binding and migrate
  gs-scheme-authorization: the GS mark is relied on only through competence AND scheme
  permission, with the certification covered by both scopes. Both GS application
  variants are retained under the explicit legacy profile.

- Migrate test-report-supported-dcc to the calibration binding: test reports are
  authorized by a testing accreditation and require their instrument's calibration as
  support, including that calibration's own authority over every measurement group.

- Migrate calibration-capability and nmi-legal-mandate to the calibration binding:
  an operational-scope route with bounded projection (no widening, no fallback to the
  accreditation's wider scope) and a statutory-mandate route with no accreditation root.

- Share the gate 0–3 reliance pipeline across bindings and add an experimental signed
  calibration (DCC) binding: measurement groups as required claims, one complete scope
  record per group, no empty-method bypass, and CMC floors as a profile rule.

- Add an explicit legacy profile adapter (`legacy.evaluateLegacyProfile`, Python
  `qi_vc_core.legacy`): the v0.3 verifier on original secured bytes, no proof or status
  skipping, results labelled legacy. Standards-first requests never fall back to it.

- Add claim mapping, per-route claim scope coverage (one complete record, no splicing,
  no fallback to a parent grant), profile-governed method succession and a separate
  conformity step with exact arithmetic (I4). The signed chain for x = 178 is accepted.
  Historical questions are refused rather than answered with current status, scope
  issued after an activity cannot authorize it, and a committed parity vector checks
  that TypeScript and Python agree exactly.

- Add signed RM v1 fixtures, verification-method authorization, Bitstring status lists
  and a gate-numbered reliance trace (I1/I2), plus the operational-scope authority route,
  exact-decimal bounded projection and required study support with its own laboratory
  authority (I3), a second signed route with typed authorization references and an
  accreditation-suspension global restriction outside the route OR (I3). Independently
  discovered grants are declared unsupported. Claim scope
  and conformity (I4) are pending, so the new evaluator accepts no request yet.

- Add parallel TS/Python reliance request/result contracts, truth-table operators,
  an explicitly incomplete RM v1 manifest, and an isolated exact-byte resource catalog.
- Add an opt-in safe JSON-LD EdDSA path, an isolated catalog-backed document loader,
  and a W3C-published signature-vector control for the pending signed RM slice.
- Reject unsupported legacy proof metadata and verify received supported options in both languages; add eight shared controls.

- Repair uv workspace/locked setup and reconcile CI's pnpm pin with package metadata.
- Restore legacy complete-record containment, pressure bounds, RM alternatives and DCC failure retention in TS/Python.
- Add 38 shared unsigned scope vectors plus non-finite-bound checks; classify new-profile coverage and existing lint debt.

- Document the standards-first reliance target, binding design, compatibility break and implementation phases.
- Supersede obsolete agent instructions and wire-model ADRs while preserving historical snapshots and reports.
- Distinguish current legacy runtime, experimental target, simulated assurance and unsupported integrations.
- Add requirements traceability and an 83-case acceptance ledger; no new-model execution or release is claimed.

## v0.3.0

Aligned with manuscript v2.1 (Part A reconciliation):

- **Breaking**: `EvidenceRelation` reduced from 6 `qi:`-prefixed values to 3 bare tokens:
  `authorizedBy`, `derivedFrom`, `supportedBy`.
- **Breaking**: `EvidenceRole` enum deleted; `role` field removed from all types.
- **Breaking**: `AuthorizationBasisKind` reduced from 8 `qi:`-prefixed values to 6 bare tokens:
  `accreditation`, `legalMandate`, `notification`, `schemeAuthorization`, `recognition`,
  `operationalScope` (replaces `capability`).
- Deleted edge modules: `evaluateRecognizedBy`, `evaluateNotifiedBy`, `evaluateStatusProvidedBy`
  (TypeScript and Python).
- JSON-LD context (`contexts/v1/qi-evidence-context.jsonld`) rewritten per §1.5 so bare tokens
  expand to full IRIs via `@type: @vocab`.
- Profile B canonical fixture values: arsenic (As) in CuZn39Pb3 brass, certified value 178 mg/kg.
- All JSON schemas, fixtures, and testdata updated to bare tokens.

## v0.2.0

- Refactored the repository to the manuscript v2.0 / v2.1 evidence-graph model.
- Added `CredentialEvidenceReference`, QI evidence relations, authorization basis
  kinds, and VC-native `digestMultibase` / `digestSRI` evidence binding.
- Added TypeScript evidence graph, policy, edge, status, terms-of-use, and
  presentation-query modules.
- Added Python parity modules using the same shared JSON fixtures.
- Added policy profiles and fixtures for direct accreditation, capability,
  legal mandate, recursive reference material evidence, GS scheme authorization,
  and TestReport supported-by-DCC flows.

## v0.1.x

- Archived in `archive/three-layer-capability-model`.
