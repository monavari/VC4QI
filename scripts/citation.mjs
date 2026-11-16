// SPDX-License-Identifier: Apache-2.0
// Reads CITATION.cff and writes the site's Cite page and the references the README must agree with.
//
// The parser reads the small subset of YAML that CITATION.cff uses here (strings, folded `>-`
// blocks, nested maps and lists of maps) and throws on anything else, so a file that needs more
// fails loudly instead of being half read. It adds no dependency.

/** Parse the CITATION.cff subset. Every scalar is a string. */
export function parseCff(text) {
  const lines = text.split('\n').map((raw, i) => ({ n: i + 1, raw: raw.replace(/\s+$/, '') }))
    .filter(l => l.raw.trim() !== '' && !l.raw.trim().startsWith('#'));
  const fail = (line, why) => { throw new Error(`CITATION.cff line ${line.n}: ${why}`); };
  const indentOf = l => l.raw.length - l.raw.trimStart().length;
  let at = 0;

  const scalar = (line, value) => {
    const v = value.trim();
    if (/^["']/.test(v)) {
      const q = v[0];
      const inner = v.slice(1, -1);
      if (v.length < 2 || !v.endsWith(q)) fail(line, 'unterminated quoted string');
      if (inner.includes(q) || (q === '"' && inner.includes('\\'))) fail(line, 'escapes in quoted strings are not supported');
      return inner;
    }
    if (/^[[{&*!|>%@`]/.test(v) || / #/.test(v)) fail(line, `unsupported YAML: ${v}`);
    return v;
  };

  function parseMap(indent) {
    const map = {};
    while (at < lines.length) {
      const line = lines[at];
      const here = indentOf(line);
      if (here < indent) break;
      if (here > indent) fail(line, 'unexpected indentation');
      if (line.raw.trim().startsWith('- ')) fail(line, 'a list item where a key was expected');
      const m = /^([A-Za-z][\w-]*):(?: +(.*))?$/.exec(line.raw.trim());
      if (!m) fail(line, 'expected "key: value"');
      const [, key, rest] = m;
      if (key in map) fail(line, `duplicate key ${key}`);
      at += 1;
      if (rest === undefined || rest === '') {
        const next = lines[at];
        if (!next || indentOf(next) <= indent) fail(line, `${key} has no value`);
        map[key] = next.raw.trim().startsWith('- ') ? parseList(indentOf(next)) : parseMap(indentOf(next));
      } else if (rest === '>-' || rest === '>') {
        const parts = [];
        while (at < lines.length && indentOf(lines[at]) > indent) parts.push(lines[at++].raw.trim());
        if (parts.length === 0) fail(line, 'empty folded block');
        map[key] = parts.join(' ');
      } else {
        map[key] = scalar(line, rest);
      }
    }
    return map;
  }

  function parseList(indent) {
    const list = [];
    while (at < lines.length && indentOf(lines[at]) === indent && lines[at].raw.trim().startsWith('- ')) {
      const line = lines[at];
      const content = line.raw.trim().slice(2);
      if (!/^[A-Za-z][\w-]*:/.test(content)) fail(line, 'only lists of maps are supported');
      // The item's first key sits two columns in, like the keys that follow it.
      lines[at] = { n: line.n, raw: ' '.repeat(indent + 2) + content };
      list.push(parseMap(indent + 2));
    }
    return list;
  }

  const top = parseMap(0);
  if (at < lines.length) fail(lines[at], 'unexpected content');
  return top;
}

const need = (value, what) => {
  if (value === undefined || value === '') throw new Error(`CITATION.cff: ${what} is missing`);
  return value;
};

// Names that BibTeX would otherwise lower-case keep their capitals inside braces.
const braceAcronyms = title => title.replace(/\b[A-Z][A-Z0-9]+\b/g, '{$&}');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// BibTeX keys: author + year + a short name for the work.
const KEY_NAME = { paper: 'trustchains', software: 'vc4qi' };

/** Format `fields` as a BibTeX entry with the keys aligned and long values wrapped. */
function bibtex(type, key, fields) {
  const width = Math.max(...fields.map(([k]) => k.length));
  const body = fields.map(([k, v]) => {
    const head = `  ${k.padEnd(width)} = {`;
    const indent = ' '.repeat(head.length);
    const [first, ...words] = String(v).split(' ');
    const out = [];
    let line = head + first;
    for (const word of words) {
      if (line.length + 1 + word.length > 80) { out.push(line); line = indent + word; } else line += ` ${word}`;
    }
    out.push(line);
    return out.join('\n');
  }).join('},\n') + '}';
  return `@${type}{${key},\n${body}\n}`;
}

/**
 * Everything the Cite page and the README's references are made from.
 * @returns {{ markdown: string, references: string[] }} the page, and the texts the README must contain
 */
export function citationFrom(cffText) {
  const cff = parseCff(cffText);
  const paper = need(cff['preferred-citation'], 'preferred-citation');
  const people = authors => need(authors, 'authors');
  const name = a => `${need(a['given-names'], 'given-names')} ${need(a['family-names'], 'family-names')}`;
  const inverted = a => `${a['family-names']}, ${a['given-names']}`;
  const list = items => (items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items.at(-1)}` : items[0]);

  const version = need(cff.version, 'version');
  const versionDoi = need(cff.doi, 'doi');
  const concept = (cff.identifiers ?? []).find(i => i.type === 'doi' && /concept/i.test(i.description ?? ''));
  const conceptDoi = need(concept?.value, 'the concept DOI (an identifiers entry whose description says "concept")');
  const softwareYear = need(cff['date-released'], 'date-released').slice(0, 4);
  const [y, m, d] = cff['date-released'].split('-').map(Number);
  const released = `${d} ${MONTHS[m - 1]} ${y}`;
  const doiUrl = doi => `https://doi.org/${doi}`;

  const paperAuthors = people(paper.authors);
  const softwareAuthors = people(cff.authors);
  const paperTitle = need(paper.title, 'the paper title');
  const softwareTitle = need(cff.title, 'title');
  const paperYear = need(paper.year, 'the paper year');
  const unpublished = !paper.doi && !paper.journal;

  const paperLine = `${list(paperAuthors.map(name))} (${paperYear}). *${paperTitle}.*`
    + (paper.journal ? ` ${paper.journal}.` : '') + (paper.doi ? ` <${doiUrl(paper.doi)}>` : '');
  const softwareLine = `${list(softwareAuthors.map(name))} (${softwareYear}). *${softwareTitle}*, version ${version} [Software]. Zenodo. <${doiUrl(versionDoi)}>`;
  const unpublishedNote = 'The venue and DOI will be added when they are available.';
  const conceptLine = `To cite the latest version instead of ${version}, use the concept DOI <${doiUrl(conceptDoi)}>.`;

  const paperBib = unpublished
    ? bibtex('unpublished', `${paperAuthors[0]['family-names'].toLowerCase()}${paperYear}${KEY_NAME.paper}`, [
      ['author', paperAuthors.map(inverted).join(' and ')], ['title', braceAcronyms(paperTitle)], ['year', paperYear], ['note', 'Venue and DOI to be added']])
    : bibtex('article', `${paperAuthors[0]['family-names'].toLowerCase()}${paperYear}${KEY_NAME.paper}`, [
      ['author', paperAuthors.map(inverted).join(' and ')], ['title', braceAcronyms(paperTitle)], ['journal', need(paper.journal, 'the paper journal')],
      ['year', paperYear], ['doi', need(paper.doi, 'the paper DOI')]]);
  const softwareBib = bibtex('software', `${softwareAuthors[0]['family-names'].toLowerCase()}${softwareYear}${KEY_NAME.software}`, [
    ['author', softwareAuthors.map(inverted).join(' and ')], ['title', braceAcronyms(softwareTitle)],
    ['version', version], ['year', softwareYear], ['publisher', 'Zenodo'], ['doi', versionDoi], ['url', doiUrl(versionDoi)]]);

  const markdown = `# Cite VC4QI

If you use VC4QI in a publication, please cite both the paper and the software.

This page is generated from [CITATION.cff](../CITATION.cff), the repository's citation metadata. GitHub's "Cite this repository" button reads the same file but shows only the paper, so both references are given here and in the [README](../README.md#attribution-and-citation).

## Paper

> ${paperLine}

${unpublished ? `${unpublishedNote}\n\n` : ''}## Software

> ${softwareLine}

${conceptLine} Version ${version} was released on ${released}.

## BibTeX

\`\`\`bibtex
${paperBib}

${softwareBib}
\`\`\`

Authorship and copyright are separate; see [NOTICE](../NOTICE). Citation is requested, not required by the licenses.
`;
  const references = [paperLine, ...(unpublished ? [unpublishedNote] : []), softwareLine, conceptLine, paperBib, softwareBib];
  return { markdown, references, facts: [version, versionDoi, conceptDoi, paperTitle, softwareTitle] };
}

/** Whitespace-insensitive form used to compare the README with the generated references. */
export const squash = text => text.replace(/^>\s?/gm, '').replace(/\s+/g, ' ').trim();
