// SPDX-License-Identifier: Apache-2.0
// Builds the self-contained verifier used by the poster page:
//   pnpm -C apps/demo-web build:poster   ->  site/m375a/verifier.js
// The pinned RM v1 resources and signed fixtures are embedded at build time from
// bindings/experimental/rm-v1 (exact file text, with the index's SHA-384 digests),
// so the page verifies the same bytes as the repository tests and fetches nothing.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const r = (p: string) => resolve(__dirname, p);
const ROOT = r('../..');
const RM = resolve(ROOT, 'bindings/experimental/rm-v1');

function pinnedFiles(index: string) {
  const { resources } = JSON.parse(readFileSync(index, 'utf8')) as {
    resources: { uri: string; path: string; mediaType: string; origin: string; version: string; digestSRI: string }[];
  };
  return resources.map(({ path, ...entry }) => ({ ...entry, text: readFileSync(resolve(ROOT, path), 'utf8') }));
}

const resourcesPlugin: Plugin = {
  name: 'rm-v1-resources',
  resolveId: id => (id === 'virtual:rm-v1-resources' ? '\0rm-v1-resources' : undefined),
  load(id) {
    if (id !== '\0rm-v1-resources') return undefined;
    const data = {
      manifest: JSON.parse(readFileSync(resolve(RM, 'manifest.json'), 'utf8')),
      files: [
        ...pinnedFiles(resolve(RM, 'catalog.json')),
        ...pinnedFiles(resolve(RM, 'test-vectors/signed/catalog.json')),
      ],
    };
    return `export default ${JSON.stringify(data)};`;
  },
};

export default defineConfig({
  plugins: [resourcesPlugin],
  resolve: {
    alias: {
      'node:crypto': r('src/stubs/crypto.ts'),
      'node:zlib': r('src/stubs/zlib.ts'),
    },
  },
  build: {
    outDir: resolve(ROOT, 'site/m375a'),
    emptyOutDir: false,
    target: 'es2020',
    minify: true,
    lib: { entry: r('poster/entry.ts'), formats: ['es'], fileName: () => 'verifier.js' },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
