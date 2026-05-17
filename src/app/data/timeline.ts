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
    title: "Built FRIDAY AI System",
    subtitle: "AI Engineering",
    description:
      "Designed and built a multi-agent AI assistant with semantic memory, RAG, tool orchestration, and provider routing. Integrated LLM-powered reasoning with local vector retrieval and cloud deployment.",
    tags: ["AI/LLM", "RAG", "Python", "TypeScript"],
  },
  {
    year: "2026",
    title: "Moving into AI Infrastructure & Cloud Security",
    subtitle: "Current Focus",
    description:
      "Deepening expertise in AI infrastructure, cloud security, and autonomous systems. Building security tools, exploring SIEM/SOC concepts, and preparing for TryHackMe/HTB certifications.",
    tags: ["AI Infrastructure", "Cloud Security", "Pentesting"],
  },
]
