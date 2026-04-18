export interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export const stats: Stat[] = [
  {
    label: 'Years of Experience',
    value: 3,
    suffix: '+',
    description: 'In professional software development',
  },
  {
    label: 'Projects Delivered',
    value: 12,
    suffix: '+',
    description: 'Production mobile & web apps',
  },
  {
    label: 'Flutter Apps',
    value: 7,
    suffix: '+',
    description: 'Cross-platform mobile applications',
  },
  {
    label: 'Happy Clients',
    value: 10,
    suffix: '+',
    description: 'Freelance and enterprise clients',
  },
];
