# Plan: a richer, more understandable project website

Status: proposed, not started (16 November 2026). Based on an audit of the built site
(`pnpm docs:build`, served from `_site/`) at laptop and phone width.

## Audit

What works: the front page is clear at laptop and phone width (stories, examples, the
six questions, status); no internal link is broken; every page has a title; the site
loads nothing from third parties and says so.

Defects:

- On phones, code-heavy table columns break mid-word (for example `termsOfUse` in
  `docs/model.md`).
- The 13 documentation pages have no meta description, and no page has a social-preview
  card (Open Graph), so shared links show bare text.
- The favicon is empty (`data:,`).
- "Demonstrator" links to `demo/` in the docs header and to `demo/rm/` on the front page.

Gaps:

- The documentation has no diagrams; the chain (state, accreditation body, laboratory,
  certificate, with Global ACI's recognition beside it) appears only in the demo.
- No plain-language page says what problem VC4QI solves and for whom.
- No glossary; terms such as accreditation, binding, profile and route are explained
  only in passing.
- Only five decision records; recent choices (`termsOfUse` link types, the appointment
  root, recognition, D-SI, shared roots) have none.
- No cite page on the site (the citation is in the README), no changelog page, and no
  contents box on long pages (the reliance model is about 2,400 words).

Judgement: the documentation reads as a normative specification, which suits reviewers
and is heavy for newcomers.

Not checked: colour contrast and keyboard navigation.

## Readers

- **Metrology and QI people:** the chain picture, plain explanations, the glossary.
- **Developers:** API, bindings, vocabulary.
- **Reviewers of the paper:** citation, decisions, acceptance ledger, status.

## Phase 1: fixes and citation (about half a day)

- A meta description and an Open Graph card (title, one line, a simple static image) on
  every page; a real favicon.
- Wide tables scroll sideways on phones instead of breaking words.
- One target for "Demonstrator" everywhere.
- A Cite page generated from `CITATION.cff` by `scripts/build-site.mjs`, so it cannot
  drift from the README; linked from the header.
- A contents box at the top of long documentation pages, and previous/next links.

## Phase 2: explain it (about 1–2 days)

- **One chain diagram**, inline SVG drawn once and reused on the front page, in the new
  explainer and in the reliance model: the state's appointment, the accreditation body,
  the laboratory and the certificate, with recognition beside them and the verifier's
  profile deciding.
- **"How it works"**, a plain-language page: the problem in three questions (who issued
  it, may they, does it meet my need), what a credential is and is not, the six checks
  with one worked example (M375a), and links into the demo at each step.
- **Front page:** a short "Why this exists" strip, the diagram, and the reader paths.
- The reliance model stays as the normative reference, unchanged except for a
  one-paragraph plain summary at the top.

## Phase 3: terminology and reasons (about 2 days)

Step 1 of [the vocabulary plan](vocabulary-and-decisions.md): the vocabulary page, ADRs
011–017 and the licence column, plus a short glossary for newcomers linked from every
page. Navigation becomes: Start · How it works · Demonstrator · Documentation (model,
bindings, API, architecture) · Vocabulary · Decisions · Cite.

## Phase 4, optional (about 1 day)

- Search from a small index built with the site; no outside service.
- A changelog page rendered from `CHANGELOG.md`.

## Rules

- Nothing from third parties: no CDN, web fonts, analytics or hosted search.
- Every page is built by `scripts/build-site.mjs` and passes `pnpm docs:check` and
  markdownlint; generated pages are checked like the fixtures.
- No affiliations, people, meetings or unpublished details; the paper stays "venue and
  DOI to be added".
- Demo logic, fixtures, evaluators and identifiers do not change.
