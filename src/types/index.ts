export interface Project {
  id: string;
  number: string;
  name: string;
  category: 'Full Stack Web Application' | 'Backend / Authentication' | 'Python Application';
  tagline: string;
  description: string;
  isFeatured?: boolean;
  status?: string;
  technologies: string[];
  keyFeatures: string[];
  architectureConcepts: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  hasFrontend: boolean;
  highlights?: string[];
  overviewDetailed: string;
  problemGoal: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  client: string;
  type: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  yearOrStatus: string;
  details?: string;
  score?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  topics: string[];
  verificationNote: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  secondaryTitle: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  github: string;
  linkedin: string;
  status: string;
}
