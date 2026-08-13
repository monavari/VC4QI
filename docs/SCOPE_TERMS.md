# Governed scope terms

Categorical scope dimensions compare as **exact equality over governed
identifiers** (SCO-1). Human-readable labels are display only and are never
comparison operands (SCO-2). A dimension that carries a label but no governed
identifier fails with `UNRESOLVED_SCOPE_TERM` (SCO-3) — that code is the B5
boundary made visible at runtime, not an error to be worked around.

## Why this file exists

Substring matching on lowercased free text was an actual unsoundness in the
verifier: `"As"` matched `"Ash"`, and a scope entry for `"CuZn"` admitted a claim
about `"CuZn39Pb3"`. The formal core claims soundness relative to a decidable
`in`; `in` was decidable and **wrong**.

Fixing that requires something to compare *instead of* the labels, and this file
records what that is.

## Status of these identifiers

| Namespace | Authority | Status |
| --- | --- | --- |
| `http://qudt.org/vocab/quantitykind/` | QUDT | **Real.** External, stable, already used by this repo for units. |
| `http://qudt.org/vocab/unit/` | QUDT | **Real.** Already used in `scope/index.ts` unit tables. |
| `https://w3id.org/qi-vc/terms/v1/` | this repository | **Placeholder.** Not authoritative. |

The `qi-vc/terms` identifiers stand in for a governed vocabulary that does not
exist yet. Owning the semantics of "does CuZn39Pb3 fall under non-ferrous metals
and alloys" is **B5**, and belongs to QI institutions, not to this framework
(MOD-8 anticipates a QI Term-Service or SKOS/RDF resolver behind a pluggable
interface). Until such a service exists, these IRIs make the *comparison*
well-defined without pretending the *taxonomy* is settled.

Consequently: identity is decidable here, **subsumption is not**. Two identifiers
are equal or they are not. Nothing in this repository decides that one term falls
under another; a taxonomic resolver is a future pluggable interface whose default
implementation fails closed (SCO-6).

## Terms used by the worked examples

### Quantity kinds (real, QUDT)

| Label (display only) | Governed identifier |
| --- | --- |
| Pressure | `http://qudt.org/vocab/quantitykind/Pressure` |

### Matrices (placeholder)

| Label (display only) | Governed identifier |
| --- | --- |
| CuZn39Pb3 (leaded brass) | `https://w3id.org/qi-vc/terms/v1/matrix/CuZn39Pb3` |
| CuZn40Pb2 (leaded brass) | `https://w3id.org/qi-vc/terms/v1/matrix/CuZn40Pb2` |

These two are deliberately close. `CuZn39Pb3` against `CuZn40Pb2` is a permanent
regression test (TST-4): a near-miss that substring matching would have admitted
and exact identifier equality refuses.

### Elements / properties (placeholder)

| Label (display only) | Governed identifier |
| --- | --- |
| Arsenic (As) | `https://w3id.org/qi-vc/terms/v1/element/As` |

### Methods (placeholder)

| Label (display only) | Governed identifier |
| --- | --- |
| EURAMET cg-17 | `https://w3id.org/qi-vc/terms/v1/method/EURAMET-cg-17` |

### Forms (placeholder)

| Label (display only) | Governed identifier |
| --- | --- |
| disc | `https://w3id.org/qi-vc/terms/v1/form/disc` |

## Vocabulary terms carrying these identifiers

Defined in `contexts/v1/qi-core.jsonld`, all with `"@type": "@id"`.

| Term | Where it appears | Plural form on scope entries |
| --- | --- | --- |
| `quantityKindIri` | DCC measurement result group | — (scope entry uses the same term) |
| `matrixIri` | material on a DRMD/RM credential | `matrixIris` |
| `methodIri` | `usedMethods` entry | `allowedMethodIris` |
| `propertyIri` | certified property result | `allowedPropertyIris` |
| `formIri` | material on a DRMD/RM credential | `allowedFormIris` |

The singular and plural terms expand to the same vocabulary IRI; the plural is a
`@set` container so a scope entry can admit several values.

## Adding a term

1. Prefer a real external identifier if a governed one exists. QUDT covers
   quantity kinds and units.
2. Otherwise mint under `https://w3id.org/qi-vc/terms/v1/<dimension>/<token>` and
   add it to the tables above, so the placeholder set stays enumerable.
3. Never compare the label. If a credential supplies no identifier for a
   dimension the scope entry governs, the correct outcome is
   `UNRESOLVED_SCOPE_TERM`, not a fallback comparison (FC-6).
