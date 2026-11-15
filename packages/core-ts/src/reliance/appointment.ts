// SPDX-License-Identifier: Apache-2.0
// A state's appointment of its accreditation body, the source of the body's authority
// (Regulation (EC) No 765/2008, Art. 4(1): each Member State appoints a single national
// accreditation body). Browser-safe and pure: it reads only facts from nodes whose
// gates 0-3 were already evaluated.
//
// The appointment has the shape of EBSI's root trust-chain credential,
// VerifiableAuthorisationForTrustChain (@cef-ebsi/vcdm2.0-trust-model-schema 2.0.0; also
// VCDM 2.0 Example 28): the subject is the appointed body, permissionFor names per
// credential type the schema and jurisdiction it may issue under, and its own termsOfUse
// is a TrustFrameworkPolicy naming the legal basis. The body's grants name it as the
// grant they were issued under: a termsOfUse IssuedUnderPolicy entry whose id is the
// appointment, with its digest, like every other link.
// Where EBSI points to a registry entry by URL, this binding pins the exact bytes.
//
// A verifier that anchors the state for the appointer purpose accepts the grant's issuer
// only when the named appointment:
//   - is usable (protected, identified, valid, current status) and not suspended,
//   - is issued by a configured anchor for the appointer purpose,
//   - is about the grant's issuer (the handshake),
//   - permits the grant's type under the grant's own schema, for the jurisdiction the
//     profile requires (when it names one),
//   - and was in force at the activity time.
// An appointment of another body, or one that does not permit the grant, contradicts; a
// missing appointment or time is not established. An appointment that nothing in the
// chain names confers nothing, and a verifier that anchors the body never follows it.
import type { RelianceProfile } from './profile.js';
import type { BasisResult, NodeLookup } from './rm-v1-authority.js';

type Doc = Record<string, unknown>;

export const APPOINTMENT_TYPE = 'VerifiableAuthorisationForTrustChain';

export interface AppointmentRules {
  /** Anchor purpose the appointer (the state) must hold, e.g. appoint-accreditation-bodies. */
  readonly appointerPurpose: string;
  /** Jurisdiction the appointment must cover, when the verifier requires one. */
  readonly jurisdiction?: string;
}

const isObject = (value: unknown): value is Doc => value !== null && typeof value === 'object' && !Array.isArray(value);
const nonempty = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : isObject(value) ? [value] : []);
/** EBSI's jurisdiction: one URI, or an array of URIs. */
const jurisdictions = (value: unknown): unknown[] => (typeof value === 'string' ? [value] : list(value));
const issuerOf = (issuer: unknown): string | undefined =>
  nonempty(issuer) ? issuer : isObject(issuer) && nonempty(issuer.id) ? issuer.id : undefined;
const basis = (id: string, state: BasisResult['state'], reason: string, sources: string[]): BasisResult =>
  ({ id, state, reason, sources });

/** The profile's appointment rules; undefined when absent, 'invalid' when malformed (never defaulted). */
export function appointmentRules(profile: RelianceProfile): AppointmentRules | 'invalid' | undefined {
  const raw = profile.bindingRules.appointment;
  if (raw === undefined) return undefined;
  if (!isObject(raw) || !nonempty(raw.appointerPurpose)) return 'invalid';
  if (raw.jurisdiction !== undefined && !nonempty(raw.jurisdiction)) return 'invalid';
  return { appointerPurpose: raw.appointerPurpose, ...(nonempty(raw.jurisdiction) ? { jurisdiction: raw.jurisdiction } : {}) };
}

/**
 * Appointments a grant names: termsOfUse IssuedUnderPolicy entries whose credential is a
 * VerifiableAuthorisationForTrustChain, or could not be read (it may be one: the check
 * then says it is unavailable, never that there is none).
 */
export function appointmentReferences(grant: Doc, lookup: NodeLookup): string[] {
  return list(grant.termsOfUse).filter(isObject).filter(p => p.type === 'IssuedUnderPolicy').map(p => p.id).filter(nonempty).filter(uri => {
    const node = lookup(uri);
    const type = node?.document ? (Array.isArray(node.document.type) ? String(node.document.type[1]) : undefined) : node?.type;
    return type === undefined || type === APPOINTMENT_TYPE;
  });
}

/** The named appointment's answer for `entity` (the grant's issuer) and the grant's type and schema. */
function fromAppointment(
  id: string, uri: string, grant: Doc, entity: string, rules: AppointmentRules, at: unknown,
  lookup: NodeLookup, profile: RelianceProfile,
): BasisResult {
  const sources = ['/termsOfUse', uri];
  const node = lookup(uri);
  if (node === undefined) return basis(id, 'not_established', `Appointment ${uri} is unavailable.`, sources);
  if (node.usable !== 'established' || node.document === undefined) {
    return basis(id, node.usable === 'contradicted' ? 'contradicted' : 'not_established',
      `Appointment ${uri} is not usable: ${node.reason}`, sources);
  }
  const doc = node.document;
  if (!list(doc.type).includes(APPOINTMENT_TYPE)) return basis(id, 'contradicted', `${uri} is not a ${APPOINTMENT_TYPE}.`, sources);
  const appointer = issuerOf(doc.issuer);
  const anchored = profile.trustAnchors.find(a => a.id === appointer);
  if (anchored === undefined || !anchored.purposes.includes(rules.appointerPurpose)) {
    return basis(id, 'not_established', `${String(appointer)}, issuer of ${uri}, is not a configured anchor for ${rules.appointerPurpose}.`, sources);
  }
  if (node.suspension !== undefined && node.suspension.state !== 'established') {
    return basis(id, node.suspension.state,
      node.suspension.state === 'contradicted'
        ? `${String(appointer)} has suspended its appointment ${uri}. ${node.suspension.reason}`
        : `The suspension status of ${uri} is not established: ${node.suspension.reason}`, sources);
  }
  const subject = isObject(doc.credentialSubject) ? doc.credentialSubject : {};
  if (subject.id !== entity) {
    return basis(id, 'contradicted', `${uri} appoints ${String(subject.id)}, not ${entity}, the grant's issuer.`, sources);
  }
  const grantType = Array.isArray(grant.type) ? String(grant.type[1]) : undefined;
  const grantSchema = isObject(grant.credentialSchema) ? grant.credentialSchema.id : undefined;
  const permissions = list(subject.permissionFor).filter(isObject);
  const forGrant = permissions.filter(p => p.schemaId === grantSchema && list(p.types).includes(grantType));
  if (forGrant.length === 0) {
    const offered = permissions.flatMap(p => list(p.types).slice(-1)).map(String).join(', ') || 'nothing';
    return basis(id, 'contradicted', `${uri} permits ${entity} to issue ${offered}, not ${String(grantType)}.`, sources);
  }
  const wanted = rules.jurisdiction;
  const inJurisdiction = wanted === undefined ? forGrant : forGrant.filter(p => jurisdictions(p.jurisdiction).includes(wanted));
  if (inJurisdiction.length === 0) {
    const offered = [...new Set(forGrant.flatMap(p => jurisdictions(p.jurisdiction)).map(String))].join(', ') || 'no jurisdiction';
    return basis(id, 'contradicted', `${uri} permits ${String(grantType)} for ${offered}, not for ${wanted}.`, sources);
  }
  const activity = Date.parse(String(at));
  if (typeof at !== 'string' || !Number.isFinite(activity)) {
    return basis(id, 'not_established', 'No activity time is stated, so the appointment at that time is not established.', sources);
  }
  const from = Date.parse(String(doc.validFrom)), until = Date.parse(String(doc.validUntil));
  if (!Number.isFinite(from) || !Number.isFinite(until) || activity < from || activity > until) {
    return basis(id, 'not_established', `${uri} was not in force at the activity time ${at}.`, sources);
  }
  return basis(id, 'established',
    `${entity} is appointed by ${String(appointer)} (a configured anchor for ${rules.appointerPurpose}) to issue `
      + `${String(grantType)}${wanted === undefined ? '' : ` in ${wanted}`}, in force at ${at}, in ${uri}.`, sources);
}

/**
 * Whether the grant's issuer stands behind it through the appointment the grant names.
 * Undefined when the profile has no appointment rules (the profile does not accept
 * this basis); `direct` is the reason the issuer is not itself an anchor.
 */
export function appointmentStanding(
  id: string, grant: Doc, profile: RelianceProfile, lookup: NodeLookup, at: unknown, direct: string,
): { basis: BasisResult; via?: string } | undefined {
  const rules = appointmentRules(profile);
  if (rules === undefined) return undefined;
  if (rules === 'invalid') return { basis: basis(id, 'not_established', `${direct} The profile's appointment rules are malformed.`, ['/issuer']) };
  const issuer = issuerOf(grant.issuer);
  const references = appointmentReferences(grant, lookup);
  if (references.length === 0 || issuer === undefined) {
    return { basis: basis(id, 'not_established',
      `${direct} The grant names no ${APPOINTMENT_TYPE} in an IssuedUnderPolicy of its termsOfUse.`, ['/issuer', '/termsOfUse']) };
  }
  if (references.length > 1) {
    return { basis: basis(id, 'not_established',
      `${direct} The grant names several appointments; this binding has no deterministic selection.`, ['/issuer', '/termsOfUse']) };
  }
  const uri = references[0]!;
  const result = fromAppointment(id, uri, grant, issuer, rules, at, lookup, profile);
  return result.state === 'established'
    ? { basis: result, via: uri }
    : { basis: { ...result, reason: `${direct} ${result.reason}`, sources: ['/issuer', ...result.sources] } };
}
