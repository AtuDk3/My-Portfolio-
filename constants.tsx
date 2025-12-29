
import { SkillCategory, Project, ExperienceItem } from './types';
import medicalBookingImg from '/assets/img/medical-booking.png';
import tourBookingImg from '/assets/img/tour-booking.png';
import movieWebsiteImg from '/assets/img/movie-website.png';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['C#', 'Java', 'JavaScript', 'TypeScript'],
    colorClass: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Backend Technologies',
    icon: 'dns',
    skills: ['ASP.NET Core', '.NET 8', 'Spring Boot'],
    colorClass: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Architecture & Communication',
    icon: 'architecture',
    skills: ['Microservices', 'Clean Architecture', 'REST API', 'gRPC', 'SignalR', 'RabbitMQ', 'Ocelot'],
    colorClass: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['SQL Server', 'MySQL', 'MongoDB', 'Redis'],
    colorClass: 'bg-green-50 text-green-600',
  },
  {
    title: 'Frontend',
    icon: 'devices',
    skills: ['React', 'Angular', 'Redux Toolkit', 'Material UI'],
    colorClass: 'bg-pink-50 text-pink-600',
  },
  {
    title: 'DevOps & Tools',
    icon: 'cloud_sync',
    skills: ['Microsoft Azure', 'Git', 'GitHub', 'Agile/Scrum'],
    colorClass: 'bg-orange-50 text-orange-600',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Backend Intern',
    company: 'FPT Software',
    duration: '3 Months',
    points: [
      'Contributed to backend development with C# / .NET',
      'Developed and enhanced RESTful APIs',
      'Worked with SQL Server for database operations',
      'Collaborated with team members using Git',
      'Assisted in debugging and maintaining backend systems',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Online Medical Appointment Booking',
    description: 'Developed a microservices-based healthcare platform with a patient booking portal, supporting appointment scheduling, secure payments, and an AI-powered symptom analysis module.',
    role: 'Designed scalable microservices using .NET 8 and Clean Architecture. Built core services (AI, Doctor, Hospital), implemented event-driven communication (RabbitMQ, gRPC), and developed patient/admin SPAs.',
    tags: ['.NET 8', 'Microservices', 'React', 'RabbitMQ', 'Docker'],
    image: medicalBookingImg,
    codeUrl: 'https://github.com/Capstone-FA25-MABS',
  },
  {
    title: 'Tour Booking',
    description: 'Developed an online tour booking system supporting tour browsing, booking management, user authentication, and online payment.',
    role: 'Developed both frontend (React.js) and backend (.NET). Designed and managed the SQL Server database. Deployed the application on Microsoft Azure.',
    tags: ['.NET', 'React.js', 'SQL Server'],
    image: tourBookingImg,
    codeUrl: 'https://github.com/AtuDk3/Tour-Booking-Website',
  },
  {
    title: 'Movie Website',
    description: 'Developed a movie website that allows users to search, filter, and rate movies, providing detailed information such as descriptions, cast members, and user reviews.',
    role: 'Built the frontend using Angular. Developed RESTful APIs with Spring Boot. Integrated backend APIs with the frontend.',
    tags: ['Spring Boot', 'Angular', 'MySQL'],
    image: movieWebsiteImg,
    codeUrl: 'https://github.com/AtuDk3/MovieWebsiteJA/tree/tu',
  },
];
