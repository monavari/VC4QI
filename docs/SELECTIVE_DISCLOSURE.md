# Selective disclosure

## Existing implementation and assurance

TypeScript implements `issueSd`, `deriveSd` and `verifySd` in `proofs/sd.ts` using
`ecdsa-sd-2023`, P-256 and the existing Digital Bazaar integration. This coexists with
the legacy Ed25519 proof path. Existing signed DCC/RM SD fixtures exercise cryptographic
subset verification. They still use legacy credential/policy bindings; a valid derived
proof alone does not establish the new reliance model.

Python consumes TS-derived subsets for semantic tests. It does **not** issue, derive
or cryptographically verify ECDSA-SD. Its `proofs/sd.py` scaffold is intentional. This
is an implementation boundary, not a claim about all available Python libraries.

Existing generation commands (they write signed legacy fixtures):

```bash
pnpm -C packages/core-ts exec tsx scripts/gen-sd-fixtures.ts
pnpm -C packages/core-ts exec tsx scripts/gen-sd-dcc-fixtures.ts
```

RM base/derived examples and producer key/controller documents are under `examples/rm/`;
DCC counterparts are under `examples/calibration/`. Source provenance is documented in
[the RM source note](../examples/rm/source/README.md). Fictional fixture proofs do not
establish the real source institution's issuance or endorsement.

## Target disclosure sufficiency

The [binding/profile](BINDING_MANIFEST.md) and verifier request determine which facts are
required: selected claims and meaning, issuer/subject/activity/time, applicable restrictions,
authorization policy, support references and necessary integrity/security information.
There is no universal mandatory custom `scopeRef` or legacy edge array. Preserve native
claim links if the accepted domain binding defines them.

A derived representation hiding required evidence cannot establish reliance, even when
its cryptographic proof is valid. The verifier may use permitted bounded retrieval or
supplied closure where the profile allows it. It must not infer a hidden restriction's
absence. E10 tests insufficiency; E11 tests legitimate suite-derived identities without
naïve same-ID/different-bytes conflict handling.

Keep safe JSON-LD expansion and protected terms. Recheck mandatory pointers when migrating
fixtures; do not reuse old signatures after editing JSON. Python parity compares supported
semantic states and witnesses, and explicitly identifies externally supplied crypto assurance.
Interactive VP holder/challenge/audience/replay requirements are separate from VC proof suites.

Selective disclosure governs presentation minimization; it does not determine lawful access
to full records. No legal/eIDAS seal conformance or unlinkability claim follows merely from
P-256 use. BBS remains a future option, not this migration's selected suite.
