import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Car, 
  Code2, 
  HeartHandshake 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { photoUrl } = useProfilePhoto();
  const highlights = [
    {
      title: 'Full Stack Engineering Mindset',
      desc: 'Experienced in developing 3-tier applications from responsive HTML5/CSS3 frontend layouts to Python Flask business logic and MySQL relational databases.'
    },
    {
      title: 'Strong Academic Foundations',
      desc: 'Completed MCA (CGPA 8.56) from Jain College, Bangalore and BCA (CGPA 8.71) from Seshadripuram College, Tumkur, maintaining top academic consistency.'
    },
    {
      title: 'Practical Internship Experience',
      desc: '6 months of hands-on internship at Pentagon Space, building CRUD web applications, form validation logic, and modular database interactions.'
    },
    {
      title: 'Object-Oriented Programming & Clean Code',
      desc: 'Firm grasp of OOP principles (inheritance, polymorphism, encapsulation), modular design patterns, and collaborative Git version control.'
    }
  ];

  const interests = [
    { icon: Code2, label: 'Python & Web Development' },
    { icon: Terminal, label: 'Full-Stack Architecture & Clean Code' },
    { icon: Cpu, label: 'Database Design & Optimization' },
    { icon: Car, label: 'Automotive & Smart Tech' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-primary">Yogish B.R.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Passionate software developer combining strong academic foundations with practical full-stack web engineering experience.
          </p>
        </div>

        {/* Main 2-column Bento / Glassmorphic layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Detailed Bio Card (7 columns) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Dedicated Software Engineer & Problem Solver
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an aspiring Software Engineer and MCA graduate based in Bengaluru, India. With an intensive background in Python, modern web technologies (HTML5, CSS3, JavaScript, React), and MySQL, I build functional, responsive, and aesthetically refined digital experiences.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                During my 6-month internship at Pentagon Space, I worked extensively with real-world software modules, crafting responsive interfaces, structuring server-side Flask logic, and executing efficient SQL queries. I thrive on building reliable systems, solving complex challenges, and continually mastering emerging technologies.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Details Bar */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-slate-200">Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-200">MCA (8.56 CGPA) · BCA (8.71 CGPA)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-200">Pentagon Space Intern</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card, Key Metrics, Interests & Philosophy (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Profile Intro Badge with Photo */}
            <div className="glass-panel p-4 sm:p-5 rounded-3xl border border-white/[0.08] flex items-center gap-4 bg-gradient-to-br from-purple-950/20 via-[#111528] to-[#0d101d]">
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden border border-purple-500/30 shrink-0 shadow-lg bg-slate-900 group">
                <img
                  src={photoUrl}
                  alt="Yogish B.R."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white text-base sm:text-lg truncate">Yogish B.R.</h4>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                    Active
                  </span>
                </div>
                <p className="text-xs text-purple-300 font-medium truncate">
                  Python Full Stack & Frontend Engineer
                </p>
                <p className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0 inline" />
                  <span>Bengaluru, Karnataka, India</span>
                </p>
                <div className="pt-1 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">MCA 8.56</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">BCA 8.71</span>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] space-y-4">
              <h4 className="text-base font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Quick Snapshot</span>
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Current Role</span>
                  <span className="text-white font-medium">Python Full Stack Developer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Highest Education</span>
                  <span className="text-white font-medium">MCA (Master of Computer Apps)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Primary Tech Stack</span>
                  <span className="text-white font-mono text-xs">Python · Flask · MySQL · HTML/CSS/JS</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Availability</span>
                  <span className="text-emerald-400 font-medium">Immediate / Full-Time</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-white font-medium">English, Kannada, Hindi</span>
                </div>
              </div>
            </div>

            {/* Core Interests & Passions Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] space-y-4">
              <h4 className="text-base font-semibold text-white flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-cyan-400" />
                <span>Interests & Exploration</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] transition-colors flex items-center gap-2.5"
                    >
                      <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-slate-200 leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
