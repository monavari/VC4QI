# TEST ONLY — NOT FOR PRODUCTION

The committed fixture keys are public test material, not production secrets. Never use
them in production or staging. Existing fixed test keys support reproducible fixtures;
signed output must be regenerated rather than hand-edited.

The new binding needs an explicit issuer → verification method → controller/key catalog.
Resolve the requested key identity and authorized relationship; a callback returning the
same key for every request cannot establish adversarial principal/key isolation. Test a
valid signature by a key unauthorized for the claimed issuer separately from bad signature
bytes. Retain SD P-256 and Ed25519 fixture roles distinctly; Python does not verify SD crypto.
See [binding design](../../../docs/BINDING_MANIFEST.md) and P02/P03/P05/P08 in the ledger.
