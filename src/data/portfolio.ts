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
   bio: "Hi, I'm Rasool — a Senior Frontend Software Engineer with 6+ years of experience building and modernizing scalable, high-performance web applications with React, Next.js, TypeScript, and Vue.js. My work spans enterprise fintech products, large-scale identity verification platforms, and independent open-source projects. I'm passionate about clean architecture, maintainable code, exceptional UI/UX, performance optimization, reusable component systems, and turning complex requirements into reliable user experiences.",
   goal: 'Senior Frontend Software Engineer · Remote opportunities in Europe & North America · Open to relocation',
};

export const brand = {
   name: 'MRZD',
   fullName: 'Mohammad Rasool Ziaaddini',
   meaning: 'Mohammad · Rasool · Ziaaddini · Developer',
   alias: {
      label: 'rasoolzia.ir',
      link: 'https://rasoolzia.ir'
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
   'React.js · Hooks, React Router, Context API, Zustand, Redux, React Query, TanStack Query',
   'Vue.js · Vue 2/3, Composition API, Vue Router, Pinia, Vue Query',
   'Next.js · App Router, Server Components, Server Actions, SSR, SSG, ISR, CSR',
   'TypeScript · JavaScript · Type-safe API integration',

   // Styling & UI
   'CSS3 / Sass (SCSS) / Tailwind CSS / Bootstrap',
   'UI libraries & design systems · shadcn/ui, custom design systems, reusable component libraries',
   'Responsive design · mobile-first, accessible UI, pixel-perfect Figma implementations',

   // Performance & PWA
   'Performance · Core Web Vitals, code splitting, lazy loading, memoization, React rendering optimization',
   'Rendering & data · pagination, list virtualization, infinite scroll, caching strategies',
   'PWA · Vite PWA plugin, Service Workers, offline caching',

   // Testing & Quality
   'Testing · Vitest, Jest, React Testing Library, component and integration testing',
   'Code quality · ESLint, Prettier, Husky, Conventional Commits',
   'Clean Code, DRY, SOLID, design patterns, refactoring, technical-debt reduction',

   // Backend & Data
   'Node.js / Express.js / NestJS (fundamentals)',
   'RESTful API design & integration, GraphQL (fundamentals)',
   'MySQL / Prisma',

   // Tools & Practices
   'Git / GitHub / GitLab workflows · Git submodules',
   'GitHub Actions · CI/CD · Vercel',
   'Agile/Scrum · code reviews · cross-functional collaboration',
];

export const experience: Experience[] = [
   {
      title: 'Independent Development & Open-Source Contribution',
      company: 'Independent',
      date: 'May 2026 – Present',
      description:
         'Building and maintaining production-ready personal projects and contributing to open source. Developed and deployed the Developer Interview Handbook, a bilingual (English/Persian) interview-preparation platform with a TypeScript content pipeline that validates Markdown content and generates structured JSON data, paired with a Next.js 16 frontend using React Server Components and Feature-Sliced Design. Implemented full-text search, faceted filters, pagination, RTL support, and a maintainable content architecture. Set up GitHub Actions CI/CD and explored modern Next.js patterns including App Router, server-side rendering, caching, and Server Components. Also contribute improvements to open-source UI tooling, including shadcn/ui.',
   },
   {
      title: 'Senior Frontend Engineer',
      company: 'SibTorsh',
      date: 'Dec 2025 – May 2026',
      description:
         'Improved application stability and responsiveness through React rendering optimizations and advanced memoization. Refactored 6+ duplicated UI implementations into reusable, prop-driven components and custom hooks, reducing duplication and making shared behavior easier to maintain. Broke down multiple legacy files exceeding 800 lines into smaller, single-responsibility modules. Removed unsafe any types and resolved TypeScript errors by aligning frontend types with backend API contracts. Resolved Tailwind CSS issues and reduced technical debt through incremental refactoring alongside feature development. Shipped high-visibility UI features including a reusable Stories component and a lightbox/gallery viewer, and contributed to code reviews and teammate mentoring.',
   },
   {
      title: 'Frontend Engineer',
      company: 'Part Software Group',
      date: 'Nov 2024 – Oct 2025',
      description:
         'Developed enterprise fintech applications, Rasam and Farashenasa, primarily with Vue 3 Composition API. For the Rasam rewrite, collaborated in a 3-person team over a 5-month effort to rebuild the platform, contributing to architecture and tooling decisions and a reusable component library based on the company design system. For Farashenasa, worked on a national identity verification platform serving 40M+ users: implemented OTP verification in the authentication flow, rebuilt core design-system components, and developed a high-volume document interface. Implemented list virtualization and infinite scrolling, then migrated to URL-synced pagination for shareable record views. Built a custom data table with row actions and context-menu actions for approving, rejecting, and copying record IDs. Extracted shared front-office/back-office code into a Git submodule to establish a single source of truth across two related projects. Wrote component and integration tests with Vitest/Jest and collaborated with React engineering teams to strengthen cross-framework knowledge.',
   },
   {
      title: 'Frontend Developer',
      company: 'Vesam Programming Group',
      date: 'Apr 2023 – Sep 2024',
      description:
         'Built and maintained core features for an educational technology platform, contributing across the feature lifecycle from implementation through debugging and ongoing improvements. Developed and maintained shared UI libraries and reusable components adopted across multiple products, improving consistency and reducing repeated implementation work. Focused on maintainable component APIs and practical collaboration with the wider development team.',
   },
   {
      title: 'Full Stack Developer',
      company: 'Gratech Co',
      date: 'Apr 2020 – Mar 2023',
      description:
         'Independently designed and delivered end-to-end management systems using Laravel, Livewire, and Vue.js, taking ownership from requirements and data modeling through API development, frontend implementation, and deployment. Designed RESTful APIs and optimized MySQL schemas and queries to improve performance, maintainability, and data consistency across internal systems.',
   },
   {
      title: 'Freelance Developer',
      company: 'Self-employed',
      date: 'Jul 2019 – Mar 2020',
      description:
         'Designed and developed custom websites, interactive web applications, Telegram bots, and automation tools for different client needs. Worked across implementation and delivery, translating requirements into practical software solutions.',
   },
];

export const education: Education[] = [
   {
      degree: 'B.Sc. in Computer Engineering (IT)',
      school: 'ValiAsr University of Rafsanjan',
      year: '2017 – 2021',
      details:
         'Studied computer engineering with a focus on web development, software engineering, and distributed systems.',
   },
];

export const certifications = [
   'Clean Code & Software Design Principles (self-directed)',
   'Frontend performance optimization & PWA best practices (self-directed)',
];

export const projects: Project[] = [
   {
      name: 'Developer Interview Handbook & Platform',
      url: 'https://github.com/rasoolzia/developer-interview-handbook',
      description:
         'A bilingual (English/Persian) interview-preparation platform that combines a content-only Markdown knowledge base with a TypeScript generation pipeline (Markdown → validation → JSON) and a Next.js 16 / React Server Components frontend using Feature-Sliced Design. Features include full-text search, faceted filtering, pagination, RTL support, and GitHub Actions CI/CD deployment to Vercel. Live site: https://interview.mrzd.ir. Frontend repository: https://github.com/rasoolzia/developer-interview-website.',
   },
   {
      name: 'Playbook',
      url: 'https://github.com/rasoolzia/engineering-interview-playbook',
      description:
         'A collection of frontend interview questions, engineering practices, and web-development notes across React, Vue, and Next.js. Kept as a separate repository alongside the newer bilingual Developer Interview Handbook.',
   },
   {
      name: 'React Playground',
      url: 'https://github.com/rasoolzia/reactjs-practice',
      description:
         'A production-style React 19 and TypeScript admin dashboard exploring Hooks, Zustand, React Hook Form, Zod validation, authentication, custom access control (ACL), and feature-oriented architecture. Includes TanStack Query for server state and component tests with Vitest and React Testing Library.',
   },
   {
      name: 'Next.js Playground',
      url: 'https://github.com/rasoolzia/nextjs-practice',
      description:
         'A scalable Next.js practice application with SSR/SSG patterns and an e-commerce flow. Explores Server Actions, Prisma-backed database integration, authentication, and role-based access control.',
   },
   {
      name: 'Vue Playground',
      url: 'https://github.com/rasoolzia/vuejs-practice',
      description:
         'A Vue 3 application exploring Composition API, Pinia, Vue Router, Vee-Validate, Zod, TypeScript, authentication, access control, and custom reusable components. This project uses a module-based structure rather than type-based organization.',
   },
   {
      name: 'Vue ACL Implementation',
      url: 'https://github.com/rasoolzia/vue-acl-practice',
      description:
         'Role- and permission-based access control using CASL (casl/vue) alongside a custom ACL implementation built from scratch, organized with a feature-based / Feature-Sliced Design structure.',
   },
   {
      name: 'NestJS API',
      url: 'https://github.com/rasoolzia/nestjs-practice',
      description:
         'A backend practice project demonstrating modular NestJS architecture, REST APIs, invoice reporting, RabbitMQ-based asynchronous processing, scheduled jobs, JWT authentication, MongoDB/MySQL implementations, and end-to-end tests with Jest and Supertest.',
   },
];

export const contact = {
   email: 'rasool.ziaaddini@gmail.com',
   github: 'https://github.com/rasoolzia',
   linkedin: 'https://linkedin.com/in/rasoolzia',
   phone: '+98 913 589 2600',
   location: 'Tehran, Iran',
   telegram: 'https://t.me/rasoolzia',
};
