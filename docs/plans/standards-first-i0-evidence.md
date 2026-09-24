# I0 baseline and scope-safety evidence

**24 September 2026. I0 preparation complete; I1–I8 remain pending.**
The runtime still uses the legacy model. This phase repairs setup and preserves
specified safety properties; it does not implement new-profile reliance.

## Changes and provenance

Base: `225e78f37fccb6f3813ba5f0a85ff3e2b2eb72b9`. Documentation commit:
`51fd945`. Work branch: `refactor/standards-first-reconciliation`. The user authorized
incremental pushes to this branch. No main-branch merge, tag or release is part of I0.
The missing `63231d2` patch remains unavailable; its safety properties were implemented
from handover §1.2. Existing `17dc96d` identifier fixes were retained.

- Root uv now includes only core-py; LIMS and verifier-service remain scaffolds.
  `uv.lock` fixes dependency resolution. Ruff 0.4.5 matches the pre-commit pin;
  mypy is constrained to `>=1.10,<2`. Both are development tools. No new runtime
  dependency declaration was added. Existing broad dependency bounds resolved to
  newer packages, including PyLD 3.3.0 and Pydantic 2.13.5; the locked suites were rerun.
- Make setup/tests/demo use existing package paths. CI and release configuration
  read pnpm 10.15.1 from `packageManager` and use uv 0.12.17 with locked sync.
  CI now also runs on pushes to the reconciliation branch. Release configuration
  was edited locally; its publication workflow was not executed.
- TS/Python derived-record checks require one complete parent for each child record,
  finite ordered pressure endpoints, compatible known units and governed dimensions.
  No cross-record union or dimension splicing is accepted.
- RM checks retry complete alternatives per certified claim, including any explicit
  legacy uncertainty restriction. Different claims can use different records.
  No accreditation uncertainty ceiling is invented when none is supplied.
- DCC restricted-method checks reject empty/missing governed methods. Candidate
  failures remain local to a measurement group; a later passing group cannot erase
  an earlier required failure.

The [38 shared vectors](../../testdata/regressions/scope-containment.json) are unsigned
predicate inputs. Their first 36 cases produced **23 failures and 13 passes in each
language before the fix**, then all passed. Two explicit GS type-domain controls and
one non-finite-bound test per language complete the current 39-test suites. Python
also rejects integers too large for finite floating-point conversion.

## Executed checks

Environment: Node 20.19.0, pnpm 10.15.1, Python 3.12.3, uv 0.12.17. uv uses this
checkout's `.venv`; an inherited unrelated `VIRTUAL_ENV` produces an informational
warning. The first noninteractive setup attempt waited for pnpm's reinstall prompt;
it was stopped and rerun with `CI=true`, which completed the locked installation.

| Command | Exit | Result |
| --- | --- | --- |
| `CI=true make setup` | 0 | Locked pnpm install and uv sync; 33 Python packages resolved. |
| `pnpm -C packages/core-ts test` | 0 | 226 passed in 19 files, including 39 scope-safety tests. |
| `uv run --locked --all-packages --extra dev pytest packages/core-py/tests -q` | 0 | 196 passed, 1 existing skip; includes 39 scope-safety tests. |
| `make test` | 0 | TS, two root scenarios and Python suites passed after locked setup. |
| `pnpm -r build` | 0 | Core/demo typechecks and Vite build; existing bundle-size warning. |
| `pnpm -r --if-present lint` | 0 | Existing TS typecheck-based lint. |
| `pnpm test:scenarios` | 0 | 2 legacy tests; no browser-interaction claim. |
| `pnpm validate:schemas` | 0 | 4 schemas and 2 examples; six examples skipped without `$schema`. |
| `.venv/bin/ruff check .` | 1 | 204 existing diagnostics; baseline comparison below. |
| `make lint` | 2 | TS check passes; Make stops on Ruff exit 1. |
| `.venv/bin/mypy --no-incremental packages/core-py` | 1 | 198 existing diagnostics, unchanged from the base. |

Python lint was compared using identical tool versions against a temporary extraction
of core-py at the base commit. Ruff's core-py diagnostics decreased from **208 to 204**;
mypy remained **198 in 24 files**. Comparing file/rule/message multisets, ignoring moved
line numbers, found **no added diagnostics**. Rules were not disabled and old tests were
not excluded to obtain a pass. `make lint` consequently still stops at Ruff; mypy was
also run separately. This is recorded baseline debt, not a fully green lint claim.

The pnpm reinstall reported an ignored esbuild install script; the actual subsequent
build and tests are the evidence that the installed toolchain works in this environment.
No independent cryptographic conformance, full offline closure or UI interaction test
was added in I0. Remote CI results must be checked separately from these local results.

Documentation validation passed Markdown lint on all 60 project Markdown files,
185 local links, 73 inventory entries, 83 acceptance IDs, static-resource hashes and
the unchanged report prefix. `git diff --check` also passed.

## Migration inventory and acceptance accounting

- [111 files mentioning legacy wire identifiers](standards-first-wire-consumers.csv):
  runtime consumers, generators, contexts/schemas/policies, fixtures, tests and UI.
  This is a lexical inventory with migration treatment, not proof every occurrence
  executes or every indirect consumer has been discovered.
- [Six default-loader resources](standards-first-static-resources.csv): URL, local
  path and observed SHA-256. Both default loaders map these resources. These inventory
  hashes are not yet enforced runtime pins. Unknown URLs still permit network fallback
  unless strict mode is selected; caches are global and caller-seeded. I1/I2 must
  establish provenance, isolation, bounded resolution and mandatory static closure.
- All [83 new-profile cases](standards-first-acceptance.csv) are classified
  `not_implemented`. Eleven S rows cite partial legacy predicate evidence; none is
  marked as a signed new-profile pass. The new binding/compiler/request/witness
  contract and its acceptance harness are still absent.

## Preserved boundaries and next work

The legacy GS binding's explicit finite `authorizedCredentialTypes` domain is checked
when both endpoints have type-only scopes. A missing/empty numerical scope does not
become unrestricted. This compatibility rule is not a new universal binding rule.

Python's old label-based `check_derivation` API is deprecated but preserved for old
callers; it is not the graph evaluator's `check_derived_edge` path and does not receive
this safety assurance. New callers must not use it. DCC's legacy any-of handling for
multiple supplied methods, empty certified/requested selections (S24), unknown new
dimensions, complete temporal validation and exact mass-fraction arithmetic are not
solved here. The new profile must supply these semantics and witnesses in I1–I4.
Calibration CMC floors, optional customer limits and conformity remain separate from
legacy explicit uncertainty maxima.

Astra performed two bounded read-only semantic reviews, finding no blocking issue in
the final I0 scope changes within these stated boundaries. Sol and Luna attempts hit
workspace credit limits and made no edits; local implementation continued without
repeated failed delegation. Next: **I1**, the executable binding manifest, request/result
contract and first real signed RM vertical slice.
