# Reliance model

This page is the normative model of VC4QI: what a verifier must check before it relies
on a Quality Infrastructure (QI) credential. The new evaluator implements it for the
three experimental bindings (reference material, calibration and GS certification).
The default public API is still the legacy verifier until the API switch in phase I5;
see [status](status.md).

The model summarizes the
[standards-first requirements](plans/standards-first-handover-2026-09-21.txt), which
resolve any ambiguity. The superseded manuscript-v2.1 model is kept in
[history](history/README.md).

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
The core has no universal edge or basis vocabulary: the legacy `authorizedBy`,
`derivedFrom`, `supportedBy`, `authorizationBasis.kind` and mandatory `scopeRef` belong
to the legacy profile only. Provenance such as `prov:wasDerivedFrom` establishes
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
| 1 | Identity: the exact representation and version, with no conflicting content |
| 2 | Protection: a real proof by a key the issuer authorized |
| 3 | Time: validity, status and freshness |
| 4 | Meaning: supported identifiers, quantities and mappings |
| 5 | Authority and scope: principal, rights, complete routes, containment, restrictions |
| 6 | Support and decision: independent applicable support, then requested conformity |

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
bounded by an accreditation.

## 6. Scope, quantities and conformity

One complete scope record must cover every dimension a basis owns. Each projected
record must fit inside one parent record, and adjacent records never merge into a
union. Different claims may use different records, and a later passing group never
erases an earlier failure. A missing governed method cannot bypass a method
restriction.

Compare governed identifiers or accepted equivalences, never display labels: As and
Ash, or CuZn39Pb3 and CuZn40Pb2, are distinct. Validate quantity kind, unit, finite
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

**Worked example.** Fictional producer accreditation A covers [50, 500] mg/kg with
methods M1 and M2. The producer's operational scope O covers the same range with M1
only. Certificate D (CuZn39Pb3 brass, arsenic, M1, U = 5 mg/kg, k = 2) needs a
same-batch study S by a laboratory with its own authority H. The verifier asks for
`x + U <= 200 mg/kg`:

| x | Scope | Conformity | Decision |
| --- | --- | --- | --- |
| 178 | 50 ≤ 178 ≤ 500 | 183 ≤ 200 | accept |
| 197 | in scope | 202 > 200 | reject for conformity (authorization established) |
| 520 | 520 > 500 | not run | reject for scope |

195 + 5 = 200 passes the inclusive rule, and 500 is in scope. M2 cannot bypass O just
because A admits it. These cases run on signed fixtures; see [use cases](use-cases.md).

## 7. Support and external answers

Required support must be valid and authorized for its own role, then applicable to the
requested batch, instrument, activity, method and time. A genuine report about another
batch contradicts applicability; a missing one leaves it not established. Matching
identifiers prove a digital match, not that a physical sample was not swapped.

An authority-issued answer (planned for I6) can establish one specific predicate. Its
content must be bound to the exact claim, grantee, activity, scope version, profile and
time, and the signer's authority must be established independently. A point answer
cannot prove that a whole scope is contained. The optional Recognized Entities adapter
pins the 6 September 2026 Working Draft; recognition does not replace QI scope,
restrictions, support or conformity.

## 8. Security, time and disclosure

- Every required credential and security resource gets the binding's real checks. A
  constant key resolver is not identity evidence, and proof skipping is simulation.
- Resolution is bounded (origin, redirects, media type, size, decompression, time).
  Static resources are pinned by digest; status observations keep their time.
- Evaluation, activity, issuance, validity, proof and status times are distinct.
  `validFrom` is not issuance time. The baseline answers current reliance; historical
  questions need historical evidence and are otherwise refused.
- Evidence may be supplied as a flat bundle or retrieved within budgets; extra
  credentials confer nothing. Selective disclosure must keep every fact the request
  needs. See [applications](applications.md).

## 9. Boundaries

VC4QI specifies and demonstrates the conditions for QI reliance. It does not create
institutional authority or prove physical truth. It does not require a wallet, LIMS,
verifier service, timestamp service, ontology reasoner, rules engine or live
institutional integration, and it claims no EBSI, EUDI, eIDAS or legal conformance.
Recognition, signatures, query matching and schemas each establish only their own
predicates; none alone establishes a reliance request.

Decidability holds only under stated conditions: accepted mappings, terminating
evaluators, finite route search and well-founded dependencies. A timeout is not
falsity, and cost includes route search, cryptography, schema and RDF work and
resolution, not traversal alone.

## Standards

[VCDM 2.0](https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/) (15 May 2025)
provides the carriers; this project's bindings supply the QI interpretation. The
[Recognized Entities snapshot](https://www.w3.org/TR/2026/WD-vc-recognized-entities-1.0-20260906/)
is experimental.
