
export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  colorClass: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  tags: string[];
  image: string;
  codeUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  points: string[];
}
