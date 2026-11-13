import { useState } from 'react';
import type { PortfolioContent } from '../../types/portfolio';

interface AboutSectionProps {
  content: PortfolioContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex items-baseline gap-4 mb-10 reveal-block">
          <span className="font-mono text-xs text-[#B6D49B] tabular-nums">
            {content.about.sectionIndex}.
          </span>
          <h2 className="text-xs font-medium tracking-wide text-[#A4B1A2]">
            {content.about.sectionTitle}
          </h2>
        </div>

        {/* Balanced 2-Column Editorial Split over the continuous 3D spatial depth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Dedicated Photography Composition */}
          <div className="lg:col-span-5 reveal-block">
            <figure className="relative h-full min-h-[420px] lg:min-h-[520px] rounded-xl overflow-hidden bg-[#171D1E] border border-[#DDE2DC]/15 shadow-2xl">
              {!imgError ? (
                <img
                  src="/assets/williamciva.jpeg"
                  alt={content.about.photoAlt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="about-portrait-media w-full h-full lg:h-full object-cover object-top contrast-[1.03] saturate-[0.88] will-change-transform"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 text-center bg-[#171D1E]">
                  <span className="font-display text-2xl text-[#A4B1A2]">William Civa</span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090C0D]/90 via-[#090C0D]/15 to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 text-xs font-mono text-[#DDE2DC]/85">
                {content.about.photoCaption}
              </figcaption>
            </figure>
          </div>

          {/* Human & Engineering Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 reveal-block bg-[#090C0D]/75 border border-[#DDE2DC]/10 rounded-xl p-7 sm:p-10">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-[#DDE2DC] leading-[1.12]">
              {content.about.headline}
            </h3>

            <div className="space-y-5 text-base sm:text-lg text-[#DDE2DC]/80 leading-relaxed max-w-2xl">
              {content.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Split */}
        <div className="mt-12 bg-[#090C0D]/80 border border-[#DDE2DC]/10 rounded-xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-block">
          {content.about.facts.map((fact) => (
            <div key={fact.label} className="space-y-1.5">
              <p className="text-xs font-mono text-[#A4B1A2]">{fact.label}</p>
              <p className="text-sm sm:text-base font-medium text-[#DDE2DC]">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
