// Browser stub — document loader (node:fs/path/url) not needed with skipProof: true
import type { DocumentLoader } from '@qi-vc/core';

export function buildDocumentLoader(_opts: unknown): DocumentLoader {
  return async (url: string) => {
    const res = await fetch(url);
    const document = await res.json();
    return { contextUrl: null, document, documentUrl: url };
  };
}
export const defaultDocumentLoader: DocumentLoader = buildDocumentLoader({});
