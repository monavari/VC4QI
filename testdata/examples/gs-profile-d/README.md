# gs-profile-d — Profile D test vector (Phase 7) — SKELETON

**Status: skeleton with `TODO(human)` placeholders. Not yet wired into the passing
test suite** (the verifier test for it is `skip`-marked until the fixtures are
finished). See `RECONCILIATION_TASK.md` §11 and `docs/MODEL_SPEC.md` §7 (Profile D).

## What this vector must demonstrate

Profile D = **notification / scheme** (notified body; product-safety / GS marks).
Its whole point is that a single credential composes **two different edge kinds**,
and the derivation check runs **per edge**:

```
GS certificate
  └─ authorizedBy ──────────────▶ GS issuing-scope VC
                                    ├─ derivedFrom ──▶ Accreditation (kind: accreditation)   [SUBSET-CHECKED]
                                    └─ authorizedBy ─▶ Scheme authorization (kind: schemeAuthorization)  [INDEPENDENT]
```

The **derivedFrom** edge (issuing-scope ⊑ accreditation) is subset-bounded — the
issuing scope must not exceed the accredited scope. The **authorizedBy** scheme
edge is independent — it is verified on its own terms and is **NOT** subset-bounded
by the accreditation. Expected result: **accept**.

> Contrast with the existing `gs-scheme-authorization` vector, where the GS
> certificate carries *two `authorizedBy`* edges (scheme + accreditation). Profile D
> is different: the **issuing-scope** credential sits in the middle and carries the
> `derivedFrom` accreditation edge, so the per-edge derivation check is exercised.

## Files (fill these in)

| File | State | What to do |
|---|---|---|
| `target-credential.json` | stub | The **GS certificate**, `authorizedBy` the issuing-scope VC. |
| `evidence/gs-issuing-scope-001.json` | stub | The **issuing-scope VC**: carries one `derivedFrom` (accreditation) **and** one `authorizedBy` (schemeAuthorization) edge, with a scope ⊑ the accreditation's. |
| `evidence/accreditation-001.json` | stub | The accreditation, with a scope that the issuing-scope is a subset of. |
| `evidence/scheme-authorization-001.json` | stub | The independent scheme authorization. |
| `policy.json` | stub | Require the GS cert's authorizing edge; require derivation = scopeSubset. |
| `trust-registry.json` | stub | Entries for the accreditation body, scheme authority, and GS body. |
| `expected-trace.json` | stub | Expect `verified: true` with `DERIVATION_VALID` (the per-edge subset check) present, and the independent scheme edge accepted without a subset check. |

## TODO(human) — to finish this vector

1. Replace every `TODO(human)` placeholder value (scheme name, product category,
   scope dimensions, issuer DIDs) with coherent values. The **edge structure** must
   stay exactly as above; only the domain specifics are placeholders.
2. Give the accreditation a concrete `scope` and make the issuing-scope VC's scope a
   genuine **subset** of it (so the `derivedFrom` derivation check passes). Use the
   `scope` / `range` / `allowedMethods` vocabulary from `contexts/v1/qi-core.jsonld`
   and the existing `calibration-capability` vector as a model for subset scopes.
3. Recompute every `digestSRI` (placeholders below are NOT real). Each edge's
   `digestSRI` must bind the referenced evidence credential. Use the repo's digest
   helper / generator approach — **do not** leave the `sha384-TODO...` placeholders.
   If a generator is added for this vector, prefer that over hand-editing.
4. Set `expected-trace.json` to the real codes the verifier emits (run the verifier
   to see them), confirming `DERIVATION_VALID` for the accreditation edge and that
   the scheme edge is accepted independently (no `DERIVATION_*` on it).
5. Un-skip the verifier test: `gs-profile-d` in
   `packages/core-ts/tests/verifier.test.ts` and the Python equivalent
   `packages/core-py/tests/test_verifier.py` (or the shared-fixtures list). Keep
   TS↔Python parity.
6. Optionally add a **failing** variant (`failing-target-credential.json`) where the
   issuing-scope scope *exceeds* the accreditation, expecting `DERIVATION_VIOLATION`
   — mirrors the `calibration-capability` failing case.

When done, all suites + `pnpm validate:schemas` must be green, and this README's
status line updated to "complete".
