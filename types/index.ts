export type TextRun = {
  text: string;
  emphasis?: boolean;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: 'code' | 'bar_chart' | 'database';
  tags: string[];
};

export type Tool = {
  mark: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectTagGroup = {
  label: string;
  tags: string[];
};

export type Project = {
  category: string;
  caseNumber: string;
  title: string;
  summary: string;
  context: string;
  role: string;
  dataset: string;
  approach: string;
  result: string;
  icon: 'code' | 'bar_chart' | 'database';
  tagGroups: ProjectTagGroup[];
  image?: ProjectImage;
  links: ProjectLink[];
};

export type TimelineItem = {
  date: string;
  title: string;
  organization: string;
  badge: string;
  points?: string[];
  summary?: string;
  tags?: string[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
  title?: string;
  external?: boolean;
  icon: 'email' | 'linkedin' | 'github' | 'location';
};
