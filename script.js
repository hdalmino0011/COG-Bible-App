'use strict';

const BOOKS = {
  "Old Testament": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"],
  "New Testament": ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
};
const ALL_BOOKS = Object.values(BOOKS).flat();

const DICTIONARY = [
  { term:"YHWH (Tetragrammaton)", category:"Divine Name", origin:"Hebrew", references:"Exodus 3:15; Exodus 6:3; Isaiah 42:8",
    shortDefinition:"The sacred four-letter Hebrew name of God (יהוה), written with consonants only; the original pronunciation is unknown.",
    article:{ sections:[
      {heading:"Overview",content:"The Tetragrammaton is the four-letter Hebrew name of God, written as YHWH (יהוה). It consists of four consonants with no vowels, so the original pronunciation has been lost. The name appears over 6,800 times in the Old Testament and is considered the most sacred name of God in the Hebrew Scriptures."},
      {heading:"Etymology and Meaning",content:"YHWH is drawn from the Hebrew verb 'to be' (hayah) and is understood as 'He who is' or 'I AM WHO I AM', revealed to Moses at the burning bush (Exodus 3:14). It signifies God's eternal, self-existent nature."},
      {heading:"Reverence and Tradition",content:"Because the name is sacred, Jewish tradition substituted 'Adonai' (Lord) or 'HaShem' (The Name) when reading Scripture. Many English Bibles render YHWH as 'LORD' in small caps to preserve that tradition."}
    ], bibleReferences:["Exodus 3:14-15","Exodus 6:3","Deuteronomy 6:4","Isaiah 42:8","Psalm 83:18"],
       externalLinks:[{label:"Britannica — Tetragrammaton",url:"https://www.britannica.com/topic/Tetragrammaton"}] } },

  { term:"Baal", category:"Deity", origin:"Canaanite", references:"Judges 2:11; 1 Kings 18",
    shortDefinition:"Canaanite fertility god worshipped by surrounding nations; frequently condemned in Scripture as a rival to the worship of the true God.",
    article:{ sections:[
      {heading:"Overview",content:"Baal was a prominent Canaanite fertility god worshipped across the ancient Near East. The name means 'lord' or 'master' and was used as a title for various local deities."},
      {heading:"Biblical Context",content:"The worship of Baal is frequently condemned in the Old Testament as a rival to the worship of YHWH. Elijah's confrontation with the prophets of Baal on Mount Carmel (1 Kings 18) is one of the most dramatic accounts of this conflict."}
    ], bibleReferences:["Judges 2:11","1 Kings 18:16-40","Jeremiah 2:23","Hosea 2:8"],
       externalLinks:[{label:"Wikipedia — Baal",url:"https://en.wikipedia.org/wiki/Baal"}] } },

  { term:"Messiah", category:"Title", origin:"Hebrew", references:"Daniel 9:25-26",
    shortDefinition:"Hebrew word meaning 'Anointed One', referring to the promised deliverer and king foretold throughout the Old Testament.",
    article:{ sections:[
      {heading:"Overview",content:"The term 'Messiah' comes from the Hebrew 'Mashiach', meaning 'Anointed One'. In the Old Testament, priests, prophets, and kings were anointed as a sign of God's chosen appointment."},
      {heading:"New Testament Fulfillment",content:"Christians believe Jesus of Nazareth is the promised Messiah. The title 'Christ' is the Greek equivalent of 'Messiah', and the Gospels present Jesus as fulfilling Old Testament prophecy."}
    ], bibleReferences:["Isaiah 7:14","Micah 5:2","Daniel 9:25-26","Matthew 1:1-17","John 1:41","Acts 2:36"],
       externalLinks:[{label:"Got Questions — Messiah",url:"https://www.gotquestions.org/messiah.html"}] } },

  { term:"Jerusalem", category:"Place", origin:"Hebrew", references:"2 Samuel 5:6-10",
    shortDefinition:"Holy city and capital of Israel, center of Jewish worship and the site of Solomon's Temple.",
    article:{ sections:[
      {heading:"Overview",content:"Jerusalem is one of the oldest continuously inhabited cities in the world and is sacred to Judaism, Christianity, and Islam. King David captured it and made it his capital (2 Samuel 5:6-10)."},
      {heading:"Spiritual Significance",content:"Jerusalem represents God's chosen dwelling place on earth. The Psalms express deep longing for it (Psalm 122), and Revelation describes the New Jerusalem as the ultimate dwelling of God with His people."}
    ], bibleReferences:["2 Samuel 5:6-10","1 Kings 8:1-21","Psalm 122","Luke 19:41-44","Revelation 21"],
       externalLinks:[{label:"Wikipedia — Jerusalem",url:"https://en.wikipedia.org/wiki/Jerusalem"}] } },

  { term:"Ark of the Covenant", category:"Object", origin:"Israelite", references:"Exodus 25:10-22",
    shortDefinition:"Sacred gold-covered chest containing the tablets of the Law; a symbol of God's presence among His people.",
    article:{ sections:[
      {heading:"Overview",content:"The Ark was a gold-overlaid chest built at God's command during the wilderness journey. It held the stone tablets of the Ten Commandments and served as the visible sign of God's covenant and presence."},
      {heading:"Significance",content:"The Ark represented God's throne on earth. It was carried before the people (Joshua 6) and placed in the Most Holy Place of the Tabernacle and later the Temple."}
    ], bibleReferences:["Exodus 25:10-22","Joshua 6:6-20","1 Samuel 4-6","Hebrews 9:1-5"],
       externalLinks:[{label:"Britannica — Ark of the Covenant",url:"https://www.britannica.com/topic/Ark-of-the-Covenant"}] } },

  { term:"Tabernacle", category:"Place", origin:"Hebrew", references:"Exodus 25-27",
    shortDefinition:"Portable sanctuary used by the Israelites for worship during their wilderness wanderings.",
    article:{ sections:[
      {heading:"Overview",content:"The Tabernacle was a portable sanctuary that served as the dwelling place of God among the Israelites during their 40 years in the wilderness. It was built according to detailed instructions given to Moses on Mount Sinai."},
      {heading:"Spiritual Significance",content:"The Tabernacle symbolized God's presence and the way to approach Him through sacrifice. The New Testament compares its ministry to the work of Christ."}
    ], bibleReferences:["Exodus 25-27","Exodus 36-40","Hebrews 9:1-28"],
       externalLinks:[{label:"Wikipedia — Tabernacle",url:"https://en.wikipedia.org/wiki/Tabernacle"}] } },

  { term:"Sabbath", category:"Concept", origin:"Hebrew", references:"Exodus 20:8-11",
    shortDefinition:"The seventh day, set apart as a day of rest and worship, commanded as part of the Law given to Israel.",
    article:{ sections:[
      {heading:"Overview",content:"The Sabbath is the seventh day of the week, established by God as a day of rest. The term comes from the Hebrew 'Shabbat', meaning 'to cease' or 'to rest'."},
      {heading:"New Testament Perspective",content:"Jesus taught that the Sabbath was made for humanity's benefit and that doing good is lawful on the Sabbath (Mark 2:27-28)."}
    ], bibleReferences:["Genesis 2:2-3","Exodus 20:8-11","Mark 2:27-28","Hebrews 4:1-11"],
       externalLinks:[{label:"Got Questions — Sabbath",url:"https://www.gotquestions.org/Sabbath.html"}] } }
];

const QUIZ = {
  old: [
    {q:"Who led the Israelites out of Egypt?",options:["Moses","Joshua","Aaron","Abraham"],answer:0},
    {q:"How many days did God take to create the world?",options:["5","6","7","10"],answer:1},
    {q:"Who was thrown into the lions' den?",options:["David","Daniel","Elijah","Samuel"],answer:1},
    {q:"Who built the ark before the flood?",options:["Noah","Abraham","Job","Enoch"],answer:0},
    {q:"Which king was known for his great wisdom?",options:["Saul","David","Solomon","Hezekiah"],answer:2}
  ],
  new: [
    {q:"In which town was Jesus born?",options:["Nazareth","Jerusalem","Bethlehem","Capernaum"],answer:2},
    {q:"How many disciples did Jesus choose?",options:["10","12","7","14"],answer:1},
    {q:"Who baptized Jesus in the Jordan River?",options:["Peter","John the Baptist","Andrew","Philip"],answer:1},
    {q:"Who denied Jesus three times?",options:["Judas","Thomas","Peter","John"],answer:2},
    {q:"On the road to which city did Paul encounter a blinding light?",options:["Damascus","Rome","Corinth","Ephesus"],answer:0}
  ]
};
QUIZ.all = [...QUIZ.old, ...QUIZ.new];

const state = {
  verses:{}, bibleReady:false, currentBook:"Genesis", currentChapter:1,
  quizCategory:"old", quizStats:{total:0,correct:0}, quizSession:null,
  selectedVerse:null, longPressTimer:null
};

/* ---------- App bootstrap ---------- */
async function init() {
  await loadBible();
  buildBookSelector();
  buildBookSuggestions();
  populateChapters(state.currentBook, state.currentChapter);
  renderVerses(state.currentBook, state.currentChapter);
  initSearch();
  initNav();
  initQuiz();
  initDictionary();
  initSettings();
  initVerseToolbar();
  loadSavedPreferences();
  hideSplash();
  registerServiceWorker();
}

async function loadBible() {
  try {
    const res = await fetch('./verses.json', {cache:'no-cache'});
    if (!res.ok) throw new Error('HTTP ' + res.status);
    state.verses = await res.json();
    state.bibleReady = true;
  } catch (err) {
    console.error('Failed to load verses.json:', err);
    state.verses = {};
  }
}

function hideSplash() {
  const splash = document.getElementById('splash-screen');
  const app = document.getElementById('app');
  setTimeout(() => {
    splash.style.display = 'none';
    app.classList.remove('hidden');
  }, 2600);
}

/* ---------- Bible screen ---------- */
function buildBookSelector() {
  const select = document.getElementById('book-select');
  Object.entries(BOOKS).forEach(([testament, books]) => {
    const group = document.createElement('optgroup');
    group.label = testament;
    books.forEach(book => {
      const opt = document.createElement('option');
      opt.value = opt.textContent = book;
      if (book === state.currentBook) opt.selected = true;
      group.appendChild(opt);
    });
    select.appendChild(group);
  });
  select.addEventListener('change', () => {
    state.currentBook = select.value;
    populateChapters(state.currentBook, 1);
    state.currentChapter = 1;
    renderVerses(state.currentBook, 1);
  });
  document.getElementById('chapter-select').addEventListener('change', e => {
    state.currentChapter = Number(e.target.value);
    renderVerses(state.currentBook, state.currentChapter);
  });
}

function buildBookSuggestions() {
  const list = document.getElementById('book-suggestions');
  ALL_BOOKS.forEach(book => {
    const opt = document.createElement('option');
    opt.value = book;
    list.appendChild(opt);
  });
}

function populateChapters(book, defaultChapter) {
  const select = document.getElementById('chapter-select');
  const chapters = state.verses[book] ? Object.keys(state.verses[book]).map(Number).sort((a,b)=>a-b) : [];
  select.innerHTML = '';
  if (chapters.length === 0) {
    const opt = document.createElement('option');
    opt.value = 1; opt.textContent = 'No data';
    select.appendChild(opt);
    return;
  }
  chapters.forEach(n => {
    const opt = document.createElement('option');
    opt.value = n; opt.textContent = 'Chapter ' + n;
    select.appendChild(opt);
  });
  select.value = defaultChapter;
}

function renderVerses(book, chapter) {
  const rows = document.getElementById('verse-rows');
  rows.innerHTML = '';
  hideToolbar();
  const data = state.verses[book] && state.verses[book][chapter];
  if (!data || !data.length) {
    rows.innerHTML = `<div class="verse-row-empty">Text for ${escapeHtml(book)} ${chapter} is not available in verses.json yet.</div>`;
    return;
  }
  data.forEach((verse, index) => {
    const row = document.createElement('div');
    row.className = 'verse-row';
    row.dataset.book = book; row.dataset.chapter = chapter;
    row.dataset.verse = verse.v; row.dataset.index = index;
    row.innerHTML = `<div class="verse-cell verse-cell-ceb"><span class="verse-num">${verse.v}</span><span class="verse-text">${escapeHtml(verse.ceb)}</span></div><div class="verse-cell"><span class="verse-num">${verse.v}</span><span class="verse-text">${escapeHtml(verse.en)}</span></div>`;
    row.addEventListener('mousedown', () => startLongPress(row));
    row.addEventListener('mouseup', clearLongPress);
    row.addEventListener('mouseleave', clearLongPress);
    row.addEventListener('touchstart', () => startLongPress(row), {passive:true});
    row.addEventListener('touchend', clearLongPress);
    row.addEventListener('touchmove', clearLongPress);
    rows.appendChild(row);
  });
  loadHighlights();
}

/* ---------- Long press / toolbar ---------- */
function startLongPress(row) {
  clearTimeout(state.longPressTimer);
  state.longPressTimer = setTimeout(() => selectVerse(row), 500);
}
function clearLongPress() { clearTimeout(state.longPressTimer); }

function selectVerse(row) {
  document.querySelectorAll('.verse-row.selected').forEach(el => el.classList.remove('selected'));
  row.classList.add('selected');
  state.selectedVerse = { row, book:row.dataset.book, chapter:row.dataset.chapter, verse:row.dataset.verse };
  document.getElementById('verse-toolbar').classList.remove('hidden');
}
function hideToolbar() {
  document.getElementById('verse-toolbar').classList.add('hidden');
  document.querySelectorAll('.verse-row.selected').forEach(el => el.classList.remove('selected'));
  state.selectedVerse = null;
}
function initVerseToolbar() {
  document.querySelectorAll('.highlight-btn').forEach(btn => btn.addEventListener('click', () => applyHighlight(btn.dataset.color)));
  document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', () => copyVerse(btn.dataset.version)));
  document.getElementById('toolbar-close').addEventListener('click', hideToolbar);
}
function applyHighlight(color) {
  if (!state.selectedVerse) return showToast('Long-press a verse first');
  const row = state.selectedVerse.row;
  ['yellow','pink','green','blue'].forEach(c => row.classList.remove('highlight-' + c));
  if (color !== 'none') row.classList.add('highlight-' + color);
  saveHighlights();
  showToast(color === 'none' ? 'Highlight cleared' : 'Highlighted ' + color);
}
function copyVerse(version) {
  if (!state.selectedVerse) return showToast('Long-press a verse first');
  const { book, chapter, verse, row } = state.selectedVerse;
  const ref = `${book} ${chapter}:${verse}`;
  let text = '';
  const ceb = row.querySelector('.verse-cell-ceb .verse-text')?.textContent || '';
  const eng = row.querySelector('.verse-cell:last-child .verse-text')?.textContent || '';
  if (version === 'cebuano' || version === 'both') text += `${ref} (Cebuano)\n${ceb}\n\n`;
  if (version === 'english' || version === 'both') text += `${ref} (English)\n${eng}`;
  text = text.trim();
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard')).catch(() => fallbackCopy(text));
  } else fallbackCopy(text);
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); showToast('Copied to clipboard'); }
  catch { showToast('Copy failed'); }
  document.body.removeChild(ta);
}

/* ---------- Highlights persistence ---------- */
function saveHighlights() {
  const highlights = {};
  document.querySelectorAll('.verse-row[class*="highlight-"]').forEach(el => {
    const m = el.className.match(/highlight-(yellow|pink|green|blue)/);
    if (m) highlights[`${el.dataset.book}|${el.dataset.chapter}|${el.dataset.verse}`] = m[1];
  });
  localStorage.setItem('cog_highlights', JSON.stringify(highlights));
}
function loadHighlights() {
  try {
    const highlights = JSON.parse(localStorage.getItem('cog_highlights') || '{}');
    document.querySelectorAll('.verse-row').forEach(el => {
      const key = `${el.dataset.book}|${el.dataset.chapter}|${el.dataset.verse}`;
      if (highlights[key]) el.classList.add('highlight-' + highlights[key]);
    });
  } catch {}
}

/* ---------- Search ---------- */
function initSearch() {
  const bar = document.getElementById('search-bar');
  const input = document.getElementById('verse-search-input');
  document.getElementById('search-toggle').addEventListener('click', () => {
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) input.focus();
  });
  document.getElementById('search-submit').addEventListener('click', performSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(); });
}

function performSearch() {
  const query = document.getElementById('verse-search-input').value.trim();
  if (!query) return;

  const refMatch = query.match(/^(\d?\s*[A-Za-z]+(?:\s+\d+)?)\s+(\d+):(\d+)$/i);
  if (refMatch) {
    const book = matchBook(refMatch[1].trim());
    const chapter = parseInt(refMatch[2]);
    const verse = parseInt(refMatch[3]);
    if (book && hasVerse(book, chapter, verse)) return navigateToVerse(book, chapter, verse);
    return showToast(`"${query}" not found`);
  }

  const chapMatch = query.match(/^(\d?\s*[A-Za-z]+(?:\s+\d+)?)\s+(\d+)$/i);
  if (chapMatch) {
    const book = matchBook(chapMatch[1].trim());
    const chapter = parseInt(chapMatch[2]);
    if (book && hasChapter(book, chapter)) return navigateToChapter(book, chapter);
    return showToast(`"${query}" not found`);
  }

  const book = matchBook(query);
  if (book) return navigateToChapter(book, 1);

  const results = searchVerses(query);
  if (!results.length) return showToast(`No results for "${query}"`);
  navigateToVerse(results[0].book, results[0].chapter, results[0].verse);
  showToast(`${results.length} result(s) for "${query}"`);
}

function matchBook(name) {
  const lower = name.toLowerCase().replace(/\s+/g, ' ').trim();
  return ALL_BOOKS.find(b => b.toLowerCase() === lower) || null;
}
function hasChapter(book, chapter) { return !!(state.verses[book] && state.verses[book][chapter]); }
function hasVerse(book, chapter, verse) {
  const data = state.verses[book] && state.verses[book][chapter];
  return !!(data && data.find(v => v.v === verse));
}
function searchVerses(query) {
  const q = query.toLowerCase(); const out = [];
  for (const [book, chapters] of Object.entries(state.verses)) {
    for (const [chapter, verses] of Object.entries(chapters)) {
      for (const v of verses) {
        if (v.en?.toLowerCase().includes(q) || v.ceb?.toLowerCase().includes(q))
          out.push({book, chapter:parseInt(chapter), verse:v.v});
      }
    }
  }
  return out;
}

function navigateToChapter(book, chapter) {
  document.getElementById('book-select').value = book;
  populateChapters(book, chapter);
  document.getElementById('chapter-select').value = chapter;
  state.currentBook = book; state.currentChapter = chapter;
  renderVerses(book, chapter);
}
function navigateToVerse(book, chapter, verse) {
  navigateToChapter(book, chapter);
  setTimeout(() => {
    const row = document.querySelector(`.verse-row[data-verse="${verse}"]`);
    if (row) {
      row.scrollIntoView({behavior:'smooth', block:'center'});
      row.style.background = 'rgba(201,162,39,0.18)';
      setTimeout(() => row.style.background = '', 2000);
    }
  }, 300);
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2800);
}

/* ---------- Navigation ---------- */
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchScreen(btn.dataset.screen);
      hideToolbar();
    });
  });
}
function switchScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
  document.getElementById('screen-' + name).classList.add('active-screen');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.screen === name));
}

/* ---------- Quiz ---------- */
function initQuiz() {
  document.querySelectorAll('.quiz-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-cat-btn').forEach(b => b.classList.toggle('active', b === btn));
      state.quizCategory = btn.dataset.cat;
      document.getElementById('quiz-play-area').classList.add('hidden');
      document.getElementById('quiz-note').classList.remove('hidden');
    });
  });
  document.getElementById('start-quiz-btn').addEventListener('click', () => {
    state.quizSession = { questions: shuffle([...QUIZ[state.quizCategory]]), index:0, correct:0 };
    document.getElementById('quiz-note').classList.add('hidden');
    document.getElementById('quiz-play-area').classList.remove('hidden');
    renderQuizQuestion();
  });
  updateQuizStats();
}
function renderQuizQuestion() {
  const area = document.getElementById('quiz-play-area');
  const s = state.quizSession;
  if (s.index >= s.questions.length) {
    const pct = Math.round(s.correct / s.questions.length * 100);
    area.innerHTML = `<div class="quiz-question-card quiz-result-card"><i class="fa-solid fa-award" style="font-size:34px;color:var(--gold)"></i><h3 style="font-family:'Playfair Display',serif">Quiz complete</h3><p style="color:var(--slate-soft)">You scored ${s.correct} of ${s.questions.length} (${pct}%)</p></div>`;
    return;
  }
  const item = s.questions[s.index];
  const card = document.createElement('div');
  card.className = 'quiz-question-card';
  card.innerHTML = `<div class="quiz-question-meta">Question ${s.index+1} of ${s.questions.length}</div><div class="quiz-question-text">${escapeHtml(item.q)}</div>`;
  item.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'quiz-option'; b.textContent = opt;
    b.addEventListener('click', () => answerQuiz(i, item, card));
    card.appendChild(b);
  });
  area.innerHTML = ''; area.appendChild(card);
}
function answerQuiz(selected, item, card) {
  card.querySelectorAll('.quiz-option').forEach(o => o.disabled = true);
  const correct = selected === item.answer;
  card.querySelectorAll('.quiz-option')[item.answer].classList.add('correct');
  if (!correct) card.querySelectorAll('.quiz-option')[selected].classList.add('incorrect');
  state.quizStats.total++;
  if (correct) { state.quizStats.correct++; state.quizSession.correct++; }
  updateQuizStats();
  const next = document.createElement('button');
  next.className = 'quiz-next-btn';
  next.textContent = state.quizSession.index + 1 < state.quizSession.questions.length ? 'Next' : 'Finish';
  next.addEventListener('click', () => { state.quizSession.index++; renderQuizQuestion(); });
  card.appendChild(next);
}
function updateQuizStats() {
  const { total, correct } = state.quizStats;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-accuracy').textContent = total > 0 ? Math.round(correct/total*100) + '%' : '0%';
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------- Dictionary ---------- */
function initDictionary() {
  renderDictionaryList(DICTIONARY);
  document.getElementById('dict-search-input').addEventListener('input', e => {
    const term = e.target.value.trim().toLowerCase();
    renderDictionaryList(DICTIONARY.filter(entry =>
      entry.term.toLowerCase().includes(term) ||
      entry.shortDefinition.toLowerCase().includes(term) ||
      entry.category.toLowerCase().includes(term)
    ));
  });
  document.getElementById('dict-back-btn').addEventListener('click', showDictionaryList);
}
function renderDictionaryList(entries) {
  const list = document.getElementById('dictionary-list');
  list.innerHTML = '';
  if (!entries.length) { list.innerHTML = '<div class="dict-empty">No entries match your search.</div>'; return; }
  entries.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'dict-entry';
    div.innerHTML = `<div class="dict-entry-head"><span class="dict-term">${escapeHtml(entry.term)}</span><span class="dict-category">${escapeHtml(entry.category)}</span></div><div class="dict-definition">${escapeHtml(entry.shortDefinition)}</div><div class="dict-meta"><span>Origin: ${escapeHtml(entry.origin)}</span><span>Refs: ${escapeHtml(entry.references)}</span></div><div class="dict-click-hint">Tap to read full article ›</div>`;
    div.addEventListener('click', () => showDictionaryArticle(entry));
    list.appendChild(div);
  });
}
function showDictionaryArticle(entry) {
  document.getElementById('dictionary-list-view').style.display = 'none';
  const view = document.getElementById('dictionary-article-view');
  view.classList.remove('hidden');
  document.getElementById('dict-back-btn').classList.remove('hidden');
  let html = `<button class="dict-article-back" id="article-back">‹ Back to Dictionary</button><h1 class="dict-article-title">${escapeHtml(entry.term)}</h1><span class="dict-article-category">${escapeHtml(entry.category)}</span>`;
  entry.article.sections.forEach(s => { html += `<div class="dict-article-section"><h3>${escapeHtml(s.heading)}</h3><p>${escapeHtml(s.content)}</p></div>`; });
  if (entry.article.bibleReferences?.length) {
    html += '<div class="dict-article-section"><h3>Bible References</h3><p>';
    entry.article.bibleReferences.forEach(r => html += `<span class="dict-article-bible-ref" data-ref="${escapeHtml(r)}">${escapeHtml(r)}</span>`);
    html += '</p></div>';
  }
  if (entry.article.externalLinks?.length) {
    html += '<div class="dict-article-section"><h3>External Resources</h3>';
    entry.article.externalLinks.forEach(l => html += `<a class="dict-article-external-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} ›</a>`);
    html += '</div>';
  }
  document.getElementById('dictionary-article-content').innerHTML = html;
  document.getElementById('article-back').addEventListener('click', showDictionaryList);
  document.querySelectorAll('.dict-article-bible-ref').forEach(el => {
    el.addEventListener('click', () => handleBibleRef(el.dataset.ref));
  });
}
function showDictionaryList() {
  document.getElementById('dictionary-list-view').style.display = '';
  document.getElementById('dictionary-article-view').classList.add('hidden');
  document.getElementById('dict-back-btn').classList.add('hidden');
}
function handleBibleRef(ref) {
  const m = ref.match(/^(\d?\s*[A-Za-z]+(?:\s+\d+)?)\s+(\d+):(\d+)/);
  if (!m) return showToast(`Cannot open "${ref}"`);
  const book = matchBook(m[1].trim());
  const chapter = parseInt(m[2]);
  const verse = parseInt(m[3]);
  if (book && hasVerse(book, chapter, verse)) {
    switchScreen('bible');
    navigateToVerse(book, chapter, verse);
    showToast(`Opened ${ref}`);
  } else {
    showToast(`"${ref}" is not available in verses.json`);
  }
}

/* ---------- Settings ---------- */
function initSettings() {
  document.querySelectorAll('.theme-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyTheme(btn.dataset.theme);
    localStorage.setItem('cog_theme', btn.dataset.theme);
  }));
  document.querySelectorAll('.font-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFont(btn.dataset.font);
    localStorage.setItem('cog_font', btn.dataset.font);
  }));
  document.querySelectorAll('.font-size-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFontSize(btn.dataset.size);
    localStorage.setItem('cog_fontsize', btn.dataset.size);
  }));
}
function applyTheme(theme) {
  document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
  document.body.classList.add('theme-' + theme);
}
function applyFont(font) {
  document.body.className = document.body.className.replace(/font-(roboto|times|georgia|arial)/g, '').trim();
  const map = {'Roboto':'font-roboto','Times New Roman':'font-times','Georgia':'font-georgia','Arial':'font-arial'};
  document.body.classList.add(map[font] || 'font-roboto');
  document.documentElement.style.setProperty('--app-font', `'${font}', sans-serif`);
}
function applyFontSize(size) {
  document.body.className = document.body.className.replace(/font-size-\w+/g, '').trim();
  document.body.classList.add('font-size-' + size);
}
function loadSavedPreferences() {
  const theme = localStorage.getItem('cog_theme') || 'light';
  applyTheme(theme);
  document.querySelector(`.theme-btn[data-theme="${theme}"]`)?.classList.add('active');
  const font = localStorage.getItem('cog_font') || 'Roboto';
  applyFont(font);
  document.querySelector(`.font-btn[data-font="${font}"]`)?.classList.add('active');
  const size = localStorage.getItem('cog_fontsize') || 'medium';
  applyFontSize(size);
  document.querySelector(`.font-size-btn[data-size="${size}"]`)?.classList.add('active');
  loadHighlights();
}

/* ---------- Utilities ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ---------- Service worker ---------- */
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('./service-worker.js').then(reg => {
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      if (!nw) return;
      nw.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) {
          showToast('Update available — refreshing…');
          setTimeout(() => location.reload(), 1200);
        }
      });
    });
  }).catch(err => console.warn('SW registration failed:', err));
}

/* ---------- Start ---------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
