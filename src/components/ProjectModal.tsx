import { useState } from 'react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0e0e13] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0a0a0e]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {t.portfolio.modal.caseStudyPrefix} {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 max-h-[80vh] overflow-y-auto">
          {/* Title and metadata */}
          <div className="mb-8">
            <h3 id="modal-project-title" className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">{t.portfolio.modal.clientLabel}</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">{t.portfolio.modal.yearLabel}</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">{t.portfolio.modal.locationLabel}</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">{project.location}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 block">{t.portfolio.modal.categoryLabel}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#E5C388]">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Realistic High-Fidelity UI Browser Mockup Frame */}
          <div className="rounded-xl overflow-hidden border border-white/15 bg-black mb-8 shadow-2xl">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#17171d] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/70" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/70" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/70" />
              </div>
              <div className="text-[11px] font-mono text-zinc-400 bg-black/40 px-4 py-1 rounded-md border border-white/5">
                https://{project.id}.luxweb.uz
              </div>
              <div className="w-10" />
            </div>

            {/* Mockup Preview Visual */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src={project.heroImage}
                alt={`${project.title} Web Interface Preview`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              {/* Inner UI Overlay Mockup Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-zinc-300">{t.portfolio.modal.liveBuildBadge}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                  <span>{t.portfolio.modal.studioCraftBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#E5C388] block">
                  {m.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description narrative */}
          <div className="mb-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#E5C388] mb-3">
              {t.portfolio.modal.architectureHeading}
            </h4>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light mb-4">
              {project.fullDescription}
            </p>

            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mt-6 mb-3">
              {t.portfolio.modal.highlightsHeading}
            </h5>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Testimonial (if present) */}
          {project.testimonial && (
            <div className="p-6 rounded-xl bg-gradient-to-r from-neutral-900 to-stone-900 border-l-2 border-[#D4AF37] mb-8">
              <p className="text-sm sm:text-base text-zinc-200 italic mb-3 font-light">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs font-mono">
                <span className="text-white font-semibold">{project.testimonial.author}</span>
                <span className="text-zinc-400"> — {project.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-xs text-zinc-400 font-mono">
              {t.portfolio.modal.similarStandardPrompt}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/5"
              >
                {t.portfolio.modal.closeBtn}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestSimilar(project.title);
                }}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>{t.portfolio.modal.commissionBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
