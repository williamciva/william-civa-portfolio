import { ArrowRight, FileDown } from 'lucide-react';
import { RESUME_LINKS } from '../../config/resume';
import type { Locale, PortfolioContent } from '../../types/portfolio';

interface HeroSectionProps {
  content: PortfolioContent;
  locale: Locale;
  onOpenResume: () => void;
}

export function HeroSection({ content, locale, onOpenResume }: HeroSectionProps) {
  const resumeHref = RESUME_LINKS[locale]?.trim();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-20 pb-16"
    >
      <div className="hero-content-parallax relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 will-change-transform">
        <div className="max-w-3xl space-y-5">
          <p className="hero-stagger text-xs sm:text-sm text-[#A4B1A2] tracking-wide">
            {content.hero.kicker}
          </p>

          <h1 className="hero-stagger font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-[#DDE2DC] leading-[0.98]">
            {content.hero.name}
          </h1>

          <p className="hero-stagger font-mono text-sm sm:text-base text-[#B6D49B] tracking-tight">
            {content.hero.role}
          </p>

          <p className="hero-stagger text-lg sm:text-2xl text-[#DDE2DC]/90 max-w-2xl leading-snug font-normal">
            {content.hero.statement}
          </p>

          <div className="hero-stagger pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#B6D49B] text-[#090C0D] rounded-md hover:bg-[#c7e0b0] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDE2DC]"
            >
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            {resumeHref ? (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#DDE2DC] bg-[#171D1E]/95 border border-[#DDE2DC]/20 rounded-md hover:border-[#B6D49B] hover:text-[#B6D49B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>{content.hero.secondaryCta}</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#DDE2DC] bg-[#171D1E]/95 border border-[#DDE2DC]/20 rounded-md hover:border-[#B6D49B] hover:text-[#B6D49B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>{content.hero.secondaryCta}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
