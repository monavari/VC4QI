# ADR-005 VC Chain Design: Separate AccreditationCredential and CapabilityCredential

## Status

Accepted

## Context

The three-layer credential model in the paper requires a trust chain from a
root authority down to domain credentials (DCC, DRMD). Two design choices were
considered:

**Option A — Two intermediate credentials:**
```
Root → AccreditationCredential (Root→AA) → CapabilityCredential (AA→CAB) → DCC/DRMD
```

**Option B — One combined credential:**
```
Root → AccreditationCredential (Root→CAB, with scope) → DCC/DRMD
```

## Decision

**Option A — keep AccreditationCredential and CapabilityCredential as separate,
distinct credential types.**

## Rationale

| Dimension | AccreditationCredential | CapabilityCredential |
|-----------|------------------------|----------------------|
| Issuer | Root authority (Quality-X) | National accreditation body (DAkkS) |
| Subject | Accreditation authority (DAkkS) | Conformity assessment body (CAB) |
| Semantic role | Attests that DAkkS is a legitimate national accreditation body per EA/ILAC membership | Authorizes a specific CAB to issue specific VC types within a specific measurement scope |
| ISO reference | EA-1/20, ILAC P10, national accreditation law | ISO/IEC 17011:2017 §7.9 (accreditation decisions) |
| Typical validity | 5–10 years | 1–4 years (tracks ISO 17025 accreditation cycle) |
| Scope content | Broad (DAkkS is recognized as national body) | Narrow and machine-readable (pressure, 0–200 bar, method X) |
| Update trigger | Change in EA/ILAC membership | CAB scope extension, laboratory relocation, standard update |

Conflating the two would require re-issuing a root-signed credential every time a
CAB extends its measurement scope — operationally impractical.

## Evidence Linking

Each credential layer embeds a cryptographic reference to the credential above it
in its `evidence` array:

```
DCC.evidence[0]
  type:        "CapabilityCredentialReference"
  id:          URI of CapabilityCredential
  hashBinding: SHA-256(URDNA2015(CapabilityCredential)) in base58btc multibase

CapabilityCredential.evidence[0]
  type:        "AccreditationCredentialReference"
  id:          URI of AccreditationCredential
  hashBinding: SHA-256(URDNA2015(AccreditationCredential)) in base58btc multibase

AccreditationCredential.issuer  ←  checked against TrustRegistryCredential
```

The hashBinding is computed over the URDNA2015 canonical form of the referenced
credential **before** its proof is attached (the proof is excluded from
canonicalization per the Data Integrity spec). This ensures binding is over the
verifiable content, not the signature.

## Verification Algorithm (6 Rules)

```
Rule 1  DCC.issuer == CapabilityCredential.credentialSubject.id
Rule 2  AccreditationCredential.issuer is listed and active in TrustRegistryCredential
Rule 3  DCC.validFrom ∈ [CapabilityCredential.validFrom, CapabilityCredential.validUntil]
        CapabilityCredential.validFrom ∈ [AccreditationCredential.validFrom, AccreditationCredential.validUntil]
Rule 4  BitstringStatusListEntry bit = 0 for all credentials in the chain
Rule 5  DCC.evidence[0].hashBinding matches SHA-256(URDNA2015(CapabilityCredential))
        CapabilityCredential.evidence[0].hashBinding matches SHA-256(URDNA2015(AccreditationCredential))
Rule 6  DCC payload scope (quantityKind, usedMethods, measurementRange) ⊆ CapabilityCredential.scope
        DRMD payload scope (propertyIdentifiers) ⊆ CapabilityCredential.scope
```

Rule 6 is the scope check that prevents a CAB from issuing a DCC for temperature
when their CapabilityCredential only authorizes pressure calibration.

## Credential Type Summary

| Credential | Schema file | Issuer → Subject |
|------------|-------------|-----------------|
| TrustRegistryCredential | `trust-registry-entry.json` | Root → Registry URI |
| AccreditationCredential | `accreditation-credential.json` | Root → AA (DAkkS) |
| CapabilityCredential | `capability-credential.json` | AA → CAB |
| DigitalCalibrationCertificate | `digital-calibration-certificate.json` | CAB → Customer/Item |
| ReferenceMaterialCertificate | `reference-material-certificate.json` | RMP → Lot DID |

## Consequences

- Five credential types in the full chain (TrustRegistry, Accreditation,
  Capability, DCC, DRMD).
- M1 schemas focus on DCC and DRMD. AccreditationCredential and
  CapabilityCredential schemas are defined later; their evidence references are
  structurally defined in DCC/DRMD schemas now.
- Verification implementation (M2/M3) must recursively resolve and verify
  all five layers.
- Cross-language interop (TS + Python) must produce identical hashBinding
  values; verified by integration tests in `tests/integration/`.
