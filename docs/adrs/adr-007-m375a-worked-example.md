# ADR-007 M375a Worked Example as Canonical DRMD Reference

## Status

Accepted

## Context

The paper (§7 and Appendix B) uses BAM Certified Reference Material M375a
(CuZn39Pb3 brass alloy disc) as the running DRMD worked example. The repo needs
a concrete, self-consistent credential chain for that material to:

1. Make Listing 4 (scope-inclusion algorithm) executable against a real fixture.
2. Give readers a downloadable, syntactically correct DRMD to inspect alongside
   the paper.
3. Serve as the positive control for the T12 scenario test (Appendix C).

Two variants are needed (paper §5.3):

- **Variant A** — single BAM accreditation, all certified elements characterized
  by BAM directly.
- **Variant B** — multi-lab characterization; three fictional ISO/IEC 17025
  labs (lab-A, lab-B, lab-C) each contribute a subset of elements, linked via
  `CredentialEvidenceReference` evidence entries with `characterisationOf`
  arrays.

## Decision

We include both variants as example files:

| File | Variant |
|------|---------|
| `examples/rm/reference-material-certificate.json` | Variant A |
| `examples/rm/reference-material-certificate-multi-lab.jsonld` | Variant B |

The matching capability and accreditation credentials are at
`examples/capability/drmd-bam.jsonld` and
`examples/accreditation/iso17034-bam.jsonld` respectively.

**Key data choices:**

- BAM accreditation reference: `D-RM-11075-01-00` (real NAB number).
- Certified elements match the actual M375a certificate (Cu 57.68 %, Zn 38.2 %,
  Pb 3.07 % and trace elements).
- Silicon (Si) is included as an informative-only result (`isCertified: false`)
  because inter-laboratory spread was too high — the scope algorithm correctly
  skips it.
- Proof values are placeholder strings (`zDUMMY_…` / `zMULTI_LAB_…`) because
  the example is for documentation and schema validation; cryptographic signing
  requires a live key.
- The `characterisationOf` field in Variant B evidence is an array of element
  symbols (e.g. `["Cu","Zn","Pb"]`) linking each ISO/IEC 17025 accreditation to
  the elements it underpins.

## Consequences

- T12 scenario test uses `makeDrmd()` fixture (Variant A chain) and must pass
  all six rules with `skipRules: [4]` (status check skipped for static examples).
- The scope algorithm (`checkDrmdScopeInclusion`) skips matrix filtering when
  the DRMD material object carries no explicit `matrix` category field — the
  alloy product name (`CuZn39Pb3`) is not a scope category.
- Variant B multi-lab verification (paper §7.3 / F7) is described in the paper
  but the `characterisationOf`-aware verifier path is not yet implemented in the
  reference code; this is noted as a known limitation in paper §9.
