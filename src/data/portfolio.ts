export interface Experience {
   title: string;
   company: string;
   date: string;
   description: string;
}

export interface Project {
   name: string;
   url: string;
   description: string;
}

export interface Education {
   degree: string;
   school: string;
   year: string;
   details: string;
}

export const profile = {
   name: 'Rasool',
   fullName: 'Rasool Zia',
   bio: "Hi, I'm Rasool — a Senior Frontend Engineer with 6+ years of overall web development experience, including 3+ years focused on frontend engineering. I build and modernize web applications with React, Next.js, TypeScript, and Vue.js, focusing on frontend architecture, performance optimization, reusable component systems, and maintainable code. My experience includes production React and Vue applications, large-scale identity verification platforms, and full-stack development. I also build open-source projects and developer tools, and contribute improvements to open-source libraries.",
   goal: 'Senior Frontend Engineer · Remote opportunities & relocation · Open to Europe & North America',
};

export const brand = {
   name: 'MRZD',
   fullName: 'Mohammad Rasool Ziaaddini',
   meaning: 'Mohammad · Rasool · Ziaaddini · Developer',
   alias: {
      label: 'rasoolzia.ir',
      link: 'https://rasoolzia.ir',
   },
   letters: [
      { letter: 'M', color: '#ff4444' },
      { letter: 'R', color: '#ff8844' },
      { letter: 'Z', color: '#ffdd44' },
      { letter: 'D', color: '#44ff44' },
   ],
};

export const skills = [
   // Frontend Frameworks
   'React · Hooks, React Router, Context API',
   'Next.js · App Router, React Server Components, Server Actions, SSR, SSG, ISR, CSR',
   'Vue.js · Vue 2/3, Composition API, Vue Router',

   // State & Data Management
   'State Management · Redux, Zustand, Pinia',
   'Server State & Data Fetching · TanStack Query, Vue Query',
   'TypeScript · JavaScript · Type-safe API integration',

   // UI & Styling
   'UI & Styling · Tailwind CSS, shadcn/ui, Sass/SCSS, Bootstrap',
   'Component Libraries · Reusable components, design systems',
   'Responsive Design · Mobile-first layouts, Figma implementation',

   // Performance & Data Rendering
   'Performance Optimization · Code splitting, lazy loading, React rendering optimization',
   'Data Rendering · Pagination, list virtualization, infinite scrolling',
   'Caching · Application caching and rendering strategies',

   // Testing & Code Quality
   'Testing · Vitest, Jest, React Testing Library',
   'Code Quality · ESLint, Prettier, Husky, Conventional Commits',
   'Maintainability · Refactoring, technical-debt reduction, clean code',

   // Backend & Data
   'Backend · Node.js, Express.js, NestJS, Laravel',
   'APIs · REST API development and integration, GraphQL fundamentals',
   'Database & ORM · MySQL, Prisma',

   // Tools & Practices
   'Version Control · Git, GitHub, GitLab, Git submodules',
   'CI/CD · GitHub Actions, Vercel',
   'Teamwork · Agile/Scrum, code reviews, cross-functional collaboration',
];

export const experience: Experience[] = [
   {
      title: 'Independent Development & Open-Source Contribution',
      company: 'Independent',
      date: 'May 2026 – Present',
      description:
         'Designed and developed Developer Interview Handbook, a bilingual English/Persian open-source interview-preparation platform with a TypeScript content pipeline and a Next.js 16 frontend using React Server Components and Feature-Sliced Design. Implemented full-text search, faceted filtering, pagination, and caching, and configured GitHub Actions CI/CD for deployment to Vercel. Built Code Context, a VS Code extension for exporting, importing, exploring, and sharing project context, and AI RTL, a Chrome extension that adds right-to-left support to AI chat interfaces. While developing the interview platform, identified and addressed issues in shadcn/ui and submitted two upstream pull requests: ScrollArea max-height sizing support (#11984) and customizable dialog close labels (#11983). Both pull requests are awaiting review.',
   },
   {
      title: 'Senior Frontend Engineer',
      company: 'SibTorsh',
      date: 'Dec 2025 – May 2026',
      description:
         'Developed production features using React and TypeScript for a large educational technology platform. Refactored 6+ duplicated UI implementations into reusable, prop-driven components and decomposed multiple legacy files exceeding 800 lines into smaller, single-responsibility modules. Removed unsafe any types and resolved TypeScript errors to improve alignment between frontend types and backend API contracts. Delivered user-facing features, including a Stories component and a lightbox/gallery viewer. Participated in code reviews, mentored teammates, and reduced technical debt alongside feature development.',
   },
   {
      title: 'Frontend Engineer',
      company: 'Part Software Group',
      date: 'Nov 2024 – Oct 2025',
      description:
         'Rasam — Platform Rewrite: Collaborated in a three-person team to rewrite the platform, contributing to architectural decisions, tooling selection, and a component library based on the company design system. Farashenasa — Identity Verification Platform: Implemented OTP verification from scratch and rebuilt core components to align with the updated design system. Developed a document management interface for a national identity verification platform serving 40M+ users, initially implementing list virtualization and infinite scrolling before migrating to URL-synchronized pagination for shareable record views. Built a custom data table with row actions and context-menu operations for record approval, rejection, and ID copying. Extracted shared front-office and back-office code into a Git submodule, establishing a common source of truth across two related projects. Shared responsibilities: Developed production features across both projects using the Vue.js Composition API; wrote component and integration tests using Vitest and Jest; collaborated with React engineering teams through technical discussions and knowledge sharing.',
   },
   {
      title: 'Frontend Developer',
      company: 'Vesam Programming Group',
      date: 'Apr 2023 – Sep 2024',
      description:
         'Developed and maintained core features for an educational technology platform throughout the feature lifecycle, from implementation to bug fixes. Built a shared component library adopted across multiple products, improving UI consistency and reducing duplicated development effort.',
   },
   {
      title: 'Full Stack Developer',
      company: 'Gratech Co',
      date: 'Apr 2020 – Mar 2023',
      description:
         'Independently designed and delivered end-to-end management systems using Laravel, Livewire, Vue.js, and MySQL, covering database design, REST API development, frontend implementation, and deployment. Designed and optimized database schemas and queries to reduce data redundancy and improve query performance across internal systems.',
   },
   {
      title: 'Freelance Developer',
      company: 'Self-employed',
      date: 'Jul 2019 – Mar 2020',
      description:
         'Developed custom websites, Telegram bots, and automation tools for clients.',
   },
];

export const education: Education[] = [
   {
      degree: 'B.Sc. in Computer Engineering (IT)',
      school: 'ValiAsr University of Rafsanjan',
      year: '2017 – 2021',
      details:
         'Bachelor’s degree in Computer Engineering with a focus on information technology.',
   },
];

export const professional = [
   'Clean Code & Software Design Principles (self-directed)',
   'Frontend performance optimization & PWA best practices (self-directed)',
];

export const projects: Project[] = [
   {
      name: 'Developer Interview Handbook & Website',
      url: 'https://interview.mrzd.ir',
      description:
         'Bilingual English/Persian interview-preparation platform combining a Markdown knowledge base with a TypeScript generation pipeline (Markdown → validation → JSON) and a Next.js 16 / React Server Components frontend using Feature-Sliced Design. Features full-text search, faceted filtering, pagination, RTL support, caching, and GitHub Actions CI/CD deployment to Vercel. Content repository: https://github.com/rasoolzia/developer-interview-handbook · Frontend repository: https://github.com/rasoolzia/developer-interview-website.',
   },
   {
      name: 'Code Context',
      url: 'https://github.com/rasoolzia/code-context',
      description:
         'VS Code extension for exporting, importing, exploring, and sharing project context for AI-assisted workflows. Supports file-content export, project trees, path lists, Git diffs, before/after context, and Next.js/Nuxt route reporting.',
   },
   {
      name: 'AI RTL',
      url: 'https://github.com/rasoolzia/ai-rtl',
      description:
         'Chrome extension that adds right-to-left support to AI chat interfaces, improving readability for Persian and other RTL languages.',
   },
   {
      name: 'shadcn/ui Upstream Pull Requests',
      url: 'https://github.com/shadcn-ui/ui/pulls?q=is%3Apr+author%3Arasoolzia',
      description:
         'Two proposed fixes for issues identified while developing the interview platform: ScrollArea max-height sizing support (#11984) and customizable dialog close labels (#11983). Both pull requests are awaiting review. PR #11984: https://github.com/shadcn-ui/ui/pull/11984 · PR #11983: https://github.com/shadcn-ui/ui/pull/11983.',
   },
   {
      name: 'React Playground',
      url: 'https://github.com/rasoolzia/reactjs-practice',
      description:
         'React 19 and TypeScript application demonstrating authentication, custom access control, Zustand, TanStack Query, form validation with React Hook Form and Zod, and component testing with Vitest and React Testing Library. Live demo: https://demo.mrzd.ir/reactjs-practice.',
   },
   {
      name: 'Next.js Playground',
      url: 'https://github.com/rasoolzia/nextjs-practice',
      description:
         'E-commerce application demonstrating modern Next.js patterns, Server Actions, Prisma integration, authentication, and role-based access control. Live demo: https://nextjs-practice-two-ivory.vercel.app.',
   },
   {
      name: 'Vue Playground',
      url: 'https://github.com/rasoolzia/vuejs-practice',
      description:
         'Vue 3 application demonstrating modular architecture, Composition API, Pinia, Vue Router, form validation, TypeScript, authentication, and reusable components.',
   },
   {
      name: 'Vue ACL Implementation',
      url: 'https://github.com/rasoolzia/vue-acl-practice',
      description:
         'Role- and permission-based access control using CASL alongside a custom ACL implementation, organized with a feature-based architecture.',
   },
   {
      name: 'NestJS Invoice Reporting System',
      url: 'https://github.com/rasoolzia/nestjs-practice',
      description:
         'Backend project demonstrating modular NestJS architecture, REST APIs, invoice reporting, RabbitMQ-based asynchronous processing, scheduled jobs, JWT authentication, MongoDB/MySQL integrations, and end-to-end tests with Jest and Supertest.',
   },
];

export const contact = {
   email: 'rasool.ziaaddini@gmail.com',
   github: 'https://github.com/rasoolzia',
   linkedin: 'https://www.linkedin.com/in/rasoolzia',
   phone: '+98 913 589 2600',
   location: 'Mashhad, Iran',
   telegram: 'https://t.me/rasoolzia',
};
