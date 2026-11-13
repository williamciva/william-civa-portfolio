import type { PortfolioContent } from '../../types/portfolio';

interface ExperienceSectionProps {
  content: PortfolioContent;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 border-t border-[#DDE2DC]/10 bg-[#090C0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 reveal-block">
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#B6D49B] tabular-nums">
                {content.experience.sectionIndex}.
              </span>
              <h2 className="text-xs font-medium tracking-wide text-[#A4B1A2]">
                {content.experience.sectionTitle}
              </h2>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#DDE2DC] leading-tight">
              {content.experience.headline}
            </h3>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end space-y-3">
            <p className="text-base sm:text-lg text-[#A4B1A2] leading-relaxed max-w-2xl">
              {content.experience.lead}
            </p>
            <p className="text-xs font-mono text-[#A4B1A2]/80 max-w-2xl">
              {content.experience.confidentialityNote}
            </p>
          </div>
        </div>

        {/* Chronological Hairline Timeline */}
        <div className="divide-y divide-[#DDE2DC]/10 border-y border-[#DDE2DC]/10">
          {content.experience.items.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="reveal-block py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
            >
              <div className="lg:col-span-4 space-y-1.5">
                <p className="font-mono text-xs text-[#B6D49B] tabular-nums">
                  {item.period}
                </p>
                <h4 className="font-display text-2xl font-semibold text-[#DDE2DC] tracking-tight">
                  {item.role}
                </h4>
                <p className="text-sm text-[#A4B1A2]">{item.company}</p>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <p className="text-base sm:text-lg text-[#DDE2DC]/90 leading-relaxed">
                  {item.summary}
                </p>

                <ul className="space-y-2 text-sm sm:text-base text-[#A4B1A2]">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-[#B6D49B] mt-1 tabular-nums">
                        —
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-2 text-xs font-mono text-[#DDE2DC]/75">
                  {item.stack.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
