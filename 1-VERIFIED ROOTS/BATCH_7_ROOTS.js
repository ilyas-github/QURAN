// ==========================================
// BATCH 7: ROOT ENTRIES - VERIFIED DATASET
// Corrected: removed 11 roots that duplicated Batches 2/4/5
// (أمر، فعل، غفر، كفر، علم، نزل، قدر، قول، شهد، وجد) plus one
// misclassified pseudo-root (تنزل, which is really the ن ز ل root
// with a Form-V prefix, not a distinct triliteral root).
// Fixed 1 wrong verse reference and 2 word-field mismatches in the
// surviving roots. See audit notes.
// 9 unique roots in this corrected batch.
// ==========================================

const BATCH_7_ROOTS = [
  {
    id: "dh-k-r",
    root: "ذ ك ر",
    rootEnglish: "To remember / Mention / Mindful / Reminder",
    rootUrdu: "یاد کرنا / ذکر کرنا / نصیحت",
    examples: [
      {
        word: "اذْكُرُونِي",
        meaningEnglish: "Remember Me (command)",
        meaningUrdu: "مجھے یاد کرو",
        quranText: "فَاذْكُرُونِي أَذْكُرْكُمْ",
        reference: "2:152",
        surahName: "Al-Baqarah",
        transliteration: "Fadhkuroonee adhkurkum",
        quranEnglish: "So remember Me; I will remember you.",
        quranUrdu: "پس تم مجھے یاد کرو، میں تمہیں یاد رکھوں گا"
      },
      {
        word: "ذِكْرُ",
        meaningEnglish: "Remembrance / Reminder",
        meaningUrdu: "ذکر / یاد",
        quranText: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        reference: "13:28",
        surahName: "Ar-Ra'd",
        transliteration: "Alaa bidhikrillaahi tatma'innul-quloob",
        quranEnglish: "Unquestionably, by the remembrance of Allah hearts find rest.",
        quranUrdu: "خبردار! اللہ کے ذکر ہی سے دل اطمینان پاتے ہیں"
      },
      {
        word: "تَذَكَّرُونَ",
        meaningEnglish: "You take heed / remember",
        meaningUrdu: "تم نصیحت حاصل کرتے ہو",
        quranText: "أَفَمَن يَخْلُقُ كَمَن لَّا يَخْلُقُ ۗ أَفَلَا تَذَكَّرُونَ",
        reference: "16:17",
        surahName: "An-Nahl",
        transliteration: "Afamany-yakhluqu kamal-laa yakhluq, afalaa tadhak-karoon",
        quranEnglish: "Then is He who creates like one who does not create? So will you not be reminded?",
        quranUrdu: "کیا وہ جو پیدا کرتا ہے اس جیسا ہو سکتا ہے جو پیدا نہیں کرتا؟ کیا تم پھر بھی نصیحت نہیں پکڑتے؟"
      },
      {
        word: "ذِكْرَىٰ",
        meaningEnglish: "A reminder",
        meaningUrdu: "نصیحت / یاد دہانی",
        quranText: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
        reference: "51:55",
        surahName: "Adh-Dhariyat",
        transliteration: "Wa dhakkir fa-innadh-dhikraa tanfa'ul-mu'mineen",
        quranEnglish: "And remind, for indeed, the reminder benefits the believers.",
        quranUrdu: "اور نصیحت کرتے رہیں، کیونکہ نصیحت مومنوں کو نفع دیتی ہے"
      }
    ]
  },
  {
    id: "h-s-n",
    root: "ح س ن",
    rootEnglish: "Good / Beautiful / Excellence / Best",
    rootUrdu: "اچھا / خوبصورت / احسان / نیک",
    examples: [
      {
        word: "أَحْسَنُ",
        meaningEnglish: "Best / Better",
        meaningUrdu: "بہترین / زیادہ اچھا",
        quranText: "وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً",
        reference: "2:138",
        surahName: "Al-Baqarah",
        transliteration: "Wa man ahsanu minallaahi sibghah",
        quranEnglish: "And who is better than Allah in coloring [religion]?",
        quranUrdu: "اور اللہ سے بہتر رنگ کس کا ہو سکتا ہے؟"
      },
      {
        word: "الْمُحْسِنِينَ",
        meaningEnglish: "The doers of good",
        meaningUrdu: "احسان کرنے والے / نیک لوگ",
        quranText: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
        reference: "2:195",
        surahName: "Al-Baqarah",
        transliteration: "Innallaaha yuhibbul-muhsineen",
        quranEnglish: "Indeed, Allah loves the doers of good.",
        quranUrdu: "بیشک اللہ احسان کرنے والوں سے محبت فرماتا ہے"
      },
      {
        word: "حَسَنَةً",
        meaningEnglish: "Goodness / Good deed",
        meaningUrdu: "بھلائی / نیکی",
        quranText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
        reference: "2:201",
        surahName: "Al-Baqarah",
        transliteration: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanah",
        quranEnglish: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good.",
        quranUrdu: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی دے اور آخرت میں بھی بھلائی دے"
      },
      {
        word: "أَحْسَنَ",
        meaningEnglish: "He made perfect / did good",
        meaningUrdu: "اس نے بہترین بنایا / احسان کیا",
        quranText: "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ",
        reference: "32:7",
        surahName: "As-Sajdah",
        transliteration: "Al-ladhee ahsana kulla shai'in khalaqah",
        quranEnglish: "Who perfected everything which He created.",
        quranUrdu: "جس نے ہر چیز کو جو اس نے بنائی، بہترین بنایا"
      }
    ]
  },
  {
    id: "kh-r-j",
    root: "خ ر ج",
    rootEnglish: "To go out / Exit / Bring forth / Emerge",
    rootUrdu: "نکلنا / نکالنا / خارج ہونا",
    examples: [
      {
        word: "يُخْرِجُ",
        meaningEnglish: "He brings out",
        meaningUrdu: "وہ نکالتا ہے",
        quranText: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ",
        reference: "3:27",
        surahName: "Ali 'Imran",
        transliteration: "Yukhrijul-hayya minal-mayyiti wa yukhrijul-mayyita minal-hayy",
        quranEnglish: "You bring the living out of the dead and You bring the dead out of the living.",
        quranUrdu: "تو ہی زُندہ کو مَردہ سے نکالتا ہے اور مَردہ کو زُندہ سے نکالتا ہے"
      },
      {
        word: "خَرَجُوا",
        meaningEnglish: "They went out",
        meaningUrdu: "وہ نکلے",
        quranText: "أَلَمْ تَرَ إِلَى الَّذِينَ خَرَجُوا مِن دِيَارِهِمْ وَهُمْ أُلُوفٌ حَذَرَ الْمَوْتِ",
        reference: "2:243",
        surahName: "Al-Baqarah",
        transliteration: "Alam tara ilal-ladheena kharajoo min diyaarihim wa hum uloofun hadharal-mawt",
        quranEnglish: "Did you not consider those who left their homes in many thousands, fearing death?",
        quranUrdu: "کیا آپ نے ان لوگوں کو نہیں دیکھا جو موت کے ڈر سے اپنے گھروں سے نکل بھاگے تھے اور وہ ہزاروں تھے"
      },
      {
        word: "أَخْرَجَكُمْ",
        meaningEnglish: "He brought you forth",
        meaningUrdu: "اس نے تمہیں نکالا",
        quranText: "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا",
        reference: "16:78",
        surahName: "An-Nahl",
        transliteration: "Wallaahu akhrajakum mim butooni ummahaatikum laa ta'lamoona shai'aa",
        quranEnglish: "And Allah has extracted you from the wombs of your mothers not knowing a thing.",
        quranUrdu: "اور اللہ نے تمہیں تمہاری ماؤں کے پیٹ سے اس حال میں نکالا کہ تم کچھ نہ جانتے تھے"
      },
      {
        word: "خُرُوجٌ",
        meaningEnglish: "Exit / Emerging",
        meaningUrdu: "نکلنا / برآمد ہونا",
        quranText: "يَوْمَ يَسْمَعُونَ الصَّيْحَةَ بِالْحَقِّ ۚ ذَٰلِكَ يَوْمُ الْخُرُوجِ",
        reference: "50:42",
        surahName: "Qaf",
        transliteration: "Yawma yasma'oonas-saihaata bil-haqq, dhaalika Yawmul-Khurooj",
        quranEnglish: "The Day they will hear the blast in truth. That is the Day of Emergence.",
        quranUrdu: "جس دن وہ سچی چیخ سنیں گے، وہی نکلنے کا دن ہوگا"
      }
    ]
  },
  {
    id: "r-h-m",
    root: "ر ح م",
    rootEnglish: "Mercy / Compassion / Womb",
    rootUrdu: "رحم کرنا / مہربانی / رحم دلی / رحم (پیٹ)",
    examples: [
      {
        word: "الرَّحْمَٰنِ",
        meaningEnglish: "The Most Gracious",
        meaningUrdu: "بہت مہربان",
        quranText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        reference: "1:1",
        surahName: "Al-Fatiha",
        transliteration: "Bismillaahir-Rahmaanir-Raheem",
        quranEnglish: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        quranUrdu: "اللہ کے نام سے شروع جو نہایت مہربان، رحم فرمانے والا ہے"
      },
      {
        word: "رَحْمَةً",
        meaningEnglish: "Mercy",
        meaningUrdu: "رحمت",
        quranText: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً",
        reference: "3:8",
        surahName: "Ali 'Imran",
        transliteration: "Rabbanaa laa tuzigh quloobanaa ba'da idh hadaitanaa wa hab lanaa mil-ladunka rahmah",
        quranEnglish: "Our Lord, let not our hearts swerve after You have guided us and grant us from Yourself mercy.",
        quranUrdu: "اے ہمارے رب! ہمارے دلوں کو ہدایت دینے کے بعد ٹیڑھا نہ کر اور ہمیں اپنے پاس سے رحمت عطا فرما"
      },
      {
        word: "ارْحَمْنَا",
        meaningEnglish: "Have mercy on us",
        meaningUrdu: "ہم پر رحم فرما",
        quranText: "وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا",
        reference: "2:286",
        surahName: "Al-Baqarah",
        transliteration: "Wa'fu 'annaa waghfir lanaa warhamnaa",
        quranEnglish: "And pardon us; and forgive us; and have mercy upon us.",
        quranUrdu: "اور ہم سے درگزر فرما، اور ہمیں بخش دے، اور ہم پر رحم فرما"
      },
      {
        word: "الْأَرْحَامَ",
        meaningEnglish: "The wombs / Ties of kinship",
        meaningUrdu: "رحم (پیٹ) / رشتہ داریاں",
        quranText: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ",
        reference: "4:1",
        surahName: "An-Nisa",
        transliteration: "Wat-taqullaahal-ladhee tasaa'aloona bihee wal-arhaam",
        quranEnglish: "And fear Allah, through whom you ask one another, and the wombs.",
        quranUrdu: "اور اللہ سے ڈرو جس کے نام پر تم ایک دوسرے سے مانگتے ہو اور رشتہ داریوں کے توڑنے سے ڈرو"
      }
    ]
  },
  {
    id: "s-a-l",
    root: "س أ ل",
    rootEnglish: "To ask / Question / Inquire / Demand",
    rootUrdu: "پوچھنا / سوال کرنا / مانگنا",
    examples: [
      {
        word: "سَأَلَكَ",
        meaningEnglish: "Asks you",
        meaningUrdu: "آپ سے پوچھے",
        quranText: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
        reference: "2:186",
        surahName: "Al-Baqarah",
        transliteration: "Wa idhaa sa'alaka 'ibaadee 'annee fa-innee qareeb",
        quranEnglish: "And when My servants ask you concerning Me, indeed I am near.",
        quranUrdu: "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو میں قریب ہوں"
      },
      {
        word: "يَسْأَلُونَكَ",
        meaningEnglish: "They ask you",
        meaningUrdu: "وہ آپ سے پوچھتے ہیں",
        quranText: "يَسْأَلُونَكَ عَنِ الْأَهِلَّةِ ۖ قُلْ هِيَ مَوَاقِيتُ لِلنَّاسِ وَالْحَجِّ",
        reference: "2:189",
        surahName: "Al-Baqarah",
        transliteration: "Yas'aloonaka 'anil-ahillah, qul hiya mawaaqeetu linnaasi wal-Hajj",
        quranEnglish: "They ask you concerning the new moons. Say, 'They are measurements of time for the people and for Hajj.'",
        quranUrdu: "وہ آپ سے نئے چاند کے بارے میں پوچھتے ہیں، فرما دیجیے: یہ لوگوں اور حج کے لیے وقت کی علامتیں ہیں"
      },
      {
        word: "تَسْأَلْنِ",
        meaningEnglish: "Ask me (command/prohibition)",
        meaningUrdu: "مجھ سے سوال کرو",
        quranText: "فَلَا تَسْأَلْنِ مَا لَيْسَ لَكَ بِهِ عِلْمٌ",
        reference: "11:46",
        surahName: "Hud",
        transliteration: "Falaa tas'alni maa laisa laka bihee 'ilm",
        quranEnglish: "So do not ask Me for that of which you have no knowledge.",
        quranUrdu: "پس مجھ سے اس چیز کا سوال نہ کرو جس کا تمہیں علم نہیں"
      },
      {
        word: "لَنَسْأَلَنَّهُمْ",
        meaningEnglish: "We will surely question them",
        meaningUrdu: "ہم ان سے ضرور سوال کریں گے",
        quranText: "فَوَرَبِّكَ لَنَسْأَلَنَّهُمْ أَجْمَعِينَ عَمَّا كَانُوا يَعْمَلُونَ",
        reference: "15:92-93",
        surahName: "Al-Hijr",
        transliteration: "Fa-wa-Rabbika la-nas'alannahum ajma'een 'ammaa kaanoo ya'maloon",
        quranEnglish: "So by your Lord, We will surely question them all about what they used to do.",
        quranUrdu: "پس آپ کے رب کی قسم! ہم ان تمام سے ان کاموں کے بارے میں ضرور پوچھیں گے جو وہ کرتے تھے"
      }
    ]
  },
  {
    id: "s-b-h",
    root: "س ب ح",
    rootEnglish: "To glorify / Praise / Swim / Float",
    rootUrdu: "تسبیح بیان کرنا / پاکی بیان کرنا / تیرنا",
    examples: [
      {
        word: "سَبَّحَ",
        meaningEnglish: "Glorifies",
        meaningUrdu: "تسبیح بیان کی",
        quranText: "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ",
        reference: "57:1",
        surahName: "Al-Hadid",
        transliteration: "Sabbaha lillaahi maa fis-samaawaati wal-ard",
        quranEnglish: "Whatever is in the heavens and earth glorifies Allah.",
        quranUrdu: "آسمانوں اور زمین میں جو کچھ ہے سب اللہ کی تسبیح بیان کرتا ہے"
      },
      {
        word: "سُبْحَانَ",
        meaningEnglish: "Glory be to / Exalted is He",
        meaningUrdu: "پاک ہے وہ",
        quranText: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا",
        reference: "17:1",
        surahName: "Al-Isra",
        transliteration: "Subhaanal-ladhee asraa bi-'abdihee lailaa",
        quranEnglish: "Exalted is He who took His Servant by night.",
        quranUrdu: "پاک ہے وہ ذات جو رات کے وقت اپنے بندے کو لے گئی"
      },
      {
        word: "سَبِّحْ",
        meaningEnglish: "Glorify (command)",
        meaningUrdu: "تسبیح کرو",
        quranText: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ",
        reference: "110:3",
        surahName: "An-Nasr",
        transliteration: "Fa-sabbih bi-hamdi Rabbika wastaghfirh",
        quranEnglish: "Then exalt [Him] with praise of your Lord and ask forgiveness of Him.",
        quranUrdu: "پس اپنے رب کی حمد کے ساتھ تسبیح کریں اور اس سے مغفرت مانگیں"
      },
      {
        word: "يَسْبَحُونَ",
        meaningEnglish: "They float / swim",
        meaningUrdu: "وہ تیرتے ہیں",
        quranText: "وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
        reference: "21:33",
        surahName: "Al-Anbiya",
        transliteration: "Wa kullun fee falakiny-yasbahoon",
        quranEnglish: "And all [heavenly bodies] in an orbit are swimming.",
        quranUrdu: "اور سب ایک ایک فلک میں تیر رہے ہیں"
      }
    ]
  },
  {
    id: "sh-r-k",
    root: "ش ر ك",
    rootEnglish: "To associate / Partner / Polytheism / Share",
    rootUrdu: "شریک کرنا / شراکت / شرک",
    examples: [
      {
        word: "يُشْرِكُونَ",
        meaningEnglish: "They associate partners",
        meaningUrdu: "وہ شریک ٹھہراتے ہیں",
        quranText: "سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ",
        reference: "59:23",
        surahName: "Al-Hashr",
        transliteration: "Subhaanallaahi 'ammaa yushrikoon",
        quranEnglish: "Exalted is Allah above whatever they associate with Him.",
        quranUrdu: "اللہ پاک ہے اس شرک سے جو وہ کرتے ہیں"
      },
      {
        word: "شَرِيكَ",
        meaningEnglish: "Partner",
        meaningUrdu: "شریک",
        quranText: "لَا شَرِيكَ لَهُ ۖ وَبِذَٰلِكَ أُمِرْتُ",
        reference: "6:163",
        surahName: "Al-An'am",
        transliteration: "Laa shareeka lahoo wa bidhaalika umirt",
        quranEnglish: "No partner has He. And this I have been commanded.",
        quranUrdu: "اس کا کوئی شریک نہیں، اور مجھے اسی کا حکم دیا گیا ہے"
      },
      {
        word: "شُرَكَاءَ",
        meaningEnglish: "Partners (plural)",
        meaningUrdu: "شرکاء / شریک لوگ",
        quranText: "أَمْ لَهُمْ شُرَكَاءُ شَرَعُوا لَهُم مِّنَ الدِّينِ مَا لَمْ يَأْذَن بِهِ اللَّهُ",
        reference: "42:21",
        surahName: "Ash-Shura",
        transliteration: "Am lahum shurakaa'u shara'oo lahum minad-deeni maa lam ya'dhambihillaah",
        quranEnglish: "Or have they other deities who have ordained for them a religion to which Allah has not consented?",
        quranUrdu: "کیا ان کے ایسے شریک ہیں جنہوں نے ان کے لیے دین کی ایسی بات مقرر کی ہے جس کی اللہ نے اجازت نہیں دی؟"
      },
      {
        word: "تُشْرِكْ",
        meaningEnglish: "Associate partners (prohibition)",
        meaningUrdu: "شریک نہ ٹھہرا",
        quranText: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا",
        reference: "4:36",
        surahName: "An-Nisa",
        transliteration: "Wa'budullaaha wa laa tushrikoo bihee shai'aa",
        quranEnglish: "Worship Allah and associate nothing with Him.",
        quranUrdu: "اور اللہ کی عبادت کرو اور اس کے ساتھ کسی کو شریک نہ ٹھہراؤ"
      }
    ]
  },
  {
    id: "y-a-m",
    root: "ي و م",
    rootEnglish: "Day / Period of time / Era",
    rootUrdu: "دن / روز / وقت / دور",
    examples: [
      {
        word: "يَوْمِ",
        meaningEnglish: "Day",
        meaningUrdu: "دن",
        quranText: "مَالِكِ يَوْمِ الدِّينِ",
        reference: "1:4",
        surahName: "Al-Fatiha",
        transliteration: "Maaliki Yawmid-Deen",
        quranEnglish: "Sovereign of the Day of Recompense.",
        quranUrdu: "جزا کے دن کا مالک"
      },
      {
        word: "الْيَوْمَ",
        meaningEnglish: "Today / This day",
        meaningUrdu: "آج کا دن",
        quranText: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",
        reference: "5:3",
        surahName: "Al-Ma'idah",
        transliteration: "Al-Yawma akmaltu lakum deenakum",
        quranEnglish: "This day I have perfected for you your religion.",
        quranUrdu: "آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا"
      },
      {
        word: "يَوْمَئِذٍ",
        meaningEnglish: "On that Day",
        meaningUrdu: "اس دن",
        quranText: "وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ",
        reference: "75:22",
        surahName: "Al-Qiyamah",
        transliteration: "Wujoohuny-yawma'idhin naadirah",
        quranEnglish: "[Some] faces, that Day, will be radiant.",
        quranUrdu: "اس دن کتنے ہی چہرے ترو تازہ ہوں گے"
      },
      {
        word: "أَيَّامًا",
        meaningEnglish: "Days",
        meaningUrdu: "دن (جمع)",
        quranText: "أَيَّامًا مَّعْدُودَاتٍ",
        reference: "2:184",
        surahName: "Al-Baqarah",
        transliteration: "Ayyaamam-ma'doodaat",
        quranEnglish: "[Fasting for] a limited number of days.",
        quranUrdu: "گنتی کے چند دن"
      }
    ]
  },
  {
    id: "z-k-y",
    root: "ز ك ي",
    rootEnglish: "To purify / Growth / Charity / Zakat",
    rootUrdu: "پاک ہونا / پاکیزگی / زکوٰۃ دینا",
    examples: [
      {
        word: "الزَّكَاةَ",
        meaningEnglish: "The zakah / Charity",
        meaningUrdu: "زکوٰۃ",
        quranText: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
        reference: "2:43",
        surahName: "Al-Baqarah",
        transliteration: "Wa aqeemus-salaata wa aatuz-zakaah",
        quranEnglish: "And establish prayer and give zakah.",
        quranUrdu: "اور نماز قائم کرو اور زکوٰۃ ادا کرو"
      },
      {
        word: "زَكَّاهَا",
        meaningEnglish: "Purifies it",
        meaningUrdu: "اسے پاک کیا",
        quranText: "قَدْ أَفْلَحَ مَن زَكَّاهَا",
        reference: "91:9",
        surahName: "Ash-Shams",
        transliteration: "Qad aflaha man zak-kaahaa",
        quranEnglish: "He has succeeded who purifies it.",
        quranUrdu: "بیشک وہ کامیاب ہو گیا جس نے اپنے نفس کو پاک کر لیا"
      },
      {
        word: "تُزَكُّوا",
        meaningEnglish: "Claim purity (command/prohibition)",
        meaningUrdu: "پاکیزہ نہ سمجھو",
        quranText: "فَلَا تُزَكُّوا أَنفُسَكُمْ ۖ هُوَ أَعْلَمُ بِمَنِ اتَّقَىٰ",
        reference: "53:32",
        surahName: "An-Najm",
        transliteration: "Falaa tuzak-koo anfusakum, Huwa a'lamu bimanit-taqaa",
        quranEnglish: "So do not claim yourselves to be pure; He is most knowing of who fears Him.",
        quranUrdu: "پس تم اپنی خود پاکیزگی نہ بیان کرو، وہی خوب جانتا ہے کہ پرہیزگار کون ہے"
      },
      {
        word: "زَكِيَّةً",
        meaningEnglish: "Pure / Innocent soul",
        meaningUrdu: "پاکیزہ / بے گناہ",
        quranText: "أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ",
        reference: "18:74",
        surahName: "Al-Kahf",
        transliteration: "Aqatalta nafsan zakiyyatam-bighairi nafs",
        quranEnglish: "Have you killed a pure soul for other than [having killed] a soul?",
        quranUrdu: "کیا آپ نے ایک بے گناہ جان کو بغیر کسی نا حق قتل کے مار دیا؟"
      }
    ]
  }
];

if (typeof QURANIC_ROOTS_DATA === 'undefined') {
  window.QURANIC_ROOTS_DATA = [];
}
QURANIC_ROOTS_DATA.push(...BATCH_7_ROOTS);
