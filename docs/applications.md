# Applications around the core

Three application features sit next to the reliance evaluator: verifier assessments,
presentation queries and selective disclosure. Each establishes only its own predicate;
none can override a failed required gate. See the [model](model.md).

## Verifier assessments

The legacy runtime lets a policy require an **assessment** for certain credential
types, with allowed methods `agent`, `human` or `hybrid`. An application callback
receives the credential (and, during graph verification, the target and resolved graph)
and returns `pass`, `fail` or `indeterminate`, with the assessor and an explanation. A
required missing or indeterminate assessment fails closed; an optional indeterminate
one is a warning. These are legacy callback labels, not the three semantic states.

In the new model, missing or unsupported required evidence is `not_established` and a
supported negative predicate is `contradicted`. A callback never overrides protection,
binding, scope or another required obligation. Human workflow stays outside the core,
and there is no generic confidence score.

Schemas can express numeric bounds, enumerations and logical combinations, but
cross-artifact meaning, authority and decisions may need another accepted evaluator.

### GS application variants

Two fictional GS hair-dryer variants use report and manufacturer-inspection
assessments, a type-level GS certificate and a serialized-product credential issued by
the manufacturer:

- **in-house** (`gs-hair-dryer-hitl`): the GS body tests and inspects itself;
- **external laboratory** (`gs-hair-dryer-external-test-lab-hitl`): the laboratory
  issues its report under its own accreditation-bounded scope. The GS body is the
  customer, not the source of the laboratory's competence, and keeps certification and
  inspection under its own accreditation and scheme authorization.

Both are kept as signed legacy fixtures and verified under the explicit legacy profile.
Their assessments are not migrated to a standards-first binding, and they show no GS
legal or technical-rule conformance.

### Authority-issued answers (planned, I6)

An application callback is not authenticated institutional evidence. The planned
authority-answer binding will verify the answer's protection, establish the signer's
right to answer independently, and bind the exact predicate, claim, grantee, activity,
scope version, profile, parameters and time. A holder-chosen endpoint cannot authorize
itself, and a point answer cannot prove that one scope is contained in another.

## Presentation queries

`policyToDcql`, `policyToPresentationDefinition` and `validatePresentationSubmission`
build requests from legacy policy paths and check submissions with a limited local
field matcher. They are request helpers, not wallet or protocol conformance.

A matching submission still needs protection, actor binding, time, complete routes,
restrictions, scope and applicable support; conformity is requested separately.
Evidence can be supplied as a flat bundle rather than duplicating the transitive graph
in every credential, and unrelated bundled credentials confer nothing. A
service-signed conclusion means relying on that service. Interactive presentations need
their own holder, challenge, audience and replay checks. Query paths derived from the
new bindings are planned for I7.

## Selective disclosure

TypeScript implements `issueSd`, `deriveSd` and `verifySd` (`proofs/sd.ts`) with
`ecdsa-sd-2023` on P-256, alongside the Ed25519 path. The signed DCC and RM examples
under `examples/calibration/` and `examples/rm/` exercise subset verification; they
still use legacy bindings. Regenerate them with:

```bash
pnpm -C packages/core-ts exec tsx scripts/gen-sd-fixtures.ts
pnpm -C packages/core-ts exec tsx scripts/gen-sd-dcc-fixtures.ts
```

The RM values come from an abridged transcription of the BAM-M375a document; see
[its source note](../examples/rm/source/README.md). Fictional fixture proofs are not
issuance or endorsement by BAM or any other institution.

Python does not issue, derive or verify SD proofs. It evaluates TS-derived subsets
semantically, and says so.

A disclosed subset must keep every fact the request needs: the selected values and
their meaning, issuer, subject, activity and time, restrictions, the authorizing policy,
support references and integrity data. A derived proof that hides a required fact
cannot establish reliance, even when it is cryptographically valid. SD-derived objects
are not the byte-pinned original, so an integrity pin on a dependency must either
support the derived form or require the original. Selective disclosure minimizes a
presentation; it does not decide lawful access, and P-256 alone implies no eIDAS or
unlinkability claim. BBS remains a future option.
