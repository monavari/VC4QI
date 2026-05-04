# Architecture Overview

## Three-Layer Credential Model

qi-vc-poc implements the credential architecture described in Mottaghi et al.,
2026. Trust flows top-down through three layers:

```
Root Authority (Quality-X)
  │
  │  TrustRegistryCredential (signed VC listing authorised AAs)
  │
  ▼
Accreditation Authority (AA, e.g. DAkkS)
  │
  │  AccreditationCredential
  │  (AA → CAB; attests ISO/IEC 17025 / 17034 / 17065 conformance)
  │
  ▼
Conformity Assessment Body (CAB)
  │
  │  CapabilityCredential
  │  (AA → CAB; scope-bounded issuance authorisation)
  │
  ▼
Domain Credentials (CAB → Subject)
  ├── DigitalCalibrationCertificate (ISO/IEC 17025)
  ├── ReferenceMaterialCertificate (ISO 17034)
  └── GSCertificate (GS mark)
```

Each arrow represents a signed W3C Verifiable Credential with a
`DataIntegrityProof` using the `eddsa-rdfc-2022` cryptosuite. Evidence fields
in domain credentials contain a `hashBinding` (SHA-256 over URDNA2015
canonical form, multibase base58btc encoded) linking back to the
`CapabilityCredential`.

## Verification Policy

Six deterministic rules, applied in order, constitute a complete verification:

| # | Rule | Reference |
|---|------|-----------|
| 1 | Domain credential issuer DID equals `CapabilityCredential` subject DID | [verification-policy-v1.json](../../policies/verification-policy-v1.json) |
| 2 | `AccreditationCredential` issuer DID is listed in the `TrustRegistryCredential` | ibid |
| 3 | `AccreditationCredential` `validFrom`/`validUntil` interval covers domain credential `validFrom` | ibid |
| 4 | All credentials pass `BitstringStatusListEntry` revocation check | ibid |
| 5 | Evidence `hashBinding` matches SHA-256(URDNA2015(`CapabilityCredential`)) | ibid |
| 6 | Domain credential claims fall within `CapabilityCredential` scope constraints | ibid |

## Key Standards

| Concern | Standard |
|---------|----------|
| Credential format | W3C Verifiable Credentials Data Model 2.0 |
| Proof algorithm | eddsa-rdfc-2022 (Data Integrity) |
| Canonicalization | URDNA2015 (RDF Dataset Normalization 1.0) |
| Revocation | Bitstring Status List v1.0 (W3C Rec, May 2025) |
| DID method | did:web |
| Schema language | JSON Schema 2020-12 |
| Measurement vocab | QUDT Ontology |
| Multibase encoding | base58btc (prefix `z`) |

## Further Reading

- [ADR-001](../adrs/adr-001-polyglot-architecture.md) — TypeScript + Python
- [ADR-002](../adrs/adr-002-urdna2015-canonicalization.md) — Canonicalization
- [ADR-003](../adrs/adr-003-bitstring-status-list.md) — Revocation
- [ADR-004](../adrs/adr-004-trust-registry-as-vc.md) — Trust registry
- [ADR-006](../adrs/adr-006-no-dlt.md) — No DLT
