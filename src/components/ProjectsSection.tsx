import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  CheckCircle,
  Eye
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Full Stack' | 'Front-End' | 'Python & DB'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Front-End', 'Python & DB'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world full-stack web applications, responsive frontend layouts, and database-backed management portals built with Python, Flask, MySQL, and modern JavaScript.
          </p>
        </div>

        {/* Filter Controls / Segmented Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid (Responsive 2-column or 1-column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              {/* Image Preview Container */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e121e] via-[#0e121e]/20 to-transparent" />
                
                {/* Floating Preview Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    Interactive Details & Demo
                  </span>
                </div>

                {/* Quiet Metadata Banner */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-purple-300 border border-white/[0.1] font-medium text-[11px]">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-slate-300 border border-white/[0.1] text-[11px]">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5 text-left">
                <div className="space-y-3">
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer flex items-center justify-between gap-2"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Clean unboxed technology items per constitution */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-slate-400 pt-1">
                    <span className="text-slate-500 font-mono text-[11px]">STACK:</span>
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300 font-medium">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Key Highlights list */}
                  <div className="pt-2 space-y-1.5 border-t border-white/[0.06]">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purple-600/20 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Live Demo & Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
