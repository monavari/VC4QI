# ADR-000 Architecture Decision Record Process

## Status

Accepted

## Context

Significant design choices in qi-vc-poc need to be documented in a way that
is auditable, linkable from code and PRs, and stable over time. Without this,
the rationale for non-obvious decisions is lost as the project evolves.

## Decision

We use Architecture Decision Records (ADRs) stored in `docs/adrs/`. Each ADR is
a Markdown file named `adr-NNN-short-title.md` with a sequential number. ADRs
follow the structure: Status, Context, Decision, Consequences.

Valid statuses: `Proposed`, `Accepted`, `Deprecated`, `Superseded by ADR-NNN`.

ADRs are immutable once `Accepted`. A superseded ADR is marked
`Superseded by ADR-NNN` and the new ADR references it.

Substantive changes to `schemas/`, `contexts/`, or `policies/` require a new or
updated ADR as a prerequisite for the PR to be merged (see CONTRIBUTING.md).

## Consequences

All significant design choices are documented and auditable. ADRs are referenced
from relevant source files and PR descriptions. The sequential numbering makes
ordering explicit.
