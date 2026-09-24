# Reference material certificate schema

**Existing v1 schemas and signed examples use the legacy wire model.** The target
retains the richer materials/property/result structure instead of flattening the subject.
Recognized authorization policy, supporting study references and selected standard
resource-integrity metadata replace universal custom edge requirements. No mandatory
custom per-claim `scopeRef` is required; the evaluator reports a record/path witness.

The fictional RM profile includes A/O/D/S/H, complete records, governed matrix/property/
method, exact mass-fraction quantities and required independently authorized same-batch
support. Numerical scope and optional conformity are separate; no accreditation uncertainty
ceiling is invented. Unsupported required fields cannot disappear through filtering or
unsafe JSON-LD expansion.

See [binding draft](../BINDING_MANIFEST.md) for candidate paths/IRIs and cardinalities,
[MODEL_SPEC](../MODEL_SPEC.md) for semantics and [migration](../API_MIGRATION.md) for
compatibility. New schemas and reissued fixtures are pending I1/I5.
