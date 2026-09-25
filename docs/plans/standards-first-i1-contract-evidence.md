# I1 contract, manifest and catalog evidence

**25 September 2026. The first I1 contract slice is complete; the signed vertical
slice and safe protected mapping remain pending.** This work creates no accepted
new-profile reliance result and does not change the default legacy evaluator.

## Implemented boundary

- TypeScript and Python now expose immutable verifier-owned reliance requests,
  separated result surfaces, semantic states `established`, `contradicted` and
  `not_established`, execution states `executed` and `not_run`, and overall decisions
  `accept`, `reject` and `not_established`. Empty claim selections, duplicate claim
  identifiers/pointers, malformed offset times and unsafe resolver budgets are rejected.
  A predicate marked `not_run` cannot establish or contradict anything.
- AND/OR operators implement every ordered pair in the normative truth tables.
  An empty conjunction/disjunction is refused; it cannot authorize by vacuity.
- The [experimental RM v1 manifest](../../bindings/experimental/rm-v1/manifest.json)
  covers all twelve required categories and has a closed top-level JSON Schema.
  Its installation state is deliberately `incomplete`, with every absent context/schema
  named as pending. Both libraries load it as immutable data and refuse selection.
- The isolated static-resource catalog verifies SHA-384 SRI over exact original bytes
  at installation, retains its own byte copy, returns a fresh copy, refuses unknown
  URIs, and applies immutable request-local resource/byte budgets. It performs no
  network fallback and does not share mutable process-global context state.

The request/result API is exported as the TypeScript `reliance` namespace and Python
`qi_vc_core.reliance` module. It runs alongside the old graph verifier. This is a
software contract, not serialized credential vocabulary.

## Review corrections

Sol produced the initial TypeScript contract before its delegated run reported the
workspace-credit failure; its files were reviewed, corrected and tested locally.
Luna produced no manifest files. Repeated delegation was stopped after the same credit
failure. Astra's bounded read-only review found and reproduced three parity/security
issues, all fixed before this evidence was recorded:

1. Node `Buffer.slice()` aliased validated catalog memory at ingress and egress.
   The catalog now uses `Uint8Array.from`; tests mutate both original and returned
   buffers and confirm the pinned internal bytes do not change.
2. A caller could enlarge a TypeScript budget object after opening a session. The
   catalog now copies and freezes validated limits; a regression confirms the original
   one-resource limit remains effective.
3. Python accepted an invalid `+01:60` offset and integers beyond JavaScript's safe
   domain. Both languages now reject invalid offset components and require positive
   integers no larger than `2^53-1` for shared request/catalog budgets.

Astra found no additional blocker in the incomplete manifest or truth tables.

A final Luna review found mutable Python runtime inputs, unchecked state strings and
self-reported installability could bypass the intended contract. Python now normalizes
catalog content to immutable bytes and reconstructs immutable request/result collections;
both languages reject unknown semantic/execution/decision values. Binding selection
remains unavailable until catalog-backed installation verification exists. A Terra
documentation review also narrowed the manifest completion claim so pinned bytes and
hashes remain explicitly pending. Year zero is rejected consistently across languages.

## Validation

Focused validation after the corrections:

| Check | Result |
| --- | --- |
| TS reliance/manifest/catalog tests | 29 passing tests |
| Python reliance/manifest/catalog tests | 14 passing tests |
| TS typecheck | Exit 0 |
| Ruff on new Python files | Exit 0 |
| mypy on `qi_vc_core/reliance` | Exit 0 |

The final complete suite passed **263 TS tests** and **218 Python tests with 1 existing
skip**, plus two root scenarios. Build, TypeScript lint and schema validation also pass.
Python-wide Ruff remains at 204 diagnostics, down from 208 at the original baseline;
mypy remains at its 198-error baseline in 24 legacy files. The new reliance package
and its tests pass focused Ruff and mypy checks. Existing debt is not suppressed here.

## Remaining I1 exit work

The manifest cannot become installable until its safe context and schemas exist with
catalog bytes/hashes. The signed RM target and authoritative artifact still need exact
issuer/controller/`assertionMethod` authorization, independent suite vectors, original
secured-byte retention, safe JSON-LD processing, deterministic fact extraction with
source pointers, and protection/mapping negative controls. Authorization, status,
support, scope and conformity remain unexecuted; authentic D/A documents alone must
still produce overall `not_established`. The complete A/O/D/S/H witness remains I3/I4.
