# Experimental RM binding version 1

This directory contains the machine-readable design for the repository-owned
fictional RM binding. It is an experimental research fixture under the reserved
`vc4qi.example` namespace. It is not an external standard, accreditation statement,
legal authorization or production integration.

The [manifest](manifest.json) covers the twelve categories required by the
[binding design](../../../docs/BINDING_MANIFEST.md): identity/governance,
carrier/schema, fact mapping, cardinality, discovery/integrity, recognized types,
principal/rights, scope/mapping, routes/restrictions, protection/time/resolution,
support/disclosure and evidence/exclusions. Its [schema](manifest.schema.json)
closes the top-level structure.

`installation.status` is `incomplete`. The manifest cannot be selected by the new
evaluator until every listed pending context/schema has immutable catalog bytes,
the signed D/A slice has authorized key/controller material, and the I1 tests prove
safe mapping from original secured representations. No runtime should resolve the
`.example` URLs over the network. Installed evaluator identifiers name reviewed
local procedures; they are data selectors and never issuer-supplied executable code.

The existing v1 contexts, schemas and signed credentials implement the legacy model
and are not silently treated as this binding. Signed I1 artifacts will be generated
from source inputs; existing proofs will not be retained after content changes.

Tests initially validate the manifest shape, exact identifier/version, explicit
incomplete state and absence of legacy wire-field requirements. Vector evidence is
added under `test-vectors/` as signed resources land.
