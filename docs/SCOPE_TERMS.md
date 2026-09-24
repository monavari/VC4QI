# Scope identifiers and quantities

**Target rules with an explicit legacy inventory.** The [model](MODEL_SPEC.md) defines
accepted mappings, complete record matching and separate conformity. See
[BINDING_MANIFEST](BINDING_MANIFEST.md) for the candidate local RM paths and terms.

## Target interpretation

Display labels never grant scope. Compare exact governed identifiers or explicitly
accepted equivalences, preserving mapping version and original source paths. As/Ash,
CuZn39Pb3/CuZn40Pb2 and near-miss method labels are distinct controls. Missing restricted
dimensions do not silently mean unrestricted; the selected binding defines that distinction.

One complete parent record covers all dimensions owned by a basis. Each projected record
must fit one parent record, without automatic unions of adjacent ranges. Different requested
claims may use different records. A successful later measurement group does not erase an
earlier required failure. Missing governed methods cannot bypass a method restriction.

Quantity kind and unit meaning are separate. Validate finite/order-valid values, both
interval endpoints, unit identity and uncertainty before comparison. The local RM candidate
uses exact mass-fraction conversion: 1 mg/kg = 0.000001 kg/kg. Pressure conversion is not
mass-fraction evaluation. No implicit tolerance or dimensionality-only equivalence is allowed.
Unsupported quantity/mapping semantics yield not established; proven violations contradict.

The RM scope checks the estimate x within inclusive [50,500] mg/kg. Calibration capability
floors, optional customer uncertainty limits and conformity `x+U<=L` are distinct rules.
The RM baseline has no accreditation uncertainty ceiling. Unsupported asymmetric uncertainty
is not averaged. Accepted M1→M2 succession requires governed profile inputs; a self-asserted
issuer mapping cannot override an explicit-extension profile.

## Existing identifiers: legacy binding only

| Current namespace or term | Status |
| --- | --- |
| `http://qudt.org/vocab/quantitykind/Pressure` and `MassFraction` | Existing QUDT quantity identifiers; retain only in an explicitly named legacy/alternative binding |
| `http://qudt.org/vocab/unit/` | Existing legacy unit vocabulary; no presumed equivalence with another ecosystem |
| `https://w3id.org/qi-vc/terms/v1/matrix/CuZn39Pb3` and `CuZn40Pb2` | Repository placeholders, not institutional governance |
| `https://w3id.org/qi-vc/terms/v1/element/As` | Legacy property placeholder |
| `https://w3id.org/qi-vc/terms/v1/method/EURAMET-cg-17` | Legacy method placeholder |
| `https://w3id.org/qi-vc/terms/v1/form/disc` | Legacy form placeholder |

The existing contexts use fields such as `quantityKindIri`, `matrixIri`, `methodIri`,
`propertyIri`, `formIri` and plural constraint fields. They are not universal core vocabulary.
Legacy exact-equality regression tests remain useful, but their presence does not establish
record-complete containment or full numerical RM scope.

## Adding a binding term

Use an exact validated external term where available, with version/source provenance.
Retain native DCC/D-SI XML and only claim SIS/SIRP support after a pinned mapping is
validated. Otherwise use an explicitly local experimental `.example` namespace, define
its meaning and safe context expansion, and add witness-bearing tests. Do not continue
minting unreviewed identifiers under an external institution's namespace or invent
plausible SIS terms. The core does not implement a general ontology reasoner.
