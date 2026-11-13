// SPDX-License-Identifier: Apache-2.0
// The actor board shared by the RM and GS stories (site/demo/rm, site/demo/gs), in two
// layouts. `board` (the default): one column per actor, credentials in their issuer's
// column, citations drawn across the columns, every action in the column of the actor who
// can take it. `vertical`: three columns: the step and the verifier's policy check on the
// left (#vcheck), the chain top to bottom in authority lanes in the middle, and the
// selected credential or link on the right (a floating sheet where the screen is narrow).
// The bundle (verifier.js) supplies the story, actors, assets and the evaluator; the page
// supplies a small configuration. Design rules: apps/demonstrator/DESIGN.md.
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const short = iri => String(iri ?? '').split('#').pop().split(/[/:]/).pop();
const LABEL = { established: '✓ yes', contradicted: '✕ no', not_established: '? cannot tell', not_asked: 'not asked', not_required: 'not required' };
const ICON = { established: '✓', contradicted: '✕', not_established: '?', not_required: '–', not_asked: '–' };
const QUESTIONS = { authentic: 'Authentic', current: 'Current', understood: 'Understood', authorized: 'Authorized', supported: 'Supported', fit: 'Fit for use' };
const ORDER = ['authentic', 'current', 'understood', 'authorized', 'supported', 'fit'];
const first = s => String(s).split(/(?<=\.) /)[0];
/** A credential's own type: the last entry of `type` (after VerifiableCredential). */
const typeOf = d => [d?.type].flat().filter(Boolean).at(-1) ?? '';

/** The kinds of link, in plain words, and what a verifier checks on each. Every upward link
 * is a termsOfUse entry; its type says whether it is a grant or a recognition. */
const LINK = {
  authority: {
    verb: 'acts under', field: 'termsOfUse', path: 'termsOfUse[].authorizationCredential',
    lede: (f, t) => f + ' names ' + t + ' as the grant it was issued under. ' + t + ' grants; ' + f + ' uses that grant, and may not go beyond it.',
    checks: (f, t) => [
      t + ' is signed by its issuer, and its bytes match the digest ' + f + ' pins for it in relatedResource.',
      t + ' is about the issuer of ' + f + ': the parent names the child\'s issuer as its subject.',
      t + ' permits what ' + f + ' does, and what ' + f + ' covers lies within ' + t + '.',
      t + ' was in force, neither suspended nor revoked, at the time asked about.',
      'The climb goes on from ' + t + ' until it reaches a root the verifier chose to trust.',
    ],
  },
  recognition: {
    verb: 'is recognized in', field: 'termsOfUse', path: 'termsOfUse[].recognitionCredential · RecognitionPolicy',
    lede: (f, t) => f + ' names ' + t + ': its issuer issued it while recognized there. A recognition grants no authority; it tells a verifier that trusts the recognizer to accept this issuer.',
    checks: (f, t) => [
      t + ' is signed by its issuer, and its bytes match the digest ' + f + ' pins for it in relatedResource.',
      t + ' is about the issuer of ' + f + ', and recognizes it for the action and main scope that ' + f + ' needs.',
      t + ' was in force, neither suspended nor revoked, at the time asked about.',
      'It counts only for a verifier that trusts the issuer of ' + t + '; a verifier that trusts the body directly never needs it.',
      'Where the issuer object carries recognizedIn, it must name ' + t + ' too.',
    ],
  },
  support: {
    verb: 'is backed by', field: 'evidence', path: 'evidence[]',
    lede: (f, t) => f + ' lists ' + t + ' as evidence for its claim. Evidence supports a claim; it grants no authority.',
    checks: (f, t) => [
      t + ' is signed by its issuer, and its bytes match the digest ' + f + ' pins for it in relatedResource.',
      t + ' concerns the same material, property and matrix, and reports the outcome required.',
      'The issuer of ' + t + ' is itself authorized for such work: ' + t + ' has an authority link of its own.',
      'The verifier\'s profile says whether this evidence is required.',
    ],
  },
};
/** Terms on the page, in one line each (a page adds its own through cfg.glossary). */
const GLOSSARY = [
  ['Verifiable credential', 'A signed statement: an issuer says something about a subject. Anyone can check the signature, offline.'],
  ['issuer', 'Who signs the credential.'],
  ['credentialSubject', 'Whom or what the credential is about: a body, a laboratory, a batch of material.'],
  ['type', 'What kind of credential it is, for example RmAccreditation; the type fixes the schema and the rules that apply.'],
  ['termsOfUse', 'The terms under which a credential was issued. Here every upward link is one, and its type says what it means. Drawn as lines.'],
  ['relatedResource', 'The digests of the credentials it points to. A verifier refuses a parent whose bytes do not match.'],
  ['evidence', 'Supporting documents, such as a study. Evidence supports a claim and grants nothing. Drawn dotted: “is backed by”.'],
  ['credentialStatus', 'A bit in the issuer\'s status list. Set, it means revoked or suspended.'],
  ['validFrom, validUntil', 'When the credential holds. Authority and status must hold when the activity happened.'],
  ['proof', 'The issuer\'s signature over the exact bytes (eddsa-rdfc-2022, Ed25519).'],
  ['Root (trust anchor)', 'An issuer the verifier trusts without a parent. Every climb must end at one.'],
  ['Verifier profile', 'The verifier\'s own rules: its roots, what it asks, its decision rule and its limits.'],
];

export function fail(message) {
  $('board').innerHTML = "<div class='verdict unknown'><div class='mark'>?</div><div><b>Not established</b><small>" + esc(message) + '</small></div></div>';
}

/**
 * cfg: {
 *   name, story, actors, assets, defaults, parts, evaluate(state), rows (2 or 3),
 *   layout: 'board' | 'vertical'       the actor board (default) or authority lanes and an explainer,
 *   lanes: [{ id, label, actors, cells: [{ code, col: 'c1'|'c2'|'mid' }], actions?, extra? }]
 *                                       the vertical layout's lanes, top to bottom,
 *   hosts: { host: 'the party' }       names for plain-word reasons,
 *   facts(code, doc) -> lines          what a card shows,
 *   types: { type: 'what it is' }      one sentence per credential type, for the explainers,
 *   content(code, doc, ctx) -> html    what a credential says, laid out for reading (the explainer),
 *   glossary: [[term, meaning]]        terms added to the generic ones,
 *   actions: { actorId: [spec] }       spec: { type: 'toggle'|'seg'|'form', key, label, control, options, when(st), fields, submit },
 *   settings: [spec], note             the verifier's settings and a line under them,
 *   tags(code, st, R) -> [{ text, bad }] state tags on a card in evaluated steps,
 *   withheld(st) -> code               the card the holder leaves out,
 *   changedList(uri, st) -> bool       a status list re-signed in this browser,
 *   extras: { actorId: { row, html(ctx) } } a wallet or an object in a column,
 *   handovers(ctx) -> [[from, to]]     dashed lines: 'code:X', '#id' or 'verdict',
 *   objectAt(ctx) -> actorId           the column the physical object sits in,
 *   band(st) -> bool                   show the international-recognition note,
 *   panels: { name: ctx -> html }      pages drawn instead of the board (a step's `panel`),
 *   hideLocked: bool                   in guided steps, hide a locked control unless its value
 *                                       differs from the default or the spec says `always`,
 *   columns: css                        grid columns on wide screens (actors, then the verifier),
 *   leaveOut: { key, control }         clicking a citation line leaves its credential out
 *                                       (state[key] = the credential's code; again restores it),
 * }
 */
export async function mountBoard(api, cfg) {
  const STORY = cfg.story, ACTORS = cfg.actors, ASSETS = cfg.assets;
  const vertical = cfg.layout === 'vertical';
  const actor = id => ACTORS.find(a => a.id === id);
  const index = id => STORY.findIndex(s => s.id === id);
  // `selection`: the credential ({ kind: 'card', code }) or link ({ kind: 'link', from, to,
  // linkKind }) the vertical layout explains; `last`: the evaluation on screen.
  let step = 0, overrides = {}, seq = 0, redraw, defaultResult, selection = null, last;
  $('evalTime').textContent = new Date(api.EVALUATION_TIME).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  // Plain words first: a party's identifier becomes its name, a credential its code.
  const name = host => cfg.hosts[host] ?? host;
  const plain = text => String(text ?? '')
    .replace(/https:\/\/([a-z-]+)\.vc4qi\.example\/controller/g, (_, h) => name(h))
    .replace(/https:\/\/([a-z-]+)\.vc4qi\.example\/status\/(suspension\/)?[a-z0-9/]*/g, (_, h, sus) => name(h) + "'s " + (sus ? 'suspension' : 'revocation') + ' list')
    .replace(/https:\/\/[a-z-]+\.vc4qi\.example\/credentials\/([A-Za-z0-9-]+)/g, '$1')
    .replace(/urn:vc4qi-example:[a-z]+:/g, '')
    .replace(/^./, c => c.toUpperCase());

  // ---------------------------------------------------------------- state and address

  const KEYS = Object.keys(cfg.defaults);
  const stateOf = s => ({ ...cfg.defaults, ...(s.state ?? {}), ...overrides });
  const live = control => (STORY[step].unlock ?? []).includes(control);
  const reached = id => step >= index(id);
  // Links to the other layout keep the step and its state.
  const keepHash = () => document.querySelectorAll('a[data-keep-hash]').forEach(a => { a.href = a.getAttribute('href').split('#')[0] + location.hash; });
  function readHash() {
    const [id, query] = location.hash.replace(/^#/, '').split('/');
    step = Math.max(0, index(id));
    overrides = {};
    if (STORY[step].part === 'play' && query) {
      for (const [k, v] of new URLSearchParams(query)) if (KEYS.includes(k)) overrides[k] = v === 'true' ? true : v === 'false' ? false : v;
    }
    keepHash();
  }
  function writeHash() {
    const s = STORY[step];
    const query = s.part === 'play' ? new URLSearchParams(Object.entries(overrides).map(([k, v]) => [k, String(v)])).toString() : '';
    history.replaceState(null, '', '#' + s.id + (query ? '/' + query : ''));
    keepHash();
  }
  function goStep(i) {
    if (i < 0 || i >= STORY.length || i === step) return;
    // "Your turn" starts from the step before it; every other step starts from its own state.
    overrides = STORY[i].part === 'play' ? { ...(STORY[step].state ?? {}), ...overrides } : {};
    step = i; selection = null; writeHash(); render();
  }
  function set(key, value) { overrides = { ...overrides, [key]: value }; writeHash(); render(); }
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || $('sheet').open || /INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName)) return;
    const d = e.key === 'ArrowRight' || e.key === 'PageDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'PageUp' ? -1 : 0;
    if (d) { e.preventDefault(); goStep(step + d); }
  });
  window.addEventListener('hashchange', () => { readHash(); selection = null; render(); });

  // ---------------------------------------------------------------- credentials and their links

  const assetOf = (R, uri) => ASSETS.find(a => R.uris[a.code] === uri);
  // A credential left out still shows what it says (from the generated chain).
  const textOf = (R, uri) => R.texts[uri] ?? defaultResult?.texts[uri];
  const docOf = (R, uri) => { const t = textOf(R, uri); try { return t ? JSON.parse(t) : null; } catch { return null; } };
  /** What a credential points to: its termsOfUse grants and recognitions, then its evidence. */
  const linksOf = d => [
    ...(d?.termsOfUse ?? []).filter(t => t.authorizationCredential?.id).map(t => ({ to: t.authorizationCredential.id, kind: 'authority', policy: t.type })),
    ...(d?.termsOfUse ?? []).filter(t => t.recognitionCredential?.id).map(t => ({ to: t.recognitionCredential.id, kind: 'recognition', policy: t.type })),
    ...(d?.evidence ?? []).map(e => e.id).filter(Boolean).map(to => ({ to, kind: 'support', policy: 'evidence' })),
  ];
  /** A credential by its full name and the paper's code: “Producer accreditation A”. */
  const nameOf = (R, uri) => { const a = assetOf(R, uri); return a ? a.label + ' ' + short(uri) : short(uri); };
  const cites = d => linksOf(d).map(l => short(l.to) + (l.kind === 'support' ? ' (evidence)' : ''));
  // The link's own name: its policy type (IssuedUnderPolicy, RecognitionPolicy, a binding's
  // policy) or evidence.
  const linkWords = (from, l) => '<b>' + esc(short(from)) + '</b> ' + LINK[l.kind].verb + ' <b>' + esc(short(l.to)) + "</b> <code>" + esc(l.policy ?? LINK[l.kind].field) + '</code>';
  const noneAbove = code => code + ' names no authority above it: only a verifier that trusts its issuer relies on it.';
  const stateMark = s => s === 'unused' ? "<span class='state st-not_required'>not relied on</span>"
    : "<span class='state st-" + s + "'>" + (LABEL[s] ?? s) + '</span>';
  const edgeWords = (e, to) => !e ? 'not evaluated' : e.state === 'unused' ? 'verified, not relied on: this verifier\'s root lies below ' + to
    : e.state === 'not_required' ? 'not required by this profile' : LABEL[e.state];

  /** The checks that touched a credential: run on it, or naming it in their reason. */
  function checksFor(uri, R) {
    const code = short(uri).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const word = new RegExp('(^|[\\s(])' + code + '(?=[\\s:.,)]|$)');
    return R.questions.map(q => {
      const seen = new Set();
      const rows = q.details.filter(e => String(e.nodeUse).split(' | ')[0] === uri || e.reason.includes(uri) || word.test(e.reason))
        .filter(e => { const k = e.predicate + e.reason + e.state; if (seen.has(k)) return false; seen.add(k); return true; });
      return { q, rows };
    }).filter(x => x.rows.length);
  }
  const traceHTML = rows => "<ul class='trace'>" + rows.map(e => "<li><span class='state st-" + e.state + "' aria-label='" + esc(LABEL[e.state]) + "'>" + ICON[e.state] + '</span><span>'
    + esc(plain(e.reason)) + '<code>gate ' + e.gate + ' · ' + esc(e.predicate) + '</code></span></li>').join('') + '</ul>';

  // ---------------------------------------------------------------- navigation and header

  function renderNav() {
    const s = STORY[step];
    $('storynav').innerHTML = "<ol class='parts' aria-label='Parts'>" + cfg.parts.map(p => "<li><button type='button' data-part='" + p.id + "'"
        + (p.id === s.part ? " aria-current='step'" : '') + '>' + esc(p.label) + '</button></li>').join('') + '</ol>'
      + "<div class='stepper'><button type='button' id='terms' class='terms'>Terms</button><span>Step " + (step + 1) + ' of ' + STORY.length + '</span>'
      + "<button type='button' id='prev'" + (step === 0 ? ' disabled' : '') + '>← Back</button>'
      + "<button type='button' id='next'" + (step === STORY.length - 1 ? ' disabled' : '') + '>Next →</button></div>';
    $('storynav').querySelectorAll('[data-part]').forEach(b => b.addEventListener('click', () => goStep(STORY.findIndex(x => x.part === b.dataset.part))));
    $('prev').addEventListener('click', () => goStep(step - 1));
    $('next').addEventListener('click', () => goStep(step + 1));
    $('terms').addEventListener('click', () => openSheet('Terms used here', "<dl class='map gloss'>"
      + [...GLOSSARY, ...(cfg.glossary ?? [])].map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>'));
    const part = cfg.parts.findIndex(p => p.id === s.part);
    $('kicker').textContent = 'Part ' + (part + 1) + ' · ' + cfg.parts[part].label;
    $('title').textContent = s.title; $('lead').textContent = s.text;
    document.title = s.title + ' · ' + cfg.name + ' · VC4QI';
    const who = id => "<span class='who'><span class='mono-badge sm'>" + esc(actor(id).mono) + '</span>' + esc(actor(id).name) + '</span>';
    // Up to three acting parties are named; with more, the outlined columns show them. The
    // line keeps its height when empty, so the board does not move.
    $('acts').innerHTML = s.part === 'play' || s.acts.length > 3 ? '' : s.acts.map(who).join("<span class='arrow' aria-label='to'>→</span>");
    $('presentation').hidden = !s.presentation;
    if (s.presentation) {
      $('presentTable').innerHTML = '<thead><tr><th>Credential</th><th>Reveal</th><th>Could stay hidden</th></tr></thead><tbody>'
        + s.presentation.map(r => '<tr><td>' + esc(r.credential) + '</td><td>' + esc(r.reveal) + '</td><td>' + esc(r.hide) + '</td></tr>').join('') + '</tbody>';
    }
  }
  // ---------------------------------------------------------------- the board

  const issuedSoFar = () => new Set(STORY.slice(0, step + 1).flatMap(s => s.issues ?? []));
  // An actor's column appears once the chain reaches it; "Your turn" shows everyone.
  const joined = id => STORY[step].part === 'play' || STORY.slice(0, step + 1).some(s => (s.joins ?? []).includes(id));
  const ctxOf = (R, mode) => ({ step, st: stateOf(STORY[step]), R, mode, reached, short, esc });
  const aboutCol = (a, R, mode) => a.about === 'object' ? cfg.objectAt(ctxOf(R, mode)) : a.about;

  // A card not yet issued (`pending`) is drawn invisible, so that the rows have their final
  // height from the first step and nothing moves when it is issued.
  function cardHTML(a, R, mode, pending = false) {
    const s = STORY[step], st = stateOf(s), uri = R.uris[a.code], node = R.graph.nodes.find(n => n.uri === uri);
    const fresh = mode === 'build' && (s.issues ?? []).includes(a.code);
    const missing = mode === 'evaluate' && cfg.withheld(st) === a.code;
    // A credential left out keeps its content on its card, so the card keeps its size; it
    // is marked "not shown".
    const d = docOf(R, uri);
    const state = mode === 'evaluate' ? (missing ? 'not_established' : node?.state ?? 'not_established') : '';
    const tags = [];
    if (fresh) tags.push("<span class='tag t-new'>new</span>");
    if (mode === 'evaluate') for (const t of cfg.tags(a.code, st, R)) tags.push("<span class='tag" + (t.bad ? ' t-bad' : '') + "'>" + esc(t.text) + '</span>');
    if (missing) tags.push("<span class='tag'>not shown</span>");
    if (R.signedLive.includes(uri)) tags.push("<span class='tag t-live'>signed in this browser</span>");
    const about = a.about === 'object' ? '<b>' + esc(a.aboutLabel) + '</b>' : "<span class='who-inline'>" + esc(actor(a.about).mono) + '</span>';
    const foot = "<span class='foot'>signed by <span class='who-inline'>" + esc(actor(a.actor).mono) + '</span> · about ' + about
      + (d && cites(d).length ? "<span class='cites'>· cites " + esc(cites(d).join(', ')) + '</span>' : '') + '</span>';
    const sel = vertical ? selection ?? defaultSelection(mode) : selection;
    const selected = sel?.kind === 'card' && sel.code === a.code;
    return "<button type='button' class='card " + a.kind + (state ? ' s-' + state : '') + (missing ? ' missing' : '') + (fresh ? ' fresh' : '')
      + (fresh && a.kind === 'claim' ? ' handover' : '') + (selected ? ' selected' : '') + (pending ? " pending' aria-hidden='true' tabindex='-1" : '')
      + "' data-code='" + esc(a.code) + "' data-uri='" + esc(uri) + "'>"
      + "<span class='top'><span class='code'>" + esc(short(uri) || a.code) + "</span><span class='kind'>" + esc(a.label)
      + (a.kind === 'evidence' ? " <span class='tag'>evidence</span>" : '') + (a.tag ? " <span class='tag'>" + esc(a.tag) + '</span>' : '') + '</span>'
      + (state ? "<span class='icon' aria-label='" + esc(LABEL[state]) + "'>" + ICON[state] + '</span>' : '') + '</span>'
      + "<span class='type'>" + esc(typeOf(d)).replace(/([a-z])([A-Z])/g, '$1<wbr>$2') + '</span>'
      + (d ? cfg.facts(a.code, d).map(l => "<span class='fact'>" + esc(l) + '</span>').join('') : '')
      + "<span class='tags'>" + tags.join('') + '</span>' + foot + '</button>';
  }

  function seg(spec, value) {
    const on = live(spec.control);
    return "<div class='field'><span>" + esc(spec.label) + "</span><div class='seg" + (on ? '' : ' locked') + "' role='group' aria-label='" + esc(spec.label) + "'"
      + (on ? '' : " title='Available in Your turn'") + '>'
      + spec.options.map(o => "<button type='button' data-key='" + spec.key + "' data-value='" + esc(o.id) + "' aria-pressed='" + (String(o.id) === String(value)) + "'"
        + (on ? '' : ' disabled') + '>' + esc(o.label) + (o.sub ? '<small>' + esc(o.sub) + '</small>' : '') + '</button>').join('') + '</div></div>';
  }
  function toggle(spec, value) {
    const on = live(spec.control);
    return "<button type='button' class='act' data-key='" + spec.key + "' data-value='" + !value + "' aria-pressed='" + value + "'"
      + (on ? '' : " disabled title='Available in Your turn'") + '>' + esc(spec.label) + '</button>';
  }
  function form(spec, st) {
    if (!live(spec.control)) return '';
    return "<form class='custom' data-form>" + spec.fields.map(f => '<label>' + esc(f.label) + (f.options
      ? "<select name='" + f.key + "'>" + f.options.map(o => '<option' + (o === st[f.key] ? ' selected' : '') + '>' + esc(o) + '</option>').join('') + '</select>'
      : "<input name='" + f.key + "' inputmode='decimal' pattern='[0-9]+(\\.[0-9]+)?' required value='" + esc(st[f.key]) + "'>") + '</label>').join('')
      + "<button class='act' type='submit'>" + esc(spec.submit) + '</button></form>';
  }
  // So that a step fits the screen, a guided step shows its live controls and any whose
  // value it changed; "Your turn" shows them all.
  const hidden = (spec, st) => cfg.hideLocked && STORY[step].part !== 'play' && !live(spec.control) && !spec.always
    && (spec.key === undefined || String(st[spec.key]) === String(cfg.defaults[spec.key]));
  const control = (spec, st) => (spec.when && !spec.when(st)) || hidden(spec, st) ? ''
    : spec.type === 'toggle' ? toggle(spec, st[spec.key]) : spec.type === 'seg' ? seg(spec, st[spec.key]) : form(spec, st);

  // The decisive reason, in the evaluator's words: a restriction, an anchor or a missing
  // credential before the summary.
  function reason(R) {
    const q = Object.fromEntries(R.questions.map(x => [x.id, x]));
    const entries = R.questions.flatMap(x => x.details);
    if (R.result.decision === 'reject') {
      const failed = ORDER.find(k => q[k].state === 'contradicted');
      if (failed === 'authentic') return [failed, 'The signature no longer matches the bytes.'];
      if (failed === 'authorized') {
        const e = q.authorized.details.find(x => x.state === 'contradicted' && x.predicate.startsWith('restriction:'))
          ?? q.authorized.details.find(x => x.state === 'contradicted' && (x.predicate.startsWith('claim-coverage:') || /^route:[^:]+:/.test(x.predicate)));
        if (e) {
          if (e.predicate.startsWith('restriction:')) return [failed, first(e.reason)];
          // A failed recognition says first that the body is not the verifier's own root;
          // the verdict leads with why the recognition failed.
          const sentences = e.reason.split(/(?<=\.) /);
          const beyondRoot = sentences.filter(x => !/is not a configured trust anchor\.$/.test(x));
          return [failed, sentences.find(x => /No single|not in the|≠/.test(x)) ?? (beyondRoot.length ? first(beyondRoot.join(' ')) : e.reason)];
        }
        const sentence = q.authorized.summary.split(/(?<=\.) /).find(x => /No single|≠/.test(x));
        if (sentence) return [failed, sentence];
      }
      return [failed, first(q[failed].summary)];
    }
    const anchor = [...entries.map(e => e.reason), ...R.questions.map(x => x.summary)].join(' ').split(/(?<=\.) /).find(x => /not a configured trust anchor/.test(x));
    if (anchor) return [null, anchor];
    // Asked about an earlier time with only later status lists.
    if (entries.some(e => e.state === 'not_established' && /historical status is unavailable/.test(e.reason))) {
      return [null, 'Status lists signed later cannot say what held at that time.'];
    }
    const gone = q.authentic.details.find(e => e.state === 'not_established' && /unavailable/.test(e.reason));
    if (gone) return [null, short(gone.reason.split(':').slice(0, 2).join(':')) + ', which the chain cites, was not shown.'];
    const open = ORDER.filter(k => q[k].state === 'not_established');
    return [null, open.length === 1 ? first(q[open[0]].summary) : 'Cannot tell whether it is ' + open.map(k => QUESTIONS[k].toLowerCase()).join(' or ') + '.'];
  }
  // With `trace`, each question opens to the checks behind it (the vertical explainer).
  function verdictHTML(R, mode, trace = false) {
    if (mode === 'build') return "<div class='verdict idle'><div class='mark'>–</div><div><b>Nothing to decide yet</b><small>The chain is being built.</small></div></div>";
    if (mode === 'present') return "<div class='verdict idle'><div class='mark'>–</div><div><b>Not evaluated</b><small>Presentations are a placeholder.</small></div></div>";
    const d = R.result.decision, [failed, why] = reason(R);
    const [cls, mark, title] = d === 'accept' ? ['', '✓', 'Accepted'] : d === 'reject' ? ['reject', '✕', 'Rejected: not ' + (QUESTIONS[failed] ?? '').toLowerCase()] : ['unknown', '?', 'Not established'];
    const q = Object.fromEntries(R.questions.map(x => [x.id, x]));
    const ok = q.fit.state === 'established' ? 'Authorized and fit for use under its rule.' : 'Authentic, current, authorized and supported.';
    return "<div class='verdict " + cls + "' role='status'><div class='mark'>" + mark + '</div><div><b>' + esc(title) + '</b><small>' + esc(d === 'accept' ? ok : plain(why)) + '</small></div></div>'
      + "<div class='questions'>" + R.questions.map(x => "<details class='q s-" + x.state + "'><summary><b>" + QUESTIONS[x.id] + "</b><span class='state st-" + x.state + "'>"
        + LABEL[x.state] + "</span></summary><p class='why'>" + esc(plain(x.summary)) + '</p>' + (trace && x.details.length ? traceHTML(x.details) : '') + '</details>').join('') + '</div>';
  }

  const note = st => (typeof cfg.note === 'function' ? cfg.note(st) : cfg.note) ?? '';
  function pubsHTML(a, st, mode) {
    return a.publishes.map(p => {
      const changed = mode === 'evaluate' && p.uri && cfg.changedList(p.uri, st);
      // A re-signed list is filled, not relabelled: the same width, so the header keeps its height.
      return "<span class='pub" + (changed ? ' changed' : '') + "'" + (changed ? " title='Re-signed in this browser'" : '') + '>' + esc(p.label)
        + (changed ? "<span class='vh'>, re-signed in this browser</span>" : '') + '</span>';
    }).join('');
  }
  // A column the chain has not reached yet is drawn with its content but invisible, so the
  // board keeps its shape when the column appears.
  function colHTML(a, R, mode) {
    const absent = !joined(a.id);
    const s = STORY[step], st = stateOf(s), play = s.part === 'play', ctx = ctxOf(R, mode);
    const acting = !absent && !play && s.acts.includes(a.id), dim = !absent && !play && !acting;
    const issued = issuedSoFar();
    const rows = Array.from({ length: cfg.rows }, (_, i) => i + 1);
    const slot = row => {
      if (a.id === 'verifier') return row === 1 ? verdictHTML(R, mode) : row === 2
        ? cfg.settings.map(spec => control(spec, st)).join('') + (note(st) ? "<p class='limit'>" + note(st) + '</p>' : '') : '';
      const extra = cfg.extras[a.id]?.row === row ? cfg.extras[a.id].html(ctx) : '';
      return ASSETS.filter(x => x.actor === a.id && x.row === row).map(x => cardHTML(x, R, mode, absent || (mode === 'build' && !issued.has(x.code)))).join('') + extra;
    };
    return "<section class='col" + (absent ? ' absent' : '') + (acting ? ' acting' : '') + (dim ? ' dim' : '') + "' data-actor='" + a.id + "'"
      + (absent ? " aria-hidden='true' inert" : " aria-label='" + esc(a.name) + "'") + '>'
      + "<div class='colhead'><div class='name'><span class='mono-badge'>" + esc(a.mono) + '</span><h2>' + esc(a.name) + '</h2></div>'
      + "<div class='pubs'>" + pubsHTML(a, st, mode) + "</div><div class='roles'></div></div>"
      + rows.map(row => "<div class='slot r" + row + "'>" + slot(row) + '</div>').join('')
      + "<div class='actions'>" + (cfg.actions[a.id] ?? []).map(spec => control(spec, st)).join('') + '</div></section>';
  }

  // ---------------------------------------------------------------- the vertical layout

  // One lane per level of authority, top to bottom. A lane the chain has not reached is
  // laid out invisibly, like a column on the board.
  function laneHTML(lane, R, mode) {
    const s = STORY[step], st = stateOf(s), play = s.part === 'play', ctx = ctxOf(R, mode);
    const absent = !lane.actors.some(joined);
    const acting = !absent && !play && lane.actors.some(id => s.acts.includes(id)), dim = !absent && !play && !acting;
    const issued = issuedSoFar();
    const cell = c => "<div class='cell " + c.col + "'>" + cardHTML(ASSETS.find(x => x.code === c.code), R, mode, absent || (mode === 'build' && !issued.has(c.code))) + '</div>';
    const extra = lane.extra && cfg.extras[lane.extra] ? "<div class='cell mid'>" + cfg.extras[lane.extra].html(ctx) + '</div>' : '';
    // No published-list pills here: a re-signed list shows as the pressed action and the
    // card's tag, so a lane head never changes height.
    const who = lane.actors.map(id => "<div class='name'><span class='mono-badge'>" + esc(actor(id).mono) + '</span><h2>' + esc(actor(id).name) + '</h2></div>').join('');
    const acts = (lane.actions ?? lane.actors).flatMap(id => cfg.actions[id] ?? []).map(spec => control(spec, st)).join('');
    return "<section class='lane" + (absent ? ' absent' : '') + (acting ? ' acting' : '') + (dim ? ' dim' : '') + "' data-lane='" + esc(lane.id) + "'"
      + (absent ? " aria-hidden='true' inert" : " aria-label='" + esc(lane.label) + "'") + '>'
      + "<div class='lanehead'><p class='verb'>" + esc(lane.label) + '</p>' + who + "<div class='actions'>" + acts + '</div></div>'
      + "<div class='cells'>" + (lane.cells ?? []).map(cell).join('') + extra + '</div></section>';
  }
  const linkButton = (from, l, R, mode) => {
    const e = R && R.graph.edges.find(x => x.from === from && x.to === l.to);
    return "<button type='button' class='linkbtn' data-link='" + esc(from + '|' + l.to + '|' + l.kind) + "'>" + linkWords(from, l) + '</button>'
      + (mode === 'evaluate' && e ? ' ' + stateMark(e.state) : '');
  };
  /** What the right-hand column shows unless something is selected: the step's newest
   * credential while building, the credential checked once the verifier decides. */
  const defaultSelection = mode => {
    const issued = STORY[step].issues ?? [];
    return { kind: 'card', code: mode === 'build' && issued.length ? issued.at(-1) : 'D' };
  };
  /** The right-hand column: the credential or link selected, with the step's new credentials as shortcuts. */
  function sideHTML(R, mode) {
    const sel = selection ?? defaultSelection(mode);
    const issued = mode === 'build' ? STORY[step].issues ?? [] : [];
    const chips = issued.length > 1 ? "<p class='newchips'>New in this step: " + issued.map(code => "<button type='button' class='code' data-card='" + esc(code) + "'>"
      + esc(short(R.uris[code])) + '</button>').join(' ') + '</p>' : '';
    return chips + (sel.kind === 'card' ? detailHTML(sel.code, R, mode) : linkHTML(sel, R, mode));
  }
  /** The left-hand policy check (vertical): the verdict, the six questions and the verifier's settings. */
  function checkHTML(R, mode) {
    const st = stateOf(STORY[step]);
    return "<h2 class='sidehead'><span class='mono-badge sm'>V</span>Verifier</h2>" + verdictHTML(R, mode)
      + "<div class='settings'>" + cfg.settings.map(spec => control(spec, st)).join('') + (note(st) ? "<p class='limit'>" + note(st) + '</p>' : '') + '</div>';
  }

  // ---------------------------------------------------------------- explaining a credential or a link

  function mapping(a, uri, R) {
    const d = docOf(R, uri);
    const rows = [['Signed by', actor(a.actor).name], ['Is about', a.about === 'object' ? a.aboutLabel : actor(a.about).name], ['Held by', actor(a.heldBy).name]];
    if (d) {
      rows.push(['Valid', String(d.validFrom).slice(0, 10) + ' – ' + String(d.validUntil).slice(0, 10)]);
      const status = [d.credentialStatus].flat().filter(Boolean).map(x => x.statusPurpose + ' #' + x.statusListIndex).join(', ');
      if (status) rows.push(['Status entries', status]);
      rows.push(['Proof', d.proof.cryptosuite + ', key ' + short(d.proof.verificationMethod.split('#')[0]) + '#' + d.proof.verificationMethod.split('#')[1]]);
    }
    return rows;
  }
  function detailHTML(code, R, mode) {
    const a = ASSETS.find(x => x.code === code), uri = R.uris[code], d = docOf(R, uri), type = typeOf(d);
    const node = R.graph.nodes.find(n => n.uri === uri);
    const missing = mode === 'evaluate' && cfg.withheld(stateOf(STORY[step])) === code;
    let h = "<article class='detail'><header class='dhead'><span class='code'>" + esc(short(uri)) + '</span><b>' + esc(a.label) + "</b><code class='type'>" + esc(type) + '</code>'
      + (mode === 'evaluate' ? stateMark(missing ? 'not_established' : node?.state ?? 'not_established') : '') + '</header>';
    if (cfg.types?.[type]) h += "<p class='lede'>" + esc(cfg.types[type]) + '</p>';
    if (missing) h += "<p class='lede'>The holder left it out: the verifier never saw it.</p>";
    if (d && cfg.content) h += '<h3>What it says</h3>' + cfg.content(code, d, ctxOf(R, mode));
    const up = linksOf(d);
    h += '<h3>Points to</h3>' + (up.length ? "<ul class='linklist'>" + up.map(l => '<li>' + linkButton(uri, l, R, mode) + '</li>').join('') + '</ul>'
      : "<p class='none'>" + esc(noneAbove(short(uri))) + '</p>');
    const down = ASSETS.map(x => R.uris[x.code]).filter(u => u && u !== uri).flatMap(u => linksOf(docOf(R, u)).filter(l => l.to === uri).map(l => [u, l]));
    if (down.length) h += '<h3>Pointed to by</h3>' + "<ul class='linklist'>" + down.map(([u, l]) => '<li>' + linkButton(u, l, R, mode) + '</li>').join('') + '</ul>';
    h += '<h3>Envelope</h3>' + "<dl class='map'>" + mapping(a, uri, R).map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>';
    if (mode === 'evaluate') {
      const groups = checksFor(uri, R);
      h += '<h3>What the verifier checked</h3>' + (groups.length ? groups.map(g => "<p class='qhead'><b>" + QUESTIONS[g.q.id] + '</b> ' + stateMark(g.q.state) + '</p>' + traceHTML(g.rows)).join('')
        : "<p class='none'>No check read it: the verifier did not need it.</p>");
    }
    return h + "<details class='raw'><summary>Signed bytes</summary><pre>" + esc(R.texts[uri] ?? (textOf(R, uri) ? 'Not shown to the verifier.' : '')) + '</pre></details></article>';
  }
  function linkHTML(sel, R, mode) {
    const L = LINK[sel.linkKind], f = short(sel.from), t = short(sel.to);
    const fa = assetOf(R, sel.from), ta = assetOf(R, sel.to), fd = docOf(R, sel.from), td = docOf(R, sel.to);
    const e = R.graph.edges.find(x => x.from === sel.from && x.to === sel.to);
    const pin = (fd?.relatedResource ?? []).find(r => r.id === sel.to);
    const entry = sel.linkKind === 'authority' ? (fd?.termsOfUse ?? []).find(x => x.authorizationCredential?.id === sel.to)
      : sel.linkKind === 'recognition' ? (fd?.termsOfUse ?? []).find(x => x.recognitionCredential?.id === sel.to)
      : (fd?.evidence ?? []).find(x => x.id === sel.to);
    const card = (code, x) => "<button type='button' class='code' data-card='" + esc(code) + "'>" + esc(x) + '</button>';
    let h = "<article class='detail'><header class='dhead'>" + card(fa?.code, f) + "<span class='verb'>" + L.verb + '</span>' + card(ta?.code, t)
      + (mode === 'evaluate' && e ? stateMark(e.state) : '') + '</header>'
      + "<p class='lede'>" + esc(L.lede(nameOf(R, sel.from), nameOf(R, sel.to))) + '</p>'
      + "<dl class='map'><dt>In</dt><dd>" + esc(f + ' · ' + (fa?.label ?? '') + ' (' + typeOf(fd) + ')') + '</dd>'
      + '<dt>Field</dt><dd><code>' + L.path + '</code></dd>'
      + '<dt>Points to</dt><dd>' + esc(t + ' · ' + (ta?.label ?? '') + ' (' + typeOf(td) + ')') + '</dd>'
      + (pin ? '<dt>Pinned by</dt><dd><code>relatedResource</code> ' + esc(pin.digestSRI.slice(0, 20)) + '…</dd>' : '')
      + (mode === 'evaluate' ? '<dt>Here</dt><dd>' + esc(edgeWords(e, t)) + '</dd>' : '') + '</dl>'
      + "<details class='raw' open><summary>The link in " + esc(f) + "'s signed bytes</summary><pre>"
      + esc(JSON.stringify({ [L.field]: [entry], ...(pin ? { relatedResource: [pin] } : {}) }, null, 2)) + '</pre></details>'
      + '<h3>What a verifier checks on this link</h3><ul class="checks">' + L.checks(nameOf(R, sel.from), nameOf(R, sel.to)).map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>';
    if (mode === 'evaluate') {
      const rows = checksFor(sel.to, R).flatMap(g => g.rows).filter(x => x.gate >= 1);
      h += '<h3>Checks run here that read ' + esc(t) + '</h3>' + (rows.length ? traceHTML(rows) : "<p class='none'>None: the verifier did not need " + esc(t) + '.</p>');
    }
    return h + '</article>';
  }
  // The sheet's title names what is explained; the explainer's own header says which one.
  const titleOf = sel => sel.kind === 'card' ? 'Credential' : 'Link';
  /** Explain a credential or a link: beside the lanes (vertical), or in the sheet (board). */
  function show(sel) {
    if (!last) return;
    const side = $('board').querySelector('.side');
    if (vertical && side && getComputedStyle(side).display !== 'none') { selection = sel; renderSide(); return; }
    openSheet(titleOf(sel), sel.kind === 'card' ? detailHTML(sel.code, last.R, last.mode) : linkHTML(sel, last.R, last.mode));
  }
  function openSheet(title, html) {
    $('sheetTitle').textContent = title;
    $('sheetContent').innerHTML = html;
    wireDetail($('sheetContent'));
    const s = $('sheet'); if (!s.open) { if (s.showModal) s.showModal(); else s.setAttribute('open', ''); }
    $('sheetContent').scrollTop = 0;
  }
  function renderSide() {
    const side = $('board').querySelector('.side');
    if (!side || !last) return;
    side.innerHTML = sideHTML(last.R, last.mode);
    side.scrollTop = 0;
    wireDetail(side);
    const sel = selection ?? defaultSelection(last.mode);
    $('board').querySelectorAll('.flow .card').forEach(c => c.classList.toggle('selected', sel.kind === 'card' && sel.code === c.dataset.code));
  }

  // ---------------------------------------------------------------- lines

  /**
   * Which sides a line from box a to box b leaves and enters: the sides facing each other,
   * along the axis with the larger clear gap.
   */
  function sidesOf(a, b) {
    const gapX = Math.max(b.left - a.right, a.left - b.right), gapY = Math.max(b.top - a.bottom, a.top - b.bottom);
    if (gapX > 0 && (gapY <= 0 || gapX >= gapY)) {
      const right = b.left >= a.right;
      return { out: right ? 'right' : 'left', in: right ? 'left' : 'right', gap: gapX };
    }
    const down = b.top >= a.bottom;
    return { out: down ? 'bottom' : 'top', in: down ? 'top' : 'bottom', gap: Math.max(gapY, 0) };
  }
  const NORMAL = { right: [1, 0], left: [-1, 0], bottom: [0, 1], top: [0, -1] };
  /** A point on a side of box r, at fraction f along it; `entry` keeps a side entry high on a tall card. */
  function port(r, side, f, entry) {
    if (side === 'top' || side === 'bottom') return [r.left + r.width * (0.25 + 0.5 * f), side === 'top' ? r.top : r.bottom];
    const y = entry ? r.top + 24 + (Math.min(r.height - 24, 96) - 24) * f : r.top + r.height * (0.3 + 0.4 * f);
    return [side === 'left' ? r.left : r.right, y];
  }
  /**
   * The curve of a line: out of one side, into the other, at the given ports. The control
   * points never reach past the gap between the boxes, so the line does not loop behind a
   * card. The head is drawn along the line's own last stretch (as long as the head) and the
   * line stops at its base, so the head always points the way the visible line runs.
   */
  function routeLine(a, b, sides, fOut = 0.5, fIn = 0.5) {
    const p0 = port(a, sides.out, fOut, false), p3 = port(b, sides.in, fIn, true), n0 = NORMAL[sides.out], n3 = NORMAL[sides.in];
    const k = Math.min(Math.hypot(p3[0] - p0[0], p3[1] - p0[1]) * 0.4, 90, Math.max(sides.gap, 14));
    return [p0, [p0[0] + n0[0] * k, p0[1] + n0[1] * k], [p3[0] + n3[0] * k, p3[1] + n3[1] * k], p3];
  }
  const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  /** The cubic split at t (de Casteljau): the part before t, as a path, and the point at t. */
  function splitAt([p0, p1, p2, p3], t) {
    const a = lerp(p0, p1, t), b = lerp(p1, p2, t), c = lerp(p2, p3, t), ab = lerp(a, b, t), bc = lerp(b, c, t), m = lerp(ab, bc, t);
    return { d: 'M' + p0.join(' ') + ' C' + a.join(' ') + ' ' + ab.join(' ') + ' ' + m.join(' '), at: m };
  }
  const HEAD = 11, HALF = 5.5;
  function lineSVG(curve, cls, fill) {
    const end = curve[3];
    let t = 1, cut;
    // Step back along the curve until the remaining stretch is as long as the head.
    do { t -= 0.01; cut = splitAt(curve, t); } while (t > 0.05 && Math.hypot(end[0] - cut.at[0], end[1] - cut.at[1]) < HEAD);
    const u = [(end[0] - cut.at[0]) / HEAD, (end[1] - cut.at[1]) / HEAD], n = [-u[1] * HALF, u[0] * HALF];
    const base = cut.at, head = [end, [base[0] + n[0], base[1] + n[1]], [base[0] - n[0], base[1] - n[1]]].map(p => p.map(x => x.toFixed(1)).join(' '));
    const full = 'M' + curve[0].join(' ') + ' C' + curve[1].join(' ') + ' ' + curve[2].join(' ') + ' ' + curve[3].join(' ');
    return { svg: "<path class='edge " + cls + "' d='" + cut.d + "'/><path class='edge-head' d='M" + head.join(' L') + " z' fill='" + fill + "'/>", full };
  }

  function drawLines(R, mode) {
    const board = $('board'), host = vertical ? board.querySelector('.flow') : board, svg = host?.querySelector(':scope > svg.lines');
    const labelLayer = host?.querySelector(':scope > svg.labels');
    if (!svg || getComputedStyle(svg).display === 'none') return;
    const base = host.getBoundingClientRect();
    const rel = el => { const r = el.getBoundingClientRect(); return { left: r.left - base.left, right: r.right - base.left, top: r.top - base.top, bottom: r.bottom - base.top, width: r.width, height: r.height }; };
    const box = uri => host.querySelector(".card:not(.pending)[data-uri='" + CSS.escape(uri) + "']");
    const find = ref => ref === 'verdict' ? board.querySelector('.col[data-actor="verifier"] .verdict')
      : ref.startsWith('#') ? host.querySelector(ref) : ref.startsWith('code:') ? box(R.uris[ref.slice(5)]) : null;
    const colour = v => ({ established: 'var(--ok)', not_required: 'var(--ok)', contradicted: 'var(--bad)', not_established: 'var(--unk)', plain: 'var(--soft)' }[v]);
    const codeOf = uri => Object.keys(R.uris).find(code => R.uris[code] === uri);
    const leave = cfg.leaveOut && mode === 'evaluate' && live(cfg.leaveOut.control);
    const out = [], labels = [];
    // Lines that meet on one side of a card share it: their ends are spread along the side,
    // in the order of where they come from, so heads never overlap and lines do not cross.
    const plan = R.graph.edges.map(e => {
      const from = box(e.from), to = box(e.to);
      if (!from || !to) return null;
      const a = rel(from), b = rel(to);
      return { e, a, b, sides: sidesOf(a, b), fOut: 0.5, fIn: 0.5 };
    }).filter(Boolean);
    const spread = (key, along, set) => {
      const groups = new Map();
      for (const p of plan) { const k = key(p); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(p); }
      for (const g of groups.values()) g.sort((x, y) => along(x) - along(y)).forEach((p, i) => set(p, (i + 1) / (g.length + 1)));
    };
    const centre = (r, side) => side === 'top' || side === 'bottom' ? r.left + r.width / 2 : r.top + r.height / 2;
    spread(p => p.e.to + '|' + p.sides.in, p => centre(p.a, p.sides.in), (p, f) => { p.fIn = f; });
    spread(p => p.e.from + '|' + p.sides.out, p => centre(p.b, p.sides.out), (p, f) => { p.fOut = f; });
    // In a build step, each new line carries the name of the field it is.
    const fresh = new Set(mode === 'build' ? (STORY[step].issues ?? []).map(code => R.uris[code]) : []);
    for (const { e, a, b, sides, fOut, fIn } of plan) {
      const state = mode === 'evaluate' && e.state !== 'unused' ? e.state : 'plain';
      const curve = routeLine(a, b, sides, fOut, fIn);
      const line = lineSVG(curve, e.kind + ' e-' + state, colour(state));
      if (fresh.has(e.from)) {
        const [x, y] = splitAt(curve, 0.5).at;
        const policy = linksOf(docOf(R, e.from)).find(l => l.to === e.to && l.kind === e.kind)?.policy ?? LINK[e.kind].field;
        labels.push("<text class='edge-label' x='" + x.toFixed(1) + "' y='" + y.toFixed(1) + "'>" + esc(policy) + '</text>');
      }
      const code = codeOf(e.to), leaving = leave && code && code !== 'D';
      const left = leaving && stateOf(STORY[step])[cfg.leaveOut.key] === code;
      // A wide transparent copy of the line takes the click: explain the link, or (where the
      // holder may leave credentials out) leave that credential out.
      out.push(line.svg + "<path class='edge-hit' d='" + line.full + "' data-from='" + esc(e.from) + "' data-to='" + esc(e.to) + "' data-kind='" + e.kind + "'"
        + (leaving ? " data-leave='" + esc(code) + "'" : '') + '><title>' + (leaving ? (left ? 'Show ' : 'Leave out ') + esc(code)
        : esc(short(e.from)) + ' ' + LINK[e.kind].verb + ' ' + esc(short(e.to)) + ': click to explain') + '</title></path>');
    }
    for (const [from, to] of cfg.handovers(ctxOf(R, mode))) {
      if (to === 'verdict' && (vertical || !joined('verifier'))) continue;
      const a = find(from), b = find(to);
      if (a && b) { const ra = rel(a), rb = rel(b); out.push(lineSVG(routeLine(ra, rb, sidesOf(ra, rb)), 'handover', colour('plain')).svg); }
    }
    svg.innerHTML = out.join('');
    // Labels sit in their own layer above the cards, so a narrow gap never hides one.
    if (labelLayer) labelLayer.innerHTML = labels.join('');
    svg.querySelectorAll('.edge-hit').forEach(el => el.addEventListener('click', () => {
      if (el.dataset.leave) { const key = cfg.leaveOut.key; set(key, stateOf(STORY[step])[key] === el.dataset.leave ? '' : el.dataset.leave); return; }
      show({ kind: 'link', from: el.dataset.from, to: el.dataset.to, linkKind: el.dataset.kind });
    }));
  }

  // ---------------------------------------------------------------- wiring

  function labelRoles(a, R, mode) {
    const tags = {};
    const add = (id, t) => (tags[id] ??= []).push(t);
    add(a.actor, 'signs'); add(aboutCol(a, R, mode), 'is about'); add(a.heldBy, 'holds');
    document.querySelectorAll('.col').forEach(c => { const r = c.querySelector('.roles'); if (r) r.innerHTML = (tags[c.dataset.actor] ?? []).map(t => "<span class='role'>" + t + '</span>').join(''); });
  }
  const clearRoles = () => document.querySelectorAll('.roles').forEach(r => { r.innerHTML = ''; });
  function wireCards(R, mode) {
    $('board').querySelectorAll('.card[data-code]:not(.pending)').forEach(el => {
      const a = ASSETS.find(x => x.code === el.dataset.code);
      if (!vertical) {
        el.addEventListener('mouseenter', () => labelRoles(a, R, mode)); el.addEventListener('focus', () => labelRoles(a, R, mode));
        el.addEventListener('mouseleave', clearRoles); el.addEventListener('blur', clearRoles);
      }
      el.addEventListener('click', () => show({ kind: 'card', code: a.code }));
    });
  }
  function wireControls(root) {
    root.querySelectorAll('[data-key]').forEach(b => b.addEventListener('click', () => {
      const v = b.dataset.value;
      set(b.dataset.key, v === 'true' ? true : v === 'false' ? false : v);
    }));
    root.querySelectorAll('form[data-form]').forEach(f => f.addEventListener('submit', e => {
      e.preventDefault();
      overrides = { ...overrides, ...Object.fromEntries([...new FormData(f)].map(([k, v]) => [k, String(v)])) };
      writeHash(); render();
    }));
  }
  function wireDetail(root) {
    root.querySelectorAll('[data-link]').forEach(b => b.addEventListener('click', () => {
      const [from, to, linkKind] = b.dataset.link.split('|');
      show({ kind: 'link', from, to, linkKind });
    }));
    root.querySelectorAll('[data-card]').forEach(b => b.addEventListener('click', () => { if (b.dataset.card) show({ kind: 'card', code: b.dataset.card }); }));
  }
  $('sheetClose').addEventListener('click', () => { const s = $('sheet'); if (s.close) s.close(); else s.removeAttribute('open'); });
  $('sheet').addEventListener('click', function (e) { if (e.target === this && this.close) this.close(); });

  // ---------------------------------------------------------------- render

  async function render() {
    const my = ++seq, s = STORY[step], board = $('board');
    const mode = s.panel ? 'panel' : s.part === 'build' ? 'build' : s.part === 'present' ? 'present' : 'evaluate';
    renderNav();
    document.body.dataset.mode = mode;
    document.body.dataset.layout = vertical ? 'vertical' : 'board';
    $('band').hidden = !(mode === 'evaluate' && cfg.band(stateOf(s)));
    board.classList.toggle('vertical', vertical);
    if (!vertical) {
      board.classList.toggle('rows-3', cfg.rows === 3);
      // One grid column per actor (the verifier's column is wider).
      const actorColumns = ACTORS.filter(a => a.id !== 'verifier').length;
      board.style.setProperty('--actors', String(actorColumns));
      board.classList.toggle('many', actorColumns > 4);
      if (cfg.columns) board.style.setProperty('--cols', cfg.columns);
    }
    // A panel step draws a page instead of the board: it reads the generated credentials
    // and evaluates nothing.
    const panel = $('panel');
    if (panel) panel.hidden = mode !== 'panel';
    board.hidden = mode === 'panel';
    if ($('legend')) $('legend').hidden = mode === 'panel';
    const vcheck = vertical ? $('vcheck') : null;
    if (vcheck) vcheck.hidden = mode === 'panel' || mode === 'build';
    if (mode === 'panel') {
      const R = defaultResult ??= await cfg.evaluate({});
      if (my !== seq) return;
      panel.innerHTML = cfg.panels[s.panel](ctxOf(R, mode));
      redraw = undefined;
      return;
    }
    const busy = vertical ? vcheck?.querySelector('.verdict') : board.querySelector('.col[data-actor="verifier"] .slot.r1');
    const busyHTML = "<div class='verdict busy'><div class='mark'>…</div><div><b>Evaluating</b><small>Signing and checking in your browser.</small></div></div>";
    if (busy && mode === 'evaluate') { if (vertical) busy.outerHTML = busyHTML; else busy.innerHTML = busyHTML; }
    // Build and presentation steps evaluate nothing; they read the generated credentials.
    defaultResult ??= await cfg.evaluate({});
    const R = mode === 'evaluate' ? await cfg.evaluate(stateOf(s)) : defaultResult;
    if (my !== seq) return;
    last = { R, mode };
    board.innerHTML = vertical
      ? "<div class='flow'><svg class='lines' aria-hidden='true'></svg><svg class='labels' aria-hidden='true'></svg>" + cfg.lanes.map(l => laneHTML(l, R, mode)).join('') + "</div><aside class='side' aria-live='polite'>" + sideHTML(R, mode) + '</aside>'
      : "<svg class='lines' aria-hidden='true'></svg><svg class='labels' aria-hidden='true'></svg>" + ACTORS.map(a => colHTML(a, R, mode)).join('');
    wireCards(R, mode); wireControls(board);
    if (vertical) {
      wireDetail(board.querySelector('.side'));
      if (vcheck) { vcheck.innerHTML = mode === 'evaluate' ? checkHTML(R, mode) : ''; wireControls(vcheck); }
    }
    redraw = () => drawLines(R, mode);
    requestAnimationFrame(redraw);
  }
  window.addEventListener('resize', () => redraw?.());
  readHash();
  await render();
}
