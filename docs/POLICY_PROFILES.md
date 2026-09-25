# Policy profiles

**Normative target; existing JSON policies remain legacy.** A profile fixes accepted
bindings, structural constraints, authority/identity rules, scope semantics, permitted
complete routes, global restrictions, required support, time/security/resolution rules
and supported decision modules. The verifier selects profile/version, trust anchors,
claims, purpose and any conformity requirement. Issuer declarations cannot weaken them.

For each claim, authorization is the conjunction of applicable global restrictions
with an OR of complete routes. Each route is an AND of its required bases, correctly
bound to actor, activity, time and claim. A fictional example is `(competence AND scheme
permission) OR statutory authority`; it is not a universal legal rule. Never join partial
routes. An unrelated revoked artifact is not a global suspension. See
[MODEL_SPEC](MODEL_SPEC.md) for three-state composition and empty-route safeguards.

Scope ownership and overlaps are explicit: one complete record covers every dimension
owned by a basis. Bounded operational scope additionally needs maintenance permission
and containment. Supporting studies have independent authority and applicability.
Purpose-specific closure may include supplied evidence and permitted private resolution.

The experimental RM target is defined in [BINDING_MANIFEST](BINDING_MANIFEST.md):
A/O/D/S/H, [50,500] mg/kg, A admitting M1/M2, O admitting M1, U=5 and k=2. The
request may select `x+U<=200` or authorization only. No RM accreditation uncertainty
ceiling is required. Method succession is accepted only through explicit profile inputs;
an unknown interpretation produces not established.

Existing policy files cover direct calibration accreditation, operational calibration
scope, statutory metrology, recursive RM, test-report/DCC support and GS scheme examples,
including two GS assessment variants. Their current edge/path requirements are legacy;
new manifests/routes and query constraints arrive in I1–I5. The demo's A–F labels are UI
metadata, not identifiers of externally governed profiles.

[Assessment](ASSESSMENT.md) may evaluate an accepted predicate but cannot override failed
required gates. Authority-issued answers must independently establish signer authority
and exact question binding. [Presentation queries](PRESENTATION_QUERY.md) request evidence;
matching them does not execute reliance or decide numerical scope/conformity.
