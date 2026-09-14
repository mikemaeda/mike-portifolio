export const profile = {
  name: "Mike Maeda",
  role: "Computer Science & Data Analytics",
  school: "Alfred University",
  location: "Alfred, NY",
  email: "mhm5@alfred.edu",
  phone: "+1 (607) 454-2470",
  links: {
    github: "https://github.com/mikemaeda",
    linkedin: "https://www.linkedin.com/in/mike-maeda",
  },
};

export const hero = {
  headline: "Software Engineer.",
  subtitle:
    "I'm an undergraduate student at Alfred University studying Computer Science and Data Analytics, with a focus on backend engineering and applied AI.",
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
    org: "Alfred University, Inamori School of Engineering",
    context: "Python, TensorFlow",
    location: "Alfred, NY",
    period: "May 2026 - Present",
    points: [
      "Building a computer-vision pipeline that identifies electronic-waste components across more than 28,000 images at about 90% validation accuracy.",
      "Engineered an end-to-end Python inference and recovery-scoring workflow that improved research processing throughput by 50%.",
    ],
  },
  {
    role: "IT Systems Technician",
    org: "Alfred University",
    context: "Microsoft Entra ID, Identity & Access",
    location: "Alfred, NY",
    period: "Sep 2025 - Present",
    points: [
      "Support production identity and access systems for more than 2,000 users as one of 13 student consultants.",
      "Resolve hardware, software, MFA, account-recovery, and authentication incidents through root-cause troubleshooting and clear documentation.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Alfred University",
    context: "Excel, Data Analysis",
    location: "Alfred, NY",
    period: "Jan 2026 - Present",
    points: [
      "Facilitate Excel-based data analysis sessions for more than 30 students, covering structured formulas, what-if analysis, and financial modeling.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
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
    slug: "school-management-system",
    title: "School Management System",
    tagline: "Offline school administration",
    summary:
      "An offline-capable records system inspired by schools in Tanzania that still depend on paper-based administration and unreliable internet.",
    period: "2025",
    problem:
      "Growing up in Tanzania, I saw how unreliable internet and paper-based administration can slow down everyday school operations. I wanted the core records workflow to remain useful without a network connection.",
    build:
      "I built a Java and Python system backed by SQLite, using object-oriented design, automated CRUD workflows, and a normalized relational schema to manage student and administrative records locally.",
    impact: [
      "Manages more than 1,000 records without requiring internet access.",
    ],
    stack: ["Java", "Python", "SQL", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/mikemaeda/school-management-system", primary: true }],
    featured: true,
  },
  {
    slug: "alfred-rag-assistant",
    title: "Alfred RAG Assistant",
    tagline: "Grounded student-life answers",
    summary:
      "A retrieval-augmented assistant that answers Alfred student-life questions from a small, curated knowledge base and refuses unsupported questions.",
    period: "2026",
    problem:
      "Useful student information is scattered across documents, while general chatbots can answer confidently without evidence. I wanted a narrow assistant whose answers could be traced back to known sources.",
    build:
      "I built a Python RAG pipeline over a 10-document knowledge base, producing 47 embedded segments in ChromaDB and retrieving the top four sources for Groq's Llama 3.3 model. The system includes source attribution and strict refusal behavior.",
    impact: [
      "Evaluated at 80% response accuracy on a focused question set.",
    ],
    stack: ["Python", "ChromaDB", "Groq LLM", "Gradio"],
    links: [{ label: "GitHub", href: "https://github.com/mikemaeda/alfred-rag-assistant", primary: true }],
    featured: true,
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "Student-focused budgeting",
    summary:
      "A full-stack budgeting application with authentication, alerts, exports, and more than 20 REST endpoints.",
    period: "2026",
    problem:
      "Students managing tight budgets should not need a complicated spreadsheet or an oversized finance app to understand where their money is going.",
    build:
      "I built a Flask backend and JavaScript frontend with Google OAuth, session-based authentication, budget tracking, email notifications, CSV export, and a normalized SQLite schema.",
    impact: [
      "Built more than 20 REST endpoints across the application's backend.",
    ],
    stack: ["Python", "Flask", "JavaScript", "SQLite", "REST APIs", "OAuth"],
    links: [
      { label: "Live demo", href: "https://expense-tracker-app-mauve-gamma.vercel.app/", primary: true },
      { label: "GitHub", href: "https://github.com/mikemaeda/expense-tracker-.git" },
    ],
    featured: true,
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "C++", "C", "HTML / CSS"] },
  { label: "Frameworks & libraries", items: ["Flask", "React", "REST APIs", "PyTorch", "TensorFlow", "Scikit-learn", "NumPy"] },
  { label: "Databases & tools", items: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB", "Git", "Linux"] },
];

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
