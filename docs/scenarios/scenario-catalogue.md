# Scenario Catalogue

The v0.2 scenario suite is fixture-driven and exercises policy-resolved evidence
graphs:

| Scenario | Expected result |
| --- | --- |
| DCC directly authorized by accreditation | pass |
| DCC authorized by capability evidence derived from accreditation | pass |
| DCC authorized by an NMI legal mandate | pass |
| Reference material certificate supported by an RM study | pass |
| Test report supported by a DCC | pass |
| GS certificate missing scheme authorization | fail `REQUIRED_EVIDENCE_MISSING` |
| Capability evidence exceeds parent scope | fail `DERIVATION_VIOLATION` |
| Evidence digest mismatch | fail `DIGEST_MISMATCH` |
| Recursive graph cycle | fail `CYCLE_DETECTED` |
| Graph exceeds depth limit | fail `MAX_DEPTH_EXCEEDED` |
