import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/studioData';
import { ProjectItem, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {
  onSelectProjectForCommission: (projectName: string) => void;
}

export function Portfolio({ onSelectProjectForCommission }: PortfolioProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = ['All', 'Beauty', 'Automotive', 'Restaurant', 'Education', 'Business'];

  const localizedProjects: ProjectItem[] = t.portfolio.projects.map((tp) => {
    const baseData = PROJECTS_DATA.find((p) => p.id === tp.id) || PROJECTS_DATA[0];
    return {
      ...baseData,
      ...tp,
      categoryType: tp.categoryType as 'Beauty' | 'Automotive' | 'Restaurant' | 'Education' | 'Business',
      heroImage: baseData.heroImage,
    };
  });

  const filteredProjects = selectedCategory === 'All'
    ? localizedProjects
    : localizedProjects.filter((p) => p.categoryType === selectedCategory);

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#080809] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C388] font-semibold">
                {t.portfolio.sectionTag}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
              {t.portfolio.titlePart1} <br className="hidden sm:inline" />
              <span className="text-zinc-400">{t.portfolio.titlePart2}</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#111116] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.portfolio.categories[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              data-cursor="project"
              onClick={() => setActiveModalProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalProject(project);
                }
              }}
              className="group cursor-pointer rounded-2xl bg-[#0d0d12] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 overflow-hidden shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Project Details & Meta */}
                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10 bg-[#0d0d12]/95">
                  <div>
                    {/* Top Bar: Number & Category */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                        {t.portfolio.projectPrefix} / 0{idx + 1}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-white/5 text-[#E5C388] border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Title with subtle hover movement */}
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 group-hover:translate-x-1.5 transition-transform duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
                      {project.shortDescription}
                    </p>

                    {/* Key Metrics Pill */}
                    <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/5">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="flex flex-col">
                          <span className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-[#E5C388] transition-colors">
                            {m.value}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
                      <span>{t.portfolio.viewProject}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>

                    <span className="text-[11px] font-mono text-zinc-500">
                      {project.year} · {project.location}
                    </span>
                  </div>
                </div>

                {/* Right: Immersive Mockup Preview Frame */}
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[320px] sm:min-h-[440px] overflow-hidden bg-black order-1 lg:order-2">
                  {/* Browser Chrome Header inside card */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/15">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">
                      luxweb.uz/portfolio/{project.id}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-[#D4AF37]">
                      {t.portfolio.livePreview}
                    </span>
                  </div>

                  {/* Main Image with Zoom & Overlay */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={`${project.title} — ${project.category}`}
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92] group-hover:brightness-100"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                    {/* Floating Luxury Detail Badge inside Preview */}
                    <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>{t.portfolio.clickToExplore}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onRequestSimilar={onSelectProjectForCommission}
        />
      )}
    </section>
  );
}
