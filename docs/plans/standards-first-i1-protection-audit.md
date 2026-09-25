# I1 protection audit and first prerequisite

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

## Completed prerequisite: preserve supported received proof options

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

## I1 implementation sequence

1. **Contract complete:** create one versioned experimental RM manifest covering all twelve
   [manifest categories](../BINDING_MANIFEST.md), exact native paths/IRIs, supported
   combinations, cardinalities, installed evaluators and exclusions. The manifest is
   deliberately non-installable; pin resource bytes and hashes with the signed slice.
2. **Complete:** add verifier-owned request and result contracts in both languages. Include selected
   claims, purpose, accepted profile/version, trust, evaluation/activity times and
   budgets. Keep artifact identity distinct from contextual node-use identity.
   The incomplete manifest, isolated catalog and contract evidence are recorded in
   [the I1 contract slice](standards-first-i1-contract-evidence.md).
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
