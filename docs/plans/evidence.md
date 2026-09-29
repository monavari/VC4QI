# Implementation evidence

Commands, results and limitations recorded at the end of each implementation phase,
oldest first. Each section is the evidence as recorded at the time; later sections
supersede earlier statements about what was still open. Current state: [status](../status.md).
The append-only [report](../../RECONCILIATION_REPORT.md) holds the running log.

## I0: baseline and scope safety

**24 September 2026. I0 preparation complete; I1–I8 remain pending.**
The runtime still uses the legacy model. This phase repairs setup and preserves
specified safety properties; it does not implement new-profile reliance.

### Changes and provenance

Base: `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`. Documentation commit:
`51fd945`. Work branch: `refactor/standards-first-reconciliation`. The user authorized
incremental pushes to this branch. No main-branch merge, tag or release is part of I0.
The missing `63231d2` patch remains unavailable; its safety properties were implemented
from handover §1.2. Existing `17dc96d` identifier fixes were retained.

- Root uv now includes only core-py; LIMS and verifier-service remain scaffolds.
  `uv.lock` fixes dependency resolution. Ruff 0.4.5 matches the pre-commit pin;
  mypy is constrained to `>=1.10,<2`. Both are development tools. No new runtime
  dependency declaration was added. Existing broad dependency bounds resolved to
  newer packages, including PyLD 3.3.0 and Pydantic 2.13.5; the locked suites were rerun.
- Make setup/tests/demo use existing package paths. CI and release configuration
  read pnpm 10.15.1 from `packageManager` and use uv 0.12.17 with locked sync.
  CI now also runs on pushes to the reconciliation branch. Release configuration
  was edited locally; its publication workflow was not executed.
- TS/Python derived-record checks require one complete parent for each child record,
  finite ordered pressure endpoints, compatible known units and governed dimensions.
  No cross-record union or dimension splicing is accepted.
- RM checks retry complete alternatives per certified claim, including any explicit
  legacy uncertainty restriction. Different claims can use different records.
  No accreditation uncertainty ceiling is invented when none is supplied.
- DCC restricted-method checks reject empty/missing governed methods. Candidate
  failures remain local to a measurement group; a later passing group cannot erase
  an earlier required failure.

The [38 shared vectors](../../testdata/regressions/scope-containment.json) are unsigned
predicate inputs. Their first 36 cases produced **23 failures and 13 passes in each
language before the fix**, then all passed. Two explicit GS type-domain controls and
one non-finite-bound test per language complete the current 39-test suites. Python
also rejects integers too large for finite floating-point conversion.

### Executed checks

Environment: Node 20.19.0, pnpm 10.15.1, Python 3.12.3, uv 0.12.17. uv uses this
checkout's `.venv`; an inherited unrelated `VIRTUAL_ENV` produces an informational
warning. The first noninteractive setup attempt waited for pnpm's reinstall prompt;
it was stopped and rerun with `CI=true`, which completed the locked installation.

| Command | Exit | Result |
| --- | --- | --- |
| `CI=true make setup` | 0 | Locked pnpm install and uv sync; 33 Python packages resolved. |
| `pnpm -C packages/core-ts test` | 0 | 226 passed in 19 files, including 39 scope-safety tests. |
| `uv run --locked --all-packages --extra dev pytest packages/core-py/tests -q` | 0 | 196 passed, 1 existing skip; includes 39 scope-safety tests. |
| `make test` | 0 | TS, two root scenarios and Python suites passed after locked setup. |
| `pnpm -r build` | 0 | Core/demo typechecks and Vite build; existing bundle-size warning. |
| `pnpm -r --if-present lint` | 0 | Existing TS typecheck-based lint. |
| `pnpm test:scenarios` | 0 | 2 legacy tests; no browser-interaction claim. |
| `pnpm validate:schemas` | 0 | 4 schemas and 2 examples; six examples skipped without `$schema`. |
| `.venv/bin/ruff check .` | 1 | 204 existing diagnostics; baseline comparison below. |
| `make lint` | 2 | TS check passes; Make stops on Ruff exit 1. |
| `.venv/bin/mypy --no-incremental packages/core-py` | 1 | 198 existing diagnostics, unchanged from the base. |

Python lint was compared using identical tool versions against a temporary extraction
of core-py at the base commit. Ruff's core-py diagnostics decreased from **208 to 204**;
mypy remained **198 in 24 files**. Comparing file/rule/message multisets, ignoring moved
line numbers, found **no added diagnostics**. Rules were not disabled and old tests were
not excluded to obtain a pass. `make lint` consequently still stops at Ruff; mypy was
also run separately. This is recorded baseline debt, not a fully green lint claim.

The pnpm reinstall reported an ignored esbuild install script; the actual subsequent
build and tests are the evidence that the installed toolchain works in this environment.
No independent cryptographic conformance, full offline closure or UI interaction test
was added in I0. Remote CI results must be checked separately from these local results.

Documentation validation passed Markdown lint on all 60 project Markdown files,
185 local links, 73 inventory entries, 83 acceptance IDs, static-resource hashes and
the unchanged report prefix. `git diff --check` also passed.

### Migration inventory and acceptance accounting

- [111 files mentioning legacy wire identifiers](standards-first-wire-consumers.csv):
  runtime consumers, generators, contexts/schemas/policies, fixtures, tests and UI.
  This is a lexical inventory with migration treatment, not proof every occurrence
  executes or every indirect consumer has been discovered.
- [Six default-loader resources](standards-first-static-resources.csv): URL, local
  path and observed SHA-256. Both default loaders map these resources. These inventory
  hashes are not yet enforced runtime pins. Unknown URLs still permit network fallback
  unless strict mode is selected; caches are global and caller-seeded. I1/I2 must
  establish provenance, isolation, bounded resolution and mandatory static closure.
- All [83 new-profile cases](standards-first-acceptance.csv) are classified
  `not_implemented`. Eleven S rows cite partial legacy predicate evidence; none is
  marked as a signed new-profile pass. The new binding/compiler/request/witness
  contract and its acceptance harness are still absent.

### Preserved boundaries and next work

The legacy GS binding's explicit finite `authorizedCredentialTypes` domain is checked
when both endpoints have type-only scopes. A missing/empty numerical scope does not
become unrestricted. This compatibility rule is not a new universal binding rule.

Python's old label-based `check_derivation` API is deprecated but preserved for old
callers; it is not the graph evaluator's `check_derived_edge` path and does not receive
this safety assurance. New callers must not use it. DCC's legacy any-of handling for
multiple supplied methods, empty certified/requested selections (S24), unknown new
dimensions, complete temporal validation and exact mass-fraction arithmetic are not
solved here. The new profile must supply these semantics and witnesses in I1–I4.
Calibration CMC floors, optional customer limits and conformity remain separate from
legacy explicit uncertainty maxima.

Astra performed two bounded read-only semantic reviews, finding no blocking issue in
the final I0 scope changes within these stated boundaries. Sol and Luna attempts hit
workspace credit limits and made no edits; local implementation continued without
repeated failed delegation. Next: **I1**, the executable binding manifest, request/result
contract and first real signed RM vertical slice.

## I1: contract, manifest and catalog

**25 September 2026. The first I1 contract slice is complete; the signed vertical
slice and safe protected mapping remain pending.** This work creates no accepted
new-profile reliance result and does not change the default legacy evaluator.

### Implemented boundary

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

### Review corrections

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

### Validation

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

### Remaining I1 exit work

The manifest cannot become installable until its safe context and schemas exist with
catalog bytes/hashes. The signed RM target and authoritative artifact still need exact
issuer/controller/`assertionMethod` authorization, independent suite vectors, original
secured-byte retention, safe JSON-LD processing, deterministic fact extraction with
source pointers, and protection/mapping negative controls. Authorization, status,
support, scope and conformity remain unexecuted; authentic D/A documents alone must
still produce overall `not_established`. The complete A/O/D/S/H witness remains I3/I4.

## I1: protection audit

**24 September 2026. Audit and legacy proof-option hardening complete; I1's binding,
request/result implementation and signed RM vertical slice are still pending.**

I0 commit `8356b42` passed all four [GitHub CI jobs](https://github.com/monavari/VC4QI/actions/runs/36030304329).
The next slice must use a protected interpretation of the original signed artifact.
Astra's bounded read-only review and local source inspection found the following
reuse boundaries. These are implementation findings, not new institutional assumptions.

| Component | Finding at the I0 checkpoint | I1 treatment |
| --- | --- | --- |
| TS `proofs/index.ts`; Python `proofs/__init__.py` | Verification rebuilt `type` and `proofPurpose` and discarded additional options | Fixed for the explicitly supported legacy subset below; audit remaining suite behavior before new-profile use |
| General canonicalization | TS sets `safe: false`; installed TS/Python code uses URDNA2015 | Do not reuse as an asserted safe RDFC implementation without compatibility evidence and independent suite vectors |
| Default document loaders | Caller contexts update process-global caches, including contexts reused by later strict loaders | Implement an isolated immutable catalog; strict network refusal alone is insufficient |
| Raw-key proof API | Caller supplies a public key; successful signature verification alone establishes no issuer/controller right | New profile resolves exact methods and validates controller and `assertionMethod` authorization separately |
| Resource binding | Existing helpers hash transformed/proof-stripped representations | Selected new JSON resource binding uses SHA-384 over immutable original secured bytes; do not rename legacy digest semantics |

The EdDSA verification algorithm derives proof options from the received proof and
validates its configuration. Silently replacing incoming values can therefore test
a different proof configuration from the one presented. See the
[dated EdDSA Recommendation, §§3.2.2–3.2.5](https://www.w3.org/TR/2025/REC-vc-di-eddsa-20250515/#verify-proof-eddsa-rdfc-2022).

### Completed prerequisite: preserve supported received proof options

Both legacy verifiers now accept only their implemented six fields: `type`,
`cryptosuite`, `proofPurpose`, `verificationMethod`, `created`, `proofValue`.
They reject wrong/missing type or purpose and unsupported additional fields. The
hash input copies the received supported options, removes `proofValue` and supplies
the document context. Unknown options are refused rather than silently omitted.

The [shared mutations](../../testdata/regressions/proof-options.json) apply after
signing a fresh test credential. Before the fix, changing/removing type or purpose,
adding challenge/domain, or adding an unknown option all incorrectly verified in
both languages: **7 failed negative controls, 1 passing unchanged control**. All eight
now pass in each language. Stored signed credentials were not edited or regenerated.
These tests use the existing local context loader and real Ed25519 signatures, but
are not independent suite-conformance evidence or issuer-authorization evidence.

Full validation after this prerequisite:

- `make test`: exit 0; **234 TS passed, 204 Python passed, 1 existing skip**, two root scenarios.
- `pnpm -r build` and `pnpm -r --if-present lint`: exit 0; existing Vite bundle warning.
- `pnpm validate:schemas`: exit 0; unchanged four-schema/two-example coverage and six skips.
- Ruff/mypy baseline debt remains tracked separately; no new diagnostic is permitted by this change.

The legacy API intentionally supports fewer proof forms/options than the complete
specification. This patch does not establish complete date validation, proof sets,
controller authorization, safe expansion, resource isolation or new-profile reliance.
Astra reviewed the bounded fix and found no blocking regression within this scope.

### I1 implementation sequence

1. **Contract complete:** create one versioned experimental RM manifest covering all twelve
   [manifest categories](../bindings.md), exact native paths/IRIs, supported
   combinations, cardinalities, installed evaluators and exclusions. The manifest is
   deliberately non-installable; pin resource bytes and hashes with the signed slice.
2. **Complete:** add verifier-owned request and result contracts in both languages. Include selected
   claims, purpose, accepted profile/version, trust, evaluation/activity times and
   budgets. Keep artifact identity distinct from contextual node-use identity.
   The incomplete manifest, isolated catalog and contract evidence are recorded in
   [the I1 contract slice](#i1-contract-manifest-and-catalog).
3. **In progress:** establish an audited protection path with independent published
   vectors, explicit supported proof options, safe context processing and exact
   method/controller binding. TypeScript safe canonicalization, unsafe-term rejection
   and the W3C published combined-hash signature control are complete; Python safe-path
   parity, a full transform vector and issuer/controller/`assertionMethod` binding remain
   pending.
4. **Partially complete:** the immutable byte catalog has bounded resolution,
   original-byte retention, isolation, an offline JSON-LD loader and distinct
   missing/mismatch errors. Populate it with the signed slice and bind its observations
   into the new result contract.
5. Generate a signed fictional RM target and authoritative artifact using safe contexts
   and schemas; extract facts only after protection, preserving native source pointers.
   Pin every used static resource. Leave authority/status/support/conformity as explicitly
   unexecuted until their own phases establish them. Two authentic artifacts do not
   establish overall reliance.

No new acceptance case is marked passing by this prerequisite. Full signed A/O/D/S/H
scope/support/conformity witnesses remain I3/I4; this document is not a claim of a new release.

## I1: safe protection

**25 September 2026. This prerequisite is complete; the signed D/A vertical slice
and issuer/controller authorization remain pending.** It does not establish a new
reliance result or make the experimental RM binding installable.

The TypeScript EdDSA primitive now accepts an explicit safe-processing option for
issuance and verification. Safe mode rejects undefined JSON-LD properties instead of
silently removing them before hashing. The default remains unchanged for the isolated
legacy evaluator; the new reliance path must request safe mode.

The TypeScript `catalogDocumentLoader` adapts a request-local static-catalog session
to the JSON-LD loader contract. It accepts JSON media types, decodes strict UTF-8,
parses fresh JSON for every resolution, consumes the session's resource/byte budget
and refuses unknown URIs without network fallback. This avoids the legacy loader's
mutable process-global cache for new-profile evaluation.

An independent primitive control verifies the published `eddsa-rdfc-2022` Appendix B.1
signature over the published combined proof/document hashes and public key. Source:
[W3C Data Integrity EdDSA Cryptosuites v1.0](https://www.w3.org/TR/vc-di-eddsa/#representation-eddsa-rdfc-2022).
This confirms Ed25519 and multibase handling for the published bytes; it is not yet a
full independent JSON-LD transformation vector.

Focused controls cover safe-mode rejection, a safe proof round trip, isolated catalog
loading and the published signature. The complete TypeScript suite passes 267 tests.
The next slice must add the protected RM context/schemas and generated D/A artifacts,
retain their exact secured bytes, and resolve the named verification method from pinned
material. It must prove that the method is controlled by the credential issuer and is
listed for `assertionMethod`; a valid signature from an unauthorized key must fail.
Python safe-processing parity also remains pending; its current PyLD backend does not
enforce the same safe-mode option, so this evidence makes no Python protection claim.

## I1: signed RM slice

**25 September 2026. The signed vertical slice is implemented in TypeScript and
mirrored in Python; status resources, an independent transformation vector and the
I2–I4 evaluators remain.**
This evidence establishes protection, validity and integrity of fictional signed
artifacts. It establishes no authorization, support, conformity or overall reliance.

### What is implemented

| Part | Location | Behaviour |
| --- | --- | --- |
| Pinned resources | `bindings/experimental/rm-v1/catalog.json`, `scripts/rm-v1/build-resources.mjs` | RM v1 context, seven schemas and the vendored VCDM 2.0 context, SHA-384 over exact bytes |
| Key authorization | `reliance/key-authorization.ts`, Python `key_authorization.py` | Proof key must be the issuer's own Ed25519 Multikey, referenced from `assertionMethod` in its catalog-installed controller document; 17 shared vectors |
| Signed fixtures | `rm-v1/test-vectors/signed/`, `packages/core-ts/scripts/generate-rm-v1-artifacts.ts` | Controller documents and A, H, O, S, D178; reproducible from public seeds; `--check` mode |
| Artifact verification | `reliance/rm-v1-artifacts.ts` (`verifyRmArtifact`) | resolve → strict JSON → exact context pair → recognized type + declared schema → pinned JSON Schema → one proof → key authorization → Ed25519 signature over safe-mode RDFC canonicalization, offline |
| Protected facts | same | Only after protection: manifest native paths evaluated to concrete RFC 6901 pointers |
| Slice evaluation | same (`evaluateRmSlice`) | Protection, validity and `relatedResource` integrity executed; authorization, support, conformity `not_run`; decision is never `accept` |
| Python mirror | `qi_vc_core/reliance/rm_v1_artifacts.py` | Same ordered checks, facts and slice result; `jsonschema` for the pinned schemas; sentinel-`@vocab` undefined-term check in place of safe mode |

State rules: missing or unsupported inputs are `not_established` (unavailable artifact
or controller document, unsupported context combination, proof set); evidence of
failure is `contradicted` (schema violation, key not the issuer's, bad signature,
digest mismatch, expiry). Contradiction yields `reject`; otherwise the I1 decision is
`not_established` because the unexecuted obligations cannot establish anything.

### Results

`packages/core-ts/tests/rm-v1-slice.test.ts`: 21 tests pass (Python mirror: 22). Each of A, H, O, S and D178
passes all eight protection checks, validity at 2026-09-25 and `relatedResource`
integrity. D178 facts include `/issuer`, `/termsOfUse/0/authorizationCredential/id`,
`/evidence/0/id` and the selected result at
`/credentialSubject/materialPropertiesList/0/results/0` (value `"178"`). Authentic D with
A/O/S/H yields decision `not_established`, with authorization, support and requested
conformity `not_run`.

Negative controls, all passing:

- value changed to 150 without re-signing → signature contradicted, no facts, `reject`;
- D correctly signed by the laboratory's own key → key `NOT_ISSUER_CONTROLLER`;
- proof naming the producer's key but made with the laboratory's → signature contradicted;
- control: the genuine key re-signing changed content verifies;
- undeclared claim → safe-mode signing refuses it, schema check contradicts it;
- one extra byte in O → O's signature holds but D's `relatedResource` digest contradicts → `reject`;
- missing S → integrity `not_established`, decision `not_established`;
- missing target or controller document → `not_established`;
- reversed contexts or a proof set → not established; expired target → `reject`;
- a selected claim outside the protected results → claim `not_established`;
- arbitrary policy type names (`AuthorizedByPolicy`, `RmAuthorizationPolicyV2`,
  `rmAuthorizationPolicy`) → schema contradicted, no facts;
- no signed fixture contains a legacy relation/basis field (`authorizedBy`,
  `derivedFrom`, `supportedBy`, `authorizationBasis`, `scopeRef`) or `qi-vc` term.

### I1 exit gate

| Plan exit criterion | Status |
| --- | --- |
| Both languages verify supported baseline protection | Done (TS safe mode; Python sentinel undefined-term check) |
| Protected facts through exact native paths, with provenance | Done (RFC 6901 pointers, artifact SRI digest, controller-document digest) |
| New credentials carry no legacy relation/basis contract | Done (tested) |
| Arbitrary policy names and unsafe expansion as negative controls | Done |
| Exact integrity representation settled | Done: SHA-384 SRI over exact secured bytes |
| Static dependencies pinned with provenance and hashes | Done, except the published-hash comparison for the VCDM 2.0 context (network) |
| Independent suite vectors | Open: only the W3C B.1 primitive control; full transformation vector needs network |

Python: `pytest packages/core-py/tests` 257 passed, 1 existing skip. Ruff (204) and
mypy (198) package-wide counts are unchanged from the recorded baseline; the new modules
and tests are clean.

Full-suite results in this environment: `pnpm -C packages/core-ts test` 302 passed, 9
failed; the 9 are pre-existing legacy tests that fetch the W3C context over the network
(blocked here) and pass in CI. `pnpm -r build` (including the browser demo), TS lint,
scenarios and schema validation exit 0.

### Limits and remaining I1 work

- **Python parity.** `tests/test_rm_v1_slice.py` (18 tests) runs the same positive
  path and negative controls over the TypeScript-generated bytes and passes. PyLD 3.3.0
  has no safe mode; Python instead expands the document with an extra sentinel `@vocab`
  and rejects any term or type that lands in it. That catches undefined terms and types
  but not every condition jsonld.js safe mode reports (for example other dropped or
  invalid values). The closed JSON Schemas run first in both languages and reject
  undeclared properties regardless. Python's `uri` format check (absolute, has a scheme,
  no whitespace) is narrower than ajv-formats' RFC 3986 grammar.
- **Cross-library agreement, not conformance.** Python (PyLD + PyNaCl) verifies all five
  TypeScript-signed fixtures and rejects tampered copies; a D re-signed in Python verified
  in TypeScript (one-off check, recorded here, not a committed test). The two use
  separate JSON-LD and Ed25519 libraries, but they share the fixtures and this
  repository's proof code; this is not an independent conformance vector. The published
  W3C Appendix B.1 control still covers the signature primitive only.
- **New dependency.** `jsonschema>=4.23,<5` (resolved 4.26.0, MIT; transitive
  `jsonschema-specifications`, `referencing`, `rpds-py`, all MIT) was added to core-py
  for schema-validation parity.
- **Open question on the vendored context.** The vendored VCDM 2.0 context has no
  top-level `@vocab`. If the context W3C publishes declares an issuer-dependent `@vocab`,
  undefined terms would expand instead of being rejected by safe mode, and the
  undefined-term controls would rely on the closed schemas alone. This must be checked
  against the published bytes and hash with network access.
- **Status.** No status list exists yet; status is reported as a limitation.
- **Published context hash.** The vendored VCDM 2.0 context was not compared with the
  hash W3C publishes (network blocked here).
- The manifest stays `incomplete`; no acceptance-ledger case is marked passing.

## I2: protected evaluation pipeline

**25 September 2026. I2 in progress: result contract, credential status, plan,
identity, structure and budget checks are implemented in both languages.** The legacy evaluator remains the default. No
acceptance-ledger case is marked passing until its gate-numbered assertion exists.

### Step 1: result contract

Requests and results require a request identity. Results carry a trace entry per
node-use and predicate with a canonical gate number 0–6 (`GATE_NAMES`), semantic and
execution state, reason and sources, and resource observations (URI, SHA-384 SRI,
kind, source, observation time). Non-canonical gates and `not_run` entries that claim a
result are refused. The node-use key is artifact identity, content digest, role,
purpose, profile and evaluation time.

### Step 2: credential status (gate 3)

| Part | Location | Behaviour |
| --- | --- | --- |
| Verifier profile | `bindings/experimental/rm-v1/profiles/rm-verifier-1.json`; `reliance/profile.ts`, `profile.py` | Verifier-owned; the request must name exactly this profile. Trust anchors with purposes (used from I3); status required, purpose `revocation`, 30-day freshness. No defaults |
| Status lists | `test-vectors/signed/status/{nab,producer,lab}.json`, generator | One W3C Bitstring Status List per issuer, signed by that issuer, all bits clear; every A/H/O/S/D credential carries `credentialStatus` |
| Encoding | `reliance/status-list.ts`, `status_list.py` | GZIP + multibase base64url (`u`), MSB-first; decompression bounded to 2 MiB; Python output byte-identical to Node |
| Evaluation | `reliance/rm-v1-slice.ts`, `rm_v1_artifacts.py` | Each list is verified as an artifact (schema, issuer key, signature, validity). Status counts only if the list's issuer is the credential's issuer and the list is fresh; a set bit contradicts |

The evaluator moved to `reliance/rm-v1-slice.ts` so that `rm-v1-artifacts.ts` stays
browser-safe for the poster bundle (status decoding uses Node zlib). The poster page
still shows status as not checked.

Controls (TS and Python): all five chain credentials not revoked with three `status`
resource observations; **P09** revoked target contradicted → `reject`, and a stale
(2026-11-15) or unavailable list → `not_established`; **P08** a correctly signed list
from the laboratory about the producer's credential → `not_established`; a tampered list
→ not protected, not used; **P16** a signed 3 MiB decompression bomb stops at the bound;
status is `not_run` for an unprotected artifact; **P10** at unit level: missing status is
`established` only under a profile that does not require it. RM v1 schemas require
`credentialStatus`, so P10's permissive case cannot occur with RM fixtures.

Finding: the legacy `status/` module encodes with raw DEFLATE and no multibase prefix,
unlike Bitstring Status List v1.0 (GZIP, `u` prefix). The new path follows the
specification; the legacy module is unchanged and is not used by the new evaluator.

Results: TS 322 passed plus the 9 network-only legacy failures; Python 278 passed, 1
skip; Ruff 204 and mypy 198 unchanged; build, lint, scenarios, schemas, both generator
`--check` modes and the byte-reproducible poster bundle (530 kB) pass.

### Step 3: plan, identity, structure and budgets

- **Gate 0 plan (V09).** `evaluateRmSlice` now takes the catalog. A request naming any
  profile or binding other than the verifier-selected one returns `not_established` with
  one gate-0 `accepted-plan` trace entry; nothing is resolved or read.
- **Budgets (P12, P16).** Evidence (artifacts, referenced credentials, status lists)
  resolves through a session opened with the request's `maxResources`/`maxBytes`, wrapped
  so each distinct resource counts once. Pinned contexts, schemas and controller
  documents use a separate internal budget (`STATIC_RESOURCE_BUDGET`). Status lists count
  as one level deeper than the credential that names them; beyond `maxDepth` they are not
  established. Exhaustion is reported with `RESOURCE_BUDGET_EXCEEDED`, never as a
  contradiction.
- **Gate 1 identity (P11).** A protected artifact must identify itself by the identity it
  was resolved under; otherwise gate 1 is contradicted. Conflicting content under one
  identity is refused when the catalog is built.
- **Structure (V10, V11).** Multiple `credentialSchema` declarations are unsupported
  (`not_established`). The schemas now admit the standard optional `name` and
  `description`, which stay inert: re-signing D with a description leaves protection and
  facts unchanged, while a missing required term is contradicted.
- **P07.** The new path has no `skipProof`; a placeholder proof is contradicted.

### Acceptance ledger after step 3

Fifteen cases are recorded `passing` with commands, exit codes and test paths: V09–V12,
P02–P04, P07–P12, P15 and P16. P10 passes at unit level only because RM v1 schemas require
status. P05 is `excluded_unsupported`: the RM v1 binding has no trust registry, and anchors
are verifier configuration. P01, P06, P13 and P14 remain for I3/I4. The ledger command
(`vitest` over the slice, status-list and key-authorization tests; `pytest` over the
slice and key-authorization tests) exits 0 in both languages: 63 TS and 58 Python tests.

Results: TS 331 passed plus the 9 network-only legacy failures; Python 287 passed, 1
skip; Ruff 204 and mypy 198 unchanged; build, lint, scenarios, schemas, generator checks
and the reproducible poster bundle (531 kB) pass.

## I3: authority routes and support

**25 September 2026. I3 complete in both languages: two authority routes, a global
suspension restriction, required-study support and cycle handling are evaluated on the
signed RM chain; C01–C16, V04–V07 and P06 pass and V08 is declared unsupported.** The
legacy evaluator is still the default. Claim scope coverage and conformity (I4) are not
implemented, so no request is accepted yet.

### What I3 added

| Part | Location | Behaviour |
| --- | --- | --- |
| Exact scope arithmetic | `reliance/rm-scope.ts`, `rm_scope.py` | Decimal strings are compared as exact rationals in kg/kg (mg/kg = 10⁻⁶). Malformed numbers and unknown units are never compared. `containedIn` requires each child record to lie inside **one** complete parent record, with the same matrix, form and quantity kind, a subset of properties and methods, and a range inside the parent's. It returns the matching child ⊆ parent pairs as witnesses |
| Authority routes | `reliance/rm-v1-authority.ts`, `rm_v1_authority.py` | `operational-scope` (D ← O ← A ← anchor) bases: authorizing-reference, principal-binding, self-maintained-scope, activity-permission, maintenance-grant, accreditation-grantee, projection-permission, bounded-projection, trust-anchor. `direct-accreditation` (D ← A ← anchor) bases: authorizing-reference, principal-binding, activity-permission, trust-anchor. An unknown route id is `not_established` (no installed evaluator) |
| Composition | `composeAuthority`, `compose_authority` | Authorized = AND(global restrictions) AND OR(complete routes); each route = AND(its bases). A search stopped by `maxRoutes` never counts as disproving every route (C16) |
| Required support | `certificateSupport`, `certificate_support` | The study must be referenced from `evidence`, cover the same batch, property and matrix, have an established outcome and precede certification. It must also carry its own laboratory authority H (lab-authority reference, laboratory binding, study permission, study scope, anchor for the lab-recognition purpose) |
| Profile | `profiles/rm-verifier-1.json`, `profile.ts`, `profile.py` | New `authority` section: `certificateRoutes` (ordered, verifier-owned), `globalRestrictions` (none configured) and `maxRoutes` |
| Evaluator | `rm-v1-slice.ts`, `rm_v1_artifacts.py` | Follows only `termsOfUse.authorizationCredential.id` and `evidence.id` from the target, within `maxDepth`. A credential is usable = AND(protection, identity, validity, status). Gate 5 records `route:<id>` and `route:<id>:<basis>`; gate 6 records `support:<basis>`. Claim authorization is contradicted when authority is, and otherwise `not_established` until I4 checks the claim's scope. Route witnesses are `route:<id>` plus the chain |
| Schemas | `scripts/rm-v1/build-resources.mjs` | `termsOfUse` (up to 4) and `evidence` are now optional in the certificate, operational-scope and study schemas, so a missing reference can be evaluated rather than rejected at the schema check. Regenerated; the signed fixtures are byte-identical |
| Manifest (V08) | `manifest.json` `discoveryAndIntegrity.independentGrantBinding` | Owner decision: independently discovered grants are **unsupported**. Authority counts only through `termsOfUse` references on the credential chain |
| Test helpers | `tests/rm-v1-helpers.ts`, Python `reissue` | `reissue` re-signs changed credentials and every credential whose `relatedResource` digest pins them, in the order A, H, O, S, D. A mutated chain is therefore tested on its own authority, not masked by an integrity failure |

### Controls (both languages)

| Case | Change | Result |
| --- | --- | --- |
| Baseline | Signed chain unchanged | Every operational-scope basis is established; bounded-projection cites `scope-as-m1 ⊆ scope-as`; support is established with witnesses D, S, H |
| P06 | O granted to the lab | principal-binding contradicted → reject |
| P06 | A names the lab as grantee (chain re-issued) | Integrity holds; accreditation-grantee contradicted → reject |
| P06 | O without a grantee | O contradicted at its schema; authorizing-reference contradicted, and the reason names the missing `id` → reject |
| C08 | A lacks the scope-maintenance activity | projection-permission contradicted → reject |
| Projection | O's range upper bound 600 > A's 500 mg/kg | bounded-projection contradicted |
| Units | O in kg/kg equal to A; then 10⁻¹⁰ wider | established; contradicted |
| V04 | `termsOfUse` type `TrustFrameworkPolicy` | Cannot be signed in safe mode; unsigned D is contradicted at the schema check; authorization `not_established`, no witnesses |
| V05/V08 | D re-signed without `termsOfUse`; A still supplied | authorizing-reference `not_established`; authorization `not_established`; support still established; decision `not_established` |
| V07 | Authentic D197 added to supplied evidence | Same witnesses and decision |
| Anchor | Profile anchor lacks the accreditation purpose | trust-anchor `not_established` |
| C09 | S re-signed without laboratory authority | Support `not_established` |
| C10 | S about another batch (chain re-issued) | same-batch contradicted, laboratory-binding established → reject |
| C11 | S absent | Support `not_established`, decision `not_established` |
| Study scope | H does not cover the study type | study-scope contradicted |
| Timing | Study after certification | study-precedes-certification contradicted |
| C01–C07 | Route composition (unit) | AND within routes, OR between complete routes only, restriction outside the OR, nothing invented without restrictions |
| C16 | Unexplored route; `maxRoutes` 1 with two routes | `not_established` citing the budget; end to end the second route is `not_run` |
| Reissue | Re-sign D unchanged | Byte-identical to the signed fixture |

### Step 2: second signed route and the global suspension restriction

| Part | Location | Behaviour |
| --- | --- | --- |
| Typed references | `build-resources.mjs` (authorization-policy schema), `rm-v1-authority.ts`, `rm_v1_authority.py` | `termsOfUse[].authorizationCredential` is `{id, type}`. A route selects its reference by the declared type, so an unavailable or unusable reference still belongs to exactly one route; the resolved credential must have the declared type, otherwise the reference is contradicted |
| Second accreditation A2 | generator, `credentials/A2.json` | NAB grants the producer RM certification directly (no scope maintenance). D178 does not reference it, so it confers nothing there (V07) |
| Suspension status | generator, `status/nab-suspension.json`, `status-list.ts`, `status_list.py` | NAB accreditations carry two Bitstring entries, `revocation` and `suspension` (VCDM 2.0 array). Gate 3 selects the single entry for the profile's purposes (revocation); suspension entries are read only by the restriction. Status wording follows the purpose |
| `accreditation-suspension` | `rm-v1-authority.ts`, `rm_v1_authority.py`, both profiles | Applies to every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's `termsOfUse` references, on any route and whether or not that route succeeds. Each needs a fresh suspension status from its issuer with the bit clear; a missing or unreadable one is `not_established`. It sits outside the OR, so another route cannot bypass it |
| Two-route profile | `profiles/rm-verifier-two-routes-1.json` | Fictional: (operational scope within A) OR (direct accreditation), plus the restriction. The default profile keeps the single operational-scope route and gains the restriction |
| Decisive verification | `rm-v1-slice.ts`, `rm_v1_artifacts.py` | Only the target and the credentials on the selected route and support chains decide the request. A failed credential on an unused alternative is reported but diagnostic (C03, C07); when nothing is established, failures still decide through the route and support states |
| Trace | same | Gate 5 now records `authority` (the composed result) and `route:<id>` for each executed route, besides each basis and restriction |

Controls (both languages, two-route profile unless noted):

| Case | Change | Result |
| --- | --- | --- |
| C01 | D re-issued citing O and A2 | Both routes established; restriction covers A and A2 and holds; authority established |
| C02 | O without its accreditation reference (default profile) | maintenance-grant `not_established`; route and authority `not_established` |
| C03 | O granted to the lab; D cites A2 too | operational-scope contradicted, direct-accreditation established; authority established with witnesses `route:direct-accreditation`, D, A2; no reject |
| C04 | O and A2 granted to the lab | Both routes contradicted → reject |
| C05 | O granted to the lab; A2 unavailable | Contradicted + unresolved → `not_established` |
| C06 | A2's suspension bit set; operational route complete | Restriction contradicted ("A2: Suspended") → reject. Also with A suspended under the default profile |
| C07 | A2's revocation bit set | Direct route contradicted; restriction holds; authority established; A2's failure does not reject |
| Status | Suspension list unavailable | Restriction and authority `not_established` |
| Typing | D's O reference retargeted to A2 | authorizing-reference contradicted ("declares RmOperationalScope") |

Regenerated: schemas and catalog, signed fixtures (A, O, S, D178/197/520 bytes change
through typed references and A's suspension entry; A2 and the suspension list are new),
and the poster bundle, which still verifies and renders "Accepted" in headless Chromium.

Step 2 results: ledger command 72 TS and 70 Python tests, exit 0; TS 363 passed plus the
9 network-only legacy failures; Python 316 passed, 1 skipped; Ruff 204 and mypy 198
unchanged; build, lint, scenarios, schemas and both generator checks pass.

### Step 3: cycles, shared nodes, roles and provenance

No evaluator change was needed: routes are type-directed and every reference is checked
against the active evaluation stack, while completed nodes are shared. These controls
(both languages) pin that behaviour on signed data:

| Case | Change | Result |
| --- | --- | --- |
| C12 | O re-issued citing D as its accreditation (D → O → D) | maintenance-grant `not_established`, "Circular authorization"; authority `not_established` |
| C12 | D citing itself as its operational scope | authorizing-reference "Circular authorization" |
| C12 | S citing D as its laboratory authority (support ↔ authority) | laboratory-authority-reference "Circular authorization"; support `not_established` |
| C13 | D citing O and A (two-route profile) | A reused by both routes, both established, no cycle reported; the restriction counts A once |
| C14 | A2 as O's grant and as D's direct accreditation | Per-role checks: projection-permission contradicted, direct route established; authority established |
| C15 | D197 ↔ D520 reference each other, supplied but unused | Witnesses and decision equal the baseline |
| V06 | D with only an absolute-IRI `prov:wasDerivedFrom` → O | Signs in safe mode, contradicted at the closed schema; authority `not_established`, no witnesses |

Step 3 results: ledger command 79 TS and 77 Python tests, exit 0; TS 370 passed plus the
9 network-only legacy failures; Python 323 passed, 1 skipped; Ruff 204, mypy 198, lint
unchanged. Only test files changed. Ledger: 36 passing, 2 excluded, 45 not implemented.

### I3 commands and results (step 1)

```bash
pnpm -C packages/core-ts exec vitest run tests/rm-v1-authority.test.ts tests/rm-v1-slice.test.ts   # 62 passed, exit 0
uv run --locked --all-packages --extra dev pytest packages/core-py/tests/test_rm_v1_authority.py packages/core-py/tests/test_rm_v1_slice.py   # 60 passed, exit 0
pnpm -r build                       # exit 0
pnpm -r --if-present lint           # exit 0
pnpm -C packages/core-ts test       # 353 passed; the 9 network-only legacy failures (w3.org blocked here)
pnpm test:scenarios                 # exit 0
.venv/bin/python -m pytest packages/core-py/tests   # 306 passed, 1 skipped
pnpm validate:schemas               # exit 0
node scripts/rm-v1/build-resources.mjs --check                      # up to date
(cd packages/core-ts && npx tsx scripts/generate-rm-v1-artifacts.ts --check)   # up to date
pnpm -C apps/demo-web build:poster  # exit 0; bundle changes only by the regenerated schemas and manifest
.venv/bin/ruff check packages/core-py; .venv/bin/mypy packages/core-py   # 204 and 198, unchanged
```

A headless Chromium load of `site/m375a/` renders the accepted preview with no console
errors.

Ledger after step 1: V04, V05, V07, P06, C08–C11 and C16 `passing`; V08
`excluded_unsupported`. After step 2, C01–C07 are also `passing` (31 passing in total).

### I3 limits

- **Restriction discovery:** the suspension restriction sees only accreditations the
  chain references. A suspension of an accreditation nothing references is not
  discovered (consistent with V08). The fixture routes are the RM binding's
  illustrative profile, not a GS or legal rule.
- **Cycles:** detection relies on the active stack of typed, fixed-depth RM routes;
  there is no general memo table of node-use contexts yet, which a binding with open
  recursion would need. The binding has no provenance vocabulary, so C15 uses an unused
  reference cycle and V06 an absolute-IRI provenance property.
- Claim scope coverage, conformity and the S cases are I4. Until then, authorization of
  the selected claim is at best `not_established`.

## I4: claim scope, conformity and first acceptance

**27 September 2026. I4 complete in both languages: the new evaluator maps the
selected result (gate 4), covers it with one complete scope record on each route
(gate 5), checks conformity separately (gate 6) and applies the current-reliance time
rules. The signed chain for x = 178 is accepted, and a committed parity vector shows
that TypeScript and Python agree exactly.** The legacy evaluator is still the default
API (switched in I5).

### What I4 added

| Part | Location | Behaviour |
| --- | --- | --- |
| Claim mapping (gate 4) | `reliance/rm-v1-claims.ts`, `rm_v1_claims.py` (`mapClaim`) | The selected result becomes governed coordinates: matrix and form from the single material, property, method, quantity kind, and exact kg/kg value and expanded uncertainty. Only mg/kg and kg/kg map; k must be exactly 2; a missing identifier is named. Anything else is `not_established` at gate 4 |
| Claim coverage (gate 5) | `claimCoverage`, `claimAuthority` (`rm-v1-authority.ts`) | Per route, against that route's own scope credential only: O for operational-scope, A for direct-accreditation. Never falls back to a parent grant (S07). One record must cover every dimension (matrix, form, quantity kind, property, method, inclusive range). Records are alternatives (OR), never spliced. A reversed range is invalid (contradicted); an unreadable one is `not_established`. The claim is authorized as AND(restrictions) AND OR(route AND coverage) |
| Method succession | manifest `scopeAndMapping.methodRevisions`; profile `mapping.methodSuccession` | The binding declares the vocabulary fact that M2 revises M1. The verifier profile chooses `accept-successor`, `require-extension` or `none`; `none` leaves the claim `not_established` with the missing rule named. A method with no declared revision is simply not allowed |
| Conformity (gate 6) | `evaluateConformity`; profile `conformity.requirements`, `conformity.decisionRules` | Requirements (property, quantity kind, upper limit) and decision rules (simple acceptance, or guard band w = U) are verifier-owned and selected by id. Conformity runs only for an authorized claim and applies to exactly one selected claim. Arithmetic is exact and shown in the requirement's unit, so mg/kg and kg/kg inputs give the same witness |
| Witnesses | `rm-v1-slice.ts`, `rm_v1_artifacts.py` | The claim witness is `route:<id>`, the route chain and `record:<covering record>`. The support witness is the D, S, H chain. The conformity reason carries the arithmetic. Trace: `claim-mapping:<claim>` (gate 4), `claim-coverage:<claim>:<route>` (gate 5), `conformity:<requirement>` (gate 6) |
| Profiles | `profiles/rm-verifier-1.json`, `rm-verifier-two-routes-1.json` | `mapping.methodSuccession: none`; requirement `as-mass-fraction-max-200-mg-per-kg`; rules `guarded-acceptance-expanded-u` and `simple-acceptance`. Missing sections are never defaulted |
| Scope arithmetic | `rm-scope.ts`, `rm_scope.py` | A reversed child interval in a bounded projection is now contradicted (invalid data), not merely unknown |

### Controls (both languages, signed and re-issued with the fixture keys)

| Case | Input | Result |
| --- | --- | --- |
| S01 / P01 / V01 | x = 178, U = 5 | Covered by `O#scope-as-m1`; "178 + 5 = 183 ≤ 200 mg/kg"; **accept** with witnesses route, D, O, A, record; support D, S, H |
| S02 | D197 | Authorized; "197 + 5 = 202 > 200 mg/kg"; reject for the rule. Authorization-only: accept |
| S03 | D520 | "value is above the range"; conformity not run; reject |
| S04 | x = 195 | "195 + 5 = 200 ≤ 200 mg/kg"; accept (inclusive limit) |
| S05 | x = 500, authorization only | Accept (inclusive upper endpoint) |
| S06 | x = 49.9; x = 50 | Below range, reject; lower endpoint accepted |
| S07 | M2 against O = {M1}, A = {M1, M2} | Checked against O only; `not_established` ("no governed M1 → M2 succession rule") |
| S08 | Same, three profiles | accept-successor: accept; require-extension: contradicted; none: `not_established`. Unrevised M3: contradicted |
| S09 | Records As/M1 and Pb/M3; claim As/M3 | Contradicted; no synthetic record |
| S10 | Form, matrix and property split across records | Contradicted; "No single scope record covers the claim" |
| S11 | Claims As and Pb, each with its own record | Both established with different record witnesses; accept |
| S12 | O 100–400 over A records 50–300 and 300–500 | Projection contradicted; no union |
| S13 | O lower bound 40 below A's 50 | Projection contradicted |
| S14 | Unit ppm; k = 3 | Schema refuses ppm (reject); k = 3 not mapped at gate 4 |
| S15 | 0.000178 kg/kg, U 0.000005 kg/kg | Same decision, record and arithmetic as mg/kg |
| S16 | U = NaN, Infinity, -5; reversed scope 500–50 | Schema refusal; reversed range contradicted; reject |
| S17 | As/Ash, CuZn39Pb3/CuZn40Pb2, M1/M1a | Contradicted by exact identifiers |
| S20 | Missing or empty scope endpoint | Never a successful containment or accept |
| S22 | U = 40 | Authorized (no ceiling); fails only the rule, "178 + 40 = 218 > 200" |
| S23 | Asymmetric uncertainty member | TS safe mode refuses to sign it; the closed schema refuses it (reject); never symmetrized |
| S24 | No claims; claim on a missing result | Request validation refuses empty claims; missing result `not_established` |
| Profile | Unknown requirement id | Conformity `not_established` |

Earlier tests that asserted "never accept" were updated to the new behaviour: P01
accept, C03 and C07 accept, P15 accept/reject/accept, and the clean status chain accept.

### Step 2: time rules and cross-language parity

| Part | Location | Behaviour |
| --- | --- | --- |
| Historical question (P13) | `status-list.ts`, `status_list.py` | A status list observed at T says nothing about an earlier activity. When the request's `activityTime` precedes the list's `validFrom`, status is `not_established` ("historical status is unavailable"); current status is never substituted (handover §7.3) |
| Scope in force at the activity (P14) | `rm-v1-authority.ts`, `rm_v1_authority.py` | Each route adds `scope-in-force-at-activity`: the certificate's own `activityTime` must fall within the validity of every grant on the route (O and A; A for direct accreditation). Scope evidence issued after the activity cannot authorize it, even if it covers the claim today |
| Parity vector | `scripts/generate-rm-v1-parity.ts`, `tests/rm-v1-parity.ts`, `test-vectors/parity/i4-outcomes.json`, `test_rm_v1_parity.py` | Eight scenarios over the signed fixtures (178, 197, 520 with the guarded rule; 197 authorization-only and under simple acceptance; an unknown requirement; a historical question; the two-route profile). Each records the decision, claim states and witnesses, support, conformity reasons with arithmetic, and every gate 4–6 trace entry with its reason. Both languages must reproduce the file exactly; a tampered expectation is detected |

| Case | Input | Result |
| --- | --- | --- |
| P13 | `activityTime` 2026-03-01, lists observed 2026-09-01 | Status `not_established`; decision `not_established`. The current question is accepted |
| P14 | O valid only from 2026-01-25; D's activity 2026-01-20 | Projection still established; `scope-in-force-at-activity` `not_established`; claim and decision `not_established` |
| Baseline | D178 | "O and A were in force at the activity time 2026-01-20" |

Step 2 results: ledger command 107 TS and 118 Python tests, exit 0; TS 398 passed plus
the 9 network-only legacy failures; Python 364 passed, 1 skipped; Ruff 204 and mypy 198
unchanged; build, lint, scenarios, schemas, the resource, fixture and parity `--check`
modes, and the poster build pass. Ledger: P13 and P14 `passing`; 61 passing, 2
excluded, 20 not implemented.

### I4 commands and results (step 1)

```bash
pnpm -C packages/core-ts exec vitest run tests/rm-v1-claims.test.ts tests/rm-v1-authority.test.ts tests/rm-v1-slice.test.ts   # 103 passed
uv run --locked --all-packages --extra dev pytest packages/core-py/tests/test_rm_v1_claims.py packages/core-py/tests/test_rm_v1_authority.py packages/core-py/tests/test_rm_v1_slice.py   # 107 passed
pnpm -r build; pnpm -r --if-present lint; pnpm test:scenarios; pnpm validate:schemas   # exit 0
pnpm -C packages/core-ts test        # 394 passed; the 9 network-only legacy failures (w3.org blocked here)
.venv/bin/python -m pytest packages/core-py/tests   # 353 passed, 1 skipped
node scripts/rm-v1/build-resources.mjs --check; (cd packages/core-ts && npx tsx scripts/generate-rm-v1-artifacts.ts --check)   # up to date
.venv/bin/ruff check packages/core-py; .venv/bin/mypy packages/core-py   # 204 and 198, unchanged
pnpm -C apps/demo-web build:poster   # exit 0; bundle changes only by the manifest
```

Ledger: V01, P01, S01–S17, S20, S22–S24 `passing` (S18, S19 and S21 are DCC cases for
I5). Totals: 59 passing, 2 excluded, 22 not implemented.

### I4 limits

- **Time:** the baseline answers current-reliance questions. A historical question is
  refused rather than answered; authenticated historical status is not implemented.
- **Poster page:** the page still runs the repository's artifact verifier plus a labelled
  preview of gates 4–6. The real evaluator uses Node zlib for status lists; moving it
  into the browser bundle is a separate task.
- **S23:** asymmetric uncertainty is refused because the binding's schema and context do
  not define it, not by a dedicated "unsupported" state. Python signs the undefined term
  (PyLD has no safe mode) and refuses it at verification.

## I5: legacy isolation and migration

**28 September 2026. I5 steps 1–3 done in both languages.**

- Legacy evaluation is reachable only through an explicitly selected, labelled legacy
  profile, with no fallback (V02, V03).
- The shared gate 0–3 pipeline serves every binding.
- The calibration-direct-accreditation use case is migrated to a new signed calibration
  (DCC) binding (S18, S19, S21).
- The calibration-capability and nmi-legal-mandate use cases are migrated to the same
  binding, with an operational-scope route and a statutory-mandate route (step 3a).

- The test-report-supported-dcc use case is migrated to the same binding, with an
  instrument-calibration support obligation (step 3b).

- The gs-scheme-authorization use case is migrated to a new signed GS certification
  binding (competence AND scheme permission), and both GS application variants are
  retained under the explicit legacy profile (step 3c).

- The default API is switched to standards-first reliance (step 4).

Still open in I5: the version draft.

### Step 1: explicit legacy profile (V02, V03)

| Part | Location | Behaviour |
| --- | --- | --- |
| Legacy adapter | `packages/core-ts/src/legacy/index.ts` (exported as `legacy`), `qi_vc_core/legacy` | `evaluateLegacyProfile(target, policy, options)` runs the v0.3 graph verifier on the **original secured representation**: `skipProof` and `skipStatus` are refused. The result is a `LegacyEvaluation`, not a reliance result: profile `legacy-qi-vc-graph` 0.3 with `label: legacy`, a decision under legacy semantics (any FAIL rejects; the verifier's own `verified` accepts; otherwise not established), the unmodified legacy trace and explicit limitations. No gate trace or witnesses are claimed |
| No fallback | `rm-v1-slice.ts`, `rm_v1_artifacts.py` (unchanged) | The standards-first evaluator never calls the legacy verifier. A legacy credential stops at the gate-0 carrier check |
| Test helper | Python `catalog_with` | Like the TS helper, adds URIs that are not in the pinned sets as extra resources |

| Case | Input | Result |
| --- | --- | --- |
| V02 | Legacy calibration target under the RM v1 profile | Carrier `not_established` ("exact supported context combination"); claim `not_established`, no witnesses; decision `not_established`; no legacy output in the result |
| V03 | GS hair-dryer graph under the legacy profile | 7 real proofs verified; accepted and labelled legacy with limitations |
| V03 | Placeholder-proof calibration graph under the legacy profile | The placeholder proof is never valid; not accepted |
| V03 | `skipProof` / `skipStatus` requested | Refused |

Step 1 results: TS 402 passed plus the 9 network-only legacy failures; Python 369
passed, 1 skipped; Ruff 204 and mypy 198 unchanged; build, lint, scenarios, schemas and
the poster build pass. Ledger: V02 and V03 `passing` (63 passing, 2 excluded, 18 not
implemented).

### Step 2: shared gate 0–3 pipeline and the calibration binding (S18, S19, S21)

**2a, refactor with no behaviour change.**

- Plan refusal, bounded resolution and reference following, protection, identity,
  validity, credential and suspension status, node facts and the per-artifact trace
  moved out of the RM slice into `reliance/binding-chain.ts` (`verifyChain`,
  `planRefusal`, `refusePlan`). The Python counterparts are `verify_chain`,
  `plan_refusal` and `refuse_plan`.
- The artifact verifier takes an optional `ArtifactBinding` (types, schemas, contexts).
- All RM tests and the byte-exact parity vector pass unchanged in both languages.

**2b, the calibration v1 binding** (`bindings/experimental/cal-v1`).

| Part | Behaviour |
| --- | --- |
| Artifacts | A signed `CalAccreditation` CA (NAB → laboratory, pressure 0–10 MPa, method PressureComparison, CMC 0.5 kPa) and a signed `CalCertificate` DCC-1 with two measurement groups; typed `CalAuthorizationPolicy` reference; Bitstring status |
| Gate 4 | Each result maps to exact pascals (Pa, kPa, MPa; k = 2 only); anything else is `not_established` |
| Gate 5 route | Direct accreditation via shared route helpers: typed reference, principal binding, activity permission, anchor purpose `accredit-calibration-laboratories`, accreditation in force at the certificate's activity time |
| Gate 5 coverage | One complete record must cover the group's quantity kind, every method it names and every result's range; with `bindingRules.applyCmcFloor`, no expanded uncertainty may be below the CMC floor. A record restricting methods against a group naming none is `not_established` |
| Claims | Each selected measurement group is a separate required claim; the decision is their conjunction |
| Profile | `bindingRules` is a new optional, frozen profile section (both languages); the calibration evaluator refuses a profile that does not state `applyCmcFloor` |

| Case | Input | Result |
| --- | --- | --- |
| Use case | DCC-1 with both groups | Accepted; witnesses route, DCC-1, CA, `record:CA#scope-pressure` |
| Principal | CA naming another laboratory | `principal-binding` contradicted; reject |
| Method | Group names DeadWeightTester | Contradicted; reject |
| Gate 4 | k = 3 | `not_established` |
| S18 | Group names no method (empty or missing) | `not_established` ("names no governed method") |
| S19 | g1 at 15000 kPa, g2 valid | Claims [contradicted, established]; reject |
| S21 | g1 U = 0.3 kPa < CMC 0.5 kPa | Contradicted, no conformity involved; accepted when the profile does not apply the floor |

Step 2 results:

- TS 410 passed plus the 9 network-only legacy failures; Python 378 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, scenarios, schemas, the RM and calibration resource and fixture `--check`
  modes, the RM parity check and the poster build (unchanged) pass.
- Ledger: S18, S19 and S21 `passing` (66 passing, 2 excluded, 15 not implemented).

### Step 3a: calibration-capability and nmi-legal-mandate

Both use cases are migrated to the calibration v1 binding. The generators now also
produce a laboratory operational scope `CAL-O` with certificate `DCC-2`, and a
fictional ministry's statutory mandate `CAL-M` to a national metrology institute with
certificate `DCC-N`. `CAL-A` now also permits maintaining a calibration scope, so
`DCC-1` was re-issued with the new digest.

| Part | Behaviour |
| --- | --- |
| `operational-scope` route | DCC-2 ← O ← CA ← anchor. Bases: typed reference, principal binding, O issued by its own grantee, O permits issuing certificates, O cites CA, CA names O's issuer, CA permits scope maintenance, bounded projection, anchor purpose `accredit-calibration-laboratories`, O and CA in force at the activity time |
| Bounded projection | `calContainedIn` / `cal_contained_in`: each O record lies within one CA record, with the same quantity kind, a subset of its methods and a range inside its range (exact pascals). When the profile applies the CMC floor, O must state a floor that is not below CA's. Claims are covered by O's records only |
| `statutory-mandate` route | DCC-N ← M ← anchor purpose `designate-national-metrology-institutes`. Bases: typed reference, principal binding, activity permission, anchor, M in force at the activity time. No accreditation root is required or configured |
| Profiles | `cal-verifier-capability-1` (operational-scope, NAB anchor) and `cal-verifier-nmi-1` (statutory-mandate, ministry anchor only). `cal-verifier-1` is unchanged |
| Limitations | Every calibration result now states that fixture grants are fictional and have no legal effect |

One profile per use case keeps the decision semantics explicit. Under a profile that
permits all three routes, a contradicted route beside routes with no reference is
`not_established`, not `reject`, because three-valued OR lets a missing route dominate
a contradicted one. A test covers this.

| Case | Input | Result |
| --- | --- | --- |
| Capability | DCC-2 under the capability profile | Accepted; witnesses route, DCC-2, O, CA, `record:O#scope-pressure-low` |
| No widening | O range up to 20 MPa (CA: 10 MPa) | `bounded-projection` contradicted; reject |
| No widening | O CMC 0.3 kPa below CA's 0.5 kPa | Contradicted; accepted when the profile does not apply the floor |
| C08 analogue | CA without `maintainCalibrationScope` | `projection-permission` contradicted; reject |
| No parent fallback | DCC-2 group at 5 MPa (inside CA, outside O) | Coverage on O contradicted; reject |
| Mandate | DCC-N under the NMI profile | Accepted; witnesses route, DCC-N, M, `record:M#scope-pressure-primary`; no accreditation on the path |
| Anchor purpose | Ministry not configured, or configured only to accredit | `trust-anchor` not_established; not_established |
| Principal | M naming another institute | Contradicted; reject |
| Coverage | DCC-N by PressureComparison (M allows PressureBalance) | Contradicted; reject |
| Route OR | All-routes profile: each certificate | Accepted through the route its own references reach |
| Route OR | All-routes profile: CA naming another laboratory | `not_established` (other routes have no reference) |

Step 3a results:

- TS 422 passed plus the 9 network-only legacy failures; Python 392 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, scenarios, schemas, the RM and calibration resource and fixture `--check`
  modes and the RM parity check pass.
- Ledger totals unchanged (66 passing, 2 excluded, 15 not implemented); the migrated use
  cases are recorded here rather than as new ledger rows.

### Step 3b: test-report-supported-dcc

The test report is a new target type of the calibration v1 binding. The generators add
`CAL-T`, a NAB testing accreditation for a fictional testing laboratory (pressure tests
by HydrostaticPressureTest, 0–25 MPa), and `REPORT-1`, its signed test report. The
report cites `DCC-1` as the calibration of the pressure transmitter used.

| Part | Behaviour |
| --- | --- |
| Direct route by target type | The activity and anchor purpose follow the target type. A certificate needs `issueCalibrationCertificate` and `accredit-calibration-laboratories`; a test report needs `issueTestReport` and `accredit-testing-laboratories`. A testing accreditation never authorizes a calibration, and the reverse also holds |
| Support obligation `cal-v1:instrument-calibration` | `instrumentCalibrationSupport` / `instrument_calibration_support`. The report must cite exactly one usable `CalCertificate` (`evidence` of type `CalCalibrationReference`) for the same instrument and the report's quantity kinds, calibrated before the test and valid at it. The certificate's own authority must hold over the profile's routes, with every one of its measurement groups covered by the winning route's scope |
| Decision | Support is required and its chain is decisive when established; certificates carry no support obligation |
| Schema | `evidence` is optional in `test-report.json`, so the evaluator, not the schema, decides a missing calibration |
| Profile | `cal-verifier-test-report-1` (NAB anchored for testing and calibration accreditation, direct accreditation) |

| Case | Input | Result |
| --- | --- | --- |
| Use case | REPORT-1 | Accepted; claim witnesses route, REPORT-1, CAL-T, `record:CAL-T#scope-pressure-test`; support witnesses REPORT-1, DCC-1, CA |
| Anchor purpose | NAB anchored for calibration only | `trust-anchor` not_established; not_established |
| Activity | CAL-T permits only calibration certificates | `activity-permission` contradicted; reject |
| Instrument | Report names another instrument | `same-instrument` contradicted; claim still authorized; reject |
| Time | Test before the calibration and its validity | `calibration-precedes-use` and `calibration-valid-at-use` contradicted; reject |
| Missing | Report cites no calibration | Support not_established; not_established |
| Support authority | DCC-1 group 2 at 15 MPa, outside CA | `calibration-authority:group-1` contradicted; support contradicted with no witnesses; reject |
| No obligation | DCC-1 as target | `support` is empty |

Step 3b results:

- TS 429 passed plus the 9 network-only legacy failures; Python 399 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, scenarios, schemas and all resource, fixture and parity `--check` modes
  pass.
- Ledger totals unchanged (66 passing, 2 excluded, 15 not implemented).

### Step 3c: gs-scheme-authorization and the GS application variants

A new experimental binding, `bindings/experimental/gs-v1`, has its own context,
generated schemas and catalog, manifest, verifier profile and generated signed
fixtures. The fixtures are `GS-A` (the NAB's accreditation of a GS body for toys and
household appliances), `GS-S` (a fictional scheme owner's authorization to award the
GS mark, for toys only) and `GSC-1` (a toy certificate citing both). The TS modules are
`reliance/gs-v1.ts`, `gs-v1-node.ts`, `gs-v1-evaluator.ts` and `gs-v1-slice.ts`; the
Python module is `qi_vc_core/reliance/gs_v1.py`.

| Part | Behaviour |
| --- | --- |
| Route `competence-and-scheme-permission` | Two halves, both always evaluated. Competence needs a typed `GsAccreditation` reference, grantee, `certifyProducts` and anchor purpose `accredit-certification-bodies`. Scheme permission needs a typed `GsSchemeAuthorization` reference, grantee, `awardGsMark` and anchor purpose `authorize-gs-certification`. Both grants must be in force at the certification time. The route chain is [certificate, GS-A, GS-S] |
| Gate 4 | The selected claim is the certification statement (`/credentialSubject/certification`): a product category and the standards certified against |
| Gate 5 coverage | One competence record must cover the category and every standard, and one scheme record the category. A record listing standards against a certification naming none is `not_established`, not a bypass |
| Retained variants | `gs-hair-dryer-hitl` and `gs-hair-dryer-external-test-lab-hitl` keep their signed legacy fixtures and pass under the explicit legacy profile. Their assessments are not migrated |

| Case | Input | Result |
| --- | --- | --- |
| Use case | GSC-1 | Accepted; witnesses route, GSC-1, GS-A, GS-S, `record:GS-A#scope-toys`, `record:GS-S#scope-toys` |
| C02 | No scheme reference | Scheme half not_established; not_established |
| Competence missing | No competence reference | Competence half not_established; not_established |
| Grantee | GS-S naming another body | `scheme-grantee` contradicted; reject |
| Category | Household appliance (competence covers, scheme does not) | Coverage contradicted; reject |
| Standard | EN 71-3, outside GS-A | Contradicted; reject |
| No bypass | No standards named | `not_established` |
| Anchor | Scheme owner anchored only for accreditation | `scheme-anchor` not_established |
| Time | GS-S valid only from after the certification | `scope-in-force-at-activity` not_established |
| Variants | Both GS hair-dryer variants under the legacy profile | Target proof valid, no invalid proof, accepted and labelled legacy |

Step 3c results:

- TS 439 passed plus the 9 network-only legacy failures; Python 409 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, scenarios, schemas and all resource, fixture and parity `--check` modes
  (RM, calibration, GS) pass.
- Ledger totals unchanged (66 passing, 2 excluded, 15 not implemented).

All base use cases are now migrated. Reference-material-recursive is the RM v1 slice
(I1–I4). Calibration-direct-accreditation, calibration-capability, nmi-legal-mandate
and test-report-supported-dcc are in calibration v1. Gs-scheme-authorization is in
GS v1. Both GS application variants are retained under the legacy profile.

### Step 4: default API switch

| Part | Location | Behaviour |
| --- | --- | --- |
| Default entry point | `src/reliance/evaluate.ts` (root export `evaluateReliance`, `SUPPORTED_BINDINGS`), `qi_vc_core/reliance/evaluate.py` (root `evaluate_reliance`) | Dispatches on the installed manifest to the RM, calibration or GS v1 evaluator. An unknown binding is a configuration error; a request naming another binding is refused at gate 0 by that evaluator |
| Binding installer | `src/reliance/binding-node.ts` (`installBinding`), Python `install_binding` | Manifest, one profile (name restricted to `[a-z0-9-]`), pinned resources and, by default, signed test vectors; digests checked by the catalog |
| Legacy namespace | `src/legacy/index.ts`, `qi_vc_core/legacy` | Adds `verifyCredentialGraph` and `presentationQuery`; the root no longer exports `verifier` or `presentationQuery` (Python: `verify_credential_graph`) |
| Consumers | `apps/demo-web` graph explorer | Uses `legacy.verifyCredentialGraph`; its `node:zlib` stub re-exports the bounded gunzip shim, since the root now reaches the status-list decoder |

| Case | Input | Result |
| --- | --- | --- |
| Equivalence | D178 (RM), DCC-1 (calibration), GSC-1 (GS) through the default entry point | Accept; result deep-equal to the binding's own evaluator |
| No fallback | Manifest with an unknown binding id | Error "No evaluator for binding" |
| Wrong binding | GS request under the installed RM binding | Not accepted; no artifact evaluated |
| Import graph | Modules reachable from `reliance/evaluate.ts` | None under `verifier`, `evidence`, `edge`, `policy`, `scope`, `assessment`, `presentation-query`, `terms` or `legacy` |

Step 4 results:

- `default-api.test.ts` 8 passed; `test_default_api.py` 7 passed.
- TS 459 passed plus the 9 network-only legacy failures; Python 423 passed, 1 skipped.
- Ruff 204 and mypy 198 unchanged.
- Build, lint, the graph explorer and demonstrator builds, scenarios and schemas pass.
  The demonstrator bundle is unchanged.
- The API example in `docs/api.md` was run as written and printed `accept`.

### After step 4: GS studies (gate 6)

The GS binding's certificate now requires two studies, as in the legacy GS examples.
See the [GS binding](../../bindings/experimental/gs-v1/README.md) and the report entry of 29
September. `gs-v1.test.ts` (25) and `test_gs_v1.py` (24) cover:

- in-house and external-laboratory type examinations;
- the toy outside the scheme scope;
- a withheld study;
- a study missing a standard;
- a laboratory accreditation without testing;
- an inspection of another manufacturer;
- a study made after the certification;
- passports for an early unit and another company.
