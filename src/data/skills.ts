export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

export interface SkillFolder {
  id: string;
  label: string;
  emoji: string;
  count: number;
  color: {
    bg: string;
    text: string;
    border: string;
    activeBg: string;
    dot: string;
    tagBg: string;
    tagText: string;
  };
  skills: Skill[];
}

export const skillFolders: SkillFolder[] = [
  {
    id: 'mobile',
    label: 'Mobile Dev',
    emoji: '📱',
    count: 5,
    color: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      activeBg: 'bg-blue-600',
      dot: 'bg-blue-500',
      tagBg: 'bg-blue-50',
      tagText: 'text-blue-700',
    },
    skills: [
      { name: 'Flutter', level: 'Expert' },
      { name: 'Dart', level: 'Expert' },
      { name: 'Swift / SwiftUI', level: 'Advanced' },
      { name: 'Kotlin / Android', level: 'Advanced' },
      { name: 'React Native', level: 'Intermediate' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    count: 5,
    color: {
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      border: 'border-pink-200',
      activeBg: 'bg-pink-600',
      dot: 'bg-pink-500',
      tagBg: 'bg-pink-50',
      tagText: 'text-pink-700',
    },
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Material UI', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    count: 5,
    color: {
      bg: 'bg-violet-50',
      text: 'text-violet-600',
      border: 'border-violet-200',
      activeBg: 'bg-violet-600',
      dot: 'bg-violet-500',
      tagBg: 'bg-violet-50',
      tagText: 'text-violet-700',
    },
    skills: [
      { name: 'Node.js / KoaJS', level: 'Advanced' },
      { name: 'FastAPI / Flask', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: '.NET / C#', level: 'Intermediate' },
      { name: 'PHP / CodeIgniter', level: 'Intermediate' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    count: 4,
    color: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      activeBg: 'bg-emerald-600',
      dot: 'bg-emerald-500',
      tagBg: 'bg-emerald-50',
      tagText: 'text-emerald-700',
    },
    skills: [
      { name: 'Firebase / Firestore', level: 'Expert' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    emoji: '☁️',
    count: 6,
    color: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      activeBg: 'bg-orange-500',
      dot: 'bg-orange-500',
      tagBg: 'bg-orange-50',
      tagText: 'text-orange-700',
    },
    skills: [
      { name: 'AWS', level: 'Intermediate' },
      { name: 'GCP', level: 'Intermediate' },
      { name: 'Azure', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Advanced' },
      { name: 'Jenkins', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    emoji: '🔧',
    count: 5,
    color: {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      border: 'border-gray-200',
      activeBg: 'bg-gray-700',
      dot: 'bg-gray-500',
      tagBg: 'bg-gray-100',
      tagText: 'text-gray-700',
    },
    skills: [
      { name: 'Figma', level: 'Advanced' },
      { name: 'Git / GitLab', level: 'Expert' },
      { name: 'Jira / Trello', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'SonarQube', level: 'Intermediate' },
    ],
  },
];

export const proficiencyBars = [
  { name: 'Flutter & Dart', level: 90, badge: 'Primary', color: 'pink' },
  { name: 'Firebase / Cloud', level: 85, badge: 'Backend', color: 'orange' },
  { name: 'React / TypeScript', level: 80, badge: 'Web', color: 'blue' },
  { name: 'Node.js / FastAPI', level: 75, badge: 'API', color: 'green' },
  { name: 'PostgreSQL / MongoDB', level: 70, badge: 'DB', color: 'purple' },
  { name: 'Docker / AWS / GCP', level: 65, badge: 'DevOps', color: 'gray' },
];
