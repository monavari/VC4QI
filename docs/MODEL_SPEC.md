# VC4QI — Model Spec (developer extract of the manuscript, §4–§8)

This is the normative model the implementation must satisfy, extracted from the companion paper and organized for coding decisions. It reflects the **locked v2.1 target** (three relations, no `role`, unprefixed context-mapped values), so it is consistent with `RECONCILIATION_TASK.md`. Section references (e.g. §6.3) point back to the manuscript. The full paper's intro/background/agenda (§1–§3, §9–§10) are omitted — they are not decision-relevant for the code. Figures that are diagrams are described in text; Figure 3 is reproduced as JSON.

---

## 1. Gaps and boundary conditions (§4) — what each mechanism is for

Three **structural gaps** the model closes, and five **boundary conditions** it does not (they depend on infrastructure/institutions/governance):

| ID | Name | Meaning |
|---|---|---|
| **G1** | Scope binding | The claim must be checkable against the structured scope that authorizes it (closed structurally; semantic half is B5). |
| **G2** | Selective disclosure | Present a verifier-specific subset while retaining cryptographic assurance over that subset. |
| **G3** | Recursive composition | Authorizing/supporting credentials verifiable recursively as one bundle. |
| B1 | Status currency (incl. historical) | Freshness infra required; also historical status at a past issuance date. |
| B2 | Identifier resolution | Reachable, plural trust registries (accreditation MRA, CIPM, scheme/legal). |
| B3 | Trust-anchor governance | Institutional, not technical — who may be a trust anchor. |
| B4 | Disclosure obligations | Holder disclosure operates beneath a lawful right to the full record. |
| **B5** | Semantic conformance | Scope inclusion is decidable only relative to a **governed computable scope semantics**. This is the deferred dependency; the code isolates it as a parameter, it does not solve it. |

**G2 detail (§4.2, §5.3):** QI artifacts are presented all-or-nothing today. The holder must be able to disclose a verifier-specific subset (e.g. one property of a multi-property RM certificate — value + expanded uncertainty only, hiding personnel/equipment/environment) while the seal's guarantees still hold over that subset. Mechanism: a disclosure-capable Data Integrity cryptosuite (`ecdsa-sd-2023`; BBS deferred). Operates **within B4** — it governs proportionate presentation to ordinary verifiers but never overrides a regulator's/accreditation body's lawful entitlement to the complete record.

---

## 2. Vocabulary (§6.2, Table 7) — authoritative

**Exactly three edge relations** (bare tokens, context-mapped via `@type: @vocab`):

- `authorizedBy` — issuance authorized by the referenced credential; **independent edge**, verified on its own terms, **no subset check**.
- `derivedFrom` — authority is a bounded projection of the referenced credential; **derived edge**, **triggers the derivation check** (subset).
- `supportedBy` — non-authorizing supporting evidence (a prior domain credential); verified recursively; **carries no `authorizationBasis`**.

**Authorization basis kind** (open code-list, six canonical values; on authorizing edges only):
`accreditation`, `legalMandate`, `notification`, `schemeAuthorization`, `recognition`, `operationalScope`. `kind` names the authority kind of the **referenced parent**.

Institutional variety (notification, recognition, …) is carried by `authorizationBasis.kind`, **not** by adding relations. Status lives on the standard `credentialStatus`, never as an edge. The relations are evidentiary descriptors, not runtime access grants.

**Edge object** (`CredentialEvidenceReference`): `id`, `type`, `relation`, `authorizationBasis` (authorizing edges only: `{ kind, issuerRole, … }`), `digestSRI` (integrity binding to the referenced credential). **No `role` field.**

A single credential can carry edges of both kinds at once (this is why a layer model fails): e.g. a product-safety mark is `derivedFrom` its accreditation (competence) **and** `authorizedBy` an independent scheme authorization (permission). The derivation check runs **per edge**, against the specific parent it references.

---

## 3. Verification function (§6.3)

A single recursive, memoized walk over an acyclic graph; returns `accept`/`reject`/`explain` with structured reason codes; cost O(|V| + |E|).

```
verify(domainCredential, policy):
  verify signature, temporal validity, and status of the domain credential
  resolve issuer identities through the appropriate trust registry
  collect referenced evidence (authorizing and supporting) via evidence edges
  check that the present evidence types satisfy the policy for this
    credential type, issuer role, jurisdiction, and scheme
  for each authorizing evidence edge:
    verify signature, temporal validity, and status of the referenced
      credential (current now, and valid at issuance where policy requires, B1)
    if the edge is DERIVED (derivedFrom): apply the derivation check --
      the child's constraints must be a subset of the referenced parent's scope
    if the edge is INDEPENDENT (authorizedBy): verify on its own terms
      against the recognized issuer; no subset check against accreditation
  check that the domain claim falls within the scope conferred by the
    operative evidence (scope-inclusion check)
  for each supporting domain credential: verify recursively and confirm references
  return accept / reject / explain
```

Two predicates do the real work; the split is the model's central honesty: the **derivation check** is structural and computable today; the **scope-inclusion check** is computable only relative to a settled scope semantics (B5).

---

## 4. Formal core (§6.5) — definitions to implement

**Evidence graph.** `G = (V, E)`. Each edge `e = ⟨u, v, r, b⟩` with `r ∈ {authorizedBy, derivedFrom, supportedBy}` and `b` a basis kind. `authorizedBy`/`derivedFrom` are authorizing; `supportedBy` is supporting. `G` is well-formed for root credential `d` iff it is **acyclic**, every `v` is **reachable from `d`**, and every `derivedFrom` edge carries **scope-bearing endpoints**. A duplicate reference to one credential is one vertex.

**Scope and the derivation order.** A scope `S` is a set of admissible records, each a tuple over dimensions: **(property, matrix, method/characterization approach, measurand range, uncertainty constraint, temporal validity)**. Each dimension carries a partial order `⪯ᵢ`:
- ranges → interval inclusion
- method / matrix → membership in an admitted set
- uncertainty → `≤` ceiling
- validity → interval containment

Define `S′ ⊑ S` ("S′ does not exceed S") iff every record of `S′` is dominated, dimension-wise under the `⪯ᵢ`, by some record of `S`. The **derivation check** on a `derivedFrom` edge `⟨u, v, …⟩` is exactly `scope(u) ⊑ scope(v)`. Independent edges carry no such obligation.

**Scope inclusion as a decision rule.** A claim `c = (property, matrix, method, value x, expanded uncertainty U)`. `in(c, S)` holds iff some record `s ∈ S` matches `c` on the categorical dimensions **and** the value satisfies `s`'s range **under the operative decision rule**. The boundary case is not a bare inequality: a value with `U` near a range bound is accepted/rejected only relative to a **guard band** and an acceptable probability of false acceptance (ISO/IEC 17025:2017 §7.8.6; JCGM 106; ILAC-G8). The decision rule is **not part of `G`** — it is a component of verifier/scheme policy, supplied to `in` at evaluation time. **`in` is the B5 boundary** — the framework establishes the verification logic, not the semantics that makes `in` computable in general.

**Policy.** A verifier policy `P` is a predicate over `(G, d)`. `P(G, d)` holds iff: `d`'s required authorizing relations and evidence kinds are present for its credential type/issuer role/jurisdiction/scheme; every `derivedFrom` edge satisfies `⊑`; `in(c_d, S_d)` holds under `P`'s decision rule; all required statuses are current (and historical status holds at issuance where `P` requires, B1); and every supporting edge resolves to a credential itself satisfying `P`. `P` is left abstract — candidate realizations are SHACL (graph-shape), Datalog/Rego (rules), and the request-layer query languages — but fixing one is profiling work, not part of the model.

**Properties (by construction).** *Soundness:* `verify(d, P) = accept ⇒ P(G, d)`. *Completeness:* `G` well-formed ∧ `P(G, d) ⇒ verify(d, P) = accept`. Both conditional on the decidability of `in` (B5). *Complexity:* with memoization over visited vertices, `O(|V| + |E|)` — a DPP referencing thousands of siblings is linear, each verified once.

---

## 5. Policy: what it decides, and the worked example (§6.4)

Three parties own different parts: the **credential** carries facts (claim values, structured scope, edges, status); the **profile** (owned by the scheme/domain community) fixes the required shape (which credential types/edge relations must be present, which `authorizationBasis` kinds are admissible, the scope vocabulary and computable semantics); the **verifier** holds the operative policy (selects a profile; sets the decision rule, freshness requirement, and accepted trust anchors). Outcome is binary `accept`/`reject` with a reason code — never a confidence score. A profile is a satisfiable shape constraint (expressible as SHACL or a presentation query), not a fixed graph; its structural half is expressible today, its value half waits on B5.

Worked policy (verifier = testing lab selecting a check standard):
```
require credentialType: ReferenceMaterialCertificate
require certifiedValue.property: As
require material.matrix: CuZn (brass)
require certifiedValue.expandedUncertainty <= 8 mg/kg (k=2)
require authorizing edge basis: accreditation, in-scope entry present
require status: current at verification, valid at issuance
decisionRule: simple acceptance, guard band = U (ISO/IEC 17025 7.8.6, ILAC-G8)
trustAnchors: accreditation MRA via Global ACI
```
Evaluated against a credential asserting `As = 178 ± 5 mg/kg`: property/matrix match, `5 ≤ 8`, value lies within the accredited range under the guard band, status current ⇒ **accept** with a reason trace. Had the uncertainty exceeded the ceiling, or the value sat within `U` of a range bound under a stricter guard band, the same evidence could yield **reject** — a policy decision, not arithmetic.

---

## 6. Canonical worked instance (§6.6, Figure 3) — target form

The reference-material certificate (node), with one authorizing edge to its operational-scope parent. Shown in the locked v2.1 form (unprefixed values, no `role`):

```json
{
  "@context": ["https://www.w3.org/ns/credentials/v2", "..."],
  "type": ["VerifiableCredential", "ReferenceMaterialCertificate"],
  "issuer": "did:web:rm-producer.example",
  "validFrom": "2026-02-01T00:00:00Z",
  "credentialSubject": {
    "material": { "matrix": "CuZn39Pb3 (leaded brass)" },
    "certifiedValue": {
      "property": "As", "value": 178.0, "unit": "mg/kg",
      "expandedUncertainty": 5.0, "coverageFactor": 2,
      "scopeRef": "scope-entry-As-CuZn"
    }
  },
  "evidence": [{
    "type": "CredentialEvidenceReference",
    "relation": "authorizedBy",
    "id": ".../credentials/opscope/77",
    "authorizationBasis": { "kind": "operationalScope", "issuerRole": "referenceMaterialProducer" },
    "digestSRI": "sha256-9f2c1a0b..."
  }],
  "credentialStatus": { "type": "BitstringStatusListEntry" },
  "proof": { "type": "DataIntegrityProof" }
}
```
> The repo uses a richer DRMD-aligned `credentialSubject` (materials[]/materialPropertiesList[]); keep that structure and map these values into it, including `scopeRef`. Figure 3 above is the simplified view.

**The three-credential chain (Figure 4):** `AccreditationAttestation` (NAB issuer; scope: As in CuZn39Pb3, range, admitted methods) ←`derivedFrom` (`kind: accreditation`, subset-checked)— `OperationalScope` (self-issued; As in CuZn, subset of accreditation, tightened uncertainty ceiling) ←`authorizedBy` (`kind: operationalScope`)— `ReferenceMaterialCertificate` (above). Expected: derivation check confirms op-scope ⊑ accreditation; scope-inclusion confirms 178.0 inside the accredited range under the decision rule ⇒ accept. A value outside the range ⇒ reject with a distinct reason code. The certificate also carries `supportedBy` edges to characterization/homogeneity/stability study credentials (the recursive case, Profile B+E).

---

## 7. Profiles (§7, Figure 5) — graph shapes per domain

Edge styles in the figure: solid = derived (subset-checked), dashed = independent (own terms), dotted = supporting.

| Profile | Use case | Shape |
|---|---|---|
| **A. Accreditation-only** | Standard accredited lab, stable scope (DCC) | `Domain VC` —`authorizedBy`→ `Accreditation` |
| **B. Accreditation + operational scope** | Flexible-scope issuance; the worked `As = 178` case | `RM cert` —`authorizedBy`→ `Operational scope` —`derivedFrom`→ `Accreditation(RM)` |
| **C. Legal / metrology authority** | NMI / statutory; no accreditation root | `Statutory DCC` —`authorizedBy` (`kind: recognition`/`legalMandate`)→ `Legal mandate (NMI)` |
| **D. Notification / scheme** | Notified body; product-safety marks (GS) | `issuing-scope VC` —`derivedFrom`→ `Accreditation` **and** —`authorizedBy` (`kind: schemeAuthorization`)→ `Scheme auth.`; `GS certificate` authorized by the issuing-scope VC. **Independent authority composed with accreditation.** |
| **E. Recursive domain evidence** | DPP container; test→calibration→RM | `DPP container` —`supportedBy`→ {`CE doc`, `Test report`, `RM cert.`}, each retaining its own authority chain |

The architecture generalizes because authority is typed edges over credentials, not a fixed hierarchy: one grammar of derived/independent/supporting edges. Only Profile B is instantiated in the paper; the rest are illustrative pending per-domain validation (and Profile D is the new structural test vector in Phase 7).

---

## 8. Governance constraints that bind behavior (§8)

- **VCs represent authority; they do not create it.** A credential's `type` name confers nothing; meaning is fixed by issuer mandate, governing policy, referenced normative basis, and the verifier's trust registry.
- **Operational scope** is valid only as a derived, subset-checked projection; its institutional sufficiency (self-asserted vs. co-signed by the authorizing body) is a per-deployment governance choice.
- **Trust registry** is plural and layered (accreditation MRA via Global ACI; CIPM for metrology; scheme/legal authorities) — no single global root. Status via W3C Bitstring Status List.
- **Standards are normative references, not credentials** — they enter the graph as integrity-bound related resources (the basis for scope/methods/policy), never as an authorizing edge.
- **Legal effect vs. verifiability are distinct** (§8.5): a VC representation should align with, not replace, the eIDAS electronic seal; the open question is binding a VC data model and an eIDAS seal to the same attestation. (This is why the SD cryptosuite choice favors ECDSA/P-256 over BBS — seal compatibility.)
