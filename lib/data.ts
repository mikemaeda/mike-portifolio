// ============================================================
// Single source of truth for all site content.
// Edit copy here — never touch the components for content changes.
// ============================================================

export const profile = {
  name: "Mike Maeda",
  // Used in the page title / hero role line
  role: "Computer Science & Data Analytics",
  school: "Alfred University",
  location: "Alfred, NY",
  email: "mhm5@alfred.edu",
  phone: "+1 (607) 454-2470",
  links: {
    github: "https://github.com/mikemaeda",
    linkedin: "https://www.linkedin.com/in/mike-maeda",
    resume: "/resume.pdf",
  },
};

export const hero = {
  headline: "Hi, I'm Mike Maeda.",
  subtitle: "Computer Science & Data Analytics double major at Alfred University.",
  // One short, confident sentence — no stats, no storytelling.
  intro:
    "I build full-stack software and data tools, and I'm researching computer vision for e-waste recycling.",
};

export type Experience = {
  role: string;
  org: string;
  context: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Undergraduate Research Intern",
    org: "Inamori School of Engineering",
    context: "AI & Machine Learning",
    location: "Alfred, NY",
    period: "May 2026 - Present",
    points: [
      "Developing a computer-vision e-waste classification system using ML models to identify recyclable materials from electronic components, targeting a 40% improvement in sorting efficiency over manual methods.",
      "Building automated image-processing and data-analysis pipelines to extract material features from e-waste samples, cutting manual analysis time by ~50% and improving consistency of recovery decisions.",
    ],
  },
  {
    role: "Robotics Software Engineer",
    org: "FIRST Robotics Challenge",
    context: "Java · Control Systems · Sensor Integration",
    location: "Ramat HaSharon, Israel",
    period: "Aug 2023 - May 2025",
    points: [
      "Designed and implemented Java autonomous control systems using encoder feedback, IMU sensors, and control algorithms, improving navigation accuracy by 35% through iterative testing and calibration.",
      "Developed real-time sensor feedback loops integrating gyroscope and encoder data to optimize drivetrain responsiveness, reducing autonomous movement errors by 30% in competition.",
    ],
  },
  {
    role: "Resident Assistant",
    org: "Alfred University Residence Life",
    context: "Leadership · Mentorship",
    location: "Alfred, NY",
    period: "May 2026 - Present",
    points: [
      "Support a residential community through peer mentorship, conflict resolution, and event planning.",
      "Lead initiatives that promote student engagement, well-being, and academic success.",
    ],
  },
  {
    role: "Alumni Relations & Outreach Chair",
    org: "ColorStack, Alfred University Chapter",
    context: "Community · Professional Development",
    location: "Alfred, NY",
    period: "Jan 2026 - Present",
    points: [
      "Lead outreach connecting underrepresented computing students with mentorship, networking, and tech career opportunities.",
      "Drive professional-development initiatives across the chapter.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  // 2–3 line card description. Fuller problem/build/impact lives on the detail page.
  summary: string;
  period: string;
  problem: string;
  build: string;
  impact: string[];
  stack: string[];
  links: { label: string; href: string; primary?: boolean }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mood-compass",
    title: "Mood Compass",
    tagline: "Privacy-first mood tracking & gentle forecasting",
    summary:
      "A local-first wellness app where every mood check-in stays in the browser — no account, no cloud. Transparent forecasting and pattern detection, shipped with unit, component, and end-to-end tests.",
    period: "2026",
    problem:
      "Most mood apps demand accounts and ship your data to a server. I wanted a wellness tool that is genuinely private and explainable: no account, no cloud, no black-box predictions.",
    build:
      "A local-first React + TypeScript app (Vite) where every check-in is stored in the browser. Core logic (mood scoring, transparent forecasting, pattern detection, recommendation matching, and crisis-language safety checks) lives in a tested lib layer. Shipped with unit, component, and Playwright E2E tests plus CI.",
    impact: [
      "Fully client-side: data never leaves the browser; users can export to JSON or delete everything.",
      "Explainable forecasts with confidence labels, never presented as certain or diagnostic.",
      "Accessibility-minded: keyboard support, focus states, and reduced-motion handling.",
    ],
    stack: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "CI"],
    links: [
      { label: "Live demo", href: "https://moodpredictor.vercel.app", primary: true },
      { label: "GitHub", href: "https://github.com/mikemaeda/moodpredictor" },
    ],
    featured: true,
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "Full-stack personal finance platform",
    summary:
      "A full-stack finance platform with Google OAuth, a normalized SQLite backend, and 20+ CRUD operations. Includes SMTP email automation, CSV export, and a REST API, deployed to Vercel.",
    period: "Apr 2026",
    problem:
      "Personal budgeting tools are either bloated or insecure. I built a focused, deployable platform with real authentication and a proper relational backend.",
    build:
      "A Flask application with Google OAuth, secure sessions, and a normalized SQLite schema (users, expenses, categories, budgets) backing 20+ CRUD operations. Integrated SMTP email automation, CSV export, and a REST API, deployed to Vercel with environment-based config.",
    impact: [
      "8+ core features: OAuth auth, expense tracking, budget management, and account notifications.",
      "20+ CRUD operations over interconnected tables for scalable financial data.",
      "3 production services wired in: SMTP email, CSV export, and cloud deployment.",
    ],
    stack: ["Python", "Flask", "SQLite", "OAuth", "REST API", "Vercel"],
    links: [
      {
        label: "Live demo",
        href: "https://expense-tracker-app-mauve-gamma.vercel.app/",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/mikemaeda/expense-tracker" },
    ],
    featured: true,
  },
  {
    slug: "nyc-coffee-shop-sales-analysis",
    title: "NYC Coffee Shop Sales Analysis",
    tagline: "Statistical analysis of 17,000+ transactions",
    summary:
      "Cleaned and modeled 17,000+ retail transactions with regression to test a premium-pricing hypothesis (R² = 0.43). A reproducible workflow from raw data to a defensible insight.",
    period: "Nov - Dec 2025",
    problem:
      "Could real retail sales data justify a premium-pricing strategy? I set out to test the relationship between unit price and transaction value with statistical rigor.",
    build:
      "Cleaned and transformed a 17,000+ row Kaggle retail dataset, then ran regression modeling and exploratory feature analysis across multiple variables to build a reproducible statistical workflow.",
    impact: [
      "Identified a positive relationship between unit price and transaction value (R² = 0.43), supporting a premium-pricing strategy.",
      "Improved dataset consistency through structured cleaning and transformation.",
      "Produced a reproducible modeling workflow from raw data to insight.",
    ],
    stack: ["Python", "SQL", "Statistics", "Excel", "Data Viz"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mikemaeda/nyc-coffee-shop-sales-analysis",
        primary: true,
      },
    ],
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    tagline: "Java desktop information system",
    summary:
      "A Java desktop information system backed by a normalized SQLite database, automating records and attendance for 1,000+ academic entries through SQL CRUD operations.",
    period: "Oct - Nov 2025",
    problem:
      "Schools manage thousands of academic records by hand. I engineered a desktop system to automate records, attendance, and administrative workflows.",
    build:
      "A full-stack Java desktop application backed by a normalized relational SQLite database with automated SQL CRUD operations, designed for data integrity and scalability as record volume grows.",
    impact: [
      "Manages 1,000+ academic records with attendance tracking.",
      "~40% gain in administrative processing efficiency via workflow automation.",
      "Normalized schema enforces integrity and reduces redundancy.",
    ],
    stack: ["Java", "SQL", "SQLite", "Systems Design"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mikemaeda/school-management-system",
        primary: true,
      },
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C", "C++", "C#", "Scala"],
  },
  {
    label: "Frameworks & Web",
    items: ["React", "Flask", "FastAPI", "Node", "REST APIs", "HTML / CSS"],
  },
  {
    label: "AI / Data",
    items: ["Computer Vision", "Regression Modeling", "Statistics", "Data Modeling", "Pandas / Excel"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Git", "Docker", "Azure", "Linux"],
  },
];

// One-page anchors. Root-relative so they also work from the /projects/[slug] pages.
export const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

// Look up a single project by its URL slug. Used by the /projects/[slug] route.
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
