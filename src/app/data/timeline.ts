export interface TimelineEntry {
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export const timeline: TimelineEntry[] = [
  {
    year: "2023",
    title: "Built first production website",
    subtitle: "Web Development",
    description:
      "Started the journey by building my first production-ready website. Learned the fundamentals of HTML, CSS, JavaScript, and responsive design.",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
  },
  {
    year: "2024",
    title: "Started Full Stack Internship",
    subtitle: "Connect For · Carevia Foundation",
    description:
      "Contributed to both frontend and backend of a live production platform serving an NGO. Collaborated in a team environment with regular sprint cycles, building UI components and assisting with backend logic and deployment.",
    tags: ["Full Stack", "Team Work", "Production"],
  },
  {
    year: "2025",
    title: "Built FRIDAY AI & Security Tools",
    subtitle: "AI Engineering & Cybersecurity",
    description:
      "Designed and built a multi-agent AI assistant (FRIDAY) with semantic memory, RAG, and tool orchestration. Began developing VulnScanner for web vulnerability assessment and started cybersecurity lab practice.",
    tags: ["AI/LLM", "RAG", "Python", "VulnScanner"],
  },
  {
    year: "2026",
    title: "Pivoting into SOC & Blue Team Security",
    subtitle: "Current Focus",
    description:
      "Building Wazuh SIEM home lab for security monitoring and detection engineering. Developing CTF challenges, practicing API security testing with crAPI, and working through TryHackMe and Hack The Box labs. Targeting SOC Analyst L1 roles.",
    tags: ["SOC Analyst", "SIEM", "CTF", "Blue Team"],
  },
]
