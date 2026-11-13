import { ArrowUpRight, Check, Copy, Mail, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import type { Locale, PortfolioContent } from '../../types/portfolio';

interface ContactSectionProps {
  content: PortfolioContent;
  locale: Locale;
  onToggleLocale: (next: Locale) => void;
}

export function ContactSection({ content, locale, onToggleLocale }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.contact.emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${content.contact.emailAddress}`;
    }
  };

  return (
    <footer
      id="contact"
      className="pt-24 sm:pt-32 pb-20 sm:pb-16 border-t border-[#DDE2DC]/10 bg-[#090C0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="space-y-10 pb-20 border-b border-[#DDE2DC]/10 reveal-block">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#B6D49B] tabular-nums">
              {content.contact.sectionIndex}.
            </span>
            <h2 className="text-xs font-medium tracking-wide text-[#A4B1A2]">
              {content.contact.sectionTitle}
            </h2>
          </div>

          <div className="space-y-2 max-w-4xl">
            <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#A4B1A2] leading-[1.08]">
              {content.contact.headlineTop}
            </p>
            <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#DDE2DC] leading-[1.08]">
              {content.contact.headlineBottom}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#A4B1A2] max-w-2xl leading-relaxed">
            {content.contact.lead}
          </p>

          {/* Direct Contact (Email + Phone/WhatsApp) & Social Links Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-6 bg-[#171D1E] border border-[#DDE2DC]/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-7">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-mono text-[#A4B1A2]">{content.contact.emailLabel}</p>
                  <a
                    href={`mailto:${content.contact.emailAddress}`}
                    className="font-display text-xl sm:text-2xl font-medium text-[#DDE2DC] hover:text-[#B6D49B] transition-colors break-all"
                  >
                    {content.contact.emailAddress}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${content.contact.emailAddress}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#B6D49B] text-[#090C0D] rounded-md hover:bg-[#c7e0b0] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDE2DC]"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#090C0D] text-[#DDE2DC] border border-[#DDE2DC]/15 rounded-md hover:border-[#B6D49B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#B6D49B]" aria-hidden="true" />
                        <span className="text-[#B6D49B]">{content.contact.copiedLabel}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>{content.contact.emailAction}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-[#DDE2DC]/10 space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-mono text-[#A4B1A2]">{content.contact.phoneLabel}</p>
                  <a
                    href={content.contact.phoneHref}
                    className="font-display text-xl sm:text-2xl font-medium text-[#DDE2DC] hover:text-[#B6D49B] transition-colors tabular-nums"
                  >
                    {content.contact.phoneNumber}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={content.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#B6D49B] text-[#090C0D] rounded-md hover:bg-[#c7e0b0] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDE2DC]"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{content.contact.whatsappAction}</span>
                  </a>

                  <a
                    href={content.contact.phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#090C0D] text-[#DDE2DC] border border-[#DDE2DC]/15 rounded-md hover:border-[#B6D49B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>{content.contact.phoneAction}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#171D1E] border border-[#DDE2DC]/10 rounded-xl p-6 flex items-center justify-between gap-4 hover:border-[#B6D49B]/50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                >
                  <div className="space-y-1 min-w-0">
                    <p className="font-display text-lg font-semibold text-[#DDE2DC] group-hover:text-[#B6D49B] transition-colors">
                      {social.label}
                    </p>
                    <p className="text-xs font-mono text-[#A4B1A2] truncate">{social.handle}</p>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#A4B1A2] group-hover:text-[#B6D49B] transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Minimalist Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A4B1A2]">
          <p>{content.contact.footerCopyright}</p>

          <div className="flex items-center gap-2 font-mono">
            <button
              type="button"
              onClick={() => onToggleLocale('pt')}
              className={`transition-colors ${locale === 'pt' ? 'text-[#B6D49B]' : 'hover:text-[#DDE2DC]'}`}
            >
              PT
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onToggleLocale('en')}
              className={`transition-colors ${locale === 'en' ? 'text-[#B6D49B]' : 'hover:text-[#DDE2DC]'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
