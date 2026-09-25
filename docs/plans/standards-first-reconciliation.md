# Standards-first reconciliation: documentation and implementation plan

Prepared 21 September 2026; documentation validated 23 September; I0 completed 24 September.
**Status: D0–D4 and I0 complete; the I1 contract/catalog slice is complete and its
signed protected mapping remains in progress.**

[I0 evidence](standards-first-i0-evidence.md) records the repaired setup, regression
results, remaining lint debt and inventories. The
[I1 contract evidence](standards-first-i1-contract-evidence.md) records the immutable
request/result API, incomplete manifest and exact-byte catalog. Next is the signed
protected mapping slice required to finish I1.

## Recommendation and scope

Update this repository through a staged replacement of its evaluator. Keep its
history, package structure, useful security primitives, fixture-generation
machinery, TypeScript/Python test infrastructure and demo components. Introduce a
new evaluator contract and binding model alongside an explicitly isolated legacy
path, then move the default entry point after the new signed RM baseline passes.

A fresh repository would discard useful regression evidence and application
work without removing the difficult work: protected interpretation, complete
routes, scope semantics and independent support. Incrementally patching the old
edge dispatcher would also be insufficient. Its wire enums, graph identity,
policy matching and boolean aggregation encode assumptions the revision removes.
Replace those abstractions coherently; reuse lower-level code only after checking
its behavior against the new contracts.

The original planning pass preserved the supplied handover and created this plan
and acceptance ledger. D0–D4 updated documentation before runtime work. I0 then repaired
workspace configuration and legacy scope predicates. Signed credentials and release
metadata remain unchanged; active guidance uses the standards-first contract.

The supplied text is an implementation handover, not the complete manuscript.
No tracked manuscript `.tex`, `.bib`, `.pdf` or `.docx` was found. Plan manuscript
corrections by topic; do not claim to have edited or checked a byte-identical v5
paper or reuse old manuscript section numbers as authoritative.

## Sources and observed baseline

The [unaltered handover](standards-first-handover-2026-09-21.txt) is the task-specific
source of requirements. Its SHA-256 is
`89f3b5a3502c433b94ecbdfcd432f95f276ea720c9ff7447022d1c01523548f3`.
Later user instructions take precedence; unrelated repository rules remain.

The two dated primary-source links were reachable during this review:

- [VCDM 2.0 Recommendation, 15 May 2025](https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/)
  defines the carrier mechanisms. Our selected binding supplies QI interpretation.
- [Recognized Entities Working Draft, 6 September 2026](https://www.w3.org/TR/2026/WD-vc-recognized-entities-1.0-20260906/)
  includes recognized actions and output schemas; identifier discovery verifies
  the retrieved presentation and its binding to the queried issuer. Treat this
  adapter as experimental, with exact supported coverage.

No current EUDI/EUBW legal or format-conformance claims are established by this
review. Verify the relevant primary specification before adding such claims.

| Observation | Planning consequence |
| --- | --- |
| Clean initial checkout at `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`, branch `refactor/manuscript-v2.1` | Preserve this merged history, including GS assessment and external-laboratory work. |
| `17dc96d` is an ancestor of HEAD; the registry and governed-identifier history is present | Do not reapply those commits blindly. |
| `63231d27bbec86c0e46e3eca48e0ac8a078739a7` is unavailable locally; the shared scope-containment fixture is absent | Reproduce the safety properties in handover §1.2 and prove them with new vectors. |
| Local `origin/main` points at `8847bc4`; remotes were inspected but not fetched | These are local observations, not a claim about current GitHub tips or push permissions. |
| Seven demo entries cover A–F, including two D variants; eight example directories have READMEs | Preserve actual scenarios and distinguish demo lettering from the old paper's five-profile table. |
| LIMS is a `.gitkeep` directory; verifier-service has an `app` directory but no package manifest | Do not count these as implemented service packages. Repair workspace claims and commands. |
| `CITATION.cff` already contains a version, release date and DOI | Preserve existing metadata as historical; verify its archive target before associating it with any new version. |

21 September baseline execution on Node 20.19.0, pnpm 10.15.1, Python 3.12.3:

| Command | Exit | Observed result |
| --- | --- | --- |
| `pnpm -C packages/core-ts test` | 0 | 187 tests passed in 18 files. |
| `python3 -m pytest packages/core-py/tests -q` | 1 | System interpreter has no `pytest`. |
| `.venv/bin/python -m pytest packages/core-py/tests -q` | 0 | 157 passed, 1 skipped using the existing project environment. |
| `pnpm -r build` | 0 | Core typecheck and demo typecheck/Vite build passed; bundle-size warning. |
| `pnpm -r --if-present lint` | 0 | Existing core TypeScript typecheck-based lint passed; no Python lint executed. |
| `pnpm test:scenarios` | 0 | 2 tests passed; this command does not run demo browser controls. |
| `pnpm validate:schemas` | 0 | 4 schemas and 2 examples passed; six examples were skipped for lacking `$schema`. |

These results establish the legacy baseline only. They do not establish the 83
new acceptance cases, independent crypto conformance, offline reproducibility,
Python lint cleanliness or actual browser interaction coverage. No dependency install
or fixture regeneration was needed for this planning pass.

## Evidence for what to retain and replace

| Area | Evidence at original base (before I0) | Treatment |
| --- | --- | --- |
| Graph, policy and result model | `evidence/types.ts` hardcodes three relations and six bases; `verifier/trace.ts` and Python `trace.py` accept when failure count is zero | Replace default model and aggregation; retain legacy APIs only behind explicit selection. |
| Principal binding | `edge/evaluateAuthorizedBy.ts` compares identifiers only when both are present | Replace with a mandatory, profile-defined grantee/actor predicate; add missing-identifier and multiple-subject tests. |
| Scope | `scope/index.ts` checks only the upper pressure endpoint in part of derivation, permits uninterpretable ranges, and evaluates RM form/property constraints separately | Preserve governed identifier equality; replace record matching and quantity semantics; reproduce the missing regression patch's safety properties. |
| Supporting evidence | `evaluateSupportedBy.ts` records successful resolution, with other checks elsewhere in the graph | Add explicit independently justified node-use and object/purpose applicability obligations. |
| Cryptography and resource integrity | SD integration, proof tests and signed registry fixtures exist; general canonicalization still sets `safe: false` | Retain suite integration and test assets, but audit suite transforms, safe expansion, key authorization and exact integrity representation before reuse. |
| Demo | Two GS variants enable proof checks; other scenarios use `skipProof`; key callback returns one constant key | Preserve layout, inspectors, replay and disclosure view; replace assurance/results and fixture identity resolution. |
| Assessment | Policy-driven human/agent/hybrid callback and signed GS examples exist | Preserve application behavior; distinguish verifier assessment from authenticated authority-issued predicate answers. |
| Presentation queries | Existing DCQL/Presentation Exchange code assumes old evidence paths | Retain integration boundary; regenerate constraints from accepted bindings and test request sufficiency separately from reliance. |

## Part D: update project documentation first

Complete D0–D4 before changing the model in runtime code. Normative documents
describe the target; status documents describe the actual implementation.
Unimplemented examples must say so. Final tested commands and execution evidence
are filled in as implementation lands, never forecast as completed results.

### D0 — establish one active mandate

1. Preserve the previous reconciliation brief as dated, explicitly superseded
   history. Replace the active `RECONCILIATION_TASK.md` with a concise entry point
   to the new requirements, plan, phases and acceptance ledger.
2. Update `AGENTS.md` and `CLAUDE.md` together: remove the three-relation lock,
   universal six-basis assumption, blanket kernel freeze and obsolete next steps.
   Record permission for narrowly necessary reviewed dependencies and locally
   owned experimental binding terms. Keep fixture discipline, safe processing,
   TS canonical/Python semantic parity and protection of the archive branch.
3. Use an isolated execution branch, proposed name
   `refactor/standards-first-reconciliation`, containing this checkout's relevant
   history. Recheck normal remote refs and ancestry before choosing its base;
   do not reset to an older main and lose GS work. The documentation pass now runs on
   that branch, created from the merged baseline after a successful origin fetch.
4. Mark ADR-008 superseded with a link to a new decision; preserve its original
   reasoning. Review the separate `docs/adr/ADR-006-evidence-graph-architecture.md`
   too: it still calls all authority references `evidence`. Avoid confusing it
   with `docs/adrs/adr-006-no-dlt.md`.

Acceptance: no active instruction requires the old default wire contract. Search
results for old terminology are classified as current defects, migration notes,
explicit legacy behavior or historical material, not blindly deleted.

### D1 — rewrite the normative model and contracts

Update `MODEL_SPEC`, vocabulary, policy and architecture documents as a consistent
set, with these mandatory decisions:

- Four layers: minimal evaluator; bindings/profiles; reference software;
  fixtures/applications. No universal serialized graph vocabulary.
- Exact carrier responsibilities, experimentally owned terms and manifests;
  no automatic replacement of `derivedFrom` with PROV provenance.
- Verifier-owned request: selected claims, purpose, accepted profile/version,
  anchors, times, evidence, resolution budgets and optional conformity rule.
- Semantic states `established`, `contradicted`, `not_established`; separate
  execution state `not_run`. Specify conjunction/disjunction truth tables and
  `accept`/`reject`/`not_established` reliance, independently of document verification.
- Canonical gates 0–6: plan/structure; resource identity; protection; time;
  meaning/mapping; authority/scope; support/decision.
- Artifacts versus contextual node-uses; complete AND-within/OR-between routes;
  global restrictions outside route alternatives; required support and active
  stack cycle detection; witnesses with original source provenance.
- Scope record completeness, governed identifiers, quantity kinds, exact unit
  conversion and boundaries; mapping must preserve decision-relevant meaning.
- Separate scope, calibration capability floor, optional customer uncertainty
  limit and conformity. No RM accreditation uncertainty ceiling.
- Bounded resolvers, authenticated registry/status resources, cache context and
  temporal policy. Unknown required evidence cannot authorize reliance.
- Local versus authority-attested predicates; point coverage cannot prove full
  operational containment. Recognition cannot replace support or conformity.
- Conditional semantic assumptions and cost accounting; remove the blanket
  linear-total-verification claim.

Draft the local experimental RM binding design before coding: enumerate the
handover's twelve manifest categories, accepted context/schema versions, exact
source paths and IRIs, cardinalities, identity/grant rules, proof/integrity rules,
scope and time rules, routes, disclosure requirements and exclusions. Use a
reserved `.example` namespace for fixture-owned terms. This is not a fabricated
production standard. The executable manifest is implemented and checked in I1.

### D2 — reconcile all explanatory and operational documents

The inventory below assigns an action to the existing tracked Markdown surface,
plus citation/configuration material that documents project behavior. Grouped
directories mean every matching file is reviewed, not just one representative.

| Files | Planned action |
| --- | --- |
| `AGENTS.md`, `CLAUDE.md`, `RECONCILIATION_TASK.md` | D0 mandate, branch, supersessions and current commands. |
| `docs/MODEL_SPEC.md` | Replace old edge calculus with the D1 target and explicit assumptions. |
| `docs/VOCABULARY.md`, `docs/SCOPE_TERMS.md` | Separate standard carrier terms, binding-owned native facts, internal API names and legacy terms; correct placeholder minting guidance and unit-mapping claims. |
| `docs/POLICY_PROFILES.md` | Define complete routes, restrictions, claim selection, support, time and conformity; distinguish verifier profile selection from issuer declarations. |
| `docs/ARCHITECTURE.md`, `docs/architecture/01-overview.md` | Maintain one substantive architecture with the other as a current summary/link; remove divergent graph/gate descriptions. |
| `docs/adrs/adr-008-three-relations-no-role.md`, `docs/adr/ADR-006-evidence-graph-architecture.md`, `docs/adrs/adr-005-vc-chain-design.md` | Mark superseded decisions and link successors without rewriting history. |
| `docs/adrs/adr-002-urdna2015-canonicalization.md`, `adr-003-bitstring-status-list.md`, `adr-004-trust-registry-as-vc.md` | Review exact suite transforms, resource integrity and authenticated status/anchor policy; add amendments where behavior changes. |
| `docs/adrs/adr-007-m375a-worked-example.md`, `adr-009-selective-disclosure-ecdsa-sd-2023.md` | Distinguish real source provenance from fictional RM fixtures; replace mandatory custom `scopeRef` assumptions with required native evidence/disclosure. |
| `docs/adrs/adr-000-adr-process.md`, `adr-001-polyglot-architecture.md`, `adr-006-no-dlt.md` | Retain compatible decisions; fix only conflicting scope/status references. |
| `docs/SELECTIVE_DISCLOSURE.md`, `docs/PRESENTATION_QUERY.md`, `docs/PYTHON_PARITY.md` | New binding paths, disclosure sufficiency, contextual identity, query limitations and exact semantic-versus-crypto parity. |
| `docs/ASSESSMENT.md` | Preserve GS application assessments; document accepted evaluators and authority-answer trust boundaries; no override of failed required gates. |
| `docs/schemas/*.md`, `docs/tutorials/*.md` | New carrier/API walkthroughs with original secured representations and witnesses; label executable legacy instructions during transition. |
| `docs/scenarios/scenario-catalogue.md`, `tests/scenarios/README.md` | Catalogue actual scenarios, purpose, binding, crypto assurance, expected states and diagnostic assertions; resolve A–F versus old paper labels. |
| All eight `testdata/examples/*/README.md` files | Migrate six base use cases and both GS application variants; explain correct institutional roles and fixture generation. |
| `examples/gs/README.md`, `examples/rm/source/README.md` | Updated GS relations and fictional status; retain native XML provenance and explain what its wrapper does and does not protect. |
| `tests/fixtures/keys/README.md` | Fixture issuer/key/controller mapping; deterministic test-only material and adversarial controls. |
| `README.md`, `docs/IMPLEMENTATION_STATUS.md` | Current-versus-target capability table: semantics, crypto, experimental bindings, simulation and unsupported integrations. |
| `docs/NON_GOALS.md`, `SECURITY.md` | Explicit supported boundary, resolution/security threats and physical-object limitations; retain reporting contacts. |
| `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `.github/ISSUE_TEMPLATE/*.md` | Accurate setup and verification commands, requirement IDs and evidence; retain existing review policy without treating it as permission needed for local planning/implementation. |
| `CODE_OF_CONDUCT.md` | Review; retain unchanged absent a task-specific conflict. |
| `RECONCILIATION_REPORT.md` | Append dated planning and phase evidence only; do not rewrite historical test claims. |
| `docs/PAPER_FEEDBACK.md` | Append supersession notes for old relation/ceiling claims and a manuscript-facing correction list; preserve valid safe-mode findings. |
| `CHANGELOG.md`, `CITATION.cff` | Draft migration/compatibility notes; preserve history and verify existing DOI; no invented publication, release date or new DOI. |
| Package metadata, `Makefile`, root `pyproject.toml`, `.github/workflows/ci.yml`, release workflow | Record command/environment discrepancies now; fix executable configuration in I0/I8. The documentation pass found pnpm 9 in CI against a 10.15.1 package pin; I0 repaired this discrepancy. |

Add focused documents only where needed: binding manifest guide, API migration
guide and acceptance/evidence index. Use cross-links to the model and manifest
instead of independently restating the same normative rules everywhere.

### D3 — create traceability and manuscript corrections

The [acceptance ledger](standards-first-acceptance.csv) preserves all **83** source
cases: V01–V12, P01–P16, S01–S24, C01–C16 and E01–E15. Initial status is
`not_assessed`: passing old tests does not prove new requirements. During I0,
classify each as `not_implemented`, `implemented_not_run`, `passing`, `failing`
or `excluded_unsupported`, with code/test paths, command, exit code and evidence.
An explicitly unsupported adapter must remain visible and is not a conformance pass.

Add a second traceability mapping for non-test requirements in handover §§0–18:
requirement → normative section → implementation phase/module → evidence or
limitation. Matrix coverage alone does not establish every architectural requirement.

Manuscript corrections must cover contribution framing, accepted semantics and
mapping assumptions, recursive support, complete routes and restrictions,
recognition's actual capabilities, local versus attested scope, all three RM
outcomes, physical-object limitations, performance and verified release claims.
Keep the existing title and framework structure. Schemas can constrain numeric
bounds and logical combinations; explain the additional cross-artifact meaning
and authority requirements accurately.

### D4 — documentation consistency gate

Check links, Markdown, current commands and source precedence. Audit old relation
names, `authorizationBasis`, `scopeRef`, gate numbering, uncertainty inequalities,
proof skipping, test totals, service/package claims and performance/release claims.
Every active normative document must agree; historical/legacy occurrences are
explicitly labeled. Documentation completion means an accurate target and status,
not a claim that future code or example commands already work.

## Part I: implement the agreed target

Numbering I0–I8 matches handover phases 0–8. D0–D4 precede model changes;
I0 includes the remaining executable baseline preparation. Use a coherent commit
per phase or smaller reviewable unit with `refactor(phase-N): ...` messages.
Keep Python semantics aligned as each feature lands.

### I0 — baseline, regression preservation and reproducible setup

Recheck refs/base/environment and run required checks. Map old wire consumers in
packages, contexts, schemas, policies, generators, examples and UI. Repair empty
workspace declarations and documented commands. Inventory current static loader
resources. Recover the missing scope patch if available, or add shared vectors
for its seven safety properties and fix/reuse those checks under the new profile.
Record old failures separately from new work.

Exit: reproducible baseline, explicit migration boundaries, mapped regression
coverage and completed documentation gate. No claim that an absent commit was applied.

### I1 — binding manifest, request/result types and a signed vertical slice

Implement the small binding/profile interfaces and one local experimental RM
binding. Create verifier-owned requests, artifact/node-use identities, states,
obligations and witness types in TS and Python. Provide safe contexts/schemas and
a generator for a real signed target plus authoritative artifact with actual
issuer/key/controller mappings. Pin static dependencies locally with provenance
and hashes. Preserve native XML and original signed representations.

Exit: both languages can verify supported baseline protection, extract protected
facts through exact native paths and report provenance. New credentials contain
no legacy relation/basis contract. Test arbitrary policy names and unsafe expansion
as negative controls. Settle exact integrity representation here, before migration.

### I2 — protected graph compiler and seven-gate evaluator

Replace default `evidence/`, wire `edge/` dispatch and verifier orchestration with
candidate extraction, bounded resolution, artifact verification, mapping and
obligation compilation. Enforce authorized key relationships, authenticated
registries/status, deterministic dispatch, identity conflicts and temporal policy.
Separate artifact caches from contextual reliance caches and dynamic observations.
Implement semantic aggregation independent of display trace counts.

Exit: relevant V/P cases prove no higher-gate authority from failed lower gates,
no all-SKIP acceptance, correct missing-versus-contradicted states, and bounded
resource failures. Original signed bytes are never repaired before verification.

### I3 — complete authorization routes and recursive support

Implement mandatory principal/grantee binding, granting rights and operational
maintenance permission; AND requirements within routes, OR between complete
routes, and applicable global restrictions. Evaluate support for its own role and
authority before checking batch/material/instrument/method/time applicability.
Memoize complete node-use context and detect required recursion on the active
stack; allow shared DAG reuse and inert unrelated provenance cycles.

Exit: C01–C16 and principal controls pass with signed semantic fixtures. Wrong
batch is contradicted; missing study is not established. Incomplete route search
cannot claim every route was disproved. Keep GS independent laboratory authority.

### I4 — full signed RM baseline, scope/conformity and language parity

Implement A/O/D/S/H: accreditation, permitted operational scope, target RM,
required study and independently established laboratory authority. Use complete
record witnesses, exact governed identifiers, supported mass-fraction arithmetic
and accepted M1/M2 semantics. Implement conformity separately from scope, including
authorization-only requests. Port each predicate and its shared vectors together.

| RM input | Authorization/scope | Conformity when requested | Reliance |
| --- | --- | --- | --- |
| x=178, U=5 | Inside [50,500], all other obligations established | 178+5=183 ≤ 200 | accept |
| x=197, U=5 | Established | 197+5=202 > 200 | reject for conformity |
| x=520, U=5 | Contradicted: above 500 | not_run | reject for scope |

Exit: S01–S24 plus x=197 authorization-only, x=195 exact decision boundary,
x=500 inclusive scope, both interval endpoints, missing/invalid units, mg/kg↔kg/kg,
no record splicing and no RM uncertainty ceiling. Compare states, selected
records/routes and normalized arithmetic across languages. The paper witness must
run with real protection and no stubs for mechanisms claimed as implemented.

### I5 — migrate artifacts and switch the default API

Regenerate contexts, schemas, policies and signed fixtures from generators. Move
legacy fixtures and adapter tests into explicit legacy scope; verify originals
before mapping them and never imply converted signatures remain valid. Migrate
all six base use cases and retain both GS application variants. Replace old
presentation-query paths and document API/schema/profile version breaks.

Exit: the default new path has no dependency on legacy wire enums, and V01–V12
cover explicit compatibility behavior. Do not weaken expected results just to
restore green tests. Draft a coherent next pre-1.0 version such as 0.4.0 using
repository conventions; final numbering/metadata follows the migration evidence.

### I6 — external scope answers and experimental recognition

Implement authenticated answers bound to the exact predicate, claim, grantee,
activity, scope version, profile and time. Establish signer authority independently;
point coverage cannot discharge full containment. Implement the pinned Recognized
Entities credential-discovery subset with membership/action/output checks and
configured anchors. Explicitly exclude identifier discovery initially, unless its
VP proof and issuer-binding requirements are implemented and tested.

Exit: E01–E09, stated exact coverage and no accidental combination of grants from
different bindings. No full wallet, live institutional service or EUDI integration
is necessary for the local executable baseline.

### I7 — demo, selective disclosure and presentation sufficiency

Render the same compiled graph and witnesses used by evaluation. Preserve existing
inspectors, actor grouping, replay and SD view. Show verification, authorization,
support, conformity and overall reliance distinctly. Proof-disabled operation is
visibly simulation/insufficient evidence. Add guided RM controls for x, M1/M2,
missing study and supported time, keeping graph inspection usable.

Use fictional reissuance for legitimate changed values; expose a separate tamper
control. Retain TS `ecdsa-sd-2023`, test mandatory evidence disclosure, and handle
legitimate suite-derived representations without naïve identity conflicts. Python
SD remains semantic verification of a TS-derived subset, explicitly not SD crypto.

Exit: E10–E14 and actual UI interaction tests, including transitions 178→197→520,
inspector selection, unavailable history and simulation labels. A Vite build or
direct store invocation alone is insufficient UI evidence. Interactive presentation
holder/audience/challenge/replay features are supported only if actually implemented.

### I8 — reproducibility, evidence and review package

Run build/lint/tests/schema checks in supported environments. Add stable commands
for signed RM execution, semantic parity and UI interaction. Require a network-
disabled static-resource lane; keep optional live integrations separate. Fix schema
validation coverage so missing `$schema` does not silently exempt the new binding.
Run available independent suite known-answer vectors; two implementations agreeing
on a shared fixture do not prove crypto correctness.

Complete the acceptance ledger and requirements mapping, record witnesses, exact
commands/exits, skipped/unsupported mechanisms and remaining blockers. Refresh
status/README/tutorials against executable results, API migration notes and draft
citation metadata. Include actual branch/base/final SHA and review state.

Exit: handover §17 checked against evidence, clean reviewable commits and no
unexplained required failure. Prepare local review material; remote writes require
the active session's authorization and permissions. No tags, package publication,
archive minting or claim that a new release exists. Export a patch/bundle if needed.

## Execution order, risks and decisions

Critical path: **D0 → D1 → D2 → D3 → D4 → I0 → I1 → I2 → I3 → I4 → I5 → I6 → I7 → I8**.
Document the interfaces before widening schemas; prove one secured vertical slice
before bulk regeneration; establish the complete RM witness before expanding adapters.

The largest technical risks are protected mapping/context coverage, contextual
identity under SD, route semantics, exact arithmetic and support recursion. Address
each with witnesses and adversarial tests early, rather than compensating with UI
warnings. Existing GS scope and assessments must survive without carrying forward
an unsupported authority claim. Local fictional fixtures do not establish real
accreditation, legal effect, physical truth or production interoperability.

Routine interface names, local experimental terms, exact arithmetic strategy,
resolver catalog format and test organization can be selected and documented
within the handover's authorization. Actual real-world governance inputs that the
handover does not supply require a localized `TODO(human)` and report entry; they
do not block the fictional RM baseline or independent work.

D0–D4 and I0 are complete, with validation and remaining baseline debt recorded in the
report. I1's contract, catalog, pinned resources, key authorization and signed slice are
implemented in both languages; the published-context comparison and an independent
transformation vector remain open. I2, the protected graph compiler and seven-gate
evaluator, is next.

The user requested Astra for hard semantic/design review, Sol for implementation
and Luna at max reasoning for bounded documentation/consistency tasks. These three
delegated documentation runs were attempted on 22 September but all failed before
work with a workspace-credit error. The main agent completed the documentation
locally. During I0, Astra completed bounded semantic reviews; Sol/Luna remained
unavailable. See the I0 evidence for the exact review boundary.
