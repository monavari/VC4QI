# VC4QI Reconciliation & Finish — Execution Brief

> **Portability:** this brief is plain task spec — it works with any agentic coder
> (Claude Code, OpenAI Codex, Cursor, Aider). For **Codex**, point it at this file
> or copy §0 + §0.5 + §0.6 + §2–§3 into `AGENTS.md` (already done) and pass the
> phases as the task. For **Claude Code**, see `CLAUDE.md`. Nothing here depends on a
> specific tool.

You are finishing the `VC4QI` repository. The companion manuscript (the "v2.1 model")
is the source of truth; the repo is `main` @ v0.2.0, mid-migration from an archived
v0.1 "three-layer capability model." Everything you need is in this file — you do
**not** need the manuscript. Treat the values in **§1** as authoritative.

**The work is split into two parts. Do PART A first; do PART B only in a separate run.**

- **PART A (Phases 1–5): deterministic reconciliation.** Vocabulary cleanup + canonical
  values. Fully specified, low-judgment — safe for a cheaper model to execute end-to-end.
- **PART B (Phases 6–8): finishing work.** Selective disclosure (a real missing feature),
  a new test vector, release prep. Needs decisions and is judgment-heavy — run it
  separately, ideally with a human reviewing or a more capable model (Claude Opus /
  GPT-4o or better).

The repo already contains a substantial, working implementation (see §0.6). **You are
editing and completing it, not rebuilding it.**

Packages affected: `packages/core-ts` (canonical), `packages/core-py` (parity),
`packages/lims-adapter`, `packages/verifier-service`, plus `contexts/`, `examples/`,
`docs/`, and test fixtures.

---

## 0. Working method (follow exactly)

1. Create and work on a branch: `refactor/manuscript-v2.1`. Do **not** touch
   `archive/three-layer-capability-model`. Do **not** push, tag, or create releases.
2. Before editing a package, **read** its files to find the real paths (e.g. the
   `core-ts` type module equivalent to
   `packages/core-py/qi_vc_core/evidence/types.py`).
3. Work **one phase at a time, in order**. After each phase, run the relevant checks
   from **§0.5**. **If a check fails and you cannot fix it deterministically, stop —
   do not guess.**
4. Commit after each phase with a clear message
   (e.g. `refactor(phase-1): three evidence relations, drop role field`).
5. **Escalation rule:** whenever a change requires a judgment call, a value you cannot
   derive from §1, or a fixture you cannot regenerate, do **not** invent it. Insert a
   `TODO(human): <question>` comment at the site and add a line to
   `RECONCILIATION_REPORT.md`. Keep going with the rest.
6. At the end of a part, write/append `RECONCILIATION_REPORT.md`: what changed per
   phase, every `TODO(human)`, and the result of the acceptance checks (§9 for Part A,
   §13 for Part B).

## 0.5 Environment & exact commands (pinned — do not improvise)

This is a pnpm + uv monorepo. One-time setup:

```bash
npm install -g pnpm && pnpm install
pip install -e "packages/core-py[dev]"     # CI's Python path; or: pip install uv && uv sync --all-packages
```

Checks to run after each phase (all must stay green):

```bash
pnpm -r build                 # TypeScript typecheck/build (lint = tsc --noEmit)
pnpm -r test                  # core-ts vitest + any package tests
pnpm test:scenarios           # cross-cutting scenario tests (vitest.config.ts)
pytest packages/core-py/tests # core-py
pnpm validate:schemas         # node scripts/validate-schemas.js
uv run ruff check . && uv run mypy packages/core-py   # if uv is set up; else skip lint locally
```

Full equivalent: `make test` (= `pnpm test` + `uv run pytest`) and `make lint`.
New/edited `*.md` files are markdown-linted in CI (`.markdownlint.json`) — keep
`RECONCILIATION_REPORT.md` and any new ADR lint-clean.

**Fixtures are generated and signed, not hand-written.** The example/interop
credentials come from `scripts/generate-v02-fixtures.js` and
`packages/core-ts/scripts/gen-interop-fixture.ts`, and TS–Py parity is enforced by
`tests/test_shared_fixtures.py` / `tests/shared-fixtures.test.ts`. **Change canonical
values in the generator(s) and regenerate; do not hand-edit signed/generated output
JSON** (hand edits get overwritten and break signatures/digests). Where a fixture is
genuinely hand-authored (no generator covers it), edit it directly and recompute
`digestSRI` via the repo's digest helper.

## 0.6 Current repo state — what is ALREADY BUILT (do not rebuild)

The repo is ~8,000 LOC of working, dual-language, parity-tested code. Two layers exist:

- **Research kernel — already implemented in both `core-ts` and `core-py`. DO NOT
  rebuild or redesign it.** This is the evidence graph (`evidence/`), the recursive
  verifier with reason-code tracing (`verifier/`), per-relation edge evaluation
  (`edge/`), policy resolution (`policy/`), the scope logic (`scope/`), and the
  DCQL/Presentation-Exchange request mapping (`presentation-query/`). Part A only
  *trims dead branches* from these (the deleted relations) — it does not touch their
  algorithms.
- **Plumbing — hand-rolled on low-level primitives, and that is fine. KEEP it.**
  Proofs (`proofs/`, an `eddsa-rdfc-2022` Data Integrity implementation on
  `@noble/ed25519` + `jsonld` URDNA2015), status (`status/`, Bitstring Status List),
  did/trust resolution (`trust-registry/`), `canonicalize/`, and `utils/base58btc`.
  **Do NOT replace this layer with the Digital Bazaar libraries.** It is small,
  spec-referenced, and works.

**Current types snapshot (as of v0.2.0) — what you will be changing:**

- `EvidenceRelation` has 6 values with `qi:` prefix — reduce to 3 bare tokens.
- `EvidenceRole` enum exists and is used — delete it entirely.
- `AuthorizationBasisKind` has 8 values with `qi:` prefix — reduce to 6 bare tokens.
- Edge modules for `recognizedBy`, `notifiedBy`, `statusProvidedBy` exist in both
  packages — delete them.
- Context file `contexts/v1/qi-evidence-context.jsonld` has `role` and removed
  relations — replace entirely with §1.5 content.

**Dependency policy:**

- **Part A adds NO new runtime dependencies.** Current deps stay: TS = `@noble/ed25519`,
  `@noble/hashes`, `jsonld`, `ajv`; Python = `pyld`, `PyNaCl`, `pydantic`, `httpx`.
- **Part B adds dependencies ONLY for selective disclosure**, and only on the TS side:
  `@digitalbazaar/ecdsa-sd-2023-cryptosuite`, `@digitalbazaar/data-integrity`,
  `@digitalbazaar/ecdsa-multikey`. Do not add VC/DID frameworks anywhere else.

**Known gap (handled in Part B, not before):** the proof layer implements
`eddsa-rdfc-2022` only, which has **no selective disclosure**, so **G2 (selective
disclosure) is not yet implemented.** Do not attempt to hand-roll it; that is Phase 6.

---

## 1. Ground truth — the target model (authoritative)

### 1.1 Edge relations — exactly THREE

`authorizedBy`, `derivedFrom`, `supportedBy`. Bare tokens (no `qi:` prefix in values
or in code type-literals).

- `authorizedBy` — independent grant; verified on its own terms; **no** subset check.
- `derivedFrom` — bounded projection; **triggers the derivation check** (child scope ⊆
  parent scope).
- `supportedBy` — non-authorizing supporting evidence; verified recursively; **must NOT
  carry `authorizationBasis`**.

**Remove** these relations entirely: `recognizedBy`, `notifiedBy`, `statusProvidedBy`.

- recognition → `authorizedBy` with `authorizationBasis.kind = recognition`
- notification → `authorizedBy` with `authorizationBasis.kind = notification`
- status → carried on the standard `credentialStatus` property
  (`BitstringStatusListEntry`), never as an edge.

### 1.2 The `role` field — REMOVED

Delete the `role` field from every evidence reference / edge object, and delete the
`EvidenceRole` enum/type. Authorizing-vs-supporting is implied by `relation`.
(Note: `issuerRole` is a **different** field inside `authorizationBasis` and **stays**.)

### 1.3 `authorizationBasis.kind` — exactly SIX (open code-list)

`accreditation`, `legalMandate`, `notification`, `schemeAuthorization`, `recognition`,
`operationalScope`. Bare tokens.

**Remove** `capability` and `domainEvidence` as basis kinds. `kind` names the authority
kind of the **referenced parent** (e.g. an `authorizedBy` edge to an operational-scope
credential has `kind: operationalScope`; a `derivedFrom` edge to an accreditation has
`kind: accreditation`).

### 1.4 Canonical worked instance (Profile B) — exact values

Update the reference-material certificate and its chain to these values. **Keep the
existing rich (DRMD-aligned) `credentialSubject` structure — do NOT flatten it.** Only
change the values below, add `scopeRef`, and remove `role`.

| Field | Target value |
| --- | --- |
| issuer / producer id | `did:web:rm-producer.example` (replace **all** `did:web:rm.example`) |
| credential type | `["VerifiableCredential", "ReferenceMaterialCertificate"]` |
| `validFrom` | `2026-02-01T00:00:00Z` |
| material matrix | `CuZn39Pb3 (leaded brass)` |
| certified property | `As` (arsenic) — replace the current `Pb` example |
| value | `178.0` |
| unit | `mg/kg` |
| expandedUncertainty | `5.0` |
| coverageFactor | `2` (k=2) |
| scope reference | add `scopeRef: "scope-entry-As-CuZn"` on the certified-property/result entry |
| credentialStatus | `BitstringStatusListEntry` |
| proof | `DataIntegrityProof` |

Evidence on the RM certificate: one `authorizedBy` edge → operational-scope credential,
`authorizationBasis: { kind: operationalScope, issuerRole: referenceMaterialProducer }`,
plus one `supportedBy` edge → an RM study credential (no `authorizationBasis`). Remove
`role` from both.

The three-credential chain (align existing fixtures wherever they live; search the repo):

- `AccreditationAttestation` (issuer = a NAB DID; scope: As in CuZn39Pb3, range,
  admitted methods; status `BitstringStatusListEntry`) — root, no authorizing edge.
- `OperationalScope` (self-issued by `did:web:rm-producer.example`; scope: As in CuZn,
  subset of accreditation, tightened uncertainty ceiling) — one `derivedFrom` edge →
  the accreditation, `authorizationBasis: { kind: accreditation }`.
- `ReferenceMaterialCertificate` — the certificate above.

Expected verifier outcome: derivation check confirms operational scope ⊆ accreditation;
scope-inclusion confirms 178.0 is inside the accredited range under the decision rule →
**accept**. Also provide a **reject** fixture (value outside the accredited range) →
reject with a distinct reason code.

### 1.5 The `@context` — write `contexts/v1/qi-evidence-context.jsonld` to exactly this

```json
{
  "@context": {
    "@version": 1.1,
    "qi": "https://w3id.org/qi-vc/vocab/v1#",

    "relation":           { "@id": "qi:relation", "@type": "@vocab" },
    "kind":               { "@id": "qi:kind",     "@type": "@vocab" },
    "authorizationBasis": "qi:authorizationBasis",
    "issuerRole": "qi:issuerRole",
    "legalBasis": "qi:legalBasis",
    "scheme":     "qi:scheme",
    "scopeRef":   "qi:scopeRef",

    "authorizedBy": "qi:authorizedBy",
    "derivedFrom":  "qi:derivedFrom",
    "supportedBy":  "qi:supportedBy",

    "accreditation":       "qi:accreditation",
    "legalMandate":        "qi:legalMandate",
    "notification":        "qi:notification",
    "schemeAuthorization": "qi:schemeAuthorization",
    "recognition":         "qi:recognition",
    "operationalScope":    "qi:operationalScope"
  }
}
```

The `@type: @vocab` on `relation` and `kind` makes the bare values expand to IRIs.
**`qi:`-prefixed tokens belong ONLY here, as the right-hand side of `@context`
mappings.** They must never appear as a *value* in a credential, fixture, or code
type-literal.

---

## 2. Resolved decisions (do not re-litigate)

- **Prefix:** bare context-mapped terms + `@type: @vocab` (§1.5). Strip the `qi:`
  prefix from every value and code literal.
- **`capability`:** dropped **as an evidence basis kind**. **Carve-out:** the word may
  legitimately remain where it refers to ILAC *capability expressions* in a **scope**
  context. So: for every `capability` hit, decide — basis-kind/evidence usage → remove;
  scope-expression usage → keep. When unsure, **keep it and log a `TODO(human)`**; never
  bulk-delete.
- **credentialSubject shape:** keep the rich DRMD-aligned structure; do not flatten.
- **Refactor scope:** include `lims-adapter` and `verifier-service` in the cleanup so
  the release is internally consistent.

## 3. Guardrails / non-goals

- **Do not rebuild the research kernel** (`evidence/`, `verifier/`, `edge/`, `policy/`,
  `scope/`, `presentation-query/`). Part A only removes dead branches tied to deleted
  relations; the algorithms stay.
- **Do not replace the hand-rolled plumbing** (`proofs/`, `status/`, `trust-registry/`,
  `canonicalize/`, `utils/`) with Digital Bazaar or any other VC library. The only
  permitted new dependency is the SD cryptosuite in Phase 6.
- Do not invent new vocabulary terms, relations, or basis kinds.
- Do not flatten or redesign credential schemas beyond the changes specified here.
- Do not perform external release steps (Zenodo, tags, GitHub release) — Phase 8 is
  code-prep only.

---

## PART A — Deterministic reconciliation (safe for a cheaper model)

## 4. Phase 1 — Type definitions (keystone; do `core-ts` first, then `core-py`)

- `core-ts` (`packages/core-ts/src/evidence/types.ts`): set the relation union to the
  three bare tokens; delete `EvidenceRole` and the `role` field from
  `CredentialEvidenceReference` and `EvidenceEdge`; set the basis-kind union to the six
  bare tokens; enforce that `supportedBy` carries no `authorizationBasis`.
- `core-py` (`packages/core-py/qi_vc_core/evidence/types.py`): mirror —
  `EvidenceRelation = Literal["authorizedBy","derivedFrom","supportedBy"]`; remove
  `EvidenceRole` and the `role` field; `AuthorizationBasisKind =
  Literal["accreditation","legalMandate","notification","schemeAuthorization","recognition","operationalScope"]`.
- Delete these files (they exist in the repo):
  - `packages/core-ts/src/edge/evaluateNotifiedBy.ts`
  - `packages/core-ts/src/edge/evaluateRecognizedBy.ts`
  - `packages/core-ts/src/edge/evaluateStatusProvidedBy.ts`
  - `packages/core-py/qi_vc_core/edge/notified_by.py`
  - `packages/core-py/qi_vc_core/edge/recognized_by.py`
  - `packages/core-py/qi_vc_core/edge/status_provided_by.py`
  - Remove them from their dispatchers (`edge/evaluateEdge.ts`,
    `edge/evaluate.py`, `edge/index.ts`).
- Build/typecheck both packages.

## 5. Phase 2 — Context, schemas, and value de-prefixing

- Write `contexts/v1/qi-evidence-context.jsonld` exactly as §1.5 (replacing the current
  file which has `role`, `recognizedBy`, `notifiedBy`, `statusProvidedBy`, and no
  `@version` or `@type: @vocab`).
- Update any other context files in `contexts/v1/` (`qi-core.jsonld`, `qi-rm.jsonld`,
  `qi-calibration.jsonld`) where they reference removed terms.
- Update JSON Schemas (`docs/schemas/*`, and any `credentialSchema` targets) to forbid
  `role`, the removed relations, and `capability`/`domainEvidence` basis kinds.
- Across all `examples/**` and all test fixtures, strip the `qi:` prefix from every
  `relation` and `kind` **value**, and remove every `role` field.

## 6. Phase 3 — Verifier dead-branch removal + parity

- In `packages/core-py/qi_vc_core/verifier/graph_verifier.py` (and the core-ts
  equivalent), remove any logic keyed to `recognizedBy`/`notifiedBy`/
  `statusProvidedBy`/`role`. Confirm behavior: `derivedFrom` → subset check;
  `authorizedBy` → own-terms (no subset); scope-inclusion at the claim; `supportedBy`
  → recursive; output `accept`/`reject`/`explain` with reason codes.
- Keep `core-py` behavior in parity with `core-ts` over the shared JSON fixtures
  (`docs/PYTHON_PARITY.md`).

## 7. Phase 4 — Canonical example + chain (Profile B)

- Update the canonical values to §1.4 **in the generators**
  (`scripts/generate-v02-fixtures.js`,
  `packages/core-ts/scripts/gen-interop-fixture.ts`), then **regenerate** the fixtures
  and `examples/**`. Do not hand-edit the signed/generated outputs (see §0.5).
- Add the **reject** fixture (value outside the accredited range) to the generator so
  it is produced and signed the same way.
- Confirm the parity tests (`tests/test_shared_fixtures.py`,
  `tests/shared-fixtures.test.ts`) pass after regeneration. For any genuinely
  hand-authored fixture not covered by a generator, edit it directly and recompute
  `digestSRI` via the digest helper
  (`packages/core-py/qi_vc_core/evidence/digest.py` or the core-ts equivalent); if you
  cannot recompute reliably, log `TODO(human)`.

## 8. Phase 5 — Docs

- `docs/VOCABULARY.md`: three relations, six basis kinds, no `role`; reconcile the
  "capability" language per §2.
- `docs/IMPLEMENTATION_STATUS.md`: mark the migration complete (remove "being
  refactored").
- `CHANGELOG.md`: add a `v0.3.0` entry summarizing the changes.
- Add an ADR (`docs/adrs/adr-008-three-relations-no-role.md`) recording the
  consolidation and superseding the capability-model ADRs.

## 9. Part A acceptance criteria (run before starting Part B; all must pass)

- Test suites green for `core-ts`, `core-py`, `lims-adapter`, `verifier-service`.
- `git grep -nI -e 'recognizedBy' -e 'notifiedBy' -e 'statusProvidedBy' -e 'domainEvidence'`
  returns nothing outside `CHANGELOG.md`, `docs/adrs/`, and
  `docs/IMPLEMENTATION_STATUS.md`.
- `git grep -nI '"role"' -- packages contexts examples` returns nothing (the JSON/field
  `role` is gone; `issuerRole` is fine).
- `git grep -nI 'did:web:rm.example'` returns nothing.
- `qi:`-prefixed tokens appear **only** inside `contexts/v1/*.jsonld`.
  `git grep -nI 'qi:' -- packages examples` returns nothing.
- The canonical RM chain verifies to **accept**; the reject fixture verifies to
  **reject** with a distinct reason code.
- Every remaining `capability` hit has been reviewed (basis-kind removed; scope-
  expression kept) and logged in the report.
- No new runtime dependencies were added in Part A.
- `RECONCILIATION_REPORT.md` exists and lists all `TODO(human)` items.

---

## PART B — Finishing work (separate run; needs decisions / a more capable model or human-in-loop)

> Do not start Part B until Part A passes §9. Part B adds a real feature and makes
> design decisions — work in small steps and surface every decision as `TODO(human)`.
> **Recommended model: Claude Opus or GPT-4o (or equivalent); do not run Part B with
> a fast/cheap model unattended.**

## 10. Phase 6 — Selective disclosure (G2), the missing feature

The proof layer currently implements `eddsa-rdfc-2022` only, which has no selective
disclosure, so the paper's G2 claim is not yet backed by code. Add an SD path
**alongside** the existing proof code — do **not** remove or replace `eddsa-rdfc-2022`,
and do **not** hand-roll SD.

Approach (TS canonical): add deps `@digitalbazaar/ecdsa-sd-2023-cryptosuite`,
`@digitalbazaar/data-integrity`, `@digitalbazaar/ecdsa-multikey`. Add a new module
(e.g. `packages/core-ts/src/proofs/sd.ts`) with three operations: **issue** (issuer
signs committing to all fields), **derive** (holder produces a disclosed subset via
`jsigs.derive` with selective pointers), **verify** (verifier verifies the derived
credential). Then wire SD-verification into the verifier so an SD-secured credential is
accepted on its disclosed subset.

Decisions to surface as `TODO(human)` (stop if unresolved):

- **D-SD-1 disclosable fields:** which RM-certificate fields are always disclosed vs.
  selectively disclosable. Paper example: a verifier needs only the certified value +
  expanded uncertainty; keep property, matrix, value, uncertainty, and `scopeRef`
  mandatory and make personnel/environment/equipment optional.
- **D-SD-2 cryptosuite:** default `ecdsa-sd-2023` (mature, Recommendation-track
  ECDSA); `bbs-2023` only if unlinkability is required (it is still
  Candidate-Recommendation stage).
- **D-SD-3 issuer key:** `ecdsa-sd-2023` needs an ECDSA P-256 multikey, distinct from
  the existing Ed25519 key. Decide key handling (add a P-256 key alongside Ed25519);
  do not break the existing `eddsa-rdfc-2022` path.
- **D-SD-4 Python parity:** Python has no SD library. Python should **verify**
  TS-derived SD credentials over shared fixtures (or consume the already-derived
  disclosed credential and run the graph/policy logic) — **not** implement SD
  issuance/derivation. Confirm and record the chosen scope.
- **D-SD-5 disclosure obligations (B4):** out of scope for code; note in docs that
  holder disclosure operates beneath any lawful full-record access.

Deliverables: an SD-secured RM-certificate fixture and a derived disclosed-subset
fixture (produced and signed by the generator), a verifier test vector proving the
disclosed subset verifies, and a short docs note. Keep `core-ts` → `core-py` parity
tests green.

## 11. Phase 7 (optional — new content) — Profile D test vector

Only after Phases 1–5 pass. Create, under `examples/gs/`, a minimal valid **GS /
product-safety** test vector exercising the derived+independent kernel: an issuing-scope
credential that carries **one `derivedFrom` edge** (`kind: accreditation`) **and one
`authorizedBy` edge** (`kind: schemeAuthorization`) at once, plus a GS certificate
authorized by it. Goal: demonstrate the derivation check runs per-edge and the
independent scheme edge is **not** subset-bounded by accreditation. Use placeholder
scheme/product values with `TODO(human)` for any real-world specifics; the **edge
structure** must be correct. Add it as a verifier test vector with expected `accept`.

## 12. Phase 8 (optional) — Release prep (code only, no external steps)

- Bump version to `0.3.0` in `package.json`, `packages/*/package.json`, and
  `packages/core-py/pyproject.toml`.
- `CITATION.cff`: add `version: 0.3.0`, `date-released: 2026-06-08`, a `doi:` field
  with a `TODO(human)` placeholder for the Zenodo DOI, and a `preferred-citation` block
  pointing to the manuscript.
- `README.md`: remove "under active development"; add a line that the tagged release
  corresponds to the manuscript submission.
- Do **not** tag, push, or create a Zenodo archive — leave those as human steps in the
  report.

---

## 13. Part B acceptance & report

- Full test suites (TS + Python) green, including the new SD and Profile-D test vectors.
- For G2: an SD-secured RM credential can be derived to a disclosed subset and that
  subset verifies; the existing `eddsa-rdfc-2022` path still works unchanged.
- The only new runtime dependencies are the three Digital Bazaar SD packages on the TS
  side; nothing else was added.
- Append a Part B section to `RECONCILIATION_REPORT.md` listing every `D-SD-*`
  decision taken and all remaining `TODO(human)`.

---

## Suggested kickoff messages

**Part A (deterministic — fine for a cheaper model / Codex):**

> Read `RECONCILIATION_TASK.md` and execute **Part A (Phases 1–5) only**. Work on
> branch `refactor/manuscript-v2.1`. Follow §0 (working method), §0.5 (commands), and
> §0.6 (do not rebuild the kernel or replace the plumbing). Do the phases strictly in
> order; after each, run the checks and stop if anything fails you cannot fix
> deterministically. When uncertain, leave a `TODO(human)` and continue. When done,
> run §9 and write `RECONCILIATION_REPORT.md`. Do **not** start Part B.

**Part B (separate run, after Part A passes — use a capable model, review each
decision):**

> Part A is merged and §9 passes. Now execute **Part B, Phase 6 (selective disclosure)
> only**, from `RECONCILIATION_TASK.md`. Surface every `D-SD-*` decision as a
> `TODO(human)` and pause for my input before making irreversible choices. Keep the
> existing `eddsa-rdfc-2022` path intact. Phases 7–8 are separate, later runs.
