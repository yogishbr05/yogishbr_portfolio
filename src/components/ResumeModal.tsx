import React, { useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Code2 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl } = useProfilePhoto();
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `=====================================================
YOGISH BR
Bengaluru, India | +91-7204558697 | yogishbr2004@gmail.com | linkedin.com/in/yogishbr
=====================================================

PROFESSIONAL SUMMARY
Aspiring Software Engineer and MCA graduate with a strong foundation in Python, HTML, CSS, JavaScript, and MySQL. Experienced in developing full-stack web applications through academic projects and internship experience. Skilled in object-oriented programming, database management, and problem solving, with a passion for building reliable software and continuously learning new technologies.

TECHNICAL SKILLS
- Programming Languages: Python, HTML5, CSS3, JavaScript (ES6+)
- Concepts: Object-Oriented Programming (OOP), 3-Tier Web Architecture, Responsive Design
- Frameworks & Libraries: Bootstrap 5, React.js, Flask
- Database: MySQL, SQL
- Developer Tools: Git, GitHub, VS Code, MS Excel
- Behavioural Skills: Analytical Thinking, Teamwork, Time Management, Leadership

EDUCATION DETAILS
Master of Computer Applications (MCA)
Jain College, Bengaluru City University | Bangalore | Completed: 2026 | CGPA: 8.56

Bachelor of Computer Applications (BCA)
Seshadripuram College, Tumkur City University | Tumkur | Completed: 2024 | CGPA: 8.71

PROFESSIONAL EXPERIENCE
Python Development Intern | Pentagon Space | Duration: 6 Months
- Gained hands-on experience in Python, HTML5, CSS3, JavaScript, and SQL through practical development work.
- Developed responsive and user-friendly web pages using HTML and CSS, while using Python for application logic and SQL for database operations.
- Worked with forms, layouts, data handling, and basic CRUD operations.
- Strengthened problem-solving skills and gained practical understanding of full-stack web development.

FEATURED PROJECTS
1. GROCERY STORE MANAGEMENT SYSTEM
- Developed a 3-tier Grocery Store Management System with user-friendly frontend, Python Flask backend, and MySQL database.
- Implemented application logic, inventory tracking, and transaction operations using Flask and MySQL.

2. DOOR DELIGHT – FOOD ORDERING PLATFORM
- Built a responsive food delivery web interface with interactive food cards, cart management, and checkout flows using HTML5, CSS3, Python, and MySQL.

3. CAR RENTAL MANAGEMENT SYSTEM
- Designed a vehicle rental portal with fleet cataloging, date pricing calculations, and reservation management using Python, SQL, and JavaScript.

CERTIFICATION
Python Full Stack Development Certification — 2026
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Yogish_BR_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0d101b] border border-white/[0.12] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/[0.08] bg-[#111524]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold text-white">Yogish B.R. — Verified Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors cursor-pointer"
              title="Download ATS plain text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ATS</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div ref={printRef} className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090b14] text-slate-200 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 space-y-3 text-center sm:text-left print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left">
                <div className="w-18 h-22 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-white/20 print:border-black/40 shadow-md shrink-0 bg-slate-900">
                  <img
                    src={photoUrl}
                    alt="Yogish B.R."
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
                    YOGISH BR
                  </h1>
                  <p className="text-sm font-medium text-purple-400 print:text-gray-700">
                    Python Full Stack Developer · MCA Graduate
                  </p>
                  <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                    MCA (CGPA 8.56) · BCA (CGPA 8.71) · Bengaluru, India
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-400 space-y-1 sm:text-right print:text-gray-700">
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>+91-7204558697</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>yogishbr2004@gmail.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                  <span>linkedin.com/in/yogishbr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 print:text-black flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-gray-800">
              Aspiring Software Engineer and MCA graduate with a strong foundation in Python, HTML, CSS, JavaScript, and MySQL. Experienced in developing full-stack web applications through academic projects and internship experience. Skilled in object-oriented programming, database management, and problem solving, with a passion for building reliable software and continuously learning new technologies.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 print:text-black flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-800">
              <div><strong className="text-white print:text-black">Programming Languages:</strong> Python, HTML, CSS, JavaScript</div>
              <div><strong className="text-white print:text-black">Frameworks & Libraries:</strong> Bootstrap, React, Flask</div>
              <div><strong className="text-white print:text-black">Concepts:</strong> Object-Oriented Programming (OOP), 3-Tier Architecture</div>
              <div><strong className="text-white print:text-black">Database:</strong> MySQL, SQL queries, relational joins</div>
              <div><strong className="text-white print:text-black">Developer Tools:</strong> Git, GitHub, VS Code, MS Excel</div>
              <div><strong className="text-white print:text-black">Behavioural Skills:</strong> Analytical Thinking, Teamwork, Leadership</div>
            </div>
          </div>

          {/* Education Details */}
          <div className="space-y-3 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 print:text-black flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education Details</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] print:border-gray-300">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Master of Computer Applications (MCA)</span>
                  <span className="font-mono text-purple-400 print:text-black">CGPA: 8.56</span>
                </div>
                <div className="text-xs text-slate-400 print:text-gray-600">
                  Jain College, Bengaluru City University | Bangalore | Completed: 2026
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] print:border-gray-300">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Bachelor of Computer Applications (BCA)</span>
                  <span className="font-mono text-purple-400 print:text-black">CGPA: 8.71</span>
                </div>
                <div className="text-xs text-slate-400 print:text-gray-600">
                  Seshadripuram College, Tumkur City University | Tumkur | Completed: 2024
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-2 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 print:text-black flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </h2>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] print:border-gray-300 space-y-2 text-xs">
              <div className="flex justify-between font-bold text-white print:text-black text-sm">
                <span>Python Development Intern</span>
                <span className="font-mono text-slate-400">Duration: 6 Months</span>
              </div>
              <div className="text-purple-400 print:text-gray-700 font-medium">Pentagon Space</div>
              <p className="text-slate-300 print:text-gray-800 leading-relaxed">
                Gained hands-on experience in Python, HTML5, CSS3, JavaScript and SQL through practical development work. Developed responsive and user-friendly web pages using HTML and CSS, while using Python for application logic and SQL for database operations. Worked with forms, layouts, data handling, and basic CRUD operations. Strengthened problem-solving skills and gained practical understanding of full-stack web development.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 print:text-black flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Projects</span>
            </h2>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] print:border-gray-300">
                <div className="font-bold text-white print:text-black">GROCERY STORE MANAGEMENT SYSTEM</div>
                <p className="text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                  Developed a 3-tier Grocery Store Management System with a user-friendly frontend, Python Flask backend, and MySQL database. Designed user interface using HTML, CSS, and JavaScript, implemented application logic and server-side operations using Flask, and managed data using MySQL.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] print:border-gray-300">
                <div className="font-bold text-white print:text-black">FRONT-END WEB DEVELOPMENT PROJECTS | HTML5 & CSS3</div>
                <p className="text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                  Developed multiple responsive web projects including a Food Ordering Website (Door Delight), a Car Rental Website with vehicle listings and booking, and a modern developer portfolio with clean forms, CSS styling, and responsive navigation.
                </p>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="space-y-2 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 print:text-black flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Certification</span>
            </h2>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] print:border-gray-300 text-xs text-slate-300 print:text-gray-800">
              <strong className="text-white print:text-black">Python Full Stack Development Certification — 2026</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
