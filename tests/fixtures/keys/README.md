# TEST ONLY — NOT FOR PRODUCTION

The committed fixture keys are public test material, not production secrets. Never use
them in production or staging. Existing fixed test keys support reproducible fixtures;
signed output must be regenerated rather than hand-edited.

The experimental bindings derive their insecure fixture keys from public seeds and
resolve them through pinned controller documents (issuer → verification method →
controller); the legacy key callback, which returns one key for every request, cannot
establish adversarial principal/key isolation. Test a
valid signature by a key unauthorized for the claimed issuer separately from bad signature
bytes. Retain SD P-256 and Ed25519 fixture roles distinctly; Python does not verify SD crypto.
See [binding design](../../../docs/bindings.md) and P02/P03/P05/P08 in the ledger.
