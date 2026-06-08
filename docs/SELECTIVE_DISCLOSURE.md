# Selective disclosure (G2)

This document describes how VC4QI implements **G2 — selective disclosure** (see
`docs/MODEL_SPEC.md` §1, §4.2): a holder presents a verifier-specific subset of a
credential while the issuer's cryptographic guarantee still holds over exactly
that subset.

## Mechanism

Selective disclosure is provided by the **`ecdsa-sd-2023`** Data Integrity
cryptosuite, added **alongside** the existing `eddsa-rdfc-2022` proof path — it
does not replace it. The two paths coexist:

| Path | Cryptosuite | Key | Use |
|---|---|---|---|
| Base / full | `eddsa-rdfc-2022` (hand-rolled, `proofs/index.ts`) | Ed25519 `#key-1` | Whole-credential integrity. |
| Selective disclosure | `ecdsa-sd-2023` (`proofs/sd.ts`, via Digital Bazaar) | ECDSA P-256 `#key-2` | Disclose a subset; verify over the subset. |

The SD path is the only place in the project that uses an external VC library
(the three Digital Bazaar SD packages + `jsonld-signatures`, their required
driver). Everything else remains hand-rolled on low-level primitives.

## Three operations (`proofs/sd.ts`)

1. **`issueSd`** — the issuer signs the full credential, committing to all fields
   and to a set of **mandatory pointers** (fields that must appear in any later
   disclosure). Produces an `ecdsa-sd-2023` *base* proof.
2. **`deriveSd`** — the holder produces a disclosed subset: the mandatory fields
   plus any chosen **selective pointers**. Unkeyed; no issuer secret needed.
3. **`verifySd`** — a verifier checks the derived credential over its disclosed
   subset. Tampering with any disclosed value fails verification.

The verifier (`verifier/index.ts`) dispatches on `proof.cryptosuite`:
`ecdsa-sd-2023` → `verifySd`; everything else → the existing Ed25519 path.

## What is disclosed (D-SD-1)

For the reference-material certificate (real values from BAM-M375a, see
`examples/rm/source/`):

- **Mandatory (always disclosed):** issuer, validity, `credentialSchema`, subject
  id, `administrativeData` (coreData/validity), producer **id + name**,
  `materials`, and `materialPropertiesList` — i.e. each certified result's
  property, value, unit, expanded uncertainty, and `scopeRef` — plus the
  `evidence[]` edges. These are exactly what the verifier needs to run the kernel
  (scope inclusion, derivation, policy).
- **Selectively disclosable (withheld by default):** producer contact `location`
  and `respPersons` (the certifying committee). A holder reveals personnel only by
  adding `/credentialSubject/respPersons` to the selective pointers.

Fixtures:

- `examples/rm/reference-material-certificate.sd.json` — base SD credential.
- `examples/rm/reference-material-certificate.sd-derived.json` — disclosed subset
  (personnel withheld).
- `examples/rm/rm-producer-key.jsonld`, `rm-producer-controller.jsonld` — the
  issuer's P-256 verification method and controller document.

Regenerate with `pnpm -C packages/core-ts exec tsx scripts/gen-sd-fixtures.ts`.

## Disclosure obligations (B4 / D-SD-5)

Holder selective disclosure operates **beneath any lawful right to the full
record**. It governs *proportionate presentation to ordinary verifiers* — a
testing lab needs only the certified value and its expanded uncertainty, not the
producer's personnel — but it **never overrides** a regulator's or accreditation
body's lawful entitlement to the complete certificate. SD is a privacy- and
data-minimization tool, not a mechanism to evade a statutory or contractual
full-disclosure obligation. This boundary (B4) is institutional, not technical;
the code does not and cannot enforce it.

## Python parity (D-SD-4)

Python does **not** implement or cryptographically verify `ecdsa-sd-2023` (there
is no Python SD library, and adding a VC framework would violate the dependency
policy). Python instead consumes the TypeScript-derived disclosed subset and runs
the research kernel (evidence graph, edge classification, policy) over it,
confirming the disclosed subset is processed identically in both languages. See
`packages/core-py/tests/test_sd_parity.py`.

## Why ECDSA-SD and not BBS (D-SD-2)

`ecdsa-sd-2023` is a finished W3C Recommendation; the BBS cryptosuite is still
Candidate Recommendation. The only thing BBS adds over ECDSA-SD is *unlinkability*
of repeated presentations, which is not a requirement here — QI holders are
institutions, and linkable presentation of the same accreditation/RM certificate
is acceptable (often desirable for audit). ECDSA-SD runs on P-256, which aligns
with HSM and eIDAS qualified-seal compatibility (`MODEL_SPEC.md` §8.5); BLS12-381
does not. BBS remains a future option if an individual-level or anti-correlation
use case ever appears; `proofs/sd.ts` isolates the cryptosuite to a single swap
point.
