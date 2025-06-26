import { Project, Skill, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 'shortbit',
    title: 'ShortBit URL Shortener',
    description: 'Modern URL shortener with analytics and custom domains',
    longDescription: 'A feature-rich URL shortening service with real-time analytics, custom domains, and QR code generation built with modern web technologies.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Docker'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/ashishkumar-17/url-shortener-react',
    liveUrl: 'https://incomparable-liger-aadad9.netlify.app',
    featured: true
  },
  {
    id: 'car-rental',
    title: 'Car Rental System',
    description: 'Robust full-stack application for booking and managing rental cars with secure authentication and real-time availability.',
    longDescription: 'A comprehensive Car Rental System designed to streamline the process of browsing, booking, and managing car rentals. It features user authentication, role-based access control, dynamic pricing, image uploads, and a smooth admin interface for managing vehicles and bookings efficiently.',
    image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?_gl=1*y6p9q4*_ga*MTMwMTc3NDI0MS4xNzUwOTE2OTE1*_ga_8JE65Q40S6*czE3NTA5MTY5MTQkbzEkZzEkdDE3NTA5MTcwMDkkajI4JGwwJGgw',
    technologies: ['React', 'Spring Boot', 'REST APIs', 'MySQL'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/ashishkumar-17/Car-Rental-System',
    featured: true
  },
  {
    id: 'income-expanse',
    title: 'Income Expense Manager',
    description: 'Track, manage, and analyze your personal finances with real-time expense monitoring.',
    longDescription: 'A user-friendly backend-powered application to record and categorize income and expenses. Built with Java and Spring Boot, it provides secure endpoints for managing financial transactions, generating summaries, and visualizing financial trends using integrated MySQL storage. Ideal for individuals seeking better control over their personal finances.',
    image: 'https://images.pexels.com/photos/5466793/pexels-photo-5466793.jpeg?_gl=1*1kpihj3*_ga*MTMwMTc3NDI0MS4xNzUwOTE2OTE1*_ga_8JE65Q40S6*czE3NTA5MTY5MTQkbzEkZzEkdDE3NTA5MTc1MzUkajE5JGwwJGgw',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS'],
    category: 'Backend',
    githubUrl: 'https://github.com/ashishkumar-17/Income-Expense-Manager',
    featured: true
  }
];

export const skills: Skill[] = [
  { name: 'Java', level: 90, category: 'Backend', icon: 'coffee' },
  { name: 'Spring Boot', level: 85, category: 'Backend', icon: 'server' },
  { name: 'React', level: 88, category: 'Frontend', icon: 'component' },
  { name: 'JavaScript', level: 82, category: 'Frontend', icon: 'code' },
  { name: 'MySQL', level: 80, category: 'Database', icon: 'database' },
  { name: 'PostgreSQL', level: 78, category: 'Database', icon: 'database' },
  { name: 'REST APIs', level: 75, category: 'Backend', icon: 'share-2' },
  { name: 'Docker', level: 72, category: 'Tools', icon: 'container' },
  { name: 'Maven', level: 85, category: 'Tools', icon: 'container' },
  { name: 'AI/ML', level: 70, category: 'AI/ML', icon: 'brain' },
  { name: 'Spring Security', level: 80, category: 'Backend', icon: 'shield' },
  { name: 'Json Web Token (JWT)', level: 76, category: 'Backend', icon: 'shield'}
];

export const experiences: Experience[] = [
  {
    id: 'current-role',
    title: 'Full-Stack Developer',
    company: 'Self-Directed Projects',
    duration: '2023 - Present',
    description: [
      'Developed AI-powered applications using Java, Spring Boot, and modern frontend frameworks',
      'Built scalable web applications with focus on user experience and performance optimization',
      'Implemented secure authentication systems and RESTful APIs',
      'Worked with cloud platforms and containerization technologies'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'AI/ML', 'Docker'],
    current: true
  }
];