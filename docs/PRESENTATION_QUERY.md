# Presentation queries and sufficiency

The existing `policyToDcql`, `policyToPresentationDefinition` and
`validatePresentationSubmission` helpers use legacy profile paths and a limited local
submission-field evaluator. They are implemented request helpers, not proof of complete
wallet/protocol conformance or of the revised reliance calculus.

During migration, derive requests from accepted binding paths, required claims and evidence
closure. Preserve direct native references rather than duplicating a transitive graph inside
every credential. Closure can be supplied in a flat bundle or obtained through permitted,
bounded and possibly private resolution. Unrelated bundled credentials confer no rights.

A matching submission still needs protection, actor binding, time, complete authorization
routes, restrictions, scope and independently justified applicable support. Conformity is
optional and separately requested. Disclosure that omits a required fact yields insufficient
reliance. A service-signed conclusion is reliance on that service, not necessarily independent
verification of all underlying evidence.

Interactive presentation adapters need their specified holder/challenge/audience/replay
checks or an explicit unsupported result. Generic VC proof validation does not provide those
checks. See [MODEL_SPEC](MODEL_SPEC.md), [API migration](API_MIGRATION.md) and
[selective disclosure](SELECTIVE_DISCLOSURE.md). New query paths arrive in I5/I7.
