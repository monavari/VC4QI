# Python parity

TypeScript is canonical. Python mirrors supported semantics using shared JSON fixtures.
The existing runtime compares legacy trace codes; the target also compares evidence states,
complete routes, selected records and normalized arithmetic witnesses. Formatting and trace
order can be canonicalized for comparison; incompatible outcomes cannot be hidden by formatting.

Port each semantic feature with its vectors as it lands. Re-sign modified fictional artifacts
when testing semantic failures; preserve invalid proofs for intentional protection controls.
Two implementations agreeing on one fixture are not independent cryptographic conformance.

Python does not perform ECDSA-SD crypto. It evaluates a TS-derived disclosed subset at the
semantic level only, with that assurance boundary explicit. See [SD](SELECTIVE_DISCLOSURE.md).
The LIMS and verifier-service directories are scaffolds, not additional passing packages.

After [environment setup](../CONTRIBUTING.md):

```bash
pnpm -C packages/core-ts test
.venv/bin/python -m pytest packages/core-py/tests
```

The 21 September 2026 baseline recorded 187 TS passed and 157 Python passed/1 skipped.
Those are legacy results, not execution of the [new acceptance matrix](plans/standards-first-acceptance.csv).
Root uv/Make workspace targets require repair; do not silently replace missing pytest with
an assumption that Python checks passed.
