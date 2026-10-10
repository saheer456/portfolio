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
  title: "Wazuh SIEM Home Lab",
  type: "Personal · Blue Team · Security Monitoring",
  description:
    "Local SIEM environment for centralized security monitoring, endpoint telemetry, alert investigation, and detection engineering. Built with Wazuh, Docker, and Kali Linux.",
  tech: ["Wazuh", "Docker", "Kali Linux", "SIEM", "Detection Rules", "Log Analysis"],
  status: "coming-soon",
  url: "https://github.com/saheer456",
  gradient: "from-emerald-950 via-teal-900 to-slate-900",
  icon: "fa-shield-halved",
}

export const otherProjects: Project[] = [
  {
    title: "The Ringmaster's Ledger",
    type: "Personal · CTF Challenge · Web Exploitation",
    description:
      "Hard (500 pts) multi-stage CTF challenge featuring JWT JWK (jku) injection, role-based privilege escalation, SSRF through internal microservices, and sealed ledger credential discovery.",
    tech: ["Python", "Flask", "Docker", "JWT", "SSRF", "Nginx", "Redis"],
    status: "live",
    url: "https://github.com/saheer456/ctf",
    gradient: "from-amber-950 via-red-950 to-neutral-900",
    icon: "fa-flag",
  },
  {
    title: "VulnScan",
    type: "Academic · Vulnerability Scanner",
    description:
      "Web application vulnerability scanner detecting SQL injection, reflected XSS, and missing security headers with risk scoring (0–100) and an interactive Chart.js dashboard.",
    tech: ["Python", "Flask", "BeautifulSoup", "Chart.js", "Web Security"],
    status: "live",
    url: "https://github.com/saheer456/vuln_scanner",
    gradient: "from-red-950 via-rose-900 to-neutral-900",
    icon: "fa-bug",
  },
  {
    title: "API Security Lab (crAPI)",
    type: "Personal · API Security · Vulnerability Assessment",
    description:
      "Hands-on API security testing using crAPI in Docker. Focuses on BOLA/BFLA, authorization flaws, excessive data exposure, and business logic weaknesses using Burp Suite.",
    tech: ["Docker", "Burp Suite", "crAPI", "OWASP API Top 10"],
    status: "coming-soon",
    url: "https://github.com/saheer456",
    gradient: "from-purple-950 via-indigo-900 to-neutral-900",
    icon: "fa-plug",
  },
  {
    title: "FRIDAY",
    type: "Personal · Autonomous AI Operating System",
    description:
      "Multi-agent AI assistant with semantic memory, local vector retrieval, tool orchestration, provider routing, autonomous workflows, and cloud deployment.",
    tech: ["React", "TypeScript", "Python", "RAG", "Docker", "Cloudflare"],
    status: "live",
    url: "https://friday-ai.saheerkhan.app/",
    gradient: "from-indigo-950 via-purple-900 to-slate-900",
    icon: "fa-microchip",
  },
  {
    title: "ZeroLogic",
    type: "Personal · Interactive Learning Platform",
    description:
      "Mobile-first Python learning platform with interactive lessons, code playground, progress tracking, analytics, and Supabase-powered authentication.",
    tech: ["React", "Supabase", "Vite", "Monaco Editor"],
    status: "live",
    url: "https://saheer456.github.io/Zerologic/",
    gradient: "from-slate-900 to-blue-900",
    icon: "fa-laptop-code",
  },
  {
    title: "Carevia Foundation",
    type: "Internship · Production NGO Platform",
    description:
      "Production-ready platform for a Section 8 NGO focused on empowering women and improving healthcare access. Full stack contribution during internship at Carevia Foundation.",
    tech: ["Full Stack", "HTML/CSS", "JavaScript"],
    status: "live",
    url: "https://www.carevia.net/",
    gradient: "from-zinc-900 via-slate-800 to-gray-900",
    icon: "fa-hand-holding-heart",
  },
  {
    title: "UV Sign",
    type: "Client · Business Website",
    description:
      "High-contrast mobile-first website for a UV printing company in Kozhikode, Kerala — designed to generate client leads and showcase commercial signage services.",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO"],
    status: "live",
    url: "https://www.uvsign.in/",
    gradient: "from-teal-900 to-emerald-800",
    icon: "fa-paintbrush",
  },
]
