// SPDX-License-Identifier: Apache-2.0
import { describe, it, expect } from 'vitest';
import { createProof, verifyProof } from '../src/proofs/index.js';
import type { Ed25519KeyPair, JsonObject } from '../src/types.js';
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';

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
