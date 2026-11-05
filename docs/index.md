# VC4QI documentation

VC4QI (Verifiable Credentials for Quality Infrastructure) is research software. It
asks what a verifier may actually rely on when it receives accreditation,
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
| Call the library | [API](api.md) |
| Know how a credential family is interpreted | [Bindings](bindings.md) |
| Find your way around the code | [Architecture](architecture.md) |

The [acceptance ledger](acceptance-ledger.csv) lists 83 cases with their expected
outcome, test and evidence, and the [architecture decisions](adrs/README.md) record why
the design is as it is.

## Try it

The [demonstrator](https://monavari.github.io/VC4QI/demo/) runs the repository's evaluators in your browser on
signed test credentials. It opens on a guided story: a GS certification chain is built
party by party up to a product passport, verified, manipulated, and judged by two
verifiers with different trust anchors (selective disclosure is a placeholder). The top
bar also offers four examples: a reference material (RM), calibration certificates (DCC),
a GS certificate and an experimental product passport (DPP). The source is on
[GitHub](https://github.com/monavari/VC4QI); contribution rules are in
[CONTRIBUTING](../CONTRIBUTING.md).

Code is licensed under Apache-2.0 and documentation under CC BY 4.0. All authorities,
keys and grants in the examples are fictional.
