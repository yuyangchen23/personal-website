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
