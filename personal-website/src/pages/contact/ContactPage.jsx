import { motion } from 'motion/react'
import { SocialLink } from './SocialLink';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react'

export function ContactPage() {
  return (
    <section id='contact' className='py-24 px-6 relative overflow-hidden'>
      <div className='max-w-4xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <div className='inline-block glass p-4 rounded-full text-accent mb-8 border-accent/20' >
            <MessageSquare size={32} />
          </div>

          <h2 className='text-4xl md:text-6xl font-bold italic tracking-tighter mb-8'>
            Let's build <br />
            something bigger
          </h2>

          <p className='text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed'>
            I'm always looking for new opportunities and challenges.
            Whether you have a specific project in mind or just want to chat, fell free to reach out!
            I'd love to build something that has a chance to make the world a little different.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <a
              href="mailto:bryanchen0923@gmail.com"
              className='group bg-accent text-bg-dark px-10 py-5 rounded-full flex items-center gap-3 font-bold transition-transform hover:scale-105'>
                <Mail size={20} />
                bryanchen0923@gmail.com
                <ArrowUpRight className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'/>
            </a>
            <div className='flex gap-4'>
              <SocialLink href='#' label='GitHub' />
              <SocialLink href="#" label='LinkedIn' />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-xl -z-10'></div>
    </section>
  );
}