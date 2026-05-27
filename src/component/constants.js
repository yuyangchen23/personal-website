import gameImg from '../assets/gamePic.png'
import algo from '../assets/algo.png'
import cs from '../assets/coming_soon.jpg'

export const PROJECTS = [
  {
    id: '1',
    title: '2D Game Development',
    description: 'Designed the UI and user interface for a simple 2D game built using java with a team.',
    tags: ['Java', 'PostgreSQL', 'Tailwind'],
    image: gameImg,
    featured: true,
  },
  {
    id: '2',
    title: 'Intelligent Systems',
    description: 'Developed and optimized Conflict-Based Search and Prioritized Planning algorithms in Python to coordinate collision-free paths for multiple agents in shared 2D environments',
    tags: ['C++', 'Algorithms'],
    image: algo,
    featured: true,
  },
  {
    id: '3',
    title: 'Personal Fincance App Project - ongoing project',
    description: 'A reliable, mobile-friendly alternative to Google Sheets for portfolio tracking, specifically targeting users from the Canada community.',
    tags: ['Next.js', 'tRPC', 'Prisma', 'Supabase'],
    image: cs,
    featured: true,
  }
];

export const EXPERIENCE = [
  {
    id: 'exp1',
    company: 'KTV working drone (Taiwan department)',
    position: 'Contract worker',
    period: 'Feb 2026 - May 2026',
    description: [
      'Developed a responsive frontend website using Next.js, React, TypeScript, and Tailwind CSS for KTV Working Drone’s Taiwan business.',
      'Built dynamic service and news pages with reusable components, filtering, pagination, video embeds.',
      'Established Contentful Headless CMS and designed non-technical fields to enable co-workers to manage content easily.',
      'Implemented SEO foundations, including metadata, Open Graph tags, sitemap/robots support, canonical URLs, and structured JSON-LD for business, website, breadcrumbs, services, and news pages.'
    ],
    skills: ['React', 'Next.js', 'Javascript', 'SEO', 'UX Design', 'rest api', 'backend', 'headless cms'],
  },
  {
    id: 'exp2',
    company: 'La Foret Julibee Cafe',
    position: 'Intern',
    period: 'May 2025 - Aug 2025',
    description: [
      'Utilized modern-react tools to establish a fundamental layout for the restaurant\'s website',
      'Implemented designed system components to a specific project',
      'Optimized user interface, ensuring user-friendly UI across different devices',
    ],
    skills: ['React', 'Javascript', 'Performance', 'UX Design'],
  },
];

export const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Javascript', 'Tailwind CSS', 'Framer motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Python', 'C++'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Vite', 'Trello'],
  },
];