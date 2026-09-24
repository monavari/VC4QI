# Tutorial 02 — inspect RM evidence and the target witness

**The existing executable example is legacy.** Inspect
`testdata/examples/reference-material-recursive`: the RM target references operational
scope and a supporting study, which retains its own authority. The placeholder proof in
the legacy graph does not establish a cryptographic end-to-end RM pass. Separate SD
fixtures demonstrate subset cryptography, not the entire new reliance request.

After [setup](../../CONTRIBUTING.md):

```bash
pnpm -C packages/core-ts test
.venv/bin/python -m pytest packages/core-py/tests
```

The I4 walkthrough will execute a signed A/O/D/S/H bundle. For scope [50,500], M1,
U=5, k=2 and requested `x+U<=200`, inspect these distinct outcomes:

| x | Scope | Decision | Result |
| --- | --- | --- | --- |
| 178 | established | 183≤200 | accept |
| 197 | established | 202>200 | reject conformity |
| 520 | contradicted | not run | reject scope |

These are target acceptance cases, not results produced by the commands above. Trace
selected records/routes and same-batch support, including the laboratory's independent
authority. An authorization-only request does not run conformity. See
[MODEL_SPEC](../MODEL_SPEC.md), [binding design](../BINDING_MANIFEST.md) and
[SD](../SELECTIVE_DISCLOSURE.md). Do not edit a signed value without reissuance unless
intentionally testing protection failure.
