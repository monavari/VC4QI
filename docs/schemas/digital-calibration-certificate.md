# Digital calibration certificate schema

**Current `schemas/v1/` artifacts are legacy.** They accept
`CredentialEvidenceReference` entries and policy-selected authority forms. Schema
validation is not complete authorization, support, protection or conformity evaluation.

The target retains native DCC/D-SI structure where applicable, with exact selected
bindings, context/schema versions and decision-preserving mappings. New-profile authority
comes from accepted native policies/grants; support uses recognized supporting evidence.
No universal three-relation or six-basis enum is required. Method-restricted claims need
governed method identifiers; missing methods do not bypass a constraint. Calibration
capability floors and optional customer limits are separate from conformity rules.

See [binding design](../BINDING_MANIFEST.md), [model](../MODEL_SPEC.md) and
[API migration](../API_MIGRATION.md). New executable schemas are I1/I5 outputs, not part
of this documentation pass. The existing validator skips some examples without `$schema`;
a successful command is not full fixture coverage.
