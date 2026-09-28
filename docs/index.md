# VC4QI documentation

VC4QI (Verifiable Credentials for Quality Infrastructure) is research software from
BAM. It asks what a verifier may actually rely on when it receives accreditation,
calibration, reference-material or certification credentials, and implements the
answer as a reference evaluator in TypeScript with a Python mirror.

Credentials represent institutional authority and evidence; they do not create it. The
verifier selects the profile, and every answer is one of three states: established,
contradicted or not established. "Cannot tell" never counts as yes.

## Start here

| If you want to… | Read |
| --- | --- |
| Understand the idea and its rules | [Reliance model](model.md) |
| See what runs today and what is open | [Status](status.md) |
| Walk through the example scenarios | [Use cases](use-cases.md) |
| Call the library | [API and migration](api.md) |
| Know how a credential family is interpreted | [Bindings](bindings.md) |
| Find your way around the code | [Architecture](architecture.md) |
| Learn about assessments, queries and selective disclosure | [Applications](applications.md) |
| Review the implementation against the manuscript | [Manuscript feedback](paper-feedback.md) |

## Project records

- [Execution plan](plans/standards-first-reconciliation.md): phases I0–I8 with
  deliverables and exit criteria.
- [Implementation evidence](plans/evidence.md): commands, results and limitations for
  every phase.
- [Acceptance ledger](plans/standards-first-acceptance.csv) (83 cases) and
  [requirements traceability](plans/standards-first-traceability.md).
- [Architecture decisions](adrs/README.md) and [historical documents](history/README.md).
- The [requirements source](plans/standards-first-handover-2026-09-21.txt) that resolves
  any ambiguity.

## Try it

The [demonstrator](https://monavari.github.io/VC4QI/demo/) runs the repository's evaluators in your browser on
signed test credentials. A top bar switches between four examples: a reference material
(RM), calibration certificates (DCC), a GS certificate and an experimental product
passport (DPP). The source is on
[GitHub](https://github.com/monavari/VC4QI); contribution rules are in
[CONTRIBUTING](../CONTRIBUTING.md).

Code is licensed under Apache-2.0 and documentation under CC BY 4.0. All authorities,
keys and grants in the examples are fictional.
