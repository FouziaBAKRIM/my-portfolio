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
  /** The canonical URL, sitemap, robots file, and share tags all read this. */
  url: 'https://fouziabakrim.vercel.app',
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
  location: 'Casablanca, Morocco',
  linkedin: 'https://linkedin.com/in/fouzia-bakrim-204872210/',
  github: 'https://github.com/fouziabakrim',
  linkedinLabel: 'in/fouzia-bakrim-204872210',
  githubLabel: 'github.com/fouziabakrim',
  imageAlt: 'Fouzia Bakrim - Data Analyst',
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: "Hello, I'm",
  summary:
    'Data analyst with 4+ years turning messy operational data into governed KPIs and clear Power BI dashboards.',
  primaryCta: { label: 'View My Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
  followLabel: 'Follow',
  linkedinLabel: 'LinkedIn',
  githubLabel: 'GitHub',
  cvLabel: 'View CV',
};

export const cv = {
  title: 'Curriculum Vitae',
  file: '/cv.pdf',
  closeLabel: 'Close',
  downloadLabel: 'Download',
  loadingLabel: 'Loading CV…',
  errorLabel: 'The CV could not be displayed here. You can still download it.',
  zoomInLabel: 'Zoom in',
  zoomOutLabel: 'Zoom out',
  pageLabel: 'CV page',
};

export const carouselLabels = {
  previous: 'Previous',
  next: 'Next',
  goTo: 'Go to slide',
  hint: 'Use the left and right arrow keys to move between slides.',
  slide: 'Slide',
  of: 'of',
};

export const about = {
  eyebrow: 'About Me',
  title: 'Bridging Business Context & Data Engineering',
  quote:
    '"Data becomes truly powerful when rigorous engineering meets clear, human storytelling."',
  paragraphs: [
    [
      { text: 'I am a data analyst with a background in ' },
      { text: 'Big Data', emphasis: true },
      { text: ', ' },
      { text: 'Business Intelligence', emphasis: true },
      { text: ', and the ' },
      { text: 'Internet of Things', emphasis: true },
      {
        text: '. I turn complex operational data into clear KPIs and dashboards that business teams can act on.',
      },
    ],
    [
      {
        text: 'My work spans the full path from raw data to decision: cleaning and validating data in ',
      },
      { text: 'Python and SQL', emphasis: true },
      { text: ', modelling it for reporting, and building ' },
      { text: 'Power BI', emphasis: true },
      {
        text: ' dashboards. I care about reproducible pipelines, documented rules, and metrics that hold up in a business review.',
      },
    ],
  ] satisfies TextRun[][],
};

export const skills = {
  eyebrow: 'MY EXPERTISE',
  title: 'Core Capabilities & Toolkit',
  intro:
    'End-to-end capabilities spanning data modeling, analytical engineering, and visual intelligence.',
  groups: [
    {
      title: 'Programming & Data Analysis',
      description:
        'Writing clean, performant code to clean datasets, automate recurring routines, build schema validation pipelines, and perform machine learning segmentation.',
      icon: 'code',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Pandera', 'SQL'],
    },
    {
      title: 'Data Visualization & BI',
      description:
        'Transforming raw tables into multi-block, interactive Power BI dashboards built to contrast deterministic business logic against algorithmic machine learning clusters.',
      icon: 'bar_chart',
      tags: [
        'Power BI',
        'DAX',
        'Interactive Dashboards',
        'KPI Modeling',
        'Data Storytelling',
        'Excel',
      ],
    },
    {
      title: 'Databases & Data Engineering',
      description:
        'Relational schema design, dimensional modeling, automated ETL workflows, and continuous data pipeline management across production database environments.',
      icon: 'database',
      tags: ['SQL', 'SQL Server', 'PostgreSQL', 'ETL Pipelines', 'DataHub'],
    },
    {
      title: 'Machine Learning & Predictive Analytics',
      description:
        'Developing unsupervised clustering models, RFM customer segmentation pipelines, and predictive algorithms to unearth hidden operational patterns in enterprise data.',
      icon: 'bar_chart',
      tags: [
        'Scikit-Learn',
        'RFM Analysis',
        'K-Means Clustering',
        'Customer Segmentation',
        'Python',
      ],
    },
    {
      title: 'Data Governance & Quality Control',
      description:
        'Establishing enterprise metric standards, implementing schema validation rules, writing functional specifications, and conducting system reliability testing.',
      icon: 'database',
      tags: [
        'Data Quality Assurance',
        'DataHub',
        'Schema Validation',
        'Functional Specifications',
        'System Testing',
      ],
    },
    {
      title: 'Analytics Engineering & Developer Tools',
      description:
        'Managing collaborative codebase repositories, configuring deployment environments, and maintaining clean, version-controlled developer workflows.',
      icon: 'code',
      tags: ['Git', 'GitHub', 'Cursor', 'VS Code', 'Vercel', 'Linux/Bash'],
    },
  ] satisfies SkillGroup[],
  toolbox: {
    eyebrow: 'MY TOOLBOX',
    title: 'Technologies & Tools',
    intro: 'Industry-standard technologies applied in production environments.',
    tools: [
      { mark: 'Py', label: 'Python' },
      { mark: 'SQL', label: 'SQL Server' },
      { mark: 'BI', label: 'Power BI' },
      { mark: 'DAX', label: 'DAX Modeling' },
      { mark: 'Pg', label: 'PostgreSQL' },
      { mark: 'Tab', label: 'Tableau' },
      { mark: 'Git', label: 'Git & GitHub' },
    ] satisfies Tool[],
  },
};

export const projectsSection = {
  eyebrow: 'SELECTED WORK',
  title: 'Featured Projects',
  intro:
    'Three case studies that mirror the work on my CV — from controlled ingestion to decision-ready dashboards.',
  fieldLabels: {
    context: 'Context',
    role: 'Role',
    dataset: 'Dataset & scale',
    approach: 'Approach',
    result: 'Result',
    tools: 'Tools',
  },
};

export const projects: Project[] = [
  {
    category: 'CUSTOMER ANALYTICS',
    caseNumber: 'Case Study 01',
    title: 'RFM Customer Segmentation',
    context:
      'Commercial teams needed a shared view of which customers drive revenue and which are drifting away.',
    role: 'Defined the RFM scoring rules with business stakeholders, prepared the transaction data, and built the reporting layer.',
    dataset:
      'E-commerce transaction history, cleaned and deduplicated in Python with Pandas and NumPy.',
    approach:
      'Scored every customer on recency, frequency, and monetary value, grouped them into actionable segments, and delivered the results in a Power BI dashboard.',
    result:
      'Gave stakeholders a repeatable way to target high-value segments and run churn-reduction campaigns instead of one-off list pulls.',
    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'RFM Analysis',
      'Power BI',
      'Customer Segmentation',
    ],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/FouziaBAKRIM/rfm-customer-segmentation',
      },
    ],
  },
  {
    category: 'DATA ENGINEERING & QUALITY',
    caseNumber: 'Case Study 02',
    title: 'Automated Ingestion & Quality Control',
    context:
      'Multiple source systems delivered heterogeneous files whose formats, data types, and values drifted between runs.',
    role: 'Owned the pipeline design, the validation rules, and the handover documentation for the data team.',
    dataset:
      'Multi-source operational data, including CSV exports and relational tables.',
    approach:
      'Built a Python and SQL pipeline that standardized incoming files and applied automated controls for anomalies, data types, outliers, and duplicates.',
    result:
      'Each load now fails fast on bad records and surfaces quality issues before they reach reporting, replacing manual spot checks.',
    tags: [
      'Python',
      'SQL',
      'ETL',
      'Data Quality',
      'Data Validation',
      'DataHub',
    ],
    links: [{ label: 'Request walkthrough', href: '#contact' }],
  },
  {
    category: 'BI & REPORTING',
    caseNumber: 'Case Study 03',
    title: 'Retail Sales & Profitability Analysis',
    context:
      'Store performance was reported in scattered spreadsheets, making margin trends hard to compare across locations.',
    role: 'Cleaned and modeled the sales data, then designed and published the Power BI report for business users.',
    dataset:
      'Multi-store retail sales and cost data covering products, customers, and time periods.',
    approach:
      'Built a star-schema model in SQL, automated the cleaning steps in Python, and created drill-down dashboard views for margin and customer segments.',
    result:
      'Replaced static monthly extracts with a single report that lets managers compare store profitability and spot margin leaks by product and period.',
    tags: ['Python', 'Pandas', 'SQL', 'Power BI', 'Data Modeling', 'DAX'],
    links: [{ label: 'Request walkthrough', href: '#contact' }],
  },
];

export const experienceSection = {
  eyebrow: 'CAREER MILESTONES',
  title: 'Professional Journey',
  intro:
    'Proven track record across data analysis, business analysis, data governance, and machine learning.',
};

export const experience: TimelineItem[] = [
  {
    date: 'Nov 2024 – Sep 2026',
    title: 'Data Analyst – Freelance Projects',
    organization: 'Independent Data Projects • Casablanca, Morocco',
    badge: 'Freelance',
    points: [
      'Gathered and formalized analytical requirements from business stakeholders to structure key performance indicators (KPIs).',
      'Audited, cleaned, and validated data quality (SQL, Python) before integration into decision-making tools.',
      'Designed custom interactive dashboards (Power BI) to monitor commercial and operational performance.',
    ],
    tags: ['Power BI', 'SQL', 'Python', 'KPI Definition', 'Data Quality'],
  },
  {
    date: 'Jul 2022 – Oct 2024',
    title: 'Programmer Analyst',
    organization: 'SBS Data Factory • Casablanca, Morocco',
    badge: 'Full-Time',
    points: [
      'Business/Technical Liaison: Gathered, analyzed, and translated functional requirements into technical specifications for deploying DataHub-based application solutions.',
      'Data Governance & Quality: Defined custom business rules to improve data quality, reference-data tracking, and client-data traceability.',
      'Validation & Acceptance Testing: Designed and executed unit, integration, and functional acceptance test plans to ensure deliverable compliance.',
      'Change Management & Support: Led validation workshops and trained internal and client teams to ensure rapid tool adoption.',
    ],
    tags: [
      'DataHub',
      'Data Governance',
      'SQL',
      'Functional Testing',
      'Change Management',
    ],
  },
  {
    date: 'Feb 2022 – Jun 2022',
    title: 'Data Scientist',
    organization: 'Kodlab • Casablanca, Morocco',
    badge: 'Internship',
    points: [
      "Scoping & Automation: Analyzed the Recruitment department's needs and wrote the specifications for automating CV parsing.",
      'AI Pipeline & Acceptance Testing: Developed and functionally validated a Machine Learning classification pipeline, reducing application-processing time.',
    ],
    tags: ['Python', 'Machine Learning', 'NLP', 'CV Parsing'],
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
    date: '2020 – 2022',
    title: "Master's in Big Data and Internet of Things",
    organization:
      'ENSAM — École Nationale Supérieure d’Arts et Métiers • Casablanca, Morocco',
    badge: 'Research Master',
    summary:
      'Relevant coursework: distributed computing, data pipeline orchestration, cloud architectures, and machine learning models.',
  },
  {
    date: '2019 – 2020',
    title: "Professional Bachelor's in Business Intelligence",
    organization: 'EST — École Supérieure de Technologie • Oujda, Morocco',
    badge: "Bachelor's Degree",
    summary:
      'Relevant coursework: dimensional modeling (star and snowflake schemas), relational database engines, and ETL processes.',
  },
  {
    date: '2017 – 2019',
    title: 'BTS in Information Systems Development',
    organization: 'Lycée Technique Lalla Khadija • Dakhla, Morocco',
    badge: 'BTS Diploma',
    summary:
      'Relevant coursework: software development fundamentals, procedural and object-oriented programming, and relational database management.',
  },
];

export const contact = {
  eyebrow: 'GET IN TOUCH',
  title: "Let's Connect",
  status: 'Open to Work • Data Analyst',
  closing:
    'Open to data analyst and business intelligence roles in Morocco or remote. Email is the best way to reach me.',
  copyright: 'Fouzia Bakrim. All rights reserved.',
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
