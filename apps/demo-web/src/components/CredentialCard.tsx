import { useState } from 'react';
import clsx from 'clsx';
import type { JsonObject } from '@qi-vc/core';

// ── Utilities ─────────────────────────────────────────────────────────────────

function credType(cred: JsonObject): string {
  const types = (cred.type as string[] | undefined) ?? [];
  return types.find((t) => t !== 'VerifiableCredential') ?? 'Credential';
}

function issuerDid(cred: JsonObject): string {
  const iss = cred.issuer;
  if (typeof iss === 'string') return iss;
  if (iss && typeof iss === 'object') return ((iss as JsonObject).id as string) ?? '';
  return '';
}

function shortDid(did: string) {
  return did.replace(/^did:web:/, '').replace(/\.example.*$/, '') || did;
}

function fmtDate(iso: string | undefined) {
  if (!iso) return '—';
  try { return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }); }
  catch { return iso; }
}

function camelToWords(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

// ── Recursive tree renderer ───────────────────────────────────────────────────
// Rules:
//  - scalar value     → key label + value inline on one row
//  - object value     → key label on its own line, children indented below
//  - array of scalars → key label + comma-joined inline
//  - array of objects → key label on its own line, each item block indented (numbered if >1)

interface TreeProps { value: unknown; depth?: number; keyName?: string; }

function TreeValue({ value, depth = 0, keyName }: TreeProps) {
  const pl = depth * 10; // px indent per level

  // Null / scalar
  if (value === null || (typeof value !== 'object')) {
    return keyName !== undefined ? (
      <div className="flex items-baseline gap-2 py-[2px]" style={{ paddingLeft: pl }}>
        <span className="text-[10px] text-slate-400 shrink-0 w-28">{camelToWords(keyName)}</span>
        <span className="text-[10px] font-medium text-slate-800 break-all">{String(value ?? '—')}</span>
      </div>
    ) : (
      <span className="text-[10px] font-medium text-slate-800 break-all">{String(value ?? '—')}</span>
    );
  }

  // Array of only scalars → inline
  if (Array.isArray(value) && value.every((v) => typeof v !== 'object' || v === null)) {
    const text = (value as (string | number | boolean)[]).join(', ');
    return keyName !== undefined ? (
      <div className="flex items-baseline gap-2 py-[2px]" style={{ paddingLeft: pl }}>
        <span className="text-[10px] text-slate-400 shrink-0 w-28">{camelToWords(keyName)}</span>
        <span className="text-[10px] font-medium text-slate-800 break-all">{text}</span>
      </div>
    ) : <span className="text-[10px] font-medium text-slate-800">{text}</span>;
  }

  // Array of objects
  if (Array.isArray(value)) {
    return (
      <div style={{ paddingLeft: pl }}>
        {keyName && (
          <p className="text-[10px] font-semibold text-slate-500 pt-1.5 pb-0.5">{camelToWords(keyName)}</p>
        )}
        {(value as unknown[]).map((item, i) => (
          <div key={i} className={clsx(i > 0 && 'border-t border-slate-100 mt-1 pt-1')}>
            {value.length > 1 && (
              <span className="text-[9px] text-slate-300 font-mono mr-1">#{i + 1}</span>
            )}
            <TreeValue value={item} depth={0} />
          </div>
        ))}
      </div>
    );
  }

  // Plain object — each key gets its own line; nested objects/arrays are indented
  const obj = value as Record<string, unknown>;
  const entries = Object.entries(obj).filter(([k]) => k !== 'id' || depth === 0);

  return (
    <div style={{ paddingLeft: pl }}>
      {keyName && (
        <p className="text-[10px] font-semibold text-slate-500 pt-1.5 pb-0.5">{camelToWords(keyName)}</p>
      )}
      {entries.map(([k, v]) => {
        const isNested = v !== null && typeof v === 'object';
        return (
          <TreeValue
            key={k}
            value={v}
            depth={isNested ? 1 : 0}
            keyName={k}
          />
        );
      })}
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
      <div className="bg-white rounded border border-slate-100 px-2.5 py-0.5">
        {children}
      </div>
    </div>
  );
}

// ── Type palette ──────────────────────────────────────────────────────────────

const TYPE_PALETTE: Record<string, { border: string; accent: string; bg: string }> = {
  DigitalCalibrationCertificate:      { border: '#1B7F79', accent: '#1B7F79', bg: '#E6F4F3' },
  AccreditationCertificate:           { border: '#2D6CB5', accent: '#2D6CB5', bg: '#EBF2FA' },
  LegalMandateEvidence:               { border: '#2D6CB5', accent: '#2D6CB5', bg: '#EBF2FA' },
  SchemeAuthorizationEvidence:        { border: '#C8862A', accent: '#C8862A', bg: '#FAF0E0' },
  CalibrationCapabilityAuthorization: { border: '#6FA8DC', accent: '#6FA8DC', bg: '#EBF5FB' },
  OperationalScopeEvidence:           { border: '#6FA8DC', accent: '#6FA8DC', bg: '#EBF5FB' },
  ReferenceMaterialCertificate:       { border: '#1B7F79', accent: '#1B7F79', bg: '#E6F4F3' },
  ReferenceMaterialStudy:             { border: '#1B7F79', accent: '#1B7F79', bg: '#E6F4F3' },
  TestReport:                         { border: '#D9703A', accent: '#D9703A', bg: '#FFF4EE' },
};
const DEFAULT_PALETTE = { border: '#94A3B8', accent: '#64748B', bg: '#F8FAFC' };

const TYPE_LABEL: Record<string, string> = {
  DigitalCalibrationCertificate:      'Digital Calibration Certificate',
  AccreditationCertificate:           'Accreditation Certificate',
  LegalMandateEvidence:               'Legal Mandate',
  SchemeAuthorizationEvidence:        'Scheme Authorization',
  CalibrationCapabilityAuthorization: 'Operational Scope',
  OperationalScopeEvidence:           'Operational Scope',
  ReferenceMaterialCertificate:       'Reference Material Certificate',
  ReferenceMaterialStudy:             'Reference Material Study',
  TestReport:                         'Test Report',
};

// ── Type-specific body renderers ──────────────────────────────────────────────

const DCC_TYPES = new Set([
  'DigitalCalibrationCertificate', 'ReferenceMaterialCertificate',
  'ReferenceMaterialStudy', 'TestReport',
]);

function DccBody({ subj }: { subj: JsonObject }) {
  const admin = (subj.administrativeData as JsonObject | undefined);
  const results = (subj.measurementResults as JsonObject[] | undefined) ?? [];
  const materials = (subj.materials as unknown[] | undefined) ?? [];
  const matProps = (subj.materialPropertiesList as unknown[] | undefined) ?? [];
  const studyType = subj.studyType as string | undefined;
  // remaining top-level keys not handled above
  const rest = Object.fromEntries(
    Object.entries(subj).filter(([k]) => !['id','administrativeData','measurementResults',
      'materials','materialPropertiesList','studyType'].includes(k))
  );

  return (
    <>
      {admin && (
        <Section title="Administrative data">
          <TreeValue value={admin} />
        </Section>
      )}
      {studyType && (
        <Section title="Study">
          <div className="flex items-baseline gap-2 py-[2px]">
            <span className="text-[10px] text-slate-400 w-28">Type</span>
            <span className="text-[10px] font-medium text-slate-800">{studyType}</span>
          </div>
        </Section>
      )}
      {results.map((mr, i) => (
        <Section key={i} title={`Measurement — ${(mr.measurand as string) ?? `Result ${i + 1}`}`}>
          <TreeValue value={mr} />
        </Section>
      ))}
      {materials.length > 0 && (
        <Section title="Materials">
          <TreeValue value={materials} />
        </Section>
      )}
      {matProps.length > 0 && (
        <Section title="Material properties">
          <TreeValue value={matProps} />
        </Section>
      )}
      {Object.keys(rest).length > 0 && (
        <Section title="Other">
          <TreeValue value={rest} />
        </Section>
      )}
    </>
  );
}


function SubjectBody({ subj, title = 'Credential subject' }: { subj: JsonObject; title?: string }) {
  const filtered = Object.fromEntries(Object.entries(subj).filter(([k]) => k !== 'id'));
  if (Object.keys(filtered).length === 0) return null;
  return (
    <Section title={title}>
      <TreeValue value={filtered} />
    </Section>
  );
}

// ── Raw JSON toggle ───────────────────────────────────────────────────────────

function RawJson({ cred }: { cred: JsonObject }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[9px] font-semibold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors"
      >
        <span style={{ display: 'inline-block', transition: 'transform 0.15s', transform: open ? 'rotate(90deg)' : 'none' }}>▶</span>
        Raw JSON
      </button>
      {open && (
        <pre className="mt-1.5 text-[9px] font-mono text-slate-600 bg-slate-50 rounded border border-slate-200 p-2 overflow-auto max-h-56 leading-relaxed whitespace-pre-wrap break-all">
          {JSON.stringify(cred, null, 2)}
        </pre>
      )}
    </div>
  );
}

// ── Public component ──────────────────────────────────────────────────────────

export interface CredentialCardProps {
  cred: JsonObject;
  isTarget?: boolean;
  status?: 'pass' | 'fail' | null;
  noRaw?: boolean;
}

const RELATION_COLOR: Record<string, string> = {
  authorizedBy: '#2D6CB5',
  derivedFrom:  '#0284C7',
  supportedBy:  '#D9703A',
};

function EvidenceLinks({ links }: { links: JsonObject[] }) {
  if (links.length === 0) return null;
  return (
    <Section title="Evidence links">
      {links.map((link, i) => {
        const rel = link.relation as string | undefined;
        const refId = link.id as string | undefined;
        const basis = link.authorizationBasis as JsonObject | undefined;
        const color = rel ? (RELATION_COLOR[rel] ?? '#64748B') : '#64748B';
        return (
          <div key={i} className={clsx(i > 0 && 'border-t border-slate-100 mt-1 pt-1', 'py-[2px]')}>
            <div className="flex items-center gap-2 mb-0.5">
              {rel && (
                <span style={{ color, borderColor: color }} className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border bg-white">
                  {rel}
                </span>
              )}
              {basis?.kind != null && (
                <span className="text-[9px] text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                  {String(basis.kind)}
                </span>
              )}
            </div>
            {refId && (
              <p className="text-[9px] font-mono text-slate-400 truncate pl-0.5">{refId}</p>
            )}
          </div>
        );
      })}
    </Section>
  );
}

export function CredentialCard({ cred, isTarget, status, noRaw }: CredentialCardProps) {
  const type = credType(cred);
  const pal = TYPE_PALETTE[type] ?? DEFAULT_PALETTE;
  const label = TYPE_LABEL[type] ?? type;
  const issuer = shortDid(issuerDid(cred));
  const validFrom = cred.validFrom as string | undefined;
  const validUntil = cred.validUntil as string | undefined;
  const subj = (cred.credentialSubject as JsonObject) ?? {};
  const proofSuite = (cred.proof as JsonObject | undefined)?.cryptosuite as string | undefined;
  const evidenceLinks = (cred.evidence as JsonObject[] | undefined) ?? [];

  const isDcc = DCC_TYPES.has(type);

  return (
    <div className="flex flex-col min-w-0">
      {/* Compact title bar — left-border accent, no separate box */}
      <div
        style={{ borderLeftColor: pal.border, background: pal.bg }}
        className="border-l-4 pl-3 pr-2 py-2 mb-2.5 rounded-r flex items-start justify-between gap-2"
      >
        <div className="min-w-0">
          {isTarget && (
            <span style={{ color: pal.accent }} className="text-[9px] font-bold uppercase tracking-widest block mb-0.5">
              Target
            </span>
          )}
          <p className="text-[12px] font-bold text-slate-800 leading-tight">{label}</p>
          <p className="text-[9px] font-mono text-slate-400 mt-0.5 flex flex-wrap gap-x-2">
            {issuer && <span>issuer: {issuer}</span>}
            {validFrom && <span>{fmtDate(validFrom)}{validUntil ? ` – ${fmtDate(validUntil)}` : ''}</span>}
            {proofSuite && <span className="text-slate-300">{proofSuite}</span>}
          </p>
        </div>
        {status && (
          <span
            style={{ background: status === 'pass' ? '#16a34a' : '#B23A48' }}
            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0 mt-0.5"
          >
            {status === 'pass' ? '✓' : '✗'}
          </span>
        )}
      </div>

      {isDcc ? <DccBody subj={subj} /> : <SubjectBody subj={subj} title="Credential subject" />}

      {evidenceLinks.length > 0 && <EvidenceLinks links={evidenceLinks} />}

      {!noRaw && <RawJson cred={cred} />}
    </div>
  );
}
