# DigitalCalibrationCertificate — Schema Design Principles

## 1. Purpose and Normative Basis

The `DigitalCalibrationCertificate` (DCC) Verifiable Credential encodes a
calibration certificate issued by a Conformity Assessment Body (CAB) accredited
under **ISO/IEC 17025:2017** (General requirements for the competence of testing
and calibration laboratories).

The credential structure maps to two normative sources:

| Source | Role in this schema |
|--------|---------------------|
| **PTB DCC XSD v3.3.0** (`https://ptb.de/dcc`) | Defines the administrative and measurement payload structure |
| **W3C VC Data Model 2.0** (`https://www.w3.org/TR/vc-data-model-2.0/`) | Defines the VC envelope: `@context`, `type`, `issuer`, `validFrom`, `credentialSubject`, `proof` |
| **D-SI XSD v2.2.1** (`https://ptb.de/si`) | Defines quantity, unit, and uncertainty representation |
| **GUM (JCGM 100:2008)** | Normative vocabulary for uncertainty terms |
| **QUDT Ontology v2.1** (`http://qudt.org/`) | Machine-readable quantity kinds and units |
| **UCUM** (Unified Code for Units of Measure) | Human-readable unit codes |
| **W3C Bitstring Status List v1.0** | Revocation / suspension via `BitstringStatusListEntry` |
| **W3C Data Integrity eddsa-rdfc-2022** | Proof structure |

## 2. VC Envelope Fields

### 2.1 `@context`

```json
"@context": [
  "https://www.w3.org/ns/credentials/v2",
  "https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld"
]
```

**Why:** VC 2.0 §4.1 mandates that the first entry MUST be
`https://www.w3.org/ns/credentials/v2`. The second context defines all
DCC-specific JSON-LD term mappings (PTB DCC namespace, QUDT, D-SI).

### 2.2 `type`

```json
"type": ["VerifiableCredential", "DigitalCalibrationCertificate"]
```

**Why:** VC 2.0 §4.4 requires `VerifiableCredential`. The domain type
`DigitalCalibrationCertificate` mirrors the PTB DCC root element name
`digitalCalibrationCertificate` and the established community term used by
PTB, DKD, and EURAMET.

### 2.3 `issuer`

Maps to the calibration laboratory's DID. The lab is the issuer of the
certificate per ISO/IEC 17025:2017 §7.8 (reporting of results).

### 2.4 `validFrom`

Set to `endPerformanceDate` from PTB DCC `coreData` — the date the calibration
was completed and the certificate becomes valid.

**Why `endPerformanceDate`:** ISO/IEC 17025:2017 §7.8.2 requires the date of
calibration. The DCC uses `endPerformanceDate` as the authoritative
"calibration date." The VC `validFrom` aligns with this: the certificate is
valid as of when the calibration was completed.

### 2.5 `validUntil`

Optional. Set to the recalibration due date if stated by the issuing lab.
Note: ISO/IEC 17025:2017 §7.8.4 explicitly states calibration intervals are
the responsibility of the user, not the lab. `validUntil` SHOULD only be
set when the lab explicitly specifies it.

### 2.6 `credentialStatus`

`BitstringStatusListEntry` per W3C Bitstring Status List v1.0
(https://www.w3.org/TR/vc-bitstring-status-list/). Replaces the deprecated
`StatusList2021Entry` naming.

**statusPurpose:** `revocation` is mandatory; `suspension` is optional (used
when a DCC is temporarily suspended pending re-calibration or dispute).

## 3. `credentialSubject` Field Design

The `credentialSubject` contains the DCC domain payload. Its `id` is the DID
of the calibrated item or the customer, if one has been assigned.

### 3.1 `administrativeData`

Maps directly to `dcc:administrativeData` from PTB DCC XSD v3.3.0. Contains
all non-measurement metadata.

#### 3.1.1 `coreData`

| JSON field | PTB DCC XSD term | ISO/standard basis | Notes |
|------------|------------------|--------------------|-------|
| `uniqueIdentifier` | `dcc:uniqueIdentifier` | PTB DCC XSD §administrativeData/coreData | Unique certificate identifier; opaque string |
| `countryCode` | `dcc:countryCodeISO3166_1` | ISO 3166-1 alpha-2 | Shortened from XSD name; country of calibration |
| `usedLanguage` | `dcc:usedLangCodeISO639_1` | ISO 639-1 alpha-2 | Language of the certificate content |
| `beginPerformanceDate` | `dcc:beginPerformanceDate` | PTB DCC XSD | Start of calibration activity; ISO 8601 |
| `endPerformanceDate` | `dcc:endPerformanceDate` | PTB DCC XSD | End of calibration = calibration date; ISO 8601 |
| `performanceLocation` | `dcc:performanceLocation` | PTB DCC XSD | Where calibration took place |

#### 3.1.2 `items`

Maps to `dcc:items/dcc:item` (one or more calibrated equipment entries).

| JSON field | PTB DCC XSD term | Notes |
|------------|------------------|-------|
| `name` | `dcc:name` | Human-readable equipment name |
| `description` | `dcc:description` | Free text; multilingual in XSD |
| `identifications[]` | `dcc:identifications/dcc:identification` | Serial numbers, manufacturer IDs |
| `identifications[].issuer` | `dcc:issuer` (on identification) | Who assigned this identifier |
| `identifications[].value` | `dcc:value` (on identification) | The identifier value |

#### 3.1.3 `calibrationLaboratory`

Maps to `dcc:calibrationLaboratory` (contactType in XSD).

**Why separate from `issuer`:** The VC `issuer` is the lab's DID for
cryptographic identity. `calibrationLaboratory` carries the human-readable
name, location, and accreditation number used in the printed certificate.

#### 3.1.4 `customer`

Maps to `dcc:customer` (contactType in XSD). ISO/IEC 17025:2017 §7.8.2.a
requires the name and address of the customer.

### 3.2 `measurementResults`

Maps to `dcc:measurementResults/dcc:result`. Each entry represents one
measurement group (one measurand, one method, multiple readings).

| JSON field | PTB DCC XSD term | Basis |
|------------|------------------|-------|
| `measurand` | `dcc:name` on result | Human label for what is measured |
| `usedMethods[]` | `dcc:usedMethod` | ISO/IEC 17025:2017 §7.2 (method selection) |
| `usedMethods[].name` | `dcc:name` on usedMethod | Method name |
| `usedMethods[].reference` | `dcc:description` / `dcc:refId` | Standard or SOP reference |
| `influenceConditions[]` | `dcc:influenceCondition` | Environmental conditions per GUM §4.2 |
| `results[]` | `dcc:measurement` | Individual measurement readings |
| `results[].data.quantity` | `si:quantity` / `si:real` in D-SI | See §3.2.1 |

#### 3.2.1 Quantity Representation (`results[].data.quantity`)

This is the most normatively significant field. Design follows **D-SI XSD v2.2.1**
and **QUDT Ontology v2.1**, with GUM terminology for uncertainty.

| JSON field | D-SI / QUDT term | Normative basis |
|------------|------------------|-----------------|
| `quantityKind` | `qudt:QuantityKind` URI | QUDT v2.1; e.g., `http://qudt.org/vocab/quantitykind/Pressure` |
| `value` | `si:value` / `qudt:numericValue` | D-SI `si:real`; the numeric measurement result |
| `unit.ucumCode` | UCUM code | Unified Code for Units of Measure; human-readable |
| `unit.unitIri` | `qudt:Unit` URI | QUDT v2.1; e.g., `http://qudt.org/vocab/unit/BAR` |
| `uncertainty.standardUncertainty` | `si:standardUnc` / `qudt:standardUncertainty` | GUM JCGM 100:2008 §4; standard uncertainty u(x) |
| `uncertainty.expandedUncertainty` | `si:expandedUnc.uncertainty` | GUM §6; U = k·u(x) |
| `uncertainty.coverageFactor` | `si:coverageFactor` | GUM §6.2; coverage factor k (≥1) |
| `uncertainty.coverageProbability` | `si:coverageProbability` | GUM §6.2; p (e.g., 0.95 for 95 %) |

**Why dual unit encoding (UCUM + QUDT IRI):**
- `ucumCode` is human-readable and tooling-compatible (many scientific
  software packages parse UCUM). It is the fallback for display.
- `unitIri` provides machine-processable linked-data identity, enabling
  semantic reasoning (e.g., unit conversion via QUDT conversion factors).
- Either is sufficient for validation; both together are recommended.

**Why not QUDT for uncertainty terms:**
QUDT defines `qudt:standardUncertainty` but does NOT define
`expandedUncertainty`, `coverageFactor`, or `coverageProbability`. These
are GUM (JCGM 100:2008) terms. The D-SI XSD (`https://ptb.de/si`) does define
them in the `si:expandedUnc` type. We use GUM-aligned names and reference D-SI.

## 4. `evidence` Field Design

```json
"evidence": [{
  "id": "https://daaks.example.com/credentials/capability-001",
  "type": "CapabilityCredentialReference",
  "hashBinding": {
    "digestAlgorithm": "sha-256",
    "digestMultibase": "z6Mkr..."
  }
}]
```

**Why `evidence` (not `credentialSchema` or a custom field):**
VC 2.0 §4.9 defines `evidence` as the place for information gathered to
support issuance. The CapabilityCredential IS evidence that the lab is
authorized to issue this DCC. Using the standard `evidence` property ensures
interoperability with VC processing libraries.

**Why `CapabilityCredentialReference` (not `AccreditationReference` as in prior art):**
The DCC directly references the **CapabilityCredential**, not the
AccreditationCredential. The AccreditationCredential is one more step up the
chain, referenced from the CapabilityCredential's own `evidence`. This matches
the actual chain of trust (see ADR-005).

**hashBinding algorithm:**
- `digestAlgorithm`: `sha-256` per IANA Hash Algorithm Registry
  (https://www.iana.org/assignments/named-information/named-information.xhtml)
- `digestMultibase`: multibase-encoded (base58btc, prefix `z`) SHA-256 digest
  of the URDNA2015 canonical form of the CapabilityCredential, per multibase
  spec (https://www.w3.org/community/reports/credentials/CG-FINAL-multibase-20221206/)
- The proof block is excluded from canonicalization before hashing, per
  W3C Data Integrity §4.4.

## 5. `proof` Field Design

```json
"proof": {
  "type": "DataIntegrityProof",
  "cryptosuite": "eddsa-rdfc-2022",
  "proofPurpose": "assertionMethod",
  "verificationMethod": "did:example:cab-pressure#keys-1",
  "created": "2025-08-11T14:00:00Z",
  "proofValue": "z5E23u..."
}
```

| Field | Value | Basis |
|-------|-------|-------|
| `type` | `DataIntegrityProof` | W3C Data Integrity §2.1 |
| `cryptosuite` | `eddsa-rdfc-2022` | W3C EdDSA Data Integrity §3; Ed25519 with URDNA2015 |
| `proofPurpose` | `assertionMethod` | W3C Data Integrity §2.1; credential issuance purpose |
| `verificationMethod` | DID URL to public key | W3C DID Core §5.2 |
| `proofValue` | multibase base58btc encoded signature | W3C Data Integrity §2.1 |

**Why `eddsa-rdfc-2022`:** EdDSA (Ed25519) is compact, fast, and widely
implemented. The `-rdfc-` suffix indicates URDNA2015 (RDF Dataset Canonicalization)
is used before signing — required for JSON-LD documents. This cryptosuite is
specified in W3C EdDSA Cryptosuites v1.0
(https://www.w3.org/TR/vc-di-eddsa/).

## 6. What This Schema Does NOT Cover (Deferred)

- Full Data Integrity signature computation (M2)
- DCC XML (`dcc:document`) embedded binary attachment
- Multi-item calibration (schema supports it; examples show one item)
- Statement / compliance declarations (`dcc:statement`)
- Responsible persons (`dcc:respPersons`)
- Measuring equipment references (`dcc:measuringEquipment`)
- SD-JWT-VC issuance path (M5+)
