# I1 safe-protection prerequisite evidence

**25 September 2026. This prerequisite is complete; the signed D/A vertical slice
and issuer/controller authorization remain pending.** It does not establish a new
reliance result or make the experimental RM binding installable.

The TypeScript EdDSA primitive now accepts an explicit safe-processing option for
issuance and verification. Safe mode rejects undefined JSON-LD properties instead of
silently removing them before hashing. The default remains unchanged for the isolated
legacy evaluator; the new reliance path must request safe mode.

The TypeScript `catalogDocumentLoader` adapts a request-local static-catalog session
to the JSON-LD loader contract. It accepts JSON media types, decodes strict UTF-8,
parses fresh JSON for every resolution, consumes the session's resource/byte budget
and refuses unknown URIs without network fallback. This avoids the legacy loader's
mutable process-global cache for new-profile evaluation.

An independent primitive control verifies the published `eddsa-rdfc-2022` Appendix B.1
signature over the published combined proof/document hashes and public key. Source:
[W3C Data Integrity EdDSA Cryptosuites v1.0](https://www.w3.org/TR/vc-di-eddsa/#representation-eddsa-rdfc-2022).
This confirms Ed25519 and multibase handling for the published bytes; it is not yet a
full independent JSON-LD transformation vector.

Focused controls cover safe-mode rejection, a safe proof round trip, isolated catalog
loading and the published signature. The complete TypeScript suite passes 267 tests.
The next slice must add the protected RM context/schemas and generated D/A artifacts,
retain their exact secured bytes, and resolve the named verification method from pinned
material. It must prove that the method is controlled by the credential issuer and is
listed for `assertionMethod`; a valid signature from an unauthorized key must fail.
Python safe-processing parity also remains pending; its current PyLD backend does not
enforce the same safe-mode option, so this evidence makes no Python protection claim.
