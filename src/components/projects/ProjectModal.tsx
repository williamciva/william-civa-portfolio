import { ArrowUpRight, Globe, X } from 'lucide-react';
import { useEffect } from 'react';
import type { PortfolioContent, Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  content: PortfolioContent;
  onClose: () => void;
}

export function ProjectModal({ project, content, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090C0D]/90"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#171D1E] border border-[#DDE2DC]/15 rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 sm:px-8 py-5 bg-[#171D1E] border-b border-[#DDE2DC]/10">
          <div className="min-w-0">
            <p className="text-xs font-mono text-[#A4B1A2] truncate">
              {project.index} · {project.role} · {project.stage}
            </p>
            <h3
              id="case-study-modal-title"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#DDE2DC] tracking-tight truncate"
            >
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#090C0D] text-[#B6D49B] border border-[#B6D49B]/40 rounded-md hover:bg-[#B6D49B] hover:text-[#090C0D] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
              >
                <span>{content.works.visitGithubBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}

            {project.links?.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#B6D49B] text-[#090C0D] rounded-md hover:bg-[#c7e0b0] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDE2DC]"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{content.works.visitWebsiteBtn}</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label={content.works.closeModalLabel}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#090C0D] text-[#DDE2DC] hover:text-[#B6D49B] border border-[#DDE2DC]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <p className="text-base sm:text-lg text-[#DDE2DC] leading-relaxed">
            {project.summary}
          </p>

          {(project.links?.github || project.links?.website) && (
            <div className="flex sm:hidden flex-wrap items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#090C0D] text-[#B6D49B] border border-[#B6D49B]/40 rounded-md whitespace-nowrap shrink-0"
                >
                  <span>{content.works.visitGithubBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#B6D49B] text-[#090C0D] rounded-md whitespace-nowrap shrink-0"
                >
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{content.works.visitWebsiteBtn}</span>
                </a>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#DDE2DC]/10">
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.context}</h4>
              <p className="text-sm sm:text-base text-[#A4B1A2] leading-relaxed">{project.context}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.challenge}</h4>
              <p className="text-sm sm:text-base text-[#A4B1A2] leading-relaxed">{project.challenge}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#DDE2DC]/10">
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.solution}</h4>
              <p className="text-sm sm:text-base text-[#A4B1A2] leading-relaxed">{project.solution}</p>
            </div>

            {project.architecture && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.architecture}</h4>
                <p className="text-sm font-mono text-[#DDE2DC]/85 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}
          </div>

          {/* TuaVaga.ai Modules Breakdown (Implemented vs In Development vs Planned) */}
          {project.modules && project.modules.length > 0 && (
            <div className="pt-6 border-t border-[#DDE2DC]/10 space-y-4">
              <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.modules}</h4>
              <div className="divide-y divide-[#DDE2DC]/10 border-y border-[#DDE2DC]/10">
                {project.modules.map((mod) => (
                  <div
                    key={mod.name}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <p className="text-sm sm:text-base font-medium text-[#DDE2DC]">{mod.name}</p>
                      <p className="text-sm text-[#A4B1A2]">{mod.description}</p>
                    </div>
                    <span
                      className={`text-xs font-mono shrink-0 ${
                        mod.status === 'implemented'
                          ? 'text-[#B6D49B]'
                          : mod.status === 'in_development'
                          ? 'text-[#DDE2DC]'
                          : 'text-[#A4B1A2]'
                      }`}
                    >
                      {content.works.statusLabels[mod.status]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Technical Decisions */}
          <div className="pt-6 border-t border-[#DDE2DC]/10 space-y-3">
            <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.decisions}</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#A4B1A2]">
              {project.decisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#B6D49B] mt-1 tabular-nums">
                    0{idx + 1}.
                  </span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Breakdown */}
          <div className="pt-6 border-t border-[#DDE2DC]/10 space-y-4">
            <h4 className="text-xs font-mono text-[#B6D49B]">{content.works.labels.stack}</h4>
            {project.stackGroups ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.stackGroups.map((group) => (
                  <div key={group.layer} className="space-y-1.5">
                    <p className="text-xs font-mono text-[#A4B1A2]">{group.layer}</p>
                    <p className="text-sm font-mono text-[#DDE2DC]">{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm font-mono text-[#DDE2DC]">
                {project.technologies.join(' · ')}
              </p>
            )}
          </div>

          {/* Scope Transparency Note */}
          {project.notes && (
            <div className="pt-6 border-t border-[#DDE2DC]/10 text-xs text-[#A4B1A2]">
              <span className="font-mono text-[#DDE2DC]">{content.works.labels.scopeNote}: </span>
              <span>{project.notes}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
