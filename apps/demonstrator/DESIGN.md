# Demonstrator design

Rules for the demonstrator pages in `site/demo`: the guided stories, the example tabs
and the actor board of the RM story. They apply to new work and to changes of existing
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
4. **One step, one action, one consequence.** In a guided story the acting columns are
   outlined, and only that step's action is live. In build steps the other columns'
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
| grey, dashed, hatched, "Not evaluated" | placeholder | international recognition band, presentation, selective disclosure |
| `--petrol` | *now and here*: current step, acting column, primary button | navigation and attention |
| `--cyan` | keyboard focus | focus only |
| `--red` | brand | wordmark only |

Dark mode redefines every token; nothing is hard-coded outside `:root`.

### Actors: position

One column per actor, in a fixed order from where trust comes from to where it is used.
An actor's column appears when the chain first reaches it, in its fixed place, so a story
starts with one actor and the board fills as it goes; "Your turn" shows every actor.
Placeholders that concern one moment of the story (international recognition of the
accreditation body) appear only in that moment.
For the RM story: Accreditation body (AB), Laboratory (LAB), RM producer (RMP), Holder
(H), Verifier (V).

- The header carries the monogram, the name, one line on what the actor does, and what it
  publishes, as small chips: key, revocation list, suspension list.
- The holder column has a light wallet background.
- The verifier column is the widest: the verdict and the six questions on top, its
  settings below. It does not hold credentials, so its content is not aligned to the
  card rows.

### Assets: shape

| Kind | Look | RM example |
| --- | --- | --- |
| Grant: gives authority | card, standard border | A, H, O |
| Evidence: supports, grants nothing | card with an "evidence" tag | S |
| Claim: what the verifier relies on | card with a thicker border | D178 |
| Physical object | rounded pill with ◼; never state-coloured | disc lot 1 |
| Infrastructure | small chip in the actor header | key, status lists |
| Presentation | envelope around credentials; placeholder look until evaluated | holder to verifier |

A card shows its code badge, its kind in words, one key fact and a footer "signed by … ·
about …". Its state is its border colour and a corner icon. A credential sits in its
issuer's column; selecting it labels the columns that sign it, that it is about, that
hold it, and the credentials it cites.

### Relations: line style

| Line | Means | Points to |
| --- | --- | --- |
| solid | cites as authority (`termsOfUse`) | the cited credential, towards the root |
| dotted | cites as evidence (`evidence`) | the study |
| dashed grey | handed over | the holder |

Citation lines take the state of their link; handover lines are always grey.

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
- In a guided story, locked actions stay visible, faded, marked "available in *Your
  turn*". The last step unlocks every action.
- Every change re-evaluates immediately. The URL hash holds the whole state, so a link
  reproduces a slide. Arrow keys and Page Up/Down move between steps.

## Deviations in the current pages

The RM story (`site/demo/rm/`) follows these rules. The GS story and the example tabs
(`site/demo/`) do not yet:

- The selective-disclosure placeholder in the GS story is amber; it must use the grey
  placeholder look.
- Cyan also marks the actor chip and the selected segment; only focus may keep it.
- The GS story shows its acting parties in the small `.actor` chip and its chain boxes
  name parties in a muted line; both break the actor-name rule.
