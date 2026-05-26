# Presentation Query

VC4QI includes adapters that derive Presentation Exchange Presentation
Definitions and DCQL-like requests from a policy profile.

These adapters are request helpers only. A presentation can satisfy the request
while still failing QI validation. The QI verifier remains responsible for
evidence graph resolution, scope checks, derivation checks, status, trust
registry checks, and policy sufficiency.
