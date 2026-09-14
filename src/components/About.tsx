import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
            {t.about.sectionTag}
          </span>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Headline & Copy */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-8">
              {t.about.titlePart1} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                {t.about.titlePart2}
              </span>
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              <p>
                <strong className="text-white font-medium">{t.about.p1Bold}</strong> {t.about.p1Rest}
              </p>

              <p className="text-zinc-400 text-base sm:text-lg">
                {t.about.p2}
              </p>
            </div>

            {/* Studio manifesto & geography callout */}
            <div className="mt-10 p-6 sm:p-8 rounded-xl bg-[#0e0e13] border border-white/[0.08] max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                  {t.about.locationBoxTitle}
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                {t.about.locationBoxText}
              </p>
            </div>
          </div>

          {/* Right Column: 4 Real Statistics */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-[#0e0e13] border border-white/[0.08] flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
              >
                <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  {stat.value}
                </span>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E5C388] block">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-0.5 block">
                    {stat.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
