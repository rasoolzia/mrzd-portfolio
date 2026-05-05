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
   name: 'Alex Rivera',
   bio: 'Backend engineer focused on building scalable systems and reliable APIs.',
   goal: 'Senior Backend Engineer · Remote · Open to work',
};

export const skills = [
   'PHP / Laravel / Symfony',
   'TypeScript / Node.js',
   'MySQL / PostgreSQL / Redis',
   'Docker / Kubernetes',
   'REST APIs / GraphQL',
   'AWS / CI/CD pipelines',
];

export const experience: Experience[] = [
   {
      title: 'Senior Backend Engineer',
      company: 'TechCorp',
      date: '2022–Present',
      description:
         'Led migration of a legacy monolith to microservices serving 500k+ users.',
   },
   {
      title: 'Backend Developer',
      company: 'StartupHub',
      date: '2019–2022',
      description:
         'Designed REST APIs and database architecture for SaaS platform.',
   },
];

export const education: Education[] = [
   {
      degree: 'B.Sc Computer Science',
      school: 'University of Technology',
      year: '2017',
      details: 'Focus on distributed systems and backend architecture',
   },
];

export const certifications = ['AWS Solutions Architect', 'Docker Mastery'];

export const projects: Project[] = [
   {
      name: 'laravel-payment-gateway',
      url: 'https://github.com/alexrivera/laravel-payment-gateway',
      description: 'Stripe integration package for Laravel',
   },
   {
      name: 'node-api-rate-limiter',
      url: 'https://github.com/alexrivera/node-api-rate-limiter',
      description: 'Redis based API rate limiter middleware',
   },
];

export const contact = {
   email: 'alex.rivera@example.com',
   github: 'https://github.com/alexrivera',
   linkedin: 'https://linkedin.com/in/alexrivera',
   phone: '+1 555 123 4567',
};
