# Use cases

VC4QI's examples cover six base QI situations and an experimental product passport,
each on signed fixtures in an experimental binding. All parties, keys and grants are
fictional.

| Use case | Label | What it shows | Binding and profile | Tests (TS / Python) |
| --- | --- | --- | --- | --- |
| reference-material-recursive | E | An RM certificate under an operational scope within an accreditation, supported by an independently authorized homogeneity study | RM v1, `rm-verifier-1` (two-route variant `rm-verifier-two-routes-1`) | `rm-v1-*.test.ts` / `test_rm_v1_*.py` |
| calibration-direct-accreditation | A | A calibration certificate (DCC) under the laboratory's accreditation; each measurement group is a claim | Calibration v1, `cal-verifier-1` | `cal-v1.test.ts` / `test_cal_v1.py` |
| calibration-capability | B | The laboratory's own bounded capability scope within its accreditation, with no widening | Calibration v1, `cal-verifier-capability-1` | same |
| nmi-legal-mandate | C | A national metrology institute authorized by a statutory mandate, with no accreditation root | Calibration v1, `cal-verifier-nmi-1` | same |
| test-report-supported-dcc | F | A test report supported by its instrument's own authorized calibration | Calibration v1, `cal-verifier-test-report-1` | same |
| gs-scheme-authorization | GS | A GS mark needing competence AND scheme permission, and a type examination and factory inspection | GS v1, `gs-verifier-1`, `gs-verifier-dpp-1` | `gs-v1.test.ts` / `test_gs_v1.py` |
| gs-product-passport (experimental) | DPP | A unit's product passport, shaped after the EU DPP (ESPR), whose compliance information lists the GS mark, supported by the unit's GS-mark credential (same unit, operator and model), which keeps its own route to the GS certificate. Other passport sections are not interpreted. Not ESPR conformance; today's GS scheme has no per-unit credential | GS v1, `gs-verifier-dpp-1` | same |

Labels (A–F, GS, DPP) are display names, not governed profile identifiers.

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
the accreditation ACC-RMP of the RM producer (As, Cu, Zn, Pb, 0.1 mg/kg to 997 g/kg, M1
and M2, shaped after a flexible-scope annex row), the producer's own flexible scope list
LIST-RMP within it (As, [50, 500] mg/kg, M1 only), the certificate RM178 (CuZn39Pb3 brass,
arsenic, U = 5 mg/kg, k = 2), the homogeneity study HOM-LOT1 and the laboratory's
accreditation ACC-LAB. The verifier asks for `x + U <= 200 mg/kg`
(`guarded-acceptance-expanded-u`). As in the DRMD, every certified value is a PTB D-SI
2.2.1 real (QUDT `MassFraction`, unit `\milli\gram\kilogram\tothe{-1}` or `\percent`,
expanded uncertainty with k = 2); see [bindings](bindings.md#quantity-values-ptb-d-si).

| Signed certificate | Scope | Conformity | Decision |
| --- | --- | --- | --- |
| `RM178.json` | established | 183 ≤ 200 | accept |
| `RM197.json` | established | 202 > 200 | reject (authorization established) |
| `RM520.json` | contradicted | not run | reject |

520 mg/kg lies inside A but outside O. The certificate draws its authority from O, and
the parent never rescues the child.

The [demonstrator](https://monavari.github.io/VC4QI/demo/#rm) runs exactly these cases
in the browser with the same evaluator, and adds a tamper test and a withheld study. Its
DCC, GS and DPP tabs do the same for the calibration and GS bindings, and the
[GS story](https://monavari.github.io/VC4QI/demo/gs/) puts the GS chain on an actor board. The
[RM story](https://monavari.github.io/VC4QI/demo/rm/) draws this chain top to bottom and
plays scenarios on it: verifiers with different roots, a suspended accreditation asked
about today or at issuance, an expired certificate, a withdrawn study, an edited value,
and certificates you sign yourself.

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
  the CMC rejects when the profile applies the floor. CAL-A comes from the RM example's
  accreditation body and names the same roots: a verifier that trusts the state
  (`cal-verifier-state-1`) accepts the body through its appointment APP-NAB, one abroad
  that trusts Global ACI (`cal-verifier-global-aci-1`) through its recognition REC-NAB
  for Calibration. A recognition without Calibration, or an appointment that does not
  permit calibration accreditations, contradicts that route.
- **Capability.** DCC-2 is issued under the laboratory's own scope CAL-O (0–2 MPa). CAL-O
  must lie within CAL-A. A group at 5 MPa is inside CAL-A but outside CAL-O, and is
  rejected: the parent never rescues the child.
- **Legal mandate.** DCC-N is authorized by a ministry's mandate CAL-M. The witnesses
  contain no accreditation, and the ministry must be configured for designating
  metrology institutes.
- **Test report.** REPORT-1 is authorized by the testing accreditation CAL-T and
  requires DCC-1 as its instrument's calibration. DCC-1 must be for the same
  instrument, earlier than the test, valid at it and itself authorized for every group.
- **GS mark.** The manufacturer's GS-mark credential for a hair dryer unit (GSM-1) rests on
  the certificate GSC-1. GSC-1 needs GS-A (the GS body's competence against EN 60335-1
  and -2-23, from a fictional accreditation body in the DAkkS role) and GS-S (the
  ZLS-role permission to award the mark for household appliances); either alone is
  `not_established`. GSC-1 also needs its studies: a type examination TR-1 under a
  testing accreditation and a factory inspection FI-1 under the certification
  accreditation, which covers factory inspection. GSC-3 uses an external laboratory's examination (TR-2 under TL-A). A toy
  certificate (GSC-2) is rejected because GS-S does not cover toys.
- **Product passport.** The passport DPP-1 of that unit lists the GS mark in its
  compliance information and cites GSM-1 as evidence. The entry is relied on only if GSM-1
  is for the same unit, operator and model and holds its own route; a passport citing
  another unit's credential (DPP-3) is rejected.
