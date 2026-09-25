# I2 evidence: protected evaluation pipeline

**25 September 2026. I2 in progress: result contract, credential status, plan,
identity, structure and budget checks are implemented in both languages.** The legacy evaluator remains the default. No
acceptance-ledger case is marked passing until its gate-numbered assertion exists.

## Step 1: result contract

Requests and results require a request identity. Results carry a trace entry per
node-use and predicate with a canonical gate number 0–6 (`GATE_NAMES`), semantic and
execution state, reason and sources, and resource observations (URI, SHA-384 SRI,
kind, source, observation time). Non-canonical gates and `not_run` entries that claim a
result are refused. The node-use key is artifact identity, content digest, role,
purpose, profile and evaluation time.

## Step 2: credential status (gate 3)

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

## Step 3: plan, identity, structure and budgets

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

## Acceptance ledger after step 3

Fifteen cases are recorded `passing` with commands, exit codes and test paths: V09–V12,
P02–P04, P07–P12, P15 and P16. P10 passes at unit level only because RM v1 schemas require
status. P05 is `excluded_unsupported`: the RM v1 binding has no trust registry, and anchors
are verifier configuration. P01, P06, P13 and P14 remain for I3/I4. The ledger command
(`vitest` over the slice, status-list and key-authorization tests; `pytest` over the
slice and key-authorization tests) exits 0 in both languages: 63 TS and 58 Python tests.

Results: TS 331 passed plus the 9 network-only legacy failures; Python 287 passed, 1
skip; Ruff 204 and mypy 198 unchanged; build, lint, scenarios, schemas, generator checks
and the reproducible poster bundle (531 kB) pass.
