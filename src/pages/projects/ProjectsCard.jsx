import { motion } from "motion/react";
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass-card"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>

      <h4 className="text-2xl font-bold mb-3 group-hover:text-dark-brown transition-colors">
        {project.title}
      </h4>
      <p className="text-white/50 leading-relaxed mb-6">
        {project.description}
      </p>
      
      <div className="w-full h-[1px] bg-white/10"></div>
    </motion.div>
  );
}