# ReferenceMaterialCertificate — Schema Design Principles

## 1. Purpose and Normative Basis

The `ReferenceMaterialCertificate` (RMC) Verifiable Credential encodes a
reference material certificate issued by a Reference Material Producer (RMP)
accredited under **ISO 17034:2016** (General requirements for the competence
of reference material producers).

The credential structure maps to these normative sources:

| Source | Role in this schema |
|--------|---------------------|
| **DRMD XSD v0.3.0** (user's schema) | Defines the administrative and property payload structure |
| **ISO 17034:2016** | Competence requirements for the RMP (issuer) |
| **ISO Guide 31:2015** | Required content of reference material certificates |
| **W3C VC Data Model 2.0** | VC envelope: `@context`, `type`, `issuer`, `validFrom`, `credentialSubject`, `proof` |
| **GUM (JCGM 100:2008)** | Uncertainty terminology (expandedUncertainty, coverageFactor, coverageProbability) |
| **QUDT Ontology v2.1** | Machine-readable quantity kinds and units |
| **UCUM** | Human-readable unit codes |
| **W3C Bitstring Status List v1.0** | Revocation / suspension |
| **W3C Data Integrity eddsa-rdfc-2022** | Proof structure |

**Note on DRMD XSD:** The DRMD v0.3.0 schema is a project-specific XSD
developed to digitize reference material certificates. Its term names are used
directly in `credentialSubject` fields. This schema document traces each field
to the DRMD XSD term and its ISO 17034 / ISO Guide 31 normative source.

## 2. VC Envelope Fields

### 2.1 `@context`

```json
"@context": [
  "https://www.w3.org/ns/credentials/v2",
  "https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld"
]
```

**Why:** VC 2.0 §4.1 mandates `https://www.w3.org/ns/credentials/v2` as the
first entry. The second context maps DRMD terms to stable linked-data URIs.

### 2.2 `type`

```json
"type": ["VerifiableCredential", "ReferenceMaterialCertificate"]
```

**Why `ReferenceMaterialCertificate`:** ISO Guide 31:2015 calls this document
a "certificate of a reference material." The DRMD XSD root element is
`ReferenceMaterialDocument`. We use `ReferenceMaterialCertificate` to
distinguish the VC-encoded certificate from the full DRMD document (which may
include study reports and embedded documents not included in this VC).

### 2.3 `issuer`

The RMP's DID. The RMP is the entity responsible for producing and certifying
the reference material per ISO 17034:2016 §4.1.

### 2.4 `validFrom`

Set to the certification date — when the reference material values were
formally assigned and the certificate issued.

### 2.5 `validUntil`

Set to the expiry date of the certified values, from
`administrativeData.validity.validUntil`. ISO Guide 31:2015 §10 requires a
statement of the period of validity. This maps directly to VC `validUntil`.

### 2.6 `credentialStatus`

`BitstringStatusListEntry` per W3C Bitstring Status List v1.0. The RMP may
revoke a certificate if homogeneity or stability data are found to be out of
specification after certification.

## 3. `credentialSubject` Field Design

The `credentialSubject.id` is the DID of the specific lot or batch of reference
material being certified (e.g., `did:example:lot-rm-001`). The lot DID is the
subject because the certified values are properties of that specific lot — not
of the RMP or the customer.

### 3.1 `administrativeData`

Maps to DRMD `administrativeData`. Contains all document-level metadata.

#### 3.1.1 `coreData`

| JSON field | DRMD XSD term | ISO/standard basis |
|------------|---------------|--------------------|
| `titleOfTheDocument` | `coreData.titleOfTheDocument` | ISO Guide 31:2015 §4 (document identification) |
| `uniqueIdentifier` | `coreData.uniqueIdentifier` | ISO Guide 31:2015 §4; unique certificate number |

**Why `titleOfTheDocument`:** ISO Guide 31:2015 §4.1 requires a title identifying
the type of reference material certificate (e.g., "Certificate of Analysis",
"Certified Reference Material Certificate"). The DRMD XSD includes this
as a required field; it is preserved verbatim.

#### 3.1.2 `validity`

| JSON field | DRMD XSD term | ISO/standard basis |
|------------|---------------|--------------------|
| `validFrom` | `validity.validFrom` | ISO Guide 31:2015 §10 (period of validity) |
| `validUntil` | `validity.validUntil` | ISO Guide 31:2015 §10 |

**Why separate from VC-level `validFrom`/`validUntil`:** The VC envelope dates
control the credential's cryptographic validity window. The `validity` block
inside `credentialSubject` records the stated validity of the certified
property values as declared by the RMP — these may differ from the VC
validity window (e.g., the VC may be issued later with back-dated value
validity).

#### 3.1.3 `referenceMaterialProducer`

| JSON field | DRMD XSD term | ISO basis |
|------------|---------------|-----------|
| `id` | (DID; extension) | Linked-data identity |
| `name` | `referenceMaterialProducer.name` | ISO 17034:2016 §4.1 |
| `location` | `referenceMaterialProducer.location` | ISO Guide 31:2015 §4.2 |
| `accreditationNumber` | (extension) | ISO 17034:2016 §8.1; accreditation reference |

**Why embed producer info in credentialSubject:** The VC `issuer` DID
provides the cryptographic identity. The producer block provides the
human-readable certificate information required by ISO Guide 31:2015 §4.2
(name and address of the producer) for display and audit purposes.

### 3.2 `materials`

Maps to DRMD `materials`. An array covering the material(s) described in the
certificate. ISO Guide 31:2015 §5 requires description of the material.

| JSON field | DRMD XSD term | ISO basis |
|------------|---------------|-----------|
| `materialIdentifiers[]` | `materialIdentifiers` | ISO Guide 31:2015 §5.1 (identification of the material) |
| `materialIdentifiers[].type` | Identifier type (CAS, IUPAC, lot, etc.) | ISO Guide 31 / CAS Registry |
| `materialIdentifiers[].value` | The identifier value | |
| `name` | `materials.name` | ISO Guide 31:2015 §5.2 (description) |
| `lotNumber` | `materials.lotNumber` | ISO Guide 31:2015 §5.1 (lot/batch identifier) |
| `description` | `materials.description` | ISO Guide 31:2015 §5 |

**Why `materialIdentifiers` as an array of typed identifiers (not a flat CAS field):**
Reference materials may be identified by multiple schemes simultaneously
(CAS number, IUPAC name, lot number, internal code, InChI string). An array
of `{type, value}` pairs accommodates all of these without privileging any
single scheme.

### 3.3 `materialPropertiesList`

Maps to DRMD `materialPropertiesList`. The core scientific payload of the
certificate — the certified property values.

ISO Guide 31:2015 §6 requires: certified values, their uncertainties, and
metrological traceability for each certified property.

| JSON field | DRMD XSD term | ISO basis |
|------------|---------------|-----------|
| `propertyIdentifiers[]` | `propertyIdentifiers` | Property name(s) this group covers; used for scope check against CapabilityCredential |
| `results[]` | `results` | Array of measurement results for this property |
| `results[].data.quantity` | `results.data.quantity` | See §3.3.1 |

**Why `propertyIdentifiers` as an array:** A single measurement group may
characterize a property that has multiple identifier schemes (e.g., "pH" and
"Hydrogen ion activity"). The array allows the verifier to match against any
identifier in the CapabilityCredential's scope without requiring an exact
string match.

**Why nest inside `data.quantity`:** The DRMD XSD nests quantities inside a
`data` container to allow for multiple data types per result (quantity,
qualitative, count, etc.). Preserving this nesting in the VC schema keeps the
mapping reversible to the DRMD XSD without transformation loss.

#### 3.3.1 Quantity Representation

Identical design to the DCC schema (see `digital-calibration-certificate.md §3.2.1`).
Uses QUDT quantity kind URIs, dual UCUM/QUDT unit encoding, and GUM
uncertainty terms.

**Additional note for RM properties:** Not all RM properties are physical
quantities with SI units. Some are dimensionless ratios (pH, mass fraction
expressed as %, mole fraction). For dimensionless quantities:
- `unit.ucumCode` = `"1"` (UCUM for dimensionless)
- `unit.unitIri` = `"http://qudt.org/vocab/unit/UNITLESS"` (QUDT)

### 3.4 `statements`

Maps to DRMD `statements`. ISO Guide 31:2015 §§7–10 require several
standardized statements in a reference material certificate.

| JSON field | DRMD XSD term | ISO Guide 31 clause |
|------------|---------------|---------------------|
| `intendedUse` | `statements.intendedUse` | §7 (intended use and instructions for use) |
| `storageConditions` | `statements.storageConditions` | §9 (storage instructions) |
| `handlingInstructions` | `statements.handlingInstructions` | §7 (instructions for use) |
| `metrologicalTraceability` | `statements.metrologicalTraceability` | §8 (metrological traceability) |

**Why a structured object rather than a free-text string:** ISO Guide 31 defines
specific required statement categories. Structuring them as named fields ensures
each category is verifiable (a validator can check presence) and
machine-processable (a rendering tool can label each statement correctly).

## 4. `evidence` Field Design

Same structure as DCC (see §4 of DCC design doc). The RMC references a
`CapabilityCredential` authorized for `ReferenceMaterialCertificate` issuance,
with `hashBinding` computed over the URDNA2015 canonical form.

**Scope check difference from DCC:** For the RMC, Rule 6 compares
`materialPropertiesList[].propertyIdentifiers` against the CapabilityCredential
scope (which lists authorized property types, e.g., `pH`, `massConcentration`).
For the DCC, Rule 6 compares `quantityKind` and `usedMethods` against the
scope.

## 5. What This Schema Does NOT Cover (Deferred)

- Homogeneity and stability study data (separate RM Study credential)
- Characterization report references
- Multi-lot certificates
- DRMD XML embedded document binary
- ISO Guide 31 §11 (references to publications and methods — handled in `usedMethods` on individual results)
