# Source provenance — BAM-M375a

`BAM_M375a.xml` is a transcription of the BAM-M375a (CuZn39Pb3, leaded brass)
Digital Reference Material Document (DRMD, `schemaVersion 0.3.0`), provided as
real-world provenance for the selective-disclosure (G2) fixtures under
`examples/rm/`.

Notes:

- The certified analyte values used in our JSON fixtures
  (`reference-material-certificate.sd.json` and its derived subset) are taken
  from this document: **Cu 57.68 % (U=0.14)**, **Zn 38.2 % (U=0.4)**,
  **Pb 3.07 % (U=0.06)**, **As 178.0 mg/kg (U=5.0)**, all with coverage factor
  k = 2 (GUM, ISO/IEC Guide 98-3:2008). The producer, contact, and responsible
  persons (Dr. S. Richter, Dr. S. Recknagel) are likewise taken from this source
  and become the **selectively disclosable** fields in the SD demo.
- This XML is **abridged**: the per-element analytical-method `procedures` text
  blocks and the non-certified "Informative Properties Set" have been removed for
  repository cleanliness. The certified properties, administrative data,
  responsible persons, and statements are preserved.
- The original carries its own enveloped `XMLDSig` (`rsa-sha256`) signature. That
  signature is **unrelated** to the QI-VC Data Integrity / SD proofs and is not
  used or verified by this project; it is retained only where present as part of
  the source artifact.
- Character encoding has been normalized to clean UTF-8 (the source as received
  had latin1/utf-8 round-trip mojibake, e.g. `für`).
