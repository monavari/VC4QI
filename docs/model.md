# Reliance model

This page is the normative model of VC4QI: what a verifier must check before it relies
on a Quality Infrastructure (QI) credential. The new evaluator implements it for the
three experimental bindings (reference material, calibration and GS certification);
see [API](api.md) and [status](status.md). The superseded v0.3 graph model is at tag
[`v0.3.0`](https://github.com/monavari/VC4QI/tree/v0.3.0).

## 1. Thesis

QI trust rests on institutional authority and on evidence. Credentials represent that
authority; they do not create it. The verifier, not the issuer, selects the profile
that decides what it can rely on, and scope decisions need accepted semantics and a
supported evaluation procedure.

| Layer | Responsibility | Not included |
| --- | --- | --- |
| Core | Obligations, three-state composition, routes, witnesses, resource accounting | Domain vocabulary or QI taxonomies |
| Bindings and profiles | Carriers, meaning, authority, scope, time and decision rules | Guessing schemas, or letting an issuer weaken the verifier's requirements |
| Reference software | TypeScript and Python APIs, resolvers, reports and the demo | Treating API names as credential vocabulary |
| Fixtures | Deterministic fictional authorities and RM, DCC and GS examples | Claims of real accreditation, endorsement or interoperability |

The core uses small interfaces and deterministic, terminating evaluators. It needs no
ontology reasoner, no unrestricted rules engine and no issuer-supplied code.

## 2. Credentials, carriers and bindings

VCDM 2.0 supplies the carriers. A **binding** says exactly how a verifier interprets
them for one domain; see [bindings](bindings.md).

| Carrier | Role in a binding |
| --- | --- |
| `@context` | Versioned JSON-LD meaning, processed safely, with no redefinition of protected terms |
| `type`, `credentialSchema` | Declared types and validation; the verifier controls dispatch |
| `termsOfUse` | A recognized authorization policy that names the authorizing credential |
| `evidence` | Recognized supporting information (support, never authority) |
| `relatedResource` | Integrity of referenced resources (SHA-384 SRI over exact bytes) |
| `credentialStatus` | The selected status mechanism, with an authorized signer and freshness |

A type named like a trust policy has no authority unless the binding interprets it.
The core has no universal edge or basis vocabulary: the v0.3 `authorizedBy`,
`derivedFrom`, `supportedBy`, `authorizationBasis.kind` and mandatory `scopeRef` are not
carriers. Provenance such as `prov:wasDerivedFrom` establishes
neither permission nor containment.

Every relation the verifier relies on needs a protected source pointer, or an
independently authenticated discovery fact, plus the rule that interprets it. A
credential merely added to a presentation cannot manufacture an endorsement.

Verify the original secured bytes before reading any business fact. Pin contexts and
schemas, and reject protected-term redefinition or silently dropped data. Byte digests,
proof transforms and RDF canonicalization follow their own specifications. Native XML
keeps its own signature; a JSON wrapper cannot inherit it. Unknown optional annotations
are inert, while missing required meaning blocks reliance.

Internal names such as node-use, route, witness, `established` and `not_run` are
software terms, not credential terms.

## 3. Requests, states and results

A **reliance request** names the target, the selected claims, purpose, profile and
version, trust configuration, evaluation and activity times, supplied evidence,
resolver budgets and, optionally, a conformity requirement and decision rule. The
verifier never switches to a weaker profile because the issuer named one, and an empty
claim selection never passes by accident.

| State | Meaning |
| --- | --- |
| `established` | Validated evidence supports the predicate under the selected profile |
| `contradicted` | A supported check shows a mismatch or violation |
| `not_established` | Evidence is missing, unsupported, unresolved, stale or cut off by a budget |

`not_run` is execution metadata, not a fourth state, and never satisfies an obligation.

| A | B | A AND B | A OR B |
| --- | --- | --- | --- |
| established | established | established | established |
| established | contradicted | contradicted | established |
| established | not_established | not_established | established |
| contradicted | contradicted | contradicted | contradicted |
| contradicted | not_established | contradicted | not_established |
| not_established | not_established | not_established | not_established |

Both operators are commutative. OR is contradicted only when every alternative is, and
an exhausted search budget never proves that all alternatives failed.

A result keeps separate: per-artifact verification, per-claim authorization, support,
optional conformity and the overall decision. The required conjunction gives `accept`
when established, `reject` when contradicted and `not_established` otherwise.
Conformity that was not requested is excluded; conformity that was blocked is `not_run`.
Document verification (`verified: true`) never implies reliance, and neither does the
absence of failures.

Results carry witnesses: request and profile identity, selected claims, the route and
scope record used, a gate-numbered trace (node-use, predicate, state, reason, source
paths), resource observations, arithmetic and limitations. Unsupported, skipped and
simulated mechanisms are reported, never hidden.

## 4. The seven gates

An artifact's identity is separate from each **use** of it (a node-use: content,
role, purpose, profile and time). A fact is accepted only after the lower gates for
that use hold.

| Gate | Obligation |
| --- | --- |
| 0 | Plan and structure: accepted purpose, profile and structure |
| 1 | Resolution and resource integrity: the exact representation and version, with no conflicting content |
| 2 | Protection: a real proof by a key the issuer authorized |
| 3 | Temporal and status: validity, status and freshness at the relevant time |
| 4 | Mapping within the supported domain: supported identifiers, quantities and mappings |
| 5 | Authority and scope: principal, rights, complete routes, containment, restrictions |
| 6 | Support and conformity: independent applicable support, then requested conformity |

Parsing may precede protection, but discovering a candidate is not accepting it.
Failed objects stay inert: they grant nothing, poison no cache and trigger no
uncontrolled I/O. Required dependencies need a well-founded justification: a cycle on
the active path is not established, shared sub-graphs are reused, and depth limits are
budgets, never trust anchors.

## 5. Authority

Bind the grantee of each grant to the actor exercising it, and check the permission for
the activity, claim and time separately from key authorization. A configured trust
anchor supplies only its configured purpose; a self-signature or a familiar name is not
an anchor.

```text
authorized(claim) = applicable global restrictions hold
                    AND OR(complete route 1, complete route 2, ...)
complete route    = AND(every required basis, bound to actor, activity, time and claim)
```

The verifier's **profile** fixes the permitted routes, restrictions, anchors and their
purposes, required support, time and security rules, and decision rules. A fictional
example is `(competence AND scheme permission) OR statutory authority`; it is an
example, not a universal legal rule. Partial routes never combine into a synthetic
route. A failed unused alternative is diagnostic only, while an applicable global
restriction (such as an accreditation suspension) applies outside the OR.

A **bounded operational scope** (a projection) also needs permission to maintain the
scope and containment within its parent. Independent grants are not automatically
bounded by an accreditation. This is how a flexible accreditation scope works in
practice: the accreditation names a broad field, and the producer or laboratory keeps
its own, narrower list within it.

## 6. Scope, quantities and conformity

One complete scope record must cover every dimension a basis owns. Each projected
record must fit inside one parent record, and adjacent records never merge into a
union. Different claims may use different records, and a later passing group never
erases an earlier failure. A missing governed method cannot bypass a method
restriction.

Compare governed identifiers or accepted equivalences, never display labels: As and
Ash, or CuZn39Pb3 and CuZn40Pb2, are distinct. An accreditation names sets, as its
annex does: in RM, A says non-ferrous metals and alloys, element contents, solid forms,
and H homogeneity studies of element contents in non-ferrous metals and alloys. A set
covers exactly the concepts the binding's governed hierarchy places under it
(`scopeAndMapping.broader` in the manifest, `skos:broader` applied transitively:
CuZn39Pb3 under copper alloys under non-ferrous metals and alloys, discs under solid
forms, As, Cu, Zn and Pb under element contents). The hierarchy applies to matrix,
form and property in containment, claim coverage and study scope, never runs
downward, and without it a set contains nothing but itself; methods and quantity kinds
stay exact. Validate quantity kind, unit, finite
ordered bounds and uncertainty before comparing, and use exact decimal arithmetic in
both languages with no hidden tolerance. Unsupported conversions yield
`not_established`; proven violations are `contradicted`.

Three rules stay separate:

- a calibration capability floor (CMC), when the profile applies it: reporting an
  uncertainty below the admitted capability contradicts scope;
- optional customer uncertainty limits;
- conformity under the selected decision rule, for example `x + U <= L`.

The reference-material scope has no accreditation uncertainty ceiling. Asymmetric
uncertainty is not silently averaged, and method succession (M1 to M2) needs an explicit
profile rule, never an issuer's own mapping.

**Worked example.** Fictional producer accreditation A covers the element contents of
the brass (As, Cu, Zn, Pb) from 0.1 mg/kg to 997 g/kg with methods M1 and M2, shaped
after a flexible-scope annex row ("non-ferrous metals and alloys, element contents"). The
producer's operational scope O, its own list within that scope, covers arsenic from 50 to
500 mg/kg with M1 only. Certificate D (CuZn39Pb3 brass, arsenic, M1, U = 5 mg/kg, k = 2) needs a
same-batch study S by a laboratory with its own authority H. The verifier asks for
`x + U <= 200 mg/kg`:

| x | Scope | Conformity | Decision |
| --- | --- | --- | --- |
| 178 | 50 ≤ 178 ≤ 500 | 183 ≤ 200 | accept |
| 197 | in scope | 202 > 200 | reject for conformity (authorization established) |
| 520 | 520 > 500 (O) | not run | reject for scope |

195 + 5 = 200 passes the inclusive rule, and 500 is in scope. M2 cannot bypass O just
because A admits it. These cases run on signed fixtures; see [use cases](use-cases.md).

## 7. Support and external answers

Required support must be valid and authorized for its own role, then applicable to the
requested batch, instrument, activity, method and time. A genuine report about another
batch contradicts applicability; a missing one leaves it not established. Matching
identifiers prove a digital match, not that a physical sample was not swapped.

An authority-issued answer (not implemented) can establish one specific predicate. Its
content must be bound to the exact claim, grantee, activity, scope version, profile and
time, and the signer's authority must be established independently. A point answer
cannot prove that a whole scope is contained.

Recognition (RM, experimental) answers whether a verifier that trusts a recognizer
should accept a grant's issuer, nothing more; it grants no authority. An accreditation
body's authority is its national appointment, which a verifier that anchors the body
trusts directly. Each recognition is its own credential: R, issued by an arrangement
anchor (a fictional Global ACI stand-in) about one accreditation body, in the shape of a
W3C Recognized Entities credential (Working Draft of 12 November 2026) with a single
subject, the action in `recognizedTo`, the main scopes in `registration`, and its own
revocation and suspension entries. Every upward link is a `termsOfUse` entry, followed
and pinned the same way; its type says what it means: `IssuedUnderPolicy`
(`authorizationCredential`) for a grant, `RecognitionPolicy` (`recognitionCredential`)
for a recognition. A and H carry a `RecognitionPolicy` naming R, pinned by digest in
`relatedResource`, and mirror it as `issuer.recognizedIn`, which must then name the same
credential. A verifier whose profile anchors the accreditation body stops there, and R
never decides for it. A verifier whose profile instead anchors the recognizer for the
recognizer purpose (`bindingRules.recognition`: recognizer purpose, required action and
the main scope per grant purpose) follows the link: R establishes the grant's issuer
only if it is usable and not suspended, its issuer is an anchor for the recognizer
purpose, its subject is the grant's issuer with stated actions, one action is the
required action recognized by its issuer and in force at the activity time, and its
registration carries the grant's main scope (activity and normative document, compared
exactly). A recognition of another body, or without that main scope, contradicts; a
missing recognition, entry or time is not established. R then joins the witness path.
The profile names no recognition, and a recognition that nothing in the chain names
confers nothing. Recognition does not replace QI scope, containment, restrictions,
support or conformity: D520 is recognized and still out of scope. Suspending one body's
recognition is one status bit; nothing is re-issued. The per-recognition shape and the
`RecognitionPolicy` link are this binding's resolution, not traversal alone.

## Standards

[VCDM 2.0](https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/) (15 May 2025)
provides the carriers; this project's bindings supply the QI interpretation. The
[Recognized Entities Working Draft](https://www.w3.org/TR/2026/WD-vc-recognized-entities-1.0-20261112/)
(12 November 2026) is experimental.
