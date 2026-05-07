# Scenario Test Catalogue (T1–T12)

Implements Appendix C, Table C1 of the paper
"A Scope-Bounded Verifiable Credentials Architecture for Digital Calibration
and Reference Material Certificates" (Monavari et al., MDPI Sensors, 2026).

Each test starts from a valid three-layer credential chain and applies exactly
one targeted modification, then verifies that the expected reason code appears
in the verification result.

## Running the tests

```bash
# From repo root
pnpm test:scenarios
```

## Test catalogue

| Test | Domain | Failure case | Expected outcome |
|------|--------|--------------|-----------------|
| T1 | DCC | Range out of scope: measurement 1500 kPa > scope bound 600 kPa | `fail(RANGE_OUT_OF_SCOPE)` |
| T2 | DCC | Method not in authorized set: `ISO 1234` not in `[DKD-R 6-1:2014, EA-10/17]` | `fail(METHOD_OUT_OF_SCOPE)` |
| T3 | DCC | Uncertainty widens: U=10 kPa at 300 kPa = 3.33% > 0.05% bound | `fail(UNCERTAINTY_WIDENING)` |
| T4 | DCC | Flexible-scope uncertainty widening (EA-2/15 analogue): U=3 at 300 = 1% > 0.05% | `fail(UNCERTAINTY_WIDENING)` |
| T5 | DRMD | DRMD certifies property outside allowedProperties: `Ti` not in element list | `fail(MATRIX_PROPERTY_MISMATCH)` |
| T6 | DRMD | CapabilityCredential allowedProperties excludes `Cu`: certified `Cu` blocked | `fail(MATRIX_PROPERTY_MISMATCH)` |
| T7 | DCC | CapabilityCredential range.to 2000 kPa exceeds AccreditationCredential scope 1000 kPa | `fail(DERIVATION_VIOLATION)` |
| T8 | DCC | AccreditationCredential status bit set (revoked): bit 0 = 1 | `fail(STATUS)` |
| T9 | both | Issuer DID not in trust registry: `did:web:rogue.example` unknown | `fail(NOT_IN_REGISTRY)` |
| T10 | both | Evidence hashBinding tampered: digest replaced with `z000...` | `fail(HASH_MISMATCH)` |
| T11 | DCC | Valid DCC chain (positive test): 300 kPa within 0–600, DKD-R 6-1:2014, U=0.15 | `VALID` |
| T12 | DRMD | Valid DRMD Variant A (positive test): Cu/Zn/Pb within scope, U within bound | `VALID` |

## Fixture structure

All tests use shared fixture builders from `tests/scenarios/fixtures.ts`:

```
AccreditationCredential (DAkkS → TestLab/BAM)
  └─ CapabilityCredential (DAkkS → TestLab/BAM, scope projection)
       └─ DCC / DRMD (TestLab/BAM → subject)
```

The DCC chain uses pressure calibration (0–1000 kPa accreditation, 0–600 kPa
capability, 300 kPa measurement). The DRMD chain uses BAM M375a brass alloy
(non-ferrous metals scope, Cu/Zn/Pb certified elements).

## Reason-code vocabulary

See `policies/verification-policy-v1.json` for the full reason-code table.

| Code | Rule | Description |
|------|------|-------------|
| `RANGE_OUT_OF_SCOPE` | 6 | Measured value outside accredited range |
| `METHOD_OUT_OF_SCOPE` | 6 | Calibration method not in authorized set |
| `UNCERTAINTY_WIDENING` | 6 | Reported uncertainty exceeds scope bound |
| `MATRIX_PROPERTY_MISMATCH` | 6 | Certified element or matrix outside scope |
| `NO_SCOPE_ENTRY` | 6 | No scope entry covers the reported measurand |
| `DERIVATION_VIOLATION` | 2 | CapabilityCredential constraints exceed AccreditationCredential scope |
| `EXPIRED` | 3 | Credential outside its validity period |
| `STATUS` | 4 | Status bit set (revoked or suspended) |
| `NOT_IN_REGISTRY` | 2 | Accreditation body DID not in trust registry |
| `HASH_MISMATCH` | 5 | Evidence hash binding does not match referenced credential |
