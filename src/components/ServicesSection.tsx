import React from 'react';
import { servicesData } from '../data/portfolioData';
import { 
  Sparkles, 
  Layout, 
  Server, 
  Layers, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenResume: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenResume }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return Layout;
      case 'server':
        return Server;
      case 'layers':
        return Layers;
      case 'database':
        return Database;
      default:
        return Cloud;
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#090c15]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Services & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & <span className="gradient-text-primary">What I Offer</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-standard full-stack web engineering, API design, responsive frontend architecture, and relational database implementation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((svc) => {
            const Icon = getIcon(svc.icon);
            return (
              <div
                key={svc.id}
                className="glass-panel glass-panel-hover p-7 rounded-3xl border border-white/[0.08] flex flex-col justify-between space-y-5 text-left group"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                      {svc.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 9: Professional Resume CTA Card */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-white/[0.12] p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                Ready to contribute from Day 1
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Interested in working together?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am actively seeking software engineering and full-stack developer roles in Bengaluru or remote. Explore my verified resume or reach out directly to discuss potential opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Download Resume
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
