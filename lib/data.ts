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
    instagram: "https://www.instagram.com/mikehmaeda/?hl=en",
    x: "https://x.com/mikehmaeda?s=11",
    resume: "/resume.pdf?v=20260724",
  },
};

export const hero = {
  headline: "I build the machinery behind useful software.",
  subtitle:
    "Undergraduate Computer Science & Data Analytics double major at Alfred University.",
  // One short, confident sentence — no stats, no storytelling.
  intro:
    "I’m Mike — a backend-minded engineer and applied AI researcher who likes tracing a hard problem all the way from messy data to a system people can trust.",
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
    role: "Software Engineering Intern",
    org: "FlyRank AI",
    context: "Python backend services for AI products",
    location: "Remote",
    period: "Jun 2026 - Present",
    points: [
      "Engineering Python backend services and REST APIs across four AI-driven web applications.",
      "Designed six endpoints that reduced average response latency by 40%, while reusable modules cut duplicated code by 35%.",
      "Resolved 12 production issues through API tracing, unit tests, and regression testing.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Alfred University Inamori School of Engineering",
    context: "AI-driven electronic waste classification",
    location: "Alfred, NY",
    period: "May 2026 - Present",
    points: [
      "Researching AI-driven electronic waste classification, building a computer vision system that identifies materials like circuit boards and copper wiring to automate recycling workflows.",
      "Built a TensorFlow and MobileNetV2 transfer-learning classifier that currently reaches about 90% validation accuracy, supported by a backend data pipeline that cut research processing time by 50%.",
      "The work has shown me how much of an AI problem is a data problem before it is ever a modeling problem.",
    ],
  },
  {
    role: "Robotics Software Developer",
    org: "FIRST Robotics Challenge",
    context: "Java control software",
    location: "Ramat HaSharon, Israel",
    period: "Aug 2023 - May 2025",
    points: [
      "Engineered real-time backend control software in Java for a competitive robotics system, improving autonomous accuracy by 35% and cutting operational errors by 30%.",
      "Built autonomous decision-making logic and real-time sensor processing loops that integrated multiple sensor inputs simultaneously.",
      "This was my first real exposure to software that has to work correctly the first time, under a clock, with no chance to patch it mid-match.",
    ],
  },
  {
    role: "Teaching Assistant, Analytics 101",
    org: "Alfred University",
    context: "Data analysis and quantitative reasoning",
    location: "Alfred, NY",
    period: "Jan 2026 - Present",
    points: [
      "Guide 30+ students through Excel modeling, what-if analysis, and debugging complex spreadsheets.",
      "Teach students to interpret results and communicate quantitative findings clearly.",
    ],
  },
  {
    role: "ITS Student HelpDesk Consultant",
    org: "Alfred University",
    context: "Identity access and authentication systems",
    location: "Alfred, NY",
    period: "Sep 2025 - Present",
    points: [
      "Selected among 13 student consultants supporting Alfred University's production technical systems for a user base of over 2,000 people.",
      "Troubleshoot identity access and authentication issues using Azure Entra ID, separating config problems, user errors, and issues that need escalation to senior engineers.",
      "The role has taught me how to explain technical problems clearly to people who do not think in technical terms.",
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
    slug: "alfred-rag-assistant",
    title: "Alfred RAG Assistant",
    tagline: "Student-life retrieval assistant",
    summary:
      "A retrieval-augmented generation system that answers student-life questions, built and evaluated end-to-end, including diagnosing a retrieval bug that caused confident, wrong answers.",
    period: "2026",
    problem:
      "Student-life information is scattered across small documents, and generic chatbots can confidently answer with unsupported guesses. I wanted a grounded assistant that could answer from a known source set and refuse when the answer was not there.",
    build:
      "I built a RAG system that answers Alfred University student-life questions from a small, curated 10-document knowledge base. The pipeline chunks documents into 47 segments, embeds them with sentence-transformers, stores them in ChromaDB, and generates grounded answers with Groq's LLaMA 3.3 model, including a refusal mechanism so it says \"I don't know\" instead of guessing. The most interesting part wasn't building it, it was debugging it. One test question kept returning a confident, wrong answer with no errors anywhere. I had to trace backward through the entire pipeline, chunking, then embeddings, then retrieval, before finding a retrieval-recall failure: the right information existed in the vector store, it just wasn't being retrieved. Fixing it meant rethinking how I chunked content in the first place. It's the project that taught me that in AI systems, correctness depends on every step in the pipeline, not just the model at the end.",
    impact: [
      "Built and evaluated an end-to-end RAG pipeline from chunking to embedding to generation.",
      "Added refusal behavior so the assistant can say it does not know instead of inventing answers.",
      "Diagnosed a retrieval-recall failure by tracing the full pipeline instead of only tuning the model.",
    ],
    stack: ["Python", "ChromaDB", "Groq LLM", "Gradio"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mikemaeda/alfred-rag-assistant",
        primary: true,
      },
    ],
    featured: true,
  },
  {
    slug: "distilbert-sports-discourse-classifier",
    title: "DistilBERT Sports Discourse Classifier",
    tagline: "Model benchmarking and error analysis",
    summary:
      "Fine-tuned DistilBERT on a hand-built dataset, reached 87.5% accuracy, and used confusion matrices to uncover the model’s keyword shortcuts.",
    period: "2026",
    problem:
      "Sports discussion is not just about topic; it is also about argument style. I wanted to classify whether a comment was analysis, a hot take, or a reaction, then compare a small fine-tuned model against a much larger zero-shot baseline.",
    build:
      "I fine-tuned distilbert-base-uncased on a 212-example dataset I built by hand, training it to classify sports discussion by argument style rather than topic. It reached 87.5% accuracy and a 0.876 macro-F1 score. I benchmarked it against a zero-shot Llama-3.3-70B baseline on the same held-out set, then used confusion matrices and per-class error analysis to find where the smaller model relied on keyword shortcuts instead of argument structure.",
    impact: [
      "Reached 87.5% accuracy and 0.876 macro-F1 on a hand-built evaluation set.",
      "Benchmarked fairly against a stronger zero-shot Llama-3.3-70B baseline.",
      "Used confusion matrices and per-class error analysis to explain why the smaller model failed.",
    ],
    stack: ["Python", "PyTorch", "HuggingFace Transformers"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mikemaeda/ai201-project4-provenance-guard.git",
        primary: true,
      },
    ],
    featured: true,
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "Full-stack personal finance platform",
    summary:
      "A full-stack expense tracking app with Google OAuth, budget alerts, and 20+ REST endpoints, built and deployed live from scratch.",
    period: "Apr 2026",
    problem:
      "Personal budgeting tools are either bloated or insecure. I built a focused, deployable platform with real authentication, budget alerts, and a relational data model.",
    build:
      "A full-stack personal expense tracker with a Python/Flask backend and a JavaScript frontend, built and shipped entirely on my own. It supports Google OAuth with a graceful fallback to username/password login, budget tracking with automated email alerts, CSV export, and over 20 REST API endpoints backed by a normalized SQLite database. It's deployed live on Vercel. One tradeoff I made knowingly: Vercel's serverless environment means SQLite storage is temporary, which is fine for a demo but not for a real long-lived app, a production version would need to move to something like Postgres. I'd rather state that limitation clearly than pretend it isn't there.",
    impact: [
      "Implemented Google OAuth, fallback login, budget tracking, email alerts, and CSV export.",
      "Built 20+ REST endpoints backed by a normalized SQLite database.",
      "Deployed live while clearly documenting the serverless SQLite tradeoff.",
    ],
    stack: ["Python", "Flask", "JavaScript", "SQLite", "REST APIs", "OAuth", "Vercel"],
    links: [
      {
        label: "Live demo",
        href: "https://expense-tracker-app-mauve-gamma.vercel.app/",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/mikemaeda/expense-tracker-.git" },
    ],
    featured: true,
  },
  {
    slug: "fitfindr-multi-tool-agent",
    title: "FitFindr Multi-Tool Agent",
    tagline: "AI multi-tool product assistant",
    summary:
      "A deterministic multi-tool AI agent that chains catalog search, LLM styling, and caption generation through shared session state.",
    period: "2026",
    problem:
      "Shopping assistants need to coordinate multiple tools instead of producing a single unsupported answer.",
    build:
      "Built a deterministic orchestration loop in Python that coordinates catalog search, LLM-based reasoning, and generation through shared session state. Every tool boundary includes explicit failure handling and fallback behavior.",
    impact: [
      "Validated tool integrations and failure paths with an 8-test pytest suite.",
      "Designed predictable orchestration instead of relying on opaque agent behavior.",
    ],
    stack: ["Python", "Groq LLM", "Agent Orchestration", "Pytest"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mikemaeda/fitfindr-multi-tool-agent",
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
  {
    slug: "sales-data-analysis-pipeline",
    title: "Sales Data Analysis Pipeline",
    tagline: "Retail sales analysis workflow",
    summary:
      "A sales data analysis pipeline using NYC coffee shop transaction data to move from raw data toward defensible business insight.",
    period: "Nov - Dec 2025",
    problem:
      "Could real retail sales data justify a premium-pricing strategy? I set out to test the relationship between unit price and transaction value with statistical rigor.",
    build:
      "Cleaned and transformed a 17,000+ row retail dataset, then ran regression modeling and exploratory feature analysis across multiple variables to build a reproducible statistical workflow.",
    impact: [
      "Built a reproducible analysis flow from raw transaction data to business insight.",
      "Used regression modeling and exploratory analysis to test pricing assumptions.",
    ],
    stack: ["Python", "SQL", "Statistics", "Data Analysis"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mikemaeda/nyc-coffee-shop-sales-analysis/tree/main",
        primary: true,
      },
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "C++", "C#", "Scala", "HTML / CSS"],
  },
  {
    label: "Backend & Data",
    items: ["Flask", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    label: "AI / Data",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "HuggingFace Transformers"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Azure", "Linux"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
];

// Top-level routes for the poster-style landing page.
export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

// Look up a single project by its URL slug. Used by the /projects/[slug] route.
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
