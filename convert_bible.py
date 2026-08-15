import xml.etree.ElementTree as ET
import json
import os
import zipfile

# Book name mapping
BOOK_NAMES = {
    "Gen": "Genesis", "Exod": "Exodus", "Lev": "Leviticus", "Num": "Numbers",
    "Deut": "Deuteronomy", "Josh": "Joshua", "Judg": "Judges", "Ruth": "Ruth",
    "1Sam": "1 Samuel", "2Sam": "2 Samuel", "1Kgs": "1 Kings", "2Kgs": "2 Kings",
    "1Chr": "1 Chronicles", "2Chr": "2 Chronicles", "Ezra": "Ezra", "Neh": "Nehemiah",
    "Esth": "Esther", "Job": "Job", "Ps": "Psalms", "Prov": "Proverbs",
    "Eccl": "Ecclesiastes", "Song": "Song of Solomon", "Isa": "Isaiah", "Jer": "Jeremiah",
    "Lam": "Lamentations", "Ezek": "Ezekiel", "Dan": "Daniel", "Hos": "Hosea",
    "Joel": "Joel", "Amos": "Amos", "Obad": "Obadiah", "Jonah": "Jonah",
    "Mic": "Micah", "Nah": "Nahum", "Hab": "Habakkuk", "Zeph": "Zephaniah",
    "Hag": "Haggai", "Zech": "Zechariah", "Mal": "Malachi", "Matt": "Matthew",
    "Mark": "Mark", "Luke": "Luke", "John": "John", "Acts": "Acts",
    "Rom": "Romans", "1Cor": "1 Corinthians", "2Cor": "2 Corinthians",
    "Gal": "Galatians", "Eph": "Ephesians", "Phil": "Philippians", "Col": "Colossians",
    "1Thess": "1 Thessalonians", "2Thess": "2 Thessalonians", "1Tim": "1 Timothy",
    "2Tim": "2 Timothy", "Titus": "Titus", "Phlm": "Philemon", "Heb": "Hebrews",
    "Jas": "James", "1Pet": "1 Peter", "2Pet": "2 Peter", "1John": "1 John",
    "2John": "2 John", "3John": "3 John", "Jude": "Jude", "Rev": "Revelation"
}

import re

NS = {'osis': 'http://www.bibletechnologies.net/2003/OSIS/namespace'}
NS_URI = NS['osis']


def clean_text(text):
    """Collapse whitespace and remove spaces that ended up before punctuation
    because each <w> word was joined with a literal space."""
    text = ' '.join(text.split())
    text = re.sub(r'\s+([,.;:!?\u2019\u201d)])', r'\1', text)
    text = re.sub(r'([(\u2018\u201c])\s+', r'\1', text)
    return text.strip()


def extract_kjv():
    if os.path.exists('kjvxml.zip'):
        with zipfile.ZipFile('kjvxml.zip', 'r') as z:
            for f in z.namelist():
                if f.endswith('.xml'):
                    z.extract(f, '.')
                    return f
    return 'kjv.xml' if os.path.exists('kjv.xml') else None


def tag_local(elem):
    """Strip namespace off a tag, e.g. '{ns}verse' -> 'verse'."""
    t = elem.tag
    return t.split('}', 1)[1] if '}' in t else t


def parse_osis_container(xml_path):
    """
    Parses 'container-style' OSIS, where verse text lives INSIDE
    the <verse osisID="...">text</verse> element. Used by cebb.xml.
    """
    verses = {}
    tree = ET.parse(xml_path)
    root = tree.getroot()

    for verse in root.findall('.//osis:verse', NS):
        osis_id = verse.get('osisID')
        if not osis_id:
            continue

        parts = osis_id.split('.')
        if len(parts) < 3:
            continue

        book_abbr = parts[0]
        try:
            chapter = int(parts[1])
            verse_num = int(parts[2].split('-')[0])
        except ValueError:
            continue

        book_name = BOOK_NAMES.get(book_abbr)
        if not book_name:
            continue

        text = clean_text(''.join(verse.itertext()))
        if not text:
            continue

        verses.setdefault(book_name, {}).setdefault(chapter, [])
        verses[book_name][chapter].append({'v': verse_num, 'text': text})

    return verses


def parse_osis_milestone(xml_path):
    """
    Parses 'milestone-style' OSIS, where <verse osisID="X" sID="X"/> and
    <verse eID="X"/> are empty markers, and the actual verse text is the
    loose text/tail content and <w>/<transChange>/etc. words that appear
    as SIBLINGS between those two markers inside the <chapter>. Used by kjv.xml.
    """
    verses = {}
    tree = ET.parse(xml_path)
    root = tree.getroot()

    for book_div in root.findall(".//osis:div[@type='book']", NS):
        book_abbr = book_div.get('osisID')
        book_name = BOOK_NAMES.get(book_abbr)
        if not book_name:
            continue

        for chapter_el in book_div.findall('.//osis:chapter', NS):
            chapter_osis_id = chapter_el.get('osisID')
            if not chapter_osis_id:
                continue
            try:
                chapter = int(chapter_osis_id.split('.')[1])
            except (IndexError, ValueError):
                continue

            current_verse = None
            buffer = []

            def flush():
                if current_verse is not None:
                    text = clean_text(' '.join(buffer))
                    if text:
                        verses.setdefault(book_name, {}).setdefault(chapter, [])
                        verses[book_name][chapter].append({'v': current_verse, 'text': text})

            # Walk every descendant of <chapter> in document order, tracking
            # verse start/end milestones and collecting all interleaved text.
            for elem in chapter_el.iter():
                if elem is chapter_el:
                    # capture any text directly before the first child
                    continue

                local = tag_local(elem)

                if local == 'verse':
                    sid = elem.get('sID')
                    eid = elem.get('eID')
                    if sid:
                        flush()
                        osis_id = elem.get('osisID') or sid
                        parts = osis_id.split('.')
                        try:
                            current_verse = int(parts[2].split('-')[0])
                        except (IndexError, ValueError):
                            current_verse = None
                        buffer = []
                    elif eid:
                        flush()
                        current_verse = None
                        buffer = []
                    # tail text after this empty verse tag still belongs
                    # to whichever verse is now current
                    if elem.tail and current_verse is not None:
                        buffer.append(elem.tail)
                    continue

                if local in ('title', 'note'):
                    # skip chapter/section titles and footnotes entirely,
                    # but still capture their tail text
                    if elem.tail and current_verse is not None:
                        buffer.append(elem.tail)
                    continue

                # Any other element (w, transChange, seg, milestone, etc.)
                if current_verse is not None:
                    if elem.text:
                        buffer.append(elem.text)
                    if elem.tail:
                        buffer.append(elem.tail)

            flush()

    return verses


def parse_osis(xml_path, style):
    try:
        if style == 'container':
            return parse_osis_container(xml_path)
        return parse_osis_milestone(xml_path)
    except Exception as e:
        print(f"Error parsing {xml_path}: {e}")
        return {}


def combine_bibles(ceb, eng):
    combined = {}
    for book, chapters in eng.items():
        combined.setdefault(book, {})
        for chapter, eng_verses in chapters.items():
            combined[book][chapter] = []
            ceb_verses = ceb.get(book, {}).get(chapter, [])
            ceb_by_v = {v['v']: v['text'] for v in ceb_verses}
            for v in eng_verses:
                combined[book][chapter].append({
                    'v': v['v'],
                    'en': v['text'],
                    'ceb': ceb_by_v.get(v['v'], '')
                })
    # Include any book/chapter that exists in Cebuano but not in English,
    # so nothing silently disappears from the app.
    for book, chapters in ceb.items():
        combined.setdefault(book, {})
        for chapter, ceb_verses in chapters.items():
            if chapter in combined[book]:
                continue
            combined[book][chapter] = [
                {'v': v['v'], 'en': '', 'ceb': v['text']} for v in ceb_verses
            ]
    return combined


def main():
    kjv_file = extract_kjv()
    if not kjv_file:
        print("Error: kjv.xml or kjvxml.zip not found")
        return

    if not os.path.exists('cebb.xml'):
        print("Error: cebb.xml not found")
        return

    print("Parsing Cebuano (container-style)...")
    ceb = parse_osis('cebb.xml', style='container')
    print(f"  {len(ceb)} books")

    print("Parsing English KJV (milestone-style)...")
    eng = parse_osis(kjv_file, style='milestone')
    print(f"  {len(eng)} books")

    print("Combining...")
    combined = combine_bibles(ceb, eng)

    total_chapters = sum(len(c) for c in combined.values())
    total_verses = sum(len(v) for book in combined.values() for v in book.values())
    empty_en = sum(
        1 for book in combined.values() for ch in book.values()
        for v in ch if not v['en'].strip()
    )
    print(f"Result: {len(combined)} books, {total_chapters} chapters, {total_verses} verses")
    print(f"Verses still missing English text: {empty_en}")

    with open('verses.json', 'w', encoding='utf-8') as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)

    with open('verses.min.json', 'w', encoding='utf-8') as f:
        json.dump(combined, f, ensure_ascii=False, separators=(',', ':'))

    print("Saved: verses.json and verses.min.json")


if __name__ == "__main__":
    main()
