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
I0 repaired uv/Make setup. On 24 September the suites pass 226 TS tests and 196 Python
tests, with one existing Python skip. This includes 38 shared unsigned scope vectors and
non-finite-bound checks in each language. See [I0 evidence](plans/standards-first-i0-evidence.md).
Python's old label-based `check_derivation` helper is deprecated and outside this safety
coverage; the graph uses `check_derived_edge`. Existing Python lint debt remains visible.

The first I1 contract slice adds matching immutable request/result types, complete
three-state truth tables, incomplete-manifest refusal and exact-byte catalog behavior.
The focused suites pass 29 TypeScript and 14 Python tests. The complete suites pass
263 TypeScript tests and 218 Python tests with one existing Python skip. Python-wide
mypy remains at its 198-error baseline in 24 legacy files; the new reliance package
and tests add no errors. The signed protection and fact-extraction slice remains pending.
