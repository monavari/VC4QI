// SPDX-License-Identifier: Apache-2.0
// PREVIEW of the RM v1 reliance rules planned for phases I3/I4 (gates 4-6):
// meaning/mapping, authority and scope, support and the conformity decision.
// These are NOT the repository evaluator: they exist only so the poster page can
// illustrate the 178/197/520 witness. They read only facts from artifacts whose
// protection was established by the repository's verifyRmArtifact.
import type { SemanticState } from '../../../packages/core-ts/src/reliance/types.js';

export interface RuleResult { readonly state: SemanticState; readonly text: string }
type Doc = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const RM = 'https://vc4qi.example/bindings/rm/1#';
const rm = (term: string) => `${RM}${term}`;
const ok = (text: string): RuleResult => ({ state: 'established', text });
const bad = (text: string): RuleResult => ({ state: 'contradicted', text });
const unknown = (text: string): RuleResult => ({ state: 'not_established', text });
const short = (iri: string) => String(iri).split(/[#/]/).pop();

/** Exact decimal from a non-negative decimal string, as a scaled BigInt pair. */
function decimal(value: unknown): { n: bigint; scale: number } | undefined {
  if (typeof value !== 'string' || !/^(0|[1-9][0-9]*)(\.[0-9]+)?$/.test(value)) return undefined;
  const [int, frac = ''] = value.split('.');
  return { n: BigInt(int + frac), scale: frac.length };
}
function compare(a: string, b: string): number {
  const x = decimal(a)!, y = decimal(b)!;
  const scale = Math.max(x.scale, y.scale);
  const xv = x.n * 10n ** BigInt(scale - x.scale), yv = y.n * 10n ** BigInt(scale - y.scale);
  return xv < yv ? -1 : xv > yv ? 1 : 0;
}
function add(a: string, b: string): string {
  const x = decimal(a)!, y = decimal(b)!;
  const scale = Math.max(x.scale, y.scale);
  const sum = (x.n * 10n ** BigInt(scale - x.scale) + y.n * 10n ** BigInt(scale - y.scale)).toString().padStart(scale + 1, '0');
  return scale === 0 ? sum : `${sum.slice(0, -scale)}.${sum.slice(-scale)}`;
}
const includes = (list: unknown, item: string) => Array.isArray(list) && list.includes(item);

export interface PreviewInput { A: Doc; H: Doc; O: Doc; S: Doc; D: Doc; anchors: readonly string[] }
export interface Preview {
  readonly mapping: RuleResult[];
  readonly authority: RuleResult[];
  readonly scope: RuleResult;
  readonly support: RuleResult[];
  readonly conformity: RuleResult & { readonly run: boolean };
  readonly x: string;
  readonly U: string;
}

export function previewRules({ A, H, O, S, D, anchors }: PreviewInput): Omit<Preview, 'conformity'> {
  const subject = D.credentialSubject;
  const result = subject.materialPropertiesList[0].results[0];
  const q = result.data.quantity;
  const material = subject.materials[0];
  const x = q.value as string, U = q.uncertainty.expandedUncertainty as string;

  const mapping = [
    q.quantityKind === rm('MassFraction') && q.unit.ucumCode === 'mg/kg'
      ? ok('Mass fraction in mg/kg: supported by the binding.') : unknown('Unsupported quantity kind or unit.'),
    decimal(x) && decimal(U) ? ok(`Exact decimals: x = ${x}, U = ${U} mg/kg.`) : bad('Value or uncertainty is not a valid decimal.'),
    q.uncertainty.coverageFactor === '2' ? ok('Coverage factor k = 2, as the binding requires.') : unknown('Unsupported coverage factor.'),
  ];

  const oRecord = O.credentialSubject.scope[0];
  const aRecord = A.credentialSubject.scope.find((a: Doc) =>
    a.matrixIri === oRecord.matrixIri && a.formIri === oRecord.formIri && a.quantityKindIri === oRecord.quantityKindIri
    && oRecord.allowedPropertyIris.every((p: string) => a.allowedPropertyIris.includes(p))
    && oRecord.allowedMethodIris.every((m: string) => a.allowedMethodIris.includes(m))
    && a.range.unit === oRecord.range.unit
    && compare(oRecord.range.from, a.range.from) >= 0 && compare(oRecord.range.to, a.range.to) <= 0);
  const authority = [
    D.termsOfUse[0].authorizationCredential.id === O.id
      ? ok('D names operational scope O as its authorization (termsOfUse).') : unknown('D names no recognized authorization.'),
    O.credentialSubject.id === D.issuer && O.issuer === D.issuer && includes(O.credentialSubject.permittedActivity, rm('issueRmCertificate'))
      ? ok("O is the producer's own scope for issuing RM certificates.") : bad('O does not belong to D\'s issuer.'),
    O.termsOfUse[0].authorizationCredential.id === A.id && A.credentialSubject.id === O.issuer
      && includes(A.credentialSubject.permittedActivity, rm('maintainRmScope'))
      ? ok('Accreditation A lets the producer maintain an operational scope.') : bad('No permission to maintain O.'),
    anchors.includes(A.issuer) ? ok('A is issued by the configured trust anchor (fictional NAB).') : unknown("A's issuer is not a configured anchor."),
    aRecord ? ok(`O lies within A: methods ${oRecord.allowedMethodIris.map(short).join(', ')} within ${aRecord.allowedMethodIris.map(short).join(', ')}; ${oRecord.range.from}–${oRecord.range.to} within ${aRecord.range.from}–${aRecord.range.to} mg/kg.`)
      : bad('O is not contained in one record of A.'),
  ];

  const record = O.credentialSubject.scope.find((o: Doc) =>
    o.matrixIri === material.matrixIri && o.formIri === material.formIri && o.quantityKindIri === q.quantityKind
    && o.allowedPropertyIris.includes(result.propertyIri) && o.allowedMethodIris.includes(result.methodIri)
    && o.range.unit === q.unit.ucumCode);
  let scope: RuleResult;
  if (!record) scope = bad(`No record of O covers ${short(result.propertyIri)}, ${short(material.matrixIri)}, ${short(result.methodIri)}.`);
  else if (compare(x, record.range.from) < 0) scope = bad(`${x} < ${record.range.from} mg/kg: below the accredited range.`);
  else if (compare(x, record.range.to) > 0) scope = bad(`${x} > ${record.range.to} mg/kg: above the accredited range.`);
  else scope = ok(`${record.range.from} ≤ ${x} ≤ ${record.range.to} mg/kg (record ${short(record.id)}).`);

  const hRecord = H.credentialSubject.scope[0];
  const support = [
    D.evidence[0].id === S.id && S.credentialSubject.id === subject.id
      && S.credentialSubject.propertyIri === result.propertyIri && S.credentialSubject.matrixIri === material.matrixIri
      ? ok('Study S concerns the same batch, property and matrix (evidence).') : bad('Study S concerns another batch or property.'),
    S.credentialSubject.outcomeIri === rm('Homogeneous') ? ok('S reports the batch homogeneous.') : bad('S does not report homogeneity.'),
    S.termsOfUse[0].authorizationCredential.id === H.id && H.credentialSubject.id === S.issuer
      && includes(H.credentialSubject.permittedActivity, rm('issueRmStudy'))
      && hRecord.studyTypeIris.includes(S.credentialSubject.studyTypeIri) && anchors.includes(H.issuer)
      ? ok("S's laboratory has its own authority for homogeneity studies (H).") : unknown('S lacks its own laboratory authority.'),
  ];
  return { mapping, authority, scope, support, x, U };
}

/** Conformity x + U ≤ L, run only when every prerequisite is established. */
export function previewConformity(x: string, U: string, limit: string, prerequisites: SemanticState): RuleResult & { run: boolean } {
  if (prerequisites !== 'established') {
    return { state: 'not_established', run: false, text: 'Not asked: its prerequisites are not established.' };
  }
  const g = add(x, U);
  return compare(g, limit) <= 0
    ? { state: 'established', run: true, text: `${x} + ${U} = ${g} ≤ ${limit} mg/kg.` }
    : { state: 'contradicted', run: true, text: `${x} + ${U} = ${g} > ${limit} mg/kg.` };
}
