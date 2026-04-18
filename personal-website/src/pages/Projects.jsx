import { motion } from "motion/react";
import { ProjectCard } from "./ProjectsCard.jsx"
import { PROJECTS } from "../component/constants.js";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div max-w-2xl>
            <h2 className="text-sm uppercase tracking-[0.3rem] font-bold text-accent">selected works</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              A collection of school projects
            </h3>
          </div>
          <div className="text-white/40 italic text-lg">
            2021-2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}