// Browser stub — zlib (status list decompression) not used in the demo (skipStatus: true)
export function deflateSync(_buf: unknown): Uint8Array { return new Uint8Array(); }
export function inflateSync(_buf: unknown): Uint8Array { return new Uint8Array(); }
// The reliance status-list decoder (reachable from the package root since I5 step 4)
// uses the demonstrator's bounded gunzip shim.
export { gunzipSync, gzipSync } from '../../poster/zlib-browser.ts';
