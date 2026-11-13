import { ArrowUpRight, Globe } from 'lucide-react';
import type { PortfolioContent, Project } from '../../types/portfolio';

interface SelectedWorksSectionProps {
  content: PortfolioContent;
  onSelectProject: (project: Project) => void;
}

export function SelectedWorksSection({ content, onSelectProject }: SelectedWorksSectionProps) {
  return (
    <section
      id="works"
      className="py-24 sm:py-32 border-t border-[#DDE2DC]/10 bg-[#090C0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 reveal-block">
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#B6D49B] tabular-nums">
                {content.works.sectionIndex}.
              </span>
              <h2 className="text-xs font-medium tracking-wide text-[#A4B1A2]">
                {content.works.sectionTitle}
              </h2>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#DDE2DC] leading-tight">
              {content.works.headline}
            </h3>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="text-base sm:text-lg text-[#A4B1A2] leading-relaxed max-w-2xl">
              {content.works.lead}
            </p>
          </div>
        </div>

        {/* Two Curated Architectural Case Studies */}
        <div className="space-y-8">
          {content.works.projects.map((project) => (
            <article
              key={project.slug}
              className="reveal-block bg-[#171D1E] border border-[#DDE2DC]/10 rounded-xl overflow-hidden"
            >
              <div className="p-7 sm:p-10 lg:p-12 space-y-8">
                {/* Top Metadata Line (Zero Pills) */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DDE2DC]/10 pb-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A4B1A2]">
                    <span className="text-[#B6D49B]">{project.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </div>
                  <span className="text-xs font-mono text-[#DDE2DC]/80">
                    {project.role} · {project.stage}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <h4 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#DDE2DC]">
                      {project.title}
                    </h4>
                    <p className="text-base sm:text-lg text-[#A4B1A2] leading-relaxed">
                      {project.summary}
                    </p>
                    <p className="text-sm sm:text-base text-[#DDE2DC]/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-5">
                    <div className="space-y-2">
                      <p className="text-xs font-mono text-[#A4B1A2]">
                        {content.works.labels.stack}
                      </p>
                      <p className="text-sm font-mono text-[#DDE2DC] leading-relaxed">
                        {project.technologies.join(' · ')}
                      </p>
                    </div>

                    {project.modules && (
                      <div className="pt-4 border-t border-[#DDE2DC]/10 space-y-2">
                        <p className="text-xs font-mono text-[#A4B1A2]">
                          {content.works.labels.modules}
                        </p>
                        <p className="text-sm text-[#DDE2DC]/85 leading-relaxed">
                          {project.modules.map((m) => m.name).join(' · ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions: Technical Deep Dive + Conditional External Links (Elysian GitHub/Website) */}
                <div className="pt-6 border-t border-[#DDE2DC]/10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#DDE2DC] text-[#090C0D] rounded-md hover:bg-[#B6D49B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                  >
                    <span>{content.works.deepDiveBtn}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#090C0D] text-[#B6D49B] border border-[#B6D49B]/40 rounded-md hover:bg-[#B6D49B] hover:text-[#090C0D] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                    >
                      <span>{content.works.visitGithubBtn}</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}

                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#090C0D] text-[#DDE2DC] border border-[#DDE2DC]/20 rounded-md hover:border-[#B6D49B] hover:text-[#B6D49B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                    >
                      <Globe className="w-4 h-4" aria-hidden="true" />
                      <span>{content.works.visitWebsiteBtn}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
