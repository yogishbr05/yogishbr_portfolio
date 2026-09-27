import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text-primary">Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous computer science curriculum with strong emphasis on software engineering, database design, and object-oriented systems.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel glass-panel-hover p-7 rounded-3xl border border-white/[0.08] flex flex-col justify-between space-y-6 text-left group"
            >
              <div className="space-y-4">
                {/* Degree & Score Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-white font-mono tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {edu.score}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      {edu.scoreType} Score
                    </div>
                  </div>
                </div>

                {/* Degree Details */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-cyan-400 font-mono">{edu.year}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Focus Areas & Achievements</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-500">{edu.university}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-purple-400">
                  <Award className="w-3.5 h-3.5" /> First Class Distinction
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
