// ==========================================
// BATCH 8: ROOT ENTRIES - VERIFIED DATASET
// Corrected: removed 7 roots that duplicated Batches 4/6
// (فتح، حكم، خفي [misspelled as خفو]، نفخ، نفس، تبع، ولي).
// Fixed 4 doubled-diacritic typos and 1 word-order mismatch in the
// surviving roots. See audit notes.
// 13 unique roots in this corrected batch.
// ==========================================

const BATCH_8_ROOTS = [
  {
    id: "b-s-r",
    root: "ب ص ر",
    rootEnglish: "To see / Sight / Insight / Clear evidence",
    rootUrdu: "دیکھنا / بصارت / بصیرت",
    examples: [
      {
        word: "بَصِيرٌ",
        meaningEnglish: "All-Seer / Seeing",
        meaningUrdu: "خوب دیکھنے والا",
        quranText: "إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ",
        reference: "2:110",
        surahName: "Al-Baqarah",
        transliteration: "Innallaaha bimaa ta'maloona Baseer",
        quranEnglish: "Indeed Allah, of what you do, is Seeing.",
        quranUrdu: "بیشک اللہ تمہارے تمام اعمال کو خوب دیکھنے والا ہے"
      },
      {
        word: "أَبْصَارِهِمْ",
        meaningEnglish: "Their sight / eyes",
        meaningUrdu: "ان کی نگاہیں / آنکھیں",
        quranText: "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ",
        reference: "2:7",
        surahName: "Al-Baqarah",
        transliteration: "Khatamallaahu 'alaa quloobihim wa 'alaa sam'ihim wa 'alaa absaarihim ghishaawah",
        quranEnglish: "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil.",
        quranUrdu: "اللہ نے ان کے دلوں پر اور ان کے کانوں پر مہر لگا دی ہے اور ان کی آنکھوں پر پردہ ہے"
      },
      {
        word: "يُبْصِرُونَ",
        meaningEnglish: "They see",
        meaningUrdu: "وہ دیکھتے ہیں",
        quranText: "لَهُمْ قُلُوبٌ لَّا يَفْقَهُونَ بِهَا وَلَهُمْ أَعْيُنٌ لَّا يُبْصِرُونَ بِهَا",
        reference: "7:179",
        surahName: "Al-A'raf",
        transliteration: "Lahum quloobul-laa yafqahoona bihaa wa lahum a'yunul-laa yubsiroona bihaa",
        quranEnglish: "They have hearts with which they do not understand, they have eyes with which they do not see.",
        quranUrdu: "ان کے پاس دل ہیں جن سے وہ سمجھتے نہیں، اور ان کے پاس آنکھیں ہیں جن سے وہ دیکھتے نہیں"
      },
      {
        word: "بَصَائِرُ",
        meaningEnglish: "Insights / Clear proofs",
        meaningUrdu: "بصیرت کے دلائل / دلیلی روشن",
        quranText: "قَدْ جَاءَكُم بَصَائِرُ مِن رَّبِّكُمْ",
        reference: "6:104",
        surahName: "Al-An'am",
        transliteration: "Qad jaa'akum basaa'iru mir-Rabbikum",
        quranEnglish: "There has come to you enlightenment from your Lord.",
        quranUrdu: "بیشک تمہارے پاس تمہارے رب کی طرف سے بصیرت کے دلائل آ چکے ہیں"
      }
    ]
  },
  {
    id: "d-a-w",
    root: "د ع و",
    rootEnglish: "To call / Supplicate / Invite / Pray",
    rootUrdu: "پکارنا / دعا کرنا / دعوت دینا",
    examples: [
      {
        word: "ادْعُ",
        meaningEnglish: "Call / Invite (command)",
        meaningUrdu: "دعوت دو / پکارو",
        quranText: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ",
        reference: "16:125",
        surahName: "An-Nahl",
        transliteration: "Ud'u ilaa sabeeli Rabbika bil-hikmati wal-maw'izatil-hasanah",
        quranEnglish: "Invite to the way of your Lord with wisdom and good instruction.",
        quranUrdu: "اپنے رب کے راستے کی طرف حکمت اور اچھی نصیحت کے ساتھ دعوت دیں"
      },
      {
        word: "دَعَا",
        meaningEnglish: "He prayed / called",
        meaningUrdu: "اس نے دعا کی / پکارا",
        quranText: "هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ",
        reference: "3:38",
        surahName: "Ali 'Imran",
        transliteration: "Hunaalika da'aa Zakariyyaa Rabbah",
        quranEnglish: "At that time Zakariya called upon his Lord.",
        quranUrdu: "اسی جگہ زکریا نے اپنے رب سے دعا کی"
      },
      {
        word: "دُعَاءَ",
        meaningEnglish: "Supplication / Prayer",
        meaningUrdu: "دعا / پکار",
        quranText: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
        reference: "14:40",
        surahName: "Ibrahim",
        transliteration: "Rabbanaa wa taqabbal du'aa'",
        quranEnglish: "Our Lord, and accept my supplication.",
        quranUrdu: "اے ہمارے رب! اور میری دعا قبول فرما"
      },
      {
        word: "يَدْعُونَ",
        meaningEnglish: "They call upon / pray",
        meaningUrdu: "وہ پکارتے ہیں",
        quranText: "وَالَّذِينَ يَدْعُونَ مِن دُونِهِ لَا يَسْتَجِيبُونَ لَهُم بِشَيْءٍ",
        reference: "13:14",
        surahName: "Ar-Ra'd",
        transliteration: "Walladheena yad'oona min doonihee laa yastajeeboona lahum bishai'",
        quranEnglish: "And those they call upon besides Him do not respond to them with anything.",
        quranUrdu: "اور جنہیں وہ اللہ کے سوا پکارتے ہیں وہ ان کی کسی بات کا جواب نہیں دے سکتے"
      }
    ]
  },
  {
    id: "h-m-l",
    root: "ح م ل",
    rootEnglish: "To carry / Bear / Burden / Pregnant",
    rootUrdu: "اٹھانا / بوجھ برادشت کرنا / حمل",
    examples: [
      {
        word: "حَمَلَتْ",
        meaningEnglish: "She carried / bore",
        meaningUrdu: "وہ حاملہ ہوئی / اٹھایا",
        quranText: "حَمَلَتْهُ أُمُّهُ كُرْهًا وَوَضَعَتْهُ كُرْهًا",
        reference: "46:15",
        surahName: "Al-Ahqaf",
        transliteration: "Hamalat-hu ummuhoo kurhanw-wa wada'at-hu kurhaa",
        quranEnglish: "His mother carried him with hardship and gave birth to him with hardship.",
        quranUrdu: "اس کی ماں نے اسے تکلیف کے ساتھ پیٹ میں رکھا اور تکلیف کے ساتھ اسے جنا"
      },
      {
        word: "يَحْمِلُونَ",
        meaningEnglish: "They carry / bear",
        meaningUrdu: "وہ اٹھاتے ہیں",
        quranText: "الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ",
        reference: "40:7",
        surahName: "Ghafir",
        transliteration: "Alladheena yahmiloonal-'Arsha wa man hawlahoo yusabbihoona bi-hamdi Rabbihim",
        quranEnglish: "Those [angels] who carry the Throne and those around it exalt [Allah] with praise of their Lord.",
        quranUrdu: "جو فرشتے عرش کو اٹھائے ہوئے ہیں اور جو اس کے ارد گرد ہیں وہ اپنے رب کی حمد کے ساتھ تسبیح کرتے ہیں"
      },
      {
        word: "أَحْمَالَهُنَّ",
        meaningEnglish: "Their burdens / pregnancies",
        meaningUrdu: "ان کے حمل / بوجھ",
        quranText: "وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ",
        reference: "65:4",
        surahName: "At-Talaq",
        transliteration: "Wa ulaatul-ahmaali ajaluhunna an yada'na hamlahunn",
        quranEnglish: "And for those who are pregnant, their term is until they give birth.",
        quranUrdu: "اور حاملہ عورتوں کی عدت ان کے وضع حمل تک ہے"
      },
      {
        word: "حُمِّلُوا",
        meaningEnglish: "Were entrusted / burdened",
        meaningUrdu: "ان پر بوجھ ڈالا گیا / مکلف کیے گئے",
        quranText: "مَثَلُ الَّذِينَ حُمِّلُوا التَّوْرَاةَ ثُمَّ لَمْ يَحْمِلُوهَا كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا",
        reference: "62:5",
        surahName: "Al-Jumu'ah",
        transliteration: "Mathalul-ladheena hummilut-Tawraata thumma lam yahmiloohaa kamathalil-himaari yahmilu asfaaraa",
        quranEnglish: "The example of those who were entrusted with the Torah and then did not take it on is like that of a donkey who carries volumes [of books].",
        quranUrdu: "ان لوگوں کی مثال جن پر تورات کا بوجھ ڈالا گیا پھر انہوں نے اس کا حق ادا نہ کیا، اس گدھے کی طرح ہے جو کتابوں کا بوجھ اٹھائے ہوئے ہو"
      }
    ]
  },
  {
    id: "kh-l-f",
    root: "خ ل ف",
    rootEnglish: "To succeed / Come after / Differ / Behind",
    rootUrdu: "پیچھے آنا / جانشین ہونا / خلاف کرنا",
    examples: [
      {
        word: "خَلِيفَةً",
        meaningEnglish: "Vicegerent / Successor",
        meaningUrdu: "جانشین / نائب",
        quranText: "إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
        reference: "2:30",
        surahName: "Al-Baqarah",
        transliteration: "Innee jaa'ilun fil-ardi khaleefah",
        quranEnglish: "Indeed, I will make upon the earth a successive authority.",
        quranUrdu: "بیشک میں زمین میں ایک نائب بنانے والا ہوں"
      },
      {
        word: "خَلَفَ",
        meaningEnglish: "Succeeded / Came after",
        meaningUrdu: "جانشین ہوا / بعد میں آیا",
        quranText: "فَخَلَفَ مِن بَعْدِهِمْ خَلْفٌ أَضَاعُوا الصَّلَاةَ",
        reference: "19:59",
        surahName: "Maryam",
        transliteration: "Fakhalafa mim ba'dihim khalfun adaa'us-Salaah",
        quranEnglish: "But there came after them successors who neglected prayer.",
        quranUrdu: "پھر ان کے بعد ایسے ناخلف لوگ آئے جنہوں نے نماز کو برباد کر دیا"
      },
      {
        word: "يُخْلِفُ",
        meaningEnglish: "Breaks / Fails (a promise)",
        meaningUrdu: "وہ خلاف ورزی کرتا ہے",
        quranText: "إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ",
        reference: "3:9",
        surahName: "Ali 'Imran",
        transliteration: "Innallaaha laa yukhliful-mee'aad",
        quranEnglish: "Indeed, Allah does not fail in His promise.",
        quranUrdu: "بیشک اللہ وعدے کے خلاف نہیں کرتا"
      },
      {
        word: "اخْتِلَافِ",
        meaningEnglish: "Alternation / Difference",
        meaningUrdu: "آمد و رفت / ادل بدل / اختلاف",
        quranText: "وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ",
        reference: "3:190",
        surahName: "Ali 'Imran",
        transliteration: "Wakhtilaafil-laili wan-nahaari la-Ayaatil-li'ulil-albaab",
        quranEnglish: "And the alternation of the night and the day are signs for those of understanding.",
        quranUrdu: "اور رات اور دن کے باری باری آنے میں عقل مندوں کے لیے نشانیاں ہیں"
      }
    ]
  },
  {
    id: "kh-l-d",
    root: "خ ل د",
    rootEnglish: "To abide eternally / Immortality / Forever",
    rootUrdu: "ہمیشہ رہنا / ابدی",
    examples: [
      {
        word: "خَالِدُونَ",
        meaningEnglish: "Abiding forever (plural)",
        meaningUrdu: "ہمیشہ رہنے والے",
        quranText: "أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ ۖ هُمْ فِيهَا خَالِدُونَ",
        reference: "2:82",
        surahName: "Al-Baqarah",
        transliteration: "Ulaa'ika As-haabul-Jannati hum feehaa khaalidoon",
        quranEnglish: "Those are the companions of Paradise; they will abide therein eternally.",
        quranUrdu: "وہی جنت والے ہیں، وہ اس میں ہمیشہ رہیں گے"
      },
      {
        word: "خَالِدِينَ",
        meaningEnglish: "Abiding eternally (accusative/genitive)",
        meaningUrdu: "ہمیشہ رہتے ہوئے",
        quranText: "جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا",
        reference: "98:8",
        surahName: "Al-Bayyinah",
        transliteration: "Jazaa'uhum 'inda Rabbihim Jannaatu 'Adnin tajree min tahtihal-anhaaru khaalideena feehaa abadaa",
        quranEnglish: "Their reward with their Lord is gardens of perpetual residence beneath which rivers flow, wherein they will abide forever.",
        quranUrdu: "ان کا بدلہ ان کے رب کے پاس ہمیشگی والے باغات ہیں جن کے نیچے نہریں بہتی ہیں، وہ ان میں ہمیشہ رہیں گے"
      },
      {
        word: "الْخُلْدِ",
        meaningEnglish: "Eternity",
        meaningUrdu: "ہمیشگی / ابدیت",
        quranText: "قُلْ أَذَٰلِكَ خَيْرٌ أَمْ جَنَّةُ الْخُلْدِ الَّتِي وُعِدَ الْمُتَّقُونَ",
        reference: "25:15",
        surahName: "Al-Furqan",
        transliteration: "Qul a-dhaalika khairun am Jannatul-Khuldil-latee wa'idal-muttaqoon",
        quranEnglish: "Say, 'Is that better or the Garden of Eternity which is promised to the righteous?'",
        quranUrdu: "فرما دیجیے: کیا یہ بہتر ہے یا وہ ہمیشگی والی جنت جس کا پرہیزگاروں سے وعدہ کیا گیا ہے؟"
      },
      {
        word: "يَخْلُدْ",
        meaningEnglish: "Abides / Remains",
        meaningUrdu: "وہ رہے گا",
        quranText: "وَيَخْلُدْ فِيهِ مُهَانًا",
        reference: "25:69",
        surahName: "Al-Furqan",
        transliteration: "Wa yakhlud feehee muhaanaa",
        quranEnglish: "And he will abide therein humiliated.",
        quranUrdu: "اور وہ اس میں ذلیل ہو کر ہمیشہ رہے گا"
      }
    ]
  },
  {
    id: "m-s-s",
    root: "م س س",
    rootEnglish: "To touch / Afflict / Reach",
    rootUrdu: "چھونا / پہنچنا / تکلیف پہنچنا",
    examples: [
      {
        word: "مَسَّنَا",
        meaningEnglish: "Has touched / afflicted us",
        meaningUrdu: "ہمیں پہنچا / چھوا",
        quranText: "يَا أَيُّهَا الْعَزِيزُ مَسَّنَا وَأَهْلَنَا الضُّرُّ",
        reference: "12:88",
        surahName: "Yusuf",
        transliteration: "Yaa ayyuhal-'Azeezu massanaa wa ahlanad-durru",
        quranEnglish: "O noble one, adversity has touched us and our family.",
        quranUrdu: "اے عزیز! ہمیں اور ہمارے اہل خانہ کو سخت تکلیف پہنچی ہے"
      },
      {
        word: "تَمْسَسْكُمْ",
        meaningEnglish: "Touches you",
        meaningUrdu: "تمہیں پہنچے / چھوئے",
        quranText: "إِن تَمْسَسْكُمْ حَسَنَةٌ تَسُؤْهُمْ",
        reference: "3:120",
        surahName: "Ali 'Imran",
        transliteration: "In tamsaskum hasanatun tasu'hum",
        quranEnglish: "If good touches you, it distresses them.",
        quranUrdu: "اگر تمہیں کوئی بھلائی پہنچتی ہے تو انہیں برا لگتا ہے"
      },
      {
        word: "يَمْسَسْكَ",
        meaningEnglish: "Afflicts / touches you",
        meaningUrdu: "تجھے پہنچائے",
        quranText: "وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ",
        reference: "6:17",
        surahName: "Al-An'am",
        transliteration: "Wa iny-yamsaskallaahu bidurrin falaa kaashifa lahoo illaa Hoo",
        quranEnglish: "And if Allah should touch you with adversity, there is no remover of it except Him.",
        quranUrdu: "اور اگر اللہ تجھے کوئی تکلیف پہنچائے تو اس کے سوا اسے کوئی دور کرنے والا نہیں"
      },
      {
        word: "يَتَمَاسَّا",
        meaningEnglish: "They both touch each other",
        meaningUrdu: "وہ دونوں ایک دوسرے کو چھوئں",
        quranText: "فَتَحْرِيرُ رَقَبَةٍ مِّن قَبْلِ أَن يَتَمَاسَّا",
        reference: "58:3",
        surahName: "Al-Mujadila",
        transliteration: "Fa-tahreeru raqabatim-min qabli an yatamaassaa",
        quranEnglish: "Then [the penalty is] the freeing of a slave before they touch one another.",
        quranUrdu: "تو ایک گردن کا آزاد کرنا ہے اس سے پہلے کہ وہ ایک دوسرے کو ہاتھ لگائیں"
      }
    ]
  },
  {
    id: "m-t-a",
    root: "م ت ع",
    rootEnglish: "To enjoy / Provision / Comfort / Goods",
    rootUrdu: "نفع اٹھانا / سامان / فائدہ",
    examples: [
      {
        word: "مَتَاعُ",
        meaningEnglish: "Enjoyment / Provision",
        meaningUrdu: "سامان / فائدے کی چیز",
        quranText: "وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ",
        reference: "3:185",
        surahName: "Ali 'Imran",
        transliteration: "Wa mal-hayaatud-dunyaa illaa mataa'ul-ghuroor",
        quranEnglish: "And what is the worldly life except the enjoyment of delusion.",
        quranUrdu: "اور دنیا کی زندگی دھوکے کے سامان کے سوا کچھ نہیں"
      },
      {
        word: "مَتَّعْنَا",
        meaningEnglish: "We granted enjoyment / provision",
        meaningUrdu: "ہم نے نفع پہنچایا / سامان دیا",
        quranText: "وَلَٰكِن مَّتَّعْتَهُمْ وَآبَاءَهُمْ حَتَّىٰ نَسُوا الذِّكْرَ",
        reference: "25:18",
        surahName: "Al-Furqan",
        transliteration: "Wa laakim-matta'tahum wa aabaa'ahum hat-taa nasudh-Dhikr",
        quranEnglish: "But You provided options for them and their fathers until they forgot the message.",
        quranUrdu: "لیکن تو نے انہیں اور ان کے باپ دادا کو فائدہ اٹھانے دیا یہاں تک کہ وہ نصیحت بھول گئے"
      },
      {
        word: "تُمَتِّعُوهُنَّ",
        meaningEnglish: "Provide for them (wives)",
        meaningUrdu: "انہیں کچھ سامان دو",
        quranText: "فَمَتِّعُوهُنَّ وَسَرِّحُوهُنَّ سَرَاحًا جَمِيلًا",
        reference: "33:49",
        surahName: "Al-Ahzab",
        transliteration: "Famatti'oohunna wa sarrihoohunna saraahan jameelaa",
        quranEnglish: "Then grant them a provision and release them a pleasant release.",
        quranUrdu: "پس انہیں کچھ سامان دو اور انہیں خوبی کے ساتھ رخصت کرو"
      },
      {
        word: "يَتَمَتَّعُونَ",
        meaningEnglish: "They enjoy themselves",
        meaningUrdu: "وہ فائدے اٹھاتے ہیں",
        quranText: "وَالَّذِينَ كَفَرُوا يَتَمَتَّعُونَ وَيَأْكُلُونَ كَمَا تَأْكُلُ الْأَنْعَامُ",
        reference: "47:12",
        surahName: "Muhammad",
        transliteration: "Walladheena kafaroo yatamatta'oona wa ya'kuloona kamaa ta'kulul-an'aam",
        quranEnglish: "And those who disbelieve enjoy themselves and eat as cattle eat.",
        quranUrdu: "اور جو لوگ کافر ہیں وہ فائدہ اٹھاتے ہیں اور کھاتے ہیں جیسے چوپائے کھاتے ہیں"
      }
    ]
  },
  {
    id: "r-d-w",
    root: "ر ض و",
    rootEnglish: "To be pleased / Contentment / Approval / Grace",
    rootUrdu: "راضی ہونا / پسندیدہ / رضا",
    examples: [
      {
        word: "رَّضِيَ",
        meaningEnglish: "Is pleased",
        meaningUrdu: "راضی ہو گیا",
        quranText: "رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ",
        reference: "5:119",
        surahName: "Al-Ma'idah",
        transliteration: "Radiyallaahu 'anhum wa radoo 'anh",
        quranEnglish: "Allah is pleased with them and they are pleased with Him.",
        quranUrdu: "اللہ ان سے راضی ہو گیا اور وہ اس سے راضی ہو گئے"
      },
      {
        word: "رِضْوَانٌ",
        meaningEnglish: "Approval / Good pleasure",
        meaningUrdu: "خوشنودی / رضا",
        quranText: "وَرِضْوَانٌ مِّنَ اللَّهِ أَكْبَرُ",
        reference: "9:72",
        surahName: "At-Tawbah",
        transliteration: "Wa ridwaanum-minallaahi akbar",
        quranEnglish: "And approval from Allah is greater.",
        quranUrdu: "اور اللہ کی رضا سب سے بڑی چیز ہے"
      },
      {
        word: "تَرْضَىٰ",
        meaningEnglish: "You are pleased with",
        meaningUrdu: "تو پسند کرے",
        quranText: "فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا",
        reference: "2:144",
        surahName: "Al-Baqarah",
        transliteration: "Falanuwalliyannaka qiblatan tardaahaa",
        quranEnglish: "So We will surely turn you to a qiblah with which you will be pleased.",
        quranUrdu: "پس ہم ضرور آپ کو اس قبلہ کی طرف پھیر دیں گے جسے آپ پسند کرتے ہیں"
      },
      {
        word: "مَّرْضِيَّةً",
        meaningEnglish: "Well-pleasing / Well-pleased",
        meaningUrdu: "پسندیدہ / مقبول",
        quranText: "ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً",
        reference: "89:28",
        surahName: "Al-Fajr",
        transliteration: "Irji'ee ilaa Rabbiki raadiyatam-mardiyyah",
        quranEnglish: "Return to your Lord, well-pleased and pleasing [to Him].",
        quranUrdu: "اپنے رب کی طرف لوٹ چل اس حال میں کہ تو اس سے راضی اور وہ تجھ سے راضی"
      }
    ]
  },
  {
    id: "s-a-d",
    root: "ص ع د",
    rootEnglish: "To ascend / Mount / Earth / High place",
    rootUrdu: "اوپر چڑھنا / بلند ہونا / مٹی",
    examples: [
      {
        word: "صَعِيدًا",
        meaningEnglish: "Clean earth / soil",
        meaningUrdu: "پاک مٹی",
        quranText: "فَتَيَمَّمُوا صَعِيدًا طَيِّبًا",
        reference: "4:43",
        surahName: "An-Nisa",
        transliteration: "Fa-tayammamoo sa'eedan tayyibaa",
        quranEnglish: "Then perform tayammum with clean earth.",
        quranUrdu: "پس تم پاک مٹی سے تیمم کر لو"
      },
      {
        word: "يَصْعَدُ",
        meaningEnglish: "Ascends",
        meaningUrdu: "اوپر چڑھتا ہے",
        quranText: "إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ",
        reference: "35:10",
        surahName: "Fatir",
        transliteration: "Ilaihi yas'adul-kalimut-tayyib",
        quranEnglish: "To Him ascends good speech.",
        quranUrdu: "اسی کی طرف پاکیزہ کلمات اوپر چڑھتے ہیں"
      },
      {
        word: "يَصَّعَّدُ",
        meaningEnglish: "Climbs up / Ascends with difficulty",
        meaningUrdu: "مشکل سے چڑھتا ہے",
        quranText: "كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ",
        reference: "6:125",
        surahName: "Al-An'am",
        transliteration: "Ka-annamaa yassa''adu fis-samaa'",
        quranEnglish: "As if he were climbing into the sky.",
        quranUrdu: "گویا وہ دشواری سے آسمان میں چڑھ رہا ہے"
      },
      {
        word: "صَعُودًا",
        meaningEnglish: "Severe / Upward hardship",
        meaningUrdu: "سخت چڑھائی / عذاب",
        quranText: "سَأُرْهِقُهُ صَعُودًا",
        reference: "74:17",
        surahName: "Al-Muddaththir",
        transliteration: "Sa-urhiquhoo sa'oodaa",
        quranEnglish: "I will cover him with arduous torment.",
        quranUrdu: "عنقریب میں اس کو سخت چڑھائی (عذاب) کی تکلیف دوں گا"
      }
    ]
  },
  {
    id: "s-l-h",
    root: "ص ل ح",
    rootEnglish: "To be righteous / Good / Correct / Reconciliation",
    rootUrdu: "نیک ہونا / اصلاح کرنا / درست ہونا",
    examples: [
      {
        word: "الصَّالِحَاتِ",
        meaningEnglish: "Righteous deeds",
        meaningUrdu: "نیک اعمال",
        quranText: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ",
        reference: "2:82",
        surahName: "Al-Baqarah",
        transliteration: "Walladheena aamanoo wa 'amilus-saalihaati ulaa'ika As-haabul-Jannah",
        quranEnglish: "And those who believe and do righteous deeds - those are the companions of Paradise.",
        quranUrdu: "اور جو لوگ ایمان لائے اور انہوں نے نیک اعمال کیے وہی جنت والے ہیں"
      },
      {
        word: "أَصْلَحَ",
        meaningEnglish: "Reformed / Made amends",
        meaningUrdu: "اس نے اصلاح کی",
        quranText: "فَمَن تَابَ مِن بَعْدِ ظُلْمِهِ وَأَصْلَحَ فَإِنَّ اللَّهَ يَتُوبُ عَلَيْهِ",
        reference: "5:39",
        surahName: "Al-Ma'idah",
        transliteration: "Faman taaba mim ba'di zulmihee wa aslaha fa-innallaaha yatoobu 'alaih",
        quranEnglish: "But whoever repents after his wrongdoing and reforms, indeed Allah will turn to him in forgiveness.",
        quranUrdu: "پس جو شخص اپنے ظلم کے بعد توبہ کر لے اور اصلاح کر لے تو بیشک اللہ اس کی توبہ قبول فرمائے گا"
      },
      {
        word: "صَالِحًا",
        meaningEnglish: "Righteous",
        meaningUrdu: "نیک عمل / صالح",
        quranText: "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
        reference: "16:97",
        surahName: "An-Nahl",
        transliteration: "Man 'amila saaliham-min dhakarin aw unthaa wa huwa mu'minun falanuhyiyannahoo hayaatan tayyibah",
        quranEnglish: "Whoever does righteousness, whether male or female, while he is a believer - We will surely cause him to live a good life.",
        quranUrdu: "جس نے بھی نیک عمل کیا خواہ مرد ہو یا عورت جبکہ وہ مومن ہو تو ہم اسے ضرور پاکیزہ زندگی عطا کریں گے"
      },
      {
        word: "إِصْلَاحٌ",
        meaningEnglish: "Reconciliation / Improvement",
        meaningUrdu: "اصلاح / درستگی",
        quranText: "قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ",
        reference: "2:220",
        surahName: "Al-Baqarah",
        transliteration: "Qul islaahul-lahum khair",
        quranEnglish: "Say, 'Improvement for them is best.'",
        quranUrdu: "فرما دیجیے: ان کی اصلاح کرنا بہتر ہے"
      }
    ]
  },
  {
    id: "s-r-t",
    root: "ص ر ط",
    rootEnglish: "Path / Way / Road",
    rootUrdu: "راستہ / صراط",
    examples: [
      {
        word: "الصِّرَاطَ",
        meaningEnglish: "The Path",
        meaningUrdu: "راستہ",
        quranText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        reference: "1:6",
        surahName: "Al-Fatiha",
        transliteration: "Ihdinas-Siraatal-Mustaqeem",
        quranEnglish: "Guide us to the straight path.",
        quranUrdu: "ہمیں سیدھے راستے کی ہدایت فرما"
      },
      {
        word: "صِرَاطٍ",
        meaningEnglish: "A path",
        meaningUrdu: "ایک راستہ",
        quranText: "إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۚ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ",
        reference: "3:51",
        surahName: "Ali 'Imran",
        transliteration: "Innallaaha Rabbee wa Rabbukum fa'budooh; haadhaa Siraatum-Mustaqeem",
        quranEnglish: "Indeed, Allah is my Lord and your Lord, so worship Him. That is the straight path.",
        quranUrdu: "بیشک اللہ میرا رب اور تمہارا رب ہے پس اسی کی عبادت کرو، یہی سیدھا راستہ ہے"
      },
      {
        word: "صِرَاطِ",
        meaningEnglish: "Path of",
        meaningUrdu: "کا راستہ",
        quranText: "صِرَاطِ اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
        reference: "42:53",
        surahName: "Ash-Shura",
        transliteration: "Siraatillaahil-ladhee lahoo maa fis-samaawaati wa maa fil-ard",
        quranEnglish: "The path of Allah, to whom belongs whatever is in the heavens and whatever is on the earth.",
        quranUrdu: "اللہ کا راستہ جس کا ہے جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے"
      },
      {
        word: "صِرَاطَ",
        meaningEnglish: "Path of",
        meaningUrdu: "کا راستہ",
        quranText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        reference: "1:7",
        surahName: "Al-Fatiha",
        transliteration: "Siraatal-ladheena an'amta 'alaihim",
        quranEnglish: "The path of those upon whom You have bestowed favor.",
        quranUrdu: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا"
      }
    ]
  },
  {
    id: "w-d-a",
    root: "و ض ع",
    rootEnglish: "To put / Place / Lay down / Establish",
    rootUrdu: "رکھنا / قائم کرنا / بنانا",
    examples: [
      {
        word: "وَضَعَتْهُ",
        meaningEnglish: "She gave birth to him / laid him down",
        meaningUrdu: "اس نے اسے جنم دیا / رکھا",
        quranText: "فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنثَىٰ",
        reference: "3:36",
        surahName: "Ali 'Imran",
        transliteration: "Falammaa wada'at-haa qaalat Rabbi innee wada'tuhaa unthaa",
        quranEnglish: "But when she delivered her, she said, 'My Lord, I have delivered a female.'",
        quranUrdu: "پھر جب اس نے بچی کو جنم دیا تو کہنے لگی: اے میرے رب! میں نے تو لڑکی جنی ہے"
      },
      {
        word: "وُضِعَ",
        meaningEnglish: "Was established / set up",
        meaningUrdu: "قائم کیا گیا / بنایا گیا",
        quranText: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا",
        reference: "3:96",
        surahName: "Ali 'Imran",
        transliteration: "Inna awwala Baitin wudi'a linnaasi lal-ladhee bi-Bakkata mubaarakaa",
        quranEnglish: "Indeed, the first House [of worship] established for mankind was that at Makkah - blessed.",
        quranUrdu: "بیشک پہلا گھر جو لوگوں کے لیے بنایا گیا وہی ہے جو مکہ میں ہے، برکت والا"
      },
      {
        word: "تَضَعُوا",
        meaningEnglish: "You put off / lay down",
        meaningUrdu: "تم اتار رکھو / ڈال دو",
        quranText: "وَأَن تَضَعُوا ثِيَابَكُم مِّنَ الظَّهِيرَةِ",
        reference: "24:58",
        surahName: "An-Nur",
        transliteration: "Wa an tada'oo thiyaabakum minadh-daheerah",
        quranEnglish: "And when you put aside your clothing at noon.",
        quranUrdu: "اور جب تم دوپہر کے وقت اپنے کپڑے اتار رکھتے ہو"
      },
      {
        word: "وَوَضَعَ الْمِيزَانَ",
        meaningEnglish: "And He established the balance",
        meaningUrdu: "اور اس نے ترازو قائم کی",
        quranText: "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ",
        reference: "55:7",
        surahName: "Ar-Rahman",
        transliteration: "Was-samaa'a rafa'ahaa wa wada'al-Meezaan",
        quranEnglish: "And the heaven He raised and imposed the balance.",
        quranUrdu: "اور اس نے آسمان کو بلند کیا اور ترازو (عدل) قائم کی"
      }
    ]
  },
  {
    id: "z-h-r",
    root: "ظ ه ر",
    rootEnglish: "To appear / Manifest / Back / Assist",
    rootUrdu: "نظرا آنا / ظاہر ہونا / پیٹھ / غالب ہونا",
    examples: [
      {
        word: "الظَّاهِرُ",
        meaningEnglish: "The Manifest / Outward",
        meaningUrdu: "ظاہر / آشکار",
        quranText: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ",
        reference: "57:3",
        surahName: "Al-Hadid",
        transliteration: "Huwal-Awwalu wal-Aakhiru wadh-Dhaahiru wal-Baatin",
        quranEnglish: "He is the First and the Last, the Ascendant and the Intimate.",
        quranUrdu: "وہی اول ہے اور وہی آخر ہے اور وہی ظاہر ہے اور وہی باطن ہے"
      },
      {
        word: "ظَهَرَ",
        meaningEnglish: "Appeared / Manifested",
        meaningUrdu: "ظاہر ہو گیا / پھیل گیا",
        quranText: "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ",
        reference: "30:41",
        surahName: "Ar-Rum",
        transliteration: "Zaharal-fasaadu fil-barri wal-bahri bimaa kasabat aidin-naas",
        quranEnglish: "Corruption has appeared throughout the land and sea by reason of what the hands of people have earned.",
        quranUrdu: "خشکی اور تری میں لوگوں کے ہاتھوں کی کمائی کی وجہ سے فساد برپا ہو گیا"
      },
      {
        word: "ظُهُورِهِمْ",
        meaningEnglish: "Their backs",
        meaningUrdu: "ان کی پیٹھیں",
        quranText: "نَبَذَ فَرِيقٌ مِّنَ الَّذِينَ أُوتُوا الْكِتَابَ كِتَابَ اللَّهِ وَرَاءَ ظُهُورِهِمْ",
        reference: "2:101",
        surahName: "Al-Baqarah",
        transliteration: "Nabadha fareequm-minal-ladheena ootul-Kitaaba Kitaaballaahi waraa'a zuhoorihim",
        quranEnglish: "A party of those who were given the Scripture threw the Scripture of Allah behind their backs.",
        quranUrdu: "اہل کتاب میں سے ایک گروہ نے اللہ کی کتاب کو اپنی پیٹھ پیچھے پھینک دیا"
      },
      {
        word: "يُظْهِرَهُ",
        meaningEnglish: "To make it prevail / manifest",
        meaningUrdu: "تاکہ اسے غالب کر دے",
        quranText: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ",
        reference: "9:33",
        surahName: "At-Tawbah",
        transliteration: "Huwal-ladhee arsala Rasoolahoo bil-hudaa wa deenil-haqqi liyudhirahoo 'alad-deeni kullih",
        quranEnglish: "It is He who has sent His Messenger with guidance and the religion of truth to manifest it over all religion.",
        quranUrdu: "وہی ہے جس نے اپنے رسول کو ہدایت اور سچے دین کے ساتھ بھیجا تاکہ اسے تمام ادیان پر غالب کر دے"
      }
    ]
  }
];

if (typeof QURANIC_ROOTS_DATA === 'undefined') {
  window.QURANIC_ROOTS_DATA = [];
}
QURANIC_ROOTS_DATA.push(...BATCH_8_ROOTS);
