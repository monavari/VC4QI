import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

const r = (p: string) => resolve(__dirname, p);

// Inline stubs for Node-only core-ts modules not needed in the browser demo.
const STUBS: Record<string, string> = {
  [r('../../packages/core-ts/src/schemas/index.ts')]:
    `export const SCHEMA_IDS={DCC:'',RMC:''};export function validate(){return{valid:true,errors:[]};}`,
  [r('../../packages/core-ts/src/status/index.ts')]:
    `export function checkStatusBit(){return false;}`,
  [r('../../packages/core-ts/src/utils/document-loader.ts')]:
    `export function buildDocumentLoader(){return async(url)=>{const res=await fetch(url,{headers:{Accept:'application/ld+json,application/json'}});return{contextUrl:null,document:await res.json(),documentUrl:url};};}
     export const defaultDocumentLoader=buildDocumentLoader();`,
};

// Node built-in aliases → browser stubs
const NODE_ALIASES: Record<string, string> = {
  'node:crypto': r('src/stubs/crypto.ts'),
  'node:zlib':   r('src/stubs/zlib.ts'),
  // node:fs / node:path / node:url are only used by stubbed modules above
};

const nodeStubPlugin: Plugin = {
  name: 'qi-node-stubs',
  load(id) { return STUBS[id] ?? undefined; },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), nodeStubPlugin],
  resolve: {
    alias: {
      '@qi-vc/core': r('../../packages/core-ts/src/index.ts'),
      ...NODE_ALIASES,
    },
  },
  optimizeDeps: {
    exclude: ['@qi-vc/core'],
  },
});
