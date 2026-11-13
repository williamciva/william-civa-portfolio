import type { Locale, PortfolioContent } from '../types/portfolio';

export const PORTFOLIO_CONTENT: Record<Locale, PortfolioContent> = {
  en: {
    meta: {
      title: 'William Civa — Software Engineer & Backend Architect',
      description:
        'Software engineering portfolio of William Civa. Backend systems, enterprise integrations, AI products, and Web3 architecture.',
      ogTitle: 'William Civa — Software Engineer & Digital Identity',
      ogDescription:
        'Explore backend architecture, ERP integrations, AI product engineering (TuaVaga.ai), and Web3 initiatives (Elysian) by William Civa.',
    },
    nav: {
      about: 'Identity',
      expertise: 'Expertise',
      works: 'Works',
      experience: 'Experience',
      github: 'Open Source',
      contact: 'Contact',
    },
    utility: {
      downloadSource: 'Portfolio .zip',
      downloading: 'Preparing .zip...',
      contactCta: 'Get in touch',
      languageLabel: 'Language',
    },
    hero: {
      kicker: 'Software Engineering · Backend Architecture',
      name: 'William Civa',
      role: 'Software Engineer · Backend Developer',
      statement: 'Building systems. Connecting technologies. Engineering possibilities.',
      primaryCta: 'Explore Selected Works',
      secondaryCta: 'Download Resume',
      scrollHint: 'Scroll to explore',
      sculptureFallbackAlt: 'Abstract metallic digital sculpture representing William Civa digital identity',
    },
    about: {
      sectionIndex: '01',
      sectionTitle: 'Identity',
      headline: 'Engineering software with clarity, architectural rigor, and continuous curiosity.',
      paragraphs: [
        'I hold a Bachelor’s degree in Computer Science and work as a software developer focused on software engineering, backend architecture, and complex system integration.',
        'Self-taught, communicative, and driven by continuous learning, I enjoy exploring new architectures, languages, and engineering practices that translate messy operational constraints into reliable, scalable systems.',
        'My daily work spans backend services, REST APIs, microservices, enterprise ERP connectivity, asynchronous messaging, and AI-assisted automations—alongside ongoing exploration in blockchain and Web3 ecosystems.',
      ],
      photoAlt: 'William Civa portrait in a warm architectural setting',
      photoCaption: 'William Civa · B.Sc. Computer Science',
      facts: [
        { label: 'Focus', value: 'Backend & Distributed Integrations' },
        { label: 'Education', value: 'B.Sc. in Computer Science' },
        { label: 'Primary Stack', value: 'Java, TypeScript, Node.js, Python' },
        { label: 'Languages', value: 'Portuguese (Native) · English' },
      ],
    },
    expertise: {
      sectionIndex: '02',
      sectionTitle: 'Expertise',
      headline: 'Technologies anchored in real architectural problems.',
      lead: 'Rather than isolated tool lists, every language, framework, and runtime is chosen to solve concrete reliability, throughput, and integration challenges.',
      domains: [
        {
          index: '01',
          title: 'Backend Engineering',
          focus: 'Core Services & API Security',
          description:
            'Design and implementation of maintainable RESTful services, domain-driven business logic, relational persistence, and role-aware authentication boundaries.',
          technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate / JPA', 'Node.js', 'NestJS', 'Express.js', 'TypeScript'],
        },
        {
          index: '02',
          title: 'System Integration',
          focus: 'Enterprise Connectivity & Messaging',
          description:
            'Bridging corporate ERPs, external APIs, and internal automation pipelines using asynchronous queues and resilient service-to-service contracts.',
          technologies: ['ERP Integration', 'REST APIs', 'Microservices', 'RabbitMQ', 'Asynchronous Processing', 'Event-Driven Flows'],
        },
        {
          index: '03',
          title: 'Data & Infrastructure',
          focus: 'Relational Databases, Analytics & Containers',
          description:
            'Strong background in relational databases, complex SQL queries, PL/SQL routines, data analysis, operational dashboards, and reporting—alongside caching and containerized environments.',
          technologies: ['Oracle', 'PostgreSQL', 'PL/SQL', 'Queries', 'Data Analysis', 'Dashboards', 'Reports', 'Redis', 'Docker', 'Git'],
        },
        {
          index: '04',
          title: 'Emerging Technologies',
          focus: 'Applied AI & Decentralized Systems',
          description:
            'Building practical LLM workflows, agent orchestration, and exploring how traditional enterprise stacks interface safely with Ethereum and Web3.',
          technologies: ['Python', 'LLM Integration', 'AI Automation', 'Blockchain', 'Ethereum', 'Solidity', 'Web3J'],
        },
      ],
    },
    works: {
      sectionIndex: '03',
      sectionTitle: 'Selected Works',
      headline: 'Two focused studies in architecture and product engineering.',
      lead: 'Selected initiatives grounded strictly in verified scope—combining enterprise-to-Web3 integration and AI-assisted SaaS product engineering.',
      deepDiveBtn: 'Technical Deep Dive',
      visitGithubBtn: 'GitHub',
      visitWebsiteBtn: 'Visit Website',
      downloadRepoBtn: 'Download Repository (.zip)',
      downloadingBtn: 'Generating .zip...',
      closeModalLabel: 'Close case study',
      statusLabels: {
        implemented: 'Implemented',
        in_development: 'In Development',
        planned: 'Planned',
      },
      labels: {
        context: 'Context & Proposal',
        challenge: 'Problem Space',
        solution: 'Engineering Approach',
        architecture: 'Architectural Notes',
        modules: 'System Modules',
        decisions: 'Key Technical Decisions',
        stack: 'Verified Stack',
        scopeNote: 'Transparency Note',
      },
      projects: [
        {
          slug: 'elysian',
          index: 'Case 01',
          title: 'Elysian',
          role: 'Cofounder · B.Sc. Thesis Project',
          stage: 'Active Initiative',
          category: 'Blockchain · Web3 · System Integration',
          summary:
            'Developed as the Bachelor’s graduation thesis in Computer Science and cofounded by William, Elysian investigates how enterprise ERPs and traditional corporate applications connect reliably with the Ethereum blockchain ecosystem.',
          context:
            'Originating as William’s Computer Science Bachelor’s thesis (TCC), Elysian addresses a recurring architectural gap: conventional corporate systems run on mature Java/Spring backends and relational ERPs, while decentralized applications live on separate execution models.',
          challenge:
            'Bridging legacy corporate software with decentralized Web3 networks without forcing companies to abandon existing operational workflows or compromise transactional integrity.',
          solution:
            'Designing an integration layer using Java, Spring, and Web3J to interact with Ethereum smart contracts written in Solidity—treating blockchain connectivity as a well-defined enterprise integration boundary.',
          architecture:
            'Java & Spring service layer communicating with Ethereum nodes via Web3J, paired with Solidity contract interfaces. Specific protocol internals remain intentionally modular as the initiative evolves.',
          technologies: ['Java', 'Spring', 'Solidity', 'Web3J', 'Ethereum', 'Blockchain'],
          decisions: [
            'Leveraged Java and Spring to keep enterprise ERP integration natural for existing corporate environments.',
            'Adopted Web3J as a strongly typed JVM bridge to Ethereum JSON-RPC and contract wrappers.',
            'Separated core corporate business rules from on-chain Solidity verification boundaries.',
          ],
          notes:
            'Only verified architectural scope and confirmed technologies are presented; unconfirmed smart contract specifications or metrics are intentionally omitted.',
          image: '/assets/aistudio/Digital_Identity_8d0fe21f.jpeg',
          imageAlt: 'Metallic liquid chrome wave representing Elysian bridge between corporate systems and Web3',
          links: {
            github: 'https://github.com/ElysianBR',
            website: 'https://elysian.com.br/',
          },
        },
        {
          slug: 'tuavaga-ai',
          index: 'Case 02',
          title: 'TuaVaga.ai',
          role: 'Product Engineer & Architect',
          stage: 'Product in Development',
          category: 'AI Product Engineering · SaaS',
          summary:
            'An AI-powered career and recruitment SaaS platform helping candidates evaluate job compatibility, optimize resumes for ATS, and work with structured career documents.',
          context:
            'Candidates often struggle to understand how their real experience maps to complex job descriptions and automated Applicant Tracking Systems (ATS). TuaVaga.ai structures that analysis into an intuitive product workflow.',
          challenge:
            'Orchestrating multi-format document parsing (PDF, DOCX, XLSX), reliable LLM inference, credit metering, and responsive UX inside a cohesive full-stack TypeScript architecture.',
          solution:
            'Built a modular SaaS foundation pairing a React + TypeScript + Vite frontend with a NestJS + Fastify backend, Prisma/PostgreSQL persistence, Redis caching, Mastra agent orchestration, LiteLLM Proxy routing, and MCP document-processing servers.',
          architecture:
            'Client SPA (React/Vite) -> API Gateway (NestJS on Fastify) -> Persistence (Prisma + PostgreSQL + Redis) -> AI Layer (LiteLLM Proxy + Mastra Agents + MCP Document Servers).',
          technologies: [
            'React',
            'TypeScript',
            'Vite',
            'NestJS',
            'Fastify',
            'Prisma ORM',
            'PostgreSQL',
            'Redis',
            'Mastra',
            'LiteLLM Proxy',
            'MCP Servers',
          ],
          stackGroups: [
            { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
            { layer: 'Backend', items: ['NestJS', 'Fastify', 'Prisma ORM', 'PostgreSQL', 'Redis'] },
            { layer: 'Artificial Intelligence', items: ['Mastra', 'LiteLLM Proxy', 'LLM Integration', 'MCP Servers'] },
          ],
          modules: [
            {
              name: 'Job Match',
              description:
                'Compares candidate profile and experience against job requirements, surfacing compatibility, strengths, and gaps.',
              status: 'implemented',
            },
            {
              name: 'CV Optimization',
              description:
                'Tailors and optimizes resumes for specific job openings, aligning keywords, competencies, and ATS compatibility.',
              status: 'implemented',
            },
            {
              name: 'Document Processing',
              description:
                'Parses and interprets candidate and career documents across PDF, DOCX, and XLSX formats via MCP servers.',
              status: 'implemented',
            },
            {
              name: 'Lana — AI Career Assistant',
              description:
                'Conversational AI career assistant designed to analyze jobs, profiles, and documents to generate tailored materials.',
              status: 'in_development',
            },
            {
              name: 'Credit System',
              description:
                'Usage-based credit management governing consumption across AI-powered analysis and generation features.',
              status: 'planned',
            },
          ],
          decisions: [
            'Paired NestJS with the Fastify adapter for structured dependency injection and high HTTP throughput.',
            'Centralized model routing behind LiteLLM Proxy to decouple product features from single-provider lock-in.',
            'Used MCP Servers for isolated, format-safe document parsing across PDF, DOCX, and XLSX pipelines.',
            'Modeled domain persistence with Prisma ORM over PostgreSQL and Redis for fast session/state operations.',
          ],
          notes:
            'TuaVaga.ai is actively under development and has not yet launched in production; no commercial metrics are claimed.',
          image: '/assets/aistudio/Digital_Identity_8d0fe21f.jpeg',
          imageAlt: 'Sculptural dark metallic visual representing TuaVaga.ai product engineering',
        },
      ],
    },
    experience: {
      sectionIndex: '04',
      sectionTitle: 'Experience',
      headline: 'Progressive ownership across infrastructure, integration, and software engineering.',
      lead: 'Chronological evolution at Basso & Pancotte, moving from foundational IT operations into full backend development, ERP integration, and AI-enabled process automation.',
      confidentialityNote:
        'Client identities, internal endpoints, and proprietary operational figures are intentionally omitted to respect corporate confidentiality.',
      items: [
        {
          company: 'Basso & Pancotte',
          role: 'Systems Developer',
          period: 'Mar 2026 — Present',
          current: true,
          summary:
            'Leading backend software engineering, enterprise system integrations, microservices, and applied AI process automation.',
          responsibilities: [
            'Architecting and maintaining backend services, REST APIs, and distributed integration workflows.',
            'Designing asynchronous event-driven pipelines using RabbitMQ to decouple corporate operations.',
            'Building ERP integrations and AI-driven process automations tailored to real operational bottlenecks.',
          ],
          stack: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'RabbitMQ', 'REST APIs', 'ERP Integration', 'AI Automation'],
        },
        {
          company: 'Basso & Pancotte',
          role: 'IT Analyst',
          period: 'Sep 2022 — Mar 2026',
          summary:
            'Expanded from infrastructure support into software development, API integration, database workflows, and service automation.',
          responsibilities: [
            'Developed backend integrations connecting corporate systems, relational databases, and external services.',
            'Automated repetitive operational workflows, reducing manual friction across internal processes.',
            'Collaborated closely with business stakeholders to translate operational needs into reliable software.',
          ],
          stack: ['REST APIs', 'PostgreSQL', 'Oracle', 'Docker', 'Backend Services', 'Process Automation'],
        },
        {
          company: 'Basso & Pancotte',
          role: 'IT Assistant',
          period: 'Aug 2021 — Dec 2022',
          summary:
            'Built foundational knowledge of enterprise environments, operational tooling, and corporate IT infrastructure.',
          responsibilities: [
            'Supported day-to-day enterprise systems, user environments, and internal technical operations.',
            'Identified recurring manual bottlenecks that laid the groundwork for future automation initiatives.',
          ],
          stack: ['Enterprise Systems', 'Technical Support', 'Infrastructure Basics'],
        },
      ],
    },
    githubSection: {
      sectionIndex: '05',
      sectionTitle: 'Insight & Open Source',
      insightHeadline: 'Curiosity backed by execution.',
      insightBody:
        'Outside day-to-day corporate engineering, I treat side projects and open-source repositories as an architectural sandbox—testing new runtimes, refining patterns, and sharing clean implementations on GitHub.',
      reposHeadline: 'GitHub Repositories',
      reposLead: 'Featured public repositories from github.com/williamciva.',
      visitProfile: 'View GitHub Profile',
      downloadRepo: 'Download Repo (.zip)',
      loadingRepos: 'Fetching public repositories...',
      emptyRepos: 'No public repositories returned at the moment. Visit GitHub directly to explore.',
      errorRepos: 'GitHub API is temporarily unavailable. Use the direct profile link to explore repositories.',
      sourceExportTitle: 'Download Complete Portfolio Source Code',
      sourceExportDescription:
        'Need the generated source code for this portfolio—including the React + TypeScript frontend, Three.js procedural sculpture, bilingual routes, and Express server? Download the complete workspace as a ready-to-run .zip archive.',
      sourceExportButton: 'Download Full Portfolio (.zip)',
    },
    contact: {
      sectionIndex: '06',
      sectionTitle: 'Contact',
      headlineTop: 'Have a challenge worth solving?',
      headlineBottom: 'Let’s build something meaningful.',
      lead: 'Open to software engineering opportunities, backend architecture roles, and technical collaborations worldwide.',
      emailLabel: 'Direct Email',
      emailAction: 'Copy address',
      copiedLabel: 'Copied to clipboard',
      emailAddress: 'william.civa@outlook.com',
      phoneLabel: 'Phone & WhatsApp',
      phoneNumber: '+55 54 98168-8639',
      phoneHref: 'tel:+5554981688639',
      phoneAction: 'Call',
      whatsappHref: 'https://wa.me/5554981688639',
      whatsappAction: 'WhatsApp',
      socials: [
        { label: 'LinkedIn', handle: '/in/williamciva', url: 'https://www.linkedin.com/in/williamciva/' },
        { label: 'GitHub', handle: '@williamciva', url: 'https://github.com/williamciva' },
        { label: 'Instagram', handle: '@williamciva', url: 'https://www.instagram.com/williamciva/' },
        { label: 'X', handle: '@williamciva', url: 'https://x.com/williamciva' },
      ],
      footerCopyright: '© 2026 William Civa',
    },
  },
  pt: {
    meta: {
      title: 'William Civa — Engenheiro de Software & Arquiteto Back-end',
      description:
        'Portfólio de William Civa, Engenheiro de Software focado em arquitetura back-end, integrações corporativas, produtos de IA e Web3.',
      ogTitle: 'William Civa — Engenheiro de Software & Identidade Digital',
      ogDescription:
        'Conheça estudos de caso em arquitetura back-end, integrações com ERP, engenharia de produto com IA (TuaVaga.ai) e Web3 (Elysian).',
    },
    nav: {
      about: 'Identidade',
      expertise: 'Competências',
      works: 'Projetos',
      experience: 'Trajetória',
      github: 'Open Source',
      contact: 'Contato',
    },
    utility: {
      downloadSource: 'Código .zip',
      downloading: 'Gerando .zip...',
      contactCta: 'Falar comigo',
      languageLabel: 'Idioma',
    },
    hero: {
      kicker: 'Engenharia de Software · Arquitetura Back-end',
      name: 'William Civa',
      role: 'Software Engineer · Backend Developer',
      statement: 'Construindo sistemas. Conectando tecnologias. Projetando possibilidades.',
      primaryCta: 'Explorar Projetos',
      secondaryCta: 'Baixar Currículo',
      scrollHint: 'Role para explorar',
      sculptureFallbackAlt: 'Escultura digital metálica abstrata representando a identidade digital de William Civa',
    },
    about: {
      sectionIndex: '01',
      sectionTitle: 'Identidade',
      headline: 'Engenharia de software guiada por clareza, rigor arquitetural e aprendizado contínuo.',
      paragraphs: [
        'Sou bacharel em Ciência da Computação e atuo como desenvolvedor com foco em engenharia de software, desenvolvimento back-end e integração de sistemas complexos.',
        'Autodidata, comunicativo e motivado pelo aprendizado contínuo, busco explorar arquiteturas, linguagens e ferramentas que transformam desafios operacionais reais em soluções eficientes e escaláveis.',
        'Minha atuação envolve serviços back-end, APIs REST, microsserviços, integração com sistemas corporativos e ERPs, processamento assíncrono e automações com inteligência artificial—além da exploração prática de blockchain e Web3.',
      ],
      photoAlt: 'Retrato profissional de William Civa em ambiente arquitetural',
      photoCaption: 'William Civa · Bacharel em Ciência da Computação',
      facts: [
        { label: 'Atuação', value: 'Back-end & Integrações Distribuídas' },
        { label: 'Formação', value: 'Ciência da Computação' },
        { label: 'Stack Principal', value: 'Java, TypeScript, Node.js, Python' },
        { label: 'Idiomas', value: 'Português (Nativo) · Inglês' },
      ],
    },
    expertise: {
      sectionIndex: '02',
      sectionTitle: 'Competências',
      headline: 'Tecnologias conectadas a problemas reais de engenharia.',
      lead: 'Em vez de listas genéricas de ferramentas ou barras de porcentagem, cada tecnologia reflete decisões concretas de confiabilidade, escalabilidade e integração.',
      domains: [
        {
          index: '01',
          title: 'Backend Engineering',
          focus: 'Serviços & Segurança de Aplicações',
          description:
            'Desenvolvimento de APIs REST sustentáveis, regras de negócio estruturadas, persistência relacional e camadas de autenticação e autorização seguras.',
          technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate / JPA', 'Node.js', 'NestJS', 'Express.js', 'TypeScript'],
        },
        {
          index: '02',
          title: 'System Integration',
          focus: 'Sistemas Corporativos & Mensageria',
          description:
            'Conexão entre ERPs corporativos, APIs externas e fluxos internos de automação por meio de filas assíncronas e contratos resilientes entre serviços.',
          technologies: ['Integração com ERPs', 'APIs REST', 'Microsserviços', 'RabbitMQ', 'Processamento Assíncrono', 'Fluxos Orientados a Eventos'],
        },
        {
          index: '03',
          title: 'Data & Infrastructure',
          focus: 'Bancos Relacionais, Análise de Dados & Infra',
          description:
            'Forte domínio em bancos de dados relacionais, queries SQL complexas, rotinas PL/SQL, análise de dados, dashboards operacionais e relatórios—além de cache e ambientes em containers.',
          technologies: ['Oracle', 'PostgreSQL', 'PL/SQL', 'Queries', 'Análise de Dados', 'Dashboards', 'Relatórios', 'Redis', 'Docker', 'Git'],
        },
        {
          index: '04',
          title: 'Emerging Technologies',
          focus: 'IA Aplicada & Sistemas Descentralizados',
          description:
            'Construção de fluxos práticos com LLMs, orquestração de agentes e investigação de integrações seguras entre sistemas tradicionais e Ethereum.',
          technologies: ['Python', 'Integração com LLMs', 'Automação com IA', 'Blockchain', 'Ethereum', 'Solidity', 'Web3J'],
        },
      ],
    },
    works: {
      sectionIndex: '03',
      sectionTitle: 'Projetos Selecionados',
      headline: 'Dois estudos de caso em arquitetura de integração e engenharia de produto.',
      lead: 'Iniciativas apresentadas estritamente dentro do escopo verificado—unindo integração corporativa com Web3 e produto SaaS baseado em IA.',
      deepDiveBtn: 'Aprofundamento Técnico',
      visitGithubBtn: 'GitHub',
      visitWebsiteBtn: 'Acessar Site',
      downloadRepoBtn: 'Baixar Repositório (.zip)',
      downloadingBtn: 'Gerando .zip...',
      closeModalLabel: 'Fechar estudo de caso',
      statusLabels: {
        implemented: 'Implementado',
        in_development: 'Em Desenvolvimento',
        planned: 'Planejado',
      },
      labels: {
        context: 'Contexto e Proposta',
        challenge: 'Problema Central',
        solution: 'Abordagem de Engenharia',
        architecture: 'Notas de Arquitetura',
        modules: 'Módulos do Sistema',
        decisions: 'Decisões Técnicas',
        stack: 'Stack Verificada',
        scopeNote: 'Nota de Transparência',
      },
      projects: [
        {
          slug: 'elysian',
          index: 'Case 01',
          title: 'Elysian',
          role: 'Cofundador · TCC em Ciência da Computação',
          stage: 'Iniciativa Ativa',
          category: 'Blockchain · Web3 · System Integration',
          summary:
            'Desenvolvido como projeto de conclusão de curso (TCC) do bacharelado em Ciência da Computação e cofundado por William, o Elysian foca na integração entre ERPs, sistemas corporativos tradicionais e o ecossistema blockchain Ethereum.',
          context:
            'Nascido como o trabalho de conclusão de curso de William no bacharelado em Ciência da Computação, o Elysian responde a uma lacuna arquitetural concreta: aplicações corporativas operam sobre backends Java/Spring e ERPs relacionais consolidados, enquanto o universo Web3 segue modelos de execução descentralizados distintos.',
          challenge:
            'Aproximar sistemas convencionais do ecossistema descentralizado sem exigir que empresas abandonem seus fluxos operacionais existentes ou comprometam a previsibilidade das integrações.',
          solution:
            'Estruturação de uma ponte de integração com Java, Spring e Web3J para comunicação com contratos inteligentes em Solidity na rede Ethereum—tratando a camada blockchain como uma fronteira de integração corporativa bem definida.',
          architecture:
            'Camada de serviços em Java e Spring integrada a nós Ethereum via Web3J, conectada a contratos Solidity. Detalhes internos permanecem modulares conforme o amadurecimento da iniciativa.',
          technologies: ['Java', 'Spring', 'Solidity', 'Web3J', 'Ethereum', 'Blockchain'],
          decisions: [
            'Uso de Java e Spring para manter aderência natural a ambientes corporativos e ERPs.',
            'Adoção do Web3J como ponte fortemente tipada no ecossistema JVM para comunicação Ethereum.',
            'Separação clara entre regras de negócio tradicionais e validações on-chain em Solidity.',
          ],
          notes:
            'Apenas o contexto conhecido e a stack confirmada são apresentados, sem invenção de contratos, transações ou métricas não confirmadas.',
          image: '/assets/aistudio/Digital_Identity_8d0fe21f.jpeg',
          imageAlt: 'Forma metálica fluida representando a ponte da Elysian entre ERPs e Web3',
          links: {
            github: 'https://github.com/ElysianBR',
            website: 'https://elysian.com.br/',
          },
        },
        {
          slug: 'tuavaga-ai',
          index: 'Case 02',
          title: 'TuaVaga.ai',
          role: 'Product Engineer & Arquiteto',
          stage: 'Produto em Desenvolvimento',
          category: 'AI Product Engineering · SaaS',
          summary:
            'Plataforma SaaS de carreira e recrutamento que utiliza inteligência artificial para avaliar compatibilidade com vagas, otimizar currículos para ATS e processar documentos.',
          context:
            'Candidatos frequentemente têm dificuldade para entender como sua experiência real se alinha às exigências das vagas e aos filtros de sistemas ATS. O TuaVaga.ai organiza essa análise em um fluxo SaaS objetivo.',
          challenge:
            'Orquestrar interpretação de múltiplos formatos de documento (PDF, DOCX, XLSX), chamadas confiáveis a LLMs, controle de consumo por créditos e experiência fluida de ponta a ponta.',
          solution:
            'Arquitetura modular combinando frontend em React + TypeScript + Vite com backend em NestJS + Fastify, persistência Prisma/PostgreSQL, cache Redis, agentes com Mastra, roteamento via LiteLLM Proxy e MCP Servers para documentos.',
          architecture:
            'SPA (React/Vite) -> API Gateway (NestJS com Fastify) -> Dados (Prisma + PostgreSQL + Redis) -> Camada de IA (LiteLLM Proxy + Agentes Mastra + MCP Servers).',
          technologies: [
            'React',
            'TypeScript',
            'Vite',
            'NestJS',
            'Fastify',
            'Prisma ORM',
            'PostgreSQL',
            'Redis',
            'Mastra',
            'LiteLLM Proxy',
            'MCP Servers',
          ],
          stackGroups: [
            { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
            { layer: 'Backend', items: ['NestJS', 'Fastify', 'Prisma ORM', 'PostgreSQL', 'Redis'] },
            { layer: 'Inteligência Artificial', items: ['Mastra', 'LiteLLM Proxy', 'Integração com LLMs', 'MCP Servers'] },
          ],
          modules: [
            {
              name: 'Job Match',
              description:
                'Compara perfil e experiência do candidato com os requisitos da vaga, destacando compatibilidade, pontos fortes e lacunas.',
              status: 'implemented',
            },
            {
              name: 'CV Optimization',
              description:
                'Otimiza e personaliza currículos para cada vaga, considerando palavras-chave, competências e compatibilidade com sistemas ATS.',
              status: 'implemented',
            },
            {
              name: 'Document Processing',
              description:
                'Processamento e interpretação estruturada de documentos nos formatos PDF, DOCX e XLSX via MCP Servers.',
              status: 'implemented',
            },
            {
              name: 'Lana — AI Career Assistant',
              description:
                'Assistente de carreira baseada em IA projetada para analisar vagas, perfis e documentos na geração de materiais personalizados.',
              status: 'in_development',
            },
            {
              name: 'Credit System',
              description:
                'Sistema de créditos para controle e gerenciamento de consumo das funcionalidades de inteligência artificial.',
              status: 'planned',
            },
          ],
          decisions: [
            'Uso de NestJS sobre Fastify para unir injeção de dependência estruturada e alta performance HTTP.',
            'Centralização dos modelos atrás do LiteLLM Proxy, evitando acoplamento a um único provedor de LLM.',
            'Isolamento do parsing de documentos PDF, DOCX e XLSX através de MCP Servers dedicados.',
            'Modelagem com Prisma ORM sobre PostgreSQL e uso de Redis para operações rápidas de estado.',
          ],
          notes:
            'O TuaVaga.ai é um produto em desenvolvimento ativo, sem alegação de operação em produção ou métricas comerciais fictícias.',
          image: '/assets/aistudio/Digital_Identity_8d0fe21f.jpeg',
          imageAlt: 'Composição metálica escura representando a engenharia de produto do TuaVaga.ai',
        },
      ],
    },
    experience: {
      sectionIndex: '04',
      sectionTitle: 'Trajetória',
      headline: 'Evolução contínua entre infraestrutura, integrações e desenvolvimento back-end.',
      lead: 'Progressão cronológica na Basso & Pancotte, da base em operações de TI à atuação em engenharia de sistemas, APIs REST, mensageria e automação com IA.',
      confidentialityNote:
        'Nomes de clientes, endpoints internos e dados operacionais confidenciais são preservados sob sigilo empresarial.',
      items: [
        {
          company: 'Basso & Pancotte',
          role: 'Desenvolvedor de Sistemas',
          period: 'mar/2026 — presente',
          current: true,
          summary:
            'Atuação focada em desenvolvimento back-end, integração de sistemas corporativos, microsserviços e automação de processos com inteligência artificial.',
          responsibilities: [
            'Arquitetura e evolução de serviços back-end, APIs REST e fluxos distribuídos de integração.',
            'Construção de pipelines assíncronos com mensageria RabbitMQ para desacoplamento entre sistemas.',
            'Integração com ERP e criação de automações inteligentes aplicadas a gargalos operacionais reais.',
          ],
          stack: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'RabbitMQ', 'APIs REST', 'Integração ERP', 'Automação com IA'],
        },
        {
          company: 'Basso & Pancotte',
          role: 'Analista de TI',
          period: 'set/2022 — mar/2026',
          summary:
            'Transição do suporte de infraestrutura para o desenvolvimento de software, integrações de APIs, bancos de dados e automação de fluxos.',
          responsibilities: [
            'Desenvolvimento de integrações entre sistemas internos, bancos relacionais e serviços externos.',
            'Automação de rotinas operacionais repetitivas com ganho de confiabilidade nos processos.',
            'Atuação próxima às áreas de negócio para traduzir demandas reais em soluções técnicas.',
          ],
          stack: ['APIs REST', 'PostgreSQL', 'Oracle', 'Docker', 'Serviços Back-end', 'Automação'],
        },
        {
          company: 'Basso & Pancotte',
          role: 'Assistente de TI',
          period: 'ago/2021 — dez/2022',
          summary:
            'Construção da base prática em ambientes corporativos, infraestrutura e sustentação operacional de sistemas.',
          responsibilities: [
            'Suporte técnico a ambientes corporativos, usuários e sistemas internos.',
            'Mapeamento de gargalos manuais que originaram projetos posteriores de automação e integração.',
          ],
          stack: ['Sistemas Corporativos', 'Suporte Técnico', 'Infraestrutura'],
        },
      ],
    },
    githubSection: {
      sectionIndex: '05',
      sectionTitle: 'Visão & Open Source',
      insightHeadline: 'Curiosidade validada em código.',
      insightBody:
        'Além da engenharia corporativa diária, utilizo projetos autorais e repositórios públicos como laboratório de arquitetura—testando novas stacks, refinando padrões e compartilhando implementações no GitHub.',
      reposHeadline: 'Repositórios no GitHub',
      reposLead: 'Repositórios públicos selecionados em github.com/williamciva.',
      visitProfile: 'Visitar Perfil no GitHub',
      downloadRepo: 'Baixar Repo (.zip)',
      loadingRepos: 'Carregando repositórios públicos...',
      emptyRepos: 'Nenhum repositório público retornado no momento. Acesse diretamente o perfil no GitHub.',
      errorRepos: 'Não foi possível consultar a API do GitHub agora. Utilize o link direto para o perfil.',
      sourceExportTitle: 'Baixar Código Completo deste Portfólio',
      sourceExportDescription:
        'Quer baixar todos os códigos gerados deste portfólio—incluindo o frontend React + TypeScript, a escultura 3D em Three.js, rotas bilíngues e servidor Express? Faça o download completo em .zip.',
      sourceExportButton: 'Baixar Portfólio Completo (.zip)',
    },
    contact: {
      sectionIndex: '06',
      sectionTitle: 'Contato',
      headlineTop: 'Tem um desafio que vale a pena resolver?',
      headlineBottom: 'Vamos construir algo significativo.',
      lead: 'Aberto a oportunidades em engenharia de software, desenvolvimento back-end e colaborações técnicas no Brasil e no exterior.',
      emailLabel: 'E-mail Direto',
      emailAction: 'Copiar endereço',
      copiedLabel: 'Copiado para a área de transferência',
      emailAddress: 'william.civa@outlook.com',
      phoneLabel: 'Telefone & WhatsApp',
      phoneNumber: '+55 54 98168-8639',
      phoneHref: 'tel:+5554981688639',
      phoneAction: 'Ligar',
      whatsappHref: 'https://wa.me/5554981688639',
      whatsappAction: 'WhatsApp',
      socials: [
        { label: 'LinkedIn', handle: '/in/williamciva', url: 'https://www.linkedin.com/in/williamciva/' },
        { label: 'GitHub', handle: '@williamciva', url: 'https://github.com/williamciva' },
        { label: 'Instagram', handle: '@williamciva', url: 'https://www.instagram.com/williamciva/' },
        { label: 'X', handle: '@williamciva', url: 'https://x.com/williamciva' },
      ],
      footerCopyright: '© 2026 William Civa',
    },
  },
};
