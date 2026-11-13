// SPDX-License-Identifier: Apache-2.0
// Recognition of an accreditation body by an arrangement anchor, one credential per
// recognized body (a W3C Recognized Entities credential, Working Draft of 12 November
// 2026, with a single subject). Browser-safe and pure: it reads only facts from nodes
// whose gates 0-3 were already evaluated.
//
// Recognition is not authority. An accreditation body's authority is its national
// appointment, which a verifier that anchors the body trusts directly; recognition
// tells a verifier that anchors the recognizer to accept the body for a main scope.
// The grant names its issuer's recognition in termsOfUse, as a RecognitionPolicy whose
// recognitionCredential is a RecognizedEntityCredential, pinned by digest like every
// other link (one rule for every upward link; the policy type says what it means). The
// issuer object may mirror it as issuer.recognizedIn (W3C Recognized Entities
// discovery); when present it must name the same credential. The verifier's profile
// names no recognition; it names the recognizer as an anchor for the recognizer purpose
// and the action and main scope it requires. A recognition that nothing in the chain
// names confers nothing.
// A named recognition establishes that the grant's issuer is recognized only when:
//   - it is usable (protected, identified, valid, current status) and not suspended,
//   - its issuer is a configured anchor for the recognizer purpose,
//   - its subject is the grant's issuer, with stated actions
//     (recognition without actions is not accepted),
//   - one action is the required action, recognized by the recognition's issuer and in
//     force at the activity time,
//   - and its registration carries the required main scope (activity and normative
//     document, compared exactly).
// A recognition of another body, or without that main scope, contradicts (the handshake
// is broken); a missing recognition, entry or time is not established. Recognition
// carries no QI scope: the grant's own scope records, containment and the claim's
// coverage are still decided by the routes.
import { semanticOr } from './index.js';
import type { RelianceProfile } from './profile.js';
import type { BasisResult, NodeLookup } from './rm-v1-authority.js';

type Doc = Record<string, unknown>;

export const RECOGNITION_TYPE = 'RecognizedEntityCredential';

export interface MainScopeRule {
  readonly activity: string;
  readonly standardId: string;
}
export interface RecognitionRules {
  /** Anchor purpose the recognizer must hold, e.g. recognize-accreditation-bodies. */
  readonly recognizerPurpose: string;
  /** Recognized action required of the accreditation body, e.g. accredit. */
  readonly action: string;
  /** Per grant purpose (accredit-rm-producers, ...), the main scope that must be recognized. */
  readonly purposes: Readonly<Record<string, MainScopeRule>>;
}

const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);
const nonempty = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : isObject(value) ? [value] : []);
/** VCDM 2.0 issuer: a string, or an object with a string id. */
export const issuerId = (issuer: unknown): string | undefined =>
  nonempty(issuer) ? issuer : isObject(issuer) && nonempty(issuer.id) ? issuer.id : undefined;

/** The profile's recognition rules; undefined when absent, 'invalid' when malformed (never defaulted). */
export function recognitionRules(profile: RelianceProfile): RecognitionRules | 'invalid' | undefined {
  const raw = profile.bindingRules.recognition;
  if (raw === undefined) return undefined;
  if (!isObject(raw) || !nonempty(raw.recognizerPurpose) || !nonempty(raw.action) || !isObject(raw.purposes)) return 'invalid';
  const purposes: Record<string, MainScopeRule> = {};
  for (const [purpose, rule] of Object.entries(raw.purposes)) {
    if (!isObject(rule) || !nonempty(rule.activity) || !nonempty(rule.standardId)) return 'invalid';
    purposes[purpose] = { activity: rule.activity, standardId: rule.standardId };
  }
  return { recognizerPurpose: raw.recognizerPurpose, action: raw.action, purposes };
}

export const RECOGNITION_POLICY = 'RecognitionPolicy';
/** Recognitions a grant names: termsOfUse RecognitionPolicy entries referencing a RecognizedEntityCredential. */
export function recognitionReferences(grant: Doc): string[] {
  return list(grant.termsOfUse).filter(isObject)
    .filter(policy => policy.type === RECOGNITION_POLICY && isObject(policy.recognitionCredential)
      && policy.recognitionCredential.type === RECOGNITION_TYPE)
    .map(policy => (policy.recognitionCredential as Doc).id)
    .filter(nonempty);
}
/** The issuer object's issuer.recognizedIn mirror, when present. */
export const recognizedIn = (issuer: unknown): string | undefined =>
  isObject(issuer) && isObject(issuer.recognizedIn) && nonempty(issuer.recognizedIn.id) ? issuer.recognizedIn.id : undefined;

const basis = (id: string, state: BasisResult['state'], reason: string, sources: string[]): BasisResult =>
  ({ id, state, reason, sources });
const label = (scope: unknown) => {
  if (!isObject(scope)) return 'no main scope';
  const standard = isObject(scope.standard) ? scope.standard : {};
  return `${String(scope.activity)} under ${String(standard.name ?? standard.id)}`;
};

/** One referenced recognition's answer for `entity` (the grant's issuer) and the required main scope. */
function fromRecognition(
  id: string, uri: string, entity: string, wanted: MainScopeRule, rules: RecognitionRules, at: unknown,
  lookup: NodeLookup, profile: RelianceProfile,
): BasisResult {
  const sources = ['/termsOfUse', uri];
  const scopeOf = (entry: Doc) => isObject(entry.mainScope) ? entry.mainScope : undefined;
  const node = lookup(uri);
  if (node === undefined) return basis(id, 'not_established', `Recognition ${uri} is unavailable.`, sources);
  if (node.usable !== 'established' || node.document === undefined) {
    return basis(id, node.usable === 'contradicted' ? 'contradicted' : 'not_established',
      `Recognition ${uri} is not usable: ${node.reason}`, sources);
  }
  const doc = node.document;
  if (!list(doc.type).includes(RECOGNITION_TYPE)) {
    return basis(id, 'contradicted', `${uri} is not a ${RECOGNITION_TYPE}.`, sources);
  }
  const recognizer = issuerId(doc.issuer);
  const anchored = profile.trustAnchors.find(a => a.id === recognizer);
  if (anchored === undefined || !anchored.purposes.includes(rules.recognizerPurpose)) {
    return basis(id, 'not_established', `${String(recognizer)}, issuer of ${uri}, is not a configured anchor for ${rules.recognizerPurpose}.`, sources);
  }
  if (node.suspension !== undefined && node.suspension.state !== 'established') {
    return basis(id, node.suspension.state,
      node.suspension.state === 'contradicted'
        ? `${String(recognizer)} has suspended its recognition ${uri}. ${node.suspension.reason}`
        : `The suspension status of ${uri} is not established: ${node.suspension.reason}`, sources);
  }
  const subjects = list(doc.credentialSubject).filter(isObject);
  const subject = subjects.find(e => e.id === entity);
  if (subject === undefined) {
    return basis(id, 'contradicted',
      `${uri} recognizes ${subjects.map(e => String(e.id)).join(', ') || 'no subject'}, not ${entity}, the grant's issuer.`, sources);
  }
  const actions = list(subject.recognizedTo).filter(isObject);
  if (actions.length === 0) {
    return basis(id, 'not_established',
      `${uri} recognizes ${entity} without recognized actions; this profile does not accept recognition without stated actions.`, sources);
  }
  const wantedLabel = `${wanted.activity} under ${wanted.standardId}`;
  const matching = actions.filter(a => a.action === rules.action);
  if (matching.length === 0) {
    return basis(id, 'contradicted',
      `${uri} recognizes ${entity} to ${actions.map(a => String(a.action)).join(', ')}, not to ${rules.action}.`, sources);
  }
  const registered = list(subject.registration).filter(isObject);
  const scope = registered.map(scopeOf).find(m => m !== undefined && m.activity === wanted.activity
    && isObject(m.standard) && m.standard.id === wanted.standardId);
  if (scope === undefined) {
    const offered = registered.map(e => label(scopeOf(e))).join(', ') || 'no main scope';
    return basis(id, 'contradicted',
      `${uri} registers ${entity} for ${offered}, not for ${wantedLabel}.`, sources);
  }
  const byIssuer = matching.filter(a => a.recognizedBy === undefined || a.recognizedBy === recognizer);
  if (byIssuer.length === 0) {
    return basis(id, 'contradicted', `The matching action in ${uri} names another recognizer than its issuer ${String(recognizer)}.`, sources);
  }
  const activity = Date.parse(String(at));
  if (typeof at !== 'string' || !Number.isFinite(activity)) {
    return basis(id, 'not_established', 'No activity time is stated, so recognition at that time is not established.', sources);
  }
  const inForce = byIssuer.find(a => {
    const from = Date.parse(String(a.validFrom ?? doc.validFrom)), until = Date.parse(String(a.validUntil ?? doc.validUntil));
    return Number.isFinite(from) && Number.isFinite(until) && from <= activity && activity <= until;
  });
  if (inForce === undefined) {
    return basis(id, 'not_established', `${String(recognizer)} did not recognize ${entity} for ${wantedLabel} at the activity time ${at}.`, sources);
  }
  return basis(id, 'established',
    `${entity} is recognized by ${String(recognizer)} (a configured anchor for ${rules.recognizerPurpose}) to ${rules.action} `
      + `for ${label(scope)}, in force at ${at}, in ${uri}. Recognition grants no authority; it accepts the body for this verifier.`, sources);
}

/**
 * Whether the issuer of `grant` stands behind it for `purpose`: a configured anchor
 * for that purpose (the profile's direct trust), or else recognized through a
 * recognition the grant itself points up to. `at` is the activity time the grant
 * authorizes. Returns the deciding recognition so that routes can name it on their
 * witness path.
 */
export function grantIssuerStanding(
  id: string, grant: Doc, purpose: string, profile: RelianceProfile, lookup: NodeLookup, at: unknown,
): { basis: BasisResult; recognition?: string } {
  const issuer = issuerId(grant.issuer);
  const configured = profile.trustAnchors.find(a => a.id === issuer);
  if (configured?.purposes.includes(purpose)) {
    return { basis: basis(id, 'established', `${String(issuer)} is a configured anchor for ${purpose}.`, ['/issuer']) };
  }
  const direct = configured === undefined
    ? `${String(issuer)} is not a configured trust anchor.`
    : `${String(issuer)} is an anchor, but not for ${purpose}.`;
  const rules = recognitionRules(profile);
  if (rules === undefined) return { basis: basis(id, 'not_established', direct, ['/issuer']) };
  if (rules === 'invalid') {
    return { basis: basis(id, 'not_established', `${direct} The profile's recognition rules are malformed.`, ['/issuer']) };
  }
  const wanted = rules.purposes[purpose];
  if (wanted === undefined || issuer === undefined) {
    return { basis: basis(id, 'not_established', `${direct} The profile accepts no recognition for ${purpose}.`, ['/issuer']) };
  }
  const references = recognitionReferences(grant);
  if (references.length === 0) {
    return { basis: basis(id, 'not_established',
      `${direct} The grant names no ${RECOGNITION_TYPE} in a ${RECOGNITION_POLICY} of its termsOfUse.`, ['/issuer', '/termsOfUse']) };
  }
  const mirror = recognizedIn(grant.issuer);
  if (mirror !== undefined && !references.includes(mirror)) {
    return { basis: basis(id, 'contradicted',
      `${direct} The issuer's recognizedIn names ${mirror}, but the grant's ${RECOGNITION_POLICY} names ${references.join(', ')}.`,
      ['/issuer/recognizedIn', '/termsOfUse']) };
  }
  const answers = references.map(uri => ({ uri, result: fromRecognition(id, uri, issuer, wanted, rules, at, lookup, profile) }));
  const winner = answers.find(a => a.result.state === 'established');
  if (winner) return { basis: winner.result, recognition: winner.uri };
  return {
    basis: basis(id, semanticOr(answers.map(a => a.result.state)), `${direct} ${answers.map(a => a.result.reason).join(' ')}`,
      ['/issuer', '/termsOfUse', ...answers.map(a => a.uri)]),
  };
}
