import { EXPERIENCE } from '../../component/constants.js'
import { motion } from "motion/react";

export function ExperienceMap() {
  return (
    <div className='lg:col-span-2 space-y-12'>
      {EXPERIENCE.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className='relative pl-8 border-l border-white/10'
        >
          <div className='absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_15px-rgba(45,212,191,0.5)]'></div>

          <div className='flex flex-col md:flex-row justify-between items-start mb-4 gap-2'>
            <div>
              <h4 className='text-xl font-bold'>{exp.position}</h4>
              <p className='text-accent font-medium'>{exp.company}</p>
            </div>
            <span className='text-sm font-mono text-white/40 glass px-3 py-1 rounded-full border-white/5'>
              {exp.period}
            </span>
          </div>

          <ul className='space-y-3 mb-6'>
            {exp.description.map((item, j) => (
              <li key={j} className='text-white/70 text-sm leading-relaxed flex gap-3'>
                <span className='text-accent mt-1.5 w-1.5 h-1.5 rounded-full shrink-0'></span>
                {item}
              </li>
            ))}
          </ul>

          <div className='flex flex-wrap gap-2 text-[12px] font-bold uppercase tracking-tighter'>
            {exp.skills.map(skill => (
              <span key={skill} className='text-white/40'>#{skill}</span>
            ))}
          </div>
        </motion.div>
      ))}

    </div>
  );
}