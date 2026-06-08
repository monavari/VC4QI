# Changelog

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
