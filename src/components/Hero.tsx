import { ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onViewWork: () => void;
  onStartProject: () => void;
}

export function Hero({ onViewWork, onStartProject }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-grid-pattern bg-gold-glow"
    >
      {/* Delicate ambient gold lights (restrained & architectural) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-10 w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex flex-wrap items-center gap-3 py-1.5 px-3.5 mb-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-xs">
            <span className="font-mono tracking-widest text-[11px] text-[#E5C388] font-semibold uppercase">
              {t.hero.statusLabel}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {t.hero.availability}
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold tracking-tight leading-[1.04] text-white uppercase mb-6">
            {t.hero.headlinePart1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              {t.hero.headlinePart2}
            </span>
          </h1>

          {/* Secondary Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 tracking-tight mb-4">
            {t.hero.subheadline}
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              id="hero-view-work-btn"
              onClick={onViewWork}
              className="px-7 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-black/50 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <span>{t.hero.viewWorkBtn}</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-start-project-btn"
              onClick={onStartProject}
              className="px-7 py-4 rounded-full bg-transparent border border-white/20 hover:border-[#D4AF37]/80 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            >
              <span>{t.hero.startProjectBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Architectural Micro Details & Metrics Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 pt-12 border-t border-white/[0.07] mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              {t.hero.metrics.focusLabel}
            </span>
            <span className="text-sm font-semibold text-zinc-200">
              {t.hero.metrics.focusVal}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              {t.hero.metrics.standardLabel}
            </span>
            <span className="text-sm font-semibold text-zinc-200">
              {t.hero.metrics.standardVal}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              {t.hero.metrics.perfLabel}
            </span>
            <span className="text-sm font-semibold text-zinc-200">
              {t.hero.metrics.perfVal}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              {t.hero.metrics.locationLabel}
            </span>
            <span className="text-sm font-semibold text-zinc-200">
              {t.hero.metrics.locationVal}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
