# Python Parity

TypeScript is the canonical VC4QI implementation. Python mirrors the public
behavior using the same JSON fixtures in `testdata/`.

Parity is based on trace codes rather than byte-identical trace text.

```bash
pnpm --filter @qi-vc/core test
pytest packages/core-py/tests
```
