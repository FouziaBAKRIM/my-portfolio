import type {
  ContactChannel,
  NavLink,
  Project,
  SkillGroup,
  TextRun,
  TimelineItem,
  Tool,
} from '@/types';

export const siteConfig = {
  title: 'Fouzia Bakrim — Data Analyst',
  /**
   * TODO: replace this with the live address after the first Vercel deploy.
   * The title, description, sitemap, robots file, and share tags all read it.
   */
  url: 'https://TODO',
  description:
    'Fouzia Bakrim is a data analyst in Casablanca who turns complex data into meaningful insights through analysis, visualization, and data-driven solutions.',
  language: 'en',
  author: 'Fouzia Bakrim',
};

export const profile = {
  name: 'Fouzia Bakrim',
  jobTitle: 'Data Analyst',
  monogram: 'FB',
  email: 'fouziabakrim98@gmail.com',
  location: 'Casablanca, Maroc',
  linkedin: 'https://linkedin.com/in/fouzia-bakrim-204872210/',
  github: 'https://github.com/fouziabakrim',
  linkedinLabel: 'in/fouzia-bakrim',
  githubLabel: 'github.com/fouziabakrim',
  imageAlt: 'Fouzia Bakrim - Data Analyst',
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: "Hello, I'm",
  summary:
    'I turn complex data into meaningful insights through analysis, visualization and data-driven solutions.',
  primaryCta: { label: 'View My Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
  followLabel: 'Follow',
  linkedinLabel: 'LinkedIn',
  githubLabel: 'GitHub',
  cvLabel: 'Download CV',
  connectLabel: 'Connect:',
};

export const about = {
  eyebrow: 'About Me',
  title: 'Bridging Business Context & Data Engineering',
  quote:
    '"Data becomes truly powerful when rigorous engineering meets clear, human storytelling."',
  paragraphs: [
    [
      { text: 'With an advanced academic grounding in ' },
      { text: 'Big Data', emphasis: true },
      { text: ', the ' },
      { text: 'Internet of Things', emphasis: true },
      { text: ', and ' },
      { text: 'Business Intelligence', emphasis: true },
      {
        text: ', I focus on building reliable bridges between complex raw telemetries and clear, actionable executive strategy.',
      },
    ],
    [
      {
        text: 'My background centers around end-to-end data pipelines: transforming unstructured data, architecting high-performance SQL models, engineering ETL workflows, and authoring intuitive dashboards in ',
      },
      { text: 'Power BI', emphasis: true },
      {
        text: '. I prioritize reproducibility, clean architecture, and precision so every metric stands up to executive decision-making.',
      },
    ],
    [
      {
        text: 'Whether standardizing corporate metrics or streamlining data ingestion pipelines, my aim is always pragmatic: delivering clarity, reducing manual overhead, and driving data-informed decisions.',
      },
    ],
  ] satisfies TextRun[][],
};

export const skills = {
  eyebrow: 'MY EXPERTISE',
  title: 'Core Capabilities & Toolkit',
  intro:
    'End-to-end capabilities spanning data modeling, analytical engineering, and visual intelligence.',
  previousLabel: 'Previous Slide',
  nextLabel: 'Next Slide',
  groups: [
    {
      title: 'Programming & Data Analysis',
      description:
        'Writing clean, performant code to clean datasets, automate recurring routines, build schema validation pipelines, and perform machine learning segmentation.',
      icon: 'brackets',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Pandera', 'SQL'],
      tagClassName: 'px-3 py-1.5',
    },
    {
      title: 'Data Visualization & BI',
      description:
        'Transforming raw tables into multi-block, interactive Power BI dashboards built to contrast deterministic business logic against algorithmic machine learning clusters.',
      icon: 'chart',
      tags: [
        'Power BI',
        'DAX',
        'Interactive Dashboards',
        'KPI Modeling',
        'Data Storytelling',
        'Excel',
      ],
      tagClassName: 'px-3 py-1.5',
    },
    {
      title: 'Databases & Data Engineering',
      description:
        'Relational schema design, dimensional modeling, automated ETL workflows, and continuous data pipeline management across production database environments.',
      icon: 'database',
      tags: ['SQL', 'SQL Server', 'PostgreSQL', 'ETL Pipelines', 'Data Hub'],
      tagClassName: 'px-3.5 py-1.5',
    },
    {
      title: 'Machine Learning & Predictive Analytics',
      description:
        'Developing unsupervised clustering models, RFM customer segmentation pipelines, and predictive algorithms to unearth hidden operational patterns in enterprise data.',
      icon: 'model',
      tags: [
        'Scikit-Learn',
        'RFM Analysis',
        'K-Means Clustering',
        'Customer Segmentation',
        'Python',
      ],
      tagClassName: 'px-3 py-1.5',
    },
    {
      title: 'Data Governance & Quality Control',
      description:
        'Establishing enterprise metric standards, implementing schema validation rules, writing functional specifications, and conducting system reliability testing.',
      icon: 'shield',
      tags: [
        'Data Quality Assurance',
        'DataHub',
        'Schema Validation',
        'Functional Specifications',
        'System Testing',
      ],
      tagClassName: 'px-3 py-1.5',
    },
    {
      title: 'Analytics Engineering & Developer Tools',
      description:
        'Managing collaborative codebase repositories, configuring deployment environments, and maintaining clean, version-controlled developer workflows.',
      icon: 'code',
      tags: ['Git', 'GitHub', 'Cursor', 'VS Code', 'Vercel', 'Linux/Bash'],
      tagClassName: 'px-3.5 py-1.5',
    },
  ] satisfies SkillGroup[],
  toolbox: {
    eyebrow: 'MY TOOLBOX',
    title: 'Technologies & Tools',
    intro: 'Industry-standard technologies applied in production environments.',
    rows: [
      [
        {
          mark: 'Py',
          markClassName: 'font-mono text-[11px] font-bold text-amber-400',
          label: 'Python',
        },
        {
          mark: 'SQL',
          markClassName: 'font-mono text-[10px] font-bold text-sky-400',
          label: 'SQL Server',
        },
        {
          mark: 'BI',
          markClassName: 'font-mono text-[10px] font-bold text-yellow-400',
          label: 'Power BI',
        },
        {
          mark: 'DAX',
          markClassName: 'font-mono text-[10px] font-bold text-emerald-400',
          label: 'DAX Modeling',
        },
        {
          mark: 'Pg',
          markClassName: 'font-mono text-[10px] font-bold text-indigo-400',
          label: 'PostgreSQL',
        },
      ],
      [
        {
          mark: 'Tab',
          markClassName: 'font-mono text-[10px] font-bold text-teal-400',
          label: 'Tableau',
        },
        {
          mark: 'Git',
          markClassName: 'font-mono text-[10px] font-bold text-orange-400',
          label: 'Git & GitHub',
        },
      ],
    ] satisfies Tool[][],
  },
};

export const projectsSection = {
  eyebrow: 'SELECTED WORK',
  title: 'Featured Projects',
  inquireLabel: 'INQUIRE ABOUT CASE STUDIES',
  inquireHref: '#contact',
};

export const projects: Project[] = [
  {
    category: 'RETAIL INTELLIGENCE',
    caseNumber: 'Case Study 01',
    metricEyebrow: 'KEY PERFORMANCE LIFT',
    metricTitle: '+18.4% YoY Margin Visibility',
    metricNote: 'Executive Reporting Automated',
    metricStatus: '100% Reconciliation',
    statusDotClassName: 'bg-amber-400',
    title: 'Retail Store Sales & Profitability Analysis',
    description:
      'Performed data cleaning with Python Pandas, structured SQL storage routines, and developed an interactive Power BI dashboard tracking store margins and customer segments.',
    tags: ['Python', 'Pandas', 'SQL', 'Power BI', 'Data Modeling'],
    footnote: 'Completed Production Project',
    href: profile.github,
    linkLabel: 'View on GitHub',
  },
  {
    category: 'MACHINE LEARNING & ETL',
    caseNumber: 'Case Study 02',
    metricEyebrow: 'ORCHESTRATION & QUALITY',
    metricTitle: 'End-to-End Orchestrated Pipeline',
    metricNote: 'Pandera Schema Validated',
    metricStatus: 'K-Means Clustering',
    statusDotClassName: 'bg-emerald-400',
    title: 'E-Commerce Customer Segmentation Pipeline',
    description:
      'Engineered an end-to-end customer segmentation pipeline utilizing an orchestration script executing data cleaning, metrics generation, schema validation via Pandera, and K-Means behavioral clustering.',
    tags: [
      'Python',
      'Pandas',
      'Pandera',
      'Scikit-Learn',
      'SQL',
      'Machine Learning',
    ],
    footnote: 'Automated ML Workflow',
    href: profile.github,
    linkLabel: 'View on GitHub',
  },
  {
    category: 'IOT STREAMING & ANALYTICS',
    caseNumber: 'Case Study 03',
    metricEyebrow: 'SENSOR TELEMETRY',
    metricTitle: 'Real-Time Sensor Ingestion',
    metricNote: 'Multi-Metric Tracking',
    metricStatus: 'Dynamic Dashboards',
    statusDotClassName: 'bg-sky-400',
    title: 'IoT Athletic Activity & Physical Metrics Framework',
    description:
      'Designed an IoT athletic activity analysis framework collecting physical metrics via integrated Python processing and interactive Power BI visual dashboards.',
    tags: ['Python', 'IoT Data Streams', 'Power BI', 'Data Pipelines'],
    footnote: 'IoT Telemetry Processing',
    href: profile.github,
    linkLabel: 'View on GitHub',
  },
];

export const experienceSection = {
  eyebrow: 'CAREER MILESTONES',
  title: 'Professional Journey',
  intro:
    'Proven track record across data analysis, machine learning modeling, and engineering environments.',
};

export const experience: TimelineItem[] = [
  {
    date: 'JULY 2022 — OCT 2024',
    title: 'Analyste Programmeur',
    organization: 'SBS Data Factory / NeoXam • Casablanca',
    badge: 'Full-Time',
    points: [
      'Managed data integration and ETL workflows across transactional and staging environments.',
      'Authored complex SQL and Python transformations to standardize heterogeneous business records.',
      'Authored Power BI dashboards for executive reporting and maintained system runbooks.',
    ],
    tags: ['SQL Server', 'Python', 'ETL Workflows', 'Power BI'],
  },
  {
    date: 'FEB 2022 — JUNE 2022',
    title: 'Data Scientist',
    organization: 'Kodlab • Casablanca',
    badge: 'Internship',
    points: [
      'Developed machine learning models, predictive algorithms, and exploratory data analysis scripts in Python.',
      'Conducted exploratory data analysis (EDA) on real-world datasets, delivering clean visualization reports and statistical distributions.',
    ],
    tags: ['Python', 'Machine Learning', 'EDA', 'FastAPI'],
  },
  {
    date: 'ENGINEERING',
    title: 'Engineering Intern',
    organization: 'AFD.TECH Part of Accenture • Rabat',
    badge: 'Engineering Internship',
    points: [
      'Focused on KPI degradation modeling and automated technical workflow optimizations across network data pipelines.',
      'Built analytical summary reporting and pipeline integrity checks.',
    ],
    tags: ['Python', 'KPI Modeling', 'Analytics', 'Workflow Automation'],
  },
];

export const educationSection = {
  eyebrow: 'ACADEMICS',
  title: 'Education & Credentials',
  intro:
    'Strong foundational training in Big Data, IoT architecture, and enterprise intelligence.',
};

export const education: TimelineItem[] = [
  {
    date: '2020 — 2022',
    title: "Master's in Big Data and Internet of Things",
    organization: 'ENSAM Casablanca',
    badge: 'Master de Recherche',
    summary:
      'Specialized in distributed computing, data pipeline orchestration, cloud architectures, and machine learning models.',
  },
  {
    date: '2019 — 2020',
    title: "Professional Bachelor's in Business Intelligence",
    organization: 'EST Oujda',
    badge: 'Licence Pro',
    summary:
      'Core focus on dimensional modeling (Star and Snowflake schemas), relational database engines, and ETL processes.',
  },
  {
    date: '2017 — 2019',
    title: 'BTS in Information Systems Development',
    organization: 'Lycée Technique Lalla Khadija Dakhla',
    badge: 'BTS',
    summary:
      'Software development fundamentals, procedural and object-oriented programming, and relational database management.',
  },
];

export const contact = {
  eyebrow: 'GET IN TOUCH',
  title: "Let's Connect",
  status: 'Open to Work • Data Analyst',
  closing:
    '✦ Thank you for visiting my portfolio! Turning complex data into meaningful insights. ✦',
  copyright: '© 2025 Fouzia Bakrim. All rights reserved.',
  backToTop: 'Back to Top',
};

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    title: 'Send Email',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    title: 'LinkedIn Profile',
    external: true,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
    title: 'GitHub Profile',
    external: true,
    icon: 'github',
  },
  {
    label: 'Location',
    value: profile.location,
    icon: 'location',
  },
];
