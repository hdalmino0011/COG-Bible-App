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

def extract_kjv():
    if os.path.exists('kjvxml.zip'):
        with zipfile.ZipFile('kjvxml.zip', 'r') as z:
            for f in z.namelist():
                if f.endswith('.xml'):
                    z.extract(f, '.')
                    return f
    return 'kjv.xml' if os.path.exists('kjv.xml') else None

def parse_osis(xml_path):
    verses = {}
    try:
        tree = ET.parse(xml_path)
        root = tree.getroot()
        ns = {'osis': 'http://www.bibletechnologies.net/2003/OSIS/namespace'}
        
        for verse in root.findall('.//osis:verse', ns):
            osis_id = verse.get('osisID')
            if not osis_id:
                continue
            
            parts = osis_id.split('.')
            if len(parts) < 3:
                continue
            
            book_abbr = parts[0]
            chapter = int(parts[1])
            verse_num = int(parts[2].split('-')[0])
            
            book_name = BOOK_NAMES.get(book_abbr)
            if not book_name:
                continue
            
            text = ''.join(verse.itertext()).strip()
            if not text:
                continue
            
            if book_name not in verses:
                verses[book_name] = {}
            if chapter not in verses[book_name]:
                verses[book_name][chapter] = []
            
            verses[book_name][chapter].append({'v': verse_num, 'text': text})
    except Exception as e:
        print(f"Error parsing {xml_path}: {e}")
    return verses

def combine_bibles(ceb, eng):
    combined = {}
    for book, chapters in eng.items():
        if book not in combined:
            combined[book] = {}
        for chapter, eng_verses in chapters.items():
            combined[book][chapter] = []
            ceb_verses = ceb.get(book, {}).get(chapter, {})
            ceb_by_v = {v['v']: v['text'] for v in ceb_verses}
            for v in eng_verses:
                combined[book][chapter].append({
                    'v': v['v'],
                    'en': v['text'],
                    'ceb': ceb_by_v.get(v['v'], '')
                })
    return combined

def main():
    kjv_file = extract_kjv()
    if not kjv_file:
        print("Error: kjv.xml or kjvxml.zip not found")
        return
    
    if not os.path.exists('cebb.xml'):
        print("Error: cebb.xml not found")
        return
    
    print("Parsing Cebuano...")
    ceb = parse_osis('cebb.xml')
    print(f"  {len(ceb)} books")
    
    print("Parsing English KJV...")
    eng = parse_osis(kjv_file)
    print(f"  {len(eng)} books")
    
    print("Combining...")
    combined = combine_bibles(ceb, eng)
    
    total_chapters = sum(len(c) for c in combined.values())
    total_verses = sum(len(v) for book in combined.values() for v in book.values())
    print(f"Result: {len(combined)} books, {total_chapters} chapters, {total_verses} verses")
    
    with open('bible-data.json', 'w', encoding='utf-8') as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)
    
    with open('bible-data.min.json', 'w', encoding='utf-8') as f:
        json.dump(combined, f, ensure_ascii=False, separators=(',', ':'))
    
    print("✅ Saved: bible-data.json and bible-data.min.json")

if __name__ == "__main__":
    main()
