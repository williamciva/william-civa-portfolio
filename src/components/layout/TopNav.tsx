import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Locale, PortfolioContent } from '../../types/portfolio';

interface TopNavProps {
  content: PortfolioContent;
  locale: Locale;
  onToggleLocale: (next: Locale) => void;
}

export function TopNav({ content, locale, onToggleLocale }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: content.nav.about },
    { href: '#expertise', label: content.nav.expertise },
    { href: '#works', label: content.nav.works },
    { href: '#experience', label: content.nav.experience },
    { href: '#github', label: content.nav.github },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#090C0D]/92 border-b border-[#DDE2DC]/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Left: Primary Navigation Links (no fixed brand lockup or monogram) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#A4B1A2]"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#DDE2DC] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Trigger on Left */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#DDE2DC] hover:text-[#B6D49B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B] rounded-md"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right: Language Switcher + Primary Contact Action */}
        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <div
            role="group"
            aria-label={content.utility.languageLabel}
            className="flex items-center gap-1 text-xs font-mono"
          >
            <button
              type="button"
              onClick={() => onToggleLocale('pt')}
              aria-pressed={locale === 'pt'}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B] ${
                locale === 'pt'
                  ? 'text-[#B6D49B] font-medium'
                  : 'text-[#A4B1A2] hover:text-[#DDE2DC]'
              }`}
            >
              PT
            </button>
            <span className="text-[#DDE2DC]/20" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => onToggleLocale('en')}
              aria-pressed={locale === 'en'}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B] ${
                locale === 'en'
                  ? 'text-[#B6D49B] font-medium'
                  : 'text-[#A4B1A2] hover:text-[#DDE2DC]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-[#DDE2DC] border border-[#DDE2DC]/20 rounded-md hover:border-[#B6D49B] hover:text-[#B6D49B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
          >
            {content.nav.contact}
          </a>
        </div>
      </div>

      {/* Scroll Progress Hairline */}
      <div className="h-[2px] w-full bg-[#171D1E]/60" aria-hidden="true">
        <div
          className="h-full bg-[#B6D49B] transition-transform duration-100 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#090C0D] border-b border-[#DDE2DC]/10 px-6 py-6 space-y-5">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#DDE2DC] hover:text-[#B6D49B] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium bg-[#B6D49B] text-[#090C0D] rounded-md w-full"
            >
              {content.nav.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
