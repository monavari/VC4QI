# Use cases

VC4QI's examples cover six base QI situations plus two GS application variants. Every
base use case now runs on signed fixtures in a standards-first binding; the legacy
copies in `testdata/examples/` remain for the legacy profile and the demo. All parties,
keys and grants are fictional.

| Use case | Demo | What it shows | Binding and profile | Tests (TS / Python) |
| --- | --- | --- | --- | --- |
| reference-material-recursive | E | An RM certificate under an operational scope within an accreditation, supported by an independently authorized homogeneity study | RM v1, `rm-verifier-1` (two-route variant `rm-verifier-two-routes-1`) | `rm-v1-*.test.ts` / `test_rm_v1_*.py` |
| calibration-direct-accreditation | A | A calibration certificate (DCC) under the laboratory's accreditation; each measurement group is a claim | Calibration v1, `cal-verifier-1` | `cal-v1.test.ts` / `test_cal_v1.py` |
| calibration-capability | B | The laboratory's own bounded capability scope within its accreditation, with no widening | Calibration v1, `cal-verifier-capability-1` | same |
| nmi-legal-mandate | C | A national metrology institute authorized by a statutory mandate, with no accreditation root | Calibration v1, `cal-verifier-nmi-1` | same |
| test-report-supported-dcc | F | A test report supported by its instrument's own authorized calibration | Calibration v1, `cal-verifier-test-report-1` | same |
| gs-scheme-authorization | GS | A GS mark needing competence AND scheme permission, and a type examination and factory inspection | GS v1, `gs-verifier-1`, `gs-verifier-dpp-1` | `gs-v1.test.ts` / `test_gs_v1.py` |
| gs-product-passport (experimental) | DPP | A unit's passport bound to its GS certificate: same manufacturer, same model, placed on the market while the certificate was in force; not EU DPP (ESPR) conformance | GS v1, `gs-verifier-dpp-1` | same |
| gs-hair-dryer-hitl | D | GS certificate, serialized product, in-house reports and assessments | Legacy profile only | `legacy-profile.test.ts` / `test_legacy_profile.py` |
| gs-hair-dryer-external-test-lab-hitl | D | As above, with an independently accredited external laboratory | Legacy profile only | same |

Demo letters are UI labels, not governed profile identifiers.

## Run them

After [setup](../CONTRIBUTING.md#development-setup):

```bash
pnpm -C packages/core-ts exec vitest run tests/rm-v1-claims.test.ts tests/cal-v1.test.ts tests/gs-v1.test.ts
.venv/bin/python -m pytest packages/core-py/tests/test_rm_v1_claims.py packages/core-py/tests/test_cal_v1.py packages/core-py/tests/test_gs_v1.py
```

Negative cases are built by re-signing edited copies of the fixtures with the fixture
keys, so each is decided on its meaning, not a broken signature; protection tests break
signatures on purpose.

## Walkthrough: the reference-material witness

The RM binding carries the complete witness from the [model](model.md#6-scope-quantities-and-conformity):
accreditation A ([50, 500] mg/kg, M1 and M2), operational scope O (M1 only), certificate
D (CuZn39Pb3 brass, arsenic, U = 5 mg/kg, k = 2), study S and laboratory authority H.
The verifier asks for `x + U <= 200 mg/kg` (`guarded-acceptance-expanded-u`).

| Signed certificate | Scope | Conformity | Decision |
| --- | --- | --- | --- |
| `D178.json` | established | 183 ≤ 200 | accept |
| `D197.json` | established | 202 > 200 | reject (authorization established) |
| `D520.json` | contradicted | not run | reject |

The [demonstrator](https://monavari.github.io/VC4QI/demo/#rm) runs exactly these cases
in the browser with the same evaluator, and adds a tamper test and a withheld study. Its
DCC, GS and DPP tabs do the same for the calibration and GS bindings.

For the accepted case the claim witnesses are the route `operational-scope`, D, O, A
and the record `O#scope-as-m1`; support names D, S and H. An authorization-only request
for 197 does not run conformity and is accepted. Other controls cover the 195 boundary
(exactly 200 passes), a missing or wrong-batch study, M2 without a succession rule, a
suspended accreditation and historical questions, which are refused. The same scenarios
are checked byte-for-byte across languages by the parity vector.

## Walkthrough: the calibration and GS use cases

- **Direct accreditation.** DCC-1 has two pressure groups (1000 kPa and 5 MPa). Each is
  covered by CAL-A's record (0–10 MPa, PressureComparison, CMC 0.5 kPa). A value of
  15 MPa in the first group rejects even though the second passes. An uncertainty below
  the CMC rejects when the profile applies the floor.
- **Capability.** DCC-2 is issued under the laboratory's own scope CAL-O (0–2 MPa). CAL-O
  must lie within CAL-A. A group at 5 MPa is inside CAL-A but outside CAL-O, and is
  rejected: the parent never rescues the child.
- **Legal mandate.** DCC-N is authorized by a ministry's mandate CAL-M. The witnesses
  contain no accreditation, and the ministry must be configured for designating
  metrology institutes.
- **Test report.** REPORT-1 is authorized by the testing accreditation CAL-T and
  requires DCC-1 as its instrument's calibration. DCC-1 must be for the same
  instrument, earlier than the test, valid at it and itself authorized for every group.
- **GS mark.** As in the legacy GS examples, the mark on a hair dryer (DPP-1) rests on
  the certificate GSC-1. GSC-1 needs GS-A (the GS body's competence against EN 60335-1
  and -2-23) and GS-S (the ZLS-role permission to award the mark for household
  appliances); either alone is `not_established`. GSC-1 also needs its studies: a type
  examination TR-1 and a factory inspection FI-1, each under an accreditation permitting
  the activity. GSC-3 uses an external laboratory's examination (TR-2 under TL-A). A toy
  certificate (GSC-2) is rejected because GS-S does not cover toys.

## Legacy scenarios

`pnpm test:scenarios` runs two legacy scenario tests with graph proofs skipped: that is
simulation, not verified reliance. Use the [legacy profile](api.md#legacy-profile) to
verify legacy graphs with their real proofs; the two GS variants pass under it.
