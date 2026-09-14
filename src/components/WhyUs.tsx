import { ShieldCheck, Zap, Smartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function WhyUs() {
  const { t } = useLanguage();

  const icons = [
    <ShieldCheck key="1" className="w-6 h-6 text-[#E5C388]" />,
    <Zap key="2" className="w-6 h-6 text-[#E5C388]" />,
    <Smartphone key="3" className="w-6 h-6 text-[#E5C388]" />,
    <TrendingUp key="4" className="w-6 h-6 text-[#E5C388]" />
  ];

  return (
    <section id="why" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
              {t.whyUs.sectionTag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
            {t.whyUs.titlePart1} <br className="hidden sm:inline" />
            <span className="text-zinc-400">{t.whyUs.titlePart2}</span>
          </h2>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {t.whyUs.features.map((feature, idx) => (
            <div
              key={feature.title}
              id={`why-feature-${idx + 1}`}
              className="group p-8 sm:p-10 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors">
                  {icons[idx]}
                </div>
                <span className="font-mono text-xs text-zinc-500 tracking-widest font-semibold">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
                {feature.title}
              </h3>

              {/* Core Description from prompt */}
              <p className="text-base text-zinc-300 font-medium leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Detail explanation */}
              <p className="text-sm text-zinc-400 font-light leading-relaxed border-t border-white/[0.06] pt-4">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0a0a0e] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-zinc-200">
              {t.whyUs.guaranteeText}
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-zinc-400 shrink-0">
            <span>{t.whyUs.wcagTag}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>{t.whyUs.zeroSlopTag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
