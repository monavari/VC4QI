// SPDX-License-Identifier: Apache-2.0
// The actor board shared by the RM and GS stories (site/demo/rm, site/demo/gs). One
// column per actor, credentials in their issuer's column, citations drawn across the
// columns, every action in the column of the actor who can take it. The bundle
// (verifier.js) supplies the story, actors, assets and the evaluator; the page supplies
// a small configuration: what a card shows, which actions each actor has, what the
// verifier can change. Design rules: apps/demonstrator/DESIGN.md.
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const short = iri => String(iri ?? '').split('#').pop().split(/[/:]/).pop();
const LABEL = { established: '✓ yes', contradicted: '✕ no', not_established: '? cannot tell', not_asked: 'not asked', not_required: 'not required' };
const ICON = { established: '✓', contradicted: '✕', not_established: '?' };
const QUESTIONS = { authentic: 'Authentic', current: 'Current', understood: 'Understood', authorized: 'Authorized', supported: 'Supported', fit: 'Fit for use' };
const ORDER = ['authentic', 'current', 'understood', 'authorized', 'supported', 'fit'];
const first = s => String(s).split(/(?<=\.) /)[0];

export function fail(message) {
  $('board').innerHTML = "<div class='verdict unknown'><div class='mark'>?</div><div><b>Not established</b><small>" + esc(message) + '</small></div></div>';
}

/**
 * cfg: {
 *   name, story, actors, assets, defaults, parts, evaluate(state), rows (2 or 3),
 *   hosts: { host: 'the party' }       names for plain-word reasons,
 *   facts(code, doc) -> lines          what a card shows,
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
  const actor = id => ACTORS.find(a => a.id === id);
  const index = id => STORY.findIndex(s => s.id === id);
  let step = 0, overrides = {}, seq = 0, redraw, defaultResult;
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
  function readHash() {
    const [id, query] = location.hash.replace(/^#/, '').split('/');
    step = Math.max(0, index(id));
    overrides = {};
    if (STORY[step].part === 'play' && query) {
      for (const [k, v] of new URLSearchParams(query)) if (KEYS.includes(k)) overrides[k] = v === 'true' ? true : v === 'false' ? false : v;
    }
  }
  function writeHash() {
    const s = STORY[step];
    const query = s.part === 'play' ? new URLSearchParams(Object.entries(overrides).map(([k, v]) => [k, String(v)])).toString() : '';
    history.replaceState(null, '', '#' + s.id + (query ? '/' + query : ''));
  }
  function goStep(i) {
    if (i < 0 || i >= STORY.length || i === step) return;
    // "Your turn" starts from the step before it; every other step starts from its own state.
    overrides = STORY[i].part === 'play' ? { ...(STORY[step].state ?? {}), ...overrides } : {};
    step = i; writeHash(); render();
  }
  function set(key, value) { overrides = { ...overrides, [key]: value }; writeHash(); render(); }
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || $('sheet').open || /INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName)) return;
    const d = e.key === 'ArrowRight' || e.key === 'PageDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'PageUp' ? -1 : 0;
    if (d) { e.preventDefault(); goStep(step + d); }
  });
  window.addEventListener('hashchange', () => { readHash(); render(); });

  // ---------------------------------------------------------------- navigation and header

  function renderNav() {
    const s = STORY[step];
    $('storynav').innerHTML = "<ol class='parts' aria-label='Parts'>" + cfg.parts.map(p => "<li><button type='button' data-part='" + p.id + "'"
        + (p.id === s.part ? " aria-current='step'" : '') + '>' + esc(p.label) + '</button></li>').join('') + '</ol>'
      + "<div class='stepper'><span>Step " + (step + 1) + ' of ' + STORY.length + '</span>'
      + "<button type='button' id='prev'" + (step === 0 ? ' disabled' : '') + '>← Back</button>'
      + "<button type='button' id='next'" + (step === STORY.length - 1 ? ' disabled' : '') + '>Next →</button></div>';
    $('storynav').querySelectorAll('[data-part]').forEach(b => b.addEventListener('click', () => goStep(STORY.findIndex(x => x.part === b.dataset.part))));
    $('prev').addEventListener('click', () => goStep(step - 1));
    $('next').addEventListener('click', () => goStep(step + 1));
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

  const cites = d => [...(d.termsOfUse ?? []).map(t => short(t.authorizationCredential?.id)), ...(d.evidence ?? []).map(e => short(e.id) + ' (evidence)')];
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
    // A credential left out still shows what it says (from the generated chain), so its card
    // keeps its size; it is marked "not shown".
    const text = R.texts[uri] ?? defaultResult?.texts[uri];
    const d = text ? JSON.parse(text) : null;
    const state = mode === 'evaluate' ? (missing ? 'not_established' : node?.state ?? 'not_established') : '';
    const tags = [];
    if (fresh) tags.push("<span class='tag t-new'>new</span>");
    if (mode === 'evaluate') for (const t of cfg.tags(a.code, st, R)) tags.push("<span class='tag" + (t.bad ? ' t-bad' : '') + "'>" + esc(t.text) + '</span>');
    if (missing) tags.push("<span class='tag'>not shown</span>");
    if (R.signedLive.includes(uri)) tags.push("<span class='tag t-live'>signed in this browser</span>");
    const about = a.about === 'object' ? '<b>' + esc(a.aboutLabel) + '</b>' : "<span class='who-inline'>" + esc(actor(a.about).mono) + '</span>';
    const foot = "<span class='foot'>signed by <span class='who-inline'>" + esc(actor(a.actor).mono) + '</span> · about ' + about
      + (d && cites(d).length ? "<span class='cites'>· cites " + esc(cites(d).join(', ')) + '</span>' : '') + '</span>';
    return "<button type='button' class='card " + a.kind + (state ? ' s-' + state : '') + (missing ? ' missing' : '') + (fresh ? ' fresh' : '')
      + (fresh && a.kind === 'claim' ? ' handover' : '') + (pending ? " pending' aria-hidden='true' tabindex='-1" : '')
      + "' data-code='" + esc(a.code) + "' data-uri='" + esc(uri) + "'>"
      + "<span class='top'><span class='code'>" + esc(short(uri) || a.code) + "</span><span class='kind'>" + esc(a.label)
      + (a.kind === 'evidence' ? " <span class='tag'>evidence</span>" : '') + (a.tag ? " <span class='tag'>" + esc(a.tag) + '</span>' : '') + '</span>'
      + (state ? "<span class='icon' aria-label='" + esc(LABEL[state]) + "'>" + ICON[state] + '</span>' : '') + '</span>'
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
  function verdictHTML(R, mode) {
    if (mode === 'build') return "<div class='verdict idle'><div class='mark'>–</div><div><b>Nothing to decide yet</b><small>The chain is being built.</small></div></div>";
    if (mode === 'present') return "<div class='verdict idle'><div class='mark'>–</div><div><b>Not evaluated</b><small>Presentations are a placeholder.</small></div></div>";
    const d = R.result.decision, [failed, why] = reason(R);
    const [cls, mark, title] = d === 'accept' ? ['', '✓', 'Accepted'] : d === 'reject' ? ['reject', '✕', 'Rejected: not ' + (QUESTIONS[failed] ?? '').toLowerCase()] : ['unknown', '?', 'Not established'];
    const q = Object.fromEntries(R.questions.map(x => [x.id, x]));
    const ok = q.fit.state === 'established' ? 'Authorized and fit for use under its rule.' : 'Authentic, current, authorized and supported.';
    return "<div class='verdict " + cls + "' role='status'><div class='mark'>" + mark + '</div><div><b>' + esc(title) + '</b><small>' + esc(d === 'accept' ? ok : plain(why)) + '</small></div></div>'
      + "<div class='questions'>" + R.questions.map(x => "<details class='q s-" + x.state + "'><summary><b>" + QUESTIONS[x.id] + "</b><span class='state st-" + x.state + "'>"
        + LABEL[x.state] + "</span></summary><p class='why'>" + esc(plain(x.summary)) + '</p></details>').join('') + '</div>';
  }

  const note = st => (typeof cfg.note === 'function' ? cfg.note(st) : cfg.note) ?? '';
  // A column the chain has not reached yet is drawn with its content but invisible, so the
  // board keeps its shape when the column appears.
  function colHTML(a, R, mode) {
    const absent = !joined(a.id);
    const s = STORY[step], st = stateOf(s), play = s.part === 'play', ctx = ctxOf(R, mode);
    const acting = !absent && !play && s.acts.includes(a.id), dim = !absent && !play && !acting;
    const pubs = a.publishes.map(p => {
      const changed = mode === 'evaluate' && p.uri && cfg.changedList(p.uri, st);
      // A re-signed list is filled, not relabelled: the same width, so the header keeps its height.
      return "<span class='pub" + (changed ? ' changed' : '') + "'" + (changed ? " title='Re-signed in this browser'" : '') + '>' + esc(p.label)
        + (changed ? "<span class='vh'>, re-signed in this browser</span>" : '') + '</span>';
    }).join('');
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
      + "<p class='does'>" + esc(a.does) + "</p><div class='pubs'>" + pubs + "</div><div class='roles'></div></div>"
      + rows.map(row => "<div class='slot r" + row + "'>" + slot(row) + '</div>').join('')
      + "<div class='actions'>" + (cfg.actions[a.id] ?? []).map(spec => control(spec, st)).join('') + '</div></section>';
  }

  // ---------------------------------------------------------------- lines between the columns

  function drawLines(R, mode) {
    const board = $('board'), svg = board.querySelector('svg');
    if (!svg || getComputedStyle(svg).display === 'none') return;
    const base = board.getBoundingClientRect();
    const box = uri => board.querySelector(".col:not(.absent) .card:not(.pending)[data-uri='" + CSS.escape(uri) + "']");
    const find = ref => ref === 'verdict' ? board.querySelector('.col[data-actor="verifier"] .verdict')
      : ref.startsWith('#') ? board.querySelector(ref) : ref.startsWith('code:') ? box(R.uris[ref.slice(5)]) : null;
    const path = (from, to, cls, marker) => {
      if (!from || !to) return '';
      const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
      let x1, y1, x2, y2, d;
      if (a.left >= b.right || b.left >= a.right) {
        const right = a.left >= b.right;
        x1 = (right ? a.left : a.right) - base.left; y1 = a.top + a.height / 2 - base.top;
        x2 = (right ? b.right : b.left) - base.left; y2 = b.top + Math.min(b.height / 2, 40) - base.top;
        const mx = (x1 + x2) / 2;
        d = 'M' + x1 + ' ' + y1 + ' C' + mx + ' ' + y1 + ' ' + mx + ' ' + y2 + ' ' + x2 + ' ' + y2;
      } else {
        const down = b.top >= a.bottom;
        x1 = a.left + a.width / 2 - base.left; y1 = (down ? a.bottom : a.top) - base.top;
        x2 = b.left + b.width / 2 - base.left; y2 = (down ? b.top : b.bottom) - base.top;
        const my = (y1 + y2) / 2;
        d = 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + my + ' ' + x2 + ' ' + my + ' ' + x2 + ' ' + y2;
      }
      return "<path class='edge " + cls + "' d='" + d + "' marker-end='url(#m-" + marker + ")'/>";
    };
    const colour = v => ({ established: 'var(--ok)', not_required: 'var(--ok)', contradicted: 'var(--bad)', not_established: 'var(--unk)', plain: 'var(--soft)' }[v]);
    const markers = ['established', 'not_required', 'contradicted', 'not_established', 'plain'].map(k => "<marker id='m-" + k
      + "' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M0 0 L10 5 L0 10 z' fill='" + colour(k) + "'/></marker>").join('');
    const codeOf = uri => Object.keys(R.uris).find(code => R.uris[code] === uri);
    const leave = cfg.leaveOut && mode === 'evaluate' && live(cfg.leaveOut.control);
    const edges = R.graph.edges.map(e => {
      const state = mode === 'evaluate' && e.state !== 'unused' ? e.state : 'plain';
      const drawn = path(box(e.from), box(e.to), e.kind + ' e-' + state, state);
      const code = codeOf(e.to);
      // A wide transparent copy of the line takes the click: leave that credential out.
      if (!leave || !drawn || !code || code === 'D') return drawn;
      const d = /d='([^']+)'/.exec(drawn)[1];
      const out = stateOf(STORY[step])[cfg.leaveOut.key] === code;
      return drawn + "<path class='edge-hit' data-leave='" + esc(code) + "' d='" + d + "'><title>" + (out ? 'Show ' : 'Leave out ') + esc(code) + '</title></path>';
    });
    const handovers = cfg.handovers(ctxOf(R, mode)).filter(([, to]) => to !== 'verdict' || joined('verifier'))
      .map(([from, to]) => path(find(from), find(to), 'handover', 'plain'));
    svg.innerHTML = '<defs>' + markers + '</defs>' + edges.join('') + handovers.join('');
    svg.querySelectorAll('[data-leave]').forEach(el => el.addEventListener('click', () => {
      const code = el.dataset.leave, key = cfg.leaveOut.key;
      set(key, stateOf(STORY[step])[key] === code ? '' : code);
    }));
  }

  // ---------------------------------------------------------------- selecting a credential

  function mapping(a, uri, R) {
    const d = R.texts[uri] ? JSON.parse(R.texts[uri]) : null;
    const rows = [['Signed by', actor(a.actor).name], ['Is about', a.about === 'object' ? a.aboutLabel : actor(a.about).name], ['Held by', actor(a.heldBy).name]];
    if (d) {
      rows.push(['Cites', cites(d).join(', ') || 'nothing']);
      rows.push(['Valid', String(d.validFrom).slice(0, 10) + ' – ' + String(d.validUntil).slice(0, 10)]);
      const status = [d.credentialStatus].flat().filter(Boolean).map(x => x.statusPurpose + ' #' + x.statusListIndex).join(', ');
      if (status) rows.push(['Status entries', status]);
      rows.push(['Proof', d.proof.cryptosuite + ', key ' + short(d.proof.verificationMethod.split('#')[0]) + '#' + d.proof.verificationMethod.split('#')[1]]);
    }
    return rows;
  }
  function labelRoles(a, R, mode) {
    const tags = {};
    const add = (id, t) => (tags[id] ??= []).push(t);
    add(a.actor, 'signs'); add(aboutCol(a, R, mode), 'is about'); add(a.heldBy, 'holds');
    document.querySelectorAll('.col').forEach(c => { const r = c.querySelector('.roles'); if (r) r.innerHTML = (tags[c.dataset.actor] ?? []).map(t => "<span class='role'>" + t + '</span>').join(''); });
  }
  const clearRoles = () => document.querySelectorAll('.roles').forEach(r => { r.innerHTML = ''; });
  function wire(R, mode) {
    document.querySelectorAll('.col:not(.absent) .card[data-code]:not(.pending)').forEach(el => {
      const a = ASSETS.find(x => x.code === el.dataset.code);
      el.addEventListener('mouseenter', () => labelRoles(a, R, mode)); el.addEventListener('focus', () => labelRoles(a, R, mode));
      el.addEventListener('mouseleave', clearRoles); el.addEventListener('blur', clearRoles);
      el.addEventListener('click', () => {
        $('sheetTitle').textContent = el.querySelector('.code').textContent + ' · ' + a.label;
        $('sheetMap').innerHTML = mapping(a, el.dataset.uri, R).map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('');
        $('sheetBody').textContent = R.texts[el.dataset.uri] ?? 'Not shown to the verifier.';
        const s = $('sheet'); if (s.showModal) s.showModal(); else s.setAttribute('open', '');
      });
    });
    document.querySelectorAll('#board [data-key]').forEach(b => b.addEventListener('click', () => {
      const v = b.dataset.value;
      set(b.dataset.key, v === 'true' ? true : v === 'false' ? false : v);
    }));
    document.querySelectorAll('#board form[data-form]').forEach(f => f.addEventListener('submit', e => {
      e.preventDefault();
      overrides = { ...overrides, ...Object.fromEntries([...new FormData(f)].map(([k, v]) => [k, String(v)])) };
      writeHash(); render();
    }));
  }
  $('sheetClose').addEventListener('click', () => { const s = $('sheet'); if (s.close) s.close(); else s.removeAttribute('open'); });
  $('sheet').addEventListener('click', function (e) { if (e.target === this && this.close) this.close(); });

  // ---------------------------------------------------------------- render

  async function render() {
    const my = ++seq, s = STORY[step];
    const mode = s.panel ? 'panel' : s.part === 'build' ? 'build' : s.part === 'present' ? 'present' : 'evaluate';
    renderNav();
    document.body.dataset.mode = mode;
    $('band').hidden = !(mode === 'evaluate' && cfg.band(stateOf(s)));
    $('board').classList.toggle('rows-3', cfg.rows === 3);
    // One grid column per actor (the verifier's column is wider).
    const actorColumns = ACTORS.filter(a => a.id !== 'verifier').length;
    $('board').style.setProperty('--actors', String(actorColumns));
    $('board').classList.toggle('many', actorColumns > 4);
    if (cfg.columns) $('board').style.setProperty('--cols', cfg.columns);
    // A panel step draws a page instead of the board: it reads the generated credentials
    // and evaluates nothing.
    const panel = $('panel');
    if (panel) panel.hidden = mode !== 'panel';
    $('board').hidden = mode === 'panel';
    if ($('legend')) $('legend').hidden = mode === 'panel';
    if (mode === 'panel') {
      const R = defaultResult ??= await cfg.evaluate({});
      if (my !== seq) return;
      panel.innerHTML = cfg.panels[s.panel](ctxOf(R, mode));
      redraw = undefined;
      return;
    }
    const busy = $('board').querySelector('.col[data-actor="verifier"] .slot.r1');
    if (busy && mode === 'evaluate') busy.innerHTML = "<div class='verdict busy'><div class='mark'>…</div><div><b>Evaluating</b><small>Signing and checking in your browser.</small></div></div>";
    // Build and presentation steps evaluate nothing; they read the generated credentials.
    defaultResult ??= await cfg.evaluate({});
    const R = mode === 'evaluate' ? await cfg.evaluate(stateOf(s)) : defaultResult;
    if (my !== seq) return;
    $('board').innerHTML = "<svg aria-hidden='true'></svg>" + ACTORS.map(a => colHTML(a, R, mode)).join('');
    wire(R, mode);
    redraw = () => drawLines(R, mode);
    requestAnimationFrame(redraw);
  }
  window.addEventListener('resize', () => redraw?.());
  readHash();
  await render();
}
