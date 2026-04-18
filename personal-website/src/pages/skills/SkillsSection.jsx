import { SkillsSectionMap } from "./SkillsSectionMap.jsx"

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3rem] font-bold text-accent mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Tools of the trade</h3>
        </div>

        <SkillsSectionMap />
      </div>
    </section>
  );
}