import { SKILLS } from '../../component/constants.js'
import { motion } from "motion/react";

export function SkillsSectionMap() {
  return (
    <div className='grid md:grid-cols-3 gap-12'>
      {SKILLS.map((skillGroup, i) => (
        <motion.div
          key={skillGroup.category}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: i*0.1}}
        >
          <h4 className='text-xl italic mb-8 border-b border-white/10 pb-4'>{skillGroup.category}</h4>
          <div className='flex flex-wrap gap-4'>
            {skillGroup.items.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{scale: 1.05}}
              className='glass px-6 py-4 rounded-2xl flex-1 min-w-[140px] text-center transition-colors hover:bg-white/10 border-white/10'
            >
              <span className='text-sm font-medium tracking-wide'>{skill}</span>
            </motion.div>
          ))}</div>

        </motion.div>
      ))}
    </div>
  );
}