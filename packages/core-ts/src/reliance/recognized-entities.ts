// SPDX-License-Identifier: Apache-2.0
// Recognition of an accreditation body through an arrangement's signatory list, a W3C
// Recognized Entities credential (Working Draft of 4 November 2026). Browser-safe and
// pure: it reads only facts from nodes whose gates 0-3 were already evaluated.
//
// The verifier's profile names the lists it accepts (bindingRules.recognition), as it
// names its anchors; a list a holder supplies or a credential points to is not used.
// A list establishes that the issuer of a grant is recognized only when:
//   - the list is usable (protected, identified, valid, current status) and not suspended,
//   - its issuer is a configured anchor for the list purpose,
//   - it names the grant's issuer as a RecognizedEntity with stated actions
//     (recognition without actions is not accepted),
//   - one action is the required action for the required main scope (activity and
//     normative document, compared exactly), recognized by the list's issuer,
//   - and that action was in force at the activity time.
// A main scope the list does not grant contradicts; a missing list, entry or time is
// not established. Recognition carries no QI scope: the grant's own scope records,
// containment and the claim's coverage are still decided by the routes.
import { semanticOr } from './index.js';
import type { RelianceProfile } from './profile.js';
import type { BasisResult, NodeLookup } from './rm-v1-authority.js';

type Doc = Record<string, unknown>;

export interface MainScopeRule {
  readonly activity: string;
  readonly standardId: string;
}
export interface RecognitionRules {
  /** Signatory lists the verifier accepts, by identifier. */
  readonly lists: readonly string[];
  /** Anchor purpose the list issuer must hold, e.g. recognize-accreditation-bodies. */
  readonly listPurpose: string;
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
  if (!isObject(raw) || !Array.isArray(raw.lists) || raw.lists.length === 0 || !raw.lists.every(nonempty) ||
      !nonempty(raw.listPurpose) || !nonempty(raw.action) || !isObject(raw.purposes)) return 'invalid';
  const purposes: Record<string, MainScopeRule> = {};
  for (const [purpose, rule] of Object.entries(raw.purposes)) {
    if (!isObject(rule) || !nonempty(rule.activity) || !nonempty(rule.standardId)) return 'invalid';
    purposes[purpose] = { activity: rule.activity, standardId: rule.standardId };
  }
  return { lists: [...raw.lists] as string[], listPurpose: raw.listPurpose, action: raw.action, purposes };
}

/** Lists the chain verification must resolve and verify (gates 0-3) for this profile. */
export function recognitionLists(profile: RelianceProfile): readonly string[] {
  const rules = recognitionRules(profile);
  return rules === undefined || rules === 'invalid' ? [] : rules.lists;
}

const basis = (id: string, state: BasisResult['state'], reason: string, sources: string[]): BasisResult =>
  ({ id, state, reason, sources });
const label = (scope: unknown) => {
  if (!isObject(scope)) return 'no main scope';
  const standard = isObject(scope.standard) ? scope.standard : {};
  return `${String(scope.activity)} under ${String(standard.name ?? standard.id)}`;
};

/** One list's answer for `entity` (the grant's issuer) and the required main scope. */
function fromList(
  id: string, uri: string, entity: string, wanted: MainScopeRule, rules: RecognitionRules, at: unknown,
  lookup: NodeLookup, profile: RelianceProfile,
): BasisResult {
  const sources = ['/issuer', uri];
  const node = lookup(uri);
  if (node === undefined) return basis(id, 'not_established', `Signatory list ${uri} is unavailable.`, sources);
  if (node.usable !== 'established' || node.document === undefined) {
    return basis(id, node.usable === 'contradicted' ? 'contradicted' : 'not_established',
      `Signatory list ${uri} is not usable: ${node.reason}`, sources);
  }
  const doc = node.document;
  if (!list(doc.type).includes('RecognizedEntityCredential')) {
    return basis(id, 'contradicted', `${uri} is not a RecognizedEntityCredential.`, sources);
  }
  const listIssuer = issuerId(doc.issuer);
  const anchored = profile.trustAnchors.find(a => a.id === listIssuer);
  if (anchored === undefined || !anchored.purposes.includes(rules.listPurpose)) {
    return basis(id, 'not_established', `${String(listIssuer)}, issuer of ${uri}, is not a configured anchor for ${rules.listPurpose}.`, sources);
  }
  if (node.suspension !== undefined && node.suspension.state !== 'established') {
    return basis(id, node.suspension.state,
      node.suspension.state === 'contradicted'
        ? `${String(listIssuer)} has suspended its signatory list ${uri}. ${node.suspension.reason}`
        : `The suspension status of ${uri} is not established: ${node.suspension.reason}`, sources);
  }
  const listed = list(doc.credentialSubject).filter(isObject).find(e => e.id === entity);
  if (listed === undefined) return basis(id, 'not_established', `${uri} does not list ${entity}.`, sources);
  const actions = list(listed.recognizedTo).filter(isObject);
  if (actions.length === 0) {
    return basis(id, 'not_established',
      `${uri} lists ${entity} without recognized actions; this profile does not accept recognition without stated actions.`, sources);
  }
  const wantedLabel = `${wanted.activity} under ${wanted.standardId}`;
  const matching = actions.filter(a => a.action === rules.action && isObject(a.mainScope)
    && a.mainScope.activity === wanted.activity && isObject(a.mainScope.standard) && a.mainScope.standard.id === wanted.standardId);
  if (matching.length === 0) {
    const offered = actions.map(a => `${String(a.action)} (${label(a.mainScope)})`).join(', ');
    return basis(id, 'contradicted',
      `${uri} recognizes ${entity} for ${offered}, not to ${rules.action} for ${wantedLabel}.`, sources);
  }
  const byIssuer = matching.filter(a => a.recognizedBy === undefined || a.recognizedBy === listIssuer);
  if (byIssuer.length === 0) {
    return basis(id, 'contradicted', `The matching action in ${uri} names another recognizer than the list's issuer ${String(listIssuer)}.`, sources);
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
    return basis(id, 'not_established', `${String(listIssuer)} did not recognize ${entity} for ${wantedLabel} at the activity time ${at}.`, sources);
  }
  return basis(id, 'established',
    `${entity} is recognized by ${String(listIssuer)} (a configured anchor for ${rules.listPurpose}) to ${rules.action} `
      + `for ${label(inForce.mainScope)}, in force at ${at}, in ${uri}.`, sources);
}

/**
 * Whether the issuer of `grant` stands behind it for `purpose`: a configured anchor
 * for that purpose (the profile's direct trust), or else recognized through a
 * signatory list the profile accepts. `at` is the activity time the grant authorizes.
 * Returns the deciding list so that routes can name it on their witness path.
 */
export function grantIssuerStanding(
  id: string, grant: Doc, purpose: string, profile: RelianceProfile, lookup: NodeLookup, at: unknown,
): { basis: BasisResult; list?: string } {
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
  const answers = rules.lists.map(uri => ({ uri, result: fromList(id, uri, issuer, wanted, rules, at, lookup, profile) }));
  const state = semanticOr(answers.map(a => a.result.state));
  const winner = answers.find(a => a.result.state === 'established');
  if (winner) return { basis: winner.result, list: winner.uri };
  return {
    basis: basis(id, state, `${direct} ${answers.map(a => a.result.reason).join(' ')}`,
      ['/issuer', ...answers.map(a => a.uri)]),
  };
}
