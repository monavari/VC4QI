# API and wire migration

**Planned compatibility break. The new contract types exist alongside the legacy
runtime; the default evaluator remains legacy until I5.** No new release is claimed.
See [MODEL_SPEC](MODEL_SPEC.md) and [the execution plan](plans/standards-first-reconciliation.md).

| Current surface | Target contract |
| --- | --- |
| `verifyCredentialGraph(target, policy, options)` / Python `verify_credential_graph` | Verifier-owned reliance request with selected claims, purpose, profile/version, trust, times, supplied evidence and budgets |
| `CredentialEvidenceReference` with three relation tokens and six basis labels | Accepted native bindings compile protected facts into internal obligations |
| `verified` from zero FAIL count | Separate verification/authorization/support/conformity and three-state overall reliance |
| Optional proof skipping used by demo fixtures | Explicit simulation assurance; required unchecked protection cannot produce verified reliance |
| Credential-ID-only graph uses and trace edges | Secured artifact identities plus context-specific node-uses and source/record/route witnesses |
| Mandatory custom per-claim `scopeRef` | Verifier-owned claim-to-record witness, preserving native links where domain bindings define them |
| Legacy policy/query paths | Manifest/profile-derived accepted paths and complete reliance obligations; query match alone is insufficient |

The first contract API is exported as `reliance` in TypeScript and
`qi_vc_core.reliance` in Python. `createRelianceRequest`/`create_reliance_request`
validate immutable requests; semantic AND/OR and decision helpers implement the model
truth tables. No evaluator consumes these requests yet. The target result must identify
request/profile/claims, per-artifact verification,
per-claim authorization/routes/restrictions, support/applicability, conformity rule and
arithmetic (or not-requested/not-run), overall reliance, trace/provenance, resources and
limitations. `not_run` is not a fourth semantic evidence state.

## Transition

1. Implement the new types and signed vertical slice alongside the current runtime.
2. Keep old fixtures/tests in a clearly labeled legacy lane while new semantic vectors
   are introduced in both languages. Explain every intentional change in expectation.
3. Regenerate migrated credentials using the new binding. Never edit a signed artifact
   and retain its old proof or imply that converting its JSON preserves its signature.
4. Offer legacy evaluation only through explicit profile/adapter selection. New-profile
   requests do not auto-fallback when legacy-only authority references are supplied.
5. Switch the default after the complete signed RM witness and required controls pass;
   migrate policies, examples, queries and demo consumers together.

Use a new profile/schema version and a coherent new pre-1.0 software version. 0.4.0 is a
planning candidate, not a published or assigned release. Preserve existing citation
metadata as historical until its archive target is verified. No publication action is
part of this documentation change.

Existing package exports, fixture paths and queries remain available as currently
implemented; this note does not promise their indefinite backwards compatibility.
Python mirrors supported semantic states/records/routes/arithmetic. Its processing of
TS-derived SD subsets remains distinct from cryptographic SD verification.

## Implemented reliance contract (I1/I2, unreleased)

The new request/result API (TS `reliance` namespace, Python `qi_vc_core.reliance`) is
unreleased and may still change. As of I2 step 1 it requires `requestId` / `request_id`
on requests and results. Results carry a gate-numbered `trace` (canonical gates 0–6,
node-use key, predicate, state, execution, reason, sources) and `resources` observations
(URI, SHA-384 SRI, kind, source, observation time), as handover §4.3 requires. The
node-use key combines artifact identity, content digest, role, purpose, profile and
evaluation time.
