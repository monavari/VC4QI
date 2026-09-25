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

The current runtime is a legacy research implementation with known migration gaps;
see [implementation status](docs/IMPLEMENTATION_STATUS.md). A supported-version label
above is not a security certification or evidence of the revised model's implementation.
The target requires authorized proof keys, authenticated registry/status resources,
independent trust bootstrap, safe expansion and protected source mappings, complete
routes, contextual caches and well-founded required support.

All resolution must be bounded, including redirects, destination addresses, response
size/decompression and time. Static contexts/schemas need pinned offline resources;
dynamic status needs authenticated observation time/freshness. Proof skipping is
simulation. Missing required evidence cannot authorize reliance, and signed identifiers
do not establish physical sample truth. Historical reliance and interactive presentation
security need their own evidence. These are migration requirements, not completed fixes.
