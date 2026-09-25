# I1 signed RM vertical-slice evidence

**25 September 2026. The TypeScript signed vertical slice is implemented; Python
safe-mode protection parity, status resources and the I2–I4 evaluators remain.**
This evidence establishes protection, validity and integrity of fictional signed
artifacts. It establishes no authorization, support, conformity or overall reliance.

## What is implemented

| Part | Location | Behaviour |
| --- | --- | --- |
| Pinned resources | `bindings/experimental/rm-v1/catalog.json`, `scripts/rm-v1/build-resources.mjs` | RM v1 context, seven schemas and the vendored VCDM 2.0 context, SHA-384 over exact bytes |
| Key authorization | `reliance/key-authorization.ts`, Python `key_authorization.py` | Proof key must be the issuer's own Ed25519 Multikey, referenced from `assertionMethod` in its catalog-installed controller document; 17 shared vectors |
| Signed fixtures | `rm-v1/test-vectors/signed/`, `packages/core-ts/scripts/generate-rm-v1-artifacts.ts` | Controller documents and A, H, O, S, D178; reproducible from public seeds; `--check` mode |
| Artifact verification | `reliance/rm-v1-artifacts.ts` (`verifyRmArtifact`) | resolve → strict JSON → exact context pair → recognized type + declared schema → pinned JSON Schema → one proof → key authorization → Ed25519 signature over safe-mode RDFC canonicalization, offline |
| Protected facts | same | Only after protection: manifest native paths evaluated to concrete RFC 6901 pointers |
| Slice evaluation | same (`evaluateRmSlice`) | Protection, validity and `relatedResource` integrity executed; authorization, support, conformity `not_run`; decision is never `accept` |

State rules: missing or unsupported inputs are `not_established` (unavailable artifact
or controller document, unsupported context combination, proof set); evidence of
failure is `contradicted` (schema violation, key not the issuer's, bad signature,
digest mismatch, expiry). Contradiction yields `reject`; otherwise the I1 decision is
`not_established` because the unexecuted obligations cannot establish anything.

## Results

`packages/core-ts/tests/rm-v1-slice.test.ts`: 19 tests pass. Each of A, H, O, S and D178
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
- a selected claim outside the protected results → claim `not_established`.

Full-suite results in this environment: `pnpm -C packages/core-ts test` 302 passed, 9
failed; the 9 are pre-existing legacy tests that fetch the W3C context over the network
(blocked here) and pass in CI. `pnpm -r build` (including the browser demo), TS lint,
scenarios and schema validation exit 0.

## Limits and remaining I1 work

- **Python parity.** Python mirrors pinning and key authorization. PyLD 3.3.0 has no
  safe mode, so Python makes no protection claim yet.
- **Independent vectors.** Proofs are produced and verified by the same TypeScript code.
  The published W3C Appendix B.1 control checks the signature primitive only; a full
  independent transformation vector is still missing.
- **Status.** No status list exists yet; status is reported as a limitation.
- **Published context hash.** The vendored VCDM 2.0 context was not compared with the
  hash W3C publishes (network blocked here).
- The manifest stays `incomplete`; no acceptance-ledger case is marked passing.
