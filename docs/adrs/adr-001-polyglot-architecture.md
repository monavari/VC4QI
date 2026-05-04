# ADR-001 Polyglot Architecture (TypeScript + Python)

## Status

Accepted

## Context

Quality infrastructure stakeholders span two technology stacks:

- **Wallet / browser / verifier tooling** — built on JavaScript/TypeScript,
  aligned with W3C and Digital Bazaar reference implementations.
- **Laboratory Information Management Systems (LIMS)** — predominantly Python.

A TypeScript-only implementation would be unusable by CABs that run Python LIMS
without requiring a language bridge. A Python-only implementation would not
align with the dominant VC tooling ecosystem.

## Decision

Maintain two functionally equivalent core libraries:

- `packages/core-ts/` — TypeScript 5.x, ESM, published as `@qi-vc/core`.
- `packages/core-py/` — Python 3.12, published as `qi-vc-core` on PyPI.

Both implement the same six modules: `canonicalize`, `proofs`, `status`,
`trust_registry`, `issuer`, `verifier`. Cross-language interoperability is
verified by a dedicated test in `tests/integration/` that issues credentials
in one language and verifies them in the other.

## Consequences

- Maintenance burden is doubled for core logic changes.
- Cross-language interop tests catch divergence early.
- LIMS integrators can adopt `qi-vc-core` (Python) without any JS toolchain.
- Browser/wallet integrators use `@qi-vc/core` (TypeScript).
