import { ArrowRight, MessageSquare, Palette, Code2, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProcessProps {
  onStartProject?: () => void;
}

export function Process({ onStartProject }: ProcessProps) {
  const { t } = useLanguage();

  const handleStartProject = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const stepIcons = [
    <MessageSquare key="1" className="w-5 h-5 text-[#E5C388]" />,
    <Palette key="2" className="w-5 h-5 text-[#E5C388]" />,
    <Code2 key="3" className="w-5 h-5 text-[#E5C388]" />,
    <Rocket key="4" className="w-5 h-5 text-[#E5C388]" />,
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#080809] border-t border-white/[0.06]">
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
            {t.process.titlePart1} <span className="text-zinc-400">{t.process.titlePart2}</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Subtle champagne-gold horizontal connection line on desktop */}
          <div 
            className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent pointer-events-none z-0" 
            aria-hidden="true"
          />

          {/* Desktop: Horizontal 4-step layout / Mobile: Vertical timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {t.process.steps.map((step, idx) => (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                className="group p-8 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-[#D4AF37]/45 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Large Elegant Number + Icon */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
                    <span className="font-display text-4xl sm:text-5xl font-light text-[#D4AF37] tracking-tight select-none">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-[#D4AF37]/30 transition-colors">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step indicator dot at bottom */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="uppercase tracking-wider">Bosqich {idx + 1}/4</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: Smoothly scrolls to the existing contact form */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            id="process-start-project-btn"
            onClick={handleStartProject}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black border border-[#D4AF37]/40 hover:border-[#D4AF37] font-display text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg shadow-black/40 hover:shadow-[#D4AF37]/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            <span>{t.process.ctaButton}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

