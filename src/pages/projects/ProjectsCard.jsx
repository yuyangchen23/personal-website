import { motion } from "motion/react";
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { LinkIcon, ExternalLinkIcon } from "lucide-react";
import linkIcon from "../../assets/link.svg";

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
        <div className="absolute inset-0 bg-bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center gap-4">
          {project.url && (
            <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/50 backdrop-blur-md border border-white/30 shadow-lg transition-colors px-5 py-3 hover:bg-white/15">
            <img 
              src={linkIcon} 
              alt="{`Visit ${}`}" 
              className="h-6 w-6 object-contain"/>
          </a>
          )}
        </div>
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