# GS hair-dryer scenarios

These generated examples currently use the **legacy** binding:

- `hair-dryer-gs-product-mark.json`: GS body with in-house testing.
- `hair-dryer-gs-product-mark-external-test-lab.json`: separate laboratory commissioned by the GS body.

The laboratory's independent accreditation/scope establishes its competence; being
commissioned by the GS body does not. The GS body retains certification and inspection
under its own accreditation/scheme scope. Complete graphs and policy/assessments live
under `testdata/examples/`; the older `gs-scheme-authorization` example is also retained.
Fictional test keys and actors do not establish legal GS compliance or endorsement.

Both variants are kept as signed legacy fixtures and verify under the explicit legacy
profile; their assessments are not migrated. The gs-scheme-authorization case is
migrated to the [GS v1 binding](../../bindings/experimental/gs-v1/README.md).
See [assessment](../../docs/applications.md#verifier-assessments) and [scenario catalogue](../../docs/use-cases.md).
Regenerate signed artifacts through generators; never retain a proof after changing JSON.
