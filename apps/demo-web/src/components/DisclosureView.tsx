import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  SD_BASE,
  DISCLOSABLE_FIELDS,
  discloseAndVerify,
  type DisclosureResult,
} from '../sd/disclose.js';
import type { JsonObject } from '@qi-vc/core';
import { CredentialCard } from './CredentialCard.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

function admin(cred: JsonObject): JsonObject {
  return ((cred.credentialSubject as JsonObject)?.administrativeData as JsonObject) ?? {};
}

function measured(cred: JsonObject) {
  const subject = cred.credentialSubject as JsonObject;
  const mr = (subject?.measurementResults as JsonObject[] | undefined)?.[0] ?? {};
  const res = (mr.results as JsonObject[] | undefined)?.[0] ?? {};
  const q = ((res.data as JsonObject)?.quantity as JsonObject) ?? {};
  return {
    value: q.value,
    unit: ((q.unit as JsonObject)?.ucumCode as string) ?? '',
    u: (q.uncertainty as JsonObject)?.expandedUncertainty,
    measurand: (mr.measurand as string) ?? '',
  };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function MandatoryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1 border-b border-slate-100 last:border-0">
      <span className="text-[10px] text-slate-400">{label}</span>
      <span className="text-[10px] font-medium text-slate-800 text-right">{value}</span>
    </div>
  );
}

function VerdictBanner({ busy, result, err, selectedCount }: {
  busy: boolean;
  result: DisclosureResult | null;
  err: string | null;
  selectedCount: number;
}) {
  if (err) {
    return (
      <div className="shrink-0 px-4 py-2.5 flex items-center gap-3 border-b border-red-200 bg-red-50">
        <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">✗</span>
        <div>
          <p className="text-[11px] font-semibold text-red-800">Derivation error</p>
          <p className="text-[10px] text-red-600 font-mono truncate max-w-xs">{err}</p>
        </div>
      </div>
    );
  }
  if (busy || !result) {
    return (
      <div className="shrink-0 px-4 py-2.5 flex items-center gap-2 border-b border-slate-100 bg-slate-50">
        <span className="text-[10px] text-slate-400">Deriving presentation…</span>
      </div>
    );
  }
  return result.verified ? (
    <div className="shrink-0 px-4 py-2.5 flex items-center justify-between border-b border-green-200 bg-green-50">
      <div className="flex items-center gap-2.5">
        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">✓</span>
        <div>
          <p className="text-[11px] font-semibold text-green-800">Cryptographic proof verified</p>
          <p className="text-[10px] text-green-600">ecdsa-sd-2023 · {selectedCount === 0 ? 'minimum disclosure' : `${selectedCount} optional field${selectedCount !== 1 ? 's' : ''} revealed`}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="shrink-0 px-4 py-2.5 flex items-center gap-2.5 border-b border-red-200 bg-red-50">
      <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">✗</span>
      <div>
        <p className="text-[11px] font-semibold text-red-800">Verification failed</p>
        <p className="text-[10px] text-red-600">{result.error ?? 'Proof did not verify'}</p>
      </div>
    </div>
  );
}

// ── Main view ─────────────────────────────────────────────────────────────────

export function DisclosureView() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<DisclosureResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [showRaw, setShowRaw] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    setBusy(true);
    setErr(null);
    discloseAndVerify([...selected])
      .then((r) => { if (!cancelled) setResult(r); })
      .catch((e: unknown) => { if (!cancelled) setErr(e instanceof Error ? e.message : String(e)); })
      .finally(() => { if (!cancelled) setBusy(false); });
    return () => { cancelled = true; };
  }, [selected]);

  function toggle(key: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }

  function copyJson() {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result.derived, null, 2)).then(() => {
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    });
  }

  const m = measured(SD_BASE);
  const lab = (admin(SD_BASE).calibrationLaboratory as JsonObject | undefined)?.name ?? '';
  const item = ((admin(SD_BASE).items as JsonObject[] | undefined)?.[0]?.name as string) ?? '';

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-50">

      {/* ── Left: Composer ─────────────────────────────────────────────── */}
      <aside className="w-64 shrink-0 flex flex-col border-r border-slate-200 bg-white overflow-y-auto shadow-sm">
        <div className="px-3 py-3 border-b border-slate-200">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Selective Disclosure</p>
          <h2 className="text-[11px] font-semibold text-slate-800 mt-0.5">Share certificate</h2>
          <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">
            Choose what to reveal. Mandatory fields always appear; optional fields are withheld unless you include them.
          </p>
        </div>

        {/* Always shared */}
        <div className="px-3 pt-3">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Always shared</p>
          <div className="bg-slate-50 rounded border border-slate-200 px-3 py-0.5">
            <MandatoryRow label="Measurand" value={m.measurand} />
            <MandatoryRow label="Result" value={`${m.value} ± ${m.u} ${m.unit}`} />
            <MandatoryRow label="Instrument" value={item} />
            <MandatoryRow label="Lab" value={String(lab)} />
          </div>
        </div>

        {/* Optional toggles */}
        <div className="px-3 pt-3 pb-4">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Reveal only if chosen</p>
          <div className="flex flex-col gap-1">
            {DISCLOSABLE_FIELDS.map((f) => {
              const on = selected.has(f.key);
              return (
                <button
                  key={f.key}
                  onClick={() => toggle(f.key)}
                  className={clsx(
                    'w-full text-left rounded border px-2.5 py-2 transition-colors',
                    on ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-50',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-medium text-slate-800">{f.label}</span>
                    <span className={clsx(
                      'text-[9px] font-semibold px-1.5 py-0.5 rounded shrink-0',
                      on ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500',
                    )}>
                      {on ? 'On' : 'Off'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">{f.description}</p>
                  <p className={clsx('text-[10px] font-mono mt-0.5 truncate', on ? 'text-blue-700' : 'text-slate-300')}>
                    {on ? f.readValue(SD_BASE) : '••••••'}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* ── Centre: Derived credential card ────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <div className="shrink-0 px-4 py-2.5 border-b border-slate-200 bg-white flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Derived Presentation</p>
            <p className="text-[10px] text-slate-500 mt-0.5">What the verifier receives · ecdsa-sd-2023</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRaw((v) => !v)}
              className={clsx(
                'text-[9px] font-semibold uppercase tracking-widest px-2 py-1 rounded border transition-colors',
                showRaw ? 'bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600',
              )}
            >
              {showRaw ? 'Card' : 'JSON'}
            </button>
            {result && !err && (
              <button
                onClick={copyJson}
                className={clsx(
                  'text-[9px] font-semibold uppercase tracking-widest px-2 py-1 rounded border transition-colors',
                  copied ? 'bg-green-50 border-green-300 text-green-700' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600',
                )}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            )}
          </div>
        </div>

        {/* Verdict banner */}
        <VerdictBanner busy={busy} result={result} err={err} selectedCount={selected.size} />

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {err ? (
            <div className="rounded border border-red-200 bg-red-50 p-3 text-[10px] text-red-700 font-mono leading-relaxed">
              {err}
            </div>
          ) : showRaw ? (
            <pre className="text-[10px] font-mono text-slate-700 bg-white rounded border border-slate-200 p-4 leading-relaxed">
              {result ? JSON.stringify(result.derived, null, 2) : ''}
            </pre>
          ) : result ? (
            <CredentialCard cred={result.derived} noRaw />
          ) : (
            <div className="flex items-center justify-center h-32">
              <p className="text-[10px] text-slate-400">Deriving…</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Right: Disclosure details panel ────────────────────────────── */}
      <aside className="w-64 shrink-0 flex flex-col border-l border-slate-200 bg-white shadow-sm min-h-0">
        <div className="px-3 py-3 border-b border-slate-200 shrink-0">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Disclosure Details</p>
          <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">
            Fields included in this presentation
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
          {/* Mandatory fields */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Mandatory</p>
            <div className="space-y-1">
              {[
                { label: 'Measurand', value: m.measurand },
                { label: 'Result', value: `${m.value} ± ${m.u} ${m.unit}` },
                { label: 'Instrument', value: item },
                { label: 'Laboratory', value: String(lab) },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-2 py-1 border-b border-slate-100 last:border-0">
                  <span className="w-4 h-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-600 text-[8px] font-bold shrink-0 mt-px">✓</span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium text-slate-700">{f.label}</p>
                    <p className="text-[10px] text-slate-500 truncate">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional fields */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Optional</p>
            <div className="space-y-1">
              {DISCLOSABLE_FIELDS.map((f) => {
                const on = selected.has(f.key);
                return (
                  <div key={f.key} className="flex items-start gap-2 py-1 border-b border-slate-100 last:border-0">
                    <span className={clsx(
                      'w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 mt-px',
                      on ? 'bg-blue-100 border border-blue-300 text-blue-600' : 'bg-slate-100 border border-slate-200 text-slate-400',
                    )}>
                      {on ? '✓' : '–'}
                    </span>
                    <div className="min-w-0">
                      <p className={clsx('text-[10px] font-medium', on ? 'text-slate-700' : 'text-slate-400')}>{f.label}</p>
                      <p className={clsx('text-[10px] truncate', on ? 'text-slate-500' : 'text-slate-300')}>
                        {on ? f.readValue(SD_BASE) : 'withheld'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proof info */}
          {result && !err && (
            <div>
              <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Proof</p>
              <div className="bg-slate-50 rounded border border-slate-200 px-2.5 py-1.5 space-y-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[9px] text-slate-400">Suite</span>
                  <span className="text-[9px] font-mono text-slate-600">ecdsa-sd-2023</span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[9px] text-slate-400">Status</span>
                  <span className={clsx('text-[9px] font-semibold', result.verified ? 'text-green-600' : 'text-red-600')}>
                    {result.verified ? 'verified' : 'failed'}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[9px] text-slate-400">Holder key</span>
                  <span className="text-[9px] font-mono text-slate-500">none required</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

    </div>
  );
}
