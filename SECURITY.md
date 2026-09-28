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

All cryptographic keys in `tests/fixtures/keys/` are **TEST ONLY** and are
committed solely for deterministic test execution. They are explicitly marked
`TEST ONLY - NOT FOR PRODUCTION` in every file. Never use these keys in any
production or staging environment.

## Scope

In scope: credential issuance/verification logic, cryptographic operations,
schema validation, trust registry resolution, status list handling.

Out of scope: issues in upstream dependencies (report those to the upstream
project), demo UI cosmetic issues.

## Standards-first migration assurance

VC4QI is research software; a supported-version label is not a security certification.
The new reliance evaluator requires authorized proof keys, safe JSON-LD processing,
exact-byte integrity, authenticated status with freshness, complete authority routes
and independently justified support, and resolves only from a pinned offline catalog.
It runs for the experimental bindings; the default API is still the legacy verifier,
which has known gaps (for example, legacy canonicalization with `safe: false`). See
[status](docs/status.md).

Proof skipping is simulation. Missing required evidence cannot authorize reliance, and
signed identifiers do not establish physical sample truth. Historical reliance and
interactive presentation security need their own evidence and are not implemented.
