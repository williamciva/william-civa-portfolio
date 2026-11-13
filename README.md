# William Civa — Portfólio de Engenharia de Software

Portfólio pessoal bilíngue (**PT / EN**) de **William Civa**, Engenheiro de Software e Desenvolvedor Back-end. Construído como uma **SPA 100% estática** em React, TypeScript e Vite, combinando cena 3D procedural em Three.js, coreografia de rolagem com GSAP e estudos de caso focados em arquitetura back-end, integrações corporativas, bancos relacionais, IA aplicada e Web3.

---

## Stack & Tecnologias

- **Core:** React 19, TypeScript, Vite 8
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **3D & Animações:** Three.js (escultura metálica procedural com iluminação de estúdio e fallback automático para WebGL/software ou `prefers-reduced-motion`), GSAP + ScrollTrigger
- **Ícones & Tipografia:** Lucide React · `Syne` (Display) · `Manrope` (Corpo) · `IBM Plex Mono` (Metadados e stack)
- **SEO & Deploy Estático:** Meta tags dinâmicas por idioma (`title`, OpenGraph, Twitter Cards, canonical), dados estruturados JSON-LD (`Schema.org Person`), `robots.txt`, `sitemap.xml` e `vercel.json`

---

## Principais Funcionalidades

- **Internacionalização (`PT` / `EN`):** rotas `/pt` e `/en`, detecção inicial pelo navegador, persistência via `localStorage` e alternância instantânea no topo e no rodapé.
- **Capítulo Espacial Unificado:** a seção inicial (*Hero*) e a seção de *Identidade* compartilham um palco Three.js contínuo (`sticky`) com transição de profundidade e foco controlada pelo scroll.
- **Competências Técnicas:** organização por domínios reais de engenharia (*Backend Engineering*, *System Integration*, *Data & Infrastructure* com Oracle, PostgreSQL, PL/SQL, Queries, Análise de Dados, Dashboards e Relatórios, e *Emerging Technologies*).
- **Projetos Selecionados & Deep Dive:**
  - **Elysian:** projeto de conclusão de curso (TCC) do bacharelado em Ciência da Computação focado em integração entre ERPs corporativos e Ethereum, com links para a organização no GitHub e site oficial.
  - **TuaVaga.ai:** plataforma SaaS de carreira com IA em desenvolvimento, detalhando arquitetura e status dos módulos no modal técnico.
- **Open Source (100% Estático):** exibição dos repositórios em destaque (`snk-ng-bi-component`, `snk-react-bi-component`, `snk_bypass_exploit` e `asteroid_python`) com enriquecimento opcional direto no navegador pela API pública do GitHub.
- **Currículo Flexível:** suporte a link direto/arquivo PDF em `src/config/resume.ts` com fallback nativo para visualização imprimível e exportação em PDF (`window.print()`) via `ResumeModal`.
- **Contato Direto:** cópia rápida de e-mail, links para ligação, WhatsApp e redes sociais.

---

## Estrutura do Projeto

```text
.
├── public/
│   ├── assets/                 # Imagens estáticas do portfólio
│   ├── favicon.svg             # Ícone vetorial (WC orbital + onda)
│   ├── robots.txt              # Regras para indexação
│   └── sitemap.xml             # Mapa de rotas (/pt e /en)
├── src/
│   ├── components/
│   │   ├── layout/             # TopNav (navegação fixa + barra de progresso)
│   │   ├── projects/           # ProjectModal e ResumeModal (imprimível em PDF)
│   │   └── sections/           # Hero, About, Expertise, SelectedWorks, Experience, GitHubInsight, Contact
│   ├── config/
│   │   └── resume.ts           # Links centralizados de currículo (PT / EN)
│   ├── data/
│   │   └── githubRepos.ts      # Catálogo estático dos repositórios em destaque
│   ├── i18n/
│   │   └── content.ts          # Conteúdo completo bilíngue (PT / EN)
│   ├── three/
│   │   └── DigitalSculpture.tsx # Cena 3D procedural em Three.js
│   ├── types/
│   │   └── portfolio.ts        # Tipagens TypeScript do portfólio
│   ├── App.tsx                 # Orquestração de rotas, SEO dinâmico e GSAP
│   ├── index.css               # Configuração Tailwind v4, tokens e estilos de impressão
│   └── main.tsx                # Ponto de entrada React
├── index.html                  # Documento HTML raiz e fontes
├── package.json                # Scripts e dependências do projeto
├── vercel.json                 # Rewrite SPA para suporte às rotas /pt e /en
└── vite.config.ts              # Configuração do Vite
```

---

## Como Rodar Localmente

### Pré-requisitos

- **Node.js** `20+` (recomendado LTS)
- **npm** `10+`

### Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento (http://localhost:3000)
npm run dev
```

### Outros Comandos

```bash
# Verificação de tipos TypeScript
npm run lint

# Gerar build estático de produção na pasta dist/
npm run build

# Visualizar localmente o build de produção gerado em dist/
npm run preview

# Limpar a pasta dist/
npm run clean
```

---

## Configurar o Link do Currículo

Por padrão, em `src/config/resume.ts`, os links `pt` e `en` estão vazios (`''`), o que faz o botão **Baixar Currículo / Download Resume** abrir o resumo estruturado com opção de **Imprimir / Salvar PDF**.

Para apontar para arquivos PDF próprios:

1. Coloque seus PDFs dentro da pasta `public/` (por exemplo: `public/curriculo-pt.pdf` e `public/resume-en.pdf`) ou utilize URLs externas diretas.
2. Atualize `src/config/resume.ts`:

```ts
export const RESUME_LINKS: Record<Locale, string> = {
  pt: '/curriculo-pt.pdf',
  en: '/resume-en.pdf',
};
```

---

## Deploy Estático

Como não há dependência de servidor back-end ou banco de dados, o resultado de `npm run build` (`dist/`) pode ser hospedado em qualquer serviço de arquivos estáticos:

- **Vercel:** pronta para uso com o `vercel.json` incluído no repositório (direciona `/pt` e `/en` para `/index.html`). Basta conectar o repositório — comando de build `npm run build` e diretório `dist`.
- **Cloudflare Pages / Netlify:** configure o comando de build `npm run build` e output `dist`.
- **GitHub Pages:** publique o conteúdo de `dist/` (com fallback de `404.html` para `index.html` caso utilize acesso direto em `/pt` ou `/en`).

---

## Contato

- **E-mail:** [william.civa@outlook.com](mailto:william.civa@outlook.com)
- **Telefone / WhatsApp:** [+55 54 98168-8639](https://wa.me/5554981688639)
- **LinkedIn:** [linkedin.com/in/williamciva](https://www.linkedin.com/in/williamciva/)
- **GitHub:** [github.com/williamciva](https://github.com/williamciva)
