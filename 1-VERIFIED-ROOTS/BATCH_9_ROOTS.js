// ==========================================
// BATCH 9: ROOT ENTRIES - VERIFIED DATASET
// Corrected: removed 17 of 20 roots that duplicated Batches 2/4/5/6/7/8
// (أمن، علم، قول، كتب، دعو، شهد، رزق، صبر، شكر، ذكر، عبد، نصر، ظلم،
// حمد، سلم، عقل، حسب). The original file's claim of "no overlap with
// batches 1-8" did not hold up.
// Also restored the standard format: added unique `id` fields (missing
// entirely in the source file), added surahName/transliteration to
// every example, and restored the defensive initialization check in
// the merge code (the source file's raw `.push()` with no guard would
// throw "QURANIC_ROOTS_DATA is not defined" if ever loaded first --
// the exact bug fixed earlier in this project).
// Fixed 2 word-field mismatches in the surviving roots.
// 3 unique roots in this corrected batch.
// ==========================================

const BATCH_9_ROOTS = [
  {
    id: "kh-l-q",
    root: "خ ل ق",
    rootEnglish: "Creation / Character / Origin",
    rootUrdu: "پیدا کرنا / مخلوق / اخلاق",
    examples: [
      {
        word: "خَلَقَ",
        meaningEnglish: "He created",
        meaningUrdu: "اس نے پیدا کیا",
        quranText: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
        reference: "96:2",
        surahName: "Al-Alaq",
        transliteration: "Khalaqal-insaana min 'alaq",
        quranEnglish: "Created man from a clinging substance.",
        quranUrdu: "انسان کو جمے ہوئے خون سے پیدا کیا"
      },
      {
        word: "الْخَالِقُ",
        meaningEnglish: "The Creator",
        meaningUrdu: "پیدا کرنے والا",
        quranText: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
        reference: "59:24",
        surahName: "Al-Hashr",
        transliteration: "Huwallaahul-Khaaliqul-Baari'ul-Musawwir",
        quranEnglish: "He is Allah, the Creator, the Inventor, the Fashioner.",
        quranUrdu: "وہی اللہ ہے پیدا کرنے والا، بنانے والا، صورت دینے والا"
      },
      {
        word: "خَلْقِ",
        meaningEnglish: "The creation of",
        meaningUrdu: "کی تخلیق",
        quranText: "مَّا تَرَى فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ",
        reference: "67:3",
        surahName: "Al-Mulk",
        transliteration: "Maa taraa fee khalqir-Rahmaani min tafaawut",
        quranEnglish: "You do not see in the creation of the Most Merciful any inconsistency.",
        quranUrdu: "تو رحمن کی تخلیق میں کوئی خلل نہیں دیکھے گا"
      },
      {
        word: "خُلُقٍ",
        meaningEnglish: "Character / Conduct",
        meaningUrdu: "اخلاق / طبیعت",
        quranText: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
        reference: "68:4",
        surahName: "Al-Qalam",
        transliteration: "Wa innaka la'alaa khuluqin 'azeem",
        quranEnglish: "And indeed, you are of a great moral character.",
        quranUrdu: "اور بے شک آپ اخلاق کے اعلیٰ درجے پر ہیں"
      }
    ]
  },
  {
    id: "n-w-r",
    root: "ن و ر",
    rootEnglish: "Light / Illumination",
    rootUrdu: "نور / روشنی",
    examples: [
      {
        word: "نُورُ",
        meaningEnglish: "Light of",
        meaningUrdu: "کا نور",
        quranText: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
        reference: "24:35",
        surahName: "An-Nur",
        transliteration: "Allaahu Nooru as-samaawaati wal-ard",
        quranEnglish: "Allah is the Light of the heavens and the earth.",
        quranUrdu: "اللہ آسمانوں اور زمین کا نور ہے"
      },
      {
        word: "النُّورِ",
        meaningEnglish: "The Light",
        meaningUrdu: "نور / روشنی",
        quranText: "وَأَخْرَجَهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
        reference: "5:16",
        surahName: "Al-Ma'idah",
        transliteration: "Wa akhrajahum minaz-zulumaati ilan-Noor",
        quranEnglish: "And brought them out of darkness into light.",
        quranUrdu: "اور انہیں اندھیروں سے نکال کر روشنی کی طرف لایا"
      },
      {
        word: "مُنِيرًا",
        meaningEnglish: "Illuminating",
        meaningUrdu: "روشن کرنے والا",
        quranText: "وَدَاعِيًا إِلَى اللَّهِ بِإِذْنِهِ وَسِرَاجًا مُّنِيرًا",
        reference: "33:46",
        surahName: "Al-Ahzab",
        transliteration: "Wa daa'iyan ilallaahi bi-idhnihee wa siraajam-muneeraa",
        quranEnglish: "And as one who invites to Allah, by His permission, and an illuminating lamp.",
        quranUrdu: "اور اللہ کے حکم سے اس کی طرف بلانے والا اور روشن چراغ بنا کر (بھیجا)"
      },
      {
        word: "نُورُهُمْ",
        meaningEnglish: "Their light",
        meaningUrdu: "ان کا نور",
        quranText: "يَسْعَىٰ نُورُهُم بَيْنَ أَيْدِيهِمْ وَبِأَيْمَانِهِمْ",
        reference: "57:12",
        surahName: "Al-Hadid",
        transliteration: "Yas'aa nooruhum baina aideehim wa bi-aymaanihim",
        quranEnglish: "Their light proceeding before them and on their right.",
        quranUrdu: "ان کا نور ان کے آگے اور ان کے دائیں جانب دوڑ رہا ہوگا"
      }
    ]
  },
  {
    id: "h-r-m",
    root: "ح ر م",
    rootEnglish: "Forbidden / Sacred / Sanctity",
    rootUrdu: "حرام / محترم / منع کرنا",
    examples: [
      {
        word: "حَرَّمَ",
        meaningEnglish: "He made forbidden",
        meaningUrdu: "اس نے حرام کیا",
        quranText: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
        reference: "2:275",
        surahName: "Al-Baqarah",
        transliteration: "Wa ahallallaahul-bai'a wa harramar-ribaa",
        quranEnglish: "And Allah has permitted trade and has forbidden interest.",
        quranUrdu: "اور اللہ نے تجارت کو حلال کیا اور سود کو حرام کیا"
      },
      {
        word: "الْحَرَامِ",
        meaningEnglish: "The Sacred",
        meaningUrdu: "محترم / حرمت والا",
        quranText: "فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ",
        reference: "2:144",
        surahName: "Al-Baqarah",
        transliteration: "Fawalli wajhaka shatral-Masjidil-Haraam",
        quranEnglish: "So turn your face toward al-Masjid al-Haram.",
        quranUrdu: "پس اپنا چہرہ مسجدِ حرام کی طرف پھیر لیں"
      },
      {
        word: "حُرُمَاتِ",
        meaningEnglish: "Sacred ordinances",
        meaningUrdu: "حرمتیں / محترم چیزیں",
        quranText: "ذَٰلِكَ وَمَن يُعَظِّمْ حُرُمَاتِ اللَّهِ فَهُوَ خَيْرٌ لَّهُ",
        reference: "22:30",
        surahName: "Al-Hajj",
        transliteration: "Dhaalika wa many-yu'azzim hurumaatillaahi fahuwa khairul-lahoo",
        quranEnglish: "That [is so]. And whoever honors the sacred ordinances of Allah - it is best for him.",
        quranUrdu: "یہ بات یاد رکھو! اور جو اللہ کی حرمتوں کی تعظیم کرے تو یہ اس کے لیے بہتر ہے"
      },
      {
        word: "الْمُحَرَّمِ",
        meaningEnglish: "The sacred / forbidden",
        meaningUrdu: "حرمت والا / محترم",
        quranText: "عِندَ بَيْتِكَ الْمُحَرَّمِ",
        reference: "14:37",
        surahName: "Ibrahim",
        transliteration: "'Inda Baitikal-Muharram",
        quranEnglish: "Near Your sacred House.",
        quranUrdu: "تیرے محترم گھر کے پاس"
      }
    ]
  }
];

if (typeof QURANIC_ROOTS_DATA === 'undefined') {
  window.QURANIC_ROOTS_DATA = [];
}
QURANIC_ROOTS_DATA.push(...BATCH_9_ROOTS);
