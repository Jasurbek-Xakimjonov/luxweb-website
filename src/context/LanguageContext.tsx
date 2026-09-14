import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationData } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const META_TRANSLATIONS: Record<Language, { title: string; desc: string }> = {
  uz: {
    title: 'LUXWEB — Premium veb-saytlar studiyasi',
    desc: 'LUXWEB ambitsiyali bizneslar uchun premium veb-saytlar va zamonaviy raqamli tajribalarni yaratadi.',
  },
  en: {
    title: 'LUXWEB — Premium Web Design Studio',
    desc: 'LUXWEB creates premium websites for modern businesses in Uzbekistan and worldwide.',
  },
  ru: {
    title: 'LUXWEB — Премиальная веб-студия',
    desc: 'LUXWEB создает премиальные сайты для амбициозного бизнеса в Узбекистане и по всему миру.',
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
        ogTitle.setAttribute('content', meta.title);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', meta.desc);
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
