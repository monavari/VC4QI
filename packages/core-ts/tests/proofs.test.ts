// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from 'vitest';
import { createProof, verifyProof } from '../src/proofs/index.js';
import type { Ed25519KeyPair, JsonObject } from '../src/types.js';
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';
import { fromMultibase } from '../src/utils/base58btc.js';
import { buildDocumentLoader } from '../src/utils/document-loader.js';

// noble/ed25519 v2 requires sha512 to be wired up
ed.etc.sha512Sync = (...m: Parameters<typeof sha512>) => sha512(...m);

async function makeKeyPair(): Promise<Ed25519KeyPair> {
  const privateKey = new Uint8Array(32).fill(0x42);
  const publicKey = await ed.getPublicKeyAsync(privateKey);
  return {
    id: 'did:web:test.example.com#key-1',
    controller: 'did:web:test.example.com',
    privateKey,
    publicKey,
  };
}

const credential: JsonObject = {
  '@context': ['https://www.w3.org/ns/credentials/v2'],
  type: ['VerifiableCredential'],
  id: 'urn:uuid:test-cred-001',
  issuer: 'did:web:test.example.com',
  validFrom: '2025-01-01T00:00:00Z',
  credentialSubject: { id: 'did:web:subject.example.com', foo: 'bar' },
};

describe('createProof', () => {
  it('returns a DataIntegrityProof object', async () => {
    const kp = await makeKeyPair();
    const proof = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });

    expect(proof.type).toBe('DataIntegrityProof');
    expect(proof.cryptosuite).toBe('eddsa-rdfc-2022');
    expect(proof.proofPurpose).toBe('assertionMethod');
    expect(proof.verificationMethod).toBe(kp.id);
    expect(proof.proofValue).toMatch(/^z/);
  });

  it('uses provided created timestamp', async () => {
    const kp = await makeKeyPair();
    const proof = await createProof(credential, kp, { created: '2025-06-15T12:00:00Z' });
    expect(proof.created).toBe('2025-06-15T12:00:00Z');
  });

  it('defaults created to current time', async () => {
    const kp = await makeKeyPair();
    const before = new Date();
    const proof = await createProof(credential, kp);
    const after = new Date();
    const created = new Date(proof.created!);
    expect(created >= before).toBe(true);
    expect(created <= after).toBe(true);
  });

  it('produces deterministic proof value for fixed input', async () => {
    const kp = await makeKeyPair();
    const p1 = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });
    const p2 = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });
    expect(p1.proofValue).toBe(p2.proofValue);
  });

  it('supports an explicit safe JSON-LD path and rejects undefined facts', async () => {
    const kp = await makeKeyPair();
    const documentLoader = buildDocumentLoader({ strict: true });
    const safeCredential: JsonObject = {
      '@context': ['https://www.w3.org/ns/credentials/v2'],
      type: ['VerifiableCredential'],
      id: 'urn:uuid:safe-proof-control',
      issuer: kp.controller,
      credentialSubject: { id: 'https://vc4qi.example/subject' },
    };
    const proof = await createProof(safeCredential, kp, {
      created: '2025-01-01T00:00:00Z', documentLoader, safe: true,
    });
    await expect(verifyProof(
      { ...safeCredential, proof },
      kp.publicKey,
      { documentLoader, safe: true },
    )).resolves.toBe(true);
    await expect(createProof(
      {
        ...safeCredential,
        credentialSubject: {
          id: 'https://vc4qi.example/subject', undefinedDecisionFact: true,
        },
      },
      kp,
      { created: '2025-01-01T00:00:00Z', documentLoader, safe: true },
    )).rejects.toThrow();
  });
});

describe('verifyProof', () => {
  it('verifies a valid proof', async () => {
    const kp = await makeKeyPair();
    const proof = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });
    const signed = { ...credential, proof };
    const valid = await verifyProof(signed, kp.publicKey);
    expect(valid).toBe(true);
  });

  it('rejects a tampered credential', async () => {
    const kp = await makeKeyPair();
    const proof = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });
    // Tamper with a VC term that IS mapped in the context (issuer expands to an IRI)
    const signed = { ...credential, issuer: 'did:web:evil.example.com', proof };
    const valid = await verifyProof(signed, kp.publicKey);
    expect(valid).toBe(false);
  });

  it('rejects a tampered proofValue', async () => {
    const kp = await makeKeyPair();
    const proof = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });
    // Use only valid base58btc characters (no 0, O, I, l)
    const badProof = { ...proof, proofValue: 'zABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789ABCDEFGHJKMNPQRST' };
    const signed = { ...credential, proof: badProof };
    const valid = await verifyProof(signed, kp.publicKey);
    expect(valid).toBe(false);
  });

  it('throws if no proof on credential', async () => {
    const kp = await makeKeyPair();
    await expect(verifyProof(credential, kp.publicKey)).rejects.toThrow('No proof found');
  });

  it('throws if cryptosuite is unsupported', async () => {
    const kp = await makeKeyPair();
    const signed = {
      ...credential,
      proof: { type: 'DataIntegrityProof', cryptosuite: 'unsupported', proofValue: 'z123' },
    };
    await expect(verifyProof(signed as JsonObject, kp.publicKey)).rejects.toThrow('Unsupported cryptosuite');
  });

  it('rejects proof verified with wrong public key', async () => {
    const kp = await makeKeyPair();
    const proof = await createProof(credential, kp, { created: '2025-01-01T00:00:00Z' });
    const signed = { ...credential, proof };

    const wrongKey = await ed.getPublicKeyAsync(new Uint8Array(32).fill(0x99));
    const valid = await verifyProof(signed, wrongKey);
    expect(valid).toBe(false);
  });
});

describe('independent published EdDSA vector', () => {
  it('verifies the W3C eddsa-rdfc-2022 combined-hash signature', async () => {
    // W3C Data Integrity EdDSA Cryptosuites v1.0, Appendix B.1,
    // Examples 7 and 14–16: https://www.w3.org/TR/vc-di-eddsa/#representation-eddsa-rdfc-2022
    const encodedKey = fromMultibase(
      'z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2',
    );
    expect([...encodedKey.slice(0, 2)]).toEqual([0xed, 0x01]);
    const combinedHash = Buffer.from(
      'bea7b7acfbad0126b135104024a5f1733e705108f42d59668b05c0c50004c6b0'
      + '517744132ae165a5349155bef0bb0cf2258fff99dfe1dbd914b938d775a36017',
      'hex',
    );
    const signature = fromMultibase(
      'z2YwC8z3ap7yx1nZYCg4L3j3ApHsF8kgPdSb5xoS1VR7vPG3F561B52hYnQF9iseabecm3ijx4K1FBTQsCZahKZme',
    );
    expect(await ed.verifyAsync(signature, combinedHash, encodedKey.slice(2))).toBe(true);
  });
});
