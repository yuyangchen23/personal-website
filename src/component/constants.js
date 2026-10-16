import ktv_thumbail from '../assets/ktv_thumbnail.webp'
import gameImg from '../assets/gamePic.png'
import algo from '../assets/algo.png'
import cs from '../assets/coming_soon.jpg'

export const PROJECTS = [
  {
    id: '1',
    title: 'KTV Working Drone website',
    description: 'Designed and implemented the website, with DNS, SEO set up properly and connected headless CMS for management',
    tags: ['Typescript', 'CSS', 'HTML', 'React', 'Tailwind'],
    image: ktv_thumbail,
    featured: true,
    url: "https://www.ktvworkingdrone.com.tw/"
  },
  {
    id: '2',
    title: 'Restaurant Backend system',
    description: 'A backend system supports restaurant\'s staff management, reservations, table mangement, real-time kitchen updates, and payment',
    tags: ['Typescript', 'Node.js', 'RBAC', 'Prisma', 'PostgreSQL', 'Supabase', 'Docker', 'Redis'],
    image: cs,
    featured: true,
    url: "https://github.com/yuyangchen23/restaurant_system"
  },
  {
    id: '3',
    title: 'Intelligent Systems',
    description: 'Developed and optimized Conflict-Based Search and Prioritized Planning algorithms in Python to coordinate collision-free paths for multiple agents in shared 2D environments',
    tags: ['C++', 'Algorithms'],
    image: algo,
    featured: true,
  },
  {
    id: '4',
    title: 'Personal Fincance App Project - ongoing project',
    description: 'A reliable, mobile-friendly alternative to Google Sheets for portfolio tracking, specifically targeting users from the Canada community.',
    tags: ['Next.js', 'tRPC', 'Prisma', 'Supabase'],
    image: cs,
    featured: true,
  },
  {
    id: '5',
    title: '2D Game Development',
    description: 'Designed the UI and user interface for a simple 2D game built using java with a team.',
    tags: ['Java', 'PostgreSQL', 'Tailwind'],
    image: gameImg,
    featured: true,
  }
];

export const EXPERIENCE = [
  {
    id: 'exp1',
    company: 'KTV working drone (Taiwan department)',
    position: 'Frontend Developer',
    period: 'Feb 2026 - June 2026',
    description: [
      'Developed a responsive frontend website using Next.js, React, TypeScript, and Tailwind CSS for KTV Working Drone\'s Taiwan business.',
      'Built dynamic service and news pages with reusable components, filtering, pagination, video embeds.',
      'Established Contentful Headless CMS and designed non-technical fields to enable co-workers to manage content easily.',
      'Implemented SEO foundations, including metadata, Open Graph tags, sitemap/robots support, canonical URLs, and structured JSON-LD for business, website, breadcrumbs, services, and news pages.'
    ],
    skills: ['React', 'Next.js', 'Typescript', 'SEO', 'UX Design', 'rest api', 'backend', 'headless cms'],
  },
];

export const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Express.js', 'Node.js', 'RestAPI', 'API Gateway', 'PostgreSQL', 'Python', 'Typescript', 'C++'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Postman', 'Supabase', 'Docker', 'Vite', 'Trello'],
  },
];