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
  icon: 'brackets' | 'chart' | 'database' | 'model' | 'shield' | 'code';
  tags: string[];
  tagClassName: string;
};

export type Tool = {
  mark: string;
  markClassName: string;
  label: string;
};

export type Project = {
  category: string;
  caseNumber: string;
  metricEyebrow: string;
  metricTitle: string;
  metricNote: string;
  metricStatus: string;
  statusDotClassName: string;
  title: string;
  description: string;
  tags: string[];
  footnote: string;
  href: string;
  linkLabel: string;
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
