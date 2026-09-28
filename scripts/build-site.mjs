#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Builds the GitHub Pages site: the static pages in site/ plus the project documentation
// rendered from Markdown into site-style HTML under docs/.
//
//   node scripts/build-site.mjs            # write _site/
//   node scripts/build-site.mjs --check    # build into a temporary directory and only report
//
// Links are rewritten so the same Markdown works on GitHub and on the site: a link to a
// published page becomes a link to its HTML page, any other repository path becomes a
// GitHub link. Every relative link and heading anchor in the repository's Markdown is
// checked (except the append-only report and historical snapshots); a broken one fails
// the build.
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join, normalize, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const OUT = CHECK ? mkdtempSync(join(tmpdir(), 'vc4qi-site-')) : join(ROOT, '_site');
const REPO = 'https://github.com/monavari/VC4QI';
const SITE = 'https://monavari.github.io/VC4QI/';

/** Published pages, in navigation order. Paths are repository-relative. */
const NAV = [
  ['Guide', [
    ['docs/index.md', 'Overview'],
    ['docs/model.md', 'Reliance model'],
    ['docs/status.md', 'Status'],
    ['docs/use-cases.md', 'Use cases'],
    ['docs/api.md', 'API and migration'],
    ['docs/bindings.md', 'Bindings'],
    ['docs/architecture.md', 'Architecture'],
    ['docs/applications.md', 'Applications'],
    ['docs/paper-feedback.md', 'Manuscript feedback'],
  ]],
  ['Project records', [
    ['docs/plans/standards-first-reconciliation.md', 'Execution plan'],
    ['docs/plans/evidence.md', 'Implementation evidence'],
    ['docs/plans/standards-first-traceability.md', 'Requirements traceability'],
    ['docs/adrs/README.md', 'Architecture decisions'],
    ['docs/history/README.md', 'Historical documents'],
  ]],
];
const git = args => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });
const adrs = git(['ls-files', 'docs/adrs/*.md']).split('\n').filter(p => p && !p.endsWith('README.md'));
const PUBLISHED = [...NAV.flatMap(([, pages]) => pages.map(([p]) => p)), ...adrs];
const outputPath = md => (md.endsWith('/README.md') ? md.replace(/README\.md$/, 'index.html') : md.replace(/\.md$/, '.html'));

/** GitHub-compatible heading slug. */
function slugify(text) {
  return text.toLowerCase().trim().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
}
const plain = tokens => tokens.map(t => (t.tokens ? plain(t.tokens) : (t.type === 'codespan' ? t.text : (t.text ?? '')))).join('');

/** Heading slugs of a Markdown file, with GitHub's -1, -2 suffixes for duplicates. */
const anchorCache = new Map();
function anchorsOf(path) {
  if (!anchorCache.has(path)) {
    const seen = new Map();
    const slugs = new Set();
    for (const token of new Marked().lexer(readFileSync(join(ROOT, path), 'utf8'))) {
      if (token.type !== 'heading') continue;
      const base = slugify(plain(token.tokens));
      const n = seen.get(base) ?? 0;
      seen.set(base, n + 1);
      slugs.add(n === 0 ? base : `${base}-${n}`);
    }
    anchorCache.set(path, slugs);
  }
  return anchorCache.get(path);
}

const problems = [];
/** Resolve a link found in `source` (repository-relative); returns the site URL to use. */
function resolveLink(source, href, fromOutput) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) return href;
  const [pathPart, anchor] = href.split('#');
  const target = pathPart === '' ? source : normalize(join(dirname(source), decodeURI(pathPart))).split('\\').join('/');
  if (target.startsWith('..') || !existsSync(join(ROOT, target))) {
    problems.push(`${source}: broken link ${href}`);
    return href;
  }
  if (anchor && target.endsWith('.md') && !anchorsOf(target).has(anchor)) {
    problems.push(`${source}: missing anchor #${anchor} in ${target}`);
  }
  if (fromOutput === undefined) return href;
  if (PUBLISHED.includes(target)) {
    const rel = posix.relative(posix.dirname(fromOutput), outputPath(target)) || posix.basename(outputPath(target));
    return pathPart === '' ? `#${anchor}` : rel + (anchor ? `#${anchor}` : '');
  }
  const kind = statSync(join(ROOT, target)).isDirectory() ? 'tree' : 'blob';
  return `${REPO}/${kind}/main/${target}${anchor ? `#${anchor}` : ''}`;
}

const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(source) {
  const out = outputPath(source);
  const seen = new Map();
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const base = slugify(plain(tokens));
        const n = seen.get(base) ?? 0;
        seen.set(base, n + 1);
        const id = n === 0 ? base : `${base}-${n}`;
        return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}<a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const url = resolveLink(source, href, out);
        const external = /^https?:/.test(url) && !url.startsWith(SITE);
        return `<a href="${escapeHtml(url)}"${title ? ` title="${escapeHtml(title)}"` : ''}${external ? ' rel="noopener"' : ''}>${this.parser.parseInline(tokens)}</a>`;
      },
    },
  });
  const markdown = readFileSync(join(ROOT, source), 'utf8');
  const title = (markdown.match(/^# (.+)$/m)?.[1] ?? 'VC4QI').replace(/`/g, '');
  // Tables scroll horizontally on narrow screens.
  const body = marked.parse(markdown).replace(/<table>/g, '<div class="table"><table>').replace(/<\/table>/g, '</table></div>');
  const depth = out.split('/').length - 1;
  const up = '../'.repeat(depth);
  const nav = NAV.map(([group, pages]) => `<p class="group">${group}</p><ul>${pages.map(([p, label]) => {
    const href = posix.relative(posix.dirname(out), outputPath(p)) || posix.basename(outputPath(p));
    return `<li><a href="${href}"${p === source ? ' aria-current="page"' : ''}>${label}</a></li>`;
  }).join('')}</ul>`).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="icon" href="data:,">
<title>${escapeHtml(title)} · VC4QI</title>
<link rel="stylesheet" href="${up}assets/docs.css">
</head>
<body>
<header class="top"><a class="brand" href="${up}index.html"><strong>BAM</strong> VC4QI</a><nav class="toplinks"><a href="${up}docs/index.html">Documentation</a><a href="${up}m375a/">Demonstrator</a><a href="${REPO}">GitHub</a></nav></header>
<div class="layout">
<details class="side" open><summary>Contents</summary><nav aria-label="Documentation">${nav}</nav></details>
<script>if (matchMedia('(max-width: 52rem)').matches) document.querySelector('details.side').removeAttribute('open');</script>
<main>
${body}
<footer><a href="${REPO}/blob/main/${source}">View this page on GitHub</a> · Documentation under CC BY 4.0 · All authorities, keys and grants in the examples are fictional.</footer>
</main>
</div>
</body>
</html>
`;
}

// Copy the static site, then render the published pages.
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, 'site'), OUT, { recursive: true });
for (const source of PUBLISHED) {
  const target = join(OUT, outputPath(source));
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, render(source));
}

// Check every other Markdown file's relative links, so READMEs stay correct on GitHub.
const LINK = /(?<!!)\[(?:[^\]]|\][^(])*?\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
for (const file of git(['ls-files', '-co', '--exclude-standard', '*.md']).split('\n')) {
  if (!file || PUBLISHED.includes(file) || file === 'RECONCILIATION_REPORT.md' || file.startsWith('docs/history/')
      || file.includes('node_modules/') || !existsSync(join(ROOT, file))) continue;
  const text = readFileSync(join(ROOT, file), 'utf8').replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const match of text.matchAll(LINK)) resolveLink(file, match[1]);
}

if (CHECK) rmSync(OUT, { recursive: true, force: true });
if (problems.length > 0) {
  console.error(`Documentation link problems:\n  ${[...new Set(problems)].join('\n  ')}`);
  process.exit(1);
}
console.log(CHECK
  ? `Documentation links are valid (${PUBLISHED.length} published pages).`
  : `Wrote ${PUBLISHED.length} documentation pages and the static site to ${relative(ROOT, OUT)}/.`);
