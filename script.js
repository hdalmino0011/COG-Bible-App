/* =========================================================
   COG (T.J.R) BIBLE - APPLICATION LOGIC
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   1. BIBLE BOOK LIST (66 books)
   --------------------------------------------------------- */
const BOOKS = {
  "Old Testament": [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings",
    "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther",
    "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon",
    "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel",
    "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
    "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"
  ],
  "New Testament": [
    "Matthew", "Mark", "Luke", "John", "Acts",
    "Romans", "1 Corinthians", "2 Corinthians",
    "Galatians", "Ephesians", "Philippians", "Colossians",
    "1 Thessalonians", "2 Thessalonians",
    "1 Timothy", "2 Timothy", "Titus", "Philemon",
    "Hebrews", "James", "1 Peter", "2 Peter",
    "1 John", "2 John", "3 John", "Jude", "Revelation"
  ]
};

const ALL_BOOKS = Object.values(BOOKS).flat();

/* ---------------------------------------------------------
   2. DICTIONARY DATA
   --------------------------------------------------------- */
const DICTIONARY = [
  {
    term: "YHWH (Tetragrammaton)",
    category: "Divine Name",
    shortDefinition: "The sacred four-letter Hebrew name of God (יהוה), consisting of four consonants with no vowels; the original pronunciation is unknown.",
    origin: "Hebrew",
    references: "Exodus 3:15, Exodus 6:3, Isaiah 42:8",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "The Tetragrammaton is the four-letter Hebrew name of God, written as YHWH (יהוה). It consists of four consonants with no vowels, making the original pronunciation unknown. The name is considered the most sacred name of God in the Hebrew Scriptures, appearing over 6,800 times in the Old Testament."
        },
        {
          heading: "Etymology and Meaning",
          content: "The name YHWH is derived from the Hebrew verb 'to be' (היה, hayah) and is understood to mean 'He who is' or 'I AM WHO I AM' as revealed to Moses at the burning bush (Exodus 3:14). The name signifies God's eternal, self-existent nature as the One who is, who was, and who is to come."
        },
        {
          heading: "Original Pronunciation Unknown",
          content: "Ancient Hebrew was written without vowels, so the original pronunciation of YHWH has been lost to history. The pronunciation 'YAHWEH' is a modern scholarly reconstruction, not the original pronunciation. No one knows exactly how it was pronounced in ancient times, as the vowel sounds were passed down orally and later lost. The Septuagint (Greek translation) rendered it as 'Kyrios' (Lord), and the Masoretic Text used the vowel points of 'Adonai' (Lord) as a reminder to say 'Adonai' instead of pronouncing the sacred name."
        },
        {
          heading: "Reverence and Tradition",
          content: "Due to the sanctity of the name, Jewish tradition developed the practice of saying 'Adonai' (Lord) or 'HaShem' (The Name) when reading YHWH in the Scriptures. This tradition of reverence has continued for thousands of years. Many English translations render YHWH as 'LORD' (in small caps) to follow this tradition."
        },
        {
          heading: "Significance",
          content: "The Tetragrammaton represents God's unique, personal, and covenantal name. It distinguishes the God of Israel from the gods of surrounding nations and affirms His sovereignty, faithfulness, and eternal nature. The name is a declaration of who God is - the self-existent, unchanging, and all-sufficient One."
        }
      ],
      bibleReferences: [
        "Exodus 3:14-15",
        "Exodus 6:3",
        "Exodus 20:2",
        "Deuteronomy 6:4",
        "Isaiah 42:8",
        "Isaiah 44:6",
        "Psalm 83:18",
        "Leviticus 24:16"
      ],
      externalLinks: [
        { label: "Wikipedia - Tetragrammaton", url: "https://en.wikipedia.org/wiki/Tetragrammaton" },
        { label: "Bible Hub - YHWH", url: "https://biblehub.com/hebrew/3068.htm" },
        { label: "Britannica - Tetragrammaton", url: "https://www.britannica.com/topic/Tetragrammaton" },
        { label: "Got Questions - What is YHWH?", url: "https://www.gotquestions.org/YHWH-tetragrammaton.html" }
      ]
    }
  },
  {
    term: "Baal",
    category: "Deity",
    shortDefinition: "Canaanite fertility god worshipped by surrounding pagan nations; frequently condemned in Scripture as a rival to worship of the true God.",
    origin: "Canaanite",
    references: "Judges 2:11, 1 Kings 18",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "Baal was a prominent Canaanite fertility god worshipped extensively in the ancient Near East, particularly among the Phoenicians, Philistines, and other Canaanite tribes. The name 'Baal' means 'lord' or 'master' in Semitic languages and was used as a title for various local deities."
        },
        {
          heading: "Biblical Context",
          content: "The worship of Baal is frequently condemned in the Old Testament as a rival to the worship of YHWH, the God of Israel. The Israelites were repeatedly warned against adopting Baal worship, which often involved idolatry, child sacrifice, and ritual prostitution. The prophet Elijah's confrontation with the prophets of Baal on Mount Carmel (1 Kings 18) is one of the most dramatic biblical accounts of this conflict."
        },
        {
          heading: "Significance",
          content: "Baal worship represented the constant struggle between faithfulness to God and the temptation to adopt the religious practices of surrounding nations. The biblical narrative portrays Baal as a false god who cannot answer his followers or provide for them, in contrast to the living God who hears and responds to His people."
        }
      ],
      bibleReferences: [
        "Judges 2:11",
        "Judges 3:7",
        "1 Kings 18:16-40",
        "2 Kings 10:18-28",
        "Jeremiah 2:23",
        "Hosea 2:8"
      ],
      externalLinks: [
        { label: "Wikipedia - Baal", url: "https://en.wikipedia.org/wiki/Baal" },
        { label: "Bible Hub - Baal", url: "https://biblehub.com/topical/b/baal.htm" },
        { label: "Britannica - Baal", url: "https://www.britannica.com/topic/Baal-ancient-deity" }
      ]
    }
  },
  {
    term: "Messiah",
    category: "Title",
    shortDefinition: "Hebrew word meaning \"Anointed One,\" referring to the promised deliverer and king foretold throughout the Old Testament.",
    origin: "Hebrew",
    references: "Daniel 9:25-26",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "The term 'Messiah' comes from the Hebrew word 'Mashiach,' meaning 'Anointed One.' In the Old Testament, anointing was a ceremonial act of consecrating priests, prophets, and kings, symbolizing God's chosen appointment. The Messiah concept developed into a hope for a future deliverer who would liberate Israel and establish God's kingdom under the authority of YHWH."
        },
        {
          heading: "Old Testament Prophecies",
          content: "The Old Testament contains numerous prophecies pointing to a coming Messiah. These include Isaiah's prophecy of a virgin-born son (Isaiah 7:14), Micah's prediction of a ruler born in Bethlehem (Micah 5:2), and Daniel's vision of an everlasting kingdom (Daniel 7:13-14). The Psalms also contain messianic passages that were later interpreted as referring to Jesus."
        },
        {
          heading: "New Testament Fulfillment",
          content: "Christians believe that Jesus of Nazareth is the promised Messiah. The New Testament presents Jesus as fulfilling Old Testament prophecies through his birth, life, death, and resurrection. The title 'Christ' is the Greek equivalent of 'Messiah,' and the Gospels frequently present Jesus as the fulfillment of messianic expectations, though not in the political way many first-century Jews anticipated."
        }
      ],
      bibleReferences: [
        "Isaiah 7:14",
        "Isaiah 9:6-7",
        "Micah 5:2",
        "Daniel 9:25-26",
        "Psalm 2:7",
        "Psalm 22",
        "Matthew 1:1-17",
        "Luke 24:25-27",
        "John 1:41",
        "Acts 2:36"
      ],
      externalLinks: [
        { label: "Wikipedia - Messiah", url: "https://en.wikipedia.org/wiki/Messiah" },
        { label: "Bible Hub - Messiah", url: "https://biblehub.com/topical/m/messiah.htm" },
        { label: "Britannica - Messiah", url: "https://www.britannica.com/topic/messiah-religion" },
        { label: "Got Questions - What is the Messiah?", url: "https://www.gotquestions.org/messiah.html" }
      ]
    }
  },
  {
    term: "Jerusalem",
    category: "Place",
    shortDefinition: "Holy city and capital of Israel, center of Jewish worship and the site of Solomon's Temple.",
    origin: "Hebrew",
    references: "2 Samuel 5:6-10",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "Jerusalem is one of the oldest and most historically significant cities in the world. It is considered holy by Judaism, Christianity, and Islam. Located in the Judean Mountains between the Mediterranean Sea and the Dead Sea, Jerusalem has been the spiritual and political center of the Jewish people for over 3,000 years, chosen by YHWH as the place where His name would dwell."
        },
        {
          heading: "Biblical History",
          content: "Jerusalem's significance in the Bible begins with King David, who captured the city from the Jebusites and made it his capital (2 Samuel 5:6-10). David's son Solomon built the First Temple on Mount Moriah, establishing Jerusalem as the center of Israelite worship. The city was later destroyed by the Babylonians in 586 BCE, and the Second Temple was built after the Persian exile."
        },
        {
          heading: "Spiritual Significance",
          content: "Jerusalem represents God's chosen dwelling place on earth. The Psalms express deep longing for Jerusalem (Psalm 122, 137). In the New Testament, Jesus weeps over Jerusalem (Luke 19:41-44), and the book of Revelation describes the New Jerusalem as the ultimate dwelling place of God with His people (Revelation 21)."
        }
      ],
      bibleReferences: [
        "2 Samuel 5:6-10",
        "1 Kings 8:1-21",
        "Psalm 122",
        "Psalm 137",
        "Isaiah 2:2-4",
        "Luke 19:41-44",
        "Revelation 21"
      ],
      externalLinks: [
        { label: "Wikipedia - Jerusalem", url: "https://en.wikipedia.org/wiki/Jerusalem" },
        { label: "Bible Hub - Jerusalem", url: "https://biblehub.com/topical/j/jerusalem.htm" },
        { label: "Britannica - Jerusalem", url: "https://www.britannica.com/place/Jerusalem" }
      ]
    }
  },
  {
    term: "Ark of the Covenant",
    category: "Object",
    shortDefinition: "Sacred gold-covered chest containing the tablets of the Law, a symbol of God's presence among His people.",
    origin: "Israelite",
    references: "Exodus 25:10-22",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "The Ark of the Covenant was a sacred chest constructed by the Israelites at God's command during their wilderness journey. Overlaid with gold, it contained the two stone tablets of the Ten Commandments, Aaron's rod, and a pot of manna. The Ark served as the visible symbol of God's covenant with Israel and His presence among them, representing the throne of YHWH."
        },
        {
          heading: "Construction and Purpose",
          content: "Detailed instructions for the Ark's construction are given in Exodus 25. The Ark was placed in the Most Holy Place of the Tabernacle (and later the Temple), and the mercy seat on top served as the location where God's presence would appear and where the high priest would make atonement for the people on the Day of Atonement."
        },
        {
          heading: "Significance",
          content: "The Ark represented God's throne on earth and His covenant relationship with Israel. It was carried before the people as they journeyed, and its presence brought victory in battle (Joshua 6). The loss of the Ark to the Philistines (1 Samuel 4) was a national tragedy, and its recovery demonstrated God's sovereignty over all nations."
        }
      ],
      bibleReferences: [
        "Exodus 25:10-22",
        "Exodus 37:1-9",
        "Leviticus 16",
        "Joshua 6:6-20",
        "1 Samuel 4-6",
        "2 Samuel 6:1-15",
        "Hebrews 9:1-5"
      ],
      externalLinks: [
        { label: "Wikipedia - Ark of the Covenant", url: "https://en.wikipedia.org/wiki/Ark_of_the_Covenant" },
        { label: "Bible Hub - Ark of the Covenant", url: "https://biblehub.com/topical/a/ark_of_the_covenant.htm" },
        { label: "Britannica - Ark of the Covenant", url: "https://www.britannica.com/topic/Ark-of-the-Covenant" }
      ]
    }
  },
  {
    term: "Tabernacle",
    category: "Place",
    shortDefinition: "Portable sanctuary used by the Israelites for worship during their wilderness wanderings.",
    origin: "Hebrew",
    references: "Exodus 25-27",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "The Tabernacle was a portable sanctuary that served as the dwelling place of God among the Israelites during their 40 years of wandering in the wilderness. It was a tent-like structure constructed according to detailed divine instructions given to Moses on Mount Sinai, providing a place where the presence of YHWH could dwell among His people."
        },
        {
          heading: "Construction and Layout",
          content: "The Tabernacle consisted of a courtyard with an altar of burnt offering and a laver for washing, and a covered tent divided into two sections: the Holy Place and the Most Holy Place. The Holy Place contained the golden lampstand, the table of showbread, and the altar of incense, while the Most Holy Place housed the Ark of the Covenant."
        },
        {
          heading: "Spiritual Significance",
          content: "The Tabernacle served as the focal point of Israel's worship and symbolized God's presence among His people. It represented the way to approach God through sacrifice and the high priest's ministry. The New Testament draws parallels between the Tabernacle and the work of Christ, who entered the heavenly sanctuary once for all."
        }
      ],
      bibleReferences: [
        "Exodus 25-27",
        "Exodus 36-40",
        "Leviticus 1-7",
        "Numbers 9:15-23",
        "Hebrews 8:1-5",
        "Hebrews 9:1-28"
      ],
      externalLinks: [
        { label: "Wikipedia - Tabernacle", url: "https://en.wikipedia.org/wiki/Tabernacle" },
        { label: "Bible Hub - Tabernacle", url: "https://biblehub.com/topical/t/tabernacle.htm" },
        { label: "Britannica - Tabernacle", url: "https://www.britannica.com/topic/Tabernacle" }
      ]
    }
  },
  {
    term: "Sabbath",
    category: "Concept",
    shortDefinition: "The seventh day, set apart as a day of rest and worship, commanded as part of the Law given to Israel.",
    origin: "Hebrew",
    references: "Exodus 20:8-11",
    article: {
      sections: [
        {
          heading: "Overview",
          content: "The Sabbath is the seventh day of the week, which God established as a day of rest and worship. The term comes from the Hebrew word 'Shabbat,' meaning 'to cease' or 'to rest.' The Sabbath was instituted at creation when God rested from His work and was later codified as one of the Ten Commandments."
        },
        {
          heading: "Biblical Foundation",
          content: "The Sabbath is rooted in the creation narrative (Genesis 2:2-3) and is commanded in the Ten Commandments (Exodus 20:8-11). It served as a sign of the covenant between God and Israel (Exodus 31:13-17) and a reminder of God's deliverance from Egypt (Deuteronomy 5:15). The Sabbath was to be observed as a holy day, free from regular work."
        },
        {
          heading: "New Testament Perspective",
          content: "In the New Testament, Jesus frequently clashed with religious leaders over Sabbath observance, teaching that the Sabbath was made for man's benefit and that doing good was lawful on the Sabbath (Mark 2:27-28). The early church debated the role of Sabbath observance, with the apostle Paul teaching that believers should not be judged regarding Sabbath days (Colossians 2:16-17)."
        },
        {
          heading: "Significance",
          content: "The Sabbath represents God's desire for His people to rest in Him and find refreshment. It is a weekly reminder of creation, redemption, and the ultimate rest that believers anticipate in God's eternal kingdom."
        }
      ],
      bibleReferences: [
        "Genesis 2:2-3",
        "Exodus 20:8-11",
        "Exodus 31:13-17",
        "Deuteronomy 5:12-15",
        "Isaiah 58:13-14",
        "Mark 2:27-28",
        "Luke 13:10-17",
        "Colossians 2:16-17",
        "Hebrews 4:1-11"
      ],
      externalLinks: [
        { label: "Wikipedia - Sabbath", url: "https://en.wikipedia.org/wiki/Sabbath" },
        { label: "Bible Hub - Sabbath", url: "https://biblehub.com/topical/s/sabbath.htm" },
        { label: "Britannica - Sabbath", url: "https://www.britannica.com/topic/Sabbath" },
        { label: "Got Questions - What is the Sabbath?", url: "https://www.gotquestions.org/Sabbath.html" }
      ]
    }
  }
];

/* ---------------------------------------------------------
   3. QUIZ QUESTIONS
   --------------------------------------------------------- */
const QUIZ_QUESTIONS = {
  old: [
    {
      q: "Who led the Israelites out of Egypt?",
      options: ["Moses", "Joshua", "Aaron", "Abraham"],
      answer: 0
    },
    {
      q: "How many days did it take God to create the world?",
      options: ["5", "6", "7", "10"],
      answer: 1
    },
    {
      q: "Who was thrown into the lions' den?",
      options: ["David", "Daniel", "Elijah", "Samuel"],
      answer: 1
    },
    {
      q: "Who built the ark before the flood?",
      options: ["Noah", "Abraham", "Job", "Enoch"],
      answer: 0
    },
    {
      q: "Which king was known for his great wisdom?",
      options: ["Saul", "David", "Solomon", "Hezekiah"],
      answer: 2
    }
  ],
  new: [
    {
      q: "In which town was Jesus born?",
      options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
      answer: 2
    },
    {
      q: "How many disciples did Jesus choose?",
      options: ["10", "12", "7", "14"],
      answer: 1
    },
    {
      q: "Who baptized Jesus in the Jordan River?",
      options: ["Peter", "John the Baptist", "Andrew", "Philip"],
      answer: 1
    },
    {
      q: "Who denied Jesus three times?",
      options: ["Judas", "Thomas", "Peter", "John"],
      answer: 2
    },
    {
      q: "On the road to which city did Paul encounter a blinding light?",
      options: ["Damascus", "Rome", "Corinth", "Ephesus"],
      answer: 0
    }
  ]
};

QUIZ_QUESTIONS.all = [...QUIZ_QUESTIONS.old, ...QUIZ_QUESTIONS.new];

/* ---------------------------------------------------------
   4. APPLICATION STATE
   --------------------------------------------------------- */
const state = {
  verses: {},
  bibleLoaded: false,
  currentScreen: "bible",
  currentBook: "Genesis",
  currentChapter: 1,
  selectedVerse: null,
  quizCategory: "old",
  quizStats: { total: 0, correct: 0 },
  quizSession: null,
  theme: "light",
  font: "Roboto",
  fontSize: "medium",
  longPressTimer: null
};

/* ---------------------------------------------------------
   5. LOAD BIBLE DATA FROM verses.json
   --------------------------------------------------------- */
async function loadBibleData() {
  try {
    const response = await fetch('./verses.json', { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error('HTTP error! status: ' + response.status);
    }

    state.verses = await response.json();
    state.bibleLoaded = true;

    const bookCount = Object.keys(state.verses).length;
    console.log('Bible loaded: ' + bookCount + ' books');
  } catch (error) {
    console.error('Failed to load Bible data:', error);
    state.verses = {};
  }
}

/* ---------------------------------------------------------
   6. INITIALISATION
   --------------------------------------------------------- */
async function init() {
  await loadBibleData();

  initSplash();
  initBookSelectors();
  initSearch();
  initNav();
  initQuiz();
  initDictionary();
  initSettings();
  initVerseToolbar();

  renderVerses(state.currentBook, state.currentChapter);
  loadSavedPreferences();
  registerServiceWorker();
}

/* ---------------------------------------------------------
   7. SPLASH SCREEN
   --------------------------------------------------------- */
function initSplash() {
  const splash = document.getElementById('splash-screen');
  const app = document.getElementById('app');

  setTimeout(function () {
    splash.style.display = 'none';
    app.classList.remove('hidden');
  }, 2600);
}

/* ---------------------------------------------------------
   8. BOOK / CHAPTER SELECTORS
   --------------------------------------------------------- */
function initBookSelectors() {
  const bookSelect = document.getElementById('book-select');
  const chapterSelect = document.getElementById('chapter-select');

  // Populate the book dropdown with optgroups (Old / New Testament)
  Object.entries(BOOKS).forEach(function (_ref) {
    const testament = _ref[0];
    const books = _ref[1];

    const group = document.createElement('optgroup');
    group.label = testament;

    books.forEach(function (book) {
      const opt = document.createElement('option');
      opt.value = book;
      opt.textContent = book;

      if (book === state.currentBook) {
        opt.selected = true;
      }

      group.appendChild(opt);
    });

    bookSelect.appendChild(group);
  });

  populateChapters(state.currentBook, state.currentChapter);
  chapterSelect.value = state.currentChapter;

  bookSelect.addEventListener('change', function () {
    state.currentBook = bookSelect.value;
    populateChapters(state.currentBook, 1);
    state.currentChapter = 1;
    chapterSelect.value = 1;
    renderVerses(state.currentBook, state.currentChapter);
  });

  chapterSelect.addEventListener('change', function () {
    state.currentChapter = Number(chapterSelect.value);
    renderVerses(state.currentBook, state.currentChapter);
  });
}

function populateChapters(book, defaultChapter) {
  const chapterSelect = document.getElementById('chapter-select');
  chapterSelect.innerHTML = '';

  // Dynamically list only the chapters that exist in verses.json for this book
  const bookData = state.verses[book];

  if (!bookData) {
    const opt = document.createElement('option');
    opt.value = 1;
    opt.textContent = 'No data';
    chapterSelect.appendChild(opt);
    return;
  }

  const chapterNumbers = Object.keys(bookData)
    .map(Number)
    .sort(function (a, b) { return a - b; });

  chapterNumbers.forEach(function (n) {
    const opt = document.createElement('option');
    opt.value = n;
    opt.textContent = 'Chapter ' + n;
    chapterSelect.appendChild(opt);
  });

  chapterSelect.value = defaultChapter;
}

/* ---------------------------------------------------------
   9. VERSE RENDERING
   --------------------------------------------------------- */
function renderVerses(book, chapter) {
  const rowsContainer = document.getElementById('verse-rows');
  const data = state.verses[book] && state.verses[book][chapter];

  rowsContainer.innerHTML = '';
  hideToolbar();
  state.selectedVerse = null;

  if (!data || !data.length) {
    rowsContainer.innerHTML =
      '<div class="verse-row-empty">Text for ' + escapeHtml(book) +
      ' ' + chapter + ' is not available in verses.json yet.</div>';
    return;
  }

  data.forEach(function (verse, index) {
    const row = document.createElement('div');
    row.className = 'verse-row';
    row.dataset.verse = verse.v;
    row.dataset.index = index;
    row.dataset.book = book;
    row.dataset.chapter = chapter;

    row.innerHTML =
      '<div class="verse-cell verse-cell-ceb">' +
        '<span class="verse-num">' + verse.v + '</span>' +
        '<span class="verse-text">' + escapeHtml(verse.ceb) + '</span>' +
      '</div>' +
      '<div class="verse-cell verse-cell-eng">' +
        '<span class="verse-num">' + verse.v + '</span>' +
        '<span class="verse-text">' + escapeHtml(verse.en) + '</span>' +
      '</div>';

    // Long-press event listeners for highlight / copy
    row.addEventListener('mousedown', function () { startLongPress(row); });
    row.addEventListener('mouseup', clearLongPress);
    row.addEventListener('mouseleave', clearLongPress);
    row.addEventListener('touchstart', function () { startLongPress(row); }, { passive: true });
    row.addEventListener('touchend', clearLongPress);
    row.addEventListener('touchmove', clearLongPress);

    rowsContainer.appendChild(row);
  });

  // Re-apply any saved highlights for this chapter
  loadHighlights();
}

/* ---------------------------------------------------------
   10. LONG-PRESS HANDLING
   --------------------------------------------------------- */
function startLongPress(rowEl) {
  clearTimeout(state.longPressTimer);

  state.longPressTimer = setTimeout(function () {
    selectVerse(rowEl);
  }, 500);
}

function clearLongPress() {
  clearTimeout(state.longPressTimer);
}

/* ---------------------------------------------------------
   11. VERSE SELECTION, HIGHLIGHT & COPY
   --------------------------------------------------------- */
function selectVerse(rowEl) {
  document.querySelectorAll('.verse-row.selected').forEach(function (el) {
    el.classList.remove('selected');
  });

  rowEl.classList.add('selected');

  state.selectedVerse = {
    rowEl: rowEl,
    book: rowEl.dataset.book,
    chapter: rowEl.dataset.chapter,
    verse: rowEl.dataset.verse
  };

  document.getElementById('verse-toolbar').classList.remove('hidden');
}

function hideToolbar() {
  const toolbar = document.getElementById('verse-toolbar');
  if (!toolbar) return;
  toolbar.classList.add('hidden');
  document.querySelectorAll('.verse-row.selected').forEach(function (el) {
    el.classList.remove('selected');
  });
  state.selectedVerse = null;
}

function initVerseToolbar() {
  document.querySelectorAll('.highlight-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyHighlight(btn.dataset.color);
    });
  });

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyVerse(btn.dataset.version);
    });
  });

  document.getElementById('toolbar-close').addEventListener('click', hideToolbar);
}

function applyHighlight(color) {
  if (!state.selectedVerse) {
    showToast('Long-press a verse first');
    return;
  }

  const rowEl = state.selectedVerse.rowEl;
  const highlightClasses = ['highlight-yellow', 'highlight-pink', 'highlight-green', 'highlight-blue'];

  highlightClasses.forEach(function (cls) {
    rowEl.classList.remove(cls);
  });

  if (color !== 'none') {
    rowEl.classList.add('highlight-' + color);
  }

  saveHighlights();
  showToast(color === 'none' ? 'Highlight cleared' : 'Highlighted ' + color);
}

function copyVerse(version) {
  if (!state.selectedVerse) {
    showToast('Long-press a verse first');
    return;
  }

  const rowEl = state.selectedVerse.rowEl;
  const reference = state.selectedVerse.book + ' ' +
                    state.selectedVerse.chapter + ':' +
                    state.selectedVerse.verse;

  let text = '';

  if (version === 'cebuano' || version === 'both') {
    const cebText = rowEl.querySelector('.verse-cell-ceb .verse-text')?.textContent || '';
    text += reference + ' (Cebuano)\n' + cebText + '\n\n';
  }

  if (version === 'english' || version === 'both') {
    const engText = rowEl.querySelector('.verse-cell-eng .verse-text')?.textContent || '';
    text += reference + ' (English)\n' + engText;
  }

  text = text.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(function () { showToast('Copied to clipboard'); })
      .catch(function () { fallbackCopy(text); });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showToast('Copied to clipboard');
  } catch (e) {
    showToast('Copy failed');
  }

  document.body.removeChild(textarea);
}

/* ---------------------------------------------------------
   12. HIGHLIGHT PERSISTENCE (localStorage)
   --------------------------------------------------------- */
function saveHighlights() {
  const highlights = {};

  document.querySelectorAll('.verse-row[class*="highlight-"]').forEach(function (el) {
    const match = el.className.match(/highlight-(yellow|pink|green|blue)/);
    if (match) {
      const key = el.dataset.book + '|' + el.dataset.chapter + '|' + el.dataset.verse;
      highlights[key] = match[1];
    }
  });

  localStorage.setItem('cog_highlights', JSON.stringify(highlights));
}

function loadHighlights() {
  const data = localStorage.getItem('cog_highlights');
  if (!data) return;

  try {
    const highlights = JSON.parse(data);

    document.querySelectorAll('.verse-row').forEach(function (el) {
      const key = el.dataset.book + '|' + el.dataset.chapter + '|' + el.dataset.verse;
      if (highlights[key]) {
        el.classList.add('highlight-' + highlights[key]);
      }
    });
  } catch (e) {
    // ignore corrupted storage
  }
}

/* ---------------------------------------------------------
   13. SEARCH
   --------------------------------------------------------- */
function initSearch() {
  const toggle = document.getElementById('search-toggle');
  const bar = document.getElementById('search-bar');
  const input = document.getElementById('verse-search-input');
  const submitBtn = document.getElementById('search-submit');
  const datalist = document.getElementById('book-suggestions');

  // Populate the book-name suggestion list
  ALL_BOOKS.forEach(function (book) {
    const opt = document.createElement('option');
    opt.value = book;
    datalist.appendChild(opt);
  });

  toggle.addEventListener('click', function () {
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) {
      input.focus();
    }
  });

  submitBtn.addEventListener('click', performSearch);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

function performSearch() {
  const input = document.getElementById('verse-search-input');
  const query = input.value.trim();

  if (!query) return;

  // Try "Book Chapter:Verse" format (e.g. "John 3:16")
  const verseRefMatch = query.match(/^(\d?\s*[A-Za-z]+(?:\s+\d+)?)\s+(\d+):(\d+)$/i);
  if (verseRefMatch) {
    const bookName = verseRefMatch[1].trim();
    const chapterNum = parseInt(verseRefMatch[2], 10);
    const verseNum = parseInt(verseRefMatch[3], 10);
    const matchedBook = matchBook(bookName);

    if (matchedBook && hasVerse(matchedBook, chapterNum, verseNum)) {
      navigateToVerse(matchedBook, chapterNum, verseNum);
      showToast('Found ' + matchedBook + ' ' + chapterNum + ':' + verseNum);
      return;
    }
    showToast('"' + query + '" not found');
    return;
  }

  // Try "Book Chapter" format (e.g. "Psalm 23")
  const bookChapterMatch = query.match(/^(\d?\s*[A-Za-z]+(?:\s+\d+)?)\s+(\d+)$/i);
  if (bookChapterMatch) {
    const bookName = bookChapterMatch[1].trim();
    const chapterNum = parseInt(bookChapterMatch[2], 10);
    const matchedBook = matchBook(bookName);

    if (matchedBook && hasChapter(matchedBook, chapterNum)) {
      navigateToChapter(matchedBook, chapterNum);
      showToast('Found ' + matchedBook + ' ' + chapterNum);
      return;
    }
    showToast('"' + query + '" not found');
    return;
  }

  // Try just a book name (e.g. "Genesis")
  const bookMatch = matchBook(query);
  if (bookMatch) {
    navigateToChapter(bookMatch, 1);
    showToast('Found ' + bookMatch + ' 1');
    return;
  }

  // Full-text search across all loaded verses
  const results = searchVerses(query);

  if (results.length === 0) {
    showToast('No results for "' + query + '"');
    return;
  }

  navigateToVerse(results[0].book, results[0].chapter, results[0].verse);
  showToast(results.length + ' result(s) for "' + query + '"');
}

function matchBook(name) {
  const lower = name.toLowerCase().replace(/\s+/g, ' ').trim();
  return ALL_BOOKS.find(function (b) {
    return b.toLowerCase() === lower;
  }) || null;
}

function hasChapter(book, chapter) {
  return !!(state.verses[book] && state.verses[book][chapter]);
}

function hasVerse(book, chapter, verse) {
  const data = state.verses[book] && state.verses[book][chapter];
  return !!(data && data.find(function (v) { return v.v === verse; }));
}

function searchVerses(query) {
  const q = query.toLowerCase();
  const out = [];

  for (const [book, chapters] of Object.entries(state.verses)) {
    for (const [chapter, verses] of Object.entries(chapters)) {
      for (const v of verses) {
        const enMatch = v.en && v.en.toLowerCase().includes(q);
        const cebMatch = v.ceb && v.ceb.toLowerCase().includes(q);
        if (enMatch || cebMatch) {
          out.push({ book: book, chapter: parseInt(chapter, 10), verse: v.v });
        }
      }
    }
  }

  return out;
}

function navigateToChapter(book, chapter) {
  document.getElementById('book-select').value = book;
  populateChapters(book, chapter);
  document.getElementById('chapter-select').value = chapter;
  state.currentBook = book;
  state.currentChapter = chapter;
  renderVerses(book, chapter);
}

function navigateToVerse(book, chapter, verse) {
  navigateToChapter(book, chapter);

  setTimeout(function () {
    const row = document.querySelector('.verse-row[data-verse="' + verse + '"]');
    if (row) {
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      row.style.backgroundColor = 'rgba(201, 162, 39, 0.18)';
      setTimeout(function () {
        row.style.backgroundColor = '';
      }, 2000);
    }
  }, 300);
}

/* ---------------------------------------------------------
   14. TOAST NOTIFICATION
   --------------------------------------------------------- */
let toastTimer;

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');
  void toast.offsetWidth; // force reflow
  toast.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () {
      toast.classList.add('hidden');
    }, 300);
  }, 2800);
}

/* ---------------------------------------------------------
   15. BOTTOM NAVIGATION
   --------------------------------------------------------- */
function initNav() {
  const navButtons = document.querySelectorAll('.nav-btn');

  navButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.dataset.screen;
      switchScreen(target);
      hideToolbar();
    });
  });
}

function switchScreen(name) {
  document.querySelectorAll('.screen').forEach(function (s) {
    s.classList.remove('active-screen');
  });

  document.getElementById('screen-' + name).classList.add('active-screen');

  document.querySelectorAll('.nav-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.screen === name);
  });

  state.currentScreen = name;
}

/* ---------------------------------------------------------
   16. QUIZ SCREEN
   --------------------------------------------------------- */
function initQuiz() {
  const catButtons = document.querySelectorAll('.quiz-cat-btn');
  const startBtn = document.getElementById('start-quiz-btn');
  const playArea = document.getElementById('quiz-play-area');
  const note = document.getElementById('quiz-note');

  catButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catButtons.forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
      state.quizCategory = btn.dataset.cat;
      playArea.classList.add('hidden');
      playArea.innerHTML = '';
      note.classList.remove('hidden');
    });
  });

  startBtn.addEventListener('click', function () {
    const questions = shuffle([...QUIZ_QUESTIONS[state.quizCategory]]);
    state.quizSession = { questions: questions, index: 0, correct: 0 };
    note.classList.add('hidden');
    playArea.classList.remove('hidden');
    renderQuizQuestion();
  });

  updateQuizStats();
}

function renderQuizQuestion() {
  const playArea = document.getElementById('quiz-play-area');
  const session = state.quizSession;

  // Quiz finished - show results
  if (session.index >= session.questions.length) {
    const pct = Math.round((session.correct / session.questions.length) * 100);
    playArea.innerHTML =
      '<div class="quiz-question-card quiz-result-card">' +
        '<i class="fa-solid fa-award"></i>' +
        '<div class="quiz-result-title">Quiz complete</div>' +
        '<div class="quiz-result-sub">You scored ' + session.correct +
        ' of ' + session.questions.length + ' (' + pct + '%)</div>' +
      '</div>';
    return;
  }

  const item = session.questions[session.index];
  const card = document.createElement('div');
  card.className = 'quiz-question-card';

  card.innerHTML =
    '<div class="quiz-question-meta">Question ' + (session.index + 1) +
    ' of ' + session.questions.length + '</div>' +
    '<div class="quiz-question-text">' + escapeHtml(item.q) + '</div>';

  item.options.forEach(function (optText, i) {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = optText;
    btn.addEventListener('click', function () {
      handleQuizAnswer(i, item, card);
    });
    card.appendChild(btn);
  });

  playArea.innerHTML = '';
  playArea.appendChild(card);
}

function handleQuizAnswer(selectedIndex, item, card) {
  const options = card.querySelectorAll('.quiz-option');
  options.forEach(function (o) { o.setAttribute('disabled', 'true'); });

  const isCorrect = selectedIndex === item.answer;
  options[item.answer].classList.add('correct');
  if (!isCorrect) {
    options[selectedIndex].classList.add('incorrect');
  }

  state.quizStats.total += 1;
  if (isCorrect) {
    state.quizStats.correct += 1;
    state.quizSession.correct += 1;
  }

  updateQuizStats();

  const nextBtn = document.createElement('button');
  nextBtn.className = 'quiz-next-btn';
  nextBtn.textContent =
    state.quizSession.index + 1 < state.quizSession.questions.length ? 'Next' : 'Finish';
  nextBtn.addEventListener('click', function () {
    state.quizSession.index += 1;
    renderQuizQuestion();
  });

  card.appendChild(nextBtn);
}

function updateQuizStats() {
  const total = state.quizStats.total;
  const correct = state.quizStats.correct;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-accuracy').textContent =
    total > 0 ? Math.round((correct / total) * 100) + '%' : '0%';
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

/* ---------------------------------------------------------
   17. DICTIONARY SCREEN
   --------------------------------------------------------- */
function initDictionary() {
  const input = document.getElementById('dict-search-input');
  const backBtn = document.getElementById('dict-back-btn');

  renderDictionaryList(DICTIONARY);

  input.addEventListener('input', function () {
    const term = input.value.trim().toLowerCase();
    const filtered = DICTIONARY.filter(function (entry) {
      return (
        entry.term.toLowerCase().includes(term) ||
        entry.shortDefinition.toLowerCase().includes(term) ||
        entry.category.toLowerCase().includes(term)
      );
    });
    renderDictionaryList(filtered);
  });

  backBtn.addEventListener('click', showDictionaryListView);
}

function renderDictionaryList(entries) {
  const list = document.getElementById('dictionary-list');
  list.innerHTML = '';

  if (entries.length === 0) {
    list.innerHTML = '<div class="dict-empty">No entries match your search.</div>';
    return;
  }

  entries.forEach(function (entry) {
    const div = document.createElement('div');
    div.className = 'dict-entry';

    div.innerHTML =
      '<div class="dict-entry-head">' +
        '<span class="dict-term">' + escapeHtml(entry.term) + '</span>' +
        '<span class="dict-category">' + escapeHtml(entry.category) + '</span>' +
      '</div>' +
      '<div class="dict-definition">' + escapeHtml(entry.shortDefinition) + '</div>' +
      '<div class="dict-meta">' +
        '<span><strong>Origin:</strong> ' + escapeHtml(entry.origin) + '</span>' +
        '<span><strong>References:</strong> ' + escapeHtml(entry.references) + '</span>' +
      '</div>' +
      '<div class="dict-click-hint">' +
        '<i class="fa-solid fa-arrow-right"></i> Tap to read full article' +
      '</div>';

    div.addEventListener('click', function () {
      showDictionaryArticle(entry);
    });

    list.appendChild(div);
  });
}

function showDictionaryArticle(entry) {
  const listView = document.getElementById('dictionary-list-view');
  const articleView = document.getElementById('dictionary-article-view');
  const content = document.getElementById('dictionary-article-content');
  const backBtn = document.getElementById('dict-back-btn');

  listView.style.display = 'none';
  articleView.classList.remove('hidden');
  backBtn.style.display = 'flex';

  let html =
    '<div class="dict-article-back" id="article-back-btn">' +
      '<i class="fa-solid fa-arrow-left"></i> Back to Dictionary' +
    '</div>' +
    '<h1 class="dict-article-title">' + escapeHtml(entry.term) + '</h1>' +
    '<div class="dict-article-category">' + escapeHtml(entry.category) + '</div>';

  // Article sections
  if (entry.article && entry.article.sections) {
    entry.article.sections.forEach(function (section) {
      html +=
        '<div class="dict-article-section">' +
          '<h3>' + escapeHtml(section.heading) + '</h3>' +
          '<p>' + escapeHtml(section.content) + '</p>' +
        '</div>';
    });
  }

  // Bible references (clickable)
  if (entry.article && entry.article.bibleReferences && entry.article.bibleReferences.length > 0) {
    html += '<div class="dict-article-section"><h3>Bible References</h3><p>';
    entry.article.bibleReferences.forEach(function (ref) {
      html +=
        '<span class="dict-article-bible-ref" data-ref="' + escapeHtml(ref) + '">' +
        escapeHtml(ref) + '</span> ';
    });
    html += '</p></div>';
  }

  // External links
  if (entry.article && entry.article.externalLinks && entry.article.externalLinks.length > 0) {
    html += '<div class="dict-article-section"><h3>External Resources</h3><p>';
    entry.article.externalLinks.forEach(function (link) {
      html +=
        '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer" ' +
        'class="dict-article-external-link">' +
        '<i class="fa-solid fa-external-link-alt"></i> ' + escapeHtml(link.label) +
        '</a><br>';
    });
    html += '</p></div>';
  }

  content.innerHTML = html;

  // Wire up the inline back button
  document.getElementById('article-back-btn').addEventListener('click', showDictionaryListView);

  // Wire up Bible reference clicks
  document.querySelectorAll('.dict-article-bible-ref').forEach(function (el) {
    el.addEventListener('click', function () {
      handleBibleReferenceClick(el.dataset.ref);
    });
  });
}

function showDictionaryListView() {
  const listView = document.getElementById('dictionary-list-view');
  const articleView = document.getElementById('dictionary-article-view');
  const backBtn = document.getElementById('dict-back-btn');

  listView.style.display = 'block';
  articleView.classList.add('hidden');
  backBtn.style.display = 'none';
}

function handleBibleReferenceClick(ref) {
  const match = ref.match(/^(\d?\s*[A-Za-z]+(?:\s+\d+)?)\s+(\d+):(\d+)/);

  if (!match) {
    showToast('Cannot open "' + ref + '"');
    return;
  }

  const bookName = match[1].trim();
  const chapterNum = parseInt(match[2], 10);
  const verseNum = parseInt(match[3], 10);
  const matchedBook = matchBook(bookName);

  if (matchedBook && hasVerse(matchedBook, chapterNum, verseNum)) {
    switchScreen('bible');
    navigateToVerse(matchedBook, chapterNum, verseNum);
    showToast('Opened ' + ref);
  } else {
    showToast('"' + ref + '" is not available in verses.json');
  }
}

/* ---------------------------------------------------------
   18. SETTINGS SCREEN
   --------------------------------------------------------- */
function initSettings() {
  const themeButtons = document.querySelectorAll('.theme-btn');
  const fontButtons = document.querySelectorAll('.font-btn');
  const fontSizeButtons = document.querySelectorAll('.font-size-btn');

  themeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      themeButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const theme = btn.dataset.theme;
      applyTheme(theme);
      state.theme = theme;
      localStorage.setItem('cog_theme', theme);
    });
  });

  fontButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      fontButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const font = btn.dataset.font;
      applyFont(font);
      state.font = font;
      localStorage.setItem('cog_font', font);
    });
  });

  fontSizeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      fontSizeButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const size = btn.dataset.size;
      applyFontSize(size);
      state.fontSize = size;
      localStorage.setItem('cog_fontsize', size);
    });
  });
}

function applyTheme(theme) {
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-sepia', 'theme-blue');
  document.body.classList.add('theme-' + theme);
}

function applyFont(font) {
  document.body.classList.remove('font-roboto', 'font-times', 'font-georgia', 'font-arial');

  const fontMap = {
    'Roboto': 'font-roboto',
    'Times New Roman': 'font-times',
    'Georgia': 'font-georgia',
    'Arial': 'font-arial'
  };

  if (fontMap[font]) {
    document.body.classList.add(fontMap[font]);
  }

  document.documentElement.style.setProperty('--app-font', "'" + font + "', sans-serif");
}

function applyFontSize(size) {
  document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
  document.body.classList.add('font-size-' + size);
}

function loadSavedPreferences() {
  // Theme
  const savedTheme = localStorage.getItem('cog_theme') || 'light';
  applyTheme(savedTheme);
  state.theme = savedTheme;
  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.theme === savedTheme);
  });

  // Font
  const savedFont = localStorage.getItem('cog_font') || 'Roboto';
  applyFont(savedFont);
  state.font = savedFont;
  document.querySelectorAll('.font-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.font === savedFont);
  });

  // Font size
  const savedFontSize = localStorage.getItem('cog_fontsize') || 'medium';
  applyFontSize(savedFontSize);
  state.fontSize = savedFontSize;
  document.querySelectorAll('.font-size-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.size === savedFontSize);
  });

  // Re-apply highlights after preferences load
  setTimeout(loadHighlights, 300);
}

/* ---------------------------------------------------------
   19. UTILITIES
   --------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------
   20. SERVICE WORKER REGISTRATION
   --------------------------------------------------------- */
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('./service-worker.js')
    .then(function (registration) {
      // Listen for updates and auto-refresh when a new SW is installed
      registration.addEventListener('updatefound', function () {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener('statechange', function () {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showToast('Update available - refreshing...');
            setTimeout(function () {
              location.reload();
            }, 1200);
          }
        });
      });
    })
    .catch(function (error) {
      console.warn('Service Worker registration failed:', error);
    });
}

/* ---------------------------------------------------------
   21. START
   --------------------------------------------------------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
