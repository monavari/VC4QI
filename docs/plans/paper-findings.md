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

## Two activity times

18. **The request's activity time and the certificate's are never compared.** Status is
    evaluated at `request.activityTime` (`binding-chain.ts`), while grant validity and
    issuer standing are evaluated at the certificate's `credentialSubject.activityTime`
    (`rm-v1-authority.ts`). A request about 20 January for a certificate whose subject says
    another day mixes two times silently. Decide whether a historical request must name the
    certificate's own activity time (contradict or not establish otherwise), add a ledger
    case, and document both times in `docs/model.md`.

## Untested claims and fixture choices

19. **No test at a decimal boundary a double cannot hold.** Exact decimal reading is tested
    (`rm-v1-resources.test.ts`, `dsi.test.ts`) and S04 tests an inclusive limit with
    integers (195 + 5 = 200). Add a case such as x = 0.1, U = 0.2 against a bound of 0.3.
20. **Claims not on the producer's list.** RM178 certifies As, Cu, Zn and Pb; LIST-RMP
    covers As only, and every test selects the As result. Add a case selecting the Cu
    result and assert that no record covers it.
21. **Jurisdiction code of the fictional state.** APP-NAB's `permissionFor.jurisdiction`
    is the EU authority-table code for Germany (`atu/DEU`). The paper says no real
    authority is modelled; decide whether to keep a real code (EBSI requires one from that
    table) or use a clearly fictional value, and say so in the fixture description.

## Ledger cases the paper cites but cannot point to

22. **Three recognition tests without ledger IDs** (`rm-v1-recognition.test.ts`): an
    `issuer.recognizedIn` naming another credential than the `RecognitionPolicy` (reject);
    a recognition named by nothing in the chain (not established); a recognition named as
    an `IssuedUnderPolicy` grant. Give each a case.
23. **Weak assertion.** The "recognition named as a grant" test asserts only that the
    decision is not `accept`; assert the intended verdict.
24. **P04 has no test named for it.** The ledger marks P04 passing, but no TypeScript or
    Python test mentions P04. Point the row at the test that covers it or add one.
25. **S09 row and test disagree.** The ledger says As/M1 and Pb/M2 with a claim As/M2; the
    test uses Pb/M3 and As/M3. Align them.

## Quality (from the pre-release audit)

10. Python lint is not in CI; Ruff (23) and mypy (30) findings are recorded but not fixed.
11. Repeated helpers across bindings: `isObject` five times in TypeScript; `_short`,
    `_subject`, `_instant`, `_time`, `_list`, `_nonempty` in several Python modules.
12. `pnpm audit --prod` reports advisories through jsonld (undici) and ajv (fast-uri);
    offline verification does not reach them, but installers inherit them.
