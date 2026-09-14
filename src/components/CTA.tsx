import { ArrowRight, ArrowUpRight, Instagram, Send, Sparkles } from 'lucide-react';
import { LUXWEB_CONFIG } from '../data/studioData';
import { useLanguage } from '../context/LanguageContext';

interface CTAProps {
  onStartProject: () => void;
}

export function CTA({ onStartProject }: CTAProps) {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-[#080809] overflow-hidden border-t border-white/[0.06]">
      {/* Subtle gold ambient lighting effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#D4AF37]/10 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-1/4 w-[400px] h-[200px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtle gold badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E5C388] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.cta.badge}</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6">
            {t.cta.titlePart1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#E5C388]">
              {t.cta.titlePart2}
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.cta.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              id="cta-start-project-btn"
              onClick={onStartProject}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all duration-200 flex items-center gap-2.5 shadow-xl shadow-black/60 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <span>{t.cta.startProjectBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="cta-instagram-btn"
              href={LUXWEB_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 hover:border-[#D4AF37]/80 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.cta.instagramBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              id="cta-telegram-btn"
              href={LUXWEB_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 hover:border-[#2AABEE]/80 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#2AABEE]/40"
            >
              <Send className="w-4 h-4 text-[#2AABEE]" />
              <span>Telegram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2AABEE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
