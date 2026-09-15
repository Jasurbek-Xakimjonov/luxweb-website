import { Sparkles, Smartphone, Send, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function WhyUs() {
  const { t } = useLanguage();

  const icons = [
    <Sparkles key="1" className="w-5 h-5 text-[#E5C388]" />,
    <Smartphone key="2" className="w-5 h-5 text-[#E5C388]" />,
    <Send key="3" className="w-5 h-5 text-[#E5C388]" />,
    <Zap key="4" className="w-5 h-5 text-[#E5C388]" />,
  ];

  return (
    <section id="why" className="relative py-24 sm:py-32 bg-[#080809] border-t border-white/[0.06]">
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
            {t.whyUs.titlePart1} <span className="text-zinc-400">{t.whyUs.titlePart2}</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Feature Blocks (2x2 grid on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.whyUs.features.map((feature, idx) => (
            <div
              key={feature.number}
              id={`why-feature-${feature.number}`}
              className="group p-8 sm:p-10 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-[#D4AF37]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Header with large elegant number and icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-4xl sm:text-5xl font-light text-[#D4AF37] tracking-tight select-none">
                  {feature.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[#D4AF37]/30 transition-colors">
                  {icons[idx]}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

