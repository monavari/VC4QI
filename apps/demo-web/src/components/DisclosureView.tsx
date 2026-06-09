import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  SD_BASE,
  DISCLOSABLE_FIELDS,
  discloseAndVerify,
  type DisclosureResult,
} from '../sd/disclose.js';
import type { JsonObject } from '@qi-vc/core';

function admin(cred: JsonObject): JsonObject {
  return ((cred.credentialSubject as JsonObject)?.administrativeData as JsonObject) ?? {};
}

function measured(cred: JsonObject): { value: unknown; unit: string; u: unknown; measurand: string } {
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

function MandatoryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1.5 border-b border-slate-100 last:border-0">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-xs font-medium text-slate-800 text-right">{value}</span>
    </div>
  );
}

export function DisclosureView() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<DisclosureResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Re-derive whenever the selection changes — live, in-browser.
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

  const m = measured(SD_BASE);
  const lab = (admin(SD_BASE).calibrationLaboratory as JsonObject | undefined)?.name ?? '';
  const item = ((admin(SD_BASE).items as JsonObject[] | undefined)?.[0]?.name as string) ?? '';

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-50">
      {/* Composer — what the holder includes in the presentation */}
      <div className="w-[26rem] shrink-0 flex flex-col border-r border-slate-200 bg-white overflow-y-auto">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-800">Share calibration certificate</h2>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            Choose what to reveal to the verifier. Always-shared fields prove the result;
            sensitive fields are withheld unless you include them.
          </p>
        </div>

        {/* Always disclosed */}
        <div className="px-5 pt-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
            Always shared
          </p>
          <div className="rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-1">
            <MandatoryRow label="Measurand" value={m.measurand} />
            <MandatoryRow label="Result" value={`${m.value} ± ${m.u} ${m.unit}`} />
            <MandatoryRow label="Instrument" value={item} />
            <MandatoryRow label="Calibration lab" value={String(lab)} />
          </div>
        </div>

        {/* Selectively disclosable toggles */}
        <div className="px-5 pt-4 pb-5">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
            Reveal only if you choose
          </p>
          <div className="flex flex-col gap-2">
            {DISCLOSABLE_FIELDS.map((f) => {
              const on = selected.has(f.key);
              return (
                <button
                  key={f.key}
                  onClick={() => toggle(f.key)}
                  className={clsx(
                    'w-full text-left rounded-lg border px-3 py-2.5 transition-colors',
                    on ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-50',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-slate-800">{f.label}</span>
                    <span className={clsx(
                      'text-[10px] font-semibold px-1.5 py-0.5 rounded',
                      on ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500',
                    )}>
                      {on ? 'Shared' : 'Hidden'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{f.description}</p>
                  <p className={clsx('text-[11px] font-mono mt-1 truncate', on ? 'text-blue-700' : 'text-slate-400')}>
                    {on ? f.readValue(SD_BASE) : '•••••• withheld'}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Presentation preview — the derived subset + verification */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 bg-white flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">Presentation the verifier receives</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Derived live in your browser · ecdsa-sd-2023 · no issuer contact
            </p>
          </div>
          <VerifyBadge busy={busy} result={result} err={err} />
        </div>

        <div className="flex-1 overflow-auto p-5">
          {err ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-700">
              <p className="font-semibold mb-1">Derivation error</p>
              <p className="font-mono leading-relaxed">{err}</p>
            </div>
          ) : (
            <pre className="text-[11px] font-mono text-slate-700 bg-white rounded-lg p-4 border border-slate-200 leading-relaxed">
              {result ? JSON.stringify(result.derived, null, 2) : 'Deriving…'}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

function VerifyBadge({ busy, result, err }: { busy: boolean; result: DisclosureResult | null; err: string | null }) {
  if (err) {
    return <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-full px-3 py-1">Error</span>;
  }
  if (busy || !result) {
    return <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-3 py-1">Deriving…</span>;
  }
  return result.verified ? (
    <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-300 rounded-full px-3 py-1">
      ✓ Cryptographically verified
    </span>
  ) : (
    <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-300 rounded-full px-3 py-1">
      ✗ Verification failed
    </span>
  );
}
