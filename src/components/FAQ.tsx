import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for clear affordance

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#080809] border-t border-white/[0.06]">
      {/* Subtle ambient lighting accent */}
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[300px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#E5C388] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>{t.faq.sectionTag}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-4">
            {t.faq.titlePart1} <span className="text-zinc-400">{t.faq.titlePart2}</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const numberFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                id={`faq-accordion-item-${index + 1}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0e0e14] border-[#D4AF37]/50 shadow-lg shadow-black/40'
                    : 'bg-[#0b0b0f] border-white/[0.07] hover:border-white/20 hover:bg-[#0e0e13]'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-${index + 1}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index + 1}`}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-2">
                    {/* Number Indicator */}
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
                        isOpen ? 'text-[#D4AF37]' : 'text-zinc-500'
                      }`}
                    >
                      {numberFormatted}
                    </span>

                    {/* Question */}
                    <span
                      className={`font-display text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Icon Indicator */}
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#D4AF37] rotate-180'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Animated Accordion Panel */}
                <div
                  id={`faq-answer-${index + 1}`}
                  role="region"
                  aria-labelledby={`faq-toggle-${index + 1}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-zinc-400 font-light leading-relaxed border-t border-white/[0.04] mt-1 pl-[3.25rem] sm:pl-[4.5rem]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]/70" />
            <span>Boshqa savollaringiz bormi? Pastdagi forma orqali yozing.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
