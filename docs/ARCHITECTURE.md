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
