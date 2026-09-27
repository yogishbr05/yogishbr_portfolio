export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Front-End' | 'Python & DB';
  role: string;
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  architecture: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  liveInteractiveType?: 'grocery' | 'food' | 'rental';
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // percentage
  experience: string;
  highlight: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university: string;
  location: string;
  year: string;
  score: string;
  scoreType: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}
