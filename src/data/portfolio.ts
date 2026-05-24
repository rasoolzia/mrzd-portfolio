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
   bio: "Hi, I'm Rasool — a Senior Frontend Engineer with 6+ years of experience building scalable, high-performance web applications using React (Next.js) and Vue.js. I’m passionate about clean architecture, exceptional UI/UX, performance optimization, and building maintainable products that scale.",
   goal: 'Senior Frontend Engineer · Remote / Hybrid · Open to opportunities',
};

export const skills = [
   // Frontend Frameworks
   'React.js · Hooks, React Router, Context API, Zustand, Redux, React Query',
   'Vue.js · Vue 2/3, Composition API, Vue Router, Pinia, Vue Query',
   'Next.js · SSR, SSG, ISR, CSR',

   // Styling & UI
   'CSS3 / Sass (SCSS) / Tailwind CSS / Bootstrap',
   'UI libraries & design systems · shadcn/ui, custom design systems',
   'Responsive design · mobile-first, pixel-perfect Figma implementations',

   // Performance & PWA
   'Performance · Core Web Vitals, code splitting, lazy loading',
   'PWA · Vite PWA plugin, Service Workers, offline caching',

   // Backend & Data
   'Node.js / Express.js / NestJS (fundamentals)',
   'RESTful APIs design & integration, GraphQL (fundamentals)',
   'MySQL / Prisma',

   // Tools & Practices
   'Git / GitLab workflows',
   'Clean Code, DRY, SOLID, design patterns',
   'Agile/Scrum, cross-functional collaboration',
];

export const experience: Experience[] = [
   {
      title: 'Senior Frontend Engineer',
      company: 'SibTorsh',
      date: 'Dec 2025 – May 2026',
      description:
         'Improved application stability and speed through advanced memoization and React rendering optimizations. Led a major refactor to achieve a 100% type-safe codebase with TypeScript and resolved Tailwind CSS issues. Reduced code duplication by ~30% by building a centralized component library and custom hooks.',
   },
   {
      title: 'Frontend Engineer',
      company: 'Part Software Group',
      date: 'Nov 2024 – Oct 2025',
      description:
         'Developed enterprise-level fintech applications (Farashenasa & Rasam) using Vue 3 Composition API, serving 1M+ active users. Delivered accessible, maintainable UI in a cross-functional Agile environment.',
   },
   {
      title: 'Frontend Developer',
      company: 'Vesam Programming Group',
      date: 'Apr 2023 – Sep 2024',
      description:
         'Built and maintained proprietary UI libraries and shared components, significantly increasing development efficiency across multiple projects.',
   },
   {
      title: 'Full Stack Developer',
      company: 'Gratech Co',
      date: 'Apr 2020 – Mar 2023',
      description:
         'Architected and developed management panels using Laravel, Livewire, and Vue.js. Designed RESTful APIs and optimized MySQL schemas to improve performance and scalability. Led full-stack development from requirements to deployment.',
   },
   {
      title: 'Freelance Developer',
      company: 'Self-employed',
      date: 'Jul 2019 – Nov 2020',
      description:
         'Designed and developed custom websites and Telegram bots. Built automated systems and interactive web applications tailored to specific client needs.',
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
      name: 'Playbook',
      url: 'https://github.com/rasoolzia/engineering-interview-playbook',
      description:
         'A hub for frontend interview questions, best practices, and web development tips across React, Vue, and Next.js.',
   },
   {
      name: 'React',
      url: 'https://github.com/rasoolzia/reactjs-practice',
      description:
         'React-focused patterns including Hooks, Zustand, React Hook Form, Zod, TypeScript, ACL, and file-type-based architecture.',
   },
   {
      name: 'Next.js',
      url: 'https://github.com/rasoolzia/nextjs-practice',
      description:
         'Next.js boilerplate with SSR & SSG, structured for scalability and performance.',
   },
   {
      name: 'Vue',
      url: 'https://github.com/rasoolzia/vuejs-practice',
      description:
         'Vue-focused patterns including Composition API, Pinia, Vee-Validate, Zod, TypeScript, ACL, Module-based architecture',
   },
   {
      name: 'Vue ACL Implementation',
      url: 'https://github.com/rasoolzia/vue-acl-practice',
      description:
         'Role- and permission-based ACL using Vue 3, casl/vue, and a feature-based modular structure.',
   },
   {
      name: 'NestJS API',
      url: 'https://github.com/rasoolzia/nestjs-practice',
      description:
         'NestJS project showcasing modular architecture, REST APIs, and database integration.',
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
