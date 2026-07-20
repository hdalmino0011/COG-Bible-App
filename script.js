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

// Flatten book list for suggestions
const ALL_BOOKS = Object.values(BOOKS).flat();

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
   3. DICTIONARY DATA - EXPANDED WITH FULL ARTICLES
   CORRECTED: YHWH/Tetragrammaton entry added, Yahweh references removed
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
          content: "The Tetragrammaton represents God's unique, personal, and covenantal name. It distinguishes the God of Israel from the gods of surrounding nations and affirms His sovereignty, faithfulness, and eternal nature. The name is a declaration of who God is — the self-existent, unchanging, and all-sufficient One."
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
  quizSession: null,
  currentBook: "John",
  currentChapter: 1,
  selectedVerse: null,
  highlightColor: null,
  theme: "light",
  font: "Roboto",
  fontSize: "medium",
  longPressTimer: null,
  isLongPress: false,
  currentArticle: null
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
  initVerseToolbar();
  renderVerses("John", 1);
  registerServiceWorker();
  loadSavedPreferences();
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
    state.currentBook = bookSelect.value;
    populateChapters(1);
    state.currentChapter = 1;
    chapterSelect.value = 1;
    renderVerses(state.currentBook, state.currentChapter);
  });

  chapterSelect.addEventListener("change", () => {
    state.currentChapter = Number(chapterSelect.value);
    renderVerses(state.currentBook, state.currentChapter);
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
   9. VERSE RENDERING — unified rows (Cebuano + English in one row)
   --------------------------------------------------------- */
function renderVerses(book, chapter){
  const rowsContainer = document.getElementById("verse-rows");
  const data = VERSES[book] && VERSES[book][chapter];

  rowsContainer.innerHTML = "";
  document.getElementById("verse-toolbar").classList.add("hidden");
  state.selectedVerse = null;

  if (!data){
    rowsContainer.innerHTML =
      `<div class="verse-row-empty">Text for ${escapeHtml(book)} ${chapter} isn't loaded in this sample yet. Try John 1 or Psalms 23.</div>`;
    return;
  }

  data.forEach((verse, index) => {
    const row = document.createElement("div");
    row.className = "verse-row";
    row.dataset.verse = verse.v;
    row.dataset.index = index;
    row.dataset.book = book;
    row.dataset.chapter = chapter;

    row.innerHTML = `
      <div class="verse-cell verse-cell-ceb">
        <span class="verse-num">${verse.v}</span>
        <span class="verse-text">${escapeHtml(verse.ceb)}</span>
      </div>
      <div class="verse-cell verse-cell-eng">
        <span class="verse-num">${verse.v}</span>
        <span class="verse-text">${escapeHtml(verse.en)}</span>
      </div>
    `;

    row.addEventListener("mousedown", (e) => startLongPress(e, row, book, chapter, verse.v, index));
    row.addEventListener("mouseup", () => clearLongPress());
    row.addEventListener("mouseleave", () => clearLongPress());
    row.addEventListener("touchstart", (e) => startLongPress(e, row, book, chapter, verse.v, index), { passive: true });
    row.addEventListener("touchend", () => clearLongPress());
    row.addEventListener("touchmove", () => clearLongPress());

    rowsContainer.appendChild(row);
  });

  setTimeout(loadHighlights, 100);
}

/* ---------------------------------------------------------
   10. LONG PRESS HANDLING
   --------------------------------------------------------- */
function startLongPress(e, rowEl, book, chapter, verseNum, index){
  state.isLongPress = false;
  clearTimeout(state.longPressTimer);

  state.longPressTimer = setTimeout(() => {
    state.isLongPress = true;
    selectVerse(rowEl, book, chapter, verseNum, index);
  }, 500);
}

function clearLongPress(){
  clearTimeout(state.longPressTimer);
}

/* ---------------------------------------------------------
   11. VERSE SELECTION, HIGHLIGHT & COPY
   --------------------------------------------------------- */
function selectVerse(rowEl, book, chapter, verseNum, index){
  document.querySelectorAll(".verse-row.selected").forEach(el => el.classList.remove("selected"));

  if (rowEl) rowEl.classList.add("selected");

  state.selectedVerse = { book, chapter, verse: verseNum, index, rowEl };

  document.getElementById("verse-toolbar").classList.remove("hidden");
}

function initVerseToolbar(){
  document.querySelectorAll(".highlight-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;
      applyHighlight(color);
    });
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const version = btn.dataset.version;
      copyVerse(version);
    });
  });

  document.getElementById("toolbar-close").addEventListener("click", () => {
    document.getElementById("verse-toolbar").classList.add("hidden");
    document.querySelectorAll(".verse-row.selected").forEach(el => el.classList.remove("selected"));
    state.selectedVerse = null;
  });
}

function applyHighlight(color){
  if (!state.selectedVerse) {
    showToast("Please long press a verse first");
    return;
  }

  const { rowEl } = state.selectedVerse;
  const highlightClasses = ["highlight-yellow", "highlight-pink", "highlight-green", "highlight-blue"];

  if (rowEl) {
    highlightClasses.forEach(cls => rowEl.classList.remove(cls));
    if (color !== "none") {
      rowEl.classList.add(`highlight-${color}`);
    }
  }

  state.highlightColor = color === "none" ? null : color;
  saveHighlights();

  if (color !== "none") {
    showToast(`✓ Highlighted with ${color}`);
  } else {
    showToast("✓ Highlight cleared");
  }
}

function copyVerse(version){
  if (!state.selectedVerse) {
    showToast("Please long press a verse first");
    return;
  }

  const { book, chapter, verse, rowEl } = state.selectedVerse;
  const reference = `${book} ${chapter}:${verse}`;

  let text = "";
  if (version === "cebuano" || version === "both") {
    const cebText = rowEl ? rowEl.querySelector(".verse-cell-ceb .verse-text")?.textContent || "" : "";
    text += `${reference} (Cebuano)\n${cebText}\n\n`;
  }
  if (version === "english" || version === "both") {
    const engText = rowEl ? rowEl.querySelector(".verse-cell-eng .verse-text")?.textContent || "" : "";
    text += `${reference} (English)\n${engText}`;
  }

  text = text.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback(version);
      showToast("✓ Copied to clipboard!");
    }).catch(() => {
      fallbackCopy(text, version);
    });
  } else {
    fallbackCopy(text, version);
  }
}

function fallbackCopy(text, version){
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showCopyFeedback(version);
  showToast("✓ Copied to clipboard!");
}

function showCopyFeedback(version){
  const btn = document.querySelector(`.copy-btn[data-version="${version}"]`);
  if (btn) {
    const originalText = btn.textContent;
    btn.textContent = "✓ Copied!";
    setTimeout(() => { btn.textContent = originalText; }, 1500);
  }
}

/* ---------------------------------------------------------
   12. HIGHLIGHTS PERSISTENCE (localStorage)
   --------------------------------------------------------- */
function saveHighlights(){
  const highlights = {};
  document.querySelectorAll(
    ".verse-row.highlight-yellow, .verse-row.highlight-pink, .verse-row.highlight-green, .verse-row.highlight-blue"
  ).forEach(el => {
    const key = `${el.dataset.book}|${el.dataset.chapter}|${el.dataset.verse}`;
    const colorMatch = el.className.match(/highlight-\w+/);
    if (colorMatch) {
      highlights[key] = colorMatch[0].replace("highlight-", "");
    }
  });
  localStorage.setItem("cog_highlights", JSON.stringify(highlights));
}

function loadHighlights(){
  const data = localStorage.getItem("cog_highlights");
  if (!data) return;
  try {
    const highlights = JSON.parse(data);
    document.querySelectorAll(".verse-row").forEach(el => {
      const key = `${el.dataset.book}|${el.dataset.chapter}|${el.dataset.verse}`;
      if (highlights[key]) {
        el.classList.add(`highlight-${highlights[key]}`);
      }
    });
  } catch(e) {}
}

/* ---------------------------------------------------------
   13. SEARCH (Bible screen) with full verse search
   --------------------------------------------------------- */
function initSearch(){
  const toggle = document.getElementById("search-toggle");
  const bar = document.getElementById("search-bar");
  const input = document.getElementById("verse-search-input");
  const bookSelect = document.getElementById("book-select");
  const chapterSelect = document.getElementById("chapter-select");
  const datalist = document.getElementById("book-suggestions");
  const submitBtn = document.getElementById("search-submit");

  ALL_BOOKS.forEach(book => {
    const opt = document.createElement("option");
    opt.value = book;
    datalist.appendChild(opt);
  });

  toggle.addEventListener("click", () => {
    bar.classList.toggle("hidden");
    if (!bar.classList.contains("hidden")) input.focus();
  });

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    if (!term) return;

    const match = ALL_BOOKS.find(b => b.toLowerCase().startsWith(term));
    if (match && match.toLowerCase() === term) {
      bookSelect.value = match;
      populateChapters(1);
      state.currentBook = match;
      state.currentChapter = 1;
      chapterSelect.value = 1;
      renderVerses(match, 1);
    }
  });

  submitBtn.addEventListener("click", performSearch);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
}

function performSearch(){
  const input = document.getElementById("verse-search-input");
  const query = input.value.trim();
  if (!query) return;

  const verseRefMatch = query.match(/^(\d?\s*[A-Za-z]+\s*\d?)\s+(\d+):(\d+)$/i);
  if (verseRefMatch) {
    const bookName = verseRefMatch[1].trim();
    const chapterNum = parseInt(verseRefMatch[2]);
    const verseNum = parseInt(verseRefMatch[3]);

    const matchedBook = ALL_BOOKS.find(b => b.toLowerCase() === bookName.toLowerCase());
    if (matchedBook && VERSES[matchedBook] && VERSES[matchedBook][chapterNum]) {
      const verses = VERSES[matchedBook][chapterNum];
      const matchedVerse = verses.find(v => v.v === verseNum);
      if (matchedVerse) {
        navigateToVerse(matchedBook, chapterNum, verseNum);
        showToast(`✓ Found ${matchedBook} ${chapterNum}:${verseNum}`);
        return;
      }
    }
    showToast(`✗ "${query}" not found`);
    return;
  }

  const bookChapterMatch = query.match(/^(\d?\s*[A-Za-z]+\s*\d?)\s+(\d+)$/i);
  if (bookChapterMatch) {
    const bookName = bookChapterMatch[1].trim();
    const chapterNum = parseInt(bookChapterMatch[2]);
    const matchedBook = ALL_BOOKS.find(b => b.toLowerCase() === bookName.toLowerCase());
    if (matchedBook && VERSES[matchedBook] && VERSES[matchedBook][chapterNum]) {
      navigateToChapter(matchedBook, chapterNum);
      showToast(`✓ Found ${matchedBook} ${chapterNum}`);
      return;
    }
    showToast(`✗ "${query}" not found`);
    return;
  }

  const bookMatch = ALL_BOOKS.find(b => b.toLowerCase() === query.toLowerCase());
  if (bookMatch) {
    navigateToChapter(bookMatch, 1);
    showToast(`✓ Found ${bookMatch} 1`);
    return;
  }

  const results = [];
  for (const [book, chapters] of Object.entries(VERSES)) {
    for (const [chapter, verses] of Object.entries(chapters)) {
      verses.forEach(v => {
        const enMatch = v.en.toLowerCase().includes(query.toLowerCase());
        const cebMatch = v.ceb.toLowerCase().includes(query.toLowerCase());
        if (enMatch || cebMatch) {
          results.push({
            book,
            chapter: parseInt(chapter),
            verse: v.v,
            en: v.en,
            ceb: v.ceb
          });
        }
      });
    }
  }

  if (results.length === 0) {
    showToast(`✗ No results found for "${query}"`);
    return;
  }

  const first = results[0];
  navigateToVerse(first.book, first.chapter, first.verse);

  const msg = `Found ${results.length} result${results.length > 1 ? 's' : ''} for "${query}"`;
  showToast(msg);
}

function navigateToVerse(book, chapter, verse){
  const bookSelect = document.getElementById("book-select");
  const chapterSelect = document.getElementById("chapter-select");
  bookSelect.value = book;
  populateChapters(chapter);
  chapterSelect.value = chapter;
  state.currentBook = book;
  state.currentChapter = chapter;
  renderVerses(book, chapter);

  setTimeout(() => {
    const rows = document.querySelectorAll("#verse-rows .verse-row");
    const idx = verse - 1;
    const row = rows[idx];
    if (row) {
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const originalBg = row.style.backgroundColor;
      row.style.backgroundColor = "rgba(201, 162, 39, 0.15)";
      setTimeout(() => { row.style.backgroundColor = originalBg; }, 2000);
    }
  }, 300);
}

function navigateToChapter(book, chapter){
  const bookSelect = document.getElementById("book-select");
  const chapterSelect = document.getElementById("chapter-select");
  bookSelect.value = book;
  populateChapters(chapter);
  chapterSelect.value = chapter;
  state.currentBook = book;
  state.currentChapter = chapter;
  renderVerses(book, chapter);
}

/* ---------------------------------------------------------
   14. TOAST NOTIFICATION
   --------------------------------------------------------- */
function showToast(message){
  const toast = document.getElementById("toast-notification");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  void toast.offsetWidth;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 3000);
}

/* ---------------------------------------------------------
   15. BOTTOM NAVIGATION
   --------------------------------------------------------- */
function initNav(){
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.screen;
      switchScreen(target);
      navButtons.forEach(b => b.classList.toggle("active", b === btn));
      document.getElementById("verse-toolbar").classList.add("hidden");
      document.querySelectorAll(".verse-row.selected").forEach(el => el.classList.remove("selected"));
      state.selectedVerse = null;
    });
  });
}

function switchScreen(name){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active-screen"));
  document.getElementById(`screen-${name}`).classList.add("active-screen");
  state.currentScreen = name;
}

/* ---------------------------------------------------------
   16. QUIZ SCREEN
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
   17. DICTIONARY SCREEN - WITH ARTICLE VIEW
   --------------------------------------------------------- */
function initDictionary(){
  const input = document.getElementById("dict-search-input");
  const backBtn = document.getElementById("dict-back-btn");
  const listView = document.getElementById("dictionary-list-view");
  const articleView = document.getElementById("dictionary-article-view");
  
  renderDictionaryList(DICTIONARY);

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    const filtered = DICTIONARY.filter(entry =>
      entry.term.toLowerCase().includes(term) ||
      entry.shortDefinition.toLowerCase().includes(term) ||
      entry.category.toLowerCase().includes(term)
    );
    renderDictionaryList(filtered);
  });

  // Back button to return to list view
  backBtn.addEventListener("click", () => {
    showDictionaryListView();
  });
}

function renderDictionaryList(entries){
  const list = document.getElementById("dictionary-list");
  list.innerHTML = "";

  if (entries.length === 0){
    list.innerHTML = `<div class="dict-empty">No entries match your search.</div>`;
    return;
  }

  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "dict-entry";
    div.innerHTML = `
      <div class="dict-entry-head">
        <span class="dict-term">${escapeHtml(entry.term)}</span>
        <span class="dict-category">${escapeHtml(entry.category)}</span>
      </div>
      <div class="dict-definition">${escapeHtml(entry.shortDefinition)}</div>
      <div class="dict-meta">
        <span><strong>Origin:</strong> ${escapeHtml(entry.origin)}</span>
        <span><strong>References:</strong> ${escapeHtml(entry.references)}</span>
      </div>
      <div class="dict-click-hint"><i class="fa-solid fa-arrow-right"></i> Tap to read full article</div>
    `;
    
    div.addEventListener("click", () => {
      showDictionaryArticle(entry);
    });
    
    list.appendChild(div);
  });
}

function showDictionaryArticle(entry){
  const listView = document.getElementById("dictionary-list-view");
  const articleView = document.getElementById("dictionary-article-view");
  const content = document.getElementById("dictionary-article-content");
  const backBtn = document.getElementById("dict-back-btn");
  
  // Hide list, show article
  listView.style.display = "none";
  articleView.classList.remove("hidden");
  backBtn.style.display = "flex";
  
  // Store current article
  state.currentArticle = entry;
  
  // Build article HTML
  let html = `
    <div class="dict-article-back" id="article-back-btn">
      <i class="fa-solid fa-arrow-left"></i> Back to Dictionary
    </div>
    <h1 class="dict-article-title">${escapeHtml(entry.term)}</h1>
    <div class="dict-article-category">${escapeHtml(entry.category)}</div>
  `;
  
  // Render sections
  if (entry.article && entry.article.sections) {
    entry.article.sections.forEach(section => {
      html += `
        <div class="dict-article-section">
          <h3>${escapeHtml(section.heading)}</h3>
          <p>${escapeHtml(section.content)}</p>
        </div>
      `;
    });
  }
  
  // Render Bible References
  if (entry.article && entry.article.bibleReferences && entry.article.bibleReferences.length > 0) {
    html += `
      <div class="dict-article-section">
        <h3>Bible References</h3>
        <p>
    `;
    entry.article.bibleReferences.forEach(ref => {
      html += `<span class="dict-article-bible-ref" data-ref="${escapeHtml(ref)}">${escapeHtml(ref)}</span> `;
    });
    html += `
        </p>
      </div>
    `;
  }
  
  // Render External Links
  if (entry.article && entry.article.externalLinks && entry.article.externalLinks.length > 0) {
    html += `
      <div class="dict-article-section">
        <h3>External Resources</h3>
        <p>
    `;
    entry.article.externalLinks.forEach(link => {
      html += `
        <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="dict-article-external-link">
          <i class="fa-solid fa-external-link-alt"></i> ${escapeHtml(link.label)}
        </a><br>
      `;
    });
    html += `
        </p>
      </div>
    `;
  }
  
  content.innerHTML = html;
  
  // Add event listeners for Bible reference clicks
  document.querySelectorAll('.dict-article-bible-ref').forEach(el => {
    el.addEventListener('click', function() {
      const ref = this.dataset.ref;
      handleBibleReferenceClick(ref);
    });
  });
  
  // Add event listener for back button inside article
  document.getElementById('article-back-btn').addEventListener('click', showDictionaryListView);
}

function showDictionaryListView(){
  const listView = document.getElementById("dictionary-list-view");
  const articleView = document.getElementById("dictionary-article-view");
  const backBtn = document.getElementById("dict-back-btn");
  
  listView.style.display = "block";
  articleView.classList.add("hidden");
  backBtn.style.display = "none";
  state.currentArticle = null;
}

function handleBibleReferenceClick(ref){
  // Parse reference like "Exodus 20:8-11" or "Genesis 2:2-3"
  const match = ref.match(/^(\d?\s*[A-Za-z]+\s*\d?)\s+(\d+):(\d+)(?:-(\d+))?$/i);
  if (match) {
    const bookName = match[1].trim();
    const chapterNum = parseInt(match[2]);
    const verseNum = parseInt(match[3]);
    
    const matchedBook = ALL_BOOKS.find(b => b.toLowerCase() === bookName.toLowerCase());
    if (matchedBook && VERSES[matchedBook] && VERSES[matchedBook][chapterNum]) {
      // Navigate to Bible screen
      switchScreen('bible');
      
      // Update book and chapter selectors
      const bookSelect = document.getElementById("book-select");
      const chapterSelect = document.getElementById("chapter-select");
      bookSelect.value = matchedBook;
      populateChapters(chapterNum);
      chapterSelect.value = chapterNum;
      state.currentBook = matchedBook;
      state.currentChapter = chapterNum;
      renderVerses(matchedBook, chapterNum);
      
      // Navigate to the specific verse
      setTimeout(() => {
        const rows = document.querySelectorAll("#verse-rows .verse-row");
        const idx = verseNum - 1;
        const row = rows[idx];
        if (row) {
          row.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const originalBg = row.style.backgroundColor;
          row.style.backgroundColor = "rgba(201, 162, 39, 0.15)";
          setTimeout(() => { row.style.backgroundColor = originalBg; }, 2000);
        }
        showToast(`✓ Navigated to ${ref}`);
      }, 300);
    } else {
      showToast(`✗ "${ref}" not found in available verses`);
    }
  } else {
    showToast(`✗ Could not parse "${ref}"`);
  }
}

/* ---------------------------------------------------------
   18. SETTINGS SCREEN - Theme, Font & Font Size
   --------------------------------------------------------- */
function initSettings(){
  const themeButtons = document.querySelectorAll(".theme-btn");
  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      themeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const theme = btn.dataset.theme;
      applyTheme(theme);
      state.theme = theme;
      localStorage.setItem("cog_theme", theme);
    });
  });

  const fontButtons = document.querySelectorAll(".font-btn");
  fontButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      fontButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const font = btn.dataset.font;
      applyFont(font);
      state.font = font;
      localStorage.setItem("cog_font", font);
    });
  });

  const fontSizeButtons = document.querySelectorAll(".font-size-btn");
  fontSizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      fontSizeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const size = btn.dataset.size;
      applyFontSize(size);
      state.fontSize = size;
      localStorage.setItem("cog_fontsize", size);
    });
  });
}

function applyTheme(theme){
  document.body.classList.remove("theme-light", "theme-dark", "theme-sepia", "theme-blue");
  document.body.classList.add(`theme-${theme}`);
}

function applyFont(font){
  document.body.classList.remove("font-roboto", "font-times", "font-georgia", "font-arial");
  const fontMap = {
    "Roboto": "font-roboto",
    "Times New Roman": "font-times",
    "Georgia": "font-georgia",
    "Arial": "font-arial"
  };
  if (fontMap[font]) {
    document.body.classList.add(fontMap[font]);
  }
  document.documentElement.style.setProperty('--app-font', font);
}

function applyFontSize(size){
  document.body.classList.remove("font-size-small", "font-size-medium", "font-size-large", "font-size-xlarge");
  document.body.classList.add(`font-size-${size}`);
}

function loadSavedPreferences(){
  const savedTheme = localStorage.getItem("cog_theme") || "light";
  applyTheme(savedTheme);
  state.theme = savedTheme;
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === savedTheme);
  });

  const savedFont = localStorage.getItem("cog_font") || "Roboto";
  applyFont(savedFont);
  state.font = savedFont;
  document.querySelectorAll(".font-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.font === savedFont);
  });

  const savedFontSize = localStorage.getItem("cog_fontsize") || "medium";
  applyFontSize(savedFontSize);
  state.fontSize = savedFontSize;
  document.querySelectorAll(".font-size-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.size === savedFontSize);
  });

  setTimeout(loadHighlights, 300);
}

/* ---------------------------------------------------------
   19. UTILITIES
   --------------------------------------------------------- */
function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------
   20. PWA SERVICE WORKER REGISTRATION
   --------------------------------------------------------- */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  } else {
    console.log('Service Workers not supported in this browser.');
  }
}
