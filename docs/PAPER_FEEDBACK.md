# Implementation feedback to the manuscript

Items where implementing the model surfaced a constraint, ambiguity, or
contradiction with a standard the paper relies on. Per research SOP, these are
recorded here so the manuscript can be reconciled with what the standards
actually require.

---

## F-1 — `digestSRI` / `digestMultibase` are already W3C VC 2.0 terms; do not shadow them

**Where:** `MODEL_SPEC.md` §2 (Table 7) names `digestSRI` as the integrity binding
on the `CredentialEvidenceReference` edge object. The repo's JSON-LD contexts
(`qi-rm.jsonld`, `qi-core.jsonld`, `qi-calibration.jsonld`) mapped both `digestSRI`
and `digestMultibase` to the project namespace (`qi:digestSRI`, `qi:digestMultibase`).

**Problem:** The W3C Verifiable Credentials v2 base context
(`https://www.w3.org/ns/credentials/v2`) **already defines** both terms, as
`@protected`:

- `digestSRI` → `https://www.w3.org/2018/credentials#digestSRI`
- `digestMultibase` → `https://w3id.org/security#digestMultibase`

Re-mapping them to `qi:` IRIs is a **protected-term redefinition**. It is silently
tolerated by the legacy `eddsa-rdfc-2022` path (which canonicalizes with JSON-LD
safe mode **off**) but is a hard error under any **safe-mode** processor — which
includes the `ecdsa-sd-2023` selective-disclosure cryptosuite that G2 requires.
More importantly, the qi-namespaced terms carry *different* semantics from the
standardized ones, so an edge's `digestSRI` would not mean what a standards-aware
verifier expects.

**Resolution (taken):** Drop the `digestSRI` / `digestMultibase` redefinitions from
the contexts and let them inherit the W3C definitions. This is the
standards-aligned reading and is what §2's intent ("integrity binding") actually
wants. Applied across **all three** contexts — `qi-rm.jsonld`, `qi-core.jsonld`,
and `qi-calibration.jsonld` — so every QI credential type expands clean under a
safe-mode processor and is SD-ready (verified: a DCC round-trips
issue→derive→verify under `ecdsa-sd-2023`).

**Suggested manuscript note:** state explicitly that edge integrity bindings use
the **W3C VC 2.0 `digestSRI` / `digestMultibase`** terms (not project-defined
ones), reinforcing the convergence argument.

---

## F-2 — Domain `name` / `description` collide with protected schema.org terms

**Where:** `qi-rm.jsonld` / `qi-calibration.jsonld` mapped `name` → `drmd:name`/
`dcc:name` and `description` → `drmd:description`/`dcc:description` at the top level
of the credential context. `qi-calibration.jsonld` additionally mapped `issuer` →
`dcc:issuer`, shadowing the W3C VC `issuer` (which is the issuing entity, not a
measurement's issuer — a genuine collision).

**Problem:** W3C VC 2.0 defines `name` → `https://schema.org/name` and
`description` → `https://schema.org/description` as `@protected`, and defines
`issuer` in the `VerifiableCredential` type-scope. Redefining them at credential
top level is again a safe-mode protected-term redefinition.

**Resolution (taken):** Remove the top-level redefinitions and use the standard VC
meanings — `name` and `description` are plain human-readable labels, so the
schema.org semantics are correct, not merely tolerable; `issuer` is the W3C VC
issuer. Domain-specific terms that genuinely differ (e.g. `materials`,
`materialPropertiesList`, `measurementResults`, `expandedUncertainty`) keep their
`drmd:`/`dcc:`/`qi:`/`si:` mappings, which do not collide with any protected W3C
term.

**Suggested manuscript note:** no model change needed; just confirm that
subject-level labels and the credential `issuer` reuse standard VC terms.

---

## F-3 — G2 requires JSON-LD safe-mode-clean contexts (general)

**Observation:** Selective disclosure (`ecdsa-sd-2023`, and BBS likewise)
canonicalizes in JSON-LD **safe mode**, which rejects *any* dropped/undefined
property and *any* protected-term redefinition. The legacy whole-credential path
hid context defects because it runs with safe mode off. Therefore **G2 imposes a
real, previously-latent requirement**: every term used in a credential must expand
to an absolute IRI under a safe-mode processor.

**Implication for the paper:** This is worth a sentence in the §5.3 / §8 discussion
— adopting a disclosure-capable cryptosuite is not just a proof-format swap; it
disciplines the vocabulary to be fully and correctly defined against the W3C base
context. F-1 and F-2 are instances of this.

---

## F-4 — Manuscript prose/figures must use the locked v2.1 edge form (no `qi:` prefix, no `role`)

**Where:** Surfaced during Phase 8 release prep. The repo `README.md` carried an
evidence example that still showed the **pre-v2.1** form: a `qi:`-prefixed relation
(`"relation": "qi:authorizedBy"`), a `"role": "authorizing"` field, and a
`qi:`-prefixed basis kind (`"kind": "qi:accreditation"`).

**Problem:** The locked v2.1 model (`MODEL_SPEC.md` §2, Table 7) defines edges as
**three bare context-mapped tokens** (`authorizedBy`, `derivedFrom`, `supportedBy`)
via `@type: @vocab`, with **no `role` field** (the relation already encodes
authorizing-vs-supporting) and **bare** basis kinds. Any place in the manuscript
that still depicts the prefixed/`role`-bearing form is now inconsistent with the
implementation and with §2.

**Resolution (taken):** Updated the README example to the bare-token form and
removed `role`. No code or schema change — this is documentation drift, fixed.

**Suggested manuscript note:** audit §6.2 prose and any edge-object figures/listings
to ensure they show the bare-token relations, the six bare basis kinds, and **no**
`role` field, matching Figure 3 / §2 as implemented. This is editorial alignment,
not a model change.

---

## F-5 — §6.4 policy-expressibility claim overstated; now being addressed in implementation

**Where:** §6.4 states that the structural half of a policy "is expressible today" as
a SHACL shape or a presentation query (DCQL / DIF Presentation Exchange).

**Problem:** At the time of the manuscript review (2026-06-08), the
`policyToDcql` and `policyToPresentationDefinition` translators emit only credential
type and evidence relation. They do not emit `authorizationBasis.kind` constraints or
handle `anyOf` alternation. `validatePresentationSubmission` checks descriptor
presence only — it does not evaluate field-value predicates. A wallet receiving the
DCQL output of `policyToDcql` cannot determine which `authorizationBasis.kind` is
required, so the claim is only partially true in v0.3.0.

**Resolution (in progress):** Added to project scope. The translators will be
completed to emit `authorizationBasis.kind` as a claims/filter constraint and handle
`anyOf`; `validatePresentationSubmission` will evaluate field values against the three
known path patterns (`$.type`, `$.evidence[*].relation`,
`$.evidence[*].authorizationBasis.kind`) without an external JSONPath dependency.
This is TypeScript only — Python parity for presentation query is not in scope.

**Suggested manuscript note:** Update §6.4 in two ways:
1. Add a sentence scoping the claim: "the query-language translations cover credential
   type, evidence relation, and authorization basis kind; guard-band evaluation (B5)
   and trust-registry resolution (B2) remain outside the query layer."
2. Once the updated translators are released, cite the DCQL output of
   `policyToDcql(profile)` as a concrete demonstration that the structural policy half
   is machine-expressible.
