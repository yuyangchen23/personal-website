import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'

export function HeaderMapMobile({ setIsOpen, navLinks }) {
  return (
    <div className="flex flex-col gap-6">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-2xl font-medium"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}