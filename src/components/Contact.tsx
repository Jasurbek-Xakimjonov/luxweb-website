import { useState, useEffect, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, MessageSquare, AlertCircle } from 'lucide-react';
import { LUXWEB_CONFIG } from '../data/studioData';
import { ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  initialProjectType?: string;
  initialBudget?: string;
}

const PROJECT_TYPE_KEYS = ['Business Website', 'Beauty / Barber', 'Restaurant', 'Automotive', 'Education', 'Other'] as const;
const BUDGET_KEYS = ['$100–$200', '$200–$350', '$350+', 'Not sure yet'] as const;

export function Contact({ initialProjectType, initialBudget }: ContactProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    business: '',
    email: '',
    phone: '',
    projectType: 'Business Website',
    budget: '$200–$350',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialProjectType, initialBudget]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.validation.name;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t.contact.validation.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.validation.phone;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = t.contact.validation.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      projectType: 'Business Website',
      budget: '$200–$350',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
              {t.contact.sectionTag}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
            {t.contact.titlePart1} <br className="hidden sm:inline" />
            <span className="text-zinc-400">{t.contact.titlePart2}</span>
          </h2>
        </div>

        {/* Contact Layout: Form + Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Column */}
          <div className="lg:col-span-8 bg-[#0d0d12] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3">
                  {t.contact.success.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 font-light leading-relaxed">
                  {t.contact.success.greeting} <span className="text-white font-medium">{formData.name}</span>. {t.contact.success.thankYou}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 max-w-md mx-auto mb-8 text-left text-xs font-mono space-y-2">
                  <div className="text-zinc-500 font-semibold">{t.contact.success.summaryHeading}</div>
                  <div className="text-zinc-300">
                    <span className="text-zinc-500">{t.contact.success.typeLabel}</span> {t.contact.projectTypes[formData.projectType] || formData.projectType}
                  </div>
                  <div className="text-zinc-300">
                    <span className="text-zinc-500">{t.contact.success.budgetLabel}</span> {t.contact.budgetTiers[formData.budget] || formData.budget}
                  </div>
                  <div className="text-zinc-300">
                    <span className="text-zinc-500">{t.contact.success.contactLabel}</span> {formData.email} / {formData.phone}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={LUXWEB_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E5C388] transition-colors flex items-center gap-2"
                  >
                    <span>{t.contact.success.telegramBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {t.contact.success.newInquiryBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      {t.contact.nameLabel} <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Business */}
                  <div>
                    <label htmlFor="business-input" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      {t.contact.businessLabel}
                    </label>
                    <input
                      id="business-input"
                      type="text"
                      placeholder={t.contact.businessPlaceholder}
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email-input" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      {t.contact.emailLabel} <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone-input" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      {t.contact.phoneLabel} <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="phone-input"
                      type="text"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-red-500/80 focus:ring-red-500'
                          : 'border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    {t.contact.projectTypeLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {PROJECT_TYPE_KEYS.map((key) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setFormData({ ...formData, projectType: key })}
                        className={`px-3.5 py-2.5 rounded-lg text-xs font-medium text-left transition-all ${
                          formData.projectType === key
                            ? 'bg-[#D4AF37]/15 border border-[#D4AF37] text-white'
                            : 'bg-black/40 border border-white/10 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        {t.contact.projectTypes[key] || key}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    {t.contact.budgetLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {BUDGET_KEYS.map((key) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setFormData({ ...formData, budget: key })}
                        className={`px-3.5 py-2.5 rounded-lg text-xs font-mono text-center transition-all ${
                          formData.budget === key
                            ? 'bg-white text-black font-bold border border-white'
                            : 'bg-black/40 border border-white/10 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        {t.contact.budgetTiers[key] || key}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message-input" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    {t.contact.messageLabel} <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500/80 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-black/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  {isSubmitting ? (
                    <span>{t.contact.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.contact.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Studio Channels & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-6">
                {t.contact.directChannelsTitle}
              </h3>

              {/* Telegram Channel */}
              <a
                href={LUXWEB_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-[#0e0e13] border border-white/10 hover:border-[#D4AF37]/60 transition-colors block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-[#E5C388] font-semibold flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t.contact.telegramTag}</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">● {t.contact.telegramStatus}</span>
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                  {LUXWEB_CONFIG.telegramHandle}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-light">
                  {t.contact.telegramSubtext}
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${LUXWEB_CONFIG.email}`}
                className="p-6 rounded-xl bg-[#0e0e13] border border-white/10 hover:border-[#D4AF37]/60 transition-colors block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.contact.emailTag}</span>
                  </span>
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                  {LUXWEB_CONFIG.email}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-light">
                  {t.contact.emailSubtext}
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${LUXWEB_CONFIG.phone}`}
                className="p-6 rounded-xl bg-[#0e0e13] border border-white/10 hover:border-[#D4AF37]/60 transition-colors block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.contact.phoneTag}</span>
                  </span>
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                  {LUXWEB_CONFIG.phone}
                </div>
              </a>
            </div>

            {/* Studio Address Box */}
            <div className="p-6 rounded-xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-500 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.contact.studioLocationTag}</span>
              </div>
              <div className="text-sm font-medium text-zinc-300">
                {t.contact.studioLocationVal}
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-light">
                {t.contact.studioLocationNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
