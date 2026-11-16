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
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join, normalize, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import { citationFrom, squash } from './citation.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const OUT = CHECK ? mkdtempSync(join(tmpdir(), 'vc4qi-site-')) : join(ROOT, '_site');
const REPO = 'https://github.com/monavari/VC4QI';
const SITE = 'https://monavari.github.io/VC4QI/';
const OG_IMAGE = `${SITE}assets/og-card.png`;

/** Published pages, in navigation order. Paths are repository-relative. */
const NAV = [
  ['Guide', [
    ['docs/index.md', 'Overview'],
    ['docs/model.md', 'Reliance model'],
    ['docs/status.md', 'Status'],
    ['docs/use-cases.md', 'Use cases'],
    ['docs/api.md', 'API'],
    ['docs/bindings.md', 'Bindings'],
    ['docs/architecture.md', 'Architecture'],
  ]],
  ['Project records', [
    ['docs/adrs/README.md', 'Architecture decisions'],
    ['docs/cite.md', 'Cite'],
  ]],
];
// Pages written by the build instead of read from a Markdown file: the Cite page comes from CITATION.cff.
let citation;
try { citation = citationFrom(readFileSync(join(ROOT, 'CITATION.cff'), 'utf8')); } catch (error) { console.error(error.message); process.exit(1); }
const GENERATED = new Map([['docs/cite.md', { markdown: citation.markdown, origin: 'CITATION.cff' }]]);
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
const unescapeHtml = s => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/**
 * A page description: the first paragraph after the title (skipping an ADR's "Status" section,
 * which is one word), plain text, cut on a word boundary.
 */
function describe(markdown, source) {
  const tokens = new Marked().lexer(markdown);
  let section = '';
  const first = tokens.slice(tokens.findIndex(t => t.type === 'heading' && t.depth === 1) + 1).find(t => {
    if (t.type === 'heading') section = plain(t.tokens).toLowerCase();
    return t.type === 'paragraph' && section !== 'status';
  });
  if (!first) {
    problems.push(`${source}: no paragraph after the title to use as the page description`);
    return '';
  }
  const text = unescapeHtml(plain(first.tokens)).replace(/\s+/g, ' ').trim();
  if (text.length <= 160) return text.replace(/:$/, '.');
  return text.slice(0, 160).replace(/\s+\S*$/, '').replace(/[\s,;:.\u2013\u2014-]+$/, '') + '\u2026';
}

/** Open Graph and Twitter card tags; `path` is the page's address below the site root. */
const socialTags = ({ title, description, path }) => [
  ['og:type', 'website'], ['og:site_name', 'VC4QI'], ['og:title', title], ['og:description', description],
  ['og:url', SITE + path], ['og:image', OG_IMAGE], ['og:image:width', '1200'], ['og:image:height', '630'],
  ['og:image:alt', 'VC4QI: Verifiable Credentials for Quality Infrastructure'],
].map(([k, v]) => `<meta property="${k}" content="${escapeHtml(v)}">`).join('\n') + '\n<meta name="twitter:card" content="summary_large_image">';

/** Pages in reading order, for the previous and next links. */
const READING = NAV.flatMap(([, pages]) => pages);

function render(source) {
  const out = outputPath(source);
  const seen = new Map();
  const headings = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const base = slugify(plain(tokens));
        const n = seen.get(base) ?? 0;
        seen.set(base, n + 1);
        const id = n === 0 ? base : `${base}-${n}`;
        headings.push({ depth, id, text: plain(tokens) });
        return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}<a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const url = resolveLink(source, href, out);
        const external = /^https?:/.test(url) && !url.startsWith(SITE);
        return `<a href="${escapeHtml(url)}"${title ? ` title="${escapeHtml(title)}"` : ''}${external ? ' rel="noopener"' : ''}>${this.parser.parseInline(tokens)}</a>`;
      },
    },
  });
  const markdown = GENERATED.get(source)?.markdown ?? readFileSync(join(ROOT, source), 'utf8');
  const title = (markdown.match(/^# (.+)$/m)?.[1] ?? 'VC4QI').replace(/`/g, '');
  const description = describe(markdown, source);
  // Tables scroll horizontally on narrow screens.
  let body = marked.parse(markdown).replace(/<table>/g, '<div class="table"><table>').replace(/<\/table>/g, '</table></div>');
  // A contents box on long pages (four or more sections and about 600 words), after the title.
  const sections = headings.filter(h => h.depth === 2 || h.depth === 3);
  if (headings.filter(h => h.depth === 2).length >= 4 && markdown.split(/\s+/).length >= 600) {
    const items = sections.map(h => `<li class="d${h.depth}"><a href="#${h.id}">${escapeHtml(h.text)}</a></li>`).join('');
    body = body.replace('</h1>\n', `</h1>\n<nav class="toc" aria-label="On this page"><p>On this page</p><ul>${items}</ul></nav>\n`);
  }
  // Previous and next page in navigation order; a decision record links back to the list.
  const here = READING.findIndex(([p]) => p === source);
  const pagerLink = (rel, label, target) => `<a rel="${rel}" href="${posix.relative(posix.dirname(out), outputPath(target))}"><span>${label}</span>${escapeHtml(READING.find(([p]) => p === target)[1])}</a>`;
  const pager = here >= 0
    ? [here > 0 ? pagerLink('prev', '\u2190 Previous', READING[here - 1][0]) : '<span></span>', here < READING.length - 1 ? pagerLink('next', 'Next \u2192', READING[here + 1][0]) : '<span></span>']
    : (source.startsWith('docs/adrs/') ? [pagerLink('up', '\u2190 Back to', 'docs/adrs/README.md'), '<span></span>'] : []);
  if (pager.length > 0) body += `<nav class="pager" aria-label="Pages">${pager.join('')}</nav>\n`;
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
<link rel="icon" href="${up}assets/favicon.svg" type="image/svg+xml">
<title>${escapeHtml(title)} · VC4QI</title>
<meta name="description" content="${escapeHtml(description)}">
${socialTags({ title: `${title} · VC4QI`, description, path: out })}
<link rel="stylesheet" href="${up}assets/docs.css">
</head>
<body>
<header class="top"><a class="brand" href="${up}index.html"><strong>VC4QI</strong></a><nav class="toplinks"><a href="${up}docs/index.html">Documentation</a><a href="${up}demo/">Demonstrator</a><a href="${up}docs/cite.html">Cite</a><a href="${REPO}">GitHub</a></nav></header>
<div class="layout">
<details class="side" open><summary>Contents</summary><nav aria-label="Documentation">${nav}</nav></details>
<script>if (matchMedia('(max-width: 52rem)').matches) document.querySelector('details.side').removeAttribute('open');</script>
<main>
${body}
<footer><a href="${REPO}/blob/main/${GENERATED.get(source)?.origin ?? source}">${GENERATED.has(source) ? `Generated from ${GENERATED.get(source).origin}` : 'View this page on GitHub'}</a> · Documentation under CC BY 4.0 · All authorities, keys and grants in the examples are fictional.</footer>
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
const htmlFiles = dir => readdirSync(dir, { withFileTypes: true }).flatMap(e => (e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []));
const isRedirect = html => /http-equiv="refresh"/.test(html);
// The hand-written pages carry their own title and description; the card tags are added here so
// that the absolute addresses are written once. Redirect stubs get no card.
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, 'utf8');
  if (isRedirect(html)) continue;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)">/)?.[1];
  const rel = relative(OUT, file).split('\\').join('/').replace(/index\.html$/, '');
  if (description === undefined) { problems.push(`site/${relative(OUT, file)}: no meta description`); continue; }
  writeFileSync(file, html.replace('</head>', `${socialTags({ title: unescapeHtml(title), description: unescapeHtml(description), path: rel })}\n</head>`));
}
for (const source of PUBLISHED) {
  const target = join(OUT, outputPath(source));
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, render(source));
}

// The README repeats the citations by hand (GitHub shows it first); they must match CITATION.cff.
const readme = squash(readFileSync(join(ROOT, 'README.md'), 'utf8'));
for (const text of [...citation.references, ...citation.facts]) {
  if (!readme.includes(squash(text))) problems.push(`README.md is out of step with CITATION.cff: ${squash(text).slice(0, 80)}`);
}

// Check every other Markdown file's relative links, so READMEs stay correct on GitHub.
const LINK = /(?<!!)\[(?:[^\]]|\][^(])*?\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
for (const file of git(['ls-files', '-co', '--exclude-standard', '*.md']).split('\n')) {
  if (!file || PUBLISHED.includes(file) || file.includes('node_modules/') || !existsSync(join(ROOT, file))) continue;
  const text = readFileSync(join(ROOT, file), 'utf8').replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const match of text.matchAll(LINK)) resolveLink(file, match[1]);
}

// Every published page has a real favicon, and every page that is not a redirect has a description
// and a social card.
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, 'utf8');
  const name = relative(OUT, file);
  if (!/<link rel="icon" href="(?!data:)[^"]+"/.test(html)) problems.push(`${name}: no favicon (an empty data: icon does not count)`);
  if (isRedirect(html)) continue;
  if (!/<meta name="description" content="[^"]{20,}">/.test(html)) problems.push(`${name}: no meta description`);
  if (!html.includes('<meta property="og:image" ')) problems.push(`${name}: no social card`);
}
for (const asset of ['assets/favicon.svg', 'assets/og-card.png']) if (!existsSync(join(OUT, asset))) problems.push(`${asset}: missing`);

if (CHECK) rmSync(OUT, { recursive: true, force: true });
if (problems.length > 0) {
  console.error(`Documentation link problems:\n  ${[...new Set(problems)].join('\n  ')}`);
  process.exit(1);
}
console.log(CHECK
  ? `Documentation links are valid (${PUBLISHED.length} published pages).`
  : `Wrote ${PUBLISHED.length} documentation pages and the static site to ${relative(ROOT, OUT)}/.`);
