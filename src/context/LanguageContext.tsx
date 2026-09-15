import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationData } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const META_TRANSLATIONS: Record<Language, { title: string; desc: string; ogTitle: string; ogDesc: string; langCode: string }> = {
  uz: {
    title: 'LUXWEB — Premium Web Saytlar | O‘zbekiston',
    desc: 'LUXWEB — O‘zbekistondagi bizneslar uchun premium web saytlar yaratadi. Zamonaviy dizayn, mobil moslashuv, SEO va Telegram lead tizimi.',
    ogTitle: 'LUXWEB — Premium Web Saytlar',
    ogDesc: 'Biznesingiz uchun premium va zamonaviy web saytlar.',
    langCode: 'uz',
  },
  en: {
    title: 'LUXWEB — Premium Websites | Uzbekistan',
    desc: 'LUXWEB creates premium websites for businesses in Uzbekistan. Modern design, mobile responsive, SEO, and direct Telegram lead system.',
    ogTitle: 'LUXWEB — Premium Websites',
    ogDesc: 'Premium, bespoke websites for modern businesses.',
    langCode: 'en',
  },
  ru: {
    title: 'LUXWEB — Премиальные Веб-Сайты | Узбекистан',
    desc: 'LUXWEB создает премиальные сайты для бизнеса в Узбекистане. Современный дизайн, мобильная адаптация, SEO и Telegram лид-система.',
    ogTitle: 'LUXWEB — Премиальные Веб-Сайты',
    ogDesc: 'Премиальные и современные веб-сайты для вашего бизнеса.',
    langCode: 'ru',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luxweb_lang');
      if (saved === 'uz' || saved === 'en' || saved === 'ru') {
        return saved;
      }
    }
    return 'uz'; // Default to Uzbek as specified in requirements
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('luxweb_lang', newLang);
    }
  };

  useEffect(() => {
    // Update document HTML lang attribute
    document.documentElement.lang = lang;

    // Update document Title and Meta Description for SEO and browser tab
    const meta = META_TRANSLATIONS[lang];
    if (meta) {
      document.title = meta.title;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.desc);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', meta.ogTitle);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', meta.ogDesc);
      }

      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) {
        twTitle.setAttribute('content', meta.ogTitle);
      }

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) {
        twDesc.setAttribute('content', meta.ogDesc);
      }
    }
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
