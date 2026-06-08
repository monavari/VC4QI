# ADR-009 — Selective disclosure via `ecdsa-sd-2023`

Status: Accepted (Phase 6, v0.3.x)

## Context

G2 (selective disclosure) requires a holder to present a verifier-specific subset
of a credential while the issuer's cryptographic guarantee still holds over that
subset. The existing proof layer implements only `eddsa-rdfc-2022`, which has no
selective disclosure. See `docs/MODEL_SPEC.md` §1, §4.2 and
`RECONCILIATION_TASK.md` §10.

## Decision

Add an `ecdsa-sd-2023` Data Integrity path **alongside** the hand-rolled
`eddsa-rdfc-2022` path, implemented in `packages/core-ts/src/proofs/sd.ts` using
the Digital Bazaar SD packages (`@digitalbazaar/ecdsa-sd-2023-cryptosuite`,
`@digitalbazaar/data-integrity`, `@digitalbazaar/ecdsa-multikey`) driven by
`jsonld-signatures`. The verifier dispatches on `proof.cryptosuite`.

Per-decision rationale (D-SD-1..D-SD-5) is recorded in
`RECONCILIATION_REPORT.md` (Part B). Summary:

- **D-SD-1** — mandatory: certified property/value/unit/uncertainty/scopeRef,
  producer id+name, materials, evidence edges; selectively disclosable: producer
  contact and personnel (`respPersons`).
- **D-SD-2** — `ecdsa-sd-2023`, not BBS: Recommendation-track, no unlinkability
  requirement for institutional holders, P-256 aligns with HSM/eIDAS seal.
- **D-SD-3** — a P-256 multikey `#key-2` alongside the Ed25519 `#key-1`; the
  Ed25519/`eddsa-rdfc-2022` path is untouched.
- **D-SD-4** — Python verifies the derived subset at the kernel level only; no
  Python SD crypto (no library; would breach the dependency policy).
- **D-SD-5** — disclosure operates beneath any lawful full-record access (B4);
  docs-only.

## Consequences

- The only new runtime dependencies are the three Digital Bazaar SD packages plus
  `jsonld-signatures` (their required driver), all TS-side and SD-only.
- SD canonicalizes in JSON-LD safe mode, which exposed protected-term shadowing in
  the contexts; `qi-rm.jsonld` was aligned with W3C VC 2.0 (see
  `docs/PAPER_FEEDBACK.md` F-1..F-3).
- BBS remains a future option; `proofs/sd.ts` isolates the cryptosuite to one swap
  point.
