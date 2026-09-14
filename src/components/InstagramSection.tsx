import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { LUXWEB_CONFIG, INSTAGRAM_HIGHLIGHTS } from '../data/studioData';
import { useLanguage } from '../context/LanguageContext';

export function InstagramSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
                {t.instagram.tag}
              </span>
            </div>

            <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-xl">
              {t.instagram.description}
            </p>
          </div>

          <a
            id="instagram-journey-btn"
            href={LUXWEB_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#D4AF37]/80 text-xs font-mono uppercase tracking-widest transition-all group self-start md:self-end"
          >
            <span>{t.instagram.btn}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Visual Lab Feed Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_HIGHLIGHTS.map((item) => {
            const localizedItem = t.instagram.highlights.find((h) => h.id === item.id) || item;

            return (
              <a
                key={item.id}
                href={LUXWEB_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-[#0d0d12] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between aspect-[4/5] overflow-hidden relative"
              >
                {/* High quality realistic image filling the card */}
                <img
                  src={item.image}
                  alt={localizedItem.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle dark luxury gradient overlay to ensure contrast & readability of badges and text */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none"
                />

                {/* Minimal grid lines within post card */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                {/* Card top */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15 text-[#E5C388]">
                    {localizedItem.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    <Heart className="w-3 h-3 text-red-400/80 fill-red-400/30" />
                    <span>{item.likes}</span>
                  </div>
                </div>

                {/* Card bottom */}
                <div className="relative z-10 pt-4 border-t border-white/10 bg-black/40 backdrop-blur-sm -mx-6 -mb-6 p-6">
                  <h4 className="font-display text-sm font-bold text-white mb-1 group-hover:text-[#E5C388] transition-colors">
                    {localizedItem.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed line-clamp-2">
                    {localizedItem.caption}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
