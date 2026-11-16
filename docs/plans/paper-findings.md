# Findings from the paper revision

Issues in the implementation found while revising the paper (v9, November 2026). Each item
says what the paper needs and where in the repository the fix belongs. Nothing here is
done yet; these are inputs for the work before release 0.5.0.

## Needed before the paper can cite a release

1. **The pin has no ledger case.** The digest on a link entry is tested
   (`packages/core-ts/tests/rm-v1-slice.test.ts`, "changed bytes of a referenced resource
   contradict integrity even when its signature holds"), but that test has no ledger ID.
   The paper cites ledger cases for each design rule. Add a case (for example P17) with
   the TypeScript test and its Python mirror.
2. **P12's evidence is narrower than its claim.** P12 says a digest mismatch and a
   timeout give distinct reasons; its test (`P12/P16` in `rm-v1-slice.test.ts`) asserts
   only budget exhaustion. Add the mismatch assertion, or narrow the row.
3. **Release 0.5.0.** Everything since 0.4.0 (recognition, appointment, status at the
   activity time, D-SI values, shared roots) is unreleased. Versions are still 0.4.0 in
   `package.json`, `packages/core-ts/package.json`, `packages/core-py/pyproject.toml`,
   `CITATION.cff`, the README BibTeX and the header of `docs/status.md`.

## Ledger wording

14. **E16 and E18 wording.** Their expected results ("no authority through it",
    "recognition without stated actions is not authority") read as if recognition could
    otherwise be authority. The paper says recognition grants no authority; reword both
    rows, for example "recognition contradicted; nothing is established through it".
15. **P13 is narrower than its tests.** The row covers only "historical query with only
    current status"; the tests under P13 also show the kept January list answering status
    on the activity day. Split the kept-list half into its own case or widen the row.
16. **Old letters in the ledger.** Rows still say A, H, O, S, D178, R; the fixtures and
    the paper use ACC-RMP, ACC-LAB, LIST-RMP, HOM-LOT1, RM178, REC-NAB.
17. **Upward-only membership has no ledger ID.** The test "the hierarchy never runs
    downward" (`rm-v1-authority.test.ts`) backs design rule 5; give it a case.

## Citation metadata

13. **Paper title changed.** The paper's subtitle is now "Design Rules and a Verification
    Contract over W3C Verifiable Credentials" (main title unchanged). Update the preferred
    citation in `CITATION.cff`, the README BibTeX and `NOTICE` when the paper is posted.

## Stale text the paper would contradict

4. `packages/core-ts/src/reliance/evaluate.ts`, header comment: legacy credentials
   "evaluated only through `legacy.evaluateLegacyProfile`"; that verifier was removed in
   0.4.0.
5. `packages/core-ts/src/reliance/binding-chain.ts`, comment above `verificationOf`:
   "the integrity of each relatedResource it names"; the digest now sits on the
   `termsOfUse` and `evidence` entries.
6. `bindings/experimental/rm-v1/README.md`: "The repository-root v1 contexts, schemas
   and credentials implement the legacy model"; no such root files exist.
7. Proof option checks (`core-ts/src/proofs/index.ts`, `core-py/qi_vc_core/proofs`)
   call the current API "legacy"; it is the supported option subset.
8. `docs/status.md`: test counts from branch `DSI` (345 and 314; now 352 and 320) and
   "unreleased, branch `feat/global-aci-recognition`", which is merged and deleted.

## Behaviour the paper's offline claim depends on

9. **Default document loaders fetch.** `canonicalize()` in TypeScript falls back to
   jsonld's network loader when no loader is passed, and the Python loader fetches unknown
   URLs unless `strict` is set. The evaluators pass catalog loaders, so verification stays
   offline, but the exported helpers do not. Make the default strict, with an explicit
   opt-in to fetch, and test it.

## Quality (from the pre-release audit)

10. Python lint is not in CI; Ruff (23) and mypy (30) findings are recorded but not fixed.
11. Repeated helpers across bindings: `isObject` five times in TypeScript; `_short`,
    `_subject`, `_instant`, `_time`, `_list`, `_nonempty` in several Python modules.
12. `pnpm audit --prod` reports advisories through jsonld (undici) and ajv (fast-uri);
    offline verification does not reach them, but installers inherit them.
