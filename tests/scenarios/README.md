# Scenario Test Catalogue (T1–T12)

Implements Appendix C, Table C1 of the paper.

Each test starts from a valid three-layer credential chain and applies exactly one
targeted modification to verify that the expected reason code is produced.

| Test | Failure case | Domain | Expected outcome |
|------|---|---|---|
| T1 | Range out of scope (1500 kPa > 1000 kPa max) | DCC | `fail(RANGE_OUT_OF_SCOPE)` |
| T2 | Method not in authorized set | DCC | `fail(METHOD_OUT_OF_SCOPE)` |
| T3 | Uncertainty wider than scope bound | DCC | `fail(UNCERTAINTY_WIDENING)` |
| T4 | Flexible-scope uncertainty widening (EA-2/15 analogue) | DCC | `fail(UNCERTAINTY_WIDENING)` |
| T5 | DRMD certifies property outside allowedProperties | DRMD | `fail(MATRIX_PROPERTY_MISMATCH)` |
| T6 | DRMD Variant B: lab scope doesn't cover attributed element | DRMD | `fail(NO_SCOPE_ENTRY / MATRIX_PROPERTY_MISMATCH)` |
| T7 | CapabilityCredential range exceeds AccreditationCredential scope | DCC | `fail(DERIVATION_VIOLATION)` |
| T8 | AccreditationCredential status bit set (suspended) | DCC | `fail(STATUS)` |
| T9 | Issuer DID not in trust registry | both | `fail(NOT_IN_REGISTRY)` |
| T10 | Evidence reference hash tampered | both | `fail(HASH_MISMATCH)` |
| T11 | Valid DCC (positive test) | DCC | `VALID` |
| T12 | Valid DRMD Variant A (positive test) | DRMD | `VALID` |
