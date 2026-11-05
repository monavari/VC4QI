// SPDX-License-Identifier: Apache-2.0
// Browser replacement for node:zlib in the demonstrator bundle. Only gunzipSync is
// needed (Bitstring Status List decoding); it keeps Node's bounded-output behaviour:
// an output larger than maxOutputLength fails with ERR_BUFFER_TOO_LARGE. The gzip
// trailer's declared size is checked before inflating, and the actual size after.
import { gunzipSync as inflate } from 'fflate';

function tooLarge(limit: number): Error {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${limit}.`), { code: 'ERR_BUFFER_TOO_LARGE' });
}

export function gunzipSync(data: Uint8Array, options: { maxOutputLength?: number } = {}): Uint8Array {
  const limit = options.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (data.length >= 18) {
    const at = data.length - 4;
    const declared = (data[at]! | (data[at + 1]! << 8) | (data[at + 2]! << 16) | (data[at + 3]! << 24)) >>> 0;
    if (declared > limit) throw tooLarge(limit);
  }
  const out = inflate(data);
  if (out.length > limit) throw tooLarge(limit);
  return out;
}

export function gzipSync(): never {
  throw new Error('gzipSync is not available in the browser demonstrator.');
}
