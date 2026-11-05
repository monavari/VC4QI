# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.x     | Yes       |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report vulnerabilities by email to
[monavari.mehran@gmail.com](mailto:monavari.mehran@gmail.com) with the subject
line `[SECURITY] VC4QI`.

Please include:

- A description of the vulnerability and its potential impact
- Steps to reproduce or proof-of-concept code
- Affected versions
- Any suggested mitigations

**Response timeline:**

- Acknowledgement within 48 hours
- Triage and severity assessment within 7 days
- Fix or mitigation plan communicated within 30 days

## Test Keys Disclaimer

Every signing key used by the experimental bindings is an **insecure fictional
fixture** derived from a public seed in its generator
(`packages/core-ts/scripts/generate-*-v1-artifacts.ts`), so anyone can recompute it.
No private key is committed. Never use these keys in any production or staging
environment.

## Scope

In scope: credential issuance/verification logic, cryptographic operations,
schema validation, key authorization, status list handling.

Out of scope: issues in upstream dependencies (report those to the upstream
project), demo UI cosmetic issues.

## Assurance

VC4QI is research software; a supported-version label is not a security certification.
The new reliance evaluator requires authorized proof keys, safe JSON-LD processing,
exact-byte integrity, authenticated status with freshness, complete authority routes
and independently justified support, and resolves only from a pinned offline catalog.
It is the only verifier in the repository and runs for the experimental bindings; the
v0.3 graph verifier, with its known gaps, was removed in v0.4. See [status](docs/status.md).

Missing required evidence cannot authorize reliance, and
signed identifiers do not establish physical sample truth. Historical reliance and
interactive presentation security need their own evidence and are not implemented.
