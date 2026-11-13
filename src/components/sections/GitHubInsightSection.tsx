import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FEATURED_GITHUB_REPOS } from '../../data/githubRepos';
import type { GitHubRepo, PortfolioContent } from '../../types/portfolio';

interface GitHubInsightSectionProps {
  content: PortfolioContent;
}

const GITHUB_USERNAME = 'williamciva';

export function GitHubInsightSection({ content }: GitHubInsightSectionProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>(FEATURED_GITHUB_REPOS);

  // Optionally enrich descriptions/dates directly from public GitHub API in browser;
  // falls back seamlessly to static catalog and preserves JavaScript override for snk-ng-bi-component.
  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    Promise.all(
      FEATURED_GITHUB_REPOS.map(async (fallbackRepo) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(fallbackRepo.name)}`,
            {
              headers: { Accept: 'application/vnd.github+json' },
              signal: controller.signal,
            }
          );
          if (!res.ok) return fallbackRepo;
          const live = (await res.json()) as Partial<GitHubRepo>;
          return {
            ...fallbackRepo,
            description: live.description ?? fallbackRepo.description,
            updated_at: live.updated_at || fallbackRepo.updated_at,
            default_branch: live.default_branch || fallbackRepo.default_branch,
            language:
              fallbackRepo.name === 'snk-ng-bi-component'
                ? 'JavaScript'
                : live.language || fallbackRepo.language,
          };
        } catch {
          return fallbackRepo;
        }
      })
    ).then((resolved) => {
      if (active) {
        setRepos(resolved);
      }
    });

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return (
    <section
      id="github"
      className="py-24 sm:py-32 border-t border-[#DDE2DC]/10 bg-[#090C0D]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
        {/* Personal Insight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 reveal-block">
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#B6D49B] tabular-nums">
                {content.githubSection.sectionIndex}.
              </span>
              <h2 className="text-xs font-medium tracking-wide text-[#A4B1A2]">
                {content.githubSection.sectionTitle}
              </h2>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#DDE2DC] leading-tight">
              {content.githubSection.insightHeadline}
            </h3>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="text-base sm:text-lg text-[#A4B1A2] leading-relaxed max-w-2xl">
              {content.githubSection.insightBody}
            </p>
          </div>
        </div>

        {/* Static + Live-Enriched GitHub Repositories Gateway (Zero Backend Proxy) */}
        <div className="space-y-8 reveal-block">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DDE2DC]/10 pb-6">
            <div className="space-y-1.5">
              <h4 className="font-display text-2xl font-semibold text-[#DDE2DC]">
                {content.githubSection.reposHeadline}
              </h4>
              <p className="text-sm text-[#A4B1A2]">{content.githubSection.reposLead}</p>
            </div>

            <a
              href="https://github.com/williamciva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B6D49B] hover:text-[#DDE2DC] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B] rounded-sm"
            >
              <span>{content.githubSection.visitProfile}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="bg-[#171D1E] border border-[#DDE2DC]/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#DDE2DC]/25 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#A4B1A2]">
                    <span>{repo.language || 'Repository'}</span>
                    <span className="tabular-nums">
                      {new Date(repo.updated_at).getFullYear()}
                    </span>
                  </div>

                  <h5 className="font-display text-xl sm:text-2xl font-semibold text-[#DDE2DC] truncate">
                    {repo.name}
                  </h5>

                  <p className="text-sm text-[#A4B1A2] leading-relaxed line-clamp-3">
                    {repo.description || `github.com/williamciva/${repo.name}`}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDE2DC]/10 flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-[#A4B1A2]/80 truncate">
                    {GITHUB_USERNAME}/{repo.name}
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${repo.name} on GitHub`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-[#090C0D] text-[#B6D49B] border border-[#B6D49B]/35 rounded-md hover:bg-[#B6D49B] hover:text-[#090C0D] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D49B]"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
