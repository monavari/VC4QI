// SPDX-License-Identifier: Apache-2.0
import type { JsonObject } from '../types.js';

export async function resolveEvidence(
  id: string,
  fetchDocument?: (uri: string) => Promise<JsonObject>,
): Promise<JsonObject> {
  if (fetchDocument) return fetchDocument(id);
  const response = await fetch(id, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${id}`);
  return response.json() as Promise<JsonObject>;
}
