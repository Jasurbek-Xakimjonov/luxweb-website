import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
              {t.services.sectionTag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
            {t.services.titlePart1} <br className="hidden sm:inline" />
            <span className="text-zinc-400">{t.services.titlePart2}</span>
          </h2>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service.title);
                }
              }}
              className="group relative flex flex-col justify-between p-8 rounded-xl bg-[#0e0e12] border border-white/[0.08] hover:border-[#D4AF37]/50 hover:bg-[#121218] transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              {/* Subtle gold corner highlight on hover */}
              <div
                className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Card Top: Number & Arrow */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-widest text-zinc-500 group-hover:text-[#D4AF37] transition-colors font-medium">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Deliverables tags */}
              <div className="border-t border-white/[0.06] pt-5 mt-auto">
                <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 block mb-2.5">
                  {t.services.deliverablesLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.05] group-hover:border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Solution & Advisory Card */}
          <div
            onClick={() => onSelectService(t.services.customTitle)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService(t.services.customTitle);
              }
            }}
            className="group relative flex flex-col justify-between p-8 rounded-xl bg-gradient-to-br from-[#121217] to-[#0a0a0d] border border-white/[0.08] hover:border-[#D4AF37]/50 hover:bg-[#14141c] transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-sm tracking-widest text-[#D4AF37] font-medium">
                  {t.services.customTag}
                </span>
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                {t.services.customTitle}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                {t.services.customDesc}
              </p>
            </div>

            <div className="border-t border-white/[0.06] pt-5 mt-auto">
              <span className="text-xs font-semibold tracking-wider text-[#E5C388] flex items-center gap-1.5 uppercase font-mono">
                {t.services.customCta}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
