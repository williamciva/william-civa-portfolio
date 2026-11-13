export type Locale = 'pt' | 'en';

export type ModuleStatus = 'implemented' | 'in_development' | 'planned';

export interface ProjectModule {
  name: string;
  description: string;
  status: ModuleStatus;
}

export interface ProjectStackGroup {
  layer: string;
  items: string[];
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  role: string;
  stage: string;
  category: string;
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  architecture?: string;
  technologies: string[];
  stackGroups?: ProjectStackGroup[];
  modules?: ProjectModule[];
  decisions: string[];
  notes?: string;
  image: string;
  imageAlt: string;
  downloadSlug?: string;
  links?: {
    github?: string;
    website?: string;
  };
}

export interface ExpertiseDomain {
  index: string;
  title: string;
  focus: string;
  description: string;
  technologies: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  default_branch: string;
  topics?: string[];
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    about: string;
    expertise: string;
    works: string;
    experience: string;
    github: string;
    contact: string;
  };
  utility: {
    downloadSource: string;
    downloading: string;
    contactCta: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    name: string;
    role: string;
    statement: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
    sculptureFallbackAlt: string;
  };
  about: {
    sectionIndex: string;
    sectionTitle: string;
    headline: string;
    paragraphs: string[];
    photoAlt: string;
    photoCaption: string;
    facts: { label: string; value: string }[];
  };
  expertise: {
    sectionIndex: string;
    sectionTitle: string;
    headline: string;
    lead: string;
    domains: ExpertiseDomain[];
  };
  works: {
    sectionIndex: string;
    sectionTitle: string;
    headline: string;
    lead: string;
    deepDiveBtn: string;
    visitGithubBtn: string;
    visitWebsiteBtn: string;
    downloadRepoBtn: string;
    downloadingBtn: string;
    closeModalLabel: string;
    statusLabels: Record<ModuleStatus, string>;
    labels: {
      context: string;
      challenge: string;
      solution: string;
      architecture: string;
      modules: string;
      decisions: string;
      stack: string;
      scopeNote: string;
    };
    projects: Project[];
  };
  experience: {
    sectionIndex: string;
    sectionTitle: string;
    headline: string;
    lead: string;
    confidentialityNote: string;
    items: ExperienceItem[];
  };
  githubSection: {
    sectionIndex: string;
    sectionTitle: string;
    insightHeadline: string;
    insightBody: string;
    reposHeadline: string;
    reposLead: string;
    visitProfile: string;
    downloadRepo: string;
    loadingRepos: string;
    emptyRepos: string;
    errorRepos: string;
    sourceExportTitle: string;
    sourceExportDescription: string;
    sourceExportButton: string;
  };
  contact: {
    sectionIndex: string;
    sectionTitle: string;
    headlineTop: string;
    headlineBottom: string;
    lead: string;
    emailLabel: string;
    emailAction: string;
    copiedLabel: string;
    emailAddress: string;
    phoneLabel: string;
    phoneNumber: string;
    phoneHref: string;
    phoneAction: string;
    whatsappHref: string;
    whatsappAction: string;
    socials: { label: string; handle: string; url: string }[];
    footerCopyright: string;
  };
}
