// Browser stub for node:crypto — implements createHash using @noble/hashes.
import { sha256 } from '@noble/hashes/sha256';
import { sha384, sha512 } from '@noble/hashes/sha512';

type Encoding = 'base64' | 'hex' | 'buffer' | undefined;

class BrowserHash {
  private _chunks: Uint8Array[] = [];
  private _algo: 'sha256' | 'sha384' | 'sha512';

  constructor(algo: string) {
    this._algo = algo === 'sha384' ? 'sha384' : algo === 'sha512' ? 'sha512' : 'sha256';
  }

  update(data: string | Uint8Array, _encoding?: string): this {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    this._chunks.push(bytes);
    return this;
  }

  digest(encoding?: Encoding): string | Uint8Array {
    const total = this._chunks.reduce((s, c) => s + c.length, 0);
    const merged = new Uint8Array(total);
    let offset = 0;
    for (const c of this._chunks) { merged.set(c, offset); offset += c.length; }

    let result: Uint8Array;
    if (this._algo === 'sha384') result = sha384(merged);
    else if (this._algo === 'sha512') result = sha512(merged);
    else result = sha256(merged);

    if (encoding === 'base64') return btoa(String.fromCharCode(...result));
    if (encoding === 'hex') return Array.from(result).map(b => b.toString(16).padStart(2, '0')).join('');
    return result;
  }
}

export function createHash(algo: string) { return new BrowserHash(algo); }
export const webcrypto = {};
export const randomBytes = (n: number) => crypto.getRandomValues(new Uint8Array(n));
