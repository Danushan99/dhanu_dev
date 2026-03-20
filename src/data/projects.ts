import Bidgo from '../assets/bidgo.png';
import Ebird from '../assets/ebird.png';
import Student from '../assets/student.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  category: 'mobile' | 'web' | 'fullstack';
}

export const projects: Project[] = [
  {
    id: 'bidgo',
    title: 'BidGo — Ride-Hailing App',
    description: 'Cross-platform ride-hailing service app with real-time tracking and driver matching.',
    longDescription:
      'Developed a Flutter-based cross-platform app for a ride-hailing service. Led UI development and REST API integration for an optimized user experience across iOS and Android.',
    image: Bidgo,
    techStack: ['Flutter', 'Dart', 'MySQL', 'REST API', 'GitHub Actions'],
    liveUrl: null,
    githubUrl: 'https://gitlab.com/Codevita_pvt_ltd/accelero_logistics_customer_mobileapp',
    featured: true,
    category: 'mobile',
  },
  {
    id: 'ebird',
    title: 'E-Bird — Ticket Management System',
    description: 'Enterprise train ticket management system with .NET backend and multi-platform frontend.',
    longDescription:
      'Built an enterprise application for train ticket management comprising a .NET Web API backend, Java/Kotlin Android app, and ReactJS web portal with real-time booking features.',
    image: Ebird,
    techStack: ['.NET', 'C#', 'ASP.NET Web API', 'Kotlin', 'React'],
    liveUrl: null,
    githubUrl: 'https://github.com/Danushan99/Ead_Web_Api',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'smanager',
    title: 'S-Manager — Student Management System',
    description: 'Full-stack CRUD student management application with KoaJS backend and React frontend.',
    longDescription:
      'Built a Student Management System using KoaJS with full CRUD operations, a React frontend using Material UI, and a Node.js/KoaJS REST API with PostgreSQL persistence.',
    image: Student,
    techStack: ['React', 'KoaJS', 'Node.js', 'Material UI', 'REST API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Danushan99/Assignment_frontend',
    featured: false,
    category: 'web',
  },
];
