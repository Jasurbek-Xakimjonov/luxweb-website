import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { LUXWEB_CONFIG } from '../data/studioData';

interface NavbarProps {
  onOpenProjectForm: (prefillPackage?: string) => void;
}

export function Navbar({ onOpenProjectForm }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.why, href: '#why' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string; flag: string; name: string }[] = [
    { code: 'uz', label: 'UZ', flag: '🇺🇿', name: 'O‘zbek' },
    { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
    { code: 'ru', label: 'RU', flag: '🇷🇺', name: 'Русский' },
  ];

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#080809]/85 backdrop-blur-md border-b border-white/[0.08]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="LUXWEB Studio Home"
          >
            <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-white/20 flex items-center justify-center transition-colors group-hover:border-[#D4AF37]">
              <span className="text-sm font-bold tracking-tighter text-white group-hover:text-[#D4AF37] transition-colors">
                L
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white">
                LUXWEB
              </span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium -mt-1 hidden sm:inline">
                {t.nav.studioSubtitle}
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-wide text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-white transition-colors relative py-1 group focus:outline-none focus:text-[#D4AF37]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action + Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Minimal Luxury Language Switcher */}
            <div
              id="language-switcher-desktop"
              className="flex items-center text-xs font-mono tracking-wider bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-full px-2 py-1 transition-colors"
              role="group"
              aria-label="Language selector"
            >
              {languages.map((item, idx) => (
                <div key={item.code} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`px-1.5 py-0.5 rounded transition-all duration-150 ${
                      lang === item.code
                        ? 'text-[#E5C388] font-bold scale-105'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                    title={item.name}
                    aria-pressed={lang === item.code}
                  >
                    {item.label}
                  </button>
                  {idx < languages.length - 1 && (
                    <span className="text-zinc-700 select-none text-[10px] mx-0.5">|</span>
                  )}
                </div>
              ))}
            </div>

            <a
              id="nav-instagram-btn"
              href={LUXWEB_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-[#E5C388] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 transition-colors flex items-center justify-center focus:outline-none"
              aria-label="LUXWEB Instagram"
              title="@luxweb.uz Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              id="nav-telegram-btn"
              href={LUXWEB_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-[#2AABEE] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#2AABEE]/50 transition-colors flex items-center justify-center focus:outline-none"
              aria-label="LUXWEB Telegram"
              title="LUXWEB Telegram"
            >
              <Send className="w-3.5 h-3.5" />
            </a>

            <button
              id="nav-start-project-btn"
              onClick={() => onOpenProjectForm()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#D4AF37]/70 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions: Language + Start + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            {/* Quick mobile language pill */}
            <div className="flex items-center text-[11px] font-mono bg-white/[0.04] border border-white/10 rounded-full px-2 py-1">
              {languages.map((item, idx) => (
                <div key={item.code} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`px-1 transition-colors ${
                      lang === item.code
                        ? 'text-[#E5C388] font-bold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {item.label}
                  </button>
                  {idx < languages.length - 1 && (
                    <span className="text-zinc-700 text-[9px]">|</span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenProjectForm()}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/15"
            >
              {lang === 'uz' ? 'Boshlash' : lang === 'ru' ? 'Старт' : 'Start'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#080809] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-[#D4AF37] flex items-center justify-center">
                <span className="text-sm font-bold text-[#D4AF37]">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  LUXWEB
                </span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">
                  {t.nav.studioSubtitle}
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Dedicated Language Selector inside Mobile Menu */}
          <div className="my-4 pt-2">
            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono block mb-2.5">
              Til / Language / Язык
            </span>
            <div className="grid grid-cols-3 gap-2 bg-white/[0.04] p-1.5 rounded-xl border border-white/10">
              {languages.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`py-2 px-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                    lang === item.code
                      ? 'bg-[#D4AF37] text-black font-bold shadow'
                      : 'text-zinc-400 hover:text-white bg-black/20'
                  }`}
                >
                  <span>{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 py-4">
            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono">
              {t.nav.mobileMenuTitle}
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xl sm:text-2xl font-semibold tracking-tight text-white hover:text-[#D4AF37] transition-colors flex items-center justify-between py-1"
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-600 font-mono">0{idx + 1}</span>
              </a>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="border-t border-white/10 pt-6 flex flex-col gap-4 mt-auto">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectForm();
              }}
              className="w-full py-3.5 px-6 rounded-lg bg-white text-black font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-colors"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-nav-instagram-btn"
                href={LUXWEB_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/50 text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instagram</span>
              </a>

              <a
                id="mobile-nav-telegram-btn"
                href={LUXWEB_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#2AABEE]/50 text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#2AABEE]" />
                <span>Telegram</span>
              </a>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.nav.locationNote}</span>
              </div>
              <span>{t.nav.worldwideNote}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
