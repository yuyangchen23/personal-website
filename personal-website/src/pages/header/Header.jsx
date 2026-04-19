import { NavLink } from 'react-router'
import { useEffect, useState } from 'react';
import { motion } from 'motion/react'
import { HeaderMap } from './HeaderMap';
import { HeaderMapMobile } from './HeaderMapMobile';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}>

      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        <motion.a
          href='#'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='text-2xl font-bold tracking-tighter'
        >
          BC
          <span className='text-accent'>.</span>
        </motion.a>

        <HeaderMap isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks}/>
        
        <button className="md:hidden text-white" onClick={() =>
          setIsOpen(!isOpen)
        }>
          {isOpen ? <FaTimes className='text-[20px] cursor-pointer hover:scale-110'/> : <FaBars className='text-[20px] cursor-pointer hover:scale-110'/>}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-b border-white/10 px-6 py-8"
        >
          <HeaderMapMobile navLinks={navLinks}/>
        </motion.div>
      )}
    </nav>
  );
}