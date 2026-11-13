import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useMemo, useState } from 'react';
import { TopNav } from './components/layout/TopNav';
import { ProjectModal } from './components/projects/ProjectModal';
import { ResumeModal } from './components/projects/ResumeModal';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { GitHubInsightSection } from './components/sections/GitHubInsightSection';
import { HeroSection } from './components/sections/HeroSection';
import { SelectedWorksSection } from './components/sections/SelectedWorksSection';
import { PORTFOLIO_CONTENT } from './i18n/content';
import { DigitalSculpture } from './three/DigitalSculpture';
import type { Locale, Project } from './types/portfolio';

gsap.registerPlugin(ScrollTrigger);

const LOCALE_STORAGE_KEY = 'william_civa_locale';

function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname.toLowerCase();
  if (path === '/pt' || path.startsWith('/pt/')) return 'pt';
  if (path === '/en' || path.startsWith('/en/')) return 'en';

  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === 'pt' || saved === 'en') return saved;

  const browserLang = (navigator.language || 'en').toLowerCase();
  return browserLang.startsWith('pt') ? 'pt' : 'en';
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => resolveInitialLocale());
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const content = useMemo(() => PORTFOLIO_CONTENT[locale], [locale]);

  // Keep URL (/pt or /en), HTML lang, SEO meta tags, and Schema.org JSON-LD synchronized
  useEffect(() => {
    const targetPath = `/${locale}`;
    if (window.location.pathname !== targetPath) {
      window.history.replaceState(null, '', `${targetPath}${window.location.hash}`);
    }
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);

    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    document.title = content.meta.title;

    const updateMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    updateMeta('meta[name="description"]', 'content', content.meta.description);
    updateMeta('meta[property="og:title"]', 'content', content.meta.ogTitle);
    updateMeta('meta[property="og:description"]', 'content', content.meta.ogDescription);
    updateMeta('meta[name="twitter:title"]', 'content', content.meta.ogTitle);
    updateMeta('meta[name="twitter:description"]', 'content', content.meta.ogDescription);

    // Canonical link
    const origin = window.location.origin;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${origin}/${locale}`;

    // Structured Data (Schema.org Person)
    const ldId = 'william-civa-jsonld';
    let ldScript = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = ldId;
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'William Civa',
      jobTitle: 'Software Engineer & Backend Developer',
      url: `${origin}/${locale}`,
      email: 'mailto:william.civa@outlook.com',
      alumniOf: 'Bachelor of Computer Science',
      sameAs: [
        'https://github.com/williamciva',
        'https://www.linkedin.com/in/williamciva/',
        'https://www.instagram.com/williamciva/',
        'https://x.com/williamciva',
      ],
    });
  }, [locale, content]);

  // Listen to browser back/forward navigation between /pt and /en
  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/pt')) setLocale('pt');
      else if (path.startsWith('/en')) setLocale('en');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Cohesive GSAP Motion Choreography unifying Home + Identity + Sections
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Hero staggered editorial entrance
      gsap.fromTo(
        '.hero-stagger',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        }
      );

      // 2. Smoothly lift Hero foreground as Identity rises over the shared 3D stage
      gsap.to('.hero-content-parallax', {
        y: -48,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // 3. Soften 3D backdrop luminance as Identity enters so typography stays razor-sharp
      gsap.fromTo(
        '.intro-3d-veil',
        { opacity: 0.18 },
        {
          opacity: 0.78,
          ease: 'none',
          scrollTrigger: {
            trigger: '#about',
            start: 'top bottom',
            end: 'top 25%',
            scrub: 0.5,
          },
        }
      );

      // 4. Portrait subtle depth settle matching the 3D studio feel
      gsap.fromTo(
        '.about-portrait-media',
        { scale: 1.06 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#about',
            start: 'top bottom',
            end: 'center center',
            scrub: 0.7,
          },
        }
      );

      // 5. Consistent section block reveals
      const blocks = gsap.utils.toArray<HTMLElement>('.reveal-block');
      blocks.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [locale]);

  const handleToggleLocale = (next: Locale) => {
    if (next === locale) return;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    window.history.pushState(null, '', `/${next}${window.location.hash}`);
    setLocale(next);
  };

  return (
    <div className="min-h-screen bg-[#090C0D] text-[#DDE2DC] print:bg-white print:text-black">
      <div className={resumeOpen ? 'print:hidden' : undefined}>
        <TopNav content={content} locale={locale} onToggleLocale={handleToggleLocale} />

        <main>
          {/* Unified Spatial Chapter: Hero + Identity sharing one continuous 3D metallic stage */}
          <div id="intro-chapter" className="relative bg-[#090C0D]">
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
              <DigitalSculpture fallbackAlt={content.hero.sculptureFallbackAlt} />
              <div
                aria-hidden="true"
                className="intro-3d-veil absolute inset-0 bg-[#090C0D] opacity-[0.18]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#090C0D]/80 via-[#090C0D]/25 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#090C0D]"
              />
            </div>

            <div className="-mt-[100vh] relative z-10">
              <HeroSection
                content={content}
                locale={locale}
                onOpenResume={() => setResumeOpen(true)}
              />
              <AboutSection content={content} />
            </div>
          </div>

          <ExpertiseSection content={content} />
          <SelectedWorksSection content={content} onSelectProject={setActiveProject} />
          <ExperienceSection content={content} />
          <GitHubInsightSection content={content} />
        </main>

        <ContactSection content={content} locale={locale} onToggleLocale={handleToggleLocale} />
      </div>

      <ProjectModal
        project={activeProject}
        content={content}
        onClose={() => setActiveProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        locale={locale}
        content={content}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
