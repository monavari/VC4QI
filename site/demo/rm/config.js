// SPDX-License-Identifier: Apache-2.0
// The RM story's configuration, shared by its two layouts: the actor board (index.html) and
// the vertical lanes with an explainer (vertical.html). board.js documents every field.
import { short } from '../board.js';

// 997000 mg/kg reads as 997 g/kg, the way an annex writes it.
const amount = (v, unit) => unit === 'mg/kg' && Number(v) >= 1000 ? Number(v) / 1000 + ' g/kg' : v + ' ' + unit;
const range = r => !r ? '' : Number(r.to) >= 1000 && r.unit === 'mg/kg' ? amount(r.from, r.unit) + ' – ' + amount(r.to, r.unit) : r.from + '–' + r.to + ' ' + r.unit;
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
  if (code === 'A') return [cap(words(r.matrixIri)), cap((r.allowedPropertyIris ?? []).map(words).join(', ')) + ', ' + range(r.range), 'Methods ' + list(r.allowedMethodIris)];
  if (code === 'H') return [list(r.studyTypeIris) + ' studies of ' + (r.allowedPropertyIris ?? []).map(words).join(', '), cap(words(r.matrixIri))];
  if (code === 'O') return [list(r.allowedPropertyIris) + ' in ' + matrix(r) + ' · ' + range(r.range), 'Method ' + list(r.allowedMethodIris) + ' only'];
  if (code === 'S') return ['Disc lot 1: ' + short(s.outcomeIri).toLowerCase(), short(s.studyTypeIri) + ' of ' + short(s.propertyIri)];
  const res = s.materialPropertiesList?.[0]?.results?.[0] ?? {}, q = res.data?.quantity ?? {};
  return [short(res.propertyIri) + ' = ' + q.value + ' ± ' + q.uncertainty?.expandedUncertainty + ' ' + (q.unit?.ucumCode ?? ''), 'k = ' + q.uncertainty?.coverageFactor + ' · method ' + short(res.methodIri)];
}

// ---------------------------------------------------------------- what a credential says
const ACTIVITY = { issueRmCertificate: 'issue RM certificates', maintainRmScope: 'maintain its own operational scope', issueRmStudy: 'issue RM studies' };
const PARTY = { nab: 'the accreditation body', lab: 'the laboratory', producer: 'the RM producer', 'global-aci': 'Global ACI (fictional)' };
const party = iri => { const m = /^https:\/\/([a-z-]+)\.vc4qi\.example\/controller$/.exec(String(iri)); return m ? PARTY[m[1]] ?? m[1] : short(iri); };
const day = t => String(t ?? '').slice(0, 10);
/** What a credential says, laid out for reading (the explainer's "What it says"). */
function content(code, d, { esc }) {
  const s = d.credentialSubject ?? {}, type = typeOf(d);
  const kv = rows => "<dl class='kv'>" + rows.filter(([, v]) => v !== undefined && v !== '').map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + v + '</dd>').join('') + '</dl>';
  if (type === 'RmCertificate') {
    const m = (s.materials ?? [])[0] ?? {};
    const rows = (s.materialPropertiesList ?? []).flatMap(set => set.results ?? []).map((r, i) => {
      const q = r.data?.quantity ?? {};
      return "<tr class='" + (i === 0 ? 'sel' : '') + "'><td>" + esc(short(r.propertyIri)) + (i === 0 ? ' · checked' : '') + "</td><td class='num'>" + esc(q.value) + "</td><td class='num'>"
        + esc(q.uncertainty?.expandedUncertainty) + ' (k = ' + esc(q.uncertainty?.coverageFactor) + ')</td><td>' + esc(q.unit?.ucumCode) + '</td><td>' + esc(short(r.methodIri)) + '</td></tr>';
    }).join('');
    return "<div class='says'>" + kv([['Material', esc(m.name ?? '') + ' (' + esc(short(m.matrixIri)) + ', ' + esc(short(m.formIri).toLowerCase()) + ')'],
      ['Batch', esc(short(s.id))], ['Certified on', esc(day(s.activityTime))]])
      + "<table><thead><tr><th>Property</th><th class='num'>Value</th><th class='num'>U</th><th>Unit</th><th>Method</th></tr></thead><tbody>" + rows + '</tbody></table></div>';
  }
  if (type === 'RmStudy') {
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
const D178 = 'https://producer.vc4qi.example/credentials/D178';
/** Start page: D178 drawn with what each link points to, beside the design rules. */
function rules({ R, esc }) {
  const d = JSON.parse(R.texts[D178]);
  const res = d.credentialSubject.materialPropertiesList[0].results[0], q = res.data.quantity;
  const status = [d.credentialStatus].flat()[0];
  const t = (x, y, text, cls = '', anchor = 'start') => "<text x='" + x + "' y='" + y + "' class='" + cls + "' text-anchor='" + anchor + "'>" + esc(text) + '</text>';
  const box = (x, y, w, h, title, sub, cls = '') => "<rect x='" + x + "' y='" + y + "' width='" + w + "' height='" + h + "' rx='8' class='nb " + cls + "'/>"
    + t(x + w / 2, y + 23, title, 'b', 'middle') + t(x + w / 2, y + 43, sub, 's', 'middle');
  const svg = "<svg viewBox='0 0 700 470' role='img' aria-labelledby='vcfig-t'><title id='vcfig-t'>Certificate D178 and where its links point</title>"
    + "<defs><marker id='vc-arr' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M0 0 L10 5 L0 10 z' class='ah'/></marker></defs>"
    + box(242, 20, 200, 56, 'O', "the producer's own scope")
    + box(242, 400, 200, 56, 'Disc lot 1', 'the material it is about')
    + box(532, 217, 158, 56, 'S', 'homogeneity study')
    + box(10, 217, 150, 56, 'Status list', "producer's, bit " + status.statusListIndex)
    + "<rect x='222' y='170' width='240' height='150' rx='10' class='vc'/>"
    + t(240, 200, short(d.id), 'b m2') + t(300, 200, 'RM certificate', 'b')
    + t(240, 234, short(res.propertyIri) + ' = ' + q.value + ' ± ' + q.uncertainty.expandedUncertainty + ' ' + q.unit.ucumCode)
    + t(240, 256, 'method ' + short(res.methodIri) + ' · k = ' + q.uncertainty.coverageFactor, 's')
    + t(240, 300, '◆ sealed: ' + d.proof.cryptosuite, 's')
    + "<line x1='342' y1='168' x2='342' y2='80' class='ln' marker-end='url(#vc-arr)'/>"
    + "<line x1='342' y1='322' x2='342' y2='396' class='ln' marker-end='url(#vc-arr)'/>"
    + "<line x1='464' y1='245' x2='528' y2='245' class='ln dot' marker-end='url(#vc-arr)'/>"
    + "<line x1='220' y1='245' x2='164' y2='245' class='ln' marker-end='url(#vc-arr)'/>"
    + t(332, 116, 'Up: the authority it acts under', '', 'end') + t(332, 134, 'termsOfUse, pinned by digest', 'm', 'end')
    + t(352, 356, 'Down: what it is about') + t(352, 374, 'credentialSubject', 'm')
    + t(611, 298, 'Sideways: its evidence', '', 'middle') + t(611, 316, 'evidence', 'm', 'middle')
    + t(85, 298, 'Beside: does it still hold?', '', 'middle') + t(85, 316, 'credentialStatus', 'm', 'middle')
    + '</svg>';
  const rule = (head, text, terms = []) => '<li><b>' + head + '</b> ' + text + (terms.length ? " <span class='terms'>" + terms.map(x => "<span class='term'>" + x + '</span>').join(' ') + '</span>' : '') + '</li>';
  const list = "<section class='rules'><h3>Design rules</h3><ol>"
    + rule('One credential per grant.', 'A recognition too, each with its own status.', ['credentialStatus'])
    + rule('Point up and pin.', 'Name the authority you act under, by digest.', ['termsOfUse', 'relatedResource'])
    + rule('Shake hands.', "The parent names the child's issuer as its subject.", ['credentialSubject', 'issuer'])
    + rule('Evidence sits beside.', 'It supports a claim and grants nothing.', ['evidence'])
    + rule('Check upward.', 'From the credential in hand to a root the verifier chose.')
    + rule('Sets and members.', "Grants name sets, claims name members; the binding's vocabulary decides.")
    + rule('At the time.', 'Authority and status must hold when the activity happened.', ['validFrom', 'validUntil'])
    + rule('Three answers.', "Yes, no or cannot tell; the verifier's own rule decides fitness.")
    + "</ol><p class='src'>Terms in mono are W3C Verifiable Credentials 2.0 and Bitstring Status List; D178's content is shaped after the DRMD. Rule 1 for recognition is our proposal.</p></section>";
  return "<span class='tag'>Signed test credential · read, not evaluated</span><div class='rulespage'><figure class='vcfig'>" + svg + '</figure>' + list + '</div>';
}
/** The recognition proposal, side by side with a list of recognized bodies. Static. */
function proposal() {
  const row = (what, list, ours) => "<tr><th scope='row'>" + what + '</th><td>' + list + "</td><td class='ours'>" + ours + '</td></tr>';
  const term = x => "<span class='term'>" + x + '</span>';
  return "<span class='tag'>Proposal · for discussion · not evaluated</span><div class='proposal'>"
    + "<table class='compare'><thead><tr><th></th><th>A list of recognized bodies</th><th>Proposal: one credential per recognition</th></tr></thead><tbody>"
    + row('What is signed', 'One list naming every recognized body', 'R: one credential about one body, in the Recognized Entities vocabulary (' + term('recognizedTo') + ', ' + term('action') + '), with the main scope in ILAC and IAF terms (our extension)')
    + row('One body is suspended', 'The list is re-issued, and its digest changes for everyone who pinned it', "One bit in the recognizer's suspension list; R and everything below it stay as issued")
    + row('How a verifier reaches it', 'Its profile names the list, or it searches from the top', 'The accreditation names R in a ' + term('RecognitionPolicy') + ' (' + term('termsOfUse') + ', pinned by digest), mirrored in ' + term('issuer.recognizedIn'))
    + row('Valid when issued?', 'Only from an old copy of the list, if someone kept it', 'R carries its validity window; status lists are dated credentials the issuers keep: the list in force that day answers')
    + '</tbody></table>'
    + "<div class='boxes'><section><h3>What recognition does not decide</h3><ul>"
    + "<li>Whether this claim is within the producer's scope (D520)</li><li>Whether the producer's scope stays within its accreditation (O within A)</li>"
    + "<li>Whether the required evidence is there (study S)</li><li>Whether the value is fit for use: the verifier's own rule (D197)</li></ul></section>"
    + "<section class='open'><h3>Open, for the pitches</h3><ul>"
    + '<li>Renewal: a new R means re-pinned accreditations, or a link from the new R to the old</li>'
    + '<li>The up-pointer: a ' + term('RecognitionPolicy') + ' term of use, mirrored in ' + term('issuer.recognizedIn') + ' (next page)</li>'
    + '<li>Recognized Entities checks validity windows at a past date, not suspension or revocation at that date</li>'
    + '<li>Trusted time: an issuer-written activity time can be backdated; a trusted timestamp closes that</li>'
    + '<li>Governed identifiers for activities and standards</li></ul></section></div>'
    + "<p class='limit'>Global ACI here is a fictional stand-in. Nothing on this page is issued or endorsed by Global Accreditation Cooperation Incorporated or any accreditation body.</p></div>";
}

/** The opening page: a credential's parts, what W3C says each is for, and how this story uses it. */
function anatomy({ R, esc }) {
  const d = JSON.parse(R.texts[D178]);
  const q = t => '<q>' + esc(t) + '</q>';
  const c = t => '<code>' + esc(t) + '</code>';
  const group = t => "<tr class='group'><th colspan='4'>" + esc(t) + '</th></tr>';
  const row = (prop, sec, says, here, board, star) => '<tr' + (star ? " class='star'" : '') + "><th scope='row'>" + c(prop) + '<small>§' + sec + '</small></th><td>' + says + '</td><td>' + here + '</td><td>' + board + '</td></tr>';
  const res = d.credentialSubject.materialPropertiesList[0].results[0], qty = res.data.quantity;
  const status = [d.credentialStatus].flat()[0], tou = [d.termsOfUse].flat()[0], ev = [d.evidence].flat()[0];
  const table = "<table class='taxonomy'><thead><tr><th>Property</th><th>What W3C says it is for</th><th>In certificate D178</th><th>On the board</th></tr></thead><tbody>"
    + group('Who, about what, what kind')
    + row('type', '4.5', 'What kind of credential it is; each type is to be documented in a specification.', c(typeOf(d)), 'The mono line on every card')
    + row('issuer', '4.7', 'Who issued it: a URL, recommended to lead to the issuer’s keys.', 'The RM producer', 'The column it sits in; “signed by”')
    + row('credentialSubject', '4.8', 'The claims, about one or more subjects.', 'Disc lot 1: ' + esc(short(res.propertyIri)) + ' = ' + esc(qty.value + ' ± ' + qty.uncertainty.expandedUncertainty + ' ' + qty.unit.ucumCode), 'What the card says; “about”')
    + group('When, and whether it still holds')
    + row('validFrom, validUntil', '4.9', 'When the credential is valid.', esc(String(d.validFrom).slice(0, 10) + ' – ' + String(d.validUntil).slice(0, 10)), 'Checked at the time asked about')
    + row('credentialStatus', '4.10', 'Where to learn whether it is still in force, such as a status list.', esc(status.statusPurpose) + ', bit ' + esc(status.statusListIndex) + ' of the producer’s list', 'The lists in each column head; suspend and revoke re-sign them')
    + group('Links to other credentials')
    + row('termsOfUse', '5.5', 'Terms of use can tell a verifier ' + q('the identity of the entity under whose authority the issuer issued this particular verifiable credential') + '. Each entry is typed; the type defines it. Here two types: ' + c('IssuedUnderPolicy') + ', a grant, and ' + c('RecognitionPolicy') + ', a recognition that grants no authority.', c(tou.type) + ' → ' + esc(short(tou.authorizationCredential.id)), '<b>Solid: acts under · dash-dot: recognized in</b>', true)
    + row('evidence', '5.6', q('Evidence can be included by an issuer to provide the verifier with additional supporting information'), c(ev.type) + ' → ' + esc(short(ev.id)), 'Dotted line: is backed by')
    + row('relatedResource', '5.3', q('Any object in the verifiable credential that contains an id property MAY be annotated with integrity information'), (d.relatedResource ?? []).map(r => esc(short(r.id))).join(' and ') + ', by sha384 digest', 'The digest that pins a line')
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
    + '<li><b>EBSI</b>: ' + c('AccreditationPolicy') + ' with ' + c('parentAccreditation') + ' and ' + c('rootAuthorisation') + '; ' + c('IssuanceCertificate') + ' binds the issuer’s accreditation into each credential</li>'
    + '<li><b>cheqd</b>: ' + c('AttestationPolicy') + ' with ' + c('parentAccreditation') + ' and ' + c('rootAuthorization') + '</li>'
    + '<li><b>W3C Recognized Entities</b> takes another route, ' + c('issuer.recognizedIn') + '; the last proposal page reconciles the two</li>'
    + '<li><b>UNTP</b>: an ' + c('authorisation') + ' inside the conformity attestation</li></ul>'
    + '<p>None of these links carries a digest of the parent; every link here does.</p></div>'
    + '</div></section>';
  return "<span class='tag'>Signed test credential D178 · read, not evaluated</span><div class='anatomy'>" + table + why
    + "<p class='src'>Quotes: W3C Verifiable Credentials Data Model 2.0, Recommendation of 15 May 2025; the other descriptions are ours. D178’s values are read from the signed test credential.</p></div>";
}

/** Recognized Entities and terms of use: one rule for every upward link, two meanings. Reads A's signed link. */
function reconcile({ R, esc }) {
  const c = t => '<code>' + esc(t) + '</code>';
  const q = t => '<q>' + esc(t) + '</q>';
  const A = JSON.parse(R.texts['https://nab.vc4qi.example/credentials/A']);
  const row = (what, grant, rec, re) => "<tr><th scope='row'>" + what + '</th><td>' + grant + "</td><td class='ours'>" + rec + '</td><td>' + re + '</td></tr>';
  const table = "<table class='compare'><thead><tr><th></th><th>" + c('IssuedUnderPolicy') + '</th><th>' + c('RecognitionPolicy') + '</th><th>' + c('issuer.recognizedIn') + ' (W3C Recognized Entities)</th></tr></thead><tbody>'
    + row('Says', 'Issued exercising that grant', 'Issued while the issuer is recognized there', 'The issuer appears in that list')
    + row('Where', c('termsOfUse') + ', field ' + c('authorizationCredential'), c('termsOfUse') + ', field ' + c('recognitionCredential'), 'The issuer object')
    + row('Confers authority', 'Yes, within the grant', 'No', 'No')
    + row('Used here by', 'Every chain: O under A, D178 under O, S under H', 'A and H name R; only a verifier that trusts Global ACI relies on it', 'Mirrors the RecognitionPolicy; must name the same credential')
    + row('Pinned', 'By digest in ' + c('relatedResource'), 'By digest in ' + c('relatedResource'), 'Not in the draft: fetched or stapled when checked')
    + row('Checked', 'Permission, scope within the grant, in force at the activity time', 'Action and main scope, not suspended, in force at the activity time', 'Subject is the issuer, the action, validators, validity at the evaluation time')
    + '</tbody></table>';
  const signed = JSON.stringify({ issuer: A.issuer, termsOfUse: A.termsOfUse, relatedResource: A.relatedResource }, null, 2);
  const why = "<section><h3>Why recognition is not authority</h3><ul>"
    + '<li>An accreditation body’s authority is its national appointment; in the EU each member state appoints a single national accreditation body (Regulation (EC) No 765/2008).</li>'
    + '<li>Peer evaluation and signatory status make its accreditations accepted abroad as equivalent; they do not make the body competent or authorized.</li>'
    + '<li>So A does not act under R: it is issued while the body is recognized in R. VCDM §5.5 has a purpose for each: ' + q('the identity of the entity under whose authority the issuer issued this particular verifiable credential') + ' for a grant; '
    + q('the procedures or policies that were used in issuing the verifiable credential') + ' for a recognition.</li>'
    + '<li>One rule follows every upward link the same way, pinned, about the issuer, in force at the activity time; the type decides what the link may establish.</li></ul></section>';
  const gets = "<div class='boxes'><section><h3>A Recognized Entities verifier gets</h3><ul>"
    + '<li>Through ' + c('issuer.recognizedIn') + ': the body is recognized by Global ACI, to accredit</li><li>Validity of each list at the time it asks about</li></ul></section>'
    + '<section><h3>This verifier adds</h3><ul><li>The link pinned by digest: the exact R relied on</li><li>The main scope the grant needs (RM production, ISO 17034)</li>'
    + '<li>R and A in force and not suspended on 20 January</li><li>Then the grants: 178 in one scope record of O, O within A, study S under H, and its own rule</li></ul></section></div>';
  const defs = "<div class='boxes'><section class='def'><h3>" + c('IssuedUnderPolicy') + '</h3><ol>'
    + '<li>The issuer issued this credential exercising the grant in ' + c('authorizationCredential') + '.</li>'
    + '<li>The grant is about this credential’s issuer, permits what it does, and the scope lies within the grant.</li>'
    + '<li>Every entry is claimed: all must hold, as for an accreditation and a scheme permission (GS).</li></ol></section>'
    + "<section class='def'><h3>" + c('RecognitionPolicy') + '</h3><ol>'
    + '<li>The issuer was recognized in ' + c('recognitionCredential') + ' when it issued this credential.</li>'
    + '<li>The recognition is about this credential’s issuer, for the action and main scope the verifier needs.</li>'
    + '<li>It establishes no authority, and counts only for a verifier that trusts the recognizer.</li></ol></section></div>'
    + "<p class='lede'>Both: pinned in " + c('relatedResource') + ', a digest mismatch is an error (VCDM §5.3), and the target must be in force at the activity time.</p>';
  const open = "<section class='open'><h3>Open, for the workshop</h3><ul><li>Field names: " + c('authorizationCredential') + ' or EBSI’s ' + c('parentAccreditation') + '</li>'
    + '<li>Who owns the ' + c('registration') + ' vocabulary for main scopes: ILAC and IAF, or each binding</li>'
    + '<li>Renewal re-pins: a new R means new digests in A and H</li><li>The Recognized Entities context is not yet published; we use a stand-in</li></ul></section>';
  return "<span class='tag'>Signed test credential A · read, not evaluated</span><div class='proposal reconcile'>"
    + "<p class='lede'><b>One rule, two meanings.</b> Every upward link is a term of use, followed and pinned the same way; its type says whether it is a grant or a recognition.</p>"
    + table + "<div class='pair'><figure class='json'><figcaption>A, as signed: its issuer, its terms of use and the pin</figcaption><pre>" + esc(signed) + '</pre></figure>' + why + '</div>'
    + gets + defs + open
    + "<p class='limit'>W3C Recognized Entities: Working Draft of 12 November 2026, experimental. Global ACI is a fictional stand-in; nothing here is issued or endorsed by Global Accreditation Cooperation Incorporated or any accreditation body.</p></div>";
}

/** One sentence per credential type, for the explainers. */
const TYPES = {
  RecognizedEntityCredential: 'A recognition (W3C Recognized Entities, draft): after peer evaluation, Global ACI recognizes this accreditation body for main scopes (activity and standard). It grants no authority: the body’s authority is its national appointment. One credential per recognized body is our proposal.',
  RmAccreditation: 'An accreditation: the body states what the producer may certify, like a row of its annex: materials, properties, ranges and methods.',
  RmLabAuthority: 'A laboratory accreditation: the body states which studies the laboratory may carry out, on which materials and properties.',
  RmOperationalScope: 'An operational scope: the producer declares what it actually certifies. It must lie within its accreditation, and the certificate must lie within it.',
  RmStudy: "A study: the laboratory reports the batch homogeneous. It is evidence: it supports the certificate's claim and grants nothing.",
  RmCertificate: 'An RM certificate, shaped after the DRMD: the certified value of the material, with its uncertainty and method. The credential the verifier is asked to rely on.',
};

/** The RM story's configuration, given the bundle (verifier.js). */
export const rmConfig = api => ({
  name: 'RM story', story: api.RM_STORY, actors: api.RM_ACTORS, assets: api.RM_ASSETS, defaults: api.RM_DEFAULT,
  parts: api.RM_PARTS, evaluate: state => api.evaluateRmBoard(state), rows: 2,
  hosts: { nab: 'the accreditation body', lab: 'the laboratory', producer: 'the RM producer', 'other-ab': 'another accreditation body', 'global-aci': 'Global ACI (fictional)' },
  facts, types: TYPES, content,
  glossary: [
    ['IssuedUnderPolicy', 'A term of use: this credential was issued exercising the grant it names (authorizationCredential). Drawn solid: “acts under”.'],
    ['RecognitionPolicy', 'A term of use: this credential was issued while its issuer is recognized in the credential it names (recognitionCredential). It grants no authority. Drawn dash-dot: “recognized in”.'],
    ['issuer.recognizedIn', 'W3C Recognized Entities: the list in which the issuer is recognized. Here it mirrors the RecognitionPolicy and must name the same credential.'],
    ['recognizedTo, registration', 'In a recognition: the action the body is recognized to perform (accredit), and its entry in the recognizer’s register with the main scopes.'],
    ['Global ACI', 'Here a fictional stand-in for the global accreditation cooperation that recognizes accreditation bodies after peer evaluation.'],
  ],
  // The vertical layout: one lane per level of authority, top to bottom.
  lanes: [
    { id: 'recognize', label: 'Recognizes', actors: ['gaci'], cells: [{ code: 'R', col: 'mid' }] },
    { id: 'accredit', label: 'Accredits', actors: ['ab'], cells: [{ code: 'A', col: 'c1' }, { code: 'H', col: 'c2' }] },
    { id: 'act', label: 'Acts under its accreditation', actors: ['rmp', 'lab'], actions: ['lab'], cells: [{ code: 'O', col: 'c1' }, { code: 'S', col: 'c2' }] },
    { id: 'certify', label: 'Certifies', actors: ['rmp'], cells: [{ code: 'D', col: 'mid' }] },
    { id: 'hold', label: 'Holds and shows', actors: ['holder'], extra: 'holder' },
  ],
  actions: {
    gaci: [{ type: 'toggle', key: 'suspendGaci', label: 'Suspend R', control: 'suspendGaci' }],
    ab: [{ type: 'toggle', key: 'suspendA', label: 'Suspend A', control: 'suspend' }],
    lab: [{ type: 'toggle', key: 'revokeS', label: 'Revoke S', control: 'revoke' }],
    rmp: [
      { type: 'seg', key: 'certificate', label: 'Certificate', control: 'certificate',
        options: [{ id: '178', label: '178' }, { id: '197', label: '197' }, { id: '520', label: '520' }, { id: 'custom', label: 'Own' }] },
      { type: 'form', control: 'certificate', when: st => st.certificate === 'custom', submit: 'Sign and ship',
        fields: [{ key: 'value', label: 'As, mg/kg' }, { key: 'uncertainty', label: 'U (k = 2)' }, { key: 'method', label: 'Method', options: ['M1', 'M2'] }] },
    ],
    holder: [{ type: 'toggle', key: 'tamper', label: 'Edit a value', control: 'tamper' },
      { type: 'seg', key: 'withhold', label: 'Leaves out', control: 'withhold',
        options: [{ id: '', label: '–' }, ...['O', 'A', 'S', 'H', 'R'].map(code => ({ id: code, label: code }))] }],
  },
  settings: [
    { type: 'seg', key: 'trust', label: 'Trusts', control: 'trust', always: true, options: [{ id: 'ab', label: 'This accreditation body', sub: 'AB' }, { id: 'global-aci', label: 'Global ACI', sub: 'abroad' }, { id: 'other', label: 'Another body', sub: 'abroad' }] },
    { type: 'seg', key: 'ask', label: 'Asks', control: 'ask', options: [{ id: 'authorized', label: 'Authorized?' }, { id: 'fit', label: 'Fit for use?' }] },
    { type: 'seg', key: 'rule', label: 'Decision rule', control: 'rule', when: st => st.ask === 'fit',
      options: [{ id: 'guarded', label: 'Guarded', sub: 'As + U ≤ limit' }, { id: 'simple', label: 'Simple', sub: 'As ≤ limit' }] },
    { type: 'seg', key: 'limit', label: 'Limit for As, mg/kg', control: 'limit', when: st => st.ask === 'fit',
      options: [{ id: '180', label: '180' }, { id: '200', label: '200' }, { id: '250', label: '250' }] },
    { type: 'seg', key: 'asOf', label: 'Asks about', control: 'asOf',
      options: [{ id: 'now', label: 'Today', sub: '25 Sep 2026' }, { id: 'issuance', label: 'At issuance', sub: '20 Jan 2026' }] },
    { type: 'seg', key: 'archive', label: 'Status lists', control: 'archive', when: st => st.asOf === 'issuance',
      options: [{ id: 'false', label: "Today's" }, { id: 'true', label: 'Kept from January' }] },
  ],
  note: st => st.ask === 'fit' ? 'Its requirement: <b>As at most ' + st.limit + ' mg/kg</b>, from its own profile.' : '',
  tags: (code, st) => [
    ...(code === 'R' && st.suspendGaci ? [{ text: 'suspended', bad: true }] : []),
    ...(code === 'R' && st.trust !== 'global-aci' ? [{ text: 'beyond the root' }] : []),
    ...(code === 'A' && st.suspendA ? [{ text: 'suspended', bad: true }] : []),
    ...(code === 'S' && st.revokeS ? [{ text: 'revoked', bad: true }] : []),
    ...(code === 'D' && st.tamper ? [{ text: 'edited after signing', bad: true }] : []),
  ],
  withheld: st => st.withhold || undefined,
  changedList: (uri, st) => uri === 'https://nab.vc4qi.example/status/suspension/1' && st.suspendA || uri === 'https://lab.vc4qi.example/status/1' && st.revokeS
    || uri === 'https://global-aci.vc4qi.example/status/suspension/1' && st.suspendGaci,
  extras: { holder: { row: 2, html: ({ st, R, mode, reached, esc }) => !reached('certify')
    ? "<div class='card empty'><span class='kind'>Nothing yet</span><span class='fact'>The disc and its certificate arrive when the producer ships them.</span></div>"
    : "<div class='wallet' id='wallet'><span class='object'>Disc lot 1 · CuZn39Pb3</span><p class='refs'>Holds certificate <b class='mono'>" + esc(short(R.certificate)) + '</b>'
      + (st.tamper && mode === 'evaluate' ? ', edited' : '') + ', and shows the chain it cites: '
      + ['O', 'A', 'S', 'H', 'R'].map(code => st.withhold === code && mode === 'evaluate' ? '<s>' + code + ' (left out)</s>' : code).join(', ') + '.</p></div>' } },
  handovers: ({ mode, reached }) => [
    ...(reached('certify') ? [['code:D', '#wallet']] : []),
    ...(mode !== 'build' ? [['#wallet', 'verdict']] : []),
  ],
  objectAt: ({ reached }) => reached('certify') ? 'holder' : 'rmp',
  band: st => st.trust === 'global-aci',
  panels: { anatomy, rules, proposal, reconcile },
  leaveOut: { key: 'withhold', control: 'withhold' },
  hideLocked: true,
  // The holder's column holds only the wallet: narrower, so the credentials get the room.
  columns: 'repeat(4, minmax(0, 1fr)) minmax(0, .75fr) minmax(0, 1.25fr)',
});
