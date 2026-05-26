# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.x     | Yes       |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report vulnerabilities by email to
[monavari.mehran@gmail.com](mailto:monavari.mehran@gmail.com) with the subject
line `[SECURITY] qi-vc-poc`.

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
