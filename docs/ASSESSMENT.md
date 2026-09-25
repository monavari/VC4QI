# Verifier assessment and authority-issued answers

## Existing assessment callback

The legacy runtime has a policy-selected `assessment` block for credential types and
allowed methods (`agent`, `human`, `hybrid`). An application callback receives the
credential and, through graph verification, the target and resolved graph. It returns
`pass`, `fail` or `indeterminate`, assessor provenance and an explanation. These are
current callback labels, not the new semantic state contract.

A required missing/indeterminate callback fails closed in the existing implementation;
optional indeterminate results can be warnings. The new evaluator instead gives required
missing/unsupported evidence the applicable `not_established` state. A supported negative
predicate is contradicted. A callback cannot override a failed protection, binding, scope
or other required obligation. Human workflow remains outside the core; no generic confidence
score or arbitrary issuer-provided executable evaluator is accepted.

Schemas can express numerical bounds, enumerations and logical combinations. A particular
schema may leave cross-artifact meaning, authority or decision predicates to another accepted
evaluator; schema use alone neither proves nor precludes those predicates.

## GS application behavior to preserve

Both fictional GS hair-dryer variants use report and manufacturer-inspection assessments,
a type-level GS certificate and a manufacturer-issued serialized-product credential. The
external-laboratory variant preserves two independent scopes: the laboratory issues its
own scope bounded by its accreditation, and its report uses that authority. The GS body
is the report's customer, not the source of laboratory competence. It retains certification
and inspection responsibility under its separate accreditation and scheme authorization.

The current fixtures use test-only keys, legacy edge fields and application-specific
assessments. Their proof-enabled tests demonstrate that path, not GS legal/technical-rule
conformance or real institutional endorsement. Do not turn the QR/product extension into
a universal framework requirement.

## Target authority-issued predicate adapter

An application callback is not automatically authenticated institutional evidence. I6 adds
a separate experimental authority-answer binding: verify answer protection, establish the
signer's right to answer independently, and bind the exact predicate, claim/digest, grantee,
activity, scope identity/version, profile/rule, parameters and relevant time/freshness.
A holder-selected endpoint cannot authorize itself. An accepted supplied answer can avoid
network retrieval; an unavailable authority without admissible evidence leaves the predicate
not established. Wrong-claim/batch/time answers cannot discharge the requested predicate.

Point coverage does not prove full O⊆A. The witness records which authority's assertion is
relied upon; a signature is not a general proof of semantic truth. Support and the answer's
own authority dependencies need well-founded justification. See [MODEL_SPEC](MODEL_SPEC.md)
and E05–E09 in the [acceptance ledger](plans/standards-first-acceptance.csv).
