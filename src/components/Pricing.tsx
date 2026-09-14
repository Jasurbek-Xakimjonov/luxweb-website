import { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<'USD' | 'UZS'>('USD');

  return (
    <section id="pricing" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
                {t.pricing.sectionTag}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
              {t.pricing.titlePart1} <br className="hidden sm:inline" />
              <span className="text-zinc-400">{t.pricing.titlePart2}</span>
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-3 p-1.5 rounded-full bg-[#111116] border border-white/10 self-start md:self-end">
            <span className="text-xs font-mono text-zinc-500 pl-2">{t.pricing.currencyLabel}:</span>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                currency === 'USD'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('UZS')}
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                currency === 'UZS'
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              UZS (So'm)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.pricing.plans.map((plan) => {
            const isPopular = plan.id === 'business';

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111117] border-2 border-[#D4AF37]/80 shadow-2xl shadow-black/80 lg:-translate-y-2'
                    : 'bg-[#0d0d12] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>{t.pricing.mostPopularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="mb-8 pb-8 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {currency === 'USD' ? `$${plan.priceUsd}+` : `${plan.priceUzs}+`}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase">
                        {currency === 'USD' ? 'USD' : 'UZS'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#E5C388] mt-2 block">
                      {plan.turnaroundTime}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                      {t.pricing.includesLabel}:
                    </span>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  id={`choose-${plan.id}-btn`}
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                    isPopular
                      ? 'bg-white hover:bg-[#D4AF37] text-black shadow-lg shadow-black/40'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Small Required Note from Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl mx-auto">
            {t.pricing.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
