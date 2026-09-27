import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { ArrowDown, Code2, Database, Sparkles, Terminal, FileDown, Mail, Layers, Camera, RotateCcw, Check } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { photoUrl, isCustomPhoto, setPhotoFromFile, resetToDefaultPhoto } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await setPhotoFromFile(file);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };
  const roles = [
    'Python Full Stack Developer',
    'Front-End Web Engineer',
    'MCA Graduate & Software Builder',
    'MySQL & Database Specialist'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          // Pause when word complete
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-48 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none animate-float-delayed" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs (7 columns on desktop) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineer Roles</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Bengaluru & Remote</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <p className="text-slate-400 text-base sm:text-lg font-medium tracking-wide">
                Hi, I'm <span className="text-white font-semibold">{personalInfo.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Crafting Reliable <br />
                <span className="gradient-text-primary inline-block min-h-[1.2em]">
                  {displayText}
                  <span className="inline-block w-0.5 h-8 sm:h-12 bg-cyan-400 ml-1 translate-y-1 animate-pulse" />
                </span>
              </h1>
            </div>

            {/* Intro paragraph with strict text wrap balance */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              MCA graduate and motivated developer with 6 months of hands-on internship experience in full-stack Python web development, modern HTML5/CSS3/JavaScript responsive design, and MySQL database architectures. Passionate about object-oriented programming, clean code, and scalable web applications.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-lg shadow-purple-600/25 hover:shadow-purple-600/45 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <Layers className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-purple-500/40 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 flex items-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Key Metrics / Highlights Grid */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Showcase & Floating Tech Elements (5 columns on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative gradient glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#111422] border border-white/[0.12] p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Hidden file input for custom photo upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label="Upload custom profile photo"
                />

                {/* Profile Portrait Container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.08] shadow-inner group">
                  <img
                    src={photoUrl}
                    alt="Yogish B.R. - Python Full Stack Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Subtle scrim overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A10]/95 via-transparent to-black/20" />

                  {/* Top action controls (Upload/Change photo & status) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="pointer-events-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-emerald-300 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{isCustomPhoto ? 'Custom Photo' : 'Official Photo'}</span>
                    </span>

                    <div className="pointer-events-auto flex items-center gap-1.5">
                      {isCustomPhoto && (
                        <button
                          onClick={resetToDefaultPhoto}
                          className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="Reset to default photo"
                          aria-label="Reset to default photo"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-600/80 hover:bg-purple-600 backdrop-blur-md border border-purple-400/30 text-white text-[11px] font-medium transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                        title="Change or upload custom photo"
                        aria-label="Upload custom photo"
                      >
                        {uploadSuccess ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-300" />
                            <span>Updated!</span>
                          </>
                        ) : (
                          <>
                            <Camera className="w-3 h-3" />
                            <span>Change</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating role caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/[0.12]">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white text-sm">Yogish B.R.</div>
                        <div className="text-slate-300 text-[11px]">MCA 2026 · Bengaluru, India</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-purple-500/25 text-purple-300 font-mono text-[11px] font-semibold border border-purple-500/40">
                        Python · Full Stack
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Orbit Tech Badges */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Python</div>
                      <div className="text-[10px] text-slate-400">Flask · OOP</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Frontend</div>
                      <div className="text-[10px] text-slate-400">HTML · CSS · JS</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">MySQL</div>
                      <div className="text-[10px] text-slate-400">3-Tier DB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-down cue */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span>Explore Portfolio</span>
            <div className="w-8 h-12 rounded-full border border-white/[0.15] flex items-start justify-center p-1.5 group-hover:border-purple-400 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-purple-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
