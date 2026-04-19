import { ExperienceMap } from './ExperienceMap.jsx';
import resumePdf from '../../component/Bryan Chen\'s Resume.pdf';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm uppercase tracking-[0.3rem] font-bold text-accent mb-6">Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Professional Journey
            </h3>
            <p className="text-white/60 max-w-sm mb-8">
              A track record of delivering high-quality web experiences across diverse industries.
            </p>
            <a
              href={resumePdf}
              download="Bryan-Chen-Resume.pdf"
              aria-label="Download Bryan Chen's Resume as a PDF"
              className="inline-flex items-center gap-2 text-md font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-accent hover:border-accent transition-all">
                Download Resume
                <span className='text-xs font-normal opacity-70'>(PDF, 78KB)</span>
              </a>
          </div>

          <ExperienceMap />
        </div>
      </div>

    </section>
  );
}
