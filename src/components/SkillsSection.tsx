import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Sparkles, 
  Code, 
  Layers, 
  Database, 
  Wrench, 
  CheckCircle, 
  Terminal,
  Zap
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Technical Skills', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Layers },
    { id: 'backend', label: 'Backend & Python', icon: Code },
    { id: 'database', label: 'Database & SQL', icon: Database },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0d16]/60">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-primary">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, modern frameworks, database management systems, and developer tools in my tech stack.
          </p>
        </div>

        {/* Interactive Filter Tabs / Segmented Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      <span>{skill.experience}</span>
                      <span className="mx-1.5 text-slate-600">·</span>
                      <span className="capitalize text-cyan-400">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-300 tabular-nums px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Animated Proficiency Bar */}
                <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-white/[0.05]">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>

                {/* Practical Highlight Text */}
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {skill.highlight}
                </p>
              </div>

              {/* Verified Indicator */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  Hands-on Tested
                </span>
                <span className="font-mono text-slate-500">Core Competency</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Architecture Summary Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 border border-white/[0.08] backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-xs uppercase font-semibold text-purple-400">Frontend Stack</div>
              <div className="text-sm font-medium text-slate-200">HTML5 · CSS3 · JavaScript · Bootstrap · React</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-semibold text-blue-400">Backend Core</div>
              <div className="text-sm font-medium text-slate-200">Python · Flask · OOP Design · RESTful APIs</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-semibold text-cyan-400">Database Layer</div>
              <div className="text-sm font-medium text-slate-200">MySQL · Relational Modeling · SQL Joins · CRUD</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-semibold text-emerald-400">Developer Tools</div>
              <div className="text-sm font-medium text-slate-200">Git · GitHub · VS Code · MS Excel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
