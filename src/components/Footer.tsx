import { ArrowUp, Instagram, Send, Mail } from 'lucide-react';
import { LUXWEB_CONFIG } from '../data/studioData';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#050506] border-t border-white/[0.08] text-white pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-display font-extrabold text-3xl sm:text-5xl tracking-wider text-white block">
              LUXWEB
            </span>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t.footer.hqNote}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-4">
              {t.footer.navigationTitle}
            </span>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <a href="#work" className="text-zinc-400 hover:text-white transition-colors">
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-4">
              {t.footer.socialTitle}
            </span>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <a
                  href={LUXWEB_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#E5C388] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={LUXWEB_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#E5C388] transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${LUXWEB_CONFIG.email}`}
                  className="text-zinc-400 hover:text-[#E5C388] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-[11px] font-mono"
                aria-label={t.footer.backToTop}
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{t.footer.backToTop}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Craftsmanship */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © 2026 LUXWEB. {t.footer.rights}
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>{t.footer.craftsmanship}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
