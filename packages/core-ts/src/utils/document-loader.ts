// SPDX-License-Identifier: Apache-2.0
// JSON-LD document loader for qi-vc/core.
// Serves bundled copies of required contexts; falls back to fetch for others.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { DocumentLoader } from '../types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..', '..', '..');

// Cached context map: URL → context document
const contextCache = new Map<string, unknown>();

/** Load a local JSON file and cache it */
function loadLocal(filePath: string): unknown {
  if (!existsSync(filePath)) throw new Error(`Context file not found: ${filePath}`);
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

/** Map from context URL to local file path (relative to repo root) */
const LOCAL_CONTEXT_MAP: Record<string, string> = {
  'https://w3id.org/qi-vc/contexts/v1/qi-core.jsonld':
    'contexts/v1/qi-core.jsonld',
  'https://w3id.org/qi-vc/contexts/v1/qi-calibration.jsonld':
    'contexts/v1/qi-calibration.jsonld',
  'https://w3id.org/qi-vc/contexts/v1/qi-rm.jsonld':
    'contexts/v1/qi-rm.jsonld',
};

/**
 * Build a document loader that:
 * 1. Serves local QI-VC contexts without network calls.
 * 2. Serves W3C/security contexts from the in-memory cache if pre-loaded.
 * 3. Falls back to HTTP fetch for any other URL (disabled in strict mode).
 */
export function buildDocumentLoader(opts: {
  /** Pre-seeded context map: URL → context object. Use to inject W3C contexts in tests. */
  contexts?: Record<string, unknown>;
  /** If true, throw instead of fetching unknown URLs. Default: false. */
  strict?: boolean;
}): DocumentLoader {
  const { contexts = {}, strict = false } = opts;

  // Pre-load QI-VC local contexts
  for (const [url, relPath] of Object.entries(LOCAL_CONTEXT_MAP)) {
    if (!contextCache.has(url)) {
      const absPath = join(REPO_ROOT, relPath);
      if (existsSync(absPath)) {
        contextCache.set(url, loadLocal(absPath));
      }
    }
  }

  // Merge caller-provided contexts into the cache
  for (const [url, doc] of Object.entries(contexts)) {
    contextCache.set(url, doc);
  }

  return async (url: string) => {
    // 1. Check caller-provided contexts first
    if (contextCache.has(url)) {
      return {
        contextUrl: null,
        document: contextCache.get(url),
        documentUrl: url,
      };
    }

    // 2. Fall back to fetch (not allowed in strict mode)
    if (strict) {
      throw new Error(`Document loader (strict): refusing to fetch unknown URL: ${url}`);
    }

    const response = await fetch(url, {
      headers: { Accept: 'application/ld+json, application/json' },
    });
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: HTTP ${response.status}`);
    }
    const document = await response.json();
    contextCache.set(url, document);
    return { contextUrl: null, document, documentUrl: url };
  };
}

/** Default document loader (allows network fetches) */
export const defaultDocumentLoader: DocumentLoader = buildDocumentLoader({});
