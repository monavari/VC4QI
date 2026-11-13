# Demonstrator design

Rules for the demonstrator pages in `site/demo`: the actor boards of the RM and GS
stories (`rm/`, `gs/`, drawn by `board.js` and `board.css`) and the example tabs. They apply to new work and to changes of existing
pages. Where a page does not follow them yet, the deviation is listed at the end.

The pages are presented on projectors to quality-infrastructure audiences and read on
phones afterwards. Everything they show is evaluated by the repository's code on signed
fixtures, or is marked as not evaluated.

## Principles

1. **The verifier decides.** The verifier is the main character. Its verdict is always
   on screen, and every other actor's action is shown through its effect on that
   verdict.
2. **One meaning per visual channel.** Colour shows state, position shows the actor,
   shape shows the kind of asset, line style shows the relation. No channel carries a
   second meaning. Actors therefore have no colours of their own.
3. **Never colour alone.** Every state also has an icon and a word.
4. **One step, one question.** In a guided story the acting columns are outlined, and
   only that step's actions are live. A "try it" step may make several actions live
   when they answer one question ("can it be broken?"). In build steps the other columns'
   credentials are dimmed; in evaluated steps they keep full strength, because they are
   what the verifier reads.
5. **Actions belong to the actor who can take them.** Suspending sits with the
   accreditation body, leaving out a study with the holder, the decision rule with the
   verifier. Where one clicks says who may do what.
6. **Nothing simulated, and "not evaluated" is said.** Placeholders have their own look
   and never borrow a state colour.
7. **Plain words first, terms second.** The page says *signed by*, *is about*, *held by*,
   *cites*. The terms (issuer, credentialSubject, holder, termsOfUse, evidence) appear
   small underneath and in the signed bytes.
8. **Readable from the back of the room.** Presenting targets are 1920×1080 and
   1280×720. At 1920×1080 a whole step fits without scrolling; at 1280×720 the step,
   the verdict and the first row of credentials do, and the rest scrolls. Text meets
   WCAG AA contrast.
   Phones get a full reading layout, one column, but are not the presenting layout.
9. **Motion only for handover.** A credential moving from issuer to holder may animate
   for about 300 ms. Nothing else moves, and `prefers-reduced-motion` turns it off.
   Nothing moves between steps either: on wide screens the step header, the columns and
   every credential keep their place from step to step, so a step changes what is shown,
   never where.

## Visual hierarchy

What the eye should find, in order, on every step: the answer, what happens, who acts,
what is handed over, why, the detail.

| Level | Element | Style |
| --- | --- | --- |
| 1 | Verdict | Solid state fill, white text; title 1.5rem/750, reason 1rem. One per screen. |
| 2 | Step title (`h1`) | 2rem/750, ink. |
| 3 | Actor names | Column header: monogram (2.25rem circle, ink outline, .9rem/750 letters) and name 1.15rem/700, ink. In the step header: the acting monograms with an arrow and their names, 1.05rem/650, ink. |
| 4 | Assets | Credential card: code badge (mono .9rem/700) and kind (1rem/650), one key fact (.95rem, ink). |
| 5 | Explanation | Step lead 1.12rem, muted, at most 46rem wide. |
| 6 | Answers | The six questions: label .9rem/650 ink, answer with icon in its state colour. |
| 7 | Labels and detail | Section labels .82rem/700 uppercase, muted; card footers ("signed by … · about …"), legends and notes .82rem, muted. |

- Adjacent levels differ in at least two of size, weight and colour, and each level has
  one style everywhere on the page.
- Nothing is smaller than .82rem (14 px at the 17 px projector base).
- **Actor names are never secondary.** They are ink, bold and in title case; never muted,
  never uppercase, never on a tinted fill, never only inside an "A → B" string, never
  truncated (they wrap). Dimming an inactive column fades its content, not its header.
  (Earlier pages showed the acting parties as a small chip on light cyan and in a muted
  line under each chain box; both were hard to read at a distance.)
- Ink is for names, titles, values and answers; muted is for explanation and detail only.
  State colours are used on icons, state words and borders, never on running text.
- Uppercase is used only for level-7 labels and the kicker.
- Check: on a 1280×720 projector, from four metres, the verdict, the step title and every
  actor name are readable.

## Vocabulary

### Colour

| Token | Means | Used for |
| --- | --- | --- |
| `--ok`, ✓ | holds (established) | states only |
| `--bad`, ✕ | fails (contradicted) | states only |
| `--unk`, ? | cannot tell (not established) | states only |
| `--off`, – | not asked, not required | states only |
| grey, dashed, hatched, "Not evaluated" | placeholder | presentation, selective disclosure |
| `--petrol` | *now and here*: current step, acting column, primary button | navigation and attention |
| `--cyan` | keyboard focus | focus only |
| `--red` | brand | wordmark only |

Dark mode redefines every token; nothing is hard-coded outside `:root`.

### Actors: position

One column per actor, in a fixed order from where trust comes from to where it is used.
An actor's column appears when the chain first reaches it, in its fixed place, so a story
starts with one actor and the board fills as it goes; "Your turn" shows every actor.
A band that concerns one moment of the story appears only in that moment: in the RM
story, the evaluated note that a verifier abroad reaches the accreditation body through
R, Global ACI's recognition of it (a fictional stand-in, W3C Recognized Entities draft).
For the RM story: Global ACI (ACI), Accreditation body (AB), Laboratory (LAB), RM
producer (RMP), Holder (H), Verifier (V). With more than four actor columns the
verifier's column narrows and a name may drop below its monogram; it never truncates. For the GS story: Accreditation body (AB), Scheme owner (SO), GS body
(GSB), Manufacturer (MFR), Verifier (V).

- The header carries the monogram, the name, one line on what the actor does, and what it
  publishes, as small chips: key, revocation list, suspension list.
- The holder column has a light wallet background.
- The verifier column is the widest: the verdict and the six questions on top, its
  settings below. It does not hold credentials, so its content is not aligned to the
  card rows.

### Assets: shape

| Kind | Look | RM example |
| --- | --- | --- |
| Grant: gives authority | card, standard border | R, A, H, O |
| Evidence: supports, grants nothing | card with an "evidence" tag | S |
| Claim: what the verifier relies on | card with a thicker border | D178 |
| Physical object | rounded pill with ◼; never state-coloured | disc lot 1 |
| Infrastructure | small chip in the actor header | key, status lists |
| Presentation | envelope around credentials; placeholder look until evaluated | holder to verifier |

A card shows its code badge, its kind in words, one key fact and a footer "signed by … ·
about …". What the binding proposes rather than reuses carries a "proposal" tag beside
its kind (R). Its state is its border colour and a corner icon. A credential sits in its
issuer's column; selecting it labels the columns that sign it, that it is about, that
hold it, and the credentials it cites.

### Relations: line style

| Line | Means | Points to |
| --- | --- | --- |
| solid | *acts under* (`termsOfUse`, `IssuedUnderPolicy`: a grant) | the cited credential, towards the root |
| dash-dot | *is recognized in* (`termsOfUse`, `RecognitionPolicy`: no authority) | the issuer's recognition |
| dotted | *is backed by* (`evidence`) | the study |
| dashed grey | handed over | the holder |

Every upward link is a term of use, and its type says what it means: a grant
(`IssuedUnderPolicy`) is drawn solid, a recognition (`RecognitionPolicy`) dash-dot,
because a recognition grants no authority and must never look like one. The key says
this in plain words first, the type second. In a build step each new line carries its
policy type (`IssuedUnderPolicy`, `RecognitionPolicy`) or `evidence` at its middle, in a
layer above the cards. A line leaves and enters on the sides facing each other; lines that
meet on one side of a card share it, spread in the order of where they come from. The
head is drawn along the line's own last stretch and the line stops at its base, so the
head points the way the visible line runs.

Citation lines take the state of their link: the claim's own links carry the answers to
"authorized" and "supported", deeper links the verification of the credential they point
to, so a wrong link shows on that link alone. Once a request is accepted, a link to a
credential the verifier verified but did not rely on is grey (R for a verifier whose root
is the accreditation body). Handover lines are always grey.

### What a card shows

The paper's letter as a small code and a full name that leads (“Producer accreditation”,
“Producer’s operational scope”), and under it the credential's own type in mono (the last
entry of `type`, for example `RmAccreditation`), then what it says, its tags and who
signed it about whom. Explanations name a credential by full name and letter
(“Producer’s operational scope O”). Column heads carry the actor's name and published
lists only; the descriptions are gone, as are other texts the board does not need.

### Explaining a credential or a link

Clicking a credential or a line explains it; on the board in a sheet, in the vertical
layout beside the lanes. A credential: its type and what that type is, who signed it,
about whom, who holds it, its validity, status entries and proof, what it points to and
what points to it, and in evaluated steps every check that touched it, in the evaluator's
words with the gate and predicate underneath. A link: the plain sentence (*D178 acts
under O*), the field, the pinning digest, the link as it stands in the signed bytes, what a
verifier checks on such a link, and in evaluated steps the checks that read its target.
A link the verifier verified but did not rely on says so. The *Terms* button lists the
vocabulary in one line each.

### The vertical layout

`rm/vertical.html` draws the same story in three columns. On the left: the step (kicker,
title, acting parties, text), then the verifier's policy check in evaluated steps
(verdict, the six questions, the verifier's settings) and the key. In the middle: the
chain top to bottom in one place, one lane per level of authority (recognizes, accredits,
acts under its accreditation, certifies, holds and shows), compact cards (letter, name,
type, tags), each credential under what it acts under, and every actor's controls in its
lane head, always shown and faded until live, so a lane never changes height. On the
right: the selected credential, read for its content (a certificate's results table, a
grant's activities and scope records, a study's outcome, a recognition's action and main
scopes), what it points to and what points to it, its envelope, the checks run on it and
its signed bytes; or the selected link. Without a selection it shows the step's newest
credential while building and the certificate once the verifier decides. Below about
110rem the right column gives way to a floating sheet. Lanes not yet reached and
credentials not yet issued hold their place invisibly. A link in the top bar switches
layouts and keeps the step and its state.

### Pages instead of the board

A step may draw a page instead of the board. The RM story opens with what a verifiable
credential is made of: each property of D178, what W3C VCDM 2.0 says it is for (quoted
only where the words are the specification's own), its value in D178 and how the board
draws it, then why a term of use points up to an authority (VCDM §5.5, the limits of
§5.1 and §5.9, and who else uses the same place). It goes on with D178 drawn with what
each link points to beside the eight design rules, and ends with the recognition
proposal and its reconciliation with W3C Recognized Entities (*find, then bind*:
`issuer.recognizedIn` to find, an `IssuedUnderPolicy` term of use to bind). A page
reads the generated credentials and evaluates nothing, says so in a tag above it, and
uses no state colour: direction is arrow shape (↑ up to authority, ↓ down to the
subject, → sideways to evidence), state is a drawn switch, the seal a solid diamond.
Plain words lead and the terms follow in mono, each with where it comes from.

## Words

- Verdict titles are the decisions: **Accepted**, **Rejected: not *question***, **Not
  established**. The line underneath names the one decisive reason in plain words
  ("520 is above the producer's own scope, 50–500 mg/kg").
- Answers are **✓ yes**, **✕ no**, **? cannot tell**, **not asked**, **not required**.
- Step text: the actor is the subject, present tense; one sentence for what happens, one
  for why it matters.
- "Credential", not "VC", in the interface. Placeholder names only; every page says the
  parties and keys are fictional.

## Type, spacing, layout

- System sans for text; mono only for codes, values and identifiers, with tabular
  figures.
- Root size 16 px, 17 px from 64rem, 18 px from 110rem. Spacing uses the 4 px scale
  `--s1`…`--s7`; columns are `--s4` apart, cards have `--s3` padding.
- Wide screens: the step header spans the page, the actor columns sit below it. Phones:
  the step header and verdict come first, then one card per actor.
- Two credentials of the same actor that cite each other sit in different rows with a
  visible gap, so the line between them is never hidden. On wide screens the lines show
  what a credential cites; on phones, where there are no lines, its footer says it.
- Reasons are shown in plain words: a party's identifier becomes its name and a
  credential's identifier its code. The exact identifiers stay in the signed bytes.

## Interaction

- Verifier settings are segmented controls; actor actions are buttons in their column.
  A citation line can be clicked to leave its credential out (the holder's choice); the
  same choice is a segmented control in the holder's column for keyboards.
- So that a step fits the screen, a guided step shows its live controls, plus any whose
  value it changed (faded, marked "available in *Your turn*"), and the verifier's root.
  The last step shows and unlocks every action.
- What each actor does stays in its column header on every step, so the rows never move;
  the verifier's description is dropped once it decides, which moves no credential.
- How the board keeps its place on wide screens: room for a two-line title and for the
  acting parties on every step; credentials not yet issued and columns not yet reached
  are laid out invisibly; every card keeps a line for its tags, and its state icon sits
  outside the text; the verifier's height goes only to the last (actions) row; a
  re-signed list is marked by filling its label, not by more text; a band sits under
  the board; the scrollbar's room is always kept.
- Step text is one or two sentences under the title.
- Every change re-evaluates immediately. The URL hash holds the whole state, so a link
  reproduces a slide. Arrow keys and Page Up/Down move between steps.

## Deviations in the current pages

The RM and GS stories (`site/demo/rm/`, `site/demo/gs/`) follow these rules. The
example tabs (`site/demo/`) do not yet:

- Cyan also marks the selected segment; only focus may keep it.
- The chain boxes name parties in a muted line, which breaks the actor-name rule.
- On a 1920×1080 screen the GS story, with three card rows, needs a short scroll to reach
  the actors' buttons.
