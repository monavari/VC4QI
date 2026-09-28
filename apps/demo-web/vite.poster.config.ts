// SPDX-License-Identifier: Apache-2.0
// Builds the self-contained evaluator used by the demonstrator page:
//   pnpm -C apps/demo-web build:poster   ->  site/demo/verifier.js
// For each experimental binding (RM, calibration, GS), the pinned resources, signed
// fixtures, manifest and verifier profiles are embedded at build time from
// bindings/experimental (exact file text, with the index's SHA-384 digests), so the
// page evaluates the same bytes as the repository tests and fetches nothing.
// node:zlib becomes a bounded gunzip shim for status lists.
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const r = (p: string) => resolve(__dirname, p);
const ROOT = r('../..');
const BINDINGS = { rm: 'rm-v1', cal: 'cal-v1', gs: 'gs-v1' } as const;

function pinnedFiles(index: string) {
  const { resources } = JSON.parse(readFileSync(index, 'utf8')) as {
    resources: { uri: string; path: string; mediaType: string; origin: string; version: string; digestSRI: string }[];
  };
  return resources.map(({ path, ...entry }) => ({ ...entry, text: readFileSync(resolve(ROOT, path), 'utf8') }));
}

function binding(dir: string) {
  const base = resolve(ROOT, 'bindings/experimental', dir);
  const profiles = Object.fromEntries(readdirSync(resolve(base, 'profiles')).sort()
    .map(file => [file.replace(/\.json$/, ''), JSON.parse(readFileSync(resolve(base, 'profiles', file), 'utf8'))]));
  return {
    manifest: JSON.parse(readFileSync(resolve(base, 'manifest.json'), 'utf8')),
    profiles,
    files: [...pinnedFiles(resolve(base, 'catalog.json')), ...pinnedFiles(resolve(base, 'test-vectors/signed/catalog.json'))],
  };
}

const resourcesPlugin: Plugin = {
  name: 'demo-resources',
  resolveId: id => (id === 'virtual:demo-resources' ? '\0demo-resources' : undefined),
  load(id) {
    if (id !== '\0demo-resources') return undefined;
    const data = Object.fromEntries(Object.entries(BINDINGS).map(([key, dir]) => [key, binding(dir)]));
    return `export default ${JSON.stringify(data)};`;
  },
};

export default defineConfig({
  plugins: [resourcesPlugin],
  resolve: {
    alias: {
      'node:crypto': r('src/stubs/crypto.ts'),
      'node:zlib': r('poster/zlib-browser.ts'),
    },
  },
  build: {
    outDir: resolve(ROOT, 'site/demo'),
    emptyOutDir: false,
    target: 'es2020',
    minify: true,
    lib: { entry: r('poster/entry.ts'), formats: ['es'], fileName: () => 'verifier.js' },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
