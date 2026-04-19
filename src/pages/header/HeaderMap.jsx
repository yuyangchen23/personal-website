import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'

export function HeaderMap({ navLinks}) {

  return (
    <div className="hidden md:flex gap-8 items-center">
      {navLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors"
        >
          {link.name}
        </motion.a>
      ))}

      <div className="flex gap-4 pl-4 border-l border-white/10">
        <a href="https://github.com/yuyangchen23" target="_blank" className="text-white/40 hover:text-white transition-colors">
          <FaGithub aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/yu-yang-bryan-chen-a7653b297" target="_blank" className="text-white/40 hover:text-white transition-colors">
          <FaLinkedin aria-hidden="true" />
        </a>
        <a href="mailto: bryanchen0923@gmail.com" className="text-white/40 hover:text-white transition-colors">
          <FaEnvelope aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

