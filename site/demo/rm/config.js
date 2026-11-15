// SPDX-License-Identifier: Apache-2.0
// The RM story's configuration, shared by its two layouts: the actor board (board.html) and
// the vertical lanes with an explainer (index.html, the default). board.js documents every field.
import { short } from '../board.js';

// Values are PTB D-SI 2.2.1 reals; their unit identifiers are shown by symbol.
const UNIT_SYMBOL = { '\\milli\\gram\\kilogram\\tothe{-1}': 'mg/kg', '\\kilogram\\kilogram\\tothe{-1}': 'kg/kg', '\\percent': '%' };
const sym = unit => UNIT_SYMBOL[unit] ?? String(unit ?? '');
/** A result's D-SI real, flattened for display: value, U, k, unit symbol and identifier, QUDT kind. */
const dsiValue = quantity => {
  const r = quantity?.real ?? {}, e = r.measurementUncertaintyUnivariate?.expandedMU ?? {};
  return { value: r.value, U: e.valueExpandedMU, k: e.coverageFactor, unit: sym(r.unit), unitId: r.unit, kind: r.quantityTypeQUDT };
};
// 997000 mg/kg reads as 997 g/kg, the way an annex writes it.
const amount = (v, unit) => unit === 'mg/kg' && Number(v) >= 1000 ? Number(v) / 1000 + ' g/kg' : v + ' ' + unit;
const range = r => {
  if (!r) return '';
  const unit = sym(r.unit);
  return Number(r.to) >= 1000 && unit === 'mg/kg' ? amount(r.from, unit) + ' – ' + amount(r.to, unit) : r.from + '–' + r.to + ' ' + unit;
};
const matrix = r => short(r.matrixIri) + (r.formIri ? ' ' + short(r.formIri).toLowerCase() + 's' : '');
const list = a => (a ?? []).map(short).join(', ');
// The sets an accreditation names (the binding's governed concepts), in words.
const SETS = { NonFerrousMetalsAndAlloys: 'non-ferrous metals and alloys', ElementContents: 'element contents', SolidForms: 'solid forms', CopperAlloys: 'copper alloys' };
const words = iri => SETS[short(iri)] ?? short(iri);
const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
const typeOf = d => [d?.type].flat().filter(Boolean).at(-1) ?? '';
function facts(code, d) {
  const s = d.credentialSubject ?? {}, r = (s.scope ?? [])[0] ?? {};
  // The main scopes the body is registered for (activity and standard), from the recognizer's register.
  if (code === 'R') return (s.registration ?? []).map(e => String(e.mainScope?.activity).replace('Reference material production', 'RM production')
    + ' · ' + String(e.mainScope?.standard?.name ?? short(e.mainScope?.standard?.id)).replace(/:\d{4}$/, ''));
  // The appointment: what the body may issue, where, and on what legal basis.
  if (code === 'APP') return ['May issue ' + (s.permissionFor ?? []).map(p => [p.types].flat().at(-1)).join(', '),
    short([(s.permissionFor ?? [])[0]?.jurisdiction].flat()[0] ?? '') + ' · ' + String([d.termsOfUse].flat()[0]?.legalBasis ?? '').replace(', Article ', ' Art. ')];
  if (code === 'A') return [cap(words(r.matrixIri)), cap((r.allowedPropertyIris ?? []).map(words).join(', ')) + ', ' + range(r.range), 'Methods ' + list(r.allowedMethodIris)];
  if (code === 'H') return [list(r.studyTypeIris) + ' studies of ' + (r.allowedPropertyIris ?? []).map(words).join(', '), cap(words(r.matrixIri))];
  if (code === 'O') return [list(r.allowedPropertyIris) + ' in ' + matrix(r) + ' · ' + range(r.range), 'Method ' + list(r.allowedMethodIris) + ' only'];
  if (code === 'S') return ['Disc lot 1: ' + short(s.outcomeIri).toLowerCase(), short(s.studyTypeIri) + ' of ' + short(s.propertyIri)];
  const res = s.materialPropertiesList?.[0]?.results?.[0] ?? {}, q = dsiValue(res.data?.quantity);
  return [short(res.propertyIri) + ' = ' + q.value + ' ± ' + q.U + ' ' + q.unit, 'k = ' + q.k + ' · method ' + short(res.methodIri)];
}

// ---------------------------------------------------------------- what a credential says
const ACTIVITY = { issueRmCertificate: 'issue RM certificates', maintainRmScope: 'maintain its own operational scope', issueRmStudy: 'issue RM studies' };
const PARTY = { nab: 'the national accreditation body (NAB)', lab: 'the laboratory', producer: 'the RM producer', 'global-aci': 'Global ACI (fictional)', state: 'the state (fictional)' };
const party = iri => { const m = /^https:\/\/([a-z-]+)\.vc4qi\.example\/controller$/.exec(String(iri)); return m ? PARTY[m[1]] ?? m[1] : short(iri); };
const day = t => String(t ?? '').slice(0, 10);
/** What a credential says, laid out for reading (the explainer's "What it says"). */
function content(code, d, { esc }) {
  const s = d.credentialSubject ?? {}, type = typeOf(d);
  const kv = rows => "<dl class='kv'>" + rows.filter(([, v]) => v !== undefined && v !== '').map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + v + '</dd>').join('') + '</dl>';
  if (type === 'RmCertificate') {
    const m = (s.materials ?? [])[0] ?? {};
    const rows = (s.materialPropertiesList ?? []).flatMap(set => set.results ?? []).map((r, i) => {
      const q = dsiValue(r.data?.quantity);
      return "<tr class='" + (i === 0 ? 'sel' : '') + "'><td>" + esc(short(r.propertyIri)) + (i === 0 ? ' · checked' : '') + "</td><td class='num'>" + esc(q.value) + "</td><td class='num'>"
        + esc(q.U) + ' (k = ' + esc(q.k) + ')</td><td>' + esc(q.unit) + "<br><code style='font-size:.78em;word-break:break-all'>" + esc(q.unitId) + '</code></td><td>' + esc(short(r.methodIri)) + '</td></tr>';
    }).join('');
    return "<div class='says'>" + kv([['Material', esc(m.name ?? '') + ' (' + esc(short(m.matrixIri)) + ', ' + esc(short(m.formIri).toLowerCase()) + ')'],
      ['Batch', esc(short(s.id))], ['Certified on', esc(day(s.activityTime))]])
      + "<table><thead><tr><th>Property</th><th class='num'>Value</th><th class='num'>U</th><th>Unit</th><th>Method</th></tr></thead><tbody>" + rows + '</tbody></table></div>';
  }
  if (type === 'HomogeneityStudy') {
    return "<div class='says'>" + kv([['Study', esc(short(s.studyTypeIri))], ['Of', esc(short(s.propertyIri)) + ' in ' + esc(short(s.matrixIri))],
      ['Batch', esc(short(s.id))], ['Outcome', '<b>' + esc(short(s.outcomeIri).toLowerCase()) + '</b>'], ['Performed', esc(day(s.activityTime))]]) + '</div>';
  }
  if (type === 'RecognizedEntityCredential') {
    return "<div class='says'>" + kv([['Recognizes', esc(s.name ?? party(s.id))],
      ['To', (s.recognizedTo ?? []).map(a => esc(a.action)).join(', ') || 'no stated action'],
      ['Main scopes', (s.registration ?? []).map(e => esc(e.mainScope?.activity) + ' · ' + esc(e.mainScope?.standard?.name)).join('<br>')],
      ['Valid', esc(day(d.validFrom) + ' – ' + day(d.validUntil))]])
      + "<p class='none'>A recognition: it grants no authority.</p></div>";
  }
  if (type === 'VerifiableAuthorisationForTrustChain') {
    const tou = [d.termsOfUse].flat()[0] ?? {};
    return "<div class='says'>" + kv([['Appoints', esc(party(s.id))],
      ['May issue', (s.permissionFor ?? []).map(p => esc([p.types].flat().at(-1)) + ' · ' + esc(short([p.jurisdiction].flat()[0] ?? ''))).join('<br>')],
      ['Legal basis', esc(tou.legalBasis ?? '')], ['Framework', esc(tou.trustFramework ?? '')],
      ['Valid', esc(day(d.validFrom) + ' – ' + day(d.validUntil))]])
      + "<p class='none'>The top of the chain: its term of use names the law, not another credential. The shape is EBSI's.</p></div>";
  }
  // A grant: to whom, what it permits, and its scope records.
  const record = r => '<li>' + [
    r.matrixIri && cap(words(r.matrixIri)) + (r.formIri ? ', ' + words(r.formIri).toLowerCase() : ''),
    r.allowedPropertyIris && 'properties: ' + (r.allowedPropertyIris ?? []).map(words).join(', '),
    r.range && 'range ' + range(r.range),
    r.allowedMethodIris && 'methods ' + list(r.allowedMethodIris),
    r.studyTypeIris && list(r.studyTypeIris) + ' studies',
  ].filter(Boolean).map(esc).join(' · ') + '</li>';
  return "<div class='says'>" + kv([['Granted to', esc(party(s.id))], ['May', (s.permittedActivity ?? []).map(a => esc(ACTIVITY[short(a)] ?? short(a))).join('; ')],
    ['Valid', esc(day(d.validFrom) + ' – ' + day(d.validUntil))]])
    + "<ul class='records'>" + (s.scope ?? []).map(record).join('') + '</ul></div>';
}

// ---------------------------------------------------------------- panel pages
const D178 = 'https://producer.vc4qi.example/credentials/RM178';
/** A credential's code: the last part of its id, which says what it is and of whom. */
let CODES = {}, ASSETS = [], ACTORS = [];
const codeOf = uri => CODES[short(uri)] ?? short(uri);
/** The five rules every issuer follows; a build step names the ones it applies. */
const RULES = [
  ['One credential per grant', 'An appointment, a recognition, an accreditation, a scope: each its own credential, with its own status.'],
  ['Point up and pin', 'Name the grant you were issued under (and any recognition) as a termsOfUse entry, with its digest, and stay within it: grants name sets, claims name members.'],
  ['Shake hands', "The parent names the child's issuer as its subject."],
  ['Evidence sits beside', 'A study supports a claim; it grants nothing.'],
  ['Each issuer keeps its status', 'Revocation and suspension are bits in the issuer’s own status lists, dated, kept so a past date can be asked about.'],
];
const ORIGIN = { w3c: ['W3C', 'A W3C standard or draft, used as written'], ebsi: ['EBSI', 'Reused from EBSI'], ours: ['VC4QI', 'New in VC4QI'] };
const org = (k, esc) => "<span class='org o-" + k + "' title='" + esc(ORIGIN[k][1]) + "'>" + ORIGIN[k][0] + '</span>';
/**
 * The closing page: the whole chain on one wide graph, read from the signed credentials.
 * Each node shows its code, name, type, kind and who signs it about whom; each link shows
 * the field it is, its type and target, and the digest that pins it; a number on a link is
 * the issuer rule it follows (hover a rule below to find it). Nothing is evaluated.
 */
function whole({ R, esc }) {
  const doc = code => JSON.parse(R.texts[R.uris[code]]);
  const D = doc('D'), A = doc('A'), H = doc('H'), O = doc('O'), S = doc('S'), REC = doc('R'), APP = doc('APP');
  // The digest a link carries: on the termsOfUse or evidence entry that names the credential.
  const pin = (d, to) => ([...[d.termsOfUse ?? []].flat(), ...(d.evidence ?? [])].find(e => e?.id === to)?.digestSRI ?? '').slice(0, 11) + '…';
  const res = D.credentialSubject.materialPropertiesList[0].results[0], q = dsiValue(res.data.quantity);
  const status = [D.credentialStatus].flat()[0];
  const T = (x, y, text, cls = '', anchor = 'start') => "<text x='" + x + "' y='" + y + "' class='" + cls + "' text-anchor='" + anchor + "'>" + esc(text) + '</text>';
  const mk = (x, y, n) => "<g class='mk r" + n + "'><circle cx='" + x + "' cy='" + y + "' r='11'/>" + T(x, y + 4.5, String(n), 'mkn', 'middle') + '</g>';
  // A node, read from the credential: its code (the last part of its id) and type, its
  // name; then the kind and who signs it about whom. A stripe gives the signer's group.
  const node = (x, y, w, h, d, kind, group, who, extra = []) => {
    const code = codeOf(d.id), cw = code.length * 9.2 + 12, kw = kind.length * 7.4 + 14;
    return "<g class='node'><rect x='" + x + "' y='" + y + "' width='" + w + "' height='" + h + "' rx='10' class='nb" + (kind === 'claim' ? ' claim' : '') + "'/>"
      + "<rect x='" + (x + 4) + "' y='" + (y + 6) + "' width='4' height='" + (h - 12) + "' rx='2' class='g-" + group + "'/>"
      + "<rect x='" + (x + 16) + "' y='" + (y + 12) + "' width='" + cw + "' height='22' rx='5' class='chip'/>" + T(x + 22, y + 28, code, 'code')
      + T(x + 26 + cw, y + 28, [d.type].flat().at(-1), 'type') + T(x + 16, y + 54, d.name ?? '', 'b')
      + "<rect x='" + (x + 16) + "' y='" + (y + 64) + "' width='" + kw + "' height='20' rx='10' class='kind k-" + kind + "'/>" + T(x + 23, y + 78, kind, 'kindt')
      + T(x + 26 + kw, y + 78, who, 's')
      + extra.map((line, i) => T(x + 16, y + 102 + i * 20, line, 's')).join('') + '</g>';
  };
  const line = (d, cls) => "<path d='" + d + "' class='ln " + cls + "' marker-end='url(#cf-arr)'/>";
  const label = (x, y, lines, anchor = 'start') => lines.map((l, i) => T(x, y + i * 17, l, i === 0 ? 'lf' : 'lm', anchor)).join('');
  // Codes and who signs about whom: read from the ids and the board's actors, not written here.
  const K = Object.fromEntries(['APP', 'R', 'A', 'H', 'O', 'S', 'D'].map(k => [k, codeOf(R.uris[k])]));
  const who = k => { const a = ASSETS.find(x => x.code === k); return monoOf(a.actor) + ' → ' + (a.about === 'object' ? a.aboutLabel : monoOf(a.about)); };
  const ev = [D.evidence].flat()[0];
  const legal = String([APP.termsOfUse].flat()[0]?.legalBasis ?? '').replace('Regulation (EC) No ', 'Reg. ').replace(', Article ', ' Art. ');
  const svg = "<svg viewBox='0 0 1600 720' role='img' aria-labelledby='cf-t'><title id='cf-t'>The reference-material chain: each credential, its type, and each link with its field and digest</title>"
    + "<defs><marker id='cf-arr' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M0 0 L10 5 L0 10 z' class='ah'/></marker></defs>"
    // links first, under the nodes: ACC-RMP and ACC-LAB up to the appointment (grant) and the recognition (no authority)
    + line('M240 240 C240 180 380 190 380 134', '') + line('M1300 240 C1300 170 420 200 420 134', '')
    + line('M300 240 C300 170 1180 200 1180 134', 'rec') + line('M1360 240 C1360 180 1220 190 1220 134', 'rec')
    + line('M270 410 L270 346', '') + line('M1330 410 L1330 346', '')
    + line('M690 570 C690 510 520 490 428 490', '') + line('M910 570 C910 510 1080 490 1172 490', 'dot')
    + line('M620 640 L410 640', '') + line('M980 640 L1190 640', '')
    // link labels: field · type → target · pin
    + label(24, 156, ['termsOfUse · IssuedUnderPolicy', K.A + ', ' + K.H + ' → ' + K.APP, 'digestSRI ' + pin(A, R.uris.APP)])
    + label(1576, 156, ['termsOfUse · RecognitionPolicy', K.A + ', ' + K.H + ' → ' + K.R + ' + recognizedIn', 'digestSRI ' + pin(A, R.uris.R)], 'end')
    + label(290, 370, ['termsOfUse · IssuedUnderPolicy → ' + K.A, 'digestSRI ' + pin(O, R.uris.A) + ' · within ' + K.A])
    + label(1310, 370, ['termsOfUse · IssuedUnderPolicy → ' + K.H, 'digestSRI ' + pin(S, R.uris.H)], 'end')
    + label(450, 432, ['termsOfUse · IssuedUnderPolicy', 'id → ' + K.O, 'digestSRI ' + pin(D, R.uris.O)])
    + label(1150, 432, ['evidence · ' + [ev.type].flat().at(-1), 'id → ' + K.S + ' · grants nothing', 'digestSRI ' + pin(D, R.uris.S)], 'end')
    + T(515, 628, 'credentialStatus', 'lf', 'middle') + T(515, 662, status.statusPurpose + ', bit ' + status.statusListIndex, 'lm', 'middle')
    + T(1085, 628, 'credentialSubject', 'lf', 'middle') + T(1085, 662, 'what it is about', 'lm', 'middle')
    + T(800, 60, 'a verifier climbs to the root it chose', 'lm', 'middle')
    // nodes
    + node(220, 10, 360, 118, APP, 'grant', 'authority', who('APP'), ['termsOfUse → law: ' + legal])
    + node(1050, 10, 300, 118, REC, 'recognition', 'authority', who('R'), ['grants no authority'])
    + node(120, 240, 300, 100, A, 'grant', 'authority', who('A'))
    + node(1180, 240, 300, 100, H, 'grant', 'authority', who('H'))
    + node(120, 410, 300, 100, O, 'grant', 'actor', who('O'))
    + node(1180, 410, 300, 100, S, 'result', 'actor', who('S'))
    + node(620, 570, 360, 140, D, 'claim', 'actor', who('D'),
      [short(res.propertyIri) + ' = ' + q.value + ' ± ' + q.U + ' ' + q.unit + ' · ' + short(res.methodIri) + ' · k = ' + q.k,
        '◆ ' + D.proof.cryptosuite + ' · valid ' + String(D.validFrom).slice(0, 10) + ' – ' + String(D.validUntil).slice(0, 10)])
    + "<g class='node'><rect x='196' y='612' width='208' height='56' rx='8' class='nb plain'/>" + T(300, 636, 'Status list', 'b', 'middle') + T(300, 656, "producer's, dated", 's', 'middle') + '</g>'
    + "<g class='node'><rect x='1196' y='612' width='208' height='56' rx='8' class='nb plain'/>" + T(1300, 636, 'Disc lot 1', 'b', 'middle') + T(1300, 656, 'CuZn39Pb3, the material', 's', 'middle') + '</g>'
    // the rules each link carries
    + mk(600, 40, 1) + mk(1026, 40, 1) + mk(236, 214, 2) + mk(1364, 214, 2) + mk(248, 366, 2) + mk(1352, 366, 2) + mk(1352, 392, 3)
    + mk(434, 428, 3) + mk(1166, 428, 4) + mk(472, 676, 5)
    + '</svg>';
  return "<div class='credpage'><figure class='credfig'>" + svg
    + "<figcaption><span class='g'></span>signed by an authority <span class='g ga'></span>by an actor · solid: grant · dash-dot: recognition, no authority · dotted: evidence · numbers: the issuer rules below, hover one to find it</figcaption></figure>"
    + rulesHTML(esc)
    + "<p class='src'>Read from the signed test credentials; nothing on this page is evaluated.</p></div>";
}
const rulesHTML = esc => "<ol class='rulechips'>" + RULES.map(([h, t], i) => "<li class='rulechip' data-r='" + (i + 1) + "' tabindex='0' title='" + esc(t) + "'><span class='n'>" + (i + 1) + '</span><b>' + esc(h) + '.</b> ' + esc(t) + '</li>').join('') + '</ol>';

/** What termsOfUse and evidence link to in this chain, read from the signed credentials. */
function chainLinks(R) {
  const doc = code => { try { return JSON.parse(R.texts[R.uris[code]]); } catch { return null; } };
  const rows = [];
  for (const target of ['APP', 'R', 'A', 'H', 'O', 'S']) {
    const uri = R.uris[target], by = [];
    let kind = '';
    for (const a of ASSETS) {
      const d = doc(a.code);
      if (!d || a.code === target) continue;
      for (const t of [d.termsOfUse ?? []].flat()) {
        if (t?.id === uri) { by.push(a.code); kind = t.type; }
      }
      if ((d.evidence ?? []).some(e => e.id === uri)) { by.push(a.code); kind = 'evidence'; }
    }
    rows.push({ target, by, kind, doc: doc(target) });
  }
  return rows;
}
const monoOf = id => ACTORS.find(a => a.id === id)?.mono ?? id;

/**
 * The opening page: one credential (RM178) drawn with its links, a term of use up, the
 * subject down, evidence and status beside; then every link type this chain uses, with who
 * signs what it names about whom; each part tagged W3C, EBSI or ours. Nothing is evaluated.
 */
function taxonomy({ R, esc }) {
  const D = JSON.parse(R.texts[R.uris.D]), APP = JSON.parse(R.texts[R.uris.APP]);
  const res = D.credentialSubject.materialPropertiesList[0].results[0], q = dsiValue(res.data.quantity);
  const status = [D.credentialStatus].flat()[0], tou = [D.termsOfUse].flat()[0], ev = [D.evidence].flat()[0];
  const c = t => '<code>' + esc(t) + '</code>';
  const T = (x, y, text, cls = '', anchor = 'start') => "<text x='" + x + "' y='" + y + "' class='" + cls + "' text-anchor='" + anchor + "'>" + esc(text) + '</text>';
  const line = d => "<path d='" + d + "' class='ln' marker-end='url(#an-arr)'/>";
  // Another credential (or a thing), as a smaller box the credential's field points to.
  const box = (x, y, w, h, code, name, sub, thing = false) => "<g class='node'><rect x='" + x + "' y='" + y + "' width='" + w + "' height='" + h + "' rx='" + (thing ? h / 2 : 8) + "' class='nb" + (thing ? ' plain' : '') + "'/>"
    + (code ? "<rect x='" + (x + 12) + "' y='" + (y + 12) + "' width='" + (code.length * 9.2 + 12) + "' height='22' rx='5' class='chip'/>" + T(x + 18, y + 28, code, 'code') : '')
    + T(code ? x + 24 + code.length * 9.2 + 12 : x + w / 2, y + 28, name, 'b', code ? 'start' : 'middle') + T(x + w / 2, y + 52, sub, 's', 'middle') + '</g>';
  // RM178's fields, each a row; the four that link out leave the card toward what they name.
  const X = 250, W = 390, Y = 150, row0 = Y + 72, step = 34, H = 410;

  const fields = [
    ['termsOfUse', tou.type + ' → ' + codeOf(tou.id), 'W3C · VC4QI type', 'digestSRI ' + String(tou.digestSRI).slice(0, 20) + '…'],
    ['type', typeOf(D), 'VC4QI'], ['issuer', 'the RM producer', 'W3C'], ['validFrom, validUntil', day(D.validFrom) + ' – ' + day(D.validUntil), 'W3C'],
    ['evidence', ev.type + ' → ' + codeOf(ev.id), 'W3C · VC4QI type', 'digestSRI ' + String(ev.digestSRI).slice(0, 20) + '…'], ['credentialStatus', status.statusPurpose + ', bit ' + status.statusListIndex, 'W3C'],
    ['proof', D.proof.cryptosuite, 'W3C'],
    ['credentialSubject', 'disc lot 1: ' + short(res.propertyIri) + ' = ' + q.value + ' ± ' + q.U + ' ' + q.unit, 'W3C · DRMD · D-SI'],
  ];
  // A row is a field and its value; a link's row adds the digest it carries.
  const rowYs = fields.reduce((ys, f, i) => [...ys, i === 0 ? row0 : ys[i - 1] + (fields[i - 1][3] ? step + 15 : step)], []);
  const rowY = i => rowYs[i];
  const ev_y = rowY(4) + 2, st_y = rowY(5) + 2, cx = X + 150;
  const svgA = "<svg viewBox='0 0 870 680' role='img' aria-labelledby='an-t'><title id='an-t'>Certificate RM178: its fields, and the four that link to other credentials and to the disc</title>"
    + "<defs><marker id='an-arr' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M0 0 L10 5 L0 10 z' class='ah'/></marker></defs>"
    + line('M' + cx + ' ' + Y + ' L' + cx + ' 88') + line('M' + (X + W) + ' ' + ev_y + ' L692 ' + ev_y) + line('M' + X + ' ' + st_y + ' L178 ' + st_y)
    + line('M' + cx + ' ' + (Y + H) + ' L' + cx + ' 602')
    + T(cx + 12, 112, 'termsOfUse · ' + tou.type, 'lf') + T(cx + 12, 132, 'who let me issue this', 'lm')
    + T(cx + 12, 586, 'credentialSubject: what it is about', 'lf')
    + T(778, ev_y + 58, 'evidence', 'lf', 'middle') + T(778, ev_y + 76, 'grants nothing', 'lm', 'middle')
    + T(92, st_y + 58, 'credentialStatus', 'lf', 'middle') + T(92, st_y + 76, 'still in force?', 'lm', 'middle')
    + box(cx - 100, 16, 200, 72, codeOf(tou.id), 'Scope list', 'a credential: the RMP’s')
    + box(694, ev_y - 36, 168, 72, codeOf(ev.id), 'Study', 'a credential: the LAB’s')
    + box(8, st_y - 36, 168, 72, '', 'Status list', 'a credential: the RMP’s')
    + box(cx - 100, 602, 200, 64, '', 'Disc lot 1', 'the material, a thing', true)
    + "<g class='node'><rect x='" + X + "' y='" + Y + "' width='" + W + "' height='" + H + "' rx='12' class='nb claim'/>"
    + "<rect x='" + (X + 16) + "' y='" + (Y + 16) + "' width='76' height='26' rx='5' class='chip'/>" + T(X + 24, Y + 34, codeOf(D.id), 'code') + T(X + 104, Y + 35, 'RM certificate', 'b')
    + fields.map(([f, v, o], i) => T(X + 16, rowY(i), f, 'lf') + T(X + W - 14, rowY(i), o, 'org' + (o.startsWith('VC4QI') ? ' o-vc4qi' : ''), 'end')
      + T(X + 16, rowY(i) + 16, v, 'rv') + (fields[i][3] ? T(X + 16, rowY(i) + 31, fields[i][3], 'lm') : '')).join('')
    + '</g></svg>';
  const anat = "<figure class='credfig anat'>" + svgA
    + "<figcaption>Every field is W3C’s (VC Data Model 2.0, Data Integrity); the types in two of them are VC4QI’s, and the subject follows the DRMD, its values written as PTB D-SI reals. Four fields link out: up to the grant, down to the subject, beside to evidence and status.</figcaption></figure>";
  const linkOrigin = { TrustFrameworkPolicy: 'ebsi', IssuedUnderPolicy: 'ours', RecognitionPolicy: 'ours', evidence: 'w3c' };
  const typeOrigin = t => t === 'VerifiableAuthorisationForTrustChain' ? 'ebsi' : t === 'RecognizedEntityCredential' ? 'w3c' : 'ours';
  const who = a => "<span class='pair'><span class='mono-badge sm'>" + esc(monoOf(a.actor)) + "</span> → " + (a.about === 'object' ? esc(a.aboutLabel) : "<span class='mono-badge sm'>" + esc(monoOf(a.about)) + '</span>') + '</span>';
  const legal = String([APP.termsOfUse].flat()[0]?.legalBasis ?? '');
  const row = (field, kind, names, type, pair, by) => "<tr" + (kind === 'evidence' ? " class='beside'" : '') + "><td>" + c(field) + '<br>' + c(kind) + ' ' + org(linkOrigin[kind], esc) + '</td><td>' + names
    + (type ? '<br><small>' + c(type) + ' ' + org(typeOrigin(type), esc) + '</small>' : '') + '</td><td>' + pair + '</td><td>' + by + '</td></tr>';
  const rows = [row('termsOfUse', 'TrustFrameworkPolicy', '<b>The law</b>: ' + esc(legal), '', '<span class=\'none\'>none: the top</span>', esc(codeOf(R.uris.APP)))]
    .concat(chainLinks(R).map(x => {
      const a = ASSETS.find(y => y.code === x.target);
      return row(x.kind === 'evidence' ? 'evidence' : 'termsOfUse', x.kind, '<b>' + esc(codeOf(R.uris[x.target])) + '</b> ' + esc(String(x.doc?.name ?? '').replace(/^./, ch => ch.toLowerCase())) + (x.kind === 'RecognitionPolicy' ? ', no authority' : ''),
        typeOf(x.doc), who(a), x.by.map(code => esc(codeOf(R.uris[code]))).join('<br>'));
    }));
  const table = "<table class='links'><thead><tr><th>Link</th><th>Names</th><th>Signed by → about</th><th>Named by</th></tr></thead><tbody>" + rows.join('') + '</tbody></table>';
  const parts = anatomyParts({ R, esc });
  return "<div class='taxo'><div class='taxocols'>" + anat
    + "<section class='linkset'><h3>What each link names in this chain</h3>" + table
    + "<p class='orglegend'>" + org('w3c', esc) + ' a W3C standard or draft, used as written · ' + org('ebsi', esc) + ' reused from EBSI · ' + org('ours', esc) + ' new in VC4QI. '
    + 'The two link types are VC4QI’s; the field they sit in, and its purpose, are the standard’s (VCDM §5.5).</p></section></div>'
    + "<section class='rulesrow'><h3>Issuers follow five rules</h3>" + rulesHTML(esc)
    + "<p class='src'>After the chain is built, the verifier runs six checks on it, under its own profile.</p></section>"
    + "<details class='fold'><summary>What W3C says each field is for</summary>" + parts.table + '</details>'
    + "<details class='fold'><summary>Why a term of use points up, and who else does it</summary>" + parts.why + '</details>'
    + "<p class='src'>Read from the signed test credentials; nothing on this page is evaluated. Quotes: W3C Verifiable Credentials Data Model 2.0 (15 May 2025).</p></div>";
}

/** The verifier's profile: whom it trusts, what it asks, its rule, about when, and how fresh status must be. Static. */
function profile({ esc }) {
  const c = t => '<code>' + esc(t) + '</code>';
  const row = (what, here, why, key) => "<tr><th scope='row'>" + esc(what) + '</th><td>' + here + '</td><td>' + esc(why) + '</td><td>' + key + '</td></tr>';
  const table = "<table class='profile'><thead><tr><th>It sets</th><th>This verifier</th><th>Why the verifier, not the issuer</th><th>In its profile</th></tr></thead><tbody>"
    + row('Whom I trust', 'The NAB, for accrediting RM producers and laboratories', 'Trust is not in the credential. Each verifier chooses its root; the data model implies no transitive trust (VCDM §5.1).', c('trustAnchors'))
    + row('Which paths count', 'Through the producer’s operational scope; a suspended accreditation blocks', 'A verifier accepts only routes it understands, and restrictions it must respect.', c('authority'))
    + row('What I ask', 'Is the value authorized? And is it fit for my use?', 'One credential answers different questions. Asking only “authorized?” applies no limit.', 'the request')
    + row('My rule', 'As + U ≤ 200 mg/kg (guarded acceptance)', 'The certificate states 178 ± 5. Whether that passes is the user’s decision: its limit and its decision rule.', c('conformity'))
    + row('About when', 'Today, or the day RM178 was issued (20 Jan 2026)', 'Authority and status must have held when the producer certified; today’s answer can differ.', 'the request')
    + row('How fresh status must be', 'Status lists required, at most 30 days old', 'How stale an answer it accepts is the verifier’s risk to take.', c('credentialStatus'))
    + '</tbody></table>';
  const four = "<section><h3>The four verifiers in this story</h3><ul class='four'>"
    + '<li><b>Trusts the NAB</b>: a customer lab in the same country ' + c('rm-verifier-1') + '</li>'
    + '<li><b>Trusts the state</b>: a market-surveillance authority ' + c('rm-verifier-state-1') + '</li>'
    + '<li><b>Trusts Global ACI</b>: a verifier abroad ' + c('rm-verifier-global-aci-1') + '</li>'
    + '<li><b>Trusts another NAB</b>: abroad, with no path to its root (demonstrator only)</li></ul></section>';
  return "<div class='vpanel'><p class='lede'><b>Issuers state facts. The verifier’s profile decides what those facts are enough for.</b> "
    + 'The profile is the verifier’s own document, not the issuer’s; the issuers never see it.</p>' + table + four
    + "<p class='src'>Profiles: bindings/experimental/rm-v1/profiles. Fictional fixture configuration.</p></div>";
}

/** The six checks, each a plain question and the gates behind it, and where the scenarios test it. Static. */
function checks({ esc }) {
  const row = (check, question, gates, fails, where) => "<tr><th scope='row'>" + esc(check) + '</th><td>' + esc(question) + "</td><td class='num'>" + esc(gates) + '</td><td>' + esc(fails) + '</td><td>' + esc(where) + '</td></tr>';
  const table = "<table class='checks6'><thead><tr><th>Check</th><th>The question</th><th>Gates</th><th>Fails when, for example</th><th>Scenarios</th></tr></thead><tbody>"
    + row('Authentic', 'Are these the exact bytes, signed by each issuer’s own key?', '1–2', 'A value is edited after signing', 'Genuine')
    + row('Current', 'Was each credential valid, and not revoked or suspended, at the time asked about?', '3', 'The NAB suspended ACC-RMP; RM178 has expired', 'When')
    + row('Understood', 'Is the claim in a vocabulary this verifier can read?', '4', 'A property from a vocabulary it does not know', 'DPP example')
    + row('Authorized', 'Is there a pinned chain from RM178 up to my root, each link about the issuer below it and within its grant?', '5', 'LIST-RMP is missing; 520 is outside LIST-RMP; no path to my root', 'Whom I trust, Complete')
    + row('Supported', 'Is the evidence the profile requires there, and does it hold?', '6', 'The laboratory withdrew HOM-LOT1', 'Complete')
    + row('Fit for use', 'Does the value pass my own rule?', '6', '197 + 5 > 200', 'Fit')
    + '</tbody></table>';
  return "<div class='vpanel'><p class='lede'><b>Six checks, one question each.</b> Gate 0, the plan, is the profile on the previous page. Each answer is ✓ yes, ✕ no or ? cannot tell.</p>"
    + table
    + "<ul class='notes'><li>A check that fails stops the later ones from reading that credential: an expired or edited certificate is never read for authority, so those answer “cannot tell”.</li>"
    + '<li>Accept needs every required check to say yes; a single no rejects; otherwise it cannot tell.</li>'
    + '<li>In the scenarios that follow, the verdict marks each check whose answer changed.</li></ul></div>';
}

/** The dates the “When” scenarios turn on, with the one the verifier asks about marked. */
function timeline(st) {
  const ev = [
    ['10 Jan 2026', 'HOM-LOT1, the study', 'done'],
    ['20 Jan 2026', 'RM178 issued', st.asOf === 'issuance' ? 'asked' : 'done'],
    ['20 Sep 2026', 'The NAB suspends ACC-RMP', st.suspendA ? 'done' : 'not'],
    ['25 Sep 2026', 'Today', st.asOf === 'now' ? 'asked' : 'done'],
    ['1 Feb 2028', 'RM178 expires', 'done'],
    ['15 Mar 2028', 'The disc is used', st.asOf === 'later' ? 'asked' : 'not'],
  ];
  const lists = st.asOf === 'issuance' ? (st.archive ? 'the lists kept from January' : 'today’s lists only') : st.asOf === 'later' ? 'the lists published in March 2028' : 'today’s lists';
  return "<ol class='timeline' aria-label='Timeline'>" + ev.map(([d, what, cls]) => "<li class='t-" + cls + "'><span class='d'>" + d + '</span><span class=\'w\'>' + what + (cls === 'asked' ? ' <b>· asked about</b>' : '') + '</span></li>').join('')
    + "</ol><p class='tlnote'>Status is answered from " + lists + '.</p>';
}
/** The recognition proposal, side by side with a list of recognized bodies. Static. */
function proposal() {
  const row = (what, list, ours) => "<tr><th scope='row'>" + what + '</th><td>' + list + "</td><td class='ours'>" + ours + '</td></tr>';
  const term = x => "<span class='term'>" + x + '</span>';
  return "<span class='tag'>Proposal · for discussion · not evaluated</span><div class='proposal'>"
    + "<table class='compare'><thead><tr><th></th><th>A list of recognized bodies</th><th>Proposal: one credential per recognition</th></tr></thead><tbody>"
    + row('What is signed', 'One list naming every recognized body', 'REC-NAB: one credential about one body, in the Recognized Entities vocabulary (' + term('recognizedTo') + ', ' + term('action') + '), with the main scope in ILAC and IAF terms (our extension)')
    + row('One body is suspended', 'The list is re-issued, and its digest changes for everyone who pinned it', "One bit in the recognizer's suspension list; REC-NAB and everything below it stay as issued")
    + row('How a verifier reaches it', 'Its profile names the list, or it searches from the top', 'The accreditation names R in a ' + term('RecognitionPolicy') + ' (' + term('termsOfUse') + ', pinned by digest), mirrored in ' + term('issuer.recognizedIn'))
    + row('Valid when issued?', 'Only from an old copy of the list, if someone kept it', 'REC-NAB carries its validity window; status lists are dated credentials the issuers keep: the list in force that day answers')
    + '</tbody></table>'
    + "<details class='fold'><summary>What recognition does not decide, and what is open</summary><div class='boxes'><section><h3>What recognition does not decide</h3><ul>"
    + "<li>Whether this claim is within the producer's scope (RM520)</li><li>Whether the producer's scope stays within its accreditation (LIST-RMP within ACC-RMP)</li>"
    + "<li>Whether the required evidence is there (study HOM-LOT1)</li><li>Whether the value is fit for use: the verifier's own rule (RM197)</li></ul></section>"
    + "<section class='open'><h3>Open, for the pitches</h3><ul>"
    + '<li>Renewal: a new REC-NAB means re-pinned accreditations, or a link from the new one to the old</li>'
    + '<li>The up-pointer: a ' + term('RecognitionPolicy') + ' term of use, mirrored in ' + term('issuer.recognizedIn') + ' (next page)</li>'
    + '<li>Recognized Entities checks validity windows at a past date, not suspension or revocation at that date</li>'
    + '<li>Trusted time: an issuer-written activity time can be backdated; a trusted timestamp closes that</li>'
    + '<li>Governed identifiers for activities and standards</li></ul></section></div></details>'
    + "<p class='limit'>Global ACI here is a fictional stand-in. Nothing on this page is issued or endorsed by Global Accreditation Cooperation Incorporated or any accreditation body.</p></div>";
}

/** A credential's parts, what W3C says each is for, and why a term of use points up (folded on the opening page). */
function anatomyParts({ R, esc }) {
  const d = JSON.parse(R.texts[D178]);
  const q = t => '<q>' + esc(t) + '</q>';
  const c = t => '<code>' + esc(t) + '</code>';
  const group = t => "<tr class='group'><th colspan='4'>" + esc(t) + '</th></tr>';
  const row = (prop, sec, says, here, board, star) => '<tr' + (star ? " class='star'" : '') + "><th scope='row'>" + c(prop) + '<small>§' + sec + '</small></th><td>' + says + '</td><td>' + here + '</td><td>' + board + '</td></tr>';
  const res = d.credentialSubject.materialPropertiesList[0].results[0], qty = dsiValue(res.data.quantity);
  const status = [d.credentialStatus].flat()[0], tou = [d.termsOfUse].flat()[0], ev = [d.evidence].flat()[0];
  const table = "<table class='taxonomy'><thead><tr><th>Property</th><th>What W3C says it is for</th><th>In certificate RM178</th><th>On the board</th></tr></thead><tbody>"
    + group('Who, about what, what kind')
    + row('type', '4.5', 'What kind of credential it is; each type is to be documented in a specification.', c(typeOf(d)), 'The mono line on every card')
    + row('issuer', '4.7', 'Who issued it: a URL, recommended to lead to the issuer’s keys.', 'The RM producer', 'The column it sits in; “signed by”')
    + row('credentialSubject', '4.8', 'The claims, about one or more subjects.', 'Disc lot 1: ' + esc(short(res.propertyIri)) + ' = ' + esc(qty.value + ' ± ' + qty.U + ' ' + qty.unit), 'What the card says; “about”')
    + group('When, and whether it still holds')
    + row('validFrom, validUntil', '4.9', 'When the credential is valid.', esc(String(d.validFrom).slice(0, 10) + ' – ' + String(d.validUntil).slice(0, 10)), 'Checked at the time asked about')
    + row('credentialStatus', '4.10', 'Where to learn whether it is still in force, such as a status list.', esc(status.statusPurpose) + ', bit ' + esc(status.statusListIndex) + ' of the producer’s list', 'The lists in each column head; suspend and revoke re-sign them')
    + group('Links to other credentials')
    + row('termsOfUse', '5.5', 'Terms of use can tell a verifier ' + q('the identity of the entity under whose authority the issuer issued this particular verifiable credential') + '. Each entry is typed; the type defines it. Here two types: ' + c('IssuedUnderPolicy') + ', a grant, and ' + c('RecognitionPolicy') + ', a recognition that grants no authority.', c(tou.type) + ' → ' + esc(short(tou.id)) + ', with its ' + c('digestSRI'), '<b>Solid: issued under (grant) · dash-dot: recognized in</b>', true)
    + row('evidence', '5.6', q('Evidence can be included by an issuer to provide the verifier with additional supporting information'), c(ev.type) + ' → ' + esc(short(ev.id)), 'Dotted line: evidence')
    + row('digestSRI', '5.3', q('Any object in the verifiable credential that contains an id property MAY be annotated with integrity information'), 'On each termsOfUse and evidence entry: the sha384 digest of the credential it names', 'The digest that pins a line')
    + group('The seal')
    + row('proof', '4.12', 'The securing mechanism: the issuer’s signature over the exact bytes.', c(d.proof.cryptosuite), '◆ sealed; edit a value and it fails')
    + '</tbody></table>';
  const why = "<section class='why'><h3>Why a term of use points up to an authority</h3><div class='three'>"
    + '<div><h4>The standard provides for it</h4><p>Among what terms of use tell a verifier, §5.5 lists ' + q('the identity of the entity under whose authority the issuer issued this particular verifiable credential') + '. Its value '
    + q('MUST specify one or more terms of use policies under which the creator issued the') + ' credential, and ' + q('The precise contents of each term of use is determined by the specific termsOfUse type definition.') + '</p>'
    + '<p>A grant fits the authority purpose. A recognition fits another one: ' + q('the procedures or policies that were used in issuing the verifiable credential') + '.</p></div>'
    + '<div><h4>The chain is left to the verifier</h4><p>' + q('The data model detailed in this specification does not imply a transitive trust model') + ' (§5.1). '
    + q('Authorization is not an appropriate use for this specification without an accompanying authorization framework.') + ' (§5.9)</p><p>Here that framework is the verifier’s profile: the policy type it accepts, its roots, and what each link must satisfy.</p></div>'
    + '<div><h4>Others use the same place</h4><ul>'
    + '<li><b>EBSI</b>: ' + c('AccreditationPolicy') + ' with ' + c('parentAccreditation') + ' and ' + c('rootAuthorisation') + '; ' + c('IssuanceCertificate') + ' binds the issuer’s accreditation into each credential; the root, ' + c('VerifiableAuthorisationForTrustChain') + ', names its legal basis in a ' + c('TrustFrameworkPolicy') + '. APP-NAB borrows that root shape.</li>'
    + '<li><b>cheqd</b>: ' + c('AttestationPolicy') + ' with ' + c('parentAccreditation') + ' and ' + c('rootAuthorization') + '</li>'
    + '<li><b>W3C Recognized Entities</b> takes another route, ' + c('issuer.recognizedIn') + '; the last proposal page reconciles the two</li>'
    + '<li><b>UNTP</b>: an ' + c('authorisation') + ' inside the conformity attestation</li></ul>'
    + '<p>None of these links carries a digest of the parent; every link here does.</p></div>'
    + '</div></section>';
  return { table: "<div class='anatomy'>" + table + '</div>', why: "<div class='anatomy'>" + why + '</div>' };
}

/** Recognized Entities and terms of use: one rule for every upward link, two meanings. Reads A's signed link. */
function reconcile({ R, esc }) {
  const c = t => '<code>' + esc(t) + '</code>';
  const q = t => '<q>' + esc(t) + '</q>';
  const A = JSON.parse(R.texts['https://nab.vc4qi.example/credentials/ACC-RMP']);
  const row = (what, grant, rec, re) => "<tr><th scope='row'>" + what + '</th><td>' + grant + "</td><td class='ours'>" + rec + '</td><td>' + re + '</td></tr>';
  const table = "<table class='compare'><thead><tr><th></th><th>" + c('IssuedUnderPolicy') + '</th><th>' + c('RecognitionPolicy') + '</th><th>' + c('issuer.recognizedIn') + ' (W3C Recognized Entities)</th></tr></thead><tbody>'
    + row('Says', 'Issued exercising that grant', 'Issued while the issuer is recognized there', 'The issuer appears in that list')
    + row('Where', 'A ' + c('termsOfUse') + ' entry whose ' + c('id') + ' is the grant', 'A ' + c('termsOfUse') + ' entry whose ' + c('id') + ' is the recognition', 'The issuer object')
    + row('Confers authority', 'Yes, within the grant', 'No', 'No')
    + row('Used here by', 'Every chain: ACC-RMP and ACC-LAB under APP-NAB, LIST-RMP under ACC-RMP, RM178 under LIST-RMP, HOM-LOT1 under ACC-LAB', 'ACC-RMP and ACC-LAB name REC-NAB; only a verifier that trusts Global ACI relies on it', 'Mirrors the RecognitionPolicy; must name the same credential')
    + row('Pinned', 'By ' + c('digestSRI') + ' on the entry', 'By ' + c('digestSRI') + ' on the entry', 'Not in the draft: fetched or stapled when checked')
    + row('Checked', 'Permission, scope within the grant, in force at the activity time', 'Action and main scope, not suspended, in force at the activity time', 'Subject is the issuer, the action, validators, validity at the evaluation time')
    + '</tbody></table>';
  const signed = JSON.stringify({ issuer: A.issuer, termsOfUse: A.termsOfUse }, null, 2);
  const why = "<section><h3>Why recognition is not authority</h3><ul>"
    + '<li>An accreditation body’s authority is its national appointment; in the EU each member state appoints a single national accreditation body (Regulation (EC) No 765/2008). Here that is APP-NAB, and ACC-RMP is issued under it.</li>'
    + '<li>Peer evaluation and signatory status make its accreditations accepted abroad as equivalent; they do not make the body competent or authorized.</li>'
    + '<li>So ACC-RMP is not issued under REC-NAB: it is issued while the body is recognized in REC-NAB. VCDM §5.5 has a purpose for each: ' + q('the identity of the entity under whose authority the issuer issued this particular verifiable credential') + ' for a grant; '
    + q('the procedures or policies that were used in issuing the verifiable credential') + ' for a recognition.</li>'
    + '<li>One rule follows every upward link the same way, pinned, about the issuer, in force at the activity time; the type decides what the link may establish.</li></ul></section>';
  const gets = "<div class='boxes'><section><h3>A Recognized Entities verifier gets</h3><ul>"
    + '<li>Through ' + c('issuer.recognizedIn') + ': the body is recognized by Global ACI, to accredit</li><li>Validity of each list at the time it asks about</li></ul></section>'
    + '<section><h3>This verifier adds</h3><ul><li>The link pinned by digest: the exact R relied on</li><li>The main scope the grant needs (RM production, ISO 17034)</li>'
    + '<li>REC-NAB and ACC-RMP in force and not suspended on 20 January</li><li>Then the grants: 178 in one scope record of LIST-RMP, LIST-RMP within ACC-RMP, study HOM-LOT1 under ACC-LAB, and its own rule</li></ul></section></div>';
  const defs = "<div class='boxes'><section class='def'><h3>" + c('IssuedUnderPolicy') + '</h3><ol>'
    + '<li>The issuer issued this credential exercising the grant the entry’s ' + c('id') + ' names.</li>'
    + '<li>The grant is about this credential’s issuer, permits what it does, and the scope lies within the grant.</li>'
    + '<li>Every entry is claimed: all must hold, as for an accreditation and a scheme permission (GS).</li></ol></section>'
    + "<section class='def'><h3>" + c('RecognitionPolicy') + '</h3><ol>'
    + '<li>The issuer was recognized in the credential the entry’s ' + c('id') + ' names when it issued this credential.</li>'
    + '<li>The recognition is about this credential’s issuer, for the action and main scope the verifier needs.</li>'
    + '<li>It establishes no authority, and counts only for a verifier that trusts the recognizer.</li></ol></section></div>'
    + "<p class='lede'>Both: the entry carries the " + c('digestSRI') + ' of the credential it names, a digest mismatch is an error (VCDM §5.3), and the target must be in force at the activity time.</p>';
  const open = "<section class='open'><h3>Open, for the workshop</h3><ul><li>The link type names: VC4QI’s " + c('IssuedUnderPolicy') + ', or EBSI’s ' + c('AccreditationPolicy') + ' and cheqd’s ' + c('AttestationPolicy') + ' (whose words mean other things in ISO/IEC 17000)</li>'
    + '<li>Who owns the ' + c('registration') + ' vocabulary for main scopes: ILAC and IAF, or each binding</li>'
    + '<li>Renewal re-pins: a new REC-NAB means new digests in ACC-RMP and ACC-LAB</li><li>The Recognized Entities context is not yet published; we use a stand-in</li></ul></section>';
  return "<span class='tag'>Signed test credential ACC-RMP · read, not evaluated</span><div class='proposal reconcile'>"
    + "<p class='lede'><b>One rule, two meanings.</b> Every upward link is a term of use, followed and pinned the same way; its type says whether it is a grant or a recognition.</p>"
    + table
    + "<details class='fold' open><summary>ACC-RMP as signed, and why recognition is not authority</summary><div class='pair'><figure class='json'><figcaption>ACC-RMP (the paper's A): its issuer, its terms of use and the pin</figcaption><pre>" + esc(signed) + '</pre></figure>' + why + '</div></details>'
    + "<details class='fold'><summary>What each verifier gets</summary>" + gets + '</details>'
    + "<details class='fold'><summary>The two types, defined</summary>" + defs + '</details>'
    + "<details class='fold'><summary>Open, for the workshop</summary>" + open + '</details>'
    + "<p class='limit'>W3C Recognized Entities: Working Draft of 12 November 2026, experimental. Global ACI is a fictional stand-in; nothing here is issued or endorsed by Global Accreditation Cooperation Incorporated or any accreditation body.</p></div>";
}

/** One sentence per credential type, for the explainers. */
const TYPES = {
  VerifiableAuthorisationForTrustChain: 'An appointment: the state appoints its national accreditation body (Regulation (EC) No 765/2008, Art. 4(1)) and names what it may issue, and where. The shape is EBSI’s root trust-chain credential, also VCDM 2.0 Example 28; its own term of use names the legal basis. The body’s authority comes from here, not from Global ACI.',
  RecognizedEntityCredential: 'A recognition (W3C Recognized Entities, draft): after peer evaluation, Global ACI recognizes this NAB for main scopes (activity and standard). It grants no authority: the body’s authority is its national appointment. One credential per recognized body is our proposal.',
  RmpAccreditation: 'An accreditation: the body states what the producer may certify, like a row of its annex: materials, properties, ranges and methods.',
  LabAccreditation: 'A laboratory accreditation: the body states which studies the laboratory may carry out, on which materials and properties.',
  FlexibleScopeList: 'An operational scope: the producer declares what it actually certifies. It must lie within its accreditation, and the certificate must lie within it.',
  HomogeneityStudy: "A study: the laboratory reports the batch homogeneous. It is evidence: it supports the certificate's claim and grants nothing.",
  RmCertificate: 'An RM certificate, shaped after the DRMD: the certified value of the material, with its uncertainty and method. The credential the verifier is asked to rely on.',
};

/** The RM story's configuration, given the bundle (verifier.js). */
export const rmConfig = api => (CODES = api.RM_CODES ?? {}, ASSETS = api.RM_ASSETS ?? [], ACTORS = api.RM_ACTORS ?? [], {
  name: 'RM story', codes: CODES, story: api.RM_STORY, actors: api.RM_ACTORS, assets: api.RM_ASSETS, defaults: api.RM_DEFAULT,
  parts: api.RM_PARTS, evaluate: state => api.evaluateRmBoard(state), rows: 2,
  hosts: { state: 'the state', nab: 'the NAB', lab: 'the laboratory', producer: 'the RM producer', 'other-ab': 'another NAB', 'global-aci': 'Global ACI (fictional)' },
  facts, types: TYPES, content,
  glossary: [
    ['APP-NAB, REC-NAB, ACC-RMP, ACC-LAB, LIST-RMP, HOM-LOT1, RM178', 'The codes on the cards: the last part of each credential’s id, kind first, then whom it is about (ACC-RMP: accreditation of the RM producer). The paper calls them APP, R, A, H, O, S and D.'],
    ['VerifiableAuthorisationForTrustChain', 'EBSI’s credential for the root of a trust chain, also VCDM 2.0 Example 28. Here the state’s appointment of the NAB; its term of use, a TrustFrameworkPolicy, names the legal basis.'],
    ['IssuedUnderPolicy', 'A term of use: this credential was issued exercising the grant the entry’s id names; the entry carries that grant’s digest. Drawn solid: “is issued under”.'],
    ['RecognitionPolicy', 'A term of use: this credential was issued while its issuer is recognized in the credential the entry’s id names. It grants no authority. Drawn dash-dot: “recognized in”.'],
    ['issuer.recognizedIn', 'W3C Recognized Entities: the list in which the issuer is recognized. Here it mirrors the RecognitionPolicy and must name the same credential.'],
    ['recognizedTo, registration', 'In a recognition: the action the body is recognized to perform (accredit), and its entry in the recognizer’s register with the main scopes.'],
    ['Global ACI', 'Here a fictional stand-in for the global accreditation cooperation that recognizes accreditation bodies after peer evaluation.'],
  ],
  // The vertical layout: one lane per actor, from where trust comes from to where it is used.
  lanes: [
    // Two roots side by side: the appointment (authority) and the recognition (none).
    { id: 'appoint', label: 'Appoints', actors: ['state'], cells: [{ code: 'APP', col: 'mid' }], pair: 'roots' },
    { id: 'recognize', label: 'Recognizes', actors: ['gaci'], cells: [{ code: 'R', col: 'mid' }], pair: 'roots' },
    { id: 'accredit', label: 'Accredits', actors: ['ab'], cells: [{ code: 'A', col: 'c1' }, { code: 'H', col: 'c2' }] },
    { id: 'study', label: 'Studies the batch', actors: ['lab'], cells: [{ code: 'S', col: 'c2' }] },
    { id: 'produce', label: 'Declares its scope, certifies', actors: ['rmp'], cells: [{ code: 'O', col: 'c1' }, { code: 'D', col: 'c2' }] },
    { id: 'hold', label: 'Holds and shows', actors: ['holder'], extra: 'holder' },
  ],
  // Each action says when it happens and how often it does in practice. The state has none:
  // it does not withdraw a NAB's appointment.
  actions: {
    gaci: [{ type: 'toggle', key: 'suspendGaci', label: 'Suspend REC-NAB', sub: '20 Sep 2026 · rare', control: 'suspendGaci' }],
    ab: [{ type: 'toggle', key: 'suspendA', label: 'Suspend ACC-RMP', sub: '20 Sep 2026 · occasional', control: 'suspend' }],
    lab: [{ type: 'toggle', key: 'revokeS', label: 'Withdraw HOM-LOT1', sub: '20 Sep 2026 · occasional', control: 'revoke' }],
    rmp: [
      { type: 'seg', key: 'certificate', label: 'Certificate', control: 'certificate',
        options: [{ id: '178', label: '178' }, { id: '197', label: '197' }, { id: '520', label: '520' }, { id: 'custom', label: 'Own' }] },
      { type: 'form', control: 'certificate', when: st => st.certificate === 'custom', submit: 'Sign and ship',
        fields: [{ key: 'value', label: 'As, mg/kg' }, { key: 'uncertainty', label: 'U (k = 2)' }, { key: 'method', label: 'Method', options: ['M1', 'M2'] }] },
    ],
    holder: [{ type: 'toggle', key: 'tamper', label: 'Edit a value', sub: 'after signing · rare', control: 'tamper' },
      { type: 'seg', key: 'withhold', label: 'Leaves out', control: 'withhold',
        options: [{ id: '', label: '–' }, ...['O', 'A', 'S', 'H', 'R', 'APP'].map(code => ({ id: code, label: CODES[code] ?? code }))] }],
  },
  settings: [
    { type: 'seg', key: 'trust', label: 'Trusts', control: 'trust', always: true, options: [{ id: 'ab', label: 'This NAB', sub: 'NAB' }, { id: 'state', label: 'The state', sub: 'GOV' }, { id: 'global-aci', label: 'Global ACI', sub: 'abroad' }, { id: 'other', label: 'Another NAB', sub: 'abroad' }] },
    { type: 'seg', key: 'ask', label: 'Asks', control: 'ask', options: [{ id: 'authorized', label: 'Authorized?' }, { id: 'fit', label: 'Fit for use?' }] },
    { type: 'seg', key: 'rule', label: 'Decision rule', control: 'rule', when: st => st.ask === 'fit',
      options: [{ id: 'guarded', label: 'Guarded', sub: 'As + U ≤ limit' }, { id: 'simple', label: 'Simple', sub: 'As ≤ limit' }] },
    { type: 'seg', key: 'limit', label: 'Limit for As, mg/kg', control: 'limit', when: st => st.ask === 'fit',
      options: [{ id: '180', label: '180' }, { id: '200', label: '200' }, { id: '250', label: '250' }] },
    { type: 'seg', key: 'asOf', label: 'Asks about', control: 'asOf',
      options: [{ id: 'now', label: 'Today', sub: '25 Sep 2026' }, { id: 'issuance', label: 'At issuance', sub: '20 Jan 2026' }, { id: 'later', label: 'Later', sub: '15 Mar 2028' }] },
    { type: 'seg', key: 'archive', label: 'Status lists', control: 'archive', when: st => st.asOf === 'issuance',
      options: [{ id: 'false', label: "Today's" }, { id: 'true', label: 'Kept from January' }] },
  ],
  note: st => st.ask === 'fit' ? 'Its requirement: <b>As at most ' + st.limit + ' mg/kg</b>, from its own profile.' : '',
  tags: (code, st) => [
    ...(code === 'APP' && st.trust !== 'state' ? [{ text: 'beyond the root' }] : []),
    ...(code === 'R' && st.suspendGaci ? [{ text: 'suspended', bad: true }] : []),
    ...(code === 'R' && st.trust !== 'global-aci' ? [{ text: 'beyond the root' }] : []),
    ...(code === 'A' && st.suspendA ? [{ text: 'suspended', bad: true }] : []),
    ...(code === 'S' && st.revokeS ? [{ text: 'revoked', bad: true }] : []),
    ...(code === 'D' && st.tamper ? [{ text: 'edited after signing', bad: true }] : []),
    ...(code === 'D' && st.asOf === 'later' ? [{ text: 'expired', bad: true }] : []),
  ],
  withheld: st => st.withhold || undefined,
  changedList: (uri, st) => uri === 'https://nab.vc4qi.example/status/suspension/1' && st.suspendA || uri === 'https://lab.vc4qi.example/status/1' && st.revokeS
    || uri === 'https://global-aci.vc4qi.example/status/suspension/1' && st.suspendGaci
    // In March 2028 every issuer has published fresh lists.
    || st.asOf === 'later',
  extras: { holder: { row: 2, html: ({ st, R, mode, reached, esc }) => !reached('certify')
    ? "<div class='card empty'><span class='kind'>Nothing yet</span><span class='fact'>The disc and its certificate arrive when the producer ships them.</span></div>"
    : "<div class='wallet' id='wallet'><span class='object'>Disc lot 1 · CuZn39Pb3</span><p class='refs'>Holds <b class='mono'>" + esc(codeOf(R.certificate)) + '</b>'
      + (st.tamper && mode === 'evaluate' ? ', edited' : '') + ' and shows '
      + ['O', 'A', 'S', 'H', 'R', 'APP'].map(code => st.withhold === code && mode === 'evaluate' ? '<s>' + CODES[code] + ' (left out)</s>' : CODES[code]).join(', ') + '.</p></div>' } },
  handovers: ({ mode, reached }) => [
    ...(reached('certify') ? [['code:D', '#wallet']] : []),
    ...(mode !== 'build' ? [['#wallet', 'verdict']] : []),
  ],
  objectAt: ({ reached }) => reached('certify') ? 'holder' : 'rmp',
  band: st => st.trust === 'global-aci',
  panels: { taxonomy, profile, checks, whole, proposal, reconcile },
  rules: RULES, timeline,
  leaveOut: { key: 'withhold', control: 'withhold' },
  hideLocked: true,
  // The holder's column holds only the wallet: narrower, so the credentials get the room.
  columns: 'repeat(5, minmax(0, 1fr)) minmax(0, .75fr) minmax(0, 1.25fr)',
});
