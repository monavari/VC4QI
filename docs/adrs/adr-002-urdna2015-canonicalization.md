# ADR-002 URDNA2015 for Canonicalization

## Status

Accepted

## Context

Hash binding between credential layers requires a canonical byte representation
of a JSON-LD document so that SHA-256 digests are deterministic regardless of
key ordering or whitespace. The prior art (mehranmo/VC-calibration-chain v0.1)
used a simple JSON key-sort canonicalization and flagged URDNA2015 as a TODO.

Bespoke canonicalization is not suitable for an implementation that aims to
interoperate with the broader W3C Data Integrity ecosystem.

## Decision

Use **URDNA2015** (RDF Dataset Normalization 1.0,
<https://www.w3.org/TR/rdf-canon/>) via `jsonld.js` / `pyld` as the sole
canonicalization algorithm. This is the algorithm required by the
`eddsa-rdfc-2022` and `ecdsa-rdfc-2019` cryptosuites.

## Consequences

- Canonicalization output is compatible with any conformant Data Integrity
  implementation, enabling external verification without custom tooling.
- Requires JSON-LD context resolution at canonicalization time; contexts must
  be pinned and locally cacheable to avoid network dependency in tests.
- W3C URDNA2015 test vectors in `tests/conformance/` verify correctness.
