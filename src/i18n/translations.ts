export type Language = 'uz' | 'en' | 'ru';

export interface TranslationData {
  nav: {
    work: string;
    services: string;
    why: string;
    process: string;
    about: string;
    pricing: string;
    contact: string;
    startProject: string;
    mobileMenuTitle: string;
    studioSubtitle: string;
    locationNote: string;
    worldwideNote: string;
  };
  cursor: {
    view: string;
  };
  hero: {
    statusLabel: string;
    availability: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    description: string;
    viewWorkBtn: string;
    startProjectBtn: string;
    metrics: {
      focusLabel: string;
      focusVal: string;
      standardLabel: string;
      standardVal: string;
      perfLabel: string;
      perfVal: string;
      locationLabel: string;
      locationVal: string;
    };
  };
  services: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    deliverablesLabel: string;
    customTag: string;
    customTitle: string;
    customDesc: string;
    customCta: string;
    items: {
      id: string;
      number: string;
      title: string;
      description: string;
      deliverables: string[];
    }[];
  };
  portfolio: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    categories: Record<string, string>;
    projectPrefix: string;
    viewProject: string;
    livePreview: string;
    clickToExplore: string;
    projects: {
      id: string;
      title: string; // Brand name (untranslated)
      category: string;
      categoryType: string;
      shortDescription: string;
      fullDescription: string;
      client: string;
      year: string;
      location: string;
      deliverables: string[];
      metrics: { label: string; value: string }[];
      keyFeatures: string[];
      testimonial?: {
        quote: string;
        author: string;
        role: string;
      };
    }[];
    modal: {
      caseStudyPrefix: string;
      clientLabel: string;
      yearLabel: string;
      locationLabel: string;
      categoryLabel: string;
      liveBuildBadge: string;
      studioCraftBadge: string;
      architectureHeading: string;
      highlightsHeading: string;
      similarStandardPrompt: string;
      closeBtn: string;
      commissionBtn: string;
    };
  };
  whyUs: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    features: {
      title: string;
      description: string;
      detail: string;
    }[];
    guaranteeText: string;
    wcagTag: string;
    zeroSlopTag: string;
  };
  process: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    steps: {
      step: string;
      title: string;
      description: string;
      details: string[];
    }[];
    estimatedTimelineLabel: string;
    estimatedTimelineText: string;
    timelineTag: string;
  };
  about: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    p1Bold: string;
    p1Rest: string;
    p2: string;
    locationBoxTitle: string;
    locationBoxText: string;
    stats: {
      value: string;
      label: string;
      note: string;
    }[];
  };
  pricing: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    currencyLabel: string;
    mostPopularBadge: string;
    includesLabel: string;
    disclaimer: string;
    plans: {
      id: string;
      name: string;
      priceUsd: number;
      priceUzs: string;
      description: string;
      turnaroundTime: string;
      features: string[];
      ctaText: string;
    }[];
  };
  cta: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    startProjectBtn: string;
    instagramBtn: string;
  };
  contact: {
    sectionTag: string;
    titlePart1: string;
    titlePart2: string;
    nameLabel: string;
    namePlaceholder: string;
    businessLabel: string;
    businessPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    projectTypeLabel: string;
    budgetLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    validation: {
      name: string;
      emailRequired: string;
      emailInvalid: string;
      phone: string;
      message: string;
    };
    success: {
      title: string;
      greeting: string;
      thankYou: string;
      summaryHeading: string;
      typeLabel: string;
      budgetLabel: string;
      contactLabel: string;
      telegramBtn: string;
      newInquiryBtn: string;
    };
    projectTypes: Record<string, string>;
    budgetTiers: Record<string, string>;
    directChannelsTitle: string;
    telegramTag: string;
    telegramStatus: string;
    telegramSubtext: string;
    emailTag: string;
    emailSubtext: string;
    phoneTag: string;
    studioLocationTag: string;
    studioLocationVal: string;
    studioLocationNote: string;
  };
  instagram: {
    tag: string;
    description: string;
    btn: string;
    highlights: {
      id: string;
      title: string;
      tag: string;
      caption: string;
    }[];
  };
  footer: {
    tagline: string;
    hqNote: string;
    navigationTitle: string;
    socialTitle: string;
    backToTop: string;
    rights: string;
    craftsmanship: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  uz: {
    nav: {
      work: 'Ishlarimiz',
      services: 'Xizmatlar',
      why: 'Nega LUXWEB',
      process: 'Jarayon',
      about: 'Biz haqimizda',
      pricing: 'Tariflar',
      contact: 'Aloqa',
      startProject: 'Loyihani boshlash',
      mobileMenuTitle: 'Sayt Menyusi',
      studioSubtitle: 'Raqamli Studiya · UZ',
      locationNote: 'Toshkent, UZ',
      worldwideNote: 'Butun dunyo bo‘yicha',
    },
    cursor: {
      view: "KO'RISH",
    },
    hero: {
      statusLabel: 'LUXWEB / RAQAMLI STUDIYA',
      availability: 'O‘zbekistonda joylashgan · Butun dunyo bo‘yicha mavjud',
      headlinePart1: 'BIZ RAQAMLI',
      headlinePart2: 'TAJRIBALAR YARATAMIZ.',
      subheadline: 'Ambitsiyali bizneslar uchun premium veb-saytlar.',
      description: 'LUXWEB zamonaviy bizneslarni internetda eksklyuziv va ishonchli ko‘rsatuvchi yuqori tezlikdagi premium veb-saytlarni yaratadi.',
      viewWorkBtn: 'Ishlarimizni ko‘rish',
      startProjectBtn: 'Loyihani boshlash',
      metrics: {
        focusLabel: 'Fokus',
        focusVal: 'Premium raqamli flagmanlar',
        standardLabel: 'Standart',
        standardVal: 'Eksklyuziv me’moriy kod',
        perfLabel: 'Tezlik',
        perfVal: 'Soniyadan tez yuklanish (99/100)',
        locationLabel: 'Manzil',
        locationVal: 'Toshkent · Butun dunyo',
      },
    },
    services: {
      sectionTag: 'NIMA BILAN SHUG‘ULLANAMIZ',
      titlePart1: 'G‘OYALARNI RAQAMLI',
      titlePart2: 'TAJRIBAGA AYLANTIRAMIZ.',
      deliverablesLabel: 'Natijalar',
      customTag: 'INDIVIDUAL',
      customTitle: 'MAXSUS LOYIHALAR',
      customDesc: 'Nostandart g‘oya, murakkab veb-ilova yoki shaxsiy lyuks brendingiz bormi? Biz sizga mos individual raqamli tajriba yaratamiz.',
      customCta: 'Studiya rahbari bilan maslahatlashish →',
      items: [
        {
          id: 'business',
          number: '01',
          title: 'BIZNES SAYTLAR',
          description: 'Ishonch uyg‘otadigan va yangi mijozlar oqimini jalb qiladigan professional veb-saytlar.',
          deliverables: ['Eksklyuziv UI/UX dizayn', 'Konversiya arxitekturasi', 'Qidiruv tizimi optimizatsiyasi (SEO)', 'Lid yig‘ish tizimi', 'Yuqori tezlikdagi stek'],
        },
        {
          id: 'beauty',
          number: '02',
          title: 'GO‘ZALLIK VA BARBER',
          description: 'Go‘zallik salonlari, barbershoplar va estetik brendlar uchun nafis veb-saytlar.',
          deliverables: ['Onlayn yozilish tizimi', 'Vizual lukbuk galereyasi', 'Xizmatlar va narxlar menyusi', 'Mutaxassislar portfoliosi', 'Instagram bilan sinxronizatsiya'],
        },
        {
          id: 'restaurants',
          number: '03',
          title: 'RESTORANLAR',
          description: 'Restoranlar, kafelar va gastronomik bizneslar uchun zamonaviy raqamli tajriba.',
          deliverables: ['Interaktiv taomlar menyusi', 'Stol band qilish (bron) tizimi', 'Atmosfera va interyer videolari', 'Mavsumiy va oshpaz taomlari', 'Telegram orqali to‘g‘ridan-to‘g‘ri buyurtma'],
        },
        {
          id: 'automotive',
          number: '04',
          title: 'AVTOMOTIV',
          description: 'Avtosalonlar, dilerlar, tyuning va avto-detayling markazlari uchun premium saytlar.',
          deliverables: ['Avtomobillar shourumi', 'Interaktiv 360° texnik parametrlar', 'Servis maslahatiga yozilish', 'Kredit va so‘rov formasi', 'To‘q rangli yuqori kontrastli estetika'],
        },
        {
          id: 'education',
          number: '05',
          title: 'TA’LIM',
          description: 'O‘quv markazlari, onlayn kurslar va repetitorlar uchun zamonaviy platformalar.',
          deliverables: ['O‘quv dasturlari katalogi', 'Talabalarni ro‘yxatga olish voronkasi', 'Ustozlar va mentorlar profili', 'Narxlar va dars jadvallari', 'Diagnostik test topshirish tizimi'],
        },
      ],
    },
    portfolio: {
      sectionTag: 'TANLANGAN ISHLAR',
      titlePart1: 'ESDA QOLARLI DARAJADA',
      titlePart2: 'YARATILGAN.',
      categories: {
        All: 'Barchasi',
        Beauty: 'Go‘zallik',
        Automotive: 'Avtomotiv',
        Restaurant: 'Restoran',
        Education: 'Ta’lim',
        Business: 'Biznes',
      },
      projectPrefix: 'Loyiha',
      viewProject: 'Loyihani ko‘rish',
      livePreview: 'Jonli namoyish',
      clickToExplore: 'To‘liq keysni ko‘rish uchun bosing',
      projects: [
        {
          id: 'luxe-beauty',
          title: 'LUXE BEAUTY',
          category: 'Go‘zallik / Veb-dizayn',
          categoryType: 'Beauty',
          shortDescription: 'Zamonaviy go‘zallik studiyasi uchun yaratilgan nafis va zamonaviy raqamli tajriba.',
          fullDescription: 'Toshkent markazidagi elita kosmetologiya va soch atelesi uchun yaratilgan raqamli flagman. Sayt tahririyat tipografiyasi, qulay onlayn band qilish tizimi va mijozlar oqimini 180% ga oshirgan interaktiv menyuni o‘z ichiga oladi.',
          client: 'Luxe Beauty Atelier',
          year: '2026',
          location: 'Toshkent, UZ',
          deliverables: ['Kreativ yo‘nalish', 'Brend strategiyasi', 'Maxsus React veb-tajribasi', 'Interaktiv band qilish tizimi', 'Mobil optimizatsiya'],
          metrics: [
            { label: 'Band qilish konversiyasi', value: '+184%' },
            { label: 'Mobil foydalanuvchilar', value: '91%' },
            { label: 'O‘rtacha sessiya vaqti', value: '3d 42s' },
          ],
          keyFeatures: [
            'Kategoriyalangan narxlar bilan interaktiv xizmatlar lukbuki',
            'Telegram bot va WhatsApp bilan integratsiyalashgan bir bosishda bron qilish',
            'Luks mikro-interaksiyalar bilan boyitilgan estetik vizual dizayn',
            'Eng yangi smartfon ekranlariga moslashtirilgan soniyadan tez sahifa yuklanishi',
          ],
          testimonial: {
            quote: 'LUXWEB Toshkentda salonimiz qanday qabul qilinishini butunlay o‘zgartirdi. Mijozlarimiz doimo sayt qanchalik qimmatbaho va silliq ishlashini maqtashadi.',
            author: 'Kamila Rustamova',
            role: 'Asoschi va Kreativ direktor, Luxe Beauty',
          },
        },
        {
          id: 'velora-auto',
          title: 'VELORA AUTO',
          category: 'Avtomotiv / Veb-dizayn',
          categoryType: 'Automotive',
          shortDescription: 'Eksklyuziv avtomobillar shourumi va katalogi uchun yuqori darajadagi raqamli platforma.',
          fullDescription: 'Luks avtomobil importyori va maxsus detailing studiyasi uchun yaratilgan mot-qora raqamli platforma. Aniq texnik parametrlar, kinematik tasvirlar va VIP mijozlar uchun tezkor konsultatsiya tizimini taqdim etadi.',
          client: 'Velora Automotive Group',
          year: '2026',
          location: 'Toshkent, UZ',
          deliverables: ['Raqamli shourum UI', 'Interaktiv texnik parametrlar matritsasi', 'Yuqori tezlikdagi dvigatel', 'VIP konsyerj portali'],
          metrics: [
            { label: 'Sifatli lidlar o‘sishi', value: '3.4x' },
            { label: 'Shourumga so‘rovlar', value: '+210%' },
            { label: 'Tezlik reytingi', value: '99/100' },
          ],
          keyFeatures: [
            'Dinamik yuqori kontrastli avtomobil kartochkalari bilan virtual inventar galereyasi',
            'Shaffof tariflar bilan xizmat paketlarini taqqoslash',
            'Yirik xaridorlar uchun Telegram orqali lahzalik aloqa oqimi',
            'Superkarlar dinamikasiga mos silliq mikro-animatsiyalar',
          ],
          testimonial: {
            quote: 'Dizayn va kod sifati shourumimizdagi ekzotik avtomobillarga to‘liq mos keladi. LUXWEB bizga hech qanday oddiy agentlik bera olmaydigan ustunlikni taqdim etdi.',
            author: 'Timur Karimov',
            role: 'Boshqaruvchi hamkor, Velora Auto',
          },
        },
        {
          id: 'noir-restaurant',
          title: 'NOIR RESTAURANT',
          category: 'Restoran / Veb-dizayn',
          categoryType: 'Restaurant',
          shortDescription: 'Zamonaviy mualliflik oshxonasi uchun atmosferali gastronomik hikoya va bron tizimi.',
          fullDescription: 'Nufuzli gastronomik restoran uchun maxsus ishlab chiqilgan. Raqamli tajriba mehmonlarni chuqur soyalar, sharob juftliklari, interaktiv mavsumiy taomlar menyusi va real vaqtdagi stol bron qilish orqali to‘g‘ridan-to‘g‘ri restoran muhitiga olib kiradi.',
          client: 'Noir Gastronomic House',
          year: '2025',
          location: 'Toshkent, UZ',
          deliverables: ['Sensor veb-tajriba', 'Interaktiv taomlar menyusi', 'VIP stol bron qilish tizimi', 'Maxsus tadbirlar so‘rovi'],
          metrics: [
            { label: 'Onlayn stol band qilish', value: '78%' },
            { label: 'Kechki tashriflar o‘sishi', value: '+45%' },
            { label: 'Vositachisiz tejov', value: 'Oyiga $1.2k' },
          ],
          keyFeatures: [
            'Somelye sharhlari va allergen filtrlari bilan interaktiv raqamli menyu',
            'SMS va Telegram orqali tasdiqlanadigan ko‘p bosqichli stol bron qilish',
            'Moslashuvchan tipografiya bilan uyg‘unlashgan atmosferali fotokompozitsiya',
            'Shaxsiy kechalar va korporativ tadbirlar uchun qulay so‘rov tizimi',
          ],
          testimonial: {
            quote: 'Mehmonlarimiz tashrif buyurishdan oldin saytni ko‘rishganini tez-tez aytishadi. Uning ruhiyati, sur’ati va nafisligi bizning pazandalik falsafamizni mukammal aks ettiradi.',
            author: 'Sardor Aliyev',
            role: 'Bosh oshpaz va egasi, Noir',
          },
        },
        {
          id: 'aura-academy',
          title: 'AURA EDUCATION',
          category: 'Ta’lim / Veb-dizayn',
          categoryType: 'Education',
          shortDescription: 'Yetakchi til o‘rganish va xalqaro imtihonlarga tayyorlash markazi uchun zamonaviy platforma.',
          fullDescription: 'Xalqaro imtihonlarga tayyorlovchi markaz uchun yaratilgan ishonchli raqamli kampus. Murakkab dars jadvallarini soddalashtiradi, o‘qituvchilar malakasini ko‘rsatadi va 2 daqiqalik diagnostik test tizimini taqdim etadi.',
          client: 'Aura Learning Institute',
          year: '2026',
          location: 'Samarqand / Toshkent, UZ',
          deliverables: ['Axborot arxitekturasi', 'Kurslar katalogi UI', 'Diagnostik test voronkasi', 'Talabalar fikrlari devori'],
          metrics: [
            { label: 'Talabalar qabuli', value: '+142%' },
            { label: 'Chiqib ketishlar kamayishi', value: '-38%' },
            { label: 'Kurs so‘rovlari', value: '450+/oy' },
          ],
          keyFeatures: [
            'Aniq narxlar va o‘quv rejalari bilan modulli kurslar katalogi',
            'Konsultant bilan tezkor bog‘lanishni ta’minlovchi daraja aniqlash testi',
            'Haqiqiy natijalarga ega (IELTS 8.5+) o‘qituvchilar profillari',
            'Uzoq mutolaa uchun qulay yuqori kontrastli zamonaviy tipografiya',
          ],
        },
        {
          id: 'monolith-corp',
          title: 'MONOLITH CAPITAL',
          category: 'Biznes / Veb-dizayn',
          categoryType: 'Business',
          shortDescription: 'Investitsiya va ko‘chmas mulk sindikati uchun nufuzli korporativ raqamli platforma.',
          fullDescription: 'Shveysariya modernistik to‘r intizomi va ehtiyotkor tilla aksentlarni birlashtirgan o‘ta nafis korporativ raqamli tajriba. Xalqaro investitsiya hamkorlarida to‘liq ishonch uyg‘otish uchun yaratilgan.',
          client: 'Monolith Holdings',
          year: '2025',
          location: 'Toshkent / Dubay',
          deliverables: ['Korporativ veb-identika', 'Investorlar taqdimoti UI', 'Aktivlar portfeli indeksi', 'Ko‘p tilli arxitektura'],
          metrics: [
            { label: 'Institutsiya ishonchi', value: '100%' },
            { label: 'Hamkorlar so‘rovlari', value: '+85%' },
            { label: 'Sahifa yuklanish tezligi', value: '0.4s' },
          ],
          keyFeatures: [
            'Qat’iy vertikal hizalanish va nozik me’moriy chiziqlarga ega tartib',
            'Investorlar uchun maxfiy to‘g‘ridan-to‘g‘ri aloqa kanali',
            'Interaktiv xaritalash bilan aktivlar portfeli katalogi',
            'Yuqori darajadagi qulaylik va xalqaro veb-standartlarga to‘liq muvofiqlik',
          ],
        },
      ],
      modal: {
        caseStudyPrefix: 'Keys tahlili /',
        clientLabel: 'Mijoz',
        yearLabel: 'Yil',
        locationLabel: 'Manzil',
        categoryLabel: 'Kategoriya',
        liveBuildBadge: 'Jonli mijoz loyihasi · React va zamonaviy CSS',
        studioCraftBadge: 'LUXWEB Studiyasi tomonidan yaratilgan',
        architectureHeading: 'Me’morchilik va natijalar',
        highlightsHeading: 'Asosiy muhandislik va dizayn yechimlari:',
        similarStandardPrompt: 'Brendingiz uchun shunday yuqori raqamli standartni xohlaysizmi?',
        closeBtn: 'Yopish',
        commissionBtn: 'Shunga o‘xshash loyihaga buyurtma berish',
      },
    },
    whyUs: {
      sectionTag: 'NEGA LUXWEB',
      titlePart1: 'DIZAYN FAQAT TASHQI',
      titlePart2: 'KO‘RINISHDAN IBORAT EMAS.',
      features: [
        {
          title: 'PREMIAL DIZAYN',
          description: 'Har bir interfeys kuchli birinchi taassurot qoldirish uchun puxta ishlab chiqiladi.',
          detail: 'Biz tayyor shablonlarni qat’iyan rad etamiz. Har bir chiziq, tipografik nisbat va nozik tilla aksentlar brendingizni o‘z bozorida so‘zsiz yetakchi sifatida ko‘rsatish uchun tanlanadi.',
        },
        {
          title: 'YUQORI TEZLIK',
          description: 'Tezkor ishlash va silliq interaksiyalar uchun optimallashtirilgan saytlar.',
          detail: 'Zamonaviy React va yengil toza kodda yig‘ilgan. Hech qanday ortiqcha og‘ir plaginlarsiz. Google Lighthouse tizimida 95+ ball kafolatlanadi.',
        },
        {
          title: 'MOBIL QURILMALAR UCHUN',
          description: 'Barcha platformalar smartfon, planshet va kompyuterlarda birdek mukammal ishlaydi.',
          detail: 'Mijozlaringizning 85% dan ortig‘i saytingizga smartfondan kiradi. Biz qulay barmoq harakatlari, tiniq shriftlar va ortiqcha siljishlarsiz benuqson tajribani ta’minlaymiz.',
        },
        {
          title: 'BIZNESGA YO‘NALTIRILGAN',
          description: 'Dizayn qarorlari biznesingizga mijozlarni jalb qilish va daromadni oshirish uchun qabul qilinadi.',
          detail: 'Sayt nafaqat chiroyli bo‘lishi, balki pul keltirishi kerak. Biz strategik harakatga chaqiruvchi tugmalar va Telegram/WhatsApp aloqa tizimlarini loyihaga uzviy kiritamiz.',
        },
      ],
      guaranteeText: 'Kafolatimiz: Har bir veb-sayt ishga tushirishdan oldin tezlik, mobil moslashuv va konversiya bo‘yicha 40+ banddan iborat auditdan o‘tadi.',
      wcagTag: 'WCAG 2.1 AA Mos',
      zeroSlopTag: 'Shablonsiz eksklyuziv ish',
    },
    process: {
      sectionTag: 'ISH JARAYONIMIZ',
      titlePart1: 'G‘OYADAN TO',
      titlePart2: 'ISHGA TUSHIRISHGACHA.',
      steps: [
        {
          step: '01',
          title: 'TADQIQOT',
          description: 'Biznesingiz, auditoriyangiz va maqsadlaringizni chuqur o‘rganamiz.',
          details: [
            'O‘zbekiston va xalqaro bozordagi raqobatchilarni tahlil qilish bo‘yicha batafsil konsultatsiya',
            'Sizning to‘lovga qodir ideal mijozingiz profilini va konversiya maqsadlarini aniqlash',
            'Brend ovozi, estetik ohangi va zarur funksiyalar rejasini tasdiqlash',
          ],
        },
        {
          step: '02',
          title: 'DIZAYN',
          description: 'Vizual yo‘nalish va foydalanuvchi tajribasini (UX) quramiz.',
          details: [
            'Aniq tipografik ierarxiyaga ega arxitekturaviy wireframe-eskizlar',
            'Luks estetika va nozik oltin aksentlarga ega yuqori sifatli interaktiv vizual yo‘nalish',
            'Kod yozishdan oldin dizaynni ko‘rib chiqish va birgalikda mukammallashtirish',
          ],
        },
        {
          step: '03',
          title: 'ISHLAB CHIQISH',
          description: 'Saytni eng ilg‘or zamonaviy texnologiyalar asosida yaratamiz.',
          details: [
            'Toza React, TypeScript va zamonaviy CSS yordamida ishonchli ishlab chiqish',
            'Silliq 60 FPS animatsiyalar, mikro-interaksiyalar va soniyadan tez javob berish',
            'Formalar, band qilish tizimlari va tezkor aloqa kanallarini uzluksiz ulash',
          ],
        },
        {
          step: '04',
          title: 'ISHGA TUSHIRISH',
          description: 'Yakuniy tajribani to‘liq optimallashtiramiz, sinovdan o‘tkazamiz va ochamiz.',
          details: [
            'iPhone, Android, planshet va kompyuter ekranlarida ko‘p bosqichli sinov',
            'To‘liq SEO-meta sozlamalari, yuklanish tezligi va xavfsizlik tekshiruvi',
            'Domen ulash, serverga joylash va loyihani to‘liq topshirish',
          ],
        },
      ],
      estimatedTimelineLabel: 'TAXMINIY MUDDAT:',
      estimatedTimelineText: 'Tanlangan tarifga qarab studiyada tayyorlash muddati 1 dan 3 haftagacha davom etadi.',
      timelineTag: 'Shaffof bosqichlar · Telegram orqali doimiy hisobot',
    },
    about: {
      sectionTag: 'LUXWEB HAQIDA',
      titlePart1: 'BIZ BIZNESLARNI INTERNETDA',
      titlePart2: 'YANADA YAXSHIROQ KO‘RSATAMIZ.',
      p1Bold: 'LUXWEB',
      p1Rest: '— zamonaviy bizneslar uchun premium veb-saytlar yaratishga ixtisoslashgan mustaqil raqamli studiya.',
      p2: 'Bizning maqsadimiz oddiy: kuchli dizayn, zamonaviy texnologiya va qulay foydalanuvchi tajribasini birlashtirib, insonlar xotirasida muhrlanib qoladigan veb-saytlar yaratish.',
      locationBoxTitle: 'Toshkent Studiyasi · Xalqaro Yetkazib Berish',
      locationBoxText: 'Bosh ofisimiz O‘zbekistonda joylashgan bo‘lib, butun dunyo bo‘yicha ilg‘or tadbirkorlar bilan hamkorlik qilamiz. Biz mahalliy bozor nozikliklarini xalqaro estetik standartlar bilan uyg‘unlashtirib, biznesingizga yaqqol ustunlik taqdim etamiz.',
      stats: [
        { value: '01', label: 'Studiya', note: 'Mustaqil va e’tiborli' },
        { value: '05+', label: 'Soha', note: 'Tasdiqlangan tajriba' },
        { value: '100%', label: 'Maxsus dizayn', note: 'Shablonlarsiz' },
        { value: '∞', label: 'G‘oyalar', note: 'Chegarasiz mahorat' },
      ],
    },
    pricing: {
      sectionTag: 'INVESTITSIYA VA TARIFLAR',
      titlePart1: 'ODDIY. SHAFFOF.',
      titlePart2: 'PREMIAL.',
      currencyLabel: 'Valyuta:',
      mostPopularBadge: 'ENG OMMABOP',
      includesLabel: 'O‘z ichiga oladi:',
      disclaimer: 'Yakuniy narx loyiha murakkabligi va o‘ziga xos talablariga bog‘liq.',
      plans: [
        {
          id: 'starter',
          name: 'STARTER',
          priceUsd: 100,
          priceUzs: '1,280,000',
          description: 'Professional internet sahifasiga ega bo‘lishni istagan kichik bizneslar uchun.',
          turnaroundTime: '5 — 7 kunda yetkazib berish',
          features: [
            'Barcha qurilmalarga mos veb-sayt',
            'Premial zamonaviy dizayn',
            'Aloqa bo‘limi va formasi',
            'Asosiy mikro-animatsiyalar',
            'Smartfonlar uchun optimizatsiya',
            'Domen va hostingni sozlash',
            'Boshlang‘ich SEO-meta konfiguratsiyasi',
          ],
          ctaText: 'Starter tarifini tanlash',
        },
        {
          id: 'business',
          name: 'BUSINESS',
          priceUsd: 200,
          priceUzs: '2,560,000',
          description: 'To‘liq va mustahkam professional sayt talab qiladigan bizneslar uchun.',
          turnaroundTime: '10 — 14 kunda yetkazib berish',
          features: [
            'Starter tarifidagi barcha imkoniyatlar',
            'Bir nechta sahifalar / bo‘limlar',
            'Kengaytirilgan silliq animatsiyalar',
            'Galereya / portfolio namoyishi',
            'Validatsiyali aloqa formasi',
            'Telegram va WhatsApp orqali lid yo‘naltirish',
            'Google qidiruviga indeksatsiya va SEO',
          ],
          ctaText: 'Business tarifini tanlash',
        },
        {
          id: 'premium',
          name: 'PREMIUM',
          priceUsd: 350,
          priceUzs: '4,480,000',
          description: 'To‘liq individual va yuqori darajadagi raqamli tajribani xohlaydiganlar uchun.',
          turnaroundTime: '14 — 21 kunda yetkazib berish',
          features: [
            'Business tarifidagi barcha imkoniyatlar',
            'Murakkab interaksiyalar va mikro-detallar',
            'Eksklyuziv maxsus UI/UX arxitekturasi',
            'Premial animatsiyalar va silliq ochilishlar',
            'Murakkab bo‘limlar (Lukbuk, Menyu, Spetsifikatsiya)',
            'Interaktiv band qilish / bron integratsiyasi',
            'Ustuvor texnik yordam va doimiy nazorat',
          ],
          ctaText: 'Premium loyihani boshlash',
        },
      ],
    },
    cta: {
      badge: 'LOYIHANGIZ HAQIDA SUHBATLASHAMIZ',
      titlePart1: 'INTERNETDA YANADA YAXSHI',
      titlePart2: 'KO‘RINISHGA TAYYORMISIZ?',
      subtitle: 'Keling, mijozlaringiz xotirasida qoladigan loyiha quramiz.',
      startProjectBtn: 'Loyihani boshlash',
      instagramBtn: 'Instagram',
    },
    contact: {
      sectionTag: 'LOYIHANI BOSHLASH',
      titlePart1: 'G‘OYANGIZ BORMI?',
      titlePart2: 'BIRGALIKDA GAPLASHAMIZ.',
      nameLabel: 'Ismingiz',
      namePlaceholder: 'masalan: Jasur Alimov',
      businessLabel: 'Biznes / Brend nomi',
      businessPlaceholder: 'masalan: Noir Lounge & Bar',
      emailLabel: 'Elektron pochta',
      emailPlaceholder: 'jasur@example.com',
      phoneLabel: 'Telefon / Telegram',
      phonePlaceholder: '+998 90 123 45 67 yoki @foydalanuvchi',
      projectTypeLabel: 'Loyiha turi',
      budgetLabel: 'Byudjet darajasi',
      messageLabel: 'Loyiha tafsilotlari va maqsadlaringiz',
      messagePlaceholder: 'Brendingiz, ko‘zlagan maqsadingiz, yoqqan saytlar yoki sizga kerakli maxsus funksiyalar haqida so‘zlab bering...',
      submitBtn: 'So‘rov yuborish',
      submittingBtn: 'So‘rov ko‘rib chiqilmoqda...',
      validation: {
        name: 'Iltimos, ismingizni kiriting',
        emailRequired: 'Iltimos, elektron pochtangizni kiriting',
        emailInvalid: 'Iltimos, to‘g‘ri elektron pochta manzilini kiriting',
        phone: 'Telefon raqamingiz yoki Telegram usernamesi talab qilinadi',
        message: 'Iltimos, loyihangiz haqida qisqacha ma’lumot bering (kamida 5 belgi)',
      },
      success: {
        title: 'SO‘ROV QABUL QILINDI',
        greeting: 'Rahmat,',
        thankYou: 'Studiya rahbari talablaringizni o‘rganib chiqib, 24 soat ichida siz bilan bog‘lanadi.',
        summaryHeading: 'QISQACHA MA’LUMOT:',
        typeLabel: 'Loyiha turi:',
        budgetLabel: 'Byudjet darajasi:',
        contactLabel: 'Aloqa ma’lumotlari:',
        telegramBtn: 'Telegram orqali tezkor bog‘lanish',
        newInquiryBtn: 'Yana boshqa so‘rov yuborish',
      },
      projectTypes: {
        'Business Website': 'Biznes Sayt',
        'Beauty / Barber': 'Go‘zallik / Barber',
        Restaurant: 'Restoran',
        Automotive: 'Avtomotiv',
        Education: 'Ta’lim',
        Other: 'Boshqa',
      },
      budgetTiers: {
        '$100–$200': '$100–$200',
        '$200–$350': '$200–$350',
        '$350+': '$350+',
        'Not sure yet': 'Hali aniq emas',
      },
      directChannelsTitle: 'TO‘G‘RIDAN-TO‘G‘RI ALOQA',
      telegramTag: 'Telegram (Eng tezkori)',
      telegramStatus: '● Tarmoqda',
      telegramSubtext: 'O‘rtacha 20 daqiqada javob beramiz',
      emailTag: 'Studiya pochtasi',
      emailSubtext: 'Rasmiy takliflar va hamkorlik uchun',
      phoneTag: 'To‘g‘ridan-to‘g‘ri qo‘ng‘iroq',
      studioLocationTag: 'Studiya manzili',
      studioLocationVal: 'Toshkent, O‘zbekiston',
      studioLocationNote: 'Uchrashuvlar oldindan kelishilgan holda o‘tkaziladi',
    },
    instagram: {
      tag: 'JARAYONIMIZNI KUZATING',
      description: 'Eng so‘nggi dizaynlar, eksperimentlar va loyihalarimizni ko‘ring.',
      btn: 'Instagram',
      highlights: [
        {
          id: 'ig-1',
          title: 'Minimal Beauty UI tizimi',
          tag: 'Veb-dizayn',
          caption: 'Zamonaviy go‘zallik atelezi uchun atmosferali tipografiya va silliq oraliqlar.',
        },
        {
          id: 'ig-2',
          title: 'To‘q rangli avtomobil shourumi',
          tag: 'Motion Lab',
          caption: 'Yuqori tezlikdagi superkarlar inventari uchun ishlab chiqilgan mikro-harakatlar.',
        },
        {
          id: 'ig-3',
          title: 'Restoran menyusi va bron tizimi',
          tag: 'Keys tahlili',
          caption: 'Sham yorug‘idagi sokin muhit bilan uyg‘unlashgan oson stol band qilish.',
        },
        {
          id: 'ig-4',
          title: 'Brend arxetipi: LUXWEB 2026',
          tag: 'Identika',
          caption: 'To‘q mat qora rang, tahririyat tipografiyasi va ehtiyotkor tilla aksentlar.',
        },
      ],
    },
    footer: {
      tagline: 'Ambitsiyali bizneslar uchun premium veb-saytlar.',
      hqNote: 'Studiya bosh ofisi Toshkentda · Butun dunyo bo‘yicha mavjud',
      navigationTitle: 'Navigatsiya',
      socialTitle: 'Ijtimoiy tarmoqlar',
      backToTop: 'Yuqoriga qaytish',
      rights: '© 2026 LUXWEB. Barcha huquqlar himoyalangan.',
      craftsmanship: 'Qat’iy maqsad bilan yaratilgan.',
    },
  },

  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      why: 'Why LUXWEB',
      process: 'Process',
      about: 'About',
      pricing: 'Pricing',
      contact: 'Contact',
      startProject: 'Start a Project',
      mobileMenuTitle: 'Menu Navigation',
      studioSubtitle: 'Digital Studio · UZ',
      locationNote: 'Tashkent, UZ',
      worldwideNote: 'Available Worldwide',
    },
    cursor: {
      view: 'VIEW',
    },
    hero: {
      statusLabel: 'LUXWEB / DIGITAL STUDIO',
      availability: 'Based in Uzbekistan · Available Worldwide',
      headlinePart1: 'WE BUILD DIGITAL',
      headlinePart2: 'EXPERIENCES.',
      subheadline: 'Premium websites for ambitious businesses.',
      description: 'LUXWEB creates high-performance websites that make modern businesses look exceptional online.',
      viewWorkBtn: 'View Our Work',
      startProjectBtn: 'Start a Project',
      metrics: {
        focusLabel: 'Focus',
        focusVal: 'High-End Digital Flags',
        standardLabel: 'Standard',
        standardVal: 'Bespoke Architectural Code',
        perfLabel: 'Performance',
        perfVal: 'Sub-Second Load (99/100)',
        locationLabel: 'Location',
        locationVal: 'Tashkent · Worldwide',
      },
    },
    services: {
      sectionTag: 'WHAT WE DO',
      titlePart1: 'WE TURN IDEAS INTO',
      titlePart2: 'DIGITAL EXPERIENCES.',
      deliverablesLabel: 'Deliverables',
      customTag: 'BESPOKE',
      customTitle: 'CUSTOM PROJECTS',
      customDesc: 'Have an unconventional vision, high-complexity web app, or luxury personal brand? We architect tailored experiences.',
      customCta: 'Consult With Studio Lead →',
      items: [
        {
          id: 'business',
          number: '01',
          title: 'BUSINESS WEBSITES',
          description: 'Professional websites designed to establish trust and generate customers.',
          deliverables: ['Custom Editorial UI/UX', 'Conversion Architecture', 'Search Engine Optimization', 'Lead Capture Engine', 'High-Speed Stack'],
        },
        {
          id: 'beauty',
          number: '02',
          title: 'BEAUTY & BARBER',
          description: 'Elegant websites for salons, barbers and beauty brands.',
          deliverables: ['Online Booking Integration', 'Visual Lookbook Gallery', 'Service & Price Menu', 'Staff Portfolio Cards', 'Instagram Synchronized Feed'],
        },
        {
          id: 'restaurants',
          number: '03',
          title: 'RESTAURANTS',
          description: 'Modern digital experiences for restaurants, cafés and food businesses.',
          deliverables: ['Interactive Culinary Menu', 'Table Reservation Booking', 'Atmosphere & Interior Tour', 'Chef Specials & Seasonal Dishes', 'Direct Telegram Order'],
        },
        {
          id: 'automotive',
          number: '04',
          title: 'AUTOMOTIVE',
          description: 'Premium websites for automotive brands, dealerships and car services.',
          deliverables: ['Vehicle Showroom Showcase', 'Interactive 360° Specs Grid', 'Service Consultation Booking', 'Financing / Inquiry Forms', 'Dark High-Contrast Aesthetic'],
        },
        {
          id: 'education',
          number: '05',
          title: 'EDUCATION',
          description: 'Modern platforms for education centers, courses and tutors.',
          deliverables: ['Curriculum Showcase', 'Student Enrollment Funnel', 'Teacher & Mentor Profiles', 'Fee Structures & Schedules', 'Exam / Test Prep Portals'],
        },
      ],
    },
    portfolio: {
      sectionTag: 'SELECTED WORK',
      titlePart1: 'BUILT TO BE',
      titlePart2: 'REMEMBERED.',
      categories: {
        All: 'All',
        Beauty: 'Beauty',
        Automotive: 'Automotive',
        Restaurant: 'Restaurant',
        Education: 'Education',
        Business: 'Business',
      },
      projectPrefix: 'Project',
      viewProject: 'View Project',
      livePreview: 'Live Preview',
      clickToExplore: 'Click to explore full case study',
      projects: [
        {
          id: 'luxe-beauty',
          title: 'LUXE BEAUTY',
          category: 'Beauty / Web Design',
          categoryType: 'Beauty',
          shortDescription: 'A sophisticated digital experience designed for a modern beauty studio.',
          fullDescription: 'Crafted for an elite cosmetology and hair atelier in downtown Tashkent. The digital flagship features an editorial typography layout, seamless online appointment bookings, and an interactive treatment menu that elevated their client acquisition by 180%.',
          client: 'Luxe Beauty Atelier',
          year: '2026',
          location: 'Tashkent, UZ',
          deliverables: ['Creative Direction', 'Brand Strategy', 'Custom React Web Experience', 'Interactive Booking Engine', 'Mobile-First Optimization'],
          metrics: [
            { label: 'Booking Conversion', value: '+184%' },
            { label: 'Mobile Engagement', value: '91%' },
            { label: 'Avg Session Time', value: '3m 42s' },
          ],
          keyFeatures: [
            'Interactive Treatment Lookbook with categorized pricing',
            'One-tap appointment booking integrated with WhatsApp & Telegram bot',
            'Artisanal aesthetic photography treatment with luxury micro-interactions',
            'Sub-second page transitions optimized for high-end mobile displays',
          ],
          testimonial: {
            quote: 'LUXWEB completely redefined how Tashkent perceives our salon. Our clients constantly praise how smooth and expensive the booking experience feels.',
            author: 'Kamila Rustamova',
            role: 'Founder & Creative Director, Luxe Beauty',
          },
        },
        {
          id: 'velora-auto',
          title: 'VELORA AUTO',
          category: 'Automotive / Web Design',
          categoryType: 'Automotive',
          shortDescription: 'High-octane digital presence and inventory showroom for bespoke automotive curation.',
          fullDescription: 'A stealth-matte dark digital platform built for a luxury vehicle importer and bespoke detailing studio. Features precision vehicle specifications, cinematic imagery treatment, and a rapid VIP concierge consultation flow.',
          client: 'Velora Automotive Group',
          year: '2026',
          location: 'Tashkent, UZ',
          deliverables: ['Digital Showroom UI', 'Interactive Vehicle Specs Matrix', 'High-Speed Performance Engine', 'VIP Concierge Portal'],
          metrics: [
            { label: 'Qualified Leads', value: '3.4x' },
            { label: 'Showroom Inquiries', value: '+210%' },
            { label: 'Performance Score', value: '99/100' },
          ],
          keyFeatures: [
            'Virtual inventory gallery with dynamic high-contrast vehicle cards',
            'Bespoke service packages comparison with transparent tier pricing',
            'Direct Telegram instant-lead routing for high-net-worth buyers',
            'Engineered with micro-smooth motion mimicking high-performance automotive machinery',
          ],
          testimonial: {
            quote: 'The level of craftsmanship matches the exotic vehicles in our showroom. LUXWEB gave us a competitive edge that no generic agency could deliver.',
            author: 'Timur Karimov',
            role: 'Managing Partner, Velora Auto',
          },
        },
        {
          id: 'noir-restaurant',
          title: 'NOIR RESTAURANT',
          category: 'Restaurant / Web Design',
          categoryType: 'Restaurant',
          shortDescription: 'Atmospheric culinary storytelling and reservation platform for contemporary fine dining.',
          fullDescription: 'Designed for a signature gastronomic dining destination. The digital experience transports guests straight into the candlelit ambiance through deep shadows, editorial wine pairings, interactive seasonal tasting menus, and real-time table reservation.',
          client: 'Noir Gastronomic House',
          year: '2025',
          location: 'Tashkent, UZ',
          deliverables: ['Sensory Web Experience', 'Interactive Tasting Menu', 'VIP Table Reservation Suite', 'Private Event Inquiries'],
          metrics: [
            { label: 'Online Table Bookings', value: '78%' },
            { label: 'Evening Covers Growth', value: '+45%' },
            { label: 'Zero Third-Party Fees', value: 'Saved $1.2k/mo' },
          ],
          keyFeatures: [
            'Digital interactive menu with sommelier notes and allergen filters',
            'Seamless multi-step table reservation with instant SMS / Telegram confirmations',
            'Atmospheric photography composition with fluid responsive typography',
            'Private dining and bespoke corporate event inquiry flow',
          ],
          testimonial: {
            quote: 'Our guests frequently mention viewing the website before visiting. The mood, the pacing, and the elegance perfectly reflect our culinary philosophy.',
            author: 'Chef Sardor Aliev',
            role: 'Executive Chef & Owner, Noir',
          },
        },
        {
          id: 'aura-academy',
          title: 'AURA EDUCATION',
          category: 'Education / Web Design',
          categoryType: 'Education',
          shortDescription: 'Modern digital academy platform designed for an elite language and test-prep center.',
          fullDescription: 'A streamlined, trustworthy digital campus built for an international exam preparation center. Simplifies complex course schedules, highlights mentor credentials, and provides an intuitive 2-minute diagnostic level test booking funnel.',
          client: 'Aura Learning Institute',
          year: '2026',
          location: 'Samarkand / Tashkent, UZ',
          deliverables: ['Information Architecture', 'Course Catalog UI', 'Diagnostic Booking Funnel', 'Student Testimonial Wall'],
          metrics: [
            { label: 'Student Enrollments', value: '+142%' },
            { label: 'Bounce Rate Drop', value: '-38%' },
            { label: 'Course Enquiries', value: '450+/mo' },
          ],
          keyFeatures: [
            'Modular course catalog with clear pricing tiers and curriculum breakdowns',
            'Interactive placement test booking with instant counselor assignment',
            'Faculty spotlight with verifiable score track records (IELTS 8.5+)',
            'Clean high-contrast typography optimized for long-form educational reading',
          ],
        },
        {
          id: 'monolith-corp',
          title: 'MONOLITH CAPITAL',
          category: 'Business / Web Design',
          categoryType: 'Business',
          shortDescription: 'Authoritative digital presence for an institutional venture and property syndicate.',
          fullDescription: 'An ultra-refined corporate digital experience combining Swiss modernist grid discipline with restrained champagne gold accents. Designed to inspire confidence with international investment partners.',
          client: 'Monolith Holdings',
          year: '2025',
          location: 'Tashkent / Dubai',
          deliverables: ['Corporate Web Identity', 'Investor Relations Deck UI', 'Asset Portfolio Index', 'Bilingual Architecture'],
          metrics: [
            { label: 'Institutional Trust', value: '100%' },
            { label: 'Partner Inquiries', value: '+85%' },
            { label: 'Page Load Speed', value: '0.4s' },
          ],
          keyFeatures: [
            'Architectural layout with strict vertical alignment and subtle structural dividers',
            'Direct confidential investor contact channel',
            'Asset portfolio directory with interactive geographical mapping',
            'Strict adherence to accessibility and high-contrast typography standards',
          ],
        },
      ],
      modal: {
        caseStudyPrefix: 'Case Study /',
        clientLabel: 'Client',
        yearLabel: 'Year',
        locationLabel: 'Location',
        categoryLabel: 'Category',
        liveBuildBadge: 'Live Client Build · React & Modern CSS',
        studioCraftBadge: 'Crafted by LUXWEB Studio',
        architectureHeading: 'The Architecture & Impact',
        highlightsHeading: 'Key Engineering & Design Highlights:',
        similarStandardPrompt: 'Want a similar digital standard for your brand?',
        closeBtn: 'Close',
        commissionBtn: 'Commission Similar Project',
      },
    },
    whyUs: {
      sectionTag: 'WHY LUXWEB',
      titlePart1: 'DESIGN IS MORE',
      titlePart2: 'THAN LOOKS.',
      features: [
        {
          title: 'PREMIUM DESIGN',
          description: 'Every interface is carefully designed to create a strong first impression.',
          detail: 'We reject generic templates. Every line, typographic proportion, and subtle gold accent is tailored to position your brand as the undisputed leader in your market.',
        },
        {
          title: 'FAST PERFORMANCE',
          description: 'Optimized websites built for speed and smooth interaction.',
          detail: 'Engineered on modern React and lightweight code. Zero bloated plugins, zero sluggish page delays. 95+ Google Lighthouse scores guaranteed.',
        },
        {
          title: 'MOBILE FIRST',
          description: 'Every experience is designed to work beautifully on phones, tablets and desktops.',
          detail: 'Over 85% of your local clients browse on smartphones. We ensure tactile touch ergonomics, crystal-clear typography, and zero horizontal scrolling.',
        },
        {
          title: 'BUSINESS FOCUSED',
          description: 'Design decisions are made to help businesses attract customers and grow.',
          detail: 'A website must generate revenue. We weave strategic call-to-actions, instant Telegram gateways, and clear value propositions throughout.',
        },
      ],
      guaranteeText: 'Our Guarantee: Every website undergoes 40+ point performance, mobile & conversion audits prior to deployment.',
      wcagTag: 'WCAG 2.1 AA Compliant',
      zeroSlopTag: 'Zero Slop Templates',
    },
    process: {
      sectionTag: 'OUR PROCESS',
      titlePart1: 'FROM IDEA',
      titlePart2: 'TO LAUNCH.',
      steps: [
        {
          step: '01',
          title: 'DISCOVER',
          description: 'We understand your business, audience and goals.',
          details: [
            'In-depth consultation to analyze your competitive landscape in Uzbekistan and abroad',
            'Identify your ideal high-paying client profile and conversion objectives',
            'Establish brand voice, aesthetic tone, and feature roadmap',
          ],
        },
        {
          step: '02',
          title: 'DESIGN',
          description: 'We create the visual direction and user experience.',
          details: [
            'Bespoke architectural wireframes with deliberate typographic hierarchy',
            'High-fidelity interactive visual direction with luxury aesthetic and subtle gold accents',
            'Design review and rapid collaborative refinement before writing code',
          ],
        },
        {
          step: '03',
          title: 'BUILD',
          description: 'We develop the website with modern technology.',
          details: [
            'Production-grade implementation using clean React, TypeScript, and modern CSS',
            'Fluid 60 FPS animations, micro-interactions, and instant sub-second response',
            'Seamless integration of forms, booking systems, and instant communication channels',
          ],
        },
        {
          step: '04',
          title: 'LAUNCH',
          description: 'We optimize, test and launch the final experience.',
          details: [
            'Multi-device testing across iPhone, Android, tablets, and desktop displays',
            'Comprehensive SEO meta setup, speed optimization, and security check',
            'Domain connection, final deployment, and client handover with zero downtime',
          ],
        },
      ],
      estimatedTimelineLabel: 'ESTIMATED TIMELINE:',
      estimatedTimelineText: 'Typical studio delivery ranges from 1 to 3 weeks depending on package tier.',
      timelineTag: 'Transparent milestones · Direct Telegram updates',
    },
    about: {
      sectionTag: 'ABOUT LUXWEB',
      titlePart1: 'WE CREATE WEBSITES THAT MAKE BUSINESSES',
      titlePart2: 'LOOK BETTER.',
      p1Bold: 'LUXWEB',
      p1Rest: 'is an independent digital studio focused on creating premium websites for modern businesses.',
      p2: 'Our goal is simple: combine strong design, modern technology and smooth user experiences to create websites people remember.',
      locationBoxTitle: 'Tashkent Studio · Global Delivery',
      locationBoxText: 'Headquartered in Uzbekistan and collaborating with ambitious entrepreneurs worldwide. We bridge local market mastery with international aesthetic standards, giving your business a distinctive edge.',
      stats: [
        { value: '01', label: 'Studio', note: 'Independent & Focused' },
        { value: '05+', label: 'Industries', note: 'Proven Expertise' },
        { value: '100%', label: 'Custom Design', note: 'No Generic Templates' },
        { value: '∞', label: 'Ideas', note: 'Crafted Without Limits' },
      ],
    },
    pricing: {
      sectionTag: 'INVESTMENT & TIERS',
      titlePart1: 'SIMPLE. TRANSPARENT.',
      titlePart2: 'PREMIUM.',
      currencyLabel: 'Currency:',
      mostPopularBadge: 'MOST POPULAR',
      includesLabel: 'Includes:',
      disclaimer: 'Final pricing depends on project complexity and requirements.',
      plans: [
        {
          id: 'starter',
          name: 'STARTER',
          priceUsd: 100,
          priceUzs: '1,280,000',
          description: 'For small businesses that need a professional online presence.',
          turnaroundTime: '5 — 7 Days Delivery',
          features: [
            'Responsive website',
            'Premium design',
            'Contact section',
            'Basic animations',
            'Mobile optimization',
            'Domain & Hosting Setup',
            'Basic SEO Meta Configuration',
          ],
          ctaText: 'Choose Starter',
        },
        {
          id: 'business',
          name: 'BUSINESS',
          priceUsd: 200,
          priceUzs: '2,560,000',
          description: 'For businesses that want a complete professional website.',
          turnaroundTime: '10 — 14 Days Delivery',
          features: [
            'Everything in Starter',
            'Multiple pages / sections',
            'Advanced animations',
            'Gallery / portfolio showcase',
            'Contact form with validation',
            'Telegram lead routing',
            'SEO basics & Google indexing',
          ],
          ctaText: 'Choose Business',
        },
        {
          id: 'premium',
          name: 'PREMIUM',
          priceUsd: 350,
          priceUzs: '4,480,000',
          description: 'For businesses that want a fully customized digital experience.',
          turnaroundTime: '14 — 21 Days Delivery',
          features: [
            'Everything in Business',
            'Advanced interactions & micro-details',
            'Custom bespoke UI/UX architecture',
            'Premium animations & smooth reveals',
            'Advanced sections (Lookbook, Menu, Specs)',
            'Interactive booking / reservation integration',
            'Priority support & post-launch care',
          ],
          ctaText: 'Start Premium Project',
        },
      ],
    },
    cta: {
      badge: "LET'S TALK ABOUT YOUR PROJECT",
      titlePart1: 'READY TO LOOK',
      titlePart2: 'BETTER ONLINE?',
      subtitle: "Let's build something your customers will remember.",
      startProjectBtn: 'Start a Project',
      instagramBtn: 'Instagram',
    },
    contact: {
      sectionTag: 'START A PROJECT',
      titlePart1: 'HAVE AN IDEA?',
      titlePart2: "LET'S TALK.",
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Jasur Alimov',
      businessLabel: 'Business / Brand Name',
      businessPlaceholder: 'e.g. Noir Lounge & Bar',
      emailLabel: 'Email Address',
      emailPlaceholder: 'jasur@example.com',
      phoneLabel: 'Phone / Telegram',
      phonePlaceholder: '+998 90 123 45 67 or @username',
      projectTypeLabel: 'Project Type',
      budgetLabel: 'Budget Tier',
      messageLabel: 'Project Details & Goals',
      messagePlaceholder: 'Tell us about your brand, targets, reference websites, or specific features you need...',
      submitBtn: 'Send Request',
      submittingBtn: 'Processing Request...',
      validation: {
        name: 'Please provide your name',
        emailRequired: 'Please provide your email',
        emailInvalid: 'Please enter a valid email address',
        phone: 'Phone number or Telegram username is required',
        message: 'Please share a brief summary of your project goals (at least 5 characters)',
      },
      success: {
        title: 'REQUEST RECEIVED',
        greeting: 'Thank you,',
        thankYou: 'Our studio lead will review your requirements and respond within 24 hours.',
        summaryHeading: 'SUMMARY:',
        typeLabel: 'Project Type:',
        budgetLabel: 'Budget Tier:',
        contactLabel: 'Contact:',
        telegramBtn: 'Instant Chat via Telegram',
        newInquiryBtn: 'Send Another Inquiry',
      },
      projectTypes: {
        'Business Website': 'Business Website',
        'Beauty / Barber': 'Beauty / Barber',
        Restaurant: 'Restaurant',
        Automotive: 'Automotive',
        Education: 'Education',
        Other: 'Other',
      },
      budgetTiers: {
        '$100–$200': '$100–$200',
        '$200–$350': '$200–$350',
        '$350+': '$350+',
        'Not sure yet': 'Not sure yet',
      },
      directChannelsTitle: 'DIRECT CHANNELS',
      telegramTag: 'Telegram (Fastest)',
      telegramStatus: '● Online',
      telegramSubtext: 'Average response under 20 minutes',
      emailTag: 'Email Studio',
      emailSubtext: 'Formal RFP & partnership briefs',
      phoneTag: 'Direct Call',
      studioLocationTag: 'Studio Location',
      studioLocationVal: 'Tashkent, Uzbekistan',
      studioLocationNote: 'Meetings available by prior appointment',
    },
    instagram: {
      tag: 'FOLLOW THE JOURNEY',
      description: 'See our latest designs, experiments and projects.',
      btn: 'Instagram',
      highlights: [
        {
          id: 'ig-1',
          title: 'Minimal Beauty UI System',
          tag: 'Web Design',
          caption: 'Atmospheric typography and fluid spacing for contemporary beauty atelier.',
        },
        {
          id: 'ig-2',
          title: 'Dark Automotive Showroom',
          tag: 'Motion Lab',
          caption: 'Micro-interactions designed for high-performance supercar inventory.',
        },
        {
          id: 'ig-3',
          title: 'Culinary Menu & Booking Flow',
          tag: 'Case Study',
          caption: 'Zero-friction table reservations with candlelit ambiance lighting.',
        },
        {
          id: 'ig-4',
          title: 'Brand Archetype: LUXWEB 2026',
          tag: 'Identity',
          caption: 'Deep matte black, editorial typography, and disciplined champagne gold accents.',
        },
      ],
    },
    footer: {
      tagline: 'Premium websites for ambitious businesses.',
      hqNote: 'Studio HQ in Tashkent, Uzbekistan · Available Worldwide',
      navigationTitle: 'Navigation',
      socialTitle: 'Social Channels',
      backToTop: 'Back to Top',
      rights: '© 2026 LUXWEB. All rights reserved.',
      craftsmanship: 'Made with intention.',
    },
  },

  ru: {
    nav: {
      work: 'Работы',
      services: 'Услуги',
      why: 'Почему LUXWEB',
      process: 'Процесс',
      about: 'О нас',
      pricing: 'Тарифы',
      contact: 'Контакты',
      startProject: 'Начать проект',
      mobileMenuTitle: 'Меню навигации',
      studioSubtitle: 'Цифровая студия · UZ',
      locationNote: 'Ташкент, UZ',
      worldwideNote: 'По всему миру',
    },
    cursor: {
      view: 'СМОТРЕТЬ',
    },
    hero: {
      statusLabel: 'LUXWEB / ЦИФРОВАЯ СТУДИЯ',
      availability: 'Базируемся в Узбекистане · Работаем по всему миру',
      headlinePart1: 'МЫ СОЗДАЕМ ЦИФРОВОЙ',
      headlinePart2: 'ОПЫТ.',
      subheadline: 'Премиальные сайты для амбициозного бизнеса.',
      description: 'LUXWEB создает высокопроизводительные сайты, которые делают современный бизнес безупречным и авторитетным в интернете.',
      viewWorkBtn: 'Наши работы',
      startProjectBtn: 'Начать проект',
      metrics: {
        focusLabel: 'Фокус',
        focusVal: 'Премиальные цифровые флагманы',
        standardLabel: 'Стандарт',
        standardVal: 'Индивидуальный архитектурный код',
        perfLabel: 'Скорость',
        perfVal: 'Загрузка до секунды (99/100)',
        locationLabel: 'Локация',
        locationVal: 'Ташкент · По всему миру',
      },
    },
    services: {
      sectionTag: 'ЧТО МЫ ДЕЛАЕМ',
      titlePart1: 'ПРЕВРАЩАЕМ ИДЕИ В',
      titlePart2: 'ЦИФРОВОЙ ОПЫТ.',
      deliverablesLabel: 'Состав работ',
      customTag: 'ИНДИВИДУАЛЬНО',
      customTitle: 'СПЕЦИАЛЬНЫЕ ПРОЕКТЫ',
      customDesc: 'Нестандартное видение, сложное веб-приложение или персональный люкс-бренд? Мы проектируем персонализированные решения.',
      customCta: 'Консультация с руководителем студии →',
      items: [
        {
          id: 'business',
          number: '01',
          title: 'БИЗНЕС-САЙТЫ',
          description: 'Профессиональные сайты, созданные для формирования высокого доверия и привлечения клиентов.',
          deliverables: ['Индивидуальный UI/UX дизайн', 'Архитектура конверсии', 'Поисковая оптимизация (SEO)', 'Система сбора лидов', 'Высокоскоростной стек'],
        },
        {
          id: 'beauty',
          number: '02',
          title: 'КРАСОТА И БАРБЕР',
          description: 'Элегантные сайты для салонов красоты, барбершопов и косметических брендов.',
          deliverables: ['Интеграция онлайн-записи', 'Визуальный лукбук и галерея', 'Меню услуг и актуальных цен', 'Карточки мастеров и портфолио', 'Синхронизация с Instagram'],
        },
        {
          id: 'restaurants',
          number: '03',
          title: 'РЕСТОРАНЫ',
          description: 'Современный цифровой опыт для ресторанов, кофеен и гастрономических проектов.',
          deliverables: ['Интерактивное меню блюд', 'Бронирование столов онлайн', 'Атмосферный тур по залу', 'Сезонные предложения шефа', 'Быстрый заказ через Telegram'],
        },
        {
          id: 'automotive',
          number: '04',
          title: 'АВТОМОБИЛИ',
          description: 'Премиальные сайты для автосалонов, детейлинг-ателье и премиум-сервисов.',
          deliverables: ['Виртуальный шоурум авто', 'Интерактивная матрица характеристик', 'Запись на консультацию и ТО', 'Формы расчета и лизинга', 'Темная контрастная эстетика'],
        },
        {
          id: 'education',
          number: '05',
          title: 'ОБРАЗОВАНИЕ',
          description: 'Современные платформы для учебных центров, онлайн-курсов и репетиторов.',
          deliverables: ['Каталог учебных программ', 'Воронка записи студентов', 'Профили преподавателей и менторов', 'Расписание и тарифные сетки', 'Порталы тестирования и диагностики'],
        },
      ],
    },
    portfolio: {
      sectionTag: 'ИЗБРАННЫЕ РАБОТЫ',
      titlePart1: 'СОЗДАНО, ЧТОБЫ',
      titlePart2: 'ЗАПОМИНАТЬСЯ.',
      categories: {
        All: 'Все',
        Beauty: 'Красота',
        Automotive: 'Автомобили',
        Restaurant: 'Рестораны',
        Education: 'Образование',
        Business: 'Бизнес',
      },
      projectPrefix: 'Проект',
      viewProject: 'Смотреть проект',
      livePreview: 'Демонстрация',
      clickToExplore: 'Нажмите, чтобы открыть кейс',
      projects: [
        {
          id: 'luxe-beauty',
          title: 'LUXE BEAUTY',
          category: 'Красота / Веб-дизайн',
          categoryType: 'Beauty',
          shortDescription: 'Утонченный цифровой опыт, созданный для премиальной бьюти-студии.',
          fullDescription: 'Создан для элитного ателье косметологии и волос в центре Ташкента. Флагманский сайт с журнальной типографикой, бесшовной онлайн-записью и интерактивным меню процедур, увеличившим приток клиентов на 180%.',
          client: 'Luxe Beauty Atelier',
          year: '2026',
          location: 'Ташкент, UZ',
          deliverables: ['Креативное направление', 'Бренд-стратегия', 'Индивидуальный React-сайт', 'Интерактивный модуль записи', 'Mobile-First оптимизация'],
          metrics: [
            { label: 'Конверсия в запись', value: '+184%' },
            { label: 'Мобильный трафик', value: '91%' },
            { label: 'Среднее время на сайте', value: '3м 42с' },
          ],
          keyFeatures: [
            'Интерактивный лукбук процедур с категоризированными ценами',
            'Запись в один клик с интеграцией Telegram-бота и WhatsApp',
            'Атмосферная эстетическая съемка с роскошными микро-деталями',
            'Мгновенные переходы между разделами на любых экранах смартфонов',
          ],
          testimonial: {
            quote: 'LUXWEB полностью изменил то, как Ташкент воспринимает наш салон. Клиенты постоянно отмечают, насколько дорого и плавно ощущается процесс записи.',
            author: 'Камила Рустамова',
            role: 'Основатель и креативный директор, Luxe Beauty',
          },
        },
        {
          id: 'velora-auto',
          title: 'VELORA AUTO',
          category: 'Автомобили / Веб-дизайн',
          categoryType: 'Automotive',
          shortDescription: 'Высококлассное цифровое присутствие и каталог для эксклюзивного автомобильного ателье.',
          fullDescription: 'Темная матовая цифровая платформа, созданная для импортера люксовых автомобилей и детейлинг-студии. Включает детальные технические параметры, кинематографичные визуальные акценты и оперативный VIP-консьерж сервис.',
          client: 'Velora Automotive Group',
          year: '2026',
          location: 'Ташкент, UZ',
          deliverables: ['Интерфейс цифрового шоурума', 'Интерактивная матрица ТТХ', 'Высокоскоростной движок', 'Портал VIP-консьержа'],
          metrics: [
            { label: 'Целевые заявки', value: '3.4x' },
            { label: 'Запросы в шоурум', value: '+210%' },
            { label: 'Индекс производительности', value: '99/100' },
          ],
          keyFeatures: [
            'Виртуальная галерея автомобилей с динамическими карточками',
            'Сравнение пакетов детейлинга с прозрачным ценообразованием',
            'Прямая маршрутизация лидов в Telegram для статусных покупателей',
            'Плавная микро-анимация, подчеркивающая характер суперкаров',
          ],
          testimonial: {
            quote: 'Уровень проработки кода и дизайна полностью соответствует экзотическим суперкарам в нашем зале. LUXWEB дал нам неоспоримое преимущество.',
            author: 'Тимур Каримов',
            role: 'Управляющий партнер, Velora Auto',
          },
        },
        {
          id: 'noir-restaurant',
          title: 'NOIR RESTAURANT',
          category: 'Рестораны / Веб-дизайн',
          categoryType: 'Restaurant',
          shortDescription: 'Атмосферный гастрономический сторителлинг и платформа бронирования столиков.',
          fullDescription: 'Разработано для культового гастрономического ресторана. Цифровой опыт погружает гостей в таинственную атмосферу при свечах благодаря глубоким теням, винным картам, интерактивному дегустационному меню и онлайн-бронированию в реальном времени.',
          client: 'Noir Gastronomic House',
          year: '2025',
          location: 'Ташкент, UZ',
          deliverables: ['Чувственный веб-опыт', 'Интерактивное меню', 'Система VIP-бронирования', 'Запросы на закрытые банкеты'],
          metrics: [
            { label: 'Онлайн-бронь столов', value: '78%' },
            { label: 'Рост вечерних посадок', value: '+45%' },
            { label: 'Без комиссии сервисов', value: 'Экономия $1.2k/мес' },
          ],
          keyFeatures: [
            'Цифровое интерактивное меню с заметками сомелье и фильтрами аллергенов',
            'Пошаговое бронирование столов с мгновенными SMS и Telegram подтверждениями',
            'Атмосферная фотографическая композиция с адаптивной типографикой',
            'Форма для приватных ужинов и статусных корпоративных событий',
          ],
          testimonial: {
            quote: 'Наши гости регулярно упоминают, что изучали сайт перед визитом. Настроение, темп и элегантность идеально передают нашу кулинарную философию.',
            author: 'Шеф Сардор Алиев',
            role: 'Шеф-повар и владелец, Noir',
          },
        },
        {
          id: 'aura-academy',
          title: 'AURA EDUCATION',
          category: 'Образование / Веб-дизайн',
          categoryType: 'Education',
          shortDescription: 'Современная платформа академии для центра изучения языков и подготовки к экзаменам.',
          fullDescription: 'Удобный и авторитетный цифровой кампус для центра подготовки к международным экзаменам. Структурирует сложные расписания, демонстрирует успехи менторов и предоставляет 2-минутный тест определения уровня знаний.',
          client: 'Aura Learning Institute',
          year: '2026',
          location: 'Самарканд / Ташкент, UZ',
          deliverables: ['Информационная архитектура', 'Каталог курсов UI', 'Диагностическая воронка', 'Стена отзывов студентов'],
          metrics: [
            { label: 'Зачисление студентов', value: '+142%' },
            { label: 'Снижение отказов', value: '-38%' },
            { label: 'Заявки на обучение', value: '450+/мес' },
          ],
          keyFeatures: [
            'Модульный каталог курсов с ясными тарифами и программами занятий',
            'Интерактивный тест с моментальным назначением куратора',
            'Визитки преподавателей с подтвержденными баллами (IELTS 8.5+)',
            'Чистая высококонтрастная типографика для комфортного чтения программ',
          ],
        },
        {
          id: 'monolith-corp',
          title: 'MONOLITH CAPITAL',
          category: 'Бизнес / Веб-дизайн',
          categoryType: 'Business',
          shortDescription: 'Авторитетное цифровое представительство институционального синдиката и фондов.',
          fullDescription: 'Исключительно выверенный корпоративный веб-ресурс, объединяющий дисциплину швейцарской сетки со сдержанными акцентами золота. Спроектирован для формирования безусловного доверия международных инвесторов.',
          client: 'Monolith Holdings',
          year: '2025',
          location: 'Ташкент / Дубай',
          deliverables: ['Корпоративная веб-айдентика', 'Презентации для инвесторов UI', 'Индекс активов портфеля', 'Многоязычная архитектура'],
          metrics: [
            { label: 'Институциональное доверие', value: '100%' },
            { label: 'Запросы партнеров', value: '+85%' },
            { label: 'Скорость загрузки', value: '0.4с' },
          ],
          keyFeatures: [
            'Архитектурная сетка со строгим выравниванием и тонкими структурными линиями',
            'Прямой конфиденциальный канал связи для инвесторов',
            'Реестр активов с интерактивной географической привязкой',
            'Полное соответствие международным стандартам доступности и контраста',
          ],
        },
      ],
      modal: {
        caseStudyPrefix: 'Кейс /',
        clientLabel: 'Клиент',
        yearLabel: 'Год',
        locationLabel: 'Локация',
        categoryLabel: 'Категория',
        liveBuildBadge: 'Живой проект клиента · Стек React и современный CSS',
        studioCraftBadge: 'Разработано студией LUXWEB',
        architectureHeading: 'Архитектура и результат',
        highlightsHeading: 'Ключевые инженерные и дизайнерские решения:',
        similarStandardPrompt: 'Хотите сопоставимый уровень исполнения для своего бренда?',
        closeBtn: 'Закрыть',
        commissionBtn: 'Заказать аналогичный проект',
      },
    },
    whyUs: {
      sectionTag: 'ПОЧЕМУ LUXWEB',
      titlePart1: 'ДИЗАЙН — ЭТО НЕ ТОЛЬКО',
      titlePart2: 'ВНЕШНИЙ ВИД.',
      features: [
        {
          title: 'ПРЕМИАЛЬНЫЙ ДИЗАЙН',
          description: 'Каждый интерфейс тщательно разрабатывается для создания сильного первого впечатления.',
          detail: 'Мы категорически не используем шаблонные решения. Каждая линия, пропорция шрифта и золотой акцент работают на то, чтобы ваш бренд стал бесспорным лидером рынка.',
        },
        {
          title: 'ВЫСОКАЯ СКОРОСТЬ',
          description: 'Оптимизированные сайты, созданные для мгновенной загрузки и плавного отклика.',
          detail: 'Собрано на чистом React без тяжелых плагинов и задержек. Гарантируем показатель 95+ в Google Lighthouse.',
        },
        {
          title: 'MOBILE FIRST',
          description: 'Каждый интерфейс безупречно работает на смартфонах, планшетах и компьютерах.',
          detail: 'Более 85% ваших клиентов просматривают сайт со смартфона. Мы гарантируем тактильную эргономику, кристальную типографику и полное отсутствие багов.',
        },
        {
          title: 'ФОКУС НА БИЗНЕС',
          description: 'Все решения принимаются с целью привлечь клиентов и способствовать росту прибыли.',
          detail: 'Сайт обязан приносить доход. Мы внедряем стратегические целевые действия, прямую связь через Telegram/WhatsApp и ясные преимущества продукта.',
        },
      ],
      guaranteeText: 'Наша гарантия: каждый сайт проходит аудит по более чем 40 пунктам производительности, мобильности и конверсии перед релизом.',
      wcagTag: 'Стандарт WCAG 2.1 AA',
      zeroSlopTag: 'Без шаблонных решений',
    },
    process: {
      sectionTag: 'НАШ ПРОЦЕСС',
      titlePart1: 'ОТ ИДЕИ',
      titlePart2: 'ДО РЕЛИЗА.',
      steps: [
        {
          step: '01',
          title: 'ИССЛЕДОВАНИЕ',
          description: 'Глубоко изучаем ваш бизнес, целевую аудиторию и задачи.',
          details: [
            'Детальная консультация и анализ конкурентной среды в Узбекистане и за рубежом',
            'Определение портрета платежеспособного клиента и целей конверсии',
            'Утверждение тональности бренда, эстетического вектора и функционала',
          ],
        },
        {
          step: '02',
          title: 'ДИЗАЙН',
          description: 'Формируем визуальное направление и логику взаимодействия.',
          details: [
            'Архитектурные прототипы с выверенной типографической иерархией',
            'Интерактивный визуал высокой точности с люксовой эстетикой и золотыми деталями',
            'Согласование и совместная шлифовка концепции до написания первой строчки кода',
          ],
        },
        {
          step: '03',
          title: 'РАЗРАБОТКА',
          description: 'Создаем сайт на базе современного надежного стека.',
          details: [
            'Чистая реализация на React, TypeScript и современном CSS уровня Production',
            'Плавные 60 FPS анимации, микро-взаимодействия и отклик за доли секунды',
            'Бесшовная интеграция форм, систем бронирования и каналов связи',
          ],
        },
        {
          step: '04',
          title: 'ЗАПУСК',
          description: 'Финально оптимизируем, тестируем и презентуем проект миру.',
          details: [
            'Комплексное тестирование на устройствах iPhone, Android, планшетах и ПК',
            'Полная настройка SEO-тегов, максимальное ускорение и проверка безопасности',
            'Подключение домена, развертывание на сервере и сдача проекта без простоя',
          ],
        },
      ],
      estimatedTimelineLabel: 'СРОКИ РЕАЛИЗАЦИИ:',
      estimatedTimelineText: 'Срок разработки в студии составляет от 1 до 3 недель в зависимости от выбранного тарифа.',
      timelineTag: 'Прозрачные этапы · Прямые отчеты в Telegram',
    },
    about: {
      sectionTag: 'О СТУДИИ LUXWEB',
      titlePart1: 'МЫ СОЗДАЕМ САЙТЫ, КОТОРЫЕ ДЕЛАЮТ БИЗНЕС',
      titlePart2: 'УБЕДИТЕЛЬНЕЕ И СИЛЬНЕЕ.',
      p1Bold: 'LUXWEB',
      p1Rest: '— независимая цифровая студия, специализирующаяся на разработке премиальных сайтов для современного бизнеса.',
      p2: 'Наша цель проста: объединить выразительный дизайн, передовые технологии и безупречный пользовательский опыт, создавая сайты, которые вдохновляют и запоминаются.',
      locationBoxTitle: 'Студия в Ташкенте · Работа по всему миру',
      locationBoxText: 'Штаб-квартира находится в Узбекистане, мы сотрудничаем с амбициозными предпринимателями по всему миру. Мы объединяем глубокое знание местного рынка с международными визуальными стандартами, обеспечивая вашему бизнесу лидерские позиции.',
      stats: [
        { value: '01', label: 'Студия', note: 'Фокус и независимость' },
        { value: '05+', label: 'Индустрий', note: 'Доказанная экспертиза' },
        { value: '100%', label: 'Кастомный дизайн', note: 'Без шаблонов' },
        { value: '∞', label: 'Идей', note: 'Творчество без границ' },
      ],
    },
    pricing: {
      sectionTag: 'ИНВЕСТИЦИИ И ТАРИФЫ',
      titlePart1: 'ПРОСТО. ПРОЗРАЧНО.',
      titlePart2: 'ПРЕМИАЛЬНО.',
      currencyLabel: 'Валюта:',
      mostPopularBadge: 'САМЫЙ ПОПУЛЯРНЫЙ',
      includesLabel: 'Включает в себя:',
      disclaimer: 'Итоговая стоимость зависит от сложности проекта и персональных требований.',
      plans: [
        {
          id: 'starter',
          name: 'STARTER',
          priceUsd: 100,
          priceUzs: '1,280,000',
          description: 'Для малого бизнеса, которому необходимо уверенное присутствие в сети.',
          turnaroundTime: 'Срок сдачи: 5 — 7 дней',
          features: [
            'Адаптивный сайт для всех экранов',
            'Премиальный современный дизайн',
            'Раздел контактов и форма заявки',
            'Базовые микро-анимации',
            'Оптимизация под мобильные телефоны',
            'Настройка домена и хостинга',
            'Базовая конфигурация SEO-тегов',
          ],
          ctaText: 'Выбрать тариф Starter',
        },
        {
          id: 'business',
          name: 'BUSINESS',
          priceUsd: 200,
          priceUzs: '2,560,000',
          description: 'Для компаний, которым нужен полноценный презентабельный сайт.',
          turnaroundTime: 'Срок сдачи: 10 — 14 дней',
          features: [
            'Все возможности тарифа Starter',
            'Несколько разделов / страниц',
            'Продвинутая плавная анимация',
            'Галерея / витрина портфолио',
            'Форма обратной связи с валидацией',
            'Маршрутизация лидов в Telegram',
            'Базовая SEO-оптимизация и индексация Google',
          ],
          ctaText: 'Выбрать тариф Business',
        },
        {
          id: 'premium',
          name: 'PREMIUM',
          priceUsd: 350,
          priceUzs: '4,480,000',
          description: 'Для бизнеса, которому требуется полностью индивидуальный цифровой опыт.',
          turnaroundTime: 'Срок сдачи: 14 — 21 день',
          features: [
            'Все возможности тарифа Business',
            'Сложные взаимодействия и микро-детали',
            'Эксклюзивная авторская UI/UX архитектура',
            'Премиальные анимации и сглаженные переходы',
            'Спецразделы (Лукбук, Меню, Характеристики)',
            'Интерактивная онлайн-запись / бронирование',
            'Приоритетная поддержка и ведение после запуска',
          ],
          ctaText: 'Начать проект Premium',
        },
      ],
    },
    cta: {
      badge: 'ОБСУДИМ ВАШ ПРОЕКТ',
      titlePart1: 'ГОТОВЫ ВЫГЛЯДЕТЬ',
      titlePart2: 'В ИНТЕРНЕТЕ ЛУЧШЕ?',
      subtitle: 'Давайте создадим то, что ваши клиенты запомнят надолго.',
      startProjectBtn: 'Начать проект',
      instagramBtn: 'Instagram',
    },
    contact: {
      sectionTag: 'НАЧАТЬ ПРОЕКТ',
      titlePart1: 'ЕСТЬ ИДЕЯ?',
      titlePart2: 'ДАВАЙТЕ ОБСУДИМ.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'например: Жасур Алимов',
      businessLabel: 'Компания / Бренд',
      businessPlaceholder: 'например: Noir Lounge & Bar',
      emailLabel: 'Электронная почта',
      emailPlaceholder: 'jasur@example.com',
      phoneLabel: 'Телефон / Telegram',
      phonePlaceholder: '+998 90 123 45 67 или @username',
      projectTypeLabel: 'Тип проекта',
      budgetLabel: 'Бюджетный диапазон',
      messageLabel: 'Детали и задачи проекта',
      messagePlaceholder: 'Расскажите о бренде, ориентирах, референсах сайтов или желаемых функциях...',
      submitBtn: 'Отправить заявку',
      submittingBtn: 'Отправка заявки...',
      validation: {
        name: 'Пожалуйста, укажите ваше имя',
        emailRequired: 'Пожалуйста, укажите ваш email',
        emailInvalid: 'Пожалуйста, введите корректный адрес электронной почты',
        phone: 'Укажите номер телефона или юзернейм в Telegram',
        message: 'Пожалуйста, кратко опишите цели проекта (не менее 5 символов)',
      },
      success: {
        title: 'ЗАЯВКА ПРИНЯТА',
        greeting: 'Спасибо,',
        thankYou: 'Руководитель студии ознакомится с вашими требованиями и свяжется с вами в течение 24 часов.',
        summaryHeading: 'ДЕТАЛИ ЗАПРОСА:',
        typeLabel: 'Тип проекта:',
        budgetLabel: 'Бюджет:',
        contactLabel: 'Контактные данные:',
        telegramBtn: 'Мгновенная связь в Telegram',
        newInquiryBtn: 'Отправить еще одну заявку',
      },
      projectTypes: {
        'Business Website': 'Бизнес-сайт',
        'Beauty / Barber': 'Красота / Барбер',
        Restaurant: 'Ресторан',
        Automotive: 'Автомобили',
        Education: 'Образование',
        Other: 'Другое',
      },
      budgetTiers: {
        '$100–$200': '$100–$200',
        '$200–$350': '$200–$350',
        '$350+': '$350+',
        'Not sure yet': 'Пока не определились',
      },
      directChannelsTitle: 'ПРЯМАЯ СВЯЗЬ',
      telegramTag: 'Telegram (Самый быстрый ответ)',
      telegramStatus: '● В сети',
      telegramSubtext: 'Среднее время ответа до 20 минут',
      emailTag: 'Почта студии',
      emailSubtext: 'Для официальных запросов и ТЗ',
      phoneTag: 'Прямой звонок',
      studioLocationTag: 'Локация студии',
      studioLocationVal: 'Ташкент, Узбекистан',
      studioLocationNote: 'Личные встречи проводятся по предварительной записи',
    },
    instagram: {
      tag: 'СЛЕДИТЕ ЗА ПРОЦЕССОМ',
      description: 'Смотрите наши свежие концепты, дизайн-эксперименты и проекты.',
      btn: 'Instagram',
      highlights: [
        {
          id: 'ig-1',
          title: 'Минималистичный Beauty UI',
          tag: 'Веб-дизайн',
          caption: 'Атмосферная типографика и воздух для современного бьюти-ателье.',
        },
        {
          id: 'ig-2',
          title: 'Темный авто-шоурум',
          tag: 'Motion Lab',
          caption: 'Микро-анимации, спроектированные для динамики суперкаров.',
        },
        {
          id: 'ig-3',
          title: 'Меню ресторана и бронь',
          tag: 'Кейс',
          caption: 'Легкое бронирование столиков с теплой атмосферой при свечах.',
        },
        {
          id: 'ig-4',
          title: 'Архетип бренда: LUXWEB 2026',
          tag: 'Айдентика',
          caption: 'Глубокий матовый черный, журнальная верстка и сдержанное золото.',
        },
      ],
    },
    footer: {
      tagline: 'Премиальные сайты для амбициозного бизнеса.',
      hqNote: 'Штаб-квартира в Ташкенте, Узбекистан · Доступно по всему миру',
      navigationTitle: 'Навигация',
      socialTitle: 'Социальные сети',
      backToTop: 'Наверх',
      rights: '© 2026 LUXWEB. Все права защищены.',
      craftsmanship: 'Сделано с намерением и вниманием к деталям.',
    },
  },
};
