# Architecture

VC4QI v0.2 verifies Quality Infrastructure credentials as a policy-resolved
evidence graph.

The verifier validates the target credential, normalizes every
`CredentialEvidenceReference`, resolves referenced evidence, verifies
`digestMultibase` or `digestSRI` when policy requires it, evaluates edge
semantics, checks policy sufficiency, and returns a structured trace.

Presentation Exchange and DCQL can request credentials or fields. They do not
replace QI verification, because the QI verifier still evaluates scope inclusion,
derivation, recursive evidence, trust-registry authority, status, and policy
sufficiency.

When schema validation cannot decide domain semantics, policy may require a
human, agent, or hybrid assessment callback for selected credential types. That
assessment is an additional conjunct of the verifier policy: it cannot override
any failing deterministic gate and it does not introduce another evidence
relation. See [Human/agent assessment](ASSESSMENT.md).

The demo runs the verifier to completion and then replays its immutable trace
for presentation. Replay frames follow graph depth from the scanned target
outward to authority roots, revealing node checks and outgoing edges every 420
ms. This artificial delay is UI-only and does not alter verifier execution or
the final trace.
