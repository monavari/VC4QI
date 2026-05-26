// SPDX-License-Identifier: Apache-2.0
import type { TraceEntry, TraceLevel, TraceStatus, VerificationSummary, VerificationTrace } from '../types.js';

export function traceEntry(entry: {
  id: string;
  level: TraceLevel;
  status: TraceStatus;
  code: string;
  detail: string;
  target?: string;
  from?: string;
  to?: string;
  relation?: string;
}): TraceEntry {
  return entry;
}

export function summarizeTrace(
  results: TraceEntry[],
  nodesResolved: number,
  edgesEvaluated: number,
): VerificationSummary {
  return {
    nodesResolved,
    edgesEvaluated,
    failures: results.filter(result => result.status === 'FAIL').length,
    warnings: results.filter(result => result.status === 'WARN').length,
  };
}

export function makeVerificationTrace(input: {
  profile: string;
  target: string;
  nodesResolved: number;
  edgesEvaluated: number;
  results: TraceEntry[];
}): VerificationTrace {
  const summary = summarizeTrace(input.results, input.nodesResolved, input.edgesEvaluated);
  return {
    verified: summary.failures === 0,
    profile: input.profile,
    target: input.target,
    summary,
    results: input.results,
  };
}
