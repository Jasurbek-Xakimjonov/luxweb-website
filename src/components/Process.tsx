import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Process() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
              {t.process.sectionTag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
            {t.process.titlePart1} <br className="hidden sm:inline" />
            <span className="text-zinc-400">{t.process.titlePart2}</span>
          </h2>
        </div>

        {/* Visual Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.process.steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                onClick={() => setActiveStep(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(idx);
                  }
                }}
                className={`group p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'bg-[#121218] border-[#D4AF37]/80 shadow-xl shadow-black/50'
                    : 'bg-[#0d0d12] border-white/[0.08] hover:border-white/20 hover:bg-[#101015]'
                }`}
              >
                <div>
                  {/* Step Number with gold indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`font-mono text-2xl font-bold tracking-tight transition-colors ${
                        isCurrent ? 'text-[#D4AF37]' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isCurrent ? 'bg-[#D4AF37] scale-125' : 'bg-white/20'
                      }`}
                    />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description from prompt */}
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Sub-steps checklist */}
                <div className="border-t border-white/[0.06] pt-5 mt-auto space-y-2">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-snug">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Bottom Guarantee Note */}
        <div className="mt-14 p-6 rounded-xl bg-[#0d0d12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-300">
            <span className="text-[#E5C388] font-semibold mr-2 font-mono">{t.process.estimatedTimelineLabel}:</span>
            {t.process.estimatedTimelineText}
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {t.process.timelineTag}
          </div>
        </div>
      </div>
    </section>
  );
}
