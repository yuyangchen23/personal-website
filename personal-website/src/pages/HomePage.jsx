import profileImg from '../assets/profile.PNG'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import './HomePage.css'
import { Header } from '../component/Header';


export function HomePage() {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='flex items-center gap-2 mb-6'>
            <div className='w-12 h-[1px] bg-accent' />
            <span className='text-us uppercase tracking-[0.3rem] font-bold text-accent '>Available for work</span>
          </div>

          <div className='text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60'>
            Bryan <br />
            Chen <br />
          </div>

          <div className='text-lg md:text-xl text-white/70 max-2-lg mb-10 leading-relaxed'>
            Glad you're here! I built this website for companies' and individuals who are interested in learning my background,
            skills, and experience. I'm currently seeking new opportunities where I can apply what I've learned, take on meaningful challenges,
            and continue growing both personally and professionally. Through this site, I hope to give you a better sense of who I am, the work I've done,
            and what I can contribute to a team.
          </div>

          <div className='flex flex-wrap gap-4'>
            <motion.a
              href='#projects'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-accent text-bg-dark px-8 py-4 rounded-full flex items-center gap-2 font-bold transition-shadow hover:shadow-xl hover:shadow-accent/20'>
              View resume <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='glass border-white/20 px-8 py-4 rounded-full font-medium transition-colors hover:bg-white/10'>
              Let's get in touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.8, rotate: -5}}
          animate={{opacity: 1, scale: 1, rotate: 0}}
          transition={{duration: 1.2, ease: [0.6, 1, 0.3, 1], delay:0.2}}
          className='relative hidden lg:block'
        >
          <div className='aspect-11/12 rounded-[32px] overflow-hidden shadow-2xl relative z-10 border border-white/20'>
            <img 
              src={profileImg} 
              alt="Portrait" 
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-linear-to-t from-bg-dark/40 to-transparent'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}