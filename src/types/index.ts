export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'Frontend' | 'Backend' | 'AI' | 'Full-Stack';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'AI/ML';
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}