import type { PortfolioContent } from '../../types/portfolio';

interface ExpertiseSectionProps {
  content: PortfolioContent;
}

export function ExpertiseSection({ content }: ExpertiseSectionProps) {
  return (
    <section
      id="expertise"
      className="py-24 sm:py-32 border-t border-[#DDE2DC]/10 bg-[#090C0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 reveal-block">
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#B6D49B] tabular-nums">
                {content.expertise.sectionIndex}.
              </span>
              <h2 className="text-xs font-medium tracking-wide text-[#A4B1A2]">
                {content.expertise.sectionTitle}
              </h2>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#DDE2DC] leading-tight">
              {content.expertise.headline}
            </h3>
          </div>

          <div className="lg:col-span-8 flex items-end">
            <p className="text-base sm:text-lg text-[#A4B1A2] leading-relaxed max-w-2xl">
              {content.expertise.lead}
            </p>
          </div>
        </div>

        {/* Contextualized Capability Grid — Zero Percentage Bars, Zero Pill Enclosures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.expertise.domains.map((domain) => (
            <article
              key={domain.index}
              className="reveal-block bg-[#171D1E] border border-[#DDE2DC]/10 rounded-xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#DDE2DC]/25 transition-colors duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#A4B1A2]">
                  <span className="tabular-nums text-[#B6D49B]">{domain.index}</span>
                  <span>{domain.focus}</span>
                </div>

                <h4 className="font-display text-2xl font-semibold text-[#DDE2DC] tracking-tight">
                  {domain.title}
                </h4>

                <p className="text-sm sm:text-base text-[#A4B1A2] leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#DDE2DC]/10">
                <p className="text-xs sm:text-sm font-mono text-[#DDE2DC]/85 leading-relaxed">
                  {domain.technologies.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
