# Changelog

## Unreleased

- The GS binding now follows the legacy GS examples: a GS mark on a product unit rests
  on a GS certificate, which needs the GS body's accreditation (competence), the
  scheme authorization (now issued by a fictional authority in the ZLS role) and two
  studies, a type examination and a factory inspection (gate 6). Each study must concern
  the certificate, have passed, precede the certification and be issued under an
  accreditation that permits the activity. New fixtures: `TL-A` (external testing
  laboratory), `FI-1`, `TR-1` to `TR-3`, `GSC-3`, `DPP-3` to `DPP-5`. The accepted
  product is now a hair dryer (household appliances); the toy is outside the scheme
  scope. TypeScript and Python.

- The RM certificate fixtures carry the full certified set of the BAM-M375a DRMD
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
  RM (BAM-M375a), DCC (direct accreditation, capability scope, NMI mandate, supported
  test report), GS (toy accepted, household appliance rejected because the scheme
  permission does not cover it) and an experimental product passport (DPP). Every tab
  runs the repository's own evaluator in the browser, with tamper and withhold controls
  and deep links (`#example/case`). `site/m375a/` redirects to the RM tab.

- Add an experimental product passport to the GS binding: `GsProductPassport`, profile
  `gs-verifier-dpp-1` and route `gs-certified-product`. A passport's GS-mark claim is
  authorized only through a typed reference to a GS certificate that names the passport
  issuer as manufacturer, certifies the passport's model, was in force when the unit was
  placed on the market and itself holds competence AND scheme permission. New fixtures:
  manufacturer controller and status list, `GSC-2` (household appliance) and `DPP-1`/`DPP-2`.
  This is a research illustration, not EU DPP (ESPR) conformance. TypeScript and Python
  mirror it.

- The BAM-M375a demonstrator now runs the complete reliance evaluator (`evaluateRmSlice`,
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
