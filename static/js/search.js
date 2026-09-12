(() => {
  const form = document.getElementById('search-form');
  const resultsRoot = document.getElementById('search-result');
  if (!form || !resultsRoot) return;

  const input = form.elements.q;
  const pageContent = resultsRoot.nextElementSibling;
  const embeddedIndex = document.getElementById('search-index-data');
  let index = [];
  let timer;

  const normalize = value => String(value || '').toLocaleLowerCase();
  const asText = value => Array.isArray(value) ? value.join(' ') : String(value || '');

  try {
    const data = JSON.parse(embeddedIndex?.textContent || '[]');
    index = Array.isArray(data) ? data : [];
  } catch (_) {
    index = [];
  }

  function scoreItem(item, terms) {
    const title = normalize(item.title);
    const summary = normalize(item.summary);
    const content = normalize(item.content);
    const tags = normalize(asText(item.tags));
    const all = `${title} ${tags} ${summary} ${content}`;
    if (!terms.every(term => all.includes(term))) return -1;

    return terms.reduce((score, term) => score
      + (title.includes(term) ? 12 : 0)
      + (tags.includes(term) ? 8 : 0)
      + (summary.includes(term) ? 4 : 0)
      + (content.includes(term) ? 1 : 0), 0);
  }

  function makeSnippet(item, terms) {
    const summary = asText(item.summary).replace(/\s+/g, ' ').trim();
    const content = asText(item.content).replace(/\s+/g, ' ').trim();
    const source = summary || content;
    if (!source) return '';

    const lower = normalize(source);
    const positions = terms.map(term => lower.indexOf(term)).filter(position => position >= 0);
    const first = positions.length ? Math.min(...positions) : 0;
    const start = Math.max(0, first - 55);
    const end = Math.min(source.length, start + 190);
    return `${start > 0 ? '…' : ''}${source.slice(start, end)}${end < source.length ? '…' : ''}`;
  }

  function appendHighlighted(parent, text, terms) {
    const pattern = terms
      .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .sort((a, b) => b.length - a.length)
      .join('|');
    if (!pattern) {
      parent.textContent = text;
      return;
    }

    const regex = new RegExp(`(${pattern})`, 'gi');
    text.split(regex).forEach(part => {
      const node = terms.some(term => normalize(part) === term)
        ? Object.assign(document.createElement('mark'), { textContent: part })
        : document.createTextNode(part);
      parent.appendChild(node);
    });
  }

  function clearSearch() {
    input.value = '';
    resultsRoot.replaceChildren();
    resultsRoot.style.display = 'none';
    if (pageContent) pageContent.style.display = '';
    input.focus();
  }

  function render(query) {
    const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      clearSearch();
      return;
    }

    const matches = index
      .map(item => ({ item, score: scoreItem(item, terms) }))
      .filter(result => result.score >= 0)
      .sort((a, b) => b.score - a.score || Number(b.item.lastmod || 0) - Number(a.item.lastmod || 0));

    resultsRoot.replaceChildren();
    resultsRoot.style.display = 'block';
    if (pageContent) pageContent.style.display = 'none';

    const summary = document.createElement('div');
    summary.className = 'search-summary TableObject border-bottom border-gray-light py-3 mt-3';
    const count = document.createElement('div');
    count.className = 'TableObject-item TableObject-item--primary v-align-top';
    count.append(`${matches.length} 条结果，关键字“`);
    const strong = document.createElement('strong');
    strong.textContent = query.trim();
    count.append(strong, '”');

    const actions = document.createElement('div');
    actions.className = 'TableObject-item text-right v-align-top';
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'btn-link search-clear';
    clear.textContent = '清除搜索';
    clear.addEventListener('click', clearSearch);
    actions.appendChild(clear);
    summary.append(count, actions);
    resultsRoot.appendChild(summary);

    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'search-empty text-gray py-6';
      empty.textContent = '没有找到相关记录，可以尝试更短的关键字或主题名称。';
      resultsRoot.appendChild(empty);
      return;
    }

    const list = document.createElement('ul');
    list.className = 'search-results-list';
    matches.forEach(({ item }) => {
      const row = document.createElement('li');
      row.className = 'col-12 width-full py-4 border-bottom color-border-secondary';

      const title = document.createElement('h3');
      title.className = 'wb-break-all mb-1';
      const link = document.createElement('a');
      link.href = item.permalink || item.relpermalink;
      appendHighlighted(link, asText(item.title), terms);
      title.appendChild(link);
      row.appendChild(title);

      const snippet = makeSnippet(item, terms);
      if (snippet) {
        const description = document.createElement('p');
        description.className = 'text-gray mb-2 pr-4';
        appendHighlighted(description, snippet, terms);
        row.appendChild(description);
      }

      if (Array.isArray(item.tags) && item.tags.length) {
        const tags = document.createElement('div');
        tags.className = 'f6 text-gray search-result-tags';
        tags.textContent = `主题：${item.tags.join(' · ')}`;
        row.appendChild(tags);
      }
      list.appendChild(row);
    });
    resultsRoot.appendChild(list);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    render(input.value);
  });

  input.addEventListener('input', () => {
    window.clearTimeout(timer);
    if (!input.value.trim()) {
      clearSearch();
      return;
    }
    timer = window.setTimeout(() => render(input.value), 160);
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') clearSearch();
  });
})();
