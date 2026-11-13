import { Printer, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Locale, PortfolioContent } from '../../types/portfolio';

interface ResumeModalProps {
  open: boolean;
  locale: Locale;
  content: PortfolioContent;
  onClose: () => void;
}

export function ResumeModal({ open, locale, content, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
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
  }, [open, onClose]);

  if (!open) return null;

  const isPt = locale === 'pt';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090C0D]/90 print:static print:bg-white print:p-0"
      onClick={onClose}
    >
      <div
        className="resume-print-sheet relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#171D1E] border border-[#DDE2DC]/15 rounded-xl shadow-2xl print:max-h-none print:overflow-visible print:border-0 print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar (Hidden on Print) */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-[#171D1E] border-b border-[#DDE2DC]/10 print:hidden">
          <div>
            <p className="text-xs font-mono text-[#B6D49B]">
              {isPt ? 'Currículo · Resumo Estruturado' : 'Resume · Structured Summary'}
            </p>
            <h3
              id="resume-modal-title"
              className="font-display text-xl font-semibold text-[#DDE2DC]"
            >
              {content.hero.name}
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#B6D49B] text-[#090C0D] rounded-md hover:bg-[#c7e0b0] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDE2DC]"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isPt ? 'Imprimir / Salvar PDF' : 'Print / Save PDF'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label={isPt ? 'Fechar currículo' : 'Close resume'}
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#090C0D] text-[#DDE2DC] hover:text-[#B6D49B] border border-[#DDE2DC]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Content */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0">
          {/* Header */}
          <header className="border-b border-[#DDE2DC]/15 print:border-black/20 pb-6 space-y-2">
            <h1 className="font-display text-3xl font-semibold text-[#DDE2DC] print:text-black">
              {content.hero.name}
            </h1>
            <p className="font-mono text-sm text-[#B6D49B] print:text-neutral-700">
              {content.hero.role}
            </p>
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#A4B1A2] print:text-neutral-600">
              <span>{content.contact.emailAddress}</span>
              <span>·</span>
              <span>{content.contact.phoneNumber}</span>
              <span>·</span>
              <span>github.com/williamciva</span>
              <span>·</span>
              <span>linkedin.com/in/williamciva</span>
            </div>
          </header>

          {/* Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#B6D49B] print:text-neutral-800">
              {isPt ? 'Perfil & Formação' : 'Profile & Education'}
            </h2>
            <p className="text-sm text-[#DDE2DC]/90 print:text-neutral-800 leading-relaxed">
              {content.about.paragraphs[0]} {content.about.paragraphs[2]}
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#A4B1A2] print:text-neutral-700">
              {content.about.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="text-[#DDE2DC] print:text-black">{fact.label}: </span>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#B6D49B] print:text-neutral-800">
              {content.experience.sectionTitle}
            </h2>
            <div className="space-y-5">
              {content.experience.items.map((item) => (
                <div
                  key={`${item.company}-${item.role}`}
                  className="space-y-1.5 border-l-2 border-[#DDE2DC]/15 print:border-neutral-300 pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-[#DDE2DC] print:text-black">
                      {item.role} — {item.company}
                    </h3>
                    <span className="text-xs font-mono text-[#A4B1A2] print:text-neutral-600">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#A4B1A2] print:text-neutral-700">
                    {item.summary}
                  </p>
                  <ul className="list-disc list-inside text-xs text-[#DDE2DC]/85 print:text-neutral-800 space-y-1">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#B6D49B] print:text-neutral-800">
              {content.expertise.sectionTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.expertise.domains.map((domain) => (
                <div key={domain.index} className="space-y-1">
                  <p className="text-xs font-semibold text-[#DDE2DC] print:text-black">
                    {domain.title}
                  </p>
                  <p className="text-xs font-mono text-[#A4B1A2] print:text-neutral-700 leading-relaxed">
                    {domain.technologies.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#B6D49B] print:text-neutral-800">
              {content.works.sectionTitle}
            </h2>
            <div className="space-y-3">
              {content.works.projects.map((proj) => (
                <div key={proj.slug} className="space-y-1">
                  <p className="text-sm font-semibold text-[#DDE2DC] print:text-black">
                    {proj.title}{' '}
                    <span className="font-mono text-xs font-normal text-[#A4B1A2] print:text-neutral-600">
                      ({proj.role})
                    </span>
                  </p>
                  <p className="text-xs text-[#A4B1A2] print:text-neutral-700 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
