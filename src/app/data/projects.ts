export interface Project {
  title: string
  type: string
  description: string
  tech: string[]
  status: "live" | "coming-soon"
  url: string
  gradient: string
  icon: string
}

export const flagshipProject: Project = {
  title: "FRIDAY",
  type: "Personal · AI Operating System",
  description:
    "Multi-agent AI assistant with semantic memory, local vector retrieval, tool orchestration, provider routing, autonomous workflows, and cloud deployment.",
  tech: ["React", "TypeScript", "Python", "AI/LLM", "RAG", "Docker"],
  status: "live",
  url: "https://friday-ai.saheerkhan.app/",
  gradient: "from-indigo-900 via-purple-900 to-slate-900",
  icon: "fa-microchip",
}

export const otherProjects: Project[] = [
  {
    title: "UV Sign",
    type: "Client · Business Website",
    description:
      "Premium mobile-first website for a UV printing company in Kozhikode, Kerala — designed to generate leads and showcase printing services with a modern high-contrast aesthetic.",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO"],
    status: "live",
    url: "https://www.uvsign.in/",
    gradient: "from-teal-800 to-emerald-700",
    icon: "fa-paintbrush",
  },
  {
    title: "Carevia Foundation",
    type: "Internship · NGO Platform",
    description:
      "Production-ready platform for a Section 8 NGO focused on empowering women and improving healthcare access. Full stack contribution during internship at Carevia Foundation.",
    tech: ["Full Stack", "HTML/CSS", "JavaScript"],
    status: "live",
    url: "https://www.carevia.net/",
    gradient: "from-zinc-900 via-slate-800 to-gray-900",
    icon: "fa-hand-holding-heart",
  },
  {
    title: "Bakersyde",
    type: "Personal · E-commerce",
    description:
      "Responsive static e-commerce website for a home bakery with clean product display, contact section, and an appetizing layout built with HTML5, CSS3, and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    status: "live",
    url: "https://saheer456.github.io/bakersyde/",
    gradient: "from-purple-900 via-purple-800 to-indigo-900",
    icon: "fa-bread-slice",
  },
  {
    title: "OpenArchitect Studio",
    type: "Personal · AI Software Engineer",
    description:
      "Open-source autonomous AI software engineer that runs locally, uses any model (Ollama/OpenAI), and executes code safely in Docker containers. Built with React, TypeScript, Python, and Tauri.",
    tech: ["React", "TypeScript", "Python", "Docker", "Tauri"],
    status: "coming-soon",
    url: "#",
    gradient: "from-blue-900 to-cyan-900",
    icon: "fa-brain",
  },
  {
    title: "VulnScanner v2.0",
    type: "Personal · Security Tool",
    description:
      "Full-stack web vulnerability scanner with 13 scanning modules, weighted risk scoring engine, automated attack report generation, and PDF export. Built with Python, FastAPI, and JavaScript.",
    tech: ["Python", "FastAPI", "HTML/CSS", "JavaScript"],
    status: "coming-soon",
    url: "#",
    gradient: "from-red-900 to-rose-900",
    icon: "fa-bug",
  },
  {
    title: "VulnScan",
    type: "Academic · Final Year Project",
    description:
      "Flask-based vulnerability scanner that detects SQL injection, XSS, and missing security headers, with an interactive Chart.js dashboard and severity filtering. Built with Python and BeautifulSoup.",
    tech: ["Python", "Flask", "BeautifulSoup", "Chart.js"],
    status: "coming-soon",
    url: "#",
    gradient: "from-emerald-900 to-green-800",
    icon: "fa-shield",
  },
  {
    title: "ZeroLogic",
    type: "Personal · Learning Platform",
    description:
      "Mobile-first Python learning platform with interactive lessons, code playground, progress tracking, analytics, and Supabase-powered authentication. Built with React, Vite, and Monaco Editor.",
    tech: ["React", "Supabase", "Vite", "Monaco Editor"],
    status: "live",
    url: "https://saheer456.github.io/Zerologic/",
    gradient: "from-slate-900 to-blue-900",
    icon: "fa-laptop-code",
  },
]
