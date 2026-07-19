/* =========================================================
   COG (T.J.R) BIBLE — APP LOGIC
   ========================================================= */

/* ---------------------------------------------------------
   1. BIBLE BOOK LIST (66 books)
   --------------------------------------------------------- */
const BOOKS = {
  "Old Testament": [
    "Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth",
    "1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra",
    "Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon",
    "Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos",
    "Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"
  ],
  "New Testament": [
    "Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians",
    "Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians",
    "1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter",
    "1 John","2 John","3 John","Jude","Revelation"
  ]
};

/* ---------------------------------------------------------
   2. SAMPLE VERSE DATA (placeholder — English + Cebuano)
   --------------------------------------------------------- */
const VERSES = {
  "John": {
    1: [
      { v:1, en:"In the beginning was the Word, and the Word was with God, and the Word was God.", ceb:"Sa sinugdanan mao ang Pulong, ug ang Pulong uban sa Dios, ug ang Pulong mao ang Dios." },
      { v:2, en:"The same was in the beginning with God.", ceb:"Siya maoy diha sa sinugdanan uban sa Dios." },
      { v:3, en:"All things were made by him; and without him was not any thing made that was made.", ceb:"Ang tanan nga mga butang gibuhat pinaagi kaniya; ug kung wala kaniya walay bisan unsa nga nahimo nga nahimo." },
      { v:4, en:"In him was life; and the life was the light of men.", ceb:"Kaniya ang kinabuhi; ug ang kinabuhi mao ang kahayag sa mga tawo." },
      { v:5, en:"And the light shineth in darkness; and the darkness comprehended it not.", ceb:"Ug ang kahayag misidlak sa kangitngit; ug ang kangitngit wala makasabut niini." }
    ]
  },
  "Psalms": {
    23: [
      { v:1, en:"The Lord is my shepherd; I shall not want.", ceb:"Si Jehova mao ang akong magbalantay; ako dili makulangan." },
      { v:2, en:"He maketh me to lie down in green pastures: he leadeth me beside the still waters.", ceb:"Siya nagpahulay kanako sa mga sibsibanan nga lunhaw: siya nagatultol kanako sa daplin sa mga tubig nga malinawon." },
      { v:3, en:"He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.", ceb:"Siya nagapasig-uli sa akong kalag: siya nagatultol kanako sa mga alagianan sa pagkamatarung tungod sa iyang ngalan." },
      { v:4, en:"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.", ceb:"Bisan pa maglakaw ako sa walog sa landong sa kamatayon, ako dili mahadlok sa kadautan: kay ikaw kauban ko." }
    ]
  }
};

/* ---------------------------------------------------------
   3. DICTIONARY DATA
   --------------------------------------------------------- */
const DICTIONARY = [
  { term:"Baal", category:"Deity", definition:"Canaanite fertility god worshipped by surrounding pagan nations; frequently condemned in Scripture as a rival to worship of the true God.", origin:"Canaanite", references:"Judges 2:11, 1 Kings 18" },
  { term:"Messiah", category:"Title", definition:"Hebrew word meaning \"Anointed One,\" referring to the promised deliverer and king foretold throughout the Old Testament.", origin:"Hebrew", references:"Daniel 9:25-26" },
  { term:"Jerusalem", category:"Place", definition:"Holy city and capital of Israel, center of Jewish worship and the site of Solomon's Temple.", origin:"Hebrew", references:"2 Samuel 5:6-10" },
  { term:"Ark of the Covenant", category:"Object", definition:"Sacred gold-covered chest containing the tablets of the Law, a symbol of God's presence among His people.", origin:"Israelite", references:"Exodus 25:10-22" },
  { term:"Tabernacle", category:"Place", definition:"Portable sanctuary used by the Israelites for worship during their wilderness wanderings.", origin:"Hebrew", references:"Exodus 25-27" },
  { term:"Sabbath", category:"Concept", definition:"The seventh day, set apart as a day of rest and worship, commanded as part of the Law given to Israel.", origin:"Hebrew", references:"Exodus 20:8-11" }
];

/* ---------------------------------------------------------
   4. QUIZ QUESTIONS
   --------------------------------------------------------- */
const QUIZ_QUESTIONS = {
  old: [
    { q:"Who led the Israelites out of Egypt?", options:["Moses","Joshua","Aaron","Abraham"], answer:0 },
    { q:"How many days did it take God to create the world?", options:["5","6","7","10"], answer:1 },
    { q:"Who was thrown into the lions' den?", options:["David","Daniel","Elijah","Samuel"], answer:1 },
    { q:"Who built the ark before the flood?", options:["Noah","Abraham","Job","Enoch"], answer:0 },
    { q:"Which king was known for his great wisdom?", options:["Saul","David","Solomon","Hezekiah"], answer:2 }
  ],
  new: [
    { q:"In which town was Jesus born?", options:["Nazareth","Jerusalem","Bethlehem","Capernaum"], answer:2 },
    { q:"How many disciples did Jesus choose?", options:["10","12","7","14"], answer:1 },
    { q:"Who baptized Jesus in the Jordan River?", options:["Peter","John the Baptist","Andrew","Philip"], answer:1 },
    { q:"Who denied Jesus three times?", options:["Judas","Thomas","Peter","John"], answer:2 },
    { q:"On the road to which city did Paul encounter a blinding light?", options:["Damascus","Rome","Corinth","Ephesus"], answer:0 }
  ]
};
QUIZ_QUESTIONS.all = [...QUIZ_QUESTIONS.old, ...QUIZ_QUESTIONS.new];

/* ---------------------------------------------------------
   5. STATE
   --------------------------------------------------------- */
const state = {
  currentScreen: "bible",
  quizCategory: "old",
  quizStats: { total: 0, correct: 0 },
  quizSession: null // { questions, index, correctInSession }
};

/* ---------------------------------------------------------
   6. INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  initBookSelectors();
  initSearch();
  initNav();
  initQuiz();
  initDictionary();
  initSettings();
  renderVerses("John", 1); // default view
});

/* ---------------------------------------------------------
   7. SPLASH SCREEN
   --------------------------------------------------------- */
function initSplash(){
  const splash = document.getElementById("splash-screen");
  const app = document.getElementById("app");
  setTimeout(() => {
    splash.style.display = "none";
    app.classList.remove("hidden");
  }, 2600);
}

/* ---------------------------------------------------------
   8. BOOK / CHAPTER SELECTORS
   --------------------------------------------------------- */
function initBookSelectors(){
  const bookSelect = document.getElementById("book-select");
  const chapterSelect = document.getElementById("chapter-select");

  Object.entries(BOOKS).forEach(([testament, books]) => {
    const group = document.createElement("optgroup");
    group.label = testament;
    books.forEach(book => {
      const opt = document.createElement("option");
      opt.value = book;
      opt.textContent = book;
      if (book === "John") opt.selected = true;
      group.appendChild(opt);
    });
    bookSelect.appendChild(group);
  });

  populateChapters(1);
  chapterSelect.value = 1;

  bookSelect.addEventListener("change", () => {
    populateChapters(1);
    renderVerses(bookSelect.value, Number(chapterSelect.value));
  });

  chapterSelect.addEventListener("change", () => {
    renderVerses(bookSelect.value, Number(chapterSelect.value));
  });
}

function populateChapters(defaultChapter){
  const chapterSelect = document.getElementById("chapter-select");
  chapterSelect.innerHTML = "";
  for (let i = 1; i <= 5; i++){
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = "Chapter " + i;
    chapterSelect.appendChild(opt);
  }
  chapterSelect.value = defaultChapter;
}

/* ---------------------------------------------------------
   9. VERSE RENDERING
   --------------------------------------------------------- */
function renderVerses(book, chapter){
  const cebList = document.getElementById("verse-list-cebuano");
  const engList = document.getElementById("verse-list-english");
  const data = VERSES[book] && VERSES[book][chapter];

  cebList.innerHTML = "";
  engList.innerHTML = "";

  if (!data){
    const msg = `<div class="verse-empty">Text for ${escapeHtml(book)} ${chapter} isn't loaded in this sample yet. Try John 1 or Psalms 23.</div>`;
    cebList.innerHTML = msg;
    engList.innerHTML = msg;
    return;
  }

  data.forEach(verse => {
    cebList.insertAdjacentHTML("beforeend",
      `<div class="verse-item"><span class="verse-num">${verse.v}</span>${escapeHtml(verse.ceb)}</div>`);
    engList.insertAdjacentHTML("beforeend",
      `<div class="verse-item"><span class="verse-num">${verse.v}</span>${escapeHtml(verse.en)}</div>`);
  });
}

/* ---------------------------------------------------------
   10. SEARCH (Bible screen)
   --------------------------------------------------------- */
function initSearch(){
  const toggle = document.getElementById("search-toggle");
  const bar = document.getElementById("search-bar");
  const input = document.getElementById("verse-search-input");
  const bookSelect = document.getElementById("book-select");

  toggle.addEventListener("click", () => {
    bar.classList.toggle("hidden");
    if (!bar.classList.contains("hidden")) input.focus();
  });

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    if (!term) return;
    const match = Array.from(bookSelect.options).find(o => o.value.toLowerCase().startsWith(term));
    if (match){
      bookSelect.value = match.value;
      populateChapters(1);
      renderVerses(match.value, 1);
    }
  });
}

/* ---------------------------------------------------------
   11. BOTTOM NAVIGATION
   --------------------------------------------------------- */
function initNav(){
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.screen;
      switchScreen(target);
      navButtons.forEach(b => b.classList.toggle("active", b === btn));
    });
  });
}

function switchScreen(name){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active-screen"));
  document.getElementById(`screen-${name}`).classList.add("active-screen");
  state.currentScreen = name;
}

/* ---------------------------------------------------------
   12. QUIZ SCREEN
   --------------------------------------------------------- */
function initQuiz(){
  const catButtons = document.querySelectorAll(".quiz-cat-btn");
  const startBtn = document.getElementById("start-quiz-btn");
  const playArea = document.getElementById("quiz-play-area");
  const note = document.getElementById("quiz-note");

  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.toggle("active", b === btn));
      state.quizCategory = btn.dataset.cat;
      playArea.classList.add("hidden");
      playArea.innerHTML = "";
      note.classList.remove("hidden");
    });
  });

  startBtn.addEventListener("click", () => {
    const questions = shuffle([...QUIZ_QUESTIONS[state.quizCategory]]);
    state.quizSession = { questions, index: 0, correctInSession: 0 };
    note.classList.add("hidden");
    playArea.classList.remove("hidden");
    renderQuizQuestion();
  });

  updateQuizStatsDisplay();
}

function renderQuizQuestion(){
  const playArea = document.getElementById("quiz-play-area");
  const session = state.quizSession;

  if (session.index >= session.questions.length){
    const pct = Math.round((session.correctInSession / session.questions.length) * 100);
    playArea.innerHTML = `
      <div class="quiz-question-card quiz-result-card">
        <i class="fa-solid fa-award"></i>
        <div class="quiz-result-title">Quiz complete</div>
        <div class="quiz-result-sub">You scored ${session.correctInSession} of ${session.questions.length} (${pct}%)</div>
      </div>`;
    return;
  }

  const item = session.questions[session.index];
  const card = document.createElement("div");
  card.className = "quiz-question-card";
  card.innerHTML = `
    <div class="quiz-question-meta">Question ${session.index + 1} of ${session.questions.length}</div>
    <div class="quiz-question-text">${escapeHtml(item.q)}</div>
    <div class="quiz-options"></div>
    <div class="quiz-progress"></div>
  `;
  const optWrap = card.querySelector(".quiz-options");

  item.options.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = optText;
    btn.addEventListener("click", () => handleQuizAnswer(i, item, card));
    optWrap.appendChild(btn);
  });

  playArea.innerHTML = "";
  playArea.appendChild(card);
}

function handleQuizAnswer(selectedIndex, item, card){
  const options = card.querySelectorAll(".quiz-option");
  options.forEach(o => o.setAttribute("disabled", "true"));

  const isCorrect = selectedIndex === item.answer;
  options[item.answer].classList.add("correct");
  if (!isCorrect) options[selectedIndex].classList.add("incorrect");

  state.quizStats.total += 1;
  if (isCorrect) state.quizStats.correct += 1;
  if (isCorrect) state.quizSession.correctInSession += 1;
  updateQuizStatsDisplay();

  const nextBtn = document.createElement("button");
  nextBtn.className = "quiz-next-btn";
  nextBtn.textContent = state.quizSession.index + 1 < state.quizSession.questions.length ? "Next" : "Finish";
  nextBtn.addEventListener("click", () => {
    state.quizSession.index += 1;
    renderQuizQuestion();
  });
  card.appendChild(nextBtn);
}

function updateQuizStatsDisplay(){
  const { total, correct } = state.quizStats;
  document.getElementById("stat-total").textContent = total;
  document.getElementById("stat-correct").textContent = correct;
  document.getElementById("stat-accuracy").textContent = total > 0 ? Math.round((correct / total) * 100) + "%" : "0%";
}

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------------------------------------------------------
   13. DICTIONARY SCREEN
   --------------------------------------------------------- */
function initDictionary(){
  const input = document.getElementById("dict-search-input");
  renderDictionary(DICTIONARY);

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    const filtered = DICTIONARY.filter(entry =>
      entry.term.toLowerCase().includes(term) ||
      entry.definition.toLowerCase().includes(term) ||
      entry.category.toLowerCase().includes(term)
    );
    renderDictionary(filtered);
  });
}

function renderDictionary(entries){
  const list = document.getElementById("dictionary-list");
  list.innerHTML = "";

  if (entries.length === 0){
    list.innerHTML = `<div class="dict-empty">No entries match your search.</div>`;
    return;
  }

  entries.forEach(entry => {
    list.insertAdjacentHTML("beforeend", `
      <div class="dict-entry">
        <div class="dict-entry-head">
          <span class="dict-term">${escapeHtml(entry.term)}</span>
          <span class="dict-category">${escapeHtml(entry.category)}</span>
        </div>
        <div class="dict-definition">${escapeHtml(entry.definition)}</div>
        <div class="dict-meta">
          <span><strong>Origin:</strong> ${escapeHtml(entry.origin)}</span>
          <span><strong>References:</strong> ${escapeHtml(entry.references)}</span>
        </div>
      </div>
    `);
  });
}

/* ---------------------------------------------------------
   14. SETTINGS SCREEN
   --------------------------------------------------------- */
function initSettings(){
  const themeButtons = document.querySelectorAll(".theme-btn");
  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      themeButtons.forEach(b => b.classList.toggle("active", b === btn));
      document.body.classList.toggle("theme-dark", btn.dataset.theme === "dark");
    });
  });
}

/* ---------------------------------------------------------
   15. UTILITIES
   --------------------------------------------------------- */
function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
