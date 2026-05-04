// SPDX-License-Identifier: Apache-2.0
// URDNA2015 (RDF Dataset Normalization 1.0) canonicalization via jsonld.js.
// Reference: https://www.w3.org/TR/rdf-canon/
import jsonld from 'jsonld';
import { createHash } from 'node:crypto';
import { toMultibase } from '../utils/base58btc.js';
import type { DocumentLoader, JsonObject } from '../types.js';

/**
 * Produce the URDNA2015 canonical N-Quads string for a JSON-LD document.
 *
 * @param document  JSON-LD document to canonicalize
 * @param documentLoader  Optional loader; defaults to jsonld's built-in node loader
 */
export async function canonicalize(
  document: JsonObject,
  documentLoader?: DocumentLoader,
): Promise<string> {
  const options: Record<string, unknown> = {
    algorithm: 'URDNA2015',
    format: 'application/n-quads',
    safe: false, // Allow non-IRI properties to be silently dropped (jsonld v8 default is strict)
  };
  if (documentLoader) options.documentLoader = documentLoader;

  return (await jsonld.normalize(document, options)) as string;
}

/**
 * Compute SHA-256 of the URDNA2015 canonical form and return as a
 * multibase base58btc string (prefix 'z').
 *
 * Used for hashBinding between credential layers per ADR-005.
 * The proof block MUST be removed from the document before calling this.
 */
export async function computeHashBinding(
  document: JsonObject,
  documentLoader?: DocumentLoader,
): Promise<string> {
  const canonical = await canonicalize(document, documentLoader);
  const hash = createHash('sha256').update(canonical, 'utf8').digest();
  return toMultibase(hash);
}

/**
 * Verify a hashBinding against a document.
 * Returns true if the binding matches, false otherwise.
 */
export async function verifyHashBinding(
  document: JsonObject,
  digestMultibase: string,
  documentLoader?: DocumentLoader,
): Promise<boolean> {
  const expected = await computeHashBinding(document, documentLoader);
  return expected === digestMultibase;
}
