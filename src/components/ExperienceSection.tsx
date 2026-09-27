import React from 'react';
import { experienceData, certificationsData } from '../data/portfolioData';
import { Briefcase, Award, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0d16]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical hands-on software development experience gained through real-world internships, full-stack projects, and industry training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central hairline beam */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative flex flex-col sm:flex-row items-start group">
                {/* Timeline Marker Dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#121626] border-2 border-purple-500 items-center justify-center text-purple-400 shadow-lg shadow-purple-500/20 z-10 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Left side: Timeline info & company */}
                <div className="w-full sm:w-1/2 sm:pr-12 text-left sm:text-right mb-4 sm:mb-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300">
                    {exp.company}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center sm:justify-end gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{exp.location}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-cyan-400">{exp.type}</span>
                  </div>
                </div>

                {/* Right side: Detailed Achievements Card */}
                <div className="w-full sm:w-1/2 sm:pl-12">
                  <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-all text-left">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      <div className="text-xs font-semibold text-slate-200">
                        Key Responsibilities & Deliverables:
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used (Clean unboxed style) */}
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                      <span className="text-slate-500 font-mono text-[11px]">TOOLS:</span>
                      {exp.technologies.map((tech, idx) => (
                        <span key={tech} className="text-slate-300 font-medium">
                          {tech}{idx < exp.technologies.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Showcase Card */}
          <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-slate-900/40 border border-purple-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-purple-300 font-semibold">
                  {certificationsData[0].badge} · {certificationsData[0].year}
                </div>
                <h4 className="text-base font-bold text-white">
                  {certificationsData[0].title}
                </h4>
                <p className="text-xs text-slate-400">
                  {certificationsData[0].description}
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
