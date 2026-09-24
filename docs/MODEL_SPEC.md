# VC4QI — standards-first reliance model

**Normative target, 22 September 2026. The runtime migration is not implemented.**
This developer contract summarizes the [supplied requirements](plans/standards-first-handover-2026-09-21.txt).
That source resolves ambiguity; later user instructions take precedence. It is not
an extract with verified section numbering from a supplied manuscript. See
[implementation status](IMPLEMENTATION_STATUS.md) for execution evidence and
[the historical model](history/model-spec-manuscript-v2.1.txt) for the old contract.

## 1. Thesis and layers

QI trust rests on institutional authority and evidence relationships. Credentials
represent those relationships without creating authority. A verifier-selected
profile determines reliance. Scope decisions require accepted semantics and
supported evaluation procedures.

| Layer | Responsibility | Exclusion |
| --- | --- | --- |
| Minimal core | Obligation scheduling, states, route composition, witnesses, resource accounting | Universal QI credential properties or domain taxonomies |
| Bindings and profiles | Native carriers, meaning, authority, scope, time and decision modules | Schema guessing or issuer-selected weakening of verifier requirements |
| Reference software | TS/Python APIs, caches, resolvers, reports and UI | Treating API names as standard credential vocabulary |
| Fixtures and applications | Deterministic fictional authorities, RM/DCC/scheme examples | Real accreditation, endorsement or interoperability claims without evidence |

Use small interfaces and terminating deterministic evaluators. No general ontology
reasoner, unrestricted rules engine or issuer-supplied executable code is required.

## 2. Secured facts and bindings

The core requires no universal serialized relation or basis vocabulary. In the
baseline binding, recognized `termsOfUse` policies identify authorization evidence;
recognized `evidence` entries supply non-authorizing support. `relatedResource`
provides the selected resource-integrity mechanism, and `credentialSchema` supplies
applicable validation. VCDM alone does not define QI authority semantics. A conformance
declaration does not oblige the verifier to accept the declared profile.

Each accepted binding specifies exact IRIs, source paths, versions, cardinalities,
principal/permission rules and evaluation semantics in a manifest. See
[BINDING_MANIFEST](BINDING_MANIFEST.md) and [VOCABULARY](VOCABULARY.md). Local fixture
terms are explicitly experimental; example vocabulary is not production conformance.

Every operative relation has a protected source pointer or independently authenticated
authoritative discovery fact, plus the adapter and rule that interpret it. An arbitrary
credential added to a VP or a holder-drawn graph cannot manufacture an endorsement.
An independently authenticated grant may establish a relation without a custom leaf
pointer when the accepted discovery rule binds it to the actor and activity.

Verify the original secured representation before mapping its business facts. Pin
contexts/schemas; reject protected-term redefinition or lost decision-relevant data.
Byte digests, suite transforms and RDF canonicalization follow their own specifications;
there is no invented generic JSON digest. Preserve native XML; a wrapper's integrity
binding does not verify XMLDSig or transfer its signature to JSON. When multiple
representations are relied upon together, establish decision-relevant agreement.
Unknown optional annotations remain inert; unresolved required meaning cannot satisfy
an obligation. Base-format validity and supported-profile sufficiency are distinct.

Legacy `authorizedBy`, `derivedFrom`, `supportedBy`, `authorizationBasis.kind` and
custom mandatory `scopeRef` are not the new core wire contract. Provenance such as
`prov:wasDerivedFrom` establishes neither maintenance permission nor containment.
A legacy adapter must be explicitly selected, verify the original representation,
retain provenance, and never claim a transformed credential retains its signature.

## 3. Requests, states and results

A request specifies target identity, selected claims, purpose, accepted profile/version,
trust configuration, evaluation/activity times, supplied evidence, resolver policy and
budgets, and any conformity requirement/decision rule. Dispatch follows verifier policy,
including deterministic composition of multiple contexts/types/schemas. Never select a
weaker profile solely because the issuer named it. Empty claim selection needs an
explicit supported meaning; the baseline rejects accidental vacuous acceptance.

| Semantic state | Meaning |
| --- | --- |
| `established` | Adequate validated evidence supports the predicate under the selected profile. |
| `contradicted` | A supported check establishes a mismatch or violation. |
| `not_established` | Missing, unsupported, unresolved, stale or budget-limited evidence prevents establishment. |

`not_run` is separate execution metadata and never satisfies an obligation. Invalid
inputs may be contradicted when supported validation establishes invalidity; unavailable
interpretation remains not established. A missing required principal is insufficient;
a proven different principal contradicts binding.

| A | B | A AND B | A OR B |
| --- | --- | --- | --- |
| established | established | established | established |
| established | contradicted | contradicted | established |
| established | not_established | not_established | established |
| contradicted | contradicted | contradicted | contradicted |
| contradicted | not_established | contradicted | not_established |
| not_established | not_established | not_established | not_established |

The operators are commutative. All alternatives must be contradicted for OR to be
contradicted; exhausted search budgets cannot establish that all alternatives failed.
Required conjunctions must all be established for acceptance. Empty routes do not
establish authority unless an explicit profile rule defines a valid anchor-only case.

Results separate per-artifact verification, per-claim authorization, support, optional
conformity and overall reliance. A required conjunction yields `accept` when established,
`reject` when contradicted, otherwise `not_established`. Not-requested conformity is
explicitly excluded from that conjunction; blocked conformity is recorded as not run.
A document-level `verified: true` does not imply reliance. Uppercase diagnostic/display
labels may remain, but error counts and absence of FAIL are never acceptance logic.

Include request/profile identity, selected claims, complete route and record witnesses,
gate/node-use/predicate/state/reason, original source paths and transformations,
retrieval/status observations, arithmetic and resource usage. Report unsupported,
skipped and simulated mechanisms. Partial coverage must identify exactly which claims
are established, without accepting an entire multi-claim credential by implication.
HTTP surfaces, if implemented, document semantic outcomes separately from operation
errors and use RFC 9457 Problem Details for those errors.

## 4. Compilation and seven gates

Artifact identity is separate from a use of that artifact. A node-use includes secured
content identity, role, purpose, profile/processing plan and time context. Accepted
business facts must depend on completed lower gates for that use.

| Gate | Obligation | Evidence |
| --- | --- | --- |
| 0 | Plan and structure | Accepted purpose/profile and supported native structural constraints |
| 1 | Resource identity | Exact required representation/version; no conflicting immutable identity |
| 2 | Protection | Real proof and authorized key/controller relationship; authenticated security resources |
| 3 | Temporal applicability | Relevant validity, status, freshness and historical evidence |
| 4 | Meaning and mapping | Supported identifiers, quantities and decision-preserving native interpretation |
| 5 | Authority and scope | Principal/rights, complete routes, operational containment and restrictions |
| 6 | Support and decision | Independently justified applicable support and requested conformity |

Select the plan, parse bounded inputs and discover candidates; then verify original
artifacts, map protected facts, compile obligations and recursively discharge required
node-uses. Establish complete routes and restrictions per claim, required applicable
support, and finally requested conformity when prerequisites are established.
Parsing and suite transforms can precede protection; candidate discovery is not acceptance.
Diagnostic evaluation of failed objects remains inert and cannot grant authority, poison
accepted caches or trigger uncontrolled I/O.

Detect content conflicts for an immutable identity without last-write-wins merging.
Account for legitimate cryptosuite-derived SD representations. Keep verified-artifact
caches separate from reliance caches keyed by purpose/profile/role/times/trust identity
and dynamic-evidence freshness. Preserve distinct time-stamped status observations.

All recursively required dependencies, including support and attestation authority,
need a well-founded justification. Detect cycles on the active evaluation stack;
a required circular justification is not established. A shared DAG is reusable under
compatible context. Unused provenance cycles do not invalidate independent complete
routes. Depth limits are resource budgets, never trust anchors.

## 5. Authority composition

Bind the authoritative grant's grantee to the actor exercising the right. Check
permission to issue/grant for the relevant activity, claim and time, independently
from key authorization. Multiple subjects require the applicable grant, not the first
subject. Identity equivalence must be governed input, not name/brand/URL similarity.

Operational projection additionally requires permission to maintain/project scope and
containment within its parent. Independent grants are not automatically subset-bounded
by accreditation. A configured anchor supplies only its configured authority and purpose;
a self-signature or familiar institutional name is not an anchor.

```text
authorized(claim) = applicable_global_restrictions_hold
                    AND OR(complete_route_1, complete_route_2, ...)
complete_route = AND(each required basis established for actor/activity/time/claim)
```

One complete record must cover every dimension owned by a basis. Complementary bases
may legitimately govern different dimensions; check all overlapping restrictions.
Never combine fragments of distinct alternative routes into a synthetic route.
A failed unused alternative is diagnostic, while an applicable global suspension applies
outside OR. An unrelated revoked credential is not an invented global restriction.

## 6. Scope, quantities and conformity

Accepted domain bindings define supported dimensions, missing/empty/unrestricted
semantics, interval inclusivity, units and orientation of restrictiveness. One whole
parent record must dominate each projected record; adjacent entries do not automatically
form a union. Different claims may use different complete records.

Use governed identifiers or accepted equivalence mappings, never display-label substrings.
Validate quantity kind, unit identity, magnitude, finite/order-valid bounds and uncertainty
metadata. Dimensional similarity does not imply quantity-kind equivalence. Unsupported
conversions or missing restricted dimensions cannot authorize a comparison. Use exact
decimal/rational arithmetic or a documented sound strategy shared by both languages;
never introduce an unexplained tolerance at a decision boundary.

Retain native DCC/D-SI XML where applicable. Only use SIS/SIRP terms after validating an
exact pinned mapping; QUDT is an explicitly named legacy/alternative binding. The local
RM experiment may define its own clearly labeled quantity binding pending that validation.
Test `1 mg/kg = 10^-6 kg/kg`; do not route mass fractions through pressure conversion.

Keep distinct: calibration capability floors where required; optional customer uncertainty
limits; conformity under the selected decision rule. The baseline RM accreditation has no
uncertainty ceiling. The baseline decision consumes symmetric expanded uncertainty with
k=2; asymmetric unsupported input must not be silently symmetrized. Requested missing
claims and empty result groups never pass by filtering everything away.

The complete fictional RM witness consists of A (producer accreditation, [50,500] mg/kg,
M1 and M2), O (same range, M1 only, permitted maintenance and containment), D (CuZn39Pb3
brass/arsenic, M1, U=5 mg/kg, k=2), required same-batch study S and independently established
laboratory authority H. The verifier selects L=200 mg/kg and `x + U <= L`.

| x | Scope (estimate x) | Conformity | Reliance with other obligations established |
| --- | --- | --- | --- |
| 178 | 50≤178≤500 | 178+5=183≤200 | accept |
| 197 | 50≤197≤500 | 197+5=202>200 | reject for conformity; authorization established |
| 520 | 520>500 | not_run | reject for scope |

195+5=200 passes the inclusive decision; 500 is in scope. Authorization-only requests
for 197 or 500 do not run conformity. Below 50 fails scope. M2 cannot bypass O because
A admits it; it needs a separately permitted complete route. Accepted method succession
and explicit-extension profiles may yield different justified results for identical
bytes; absent accepted interpretation yields not established, not invented equivalence.

## 7. Support and external answers

Required support must be valid and authorized for its own role, then applicable to the
requested material/batch/instrument/activity/method/time. A support subject need not equal
the consuming issuer. A genuine report about another batch contradicts applicability;
a missing report leaves it not established. Resolution, digest or signature alone is
insufficient. Protected identifier agreement proves the profile's digital match, not that
a physical sample has not been swapped.

An authority-issued answer can establish a specific predicate under an accepted attestation
policy. Bind its protected content to the exact claim/digest, grantee, activity, scope
identity/version, profile/rule version, time and question parameters. Establish signer
authority independently and verify protection, status/freshness and question binding.
Point coverage cannot prove full O⊆A. A valid supplied answer may avoid a network query;
an unavailable authority without admissible evidence leaves the predicate not established.
The witness records reliance on that authority's assertion, not proof of semantic truth.

The optional Recognized Entities adapter pins the 6 September 2026 Working Draft and
supports only its documented discovery/membership/action/output-validator subset.
Recognition does not replace QI scope, global restrictions, support or conformity.
Identifier discovery is unsupported unless its retrieved VP proof and queried-issuer
binding are implemented. Profiles must explicitly compose this adapter with other grants.

## 8. Security, time, disclosure and limits

All required credentials and security artifacts receive the selected binding's real
checks. Registry bootstrap is independently configured. Status statements require an
authorized status signer. A constant key resolver is not adversarial identity evidence.
Proof-disabled operation is simulation and cannot yield unconditional verified reliance.

Bound all I/O by protocol/origin/address/redirect/media-type/size/decompression/time rules.
Pin static contexts and schemas with origin/version/hash metadata for offline tests;
dynamic status retains observation times and freshness. Digest mismatch and unavailable
resource have distinct states/reasons.

Separate evaluation, activity, native issuance, validity, proof, status observation and
shelf-life times. `validFrom` is not automatically issuance. The baseline answers a precise
current-reliance request; historical reliance needs the policy's historical evidence, not
current status substituted for history. Issuer-written dates do not prove anti-backdating.

Evidence closure can be supplied in a flat presentation or obtained through permitted
bounded/private retrieval. Extra credentials confer no rights merely by being present.
SD must retain all facts required by the selected request; missing bindings/restrictions/
support leave reliance insufficient. Preserve TS SD; Python semantic subset checks are not
SD cryptographic verification. An interactive presentation needs its own holder/challenge/
audience/replay checks; a generic VC suite alone does not supply them.

Conditional decidability/soundness assumes accepted decision-preserving mappings, supported
terminating evaluators, finite route search and well-founded required dependencies.
Underdetermination without interpretation is not universal mathematical undecidability.
Timeout is not semantic falsity. Traversal cost alone does not bound total verification:
account for route search, crypto, schema/RDF work, quantities and resolution separately.

## Standards anchors

[VCDM2, 15 May 2025](https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/)
provides carrier mechanisms; this project's accepted bindings supply QI interpretation.
The [Recognized Entities snapshot](https://www.w3.org/TR/2026/WD-vc-recognized-entities-1.0-20260906/)
is experimental. The project requirements, not either external specification alone,
define the full reliance calculus above.
