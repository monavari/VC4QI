// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from 'vitest';
import { canonicalize, computeHashBinding, verifyHashBinding } from '../src/canonicalize/index.js';

const simpleDoc = {
  '@context': { '@vocab': 'https://schema.org/' },
  type: 'Person',
  name: 'Alice',
};

describe('canonicalize', () => {
  it('returns a non-empty string for a simple document', async () => {
    const result = await canonicalize(simpleDoc);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('produces N-Quads output', async () => {
    const doc = {
      '@context': { '@vocab': 'https://schema.org/' },
      '@id': 'https://example.org/alice',
      'https://schema.org/name': [{ '@value': 'Alice' }],
    };
    const result = await canonicalize(doc);
    expect(result).toContain('<https://example.org/alice>');
    expect(result).toContain('"Alice"');
  });

  it('is deterministic — same doc produces same output', async () => {
    const r1 = await canonicalize(simpleDoc);
    const r2 = await canonicalize(simpleDoc);
    expect(r1).toBe(r2);
  });

  it('returns empty string for a doc with no RDF triples', async () => {
    const emptyDoc = { '@context': 'https://www.w3.org/ns/credentials/v2' };
    const result = await canonicalize(emptyDoc);
    expect(result.trim()).toBe('');
  });
});

describe('computeHashBinding', () => {
  it('returns a multibase base58btc string (prefix z)', async () => {
    const hash = await computeHashBinding(simpleDoc);
    expect(hash.startsWith('z')).toBe(true);
  });

  it('returns the same hash for the same document', async () => {
    const h1 = await computeHashBinding(simpleDoc);
    const h2 = await computeHashBinding(simpleDoc);
    expect(h1).toBe(h2);
  });

  it('returns different hashes for different documents', async () => {
    const h1 = await computeHashBinding(simpleDoc);
    const h2 = await computeHashBinding({ ...simpleDoc, name: 'Bob' });
    expect(h1).not.toBe(h2);
  });
});

describe('verifyHashBinding', () => {
  it('returns true for the correct hash', async () => {
    const hash = await computeHashBinding(simpleDoc);
    const ok = await verifyHashBinding(simpleDoc, hash);
    expect(ok).toBe(true);
  });

  it('returns false for a wrong hash', async () => {
    const ok = await verifyHashBinding(simpleDoc, 'zWrongHash12345');
    expect(ok).toBe(false);
  });

  it('returns false for a tampered document', async () => {
    const hash = await computeHashBinding(simpleDoc);
    const ok = await verifyHashBinding({ ...simpleDoc, name: 'Eve' }, hash);
    expect(ok).toBe(false);
  });
});
